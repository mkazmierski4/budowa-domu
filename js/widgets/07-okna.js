/* Widget „kalkulator-okien”: lista okien → powierzchnia, obwód, koszt okien wg profilu, montaż, rolety
   i roczne straty ciepła przez okna (A · Uw + obwód · ψ montażu) w porównaniu z oknami dwuszybowymi.
   Ceny i współczynniki orientacyjne, 2026 r., okolice małego miasta. Stopniogodziny sezonu ok. 90 kKh (Polska centralna). */
BUDOWA.addWidget('kalkulator-okien', function(el, api){
  var f = api.fmt;
  // zł/m² dla PVC (środek widełek, okleina antracyt z zewnątrz, montaż standardowy) i Uw dla PVC
  var TYP = {
    rozw: { n:'Rozwierno-uchylne', cena:1400, du:0 },
    stale:{ n:'Stałe',             cena:1000, du:-0.08 },
    balk: { n:'Drzwi balkonowe',   cena:1450, du:0.02 },
    hs:   { n:'HS przesuwne',      cena:2900, du:0.05 }
  };
  var PROF = {
    pvc:  { n:'PVC',          k:1,    uw:0.80 },
    alu:  { n:'Aluminium',    k:1.65, uw:0.90 },
    drew: { n:'Drewno',       k:1.45, uw:0.85 },
    da:   { n:'Drewno-alu',   k:2.0,  uw:0.82 }
  };
  // montaż: zł/mb obwodu, ψ styku W/(m·K)
  var MONT = {
    wys:  { n:'W ociepleniu', zl:165, psi:0.03 },
    lico: { n:'Na licu muru', zl:100, psi:0.07 },
    pia:  { n:'Sama pianka',  zl:60,  psi:0.15 }
  };
  var UW2 = 1.2, KKH = 90, ZL_KWH = 0.31, ROLETA = 2100, ROL_HS = 2.5;
  var DOM = [
    ['Salon: HS na taras', 400, 240, 1, 'hs'],
    ['Salon: przeszklenia boczne', 120, 240, 2, 'stale'],
    ['Jadalnia: drzwi tarasowe', 100, 240, 1, 'balk'],
    ['Kuchnia', 180, 120, 1, 'rozw'],
    ['Siłownia, gabinet', 120, 150, 2, 'rozw'],
    ['WC, pralnia', 90, 90, 2, 'rozw'],
    ['Garaż', 100, 60, 1, 'rozw'],
    ['Sypialnia (szczyt)', 140, 150, 2, 'rozw'],
    ['Pokój dziecięcy (szczyt)', 120, 150, 2, 'rozw'],
    ['Łazienka poddasze', 90, 120, 1, 'rozw'],
    ['Klatka schodowa', 80, 200, 1, 'rozw']
  ];
  var s = { prof:'pvc', mont:'wys', rol:true, list:DOM.map(function(r){ return r.slice(); }) };
  var sv = api.get(); if (sv) for (var x in s) if (sv[x] !== undefined) s[x] = sv[x];

  function seg(name, map, cur){
    return '<div class="segctl" role="radiogroup">'+Object.keys(map).map(function(k){
      return '<label><input type="radio" name="'+name+'" value="'+k+'"'+(k===cur?' checked':'')+'>'+map[k].n+'</label>'; }).join('')+'</div>';
  }
  var IN = 'style="width:100%;min-width:0;height:38px;padding:0 8px;border:0;border-radius:9px;background:var(--pane);box-shadow:inset 0 0 0 1px var(--line-2);font:inherit;font-size:15px;color:inherit"';
  function rowHtml(r, i){
    return '<li data-i="'+i+'" style="display:grid;grid-template-columns:1fr 1fr 1fr auto;gap:6px;padding:10px 0;border-bottom:1px dashed var(--line-2)">' +
      '<input data-f="0" aria-label="Okno" value="'+String(r[0]).replace(/"/g,'&quot;')+'" '+IN.replace('style="','style="grid-column:1/-2;font-weight:600;')+'>' +
      '<button type="button" data-del aria-label="Usuń okno" title="Usuń" style="grid-row:1;grid-column:-2/-1;width:38px;height:38px;border:0;border-radius:9px;background:var(--pane-2);color:var(--ink-2);font-size:18px;cursor:pointer">×</button>' +
      '<label style="font-size:12px;color:var(--ink-3)">Szer. cm<input data-f="1" inputmode="numeric" value="'+r[1]+'" '+IN+'></label>' +
      '<label style="font-size:12px;color:var(--ink-3)">Wys. cm<input data-f="2" inputmode="numeric" value="'+r[2]+'" '+IN+'></label>' +
      '<label style="font-size:12px;color:var(--ink-3)">Szt.<input data-f="3" inputmode="numeric" value="'+r[3]+'" '+IN+'></label>' +
      '<label style="font-size:12px;color:var(--ink-3);grid-column:1/-1">Rodzaj<select data-f="4" '+IN+'>'+Object.keys(TYP).map(function(k){
        return '<option value="'+k+'"'+(k===r[4]?' selected':'')+'>'+TYP[k].n+'</option>'; }).join('')+'</select></label>' +
    '</li>';
  }

  el.innerHTML =
    '<div class="wg-h"><span class="acc-ic"><svg class="ico" aria-hidden="true"><use href="#i-calc"/></svg></span><span>Kalkulator okien<small>Lista okien → powierzchnia, koszt i straty ciepła</small></span></div>' +
    '<div class="wg-f">' +
      '<div class="wg-row"><span class="wg-l">Profil</span>' + seg('koProf', PROF, s.prof) + '</div>' +
      '<div class="wg-row"><span class="wg-l">Montaż</span>' + seg('koMont', MONT, s.mont) + '</div>' +
      '<label class="tg"><input type="checkbox" id="koRol"'+(s.rol?' checked':'')+'><span class="sw"></span>Rolety podtynkowe z napędem</label>' +
      '<div class="wg-row"><span class="wg-l">Okna i drzwi balkonowe</span><ul id="koList" style="list-style:none;margin:0;padding:0"></ul>' +
        '<div class="chips"><button type="button" class="chip" id="koAdd">+ Dodaj okno</button><button type="button" class="chip" id="koReset">Lista domu referencyjnego</button></div></div>' +
    '</div>' +
    '<ul class="wg-res" id="koRes" aria-live="polite"></ul>' +
    '<div class="wg-sum"><span>Przeszklenia <b class="num" id="koM2" style="font-size:inherit;font-weight:600"></b></span><span>Razem <b class="num" id="koAll"></b></span></div>' +
    '<p class="wg-note">Ceny to środek widełek z montażem standardowym i okleiną antracytową z zewnątrz; oferty różnią się o ok. ±15%. Straty ciepła liczone dla sezonu ok. 90 tys. stopniogodzin i pompy ciepła (ok. 0,31 zł za kWh ciepła), bez zysków od słońca, które od południa częściowo je równoważą. Okna dachowe są w etapie 06, drzwi wejściowe i brama w osobnych krokach.</p>';

  var $ = function(q){ return el.querySelector(q); }, list = $('#koList');
  function parse(v){ var n = parseFloat(String(v).replace(/\s/g,'').replace(',','.')); return isFinite(n) && n > 0 ? n : 0; }
  function nf(v, d){ return v.toLocaleString('pl-PL', { maximumFractionDigits: d }); }
  function row(name, note, val){ return '<li><span>'+name+(note ? '<small>'+note+'</small>' : '')+'</span><b class="num">'+val+'</b></li>'; }
  function draw(){ list.innerHTML = s.list.map(rowHtml).join(''); }

  function calc(){
    var p = PROF[s.prof], m = MONT[s.mont], A = 0, ob = 0, szt = 0, cena = 0, ua = 0, rol = 0;
    s.list.forEach(function(r){
      var t = TYP[r[4]] || TYP.rozw, q = r[3] || 0, a = r[1]/100*r[2]/100*q;
      A += a; ob += 2*(r[1]+r[2])/100*q; szt += q;
      cena += a*t.cena*p.k; ua += a*(p.uw + t.du);
      rol += q*ROLETA*(r[4] === 'hs' ? ROL_HS : 1);
    });
    var mont = ob*m.zl, rolC = s.rol ? rol : 0;
    var kwh = (ua + ob*m.psi)*KKH, kwh2 = (A*UW2 + ob*m.psi)*KKH, uwSr = A ? ua/A : 0;
    $('#koRes').innerHTML =
      row('Okna i drzwi balkonowe', szt+' szt., obwód do uszczelnienia '+nf(ob,0)+' mb', nf(A,1)+' m²') +
      row('Okna: '+p.n, 'ok. '+f.zl(Math.round(cena/Math.max(A,0.01)))+'/m², widełki '+f.zl(Math.round(cena*0.85/1000)*1000)+'–'+f.zl(Math.round(cena*1.15/1000)*1000), f.zl(Math.round(cena))) +
      row('Montaż: '+m.n.toLowerCase(), nf(m.zl,0)+' zł/mb (taśmy, pianka'+(s.mont === 'wys' ? ', konsole lub ramy' : '')+')', f.zl(Math.round(mont))) +
      row('Rolety', s.rol ? 'ok. '+f.zl(ROLETA)+'/szt., HS liczone jak '+nf(ROL_HS,1)+' szt.' : 'bez rolet (przewody i tak przygotuj)', f.zl(Math.round(rolC))) +
      '<li class="sub"><span>Średnie Uw okien<small>WT2021: najwyżej 0,9 W/(m²·K)</small></span><b class="num"'+(uwSr > 0.9 ? ' style="color:var(--red)"' : '')+'>'+nf(uwSr,2)+'</b></li>' +
      row('Straty ciepła przez okna i styk montażu', 'rocznie, przy pompie ciepła ok. '+f.zl(Math.round(kwh*ZL_KWH))+'/rok', nf(Math.round(kwh/10)*10,0)+' kWh') +
      row('Te same okna dwuszybowe (Uw ok. 1,2)', 'nie spełniają WT2021; więcej o ok. '+f.zl(Math.round((kwh2-kwh)*ZL_KWH))+'/rok', '+'+nf(Math.round((kwh2-kwh)/10)*10,0)+' kWh') +
      row('Udział samego montażu w stratach', 'ψ = '+nf(m.psi,2)+' W/(m·K) × '+nf(ob,0)+' mb', nf(kwh ? ob*m.psi*KKH/kwh*100 : 0,0)+'%');
    var a = $('#koM2'), b = $('#koAll');
    a.textContent = nf(A,1)+' m²'; b.textContent = f.zl(Math.round(cena + mont + rolC));
    [a, b].forEach(function(e){ e.classList.remove('bump'); void e.offsetWidth; e.classList.add('bump'); });
    api.set(s);
  }

  list.addEventListener('input', function(e){
    var li = e.target.closest('li'), k = e.target.dataset.f; if (!li || k == null) return;
    var r = s.list[+li.dataset.i];
    r[k] = k === '0' ? e.target.value : k === '4' ? e.target.value : Math.round(parse(e.target.value));
    calc();
  });
  list.addEventListener('change', function(e){ if (e.target.dataset.f === '4'){ s.list[+e.target.closest('li').dataset.i][4] = e.target.value; calc(); } });
  list.addEventListener('click', function(e){
    if (!e.target.closest('[data-del]')) return;
    s.list.splice(+e.target.closest('li').dataset.i, 1); draw(); calc();
  });
  $('#koAdd').onclick = function(){ s.list.push(['Nowe okno', 120, 150, 1, 'rozw']); draw(); calc(); var ins = list.querySelectorAll('li:last-child input'); if (ins[0]) ins[0].focus(); };
  $('#koReset').onclick = function(){ s.list = DOM.map(function(r){ return r.slice(); }); draw(); calc(); };
  el.addEventListener('change', function(e){
    var t = e.target;
    if (t.name === 'koProf') s.prof = t.value;
    if (t.name === 'koMont') s.mont = t.value;
    if (t.id === 'koRol') s.rol = t.checked;
    calc();
  });
  draw(); calc();
});
