/* Ilustracje etapu 12 — Elewacja. Liczby zgodne z content/12-elewacja.js i docs/DECYZJE.md
   (pustak 25 + styropian grafitowy 20 cm, XPS 15 cm do +30 cm nad teren, tynk silikonowy, kamień ok. 30 m², deska ok. 45 m², okap ok. 40 cm). */
(function(){
  const S = (a, s, l) => a.svg(s, 480, 320, l);
  const L = a => a.layout;
  const G = a => a.ground(0,262,480,57);
  const win = (a,x,y,w,h) => a.rect(x,y,w,h,'kmb',{r:2}) + a.rect(x+5,y+5,w-10,h-10,'szklo',{r:1}) + `<path class="il-shine" d="M${x+12} ${y+h-12}L${x+w*.5} ${y+10}"/>`;
  // kamień łupany: nieregularne płytki w rzędach
  function stones(a,x,y,w,h,o){
    const M = ['zwir','bloczek','beton','piasek']; let s = a.rect(x,y,w,h,'beton',{r:1}), r = 0;
    for (let yy = y; yy < y+h-3; yy += 13, r++){
      let xx = x - (r % 2 ? 9 : 0), i = r*3;
      while (xx < x+w){ const ww = 16 + ((i*37) % 5)*5, x0 = Math.max(x,xx), x1 = Math.min(x+w,xx+ww);
        if (x1-x0 > 4) s += a.rect(x0+1,yy+1,x1-x0-2,Math.min(11,y+h-yy-2),M[i % 4],{r:3}); xx += ww; i++; }
    }
    return a.g(s,o);
  }
  // deska pozioma
  const boards = (a,x,y,w,h,o) => { let d = ''; for (let yy = y+9; yy < y+h-1; yy += 9) d += `M${x} ${yy}H${x+w}`; return a.g(a.rect(x,y,w,h,'drewno',{r:1}) + a.line(d,'il-jt'), o); };
  const cloud = (x,y,s) => `<path class="il-m c-papier" transform="translate(${x} ${y}) scale(${s || 1})" d="M-34 10Q-46 10 -46 0Q-46 -12 -32 -12Q-28 -28 -10 -26Q2 -38 18 -28Q36 -30 38 -12Q50 -10 48 2Q46 10 36 10Z"/>`;
  const sun = (x,y,r) => `<circle cx="${x}" cy="${y}" r="${r || 18}" class="il-m c-piasek"/>`;
  const glow = (x,y,w,h) => a2 => a2.rect(x,y,w,h,'piasek',{r:2,st:'opacity:.35'});

  /* 1 ---------- Plan elewacji: szczyt domu i garaż ---------- */
  function house(a){
    let s = G(a);
    // garaż
    s += a.rect(306,212,140,50,'papier',{r:0}) + stones(a,308,212,52,40,{k:'kam'}) + a.rect(372,222,66,40,'blacha',{r:1}) + a.line('M374 235H436M374 248H436','il-jt') +
      a.poly([[300,214],[452,214],[446,196],[306,196]],'dachowka');
    // dom
    s += a.rect(150,182,156,80,'papier',{r:0,k:'tynk'}) + a.poly([[152,182],[228,112],[304,182]],'drewno',{k:'des'});
    let d = ''; for (let y = 120; y < 182; y += 9){ const h = (y-112)/70*76; d += `M${228-h} ${y}H${228+h}`; } s += a.line(d,'il-jt');
    s += a.poly([[138,188],[228,100],[318,188],[306,188],[228,114],[150,188]],'dachowka');
    s += win(a,170,202,36,46) + win(a,240,196,46,66) + win(a,212,142,32,30);
    s += a.rect(146,252,164,10,'kmb',{r:1,k:'cok'}) + a.rect(306,252,66,10,'kmb',{r:1,k:'cok'});
    return s;
  }
  BUDOWA.addIllus('12-elewacja/plan-elewacji', function(a){
    const s = house(a) + L(a).scene('', [
      {t:'Deska ok. 18%', at:[200,160], side:'l', y:120, k:'des'},
      {t:'Tynk ok. 70%', at:[160,230], side:'l', y:200, k:'tynk'},
      {t:'Kamień ok. 12%', at:[330,232], side:'r', y:120, k:'kam'},
      {t:'Cokół: mozaika', at:[200,257], side:'l', y:290, k:'cok'}]) +
      a.num(240,40,'ok. 250 m² ścian netto');
    return { caption: 'Na każdej ścianie najwyżej dwa materiały; granice na narożnikach i krawędziach okien.',
      svg: S(a, s, 'Szczyt domu z deską, ściany z tynkiem, kamień na garażu i ciemny cokół') };
  });

  /* 2 ---------- Pogoda ---------- */
  const thermo = (a,x,y,fill,mat) => a.rect(x-6,y-74,12,74,'papier',{r:6}) + a.rect(x-3,y-fill,6,fill,mat,{r:3}) + `<circle cx="${x}" cy="${y+4}" r="11" class="il-m c-${mat}"/>`;
  BUDOWA.addIllus('12-elewacja/pogoda', function(a){
    const f1 = cloud(110,70,.8) + sun(370,58,20) + a.text(240,96,'Sezon elewacji',{b:1,a:'middle'}) +
      L(a).timeline([{t:'Ocieplenie',len:2},{t:'Tynk',len:1.5},{t:'Kamień, deska',len:2}],{x:40,y:116,w:400,h:50,end:'ok'}) +
      a.pill(112,196,'kwi–maj') + a.pill(219,196,'czerwiec') + a.pill(330,196,'lip–sie') +
      a.num(240,262,'+5 do +25°C, także w nocy');
    const wall = (good) => a.rect(0,40,222,164,'papier',{r:0}) + a.rect(0,204,222,40,'ziemia',{r:0}) + a.rect(0,201,222,8,'trawa',{r:2}) +
      thermo(a,186,170,good ? 34 : 66,good ? 'piasek' : 'bad') +
      (good ? cloud(80,20,.9) + a.person(90,204,{kask:true,arms:[30,120],hold:a.trowel(0,0,1)}) :
        sun(60,18,20) + a.drops(120,60,3) + a.drops(150,80,2) + a.line('M20 90L200 90','il-ln','stroke:var(--il-bad);stroke-width:3;stroke-dasharray:6 5'));
    const f2 = L(a).compare(wall(1), wall(0), ['Pochmurno, ok. 15°C', 'Upał albo deszcz']);
    return { caption: 'Kleje i tynki wiążą dobrze tylko w umiarkowanej pogodzie. Granice podaje karta systemu.', frames: [
      { caption: 'Sezon: wiosną ocieplenie, latem tynk, kamień i deska; wrzesień to ostatni bezpieczny miesiąc na tynk.', svg: S(a, f1, 'Oś czasu od kwietnia do września: ocieplenie, tynk, kamień i deska') },
      { caption: 'Pochmurno i ok. 15°C: tynk wiąże równo. Upał i deszcz: smugi, łączenia, odspojenia.', svg: S(a, f2, 'Dobrze: pochmurno, tynkarz przy ścianie. Źle: ostre słońce, deszcz i widoczne łączenie') } ] };
  });

  /* 3 ---------- Rusztowanie ---------- */
  // przekrój: mur 80–140, styropian 140–188 (przyszły), pomosty od 196
  function scaff(a){
    let s = a.rect(0,272,480,48,'ziemia',{r:0}) + a.rect(0,269,480,8,'trawa',{r:3}) + a.blocks(170,40,60,232,30,20,'ceramika');
    [286,380].forEach(x => s += a.rect(x,40,6,232,'blacha',{r:1}));
    [90,194,272].forEach(y => s += a.rect(280,y-6,110,6,'drewno',{r:1}) + a.line(`M286 ${y-6}L380 ${y-80 < 40 ? 40 : y-80}`,'il-ln','stroke-width:2'));
    s += a.rect(230,104,52,4,'stal',{r:1,k:'kot'});
    return s;
  }
  BUDOWA.addIllus('12-elewacja/rusztowanie', function(a){
    const f1 = scaff(a) + a.ghost(a.rect(230,40,48,232,'eps',{r:0})) + a.person(334,194,{arms:[20,70]}) +
      a.dim(230,262,286,262,'35–40 cm',{dy:30}) +
      L(a).scene('', [{t:'Miejsce na styropian 20 cm', at:[254,170], side:'l', y:200}, {t:'Kotwa do muru', at:[250,106], side:'l', y:106, k:'kot'}]);
    const net = a.rect(396,40,10,232,'folia',{r:2,st:'opacity:.75'});
    const f2 = scaff(a) + a.rect(230,40,48,232,'eps',{r:0}) + a.person(334,194,{arms:[20,70]}) + a.fresh(net) + a.drops(430,120,3) + sun(440,64,16) +
      L(a).scene('', [{t:'Siatka osłonowa', at:[401,200], side:'l', y:200}]) + a.pill(110,296,'protokół odbioru');
    return { caption: 'Rusztowanie ramowe z wynajmu, ok. 330–380 m², z protokołem odbioru.', frames: [
      { caption: 'Pomosty stoją ok. 35–40 cm od muru: 20 cm zajmie styropian, reszta to miejsce na pracę.', svg: S(a, f1, 'Przekrój: mur, puste miejsce na styropian i pomosty rusztowania z robotnikiem') },
      { caption: 'Siatka osłonowa chroni świeży tynk przed słońcem, wiatrem i deszczem.', svg: S(a, f2, 'Na zewnętrznej stronie rusztowania zawieszona siatka osłonowa') } ] };
  });

  /* 4 ---------- Podłoże i montażówki ---------- */
  BUDOWA.addIllus('12-elewacja/podloze', function(a){
    const f1 = G(a) + a.blocks(40,40,400,222,40,20,'ceramika') + a.rect(150,120,46,26,'ziemia',{r:8,k:'ub'}) + a.fresh(a.rect(150,120,46,26,'beton',{r:8}),{d:500}) +
      a.level(250,92,170) + a.hand(206,150,{r:-30,s:.8,hold:a.trowel(0,0,1)}) +
      L(a).scene('', [{t:'Ubytki zaprawą', at:[160,134], side:'l', y:200, k:'ub'}, {t:'Łata 2 m', at:[400,98], side:'r', y:60}]) +
      a.num(330,292,'nierówności do ok. 1–2 cm');
    // przekrój: mur 60–160, styropian 160–240; montażówka w styropianie, przewód wyprowadzony
    const f2 = a.pill(60,30,'Wnętrze') + a.pill(420,30,'Zewnątrz') + a.blocks(60,40,100,280,50,25,'ceramika') + a.rect(160,40,80,280,'eps',{r:0}) +
      a.fresh(a.rect(162,150,78,40,'xps',{r:3,k:'mont'})) + a.cable([[100,170],[160,170],[262,170],[268,182]],'var(--il-kmb)') +
      a.fresh(`<circle cx="296" cy="170" r="22" class="il-m c-kmb"/><circle cx="296" cy="170" r="12" class="il-m c-piasek"/>` + a.rect(240,160,20,20,'blacha',{r:2}),{d:500}) +
      L(a).scene('', [{t:'Montażówka', at:[176,186], side:'l', y:250, k:'mont'}, {t:'Przewód do lampy', at:[264,176], side:'r', y:250}]) +
      a.num(200,90,'+25 cm przed mur');
    return { caption: 'Mur ma być suchy, równy i czysty, a każdy punkt pod lampę czy zadaszenie dostaje twardą wkładkę.', frames: [
      { caption: 'Ubytki uzupełnione zaprawą, płaskość sprawdzona łatą.', svg: S(a, f1, 'Ręka z kielnią uzupełnia ubytek w murze, łata na ścianie') },
      { caption: 'W ociepleniu twarda montażówka pod kinkiet; przewód wyprowadzony ok. 25 cm przed mur.', svg: S(a, f2, 'Przekrój ściany: montażówka w styropianie i kinkiet na niej') } ] };
  });

  /* 5 ---------- Cokół ---------- */
  // przekrój pionowy: mur/ściana fund. 80–155, XPS 155–200 (15 cm), EPS 155–215 (20 cm); teren y 214, XPS do y 124 (+30 cm, 3 px/cm)
  function plinth(a){
    return a.blocks(80,20,75,94,25,19,'ceramika') + a.blocks(80,114,75,206,25,23,'bloczek') +
      a.rect(155,20,60,104,'eps',{r:0,k:'eps'}) + a.rect(155,124,45,196,'xps',{r:0,k:'xps'}) +
      a.rect(200,214,280,106,'ziemia',{r:0}) + a.rect(200,211,280,8,'trawa',{r:3});
  }
  BUDOWA.addIllus('12-elewacja/cokol', function(a){
    const f1 = plinth(a) + a.dim(250,124,250,214,'+30 cm',{dx:34}) +
      L(a).scene('', [{t:'XPS 15 cm (etap 04)', at:[178,180], side:'l', y:250, k:'xps'}, {t:'Styropian 20 cm', at:[185,70], side:'r', y:70, k:'eps'}]);
    const mz = a.rect(200,124,8,104,'zwir',{r:1,k:'mz'}) + a.rect(215,20,4,104,'papier',{r:0});
    const f2 = plinth(a) + a.rect(200,124,4,104,'beton',{r:0,k:'zb'}) + a.fresh(mz) + a.fresh(a.hand(240,190,{r:-70,s:.75}),{d:300}) +
      L(a).scene('', [{t:'Siatka w kleju', at:[202,150], side:'l', y:200, k:'zb'}, {t:'Tynk mozaikowy', at:[206,140], side:'r', y:100, k:'mz'}]) +
      a.num(330,270,'kilka cm pod teren');
    return { caption: 'XPS z etapu 04 kończy się ok. 30 cm nad terenem, wyżej styropian grafitowy. Cokół dostaje tynk mozaikowy.', frames: [
      { caption: 'XPS przy gruncie i do +30 cm, nad nim styropian elewacji.', svg: S(a, f1, 'Przekrój cokołu: XPS do 30 cm nad terenem, wyżej styropian') },
      { caption: 'Na XPS siatka w kleju i tynk mozaikowy, schodzący kilka cm poniżej terenu.', svg: S(a, f2, 'Na cokole warstwa zbrojona i tynk mozaikowy z grysem') } ] };
  });

  /* 6 ---------- Ocieplenie: trzy warianty ---------- */
  BUDOWA.addIllus('12-elewacja/ocieplenie', function(a){
    const col = (x, mat, w) => a.shadow(x+60,262,70,6) + a.blocks(x,96,62,166,31,20,'ceramika') + a.rect(x+62,96,w,166,mat,{r:1}) + a.rect(x+62+w,96,4,166,'papier',{r:0});
    const s = a.rect(0,262,480,58,'beton',{r:0}) +
      col(30,'eps',60) + col(185,'eps',45) + col(330,'welna',60) +
      a.pill(92,40,'Grafit 20 cm',{acc:1}) + a.pill(232,40,'Grafit 15 cm') + a.pill(392,40,'Wełna 20 cm') +
      a.ok(92,76,12) + a.num(92,292,'U ok. 0,13') + a.pill(232,292,'−4–6 tys. zł') + a.pill(392,292,'+20–32 tys. zł');
    return { caption: 'Pustak 25 cm + styropian grafitowy 20 cm: U ok. 0,13 W/(m²·K) przy wymaganiu WT2021 ≤ 0,20.',
      svg: S(a, s, 'Trzy przekroje ściany: styropian grafitowy 20 cm, 15 cm i wełna 20 cm z kosztem względem wariantu bazowego') };
  });

  /* 7 ---------- Klejenie ---------- */
  function plate(a,glue){
    let s = a.shadow(240,262,170,8) + a.rect(80,80,320,170,'eps',{r:3});
    if (glue) s += `<rect x="96" y="96" width="288" height="138" rx="10" class="il-ln" style="stroke:var(--il-beton);stroke-width:12;fill:none" data-k="ob"/>` +
      [[170,140],[240,140],[310,140],[170,190],[240,190],[310,190]].map(p => `<circle cx="${p[0]}" cy="${p[1]}" r="15" class="il-m c-beton" data-k="pl"/>`).join('');
    return s;
  }
  BUDOWA.addIllus('12-elewacja/klejenie', function(a){
    const f1 = plate(a,0) + a.fresh(plate(a,1)) + a.hand(404,150,{r:-60,s:.8,hold:a.trowel(0,0,1)}) +
      L(a).scene('', [{t:'Pas po obwodzie', at:[96,120], side:'l', y:60, k:'ob'}, {t:'Placki w środku', at:[170,190], side:'l', y:290, k:'pl'}]) +
      a.num(330,40,'min. ok. 40% kleju');
    let w = G(a) + a.blocks(40,40,400,222,40,20,'ceramika');
    const row = (y,off,n) => { let s = ''; for (let i = 0; i < n; i++){ const x = 40 + off + i*100; s += a.rect(Math.max(40,x),y,Math.min(100, 440-Math.max(40,x), x+100-40),50,'eps',{r:1}); } return s; };
    const f2 = w + row(212,0,4) + row(162,-50,5) + a.move(a.rect(290,112,100,50,'eps',{r:1}) + a.hand(340,160,{s:.8}),0,-60) + row(112,0,2) +
      a.dim(240,206,290,206,'min. 15–20 cm',{dy:-62}) + a.pill(120,60,'od dołu, mijankowo');
    const okW = a.rect(0,0,222,244,'ceramika',{r:0}) + a.rect(70,70,80,90,'kmb',{r:2}) + a.rect(76,76,68,78,'szklo',{r:1});
    const okS = okW + a.poly([[10,30],[150,30],[150,70],[70,70],[70,110],[10,110]],'eps') + a.line('M10 110H70M150 30V70','il-jt') + a.poly([[150,30],[212,30],[212,170],[150,170],[150,160],[150,70]],'eps');
    const badS = okW + a.rect(10,30,202,40,'eps',{r:0}) + a.rect(10,70,60,90,'eps',{r:0}) + a.rect(150,70,62,90,'eps',{r:0}) + a.line('M70 70H10M150 70H212','il-jt') +
      a.line('M150 160L190 200','il-ln','stroke:var(--il-bad);stroke-width:3');
    const f3 = L(a).compare(okS, badS, ['Płyta w L', 'Spoina w narożu']);
    return { caption: 'Metoda obwodowo-punktowa: zamknięty pas kleju zatrzymuje powietrze za płytą.', frames: [
      { caption: 'Pas kleju ok. 3–5 cm po obwodzie i placki w środku płyty.', svg: S(a, f1, 'Płyta styropianu z pasem kleju po obwodzie i sześcioma plackami') },
      { caption: 'Płyty od dołu, mijankowo, spoiny przesunięte min. ok. 15–20 cm.', svg: S(a, f2, 'Ręka dociska kolejną płytę na ścianie, płyty ułożone mijankowo') },
      { caption: 'Przy oknie płyta wycięta w L. Spoina w linii naroża pęka skosem.', svg: S(a, f3, 'Dobrze: płyta w L wokół naroża okna. Źle: spoina w narożu i rysa') } ] };
  });

  /* 8 ---------- Kołkowanie i szlifowanie ---------- */
  // przekrój 4 px/cm: mur 40–140, styropian 140–220
  const sec = a => a.blocks(40,30,100,232,50,29,'ceramika') + a.rect(140,30,80,232,'eps',{r:0}) + a.rect(0,262,480,58,'beton',{r:0});
  const dowel = (a,o) => a.g(a.rect(110,141,100,8,'blacha',{r:2}) + a.rect(205,126,7,38,'blacha',{r:2}),o);
  BUDOWA.addIllus('12-elewacja/kolkowanie', function(a){
    const f1 = sec(a) + a.line('M110 145H220','il-ln','stroke-width:6;stroke-dasharray:2 3') +
      a.move(a.g(a.drill(0,0,1.4),{tr:'translate(268 151)'}) + a.hand(290,186,{r:-90,s:.8}), 40, 0) +
      L(a).scene('', [{t:'Zakotwienie w pustaku', at:[124,145], side:'l', y:80}]) + a.num(330,70,'bez udaru');
    const f2 = sec(a) + a.move(dowel(a,{k:'kol'}),60,0) + a.fresh(a.rect(212,128,8,34,'eps',{r:2,k:'za',st:'stroke:var(--il-line);stroke-width:1'}),{d:600}) +
      a.num(330,108,'15–20 mm') +
      L(a).scene('', [{t:'Talerzyk zagłębiony', at:[208,140], side:'r', y:170, k:'kol'}, {t:'Zaślepka', at:[216,156], side:'r', y:220, k:'za'}]) + a.pill(110,292,'ok. 6–8 szt./m²',{acc:1});
    const f3 = G(a) + a.rect(40,40,400,222,'eps',{r:0}) + a.line('M40 112H440M40 184H440M140 40V112M240 112V184M340 40V112M190 184V262M390 184V262','il-jt') +
      [[140,76],[240,148],[340,76],[90,148],[390,148],[190,222],[290,222]].map(p => `<circle cx="${p[0]}" cy="${p[1]}" r="6" class="il-m c-eps" style="stroke:var(--il-line)"/>`).join('') +
      a.move(a.hand(280,190,{r:-10,s:.9,hold:a.rect(-40,0,80,18,'drewno',{r:3})}),-60,0) +
      a.pill(130,292,'szlif i odkurzenie') + a.num(360,292,'po 2–3 dniach');
    return { caption: 'Kołki wkręcane z talerzykiem zagłębionym i zaślepką: na tynku nie widać kropek.', frames: [
      { caption: 'Otwór przez styropian w pustak, wiertarka bez udaru.', svg: S(a, f1, 'Przekrój: wiertarka wierci otwór przez styropian w pustak') },
      { caption: 'Talerzyk zagłębiony ok. 15–20 mm, otwór zamyka zaślepka.', svg: S(a, f2, 'Kołek wkręcony w pustak, talerzyk w zagłębieniu, nad nim zaślepka') },
      { caption: 'Po kołkowaniu cała ściana jest szlifowana i odkurzona.', svg: S(a, f3, 'Ręka z pacą szlifuje styropian z zaślepkami kołków') } ] };
  });

  /* 9 ---------- Warstwa zbrojona ---------- */
  const mesh = (x,y,w,h) => { let d = ''; for (let i = x+8; i < x+w; i += 12) d += `M${i} ${y}V${y+h}`; for (let j = y+8; j < y+h; j += 12) d += `M${x} ${j}H${x+w}`; return `<path class="il-jt" d="${d}" style="stroke-width:1.4"/>`; };
  BUDOWA.addIllus('12-elewacja/warstwa-zbrojona', function(a){
    const wall = G(a) + a.rect(40,40,400,222,'eps',{r:0});
    const f1 = wall + a.rect(40,40,200,222,'beton',{r:0,k:'kl'}) + a.move(a.hand(250,160,{r:-80,s:.85,hold:a.trowel(0,0,1.2)}),40,0) +
      L(a).scene('', [{t:'Klej pacą zębatą', at:[140,120], side:'l', y:60, k:'kl'}]) + a.num(360,292,'ok. 3–5 mm');
    const f2 = wall + a.rect(40,40,400,222,'beton',{r:0}) + a.g(a.rect(40,40,160,222,'papier',{r:0,st:'opacity:.5'}) + mesh(40,40,160,222),{k:'si'}) +
      a.move(a.g(a.rect(186,40,160,222,'papier',{r:0,st:'opacity:.5'}) + mesh(186,40,160,222),{k:'si'}),80,0) +
      a.num(290,292,'zakład min. 10 cm') + L(a).scene('', [{t:'Siatka w kleju', at:[120,150], side:'l', y:250, k:'si'}]);
    const lay3 = good => a.rect(0,0,96,244,'eps',{r:0}) + a.rect(96,0,44,244,'beton',{r:0}) + a.rect(140,0,12,244,'papier',{r:0}) +
      a.line(good ? 'M128 0V244' : 'M100 0V244','il-ln','stroke:var(--il-kmb);stroke-width:4;stroke-dasharray:5 4') + a.text(48,230,'styropian',{s:1,a:'middle'}) +
      (good ? '' : a.line('M152 50L136 86L150 118L138 150','il-ln','stroke:var(--il-bad);stroke-width:3'));
    const f3 = L(a).compare(lay3(1) + a.pill(186,120,'bliżej lica'), lay3(0) + a.pill(186,120,'rysy'), ['Siatka w kleju', 'Siatka na styropianie']);
    return { caption: 'Klej, siatka z włókna szklanego i cienka warstwa kleju na wierzch. Siatka nie może leżeć na styropianie.', frames: [
      { caption: 'Klej nakładany pacą zębatą, ok. 3–5 mm.', svg: S(a, f1, 'Ręka z pacą zębatą nakłada klej na styropian') },
      { caption: 'Pasy siatki od góry do dołu z zakładem min. ok. 10 cm.', svg: S(a, f2, 'Drugi pas siatki zachodzi na pierwszy') },
      { caption: 'Siatka zatopiona bliżej lica. Na styropianie nie pracuje i tynk pęka.', svg: S(a, f3, 'Dobrze: siatka w zewnętrznej części kleju. Źle: siatka na styropianie i rysy') } ] };
  });

  /* 10 ---------- Okna, parapety, dylatacje ---------- */
  BUDOWA.addIllus('12-elewacja/okna-dylatacje', function(a){
    const diag = (x,y,r) => a.g(a.rect(-15,-30,30,60,'papier',{r:0,st:'opacity:.85'}) + mesh(-15,-30,30,60),{tr:`translate(${x} ${y}) rotate(${r})`});
    const f1 = G(a) + a.rect(40,30,400,232,'beton',{r:0}) + win(a,170,90,140,130) + a.rect(164,84,152,142,'papier',{r:2,st:'fill:none;stroke:var(--il-line);stroke-width:4',k:'pp'}) +
      a.fresh([[150,70,-45],[330,70,45],[150,240,45],[330,240,-45]].map(p => diag(p[0],p[1],p[2])).join(''),{k:'sk'}) +
      L(a).scene('', [{t:'Siatki ukośne 45°', at:[140,60], side:'l', y:150, k:'sk'}, {t:'Profil przyokienny', at:[316,150], side:'r', y:150, k:'pp'}]) +
      a.num(240,292,'ok. 20 × 35 cm');
    // przekrój parapetu (3 px/cm): mur 40–115, styropian 115–175, rama 105–135
    const f2 = a.pill(60,30,'Wnętrze') + a.pill(420,30,'Zewnątrz') + a.blocks(40,170,75,150,25,25,'ceramika') + a.rect(115,180,60,140,'eps',{r:0}) + a.rect(175,180,5,140,'papier',{r:0}) +
      a.rect(105,60,30,110,'kmb',{r:2}) + a.rect(114,68,10,94,'szklo',{r:1}) + a.rect(105,170,30,10,'kmb',{r:1}) +
      a.fresh(a.rect(134,174,46,6,'piasek',{r:2,k:'ta'})) + a.fresh(a.poly([[134,166],[222,176],[222,186],[217,186],[217,181],[134,172]],'blacha',{k:'pa'}),{d:300}) +
      a.drops(216,196,2) +
      L(a).scene('', [{t:'Taśma rozprężna', at:[150,177], side:'l', y:250, k:'ta'}, {t:'Parapet ze spadkiem', at:[200,176], side:'r', y:120, k:'pa'}]) +
      a.num(400,200,'min. ok. 5°') + a.num(400,250,'wysięg 3–4 cm');
    return { caption: 'Naroża otworów, parapety i styki materiałów to miejsca, gdzie elewacja najczęściej pęka i przecieka.', frames: [
      { caption: 'Siatki ukośne w narożach okna i profil przyokienny przy ramie.', svg: S(a, f1, 'Okno w ścianie, w narożach pod kątem 45° paski siatki, wokół ramy profil') },
      { caption: 'Parapet pod ramą, na taśmie rozprężnej, ze spadkiem i wysięgiem 3–4 cm.', svg: S(a, f2, 'Przekrój: parapet ze spadkiem pod ramą okna, taśma rozprężna, styropian') } ] };
  });

  /* 11 ---------- Tynk ---------- */
  BUDOWA.addIllus('12-elewacja/tynk', function(a){
    const lv = [160,262];
    let sc = G(a) + a.rect(20,30,300,232,'beton',{r:0});
    const f1 = sc + a.rect(20,30,190,232,'papier',{r:0,k:'ty'}) + a.arrow([[226,60],[244,150],[226,240]]) +
      lv.map(y => a.rect(330,y-6,130,6,'drewno',{r:1})).join('') + a.rect(334,30,5,232,'blacha',{r:1}) + a.rect(452,30,5,232,'blacha',{r:1}) +
      a.person(380,154,{flip:true,arms:[20,80],hold:a.trowel(0,0,1)}) + a.person(400,256,{flip:true,arms:[20,80],hold:a.trowel(0,0,1)}) +
      a.pill(116,292,'jedna ściana bez przerw') + L(a).scene('', [{t:'Tynk silikonowy', at:[110,100], side:'l', y:60, k:'ty'}]);
    const okS = a.rect(0,0,222,244,'papier',{r:0}) + a.text(111,130,'baranek 1,5 mm',{s:1,a:'middle'});
    const badS = a.rect(0,0,222,244,'papier',{r:0}) + a.rect(0,0,110,244,'piasek',{r:0,st:'opacity:.35'}) + a.line('M110 0V244','il-ln','stroke:var(--il-bad);stroke-width:2;stroke-dasharray:5 4') + a.text(166,130,'łączenie',{s:1,a:'middle'});
    const f2 = L(a).compare(okS, badS, ['Mokre na mokre', 'Przerwa w polu']);
    return { caption: 'Tynk silikonowy, ziarno ok. 1,5 mm, na podbarwiony grunt. Jedna ściana w jednym ciągu.', frames: [
      { caption: 'Kilka osób na kolejnych poziomach rusztowania tynkuje całą ścianę bez przerwy.', svg: S(a, f1, 'Trzech tynkarzy na trzech poziomach rusztowania nakłada tynk na ścianę') },
      { caption: 'Przerwa w środku ściany zostawia łączenie widoczne w bocznym świetle.', svg: S(a, f2, 'Dobrze: jednolita ściana. Źle: widoczne łączenie i różnica odcienia') } ] };
  });

  /* 12 ---------- Kamień ---------- */
  BUDOWA.addIllus('12-elewacja/kamien', function(a){
    // przekrój (grubości powiększone): mur 30–90, styropian 90–200, warstwa zbrojona 200–208, klej 208–216, kamień 216–240
    const base = a.blocks(30,30,60,232,30,29,'ceramika') + a.rect(90,30,110,232,'eps',{r:0}) + a.rect(200,30,8,232,'beton',{r:0,k:'zb'}) + a.rect(0,262,480,58,'beton',{r:0});
    const dw = a.rect(60,146,144,8,'blacha',{r:2}) + a.rect(203,134,7,32,'blacha',{r:2});
    let st = ''; [34,90,146,202].forEach((y,i) => st += a.rect(208,y,8,52,'piasek',{r:1}) + a.rect(216,y+2,20+(i%2)*6,50,i%2 ? 'zwir' : 'bloczek',{r:4}));
    const f1 = base + a.fresh(a.g(dw,{k:'kol'})) + a.fresh(a.g(st,{k:'ka'}),{d:500}) +
      L(a).scene('', [{t:'Kołek przez siatkę', at:[206,150], side:'r', y:70, k:'kol'}, {t:'Klej elastyczny', at:[212,120], side:'r', y:150}, {t:'Kamień 1–2,5 cm', at:[230,230], side:'r', y:230, k:'ka'}]) +
      a.pill(145,292,'styropian 20 cm');
    const f2 = G(a) + a.rect(40,30,400,232,'beton',{r:0}) + stones(a,40,166,400,96) + a.move(a.rect(250,150,34,14,'zwir',{r:3}) + a.hand(268,160,{s:.85}),0,-50) +
      a.num(130,60,'ok. 30 m²') + a.pill(360,60,'od dołu, z kilku palet');
    return { caption: 'Kamień na warstwie zbrojonej, w limicie ciężaru z oceny technicznej systemu.', frames: [
      { caption: 'Kołki przez siatkę, klej na ścianę i płytkę, kamień w cienkich plastrach.', svg: S(a, f1, 'Przekrój: styropian, warstwa zbrojona z kołkiem, klej i płytki kamienia') },
      { caption: 'Układanie od dołu, płytki mieszane z kilku palet.', svg: S(a, f2, 'Ręka dokłada płytkę kamienia do rzędów ułożonych od dołu') } ] };
  });

  /* 13 ---------- Deska na ruszcie ---------- */
  // przekrój 3 px/cm: mur 30–105, styropian 105–165, zbrojona 165–168, szczelina 168–180, deski 180–186
  const dk = a => a.blocks(30,20,75,242,25,22,'ceramika') + a.rect(105,20,60,242,'eps',{r:0}) + a.rect(165,20,3,242,'beton',{r:0}) + a.rect(0,262,480,58,'ziemia',{r:0}) + a.rect(0,259,480,8,'trawa',{r:3});
  const rus = a => a.g(a.rect(168,20,12,180,'drewno',{r:1,st:'opacity:.55'}) + [60,140].map(y => a.rect(70,y,104,5,'stal',{r:1})).join(''),{k:'ru'});
  BUDOWA.addIllus('12-elewacja/deska', function(a){
    const f1 = dk(a) + a.move(rus(a),40,0) +
      L(a).scene('', [{t:'Łata rusztu', at:[176,100], side:'r', y:100, k:'ru'}, {t:'Łącznik przez ocieplenie', at:[120,62], side:'r', y:40}]) + a.num(330,250,'łaty co ok. 50–60 cm');
    let bd = ''; for (let y = 22; y < 200; y += 30) bd += a.rect(180,y,8,26,'drewno',{r:1});
    const f2 = dk(a) + rus(a) + a.fresh(a.g(bd,{k:'de'})) + a.rect(168,200,20,4,'blacha',{r:1,k:'si'}) +
      a.fresh(a.arrow([[174,240],[172,150],[174,40]]),{d:400}) + a.dim(200,200,200,262,'min. 30 cm',{dx:40}) +
      L(a).scene('', [{t:'Szczelina 2–3 cm', at:[174,120], side:'l', y:290}, {t:'Deska modrzewiowa', at:[188,60], side:'r', y:80, k:'de'}, {t:'Siatka na owady', at:[180,202], side:'r', y:160, k:'si'}]);
    return { caption: 'Deska wisi na ruszcie; za nią szczelina, którą powietrze płynie od dołu do góry.', frames: [
      { caption: 'Pionowe łaty mocowane do muru łącznikami przez ocieplenie.', svg: S(a, f1, 'Przekrój: łata rusztu dosuwana do warstwy zbrojonej, łączniki w murze') },
      { caption: 'Deski z odstępem, wentylowana szczelina i siatka na owady; min. 30 cm nad terenem.', svg: S(a, f2, 'Deski na ruszcie, strzałka powietrza w szczelinie od dołu do góry') } ] };
  });

  /* 14 ---------- Podbitka ---------- */
  BUDOWA.addIllus('12-elewacja/podbitka', function(a){
    // ściana do y 200, krokiew skośnie nad nią, okap ok. 40 cm (ok. 70 px) za licem ocieplenia (x 190)
    const base = a.blocks(60,150,90,170,30,24,'ceramika') + a.rect(150,150,40,170,'eps',{r:0}) + a.rect(190,150,4,170,'papier',{r:0}) +
      a.poly([[30,92],[300,212],[300,234],[30,114]],'drewno') + a.poly([[30,80],[316,207],[316,214],[30,87]],'membrana') + a.poly([[30,64],[330,197],[330,207],[30,74]],'dachowka') +
      a.rect(318,206,22,14,'blacha',{r:6});
    const rs = a.rect(194,226,106,8,'drewno',{r:1,k:'rs'});
    let perf = ''; for (let x = 200; x < 298; x += 10) perf += `<circle cx="${x}" cy="${243}" r="2" class="il-m c-papier"/>`;
    const pod = a.rect(194,234,106,14,'kmb',{r:2,k:'pod'}) + perf;
    const f1 = base + a.move(rs,0,30) + a.hand(250,250,{r:180,s:.7}) +
      L(a).scene('', [{t:'Ruszt do krokwi', at:[240,230], side:'r', y:290, k:'rs'}]) + a.num(250,40,'okap ok. 40 cm');
    const f2 = base + rs + a.fresh(pod) + a.fresh(a.arrow([[250,290],[262,240],[120,140]]),{d:400}) +
      L(a).scene('', [{t:'Perforacja: wlot powietrza', at:[260,243], side:'r', y:290, k:'pod'}, {t:'Membrana z etapu 06', at:[120,120], side:'l', y:40}]) + a.pill(80,290,'PVC antracyt');
    return { caption: 'Podbitka zamyka okap, ale wpuszcza powietrze pod membranę: wentylacja dachu zaczyna się w okapie.', frames: [
      { caption: 'Ruszt z łat mocowany do krokwi, poziomo i równo.', svg: S(a, f1, 'Przekrój okapu: łaty rusztu podnoszone pod krokwie') },
      { caption: 'Panele z perforacją: powietrze wpływa pod dach i płynie do kalenicy.', svg: S(a, f2, 'Perforowana podbitka, strzałka powietrza wpływa pod membranę') } ] };
  });

  /* 15 ---------- Odbiór ---------- */
  BUDOWA.addIllus('12-elewacja/odbior-elewacji', function(a){
    const f1 = G(a) + a.rect(40,30,300,232,'papier',{r:0}) + win(a,150,90,80,100) +
      a.poly([[372,166],[60,120],[60,200]],'piasek',{st:'opacity:.35'}) + a.line('M60 150L120 160','il-ln','stroke:var(--il-bad);stroke-width:2;stroke-dasharray:4 3') +
      a.person(400,262,{flip:true,arms:[20,75],kask:false,hold:a.rect(-4,-6,16,10,'kmb',{r:3})}) +
      a.level(70,226,200) + a.pill(170,292,'łata 2 m') + L(a).scene('', [{t:'Światło z boku', at:[200,150], side:'r', y:60}]);
    const f2 = L(a).steps([{icon:'kask',t:'Odbiór'},{icon:'projekt',t:'Poprawki'},{icon:a.house(297,152,.25),t:"Demontaż"},{icon:'kalendarz',t:'Po zimie'}],{y:140}) +
      a.text(240,56,'Najpierw odbiór, potem rusztowanie w dół',{b:1,a:'middle'}) + a.num(240,262,'kaucja 5–10% do przeglądu po zimie');
    return { caption: 'Odbiór robisz z rusztowania, w bocznym świetle, z łatą 2 m.', frames: [
      { caption: 'Latarka przy ścianie pokazuje garby, łączenia i kropki po kołkach.', svg: S(a, f1, 'Osoba świeci latarką wzdłuż ściany, łata 2 m na tynku') },
      { caption: 'Odbiór i poprawki, demontaż rusztowania, przegląd po pierwszej zimie.', svg: S(a, f2, 'Cztery kroki: odbiór, poprawki, demontaż, przegląd po zimie') } ] };
  });
})();
