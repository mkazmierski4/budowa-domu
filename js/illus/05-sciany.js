/* Ilustracje etapu 05 — Ściany i strop. Liczby zgodne z docs/DECYZJE.md (pustak 25 + styropian grafitowy 20, warstwa 24 cm, ~2,7 m parteru, wieniec 25 × 25 / 4Ø12 / XPS 5, kolankowa 1,0 m, szczyty 40°, strop filigran, komin 8–9 m). */
(function(){
  const G = a => a.ground(0,262,480,60);
  const LN = (a,p,w,c) => a.line(p,'il-ln','stroke-width:'+w+(c ? ';stroke:'+c : ''));
  const wood = 'var(--il-wood-d)';

  /* 1 ---------- Z czego murować ---------- */
  BUDOWA.addIllus('05-sciany/material-scian', function(a){
    const pores = (x,y) => a.line('M'+(x+12)+' '+(y+8)+'v34M'+(x+24)+' '+(y+8)+'v34M'+(x+36)+' '+(y+8)+'v34M'+(x+48)+' '+(y+8)+'v34','il-jt');
    return { caption: 'Pustak ceramiczny 25 cm + styropian grafitowy 20 cm: przegroda domu referencyjnego.',
      svg: a.svg(
        a.shadow(110,172,110,8) +
        a.rect(20,110,64,52,'ceramika',{k:'cer'}) + pores(20,110) + a.ok(52,92,13) +
        a.rect(98,110,64,52,'papier') + a.rect(176,110,64,52,'piasek') +
        a.text(52,190,'Ceramika',{s:1,a:'middle',b:1}) + a.text(130,190,'Silikat',{s:1,a:'middle'}) + a.text(208,190,'Komórkowy',{s:1,a:'middle'}) +
        a.pill(130,230,'zimny, ciężki',{}) + a.pill(208,268,'kruchy narożnik',{}) +
        a.rect(280,50,10,170,'papier',{r:1}) + a.rect(290,50,40,170,'ceramika',{k:'cer'}) + a.rect(330,50,32,170,'eps',{k:'eps'}) +
        a.callout('cer',310,110,372,96,'Pustak 25 cm') + a.callout('eps',346,170,372,160,'Styropian 20 cm') +
        a.num(360,252,'U ok. 0,14'),
        480,320,'Trzy rodzaje bloczków; wybrany pustak ceramiczny, obok przekrój ściany z ociepleniem') };
  });

  /* 2 ---------- Dostawa i składowanie ---------- */
  const wheel = (x,y) => `<circle cx="${x}" cy="${y}" r="13" class="il-m c-maszyna"/><circle cx="${x}" cy="${y}" r="5" class="il-m c-blacha"/>`;
  function truck(a){
    return a.shadow(115,262,95,7) + a.rect(30,200,150,36,'blacha',{r:4}) + a.rect(182,194,48,42,'kmb',{r:5}) + a.rect(192,200,26,16,'szklo') +
      a.blocks(40,176,100,24,25,12,'ceramika') + wheel(60,249) + wheel(100,249) + wheel(205,249) +
      LN(a,[[150,200],[205,112],[330,102]],7,wood) + `<circle cx="205" cy="112" r="6" class="il-m c-blacha"/>`;
  }
  const pallet = (a,x,y) => a.blocks(x,y,60,30,20,15,'ceramika') + a.rect(x-4,y+30,68,9,'drewno',{r:2});
  BUDOWA.addIllus('05-sciany/dostawa-skladowanie', function(a){
    const f1 = G(a) + a.blocks(400,110,80,152,20,12,'ceramika') + truck(a) + LN(a,[[330,102],[330,222]],1.5) +
      a.move(pallet(a,300,222),0,-60) + a.callout('hds',205,115,150,60,'Dźwig HDS') + a.num(300,42,'2–3 transporty') + a.num(120,300,'ok. 55 palet');
    const bad = a.g(pallet(a,300,222),{tr:'rotate(-13 344 262)'});
    const f2 = G(a) + a.rect(60,254,100,8,'drewno',{r:2}) + a.blocks(66,222,88,32,22,16,'ceramika') + a.rect(58,212,104,44,'folia',{r:9,st:'opacity:.55'}) + a.ok(110,170) +
      a.pill(110,292,'Na paletach, pod folią') +
      a.rect(265,256,180,8,'ziemia',{r:3}) + a.drops(280,244,3) + a.drops(410,246,2) + bad + a.bad(355,170) + a.pill(355,292,'Na błocie, przy wykopie');
    return { caption: 'Materiał dowozisz etapami i chronisz przed wodą.', frames: [
      { caption: 'Auto z HDS stawia palety blisko ściany, tam gdzie wskażesz.', svg: a.svg(f1,480,320,'Samochód z żurawiem HDS opuszcza paletę pustaków blisko ściany') },
      { caption: 'Dobrze: palety na belkach, pod folią. Źle: na błocie.', svg: a.svg(f2,480,320,'Dobrze: paleta na belkach pod folią. Źle: przechylona paleta na błocie') } ] };
  });

  /* 3 ---------- Rusztowanie ---------- */
  function scaf(a, lv){
    const ys = [262,196,130,64]; let s = '';
    s += LN(a,[[200,262],[200,ys[lv]-34]],4,wood) + LN(a,[[290,262],[290,ys[lv]-34]],4,wood) + LN(a,[[200,262],[290,196]],2.5,wood) + LN(a,[[290,196],[200,130]],2.5,wood);
    for (let i = 1; i <= lv; i++){
      const y = ys[i];
      s += a.rect(185,y,120,6,'drewno',{r:1}) + LN(a,[[190,y-34],[300,y-34]],3,wood) + LN(a,[[190,y-17],[300,y-17]],2,wood) + a.rect(190,y-8,110,8,'drewno',{r:1}) +
        LN(a,[[290,y+3],[314,y+3]],4,'var(--il-stal-d)');
    }
    return s;
  }
  BUDOWA.addIllus('05-sciany/rusztowanie', function(a){
    const base = G(a) + a.blocks(310,50,170,212,34,17,'ceramika');
    const f1 = base + scaf(a,3) + a.person(245,130,{s:.8,arms:[10,35],flip:true}) +
      a.callout('bar',193,96,150,70,'Barierka + bort') + a.callout('kot',302,196,340,150,'Kotwa do ściany') + a.num(90,215,'ok. 450–520 m²');
    const f2 = a.doc(160,60,120,150,{stamp:1,lines:4}) + a.pill(220,40,'Protokół odbioru',{acc:1}) + a.icon('kalendarz',380,120,1.8) + a.pill(380,180,'wynajem ok. 5 mies.') + a.pill(220,250,'Zanim ekipa wejdzie na górę');
    return { caption: 'Rusztowanie ramowe z montażem i protokołem, do końca dachu.', frames: [
      { caption: 'Pomost z barierką, burtą i kotwami do ściany.', svg: a.svg(f1,480,320,'Rusztowanie ramowe przy ścianie z barierką, burtą i kotwami') },
      { caption: 'Odbiór protokołem przed pracą; wynajem na ok. 5 miesięcy.', svg: a.svg(f2,480,320,'Protokół odbioru rusztowania i kalendarz wynajmu') } ] };
  });

  /* 4 ---------- Pierwsza warstwa ---------- */
  // x wzdłuż ściany 0–200, y 0–25 (cm); korona ściany fundamentowej z = 52, papa 50–52
  function base4(a,P){ return P.box(0,0,0,200,25,50,'beton') + P.box(-3,-2,50,206,29,2,'papa'); }
  BUDOWA.addIllus('05-sciany/pierwsza-warstwa', function(a){
    const mk = () => a.iso(140,205,1);
    const P1 = mk(), p1 = P1.P(100,10,56);
    const tri = a.rect(386,176,28,18,'maszyna',{r:3}) + LN(a,[[400,194],[384,262]],3,'var(--il-line)') + LN(a,[[400,194],[416,262]],3,'var(--il-line)') + LN(a,[[400,194],[400,262]],3,'var(--il-line)');
    const f1 = base4(a,P1) + P1.box(70,5,52,64,8,4,'poziomica',{k:'poz'}) + a.ok(p1[0]-10,p1[1]-40,13) + tri + a.callout('poz',p1[0],p1[1],340,100,'Korona ±0,00') + a.pill(400,222,'Niwelator') + a.num(120,290,'różnice: kilka mm');
    const P2 = mk(), h = P2.P(120,10,64);
    const f2 = base4(a,P2) + P2.box(0,0,52,200,25,3,'piasek',{k:'zap'}) + a.move(P2.box(0,0,55,38,25,24,'ceramika'),0,-55) +
      a.move(a.hand(h[0],h[1]-10,{r:-30,s:.8,hold:a.trowel(0,0,1)}),-30,-10) + a.callout('zap',P2.P(160,20,54)[0],P2.P(160,20,54)[1],340,100,'Zaprawa cementowa') + a.num(380,160,'1–2 cm');
    const P3 = mk(), c1 = P3.P(100,25,103);
    const f3 = base4(a,P3) + P3.box(0,0,52,200,25,3,'piasek') + P3.box(0,0,55,38,25,72,'ceramika') + P3.box(162,0,55,38,25,72,'ceramika') +
      P3.line([[38,25,103],[162,25,103]],'il-ln','stroke-width:1.5') + a.callout('zyl',c1[0],c1[1],340,100,'Żyłka między narożnikami') + a.num(385,230,'przekątne: 16,10 m');
    return { caption: 'Pierwsza warstwa na ±0,00 wyznacza poziom całego domu.', frames: [
      { caption: 'Najpierw niwelator: sprawdzasz poziom korony ściany fundamentowej.', svg: a.svg(f1,480,320,'Poziomica na koronie ściany fundamentowej i niwelator') },
      { caption: 'Zaprawa cementowa 1–2 cm i pierwszy pustak.', svg: a.svg(f2,480,320,'Ręka rozprowadza zaprawę, pierwszy pustak opada na miejsce') },
      { caption: 'Narożniki wyprowadzasz pierwsze, między nimi żyłka.', svg: a.svg(f3,480,320,'Dwa narożniki pustaków i żyłka między nimi') } ] };
  });

  /* 5 ---------- Murowanie parteru ---------- */
  BUDOWA.addIllus('05-sciany/murowanie-parter', function(a){
    const f1 = G(a) + a.blocks(40,166,60,96,30,24,'ceramika') + a.blocks(380,166,60,96,30,24,'ceramika') + a.blocks(100,214,150,48,30,24,'ceramika') +
      LN(a,[[100,190],[380,190]],1.5) + a.person(320,262,{s:.9,arms:[10,40],hold:a.trowel(0,0,.8)}) +
      a.pill(240,70,'Najpierw narożniki w górę') + a.num(240,118,'24 cm / warstwa');
    let tmp = '';
    for (let i = 0; i < 5; i++) tmp += 'M260 ' + (144+i*24) + 'H450';
    const f2 = a.blocks(30,120,190,120,50,24,'ceramika') + a.rect(260,120,190,120,'ceramika',{r:1}) + a.line(tmp.replace(/M260 120H450/,'') + 'M310 120V240M360 120V240M410 120V240','il-jt') +
      a.line('M358 122l5 30l-6 25l6 30l-4 30','il-ln','stroke-width:2.5') + a.dim(80,216,105,216,'≥ 10 cm',{dy:-30}) +
      a.ok(125,92) + a.bad(355,92) + a.pill(125,275,'Spoiny przesunięte') + a.pill(355,275,'Spoiny w jednej linii');
    const f3 = a.rect(40,100,160,60,'ceramika') + a.rect(40,160,160,14,'piasek',{r:1}) + a.rect(40,174,160,60,'ceramika') + a.trowel(60,160,1.2) + a.dim(214,160,214,174,'ok. 1 cm',{dx:0,dy:-34}) +
      a.rect(280,100,160,60,'ceramika') + a.rect(280,160,160,3,'papier',{r:1}) + a.rect(280,163,160,60,'ceramika') + a.rect(412,126,40,20,'maszyna',{r:4}) + a.rect(398,134,16,5,'blacha',{r:2}) +
      a.pill(120,268,'Zaprawa ciepła') + a.pill(360,268,'Pianka 1–2 mm');
    return { caption: 'Murujesz warstwa po warstwie, spoiny pionowe zawsze przesuwasz.', frames: [
      { caption: 'Narożniki w górę, między nimi napięta żyłka.', svg: a.svg(f1,480,320,'Narożniki wymurowane, żyłka napięta, murarz wypełnia środek') },
      { caption: 'Spoiny pionowe przesunięte o co najmniej 10 cm, inaczej ściana pęka.', svg: a.svg(f2,480,320,'Dobrze: spoiny przesunięte. Źle: spoiny w jednej linii i pęknięcie') },
      { caption: 'Zaprawa ciepła wybacza błędy; pianka wymaga równej pierwszej warstwy.', svg: a.svg(f3,480,320,'Spoina na zaprawie ciepłej ok. 1 cm i na piance 1–2 mm') } ] };
  });

  /* 6 ---------- Ściany działowe ---------- */
  BUDOWA.addIllus('05-sciany/sciany-dzialowe', function(a){
    const f1 = a.rect(20,70,440,26,'beton',{r:2}) + a.blocks(20,96,56,166,28,22,'ceramika') + a.blocks(404,96,56,166,28,22,'ceramika') + a.rect(76,254,328,8,'beton',{r:1}) +
      a.rect(230,96,26,14,'welna',{k:'dyl',r:1}) + a.blocks(230,110,26,144,26,22,'bloczek',{k:'dz'}) +
      a.callout('dyl',243,103,320,126,'Dylatacja 1–2 cm',{hot:1}) + a.callout('dz',243,200,320,204,'Działowa 11,5 cm') + a.callout('nos',432,165,380,165,'Nośna 24–25 cm') + a.ok(243,60,13);
    const f2 = a.road('M60 190Q150 110 240 180T420 150') + a.stop(60,190,1) + a.stop(240,180,2) + a.stop(420,150,3) +
      a.pill(60,240,'Strop') + a.num(240,236,'ok. 28 dni') + a.pill(420,205,'Działowe');
    return { caption: 'Działowe murujesz po stropie, z dylatacją od góry.', frames: [
      { caption: 'Między ścianką a stropem pas elastyczny, bo strop ugina się pod obciążeniem.', svg: a.svg(f1,480,320,'Przekrój: ścianka działowa z dylatacją od stropu między ścianami nośnymi') },
      { caption: 'Kolejność: strop, czas na dojrzewanie, dopiero ścianki.', svg: a.svg(f2,480,320,'Kolejność prac: strop, 28 dni, ścianki działowe') } ] };
  });

  /* 7 ---------- Nadproża ---------- */
  BUDOWA.addIllus('05-sciany/nadproza', function(a){
    const wall = a.blocks(20,40,440,222,40,20,'ceramika');
    const f1 = G(a) + wall + a.window(190,150,100,112) + a.move(a.rect(165,126,150,24,'beton',{k:'bel'}) + a.rect(165,142,150,8,'xps',{r:1}),0,-55) +
      a.person(125,262,{s:.9,arms:[-30,-30],kask:true}) + a.person(355,262,{s:.9,arms:[-30,-30],flip:true}) +
      a.dim(165,114,190,114,'25 cm') + a.dim(290,114,315,114) + a.callout('bel',240,134,330,80,'Belka + ocieplenie',{hot:1});
    const w = x => a.rect(x,110,210,152,'ceramika');
    const f2 = w(20) + a.rect(80,170,70,92,'szklo') + a.rect(60,146,110,22,'beton') + a.dim(60,138,80,138,'') + a.ok(125,90,13) + a.pill(125,290,'Oparcie ≥ 25 cm') +
      w(250) + a.rect(310,170,70,92,'szklo') + a.rect(300,146,90,22,'beton') + a.line('M300 146l-12 -34M390 146l10 -30','il-ln','stroke-width:2.5') + a.bad(355,90,13) + a.pill(355,290,'Za krótkie: pęka');
    return { caption: 'Nadproże opiera się na murze min. ok. 25 cm z każdej strony.', frames: [
      { caption: 'Belka nad otworem, z elementem izolacyjnym od zewnątrz.', svg: a.svg(f1,480,320,'Dwie osoby układają belkę nadproża nad oknem') },
      { caption: 'Oparcie ≥ 25 cm: dobrze. Za krótkie: ściana pęka przy oknie.', svg: a.svg(f2,480,320,'Dobrze: długie oparcie nadproża. Źle: za krótkie i pęknięcie') } ] };
  });

  /* 8 ---------- Duże przeszklenia ---------- */
  BUDOWA.addIllus('05-sciany/duze-otwory', function(a){
    const f1 = a.rect(20,70,440,26,'beton',{r:2}) + a.rect(100,70,280,40,'beton',{k:'pod'}) + a.rebar([[110,100],[370,100]],4) +
      a.blocks(20,96,80,166,40,22,'ceramika') + a.blocks(380,96,80,166,40,22,'ceramika') + a.rect(100,110,30,152,'beton',{k:'sl',r:1}) + a.rect(350,110,30,152,'beton',{k:'sl',r:1}) +
      a.window(130,110,220,152) + a.callout('pod',240,82,250,52,'Podciąg w stropie',{hot:1}) + a.num(240,200,'rozpiętość 4–5 m') +
      a.pill(240,16,'Wymiary tylko z projektu konstrukcji') + a.ok(60,50,12);
    const f2 = a.rect(20,70,440,26,'beton',{r:2}) + a.blocks(20,96,90,166,45,22,'ceramika') + a.blocks(370,96,90,166,45,22,'ceramika') +
      a.rect(110,96,260,16,'blacha',{k:'ipe',r:2}) + a.rect(110,112,12,150,'blacha',{r:1}) + a.rect(358,112,12,150,'blacha',{r:1}) + a.window(122,112,236,150) +
      a.callout('ipe',240,104,250,52,'Belka stalowa IPE/HEB') + a.pill(240,16,'Zabezpiecz ogniowo i ociepl');
    return { caption: 'Przekrój i słupy wyznacza wyłącznie konstruktor.', frames: [
      { caption: 'Podstawa: podciąg żelbetowy ukryty w grubości stropu, słupy po bokach.', svg: a.svg(f1,480,320,'Duże okno z podciągiem żelbetowym w stropie i słupami po bokach') },
      { caption: 'Wariant: belka stalowa; wymaga ocieplenia i zabezpieczenia ogniowego.', svg: a.svg(f2,480,320,'Duże okno z belką stalową i smukłymi słupami') } ] };
  });

  /* 9 ---------- Wieniec stropowy ---------- */
  function wien(a,P){ return P.box(0,0,0,200,25,70,'ceramika') + P.box(0,-2,70,200,2,25,'drewno'); }
  BUDOWA.addIllus('05-sciany/wieniec-stropu', function(a){
    const mk = () => a.iso(140,190,1);
    const P1 = mk(); let bars = '', st = '';
    [[6,76],[19,76],[6,90],[19,90]].forEach(q => bars += P1.bar([[-10,q[0],q[1]],[210,q[0],q[1]]],3.4));
    for (let x = 20; x < 200; x += 30) st += P1.bar([[x,5,76],[x,20,76],[x,20,91],[x,5,91],[x,5,76]],2);
    const b1 = P1.P(120,6,90), s1 = P1.P(80,20,91);
    const f1 = wien(a,P1) + P1.box(0,25,70,200,5,25,'xps',{k:'xps'}) + bars + st +
      a.callout('stal',b1[0],b1[1],350,60,'4 pręty Ø12') + a.callout('str',s1[0],s1[1]+4,350,115,'Strzemiona Ø6') + a.num(400,170,'co 25–30 cm') +
      a.callout('xps',P1.P(150,30,80)[0],P1.P(150,30,80)[1],350,230,'XPS ok. 5 cm');
    const P2 = mk();
    const f2 = wien(a,P2) + P2.box(0,25,70,200,5,25,'xps') + a.fresh(P2.box(0,0,70,200,25,25,'beton')) +
      a.fresh(a.pipe([[440,30],[360,60],[250,80]],10,'rura')) + a.drops(300,56,3) + a.num(400,150,'beton ok. 4–5 m³') + a.pill(380,215,'Polewaj ok. 7 dni');
    const sec = (x,xps,mark) => a.rect(x,150,70,100,'ceramika') + a.rect(x,110,70,40,'beton') + (xps ? a.rect(x-24,110,24,40,'xps') : '') + mark;
    const f3 = sec(80,1,a.ok(115,80,13)) + a.pill(100,285,'Wieniec z XPS 5 cm') + sec(310,0,a.bad(345,80,13) + a.drops(386,120,2)) + a.pill(345,285,'Bez: mostek, wilgoć');
    return { caption: 'Wieniec spina ściany na wysokości stropu; od zewnątrz musi być ocieplony.', frames: [
      { caption: 'Kosz: 4 pręty Ø12 i strzemiona Ø6, od zewnątrz płyta XPS.', svg: a.svg(f1,480,320,'Zbrojenie wieńca w szalunku na murze z płytą XPS od zewnątrz') },
      { caption: 'Beton z pompy; potem polewasz go przez ok. 7 dni.', svg: a.svg(f2,480,320,'Pompa betonu wypełnia wieniec, pielęgnacja wodą') },
      { caption: 'Wieniec z XPS jest ciepły; bez ocieplenia robi się zimny pas na ścianie.', svg: a.svg(f3,480,320,'Dobrze: wieniec ocieplony XPS. Źle: bez ocieplenia, wilgoć w narożniku') } ] };
  });

  /* 10 ---------- Strop ---------- */
  function strop(a, n){
    let s = a.blocks(20,150,44,112,22,22,'ceramika') + a.blocks(416,150,44,112,22,22,'ceramika') + a.rect(20,262,440,8,'beton',{r:1});
    [130,240,350].forEach(x => s += LN(a,[[x,260],[x,160]],5,wood));
    s += a.rect(110,158,260,6,'drewno',{r:1});
    for (let i = 0; i < n; i++) s += a.rect(64+i*117,150,117,10,'beton',{r:1});
    return s;
  }
  BUDOWA.addIllus('05-sciany/strop', function(a){
    const f1 = strop(a,2) + LN(a,[[60,20],[440,20]],8,'var(--il-blacha)') +
      a.move(a.rect(298,150,117,10,'beton',{r:1}) + LN(a,[[320,20],[320,150]],1.5) + LN(a,[[390,20],[390,150]],1.5),0,-70) + a.pill(240,60,'Filigran: płyta 6 cm') + a.callout('stem',130,230,150,296,'Stemple');
    const f2 = strop(a,3) + a.rebar([[70,142],[410,142]],3) + a.rebar([[70,136],[410,136]],3) +
      a.rect(296,140,5,24,'drewno',{r:1}) + a.rect(350,140,5,24,'drewno',{r:1}) + a.pipe([[190,128],[190,178]],12,'kan') +
      a.callout('otw',325,150,340,96,'Otwór schodowy') + a.callout('prz',190,150,140,96,'Przepusty');
    const f3 = strop(a,3) + a.fresh(a.rect(64,134,352,16,'beton',{r:2})) + a.fresh(a.pipe([[450,50],[400,100],[330,125]],10,'rura')) + a.drops(150,112,3) +
      a.num(240,70,'ok. 125 m²') + a.pill(240,296,'Stemple 14–21 dni, obciążenie po ok. 28') + a.icon('kalendarz',60,90,1.4);
    return { caption: 'Strop filigranowy: płyty, zbrojenie górne i nadbeton w jednym dniu.', frames: [
      { caption: 'Płyty filigranu opadają na stemple, jedna obok drugiej.', svg: a.svg(f1,480,320,'Dźwig układa płyty filigranu na stemplach między ścianami') },
      { caption: 'Zbrojenie górne, otwór schodowy i przepusty, zanim wejdzie beton.', svg: a.svg(f2,480,320,'Płyty ze zbrojeniem górnym, otworem schodowym i przepustem') },
      { caption: 'Nadbeton z pompy; stemple zostają 14–21 dni.', svg: a.svg(f3,480,320,'Pompa wylewa nadbeton na strop, stemple pod spodem') } ] };
  });

  /* 11 ---------- Otwór schodowy ---------- */
  BUDOWA.addIllus('05-sciany/schody-otwor', function(a){
    let tr = ''; for (let i = 1; i < 16; i++) tr += 'M250 ' + (70+i*9.4) + 'h56';
    return { caption: 'Widok z góry na strop: otwór schodowy i wypusty zbrojenia.',
      svg: a.svg(
        a.rect(70,40,340,230,'beton',{r:4}) + a.rect(250,70,56,150,'drewno',{r:2}) + a.line(tr,'il-jt') + a.arrow([[278,210],[290,150],[278,92]]) +
        a.rebar([[232,100],[250,100]],3) + a.rebar([[232,125],[250,125]],3) + a.rebar([[232,150],[250,150]],3) +
        a.dim(250,236,306,236,'1,0–1,2 m',{dy:16}) + a.dim(330,70,330,220,'2,8–3,2 m',{dx:62}) +
        a.callout('wyp',236,125,205,60,'Wypusty zbrojenia') + a.pill(240,296,'Wymiar z projektu schodów',{acc:1}),
        480,320,'Strop z góry: otwór schodowy z wymiarami i wypustami zbrojenia') };
  });

  /* 12 ---------- Kolankowa i szczyty ---------- */
  const gable = a => a.rect(70,250,340,14,'beton',{r:1}) + a.blocks(90,218,300,32,30,16,'ceramika') + a.rect(86,210,308,8,'beton',{r:1});
  const roof = a => a.poly([[90,210],[390,210],[240,92]],'ceramika');
  BUDOWA.addIllus('05-sciany/kolankowa-szczyty', function(a){
    let kot = '';
    [110,170,230,290,350].forEach(x => kot += a.rect(x,194,4,16,'stal',{r:1}));
    const f1 = gable(a) + a.fresh(kot) + a.dim(45,218,45,250,'1,0 m') + a.callout('wien',140,214,150,150,'Wieniec pod murłatę') + a.callout('kot',230,198,290,110,'Kotwy murłaty');
    const f2 = gable(a) + a.fresh(roof(a)) + a.dim(240,96,240,206,'ok. 4 m') + a.num(120,190,'40°') + a.pill(240,290,'Cięcie pustaków wg szablonu');
    const f3 = gable(a) + roof(a) + LN(a,[[90,210],[240,92],[390,210]],9,'var(--il-beton)') + a.arrow([[20,130],[60,140],[100,150]]) + a.pill(55,115,'wiatr') +
      a.callout('wsz',166,152,300,60,'Wieniec szczytowy') + a.pill(240,290,'Zbrojony wg projektu');
    return { caption: 'Kolankowa 1,0 m, szczyty 40° i wieńce, które trzymają dach.', frames: [
      { caption: 'Kolankowa 1,0 m, wieniec pod murłatę i kotwy dla dekarza.', svg: a.svg(f1,480,320,'Ścianka kolankowa z wieńcem i kotwami murłaty') },
      { caption: 'Szczyt pod kątem 40° z pustaków cięć wg szablonu.', svg: a.svg(f2,480,320,'Szczyt murowany pod kątem 40°') },
      { caption: 'Wieniec szczytowy biegnie wzdłuż krawędzi i trzyma ścianę na wietrze.', svg: a.svg(f3,480,320,'Szczyt z wieńcem szczytowym wzdłuż skosów') } ] };
  });

  /* 13 ---------- Komin ---------- */
  BUDOWA.addIllus('05-sciany/komin', function(a){
    const house = a.ground(0,274,480,50) + a.rect(30,156,28,118,'ceramika') + a.rect(342,156,28,118,'ceramika') + a.rect(58,156,284,8,'beton',{r:1}) + a.rect(58,266,284,8,'beton',{r:1}) +
      a.poly([[20,160],[200,70],[380,160],[380,172],[200,82],[20,172]],'dachowka');
    const f1 = house + a.rect(235,262,60,12,'beton',{k:'pod'}) + a.rect(255,40,30,224,'ceramika',{k:'kom'}) + a.rect(250,34,40,8,'beton',{r:2}) +
      a.rect(190,214,66,50,'blacha',{r:3}) + a.rect(198,224,40,28,'szklo',{r:2}) +
      a.callout('kom',270,60,330,50,'Komin ok. 8–9 m',{hot:1}) + a.callout('pod',265,268,330,250,'Własna podstawa') + a.pill(110,215,'Kominek');
    const f2 = a.rect(30,100,420,150,'ceramika',{r:2}) + a.rect(60,190,70,60,'blacha',{r:3}) + a.rect(70,200,45,34,'szklo',{r:2}) + a.rect(280,60,26,190,'ceramika') +
      a.pipe([[10,236],[60,236]],12,'rura') + a.arrow([[20,214],[40,214],[58,224]]) + a.pipe([[360,250],[360,60]],12,'woda') + a.pipe([[360,130],[307,130]],12,'woda') + a.bad(333,130,10) +
      a.pill(100,275,'Powietrze z zewnątrz Ø 100–150') + a.pill(380,275,'Rekuperacja osobno') + a.pill(293,30,'Komin: tylko spaliny');
    return { caption: 'Komin tylko dla kominka na drewno; rekuperacja ma własne przewody.', frames: [
      { caption: 'Komin ceramiczny sięga ponad dach i stoi na własnej podstawie.', svg: a.svg(f1,480,320,'Przekrój domu z kominkiem i kominem ceramicznym ponad dachem') },
      { caption: 'Kominek bierze powietrze z zewnątrz; rekuperacja nie wchodzi do komina.', svg: a.svg(f2,480,320,'Kominek z doprowadzeniem powietrza i osobny przewód rekuperacji') } ] };
  });

  /* 14 ---------- Odbiór ---------- */
  BUDOWA.addIllus('05-sciany/odbior-surowy', function(a){
    const f1 = G(a) + a.blocks(180,50,280,212,40,22,'ceramika') + a.window(250,110,90,70) +
      a.person(120,262,{s:.9,arms:[5,5],hold:a.g(a.level(-6,-30,60),{tr:'rotate(90)'})}) +
      LN(a,[[185,60],[185,258]],1.5) + a.ok(150,40,12) + a.callout('pion',186,150,60,80,'Pion i poziom') + a.num(400,215,'ok. 1 cm na kondygnację') + a.pill(295,100,'Otwory z projektu');
    const f2 = a.doc(160,50,130,170,{stamp:1,lines:5}) + a.pill(225,30,'Dziennik budowy',{acc:1}) + a.pill(380,100,'Przekątne') + a.pill(380,150,'Wieńce i strop') + a.pill(380,200,'Komin, przepusty') + a.ok(100,120,18) + a.pill(225,260,'Odbiór przed dachem');
    return { caption: 'Przed więźbą kierownik mierzy mury; poprawki są teraz najtańsze.', frames: [
      { caption: 'Pion, poziom, przekątne i otwory sprawdzasz przed dachem.', svg: a.svg(f1,480,320,'Odbiór ściany: pomiar pionu poziomicą') },
      { caption: 'Wynik wpisuje kierownik do dziennika budowy.', svg: a.svg(f2,480,320,'Dziennik budowy z pieczęcią odbioru murów') } ] };
  });
})();
