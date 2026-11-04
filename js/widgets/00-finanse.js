/* Widget „kalkulator-raty”: kwota kredytu, okres, oprocentowanie → rata, łączne odsetki, wymagany dochód.
   Wzory: rata równa (annuitet) i rata malejąca. Bez marży zmiennej w czasie i bez opłat dodatkowych, orientacyjnie. */
BUDOWA.addWidget('kalkulator-raty', function(el, api){
  var f = api.fmt;
  var s = { kwota:1000000, lat:25, opr:6.5, malejace:false };
  var sv = api.get(); if (sv) for (var x in s) if (sv[x] !== undefined) s[x] = sv[x];
  var KWOTY = [500000, 750000, 1000000, 1250000], LATA = [15, 20, 25, 30];

  function annuity(P, rYear, n){
    var r = rYear/100/12;
    return r ? P*r/(1 - Math.pow(1+r, -n)) : P/n;
  }

  el.innerHTML =
    '<div class="wg-h"><span class="acc-ic"><svg class="ico" aria-hidden="true"><use href="#i-calc"/></svg></span><span>Kalkulator raty kredytu<small>Rata, odsetki i dochód potrzebny do spłaty</small></span></div>' +
    '<div class="wg-f">' +
      '<div class="wg-row"><label class="wg-l" for="krKw">Kwota kredytu</label>' +
        '<div class="wg-in"><input id="krKw" inputmode="numeric" autocomplete="off" value="'+f.num(s.kwota)+'"><span>zł</span></div>' +
        '<div class="chips">'+KWOTY.map(function(p){ return '<button type="button" class="chip" data-p="'+p+'">'+f.k(p)+' tys.</button>'; }).join('')+'</div></div>' +
      '<div class="wg-row"><label class="wg-l" for="krLat">Okres spłaty</label>' +
        '<div class="wg-in sm"><input id="krLat" inputmode="numeric" autocomplete="off" value="'+s.lat+'"><span>lat</span></div>' +
        '<div class="chips">'+LATA.map(function(y){ return '<button type="button" class="chip" data-y="'+y+'">'+y+' lat</button>'; }).join('')+'</div></div>' +
      '<div class="wg-row"><label class="wg-l" for="krOpr">Oprocentowanie roczne</label>' +
        '<div class="wg-in sm"><input id="krOpr" inputmode="decimal" autocomplete="off" value="'+String(s.opr).replace('.',',')+'"><span>%</span></div></div>' +
      '<div class="wg-row"><span class="wg-l">Rodzaj rat</span><div class="segctl" role="radiogroup" aria-label="Rodzaj rat">' +
        '<label><input type="radio" name="krRodz" value="0"'+(s.malejace?'':' checked')+'>Równe</label>' +
        '<label><input type="radio" name="krRodz" value="1"'+(s.malejace?' checked':'')+'>Malejące</label></div></div>' +
    '</div>' +
    '<ul class="wg-res" id="krRes" aria-live="polite"></ul>' +
    '<div class="wg-sum"><span>Rata miesięczna <b class="num" id="krRata" style="font-size:inherit;font-weight:600"></b></span><span>Odsetki łącznie <b class="num" id="krOds"></b></span></div>' +
    '<p class="wg-note">Obliczenie orientacyjne: stałe oprocentowanie przez cały okres, bez prowizji, ubezpieczeń i okresu budowy (w którym spłacasz tylko odsetki). Dochód liczymy przy racie równej 35% dochodu netto. Aktualne oprocentowanie sprawdź w banku.</p>';

  var $ = function(q){ return el.querySelector(q); };
  function parse(v){ var n = parseFloat(String(v).replace(/\s/g,'').replace(',','.')); return isFinite(n) && n > 0 ? n : 0; }
  function row(name, note, val){ return '<li><span>'+name+(note ? '<small>'+note+'</small>' : '')+'</span><b class="num">'+val+'</b></li>'; }
  function pct(v){ return v.toLocaleString('pl-PL', {maximumFractionDigits:1}); }

  function calc(){
    var P = s.kwota, n = Math.max(1, Math.round(s.lat*12)), r = s.opr/100/12, rows = '', first, last, interest;
    if (s.malejace){
      first = P/n + P*r; last = P/n + (P/n)*r;
      interest = r*P*(n+1)/2;
      rows += row('Pierwsza rata', 'kapitał + odsetki od całej kwoty', f.zl(Math.round(first)));
      rows += row('Ostatnia rata', 'rata maleje co miesiąc', f.zl(Math.round(last)));
    } else {
      first = last = annuity(P, s.opr, n);
      interest = first*n - P;
      rows += row('Rata miesięczna', 'stała przez cały okres', f.zl(Math.round(first)));
    }
    var total = P + interest;
    rows += row('Suma wszystkich spłat', 'kapitał + odsetki', f.zl(Math.round(total)));
    rows += row('Odsetki jako % kapitału', 'ile „kosztuje” pożyczka', pct(P ? interest/P*100 : 0) + '%');
    rows += row('Potrzebny dochód netto', 'rata nie więcej niż 35% dochodu', f.zl(Math.round(first/0.35)) + ' / mies.');
    var hi = s.malejace ? P/n + P*(s.opr+2)/100/12 : annuity(P, s.opr+2, n);
    rows += '<li class="sub"><span>Pierwsza rata przy stopach +2 p.p.<small>test odporności na wzrost stóp</small></span><b class="num">'+f.zl(Math.round(hi))+'</b></li>';
    $('#krRes').innerHTML = rows;
    var br = $('#krRata'), bo = $('#krOds');
    br.textContent = f.zl(Math.round(first)); bo.textContent = f.zl(Math.round(interest));
    [br, bo].forEach(function(b){ b.classList.remove('bump'); void b.offsetWidth; b.classList.add('bump'); });
    [].forEach.call(el.querySelectorAll('.chip[data-p]'), function(ch){ ch.classList.toggle('on', +ch.dataset.p === s.kwota); });
    [].forEach.call(el.querySelectorAll('.chip[data-y]'), function(ch){ ch.classList.toggle('on', +ch.dataset.y === s.lat); });
    api.set(s);
  }

  var kw = $('#krKw'), lat = $('#krLat'), opr = $('#krOpr');
  kw.addEventListener('input', function(){ s.kwota = Math.round(parse(kw.value)); calc(); });
  kw.addEventListener('blur', function(){ kw.value = s.kwota ? f.num(s.kwota) : ''; });
  lat.addEventListener('input', function(){ s.lat = Math.min(35, Math.max(1, Math.round(parse(lat.value)) || 1)); calc(); });
  lat.addEventListener('blur', function(){ lat.value = s.lat; });
  opr.addEventListener('input', function(){ s.opr = Math.min(20, parse(opr.value)); calc(); });
  el.addEventListener('click', function(e){
    var ch = e.target.closest('.chip'); if (!ch) return;
    if (ch.dataset.p){ s.kwota = +ch.dataset.p; kw.value = f.num(s.kwota); }
    if (ch.dataset.y){ s.lat = +ch.dataset.y; lat.value = s.lat; }
    calc();
  });
  el.addEventListener('change', function(e){
    if (e.target.name === 'krRodz'){ s.malejace = e.target.value === '1'; calc(); }
  });
  calc();
});
