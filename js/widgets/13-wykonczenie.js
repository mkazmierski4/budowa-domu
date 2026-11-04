/* Widget „kalkulator-podlog”: lista pomieszczeń z okładziną → m² każdego materiału z odpadem, koszt z robocizną
   i orientacyjny opór cieplny na podłogówce. Ceny orientacyjne, 2026 r., okolice małego miasta. */
BUDOWA.addWidget('kalkulator-podlog', function(el, api){
  var f = api.fmt;
  // m: materiał zł/m² [min,max], r: robocizna z chemią zł/m² [min,max], odp: odpad, R: opór cieplny m²·K/W (z klejem lub podkładem)
  var MAT = {
    deska: { n:'Deska dębowa klejona', m:[165,260], r:[60,90],   odp:0.07, R:0.10 },
    pan:   { n:'Panele z podkładem',   m:[65,115],  r:[30,45],   odp:0.06, R:0.09 },
    pl:    { n:'Płytki 60 × 60',       m:[70,130],  r:[110,160], odp:0.10, R:0.02 },
    wf:    { n:'Płytki 60 × 120',      m:[110,190], r:[130,180], odp:0.13, R:0.02 },
    guma:  { n:'Guma SBR 15–20 mm',    m:[110,190], r:[10,20],   odp:0.05, R:0.10 },
    epo:   { n:'Epoksyd (garaż)',      m:[30,60],   r:[40,80],   odp:0,    R:0 }
  };
  var R_MAX = 0.15;
  var DOM = [
    ['Salon z jadalnią', 42, 'deska'],
    ['Kuchnia', 16, 'wf'],
    ['Wiatrołap i hol', 18, 'wf'],
    ['Łazienka parter', 5, 'wf'],
    ['Pomieszczenie techniczne', 6, 'pl'],
    ['Siłownia', 14, 'guma'],
    ['Hol poddasza', 10, 'deska'],
    ['Sypialnia', 18, 'deska'],
    ['Garderoba', 6, 'deska'],
    ['Pokój dziecięcy', 14, 'deska'],
    ['Gabinet', 12, 'deska'],
    ['Łazienka poddasze', 12, 'wf'],
    ['Garaż', 35, 'epo']
  ];
  var s = { list: DOM.map(function(r){ return r.slice(); }), sc: 30 };
  var sv = api.get(); if (sv) for (var x in s) if (sv[x] !== undefined) s[x] = sv[x];

  var IN = 'style="width:100%;min-width:0;height:38px;padding:0 8px;border:0;border-radius:9px;background:var(--pane);box-shadow:inset 0 0 0 1px var(--line-2);font:inherit;font-size:15px;color:inherit"';
  var LB = 'style="font-size:12px;color:var(--ink-3)"';
  function rowHtml(r, i){
    return '<li data-i="'+i+'" style="display:grid;grid-template-columns:1fr 88px 1.4fr auto;gap:6px;align-items:end;padding:8px 0;border-bottom:1px dashed var(--line-2)">' +
      '<label '+LB+'>Pomieszczenie<input data-f="0" value="'+String(r[0]).replace(/"/g,'&quot;')+'" '+IN.replace('style="','style="font-weight:600;')+'></label>' +
      '<label '+LB+'>m²<input data-f="1" inputmode="decimal" value="'+String(r[1]).replace('.',',')+'" '+IN+'></label>' +
      '<label '+LB+'>Okładzina<select data-f="2" '+IN+'>'+Object.keys(MAT).map(function(k){
        return '<option value="'+k+'"'+(k===r[2]?' selected':'')+'>'+MAT[k].n+'</option>'; }).join('')+'</select></label>' +
      '<button type="button" data-del aria-label="Usuń pomieszczenie" title="Usuń" style="width:38px;height:38px;border:0;border-radius:9px;background:var(--pane-2);color:var(--ink-2);font-size:18px;cursor:pointer">×</button>' +
    '</li>';
  }

  el.innerHTML =
    '<div class="wg-h"><span class="acc-ic"><svg class="ico" aria-hidden="true"><use href="#i-calc"/></svg></span><span>Kalkulator podłóg<small>Pomieszczenia → m² okładzin z odpadem, koszt i opór cieplny</small></span></div>' +
    '<div class="wg-f">' +
      '<div class="wg-row"><span class="wg-l">Pomieszczenia (dom referencyjny ok. 173 m² + garaż)</span><ul id="kpList" style="list-style:none;margin:0;padding:0"></ul>' +
        '<div class="chips"><button type="button" class="chip" id="kpAdd">+ Dodaj pomieszczenie</button><button type="button" class="chip" id="kpReset">Lista domu referencyjnego</button></div></div>' +
      '<div class="wg-row"><label class="wg-l" for="kpSc">Płytki na ścianach łazienek (60 × 120)</label>' +
        '<div class="wg-in sm"><input id="kpSc" inputmode="decimal" autocomplete="off" value="'+String(s.sc).replace('.',',')+'"><span>m²</span></div></div>' +
    '</div>' +
    '<ul class="wg-res" id="kpRes" aria-live="polite"></ul>' +
    '<div class="wg-sum"><span>Podłogi <b class="num" id="kpM2"></b></span><span>Razem <b class="num" id="kpZl"></b></span></div>' +
    '<p class="wg-note">Orientacyjnie, ceny 2026 r. z robocizną, klejem lub podkładem, okolice małego miasta. Odpad: deska ok. 7%, panele 6%, płytki 10%, wielki format ok. 13%. Opór cieplny R z klejem lub podkładem; przy podłogówce zalecane do ok. 0,15 m²·K/W (sprawdź w karcie producenta). Garaż nie ma podłogówki. Listwy i progi są w osobnym kroku.</p>';

  var $ = function(q){ return el.querySelector(q); }, list = $('#kpList');
  function parse(v){ var n = parseFloat(String(v).replace(/\s/g,'').replace(',','.')); return isFinite(n) && n > 0 ? n : 0; }
  function nf(v, d){ return v.toLocaleString('pl-PL', { maximumFractionDigits: d }); }
  function r100(v){ return Math.round(v/100)*100; }
  function draw(){ list.innerHTML = s.list.map(rowHtml).join(''); }

  function calc(){
    var sum = {}, A = 0, lo = 0, hi = 0;
    s.list.forEach(function(r){ var k = MAT[r[2]] ? r[2] : 'deska'; sum[k] = (sum[k] || 0) + (r[1] || 0); A += r[1] || 0; });
    var rows = Object.keys(MAT).filter(function(k){ return sum[k] || (k === 'wf' && s.sc); }).map(function(k){
      var t = MAT[k], net = (sum[k] || 0) + (k === 'wf' ? s.sc : 0), buy = net*(1 + t.odp);
      var a = buy*t.m[0] + net*t.r[0], b = buy*t.m[1] + net*t.r[1]; lo += a; hi += b;
      var rr = k === 'epo' ? 'bez podłogówki' : 'R ok. '+nf(t.R,2)+(t.R > R_MAX ? ' — za dużo' : ' ✓');
      return '<li><span>'+t.n+'<small>'+nf(net,1)+' m² + odpad '+nf(t.odp*100,0)+'% = kup ok. '+nf(Math.ceil(buy),0)+' m² · '+rr+
        (k === 'wf' && s.sc ? ' · w tym ściany '+nf(s.sc,0)+' m²' : '')+'</small></span><b class="num">'+f.money(r100(a), r100(b))+'</b></li>';
    }).join('');
    $('#kpRes').innerHTML = rows +
      '<li class="sub"><span>Podłogi razem<small>'+s.list.length+' pomieszczeń, w tym z podłogówką '+nf(A - (sum.epo || 0),0)+' m²</small></span><b class="num">'+nf(A,0)+' m²</b></li>';
    var m = $('#kpM2'), z = $('#kpZl');
    m.textContent = nf(A,0)+' m²'; z.textContent = f.money(r100(lo), r100(hi));
    [m, z].forEach(function(e){ e.classList.remove('bump'); void e.offsetWidth; e.classList.add('bump'); });
    api.set(s);
  }

  list.addEventListener('input', function(e){
    var li = e.target.closest('li'), k = e.target.dataset.f; if (!li || k == null) return;
    var r = s.list[+li.dataset.i];
    r[k] = k === '1' ? parse(e.target.value) : e.target.value;
    calc();
  });
  list.addEventListener('click', function(e){
    if (!e.target.closest('[data-del]')) return;
    s.list.splice(+e.target.closest('li').dataset.i, 1); draw(); calc();
  });
  $('#kpAdd').addEventListener('click', function(){ s.list.push(['Nowe pomieszczenie', 10, 'deska']); draw(); calc(); });
  $('#kpReset').addEventListener('click', function(){ s.list = DOM.map(function(r){ return r.slice(); }); draw(); calc(); });
  $('#kpSc').addEventListener('input', function(e){ s.sc = parse(e.target.value); calc(); });
  draw(); calc();
});
