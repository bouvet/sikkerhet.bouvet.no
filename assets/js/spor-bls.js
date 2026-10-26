// «Bouvet BirdBot»: turns BirdBot into a chat button for employees in the
// chat group. Everyone else sees exactly what they saw before. Copied from
// ai.bouvet.no («Spør BLS»).
//
// The check is a background call to /api/chat/me, which sits behind Cloudflare
// Access (only the chat group gets 200). On any other answer nothing happens.
// The chat itself is the page /api/chat/, shown in a speech bubble above the
// bird (full screen on narrow screens, where the bird is hidden and a plain
// button takes its place). Nothing is stored: the conversation lives in the
// bubble until the page is left.
//
// First visit also gets an intro dialog presenting the bird. When it is closed
// the bird flies from the dialog down into its nest in the corner, and the
// dialog never comes back (one flag in localStorage).
(() => {
  const PROBE = '/api/chat/me';
  const CHAT = '/api/chat/';
  const TRACE = '/cdn-cgi/trace';

  // Set once the intro has been shown and closed.
  const INTRO_KEY = 'birdbot-intro-sett';
  // Must match the transition lengths in _spor_bls.scss.
  const FLIGHT_MS = 1100;
  // The bird arrives this far above the nest and then sinks into it.
  const SINK = 40;

  // Strings from i18n/, written into the page by hooks/body-end.html. The
  // fallbacks only matter if that block is missing.
  const TEKST = Object.assign({
    navn: 'Bouvet BirdBot',
    lukk: 'Lukk',
    sporMeg: 'Spør meg!',
    introMerkelapp: '',
    introTittel: 'Møt Bouvet BirdBot',
    introIngress: '',
    introRede: '',
    introSporsmal: 'Still et spørsmål',
    introOk: 'Ok',
  }, lesTekster());

  function lesTekster() {
    const el = document.getElementById('spor-bls-tekst');
    try { return JSON.parse(el.textContent); } catch (e) { return {}; }
  }

  const rolig = () => window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  fetch(PROBE, {
    credentials: 'same-origin',
    cache: 'no-store',
    redirect: 'manual',
    headers: { 'X-Requested-With': 'XMLHttpRequest', Accept: 'application/json' },
  })
    .then((res) => {
      const json = (res.headers.get('content-type') || '').includes('application/json');
      return res.ok && json ? res.json() : null;
    })
    .then((me) => {
      if (!me || me.employee !== true) return;
      visFeedbackPille();
      mount();
    })
    .catch(() => {});

  // The feedback pill in the top bar points at an internal Slack channel, so it
  // rides on the same answer as the chat. Kept out of mount(), which gives up
  // on the pages that have no bird — the pill is in the navbar on all of them.
  function visFeedbackPille() {
    document.querySelectorAll('.sb-feedback-pill-item').forEach((el) => {
      el.hidden = false;
    });
  }

  function opener(className) {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = className;
    button.setAttribute('aria-haspopup', 'dialog');
    button.setAttribute('aria-expanded', 'false');
    button.setAttribute('aria-controls', 'spor-bls-panel');
    return button;
  }

  function mount() {
    // Pages without the bird (the /_print/ views) get no chat.
    const bird = document.querySelector('.birdbot');
    if (!bird) return;
    const birdImg = bird.querySelector('.birdbot__bird');

    // Plain button for narrow screens, where the bird is hidden.
    const button = opener('spor-bls-knapp');
    button.textContent = TEKST.navn;

    const panel = document.createElement('div');
    panel.className = 'spor-bls-panel';
    panel.id = 'spor-bls-panel';
    panel.setAttribute('role', 'dialog');
    panel.setAttribute('aria-label', TEKST.navn);
    panel.hidden = true;

    const bar = document.createElement('div');
    bar.className = 'spor-bls-panel__bar';
    const title = document.createElement('span');
    title.className = 'spor-bls-panel__title';
    title.textContent = TEKST.navn;
    const close = document.createElement('button');
    close.type = 'button';
    close.className = 'spor-bls-panel__close';
    close.setAttribute('aria-label', TEKST.lukk);
    close.textContent = '×';
    bar.append(title, close);
    panel.append(bar);

    // The bird itself is the button: a transparent hit area over the bird, with
    // a small «Spør meg!» bubble inside it, shown on hover and keyboard focus.
    // Being inside the button, the bubble can be hovered and clicked too.
    const birdButton = opener('birdbot__knapp');
    birdButton.setAttribute('aria-label', TEKST.navn);
    const hint = document.createElement('span');
    hint.className = 'birdbot__hint';
    hint.setAttribute('aria-hidden', 'true');
    hint.textContent = TEKST.sporMeg;
    birdButton.append(hint);
    // The button must come before the bird image so CSS can lift the bird on
    // hover (.birdbot__knapp:hover ~ .birdbot__bird).
    bird.prepend(birdButton);
    // No longer purely decorative: it now holds a real button.
    bird.removeAttribute('aria-hidden');
    bird.classList.add('birdbot--aktiv');

    // Only one of the two is visible at any width.
    const openers = [button, birdButton];
    let frame = null;

    function setExpanded(open) {
      openers.forEach((b) => b.setAttribute('aria-expanded', String(open)));
      bird.classList.toggle('birdbot--snakker', open);
    }

    function focusChat() {
      try {
        const q = frame.contentDocument && frame.contentDocument.getElementById('q');
        if (q) return q.focus();
      } catch (e) { /* not loaded yet */ }
      frame.focus();
    }

    // Escape closes the chat, or hides the «Spør meg!» bubble while it shows.
    function onKey(e) {
      if (e.key !== 'Escape') return;
      if (!panel.hidden) hide();
      else if (birdButton.matches(':hover, :focus-visible')) bird.classList.add('birdbot--stille');
    }

    function open() {
      if (!frame) {
        frame = document.createElement('iframe');
        frame.className = 'spor-bls-panel__frame';
        frame.title = TEKST.navn;
        frame.src = CHAT;
        // Same origin, so Escape inside the chat closes the bubble too.
        frame.addEventListener('load', () => {
          try { frame.contentDocument.addEventListener('keydown', onKey); } catch (e) { /* ignore */ }
          if (!panel.hidden) focusChat();
        });
        panel.append(frame);
      }
      panel.hidden = false;
      setExpanded(true);
      focusChat();
    }

    function hide() {
      panel.hidden = true;
      setExpanded(false);
      // Back to the visible opener (the window may have crossed the narrow
      // breakpoint while the chat was open, e.g. by zooming).
      const visible = openers.find((b) => b.getClientRects().length);
      if (visible) visible.focus();
    }

    function toggle() {
      if (panel.hidden) open();
      else hide();
    }

    const quiet = () => bird.classList.remove('birdbot--stille');
    birdButton.addEventListener('mouseleave', quiet);
    birdButton.addEventListener('blur', quiet);
    openers.forEach((b) => b.addEventListener('click', toggle));
    close.addEventListener('click', hide);
    document.addEventListener('keydown', onKey);

    document.body.append(button, panel);

    if (!introSett()) {
      paBouvetmaskin().then((bouvet) => {
        // A round trip has passed, so the flag may have been set meanwhile.
        if (!bouvet || introSett()) return;
        visIntro(bird, birdImg, open, () => {
          const visible = openers.find((b) => b.getClientRects().length);
          if (visible) visible.focus();
        });
      });
    }
  }

  // --- Intro dialog ----------------------------------------------------------

  // The intro is for Bouvet machines only. Outside visitors never reach us
  // through Cloudflare, so the trace endpoint answering at all is the signal;
  // a warp= line, where there is one, tightens it. This only decides whether
  // to show a dialog — Access is what actually protects the chat.
  function paBouvetmaskin() {
    return fetch(TRACE, { cache: 'no-store' })
      .then((res) => (res.ok ? res.text() : null))
      .then((t) => {
        if (t === null) return false;
        const m = t.match(/^warp=(\w+)$/m);
        return m ? m[1] !== 'off' : true;
      })
      .catch(() => false);
  }

  function introSett() {
    // A browser that refuses localStorage cannot remember the dialog was
    // closed, so it is better not to show it at all than to show it every time.
    try { return localStorage.getItem(INTRO_KEY) === '1'; } catch (e) { return true; }
  }

  function huskIntro() {
    try { localStorage.setItem(INTRO_KEY, '1'); } catch (e) { /* ignore */ }
  }

  function visIntro(bird, birdImg, openChat, fokuserOpner) {
    const overlay = document.createElement('div');
    overlay.className = 'bls-intro';

    const dialog = document.createElement('div');
    dialog.className = 'bls-intro__dialog';
    dialog.setAttribute('role', 'dialog');
    dialog.setAttribute('aria-modal', 'true');
    dialog.setAttribute('aria-labelledby', 'bls-intro-tittel');
    // Static skeleton only; every string is set with textContent below.
    dialog.innerHTML =
      '<button type="button" class="bls-intro__lukk">'
      + '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"'
      + ' stroke-width="2" stroke-linecap="round" aria-hidden="true">'
      + '<path d="M18 6 6 18M6 6l12 12"></path></svg></button>'
      + '<div class="bls-intro__bilde"><img alt=""></div>'
      + '<div class="bls-intro__tekst">'
      + '<p class="bls-intro__merkelapp"></p>'
      + '<h2 class="bls-intro__tittel" id="bls-intro-tittel"></h2>'
      + '<p class="bls-intro__avsnitt bls-intro__ingress"></p>'
      + '<p class="bls-intro__avsnitt bls-intro__rede"></p>'
      + '<div class="bls-intro__knapper">'
      + '<button type="button" class="bls-intro__primar"></button>'
      + '<button type="button" class="bls-intro__sekundar"></button>'
      + '</div></div>';

    const lukkKnapp = dialog.querySelector('.bls-intro__lukk');
    lukkKnapp.setAttribute('aria-label', TEKST.lukk);
    const introBird = dialog.querySelector('.bls-intro__bilde img');
    introBird.src = birdImg.src;
    dialog.querySelector('.bls-intro__merkelapp').textContent = TEKST.introMerkelapp;
    dialog.querySelector('.bls-intro__tittel').textContent = TEKST.introTittel;
    dialog.querySelector('.bls-intro__ingress').textContent = TEKST.introIngress;
    dialog.querySelector('.bls-intro__rede').textContent = TEKST.introRede;
    const primar = dialog.querySelector('.bls-intro__primar');
    primar.textContent = TEKST.introSporsmal;
    const sekundar = dialog.querySelector('.bls-intro__sekundar');
    sekundar.textContent = TEKST.introOk;

    overlay.append(dialog);

    // The bird waits in the dialog, so the nest is empty until it lands.
    bird.classList.add('birdbot--borte');

    function onIntroKey(e) {
      if (e.key === 'Escape') {
        e.preventDefault();
        lukk(false);
        return;
      }
      if (e.key !== 'Tab') return;
      // Everything focusable in the dialog is a button.
      const knapper = Array.from(dialog.querySelectorAll('button'));
      const forste = knapper[0];
      const siste = knapper[knapper.length - 1];
      if (e.shiftKey && document.activeElement === forste) {
        e.preventDefault();
        siste.focus();
      } else if (!e.shiftKey && document.activeElement === siste) {
        e.preventDefault();
        forste.focus();
      }
    }

    function lukk(apneChat) {
      huskIntro();
      document.removeEventListener('keydown', onIntroKey);
      // Measure both birds while the dialog is still on the page.
      const fra = introBird.getBoundingClientRect();
      // No rects means the nest is hidden (narrow screens, print): no flight.
      const til = birdImg.getClientRects().length ? birdImg.getBoundingClientRect() : null;
      overlay.remove();
      // The dialog opens by itself, so there is nothing to hand focus back to:
      // the bird (or its stand-in button) is the natural next stop.
      if (!apneChat) fokuserOpner();

      if (!til || rolig()) {
        bird.classList.remove('birdbot--borte');
        if (apneChat) openChat();
        return;
      }
      fly(introBird.src, fra, til, () => {
        land(bird);
        if (apneChat) openChat();
      });
    }

    overlay.addEventListener('click', (e) => { if (e.target === overlay) lukk(false); });
    lukkKnapp.addEventListener('click', () => lukk(false));
    sekundar.addEventListener('click', () => lukk(false));
    primar.addEventListener('click', () => lukk(true));
    document.addEventListener('keydown', onIntroKey);

    document.body.append(overlay);
    primar.focus();
  }

  // --- The flight ------------------------------------------------------------

  // Two nested elements so the horizontal and vertical movement can have
  // different easings: that is what makes the path an arc rather than a line.
  function fly(src, fra, til, ferdig) {
    const lag = document.createElement('div');
    lag.className = 'bls-flukt';
    const loddrett = document.createElement('div');
    loddrett.className = 'bls-flukt__y';
    const fugl = document.createElement('img');
    fugl.className = 'bls-flukt__fugl';
    fugl.alt = '';
    fugl.src = src;
    fugl.style.width = fra.width + 'px';
    fugl.style.height = fra.height + 'px';
    fugl.style.marginLeft = (-fra.width / 2) + 'px';
    fugl.style.marginTop = (-fra.height / 2) + 'px';
    loddrett.append(fugl);
    lag.append(loddrett);

    const startX = fra.left + fra.width / 2;
    const startY = fra.top + fra.height / 2;
    const sluttX = til.left + til.width / 2;
    const sluttY = til.top + til.height / 2 - SINK;
    const skala = til.width / fra.width;

    lag.style.transform = 'translateX(' + startX + 'px)';
    loddrett.style.transform = 'translateY(' + startY + 'px)';
    fugl.style.transform = 'scale(1) rotate(-12deg)';
    document.body.append(lag);

    // Two frames: the first puts the bird in its starting pose, the second
    // turns the transitions on and moves it. One frame is not always enough.
    requestAnimationFrame(() => requestAnimationFrame(() => {
      lag.classList.add('bls-flukt--flyr');
      lag.style.transform = 'translateX(' + sluttX + 'px)';
      loddrett.style.transform = 'translateY(' + sluttY + 'px)';
      // Negative X scale: the nest bird faces the other way (scaleX(-1)).
      fugl.style.transform = 'scale(' + (-skala) + ', ' + skala + ')';
    }));

    setTimeout(() => {
      lag.remove();
      ferdig();
    }, FLIGHT_MS + 40);
  }

  // Hand the bird back to the nest: it appears where the flight ended, then
  // sinks the last bit with the ordinary nest transition.
  function land(bird) {
    bird.classList.add('birdbot--lander');
    bird.classList.remove('birdbot--borte');
    requestAnimationFrame(() => requestAnimationFrame(() => {
      bird.classList.remove('birdbot--lander');
    }));
  }
})();
