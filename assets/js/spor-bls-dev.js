// Local stand-in for the Cloudflare side of the botbird chat.
//
// LOADED ONLY UNDER `hugo server`: hooks/body-end.html wraps the script tag in
// `hugo.IsServer`, which is false for every build, including the `-e dev`
// preview build. Nothing here can reach a deployed site.
//
// On the real site /api/chat/me and /api/chat/ are served by Cloudflare behind
// Access, so locally there is nothing to answer the probe and the bird never
// becomes a button. This fakes both: the probe says yes, and the chat iframe
// gets a placeholder page instead of a 404.
//
//   ?bls=av        pretend the visitor is outside the chat group (bird stays decor)
//   ?bls=ny        forget that the intro has been seen, so it plays again
//   ?bls=utenwarp  pretend the machine is not a Bouvet one (no intro, chat still works)
//
// Must run before spor-bls.js. Both tags are `defer`, so document order
// decides, and body-end.html puts this one first.
(() => {
  const PROBE = '/api/chat/me';
  // `hugo server` answers 404 here, so without a stand-in the intro would
  // never show in development.
  const TRACE = '/cdn-cgi/trace';
  const INTRO_KEY = 'botbird-intro-sett';

  const valg = new URLSearchParams(location.search).get('bls');
  const ansatt = valg !== 'av';
  const paWarp = valg !== 'utenwarp';
  if (valg === 'ny') {
    try { localStorage.removeItem(INTRO_KEY); } catch (e) { /* ignore */ }
  }

  // Stand-in for the chat page. Same origin (srcdoc), so the real script can
  // still reach into it for #q and the Escape key, exactly as in production.
  const CHAT = `<!doctype html>
<html lang="no"><head><meta charset="utf-8"><style>
  :root { color-scheme: light dark; }
  body { margin: 0; height: 100vh; display: flex; flex-direction: column;
         font: 15px/1.5 Inter, system-ui, sans-serif; background: #fff; color: #11133c; }
  #logg { flex: 1; overflow-y: auto; padding: 16px; display: flex;
          flex-direction: column; gap: 10px; }
  .m { max-width: 85%; padding: 10px 14px; }
  .bot { align-self: flex-start; background: #e2ecf2; }
  .du { align-self: flex-end; background: #11133c; color: #fff; }
  .merk { align-self: center; font-size: 12px; opacity: .65; text-align: center; }
  form { display: flex; gap: 8px; padding: 12px; border-top: 1px solid rgba(17,19,60,.16); }
  #q { flex: 1; min-width: 0; padding: 10px 12px; font: inherit;
       border: 1px solid rgba(17,19,60,.28); background: transparent; color: inherit; }
  button { padding: 0 16px; font: inherit; font-weight: 700; border: 0;
           background: #11133c; color: #fff; cursor: pointer; }
  @media (prefers-color-scheme: dark) {
    body { background: #0e1033; color: #fff; }
    .bot { background: #222665; }
    .du { background: #c3d5e1; color: #11133c; }
    button { background: #c3d5e1; color: #11133c; }
    form { border-top-color: rgba(255,255,255,.16); }
  }
</style></head><body>
  <div id="logg">
    <p class="m bot">Hei! Dette er en lokal attrapp, ikke den ekte chatten.</p>
    <p class="merk">Den ekte ligger bak Cloudflare Access og svarer bare i drift.</p>
  </div>
  <form><input id="q" autocomplete="off" placeholder="Skriv noe …"><button>Send</button></form>
  <script>
    const logg = document.getElementById('logg');
    const q = document.getElementById('q');
    document.querySelector('form').addEventListener('submit', (e) => {
      e.preventDefault();
      if (!q.value.trim()) return;
      for (const [klasse, tekst] of [['du', q.value], ['bot', 'Attrappen svarer ikke, men boblen ruller.']]) {
        const p = document.createElement('p');
        p.className = 'm ' + klasse;
        p.textContent = tekst;
        logg.append(p);
      }
      q.value = '';
      logg.scrollTop = logg.scrollHeight;
    });
  <\/script>
</body></html>`;

  const ekteFetch = window.fetch.bind(window);
  window.fetch = (input, init) => {
    const url = typeof input === 'string' ? input : (input && input.url) || '';
    if (url.startsWith(TRACE)) {
      return Promise.resolve(new Response(
        'warp=' + (paWarp ? 'on' : 'off') + '\ngateway=off\n',
        { status: 200, headers: { 'Content-Type': 'text/plain' } },
      ));
    }
    if (url.startsWith(PROBE)) {
      return Promise.resolve(new Response(
        JSON.stringify({ employee: ansatt }),
        { status: ansatt ? 200 : 403, headers: { 'Content-Type': 'application/json' } },
      ));
    }
    return ekteFetch(input, init);
  };

  // The iframe is built the first time the chat opens, so watch for it.
  new MutationObserver(() => {
    const frame = document.querySelector('.spor-bls-panel__frame:not([data-bls-attrapp])');
    if (!frame) return;
    frame.dataset.blsAttrapp = '1';
    // Drop the 404 before srcdoc takes over, so there is only one load.
    frame.removeAttribute('src');
    frame.srcdoc = CHAT;
  }).observe(document.documentElement, { childList: true, subtree: true });

  window.addEventListener('load', () => {
    console.info(
      '[Bouvet botbird] Lokal attrapp aktiv (kun under `hugo server`).\n'
      + '  ?bls=ny        spiller introen om igjen\n'
      + '  ?bls=av        later som du står utenfor chatgruppa\n'
      + '  ?bls=utenwarp  later som maskinen ikke er en Bouvetmaskin',
    );
  });
})();
