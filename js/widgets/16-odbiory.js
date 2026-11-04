/* Widget „lista-odbiorow”: data przeprowadzki → lista dokumentów z terminami (dni przed / po przeprowadzce) i statusem.
   Terminy orientacyjne: zawiadomienie o zakończeniu budowy = 14 dni na sprzeciw PINB + doręczenie i zapas;
   pozwolenie na użytkowanie = kontrola do 21 dni + decyzja + 14 dni na uprawomocnienie (ok. 60 dni przed).
   Po przeprowadzce: IN-1 i deklaracja śmieciowa 14 dni, meldunek i dowód rejestracyjny 30 dni. Stan na 2026 r. */
BUDOWA.addWidget('lista-odbiorow', function(el, api){
  function iso(d){ return d.getFullYear()+'-'+('0'+(d.getMonth()+1)).slice(-2)+'-'+('0'+d.getDate()).slice(-2); }
  function parse(v){ var m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(v||''); return m ? new Date(+m[1], +m[2]-1, +m[3]) : null; }
  function plus(d, n){ var r = new Date(d.getTime()); r.setDate(r.getDate()+n); return r; }
  function fd(d){ return d.toLocaleDateString('pl-PL', { day:'numeric', month:'short' }); }
  function today(){ var t = new Date(); return new Date(t.getFullYear(), t.getMonth(), t.getDate()); }

  // [id, nazwa, kto/uwaga, dni względem przeprowadzki, tylko dla drogi]
  var ITEMS = [
    ['pomiary', 'Pomiary elektryczne', 'elektryk z uprawnieniami, po białym montażu', -60],
    ['proby', 'Próby szczelności i uruchomienie PC', 'hydraulik, serwis pompy ciepła', -60],
    ['reku', 'Protokół regulacji rekuperacji', 'instalator, przepływy', -50],
    ['numer', 'Wniosek o numer porządkowy', 'urząd gminy', -50],
    ['kominiarz', 'Odbiór kominiarski', 'komin kominka i wentylacja', -45],
    ['geodeta', 'Inwentaryzacja geodezyjna', 'geodeta, mapa do zawiadomienia', -45],
    ['n50', 'Test szczelności n50 (opcjonalnie)', 'firma z drzwiami nawiewnymi', -45],
    ['sche', 'Świadectwo energetyczne', 'audytor z wykazu, numer z rejestru', -35],
    ['usterki', 'Odbiór końcowy i lista usterek', 'każdy wykonawca, protokół z terminami', -35],
    ['kierownik', 'Oświadczenie kierownika i wpis w EDB', 'po komplecie protokołów', -30],
    ['zaw', 'Zawiadomienie o zakończeniu budowy', 'PINB, 14 dni na sprzeciw od doręczenia', -21, 'zawiadomienie'],
    ['poz', 'Wniosek o pozwolenie na użytkowanie', 'PINB, kontrola do 21 dni + decyzja ostateczna', -60, 'pozwolenie'],
    ['media', 'Umowy na media docelowe', 'prąd (taryfa), woda, oczyszczalnia, internet', -14],
    ['polisa', 'Polisa domu z cesją na bank', 'start najpóźniej w dniu wprowadzki', -3],
    ['bank', 'Dokumenty do banku', 'ostatnia transza, obniżenie marży', 0],
    ['in1', 'Informacja IN-1 do podatku', 'gmina, 14 dni', 14],
    ['smieci', 'Deklaracja śmieciowa', 'gmina, 14 dni od zamieszkania', 14],
    ['meldunek', 'Meldunek', 'gov.pl / mObywatel / urząd, do 30 dni', 30],
    ['auto', 'Adres w dowodzie rejestracyjnym', 'wydział komunikacji, 30 dni', 30],
    ['rok', 'Przegląd domu po roku', 'okna, rysy, kaucje gwarancyjne', 330]
  ];
  var ST = ['do zrobienia', 'w toku', 'gotowe'];
  var STY = ['background:var(--pane-2);color:var(--ink-2)', 'background:var(--wood-soft);color:var(--ink)', 'background:var(--moss-soft);color:var(--moss)'];

  var s = { data: iso(plus(today(), 90)), droga: 'zawiadomienie', st: {} };
  var sv = api.get(); if (sv) for (var x in s) if (sv[x] !== undefined) s[x] = sv[x];

  el.innerHTML =
    '<div class="wg-h"><span class="acc-ic"><svg class="ico" aria-hidden="true"><use href="#i-listcheck"/></svg></span><span>Lista odbiorów i dokumentów<small>Terminy liczone od planowanej przeprowadzki</small></span></div>' +
    '<div class="wg-f">' +
      '<div class="wg-row"><label class="wg-l" for="loData">Planowana przeprowadzka</label>' +
        '<div class="wg-in"><input id="loData" type="date" value="'+s.data+'"></div></div>' +
      '<div class="wg-row"><span class="wg-l">Oddanie do użytkowania</span><div class="segctl" role="radiogroup" aria-label="Oddanie do użytkowania">' +
        '<label><input type="radio" name="loDroga" value="zawiadomienie"'+(s.droga==='zawiadomienie'?' checked':'')+'>Zawiadomienie</label>' +
        '<label><input type="radio" name="loDroga" value="pozwolenie"'+(s.droga==='pozwolenie'?' checked':'')+'>Pozwolenie na użytkowanie</label></div></div>' +
    '</div>' +
    '<ul class="wg-res" id="loRes" aria-live="polite"></ul>' +
    '<div class="wg-sum"><span>Do przeprowadzki <b class="num" id="loDni"></b></span><span>Gotowe <b class="num" id="loGot"></b></span></div>' +
    '<p class="wg-note" id="loNote"></p>';

  var $ = function(q){ return el.querySelector(q); };

  function calc(){
    var d0 = parse(s.data), t0 = today(), rows = '', done = 0, all = 0, late = 0, past = false;
    if (!d0){ $('#loRes').innerHTML = '<li><span>Wpisz poprawną datę.</span></li>'; return; }
    ITEMS.forEach(function(it){
      if (it[4] && it[4] !== s.droga) return;
      var st = s.st[it[0]] || 0, d = plus(d0, it[3]), left = Math.round((d - t0)/86400000);
      all++; if (st === 2) done++;
      var lt = st !== 2 && left < 0;
      if (lt) late++;
      if (!past && it[3] > 0){ past = true; rows += '<li class="sub"><span>Po przeprowadzce</span><b></b></li>'; }
      var when = st === 2 ? '' : lt ? '<small style="color:var(--rust)">po terminie '+(-left)+' dni</small>' : '<small>za '+left+' dni</small>';
      rows += '<li><span><button type="button" data-id="'+it[0]+'" aria-label="'+it[1]+': '+ST[st]+'. Zmień status" style="border:0;cursor:pointer;font:inherit;font-size:12.5px;font-weight:600;padding:3px 9px;border-radius:9px;margin:0 8px 4px 0;'+STY[st]+'">'+ST[st]+'</button>' +
        (st === 2 ? '<s style="color:var(--ink-3)">'+it[1]+'</s>' : it[1])+'<small>'+it[2]+'</small></span>' +
        '<b class="num" style="text-align:right">'+fd(d)+when+'</b></li>';
    });
    $('#loRes').innerHTML = rows;
    var n = Math.round((d0 - t0)/86400000), bd = $('#loDni'), bg = $('#loGot');
    bd.textContent = n >= 0 ? n+' dni' : 'po przeprowadzce';
    bg.textContent = done+' / '+all;
    [bd, bg].forEach(function(b){ b.classList.remove('bump'); void b.offsetWidth; b.classList.add('bump'); });
    $('#loNote').innerHTML = (late ? '<b style="color:var(--rust)">Zaległe: '+late+'.</b> ' : '') +
      (s.droga === 'zawiadomienie'
        ? 'Zawiadomienie złóż najpóźniej ok. 3 tygodnie przed przeprowadzką: 14 dni na sprzeciw liczy się od doręczenia kompletu.'
        : 'Pozwolenie na użytkowanie: kontrola PINB do 21 dni od wniosku, potem decyzja i jej uprawomocnienie. Zamieszkać można po decyzji ostatecznej.') +
      ' Kliknij status, żeby go zmienić. Terminy orientacyjne; sprawdź wymagania swojego PINB i banku.';
    api.set(s);
  }

  $('#loData').addEventListener('input', function(){ s.data = this.value; calc(); });
  el.addEventListener('change', function(e){ if (e.target.name === 'loDroga'){ s.droga = e.target.value; calc(); } });
  el.addEventListener('click', function(e){
    var b = e.target.closest('button[data-id]'); if (!b) return;
    var id = b.dataset.id; s.st[id] = ((s.st[id] || 0) + 1) % 3; calc();
    var nb = el.querySelector('button[data-id="'+id+'"]'); if (nb) nb.focus();
  });
  calc();
});
