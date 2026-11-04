/* Widget „kalkulator-wylewki”: powierzchnia + grubość → objętość jastrychu, orientacyjny czas schnięcia
   i koszt dla trzech technologii (anhydryt, cementowa płynna, miksokret). Model uproszczony. */
BUDOWA.addWidget('kalkulator-wylewki', function(el, api){
  var f = api.fmt;
  // r: robocizna zł/m² [min,max], m: materiał zł/m³ [min,max], sz: szlif zł/m², dry: tyg./cm do 4 cm i powyżej, start: dni do wygrzewania, cm: próg CM z podłogówką
  var TECH = {
    anh: { t: 'Anhydrytowa', r: [15, 20], m: [650, 850], sz: [5, 8], dry: [1, 1.5], start: 7, cm: '0,3%' },
    cpl: { t: 'Cementowa płynna', r: [15, 20], m: [600, 780], sz: [0, 0], dry: [1, 2], start: 21, cm: '1,5–1,8%' },
    mix: { t: 'Miksokret', r: [20, 28], m: [350, 450], sz: [0, 0], dry: [1, 2], start: 21, cm: '1,5–1,8%' }
  };
  var s = { pow: 170, gr: 6.5, wyb: 'anh', grz: true };
  var sv = api.get(); if (sv) for (var x in s) if (sv[x] !== undefined) s[x] = sv[x];
  if (!TECH[s.wyb]) s.wyb = 'anh';

  function inp(id, label, val, unit){
    return '<div class="wg-row"><label class="wg-l" for="'+id+'">'+label+'</label>' +
      '<div class="wg-in sm"><input id="'+id+'" inputmode="decimal" autocomplete="off" value="'+String(val).replace('.',',')+'"><span>'+unit+'</span></div></div>';
  }

  el.innerHTML =
    '<div class="wg-h"><span class="acc-ic"><svg class="ico" aria-hidden="true"><use href="#i-calc"/></svg></span><span>Kalkulator wylewki<small>Objętość, czas schnięcia i koszt trzech technologii</small></span></div>' +
    '<div class="wg-f">' +
      inp('kwPow', 'Powierzchnia wylewki (ogrzewana część ok. 170 m²)', s.pow, 'm²') +
      inp('kwGr', 'Grubość (przekrój: 6,5 cm)', s.gr, 'cm') +
      '<div class="wg-row"><span class="wg-l">Technologia do podsumowania</span><div class="chips">' +
        Object.keys(TECH).map(function(k){ return '<button type="button" class="chip" data-p="'+k+'">'+TECH[k].t+'</button>'; }).join('') + '</div></div>' +
      '<div class="tgl"><label class="tg"><input type="checkbox" id="kwGrz"'+(s.grz?' checked':'')+'><span class="sw"></span>Wygrzewanie podłogówką (skraca schnięcie)</label></div>' +
    '</div>' +
    '<ul class="wg-res" id="kwRes" aria-live="polite"></ul>' +
    '<div class="wg-sum"><span>Jastrych <b class="num" id="kwM3"></b></span><span>Schnięcie ok. <b class="num" id="kwT"></b></span><span>Koszt <b class="num" id="kwZl"></b></span></div>' +
    '<p class="wg-note">Orientacyjnie, ceny 2026 r. z robocizną, okolice małego miasta. Objętość z zapasem 5%. Schnięcie cementu: ok. 1 tydzień na cm do 4 cm i ok. 2 tygodnie na każdy kolejny cm (20°C, dobre wietrzenie); anhydryt szybciej; wygrzewanie skraca czas o ok. 30%. O gotowości do układania podłogi decyduje tylko pomiar CM i karta producenta okładziny.</p>';

  var $ = function(q){ return el.querySelector(q); };
  function parse(v){ var n = parseFloat(String(v).replace(/\s/g,'').replace(',','.')); return isFinite(n) && n > 0 ? n : 0; }
  function nf(v, d){ return v.toLocaleString('pl-PL', { maximumFractionDigits: d }); }
  function weeks(t){
    var w = Math.min(s.gr, 4) * t.dry[0] + Math.max(s.gr - 4, 0) * t.dry[1];
    if (s.grz) w = Math.max(t.start / 7 + 1, w * 0.7);
    return Math.ceil(w);
  }
  function cost(t, i){ return Math.round((s.pow * (t.r[i] + t.sz[i]) + s.pow * s.gr / 100 * t.m[i]) / 100) * 100; }

  function calc(){
    var m3 = s.pow * s.gr / 100 * 1.05;
    var rows = Object.keys(TECH).map(function(k){
      var t = TECH[k], on = k === s.wyb;
      return '<li'+(on ? ' class="sub"' : '')+'><span>'+t.t+'<small>ok. '+weeks(t)+' tyg. · grzanie od ok. '+t.start+'. dnia · próg CM orient. '+t.cm+'</small></span>' +
        '<b class="num">'+f.money(cost(t,0), cost(t,1))+'</b></li>';
    }).join('');
    $('#kwRes').innerHTML =
      '<li><span>Objętość jastrychu<small>'+nf(s.pow,0)+' m² × '+nf(s.gr,1)+' cm + 5%</small></span><b class="num">'+nf(m3,1)+' m³</b></li>' + rows;
    var t = TECH[s.wyb];
    $('#kwM3').textContent = nf(m3, 1) + ' m³';
    $('#kwT').textContent = weeks(t) + ' tyg.';
    $('#kwZl').textContent = f.money(cost(t,0), cost(t,1));
    ['#kwM3','#kwT','#kwZl'].forEach(function(q){ var b = $(q); b.classList.remove('bump'); void b.offsetWidth; b.classList.add('bump'); });
    [].forEach.call(el.querySelectorAll('.chip'), function(ch){ ch.classList.toggle('on', ch.dataset.p === s.wyb); });
    api.set(s);
  }

  var MAP = { kwPow: 'pow', kwGr: 'gr' };
  el.addEventListener('input', function(e){
    var k = MAP[e.target.id]; if (!k) return;
    s[k] = parse(e.target.value); calc();
  });
  el.addEventListener('change', function(e){ if (e.target.id === 'kwGrz'){ s.grz = e.target.checked; calc(); } });
  el.addEventListener('click', function(e){
    var ch = e.target.closest('.chip'); if (!ch) return;
    s.wyb = ch.dataset.p; calc();
  });
  calc();
});
