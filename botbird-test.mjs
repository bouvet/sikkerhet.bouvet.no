// Logikktester for botbird-introen.
//
//   npm install jsdom --no-save
//   node botbird-test.mjs
//
// jsdom gjør ingen layout, så boksene til fuglene stappes inn for hånd. Det er
// derfor testen kan sjekke de utregnede koordinatene i flyturen uten nettleser.
// Den sier ingenting om hvordan det ser ut – flyturen må ses i en nettleser.
import { JSDOM } from 'jsdom';
import fs from 'fs';

const JS = fs.readFileSync(new URL('./assets/js/spor-bls.js', import.meta.url), 'utf8');
const TEKST = JSON.stringify({
  navn: 'Bouvet botbird', lukk: 'Lukk', sporMeg: 'Spør meg!',
  introMerkelapp: 'Ny på sikkerhet.bouvet.no', introTittel: 'Møt Bouvet botbird',
  introIngress: 'Ingress.', introRede: 'Redet.',
  introSporsmal: 'Still et spørsmål', introOk: 'Ok, skjønner',
});

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
let feil = 0;
const ok = (navn, b) => { console.log((b ? 'PASS  ' : 'FAIL  ') + navn); if (!b) feil++; };

async function lag({ reduceMotion = false, birdSynlig = true, lagret = null,
  warp = 'on', traceSvarer = true } = {}) {
  const dom = new JSDOM(
    `<!doctype html><html><body>
       <script type="application/json" id="spor-bls-tekst">${TEKST}</script>
       <div class="botbird" aria-hidden="true">
         <img class="botbird__bird" src="/img/botbird.png" alt="" width="100">
         <span class="botbird__nest"></span>
       </div>
     </body></html>`,
    { runScripts: 'outside-only', pretendToBeVisual: true, url: 'https://sikkerhet.bouvet.no/' });

  const { window } = dom;
  if (lagret) window.localStorage.setItem('botbird-intro-sett', lagret);
  window.fetch = (url) => {
    // Cloudflares trace-endepunkt: avgjør om introen i det hele tatt vises.
    if (String(url).startsWith('/cdn-cgi/trace')) {
      return Promise.resolve({
        ok: traceSvarer,
        text: () => Promise.resolve(warp === null ? 'gateway=off\n' : `warp=${warp}\n`),
      });
    }
    return Promise.resolve({
      ok: true,
      headers: { get: () => 'application/json' },
      json: () => Promise.resolve({ employee: true }),
    });
  };
  window.matchMedia = (q) => ({ matches: reduceMotion && q.includes('reduced-motion') });

  // jsdom does no layout, so give the nest bird a box by hand.
  const nest = window.document.querySelector('.botbird__bird');
  const boks = { left: 1100, top: 700, width: 100, height: 70 };
  nest.getBoundingClientRect = () => boks;
  nest.getClientRects = () => (birdSynlig ? [boks] : []);

  window.eval(JS);
  await sleep(5); // proben + trace-kallet er to runder med løfter
  // Same for the two openers: only one of them has a box at any given width.
  const synlig = (el, ja) => { if (el) el.getClientRects = () => (ja ? [boks] : []); };
  synlig(window.document.querySelector('.botbird__knapp'), birdSynlig);
  synlig(window.document.querySelector('.spor-bls-knapp'), !birdSynlig);
  return window;
}

