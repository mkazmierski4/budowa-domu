/* Ilustracje etapu 15 — Ogród. Liczby zgodne z content/15-ogrod.js i docs/DECYZJE.md
   (działka ok. 30 × 40 m, wjazd od północy, basen 4,2 × 8,5 m, taras ok. 32 m² na ±0,00, kostka 8 cm, humus ok. 20 cm). */
(function(){
  const S = (a, s, l) => a.svg(s, 480, 320, l);
  const L = a => a.layout;
  const G = a => a.ground(0,262,480,57);
  const ci = (x,y,r,mat,o) => `<circle cx="${x}" cy="${y}" r="${r}" class="il-m c-${mat}${o && o.cls ? ' '+o.cls : ''}"${o && o.st ? ` style="${o.st}"` : ''}/>`;
  const cloud = (x,y,s) => `<path class="il-m c-papier" transform="translate(${x} ${y}) scale(${s || 1})" d="M-34 10Q-46 10 -46 0Q-46 -12 -32 -12Q-28 -28 -10 -26Q2 -38 18 -28Q36 -30 38 -12Q50 -10 48 2Q46 10 36 10Z"/>`;
  const spray = (d) => `<path class="il-pipe p-woda" d="${d}" style="stroke-width:2.5;stroke-dasharray:3 6"/>`;
  // drzewo: x,y = pień przy ziemi; mat korony (trawa, zwir = srebrzyste liście)
  const tree = (a,x,y,s,mat) => { s = s || 1; return a.shadow(x,y,30*s,5*s) + a.rect(x-5*s,y-62*s,10*s,62*s,'drewno',{r:2}) +
    ci(x-20*s,y-66*s,22*s,mat || 'trawa',{cls:'il-dk'}) + ci(x+20*s,y-68*s,22*s,mat || 'trawa',{cls:'il-dk'}) + ci(x,y-86*s,28*s,mat || 'trawa'); };
  const hedge = (a,x,y,w,h) => a.shadow(x+w/2,y,w/2+4,5) + a.rect(x,y-h,w,h,'trawa',{r:Math.min(w,h)/3,cls:'il-dk'}) + ci(x+w*.3,y-h+6,w*.22,'trawa') + ci(x+w*.7,y-h+8,w*.2,'trawa');
  // kostka w przekroju: pasek ze spoinami
  const paver = (a,x,y,w,h,mat,step) => { let d = ''; for (let xx = x+(step || 18); xx < x+w-2; xx += step || 18) d += `M${xx} ${y}V${y+h}`; return a.rect(x,y,w,h,mat || 'beton',{r:1}) + a.line(d,'il-jt'); };
  // auto od przodu: x,y = środek przy ziemi
  const car = (a,x,y,s) => a.g(a.shadow(0,0,62,6) + a.poly([[-40,-44],[40,-44],[30,-72],[-30,-72]],'blacha') + a.poly([[-33,-47],[33,-47],[25,-67],[-25,-67]],'szklo') +
    a.rect(-56,-48,112,36,'blacha',{r:10}) + a.rect(-52,-14,18,14,'kmb',{r:3}) + a.rect(34,-14,18,14,'kmb',{r:3}) + ci(-38,-32,6,'piasek') + ci(38,-32,6,'piasek'), {tr:`translate(${x} ${y}) scale(${s || 1})`});
  // słupek oświetleniowy: x,y = podstawa
  const lamp = (a,x,y,on) => a.shadow(x,y,9,2) + a.rect(x-4,y-44,8,44,'kmb',{r:2}) + a.rect(x-8,y-54,16,12,'kmb',{r:3}) +
    (on ? a.fresh(a.poly([[x-6,y-44],[x+6,y-44],[x+34,y],[x-34,y]],'piasek',{st:'opacity:.45'})) : '');
  // zraszacz wynurzalny: x,y = poziom trawnika
  const head = (a,x,y,up) => a.rect(x-6,y-(up ? 14 : 2),12,up ? 18 : 6,'kmb',{r:2});
  // przęsło ze sztachet poziomych (antracyt)
  const slats = (a,x,y,w,h) => { let s = ''; for (let yy = y+4; yy < y+h-6; yy += 13) s += a.rect(x,yy,w,8,'kmb',{r:1}); return s; };

  /* 1 ---------- Projekt ogrodu: plan działki i kolejność ---------- */
  BUDOWA.addIllus('15-ogrod/projekt-ogrodu', function(a){
    const X = m => 142 + m*6.5, Y = m => 30 + m*6.5;
    let p = a.rect(X(0)-4,Y(0)-14,203,10,'kmb',{r:3}) + a.rect(X(0),Y(0),195,260,'trawa',{r:3});
    for (let m = 1; m < 40; m += 2.2) p += ci(X(.8),Y(m),5,'trawa',{cls:'il-dk'}) + ci(X(29.2),Y(m),5,'trawa',{cls:'il-dk'});
    for (let m = 3; m < 29; m += 2.2) p += ci(X(m),Y(39.2),5,'trawa',{cls:'il-dk'});
    p += a.rect(X(2),Y(0),X(8)-X(2),Y(8)-Y(0),'beton',{r:1,k:'pj'}) + a.rect(X(8),Y(5),X(12)-X(8),Y(8)-Y(5),'beton',{r:1,k:'pj'}) +
      a.rect(X(9),Y(1),14,12,'blacha',{r:2}) +
      a.rect(X(1.5),Y(8),X(8)-X(1.5),Y(15)-Y(8),'dachowka',{r:1}) + a.rect(X(8),Y(8),X(21)-X(8),Y(17.5)-Y(8),'dachowka',{r:1}) +
      a.rect(X(12),Y(17.5),X(20)-X(12),Y(21.5)-Y(17.5),'piasek',{r:1,k:'ta'}) +
      a.rect(X(22),Y(20),X(26.2)-X(22),Y(28.5)-Y(20),'woda',{r:3,k:'ba'}) +
      a.rect(X(3),Y(33),X(6.5)-X(3),Y(36)-Y(33),'drewno',{r:1,k:'do'}) +
      ci(X(14),Y(27),10,'trawa',{cls:'il-dk'}) + ci(X(9),Y(30),9,'zwir') + ci(X(20),Y(34),10,'trawa',{cls:'il-dk'});
    const f1 = p + L(a).scene('', [
      {t:'Podjazd od północy', at:[X(5),Y(4)], side:'l', y:60, k:'pj'},
      {t:'Domek dla dzieci', at:[X(4.7),Y(34.5)], side:'l', y:250, k:'do'},
      {t:'Taras ok. 32 m²', at:[X(19),Y(19.5)], side:'r', y:120, k:'ta'},
      {t:'Basen 4,2 × 8,5 m', at:[X(26),Y(24)], side:'r', y:190, k:'ba'}]) + a.num(X(15),308,'ok. 1000 m² ogrodu');
    const f2 = a.ground(0,292,480,28) + a.excavator(70,292,.55) + tree(a,430,292,.6) + hedge(a,350,292,46,30) +
      L(a).timeline([{t:'Basen, deszczówka'},{t:'Rury i kable'},{t:'Kostka, taras'},{t:'Ogrodzenie'},{t:'Humus, trawnik'}], {x:20,y:110,w:440,h:52,title:'Kolejność prac w sezonie'}) +
      a.arrow([[90,196],[240,176],[390,196]]) + a.num(240,222,'kwiecień → październik');
    return { caption: 'Projekt ogrodu to plan wszystkiego, co na działce, i kolejność ekip.', frames: [
      { caption: 'Plan działki ok. 30 × 40 m: wjazd od północy, taras, basen i ogród od południa, żywopłot dookoła.', svg: S(a, f1, 'Plan działki z domem, podjazdem, tarasem, basenem, drzewami i domkiem dla dzieci') },
      { caption: 'Od dołu do góry: najpierw koparka i dźwig, na końcu humus, trawnik i rośliny.', svg: S(a, f2, 'Oś czasu: basen i deszczówka, rury i kable, kostka i taras, ogrodzenie, humus i trawnik') } ] };
  });

  /* 2 ---------- Deszczówka: osadnik, rura, skrzynki ---------- */
  function rain(a, wet){
    let s = a.rect(0,150,480,170,'ziemia',{r:0}) + a.rect(0,147,480,9,'trawa',{r:3}) +
      a.rect(0,30,58,120,'papier',{r:0}) + a.rect(0,124,62,30,'kmb',{r:0}) + a.rect(0,154,62,166,'beton',{r:0}) +
      a.rect(62,40,10,104,'blacha',{r:2}) + a.rect(56,146,30,52,'blacha',{r:3,k:'os'}) +
      a.pipe([[86,184],[330,204]],10,'kan') +
      a.rect(326,180,132,74,'papier',{r:4,k:'sk'});
    for (let x = 330; x < 454; x += 31) for (let y = 184; y < 250; y += 33) s += a.rect(x,y,27,29,'xps',{r:2,k:'sk'});
    if (wet) s += cloud(150,40,.9) + a.drops(120,62,4) + a.drops(300,70,3) + a.fresh(a.drops(360,200,3) + a.drops(400,225,3)) + a.arrow([[110,176],[210,186],[316,196]]);
    return s;
  }
  BUDOWA.addIllus('15-ogrod/odwodnienie', function(a){
    const f1 = rain(a,0) + a.dim(62,112,326,112,'min. ok. 3 m') + a.num(208,236,'spadek 1–2%') +
      L(a).scene('', [{t:'Osadnik z koszem', at:[71,190], side:'l', y:290, k:'os'}, {t:'Skrzynki w geowłókninie', at:[392,182], side:'r', y:290, k:'sk'}]);
    const f2 = rain(a,1) + L(a).scene('', [{t:'Woda wsiąka w grunt', at:[392,220], side:'r', y:290, k:'sk'}]) + a.pill(208,236,'nie do oczyszczalni');
    return { caption: 'Każda rura spustowa ma osadnik, a deszczówka wsiąka w grunt z dala od domu.', frames: [
      { caption: 'Od rury spustowej: osadnik z koszem, rura KG Ø110 ze spadkiem i skrzynki rozsączające min. ok. 3 m od domu.', svg: S(a, f1, 'Przekrój: ściana domu, rura spustowa, osadnik, rura ze spadkiem i skrzynki rozsączające') },
      { caption: 'W ulewę woda z dachu płynie do skrzynek i powoli wsiąka. Nie trafia do oczyszczalni ani na sąsiada.', svg: S(a, f2, 'Deszcz: woda płynie rurą do skrzynek rozsączających') } ] };
  });

  /* 3 ---------- Basen: wykop, dźwig, obsypka i woda ---------- */
  function pit(a){
    return a.rect(0,150,150,170,'ziemia',{r:0}) + a.rect(390,150,90,170,'ziemia',{r:0}) + a.rect(150,262,240,58,'ziemia',{r:0}) +
      a.rect(0,147,150,9,'trawa',{r:3}) + a.rect(390,147,90,9,'trawa',{r:3}) + a.rect(150,250,240,12,'beton',{r:1,k:'pl'});
  }
  const shell = (a,dy,o) => a.poly([[160,150+dy],[380,150+dy],[370,250+dy],[170,250+dy]],'papier',o) + a.rect(156,146+dy,228,8,'papier',{r:3});
  BUDOWA.addIllus('15-ogrod/basen', function(a){
    const f1 = pit(a) + a.poly([[400,150],[470,150],[455,112],[420,104]],'ziemia') + a.excavator(80,150,.75) +
      L(a).scene('', [{t:'Płyta pod nieckę', at:[270,256], side:'r', y:290, k:'pl'}]) + a.num(270,60,'ok. 70–90 m³ ziemi');
    const crane = a.shadow(430,150,48,6) + a.rect(386,118,90,26,'maszyna',{r:4}) + a.rect(450,96,26,24,'maszyna',{r:3}) + a.rect(454,100,16,12,'szklo',{r:2}) +
      ci(400,146,9,'kmb') + ci(456,146,9,'kmb') + '<path class="il-boom" d="M420 118L270 30"/>' + a.line('M270 30V70','il-ln','stroke-width:2.5');
    const f2 = pit(a) + crane + a.move(a.g(a.line('M270 70L190 108M270 70L350 108','il-ln') + shell(a,-42,{k:'ni'})), 0, -70) +
      L(a).scene('', [{t:'Niecka poliestrowa', at:[200,150], side:'l', y:60, k:'ni'}]) + a.num(270,290,'4,2 × 8,5 m');
    const pump = a.shadow(440,150,30,4) + a.rect(414,104,52,44,'blacha',{r:4,k:'pc'}) + ci(440,126,15,'kmb') + ci(440,126,5,'blacha');
    const f3 = pit(a) + a.rect(150,150,14,100,'chudy',{r:0}) + a.rect(376,150,14,100,'chudy',{r:0,k:'ob'}) + shell(a,0) +
      a.fresh(a.poly([[166,160],[374,160],[366,244],[174,244]],'woda',{k:'wo'})) + a.rect(110,140,50,8,'beton',{r:2}) + a.rect(380,140,30,8,'beton',{r:2}) +
      pump + a.pipe([[412,140],[392,160],[392,200],[374,200]],5,'woda') +
      L(a).scene('', [{t:'Obsypka i woda równo', at:[157,200], side:'l', y:100, k:'ob'}, {t:'Pompa ciepła basenu', at:[440,104], side:'r', y:60, k:'pc'}]) + a.num(270,200,'ok. 50 m³');
    return { caption: 'Basen idzie pierwszy: koparka, wywrotki i dźwig muszą wjechać, zanim powstanie podjazd i trawnik.', frames: [
      { caption: 'Wykop z zapasem ok. 0,5 m z każdej strony i płyta betonowa na zagęszczonej podsypce.', svg: S(a, f1, 'Koparka kopie wykop pod basen, na dnie płyta betonowa') },
      { caption: 'Dźwig opuszcza nieckę poliestrową na płytę.', svg: S(a, f2, 'Dźwig opuszcza nieckę basenu do wykopu') },
      { caption: 'Obsypka chudym betonem warstwami i woda do tego samego poziomu; obok technika i pompa ciepła.', svg: S(a, f3, 'Niecka w wykopie z wodą, obsypka i pompa ciepła obok') } ] };
  });

  /* 4 ---------- Podjazd: podbudowa, podsypka, kostka ---------- */
  function base(a){
    return a.rect(20,250,440,62,'ziemia',{r:4}) + a.rect(60,196,400,56,'zwir',{r:1,k:'pb'}) + a.line('M60 226H460','il-jt');
  }
  const plate = (a,x,y) => a.rect(x-24,y-10,48,10,'blacha',{r:2}) + a.rect(x-14,y-26,28,16,'maszyna',{r:3}) + a.line(`M${x} ${y-24}L${x+34} ${y-58}`,'il-ln','stroke-width:3');
  BUDOWA.addIllus('15-ogrod/podjazd', function(a){
    const f1 = base(a) + a.rect(20,196,40,56,'ziemia',{r:2}) + a.excavator(120,196,.6) +
      L(a).scene('', [{t:'Kruszywo z drogi budowy', at:[300,212], side:'r', y:100, k:'pb'}]) + a.num(380,282,'ok. 25–30 cm');
    const f2 = base(a) + a.rect(20,214,40,38,'chudy',{r:1}) + a.rect(40,164,14,60,'beton',{r:1,k:'ob'}) + a.fresh(a.rect(54,186,406,10,'piasek',{r:1,k:'ps'})) +
      a.level(220,174,130) + a.person(392,186,{kneel:true,flip:true,arms:[60,75]}) +
      L(a).scene('', [{t:'Obrzeże na ławie', at:[47,170], side:'l', y:100, k:'ob'}, {t:'Podsypka 3–5 cm', at:[180,191], side:'r', y:290, k:'ps'}]);
    const f3 = base(a) + a.rect(20,214,40,38,'chudy',{r:1}) + a.rect(40,164,14,60,'beton',{r:1}) + a.rect(54,186,406,10,'piasek',{r:1}) +
      a.move(paver(a,54,170,406,16,'beton',20), 0, -40) + plate(a,330,170) + a.person(390,170,{flip:true,arms:[40,45]}) +
      L(a).scene('', [{t:'Kostka 8 cm, zagęszczarka', at:[200,176], side:'l', y:100, k:'ko'}]) + a.num(240,290,'spadek 1,5–2% od domu');
    return { caption: 'Podbudowa leży od początku budowy. Teraz dochodzi obrzeże, podsypka i kostka.', frames: [
      { caption: 'Droga z etapu 03: koleiny wyrównać, glinę usunąć, dosypać kruszywa i zagęścić.', svg: S(a, f1, 'Przekrój: kruszywo drogi budowy na gruncie, koparka wyrównuje') },
      { caption: 'Obrzeża na ławie z betonu, potem podsypka 3–5 cm ściągana łatą.', svg: S(a, f2, 'Brukarz ściąga podsypkę łatą między obrzeżem a podbudową') },
      { caption: 'Kostkę układa się od siebie, zagęszcza z matą gumową i fuguje piaskiem.', svg: S(a, f3, 'Ułożona kostka i zagęszczarka płytowa') } ] };
  });

  /* 5 ---------- Opaska żwirowa ---------- */
  BUDOWA.addIllus('15-ogrod/opaska', function(a){
    const wall = a.rect(0,0,56,150,'papier',{r:0}) + a.rect(0,120,60,40,'kmb',{r:0}) + a.rect(0,160,60,84,'beton',{r:0}) + a.rect(60,166,162,78,'ziemia',{r:0});
    const ok = wall + a.poly([[60,160],[140,160],[140,184],[60,178]],'zwir') + a.line('M60 178L140 184','il-ln','stroke-dasharray:4 4') +
      a.rect(138,154,6,30,'kmb',{r:1}) + a.rect(144,160,78,10,'trawa',{r:3}) + a.drops(90,96,3) + a.arrow([[90,150],[120,160],[150,178]]) +
      a.callout('o1',100,170,150,40,'ok. 50 cm');
    const bad = wall + a.rect(60,158,162,12,'trawa',{r:3}) + a.drops(90,96,3) +
      ci(30,140,4,'ziemia') + ci(42,148,3,'ziemia') + ci(20,150,3,'ziemia') + ci(48,134,2.5,'ziemia') + a.bad(36,104,10) +
      a.callout('b1',40,142,110,40,'błoto na cokole');
    return { caption: 'Pas żwiru przy ścianie chroni cokół przed błotem i kosiarką.',
      svg: S(a, L(a).compare(ok, bad, ['Żwir na włókninie', 'Trawa do ściany']), 'Dobrze: opaska żwirowa ze spadkiem od ściany. Źle: trawa do ściany i zabrudzony cokół') };
  });

  /* 6 ---------- Taras: płyta ze spadkiem, wsporniki, gres ---------- */
  function terr(a){
    return a.rect(0,26,96,164,'papier',{r:0}) + a.rect(0,190,130,14,'drewno',{r:0}) + a.rect(96,40,30,150,'blacha',{r:2,k:'hs'}) + a.rect(102,48,18,136,'szklo',{r:1,k:'hs'}) +
      a.rect(0,204,130,116,'beton',{r:0}) + a.rect(130,244,350,76,'ziemia',{r:0}) + a.rect(130,232,350,14,'zwir',{r:0}) +
      a.poly([[146,210],[480,218],[480,232],[146,232]],'beton',{k:'pl'}) + a.rect(130,194,16,38,'blacha',{r:2,k:'od'});
  }
  BUDOWA.addIllus('15-ogrod/taras', function(a){
    const f1 = terr(a) + a.person(380,217,{arms:[150,40],hold:a.trowel(0,0,1)}) +
      L(a).scene('', [{t:'Odwodnienie przy HS', at:[138,200], side:'l', y:290, k:'od'}]) + a.num(300,280,'spadek 1,5–2%');
    let sup = ''; for (let x = 172; x < 470; x += 52){ const top = 210 + (x-146)*8/334; sup += a.rect(x-6,196,12,top-196,'kmb',{r:1}); }
    const f2 = terr(a) + a.fresh(sup) + a.move(paver(a,148,190,332,7,'beton',52), 0, -40) + a.person(400,190,{kask:false,arms:[10,30]}) +
      L(a).scene('', [{t:'Wsporniki regulowane', at:[224,203], side:'l', y:290, k:'ws'}]) + a.num(170,170,'±0,00');
    return { caption: 'Taras na poziomie gotowej posadzki, bez progu, z odwodnieniem przy HS.', frames: [
      { caption: 'Płyta betonowa na kruszywie ze spadkiem od domu; przy HS korytko odwodnienia.', svg: S(a, f1, 'Przekrój: salon z HS, płyta tarasu ze spadkiem i odwodnienie liniowe') },
      { caption: 'Wsporniki wyrównują spadek, płyty gresu leżą poziomo, równo z progiem.', svg: S(a, f2, 'Płyty gresowe na wspornikach na poziomie progu HS') } ] };
  });

  /* 7 ---------- Zadaszenie szklane ---------- */
  function roof(a){
    return G(a) + a.rect(0,20,40,242,'ceramika',{r:0}) + a.rect(40,20,34,242,'eps',{r:0}) + a.rect(74,250,406,12,'beton',{r:1}) +
      a.rect(40,86,48,10,'stal',{r:1,k:'ko'}) + a.rect(86,80,16,18,'blacha',{r:2,k:'ko'}) +
      a.shadow(404,250,16,3) + a.rect(398,118,12,132,'blacha',{r:2,k:'sl'}) + a.rect(390,106,28,16,'blacha',{r:3,k:'ry'});
  }
  BUDOWA.addIllus('15-ogrod/zadaszenie-tarasu', function(a){
    const glass = a.poly([[100,80],[412,108],[412,114],[100,86]],'szklo',{k:'sz'});
    const f1 = roof(a) + a.ghost(glass) + a.person(300,250,{arms:[10,20]}) +
      L(a).scene('', [{t:'Konsole w murze', at:[64,91], side:'r', y:60, k:'ko'}, {t:'Słup na stopie', at:[404,200], side:'r', y:200, k:'sl'}]);
    const f2 = roof(a) + a.move(glass, 0, -30) + a.drops(200,70,3) + a.drops(300,80,2) + a.arrow([[200,94],[300,100],[396,112]]) +
      a.person(250,250,{kask:false,arms:[10,20]}) +
      L(a).scene('', [{t:'Szkło VSG', at:[260,96], side:'r', y:60, k:'sz'}, {t:'Rynna w belce', at:[404,112], side:'r', y:200, k:'ry'}]) + a.num(170,170,'min. 5–8°');
    return { caption: 'Aluminium i szkło laminowane VSG ok. 6 × 3,5 m nad częścią tarasu przy salonie.', frames: [
      { caption: 'Belka przyścienna na konsolach w murze, przez 20 cm styropianu; od ogrodu słupy na stopach.', svg: S(a, f1, 'Mur z ociepleniem, konsole i belka, słup zadaszenia na tarasie') },
      { caption: 'Szkło ze spadkiem min. 5–8°: woda spływa do rynny w belce i rurą w słupie.', svg: S(a, f2, 'Szkło zadaszenia, krople spływają do rynny w belce frontowej') } ] };
  });

  /* 8 ---------- Ogrodzenie: słupki, panele, podmurówka ---------- */
  function posts(a){
    let s = G(a) + a.line('M40 170H460','il-ln','stroke-dasharray:5 5');
    [70,170,270,370].forEach(x => s += a.rect(x-12,262,24,30,'beton',{r:2}) + a.rect(x-4,150,8,112,'kmb',{r:1,k:'sl'}));
    return s;
  }
  BUDOWA.addIllus('15-ogrod/ogrodzenie', function(a){
    const f1 = posts(a) + a.person(430,262,{arms:[160,140],hold:a.shovel(0,0,.8)}) + a.dim(70,130,170,130,'co ok. 2,5 m') +
      L(a).scene('', [{t:'Słupki w betonie', at:[170,276], side:'l', y:300, k:'sl'}]);
    let pan = '';
    [70,170,270].forEach(x => { let d = ''; for (let xx = x+12; xx < x+100; xx += 11) d += `M${xx} 152V240`; d += `M${x+4} 172H${x+96}M${x+4} 214H${x+96}`;
      pan += a.rect(x+4,240,92,22,'beton',{r:1,k:'pm'}) + a.line(d,'il-ln','stroke-width:2'); });
    const f2 = posts(a) + a.fresh(pan) + hedge(a,380,262,80,40) +
      L(a).scene('', [{t:'Panel 3D ok. 1,5 m', at:[120,190], side:'r', y:60}, {t:'Podmurówka ok. 20 cm', at:[220,251], side:'r', y:300, k:'pm'}]) + a.num(110,60,'ok. 140 mb granicy');
    return { caption: 'Boki i tył: panel 3D na słupkach w betonie, z podmurówką prefabrykowaną.', frames: [
      { caption: 'Słupki co ok. 2,5 m w linii z naciągniętej linki, w otworach zalanych betonem.', svg: S(a, f1, 'Słupki ogrodzenia w betonie wzdłuż linki, robotnik z łopatą') },
      { caption: 'Między słupkami podmurówka ok. 20 cm i panele; od środka sadzi się żywopłot.', svg: S(a, f2, 'Panele ogrodzenia z podmurówką między słupkami') } ] };
  });

  /* 9 ---------- Brama przesuwna i furtka ---------- */
  function front(a){
    let s = G(a) + slats(a,0,160,170,84) + a.rect(170,140,18,122,'bloczek',{r:1}) + a.rect(372,140,22,122,'bloczek',{r:1,k:'sl'}) +
      a.rect(376,170,14,10,'kmb',{r:2,k:'sl'}) + a.rect(375,148,16,14,'papier',{r:2}) + a.rect(376,196,14,20,'blacha',{r:2,k:'sl'}) +
      slats(a,396,166,52,78) + a.rect(448,140,20,122,'bloczek',{r:1});
    return s;
  }
  const gate = (a) => slats(a,188,166,184,80) + a.rect(188,246,184,6,'kmb',{r:1});
  BUDOWA.addIllus('15-ogrod/brama-furtka', function(a){
    const f1 = front(a) + gate(a) + a.rect(182,220,6,8,'poziomica',{r:1,k:'fo'}) + a.line('M188 224H372','il-ln','stroke-dasharray:3 4') +
      L(a).scene('', [{t:'Fotokomórki', at:[280,224], side:'l', y:100, k:'fo'}, {t:'Domofon, numer, skrzynka', at:[383,200], side:'r', y:100, k:'sl'}]) + a.num(280,296,'wjazd ok. 4,5 m');
    const f2 = front(a) + a.move(a.g(gate(a),{tr:'translate(-170 0)'}), 170, 0) + car(a,280,262,.85) + a.arrow([[200,130],[120,120],[40,130]]) +
      L(a).scene('', [{t:'Przesuw wzdłuż ogrodzenia', at:[110,180], side:'l', y:60}]);
    return { caption: 'Brama przesuwna samonośna nie zajmuje podjazdu i nie otwiera się na drogę.', frames: [
      { caption: 'Brama zamknięta; przy furtce słupek z wideodomofonem, numerem domu i skrzynką na listy.', svg: S(a, f1, 'Front działki: zamknięta brama przesuwna, furtka i słupek z domofonem') },
      { caption: 'Napęd przesuwa bramę wzdłuż ogrodzenia; fotokomórki pilnują wjazdu.', svg: S(a, f2, 'Brama odsunięta w bok, auto wjeżdża na działkę') } ] };
  });

  /* 10 ---------- Humus wraca ---------- */
  function soil(a){
    return a.rect(0,40,40,230,'papier',{r:0}) + a.rect(0,170,44,40,'kmb',{r:0}) + a.rect(0,210,480,110,'piasek',{r:0,k:'pg'});
  }
  BUDOWA.addIllus('15-ogrod/humus-teren', function(a){
    const f1 = soil(a) + a.poly([[330,210],[470,210],[430,140],[370,136]],'ziemia',{k:'ha'}) + a.excavator(200,210,.7) +
      L(a).scene('', [{t:'Humus z etapu 03', at:[400,170], side:'r', y:80, k:'ha'}, {t:'Podglebie spulchnione', at:[120,240], side:'l', y:290, k:'pg'}]) + a.num(400,290,'ok. 190 m³');
    const f2 = soil(a) + a.move(a.poly([[44,190],[480,200],[480,222],[44,212]],'ziemia',{k:'hu'}), 0, -30) +
      a.person(300,196,{arms:[150,130],hold:a.shovel(0,0,.8)}) + a.arrow([[80,170],[180,172],[260,178]]) +
      L(a).scene('', [{t:'Humus ok. 20 cm', at:[160,206], side:'l', y:290, k:'hu'}]) + a.num(170,130,'spadek od domu min. 2%');
    return { caption: 'Humus z hałdy wraca na podglebie: ok. 20 cm pod trawnik, 30–40 cm pod rabaty.', frames: [
      { caption: 'Najpierw sprzątanie gruzu i spulchnienie podglebia, ubitego przez sprzęt.', svg: S(a, f1, 'Koparka przy hałdzie humusu, pod spodem podglebie') },
      { caption: 'Humus rozłożony ze spadkiem od domu, na sucho, i wyrównany.', svg: S(a, f2, 'Warstwa humusu ze spadkiem od ściany domu') } ] };
  });

  /* 11 ---------- Nawadnianie ---------- */
  function lawn(a, up){
    let s = a.rect(0,26,30,236,'papier',{r:0}) + a.rect(6,120,18,24,'blacha',{r:2,k:'st'}) + a.rect(0,210,480,110,'ziemia',{r:0}) + a.rect(0,206,480,9,'trawa',{r:3}) +
      a.rect(52,204,40,10,'kmb',{r:2,k:'za'}) + a.rect(56,214,32,24,'blacha',{r:2,k:'za'}) + a.pipe([[88,236],[440,236]],5,'woda',{k:'ru'});
    [150,280,410].forEach(x => s += a.pipe([[x,236],[x,212]],4,'woda') + head(a,x,208,up));
    return s;
  }
  BUDOWA.addIllus('15-ogrod/nawadnianie', function(a){
    const f1 = lawn(a,0) + a.person(330,210,{kneel:true,flip:true,arms:[50,70]}) +
      L(a).scene('', [{t:'Sterownik z czujnikiem deszczu', at:[15,132], side:'r', y:60, k:'st'}, {t:'Skrzynka zaworów', at:[72,220], side:'l', y:290, k:'za'}]) +
      a.num(330,290,'rury PE 20–30 cm w gruncie');
    const sp = spray('M150 192Q215 90 280 196M150 192Q85 100 34 198M280 192Q345 90 410 196M410 192Q445 130 470 198');
    const f2 = lawn(a,1) + a.fresh(sp + a.drops(205,120,3) + a.drops(335,120,3)) +
      L(a).scene('', [{t:'Zasięg głowa do głowy', at:[215,130], side:'r', y:60}]) + a.num(280,290,'4–6 zraszaczy na sekcję');
    return { caption: 'Sekcje zraszaczy na trawnik i linia kroplująca pod żywopłotem; sterownik podlewa nad ranem.', frames: [
      { caption: 'Rury PE i zraszacze w gruncie przed trawnikiem; zawory w skrzynce, sterownik w garażu.', svg: S(a, f1, 'Przekrój trawnika: rura, zraszacze, skrzynka zaworów i sterownik na ścianie') },
      { caption: 'Zraszacze wynurzają się, woda z jednego dolatuje do sąsiedniego.', svg: S(a, f2, 'Trzy zraszacze podlewają trawnik nakładającymi się łukami') } ] };
  });

  /* 12 ---------- Oświetlenie 12–24 V ---------- */
  function lights(a, on){
    let s = a.rect(0,40,70,182,'papier',{r:0}) + a.rect(16,120,36,28,'blacha',{r:3,k:'za'}) + a.rect(0,222,480,98,'ziemia',{r:0}) + a.rect(70,214,410,10,'beton',{r:1}) +
      a.cable([[34,148],[34,240],[440,240]],'var(--il-kmb)',{k:'ka'});
    [150,270,390].forEach(x => s += lamp(a,x,214,on));
    return s;
  }
  BUDOWA.addIllus('15-ogrod/oswietlenie-ogrodu', function(a){
    const f1 = lights(a,0) + a.person(330,214,{kneel:true,flip:true,arms:[50,70]}) +
      L(a).scene('', [{t:'Zasilacz w garażu', at:[34,134], side:'r', y:60, k:'za'}, {t:'Kabel ok. 20–30 cm', at:[220,240], side:'l', y:290, k:'ka'}]);
    const f2 = lights(a,1) + tree(a,440,214,.8) + a.num(200,90,'12–24 V') + a.pill(320,90,'2700–3000 K');
    return { caption: 'Niskie napięcie w ogrodzie: zasilacz w garażu, cienki kabel płytko, lampy wpinane bez elektryka.', frames: [
      { caption: 'Kabel z zasilacza idzie płytko w ziemi wzdłuż ścieżki, z taśmą ostrzegawczą.', svg: S(a, f1, 'Zasilacz w garażu, kabel w ziemi do słupków przy ścieżce') },
      { caption: 'Ciepłe, słabe światło skierowane w dół, na ścieżkę.', svg: S(a, f2, 'Słupki świecą w dół na ścieżkę') } ] };
  });

  /* 13 ---------- Trawnik: wałowanie, siew, wschody ---------- */
  const soil2 = a => a.rect(0,230,480,90,'ziemia',{r:0});
  const roller = (a,x) => ci(x,214,16,'blacha') + ci(x,214,5,'kmb') + a.line(`M${x} 214L${x+38} 184`,'il-ln','stroke-width:3');
  BUDOWA.addIllus('15-ogrod/trawnik', function(a){
    const f1 = soil2(a) + a.move(roller(a,170) + a.person(230,230,{arms:[-40,-45]}), -80, 0) + a.num(170,130,'wał ok. 100 kg') + a.pill(360,290,'humus wyrównany');
    let seeds = ''; for (let i = 0; i < 26; i++) seeds += ci(120 + (i*47) % 240, 180 + (i*29) % 48, 2.2, 'piasek');
    const f2 = soil2(a) + a.person(380,230,{kask:false,flip:true,arms:[20,100]}) + a.fresh(seeds) + a.arrow([[120,150],[200,140],[280,150]]) + a.arrow([[200,250],[180,200],[200,160]]) +
      a.num(170,90,'ok. 30–40 g/m²') + a.pill(300,290,'siew na krzyż');
    let blades = ''; for (let x = 10; x < 470; x += 9) blades += a.poly([[x,231],[x+4,216 - (x*7) % 9],[x+7,231]],'trawa');
    const f3 = soil2(a) + a.fresh(blades) + head(a,240,230,1) + spray('M240 214Q170 140 100 228M240 214Q310 140 380 228') + a.num(240,290,'zielony po 2–3 tyg.');
    return { caption: 'Trawnik z siewu na humusie, gdy nawadnianie już działa.', frames: [
      { caption: 'Wałowanie wyrównuje humus i pokazuje dołki do dosypania.', svg: S(a, f1, 'Ogrodnik ciągnie wał po wyrównanym humusie') },
      { caption: 'Siew w dwóch kierunkach na krzyż, płytko zagrabiony i wałowany.', svg: S(a, f2, 'Ogrodnik rozsiewa nasiona trawy') },
      { caption: 'Codzienne podlewanie; trawa wschodzi po 2–3 tygodniach.', svg: S(a, f3, 'Młoda trawa i zraszacz') } ] };
  });

  /* 14 ---------- Żywopłot, drzewa, oliwka ---------- */
  BUDOWA.addIllus('15-ogrod/nasadzenia', function(a){
    const f1 = G(a) + a.rect(76,150,8,112,'kmb',{r:1}) + a.rect(68,244,24,18,'beton',{r:1}) + hedge(a,120,262,70,96) + a.rect(110,256,92,6,'drewno',{r:2,k:'ko'}) +
      tree(a,340,262,.8) + a.rect(362,170,5,92,'drewno',{r:1,k:'pa'}) + a.person(410,262,{kask:false,arms:[30,110]}) +
      a.dim(80,288,155,288,'50–70 cm') +
      L(a).scene('', [{t:'Grab: 3–4 szt./mb', at:[155,190], side:'l', y:60}, {t:'Palik i podlewanie 2–3 lata', at:[364,200], side:'r', y:60, k:'pa'}]);
    const ground = a.rect(0,214,222,30,'ziemia',{r:0}) + a.rect(0,211,222,8,'trawa',{r:3});
    const ok = ground + tree(a,70,214,.85,'zwir') + a.shadow(170,214,24,4) + a.poly([[146,170],[194,170],[188,214],[152,214]],'ceramika') + ci(170,140,22,'zwir') + a.rect(168,140,4,30,'drewno',{r:1}) +
      a.callout('d',170,180,120,40,'oliwka w donicy');
    let br = ''; [[-24,-50],[22,-56],[-6,-70]].forEach(p => br += `M70 150L${70+p[0]} ${214+p[1]-60}`);
    const bad = ground + a.rect(0,200,222,14,'papier',{r:4}) + a.shadow(70,214,20,4) + a.rect(66,150,8,64,'drewno',{r:2}) + a.line(br,'il-ln','stroke-width:3') +
      cloud(160,40,.7) + ci(140,80,3,'papier') + ci(160,96,3,'papier') + ci(185,76,3,'papier') + a.callout('m',72,120,130,130,'mróz');
    const f2 = L(a).compare(ok, bad, ['Oliwnik w gruncie', 'Oliwka w gruncie']);
    return { caption: 'Rośliny na końcu: żywopłot z grabu, kilka drzew, rabaty. Oliwkę ze zdjęcia zastępujemy.', frames: [
      { caption: 'Żywopłot 50–70 cm od ogrodzenia; młode drzewa przy paliku, podlewane 2–3 lata.', svg: S(a, f1, 'Żywopłot przy ogrodzeniu, młode drzewo z palikiem, ogrodnik') },
      { caption: 'Oliwnik wąskolistny znosi mróz; prawdziwa oliwka tylko w donicy, zimą w środku.', svg: S(a, f2, 'Dobrze: srebrzysty oliwnik i oliwka w donicy. Źle: oliwka w gruncie, zmarznięta w śniegu') } ] };
  });

  /* 15 ---------- Pergola, domek, kubły ---------- */
  BUDOWA.addIllus('15-ogrod/pergola-domek', function(a){
    let s = G(a) + a.rect(20,256,190,10,'piasek',{r:3,k:'pi'});
    [44,116].forEach(x => s += a.rect(x-4,196,8,62,'drewno',{r:1}));
    s += a.rect(30,190,100,8,'drewno',{r:1}) + a.rect(36,140,88,50,'drewno',{r:2}) + a.poly([[28,142],[80,104],[132,142]],'dachowka') + a.rect(70,156,20,34,'kmb',{r:2}) +
      a.poly([[128,190],[140,190],[204,254],[188,256]],'poziomica',{k:'zj'}) + a.person(170,262,{s:.6,kask:false,arms:[40,120]});
    [240,330].forEach(x => s += a.shadow(x,262,10,3) + a.rect(x-5,150,10,112,'drewno',{r:1,k:'pe'}));
    for (let x = 228; x < 350; x += 16) s += a.rect(x,144,8,8,'drewno',{r:1});
    s += a.rect(226,152,118,8,'drewno',{r:1}) + ci(250,150,12,'trawa') + ci(280,146,14,'trawa',{cls:'il-dk'}) + ci(316,150,12,'trawa') + a.rect(318,180,8,80,'trawa',{r:4});
    s += a.shadow(420,262,52,5) + a.rect(372,180,8,82,'drewno',{r:1}) + a.rect(460,180,8,82,'drewno',{r:1}) + a.poly([[364,184],[476,184],[470,172],[370,172]],'drewno',{k:'wi'}) +
      a.rect(384,214,22,48,'kmb',{r:3}) + a.rect(410,214,22,48,'xps',{r:3}) + a.rect(436,214,22,48,'poziomica',{r:3});
    const f = s + L(a).scene('', [
      {t:'Piasek pod zjeżdżalnią', at:[110,260], side:'l', y:300, k:'pi'},
      {t:'Pergola z pnączami', at:[285,150], side:'l', y:60, k:'pe'},
      {t:'Wiata na kubły przy bramie', at:[420,178], side:'r', y:84, k:'wi'}]);
    return { caption: 'Domek ze zjeżdżalnią na miękkiej nawierzchni, pergola z pnączami i wiata na 4–5 kubłów przy bramie.',
      svg: S(a, f, 'Domek dla dzieci na palach ze zjeżdżalnią, drewniana pergola z pnączami i wiata na kubły') };
  });
})();
