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
})();