// --- 1. Intro shows on first visit ------------------------------------------
{
  const w = await lag();
  const dialog = w.document.querySelector('.bls-intro__dialog');
  ok('intro vises ved første besøk', !!dialog);
  ok('tittel satt', w.document.querySelector('.bls-intro__tittel').textContent === 'Møt Bouvet botbird');
  ok('merkelapp satt', w.document.querySelector('.bls-intro__merkelapp').textContent === 'Ny på sikkerhet.bouvet.no');
  ok('aria-labelledby peker på tittelen',
    dialog.getAttribute('aria-labelledby') === w.document.querySelector('.bls-intro__tittel').id);
  ok('fuglebildet arver kilden fra redet',
    w.document.querySelector('.bls-intro__bilde img').src.endsWith('/img/botbird.png'));
  ok('redet står tomt mens dialogen er oppe',
    w.document.querySelector('.botbird').classList.contains('botbird--borte'));
  ok('fokus på primærknappen', w.document.activeElement === w.document.querySelector('.bls-intro__primar'));
  ok('ingenting lagret før den lukkes', w.localStorage.getItem('botbird-intro-sett') === null);
}

// --- 2. Closing with × : flight, then the bird lands ------------------------
{
  const w = await lag();
  // The intro bird needs a box too.
  const introBird = w.document.querySelector('.bls-intro__bilde img');
  introBird.getBoundingClientRect = () => ({ left: 400, top: 200, width: 180, height: 126 });
  w.document.querySelector('.bls-intro__lukk').click();

  ok('dialogen er borte', !w.document.querySelector('.bls-intro'));
  ok('valget er lagret', w.localStorage.getItem('botbird-intro-sett') === '1');
  const flukt = w.document.querySelector('.bls-flukt');
  ok('fuglen er i lufta', !!flukt);
  ok('starter midt på dialogfuglen', flukt.style.transform === 'translateX(490px)');
  ok('starter i dialogfuglens størrelse', w.document.querySelector('.bls-flukt__fugl').style.width === '180px');

  await sleep(60); // past the two frames that turn the transitions on
  ok('transisjonene er slått på', flukt.classList.contains('bls-flukt--flyr'));
  ok('ender over redet', flukt.style.transform === 'translateX(1150px)');
  ok('ender 40px over redefuglen', w.document.querySelector('.bls-flukt__y').style.transform === 'translateY(695px)');
  ok('vendes og skaleres ned',
    w.document.querySelector('.bls-flukt__fugl').style.transform === 'scale(-0.5555555555555556, 0.5555555555555556)');
  ok('redet er fortsatt tomt', w.document.querySelector('.botbird').classList.contains('botbird--borte'));

  await sleep(1200); // flight over
  ok('flygelaget er ryddet bort', !w.document.querySelector('.bls-flukt'));
  const fugl = w.document.querySelector('.botbird');
  ok('fuglen er tilbake i redet', !fugl.classList.contains('botbird--borte'));
  await sleep(60);
  ok('landingsklassen er fjernet igjen', !fugl.classList.contains('botbird--lander'));
  ok('chatten er ikke åpnet', w.document.querySelector('.spor-bls-panel').hidden);
  ok('fokus tilbake på fugleknappen', w.document.activeElement === w.document.querySelector('.botbird__knapp'));
}

// --- 3. «Still et spørsmål» opens the chat ----------------------------------
{
  const w = await lag();
  w.document.querySelector('.bls-intro__bilde img').getBoundingClientRect = () => ({ left: 400, top: 200, width: 180, height: 126 });
  w.document.querySelector('.bls-intro__primar').click();
  await sleep(1300);
  ok('chatten åpnes etter flyturen', !w.document.querySelector('.spor-bls-panel').hidden);
}

