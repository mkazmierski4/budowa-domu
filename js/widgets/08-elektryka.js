/* Widget „kalkulator-punktow”: pomieszczenia → gniazda, punkty świetlne, łączniki, obwody i orientacyjny koszt rozprowadzenia.
   Liczby punktów to typowe wartości dla domu ok. 190 m²; „komfort” dodaje ok. 30% gniazd i światła.
   Ceny orientacyjne, 2026 r., okolice małego miasta (materiał + robocizna, bez osprzętu i opraw). */
BUDOWA.addWidget('kalkulator-punktow', function(el, api){
  var f = api.fmt;
  // g = gniazda, s = punkty świetlne (z taśmami), l = łączniki, d = obwody dedykowane (opis)
  var ROOMS = {
    salon:   { n:'Salon z kominkiem',          g:12, s:7, l:4, d:[] },
    kuchnia: { n:'Kuchnia z wyspą',            g:10, s:6, l:3, d:['płyta indukcyjna (3 f)', 'piekarnik', 'zmywarka'] },
    sypial:  { n:'Sypialnia',                  g:7,  s:3, l:3, d:[] },
    dziecko: { n:'Pokój dziecięcy',            g:6,  s:2, l:2, d:[] },
    gabinet: { n:'Gabinet / pokój gościnny',   g:6,  s:2, l:1, d:[] },
    lazienka:{ n:'Łazienka',                   g:3,  s:4, l:2, d:['grzejnik drabinkowy'] },
    silownia:{ n:'Siłownia',                   g:6,  s:3, l:1, d:['bieżnia / sprzęt'] },
    garaz:   { n:'Garaż 2-stanowiskowy',       g:6,  s:3, l:2, d:['ładowarka auta (3 f)', 'napęd bramy'] },
    hol:     { n:'Hol, korytarz, schody',      g:3,  s:5, l:4, d:[] },
    tech:    { n:'Pom. techniczne / pralnia',  g:5,  s:1, l:1, d:['pompa ciepła (3 f)', 'pralka', 'suszarka', 'szafka RACK'] }
  };
  var DEF = { salon:1, kuchnia:1, sypial:1, dziecko:2, gabinet:1, lazienka:2, silownia:1, garaz:1, hol:2, tech:1 };
  var FIXED = ['rekuperator', 'zewnętrzne: elewacja i taras', 'zewnętrzne: ogród i basen (zapas)'];
  var PKT = [115, 155], DED = [300, 500], ROZ = [3000, 4500], ROZ_OBW = [70, 110]; // zł
  var s = { c: Object.assign({}, DEF), kom: false };
  var sv = api.get(); if (sv){ if (sv.c) Object.assign(s.c, sv.c); s.kom = !!sv.kom; }

  var btn = 'style="width:32px;height:32px;border:0;border-radius:9px;background:var(--pane-2);color:var(--ink);font-size:18px;font-weight:600;cursor:pointer"';
  el.innerHTML =
    '<div class="wg-h"><span class="acc-ic"><svg class="ico" aria-hidden="true"><use href="#i-calc"/></svg></span><span>Kalkulator punktów<small>Pomieszczenia → gniazda, światło, obwody i koszt</small></span></div>' +
    '<div class="wg-f">' +
      '<div class="wg-row"><span class="wg-l">Standard wyposażenia</span><div class="segctl" role="radiogroup">' +
        '<label><input type="radio" name="kpStd" value="0"'+(s.kom?'':' checked')+'>Standard</label>' +
        '<label><input type="radio" name="kpStd" value="1"'+(s.kom?' checked':'')+'>Komfort (+30%)</label></div></div>' +
      '<div class="wg-row"><span class="wg-l">Pomieszczenia w domu</span><ul style="list-style:none;margin:0;padding:0;display:grid">' +
        Object.keys(ROOMS).map(function(k){
          return '<li style="display:flex;align-items:center;justify-content:space-between;gap:10px;padding:6px 0;border-bottom:1px dashed var(--line-2)">' +
            '<span style="font-size:15px;color:var(--ink-2)">'+ROOMS[k].n+'</span>' +
            '<span style="display:flex;align-items:center;gap:8px;flex:none">' +
              '<button type="button" data-r="'+k+'" data-d="-1" aria-label="Mniej: '+ROOMS[k].n+'" '+btn+'>−</button>' +
              '<b class="num" id="kp_'+k+'" style="min-width:20px;text-align:center;font-weight:600"></b>' +
              '<button type="button" data-r="'+k+'" data-d="1" aria-label="Więcej: '+ROOMS[k].n+'" '+btn+'>+</button></span></li>';
        }).join('') + '</ul></div>' +
    '</div>' +
    '<ul class="wg-res" id="kpRes" aria-live="polite"></ul>' +
    '<div class="wg-sum"><span>Obwody <b class="num" id="kpObw" style="font-size:inherit;font-weight:600"></b></span><span>Rozprowadzenie i rozdzielnica <b class="num" id="kpCost"></b></span></div>' +
    '<p class="wg-note">Liczby typowe, do skorygowania w projekcie. Koszt obejmuje przewody, puszki, robociznę i rozdzielnicę z aparaturą, bez osprzętu (gniazd, ramek), opraw, LAN i alarmu. Obwody: oświetlenie ok. 10 punktów, gniazda ok. 8 na obwód, osobno każde duże urządzenie.</p>';

  var $ = function(q){ return el.querySelector(q); };
  function row(name, note, val){ return '<li><span>'+name+(note ? '<small>'+note+'</small>' : '')+'</span><b class="num">'+val+'</b></li>'; }
  function lista(arr){ var n = {}; arr.forEach(function(x){ n[x] = (n[x] || 0) + 1; }); return Object.keys(n).map(function(x){ return x + (n[x] > 1 ? ' ×' + n[x] : ''); }).join(', '); }
  function rd(v){ return Math.round(v / 500) * 500; }

  function calc(){
    var m = s.kom ? 1.3 : 1, g = 0, sw = 0, l = 0, ded = FIXED.slice(), obwG = 0, obwS = 0;
    Object.keys(ROOMS).forEach(function(k){
      var r = ROOMS[k], n = s.c[k] || 0;
      $('#kp_'+k).textContent = n;
      if (!n) return;
      var rg = Math.round(r.g*m), rs = Math.round(r.s*m);
      g += rg*n; sw += rs*n; l += r.l*n;
      obwG += n * Math.ceil(rg / 8);
      for (var i = 0; i < n; i++) r.d.forEach(function(x){ ded.push(x); });
    });
    obwS = Math.ceil(sw / 10);
    var pkt = g + sw + l, obw = obwG + obwS + ded.length;
    var cMin = pkt*PKT[0] + ded.length*DED[0] + ROZ[0] + obw*ROZ_OBW[0], cMax = pkt*PKT[1] + ded.length*DED[1] + ROZ[1] + obw*ROZ_OBW[1];
    $('#kpRes').innerHTML =
      row('Gniazda 230 V', 'podwójne liczone jako 1 punkt', g+' szt.') +
      row('Punkty świetlne', 'wypusty, oczka, taśmy, kinkiety', sw+' szt.') +
      row('Łączniki', 'w tym schodowe i krzyżowe', l+' szt.') +
      row('Obwody gniazd', 'ok. 8 gniazd na obwód, osobno w pomieszczeniach', obwG) +
      row('Obwody oświetlenia', 'ok. 10 punktów na obwód', obwS) +
      row('Obwody dedykowane', lista(ded), ded.length) +
      row('Punkty razem', f.money(PKT[0], PKT[1]).replace(/ zł$/, '')+' zł za punkt', pkt+' pkt') +
      row('Rozdzielnica z aparaturą', 'RCD 30 mA w grupach, SPD T1+T2, zapas 20–30%', f.money(rd(ROZ[0]+obw*ROZ_OBW[0]), rd(ROZ[1]+obw*ROZ_OBW[1])));
    var bo = $('#kpObw'), bc = $('#kpCost');
    bo.textContent = obw; bc.textContent = f.money(rd(cMin), rd(cMax));
    [bo, bc].forEach(function(b){ b.classList.remove('bump'); void b.offsetWidth; b.classList.add('bump'); });
    api.set(s);
  }

  el.addEventListener('click', function(e){
    var b = e.target.closest('button[data-r]'); if (!b) return;
    var k = b.dataset.r; s.c[k] = Math.max(0, Math.min(6, (s.c[k] || 0) + +b.dataset.d)); calc();
  });
  el.addEventListener('change', function(e){ if (e.target.name === 'kpStd'){ s.kom = e.target.value === '1'; calc(); } });
  calc();
});
