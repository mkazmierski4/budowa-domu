/* Widget „kalkulator-ogrodu”: powierzchnie i długości (podjazd, taras, trawnik, ogrodzenie, basen) → koszt, czas pracy ekip
   i porównanie z limitem kategorii „ogród” 280 tys. zł (pergola w 2. roku, stopy od razu). Stawki to środek widełek z kroków etapu 15, z robocizną.
   Ceny orientacyjne, 2026 r., okolice małego miasta. */
BUDOWA.addWidget('kalkulator-ogrodu', function(el, api){
  var f = api.fmt, LIMIT = 280000;
  // zł/m² lub zł/mb z robocizną; dni: wydajność ekipy (m² lub mb na dzień)
  var KOSTKA = 200, KOSTKA_D = 12;              // ok. 110 m² na podbudowie z etapu 03
  var TARAS = 580, TARAS_D = 4;                  // płyta ze spadkiem + gres na wspornikach
  var DACH = 1290, DACH_UDZ = 0.65;              // zadaszenie szklane nad ok. 2/3 tarasu
  var TRAW = { siew:{ n:'Z siewu', zl:9.5, d:150 }, rolka:{ n:'Z rolki', zl:30, d:120 } };
  var NAW = 17.5, NAW_D = 150;                   // nawadnianie automatyczne na m² trawnika
  var FRONT = 640, FRONT_D = 4, PANEL = 155, PANEL_D = 25, BRAMA = 15250, BRAMA_DNI = 3;
  var BASEN = {
    brak:{ n:'Bez basenu', zl:0, tyg:0 },
    stal:{ n:'Stalowy', zl:70500, tyg:3.5 },
    pol:{ n:'Poliestrowy', zl:92500, tyg:4 },
    bet:{ n:'Betonowy', zl:125500, tyg:8 }
  };
  // reszta etapu (środek widełek z kroków): projekt, odwodnienie, opaska, humus, oświetlenie, nasadzenia, domek, wiaty
  var RESZTA = [['projekt ogrodu', 4500], ['deszczówka i skrzynki rozsączające', 10000], ['opaska żwirowa', 4000], ['humus i niwelacja', 5000],
                ['oświetlenie 12–24 V', 8000], ['żywopłot, drzewa, rabaty', 12500], ['domek, wiata na kubły, drewutnia', 10500], ['stopy pod pergolę', 1100]];
  var PERGOLA = 8500;
  var s = { podjazd:110, taras:32, dach:true, trawnik:600, tr:'siew', naw:true, front:25, boki:110, brama:true, basen:'pol', pergola:false };
  var sv = api.get(); if (sv) for (var x in s) if (sv[x] !== undefined) s[x] = sv[x];

  function seg(name, map, cur){
    return '<div class="segctl" role="radiogroup">'+Object.keys(map).map(function(k){
      return '<label><input type="radio" name="'+name+'" value="'+k+'"'+(k===cur?' checked':'')+'>'+map[k].n+'</label>'; }).join('')+'</div>';
  }
  function inp(id, lab, v, unit){
    return '<div class="wg-row"><label class="wg-l" for="'+id+'">'+lab+'</label><div class="wg-in"><input id="'+id+'" inputmode="decimal" autocomplete="off" value="'+v+'"><span>'+unit+'</span></div></div>';
  }
  function tg(id, lab, on){ return '<label class="tg"><input type="checkbox" id="'+id+'"'+(on?' checked':'')+'><span class="sw"></span>'+lab+'</label>'; }

  el.innerHTML =
    '<div class="wg-h"><span class="acc-ic"><svg class="ico" aria-hidden="true"><use href="#i-calc"/></svg></span><span>Kalkulator ogrodu<small>Powierzchnie i długości → koszt, czas ekip i limit 280 tys. zł</small></span></div>' +
    '<div class="wg-f">' +
      inp('koPj', 'Podjazd i ścieżki (kostka)', s.podjazd, 'm²') +
      inp('koTa', 'Taras (gres na wspornikach)', s.taras, 'm²') +
      inp('koTr', 'Trawnik', s.trawnik, 'm²') +
      '<div class="wg-row"><span class="wg-l">Trawnik</span>' + seg('koTrS', TRAW, s.tr) + '</div>' +
      inp('koFr', 'Ogrodzenie od ulicy (przęsła)', s.front, 'mb') +
      inp('koBo', 'Ogrodzenie boki i tył (panel 3D)', s.boki, 'mb') +
      '<div class="wg-row"><span class="wg-l">Basen 4,2 × 8,5 m</span>' + seg('koBa', BASEN, s.basen) + '</div>' +
      '<div class="tgl">' +
        tg('koDach', 'Zadaszenie szklane tarasu', s.dach) +
        tg('koNaw', 'Nawadnianie automatyczne', s.naw) +
        tg('koBr', 'Brama przesuwna z napędem i furtka', s.brama) +
        tg('koPe', 'Pergola już w 1. roku (plan: w 2. roku)', s.pergola) +
      '</div>' +
    '</div>' +
    '<ul class="wg-res" id="koRes" aria-live="polite"></ul>' +
    '<div class="wg-sum"><span>Czas ekip <b class="num" id="koT" style="font-size:inherit;font-weight:600"></b></span><span>Razem <b class="num" id="koAll"></b></span></div>' +
    '<p class="wg-note">Ceny to środek widełek z kroków etapu, z robocizną; oferty różnią się o ok. ±15%. Czas to suma dni pracy ekip (część robót idzie równolegle), bez produkcji bramy i zadaszenia (3–8 tyg.). Pozostałe pozycje etapu liczone stałą kwotą.</p>';

  var $ = function(q){ return el.querySelector(q); };
  function parse(v){ var n = parseFloat(String(v).replace(/\s/g,'').replace(',','.')); return isFinite(n) && n >= 0 ? n : 0; }
  function nf(v, d){ return v.toLocaleString('pl-PL', { maximumFractionDigits: d || 0 }); }
  function row(name, note, val, cls){ return '<li'+(cls?' class="'+cls+'"':'')+'><span>'+name+(note ? '<small>'+note+'</small>' : '')+'</span><b class="num">'+val+'</b></li>'; }
  function k(v){ return f.zl(Math.round(v/100)*100); }
  function dni(v){ return v > 0 ? 'ok. '+nf(Math.max(1, Math.round(v)))+' dni' : ''; }

  function calc(){
    var rows = '', tot = 0, d = 0;
    function add(name, note, zl, days){ tot += zl; d += days || 0; rows += row(name, note + (days ? (note ? ', ' : '') + dni(days) : ''), k(zl)); }
    var b = BASEN[s.basen], t = TRAW[s.tr];
    if (b.zl) add('Basen: '+b.n.toLowerCase(), 'z techniką, pompą ciepła i plażą', b.zl, b.tyg*5);
    add('Podjazd i ścieżki', nf(s.podjazd)+' m² kostki', s.podjazd*KOSTKA, s.podjazd/KOSTKA_D);
    add('Taras', nf(s.taras)+' m², płyta + gres', s.taras*TARAS, s.taras/TARAS_D);
    if (s.dach) add('Zadaszenie szklane', 'ok. '+nf(s.taras*DACH_UDZ)+' m² (ok. 2/3 tarasu)', s.taras*DACH_UDZ*DACH, 2);
    add('Ogrodzenie', nf(s.front)+' mb przęseł + '+nf(s.boki)+' mb panelu', s.front*FRONT + s.boki*PANEL, s.front/FRONT_D + s.boki/PANEL_D);
    if (s.brama) add('Brama, furtka, skrzynka', 'napęd, fotokomórki, elektrozaczep', BRAMA, BRAMA_DNI);
    if (s.naw) add('Nawadnianie', nf(s.trawnik)+' m² trawnika + linia kroplująca', s.trawnik*NAW, Math.max(3, s.trawnik/NAW_D));
    add('Trawnik '+t.n.toLowerCase(), nf(s.trawnik)+' m²', s.trawnik*t.zl, s.trawnik/t.d);
    if (s.pergola) add('Pergola drewniana', 'ok. 3 × 4 m', PERGOLA, 4);
    var r = RESZTA.reduce(function(a, x){ return a + x[1]; }, 0);
    add('Reszta etapu', RESZTA.map(function(x){ return x[0]; }).join(', '), r, 15);
    var over = tot - LIMIT;
    rows += over > 0
      ? row('<span style="color:var(--red)">Ponad limit o '+k(over)+'</span>', 'do 2. roku: '+(s.pergola ? 'pergola (ok. 8,5 tys.), ' : '')+'zadaszenie tarasu (ok. 27 tys.), część drzew; basenu nie przesuwaj, bo potrzebuje ciężkiego sprzętu', '!', 'sub')
      : row('W limicie, zostaje '+k(-over), 'limit kategorii „ogród” 280 tys. zł'+(s.pergola ? '' : ', pergola w 2. roku'), '✓', 'sub');
    $('#koRes').innerHTML = rows;
    var a = $('#koT'), c = $('#koAll');
    a.textContent = 'ok. '+nf(d/5, 0)+' tyg.'; c.textContent = k(tot);
    [a, c].forEach(function(e){ e.classList.remove('bump'); void e.offsetWidth; e.classList.add('bump'); });
    api.set(s);
  }

  var IN = { koPj:'podjazd', koTa:'taras', koTr:'trawnik', koFr:'front', koBo:'boki' };
  var TG = { koDach:'dach', koNaw:'naw', koBr:'brama', koPe:'pergola' };
  el.addEventListener('input', function(e){
    var t = e.target; if (!IN[t.id]) return;
    s[IN[t.id]] = parse(t.value); calc();
  });
  el.addEventListener('change', function(e){
    var t = e.target;
    if (t.name === 'koTrS') s.tr = t.value;
    else if (t.name === 'koBa') s.basen = t.value;
    else if (TG[t.id]) s[TG[t.id]] = t.checked;
    else return;
    calc();
  });
  calc();
});
