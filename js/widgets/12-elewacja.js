/* Widget „kalkulator-elewacji”: ściany brutto minus otwory → powierzchnia ocieplenia, podział na tynk / kamień / deskę,
   materiały (styropian, klej, kołki, siatka, tynk) i koszt. Rusztowanie, podbitka, parapety i detale przy oknach liczone osobno w krokach etapu.
   Ceny orientacyjne (środek widełek), 2026 r., okolice małego miasta. */
BUDOWA.addWidget('kalkulator-elewacji', function(el, api){
  var f = api.fmt;
  // ocieplenie: zł/m² materiału (z ok. 5% zapasu), kg kleju/m², kołki szt./m², robocizna klejenia + kołkowania + zbrojenia zł/m², m³/m²
  var OC = {
    g20: { n:'Grafit 20 cm', zl:67, klej:5, kolki:6.5, rob:85,  m3:0.2, u:'0,13' },
    g15: { n:'Grafit 15 cm', zl:51, klej:5, kolki:6.5, rob:83,  m3:0.15, u:'0,16–0,17' },
    wel: { n:'Wełna 20 cm',  zl:140, klej:6, kolki:8,  rob:110, m3:0.2, u:'0,15' }
  };
  var TY = { sil:{ n:'Silikonowy', zl:40 }, sit:{ n:'Silikatowy', zl:40 }, akr:{ n:'Akrylowy', zl:26 } };
  var KA = { nat:{ n:'Naturalny', zl:405 }, spi:{ n:'Spiek', zl:530 }, imi:{ n:'Imitacja', zl:190 } };
  var DE = { mod:{ n:'Modrzew', zl:205 }, ter:{ n:'Termodrewno', zl:280 }, wpc:{ n:'Kompozyt', zl:250 } };
  var KLEJ = 1.8, KOLEK = 2.1, ZBROJ = 14.5, TYNK_ROB = 30, KAM_ROB = 250, DES_ROB = 160, COKOL = 210, COK_H = 0.5;
  var s = { brutto:300, otw:50, obw:58, kam:12, des:18, oc:'g20', ty:'sil', ka:'nat', de:'mod' };
  var sv = api.get(); if (sv) for (var x in s) if (sv[x] !== undefined) s[x] = sv[x];

  function seg(name, map, cur){
    return '<div class="segctl" role="radiogroup">'+Object.keys(map).map(function(k){
      return '<label><input type="radio" name="'+name+'" value="'+k+'"'+(k===cur?' checked':'')+'>'+map[k].n+'</label>'; }).join('')+'</div>';
  }
  function inp(id, lab, v, unit){
    return '<div class="wg-row"><label class="wg-l" for="'+id+'">'+lab+'</label><div class="wg-in"><input id="'+id+'" inputmode="decimal" autocomplete="off" value="'+v+'"><span>'+unit+'</span></div></div>';
  }
  function rng(id, lab, v){
    return '<label class="wg-row"><span class="wg-l">'+lab+' <b class="num" id="'+id+'V" style="font-size:inherit"></b></span><input type="range" id="'+id+'" min="0" max="50" step="1" value="'+v+'" style="width:100%;accent-color:var(--wood)"></label>';
  }

  el.innerHTML =
    '<div class="wg-h"><span class="acc-ic"><svg class="ico" aria-hidden="true"><use href="#i-calc"/></svg></span><span>Kalkulator elewacji<small>Ściany minus okna → materiały i koszt tynku, kamienia i deski</small></span></div>' +
    '<div class="wg-f">' +
      inp('keBr', 'Ściany brutto (ze szczytami i garażem)', s.brutto, 'm²') +
      inp('keOt', 'Okna, drzwi, HS i brama', s.otw, 'm²') +
      inp('keOb', 'Obwód cokołu', s.obw, 'mb') +
      rng('keKa', 'Kamień (udział ścian netto)', s.kam) +
      rng('keDe', 'Deska (udział ścian netto)', s.des) +
      '<div class="wg-row"><span class="wg-l">Ocieplenie</span>' + seg('keOc', OC, s.oc) + '</div>' +
      '<div class="wg-row"><span class="wg-l">Tynk</span>' + seg('keTy', TY, s.ty) + '</div>' +
      '<div class="wg-row"><span class="wg-l">Kamień</span>' + seg('keKs', KA, s.ka) + '</div>' +
      '<div class="wg-row"><span class="wg-l">Deska</span>' + seg('keDs', DE, s.de) + '</div>' +
    '</div>' +
    '<ul class="wg-res" id="keRes" aria-live="polite"></ul>' +
    '<div class="wg-sum"><span>Do ocieplenia <b class="num" id="keM2" style="font-size:inherit;font-weight:600"></b></span><span>Razem <b class="num" id="keAll"></b></span></div>' +
    '<p class="wg-note">Ceny to środek widełek z robocizną; oferty różnią się o ok. ±15%. Udział kamienia i deski liczony od powierzchni netto, reszta to tynk. Rusztowanie (ok. 7–11 tys.), podbitka (ok. 4,5–6,5 tys.), parapety, siatki ukośne i profile przy oknach (ok. 4–7,5 tys.) są w osobnych krokach etapu. Liczbę kołków i ciężar okładziny podaje system ETICS.</p>';

  var $ = function(q){ return el.querySelector(q); };
  function parse(v){ var n = parseFloat(String(v).replace(/\s/g,'').replace(',','.')); return isFinite(n) && n >= 0 ? n : 0; }
  function nf(v, d){ return v.toLocaleString('pl-PL', { maximumFractionDigits: d || 0 }); }
  function row(name, note, val){ return '<li><span>'+name+(note ? '<small>'+note+'</small>' : '')+'</span><b class="num">'+val+'</b></li>'; }
  function k(v){ return f.zl(Math.round(v/100)*100); }

  function calc(){
    $('#keKaV').textContent = s.kam+'%'; $('#keDeV').textContent = s.des+'%';
    var o = OC[s.oc], net = Math.max(0, s.brutto - s.otw);
    var aKa = net*s.kam/100, aDe = net*s.des/100, aTy = Math.max(0, net - aKa - aDe), aCo = s.obw*COK_H;
    var cOc = net*(o.zl + o.klej*KLEJ + o.kolki*KOLEK + ZBROJ + o.rob);
    var cTy = aTy*(TY[s.ty].zl + TYNK_ROB), cKa = aKa*(KA[s.ka].zl + KAM_ROB), cDe = aDe*(DE[s.de].zl + DES_ROB), cCo = aCo*COKOL;
    var tot = cOc + cTy + cKa + cDe + cCo;
    $('#keRes').innerHTML =
      row('Ocieplenie: '+o.n.toLowerCase(), 'ok. '+nf(net*o.m3*1.05,1)+' m³ płyt, klej ok. '+nf(net*o.klej/1000,1)+' t, ok. '+nf(Math.round(net*o.kolki/50)*50)+' kołków, siatka ok. '+nf(net*1.15)+' m²; U ściany ok. '+o.u, k(cOc)) +
      row('Tynk '+TY[s.ty].n.toLowerCase(), nf(aTy)+' m², ok. '+nf(aTy*2.8/25)+' wiader po 25 kg', k(cTy)) +
      row('Kamień: '+KA[s.ka].n.toLowerCase(), nf(aKa)+' m² (zamów ok. '+nf(aKa*1.1)+' m²), z klejeniem', k(cKa)) +
      row('Deska: '+DE[s.de].n.toLowerCase(), nf(aDe)+' m², ruszt ok. '+nf(aDe*1.8)+' mb łat', k(cDe)) +
      row('Cokół: tynk mozaikowy', nf(aCo)+' m² (pas ok. '+nf(COK_H*100)+' cm), XPS z etapu 04', k(cCo)) +
      (s.oc === 'wel' && s.ty === 'akr' ? '<li class="sub"><span style="color:var(--red)">Tynk akrylowy nie nadaje się na wełnę<small>wybierz silikonowy albo silikatowy</small></span><b class="num">!</b></li>' : '') +
      '<li class="sub"><span>Średnio na m² ściany netto<small>bez rusztowania, podbitki i detali przy oknach</small></span><b class="num">'+(net ? f.zl(Math.round(tot/net)) : '–')+'</b></li>';
    var a = $('#keM2'), b = $('#keAll');
    a.textContent = nf(net)+' m²'; b.textContent = k(tot);
    [a, b].forEach(function(e){ e.classList.remove('bump'); void e.offsetWidth; e.classList.add('bump'); });
    api.set(s);
  }

  el.addEventListener('input', function(e){
    var t = e.target;
    if (t.id === 'keBr') s.brutto = parse(t.value);
    else if (t.id === 'keOt') s.otw = parse(t.value);
    else if (t.id === 'keOb') s.obw = parse(t.value);
    else if (t.id === 'keKa') s.kam = +t.value;
    else if (t.id === 'keDe') s.des = +t.value;
    else return;
    calc();
  });
  el.addEventListener('change', function(e){
    var t = e.target;
    if (t.name === 'keOc') s.oc = t.value;
    else if (t.name === 'keTy') s.ty = t.value;
    else if (t.name === 'keKs') s.ka = t.value;
    else if (t.name === 'keDs') s.de = t.value;
    else return;
    calc();
  });
  calc();
});
