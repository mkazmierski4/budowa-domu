/* Ilustracje etapu 04 — Fundamenty. Liczby zgodne z docs/DECYZJE.md (ława 60 × 35, 4Ø12, strz. Ø6 co 25–30, otulina ok. 5 cm, XPS 15 cm do +30 cm nad terenem). */
(function(){
  /* ---------- Zbrojenie ław: wykop w aksonometrii (cm), 4 klatki ---------- */
  // x wzdłuż ławy 0–200, y w poprzek: ściana wykopu 0, chudy beton 0–100, ława między deskami 20–80
  const SP = [20,120];                       // dystanse co ok. 1 m
  function trench(a, P){
    return P.box(0,-40,-80,200,40,80,'ziemia') + P.face([[0,-40,0],[200,-40,0],[200,0,0],[0,0,0]],'trawa') +
      P.box(0,0,-80,200,112,10,'ziemia') + P.box(0,0,-70,200,100,10,'chudy',{k:'chudy'}) +
      P.box(0,14,-60,200,3,35,'drewno');
  }
  const spacer = (P,x,y) => P.box(x-4,y-4,-60,8,8,6,'beton');
  const spacers = (P,skip) => SP.map(x => [27,73].map(y => skip === x+'/'+y ? '' : spacer(P,x,y)).join('')).join('');
  function cage(P){
    let s = '';
    for (let x = 10; x <= 190; x += 27) s += P.bar([[x,26,-54],[x,74,-54],[x,74,-31],[x,26,-31],[x,26,-54]],2.2);
    [[27,-53],[73,-53],[27,-32],[73,-32]].forEach(q => s += P.bar([[4,q[0],q[1]],[196,q[0],q[1]]],3.6));
    return s;
  }
  const front = P => P.box(0,83,-60,46,3,35,'drewno');

  function f1(a){
    const P = a.iso(172,70,1), t = P.P(120,73,-54), m1 = P.P(20,96,-60), m2 = P.P(120,96,-60), c = P.P(40,50,-62);
    return a.svg(trench(a,P) + spacers(P,'120/73') + front(P) +
      a.move(spacer(P,120,73) + a.hand(t[0], t[1]-8, {r:8}), 0, -60) +
      a.dim(m1[0]-10, m1[1]+14, m2[0]-10, m2[1]+14, 'co ok. 1 m', {dy:22}) +
      a.callout('dyst', t[0]+10, t[1]+2, 400, 132, 'Dystanse', {d:600}) +
      a.callout('chudy', c[0]-4, c[1]+16, 150, 176, 'Chudy beton', {d:700}),
      480,320,'Ręka ustawia betonowe dystanse na chudym betonie w wykopie');
  }
  function f2(a){
    const P = a.iso(172,70,1), h1 = P.P(55,27,-30), h2 = P.P(150,27,-30), b = P.P(190,73,-32), st = P.P(172,26,-40);
    return a.svg(trench(a,P) + spacers(P) +
      a.move(cage(P) + a.hand(h1[0], h1[1]-4, {s:.7}) + a.hand(h2[0], h2[1]-4, {s:.7}), 0, -90) + front(P) +
      a.callout('pret', b[0]+4, b[1], 350, 262, '4 pręty Ø12', {d:900}) +
      a.callout('strz', st[0]+4, st[1], 360, 118, 'Strzemiona', {d:1000}) + a.num(412, 156, 'co 25–30 cm', {d:1100}),
      480,320,'Kosz zbrojeniowy opada do wykopu i staje na dystansach');
  }
  // zbliżenie: dobrze na dystansach, źle na ziemi
  function cageSec(a,x,y){ return a.stirrup(x,y,110,64) + [[8,8],[102,8],[8,56],[102,56]].map(q => a.bar(x+q[0],y+q[1],5.5)).join(''); }
  function f3(a){
    return a.svg(
      a.rect(40,215,170,24,'chudy',{r:4}) + a.spacer(85,215,22,22) + a.spacer(165,215,22,22) + a.move(cageSec(a,70,129), 0, -40) +
      a.dim(198,193,198,215,'5 cm',{dx:2,dy:-34,d:900}) + a.ok(125,72) + a.pill(125,282,'Na dystansach',{k:'ok'}) +
      a.ground(270,215,170,34) + cageSec(a,300,151) + a.rust(304,206) + a.rust(392,204) + a.rust(350,224) + a.bad(355,72) +
      a.pill(355,282,'Na ziemi: rdza',{k:'zle'}),
      480,320,'Dobrze: kosz na dystansach 5 cm nad betonem. Źle: kosz leży na ziemi i rdzewieje');
  }
  // zakład prętów i naroże
  function f4(a){
    const tie = x => `<path class="il-ln" d="M${x} 162q-7 15 0 30q7 -15 0 -30" style="stroke:var(--il-kmb);stroke-width:2.2"/>`;
    return a.svg(
      a.rebar([[30,170],[300,170]],9) + a.move(a.rebar([[170,184],[450,184]],9), 60, 0) + tie(200) + tie(272) +
      a.fresh(a.hand(286,174,{r:70,s:.8}), {d:600}) +
      a.dim(170,126,300,126,'50–60 cm',{d:900}) + a.text(235,100,'ok. 40–50 średnic pręta',{s:1,a:'middle'}) +
      a.rebar([[70,250],[150,250],[150,300]],7) + a.ok(48,270,12) + a.text(176,290,'w L',{b:1}) +
      a.rebar([[300,250],[372,250]],7) + a.rebar([[384,262],[384,302]],7) + a.bad(278,270,12) + a.text(400,290,'na styk',{b:1}),
      480,320,'Pręty łączy się zakładem 50–60 cm, a w narożu gnie w L zamiast łączyć na styk');
  }
  BUDOWA.addIllus('04-fundamenty/zbrojenie-law', function(a){
    return {
      caption: 'Wartości orientacyjne dla domu referencyjnego. Wiążący jest projekt konstrukcyjny.',
      frames: [
        { caption: 'Na chudym betonie stawiasz dystanse, co ok. 1 m.', svg: f1(a) },
        { caption: 'Kosz z 4 prętów i strzemion opada na dystanse.', svg: f2(a) },
        { caption: 'Stal ma być ok. 5 cm nad podłożem, nigdy na ziemi.', svg: f3(a) },
        { caption: 'Pręty łączysz zakładem 50–60 cm, a w narożu gniesz w L.', svg: f4(a) }
      ]
    };
  });

  /* ---------- Izolacje i XPS: ściana fundamentowa w aksonometrii (cm) ---------- */
  // x wzdłuż ściany 0–200, ściana y 0–25, z 0–90; ława y −17–43, z −35–0; teren z = 60
  function wall(a, P, kmbTo){
    let j = '';
    for (let z = 15; z < 90; z += 15) j += P.line([[0,25,z],[200,25,z],[200,0,z]],'il-jt');
    for (let z = 0, r = 0; z < 90; z += 15, r++) for (let x = r % 2 ? 19 : 38; x < 200; x += 38) j += P.line([[x,25,z],[x,25,z+15]],'il-jt');
    return P.box(-6,-23,-45,212,72,10,'chudy') + P.box(0,-17,-35,200,60,35,'beton') + P.box(0,0,0,200,25,90,'bloczek',{k:'mur'}) + j +
      (kmbTo ? P.box(0,25,0,kmbTo,1.5,90,'kmb',{k:'kmb'}) : '');
  }
  const papa = P => P.box(-3,-2,90,206,30,2,'papa',{k:'poz'}) + P.box(0,26.6,76,200,1.4,14,'papa',{k:'poz'});
  function iz1(a){
    const P = a.iso(150,115,1), e = P.P(120,27,52), lab = P.P(60,27,70);
    return a.svg(wall(a,P,110) +
      `<g class="c-kmb">${a.fresh(`<path class="fl" d="${P.d([[110,26.5,0],[134,26.5,0],[128,26.5,90],[110,26.5,90]])}"/>`)}</g>` +
      a.move(a.g(a.hand(0,0,{r:-35,s:.85,hold:a.brush(0,24,1)}),{tr:`translate(${e[0]+26} ${e[1]-34})`}), -30, 16) +
      a.callout('kmb', lab[0], lab[1], 150, 46, 'Masa KMB', {d:700}) + a.num(66, 92, '2 warstwy', {d:800}),
      480,320,'Ręka z pędzlem nakłada czarną masę bitumiczną na ścianę fundamentową');
  }
  function iz2(a){
    const P = a.iso(150,115,1), t = P.P(100,10,92), f = P.P(40,27,82), q1 = P.P(200,28,76), q2 = P.P(200,28,90);
    return a.svg(wall(a,P,200) + a.move(papa(P), 0, -50) +
      a.dim(q1[0]+16, q1[1], q2[0]+16, q2[1], '10–15 cm', {dx:52, d:900}) +
      a.callout('poz', t[0], t[1], 290, 30, 'Papa na koronie', {d:800}) +
      a.callout('kmb', f[0], f[1]+20, 140, 200, 'Zakład na masę', {d:900}),
      480,320,'Pasek papy na koronie ściany zachodzi na masę bitumiczną');
  }
  BUDOWA.addIllus('04-fundamenty/izolacja-przeciwwilgociowa', function(a){
    return { caption: 'Pionowa i pozioma izolacja muszą się połączyć, bez przerw na narożnikach.',
      frames: [
        { caption: 'Masę KMB nakładasz w 2 warstwach na suchą ścianę.', svg: iz1(a) },
        { caption: 'Papa na koronie ściany zachodzi na masę o 10–15 cm.', svg: iz2(a) }
      ] };
  });

  function xps(a){
    const P = a.iso(150,115,1), B = (x,z,w) => P.box(x,25,z,w,15,45,'xps',{k:'xps'});
    const g1 = P.P(90,72,60), g2 = P.P(90,72,90), lab = P.P(120,40,30), h = P.P(176,40,70);
    const boards = B(0,0,60) + B(60,0,60) + B(120,0,60) + B(180,0,20) + B(0,45,30) + B(30,45,60) + B(90,45,60);
    return a.svg(wall(a,P,200) + papa(P) + boards +
      a.move(B(150,45,50) + a.hand(h[0]+8, h[1]+6, {r:-60,s:.8}), -40, 23) +
      P.box(0,40,-45,90,32,105,'ziemia',{k:'teren'}) + P.face([[0,40,60],[90,40,60],[90,72,60],[0,72,60]],'trawa') +
      a.dim(g1[0]+14, g1[1], g2[0]+14, g2[1], '30 cm', {dx:44, d:900}) +
      a.callout('xps', lab[0], lab[1], 330, 268, 'XPS 15 cm', {hot:1, d:700}) +
      a.g(a.rect(380,40,40,26,'xps',{r:3}) + a.drops(386,22,3) + a.ok(436,40,11) + a.rect(380,90,40,26,'eps',{r:3}) + a.drops(386,96,3) + a.bad(436,90,11) +
        a.text(400,82,'XPS',{s:1,a:'middle'}) + a.text(400,132,'EPS nasiąka',{s:1,a:'middle'}), {k:'woda'}),
      480,320,'Ręka dociska płytę XPS do ściany; płyty sięgają 30 cm nad teren');
  }
  BUDOWA.addIllus('04-fundamenty/ocieplenie-fundamentu', function(a){
    return { caption: 'XPS klejony na masę bitumiczną, płyty na mijankę. Wyżej wejdzie styropian grafitowy (etap 12).', svg: xps(a) };
  });

  /* =====================================================================
     Pozostałe kroki etapu 04 (F5). Wspólne pomocniki lokalne.
     ===================================================================== */
  const S = (a, s, l) => a.svg(s, 480, 320, l);
  // grunt z wykopem: x1–x2 to wykop, y0 poziom terenu, yb dno wykopu
  const pitBg = (a, x1, x2, y0, yb) => a.rect(0,y0,x1,320-y0,'ziemia',{r:0}) + a.rect(x2,y0,480-x2,320-y0,'ziemia',{r:0}) + a.rect(x1,yb,x2-x1,320-yb,'ziemia',{r:0}) +
    a.rect(0,y0-3,x1,8,'trawa',{r:0}) + a.rect(x2,y0-3,480-x2,8,'trawa',{r:0});
  // wykop w aksonometrii (cm) z chudym betonem, bez desek szalunku
  const pitB = P => P.box(0,-40,-80,200,40,80,'ziemia') + P.face([[0,-40,0],[200,-40,0],[200,0,0],[0,0,0]],'trawa') +
    P.box(0,0,-80,200,112,10,'ziemia') + P.box(0,0,-70,200,100,10,'chudy');
  const bdBack = P => P.box(0,17,-60,200,3,35,'drewno');
  const bdFront = P => P.box(0,80,-60,200,3,35,'drewno');

  /* ---------- Typ fundamentu: trzy warianty obok siebie ---------- */
  BUDOWA.addIllus('04-fundamenty/wybor-fundamentu', function(a){
    const col = (x, kind) => {
      let s = a.rect(x,150,140,110,'ziemia',{r:0}) + a.rect(x,147,140,8,'trawa',{r:0});
      if (kind === 'plyta') return s + a.rect(x+8,184,124,8,'xps',{r:1}) + a.rect(x+8,166,124,18,'beton',{r:2}) + a.rect(x+55,125,30,41,'bloczek',{r:1});
      s += a.rect(x+36,198,68,6,'chudy',{r:1}) + a.rect(x+40,176,60,22,'beton',{r:2});
      if (kind === 'lawy') return s + a.rect(x+55,125,30,51,'bloczek',{r:1});
      return s + a.rect(x+55,125,30,51,'beton',{r:1}) + [140,158,170].map(y => a.bar(x+62,y,2.6) + a.bar(x+78,y,2.6)).join('');
    };
    const head = (cx, t, c, o) => a.pill(cx,50,t,o) + a.num(cx,290,c);
    return { caption: 'Na dobrym gruncie ławy ze ścianą z bloczków są najtańsze. Pozostałe warianty mają sens w innych warunkach.', svg: S(a,
      col(20,'lawy') + col(170,'plyta') + col(320,'szal') +
      head(90,'Ławy + bloczki','0 zł (baza)',{acc:1}) + head(240,'Płyta','+25–50 tys. zł') + head(390,'Bloczki szalunkowe','+9–15 tys. zł') +
      a.ok(90,92,13) + a.pill(240,92,'słaby grunt, woda',{}) + a.pill(390,92,'zbrojona ściana',{}),
      'Trzy typy fundamentu w przekroju: ławy z bloczkami, płyta fundamentowa i bloczki szalunkowe') };
  });

  /* ---------- Wykop i odbiór dna ---------- */
  function excav(a,x,y){
    return `<g transform="translate(${x} ${y})">` + a.shadow(55,2,64,7) + a.rect(0,-14,110,14,'kmb',{r:7}) + a.rect(8,-48,84,34,'maszyna') +
      a.rect(52,-80,36,32,'szklo',{r:4}) + a.line([[78,-40],[132,-42],[172,8]],'il-ln','stroke-width:8') + a.poly([[158,4],[184,8],[178,32],[152,22]],'blacha') + '</g>';
  }
  BUDOWA.addIllus('04-fundamenty/wykop-odbior', function(a){
    const f1 = S(a, pitBg(a,205,275,150,255) + excav(a,40,150) + a.poly([[355,150],[395,112],[445,150]],'ziemia') +
      a.dim(275,132,355,132,'min. 1 m',{d:500}) + a.dim(315,152,315,255,'−1,50 m',{d:700}) + a.dim(205,236,275,236,'ok. 1,0 m',{d:900}) +
      a.pill(110,60,'Dno dokopujesz ręcznie'), 'Koparka kopie wykop szeroki na ok. 1 m do rzędnej −1,50 m, hałda leży min. 1 m od krawędzi');
    const f2 = S(a, pitBg(a,130,350,150,250) + a.rect(130,250,110,70,'piasek',{r:0}) + a.person(70,150,{arms:[30,60]}) +
      a.fresh(a.doc(380,40,70,90,{stamp:1,lines:3}),{d:600}) + a.pill(415,172,'Wpis do dziennika') +
      a.ok(185,274,13) + a.pill(185,304,'Piasek, żwir') + a.bad(295,274,13) + a.pill(295,304,'Nasyp, torf'),
      'Kierownik ogląda dno wykopu: piasek i żwir są dobre, nasyp i torf oznaczają wymianę gruntu');
    return { caption: 'Wykop odbiera kierownik budowy przed chudym betonem.', frames: [
      { caption: 'Koparka kopie do rzędnej, ostatnie 10–15 cm wykańczasz ręcznie.', svg: f1 },
      { caption: 'Kierownik porównuje grunt z opinią geotechniczną i robi wpis.', svg: f2 } ] };
  });

  /* ---------- Chudy beton ---------- */
  BUDOWA.addIllus('04-fundamenty/chudy-beton', function(a){
    const bg = pitBg(a,150,330,120,250);
    const f1 = S(a, bg + a.mixer(60,80,1.5) + a.poly([[105,92],[118,84],[212,196],[198,206]],'blacha') +
      a.fresh(a.poly([[196,200],[210,194],[214,214],[200,220]],'chudy'),{d:300}) + a.fresh(a.rect(150,238,180,12,'chudy',{r:0}),{d:500}) +
      a.num(330,60,'C8/10',{d:700}) + a.pill(250,170,'Rynna z gruszki',{d:600}),
      'Beton z gruszki spływa rynną na dno wykopu');
    const f2 = S(a, bg + a.rect(150,238,180,12,'chudy',{r:0}) + a.ghost(a.rect(163,150,154,88,'beton',{r:2})) +
      a.move(a.level(170,224,140),0,-40) + a.dim(350,238,350,250,'ok. 10 cm',{dx:-16,dy:-36,d:700}) +
      a.pill(240,194,'ława 60 cm',{d:800}) + a.num(240,290,'+5 cm z każdej strony',{d:900}),
      'Chudy beton ma ok. 10 cm i jest o 5 cm szerszy z każdej strony niż przyszła ława');
    return { caption: 'Chudy beton nie niesie domu: daje czyste, równe podłoże.', frames: [
      { caption: 'Wylewasz go zaraz po odbiorze wykopu, zwykle rynną z gruszki.', svg: f1 },
      { caption: 'Wyrównujesz łatą i poziomnicą do rzędnej: ok. 10 cm grubości.', svg: f2 } ] };
  });

  /* ---------- Szalunki ław ---------- */
  BUDOWA.addIllus('04-fundamenty/szalunki-law', function(a){
    const base = P => pitB(P) + bdBack(P);
    const f1 = (() => { const P = a.iso(172,70,1), h = P.P(100,81,-25), d1 = P.P(100,20,-58), d2 = P.P(100,80,-58), c = P.P(20,50,-60);
      return S(a, base(P) + a.move(bdFront(P) + a.hand(h[0], h[1]-10, {r:8,s:.9}), 0, -60) +
        a.dim(d1[0], d1[1]+6, d2[0], d2[1]+6, 'ława 60 cm', {dy:30,d:700}) + a.callout('chudy', c[0], c[1], 150, 170, 'Na chudym betonie', {d:600}),
        'Deski szalunku stają na chudym betonie w obrysie ławy 60 cm'); })();
    const f2 = (() => { const P = a.iso(172,70,1), p1 = P.P(30,95,-26), p2 = P.P(90,95,-26), r = P.P(150,50,-25), t = P.P(190,17,-25);
      const br = [30,90,150].map(x => P.box(x,12,-28,4,76,3,'drewno',{k:'roz'})).join('');
      return S(a, base(P) + bdFront(P) + br + a.dim(p1[0], p1[1]+14, p2[0], p2[1]+14, 'co 50–70 cm', {dy:24,d:700}) +
        a.callout('roz', r[0], r[1], 350, 250, 'Rozpory', {d:800}) + a.callout('rz', t[0], t[1], 360, 70, 'Wierzch na rzędnej', {d:900}),
        'Rozpory co 50–70 cm trzymają szalunek, a górna krawędź deski wyznacza wierzch ławy'); })();
    const f3 = S(a,
      a.rect(40,100,160,50,'beton',{r:0}) + a.rect(40,90,160,10,'drewno',{r:0}) + a.rect(40,150,160,10,'drewno',{r:0}) +
      [70,120,170].map(x => a.rect(x-4,88,8,74,'drewno',{r:1})).join('') + a.ok(120,52,14) + a.pill(120,200,'Z rozporami: prosto') +
      a.poly([[280,100],[320,96],[360,92],[400,96],[440,100],[440,150],[400,154],[360,158],[320,154],[280,150]],'beton') +
      a.poly([[280,90],[320,86],[360,82],[400,86],[440,90],[440,100],[400,96],[360,92],[320,96],[280,100]],'drewno') +
      a.poly([[280,150],[320,154],[360,158],[400,154],[440,150],[440,160],[400,164],[360,168],[320,164],[280,160]],'drewno') +
      a.bad(360,52,14) + a.pill(360,200,'Bez rozpór: brzuch') + a.pill(240,270,'widok z góry'),
      'Z góry: szalunek z rozporami jest prosty, bez rozpór gruszka go rozpycha');
    return { caption: 'Szalunek ma być prosty, szczelny, podparty i na rzędnej.', frames: [
      { caption: 'Deski stają w obrysie ławy, 60 cm od siebie.', svg: f1 },
      { caption: 'Rozpory co 50–70 cm i górna krawędź na rzędnej z niwelatora.', svg: f2 },
      { caption: 'Bez rozpór beton rozepchnie deski i ława wyjdzie krzywa.', svg: f3 } ] };
  });

  /* ---------- Uziom fundamentowy ---------- */
  BUDOWA.addIllus('04-fundamenty/uziom-fundamentowy', function(a){
    const f1 = (() => { const P = a.iso(172,70,1), tp = P.P(60,50,-44), wy = P.P(178,50,-10), h = P.P(110,50,-44);
      const tape = P.box(0,49,-46,200,2,4,'blacha',{k:'tasma'});
      return S(a, trench(a,P) + spacers(P) + cage(P) + front(P) +
        a.move(tape + a.hand(h[0], h[1]-8, {r:8,s:.8}), 0, -70) + P.box(176,49,-46,2,2,40,'blacha',{k:'wy',d:900}) +
        a.callout('tasma', tp[0], tp[1], 330, 250, 'Taśma FeZn 30 × 4', {d:700}) + a.callout('wy', wy[0], wy[1], 340, 60, 'Wyprowadzenie', {d:900}) + a.num(120,290,'ok. 76 m taśmy',{d:1000}),
        'Taśma ocynkowana opada do kosza i leży w środku ławy, a koniec wystaje ponad posadzkę'); })();
    const sec = (x, ty, bad) => a.rect(x,150,180,90,'beton',{r:3}) + a.rect(x,240,180,8,'chudy',{r:0}) + a.rect(x,248,180,40,'ziemia',{r:0}) +
      (bad ? a.rect(x+66,ty,48,8,'blacha',{r:1}) + a.rust(x+60,ty-2) + a.rust(x+116,ty-2) : a.rect(x+86,ty,8,40,'blacha',{r:1}));
    const f2 = S(a, sec(30,176,0) + a.ok(120,116,14) + a.pill(120,308,'W betonie, min. 5 cm') + sec(270,232,1) + a.bad(360,116,14) + a.pill(360,308,'Przy dnie: rdza'),
      'Dobrze: taśma otulona betonem. Źle: leży przy dnie bez otuliny i rdzewieje');
    return { caption: 'Uziom robi się raz: potem ława znika pod ziemią.', frames: [
      { caption: 'Taśma w środku kosza, z wyprowadzeniem ponad przyszłą posadzkę.', svg: f1 },
      { caption: 'Beton ma ją otulić ze wszystkich stron, nie leży na dnie.', svg: f2 } ] };
  });

  /* ---------- Odbiór zbrojenia ---------- */
  BUDOWA.addIllus('04-fundamenty/odbior-zbrojenia', function(a){
    return { caption: 'Zbrojenie, szalunek i uziom znikną pod betonem, więc odbiera się je teraz.', svg: S(a,
      a.rect(40,215,170,24,'chudy',{r:4}) + a.spacer(85,215,22,22) + a.spacer(165,215,22,22) + cageSec(a,70,129) +
      a.dim(198,193,198,215,'5 cm',{dx:2,dy:-34,d:500}) + a.dim(70,118,180,118,'strzemiona co 25–30 cm',{dy:-22,d:700}) +
      a.person(300,262,{flip:1,arms:[40,70]}) + a.fresh(a.doc(370,150,80,100,{stamp:1,lines:4}),{d:900}) + a.pill(410,274,'Wpis kierownika',{d:1000}) +
      a.pill(125,282,'Zdjęcia z miarką',{d:800}) + a.pill(240,40,'Odbiór przed betonem',{acc:1}),
      'Kierownik budowy mierzy otulinę i rozstaw strzemion, a potem robi wpis do dziennika') };
  });

  /* ---------- Betonowanie i pielęgnacja ---------- */
  BUDOWA.addIllus('04-fundamenty/betonowanie-law', function(a){
    const pour = (P, h) => pitB(P) + bdBack(P) + P.box(0,20,-60,200,60,h,'beton',{k:'beton'}) + bdFront(P);
    const f1 = (() => { const P = a.iso(172,70,1), t = P.P(60,50,-40);
      return S(a, pour(P,18) + a.poly([[t[0]-120,t[1]-100],[t[0]-106,t[1]-108],[t[0]+4,t[1]-18],[t[0]-6,t[1]-6]],'blacha') +
        a.fresh(a.poly([[t[0]-6,t[1]-8],[t[0]+6,t[1]-18],[t[0]+8,t[1]],[t[0]-4,t[1]+2]],'beton'),{d:400}) +
        a.num(380,70,'ok. 17 m³',{d:500}) + a.pill(380,112,'Bez przerw',{d:700}) + a.pill(120,290,'gruszka co 30–45 min',{d:800}),
        'Beton wylewa się z gruszki rynną, jedna dostawa po drugiej, bez przerw'); })();
    const f2 = (() => { const P = a.iso(172,70,1), b = P.P(110,50,-12);
      return S(a, pour(P,35) + a.move(P.box(108,48,-60,4,4,52,'maszyna',{k:'wib'}),0,-30) + a.fresh(a.hand(b[0], b[1]-40, {s:.7}),{d:300}) +
        a.callout('wib', b[0]+4, b[1]+16, 350, 250, 'Wibrator pionowo', {d:600}) + a.num(380,100,'co 30–50 cm',{d:800}) + a.pill(380,142,'bez dotykania zbrojenia',{d:900}),
        'Wibrator zanurzany pionowo co 30–50 cm usuwa z betonu powietrze'); })();
    const f3 = (() => { const P = a.iso(172,70,1), w = P.P(100,50,-20);
      return S(a, pour(P,35) + a.fresh(P.box(-6,12,-25,212,76,2,'folia'),{d:300}) + a.fresh(a.drops(w[0]-10,w[1]-48,4),{d:600}) +
        a.icon('kalendarz',400,70,2) + a.num(400,130,'min. 7 dni',{d:800}) + a.pill(120,290,'Wilgotny albo pod folią',{d:900}),
        'Przez min. 7 dni beton jest polewany albo przykryty folią, żeby nie wysechł'); })();
    return { caption: 'Po betonowaniu nie dolewaj wody i nie zaniedbuj pielęgnacji.', frames: [
      { caption: 'Beton klasy z projektu wylewasz za jednym razem.', svg: f1 },
      { caption: 'Wibrator wyciąga pęcherze powietrza z betonu.', svg: f2 },
      { caption: 'Przez tydzień polewasz albo przykrywasz folią.', svg: f3 } ] };
  });

  /* ---------- Ściany fundamentowe z bloczków ---------- */
  BUDOWA.addIllus('04-fundamenty/sciany-fundamentowe', function(a){
    const base = P => P.box(-6,-6,-6,212,72,6,'chudy') + P.box(0,0,0,200,60,35,'beton') + P.box(0,17,35,200,25,2,'piasek',{k:'zapr'});
    const course = (P,i,x2) => { const z = 37 + 24*i; let j = P.line([[0,42,z],[x2,42,z]],'il-jt'); for (let x = i % 2 ? 19 : 38; x < x2; x += 38) j += P.line([[x,42,z],[x,42,z+24]],'il-jt'); return P.box(0,17,z,x2,25,24,'bloczek') + j; };
    const f1 = (() => { const P = a.iso(130,190,.9), b = P.P(150,42,60), m = P.P(60,42,40);
      return S(a, base(P) + course(P,0,114) + a.move(P.box(114,17,37,38,25,24,'bloczek') + a.hand(b[0]-8, b[1]-14, {r:6,s:.7}), 0, -50) +
        a.callout('zapr', m[0], m[1]+4, 330, 250, 'Zaprawa 1,5–2 cm', {d:600}) + a.pill(380,110,'Od narożnika',{d:800}) + a.num(380,160,'38 × 25 × 24 cm',{d:900}),
        'Murarz układa pierwszą warstwę bloczków na zaprawie, od narożnika'); })();
    const f2 = (() => { const P = a.iso(130,190,.9), q1 = P.P(200,42,37), q2 = P.P(200,42,133);
      return S(a, base(P) + course(P,0,200) + course(P,1,200) + course(P,2,200) + a.move(course(P,3,200),0,-40) +
        a.dim(q1[0]+24, q1[1]-4, q2[0]+24, q2[1]-4, 'ok. 1 m', {dx:50,d:700}) + a.num(380,110,'4 warstwy',{d:800}) + a.pill(380,160,'spoiny na mijankę',{d:900}),
        'Ściana ma ok. 1 m, czyli cztery warstwy bloczków przewiązanych na mijankę'); })();
    return { caption: 'Pierwsza warstwa wyznacza poziom całego muru.', frames: [
      { caption: 'Murujesz od narożników, pierwsza warstwa na zaprawie i w poziomie.', svg: f1 },
      { caption: 'Cztery warstwy, spoiny przewiązane, ściana w osi ławy.', svg: f2 } ] };
  });

  /* ---------- Przejścia instalacji ---------- */
  BUDOWA.addIllus('04-fundamenty/przejscia-instalacji', function(a){
    const dot = (x,y,d,k) => a.pipe([[x,y],[x+.1,y]],d,k);
    const lab = (x,y,t,dy) => a.line([[x,y+14],[x,dy]]) + a.pill(x,y,t);
    const f1 = S(a, a.rect(30,215,420,34,'beton',{r:3}) + a.blocks(30,100,420,115,38,29,'bloczek') +
      dot(90,175,36,'kan') + dot(170,175,18,'woda') + dot(250,175,18,'rura') + dot(330,175,12,'cieplo') + dot(405,175,24,'rura') +
      lab(90,60,'Kanal. Ø160',163) + lab(170,92,'Woda',166) + lab(250,60,'Prąd Ø63–75',166) + lab(330,92,'Światł. Ø50',169) + lab(405,60,'Rezerwa Ø110',163) +
      a.pill(240,285,'Wszystko nad ławą, w ścianie'), 'Ściana fundamentowa od zewnątrz z rękawami: kanalizacja, woda, prąd, światłowód i rezerwy');
    const f2 = S(a,
      a.rect(40,215,110,34,'beton',{r:2}) + a.rect(76,110,40,105,'bloczek',{r:1}) + a.pipe([[56,150],[136,150]],24,'kan') + a.rect(112,136,6,28,'kmb',{r:1}) +
      a.callout('usz',116,150,170,100,'Uszczelnienie',{d:500}) + a.ok(95,70,13) + a.pill(95,285,'Nad ławą') +
      a.rect(280,215,110,34,'beton',{r:2}) + a.rect(316,110,40,105,'bloczek',{r:1}) + a.pipe([[262,232],[408,232]],18,'kan') + a.bad(335,70,13) + a.pill(335,285,'Przez ławę: słabsza'),
      'Dobrze: rękaw w ścianie nad ławą z uszczelnieniem. Źle: rura przecina ławę');
    return { caption: 'Po zasypaniu przejść już nie dowiercisz: zrób zdjęcia i szkic z miarą.', frames: [
      { caption: 'Każda instalacja wchodzi w osobnym rękawie, są też rury rezerwowe.', svg: f1 },
      { caption: 'Rękaw leży nad ławą i jest uszczelniony od zewnątrz.', svg: f2 } ] };
  });

  /* ---------- Zasypka i zagęszczanie ---------- */
  BUDOWA.addIllus('04-fundamenty/zasypka-wykopu', function(a){
    const wl = a.rect(0,292,480,28,'ziemia',{r:0}) + a.rect(150,262,90,30,'beton',{r:2}) + a.rect(168,120,32,142,'bloczek',{r:1}) + a.rect(200,126,18,136,'xps',{r:1});
    const lay = (n, mat) => { let s = ''; for (let i = 0; i < n; i++) s += a.rect(218,274-18*i,200,18,mat,{r:0}); return s; };
    const inn = n => { let s = ''; for (let i = 0; i < n; i++) s += a.rect(70,274-18*i,98,18,'piasek',{r:0}); return s; };
    const f1 = S(a, wl + lay(3,'ziemia') + inn(3) + a.move(a.rect(218,220,200,18,'ziemia',{r:0}),0,-50) +
      a.fresh(a.rect(290,210,50,10,'stal',{r:2}) + a.line([[315,210],[322,160]]),{d:600}) +
      a.callout('plyta', 322, 165, 350, 120, 'Płyta wibracyjna', {d:700}) + a.num(120,70,'warstwy 20–30 cm',{d:800}) + a.pill(120,110,'z obu stron naraz',{d:900}),
      'Zasypka rośnie warstwami po 20–30 cm z obu stron ściany, każdą zagęszcza płyta wibracyjna');
    const f2 = S(a,
      [0,1,2,3,4].map(i => a.rect(60,206-24*i,130,24,i % 2 ? 'zwir' : 'ziemia',{r:0})).join('') + a.rect(60,230,130,40,'ziemia',{r:0}) + a.ok(125,60,14) + a.pill(125,300,'Warstwami: zagęszczone') +
      a.rect(290,110,130,120,'ziemia',{r:0}) + a.rect(290,230,130,40,'ziemia',{r:0}) + a.shadow(330,160,12,8) + a.shadow(385,190,14,9) + a.shadow(345,214,10,6) + a.bad(355,60,14) + a.pill(355,300,'Naraz: pustki w środku'),
      'Dobrze: cienkie warstwy dobrze zagęszczone. Źle: gruba warstwa jest zbita tylko na wierzchu');
    return { caption: 'Zasypujesz po wyschnięciu izolacji i XPS, bez humusu i gruzu.', frames: [
      { caption: 'Każdą warstwę 20–30 cm zagęszczasz płytą, po obu stronach ściany.', svg: f1 },
      { caption: 'Jedna gruba warstwa osiądnie, bo pod spodem zostają pustki.', svg: f2 } ] };
  });

  /* ---------- Kanalizacja podposadzkowa ---------- */
  BUDOWA.addIllus('04-fundamenty/kanalizacja-podposadzkowa', function(a){
    const bg = a.rect(0,200,480,120,'piasek',{r:0}) + a.rect(30,60,44,150,'bloczek',{r:1}) + a.rect(0,200,30,120,'ziemia',{r:0});
    const rura = [[430,214],[80,236]];
    const f1 = S(a, bg + a.move(a.pipe(rura,20,'kan',{k:'rura'}) + a.pipe([[330,222],[330,150]],14,'kan') + a.rect(322,144,16,8,'blacha',{r:2}),0,-60) +
      a.pipe([[40,238],[84,236]],20,'kan') + a.callout('rura',330,150,360,100,'Rewizja',{d:700}) + a.num(240,276,'spadek min. 2%',{d:800}) + a.pill(240,306,'ok. 10 cm obsypki piaskiem',{d:900}),
      'Rura PVC-KG leży na zagęszczonej podsypce ze spadkiem w stronę ściany, w pionie jest rewizja');
    const f2 = S(a, bg + a.pipe(rura,20,'kan') + a.fresh(a.pipe([[418,214],[92,235]],9,'woda'),{d:300}) + a.pipe([[40,238],[84,236]],20,'kan') +
      a.fresh(a.drops(120,170,3),{d:900}) + a.ok(250,160,16,{d:1000}) + a.pill(250,118,'Próba szczelności wodą',{d:500}) + a.pill(250,290,'przed obsypką i podkładem',{d:700}),
      'Rura napełniona wodą: próbę szczelności robisz, zanim ją zasypiesz');
    const f3 = S(a, a.pipe([[40,100],[130,100],[170,140],[170,235]],20,'kan') + a.ok(60,60,14) + a.pill(110,285,'Dwa łuki 45°') +
      a.pipe([[280,100],[420,100],[420,235]],20,'kan') + a.bad(300,60,14) + a.pill(360,285,'Kolano 90°: zatyka się'),
      'Dobrze: zakręt z dwóch łuków 45°. Źle: ostre kolano 90°');
    return { caption: 'Po wylaniu podkładu to kucie posadzki, więc sprawdź rury teraz.', frames: [
      { caption: 'Rura na podsypce ze spadkiem min. 2% i z rewizją.', svg: f1 },
      { caption: 'Próba szczelności wodą, zanim zasypiesz rurę.', svg: f2 },
      { caption: 'Zakręty robisz z dwóch łuków 45°, nie z kolana 90°.', svg: f3 } ] };
  });

  /* ---------- Podsypka, podkład i papa ---------- */
  BUDOWA.addIllus('04-fundamenty/podsypka-podklad', function(a){
    const base = a.rect(0,254,480,66,'ziemia',{r:0}) + a.rect(15,230,80,24,'beton',{r:2}) + a.rect(30,70,50,160,'bloczek',{r:1});
    const sand = a.rect(80,184,400,36,'piasek',{r:0}) + a.rect(80,220,400,34,'piasek',{r:0});
    const f1 = S(a, base + sand + a.fresh(a.rect(300,174,70,10,'stal',{r:2}) + a.line([[335,174],[345,130]]),{d:600}) +
      a.dim(440,184,440,254,'ok. 35 cm',{dx:-48,d:500}) + a.num(250,70,'warstwy 15–20 cm',{d:700}) + a.pill(250,110,'płyta min. 3 przejścia',{d:800}),
      'Podsypka ok. 35 cm układana i zagęszczana warstwami po 15–20 cm');
    const f2 = S(a, base + sand + a.move(a.rect(80,164,400,20,'chudy',{r:0}),0,-40) + a.move(a.level(220,148,150),0,-30) +
      a.dim(440,164,440,184,'10 cm',{dx:-34,dy:-32,d:600}) + a.num(250,70,'C8/10–C12/15',{d:700}) + a.pill(250,110,'łata: ok. 5 mm na 2 m',{d:800}),
      'Podkład betonowy ok. 10 cm wyrównany łatą leży na zagęszczonej podsypce');
    const f3 = S(a, base + sand + a.rect(80,164,400,20,'chudy',{r:0}) + a.fresh(a.rect(80,160,400,4,'papa',{r:0}),{d:300}) + a.fresh(a.rect(80,130,4,34,'papa',{r:0}),{d:600}) +
      a.dim(100,130,100,162,'15–20 cm',{dx:60,dy:-4,d:800}) + a.icon('kalendarz',300,80,1.6) + a.pill(300,122,'najpierw min. 7 dni schnięcia',{d:700}) + a.pill(380,230,'papa z zakładem 10 cm',{d:900}),
      'Papa jako izolacja podposadzkowa wywinięta na ścianę i połączona z izolacją poziomą');
    return { caption: 'Po tym etapie dom stoi „na zero”. Warstwy wyższe (EPS, jastrych) wejdą w etapie 11.', frames: [
      { caption: 'Podsypka zagęszczana warstwami po 15–20 cm.', svg: f1 },
      { caption: 'Podkład ok. 10 cm, równy do 5 mm na 2 m.', svg: f2 },
      { caption: 'Po wyschnięciu papa, wywinięta na ścianę 15–20 cm.', svg: f3 } ] };
  });
})();
