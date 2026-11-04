/* Ilustracje etapu 14 — Umeblowanie i aranżacja. Liczby zgodne z treścią kroków i docs/DECYZJE.md
   (zabudowa 4,2 m + wyspa 2,4 × 1,0 m ze zlewem, przejście 100–120 cm, blat 90–95 cm, trójkąt 4–7 m, kuchnia 6–10 tyg.,
   okap obiegowy, LED 2700 K, lampy 65–75 cm nad blatem, wokół stołu 80–90 cm, łóżko 180 × 200, mata 15–20 mm,
   szafki łazienkowe 15–25 cm nad podłogą, szyna 15–25 cm szersza od okna, zasłona 1–2 cm nad podłogą).
   Skala wnętrz: postać s = 1,3 (ok. 175 cm ≈ 130 jedn.), czyli ok. 0,74 jedn./cm; podłoga y = 282. */
(function(){
  const S = (a, s, l) => a.svg(s, 480, 320, l);
  const FL = 282;
  // podłoga z deskami i sufit
  const floor = (a, y) => a.rect(0, y || FL, 480, 320 - (y || FL), 'drewno', {r:0}) + a.line(`M0 ${(y || FL) + 14}H480`, 'il-jt');
  const ceil = (a, y) => a.line(`M0 ${y}H480`, 'il-ln', 'stroke-width:3');
  // postać domownika (bez kasku), stopy w x,y
  const who = (a, x, y, o) => a.person(x, y, Object.assign({s:1.3, kask:false}, o));
  // lampa wisząca: przewód od y0, klosz na wysokości y; on = stożek światła
  const pendant = (a, x, y0, y, on, o) => a.g(a.line(`M${x} ${y0}V${y - 14}`, 'il-ln', 'stroke-width:2') +
    (on ? a.poly([[x - 13, y], [x + 13, y], [x + 40, y + 56], [x - 40, y + 56]], 'poziomica', {st:'opacity:.3'}) : '') +
    a.poly([[x - 14, y], [x - 8, y - 14], [x + 8, y - 14], [x + 14, y]], 'kmb'), o);
  // sofa od przodu: x = środek, y = podłoga, w = szerokość
  const sofa = (a, x, y, w, o) => { const l = x - w / 2;
    return a.g(a.shadow(x, y, w * .55, 6) + a.rect(l + 14, y - 64, w - 28, 34, 'membrana', {r:9}) + a.rect(l + 12, y - 36, w - 24, 28, 'membrana', {r:6, cls:'il-dk'}) +
      a.rect(l, y - 50, 20, 44, 'membrana', {r:9}) + a.rect(l + w - 20, y - 50, 20, 44, 'membrana', {r:9}) +
      a.rect(l + 30, y - 60, 30, 24, 'welna', {r:7}) + a.rect(l + 8, y - 8, 6, 8, 'kmb', {r:1}) + a.rect(l + w - 14, y - 8, 6, 8, 'kmb', {r:1}), o); };
  // roślina w donicy na podstawce z nóżkami: x,y = podłoga
  const plant = (a, x, y, s, o) => { s = s || 1; const top = y - 30 * s;
    const leaf = (dx, dy, r) => `<ellipse cx="${x + dx * s}" cy="${top + dy * s}" rx="${9 * s}" ry="${22 * s}" transform="rotate(${r} ${x + dx * s} ${top + dy * s})" class="il-m c-trawa"/>`;
    return a.g(a.shadow(x, y, 20 * s, 4) + a.line(`M${x - 12 * s} ${y}V${y - 8 * s}M${x + 12 * s} ${y}V${y - 8 * s}`, 'il-ln', 'stroke-width:2.5') +
      leaf(-16, -30, -35) + leaf(14, -34, 30) + leaf(0, -46, 0) + leaf(-6, -22, -70) + leaf(8, -22, 70) +
      a.poly([[x - 16 * s, y - 8 * s], [x + 16 * s, y - 8 * s], [x + 19 * s, top], [x - 19 * s, top]], 'ceramika'), o); };
  // kominek w obudowie: x = środek, y = podłoga
  const fireplace = (a, x, y, hot) => a.rect(x - 80, y - 120, 160, 120, 'eps', {r:3}) + a.rect(x - 86, y - 128, 172, 10, 'drewno', {r:2}) +
    a.rect(x - 50, y - 96, 100, 70, 'kmb', {r:4}) + a.poly([[x - 30, y - 30], [x - 22, y - 58], [x - 10, y - 44], [x, y - 74], [x + 12, y - 46], [x + 22, y - 60], [x + 30, y - 30]], 'maszyna') +
    (hot ? a.line(`M${x - 30} ${y - 140}q8 -10 0 -20t0 -20M${x} ${y - 140}q8 -10 0 -20t0 -20M${x + 30} ${y - 140}q8 -10 0 -20t0 -20`, 'il-ln', 'stroke:var(--il-bad);stroke-width:3;opacity:.8') : '');
  const tv = (a, x, y, w, o) => a.g(a.rect(x - w / 2, y, w, w * .58, 'kmb', {r:4}) + a.rect(x - w / 2 + 5, y + 5, w - 10, w * .58 - 10, 'membrana', {r:2, cls:'il-dk'}) + `<path class="il-shine" d="M${x - w / 2 + 14} ${y + w * .45}L${x - w / 4} ${y + 12}"/>`, o);
  // szafki kuchenne od przodu: x, y = góra, w, h, n frontów, mat
  const fronts = (a, x, y, w, h, n, mat) => { let d = ''; for (let i = 1; i < n; i++) d += `M${x + i * w / n} ${y + 3}V${y + h - 3}`;
    return a.rect(x, y, w, h, mat || 'eps', {r:2}) + a.line(d, 'il-jt'); };

  /* 1. Plan wnętrz -------------------------------------------------------- */
  BUDOWA.addIllus('14-umeblowanie/plan-wnetrz', function(a){
    const wall = `<path class="il-ln" d="M140 40H440V276H140ZM290 40V150M290 196V276M140 160H230" style="stroke-width:6;stroke:var(--il-kmb)"/>`;
    const fl = a.rect(140, 40, 300, 236, 'chudy', {r:2});
    const wym = a.rect(146, 46, 138, 18, 'drewno', {r:2}) + a.rect(184, 92, 70, 30, 'drewno', {r:2}) + a.rect(146, 166, 16, 104, 'drewno', {r:2}) + a.rect(296, 46, 138, 16, 'drewno', {r:2});
    const got = a.rect(184, 220, 90, 40, 'membrana', {r:6}) + a.rect(206, 204, 46, 14, 'piasek', {r:3}) +
      a.rect(340, 100, 70, 80, 'membrana', {r:6}) + a.rect(336, 220, 80, 40, 'membrana', {r:3});
    const s = a.layout.scene(fl + a.fresh(wym, {d:200, k:'wym'}) + a.fresh(got, {d:600, k:'got'}) + wall, [
      {t:'Na wymiar', at:[150, 56], side:'l', y:70, k:'wym', hot:1, sub:'kuchnia, szafy'},
      {t:'Gotowe', at:[188, 240], side:'l', y:230, k:'got', sub:'sofa, stół, łóżko'} ]) +
      a.num(290, 300, 'Przejścia min. 80–90 cm', {d:900});
    return { caption:'Rzut z meblami: drewnem zaznaczone to, co robi stolarz na wymiar, szarym to, co kupujesz gotowe.', svg:S(a, s, 'Rzut parteru i poddasza z meblami na wymiar i gotowymi') };
  });

  /* 2. Kolejność zakupów -------------------------------------------------- */
  BUDOWA.addIllus('14-umeblowanie/kolejnosc-zakupow', function(a){
    const x1 = 420, wk = 26, rows = [['Kuchnia, szafy', 10, 'drewno'], ['Sofa, łóżko', 9, 'membrana'], ['Lampy, szyny', 6, 'poziomica'], ['Zasłony', 4, 'eps'], ['Meble gotowe', 2, 'piasek']];
    let s = a.text(40, 36, 'Tygodnie przed przeprowadzką', {b:1}), ticks = '';
    for (let w = 0; w <= 12; w += 2) ticks += a.text(x1 - w * wk, 270, String(w), {s:1, a:'middle'});
    s += a.line(`M${x1 - 12 * wk} 254H${x1}`, 'il-ln') + ticks;
    rows.forEach((r, i) => { const w = r[1] * wk, y = 56 + i * 38; s += a.text(40, y + 20, r[0], {s:1}) + a.fresh(a.rect(x1 - w, y, w - 4, 30, r[2], {r:8, k:'r' + i}), {d:i * 160}); });
    s += a.line(`M${x1} 48V254`, 'il-ln', 'stroke-width:3;stroke-dasharray:6 5') + a.house(x1 + 26, 254, .32) +
      a.num(160, 300, 'Kuchnia: 6–10 tyg. produkcji', {d:900});
    return { caption:'Liczysz od daty przeprowadzki wstecz. Najdłużej trwa kuchnia, więc zamawiasz ją ok. 10 tygodni wcześniej.', svg:S(a, s, 'Wykres: ile tygodni przed przeprowadzką zamówić kuchnię, sofę, lampy, zasłony i meble gotowe') };
  });

  /* 3. Kuchnia: projekt i ergonomia ---------------------------------------- */
  BUDOWA.addIllus('14-umeblowanie/kuchnia-projekt', function(a){
    // rzut: 1 m = 50 jedn.; zabudowa 4,2 m przy ścianie, wyspa 2,4 × 1,0 m, przejście 1,1 m
    const plan = a.rect(130, 44, 230, 180, 'chudy', {r:4}) + a.rect(128, 38, 234, 8, 'kmb', {r:1}) +
      a.rect(135, 46, 30, 32, 'blacha', {r:2, k:'lod'}) + a.rect(165, 46, 150, 32, 'eps', {r:1}) + a.rect(315, 46, 30, 32, 'kmb', {r:2}) +
      a.rect(232, 50, 40, 24, 'kmb', {r:3, k:'pl'}) + [242, 262].map(x => `<circle cx="${x}" cy="62" r="6" class="il-ring" style="stroke:var(--il-blacha);stroke-width:2"/>`).join('') +
      a.rect(180, 133, 120, 50, 'eps', {r:3}) + a.rect(196, 145, 32, 22, 'blacha', {r:5, k:'zl'}) + a.rect(232, 137, 28, 6, 'kmb', {r:1});
    const tri = '<path class="il-arr draw" d="M150 78L212 146L252 74Z" style="stroke-dasharray:none"/>';
    const f1 = a.layout.scene(plan + a.fresh(tri, {d:300}) + a.dim(330, 80, 330, 131, '', {d:500}) + a.num(388, 106, '100–120 cm', {d:600}), [
      {t:'Lodówka', at:[150, 62], side:'l', y:62, k:'lod'},
      {t:'Zlew w wyspie', at:[212, 156], side:'l', y:160, k:'zl', hot:1},
      {t:'Płyta 80 cm', at:[262, 58], side:'r', y:22, k:'pl'} ]) + a.num(245, 270, 'Trójkąt: suma 4–7 m', {d:800});
    // widok z boku: blat 92 cm ≈ 68 jedn.
    const f2 = floor(a) + a.rect(170, 220, 230, 62, 'eps', {r:2}) + a.line('M227 224V278M285 224V278M343 224V278', 'il-jt') + a.rect(166, 212, 238, 8, 'chudy', {r:2, k:'bl'}) +
      a.rect(196, 204, 50, 8, 'drewno', {r:2}) + who(a, 126, FL, {arms:[10, 72]}) +
      a.dim(430, 282, 430, 212, '', {d:300}) + a.num(430, 186, '90–95 cm', {d:400});
    return { caption:'Krótkie drogi między lodówką, zlewem i płytą, wygodne przejście przy wyspie i blat na wysokości łokci.', frames:[
      { caption:'Lodówka i płyta przy ścianie, zlew w wyspie naprzeciw: trójkąt wychodzi sam.', svg:S(a, f1, 'Rzut kuchni: zabudowa przy ścianie, wyspa ze zlewem, trójkąt roboczy i przejście 100–120 cm') },
      { caption:'Blat ok. połowy wzrostu plus 5–10 cm: łokieć 10–15 cm nad blatem, plecy proste.', svg:S(a, a.layout.scene(f2, [
        {t:'Blat 2 cm', at:[380, 216], side:'r', y:130, k:'bl'} ]), 'Osoba przy blacie na wysokości 90–95 cm') } ] };
  });

  /* 4. Fronty ------------------------------------------------------------- */
  BUDOWA.addIllus('14-umeblowanie/kuchnia-fronty', function(a){
    const col = (x, door, name, note, k) => door + a.pill(x + 68, 238, name, {k}) + a.text(x + 68, 276, note, {s:1, a:'middle'});
    const knob = x => a.rect(x + 20, 62, 96, 6, 'blacha', {r:3});
    let grain = ''; for (let i = 0; i < 6; i++) grain += `M${190 + i * 18} 76q6 60 -2 140`;
    const lak = a.rect(20, 50, 136, 166, 'eps', {r:4}) + knob(20) + '<path class="il-shine" d="M38 200L132 84"/>';
    const forn = a.rect(172, 50, 136, 166, 'drewno', {r:4}) + a.line(grain, 'il-jt') + knob(172);
    const lam = a.rect(324, 50, 136, 166, 'zwir', {r:4}) + knob(324) + a.rect(324, 50, 4, 166, 'blacha', {r:0}) + a.rect(456, 50, 4, 166, 'blacha', {r:0});
    const s = col(20, lak, 'Lakier mat', 'dowolny kolor', 'lak') + col(172, forn, 'Fornir dąb', 'prawdziwe drewno', 'forn') + col(324, lam, 'Laminat', 'najtaniej', 'lam') +
      a.fresh(a.ok(40, 36, 14), {d:300}) + a.num(240, 304, 'Ok. 10–11 m² frontów', {d:500});
    return { caption:'Lakier mat na większości frontów, fornir dębowy tam, gdzie widać go z salonu. Laminat, gdy trzeba oszczędzać.', svg:S(a, s, 'Trzy fronty: lakier mat, fornir dębowy i laminat') };
  });

  /* 5. Blat --------------------------------------------------------------- */
  function szafki(a){ return floor(a) + fronts(a, 60, 214, 360, 68, 6, 'eps'); }
  BUDOWA.addIllus('14-umeblowanie/kuchnia-blat', function(a){
    const tpl = a.rect(56, 206, 368, 8, 'papier', {r:1, k:'sz'});
    const f1 = a.layout.scene(szafki(a) + a.fresh(tpl, {d:200}) + a.move(a.hand(300, 192, {s:.9, hold:a.rect(-2, -4, 4, 10, 'kmb', {r:1})}), 0, -60), [
      {t:'Szablon z gotowych szafek', at:[120, 210], side:'l', y:150, k:'sz', hot:1} ]);
    const top = a.rect(54, 200, 372, 14, 'chudy', {r:2, k:'bl'}) + a.rect(250, 202, 60, 6, 'blacha', {r:3});
    const f2 = a.layout.scene(szafki(a) + a.move(top, 0, -90) + a.num(380, 160, 'Kwarc 2 cm', {d:500}), [
      {t:'Zlew podwieszany', at:[280, 205], side:'l', y:130, k:'zl'} ]);
    const pot = (x, y) => a.rect(x - 44, y - 50, 88, 50, 'kmb', {r:8}) + a.rect(x - 56, y - 44, 12, 8, 'kmb', {r:2}) + a.rect(x + 44, y - 44, 12, 8, 'kmb', {r:2}) + a.rect(x - 48, y - 56, 96, 8, 'kmb', {r:4});
    const okS = a.rect(10, 170, 202, 40, 'chudy', {r:2}) + a.rect(55, 158, 112, 12, 'drewno', {r:3}) + pot(111, 158) + a.text(111, 236, 'podkładka', {s:1, a:'middle'});
    const badS = a.rect(10, 170, 202, 40, 'chudy', {r:2}) + pot(111, 170) + a.line('M92 172l10 12 -8 10 12 14', 'il-ln', 'stroke:var(--il-bad);stroke-width:3') + a.text(111, 236, 'gorący garnek na kamieniu', {s:1, a:'middle'});
    return { caption:'Kamień mierzy się z zamontowanych szafek, a montuje 1–3 tygodnie później. Gorący garnek tylko na podkładce.', frames:[
      { caption:'Kamieniarz robi szablon z listew na gotowych korpusach: ściana nigdy nie jest idealnie prosta.', svg:S(a, f1, 'Szablon blatu na zamontowanych szafkach') },
      { caption:'Blat kwarcowy z jednej płyty, z otworem na zlew podwieszany.', svg:S(a, f2, 'Montaż blatu kwarcowego na szafkach') },
      { caption:'Kwarc nie lubi szoku termicznego: zawsze podkładka.', svg:S(a, a.layout.compare(okS, badS, ['Na podkładce', 'Prosto z płyty']), 'Dobrze: garnek na podkładce. Źle: gorący garnek na kwarcu') } ] };
  });

  /* 6. AGD i oświetlenie podszafkowe -------------------------------------- */
  BUDOWA.addIllus('14-umeblowanie/kuchnia-agd', function(a){
    const wall = a.rect(130, 68, 52, 214, 'blacha', {r:2, k:'lod'}) + a.line('M134 150H178', 'il-jt') +
      a.rect(330, 68, 52, 214, 'eps', {r:2}) + a.rect(336, 110, 40, 30, 'kmb', {r:3, k:'pie'}) + a.rect(336, 146, 40, 40, 'kmb', {r:3, k:'pie'}) +
      fronts(a, 182, 214, 148, 68, 3, 'eps') + a.rect(180, 208, 152, 6, 'chudy', {r:1}) + a.rect(228, 204, 56, 4, 'kmb', {r:1}) +
      a.poly([[226, 128], [286, 128], [276, 112], [236, 112]], 'blacha', {k:'okap'}) + a.rect(250, 68, 12, 44, 'blacha', {r:1}) +
      fronts(a, 182, 80, 44, 50, 1, 'eps') + fronts(a, 286, 80, 44, 50, 1, 'eps');
    const led = a.rect(184, 130, 40, 4, 'poziomica', {r:2, k:'led'}) + a.rect(288, 130, 40, 4, 'poziomica', {r:2}) +
      a.poly([[186, 134], [222, 134], [232, 206], [176, 206]], 'poziomica', {st:'opacity:.25'}) + a.poly([[290, 134], [326, 134], [336, 206], [280, 206]], 'poziomica', {st:'opacity:.25'});
    const s = a.layout.scene(floor(a) + wall + a.fresh(led, {d:400}) + a.dim(256, 200, 256, 132, '', {d:600}) + a.num(256, 166, '65–75 cm', {d:700}), [
      {t:'Lodówka w zabudowie', at:[150, 110], side:'l', y:110, k:'lod'},
      {t:'LED 2700 K w profilu', at:[200, 132], side:'l', y:180, k:'led', hot:1},
      {t:'Okap obiegowy', at:[270, 120], side:'r', y:60, k:'okap'},
      {t:'Piekarnik i kompakt', at:[372, 150], side:'r', y:240, k:'pie'} ]);
    return { caption:'Słupki z lodówką i piekarnikiem, między nimi płyta z okapem obiegowym. Taśma LED pod szafkami świeci na blat.', svg:S(a, s, 'Zabudowa kuchenna: lodówka, płyta z okapem obiegowym, piekarnik w słupku i taśma LED pod szafkami') };
  });

  /* 7. Szafy i garderoba -------------------------------------------------- */
  BUDOWA.addIllus('14-umeblowanie/szafy-garderoba', function(a){
    const room = (x) => a.rect(x, 216, 222, 8, 'drewno', {r:2}) + a.line(`M${x + 10} 216V140L${x + 200} 30`, 'il-ln', 'stroke-width:4');
    const fit = a.poly([[10, 216], [10, 146], [70, 112], [130, 77], [130, 216]], 'drewno') + a.line('M10 176H130M70 146V216', 'il-jt') + a.rect(56, 188, 28, 5, 'blacha', {r:2}) + a.rect(56, 156, 28, 5, 'blacha', {r:2});
    const okS = room(0) + a.move(fit, 0, 0) + a.text(111, 236, 'zabudowa pod cały skos', {s:1, a:'middle'});
    const badS = room(0) + a.rect(80, 120, 50, 96, 'drewno', {r:2}) + a.line('M105 124V212', 'il-jt') + a.circle(44, 176, 26) + a.text(111, 236, 'pusty kąt za szafą', {s:1, a:'middle'});
    // garderoba: drążki na 100 i 150 cm (≈ 74 i 111 jedn. nad podłogą)
    const rail = (x, w, y) => a.rect(x, y, w, 5, 'blacha', {r:2});
    const shirts = (x, n, y, h) => { let s = ''; for (let i = 0; i < n; i++) s += a.rect(x + i * 16, y + 4, 13, h, i % 2 ? 'xps' : 'eps', {r:3}); return s; };
    const g2 = floor(a) + a.rect(150, 60, 260, 222, 'papier', {r:2, cls:'il-dk'}) + a.line('M240 60V282M330 60V282', 'il-ln', 'stroke-width:3') +
      rail(156, 80, 171) + shirts(160, 5, 171, 40) + rail(156, 80, 208) + shirts(160, 5, 208, 34) +
      rail(246, 80, 134) + shirts(250, 5, 134, 90) + a.rect(336, 90, 70, 6, 'drewno', {r:1}) + a.rect(336, 130, 70, 6, 'drewno', {r:1}) +
      a.rect(336, 230, 70, 22, 'drewno', {r:2}) + a.rect(336, 254, 70, 22, 'drewno', {r:2});
    const f2 = a.layout.scene(g2 + who(a, 90, FL, {arms:[10, 40]}), [
      {t:'Płaszcze 150 cm', at:[300, 136], side:'r', y:120, k:'pl'},
      {t:'Szuflady', at:[400, 240], side:'r', y:200, k:'sz'} ]) + a.num(198, 40, 'Koszule 100 cm i 2 drążki', {d:400});
    return { caption:'Pod skosami i w przedpokoju szafy na wymiar, w garderobie gotowe moduły.', frames:[
      { caption:'Mebel na wymiar wypełnia skos ze ścianką kolankową 1,0 m. Gotowa szafa zostawia dziurę.', svg:S(a, a.layout.compare(okS, badS, ['Na wymiar', 'Gotowa szafa']), 'Dobrze: zabudowa pod skosem. Źle: gotowa szafa i pusty kąt') },
      { caption:'Garderoba: drążki na dwóch wysokościach, półki i szuflady.', svg:S(a, f2, 'Garderoba z drążkami na koszule i płaszcze oraz szufladami') } ] };
  });

  /* 8. Salon -------------------------------------------------------------- */
  BUDOWA.addIllus('14-umeblowanie/salon', function(a){
    // rzut salonu: kominek u góry, narożnik przodem, dywan, przejście do tarasu
    const plan = a.rect(150, 40, 180, 220, 'chudy', {r:4}) + a.rect(200, 36, 80, 22, 'eps', {r:3, k:'kom'}) + a.rect(222, 40, 36, 12, 'maszyna', {r:2}) +
      a.rect(175, 105, 130, 90, 'piasek', {r:6, k:'dyw'}) + a.rect(210, 128, 60, 38, 'drewno', {r:4}) +
      a.poly([[168, 180], [312, 180], [312, 220], [206, 220], [206, 248], [168, 248]], 'membrana', {k:'sof'}) + a.rect(326, 70, 8, 170, 'szklo', {r:2, k:'tar'});
    const f1 = a.layout.scene(plan + a.fresh(a.arrow([[158, 84], [240, 76], [318, 86]]), {d:400}) + a.num(220, 298, 'Przejście min. 90 cm', {d:700}), [
      {t:'Kominek', at:[210, 46], side:'l', y:46, k:'kom'},
      {t:'Dywan 200 × 300', at:[182, 130], side:'l', y:130, k:'dyw'},
      {t:'Taras', at:[330, 90], side:'r', y:70, k:'tar'},
      {t:'Narożnik przodem', at:[300, 200], side:'r', y:270, k:'sof', hot:1} ]);
    const okS = a.rect(0, 224, 222, 20, 'drewno', {r:0}) + fireplace(a, 111, 224, 0) + tv(a, 111, 26, 120);
    const badS = a.rect(0, 224, 222, 20, 'drewno', {r:0}) + a.rect(31, 104, 160, 120, 'eps', {r:3}) + a.rect(61, 128, 100, 70, 'kmb', {r:4}) +
      a.poly([[81, 194], [91, 160], [111, 140], [131, 162], [141, 194]], 'maszyna') + a.line('M80 84q8 -10 0 -20M111 84q8 -10 0 -20M142 84q8 -10 0 -20', 'il-ln', 'stroke:var(--il-bad);stroke-width:3') + tv(a, 111, -6, 120);
    return { caption:'Narożnik przodem do kominka wydziela strefę rozmowy, przejście do tarasu zostaje wolne.', frames:[
      { caption:'Strefa przy kominku, dywan pod przednimi nogami mebli i wolne przejście do tarasu.', svg:S(a, f1, 'Rzut salonu: kominek, narożnik, dywan i przejście do tarasu') },
      { caption:'Telewizor nad kominkiem tylko nisko, nad chłodnym gzymsem i po pomiarze temperatury ściany.', svg:S(a, a.layout.compare(okS, badS, ['Nisko, nad gzymsem', 'Wysoko, nad gorącem']), 'Dobrze: telewizor nisko nad gzymsem. Źle: telewizor wysoko nad gorącą obudową') } ] };
  });

  /* 9. Jadalnia ----------------------------------------------------------- */
  BUDOWA.addIllus('14-umeblowanie/jadalnia', function(a){
    const glass = a.rect(40, 40, 400, 200, 'blacha', {r:4}) + a.rect(48, 48, 188, 184, 'szklo', {r:2}) + a.rect(244, 48, 188, 184, 'szklo', {r:2}) +
      a.rect(48, 196, 188, 36, 'trawa', {r:0, st:'opacity:.6'}) + a.rect(244, 196, 188, 36, 'trawa', {r:0, st:'opacity:.6'}) + '<path class="il-shine" d="M70 180L130 70M270 180L330 70"/>';
    const plates = a.rect(-60, -5, 34, 5, 'eps', {r:2}) + a.rect(26, -5, 34, 5, 'eps', {r:2});
    const s = glass + a.layout.table([{at:'l'}, {at:'r'}], plates, {w:220}) + ceil(a, 20) + pendant(a, 240, 20, 168, 1, {k:'lam'}) +
      a.dim(250, 222, 250, 172, '', {d:300}) + a.num(320, 196, '65–75 cm', {d:400}) + a.callout('lam', 232, 160, 120, 140, 'Lampa w osi stołu') + a.num(240, 304, 'Wokół stołu min. 80–90 cm', {d:600});
    return { caption:'Stół ok. 100 × 200 cm przy przeszkleniu, lampa nad środkiem stołu i miejsce na odsunięcie krzeseł.', svg:S(a, s, 'Stół w jadalni przy dużym przeszkleniu, dwie osoby przy stole, lampa wisząca nad blatem') };
  });

  /* 10. Sypialnia --------------------------------------------------------- */
  function bed(a){ return a.shadow(240, FL, 150, 7) + a.rect(112, 178, 256, 62, 'membrana', {r:10, cls:'il-dk'}) + a.rect(110, 236, 260, 40, 'membrana', {r:6}) + a.rect(118, 220, 244, 22, 'eps', {r:6}) +
    a.rect(132, 206, 70, 22, 'eps', {r:8, cls:'il-dk'}) + a.rect(278, 206, 70, 22, 'eps', {r:8, cls:'il-dk'}) + a.rect(118, 276, 8, 6, 'kmb', {r:1}) + a.rect(354, 276, 8, 6, 'kmb', {r:1}) +
    a.rect(44, 232, 50, 50, 'drewno', {r:3}) + a.rect(386, 232, 50, 50, 'drewno', {r:3}); }
  BUDOWA.addIllus('14-umeblowanie/sypialnia', function(a){
    let pan = ''; for (let i = 0; i < 6; i++) pan += a.rect(104 + i * 46, 110, 42, 120, 'zwir', {r:8});
    const led = a.rect(100, 104, 280, 4, 'poziomica', {r:2, k:'led'}) + a.poly([[100, 108], [380, 108], [380, 140], [100, 140]], 'poziomica', {st:'opacity:.22'});
    const f1 = a.layout.scene(floor(a) + ceil(a, 30) + bed(a) + a.num(240, 300, '180 × 200 cm', {d:300}), [
      {t:'Łóżko tapicerowane', at:[150, 256], side:'l', y:150, k:'bed', hot:1},
      {t:'Szafka nocna', at:[420, 240], side:'r', y:150, k:'sn'} ]);
    const f2 = a.layout.scene(floor(a) + ceil(a, 30) + a.fresh(pan, {d:100, k:'pan'}) + a.fresh(led, {d:600}) + bed(a) +
      a.rect(70, 150, 10, 30, 'kmb', {r:3}) + a.rect(400, 150, 10, 30, 'kmb', {r:3}), [
      {t:'Panele z tkaniny', at:[130, 170], side:'l', y:180, k:'pan', hot:1},
      {t:'LED 2700 K', at:[360, 106], side:'r', y:70, k:'led'},
      {t:'Kinkiet', at:[405, 160], side:'r', y:200, k:'kin'} ]);
    return { caption:'Łóżko tapicerowane, za nim miękka ściana z ukrytym światłem i kinkiety do czytania.', frames:[
      { caption:'Łóżko 180 × 200 na nóżkach, po bokach szafki nocne i min. 60–70 cm przejścia.', svg:S(a, f1, 'Łóżko tapicerowane z szafkami nocnymi') },
      { caption:'Panele tapicerowane za łóżkiem i taśma LED nad nimi na ściemniaczu.', svg:S(a, f2, 'Ściana tapicerowana z taśmą LED i kinkietami za łóżkiem') } ] };
  });

  /* 11. Pokój dziecięcy --------------------------------------------------- */
  BUDOWA.addIllus('14-umeblowanie/pokoj-dzieciecy', function(a){
    const wallp = a.rect(0, 10, 14, 200, 'ceramika', {r:0}) + a.rect(0, 210, 222, 14, 'drewno', {r:0});
    const dresser = a.rect(14, 90, 90, 120, 'eps', {r:3}) + a.line('M18 130H100M18 170H100', 'il-jt') + a.rect(48, 106, 22, 5, 'blacha', {r:2}) + a.rect(48, 146, 22, 5, 'blacha', {r:2}) + a.rect(48, 186, 22, 5, 'blacha', {r:2});
    const okS = wallp + dresser + a.rect(8, 92, 24, 6, 'kmb', {r:2}) + a.person(160, 210, {s:.7, kask:false, arms:[10, 40]}) + a.text(111, 244, 'przykręcona do ściany', {s:1, a:'middle'});
    const badS = wallp + a.g(dresser, {tr:'rotate(24 104 210)'}) + a.person(170, 210, {s:.7, kask:false, arms:[150, 160]}) + a.text(111, 244, 'przewraca się na dziecko', {s:1, a:'middle'});
    const ic = [
      x => a.rect(x - 14, 144, 28, 14, 'drewno', {r:2}) + a.line(`M${x - 12} 144V134M${x - 4} 144V134M${x + 4} 144V134M${x + 12} 144V134M${x - 14} 134H${x + 14}`, 'il-ln', 'stroke-width:2'),
      x => a.rect(x - 16, 146, 32, 10, 'membrana', {r:2}) + a.rect(x - 16, 138, 10, 10, 'eps', {r:3}),
      x => a.rect(x - 16, 138, 32, 5, 'drewno', {r:1}) + a.line(`M${x - 12} 143V160M${x + 12} 143V160`, 'il-ln', 'stroke-width:2.5') + a.laptop(x, 138, .3)
    ];
    const f2 = a.text(240, 40, 'Pokój rośnie z dzieckiem', {b:1, a:'middle'}) +
      a.layout.steps([{t:'Łóżeczko', icon:ic[0](100)}, {t:'Łóżko 90 × 200', icon:ic[1](240)}, {t:'Biurko rosnące', icon:ic[2](380)}], {x0:100, x1:380}) +
      a.num(240, 270, 'Biurko ok. 52–76 cm', {d:700});
    return { caption:'Każdy wysoki mebel przykręcony do ściany, a meble neutralne, które posłużą kilka lat.', frames:[
      { caption:'Dziecko wspina się po szufladach. Kątownik do ściany kosztuje kilka złotych.', svg:S(a, a.layout.compare(okS, badS, ['Przykręcona', 'Bez mocowania']), 'Dobrze: komoda przykręcona do ściany. Źle: komoda przewraca się na dziecko') },
      { caption:'Łóżeczko, potem łóżko 90 × 200 i biurko z regulacją wysokości.', svg:S(a, f2, 'Trzy etapy pokoju dziecięcego: łóżeczko, łóżko, biurko z regulacją') } ] };
  });

  /* 12. Siłownia ---------------------------------------------------------- */
  BUDOWA.addIllus('14-umeblowanie/silownia', function(a){
    const mat = a.rect(60, 270, 360, 12, 'kmb', {r:2, k:'mat'}) + a.line('M150 272V280M240 272V280M330 272V280', 'il-jt');
    const mirror = a.rect(200, 70, 200, 170, 'blacha', {r:4}) + a.rect(206, 76, 188, 158, 'szklo', {r:2, k:'lus'}) + '<path class="il-shine" d="M230 220L300 90M270 220L340 90"/>';
    const bench = a.rect(250, 238, 110, 12, 'membrana', {r:5}) + a.line('M266 250V270M344 250V270', 'il-ln', 'stroke-width:4');
    const db = a.rect(-14, -3, 28, 6, 'blacha', {r:2}) + a.rect(-20, -9, 8, 18, 'kmb', {r:2}) + a.rect(12, -9, 8, 18, 'kmb', {r:2});
    const s = a.layout.scene(floor(a) + mirror + mat + bench + a.g(db, {tr:'translate(410 262)'}) + a.g(db, {tr:'translate(410 246)', k:'han'}) +
      who(a, 170, 270, {arms:[10, 115], hold:db}) + a.num(240, 304, 'Mata 15–20 mm', {d:400}), [
      {t:'Lustro z folią', at:[380, 120], side:'r', y:80, k:'lus', hot:1},
      {t:'Hantle regulowane', at:[410, 256], side:'r', y:200, k:'han'},
      {t:'Mata gumowa', at:[90, 274], side:'l', y:230, k:'mat'} ]);
    return { caption:'Mata gumowa na gotowej podłodze, lustro na kleju do luster z folią bezpieczną, sprzęt zawsze na miejscu.', svg:S(a, s, 'Domowa siłownia: osoba z hantlem przed lustrem, ławka i mata gumowa') };
  });

  /* 13. Meble łazienkowe -------------------------------------------------- */
  BUDOWA.addIllus('14-umeblowanie/lazienka-meble', function(a){
    const tilesW = a.rect(0, 0, 222, 210, 'eps', {r:0}) + a.line('M0 56H222M0 112H222M0 168H222M74 0V210M148 0V210', 'il-jt') + a.rect(0, 210, 222, 14, 'beton', {r:0});
    const cab = y => a.rect(36, y, 150, 50, 'drewno', {r:3}) + a.line(`M40 ${y + 25}H182`, 'il-jt') + a.rect(30, y - 8, 162, 8, 'eps', {r:2}) + a.rect(70, y - 18, 82, 12, 'eps', {r:6});
    const mir = a.rect(66, 30, 90, 70, 'szklo', {r:6}) + a.rect(66, 30, 90, 4, 'poziomica', {r:2});
    const okS = tilesW + mir + cab(130) + a.dim(200, 180, 200, 210, '', {}) + a.num(150, 195, '15–25 cm', {}) + a.text(111, 244, 'podwieszona, łatwo umyć', {s:1, a:'middle'});
    const badS = tilesW + mir + a.rect(36, 146, 150, 64, 'drewno', {r:3}) + a.rect(30, 138, 162, 8, 'eps', {r:2}) + a.rect(70, 128, 82, 12, 'eps', {r:6}) + a.drops(60, 204, 4) + a.rust(150, 196) + a.text(111, 244, 'cokół w wodzie, puchnie', {s:1, a:'middle'});
    return { caption:'Szafki łazienkowe zawsze podwieszane, z materiałów odpornych na wilgoć.', svg:S(a, a.layout.compare(okS, badS, ['Podwieszona', 'Stojąca na płytkach']), 'Dobrze: szafka podwieszona nad podłogą. Źle: szafka stojąca w wodzie') };
  });

  /* 14. Oświetlenie dekoracyjne i sceny ----------------------------------- */
  function salonNoc(a, lit, dark, label){
    const isl = a.rect(60, 214, 160, 68, 'eps', {r:2}) + a.rect(56, 206, 168, 8, 'chudy', {r:2});
    const tbl = a.table(360, FL, 160, 56);
    const lamps = [100, 140, 180].map(x => pendant(a, x, 30, 156, lit.wy, {k:'wy'})).join('') + pendant(a, 360, 30, 168, lit.st, {k:'st'});
    const led = lit.led ? a.rect(0, 30, 480, 4, 'poziomica', {r:0}) + a.poly([[0, 34], [480, 34], [480, 60], [0, 60]], 'poziomica', {st:'opacity:.2'}) : '';
    return floor(a) + ceil(a, 30) + led + isl + tbl + lamps + (dark ? a.rect(0, 0, 480, 320, 'kmb', {r:0, st:`opacity:${dark};pointer-events:none`}) : '') +
      a.pill(240, 300, label, {acc:1});
  }
  BUDOWA.addIllus('14-umeblowanie/oswietlenie-dekoracyjne', function(a){
    const f1 = a.layout.scene(salonNoc(a, {wy:1, st:1, led:1}, 0, 'Scena: Gotowanie') + a.dim(36, 206, 36, 160, '', {d:300}) + a.num(76, 118, '65–75 cm', {d:400}), [
      {t:'Lampy nad wyspą', at:[180, 150], side:'r', y:100, k:'wy', hot:1} ]);
    const f2 = salonNoc(a, {wy:0, st:1, led:0}, .25, 'Scena: Kolacja') + a.callout('st', 370, 162, 455, 110, 'Lampa nad stołem 60%');
    const f3 = salonNoc(a, {wy:0, st:0, led:1}, .45, 'Scena: Film');
    return { caption:'Lampy wiszące nad wyspą i stołem, taśmy LED i kinkiety łączysz w sceny w smart home.', frames:[
      { caption:'Gotowanie: wszystko na 100%, lampy nad wyspą 65–75 cm nad blatem.', svg:S(a, f1, 'Kuchnia z wyspą i stół: wszystkie lampy zapalone') },
      { caption:'Kolacja: lampa nad stołem przygaszona, reszta wyłączona.', svg:S(a, f2, 'Scena kolacja: świeci tylko lampa nad stołem') },
      { caption:'Film: tylko taśmy LED, ok. 10% jasności.', svg:S(a, f3, 'Scena film: przygaszone taśmy LED') } ] };
  });

  /* 15. Zasłony, szyny, rośliny ------------------------------------------- */
  function okno(a){ return floor(a) + ceil(a, 30) + a.window(150, 60, 180, 222) + a.rect(158, 246, 164, 28, 'trawa', {r:0, st:'opacity:.5'}); }
  BUDOWA.addIllus('14-umeblowanie/tekstylia-rosliny', function(a){
    const rail = a.rect(110, 32, 260, 6, 'blacha', {r:2, k:'sz'});
    const f1 = a.layout.scene(okno(a) + a.fresh(rail, {d:200}) + a.dim(110, 50, 150, 50, '', {d:400}) + a.num(130, 80, '15–25 cm', {d:500}), [
      {t:'Szyna do stropu', at:[300, 35], side:'r', y:70, k:'sz', hot:1} ]);
    const curt = (x, w) => { let d = ''; for (let i = 0; i < w / 12; i++) d += `M${x + 6 + i * 12} 44V276`;
      return a.rect(x, 38, w, 242, 'eps', {r:4}) + a.line(d, 'il-jt'); };
    const f2 = a.layout.scene(okno(a) + rail + a.move(curt(108, 42), 120, 0) + a.move(curt(330, 42), -120, 0) + plant(a, 410, FL, 1.4) +
      a.num(220, 300, 'Zasłona 1–2 cm nad podłogą', {d:600}), [
      {t:'Zasłona wave', at:[128, 150], side:'l', y:150, k:'za', hot:1},
      {t:'Roślina na nóżkach', at:[410, 230], side:'r', y:140, k:'ro'} ]);
    return { caption:'Szyna sufitowa szersza od okna, zasłona od sufitu do podłogi i duża roślina przy przeszkleniu.', frames:[
      { caption:'Szyna przy suficie wychodzi 15–25 cm poza okno z każdej strony.', svg:S(a, f1, 'Szyna sufitowa szersza od okna') },
      { caption:'Odsunięta zasłona nie zasłania szkła, a roślina stoi na podstawce, nie na podłogówce.', svg:S(a, f2, 'Zasłony odsunięte na boki okna i roślina na podstawce') } ] };
  });
})();
