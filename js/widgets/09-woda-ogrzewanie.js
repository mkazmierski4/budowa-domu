/* Widget „kalkulator-ogrzewania”: powierzchnia + standard izolacji → projektowe obciążenie cieplne i moc pompy,
   roczne ciepło (ogrzewanie + CWU), prąd pompy ciepła i orientacyjny koszt z PV i bez. Model uproszczony. */
BUDOWA.addWidget('kalkulator-ogrzewania', function(el, api){
  var f = api.fmt;
  // std: [W/m² obciążenia, kWh/m²·rok ciepła na ogrzewanie]
  var STD = {
    nf40: { t: 'Lepiej niż WT2021', w: 25, q: 30 },
    wt:   { t: 'WT2021 + rekuperacja', w: 35, q: 45 },
    wtbr: { t: 'WT2021 bez rekuperacji', w: 45, q: 65 },
    stary:{ t: 'Starszy dom (przed 2014)', w: 70, q: 110 }
  };
  var SIZES = [4, 6, 8, 10, 12, 14, 16];
  var s = { pow:190, std:'wt', os:4, scop:3.5, cena:1.10, pv:true, kwp:6.4 };
  var sv = api.get(); if (sv) for (var x in s) if (sv[x] !== undefined) s[x] = sv[x];
  if (!STD[s.std]) s.std = 'wt';

  function inp(id, label, val, unit){
    return '<div class="wg-row"><label class="wg-l" for="'+id+'">'+label+'</label>' +
      '<div class="wg-in sm"><input id="'+id+'" inputmode="decimal" autocomplete="off" value="'+String(val).replace('.',',')+'"><span>'+unit+'</span></div></div>';
  }
  function chips(name, arr, lab){
    return '<div class="chips">'+arr.map(function(p){
      return '<button type="button" class="chip" data-c="'+name+'" data-p="'+p+'">'+lab(p)+'</button>'; }).join('')+'</div>';
  }

  el.innerHTML =
    '<div class="wg-h"><span class="acc-ic"><svg class="ico" aria-hidden="true"><use href="#i-calc"/></svg></span><span>Kalkulator ogrzewania<small>Moc pompy ciepła i roczny koszt prądu, z fotowoltaiką i bez</small></span></div>' +
    '<div class="wg-f">' +
      inp('koPow', 'Powierzchnia ogrzewana (bez garażu)', s.pow, 'm²') +
      '<div class="wg-row"><span class="wg-l">Standard izolacji</span>' + chips('std', Object.keys(STD), function(k){ return STD[k].t; }) + '</div>' +
      inp('koOs', 'Liczba domowników', s.os, 'os.') +
      '<div class="wg-row"><span class="wg-l">Sprawność sezonowa pompy (SCOP)</span>' + chips('scop', [3, 3.5, 4], function(p){ return String(p).replace('.',','); }) + '</div>' +
      inp('koCena', 'Cena prądu z dystrybucją', s.cena, 'zł/kWh') +
      '<div class="tgl"><label class="tg"><input type="checkbox" id="koPv"'+(s.pv?' checked':'')+'><span class="sw"></span>Fotowoltaika (etap 10)</label></div>' +
      '<div id="koPvBox"'+(s.pv?'':' hidden')+'>' + inp('koKwp', 'Moc PV (14 modułów ≈ 6,4 kWp)', s.kwp, 'kWp') + '</div>' +
    '</div>' +
    '<ul class="wg-res" id="koRes" aria-live="polite"></ul>' +
    '<div class="wg-sum"><span>Pompa ciepła ok. <b class="num" id="koKw"></b></span><span>Prąd za ogrzewanie i CWU <b class="num" id="koZl"></b></span></div>' +
    '<p class="wg-note">Orientacyjnie. Obciążenie cieplne to wskaźnik W/m² dla standardu, a nie obliczenie wg PN-EN 12831: moc pompy dobiera projektant (sprawdź u projektanta). Ciepła woda: ok. 850 kWh na osobę rocznie, sprawność pompy przy CWU 2,8. Fotowoltaika pokrywa bezpośrednio ok. 10% prądu na ogrzewanie (zima to mało słońca) i ok. połowę prądu na CWU, najwyżej 40% rocznej produkcji (ok. 1000 kWh z 1 kWp); resztę rozlicza net-billing, którego tu nie liczymy.</p>';

  var $ = function(q){ return el.querySelector(q); };
  function parse(v){ var n = parseFloat(String(v).replace(/\s/g,'').replace(',','.')); return isFinite(n) && n > 0 ? n : 0; }
  function nf(v, d){ return v.toLocaleString('pl-PL', { maximumFractionDigits: d }); }
  function row(name, note, val){ return '<li><span>'+name+(note ? '<small>'+note+'</small>' : '')+'</span><b class="num">'+val+'</b></li>'; }

  function calc(){
    var st = STD[s.std];
    var load = s.pow * st.w / 1000;
    var need = load * 1.15, size = SIZES[SIZES.length-1];
    for (var i = 0; i < SIZES.length; i++) if (SIZES[i] >= need){ size = SIZES[i]; break; }
    var qH = s.pow * st.q, qW = s.os * 850;
    var eH = s.scop ? qH / s.scop : 0, eW = qW / 2.8, eAll = eH + eW;
    var cost = eAll * s.cena;
    var pvCover = s.pv ? Math.min(0.1 * eH + 0.5 * eW, 0.4 * s.kwp * 1000) : 0;
    var costPv = (eAll - pvCover) * s.cena;
    $('#koRes').innerHTML =
      row('Projektowe obciążenie cieplne', nf(st.w,0)+' W/m² × '+nf(s.pow,0)+' m²', nf(load, 1)+' kW') +
      row('Ciepło na ogrzewanie', nf(st.q,0)+' kWh/m² rocznie', nf(qH, 0)+' kWh') +
      row('Ciepło na ciepłą wodę', nf(s.os,0)+' os. × 850 kWh', nf(qW, 0)+' kWh') +
      row('Prąd zużyty przez pompę', 'SCOP '+nf(s.scop,1)+', CWU 2,8', nf(eAll, 0)+' kWh') +
      row('Koszt bez fotowoltaiki', nf(s.cena,2)+' zł/kWh', f.zl(Math.round(cost))) +
      (s.pv ? row('Prąd pompy z PV wprost', nf(s.kwp,1)+' kWp', '−'+nf(pvCover, 0)+' kWh') : '') +
      '<li class="sub"><span>'+(s.pv ? 'Koszt z fotowoltaiką' : 'Koszt roczny')+'</span><b class="num">'+f.zl(Math.round(s.pv ? costPv : cost))+'</b></li>';
    var bk = $('#koKw'), bz = $('#koZl');
    bk.textContent = size + ' kW'; bz.textContent = f.zl(Math.round(s.pv ? costPv : cost)) + '/rok';
    [bk, bz].forEach(function(b){ b.classList.remove('bump'); void b.offsetWidth; b.classList.add('bump'); });
    [].forEach.call(el.querySelectorAll('.chip'), function(ch){ ch.classList.toggle('on', String(s[ch.dataset.c]) === ch.dataset.p); });
    api.set(s);
  }

  var MAP = { koPow:'pow', koOs:'os', koCena:'cena', koKwp:'kwp' };
  el.addEventListener('input', function(e){
    var k = MAP[e.target.id]; if (!k) return;
    s[k] = parse(e.target.value); calc();
  });
  el.addEventListener('change', function(e){
    if (e.target.id === 'koPv'){ s.pv = e.target.checked; $('#koPvBox').hidden = !s.pv; calc(); }
  });
  el.addEventListener('click', function(e){
    var ch = e.target.closest('.chip'); if (!ch) return;
    s[ch.dataset.c] = ch.dataset.c === 'std' ? ch.dataset.p : +ch.dataset.p; calc();
  });
  calc();
});
