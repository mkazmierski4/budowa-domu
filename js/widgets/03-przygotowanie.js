/* Widget „kalkulator-humusu”: wymiary domu + zapas wokół + grubość humusu → m³ w stanie rodzimym i w hałdzie,
   liczba kursów wywrotki i orientacyjny koszt wywozu. Obrys uproszczony: dom + garaż obok (wzdłuż dłuższego boku). */
BUDOWA.addWidget('kalkulator-humusu', function(el, api){
  var f = api.fmt;
  var s = { dl:13, sz:9.5, garaz:true, gdl:6.5, gsz:7, zapas:3, gr:30, extra:120, spulch:1.25, wyw:10, kurs:380 };
  var sv = api.get(); if (sv) for (var x in s) if (sv[x] !== undefined) s[x] = sv[x];

  var GR = [20, 30, 40], WYW = [8, 10, 12];
  function inp(id, label, val, unit){
    return '<div class="wg-row"><label class="wg-l" for="'+id+'">'+label+'</label>' +
      '<div class="wg-in sm"><input id="'+id+'" inputmode="decimal" autocomplete="off" value="'+String(val).replace('.',',')+'"><span>'+unit+'</span></div></div>';
  }
  function chips(name, arr, cur, unit){
    return '<div class="chips">'+arr.map(function(p){
      return '<button type="button" class="chip" data-c="'+name+'" data-p="'+p+'">'+p+' '+unit+'</button>'; }).join('')+'</div>';
  }

  el.innerHTML =
    '<div class="wg-h"><span class="acc-ic"><svg class="ico" aria-hidden="true"><use href="#i-calc"/></svg></span><span>Kalkulator humusu<small>Ile ziemi zdjąć, ile jej będzie i ile kursów wywrotki</small></span></div>' +
    '<div class="wg-f">' +
      inp('khDl', 'Długość domu', s.dl, 'm') + inp('khSz', 'Szerokość domu', s.sz, 'm') +
      '<div class="tgl"><label class="tg"><input type="checkbox" id="khGaraz"'+(s.garaz?' checked':'')+'><span class="sw"></span>Garaż w bryle, obok domu</label></div>' +
      '<div id="khGBox"'+(s.garaz?'':' hidden')+'>' + inp('khGdl', 'Długość garażu', s.gdl, 'm') + inp('khGsz', 'Szerokość garażu', s.gsz, 'm') + '</div>' +
      inp('khZapas', 'Zapas wokół budynku', s.zapas, 'm') +
      inp('khExtra', 'Droga dojazdowa i plac składowy', s.extra, 'm²') +
      '<div class="wg-row"><span class="wg-l">Grubość humusu</span>' + chips('gr', GR, s.gr, 'cm') + '</div>' +
      '<div class="wg-row"><span class="wg-l">Wywrotka</span>' + chips('wyw', WYW, s.wyw, 'm³') + '</div>' +
      inp('khKurs', 'Cena kursu wywrotki', s.kurs, 'zł') +
    '</div>' +
    '<ul class="wg-res" id="khRes" aria-live="polite"></ul>' +
    '<div class="wg-sum"><span>Humus w hałdzie <b class="num" id="khLoose" style="font-size:inherit;font-weight:600"></b></span><span>Kursy wywrotki <b class="num" id="khTrips"></b></span></div>' +
    '<p class="wg-note">Obrys uproszczony do prostokątów. Humus po zdjęciu zwiększa objętość o ok. 20–30% (przyjęto 25%). Cena kursu zależy od odległości i miejsca zwałki, więc to wartość orientacyjna: zapytaj lokalne firmy transportowe. Przy składowaniu na działce wywozu nie potrzebujesz.</p>';

  var $ = function(q){ return el.querySelector(q); };
  function parse(v){ var n = parseFloat(String(v).replace(/\s/g,'').replace(',','.')); return isFinite(n) && n > 0 ? n : 0; }
  function nf(v, d){ return v.toLocaleString('pl-PL', { maximumFractionDigits: d }); }
  function row(name, note, val){ return '<li><span>'+name+(note ? '<small>'+note+'</small>' : '')+'</span><b class="num">'+val+'</b></li>'; }

  function calc(){
    var z = s.zapas;
    var area = (s.dl + 2*z) * (s.sz + 2*z);
    if (s.garaz) area += s.gdl * (s.gsz + 2*z);
    var total = area + s.extra;
    var rod = total * s.gr / 100, loose = rod * s.spulch;
    var trips = loose ? Math.ceil(loose / s.wyw) : 0;
    $('#khRes').innerHTML =
      row('Powierzchnia budynku z zapasem', 'dom' + (s.garaz ? ' + garaż' : '') + ' + '+nf(z,1)+' m wokół', nf(area, 0)+' m²') +
      row('Powierzchnia do zdjęcia razem', 'z drogą i placem składowym', nf(total, 0)+' m²') +
      row('Humus w gruncie', nf(s.gr,0)+' cm grubości', nf(rod, 1)+' m³') +
      row('Humus po zdjęciu, w hałdzie', 'spulchnienie ×'+nf(s.spulch,2), nf(loose, 1)+' m³') +
      '<li class="sub"><span>Orientacyjny koszt wywozu całości</span><b class="num">'+f.zl(Math.round(trips * s.kurs))+'</b></li>';
    var bl = $('#khLoose'), bt = $('#khTrips');
    bl.textContent = nf(loose, 0)+' m³'; bt.textContent = String(trips);
    [bl, bt].forEach(function(b){ b.classList.remove('bump'); void b.offsetWidth; b.classList.add('bump'); });
    [].forEach.call(el.querySelectorAll('.chip'), function(ch){ ch.classList.toggle('on', +ch.dataset.p === s[ch.dataset.c]); });
    api.set(s);
  }

  var MAP = { khDl:'dl', khSz:'sz', khGdl:'gdl', khGsz:'gsz', khZapas:'zapas', khExtra:'extra', khKurs:'kurs' };
  el.addEventListener('input', function(e){
    var k = MAP[e.target.id]; if (!k) return;
    s[k] = parse(e.target.value); calc();
  });
  el.addEventListener('change', function(e){
    if (e.target.id === 'khGaraz'){ s.garaz = e.target.checked; $('#khGBox').hidden = !s.garaz; calc(); }
  });
  el.addEventListener('click', function(e){
    var ch = e.target.closest('.chip'); if (!ch) return;
    s[ch.dataset.c] = +ch.dataset.p; calc();
  });
  calc();
});
