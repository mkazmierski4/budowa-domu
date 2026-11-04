/* Widget „kalkulator-dachu”: rzut domu (+ garaż), kąt i okapy → powierzchnia połaci, dachówki, łaty, membrana, koszt.
   Dach dwuspadowy, kalenica równolegle do dłuższego boku domu. Garaż: dach dwuspadowy prostopadły, tylną ścianą przy domu
   (bez okapu od strony domu). Ceny jednostkowe orientacyjne, 2026 r., okolice małego miasta (materiał + robocizna). */
BUDOWA.addWidget('kalkulator-dachu', function(el, api){
  var f = api.fmt;
  var s = { dl:13, sz:9.5, okap:0.4, kat:40, garaz:true, gdl:7, gsz:6.5, poz:'cer' };
  var sv = api.get(); if (sv) for (var x in s) if (sv[x] !== undefined) s[x] = sv[x];

  // roz = rozstaw łat (m), szt = sztuk na m², c = zł/m² połaci (min, max) razem z robocizną i akcesoriami
  var POK = {
    cer:   { n:'Dachówka ceramiczna', roz:0.33, szt:10, c:[160,215] },
    bet:   { n:'Dachówka betonowa',   roz:0.33, szt:10, c:[105,150] },
    blach: { n:'Blachodachówka',      roz:0.35, szt:0,  c:[90,135] },
    rab:   { n:'Blacha na rąbek',     roz:0,    szt:0,  c:[235,320] }
  };
  var WIEZBA = [165, 220], MEMLATY = [31, 47]; // zł/m² połaci
  var KROKWIE = 0.8;                            // rozstaw krokwi, m

  function inp(id, label, val, unit){
    return '<div class="wg-row"><label class="wg-l" for="'+id+'">'+label+'</label>' +
      '<div class="wg-in sm"><input id="'+id+'" inputmode="decimal" autocomplete="off" value="'+String(val).replace('.',',')+'"><span>'+unit+'</span></div></div>';
  }
  function chips(name, arr, unit){
    return '<div class="chips">'+arr.map(function(p){
      return '<button type="button" class="chip" data-c="'+name+'" data-p="'+p+'">'+String(p).replace('.',',')+' '+unit+'</button>'; }).join('')+'</div>';
  }

  el.innerHTML =
    '<div class="wg-h"><span class="acc-ic"><svg class="ico" aria-hidden="true"><use href="#i-calc"/></svg></span><span>Kalkulator dachu<small>Rzut, kąt i okapy → połać, materiał i koszt</small></span></div>' +
    '<div class="wg-f">' +
      inp('kdDl', 'Długość domu (wzdłuż kalenicy)', s.dl, 'm') + inp('kdSz', 'Szerokość domu (rozpiętość)', s.sz, 'm') +
      '<div class="wg-row"><span class="wg-l">Kąt nachylenia</span>' + chips('kat', [35, 40, 45], '°') + '</div>' +
      '<div class="wg-row"><span class="wg-l">Okap</span>' + chips('okap', [0.3, 0.4, 0.5, 0.6], 'm') + '</div>' +
      '<div class="tgl"><label class="tg"><input type="checkbox" id="kdGaraz"'+(s.garaz?' checked':'')+'><span class="sw"></span>Garaż z dachem prostopadłym</label></div>' +
      '<div id="kdGBox"'+(s.garaz?'':' hidden')+'>' + inp('kdGdl', 'Długość garażu', s.gdl, 'm') + inp('kdGsz', 'Szerokość garażu (rozpiętość)', s.gsz, 'm') + '</div>' +
      '<div class="wg-row"><span class="wg-l">Pokrycie</span><div class="chips">' +
        Object.keys(POK).map(function(k){ return '<button type="button" class="chip" data-pok="'+k+'">'+POK[k].n+'</button>'; }).join('') +
      '</div></div>' +
    '</div>' +
    '<ul class="wg-res" id="kdRes" aria-live="polite"></ul>' +
    '<div class="wg-sum"><span>Połać dachu <b class="num" id="kdArea" style="font-size:inherit;font-weight:600"></b></span><span>Koszt dachu <b class="num" id="kdCost"></b></span></div>' +
    '<p class="wg-note">Obliczenie uproszczone: dwie prostokątne połacie, bez koszy, lukarn i wycięć na okna. Kosztu nie obejmują obróbki, okna dachowe, rynny i dodatki (osobne kroki). Do zamówienia dolicz odpad, zwykle 5–10% (przy kosztach, kalenicach i obróbkach więcej). Ostateczne ilości poda dekarz po obejrzeniu więźby.</p>';

  var $ = function(q){ return el.querySelector(q); };
  function parse(v){ var n = parseFloat(String(v).replace(/\s/g,'').replace(',','.')); return isFinite(n) && n > 0 ? n : 0; }
  function nf(v, d){ return v.toLocaleString('pl-PL', { maximumFractionDigits: d }); }
  function row(name, note, val){ return '<li><span>'+name+(note ? '<small>'+note+'</small>' : '')+'</span><b class="num">'+val+'</b></li>'; }
  function rd(v, step){ return Math.round(v / step) * step; }

  function calc(){
    var a = s.kat * Math.PI / 180, cs = Math.cos(a), o = s.okap, p = POK[s.poz];
    var kr = (s.sz / 2 + o) / cs;                       // długość krokwi z okapem
    var main = 2 * kr * (s.dl + 2 * o);
    var gar = s.garaz ? 2 * ((s.gsz / 2 + o) / cs) * (s.gdl + o) : 0;
    var area = main + gar, rise = s.sz / 2 * Math.tan(a);
    var rows =
      row('Połać domu', 'krokiew z okapem ok. '+nf(kr,1)+' m', nf(main,0)+' m²') +
      (s.garaz ? row('Połać garażu', 'dach prostopadły, bez okapu od strony domu', nf(gar,0)+' m²') : '') +
      row('Kalenica nad ścianką kolankową', 'rozpiętość '+nf(s.sz,1)+' m, kąt '+s.kat+'°', nf(rise,1)+' m') +
      row('Membrana wstępnego krycia', 'połać + ok. 12% na zakłady i zawinięcia', nf(area*1.12,0)+' m²') +
      row('Kontrłaty', 'co ok. '+String(KROKWIE).replace('.',',')+' m, wzdłuż krokwi', nf(area/KROKWIE,0)+' mb');
    if (p.roz) rows += row('Łaty', 'rozstaw ok. '+nf(p.roz*100,0)+' cm (wg producenta pokrycia)', nf(area/p.roz,0)+' mb');
    else rows += row('Deskowanie pełne pod rąbek', 'deski 22–25 mm na kontrłatach', nf(area,0)+' m²');
    if (p.szt) rows += row('Dachówki', 'ok. '+p.szt+' szt./m², z zapasem 5%', nf(Math.ceil(area*p.szt*1.05),0)+' szt.');
    else rows += row('Blacha', 'połać + ok. 8% na zakłady i docinki', nf(area*1.08,0)+' m²');
    var cMin = area * (WIEZBA[0] + MEMLATY[0] + p.c[0]), cMax = area * (WIEZBA[1] + MEMLATY[1] + p.c[1]);
    rows += row('Więźba z robocizną', nf(WIEZBA[0],0)+'–'+nf(WIEZBA[1],0)+' zł/m² połaci', f.money(rd(area*WIEZBA[0],500), rd(area*WIEZBA[1],500))) +
      row('Membrana, kontrłaty i łaty', nf(MEMLATY[0],0)+'–'+nf(MEMLATY[1],0)+' zł/m²', f.money(rd(area*MEMLATY[0],500), rd(area*MEMLATY[1],500))) +
      row(p.n, nf(p.c[0],0)+'–'+nf(p.c[1],0)+' zł/m² z montażem', f.money(rd(area*p.c[0],500), rd(area*p.c[1],500)));
    $('#kdRes').innerHTML = rows;
    var ba = $('#kdArea'), bc = $('#kdCost');
    ba.textContent = nf(area,0)+' m²'; bc.textContent = f.money(rd(cMin,1000), rd(cMax,1000));
    [ba, bc].forEach(function(b){ b.classList.remove('bump'); void b.offsetWidth; b.classList.add('bump'); });
    [].forEach.call(el.querySelectorAll('.chip[data-c]'), function(ch){ ch.classList.toggle('on', +ch.dataset.p === s[ch.dataset.c]); });
    [].forEach.call(el.querySelectorAll('.chip[data-pok]'), function(ch){ ch.classList.toggle('on', ch.dataset.pok === s.poz); });
    api.set(s);
  }

  var MAP = { kdDl:'dl', kdSz:'sz', kdGdl:'gdl', kdGsz:'gsz' };
  el.addEventListener('input', function(e){
    var k = MAP[e.target.id]; if (!k) return;
    s[k] = parse(e.target.value); calc();
  });
  el.addEventListener('change', function(e){
    if (e.target.id === 'kdGaraz'){ s.garaz = e.target.checked; $('#kdGBox').hidden = !s.garaz; calc(); }
  });
  el.addEventListener('click', function(e){
    var ch = e.target.closest('.chip'); if (!ch) return;
    if (ch.dataset.pok) s.poz = ch.dataset.pok; else s[ch.dataset.c] = +ch.dataset.p;
    calc();
  });
  calc();
});
