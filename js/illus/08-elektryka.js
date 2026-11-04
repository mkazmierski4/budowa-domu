/* Ilustracje etapu 08 — Elektryka, niskoprądowe, oświetlenie. Liczby zgodne z content/08-elektryka.js i docs/DECYZJE.md.
   Lokalne pomocniki (brak w bibliotece): gniazdo, łącznik, puszka, przewód z kolorem, rozdzielnica z aparatami, auto, lampa, kamera. */
(function(){
  const S = (a, s, l) => a.svg(s, 480, 320, l);
  const WH = 'var(--il-papier)', LAN = 'var(--il-xps)', DK = 'var(--il-kmb)';
  const wire = (p, c, w, o) => `<path class="il-cab${o && o.draw ? ' draw' : ''}" d="M${p.map(q => q.join(' ')).join('L')}" style="stroke:${c || WH};stroke-width:${w || 4}"/>`;
  const sock = (a, x, y, s, o) => a.g(a.rect(-13,-13,26,26,'papier',{r:5}) + '<circle r="8" class="il-m c-blacha"/><circle cx="-3.5" r="1.7" class="il-m c-kmb"/><circle cx="3.5" r="1.7" class="il-m c-kmb"/>',
    Object.assign({tr:`translate(${x} ${y}) scale(${s || 1})`}, o));
  const swt = (a, x, y, s, o) => a.g(a.rect(-13,-13,26,26,'papier',{r:5}) + a.rect(-6,-9,12,18,'blacha',{r:3}), Object.assign({tr:`translate(${x} ${y}) scale(${s || 1})`}, o));
  const box = (x, y, r) => `<circle cx="${x}" cy="${y}" r="${r || 10}" class="il-m c-poziomica"/><circle cx="${x}" cy="${y}" r="${(r || 10)*.55}" class="il-m c-kmb"/>`;
  const wall = (a, x, y, w, h) => a.blocks(x, y, w, h, 50, 25, 'ceramika');
  const floor = (a, y, mat) => a.rect(0, y, 480, 320-y, mat || 'beton', {r:0});
  const glow = (a, p, o) => a.poly(p, 'poziomica', Object.assign({st:'opacity:.28'}, o));
  // rozdzielnica: aparat modułowy (szer. 16), rząd aparatów
  const mod = (a, x, y, mat, w, on) => a.rect(x, y, (w || 1)*16-2, 40, mat || 'papier', {r:2}) + a.rect(x+(w || 1)*8-5, y+(on === false ? 22 : 8), 8, 10, 'kmb', {r:2});

  /* ---------- 1. Projekt instalacji ---------- */
  BUDOWA.addIllus('08-elektryka/projekt-instalacji', function(a){
    const plan = a.laptop(0, 0, 1.6) + a.fresh(['M-24 -48h20v14h-20z', 'M-2 -48h22v14h-22z'].map(d => `<path class="il-ln" d="${d}" style="stroke-width:1.5"/>`).join('') +
      [[-20,-46],[-8,-38],[4,-46],[16,-38]].map(q => `<circle cx="${q[0]}" cy="${q[1]}" r="2.2" class="il-m c-bad"/>`).join(''), {d:300});
    const f1 = a.rect(20,24,440,262,'papier',{r:10,cls:'il-panel'}) + a.window(48,58,72,66) + a.num(350,72,'150–200 punktów') +
      a.layout.table([{at:'l', t:'Ty', k:'t'}, {at:'r', t:'Projektant', k:'p'}], plan);
    const room = (bad) => a.rect(14,20,194,150,'drewno',{r:4}) + a.rect(14,20,194,14,'ceramika',{r:2}) +
      a.rect(40,36,110,42,'xps',{r:10}) + a.rect(40,36,110,12,'xps',{r:6}) +
      (bad ? a.rect(150,24,56,50,'drewno',{r:2,cls:'il-dk'}) + a.ghost(sock(a,176,27,.6)) + a.text(178,58,'szafa',{s:1,a:'middle'}) : sock(a,170,27,.6) + a.rect(158,40,30,30,'drewno',{r:4})) +
      a.text(111,200,bad ? 'gniazdo za szafą' : 'gniazdo przy sofie',{s:1,a:'middle'});
    const f2 = a.layout.compare(room(0), room(1), ['Najpierw meble', 'Najpierw kable']);
    return { caption: 'Projekt elektryki rysujesz na rzucie z meblami: każdy punkt ma swoje miejsce przed bruzdowaniem.', frames: [
      { caption: 'Z projektantem przechodzisz rzut pokój po pokoju.', svg: S(a, f1, 'Inwestor i projektant przy stole z laptopem i rzutem z punktami') },
      { caption: 'Meble decydują o gniazdach: inaczej gniazdo ląduje za szafą.', svg: S(a, f2, 'Dobrze: gniazdo obok sofy. Źle: gniazdo zasłonięte szafą') } ] };
  });

  /* ---------- 2. Punkty pomieszczenie po pomieszczeniu (rzut) ---------- */
  BUDOWA.addIllus('08-elektryka/punkty-pomieszczenia', function(a){
    const R = (x,y,w,h) => a.rect(x,y,w,h,'papier',{r:0});
    const g = (x,y) => a.rect(x-4,y-4,8,8,'kmb',{r:2});
    const l = (x,y) => `<circle cx="${x}" cy="${y}" r="5" class="il-m c-poziomica"/>`;
    const plan = a.rect(146,46,198,228,'blacha',{r:2}) + R(150,50,100,108) + R(254,50,86,108) + R(150,162,50,108) + R(204,162,46,108) + R(254,162,86,108) +
      a.rect(272,96,40,18,'drewno',{r:3}) + a.rect(160,72,50,18,'xps',{r:6}) + a.rect(156,236,38,24,'woda',{r:10}) + a.rect(266,186,30,62,'xps',{r:8}) + a.rect(212,210,26,44,'kmb',{r:4});
    const pts = a.fresh([g(152,96),g(152,140),g(222,52),g(246,120),g(262,56),g(282,56),g(302,56),g(286,105),g(298,105),g(186,166),g(206,200),g(206,230),g(336,236),g(320,266)].join('') +
      [l(200,104),l(180,130),l(225,85),l(297,80),l(292,130),l(175,210),l(227,190),l(297,200),l(318,200)].join(''), {d:300});
    const s = a.layout.scene(plan + pts + a.num(245,300,'ok. 150–200 punktów'), [
      {t:'Salon', sub:'ściana TV, sofa', at:[200,104], k:'s'},
      {t:'Łazienka', at:[175,240], k:'l'},
      {t:'Siłownia', at:[226,232], k:'si', side:'l'},
      {t:'Kuchnia z wyspą', at:[292,105], k:'k'},
      {t:'Garaż', sub:'ładowarka, brama', at:[322,215], k:'g'} ]);
    return { caption: 'Rzut parteru z punktami: czarne kwadraty to gniazda, żółte kółka to światło. Każde pomieszczenie ma swój „przepis”.', svg: S(a, s, 'Rzut parteru z rozmieszczonymi gniazdami i punktami świetlnymi w salonie, kuchni, łazience, siłowni i garażu') };
  });

  /* ---------- 3. Złącze, WLZ i uziom (przekrój) ---------- */
  BUDOWA.addIllus('08-elektryka/przylacze-uziom', function(a){
    const base = a.rect(0,200,480,120,'ziemia',{r:0}) + a.rect(0,196,300,8,'trawa',{r:0}) +
      a.rect(300,60,30,140,'ceramika',{r:0}) + a.rect(300,200,30,86,'bloczek',{r:0}) + a.rect(284,286,62,26,'beton',{r:2}) + a.rect(330,186,150,14,'beton',{r:0}) +
      a.shadow(66,202,30,5) + a.rect(46,126,40,74,'blacha',{r:3}) + a.rect(52,136,28,18,'szklo',{r:2}) +
      a.pipe([[66,204],[66,246],[300,246]],14,'rura') + a.pipe([[300,246],[366,246],[366,190]],14,'rura');
    const wlz = a.fresh(wire([[66,180],[66,246],[366,246],[366,158]],DK,4,{draw:1}), {d:300});
    const board = a.rect(332,96,50,64,'blacha',{r:3}) + a.rect(338,106,38,10,'papier',{r:1}) + a.rect(338,124,38,10,'papier',{r:1});
    const gsu = a.rect(332,170,24,8,'stal',{r:2});
    const tape = a.fresh(`<path class="il-ln draw" d="M315 300V268Q315 262 322 262H344V178" style="stroke:var(--il-stal);stroke-width:5"/>`, {d:600});
    const s = a.layout.scene(base + wlz + board + gsu + tape + a.num(190,292,'np. 5 × 10 mm²'), [
      {t:'Złącze z licznikiem', at:[66,140], k:'z'},
      {t:'WLZ w rurze', at:[180,246], k:'w'},
      {t:'Rozdzielnica', at:[382,116], k:'r'},
      {t:'Szyna wyrównawcza', at:[352,174], k:'s', hot:1},
      {t:'Uziom z ław', at:[316,290], k:'u', side:'r'} ]);
    return { caption: 'Kabel z licznika biegnie w rurze do rozdzielnicy, a taśma uziomu z ław (etap 04) trafia na szynę wyrównawczą.', svg: S(a, s, 'Przekrój: złącze na granicy, kabel WLZ w rurze pod ziemią, rozdzielnica i szyna wyrównawcza z taśmą uziomu z ławy') };
  });

  /* ---------- 4. Przewody i przekroje ---------- */
  BUDOWA.addIllus('08-elektryka/przewody-przekroje', function(a){
    const C = ['drewno','xps','poziomica','kmb','blacha'];
    const flat = (cx, r) => a.rect(cx-50,118,100,40,'papier',{r:18}) + [-26,0,26].map((d,i) => `<circle cx="${cx+d}" cy="138" r="${r}" class="il-m c-${C[i]}"/>`).join('');
    const round = cx => `<circle cx="${cx}" cy="138" r="34" class="il-m c-papier"/>` + [[0,-15],[14,-5],[9,12],[-9,12],[-14,-5]].map((q,i) => `<circle cx="${cx+q[0]}" cy="${138+q[1]}" r="9" class="il-m c-${C[(i+1)%5]}"/>`).join('');
    const bulb = '<circle cx="90" cy="44" r="10" class="il-m c-poziomica"/><rect x="85" y="53" width="10" height="7" rx="2" class="il-m c-blacha"/>';
    const car = '<path class="il-m c-xps" d="M373 52l5 -9h22l6 9h3v7h-39v-7z"/><circle cx="380" cy="59" r="4" class="il-m c-kmb"/><circle cx="400" cy="59" r="4" class="il-m c-kmb"/>';
    const col = (cx, icon, name, sec, prot, inner, d) => a.fresh(a.stop(cx, 50, '', {icon}) + inner + a.pill(cx, 200, name) + a.num(cx, 240, sec) + a.text(cx, 280, prot, {a:'middle', b:1}), {d});
    const s = col(90, bulb, 'Oświetlenie', '3 × 1,5 mm²', 'B10', flat(90, 7), 0) +
      col(240, sock(a, 240, 50, .8), 'Gniazda', '3 × 2,5 mm²', 'B16', flat(240, 9.5), 250) +
      col(390, car, 'Ładowarka 11 kW', '5 × 6 mm²', '3 × 16 A', round(390), 500);
    return { caption: 'Grubość żyły zależy od odbiornika. Zabezpieczenie dobiera się do przewodu, a nie odwrotnie.', svg: S(a, s, 'Przekroje przewodów: oświetlenie 3 × 1,5 z B10, gniazda 3 × 2,5 z B16, ładowarka 5 × 6') };
  });

  /* ---------- 5. Trasy przewodów: sekwencja ---------- */
  // ściana 1 jedn. = 1 cm: strop y 0–20, posadzka y 290; drzwi 60–150, okno 300–390
  const elev = a => a.rect(0,0,480,20,'beton',{r:0}) + wall(a,0,20,480,270) + floor(a,290) + a.rect(60,80,90,210,'drewno',{r:2}) + a.window(300,60,90,140);
  BUDOWA.addIllus('08-elektryka/trasy-przewodow', function(a){
    const band = '<path class="il-zone" d="M0 35H480V50H0Z"/>';
    const route = 'M172 185V43M232 260V43M440 260V43M20 43H460';
    const f1 = S(a, elev(a) + band + box(172,185) + box(232,260) + box(440,260) +
      a.fresh(`<path class="il-ln draw" d="${route}" style="stroke:var(--il-papier);stroke-width:3;stroke-dasharray:8 6"/>`, {d:200}) +
      a.move(a.hand(440,224,{r:-10,s:.7}), 0, 40) +
      a.dim(260,20,260,50,'15–30 cm',{dx:52,dy:28,d:700}) + a.pill(240,120,'Tylko pion i poziom',{d:900}),
      'Elektryk rysuje kredą trasy: pas pod sufitem i pionowe zejścia do puszek');
    const f2 = S(a, wall(a,40,40,400,220) + a.rect(220,40,22,220,'kmb',{r:3,st:'opacity:.55'}) +
      a.move(wire([[231,30],[231,270]],WH,9), 60, 0) + a.fresh([90,150,210].map(y => `<ellipse cx="231" cy="${y}" rx="15" ry="9" class="il-m c-papier"/>`).join(''), {d:700}) +
      a.move(a.hand(262,140,{r:60,s:.9}), 60, 0) +
      a.callout('b', 222, 230, 120, 282, 'Bruzda 2–3 cm', {d:500}) + a.callout('g', 218, 150, 110, 80, 'Gips co ok. 30 cm', {d:800}),
      'Płaski przewód w płytkiej bruździe, przyklejony plackami gipsu');
    const pan = bad => wall(a,10,10,202,180) + box(60,160,8) + box(170,60,8) +
      (bad ? wire([[60,160],[170,60]],WH,4) + a.drill(132,96,1) : wire([[60,160],[60,20],[170,20],[170,60]],WH,4) + a.drill(122,110,1)) +
      a.text(111,224, bad ? 'wiertło trafia w kabel' : 'wiercisz bezpiecznie', {s:1,a:'middle'});
    const f3 = S(a, a.layout.compare(pan(0), pan(1), ['Pion i poziom', 'Po skosie']), 'Dobrze: przewód pionowo i poziomo. Źle: przewód po skosie, wiertło trafia w kabel');
    return { caption: 'Przewody w ścianie biegną tylko pionowo i poziomo, w stałych pasach.', frames: [
      { caption: 'Trasowanie: pas pod sufitem i zejścia do puszek, rysowane kredą.', svg: f1 },
      { caption: 'Przewód wchodzi w płytką bruzdę i trzyma się na plackach gipsu.', svg: f2 },
      { caption: 'Po latach wiesz, gdzie nie wiercić. Skos to przebity kabel.', svg: f3 } ] };
  });

  /* ---------- 6. Puszki i wysokości ---------- */
  BUDOWA.addIllus('08-elektryka/puszki-wysokosci', function(a){
    // 1 jedn. = 1 cm, gotowa posadzka y 290
    const f1 = S(a, a.rect(0,0,480,20,'beton',{r:0}) + a.rect(0,20,480,270,'papier',{r:0,cls:'il-panel'}) + floor(a,290,'drewno') +
      a.rect(20,80,90,210,'drewno',{r:2}) + a.rect(340,200,140,90,'drewno',{r:2}) + a.rect(336,192,144,10,'beton',{r:2}) + a.rect(360,40,120,80,'drewno',{r:2}) +
      swt(a,140,185,.8) + sock(a,250,260,.8) + sock(a,410,175,.8) + a.person(72,290,{s:1.55,kask:false,arms:[10,70]}) +
      a.dim(158,290,158,185,'105–110 cm',{dx:42,d:300}) + a.dim(272,290,272,260,'30 cm',{dx:36,d:500}) + a.dim(440,290,440,175,'ok. 110 cm',{dy:-24,dx:-6,d:700}),
      'Ściana z drzwiami, łącznikiem na 105–110 cm, gniazdem na 30 cm i gniazdem nad blatem kuchni na ok. 110 cm');
    // 1 cm = 2 jedn.: płyta y 280, gotowa posadzka y 230 (+25 cm), puszka 30 cm nad posadzką (y 170)
    const f2 = S(a, wall(a,0,0,480,280) + a.rect(0,280,480,40,'beton',{r:0}) +
      a.move(a.rect(0,250,480,30,'eps',{r:0}) + a.rect(0,237,480,13,'beton',{r:0}) + a.rect(0,230,480,7,'drewno',{r:0}), 0, 50) +
      box(190,170,13) + a.fresh(a.hand(202,170,{r:-70,s:.8}), {d:200}) +
      a.dim(130,280,130,170,'55 cm od płyty',{dx:-6,d:500}) + a.dim(250,230,250,170,'30 cm',{dx:34,d:800}) +
      a.callout('e', 400, 265, 400, 110, 'Styropian 15 cm', {d:700}) + a.pill(360,300,'Jastrych i okładzina',{d:900}),
      'Na stanie surowym puszka jest 55 cm nad płytą, bo podłoga urośnie o 25 cm');
    return { caption: 'Wysokości są zwyczajowe, licz je od gotowej posadzki i trzymaj w całym domu.', frames: [
      { caption: 'Łącznik ok. 105–110 cm, gniazdo ok. 30 cm, nad blatem ok. 110 cm.', svg: f1 },
      { caption: 'Podłoga urośnie o ok. 25 cm, więc puszkę osadzasz od poziomu ±0,00, nie od płyty.', svg: f2 } ] };
  });

  /* ---------- 7. Ładowarka auta w garażu: przygotowanie → montaż ---------- */
  BUDOWA.addIllus('08-elektryka/obwody-sily', function(a){
    const car = '<g>' + a.shadow(270,256,130,8) + '<path class="il-m c-xps" d="M150 246V214Q152 202 166 200L206 196L238 166Q248 158 262 158H330Q344 158 352 168L378 198L396 202Q410 206 410 220V246Z"/>' +
      '<path class="il-m c-szklo" d="M226 196L248 172H290V196ZM298 196V172H330Q338 172 344 180L356 196Z"/>' +
      [190,360].map(x => `<circle cx="${x}" cy="246" r="20" class="il-m c-kmb"/><circle cx="${x}" cy="246" r="8" class="il-m c-blacha"/>`).join('') + '</g>';
    const base = wall(a,0,0,480,256) + floor(a,256) + wire([[0,40],[440,40],[440,176]],DK,5);
    const f1 = S(a, base + box(440,184,12) + `<path class="il-cab" d="M430 200q-14 10 0 18q14 8 0 16" style="stroke:${DK};stroke-width:5"/>` + a.ghost(car) +
      a.callout('p', 432, 192, 300, 100, 'Zapas przewodu w puszce', {d:300}) + a.num(110,100,'5 × 6 mm²',{d:500}),
      'Na ścianie garażu puszka z zapasem przewodu 5 × 6 mm², auta jeszcze nie ma');
    const f2 = S(a, base + car + a.fresh(a.rect(422,150,36,56,'blacha',{r:6}) + a.rect(430,160,20,10,'szklo',{r:2}) +
      `<path class="il-cab draw" d="M440 206Q440 236 410 236Q380 236 372 216" style="stroke:${DK};stroke-width:5"/>`, {d:200}) +
      a.callout('w', 422, 170, 300, 100, 'Ładowarka 11 kW', {hot:1, d:400}) + a.pill(120,90,'Zarządzanie mocą',{d:700}),
      'Ładowarka 11 kW zamontowana na gotowym przewodzie ładuje auto');
    return { caption: 'Przewód pod ładowarkę kładziesz teraz, a ładowarkę dokupujesz razem z autem.', frames: [
      { caption: 'Teraz: przewód 5 × 6 mm² w puszce przy bramie, ok. 1–1,3 m nad posadzką.', svg: f1 },
      { caption: 'Później: ładowarka 11 kW na gotowym przewodzie, bez kucia.', svg: f2 } ] };
  });

  /* ---------- 8. Oświetlenie: warstwy światła ---------- */
  BUDOWA.addIllus('08-elektryka/oswietlenie', function(a){
    // 1 m ≈ 92 jedn., sufit y 40, posadzka y 280
    const room = a.rect(0,0,480,40,'beton',{r:0}) + a.rect(0,40,480,240,'papier',{r:0,cls:'il-panel'}) + floor(a,280,'drewno') +
      a.rect(20,200,130,80,'drewno',{r:2}) + a.rect(16,192,138,10,'beton',{r:2}) + a.rect(20,80,130,44,'drewno',{r:2}) + a.rect(26,124,118,4,'poziomica',{r:1});
    const light = glow(a,[[28,128],[142,128],[154,192],[16,192]],{k:'r'}) +
      glow(a,[[214,44],[226,44],[262,280],[178,280]],{k:'o'}) + glow(a,[[314,44],[326,44],[362,280],[278,280]],{k:'o'}) +
      glow(a,[[430,130],[446,130],[470,210],[410,210]],{k:'n'});
    const fix = a.rect(208,38,24,6,'blacha',{r:2}) + a.rect(308,38,24,6,'blacha',{r:2}) + a.rect(428,118,20,14,'blacha',{r:3}) + swt(a,300,190,.8);
    const s = a.layout.scene(room + a.fresh(light, {d:200}) + fix + a.person(250,280,{s:1.5,kask:false,arms:[10,75]}) + a.num(240,302,'2700–3000 K'), [
      {t:'Ogólne', sub:'oczka w suficie', at:[220,44], k:'o', side:'l', y:40},
      {t:'Robocze', sub:'taśma pod szafkami', at:[90,126], k:'r', side:'l'},
      {t:'Nastrojowe', sub:'kinkiet', at:[438,128], k:'n', y:60},
      {t:'Ściemniacz', at:[300,190], k:'d', side:'r'} ]);
    return { caption: 'Trzy warstwy światła na osobnych łącznikach: ogólne, robocze i nastrojowe, w ciepłej barwie.', svg: S(a, s, 'Wnętrze z oczkami w suficie, taśmą LED pod szafkami, kinkietem i ściemniaczem, barwa 2700–3000 K') };
  });

  /* ---------- 9. Sieć LAN i Wi-Fi ---------- */
  BUDOWA.addIllus('08-elektryka/niskopradowe-lan', function(a){
    const house = a.poly([[40,92],[240,14],[440,92]],'dachowka') + a.rect(50,90,380,190,'papier',{r:0,cls:'il-panel'}) + a.rect(50,174,380,12,'beton',{r:0}) +
      a.rect(40,90,10,190,'ceramika',{r:0}) + a.rect(430,90,10,190,'ceramika',{r:0}) + a.rect(140,186,8,94,'ceramika',{r:0}) + a.ground(0,280,480,40);
    const rack = a.rect(70,212,44,68,'kmb',{r:3}) + [222,236,250].map(y => a.rect(76,y,32,8,'blacha',{r:1})).join('') + '<circle cx="104" cy="226" r="2" class="il-m c-ok"/>';
    const ap = (x,y) => `<ellipse cx="${x}" cy="${y}" rx="14" ry="5" class="il-m c-papier"/>`;
    const waves = (x,y) => [16,26,36].map(r => `<path class="il-ln" d="M${x-r} ${y+r*.6}Q${x} ${y+r*1.3} ${x+r} ${y+r*.6}" style="stroke:${LAN};stroke-width:2"/>`).join('');
    const tv = a.rect(232,214,52,32,'kmb',{r:2}) + a.rect(252,246,12,10,'blacha',{r:1}) + a.rect(222,256,72,24,'drewno',{r:2});
    const cab = a.fresh(wire([[92,212],[92,180],[340,180],[340,190]],LAN,3,{draw:1}) + wire([[100,212],[100,184],[300,184],[300,262]],LAN,3,{draw:1}) +
      wire([[84,212],[84,170],[60,170],[60,100],[240,100],[240,94]],LAN,3,{draw:1}), {d:200});
    const desk = a.table(330,174,80,38) + a.laptop(330,136,1) + a.person(368,174,{s:.8,kask:false,sit:1,flip:1});
    const s = a.layout.scene(house + rack + tv + ap(340,192) + ap(240,100) + desk + cab + a.fresh(waves(340,192) + waves(240,100), {d:600}) + a.num(240,302,'skrętka kat. 6'), [
      {t:'Szafka RACK', at:[92,214], k:'r', hot:1, y:200},
      {t:'Punkt Wi-Fi', sub:'zasilany po kablu (PoE)', at:[240,100], k:'w', side:'l'},
      {t:'LAN przy TV', at:[300,262], k:'t'} ]);
    return { caption: 'Wszystkie kable LAN biegną gwiazdą do jednej szafki. Punkty Wi-Fi na sufitach każdej kondygnacji.', svg: S(a, s, 'Przekrój domu: szafka RACK w pomieszczeniu technicznym, niebieskie kable do punktów Wi-Fi na sufitach i do gniazda przy telewizorze') };
  });

  /* ---------- 10. Alarm, monitoring, wideodomofon ---------- */
  BUDOWA.addIllus('08-elektryka/alarm-monitoring', function(a){
    const house = a.shadow(340,272,110,8) + a.rect(240,130,200,142,'papier',{r:0}) + a.poly([[226,134],[340,60],[454,134]],'dachowka') +
      a.window(268,160,56,60) + a.rect(358,180,40,92,'drewno',{r:2});
    const fence = a.rect(0,222,140,8,'drewno',{r:2}) + a.rect(0,250,140,8,'drewno',{r:2}) + a.shadow(150,272,16,4) + a.rect(140,170,20,102,'bloczek',{r:2}) +
      a.rect(143,196,14,22,'kmb',{r:2}) + a.rect(146,199,8,8,'szklo',{r:1});
    const cam = a.rect(244,138,22,10,'papier',{r:3}) + '<circle cx="246" cy="143" r="3" class="il-m c-kmb"/>' +
      a.fresh('<path class="il-zone" d="M243 145L120 200L150 240Z"/>', {d:300});
    const siren = a.rect(414,146,18,22,'bad',{r:3});
    const conduit = a.fresh('<path class="il-ln draw" d="M150 280V292H300V272" style="stroke:var(--il-xps);stroke-width:3;stroke-dasharray:6 5"/>', {d:500});
    const s = a.layout.scene(a.ground(0,272,480,48) + fence + house + cam + siren + conduit + a.person(196,272,{s:1,kask:false,flip:1,arms:[10,40]}), [
      {t:'Wideodomofon', sub:'przy furtce', at:[150,206], k:'v', y:180},
      {t:'Kamera PoE', sub:'2,5–3 m nad terenem', at:[256,142], k:'c', side:'r', y:60},
      {t:'Sygnalizator', at:[423,156], k:'a'},
      {t:'Rura do furtki', at:[226,292], k:'r', side:'r'} ]);
    return { caption: 'Kable do kamer, czujek i wideodomofonu kładziesz przed tynkami. Urządzenia mogą dojść później.', svg: S(a, s, 'Dom z kamerą pod okapem, sygnalizatorem alarmu, furtką z wideodomofonem i rurą od domu do furtki') };
  });

  /* ---------- 11. Rozdzielnica: sekwencja z testem RCD ---------- */
  function board(a, off){
    let s = a.shadow(240,300,100,6) + a.rect(150,24,180,270,'blacha',{r:8}) + a.rect(160,34,160,250,'papier',{r:4,cls:'il-panel'});
    const rows = [64, 124, 184, 244].map(y => y - 20);
    rows.forEach(y => s += a.rect(164,y+18,152,4,'stal',{r:1}));
    // rząd 1: wyłącznik główny (3 mod.), SPD T1+T2 (4 mod.)
    s += a.g(mod(a,166,rows[0],'bad',3), {k:'g'}) + a.g([0,1,2,3].map(i => a.rect(216+i*16,rows[0],14,40,'papier',{r:2}) + a.rect(219+i*16,rows[0]+6,8,8,'ok',{r:2})).join(''), {k:'p'});
    // rzędy 2–4: RCD (4 mod., niebieski) + nadprądowe
    [1,2,3].forEach(r => { const y = rows[r], dn = off && r === 2;
      s += a.g(a.rect(166,y,62,40,'xps',{r:2}) + a.rect(172,y+(dn ? 22 : 8),14,10,'kmb',{r:2}) + `<circle cx="214" cy="${y+12}" r="5" class="il-m c-poziomica"/>`, {k:'rcd'});
      let m = ''; for (let i = 0; i < (r === 3 ? 3 : 5); i++) m += mod(a, 230+i*16, y, 'papier', 1, !dn);
      s += a.g(m, {k:'n'}); if (r === 3) s += a.ghost(a.rect(278,y,36,40,'papier',{r:2}));
    });
    return s;
  }
  BUDOWA.addIllus('08-elektryka/rozdzielnica', function(a){
    const f1 = S(a, a.layout.scene(board(a,0), [
      {t:'Wyłącznik główny', at:[176,52], k:'g'},
      {t:'RCD 30 mA', sub:'4–5 grup', at:[180,124], k:'rcd', hot:1},
      {t:'Ochronnik T1+T2', at:[262,52], k:'p'},
      {t:'Nadprądowe', sub:'B10, B16 …', at:[300,124], k:'n'},
      {t:'Zapas 20–30%', at:[296,244], k:'z'} ]), 'Rozdzielnica: wyłącznik główny, ochronnik przepięć, wyłączniki różnicowoprądowe w grupach, nadprądowe i wolne miejsce');
    const f2 = S(a, board(a,1) + a.move(a.hand(214,186,{r:-20,s:.7}), 30, -30) +
      a.callout('t', 214, 176, 90, 100, 'Przycisk T', {d:300}) + a.pill(90,250,'Gaśnie 1 grupa',{d:600}) + a.ok(400,120,16) + a.pill(400,160,'Reszta działa',{d:800}),
      'Ręka naciska przycisk T na jednym RCD: wyłącza się tylko jego grupa obwodów');
    return { caption: 'RCD chroni ludzi, nadprądowe chroni przewody, ochronnik chroni sprzęt.', frames: [
      { caption: 'Wyłącznik główny, ochronnik T1+T2, a pod nimi grupy: RCD i jego obwody.', svg: f1 },
      { caption: 'Test przyciskiem T co pół roku: wyłącza się tylko jedna grupa.', svg: f2 } ] };
  });

  /* ---------- 12. Biały montaż ---------- */
  BUDOWA.addIllus('08-elektryka/bialy-montaz', function(a){
    const f1 = S(a, a.rect(0,0,480,280,'papier',{r:0,cls:'il-panel'}) + floor(a,280,'drewno') + box(170,170,16) +
      `<path class="il-cab" d="M164 170q-10 18 -2 26" style="stroke:var(--il-drewno);stroke-width:3"/><path class="il-cab" d="M170 172q0 20 6 26" style="stroke:var(--il-xps);stroke-width:3"/><path class="il-cab" d="M176 170q12 16 14 24" style="stroke:var(--il-poziomica);stroke-width:3"/>` +
      swt(a,320,170,1.4) + a.move(sock(a,250,170,1.4) + a.hand(282,170,{r:90,s:.85}), 80, 0) +
      a.callout('p', 170, 186, 110, 250, 'Zapas przewodu', {d:400}) + a.pill(240,60,'Po malowaniu',{acc:1,d:600}),
      'Ręka wsuwa gniazdo do puszki z zapasem przewodu na pomalowanej ścianie');
    const tri = (rot) => `<g transform="rotate(${rot} 111 90)">` + a.rect(41,66,140,48,'papier',{r:8}) + sock(a,66,90,1.2) + swt(a,111,90,1.2) + sock(a,156,90,1.2) + '</g>';
    const f2 = S(a, a.layout.compare(a.level(41,40,140) + tri(0) + a.text(111,180,'poziomica przy montażu',{s:1,a:'middle'}), tri(6) + a.text(111,180,'krzywa ramka',{s:1,a:'middle'}), ['Równo', 'Krzywo']),
      'Dobrze: ramka potrójna wypoziomowana. Źle: ramka krzywa');
    return { caption: 'Gniazda, łączniki i oprawy zakłada się po malowaniu, z poziomicą w ręku.', frames: [
      { caption: 'Elektryk wraca po malowaniu i zakłada osprzęt w puszkach.', svg: f1 },
      { caption: 'Ramka wielokrotna musi być w poziomie, bo krzywą widać z daleka.', svg: f2 } ] };
  });

  /* ---------- 13. Pomiary i odbiór ---------- */
  BUDOWA.addIllus('08-elektryka/pomiary-odbior', function(a){
    const meter = a.rect(-12,-4,24,34,'poziomica',{r:4}) + a.rect(-8,2,16,10,'szklo',{r:2});
    const brd = a.rect(110,70,90,120,'blacha',{r:5}) + [92,122,152].map(y => a.rect(118,y,74,22,'papier',{r:2}) + a.rect(122,y+3,18,16,'xps',{r:2})).join('');
    const lead = `<path class="il-cab" d="M226 196Q200 210 170 168" style="stroke:var(--il-bad);stroke-width:2.5"/>`;
    const s = a.layout.scene(a.rect(0,0,480,280,'papier',{r:0,cls:'il-panel'}) + floor(a,280,'drewno') + brd + lead +
      a.person(240,280,{s:1.4,kask:false,flip:1,arms:[10,55],hold:meter}) +
      a.table(380,280,120,62) + a.fresh(a.doc(350,180,60,38,{stamp:1,lines:2}), {d:500}) + a.num(240,40,'ok. 30 obwodów'), [
      {t:'Izolacja i pętla zwarcia', at:[200,228], k:'i', side:'l', y:270},
      {t:'Test RCD', at:[124,104], k:'r', side:'l'},
      {t:'Protokół', sub:'z wartościami', at:[380,190], k:'p', hot:1, y:110} ]);
    return { caption: 'Elektryk z uprawnieniami mierzy każdy obwód i wystawia protokół do dokumentów zakończenia budowy.', svg: S(a, s, 'Elektryk z miernikiem przy rozdzielnicy, na stole protokół z pomiarów z pieczątką') };
  });
})();