// --- 4. Escape closes it ----------------------------------------------------
{
  const w = await lag();
  w.document.querySelector('.bls-intro__bilde img').getBoundingClientRect = () => ({ left: 400, top: 200, width: 180, height: 126 });
  w.document.dispatchEvent(new w.KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
  ok('Escape lukker dialogen', !w.document.querySelector('.bls-intro'));
  ok('Escape lagrer valget', w.localStorage.getItem('botbird-intro-sett') === '1');
}

// --- 5. Second visit --------------------------------------------------------
{
  const w = await lag({ lagret: '1' });
  ok('ingen dialog ved andre besøk', !w.document.querySelector('.bls-intro'));
  ok('fuglen sitter i redet med én gang', !w.document.querySelector('.botbird').classList.contains('botbird--borte'));
  ok('chatten virker fortsatt', !!w.document.querySelector('.botbird__knapp'));
}

// --- 6. Reduced motion: dialog, no flight -----------------------------------
{
  const w = await lag({ reduceMotion: true });
  ok('dialogen vises også med redusert bevegelse', !!w.document.querySelector('.bls-intro'));
  w.document.querySelector('.bls-intro__sekundar').click();
  ok('ingen flytur', !w.document.querySelector('.bls-flukt'));
  ok('fuglen er i redet med en gang', !w.document.querySelector('.botbird').classList.contains('botbird--borte'));
}

// --- 7. Narrow screen (bird hidden): dialog, no flight ----------------------
{
  const w = await lag({ birdSynlig: false });
  ok('dialogen vises på smal skjerm', !!w.document.querySelector('.bls-intro'));
  w.document.querySelector('.bls-intro__sekundar').click();
  ok('ingen flytur når redet er skjult', !w.document.querySelector('.bls-flukt'));
  ok('fokus går til den vanlige knappen', w.document.activeElement === w.document.querySelector('.spor-bls-knapp'));
}

// --- 8. Tab stays inside the dialog -----------------------------------------
{
  const w = await lag();
  const knapper = [...w.document.querySelectorAll('.bls-intro__dialog button')];
  knapper[knapper.length - 1].focus();
  const e = new w.KeyboardEvent('keydown', { key: 'Tab', bubbles: true, cancelable: true });
  w.document.dispatchEvent(e);
  ok('Tab fra siste knapp går til den første', w.document.activeElement === knapper[0]);
  const e2 = new w.KeyboardEvent('keydown', { key: 'Tab', shiftKey: true, bubbles: true, cancelable: true });
  w.document.dispatchEvent(e2);
  ok('Shift+Tab fra første går til den siste', w.document.activeElement === knapper[knapper.length - 1]);
}

// --- 9. Bouvetmaskin-kravet -------------------------------------------------
{
  const w = await lag({ warp: 'off' });
  ok('ingen intro når warp=off', !w.document.querySelector('.bls-intro'));
  ok('chatknappen virker likevel', !!w.document.querySelector('.botbird__knapp'));
  ok('fuglen sitter i redet', !w.document.querySelector('.botbird').classList.contains('botbird--borte'));
  ok('ingenting lagret, så introen kan komme senere',
    w.localStorage.getItem('botbird-intro-sett') === null);
}
{
  const w = await lag({ traceSvarer: false });
  ok('ingen intro når vi ikke kom via Cloudflare', !w.document.querySelector('.bls-intro'));
  ok('chatknappen virker likevel', !!w.document.querySelector('.botbird__knapp'));
}
{
  const w = await lag({ warp: null });
  ok('uten warp-linje holder det at Cloudflare svarer', !!w.document.querySelector('.bls-intro'));
}
{
  const w = await lag({ warp: 'plus' });
  ok('warp=plus teller som Bouvetmaskin', !!w.document.querySelector('.bls-intro'));
}

// --- 10. No bird on the page (print views) ----------------------------------
{
  const dom = new JSDOM(`<!doctype html><html><body>
    <script type="application/json" id="spor-bls-tekst">${TEKST}</script></body></html>`,
    { runScripts: 'outside-only', pretendToBeVisual: true, url: 'https://sikkerhet.bouvet.no/' });
  dom.window.fetch = () => Promise.resolve({ ok: true, headers: { get: () => 'application/json' }, json: () => Promise.resolve({ employee: true }) });
  dom.window.matchMedia = () => ({ matches: false });
  dom.window.eval(JS);
  await sleep(10);
  ok('ingen dialog uten fugl på siden', !dom.window.document.querySelector('.bls-intro'));
}

console.log(feil ? `\n${feil} feilet` : '\nAlt OK');
process.exit(feil ? 1 : 0);
