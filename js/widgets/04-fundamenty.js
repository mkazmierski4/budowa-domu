/* Widget „kalkulator-betonu”: wymiary ław → objętość betonu z zapasem, liczba gruszek, orientacyjny koszt.
   Domyślnie dom referencyjny: ok. 76 m ław (obwód ok. 58 m + ściany nośne), przekrój 60 × 35 cm,
   chudy beton 10 cm i o 5 cm szerszy z każdej strony. Ceny brutto z 2026 r., orientacyjnie (okolice małego miasta). */
BUDOWA.addWidget('kalkulator-betonu', function(el, api){
  var f = api.fmt;
  var PRICE = { 'C16/20': 460, 'C20/25': 490, 'C25/30': 530 };
  var CHUDY_PRICE = 410, PUMP = 1600;
  var s = { dl:76, sz:60, wy:35, klasa:'C16/20', zapas:8, cap:8, chudy:true, pompa:true };
  var sv = api.get(); if (sv) for (var x in s) if (sv[x] !== undefined) s[x] = sv[x];

  el.innerHTML =
    '<div class="wg-h"><span class="acc-ic"><svg class="ico" aria-hidden="true"><use href="#i-calc"/></svg></span><span>Kalkulator betonu na ławy<small>Ile m³, ile gruszek i ile to kosztuje</small></span></div>' +
    '<div class="wg-f">' +
      '<div class="wg-row"><label class="wg-l" for="kbDl">Łączna długość ław</label>' +
        '<div class="wg-in"><input id="kbDl" inputmode="decimal" autocomplete="off" value="'+String(s.dl).replace('.',',')+'"><span>m</span></div>' +
        '<small class="wg-hint">z rzutu fundamentów: obwód + ławy pod ścianami nośnymi</small></div>' +
      '<div class="wg-row"><span class="wg-l">Przekrój ławy</span>' +
        '<div class="wg-in sm"><input id="kbSz" inputmode="numeric" aria-label="Szerokość ławy w centymetrach" value="'+s.sz+'"><span>cm szer.</span></div>' +
        '<div class="wg-in sm"><input id="kbWy" inputmode="numeric" aria-label="Wysokość ławy w centymetrach" value="'+s.wy+'"><span>cm wys.</span></div></div>' +
      '<div class="wg-row"><span class="wg-l">Klasa betonu ław</span><div class="segctl" role="radiogroup" aria-label="Klasa betonu">' +
        Object.keys(PRICE).map(function(k){ return '<label><input type="radio" name="kbKl" value="'+k+'"'+(s.klasa===k?' checked':'')+'>'+k+'</label>'; }).join('') + '</div></div>' +
      '<div class="wg-row"><span class="wg-l">Zapas na nierówności dna i straty</span>' +
        '<div class="chips" data-g="zapas">'+[5,8,12].map(function(p){ return '<button type="button" class="chip" data-p="'+p+'">'+p+'%</button>'; }).join('')+'</div></div>' +
      '<div class="wg-row"><span class="wg-l">Pojemność gruszki</span>' +
        '<div class="chips" data-g="cap">'+[6,8,9].map(function(p){ return '<button type="button" class="chip" data-p="'+p+'">'+p+' m³</button>'; }).join('')+'</div></div>' +
      '<div class="tgl">' +
        '<label class="tg"><input type="checkbox" id="kbChudy"'+(s.chudy?' checked':'')+'><span class="sw"></span>Chudy beton 10 cm</label>' +
        '<label class="tg"><input type="checkbox" id="kbPompa"'+(s.pompa?' checked':'')+'><span class="sw"></span>Pompa do ław</label>' +
      '</div>' +
    '</div>' +
    '<ul class="wg-res" id="kbRes" aria-live="polite"></ul>' +
    '<div class="wg-sum"><span>Beton do zamówienia <b class="num" id="kbV" style="font-size:inherit;font-weight:600"></b></span><span>Orientacyjny koszt <b class="num" id="kbK"></b></span></div>' +
    '<p class="wg-note" id="kbNote"></p>';

  var $ = function(q){ return el.querySelector(q); };
  function parse(v){ var n = parseFloat(String(v).replace(/\s/g,'').replace(',','.')); return isFinite(n) && n > 0 ? n : 0; }
  function m3(x){ return x.toLocaleString('pl-PL', { maximumFractionDigits:1 }) + ' m³'; }
  function round5(x){ return Math.ceil(x*2 - 1e-9) / 2; }   // zamawia się z dokładnością do 0,5 m³
  function row(name, note, val){ return '<li><span>'+name+(note ? '<small>'+note+'</small>' : '')+'</span><b class="num">'+val+'</b></li>'; }
  function pour(v){
    var n = Math.floor(v / s.cap + 1e-9), rest = Math.round((v - n*s.cap) * 10) / 10;
    var txt = [];
    if (n) txt.push(n+' × '+s.cap+' m³');
    if (rest > 0) txt.push(m3(rest));
    return { trucks: n + (rest > 0 ? 1 : 0), txt: txt.join(' + '), rest: rest };
  }

  function calc(){
    var z = 1 + s.zapas/100, rows = '', warn = '';
    var vLawa = s.dl * s.sz/100 * s.wy/100, oLawa = round5(vLawa * z), pl = pour(oLawa);
    var cost = oLawa * PRICE[s.klasa] + (s.pompa ? PUMP : 0), vAll = oLawa;
    rows += row('Ława '+s.sz+' × '+s.wy+' cm, '+s.klasa, m3(vLawa)+' w obrysie + '+s.zapas+'% zapasu', m3(oLawa));
    rows += row('Dostawy na ławy', pl.txt, pl.trucks+' '+(pl.trucks === 1 ? 'gruszka' : pl.trucks < 5 ? 'gruszki' : 'gruszek'));
    if (pl.rest > 0 && pl.rest < 1) warn = 'Ostatnia gruszka na ławy to tylko '+m3(pl.rest)+': betoniarnie często doliczają za niepełny transport. Zmniejsz zapas albo dobierz pojemność, jeśli ławy na to pozwalają. ';
    if (s.chudy){
      var vCh = s.dl * (s.sz + 10)/100 * 0.10, oCh = round5(vCh * z), pc = pour(oCh);
      cost += oCh * CHUDY_PRICE; vAll += oCh;
      rows += row('Chudy beton C8/10, 10 cm', m3(vCh)+' (szerszy o 5 cm z każdej strony) + zapas', m3(oCh));
      rows += row('Dostawy na chudy beton', pc.txt+', zwykle rynną, bez pompy', pc.trucks+' '+(pc.trucks === 1 ? 'gruszka' : pc.trucks < 5 ? 'gruszki' : 'gruszek'));
    }
    rows += row('Beton ław', f.zl(Math.round(oLawa * PRICE[s.klasa]))+' ('+f.num(PRICE[s.klasa])+' zł/m³)', '');
    if (s.chudy) rows += row('Chudy beton', f.zl(Math.round(oCh * CHUDY_PRICE))+' ('+f.num(CHUDY_PRICE)+' zł/m³)', '');
    if (s.pompa) rows += row('Pompa', 'dojazd i praca, orientacyjnie', f.zl(PUMP));
    $('#kbRes').innerHTML = rows.replace(/<b class="num"><\/b>/g, '');
    var bv = $('#kbV'), bk = $('#kbK');
    bv.textContent = m3(vAll); bk.textContent = f.zl(Math.round(cost));
    [bv, bk].forEach(function(b){ b.classList.remove('bump'); void b.offsetWidth; b.classList.add('bump'); });
    $('#kbNote').textContent = warn + 'Koszt dotyczy samego betonu i pompy, bez stali, szalunku i robocizny. Ceny brutto orientacyjne, zapytaj 2–3 betoniarnie. Przy ławie betonowanej w gruncie, bez szalunku, daj zapas 12%.';
    [].forEach.call(el.querySelectorAll('.chips'), function(g){
      [].forEach.call(g.querySelectorAll('.chip'), function(ch){ ch.classList.toggle('on', +ch.dataset.p === s[g.dataset.g]); });
    });
    api.set(s);
  }

  [['#kbDl','dl'], ['#kbSz','sz'], ['#kbWy','wy']].forEach(function(p){
    var inp = $(p[0]);
    inp.addEventListener('input', function(){ s[p[1]] = parse(inp.value); calc(); });
  });
  el.addEventListener('click', function(e){
    var ch = e.target.closest('.chip'); if (!ch) return;
    s[ch.parentNode.dataset.g] = +ch.dataset.p; calc();
  });
  el.addEventListener('change', function(e){
    var t = e.target;
    if (t.name === 'kbKl') s.klasa = t.value;
    if (t.id === 'kbChudy') s.chudy = t.checked;
    if (t.id === 'kbPompa') s.pompa = t.checked;
    calc();
  });
  calc();
});
