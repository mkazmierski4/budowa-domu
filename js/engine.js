/* Silnik encyklopedii: rejestr etapów i widgetów, nawigacja (strzałki, swipe, hash), budżet, zapis postępu.
   Czysty JS bez zależności. Działa po otwarciu index.html z dysku (file://), więc bez fetch().
   Etapy rejestrują się przez BUDOWA.addStage(), widgety przez BUDOWA.addWidget(), ilustracje przez BUDOWA.addIllus().
   Wizualizacja (js/viz.js) dostaje: VIZ.mount(el), VIZ.setStage(nr), VIZ.highlight(layerId), VIZ.setView(v). */
(function(){
  'use strict';

  /* ---------- stałe ---------- */
  var TOTAL = 2300000;
  // Podział budżetu z docs/DECYZJE.md. Rezerwa jest pokazywana osobno i etapy jej nie wydają.
  var CATS = [
    { id:'dzialka', name:'Działka i formalności', plan:315000 },
    { id:'surowy',  name:'Stan surowy',           plan:685000 },
    { id:'instal',  name:'Instalacje',            plan:245000 },
    { id:'wykoncz', name:'Wykończenie',           plan:545000 },
    { id:'ogrod',   name:'Ogród',                 plan:280000 },
    { id:'rezerwa', name:'Rezerwa',               plan:230000, reserve:true }
  ];
  var RESERVE = CATS.filter(function(c){ return c.reserve; }).reduce(function(a, c){ return a + c.plan; }, 0);
  // Wszystkie etapy, także bez treści: [id = nazwa pliku content/<id>.js, tytuł, domyślna kategoria budżetu]
  var LIST = [
    ['00-finanse',         'Finanse i harmonogram',      'dzialka'],
    ['01-dzialka',         'Działka',                    'dzialka'],
    ['02-projekt',         'Projekt i pozwolenie',       'dzialka'],
    ['03-przygotowanie',   'Przygotowanie budowy',       'surowy'],
    ['04-fundamenty',      'Fundamenty',                 'surowy'],
    ['05-sciany',          'Ściany i stropy',            'surowy'],
    ['06-dach',            'Dach',                       'surowy'],
    ['07-okna',            'Okna i drzwi',               'surowy'],
    ['08-elektryka',       'Elektryka',                  'instal'],
    ['09-woda-ogrzewanie', 'Woda i ogrzewanie',          'instal'],
    ['10-rekuperacja-pv',  'Rekuperacja i fotowoltaika', 'instal'],
    ['11-tynki-wylewki',   'Tynki i wylewki',            'wykoncz'],
    ['12-elewacja',        'Elewacja',                   'wykoncz'],
    ['13-wykonczenie',     'Wykończenie wnętrz',         'wykoncz'],
    ['14-umeblowanie',     'Umeblowanie',                'wykoncz'],
    ['15-ogrod',           'Ogród i basen',              'ogrod'],
    ['16-odbiory',         'Odbiory i przeprowadzka',    'dzialka']
  ];
  var LAST_NR = LIST.length - 1;

  var reg = [];        // reg[nr] = definicja etapu
  var widgets = {};
  var illus = {};      // illus['NN-slug/step-id'] = funkcja albo { frames } (rysuje js/illus.js)
  var started = false;

  /* ---------- pomocnicze ---------- */
  var $ = function(s, r){ return (r||document).querySelector(s); };
  var $$ = function(s, r){ return Array.prototype.slice.call((r||document).querySelectorAll(s)); };
  var reduce = window.matchMedia ? matchMedia('(prefers-reduced-motion: reduce)').matches : false;
  var OUT = 'cubic-bezier(.22,1,.36,1)';
  function ic(n, cls){ return '<svg class="ico'+(cls?' '+cls:'')+'" aria-hidden="true"><use href="#i-'+n+'"/></svg>'; }
  function num(n){ return String(Math.round(Math.abs(n))).replace(/\B(?=(\d{3})+(?!\d))/g,' '); }
  function zl(n){ return (n<0?'−':'')+num(n)+' zł'; }
  function k(n){ return (n/1000).toLocaleString('pl-PL',{maximumFractionDigits:1}); }
  function pad(n){ return (n<10?'0':'')+n; }
  // „4–9 tys. zł” albo „80–650 zł”; html=true daje jednostkę w <small>
  function money(a, b, html){
    if (b == null) b = a;
    if (b < 0) return '−'+money(-b, -a, html);
    var big = Math.max(Math.abs(a), Math.abs(b)) >= 10000, f = big ? k : num, u = big ? 'tys. zł' : 'zł';
    return f(a)+(a!==b ? '–'+f(b) : '')+' '+(html ? '<small>'+u+'</small>' : u);
  }
  function find(arr, id){ for (var i=0; i<(arr||[]).length; i++) if (arr[i].id===id) return arr[i]; return null; }
  function letter(i){ return 'ABCDEFGH'[i] || String(i+1); }

  /* ---------- publiczne API ---------- */
  var B = window.BUDOWA = {
    TOTAL: TOTAL,
    CATS: CATS,
    files: LIST.map(function(s){ return s[0]; }),
    addStage: function(def){
      if (!def || typeof def.nr !== 'number' || !def.steps || !def.steps.length){ if (window.console) console.warn('BUDOWA.addStage: pominięto niepełny etap', def && def.id); return; }
      if (!def.id) def.id = LIST[def.nr] ? LIST[def.nr][0] : pad(def.nr);
      if (!def.category) def.category = LIST[def.nr] ? LIST[def.nr][2] : 'dzialka';
      reg[def.nr] = def;
      if (started){ renderRail(); budget(); progress(); }
    },
    addWidget: function(name, fn){ widgets[name] = fn; },
    addIllus: function(k, def){ illus[k] = def; },
    showSection: function(layerId){
      if (isPhone()) setView('dom');
      var vp = $('#vizpaneIn'), r = vp && vp.getBoundingClientRect();
      if (r && (r.top < topH() || r.top > innerHeight*0.5)) scrollToY(r.top + pageYOffset - topH());
      viz('setView', 'przekroj');
      viz('highlight', layerId);
    },
    fmt: { zl: zl, num: num, k: k, money: money }
  };

  function viz(method, arg){
    var V = window.VIZ;
    if (!V || typeof V[method] !== 'function') return;
    try { V[method](arg); } catch(e){ if (window.console) console.error('VIZ.'+method, e); }
  }

  /* ---------- stan (localStorage) ---------- */
  var KEY = 'budowa-v1';
  var st = { read:{}, done:{}, choice:{}, checks:{}, quiz:{}, stages:{}, last:{}, widgets:{}, pos:null };
  try {
    var sv = JSON.parse(localStorage.getItem(KEY) || 'null');
    if (sv && typeof sv === 'object') for (var x in st) if (sv[x]) st[x] = sv[x];
  } catch(e){}
  function save(){ try { localStorage.setItem(KEY, JSON.stringify(st)); } catch(e){} }

  function registered(){ return reg.filter(Boolean); }
  function key(s, p){ return s.id+'/'+p.id; }
  function hasCk(p){ return !!(p.checklist && p.checklist.length); }
  // Krok z listą odbioru jest gotowy po odbiorze, krok bez listy po przeczytaniu.
  function isDone(s, p){ var kk = key(s, p); return hasCk(p) ? !!st.done[kk] : !!st.read[kk]; }
  function doneCount(s){ return s.steps.filter(function(p){ return isDone(s, p); }).length; }
  function stageDone(s){ return doneCount(s) === s.steps.length; }
  function vizNr(s){ return stageDone(s) ? Math.min(s.nr+1, LAST_NR) : s.nr; }
  function optOf(s, p){
    var d = p.decision; if (!d || !d.options || !d.options.length) return null;
    return find(d.options, st.choice[key(s, p)]) || find(d.options, d.chosen) || d.options[0];
  }
  // Koszt kroku = cost kroku + koszt wybranej opcji (opcja to dopłata/oszczędność względem kosztów kroków).
  function costOf(s, p){
    var c = p.cost, o = optOf(s, p), oc = o && o.cost;
    if (!c && !oc) return null;
    return { min:(c && c.min || 0)+(oc && oc.min || 0), max:(c && c.max || 0)+(oc && oc.max || 0) };
  }
  function getChecks(s, p){
    var kk = key(s, p), a = st.checks[kk], dn = !!st.done[kk];
    if (!a || a.length !== p.checklist.length) a = st.checks[kk] = p.checklist.map(function(){ return dn; });
    return a;
  }
  function quizOk(s, p, qi){ var a = st.quiz[key(s, p)]; return !!a && a.indexOf(qi) > -1; }
  function quizAllOk(s, p){ return (p.quiz||[]).every(function(_, qi){ return quizOk(s, p, qi); }); }
  var qwrong = {};   // błędne odpowiedzi tylko w tej sesji

  /* ---------- pozycja ---------- */
  var cur = { nr:null, step:0, panel:0 };
  function S(){ return reg[cur.nr]; }
  function P(){ return S().steps[cur.step]; }
  function nextStage(nr){ for (var i=nr+1; i<=LAST_NR; i++) if (reg[i]) return reg[i]; return null; }
  function prevStage(nr){ for (var i=nr-1; i>=0; i--) if (reg[i]) return reg[i]; return null; }
  function panelsOf(p){
    var a = [{id:'opis', label:'Opis', icon:'book'}];
    if (p.decision && p.decision.options && p.decision.options.length) a.push({id:'wybor', label:'Wybór', icon:'compare'});
    if (p.quiz && p.quiz.length) a.push({id:'pytanie', label:'Pytanie', icon:'question'});
    if (hasCk(p)) a.push({id:'odbior', label:'Odbiór', icon:'listcheck'});
    return a;
  }

  /* ---------- animacje pomocnicze ---------- */
  function anim(el, kf, o){ if (reduce || !el || !el.animate) return null; return el.animate(kf, o); }
  function enter(root, dir){
    $$('[data-in]', root).forEach(function(el, i){
      anim(el, [{opacity:0, transform:'translate('+(dir*26)+'px,'+(dir?0:10)+'px)'},{opacity:1, transform:'none'}], {duration:380, delay:Math.min(i,10)*45, easing:OUT, fill:'backwards'});
    });
  }
  var busy = false;
  function swap(el, dir, build){
    if (reduce || !el.animate){ build(); return; }
    busy = true;
    var a = el.animate([{opacity:1, transform:'none'},{opacity:0, transform:'translateX('+(-dir*22)+'px)'}], {duration:150, easing:'cubic-bezier(.4,0,1,1)', fill:'forwards'});
    a.onfinish = function(){ build(); enter(el, dir); a.cancel(); busy = false; };
  }
  function countTo(el, to){
    var from = el._v || 0; el._v = to;
    if (reduce || from === to){ el.textContent = zl(to); return; }
    var t0 = performance.now(), d = 700;
    (function f(t){ var q = Math.min(1,(t-t0)/d), e = 1-Math.pow(1-q,4); el.textContent = zl(from+(to-from)*e); if (q<1) requestAnimationFrame(f); })(t0);
  }

  /* ---------- budżet ---------- */
  var lastAll = null, deltaAnim = null;
  function buildBar(){
    $('#bar').innerHTML = CATS.map(function(c){
      return '<div class="seg seg-'+c.id+(c.reserve?' res':'')+'" style="flex-grow:'+c.plan+'"><span class="trk"><i class="f"></i><i class="c"></i></span><div class="seg-l"><b>'+c.name+'</b><span class="num" data-cat="'+c.id+'"></span></div></div>';
    }).join('');
  }
  // Budżet idzie za pozycją czytelnika: ciemny pasek = wydane do bieżącego kroku (włącznie), jasny = reszta planu (środek widełek).
  // flashCat: kategoria do podświetlenia po zmianie wyboru.
  function budget(flashCat){
    var per = {}, all = 0, spent = 0, lo = 0, hi = 0;
    CATS.forEach(function(c){ per[c.id] = { d:0, p:0, lo:0, hi:0 }; });
    registered().forEach(function(s){
      var c = per[s.category];
      if (c && CATS.filter(function(x){ return x.id===s.category; })[0].reserve) c = null;
      if (!c){ if (window.console) console.warn('Nieznana kategoria budżetu w etapie '+s.id+': '+s.category); return; }
      s.steps.forEach(function(p, i){
        var v = costOf(s, p); if (!v) return;
        var m = (v.min+v.max)/2;
        var past = cur.nr !== null && (s.nr < cur.nr || (s.nr === cur.nr && i <= cur.step));
        if (past){ c.d += m; spent += m; } else c.p += m;
        c.lo += v.min; c.hi += v.max; lo += v.min; hi += v.max; all += m;
      });
    });
    CATS.forEach(function(c){
      var seg = $('.seg-'+c.id);
      if (c.reserve){ $('[data-cat="'+c.id+'"]', seg).textContent = k(c.plan)+' tys. · nie wydawana'; seg.title = c.name+': '+zl(c.plan)+' na nieprzewidziane wydatki, poza planem etapów'; return; }
      var x = per[c.id], fw = Math.min(100, x.d/c.plan*100), cw = Math.max(0, Math.min(100-fw, x.p/c.plan*100));
      $('.f', seg).style.width = fw+'%';
      $('.c', seg).style.left = fw+'%';
      $('.c', seg).style.width = cw+'%';
      seg.classList.toggle('over', x.d+x.p > c.plan*1.01); // do 1% ponad limit to zaokrąglenia widełek, nie alarm
      $('[data-cat="'+c.id+'"]', seg).textContent = k(x.d)+' / '+k(c.plan)+' tys.';
      seg.title = c.name+': wydano do tego kroku '+zl(x.d)+', plan całej kategorii '+zl(x.d+x.p)+' z limitu '+zl(c.plan)+(x.lo||x.hi ? ' (widełki '+money(x.lo, x.hi)+')' : '');
    });
    countTo($('#mSpent'), spent); countTo($('#mLeft'), TOTAL-spent);
    $('#mRange').textContent = 'plan całości '+zl(Math.round(all/1000)*1000)+(hi ? ' · widełki '+money(lo, hi) : '');
    $('#mRes').textContent = 'w tym rezerwa '+k(RESERVE)+' tys.';
    $('.money .left').classList.toggle('over', all > TOTAL - RESERVE);
    if (flashCat && lastAll !== null && Math.round(lastAll) !== Math.round(all)){
      var d = all - lastAll, el = $('#delta');
      el.textContent = (d>0?'+':'−')+num(d)+' zł';
      el.classList.toggle('minus', d<0);
      if (deltaAnim) deltaAnim.cancel();
      deltaAnim = anim(el, [{opacity:0, transform:'translateY(8px) scale(.9)'},{opacity:1, transform:'none', offset:.14},{opacity:1, transform:'none', offset:.8},{opacity:0, transform:'translateY(-8px)'}], {duration:2200, easing:OUT});
      if (!deltaAnim){ el.style.opacity = 1; setTimeout(function(){ el.style.opacity = ''; }, 2000); }
      var seg = $('.seg-'+flashCat);
      if (seg){ seg.classList.remove('flash'); void seg.offsetWidth; seg.classList.add('flash'); }
    }
    lastAll = all;
  }

  /* ---------- etapy (lewa kolumna) ---------- */
  var rail = $('#rail'), justDone = null;
  function stageStat(s){
    if (!s) return '<svg class="stat" viewBox="0 0 22 22"><circle class="dash" cx="11" cy="11" r="9"/></svg>';
    if (stageDone(s)) return '<svg class="stat" viewBox="0 0 22 22"><circle class="dot" cx="11" cy="11" r="10"/><path class="ck" d="M6.5 11.3 9.6 14.3 15.5 8"/></svg>';
    var p = doneCount(s)/s.steps.length, C = 2*Math.PI*9;
    if (p > 0 || s.nr === cur.nr)
      return '<svg class="stat" viewBox="0 0 22 22"><circle cx="11" cy="11" r="9"/><circle class="ring" cx="11" cy="11" r="9" stroke-dasharray="'+C.toFixed(2)+'" stroke-dashoffset="'+(C*(1-p)).toFixed(2)+'"/></svg>';
    return '<svg class="stat" viewBox="0 0 22 22"><circle cx="11" cy="11" r="9"/></svg>';
  }
  function renderRail(){
    var n = registered().filter(stageDone).length;
    var h = '<div class="rail-h"><h2>Etapy budowy</h2><span class="num">'+n+' z '+LIST.length+' gotowe</span></div><ol class="stages">';
    LIST.forEach(function(L, i){
      var s = reg[i], isCur = s && i === cur.nr;
      var cls = !s ? 'soon' : (stageDone(s) ? 'done' : '');
      if (isCur) cls += ' cur';
      h += '<li><button class="stg '+cls+'" data-stage="'+i+'"'+(isCur?' aria-current="true"':'')+'>'+stageStat(s)+'<span class="nr num">'+pad(i)+'</span><span class="t">'+(s ? s.title : L[1]+'<small>wkrótce</small>')+'</span></button>';
      if (isCur){
        h += '<ol class="steps">';
        s.steps.forEach(function(p, j){
          var kk = key(s, p), dn = isDone(s, p), on = j === cur.step, m;
          if (dn) m = '<svg class="mini'+(kk===justDone?' pop':'')+'" viewBox="0 0 16 16"><circle class="dn" cx="8" cy="8" r="8"/><path d="M4.6 8.2 7 10.6 11.6 5.8"/></svg>';
          else if (on) m = '<svg class="mini" viewBox="0 0 16 16"><circle class="on" cx="8" cy="8" r="5"/></svg>';
          else if (st.read[kk]) m = '<svg class="mini" viewBox="0 0 16 16"><circle class="rd" cx="8" cy="8" r="5.5"/></svg>';
          else m = '<svg class="mini" viewBox="0 0 16 16"><circle cx="8" cy="8" r="6.5"/></svg>';
          h += '<li><button class="stp" data-step="'+j+'"'+(on?' aria-current="step"':'')+'>'+m+'<span>'+p.title+'</span></button></li>';
        });
        h += '</ol>';
      }
      h += '</li>';
    });
    rail.innerHTML = '<div class="rail-in">' + h + '</ol></div>';
    justDone = null;
    fitSticky();
  }
  rail.addEventListener('click', function(e){
    var b = e.target.closest('[data-step]');
    if (b){ go(cur.nr, +b.dataset.step, 0); drawer(false); return; }
    var g = e.target.closest('[data-stage]');
    if (g){
      var i = +g.dataset.stage, s = reg[i];
      if (!s){ toast('Etap '+pad(i)+' '+LIST[i][1]+' jest w przygotowaniu.'); return; }
      if (i !== cur.nr){ var j = st.last[s.id] || 0; go(i, Math.min(j, s.steps.length-1), 0); }
      drawer(false);
      if (isPhone()) setView('krok');
    }
  });

  /* ---------- krok ---------- */
  var wrap = $('#stepwrap'), scroller = $('#scroll');
  function stamp(){
    var s = S(), p = P(), dn = isDone(s, p);
    if (!hasCk(p)) return '';
    return '<div class="stamp'+(dn?' on':'')+'" id="stamp" aria-hidden="'+(dn?'false':'true')+'"><b>Odebrano</b><span>krok '+pad(s.nr)+'.'+(cur.step+1)+'</span></div>';
  }
  function header(){
    var s = S(), p = P(), n = s.steps.length;
    var sb = s.steps.map(function(q, j){ return '<i class="'+(isDone(s, q)?'dn':'')+(j===cur.step?' on':'')+'"></i>'; }).join('');
    var tabs = panelsOf(p).map(function(t, j){
      var ok = (t.id==='pytanie' && quizAllOk(s, p)) || (t.id==='odbior' && isDone(s, p));
      return '<button class="ptab" role="tab" data-panel="'+j+'" aria-selected="'+(j===cur.panel)+'">'+ic(t.icon)+t.label+(ok?'<i class="okdot" aria-label="ukończone"></i>':'')+'</button>';
    }).join('');
    return '<header class="sh">' +
      '<div class="meta" data-in><b>Etap '+pad(s.nr)+' '+s.title+'</b><span>Krok '+(cur.step+1)+' z '+n+'</span><span class="num" id="metaDone">'+doneCount(s)+' z '+n+' odebrane</span></div>' +
      '<div class="sbar" data-in aria-hidden="true">'+sb+'</div>' +
      '<h1 data-in>'+p.title+'</h1>' + stamp() +
      '<div class="ptabs" role="tablist" aria-label="Części kroku" data-in><span class="pind" id="pind"></span>'+tabs+'</div>' +
      '</header><div class="panel" id="panel" role="tabpanel"></div>';
  }
  // Pogrubia kluczową frazę na początku punktu (pierwsze zdanie lub tekst przed dwukropkiem),
  // chyba że autor treści sam użył <b>/<strong>.
  function keyPhrase(t){
    t = String(t);
    if (/<(b|strong)\b/i.test(t)) return t;
    var m = t.match(/^([^<]{6,120}?[.:!?])\s+(?=[A-ZĄĆĘŁŃÓŚŹŻ„"])/);
    return m ? '<b>'+m[1]+'</b> '+t.slice(m[0].length) : t;
  }
  function accRow(cls, icon, title, items){
    if (!items || !items.length) return '';
    var id = 'acc-'+cls;
    var lis = items.map(function(t, i){
      var body = Array.isArray(t) ? keyPhrase(t[0])+(t[1] ? '<span class="fm">'+t[1]+'</span>' : '') : keyPhrase(t);
      return '<li style="--i:'+i+'">'+body+'</li>';
    }).join('');
    return '<div class="acc-i '+cls+'" data-in><button class="acc-b" aria-expanded="false" aria-controls="'+id+'"><span class="acc-ic">'+ic(icon)+'</span><span>'+title+'</span><span class="acc-n num">'+items.length+'</span>'+ic('down','chev')+'</button>' +
      '<div class="acc-p" id="'+id+'"><div><ul>'+lis+'</ul></div></div></div>';
  }
  function splitBody(p){
    var lead = p.lead || '', body = p.body || '';
    if (!lead){ var m = body.match(/^\s*<p>([\s\S]*?)<\/p>/i); if (m){ lead = m[1]; body = body.slice(m[0].length); } }
    return { lead:lead, body:body };
  }
  function illusOf(s, p){ return window.ILLUS && illus[key(s, p)] ? key(s, p) : null; }
  function pOpis(){
    var s = S(), p = P(), b = splitBody(p), c = costOf(s, p), f = '', il = illusOf(s, p);
    if (p.time) f += '<li>'+ic('clock')+'<span>Czas</span>'+p.time+'</li>';
    if (p.team) f += '<li>'+ic('users')+'<span>Kto</span>'+p.team+'</li>';
    (p.facts||[]).forEach(function(x){ f += '<li>'+ic(x[2]||'rebar')+'<span>'+x[0]+'</span>'+x[1]+'</li>'; });
    if (c && (c.min || c.max)) f += '<li class="cost">'+ic('wallet')+'<span>Koszt</span><b class="num">'+money(c.min, c.max)+'</b>'+(p.cost && p.cost.note ? '<em class="fn">'+p.cost.note+'</em>' : '')+'</li>';
    return (il ? '<figure data-illus="'+il+'" data-in></figure>' : '') +
      (b.lead ? '<p class="lead" data-in>'+b.lead+'</p>' : '') +
      (f ? '<ul class="facts" data-in>'+f+'</ul>' : '') +
      (b.body.trim() ? '<div class="prose" data-in>'+b.body+'</div>' : '') +
      (p.diagram && !il ? '<figure class="dgm" data-in>'+p.diagram+'</figure>' : '') +
      (p.widget && widgets[p.widget] ? '<div class="wg" data-widget="'+p.widget+'" data-in></div>' : '') +
      '<div class="acc">' +
        accRow('tips', 'bulb', 'Porady majstra', p.tips) +
        accRow('warn', 'alert', 'Częste błędy', p.mistakes) +
        accRow('formal', 'file', 'Formalności', p.formal) +
      '</div>';
  }
  function optCost(p, o){
    var c = o.cost || {min:0, max:0};
    if (!c.min && !c.max) return p.cost ? 'w cenie kroku' : 'bez kosztów';
    return (p.cost && c.min >= 0 ? '+' : '')+money(c.min, c.max, true);
  }
  function detail(){
    var s = S(), p = P(), d = p.decision, o = optOf(s, p), rec = find(d.options, d.chosen);
    var why = o.why || '';
    if (rec && o.id === rec.id && why && !/^\s*<b>/i.test(why)) why = '<b>Dlaczego to rekomendujemy.</b> '+why;
    if (rec && o.id !== rec.id) why += (why ? ' ' : '')+'Dla domu referencyjnego rekomendujemy wariant '+letter(d.options.indexOf(rec))+'.';
    var pros = (o.pros||[]).map(function(x){ return '<li>'+ic('plus')+'<span>'+x+'</span></li>'; }).join('');
    var cons = (o.cons||[]).map(function(x){ return '<li>'+ic('minus')+'<span>'+x+'</span></li>'; }).join('');
    return (pros || cons ? '<div class="pc">'+(pros?'<div class="pro"><h3>Zalety</h3><ul>'+pros+'</ul></div>':'')+(cons?'<div class="con"><h3>Wady</h3><ul>'+cons+'</ul></div>':'')+'</div>' : '') +
      (why ? '<p class="why">'+why+'</p>' : '');
  }
  function pWybor(){
    var s = S(), p = P(), d = p.decision, o = optOf(s, p);
    return (d.question ? '<h2 class="dq" data-in>'+d.question+'</h2>' : '') +
      '<p class="intro" data-in>'+(d.intro || 'Wybrany wariant od razu przelicza budżet.')+'</p>' +
      '<div class="cards" role="radiogroup" aria-label="'+(d.question||'Warianty')+'" style="--n:'+Math.min(d.options.length, 3)+'">' + d.options.map(function(x, j){
        var on = x.id === o.id, meta = (x.time ? '<span>'+ic('clock')+x.time+'</span>' : '') + (x.note ? '<span>'+ic('shield')+x.note+'</span>' : '');
        return '<label class="card'+(on?' on':'')+'" data-id="'+x.id+'" data-in><input type="radio" name="opt" value="'+x.id+'"'+(on?' checked':'')+'>' +
          '<span class="card-top"><span class="card-k">'+letter(j)+'</span>'+(x.id===d.chosen?'<span class="rec">Rekomendacja</span>':'')+'</span>' +
          '<span class="tick">'+ic('check')+'</span>' +
          '<span class="card-n">'+x.name+'</span>' +
          '<span class="card-c num">'+optCost(p, x)+'</span>' +
          (meta ? '<span class="card-m">'+meta+'</span>' : '') + '</label>';
      }).join('') + '</div><div class="detail" id="detail" data-in>'+detail()+'</div>';
  }
  var CK = '<svg viewBox="0 0 26 26"><path d="M6.5 13.5 11 18 19.5 8.5"/></svg>', XX = '<svg viewBox="0 0 26 26"><path d="M8 8l10 10M18 8 8 18"/></svg>';
  function pPytanie(){
    var s = S(), p = P(), kk = key(s, p), n = p.quiz.length;
    return p.quiz.map(function(q, qi){
      var ok = quizOk(s, p, qi), wrong = (qwrong[kk] && qwrong[kk][qi]) || [];
      return '<div class="qb" data-q="'+qi+'"><p class="q" data-in>'+(n>1 ? '<span class="qn num">'+(qi+1)+'/'+n+'</span>' : '')+q.q+'</p><div class="answers">' + q.a.map(function(a, j){
        var c = ok ? (j===q.correct ? 'ok' : 'dim') : (wrong.indexOf(j)>-1 ? 'bad' : '');
        var r = c==='ok' ? CK : (c==='bad' ? XX : '');
        return '<button class="ans '+c+'" data-ans="'+j+'" data-in'+(ok||c==='bad'?' disabled':'')+'><span class="ans-k">'+letter(j)+'</span><span>'+a+'</span><span class="ans-r" aria-hidden="true">'+r+'</span></button>';
      }).join('') + '</div><div class="qfb" aria-live="polite">'+(ok && q.explain ? '<p>'+q.explain+'</p>' : '')+'</div></div>';
    }).join('');
  }
  function pOdbior(){
    var s = S(), p = P(), dn = isDone(s, p), ch = getChecks(s, p);
    return '<p class="intro" data-in>Przejdź listę i odhacz to, co się zgadza. Odebrany krok zalicza się do postępu etapu i domu.</p>' +
      '<div class="prog" data-in><span class="prog-t"><i id="progI"></i></span><b class="num" id="progN"></b></div>' +
      '<ul class="checks">' + p.checklist.map(function(c, j){
        return '<li data-in><label class="chk"><input type="checkbox" data-ck="'+j+'"'+(ch[j]?' checked':'')+(dn?' disabled':'')+'><span class="box">'+CK+'</span><span class="ct">'+c+'</span></label></li>';
      }).join('') + '</ul><div class="done-row" data-in id="doneRow"></div>';
  }
  function doneRow(){
    var s = S(), p = P(), dn = isDone(s, p), ch = getChecks(s, p), all = ch.every(Boolean), el = $('#doneRow'); if (!el) return;
    if (dn){
      var nx = s.steps[cur.step+1];
      el.innerHTML = (nx ? '<button class="btn" data-act="nextstep">Następny krok: '+nx.title+ic('right')+'</button>' : '<span class="hint">Wszystkie kroki etapu są odebrane.</span>') + '<button class="link" data-act="undo">Cofnij odbiór</button>';
    } else el.innerHTML = '<button class="btn" data-act="complete"'+(all?'':' disabled')+'>'+ic('stamp')+'Odbierz krok</button>' + (all?'':'<span class="hint">Odhacz wszystkie punkty, żeby odebrać krok.</span>');
    var n = ch.filter(Boolean).length;
    $('#progI').style.width = (n/ch.length*100)+'%';
    $('#progN').textContent = n+' z '+ch.length;
  }
  function renderWidgets(root){
    $$('[data-widget]', root).forEach(function(el){
      var name = el.dataset.widget, fn = widgets[name], s = S(), p = P();
      var api = {
        get: function(){ return st.widgets[name]; },
        set: function(v){ st.widgets[name] = v; save(); },
        fmt: B.fmt, stage: s, step: p
      };
      try { fn(el, api); } catch(e){ if (window.console) console.error('Widget '+name, e); el.remove(); }
    });
  }
  // Ilustracja kroku (js/illus.js). Błąd w rysunku usuwa tylko figurę.
  function renderIllus(root){
    $$('[data-illus]', root).forEach(function(el){
      try { window.ILLUS.mount(el, illus[el.dataset.illus]); } catch(e){ if (window.console) console.error('Ilustracja '+el.dataset.illus, e); el.remove(); }
    });
  }
  function renderPanel(){
    var t = panelsOf(P())[cur.panel].id, el = $('#panel');
    el.innerHTML = t==='opis' ? pOpis() : t==='wybor' ? pWybor() : t==='pytanie' ? pPytanie() : pOdbior();
    if (t==='odbior') doneRow();
    if (t==='opis'){ renderIllus(el); renderWidgets(el); }
    markHits();
    $$('.ptab', wrap).forEach(function(b, j){ b.setAttribute('aria-selected', j===cur.panel); });
    moveInd(); foot();
  }
  function moveInd(){
    var t = $('.ptab[aria-selected="true"]', wrap), ind = $('#pind'); if (!t || !ind) return;
    ind.style.width = t.offsetWidth+'px'; ind.style.transform = 'translateX('+t.offsetLeft+'px)';
  }
  function renderStep(){
    markRead();
    wrap.innerHTML = header(); renderPanel();
    remember();
  }
  function markRead(){
    var s = S(), p = P(), kk = key(s, p);
    if (st.read[kk]) return;
    st.read[kk] = 1; save();
    if (!hasCk(p)){ budget(); progress(); checkStage(s, true); }
  }
  function remember(){
    var s = S();
    st.pos = { nr:cur.nr, step:cur.step }; st.last[s.id] = cur.step; save();
    setHash();
  }

  /* ---------- stopka i przejścia ---------- */
  function nextPos(){
    var s = S(), ps = panelsOf(P());
    if (cur.panel < ps.length-1) return { nr:cur.nr, step:cur.step, panel:cur.panel+1, label:ps[cur.panel+1].label };
    if (cur.step < s.steps.length-1) return { nr:cur.nr, step:cur.step+1, panel:0, label:'Dalej: '+s.steps[cur.step+1].title };
    var n = nextStage(s.nr);
    return n ? { nr:n.nr, step:0, panel:0, label:'Etap '+pad(n.nr)+' '+n.title } : null;
  }
  function prevPos(){
    var s = S(), ps = panelsOf(P());
    if (cur.panel > 0) return { nr:cur.nr, step:cur.step, panel:cur.panel-1, label:ps[cur.panel-1].label };
    if (cur.step > 0){ var q = s.steps[cur.step-1]; return { nr:cur.nr, step:cur.step-1, panel:panelsOf(q).length-1, label:q.title }; }
    var b = prevStage(s.nr);
    if (!b) return null;
    var ls = b.steps.length-1;
    return { nr:b.nr, step:ls, panel:panelsOf(b.steps[ls]).length-1, label:'Etap '+pad(b.nr)+' '+b.title };
  }
  function foot(){
    var n = nextPos(), p = prevPos();
    $('#next').disabled = !n; $('#nextT').textContent = n ? n.label : 'Koniec';
    $('#prev').disabled = !p; $('#prevT').textContent = p ? p.label : 'Wstecz';
    $('#dots').innerHTML = panelsOf(P()).map(function(_, j){ return '<i class="'+(j===cur.panel?'on':'')+'"></i>'; }).join('');
  }
  function go(nr, step, panel){
    if (busy || !reg[nr]) return;
    if (nr===cur.nr && step===cur.step && panel===cur.panel) return;
    var a = [nr, step, panel], b = [cur.nr, cur.step, cur.panel];
    var dir = (a[0]-b[0] || a[1]-b[1] || a[2]-b[2]) > 0 ? 1 : -1;
    var stageChg = nr !== cur.nr, same = !stageChg && step === cur.step;
    cur = { nr:nr, step:step, panel:panel };
    if (!same) budget();
    if (same) swap($('#panel'), dir, function(){ renderPanel(); toCard(); });
    else swap(wrap, dir, function(){ renderStep(); renderRail(); toCard(); });
    if (stageChg) viz('setStage', vizNr(reg[nr]));
  }
  function next(){ var n = nextPos(); if (n) go(n.nr, n.step, n.panel); }
  function prev(){ var p = prevPos(); if (p) go(p.nr, p.step, p.panel); }
  $('#next').onclick = next; $('#prev').onclick = prev;

  wrap.addEventListener('click', function(e){
    var t;
    if ((t = e.target.closest('.ptab'))) { go(cur.nr, cur.step, +t.dataset.panel); return; }
    if ((t = e.target.closest('.acc-b'))) { t.setAttribute('aria-expanded', t.getAttribute('aria-expanded')!=='true'); return; }
    if ((t = e.target.closest('.ans'))) { answer(t); return; }
    if ((t = e.target.closest('[data-section]'))) { e.preventDefault(); B.showSection(t.dataset.section); return; }
    if ((t = e.target.closest('[data-act]'))) {
      var a = t.dataset.act;
      if (a==='complete') complete();
      if (a==='undo') undo();
      if (a==='nextstep') go(cur.nr, cur.step+1, 0);
    }
  });
  wrap.addEventListener('change', function(e){
    var t = e.target, s = S(), p = P();
    if (t.name === 'opt'){
      st.choice[key(s, p)] = t.value; save(); budget(s.category);
      $$('.card', wrap).forEach(function(c){ c.classList.toggle('on', c.dataset.id === t.value); });
      var d = $('#detail');
      swap(d, 1, function(){ d.innerHTML = detail(); $$('.pc > div, .why', d).forEach(function(x){ x.setAttribute('data-in',''); }); });
    }
    if (t.dataset.ck !== undefined){ getChecks(s, p)[+t.dataset.ck] = t.checked; save(); doneRow(); }
  });

  function answer(b){
    var s = S(), p = P(), kk = key(s, p), box = b.closest('.qb'), qi = +box.dataset.q, q = p.quiz[qi], j = +b.dataset.ans, fb = $('.qfb', box);
    if (j === q.correct){
      (st.quiz[kk] = st.quiz[kk] || []).push(qi); save();
      $$('.ans', box).forEach(function(x, n){ x.disabled = true; x.classList.remove('bad'); x.classList.toggle('ok', n===j); x.classList.toggle('dim', n!==j); $('.ans-r', x).innerHTML = n===j ? CK : ''; });
      fb.classList.remove('try'); fb.innerHTML = q.explain ? '<p data-in>'+q.explain+'</p>' : ''; enter(fb, 0);
      var tab = $$('.ptab', wrap)[cur.panel];
      if (tab && quizAllOk(s, p) && !$('.okdot', tab)) tab.insertAdjacentHTML('beforeend','<i class="okdot" aria-label="ukończone"></i>');
    } else {
      qwrong[kk] = qwrong[kk] || {}; (qwrong[kk][qi] = qwrong[kk][qi] || []).push(j);
      b.classList.add('bad'); b.disabled = true; $('.ans-r', b).innerHTML = XX;
      b.classList.remove('shake'); void b.offsetWidth; if (!reduce) b.classList.add('shake');
      fb.classList.add('try'); fb.innerHTML = '<p>Nie tym razem. Spróbuj jeszcze raz.</p>';
    }
  }

  function complete(){
    var s = S(), p = P(), kk = key(s, p);
    if (isDone(s, p)) return;
    st.done[kk] = 1; st.checks[kk] = p.checklist.map(function(){ return true; }); save(); justDone = kk;
    var sm = $('#stamp'); if (sm){ sm.classList.add('on','hit'); sm.setAttribute('aria-hidden','false'); }
    $$('.chk input', wrap).forEach(function(x){ x.disabled = true; });
    var tab = $$('.ptab', wrap)[cur.panel]; if (tab && !$('.okdot', tab)) tab.insertAdjacentHTML('beforeend','<i class="okdot" aria-label="ukończone"></i>');
    var bar = $$('.sbar i', wrap)[cur.step]; if (bar) bar.classList.add('dn');
    $('#metaDone').textContent = doneCount(s)+' z '+s.steps.length+' odebrane';
    doneRow(); renderRail(); progress(); budget();
    if (!checkStage(s, true)) toast('Krok „'+p.title+'” odebrany.');
  }
  function undo(){
    var s = S(), p = P(), kk = key(s, p);
    delete st.done[kk]; st.checks[kk] = p.checklist.map(function(){ return false; }); save();
    renderStep(); renderRail(); progress(); budget(); checkStage(s, false);
  }
  // Zapamiętuje odebrane etapy; ukończenie etapu „dorysowuje” dom przez VIZ.setStage.
  function checkStage(s, announce){
    var d = stageDone(s), was = !!st.stages[s.id];
    if (d === was) return false;
    if (d) st.stages[s.id] = 1; else delete st.stages[s.id];
    save(); renderRail(); progress();
    var upd = function(){ if (s.nr === cur.nr) viz('setStage', vizNr(s)); };
    if (d && announce) setTimeout(function(){ toast('Etap '+pad(s.nr)+' '+s.title+' odebrany. Na wizualizacji przybywa domu.'); upd(); }, 650);
    else upd();
    return d;
  }

  /* ---------- postęp domu ---------- */
  function progress(){
    var sum = 0;
    registered().forEach(function(s){ sum += doneCount(s)/s.steps.length; });
    var p = sum / LIST.length, el = $('#pct'), to = Math.round(p*100), from = el._v || 0;
    $('#hp').style.width = (p*100)+'%';
    el._v = to;
    if (reduce || from === to){ el.textContent = to+'%'; return; }
    var t0 = performance.now();
    (function f(t){ var q = Math.min(1,(t-t0)/700), e = 1-Math.pow(1-q,4); el.textContent = Math.round(from+(to-from)*e)+'%'; if (q<1) requestAnimationFrame(f); })(t0);
  }

  /* ---------- hash w URL: #01-dzialka/krok ---------- */
  var hashSelf = false;
  function fromHash(){
    var h = location.hash.replace(/^#/, ''); if (!h) return null;
    try { h = decodeURIComponent(h); } catch(e){}
    var a = h.split('/'), s = null;
    registered().forEach(function(x){ if (!s && (x.id === a[0] || (/^\d\d/.test(a[0]) && +a[0].slice(0,2) === x.nr))) s = x; });
    if (!s) return null;
    var j = 0;
    if (a[1]) s.steps.forEach(function(p, i){ if (p.id === a[1]) j = i; });
    return { nr:s.nr, step:j, panel:0 };
  }
  function setHash(){
    var h = '#'+S().id+'/'+P().id;
    if (location.hash === h) return;
    try { history.replaceState(null, '', h); } catch(e){ hashSelf = true; location.hash = h; }
  }
  window.addEventListener('hashchange', function(){
    if (hashSelf){ hashSelf = false; return; }
    var t = fromHash();
    if (t && (t.nr !== cur.nr || t.step !== cur.step)) go(t.nr, t.step, 0);
  });

  /* ---------- motyw, szuflada, widoki, toast ---------- */
  var root = document.documentElement;
  try { var th = localStorage.getItem('budowa-theme'); if (th) root.dataset.theme = th; } catch(e){}
  function isDark(){ return root.dataset.theme ? root.dataset.theme === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches; }
  function themeIco(){ $('#themeIco').setAttribute('href', isDark() ? '#i-sun' : '#i-moon'); $('#themeBtn').setAttribute('aria-label', isDark() ? 'Włącz jasny motyw' : 'Włącz ciemny motyw'); }
  $('#themeBtn').onclick = function(){ root.dataset.theme = isDark() ? 'light' : 'dark'; try { localStorage.setItem('budowa-theme', root.dataset.theme); } catch(e){} themeIco(); };
  function drawer(o){ document.body.classList.toggle('drawer', o); $('#menuBtn').setAttribute('aria-expanded', o); }
  $('#menuBtn').onclick = function(){ drawer(!document.body.classList.contains('drawer')); };
  $('#scrim').onclick = function(){ drawer(false); };
  function isPhone(){ return matchMedia('(max-width:760px)').matches; }
  function setView(v){
    var app = $('#app'); if (app.dataset.view === v) return;
    app.dataset.view = v;
    $$('.tabbar button').forEach(function(b){ b.setAttribute('aria-selected', b.dataset.view === v); });
    window.scrollTo(0, 0);
    if (v === 'dom') anim($('#vizpane'), [{opacity:0},{opacity:1}], {duration:250});
    else { anim($('#main'), [{opacity:0},{opacity:1}], {duration:250}); moveInd(); }
  }
  $$('.tabbar button').forEach(function(b){ b.onclick = function(){ setView(b.dataset.view); }; });
  var tt;
  function toast(m){ var t = $('#toast'); $('#toastT').textContent = m; t.classList.add('on'); clearTimeout(tt); tt = setTimeout(function(){ t.classList.remove('on'); }, 3200); }

  /* ---------- klawiatura i gest ---------- */
  document.addEventListener('keydown', function(e){
    if (e.key === 'Escape') drawer(false);
    if (!started || !S()) return;
    if (e.target.matches && e.target.matches('input,textarea,select')) return;
    if (e.altKey || e.ctrlKey || e.metaKey) return;
    if (e.key === 'ArrowRight'){ e.preventDefault(); next(); }
    if (e.key === 'ArrowLeft'){ e.preventDefault(); prev(); }
  });
  var sx = null, sy = 0;
  scroller.addEventListener('touchstart', function(e){ var t = e.touches[0]; sx = t.clientX; sy = t.clientY; }, {passive:true});
  scroller.addEventListener('touchend', function(e){
    if (sx === null || !S()) return;
    if (e.target.closest && e.target.closest('input,.wg')) { sx = null; return; }
    var t = e.changedTouches[0], dx = t.clientX-sx, dy = t.clientY-sy; sx = null;
    if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy)*1.6){ if (dx<0) next(); else prev(); }
  }, {passive:true});
  window.addEventListener('resize', function(){ moveInd(); fitSticky(); });

  /* ---------- jedno przewijanie strony ---------- */
  function topH(){ var t = $('.top'); return t ? t.offsetHeight : 0; }
  function scrollToY(y){ window.scrollTo({ top:Math.max(0, y), behavior: reduce ? 'auto' : 'smooth' }); }
  // Po zmianie kroku lub części płynnie wraca do początku karty kroku, jeśli jest nad krawędzią ekranu.
  function toCard(){
    var r = wrap.getBoundingClientRect(), th = topH();
    if (r.top < th) scrollToY(r.top + pageYOffset - th);
  }
  // Lista etapów i panel domu są przyklejone pod paskiem tylko wtedy, gdy mieszczą się w wysokości ekranu.
  function fitSticky(){
    var th = topH();
    root.style.setProperty('--toph', th+'px');
    [$('.rail-in'), $('#vizpaneIn')].forEach(function(el){
      if (el) el.classList.toggle('stick', el.offsetHeight <= innerHeight - th);
    });
  }
  if (window.ResizeObserver){
    var ro = new ResizeObserver(function(){ fitSticky(); });
    [$('.top'), $('#vizpaneIn')].forEach(function(el){ if (el) ro.observe(el); });
  }

  /* ---------- wyszukiwarka ---------- */
  // Indeks budowany w przeglądarce przy pierwszym otwarciu. norm() zachowuje długość tekstu,
  // więc pozycje trafień w tekście znormalizowanym pasują do oryginału.
  var sdlg = $('#srch'), sq = $('#srchQ'), sr = $('#srchR'), sidx = null, sres = [], ssel = 0, hitQ = null;
  function norm(t){ return String(t).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/ł/g, 'l'); }
  function esc(t){ return String(t).replace(/[&<>"]/g, function(c){ return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]; }); }
  var tpl = document.createElement('template');
  function plain(h){ tpl.innerHTML = String(h || '').replace(/<(br|\/p|\/li|\/h\d)\b[^>]*>/gi, ' $&'); return tpl.content.textContent.replace(/\s+/g, ' ').trim(); }
  function buildIndex(){
    sidx = [];
    registered().forEach(function(s){
      var sf = { l:'Etap', t:s.title+'. '+plain(s.summary), w:8 }; sf.n = norm(sf.t);
      sidx.push({ s:s, j:0, title:s.title, where:'Etap', f:[sf] });
      s.steps.forEach(function(p, j){
        var f = [{ l:'Tytuł', t:p.title, w:10 }, { l:'Opis', t:plain((p.lead||'')+' '+(p.body||'')), w:1 }];
        var list = function(a, l, acc){ (a||[]).forEach(function(x){ f.push({ l:l, t:plain(Array.isArray(x) ? x.join(' ') : x), w:2, acc:acc }); }); };
        list(p.tips, 'Porady', 'tips'); list(p.mistakes, 'Błędy', 'warn'); list(p.formal, 'Formalności', 'formal');
        var d = p.decision;
        if (d && d.options && d.options.length){
          f.push({ l:'Decyzja', t:plain(d.question||''), w:4, panel:'wybor' });
          d.options.forEach(function(o){ f.push({ l:'Decyzja', t:plain(o.name+'. '+(o.why||'')), w:3, panel:'wybor' }); });
        }
        f.forEach(function(x){ x.n = norm(x.t); });
        sidx.push({ s:s, j:j, title:p.title, f:f });
      });
    });
  }
  // Fragment tekstu z podświetlonymi słowami (<mark>).
  function marked(t, toks){
    var n = norm(t), rg = [];
    toks.forEach(function(k){ for (var i = n.indexOf(k); i > -1; i = n.indexOf(k, i+k.length)) rg.push([i, i+k.length]); });
    rg.sort(function(a, b){ return a[0]-b[0]; });
    var h = '', at = 0;
    rg.forEach(function(r){ if (r[0] < at) return; h += esc(t.slice(at, r[0]))+'<mark>'+esc(t.slice(r[0], r[1]))+'</mark>'; at = r[1]; });
    return h + esc(t.slice(at));
  }
  function snippet(x, toks){
    var i = x.n.indexOf(toks[0]), t = x.t;
    if (t.length <= 150) return marked(t, toks);
    var a = Math.max(0, i-55), b = Math.min(t.length, a+150);
    if (a > 0){ var sp = t.indexOf(' ', a); if (sp > -1 && sp < i) a = sp+1; }
    return (a > 0 ? '…' : '')+marked(t.slice(a, b), toks)+(b < t.length ? '…' : '');
  }
  function search(q){
    var toks = norm(q).split(/[\s,.;:]+/).filter(function(k){ return k.length > 1; });
    if (!toks.length) return [];
    if (!sidx) buildIndex();
    var out = [];
    sidx.forEach(function(e){
      var score = 0, best = null, ok = toks.every(function(k){ return e.f.some(function(x){ return x.n.indexOf(k) > -1; }); });
      if (!ok) return;
      e.f.forEach(function(x){
        var m = toks.filter(function(k){ return x.n.indexOf(k) > -1; }).length; if (!m) return;
        var sc = x.w*m + (x.w >= 8 && x.n.indexOf(toks[0]) === 0 ? 6 : 0);
        score += sc;
        if (!best || m > best.m || (m === best.m && x.w > best.x.w)) best = { x:x, m:m };
      });
      out.push({ e:e, x:best.x, score:score });
    });
    out.sort(function(a, b){ return b.score-a.score || a.e.s.nr-b.e.s.nr || a.e.j-b.e.j; });
    out = out.slice(0, 40); out.toks = toks;
    return out;
  }
  function renderResults(){
    var q = sq.value.trim(), st2 = $('#srchS');
    sres = search(q); ssel = 0;
    if (!q || !sres.toks){
      sr.innerHTML = '';
      st2.textContent = q ? 'Wpisz co najmniej 2 litery.' : 'Szukam w tytułach etapów i kroków, opisach, poradach, błędach i decyzjach.';
      return;
    }
    var toks = sres.toks;
    st2.textContent = sres.length ? (sres.length >= 40 ? 'Pierwsze 40 wyników. Dopisz słowo, żeby zawęzić.' : 'Wyniki: '+sres.length) : 'Nic nie znaleziono. Spróbuj krótszego słowa, np. „ław” zamiast „ławy fundamentowe”.';
    sr.innerHTML = sres.map(function(r, i){
      var e = r.e, isStage = e.where === 'Etap', showSnip = r.x.l !== 'Tytuł' && !isStage;
      return '<li role="option" id="sres'+i+'" data-i="'+i+'" aria-selected="'+(i===0)+'">' +
        '<span class="sr-nr num">'+pad(e.s.nr)+'</span>' +
        '<span class="sr-b"><span class="sr-t">'+marked(e.title, toks)+'</span>' +
        '<span class="sr-m">'+(isStage ? 'Cały etap' : esc(e.s.title))+(showSnip ? '<em>'+r.x.l+'</em>' : '')+'</span>' +
        (showSnip ? '<span class="sr-x">'+snippet(r.x, toks)+'</span>' : '')+'</span>' +
        ic('enter', 'sr-go')+'</li>';
    }).join('');
    selRes(0);
  }
  function selRes(i){
    if (!sres.length) return;
    ssel = (i + sres.length) % sres.length;
    $$('li', sr).forEach(function(li, j){ li.setAttribute('aria-selected', j === ssel); });
    var li = $('#sres'+ssel); sq.setAttribute('aria-activedescendant', 'sres'+ssel);
    if (li) li.scrollIntoView({ block:'nearest' });
  }
  function pickRes(i){
    var r = sres[i]; if (!r) return;
    var e = r.e, p = e.s.steps[e.j], pi = 0;
    if (r.x.panel) panelsOf(p).forEach(function(t, n){ if (t.id === r.x.panel) pi = n; });
    hitQ = { toks:sres.toks, acc:r.x.acc };
    closeSearch();
    drawer(false);
    if (isPhone()) setView('krok');
    if (e.s.nr === cur.nr && e.j === cur.step && pi === cur.panel){ markHits(); return; }
    go(e.s.nr, e.j, pi);
  }
  // Po przejściu z wyszukiwarki: <mark class="hit"> w tekście kroku, rozwinięty akordeon i przewinięcie do trafienia.
  function markHits(){
    if (!hitQ) return;
    var q = hitQ; hitQ = null;
    if (q.acc){ var b = $('.acc-i.'+q.acc+' .acc-b', wrap); if (b) b.setAttribute('aria-expanded', 'true'); }
    var first = null, count = 0;
    $$('h1, .lead, .prose, .acc-p, .dq, .card-n, .detail', wrap).forEach(function(box){
      var tw = document.createTreeWalker(box, NodeFilter.SHOW_TEXT, null), nodes = [], nd;
      while ((nd = tw.nextNode())) if (!nd.parentNode.closest('svg, mark, button.xref')) nodes.push(nd);
      nodes.forEach(function(node){
        if (count > 80) return;
        var t = node.data, n = norm(t), rg = [];
        q.toks.forEach(function(k){ for (var i = n.indexOf(k); i > -1; i = n.indexOf(k, i+k.length)) rg.push([i, i+k.length]); });
        if (!rg.length) return;
        rg.sort(function(a, b){ return a[0]-b[0]; });
        var fr = document.createDocumentFragment(), at = 0;
        rg.forEach(function(r){
          if (r[0] < at) return;
          fr.appendChild(document.createTextNode(t.slice(at, r[0])));
          var m = document.createElement('mark'); m.className = 'hit'; m.textContent = t.slice(r[0], r[1]); fr.appendChild(m);
          if (!first) first = m;
          at = r[1]; count++;
        });
        fr.appendChild(document.createTextNode(t.slice(at)));
        node.parentNode.replaceChild(fr, node);
      });
    });
    if (first) setTimeout(function(){
      var r = first.getBoundingClientRect();
      if (r.top < topH() + 40 || r.bottom > innerHeight - 80) scrollToY(r.top + pageYOffset - topH() - innerHeight*0.25);
    }, reduce ? 0 : 450);
  }
  function openSearch(){
    if (!sdlg || sdlg.open) return;
    if ($('#hello') && $('#hello').open) $('#hello').close();
    if (sdlg.showModal) sdlg.showModal(); else sdlg.setAttribute('open', '');
    sq.select(); renderResults();
  }
  function closeSearch(){ if (sdlg.open){ if (sdlg.close) sdlg.close(); else sdlg.removeAttribute('open'); } }
  if (sdlg){
    $('#searchBtn').onclick = openSearch;
    $('#srchX').onclick = closeSearch;
    sdlg.addEventListener('click', function(e){ if (e.target === sdlg) closeSearch(); });
    sdlg.addEventListener('close', function(){ var b = $('#searchBtn'); if (b && !isPhone()) b.focus({ preventScroll:true }); });
    sq.addEventListener('input', renderResults);
    sq.addEventListener('keydown', function(e){
      if (e.key === 'ArrowDown'){ e.preventDefault(); selRes(ssel+1); }
      else if (e.key === 'ArrowUp'){ e.preventDefault(); selRes(ssel-1); }
      else if (e.key === 'Enter'){ e.preventDefault(); pickRes(ssel); }
    });
    sr.addEventListener('click', function(e){ var li = e.target.closest('li[data-i]'); if (li) pickRes(+li.dataset.i); });
    sr.addEventListener('mousemove', function(e){ var li = e.target.closest('li[data-i]'); if (li && +li.dataset.i !== ssel) selRes(+li.dataset.i); });
    document.addEventListener('keydown', function(e){
      var k = (e.key || '').toLowerCase();
      if ((e.ctrlKey || e.metaKey) && !e.altKey && k === 'k'){ e.preventDefault(); if (sdlg.open) closeSearch(); else openSearch(); return; }
      if (e.key === '/' && !e.ctrlKey && !e.metaKey && !e.altKey && !(e.target.matches && e.target.matches('input,textarea,select,[contenteditable]')) && !document.querySelector('dialog[open]')){ e.preventDefault(); openSearch(); }
    });
  }

  /* ---------- ekran powitalny ---------- */
  // Pokazywany raz (flaga w localStorage), potem z przycisku „O poradniku” w pasku.
  var hello = $('#hello'), HELLO = 'budowa-welcome';
  function openHello(){
    if (!hello || hello.open) return;
    if (hello.showModal) hello.showModal(); else hello.setAttribute('open', '');
    hello.scrollTop = 0; var b = $('.hello-f .btn', hello); if (b) b.focus({ preventScroll:true });
  }
  if (hello){
    $('#aboutBtn').onclick = openHello;
    hello.addEventListener('click', function(e){ if (e.target === hello || e.target.closest('[data-close]')){ if (hello.close) hello.close(); else hello.removeAttribute('open'); } });
    hello.addEventListener('close', function(){ try { localStorage.setItem(HELLO, '1'); } catch(e){} });
  }
  function firstVisit(){ var seen = false; try { seen = !!localStorage.getItem(HELLO); } catch(e){} if (!seen) openHello(); }

  /* ---------- start ---------- */
  function start(){
    if (started) return; started = true;
    buildBar(); themeIco();
    viz('mount', $('#viz'));
    // odebrane etapy liczymy od nowa, bo treść mogła się zmienić
    registered().forEach(function(s){ if (stageDone(s)) st.stages[s.id] = 1; else delete st.stages[s.id]; });
    var first = registered()[0], ps = st.pos && reg[st.pos.nr];
    var t = fromHash() || (ps && { nr:st.pos.nr, step:Math.min(st.pos.step||0, ps.steps.length-1), panel:0 }) || (first && { nr:first.nr, step:0, panel:0 });
    if (!t){
      wrap.innerHTML = '<p class="empty">Brak treści. Sprawdź, czy pliki z katalogu <code>content/</code> są obok <code>index.html</code>.</p>';
      $('#next').disabled = $('#prev').disabled = true;
      renderRail(); budget(); progress();
      return;
    }
    cur = t;
    renderRail(); renderStep(); enter(wrap, 0); budget(); progress();
    viz('setStage', vizNr(S()));
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(moveInd);
    firstVisit();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else setTimeout(start, 0);
})();
