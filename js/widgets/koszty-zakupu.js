/* Widget „koszty-zakupu”: cena działki → PCC 2%, taksa notarialna, wpisy do KW, razem.
   Stawki: taksa maksymalna wg rozporządzenia o maksymalnych stawkach taksy notarialnej (+23% VAT),
   opłaty sądowe za wpisy do KW, PCC 2% przy zakupie od osoby prywatnej. Stan na 2026 r., orientacyjnie. */
BUDOWA.addWidget('koszty-zakupu', function(el, api){
  var VAT = 0.23, f = api.fmt;
  var s = { cena:215000, vat:false, kredyt:true, posrednik:false, prow:2.5 };
  var sv = api.get(); if (sv) for (var x in s) if (sv[x] !== undefined) s[x] = sv[x];

  // Maksymalna taksa notarialna netto od wartości przedmiotu umowy
  function taksa(v){
    if (v <= 3000) return 100;
    if (v <= 10000) return 100 + 0.03*(v-3000);
    if (v <= 30000) return 310 + 0.02*(v-10000);
    if (v <= 60000) return 710 + 0.01*(v-30000);
    if (v <= 1000000) return 1010 + 0.004*(v-60000);
    if (v <= 2000000) return 4770 + 0.002*(v-1000000);
    return Math.min(10000, 6770 + 0.0025*(v-2000000));
  }
  var PRESETS = [190000, 215000, 240000, 300000];

  el.innerHTML =
    '<div class="wg-h"><span class="acc-ic"><svg class="ico" aria-hidden="true"><use href="#i-calc"/></svg></span><span>Kalkulator kosztów zakupu<small>Ile zapłacisz oprócz ceny działki</small></span></div>' +
    '<div class="wg-f">' +
      '<div class="wg-row"><label class="wg-l" for="kzCena">Cena działki</label>' +
        '<div class="wg-in"><input id="kzCena" inputmode="numeric" autocomplete="off" value="'+f.num(s.cena)+'"><span>zł</span></div>' +
        '<div class="chips">'+PRESETS.map(function(p){ return '<button type="button" class="chip" data-p="'+p+'">'+f.k(p)+' tys.</button>'; }).join('')+'</div></div>' +
      '<div class="wg-row"><span class="wg-l">Sprzedający</span><div class="segctl" role="radiogroup" aria-label="Sprzedający">' +
        '<label><input type="radio" name="kzVat" value="0"'+(s.vat?'':' checked')+'>Osoba prywatna</label>' +
        '<label><input type="radio" name="kzVat" value="1"'+(s.vat?' checked':'')+'>Firma z VAT</label></div></div>' +
      '<div class="tgl">' +
        '<label class="tg"><input type="checkbox" id="kzKredyt"'+(s.kredyt?' checked':'')+'><span class="sw"></span>Kupuję na kredyt</label>' +
        '<label class="tg"><input type="checkbox" id="kzPos"'+(s.posrednik?' checked':'')+'><span class="sw"></span>Przez pośrednika</label>' +
        '<div class="wg-in sm" id="kzProwBox"'+(s.posrednik?'':' hidden')+'><input id="kzProw" inputmode="decimal" aria-label="Prowizja pośrednika w procentach" value="'+String(s.prow).replace('.',',')+'"><span>%</span></div>' +
      '</div>' +
    '</div>' +
    '<ul class="wg-res" id="kzRes" aria-live="polite"></ul>' +
    '<div class="wg-sum"><span>Koszty zakupu razem <b class="num" id="kzSum" style="font-size:inherit;font-weight:600"></b></span><span>Razem z ceną <b class="num" id="kzAll"></b></span></div>' +
    '<p class="wg-note">Taksa to stawka maksymalna, notariusz może policzyć mniej. Wypisy aktu zależą od liczby stron. Kupując od firmy z VAT płacisz podatek w cenie (23% dla działki budowlanej) i nie płacisz PCC.</p>';

  var $ = function(q){ return el.querySelector(q); };
  function parse(v){ var n = parseFloat(String(v).replace(/\s/g,'').replace(',','.')); return isFinite(n) && n > 0 ? n : 0; }
  function row(name, note, val){ return '<li><span>'+name+(note ? '<small>'+note+'</small>' : '')+'</span><b class="num">'+f.zl(val)+'</b></li>'; }

  function calc(){
    var c = s.cena, rows = '', sum = 0;
    function add(name, note, v){ v = Math.round(v); sum += v; rows += row(name, note, v); }
    if (s.vat) rows += row('PCC', 'nie płacisz: VAT jest w cenie', 0);
    else add('Podatek PCC 2%', 'od wartości rynkowej, pobiera notariusz', c*0.02);
    var t = taksa(c);
    add('Taksa notarialna', 'maks. '+f.zl(Math.round(t))+' netto + 23% VAT', t*(1+VAT));
    add('Wypisy aktu notarialnego', 'szacunkowo, ok. 3–4 wypisy', 250);
    add('Wniosek do księgi wieczystej', 'sporządza notariusz, 200 zł + VAT', 200*(1+VAT));
    add('Wpis własności do KW', 'opłata sądowa', 200);
    if (s.kredyt){
      add('Wpis hipoteki do KW', 'opłata sądowa', 200);
      add('PCC od ustanowienia hipoteki', 'stała stawka', 19);
    }
    if (s.posrednik && s.prow > 0) add('Prowizja pośrednika', String(s.prow).replace('.',',')+'% + 23% VAT', c*s.prow/100*(1+VAT));
    $('#kzRes').innerHTML = rows + '<li class="sub"><span>Koszty jako procent ceny</span><b class="num">'+(c ? (sum/c*100).toLocaleString('pl-PL',{maximumFractionDigits:1}) : '0')+'%</b></li>';
    var bs = $('#kzSum'), ba = $('#kzAll');
    bs.textContent = f.zl(sum); ba.textContent = f.zl(c+sum);
    [bs, ba].forEach(function(b){ b.classList.remove('bump'); void b.offsetWidth; b.classList.add('bump'); });
    [].forEach.call(el.querySelectorAll('.chip'), function(ch){ ch.classList.toggle('on', +ch.dataset.p === c); });
    api.set(s);
  }

  var cena = $('#kzCena');
  cena.addEventListener('input', function(){ s.cena = Math.round(parse(cena.value)); calc(); });
  cena.addEventListener('blur', function(){ cena.value = s.cena ? f.num(s.cena) : ''; });
  el.addEventListener('click', function(e){
    var ch = e.target.closest('.chip'); if (!ch) return;
    s.cena = +ch.dataset.p; cena.value = f.num(s.cena); calc();
  });
  el.addEventListener('change', function(e){
    var t = e.target;
    if (t.name === 'kzVat') s.vat = t.value === '1';
    if (t.id === 'kzKredyt') s.kredyt = t.checked;
    if (t.id === 'kzPos'){ s.posrednik = t.checked; $('#kzProwBox').hidden = !t.checked; }
    calc();
  });
  $('#kzProw').addEventListener('input', function(){ s.prow = Math.min(10, parse(this.value)); calc(); });
  calc();
});
