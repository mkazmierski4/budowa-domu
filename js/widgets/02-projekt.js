/* Widget „terminarz-formalnosci”: data złożenia wniosku → daty: decyzja, uprawomocnienie, najwcześniejszy start robót.
   Terminy ustawowe (dni kalendarzowe): pozwolenie ≤ 65 dni, odwołanie 14 dni od doręczenia, sprzeciw przy zgłoszeniu 21 dni,
   zawiadomienie o rozpoczęciu robót min. 7 dni przed startem. Doręczenie (3 dni), braki (14 dni) i odwołanie (60 dni) to założenia
   orientacyjne. Stan na 2026 r.; sprawdź aktualne przepisy i praktykę swojego starostwa. */
BUDOWA.addWidget('terminarz-formalnosci', function(el, api){
  var f = api.fmt;
  function iso(d){ return d.getFullYear()+'-'+('0'+(d.getMonth()+1)).slice(-2)+'-'+('0'+d.getDate()).slice(-2); }
  var s = { start: iso(new Date()), sciezka: 'pozwolenie', braki: false, odwolanie: false };
  var sv = api.get(); if (sv) for (var x in s) if (sv[x] !== undefined) s[x] = sv[x];

  function parse(v){ var m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(v||''); return m ? new Date(+m[1], +m[2]-1, +m[3]) : null; }
  function plus(d, n){ var r = new Date(d.getTime()); r.setDate(r.getDate()+n); return r; }
  function fd(d){ return d.toLocaleDateString('pl-PL', { day:'numeric', month:'long', year:'numeric' }); }

  el.innerHTML =
    '<div class="wg-h"><span class="acc-ic"><svg class="ico" aria-hidden="true"><use href="#i-clock"/></svg></span><span>Terminarz formalności<small>Kiedy najwcześniej ruszysz z budową</small></span></div>' +
    '<div class="wg-f">' +
      '<div class="wg-row"><label class="wg-l" for="tfData">Data złożenia wniosku lub zgłoszenia</label>' +
        '<div class="wg-in"><input id="tfData" type="date" value="'+s.start+'"></div></div>' +
      '<div class="wg-row"><span class="wg-l">Droga formalna</span><div class="segctl" role="radiogroup" aria-label="Droga formalna">' +
        '<label><input type="radio" name="tfDroga" value="pozwolenie"'+(s.sciezka==='pozwolenie'?' checked':'')+'>Pozwolenie na budowę</label>' +
        '<label><input type="radio" name="tfDroga" value="zgloszenie"'+(s.sciezka==='zgloszenie'?' checked':'')+'>Zgłoszenie z projektem</label></div></div>' +
      '<div class="tgl">' +
        '<label class="tg"><input type="checkbox" id="tfBraki"'+(s.braki?' checked':'')+'><span class="sw"></span>Urząd wezwał do uzupełnienia braków</label>' +
        '<label class="tg"><input type="checkbox" id="tfOdw"'+(s.odwolanie?' checked':'')+'><span class="sw"></span>Strona (np. sąsiad) się odwołała</label>' +
      '</div>' +
    '</div>' +
    '<ul class="wg-res" id="tfRes" aria-live="polite"></ul>' +
    '<div class="wg-sum"><span>Najwcześniejszy start robót <b class="num" id="tfStart" style="font-size:inherit;font-weight:600"></b></span><span>Od złożenia <b class="num" id="tfDni"></b></span></div>' +
    '<p class="wg-note">Dni kalendarzowe. Zakładamy 3 dni na doręczenie decyzji, 14 dni na uzupełnienie braków i ok. 60 dni na odwołanie do wojewody (orientacyjnie). Urzędy często decydują szybciej niż w terminie granicznym. Zawiadomienie o rozpoczęciu robót składasz najpóźniej 7 dni przed startem.</p>';

  var $ = function(q){ return el.querySelector(q); };
  function row(name, note, d){ return '<li><span>'+name+(note ? '<small>'+note+'</small>' : '')+'</span><b class="num">'+fd(d)+'</b></li>'; }

  function calc(){
    var d0 = parse(s.start), rows = '', end, t = d0;
    if (!d0){ $('#tfRes').innerHTML = '<li><span>Wpisz poprawną datę.</span></li>'; return; }
    rows += row('Złożenie w e-Budownictwie', 'start biegu terminu', d0);
    if (s.braki){ t = plus(t, 14); rows += row('Uzupełnienie braków', 'termin urzędu biegnie od uzupełnienia', t); }
    if (s.sciezka === 'pozwolenie'){
      t = plus(t, 65);
      rows += row('Decyzja o pozwoleniu, najpóźniej', 'ustawowo do 65 dni, w praktyce często 30–50', t);
      t = plus(t, 3 + 14);
      rows += row('Decyzja ostateczna', '14 dni na odwołanie od doręczenia (szybciej, gdy strony zrzekną się odwołania)', t);
      if (s.odwolanie){ t = plus(t, 60); rows += row('Po rozpatrzeniu odwołania', 'wojewoda; orientacyjnie 1–3 mies.', t); }
    } else {
      t = plus(t, 21);
      rows += row('Koniec terminu na sprzeciw', 'brak sprzeciwu w 21 dni = można budować', t);
      if (s.odwolanie){ t = plus(t, 30); rows += row('Gdy urząd się sprzeciwi', 'zostaje droga pozwolenia; poprawki i nowy wniosek, orientacyjnie +30 dni', t); }
    }
    rows += row('Zawiadomienie o rozpoczęciu robót', 'do nadzoru budowlanego, z oświadczeniem kierownika', t);
    end = plus(t, 7);
    rows += '<li class="sub"><span>Wykop najwcześniej</span><b class="num">'+fd(end)+'</b></li>';
    $('#tfRes').innerHTML = rows;
    var bs = $('#tfStart'), bd = $('#tfDni'), n = Math.round((end - d0)/86400000);
    bs.textContent = fd(end); bd.textContent = n+' dni (ok. '+(Math.round(n/30.4*10)/10).toLocaleString('pl-PL')+' mies.)';
    [bs, bd].forEach(function(b){ b.classList.remove('bump'); void b.offsetWidth; b.classList.add('bump'); });
    api.set(s);
  }

  $('#tfData').addEventListener('input', function(){ s.start = this.value; calc(); });
  el.addEventListener('change', function(e){
    var t = e.target;
    if (t.name === 'tfDroga') s.sciezka = t.value;
    if (t.id === 'tfBraki') s.braki = t.checked;
    if (t.id === 'tfOdw') s.odwolanie = t.checked;
    calc();
  });
  calc();
});
