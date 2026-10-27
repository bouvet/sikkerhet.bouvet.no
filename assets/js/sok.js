// Semantisk søk i søkefeltet. Spør nettstedets eget /mcp (fag-mcp: ordsøk og
// semantisk søk, samme søk som chatten bruker) i stedet for Docsys innebygde
// Lunr-søk, og viser treffene i den samme boksen. Treffene lenker rett til
// avsnittet som svarer best.
//
// Svarer ikke /mcp (nede, utlogget, forhåndsvisning uten /mcp), brukes Docsys
// eget søk som før. Ingenting lagres, og fag-mcp logger ikke hva folk søker på.
//
// Samme fil ligger i bouvet/ai.bouvet.no og bouvet/sikkerhet.bouvet.no.
(() => {
  const $ = window.jQuery;
  if (!$ || !window.bootstrap) return;

  const english = (document.documentElement.lang || '').toLowerCase().startsWith('en');
  const TEXT = english
    ? { title: 'Search results', none: (q) => `No results for "${q}"` }
    : { title: 'Søkeresultater', none: (q) => `Ingen treff på «${q}»` };

  async function search(query) {
    const res = await fetch('/mcp', {
      method: 'POST',
      credentials: 'same-origin',
      cache: 'no-store',
      // Behind Access an expired login answers with a redirect; take it as "not available".
      redirect: 'manual',
      headers: { 'content-type': 'application/json', accept: 'application/json' },
      body: JSON.stringify({
        jsonrpc: '2.0',
        id: 1,
        method: 'tools/call',
        params: { name: 'search', arguments: { query, limit: 10, language: english ? 'en' : 'no' } },
      }),
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) throw new Error(`mcp_${res.status}`);
    const body = await res.json();
    const results = body && body.result && body.result.structuredContent && body.result.structuredContent.results;
    if (body.error || body.result.isError || !Array.isArray(results)) throw new Error('mcp_result');
    return results;
  }

  // Only this site's own pages: keep path and anchor, use this page's origin.
  // (The preview ai.bouvet.dev gets links to its own pages, not to ai.bouvet.no.)
  function href(url) {
    try {
      const u = new URL(url, location.href);
      return location.origin + u.pathname + u.hash;
    } catch {
      return null;
    }
  }

  function el(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text) node.textContent = text;
    return node;
  }

  function dispose(input) {
    const popover = window.bootstrap.Popover.getInstance(input);
    if (popover) popover.dispose();
  }

  // The same box and classes as Docsy's own results, so the site's styling applies.
  function show(input, query, results) {
    dispose(input);
    const box = el('div');
    const head = el('div');
    head.style.cssText = 'display:flex;justify-content:space-between;margin-bottom:1em';
    const title = el('span', null, TEXT.title);
    title.style.fontWeight = 'bold';
    head.append(title, el('span', 'td-offline-search-results__close-button'));
    box.append(head);

    const list = el('div');
    list.style.maxHeight = `calc(100vh - ${input.getBoundingClientRect().top + 180}px)`;
    list.style.overflowY = 'auto';
    const shown = results.filter((r) => typeof r.title === 'string' && href(r.url));
    if (shown.length === 0) list.append(el('p', null, TEXT.none(query)));
    for (const r of shown) {
      const item = el('div', 'mt-4');
      const target = href(r.url);
      item.append(el('small', 'd-block text-body-secondary', r.section || new URL(target).pathname));
      const link = el('a', 'd-block', r.title);
      link.href = target;
      link.style.fontSize = '1.2rem';
      item.append(link);
      if (r.snippet) item.append(el('p', null, r.snippet));
      list.append(item);
    }
    box.append(list);

    $(input).one('shown.bs.popover', () => {
      $('.td-offline-search-results__close-button').on('click', () => {
        input.value = '';
        dispose(input);
      });
    });
    new window.bootstrap.Popover(input, {
      content: box,
      html: true,
      customClass: 'td-offline-search-results',
      placement: 'bottom',
    }).show();
  }

  function attach(input) {
    // Docsy's Lunr search is bound to 'change'. Keep its handlers as the fallback.
    const events = $._data(input, 'events');
    const docsy = ((events && events.change) || []).map((h) => h.handler);
    $(input).off('change');
    let latest = 0;
    $(input).on('change', async (event) => {
      const query = input.value.trim();
      dispose(input);
      if (!query) return;
      const mine = ++latest;
      try {
        const results = await search(query);
        if (mine !== latest) return;
        show(input, query, results);
        input.blur();
      } catch {
        if (mine === latest) docsy.forEach((handler) => handler.call(input, event));
      }
    });
  }

  // After Docsy's own ready handler, which binds its search to the input.
  $(() => document.querySelectorAll('.td-search input').forEach(attach));
})();
