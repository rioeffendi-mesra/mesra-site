(function(){
  // Site search: lazy-loads Lunr.js + /search.json on first open, then does
  // client-side full-text search across Insights posts and Services pages.
  // No server, no build-step changes — fits the default GitHub Pages Jekyll build.
  var toggle = document.querySelector('.search-toggle');
  var overlay = document.getElementById('site-search');
  if(!toggle || !overlay) return;

  var closeBtn = overlay.querySelector('.search-close');
  var input = overlay.querySelector('.search-input');
  var resultsEl = overlay.querySelector('.search-results');
  var emptyEl = overlay.querySelector('.search-empty');
  var endpoint = overlay.getAttribute('data-endpoint');

  var idx = null, docs = null, lunrLoad = null, lastFocus = null;

  function loadLunr(){
    if(window.lunr) return Promise.resolve();
    if(lunrLoad) return lunrLoad;
    lunrLoad = new Promise(function(resolve, reject){
      var s = document.createElement('script');
      s.src = 'https://cdnjs.cloudflare.com/ajax/libs/lunr.js/2.3.9/lunr.min.js';
      s.async = true;
      s.onload = resolve;
      s.onerror = reject;
      document.head.appendChild(s);
    });
    return lunrLoad;
  }

  function buildIndex(){
    if(idx) return Promise.resolve();
    return loadLunr().then(function(){
      return fetch(endpoint).then(function(r){ return r.json(); });
    }).then(function(data){
      docs = data;
      idx = lunr(function(){
        this.ref('id');
        this.field('title', { boost: 10 });
        this.field('excerpt');
        var self = this;
        docs.forEach(function(d, i){
          self.add({ id: String(i), title: d.title, excerpt: d.excerpt });
        });
      });
    });
  }

  function clearResults(){
    while(resultsEl.firstChild){ resultsEl.removeChild(resultsEl.firstChild); }
  }

  function renderResults(matches){
    clearResults();
    if(!matches.length){
      emptyEl.hidden = false;
      return;
    }
    emptyEl.hidden = true;
    matches.slice(0, 20).forEach(function(m){
      var doc = docs[Number(m.ref)];
      if(!doc) return;
      var a = document.createElement('a');
      a.className = 'search-result';
      a.href = doc.url;

      var typeLabel = 'Insight' + (doc.date ? ' · ' + doc.date : '');
      if(doc.type === 'service'){ typeLabel = 'Service'; }
      else if(doc.type === 'page'){ typeLabel = 'Page'; }
      var type = document.createElement('span');
      type.className = 'sr-type';
      type.textContent = typeLabel;

      var title = document.createElement('span');
      title.className = 'sr-title';
      title.textContent = doc.title;

      var excerpt = document.createElement('span');
      excerpt.className = 'sr-excerpt';
      excerpt.textContent = doc.excerpt;

      a.appendChild(type);
      a.appendChild(title);
      a.appendChild(excerpt);
      resultsEl.appendChild(a);
    });
  }

  function runSearch(q){
    q = (q || '').trim();
    if(!q){ clearResults(); emptyEl.hidden = true; return; }
    if(!idx){ return; }
    var matches;
    try{
      matches = idx.query(function(qb){
        q.split(/\s+/).forEach(function(term){
          if(!term) return;
          qb.term(term.toLowerCase(), { boost: 10 });
          qb.term(term.toLowerCase(), { wildcard: lunr.Query.wildcard.TRAILING, boost: 5 });
        });
      });
    }catch(e){
      matches = idx.search(q);
    }
    renderResults(matches);
  }

  function open(){
    lastFocus = document.activeElement;
    overlay.classList.add('open');
    document.documentElement.style.overflow = 'hidden';
    toggle.setAttribute('aria-expanded', 'true');
    buildIndex().then(function(){
      if(input.value){ runSearch(input.value); }
    });
    setTimeout(function(){ input.focus(); }, 10);
  }

  function close(){
    overlay.classList.remove('open');
    document.documentElement.style.overflow = '';
    toggle.setAttribute('aria-expanded', 'false');
    if(lastFocus && lastFocus.focus){ lastFocus.focus(); }
  }

  toggle.addEventListener('click', function(){
    overlay.classList.contains('open') ? close() : open();
  });
  closeBtn.addEventListener('click', close);
  overlay.addEventListener('click', function(e){
    if(e.target === overlay){ close(); }
  });
  document.addEventListener('keydown', function(e){
    if(e.key === 'Escape' && overlay.classList.contains('open')){ close(); return; }
    // "/" opens search from anywhere, unless the user is already typing.
    if(e.key === '/' && !overlay.classList.contains('open')){
      var t = e.target;
      var typing = t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.isContentEditable);
      if(!typing){ e.preventDefault(); open(); }
    }
  });
  input.addEventListener('input', function(){ runSearch(input.value); });
})();
