/* Widget „kalkulator-scian”: obwód, wysokości, szczyty i otwory → powierzchnia ścian netto,
   liczba bloczków, palet, zaprawy lub pianki oraz orientacyjny koszt murów (materiał + robocizna).
   Zużycia i ceny orientacyjne, 2026 r.: sprawdź w katalogu producenta i w ofertach lokalnych hurtowni. */
BUDOWA.addWidget('kalkulator-scian', function(el, api){
  var f = api.fmt;
  var s = { mat:'cer', sp:'zap', ob:59, h:2.7, kl:45, kh:1, sz:47, otw:75, nos:50, dzi:110, zap:5 };
  var sv = api.get(); if (sv) for (var x in s) if (sv[x] !== undefined) s[x] = sv[x];

  // szt/m² ściany, zł/szt brutto, szt/paletę, zaprawa lub klej kg/m², robocizna zł/m²
  var MAT = {
    cer: { n:'Pustak ceramiczny 25 cm',      szt:11.2, cena:16, pal:48, kg:20, kgCena:1.7, rob:100 },
    sil: { n:'Silikat 24 cm',                szt:18,   cena:8.5, pal:60, kg:6,  kgCena:1.4, rob:95 },
    kom: { n:'Beton komórkowy 24 cm',        szt:6.9,  cena:24, pal:40, kg:6,  kgCena:1.4, rob:85 }
  };
  var PIANKA = { puszek:0.28, cena:48, rob:85, dopl:0.08 };   // tylko pustaki ceramiczne rektyfikowane
  var DZIAL = 135;                                            // zł/m² ścianki działowej 11,5 cm (materiał + robocizna)

  function inp(k, label, val, unit){
    return '<div class="wg-row"><label class="wg-l" for="ks_'+k+'">'+label+'</label>' +
      '<div class="wg-in sm"><input id="ks_'+k+'" data-k="'+k+'" inputmode="decimal" autocomplete="off" value="'+String(val).replace('.',',')+'"><span>'+unit+'</span></div></div>';
  }
  function seg(name, opts, cur){
    return '<div class="segctl" role="radiogroup">'+opts.map(function(o){
      return '<label><input type="radio" name="'+name+'" value="'+o[0]+'"'+(o[0]===cur?' checked':'')+'>'+o[1]+'</label>'; }).join('')+'</div>';
  }

  el.innerHTML =
    '<div class="wg-h"><span class="acc-ic"><svg class="ico" aria-hidden="true"><use href="#i-calc"/></svg></span><span>Kalkulator ścian<small>Powierzchnia minus otwory → bloczki, palety, zaprawa, koszt</small></span></div>' +
    '<div class="wg-f">' +
      '<div class="wg-row"><span class="wg-l">Materiał ścian</span>' + seg('ksMat', [['cer','Ceramika 25'],['sil','Silikat 24'],['kom','Komórkowy 24']], s.mat) + '</div>' +
      '<div class="wg-row" id="ksSpRow"><span class="wg-l">Spoina</span>' + seg('ksSp', [['zap','Zaprawa ciepła'],['pia','Pianka']], s.sp) + '</div>' +
      inp('ob', 'Obwód zewn. parteru (dom + garaż)', s.ob, 'm') +
      inp('h', 'Wysokość murów parteru', s.h, 'm') +
      inp('kl', 'Ścianka kolankowa: długość', s.kl, 'm') +
      inp('kh', 'Ścianka kolankowa: wysokość', s.kh, 'm') +
      inp('sz', 'Szczyty (trójkąty nad kolankową)', s.sz, 'm²') +
      inp('otw', 'Otwory: okna, drzwi, brama, przeszklenia', s.otw, 'm²') +
      inp('nos', 'Ściany wewnętrzne nośne (netto)', s.nos, 'm²') +
      inp('dzi', 'Ścianki działowe 11,5 cm (netto)', s.dzi, 'm²') +
      inp('zap', 'Zapas na docinki i uszkodzenia', s.zap, '%') +
    '</div>' +
    '<ul class="wg-res" id="ksRes" aria-live="polite"></ul>' +
    '<div class="wg-sum"><span>Bloczki <b class="num" id="ksSzt" style="font-size:inherit;font-weight:600"></b></span><span>Mury razem <b class="num" id="ksAll"></b></span></div>' +
    '<p class="wg-note">Domyślne wymiary to dom referencyjny 13 × 9,5 m z garażem 6,5 × 7 m. Zużycia, wagi palet i ceny są orientacyjne i różnią się między producentami, więc przed zamówieniem wylicz ilość z katalogu wybranego systemu. Robocizna to stawka za m² ściany w okolicach małego miasta. Dostawa, rusztowanie, nadproża, wieńce i strop są osobnymi pozycjami etapu.</p>';

  var $ = function(q){ return el.querySelector(q); };
  function parse(v){ var n = parseFloat(String(v).replace(/\s/g,'').replace(',','.')); return isFinite(n) && n > 0 ? n : 0; }
  function nf(v, d){ return v.toLocaleString('pl-PL', { maximumFractionDigits: d }); }
  function row(name, note, val){ return '<li><span>'+name+(note ? '<small>'+note+'</small>' : '')+'</span><b class="num">'+val+'</b></li>'; }

  function calc(){
    var m = MAT[s.mat], pia = s.mat === 'cer' && s.sp === 'pia';
    $('#ksSpRow').hidden = s.mat !== 'cer';
    var brutto = s.ob*s.h + s.kl*s.kh + s.sz;
    var zew = Math.max(0, brutto - s.otw);
    var area = zew + s.nos, k = 1 + s.zap/100;
    var szt = Math.ceil(area*m.szt*k), pal = Math.ceil(szt/m.pal);
    var cenaSzt = m.cena*(pia ? 1 + PIANKA.dopl : 1);
    var matBl = szt*cenaSzt, spo, spoNote, rob;
    if (pia){
      var p = Math.ceil(area*PIANKA.puszek*k);
      spo = p*PIANKA.cena; spoNote = p+' puszek pianki po ok. '+f.zl(PIANKA.cena); rob = area*PIANKA.rob;
    } else {
      var kg = area*m.kg*k;
      spo = kg*m.kgCena;
      spoNote = s.mat === 'cer' ? nf(Math.ceil(kg/25),0)+' worków zaprawy ciepłej po 25 kg' : nf(Math.ceil(kg/25),0)+' worków kleju po 25 kg';
      rob = area*m.rob;
    }
    var dzi = s.dzi*DZIAL, all = matBl + spo + rob + dzi;
    $('#ksRes').innerHTML =
      row('Ściany zewnętrzne netto', nf(brutto,1)+' m² brutto − '+nf(s.otw,1)+' m² otworów', nf(zew,1)+' m²') +
      row('Do wymurowania z '+m.n.toLowerCase(), 'razem z nośnymi wewnętrznymi '+nf(s.nos,1)+' m²', nf(area,1)+' m²') +
      row('Bloczki', nf(m.szt,1)+' szt./m² + '+s.zap+'% zapasu'+(pia ? ', rektyfikowane +8% ceny' : ''), nf(szt,0)+' szt.') +
      row('Palety', 'ok. '+m.pal+' szt. na palecie (orientacyjnie)', pal+' pal.') +
      row('Materiał: bloczki', nf(cenaSzt,1)+' zł/szt.', f.zl(Math.round(matBl))) +
      row('Materiał: '+(pia ? 'pianka' : (s.mat === 'cer' ? 'zaprawa' : 'klej')), spoNote, f.zl(Math.round(spo))) +
      row('Robocizna murowania', nf(pia ? PIANKA.rob : m.rob,0)+' zł/m²', f.zl(Math.round(rob))) +
      row('Ścianki działowe 11,5 cm', nf(s.dzi,0)+' m² po ok. '+DZIAL+' zł/m² (materiał + robocizna)', f.zl(Math.round(dzi))) +
      '<li class="sub"><span>Koszt na m² ściany zewn. i nośnych</span><b class="num">'+(area ? f.zl(Math.round((matBl+spo+rob)/area)) : '0 zł')+'</b></li>';
    var a = $('#ksSzt'), b = $('#ksAll');
    a.textContent = nf(szt,0)+' szt. / '+pal+' pal.'; b.textContent = f.zl(Math.round(all));
    [a, b].forEach(function(n){ n.classList.remove('bump'); void n.offsetWidth; n.classList.add('bump'); });
    api.set(s);
  }

  el.addEventListener('input', function(e){
    var k = e.target.dataset && e.target.dataset.k; if (!k) return;
    s[k] = k === 'zap' ? Math.min(30, parse(e.target.value)) : parse(e.target.value); calc();
  });
  el.addEventListener('change', function(e){
    if (e.target.name === 'ksMat') s.mat = e.target.value;
    if (e.target.name === 'ksSp') s.sp = e.target.value;
    calc();
  });
  calc();
});
