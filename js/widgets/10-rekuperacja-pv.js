/* Widget „kalkulator-pv”: zużycie domu z pompą ciepła → moc instalacji, liczba modułów, produkcja roczna,
   autokonsumpcja bez magazynu i z magazynem, orientacyjny zwrot. Model uproszczony (net-billing jako średnia cena). */
BUDOWA.addWidget('kalkulator-pv', function(el, api){
  var f = api.fmt;
  var ORI = { pld: { t: 'Południe', y: 1000 }, wz: { t: 'Wschód–zachód', y: 850 } };
  var s = { dom:3800, pc:3700, ev:false, ori:'pld', cel:85, w:460, cena:1.10, sprz:0.35 };
  var sv = api.get(); if (sv) for (var x in s) if (sv[x] !== undefined) s[x] = sv[x];
  if (!ORI[s.ori]) s.ori = 'pld';
  var EV = 2500, KWP = 3800, BAT = 25000, PROG = 6.5;   // kWh/rok auta, zł/kWp z montażem, zł za ok. 10 kWh, kW

  function inp(id, label, val, unit){
    return '<div class="wg-row"><label class="wg-l" for="'+id+'">'+label+'</label>' +
      '<div class="wg-in sm"><input id="'+id+'" inputmode="decimal" autocomplete="off" value="'+String(val).replace('.',',')+'"><span>'+unit+'</span></div></div>';
  }
  function chips(name, arr, lab){
    return '<div class="chips">'+arr.map(function(p){
      return '<button type="button" class="chip" data-c="'+name+'" data-p="'+p+'">'+lab(p)+'</button>'; }).join('')+'</div>';
  }

  el.innerHTML =
    '<div class="wg-h"><span class="acc-ic"><svg class="ico" aria-hidden="true"><use href="#i-calc"/></svg></span><span>Kalkulator fotowoltaiki<small>Moc i liczba modułów dla domu z pompą ciepła, z magazynem i bez</small></span></div>' +
    '<div class="wg-f">' +
      inp('pvDom', 'Zużycie domu bez pompy ciepła', s.dom, 'kWh/rok') +
      inp('pvPc', 'Pompa ciepła z ciepłą wodą (etap 09)', s.pc, 'kWh/rok') +
      '<div class="tgl"><label class="tg"><input type="checkbox" id="pvEv"'+(s.ev?' checked':'')+'><span class="sw"></span>Auto elektryczne (ok. 2500 kWh/rok)</label></div>' +
      '<div class="wg-row"><span class="wg-l">Połać</span>' + chips('ori', Object.keys(ORI), function(k){ return ORI[k].t; }) + '</div>' +
      '<div class="wg-row"><span class="wg-l">Ile zużycia pokryć</span>' + chips('cel', [70, 85, 100], function(p){ return p + '%'; }) + '</div>' +
      '<div class="wg-row"><span class="wg-l">Moc modułu</span>' + chips('w', [430, 460, 500], function(p){ return p + ' W'; }) + '</div>' +
      inp('pvCena', 'Cena prądu z dystrybucją', s.cena, 'zł/kWh') +
      inp('pvSprz', 'Średnia wartość prądu oddanego', s.sprz, 'zł/kWh') +
    '</div>' +
    '<ul class="wg-res" id="pvRes" aria-live="polite"></ul>' +
    '<div class="wg-sum"><span>Instalacja <b class="num" id="pvMod"></b></span><span>Zwrot bez magazynu <b class="num" id="pvZw"></b></span></div>' +
    '<p class="wg-note">Orientacyjnie. Produkcja ok. 1000 kWh z 1 kWp (południe, 40°) albo ok. 850 (wschód–zachód), bez zacienienia. Autokonsumpcja: ok. 30% produkcji bez magazynu (z grzaniem wody w dzień), ok. 60% z magazynem ok. 10 kWh, najwyżej 70% zużycia domu. Prąd oddany liczony średnią ceną net-billingu, bez zmian cen w czasie. Koszt ok. 3800 zł/kWp z montażem, magazyn ok. 25 tys. zł. Powyżej 6,5 kW potrzebne jest uzgodnienie ppoż. (sprawdź u projektanta).</p>';

  var $ = function(q){ return el.querySelector(q); };
  function parse(v){ var n = parseFloat(String(v).replace(/\s/g,'').replace(',','.')); return isFinite(n) && n >= 0 ? n : 0; }
  function nf(v, d){ return v.toLocaleString('pl-PL', { maximumFractionDigits: d }); }
  function row(name, note, val, cls){ return '<li'+(cls ? ' class="'+cls+'"' : '')+'><span>'+name+(note ? '<small>'+note+'</small>' : '')+'</span><b class="num">'+val+'</b></li>'; }
  function lata(cost, save){ return save > 0 ? nf(cost / save, 1).replace(/,0$/, '') + ' lat' : '—'; }

  function calc(){
    var y = ORI[s.ori].y, use = s.dom + s.pc + (s.ev ? EV : 0);
    var need = y ? use * s.cel / 100 / y : 0;
    var n = s.w ? Math.max(1, Math.ceil(need * 1000 / s.w)) : 0, kwp = n * s.w / 1000, prod = kwp * y;
    function wariant(share){
      var self = Math.min(prod * share, use * 0.7), out = prod - self;
      return { self: self, save: self * s.cena + out * s.sprz };
    }
    var a = wariant(0.30), b = wariant(0.60), cost = kwp * KWP;
    $('#pvRes').innerHTML =
      row('Zużycie roczne', 'dom '+nf(s.dom,0)+' + pompa '+nf(s.pc,0)+(s.ev ? ' + auto '+nf(EV,0) : '')+' kWh', nf(use,0)+' kWh') +
      row('Potrzebna moc', nf(s.cel,0)+'% zużycia, '+nf(y,0)+' kWh z 1 kWp', nf(need,1)+' kWp') +
      row('Moduły', n+' × '+nf(s.w,0)+' W', nf(kwp,2)+' kWp') +
      row('Produkcja roczna', ORI[s.ori].t.toLowerCase(), nf(prod,0)+' kWh') +
      (kwp > PROG ? row('Powyżej 6,5 kW', 'uzgodnienie z rzeczoznawcą ppoż. i zawiadomienie straży', 'formalności') : '') +
      row('Koszt instalacji', nf(KWP,0)+' zł/kWp', f.zl(Math.round(cost))) +
      '<li class="sub"><span>Bez magazynu<small>zużyte na miejscu '+nf(a.self,0)+' kWh, oszczędność '+f.zl(Math.round(a.save))+'/rok</small></span><b class="num">'+lata(cost, a.save)+'</b></li>' +
      '<li class="sub"><span>Z magazynem ok. 10 kWh<small>zużyte na miejscu '+nf(b.self,0)+' kWh, oszczędność '+f.zl(Math.round(b.save))+'/rok, koszt '+f.zl(Math.round(cost + BAT))+'</small></span><b class="num">'+lata(cost + BAT, b.save)+'</b></li>';
    var bm = $('#pvMod'), bz = $('#pvZw');
    bm.textContent = n + ' modułów, ' + nf(kwp,1) + ' kWp'; bz.textContent = lata(cost, a.save);
    [bm, bz].forEach(function(q){ q.classList.remove('bump'); void q.offsetWidth; q.classList.add('bump'); });
    [].forEach.call(el.querySelectorAll('.chip'), function(ch){ ch.classList.toggle('on', String(s[ch.dataset.c]) === ch.dataset.p); });
    api.set(s);
  }

  var MAP = { pvDom:'dom', pvPc:'pc', pvCena:'cena', pvSprz:'sprz' };
  el.addEventListener('input', function(e){
    var k = MAP[e.target.id]; if (!k) return;
    s[k] = parse(e.target.value); calc();
  });
  el.addEventListener('change', function(e){
    if (e.target.id === 'pvEv'){ s.ev = e.target.checked; calc(); }
  });
  el.addEventListener('click', function(e){
    var ch = e.target.closest('.chip'); if (!ch) return;
    s[ch.dataset.c] = ch.dataset.c === 'ori' ? ch.dataset.p : +ch.dataset.p; calc();
  });
  calc();
});
