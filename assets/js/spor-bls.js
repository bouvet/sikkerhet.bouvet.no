// «Spør BLS»: a chat button for Bouvet employees. Everyone else, including
// anonymous visitors from the internet, sees the site exactly as before.
//
// The check is a background call to /api/chat/me, which sits behind Cloudflare
// Access (only Bouvet employees get 200). On any other answer nothing happens.
// The chat itself is the page /api/chat/ (the same chat as on ai.bouvet.no),
// shown in a panel above the button, or full screen on narrow screens.
// Nothing is stored: the conversation lives in the panel until the page is left.
(() => {
  const PROBE = '/api/chat/me';
  const CHAT = '/api/chat/';

  // Print views get no chat.
  if (location.pathname.includes('/_print/')) return;

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
      if (me && me.employee === true) mount();
    })
    .catch(() => {});

  function mount() {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'spor-bls-knapp';
    button.textContent = 'Spør BLS';
    button.setAttribute('aria-haspopup', 'dialog');
    button.setAttribute('aria-expanded', 'false');
    button.setAttribute('aria-controls', 'spor-bls-panel');

    const panel = document.createElement('div');
    panel.className = 'spor-bls-panel';
    panel.id = 'spor-bls-panel';
    panel.setAttribute('role', 'dialog');
    panel.setAttribute('aria-label', 'Spør BLS');
    panel.hidden = true;

    const bar = document.createElement('div');
    bar.className = 'spor-bls-panel__bar';
    const title = document.createElement('span');
    title.className = 'spor-bls-panel__title';
    title.textContent = 'Spør BLS';
    const close = document.createElement('button');
    close.type = 'button';
    close.className = 'spor-bls-panel__close';
    close.setAttribute('aria-label', 'Lukk');
    close.textContent = '×';
    bar.append(title, close);
    panel.append(bar);

    let frame = null;

    function focusChat() {
      try {
        const q = frame.contentDocument && frame.contentDocument.getElementById('q');
        if (q) return q.focus();
      } catch (e) { /* not loaded yet */ }
      frame.focus();
    }

    function onKey(e) {
      if (e.key === 'Escape' && !panel.hidden) hide();
    }

    function open() {
      if (!frame) {
        frame = document.createElement('iframe');
        frame.className = 'spor-bls-panel__frame';
        frame.title = 'Spør BLS';
        frame.src = CHAT;
        // Same origin, so Escape inside the chat closes the panel too.
        frame.addEventListener('load', () => {
          try { frame.contentDocument.addEventListener('keydown', onKey); } catch (e) { /* ignore */ }
          if (!panel.hidden) focusChat();
        });
        panel.append(frame);
      }
      panel.hidden = false;
      button.setAttribute('aria-expanded', 'true');
      focusChat();
    }

    function hide() {
      panel.hidden = true;
      button.setAttribute('aria-expanded', 'false');
      button.focus();
    }

    button.addEventListener('click', () => (panel.hidden ? open() : hide()));
    close.addEventListener('click', hide);
    document.addEventListener('keydown', onKey);

    document.body.append(button, panel);
  }
})();
