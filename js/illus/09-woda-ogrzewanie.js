/* Ilustracje etapu 09 — Woda, kanalizacja, ogrzewanie. Liczby zgodne z treścią kroków i docs/DECYZJE.md
   (pion Ø110, spadki 2–3%, Ø160 do oczyszczalni, reduktor 3–4 bar, podłogówka 10–15 cm, próba ok. 6 bar / 3 bar,
   pompa ok. 8 kW monoblok przy ścianie bocznej, zasobnik 300 l, bez bufora, kominek 6–9 kW). */
(function(){
  const S = (a, s, l) => a.svg(s, 480, 320, l);
  const R = n => Math.round(n*10)/10;
  // rura po krzywej (path d), kind: kan | woda | cieplo | rura
  const tube = (d, w, kind, draw) => `<path class="il-pipe p-${kind}${draw ? ' draw' : ''}" d="${d}" style="stroke-width:${w}"/>`;
  // jednostka zewnętrzna pompy ciepła; x,y = środek podstawy
  const pcUnit = (a, x, y, s) => a.g(a.shadow(0,0,48,6) + a.rect(-36,-14,8,14,'blacha') + a.rect(28,-14,8,14,'blacha') +
    a.rect(-46,-76,92,62,'blacha',{r:6}) + '<circle cx="-10" cy="-45" r="22" class="il-ring"/><path class="il-jt" d="M-10 -67V-23M-32 -45H12"/>' +
    a.rect(22,-68,16,46,'papier',{r:3}), {tr:`translate(${x} ${y}) scale(${s || 1})`});
  // manometr: v w barach (skala 0–10)
  const gauge = (a, x, y, r, v) => { const t = (135 + v*27)*Math.PI/180; let tk = '';
    for (let i = 0; i <= 10; i += 2){ const u = (135 + i*27)*Math.PI/180; tk += `M${R(x+Math.cos(u)*r*.72)} ${R(y+Math.sin(u)*r*.72)}L${R(x+Math.cos(u)*r*.9)} ${R(y+Math.sin(u)*r*.9)}`; }
    return `<circle cx="${x}" cy="${y}" r="${r}" class="il-m c-papier"/><circle cx="${x}" cy="${y}" r="${r}" class="il-ring"/><path class="il-ln" d="${tk}"/>` +
      `<path class="il-ln" d="M${x} ${y}L${R(x+Math.cos(t)*r*.68)} ${R(y+Math.sin(t)*r*.68)}" style="stroke-width:3.5"/><circle cx="${x}" cy="${y}" r="4" class="il-m c-kmb"/>`; };
  const fire = (a, x, y) => a.poly([[x-22,y],[x-16,y-26],[x-6,y-14],[x,y-38],[x+8,y-16],[x+16,y-28],[x+22,y]],'bad') + a.poly([[x-12,y],[x-4,y-16],[x+4,y-8],[x+12,y]],'poziomica');
  const tubShape = (a, x1, x2, y1, y2) => `<path class="il-m c-papier" d="M${x1} ${y1}H${x2}Q${x2-4} ${y2} ${x2-36} ${y2}H${x1+36}Q${x1+4} ${y2} ${x1} ${y1}Z"/>`;

  /* 1. Plan i kolejność ------------------------------------------------ */
  BUDOWA.addIllus('09-woda-ogrzewanie/plan-instalacji', function(a){
    const ic = [
      x => a.pipe([[x-9,140],[x-9,155],[x+11,155]],7,'kan'),
      x => a.pipe([[x-11,145],[x+11,145]],4,'woda') + a.pipe([[x-11,155],[x+11,155]],4,'cieplo'),
      x => a.trowel(x-8,148,.6),
      x => a.pipe([[x-11,142],[x+11,142],[x+11,150],[x-11,150],[x-11,158],[x+11,158]],3,'cieplo'),
      x => a.rect(x-12,146,24,10,'beton',{r:2})
    ];
    const xs = [70,155,240,325,410];
    const s = a.text(240,52,'Kolejność prac',{b:1,a:'middle'}) +
      a.layout.steps(['Kanalizacja','Woda','Tynki (etap 11)','Podłogówka','Wylewka (etap 11)'].map((t,i) => ({t, icon: ic[i](xs[i]), k:'s'+i}))) +
      a.num(240,272,'Hydraulik przed tynkarzem');
    return { caption:'Najpierw rury w ścianach, potem tynki, a podłogówka tuż przed wylewką. Zdjęcia tras z miarką rób przed każdym zakryciem.', svg:S(a,s,'Pięć kroków: kanalizacja, woda, tynki, podłogówka, wylewka') };
  });

  /* 2. Piony i wentylacja ------------------------------------------------ */
  function pion1(a){
    const house = a.ground(0,262,480,58) + a.rect(150,250,190,12,'beton',{r:1}) + a.rect(150,140,10,112,'ceramika',{r:0}) + a.rect(330,140,10,112,'ceramika',{r:0}) +
      a.rect(150,158,190,10,'beton',{r:1}) + a.poly([[128,150],[245,40],[362,150],[350,156],[245,54],[140,156]],'dachowka');
    const fix = tubShape(a,196,256,124,152) + a.rect(206,214,40,6,'papier') + a.rect(210,220,30,30,'drewno',{r:1});
    const s = house + fix +
      a.pipe([[300,264],[300,282],[470,292]],12,'kan') +
      a.pipe([[226,153],[298,156]],6,'rura') + a.pipe([[226,240],[298,244]],6,'rura') +
      a.pipe([[300,282],[300,66]],12,'rura') + a.fresh(a.rect(290,56,20,10,'blacha',{r:2}),{d:500}) + a.rect(292,218,16,12,'blacha') +
      a.pipe([[180,262],[180,124]],10,'rura') + a.fresh(a.rect(172,108,16,16,'blacha',{r:4}),{d:700});
    return a.layout.scene(s, [
      {t:'Wywiewka nad dach', at:[300,60], side:'r', y:40, k:'wyw'},
      {t:'Pion Ø110', at:[300,190], side:'r', k:'pion', hot:1},
      {t:'Rewizja', at:[308,224], side:'r', k:'rew'},
      {t:'Zawór', sub:'napowietrzający', at:[172,116], side:'l', y:96, k:'zaw'},
      {t:'Spadek 2–3%', at:[240,154], side:'l', y:200, k:'sp'} ]);
  }
  function siphon(a, full){
    return tube('M70 20V130Q70 168 108 168Q146 168 146 130V100', 24, 'rura') +
      (full ? tube('M70 116V130Q70 160 108 160Q146 160 146 130V116', 12, 'woda') : '') + a.rect(40,8,60,10,'papier',{r:3});
  }
  function pion2(a){
    const ok = siphon(a,1) + a.text(110,214,'woda w syfonie',{s:1,a:'middle'});
    const smell = '<path class="il-ln" d="M100 120q-8 -12 0 -24t0 -24M120 116q-8 -12 0 -24t0 -24" style="stroke-width:2.5"/>';
    const bad = siphon(a,0) + a.fresh(smell,{d:400}) + a.text(110,214,'pusty syfon: zapach',{s:1,a:'middle'});
    return a.layout.compare(ok, bad, ['Pion z wentylacją', 'Bez wentylacji']);
  }
  BUDOWA.addIllus('09-woda-ogrzewanie/kanalizacja-piony', function(a){
    return { caption:'Co najmniej jeden pion wychodzi ponad dach, pozostałe kończą się zaworem napowietrzającym.', frames:[
      { caption:'Pion Ø110 zbiera ścieki z obu kondygnacji, na dole ma rewizję.', svg:S(a,pion1(a),'Przekrój domu z pionem kanalizacyjnym wyprowadzonym ponad dach') },
      { caption:'Bez wentylacji spływ z WC wysysa wodę z syfonów i wraca zapach.', svg:S(a,pion2(a),'Dobrze: syfon z wodą. Źle: pusty syfon i zapach') } ] };
  });

  /* 3. Wanna wolnostojąca i wyspa --------------------------------------- */
  function wanna(a){
    let dots = '';
    for (let x = 206; x <= 312; x += 22) dots += `<circle cx="${x}" cy="190" r="4" class="il-m c-bad"/>`;
    for (let x = 30; x <= 46; x += 16) dots += `<circle cx="${x}" cy="190" r="4" class="il-m c-bad"/>`;
    const s = a.rect(20,236,330,28,'beton',{r:0}) + a.rect(20,200,330,36,'eps',{r:0}) + a.rect(20,180,330,20,'beton',{r:0}) + dots +
      a.fresh(a.pipe([[125,180],[125,222],[322,230]],8,'rura'),{d:300}) +
      a.pipe([[330,300],[330,70]],16,'rura') + tubShape(a,60,190,130,180) +
      a.dim(125,104,330,104,'do ok. 2–3 m',{d:700}) + a.num(200,292,'spadek min. 2%',{d:900});
    return a.layout.scene(s, [
      {t:'Wanna wolnostojąca', at:[90,150], side:'l', y:60, k:'wan'},
      {t:'Odpływ Ø50', at:[260,228], side:'r', y:230, k:'odp', hot:1},
      {t:'Pion Ø110', at:[330,150], side:'r', y:150, k:'pion'} ]);
  }
  function wyspa(a){
    const s = a.rect(0,276,480,44,'eps',{r:0}) + a.rect(0,256,480,20,'beton',{r:0}) +
      a.rect(150,204,180,52,'drewno',{r:2}) + a.rect(192,212,96,40,'papier',{r:2}) + a.rect(142,196,196,10,'beton',{r:2}) + a.rect(198,190,60,7,'blacha',{r:2}) +
      a.pipe([[228,196],[228,228],[248,228],[248,288],[470,296]],8,'rura') +
      a.fresh(a.pipe([[248,228],[272,228],[272,218]],5,'rura') + a.rect(265,206,14,12,'blacha',{r:3}),{d:500});
    return a.layout.scene(s, [
      {t:'Wyspa kuchenna', at:[160,214], side:'l', y:150, k:'wys'},
      {t:'Zawór', sub:'napowietrzający', at:[278,210], side:'r', y:120, k:'zaw', hot:1},
      {t:'Odpływ Ø50 w podłodze', at:[330,292], side:'l', y:292, k:'odp'} ]);
  }
  BUDOWA.addIllus('09-woda-ogrzewanie/podejscia-kanalizacyjne', function(a){
    return { caption:'Wannę, baterię i odpływy wybierz przed hydraulikiem: odpływ wyjdzie dokładnie pod otworem.', frames:[
      { caption:'Odpływ wanny biegnie w warstwie podłogi do pionu, ze spadkiem 2%.', svg:S(a,wanna(a),'Przekrój podłogi poddasza: wanna wolnostojąca, odpływ ze spadkiem do pionu') },
      { caption:'Wyspa: odpływ z posadzki i zawór napowietrzający w szafce.', svg:S(a,wyspa(a),'Wyspa kuchenna z odpływem w podłodze i zaworem napowietrzającym') } ] };
  });

  /* 4. Odejście do oczyszczalni ----------------------------------------- */
  BUDOWA.addIllus('09-woda-ogrzewanie/odejscie-do-oczyszczalni', function(a){
    const s = a.rect(0,124,480,196,'ziemia',{r:0}) + a.rect(0,120,480,8,'trawa',{r:0}) +
      a.rect(0,40,62,84,'ceramika',{r:0}) + a.rect(14,124,48,110,'beton',{r:0}) + a.rect(62,104,10,20,'xps',{r:0}) +
      a.rect(76,150,236,7,'xps',{r:2}) +
      a.rect(140,116,28,72,'blacha',{r:3}) + a.rect(136,112,36,8,'kmb',{r:2}) +
      a.rect(330,160,120,92,'xps',{r:24}) + a.rect(374,112,32,50,'xps',{r:4}) + a.rect(370,108,40,8,'kmb',{r:2}) +
      tube('M62 172L140 178M168 180L332 196', 12, 'kan', 1) +
      a.num(110,272,'spadek min. 1,5–2%',{d:700});
    const lab = a.callout('st',154,116,200,60,'Studzienka rewizyjna',{d:400}) +
      a.callout('ocz',390,108,455,40,'Oczyszczalnia (etap 03)',{d:500}) +
      a.callout('rura',250,188,250,288,'PVC-KG Ø160',{hot:1,d:600});
    return { caption:'Rura Ø160 leży na piasku ze stałym spadkiem. Płytko pod ziemią przykrywa ją XPS, a przy domu stoi studzienka rewizyjna.', svg:S(a,s+lab,'Rura kanalizacyjna od domu przez studzienkę do oczyszczalni') };
  });

  /* 5. Rury wody --------------------------------------------------------- */
  function press(a){
    const end = '<circle cx="40" cy="180" r="12" class="il-m c-papier"/><circle cx="40" cy="180" r="9" class="il-m c-blacha"/><circle cx="40" cy="180" r="6.5" class="il-m c-papier"/><circle cx="40" cy="180" r="4.5" class="il-m c-woda"/>';
    const tool = a.rect(222,150,56,16,'maszyna',{r:4}) + a.rect(222,194,56,16,'maszyna',{r:4}) + a.rect(238,58,24,94,'maszyna',{r:6}) + a.rect(272,166,6,28,'maszyna',{r:2});
    const s = a.ground(0,262,480,58) +
      a.rect(92,192,22,70,'drewno',{r:2}) + a.rect(380,192,22,70,'drewno',{r:2}) + a.pipe([[40,180],[230,180]],24,'rura') + a.pipe([[270,180],[440,180]],24,'rura') + end + a.rect(224,166,52,28,'blacha',{r:4}) +
      a.move(tool + a.hand(250,108,{s:.9}), 0, -40) + a.num(360,120,'16 mm do punktu',{d:800});
    return a.layout.scene(s, [
      {t:'PE-RT / Al / PE', at:[40,192], side:'l', y:236, k:'rura'},
      {t:'Złączka zaprasowywana', at:[250,194], side:'r', y:236, k:'zl', hot:1} ]);
  }
  function rury2(a){
    const floor = a.rect(10,126,202,24,'beton',{r:2}) + a.rect(10,150,202,40,'eps',{r:2});
    const ok = floor + a.rect(10,132,202,16,'welna',{r:8}) + a.pipe([[14,140],[208,140]],7,'cieplo') + a.text(111,216,'cały odcinek w otulinie',{s:1,a:'middle'});
    const bad = floor + a.pipe([[14,140],[208,140]],7,'cieplo') + a.rect(98,130,26,20,'blacha',{r:3}) + a.fresh(a.drops(98,160,3),{d:400}) + a.text(111,216,'przeciek pod jastrychem',{s:1,a:'middle'});
    return a.layout.compare(ok, bad, ['Rura bez łączeń', 'Złączka w posadzce']);
  }
  BUDOWA.addIllus('09-woda-ogrzewanie/rury-wodne', function(a){
    return { caption:'Rury wielowarstwowe łączy się praską. Złączki tylko w dostępnych miejscach, nigdy pod jastrychem.', frames:[
      { caption:'Praska zaciska złączkę na rurze wielowarstwowej.', svg:S(a,press(a),'Praska zaciska złączkę na rurze PE-RT/Al/PE') },
      { caption:'Ciepła woda w otulinie, w podłodze bez złączek.', svg:S(a,rury2(a),'Dobrze: rura w otulinie bez łączeń. Źle: złączka w posadzce przecieka') } ] };
  });

  /* 6. Węzeł wodny i rozdzielacze --------------------------------------- */
  BUDOWA.addIllus('09-woda-ogrzewanie/rozdzielacze-wody', function(a){
    let outs = '';
    [300,330,360,390,420].forEach((x,i) => { outs += a.fresh(a.pipe([[x,128],[x,284]],7,'woda'),{d:500+i*120}); });
    const s = a.rect(10,20,460,262,'papier',{r:10,cls:'il-panel'}) + a.rect(0,282,480,38,'beton',{r:0}) +
      a.pipe([[40,300],[40,120],[290,120]],12,'woda') +
      a.rect(60,108,18,24,'blacha',{r:3}) + a.rect(56,98,28,7,'bad',{r:3}) +
      a.rect(104,108,34,20,'blacha',{r:3}) + a.rect(108,128,26,52,'szklo',{r:8}) +
      a.rect(170,108,22,26,'blacha',{r:3}) + a.pipe([[181,108],[181,98]],4,'rura') + gauge(a,181,80,16,3.5) +
      a.rect(216,112,20,16,'blacha',{r:3}) +
      a.rect(286,110,150,18,'blacha',{r:9}) + outs;
    const lab = a.pill(121,214,'Filtr',{k:'f'}) + a.num(181,40,'3–4 bar',{d:400}) + a.pill(360,80,'Rozdzielacz',{k:'r'}) + a.pill(360,250,'Każdy punkt osobno',{k:'p'});
    return { caption:'Od ściany: zawór główny, filtr, reduktor z manometrem, zawór antyskażeniowy i rozdzielacz. Każdy punkt ma własną rurę i zawór.', svg:S(a,s+lab,'Węzeł wodny na ścianie pomieszczenia technicznego z rozdzielaczem') };
  });

  /* 7. Podłogówka --------------------------------------------------------- */
  function spiral(x1,y1,x2,y2,d){ const p = [[x1,y1]];
    while (x2-x1 > 2*d && y2-y1 > 2*d){ p.push([x2,y1],[x2,y2],[x1,y2],[x1,y1+d]); x1 += d; y1 += d; x2 -= d; y2 -= d; p.push([x1,y1]); }
    return p; }
  function floorIso(a, P, pipes){
    let s = P.box(-8,0,0,8,160,70,'bloczek') + P.box(0,-8,0,240,8,70,'bloczek') +
      P.box(0,0,-20,240,160,20,'beton') + P.box(0,0,0,240,160,15,'eps') +
      P.box(0,0,15,240,2,8,'folia') + P.box(0,0,15,2,160,8,'folia');
    s += a.fresh(P.face([[2,2,15.5],[240,2,15.5],[240,160,15.5],[2,160,15.5]],'folia'),{d:200});
    s += P.box(0,14,30,3,46,26,'blacha');
    if (pipes){
      const z = q => q.map(p => [p[0],p[1],16]);
      s += P.line(z([[1,24],[24,24]].concat(spiral(24,24,226,148,18))),'il-pipe p-cieplo draw','stroke-width:3.5') +
        P.line(z([[1,48],[33,48]].concat(spiral(33,33,217,139,18))),'il-pipe p-woda draw','stroke-width:3.5');
    }
    return s;
  }
  function pd1(a){
    const P = a.iso(235,96,.85), e = P.P(40,160,8), f = P.P(40,110,16), t = P.P(200,1,20), k = P.P(205,120,15);
    return a.layout.scene(floorIso(a,P,0) + a.person(k[0],k[1],{kneel:1,s:.8,arms:[40,80]}), [
      {t:'Styropian EPS', sub:'etap 11', at:[e[0],e[1]], side:'l', y:250, k:'eps'},
      {t:'Folia z siatką', at:[f[0],f[1]], side:'l', y:150, k:'fol', hot:1},
      {t:'Taśma dylatacyjna', at:[t[0],t[1]], side:'r', y:60, k:'tas'} ]);
  }
  function pd2(a){
    const P = a.iso(235,96,.85), r = P.P(0,36,48), c = P.P(130,80,16);
    return a.layout.scene(floorIso(a,P,1) + a.num(c[0]+80,300,'pętla do ok. 80–100 m',{d:900}), [
      {t:'Rozdzielacz', at:[r[0],r[1]], side:'l', y:60, k:'roz'},
      {t:'Ślimak co 10–15 cm', at:[c[0],c[1]], side:'r', y:120, k:'sl', hot:1} ]);
  }
  BUDOWA.addIllus('09-woda-ogrzewanie/podlogowka', function(a){
    return { caption:'Zasilanie i powrót biegną obok siebie w ślimaku, więc podłoga grzeje równo. Rozstaw 10 cm w łazienkach i przy oknach, 15 cm w pokojach.', frames:[
      { caption:'Na styropianie leży folia z siatką, a przy ścianach taśma dylatacyjna.', svg:S(a,pd1(a),'Podłoga z warstwą styropianu, folią i taśmą dylatacyjną') },
      { caption:'Rurę układasz w ślimak i podpinasz do rozdzielacza.', svg:S(a,pd2(a),'Rura podłogówki ułożona w ślimak, podłączona do rozdzielacza na ścianie') } ] };
  });

  /* 8. Próba ciśnieniowa ------------------------------------------------- */
  function proba(a, v, cover){
    let loops = '';
    for (let i = 0; i < 5; i++){ const x = 92 + i*40; loops += a.pipe([[x,126],[x,276]],5,'cieplo') + a.pipe([[x+14,150],[x+14,276]],5,'woda'); }
    return a.rect(10,20,460,262,'papier',{r:10,cls:'il-panel'}) + a.rect(0,276,480,44,'eps',{r:0}) + loops +
      a.rect(70,118,240,14,'blacha',{r:7}) + a.rect(70,142,240,14,'blacha',{r:7}) +
      a.pipe([[310,125],[380,125],[380,118]],6,'rura') + gauge(a,380,84,36,v) + (cover || '');
  }
  BUDOWA.addIllus('09-woda-ogrzewanie/proba-przed-wylewka', function(a){
    const f1 = proba(a,6) + a.num(380,160,'6 bar · 24 h',{d:500}) + a.callout('m',356,70,180,54,'Manometr',{d:400});
    const f2 = proba(a,3, a.move(a.rect(0,256,480,64,'beton',{r:0}),0,40)) + a.num(380,160,'3 bar przy wylewaniu',{d:500}) +
      a.callout('j',160,266,180,214,'Jastrych (etap 11)',{d:700});
    return { caption:'Ciśnienie próby i czas podaje producent rur. Wynik trafia do protokołu i dziennika budowy.', frames:[
      { caption:'Pętle pod ciśnieniem ok. 6 bar przez ok. 24 h: wskazówka nie może spaść.', svg:S(a,f1,'Rozdzielacz podłogówki z manometrem wskazującym 6 bar') },
      { caption:'Przy wylewaniu jastrychu rury trzymają ok. 3 bar.', svg:S(a,f2,'Jastrych zalewa rury, manometr wskazuje 3 bar') } ] };
  });

  /* 9. Łazienka na poddaszu ---------------------------------------------- */
  BUDOWA.addIllus('09-woda-ogrzewanie/lazienka-poddasze', function(a){
    let dots = '', bars = '';
    [40,60,80,100,120,140,346,366,386,406,426].forEach(x => { dots += `<circle cx="${x}" cy="243" r="4" class="il-m c-bad"/>`; });
    for (let y = 116; y <= 200; y += 14) bars += a.rect(402,y,34,4,'blacha',{r:2});
    const s = a.rect(20,250,440,14,'beton',{r:0}) + a.rect(20,236,440,14,'beton',{r:0}) + dots +
      a.poly([[20,170],[284,0],[318,0],[20,196]],'welna') + a.rect(20,190,14,46,'ceramika',{r:0}) + a.rect(440,0,16,236,'ceramika',{r:0}) +
      tubShape(a,170,320,186,236) + a.rect(190,232,8,6,'blacha') + a.rect(292,232,8,6,'blacha') +
      a.fresh(a.rect(402,108,6,104,'blacha',{r:3}) + a.rect(430,108,6,104,'blacha',{r:3}) + bars,{d:300}) + a.rect(414,220,10,10,'papier',{r:2});
    const lab = a.layout.scene('', [
      {t:'Drabinka elektryczna', at:[418,108], side:'r', y:60, k:'dr', hot:1},
      {t:'Podłogówka co 10 cm', at:[100,243], side:'l', y:290, k:'pd'},
      {t:'Bez rur pod wanną', at:[245,244], side:'r', y:290, k:'wn'} ]);
    return { caption:'Podłogówka grzeje łazienkę, a drabinka elektryczna suszy ręczniki także latem. Pod wanną wolnostojącą rur nie ma.', svg:S(a,s+lab,'Łazienka na poddaszu ze skosem, wanną wolnostojącą, podłogówką i drabinką') };
  });

  /* 10. Dobór pompy -------------------------------------------------------- */
  function moc(a){
    const heat = a.arrow([[160,180],[130,170],[104,150]],{d:300}) + a.arrow([[220,124],[220,100],[230,76]],{d:450}) + a.arrow([[290,190],[318,184],[338,166]],{d:600});
    return a.ground(0,254,480,66) + a.house(220,254,1.45) + pcUnit(a,370,254,.8) + heat +
      a.num(240,36,'190 m² × 30–45 W/m²',{d:200}) + a.num(240,292,'≈ 6–8 kW',{d:800}) +
      a.callout('pc',370,206,455,120,'Pompa ok. 8 kW',{hot:1,d:900});
  }
  function typy(a){
    const panel = (x, title, inner) => a.rect(x,10,222,300,'papier',{r:14,cls:'il-panel'}) + a.ground(x+8,244,206,56) + a.rect(x+150,70,12,176,'ceramika',{r:0}) +
      a.rect(x+170,140,36,104,'papier',{r:6}) + pcUnit(a,x+70,244,.75) + inner + a.pill(x+111,36,title,{fix:1});
    return panel(12,'Monoblok: do domu woda', a.pipe([[106,198],[188,198],[188,180]],8,'cieplo') + a.pipe([[106,214],[196,214],[196,200]],8,'woda') + a.text(123,286,'wybór',{b:1,a:'middle'})) +
      panel(246,'Split: do domu czynnik', a.pipe([[340,200],[422,200],[422,182]],3,'rura') + a.pipe([[340,210],[430,210],[430,196]],3,'rura') + a.text(357,286,'certyfikat F-gaz',{s:1,a:'middle'}));
  }
  BUDOWA.addIllus('09-woda-ogrzewanie/dobor-pompy-ciepla', function(a){
    return { caption:'Moc liczy projektant z obliczeń strat ciepła (OZC). Wartości tu są orientacyjne.', frames:[
      { caption:'Dom WT2021 traci zimą ok. 30–45 W na m²: razem ok. 6–8 kW.', svg:S(a,moc(a),'Dom traci ciepło, obok pompa ciepła ok. 8 kW') },
      { caption:'Monoblok wprowadza do domu wodę, split czynnik chłodniczy.', svg:S(a,typy(a),'Porównanie: monoblok z rurami wodnymi i split z przewodami chłodniczymi') } ] };
  });

  /* 11. Montaż jednostki zewnętrznej ------------------------------------- */
  function mont(a){
    const s = a.ground(0,240,480,80) + a.rect(10,20,40,220,'ceramika',{r:0}) + a.rect(10,240,40,80,'xps',{r:0}) +
      a.rect(104,232,136,16,'beton',{r:2}) + a.rect(118,200,8,32,'blacha') + a.rect(218,200,8,32,'blacha') +
      a.rect(106,110,128,90,'blacha',{r:6}) + '<circle cx="160" cy="155" r="32" class="il-ring"/><path class="il-jt" d="M160 123V187M128 155H192"/>' +
      a.pipe([[106,140],[50,140]],7,'cieplo') + a.pipe([[106,160],[50,160]],7,'woda') +
      a.fresh(a.pipe([[200,200],[200,286]],5,'rura') + a.rect(184,280,34,36,'zwir',{r:4}),{d:500}) +
      a.arrow([[240,150],[290,140],[340,152]],{d:300}) + a.dim(84,240,84,200,'20–30 cm',{d:700});
    return a.layout.scene(s, [
      {t:'Wylot z dala od okien', at:[330,150], side:'r', y:100, k:'wyl', hot:1},
      {t:'Skropliny do żwiru', at:[214,296], side:'r', y:270, k:'skr'} ]);
  }
  function skropliny(a){
    const unit = a.rect(60,40,100,70,'blacha',{r:5}) + a.rect(72,110,6,30,'blacha') + a.rect(142,110,6,30,'blacha');
    const ok = a.ground(10,140,202,62) + unit + a.pipe([[130,110],[130,180]],5,'rura') + a.rect(114,172,32,26,'zwir',{r:4}) + a.text(111,228,'odpływ poniżej przemarzania',{s:1,a:'middle'});
    const bad = a.ground(10,140,202,62) + a.rect(10,134,202,10,'bloczek',{r:2}) + unit + a.fresh(a.drops(94,116,3) + '<ellipse cx="110" cy="134" rx="46" ry="6" class="il-m c-szklo"/>',{d:400}) + a.text(111,228,'lód przy ścianie',{s:1,a:'middle'});
    return a.layout.compare(ok, bad, ['Skropliny do żwiru', 'Skropliny na kostkę']);
  }
  BUDOWA.addIllus('09-woda-ogrzewanie/montaz-pompy', function(a){
    return { caption:'Jednostka stoi na fundamencie przy ścianie bocznej, z odstępem od ściany według producenta.', frames:[
      { caption:'Fundament, konsola ok. 20–30 cm nad terenem i wylot powietrza od domu.', svg:S(a,mont(a),'Jednostka zewnętrzna pompy na konsoli przy ścianie, skropliny do żwiru') },
      { caption:'Przy odszranianiu kapie woda: kieruj ją do żwiru, nie na kostkę.', svg:S(a,skropliny(a),'Dobrze: skropliny do studzienki żwirowej. Źle: lód na kostce') } ] };
  });

  /* 12. Zasobnik CWU i cyrkulacja ---------------------------------------- */
  function tank(a, x, w, top){
    const coil = [];
    for (let i = 0; i < 6; i++) coil.push([x+16, top+130+i*12], [x+w-16, top+136+i*12]);
    return a.rect(x,top,w,272-top,'papier',{r:36}) + a.rect(x+10,top+18,w-20,244-top,'woda',{r:28}) + a.pipe(coil,6,'cieplo');
  }
  function cwu1(a){
    const s = a.rect(0,272,480,48,'beton',{r:0}) + tank(a,170,120,40) +
      a.pipe([[30,170],[186,170]],7,'cieplo') + a.pipe([[30,236],[186,236]],7,'woda') +
      a.pipe([[230,40],[230,22],[420,22]],7,'cieplo') + a.pipe([[290,258],[420,258]],7,'woda') +
      a.fresh(a.rect(326,10,26,26,'blacha',{r:4}) + a.rect(334,0,10,12,'kmb',{r:2}),{d:400}) + a.num(230,120,'300 l');
    return a.layout.scene(s, [
      {t:'Wężownica', sub:'min. ok. 3 m²', at:[214,206], side:'l', y:90, k:'wez', hot:1},
      {t:'Zawór mieszający', at:[339,36], side:'r', y:80, k:'mix'} ]);
  }
  function cwu2(a){
    const clock = '<circle cx="250" cy="110" r="14" class="il-m c-papier"/><circle cx="250" cy="110" r="14" class="il-ring" style="stroke-width:2.5"/><path class="il-ln" d="M250 100V110H258" style="stroke-width:2.5"/>';
    const s = a.rect(0,272,480,48,'beton',{r:0}) + a.rect(470,20,10,252,'ceramika',{r:0}) + tank(a,40,100,60) +
      a.pipe([[90,60],[90,40],[430,40],[430,150]],7,'cieplo') + a.rect(390,150,80,14,'papier',{r:5}) + a.rect(424,138,12,14,'blacha',{r:3}) +
      tube('M418 150V74H160V160H140', 4, 'cieplo', 1) + a.fresh('<circle cx="220" cy="74" r="12" class="il-m c-maszyna"/>' + clock,{d:600}) +
      a.num(90,296,'48–55°C');
    return a.layout.scene(s, [{t:'Cyrkulacja z programem', at:[220,86], side:'r', y:236, k:'cyr', hot:1}]);
  }
  BUDOWA.addIllus('09-woda-ogrzewanie/zasobnik-cwu', function(a){
    return { caption:'Raz w tygodniu zasobnik grzeje się do ok. 60–65°C przeciw bakteriom Legionella. Zawór mieszający chroni przed oparzeniem.', frames:[
      { caption:'Duża wężownica oddaje ciepło z pompy do 300 l wody.', svg:S(a,cwu1(a),'Zasobnik 300 l z wężownicą i zaworem mieszającym') },
      { caption:'Cyrkulacja z programem: ciepła woda w kilka sekund.', svg:S(a,cwu2(a),'Pętla cyrkulacji z pompą i zegarem od zasobnika do umywalki') } ] };
  });

  /* 13. Bufor ---------------------------------------------------------------- */
  function scheme(a, buf){
    let loops = '';
    [250,290,330,370].forEach((x,i) => { loops += a.pipe([[x,162],[x,280]],5,'cieplo') + (i ? a.rect(x-7,138,14,12,'kmb',{r:2}) : ''); });
    const base = a.ground(0,250,130,70) + a.rect(130,40,14,280,'ceramika',{r:0}) + a.rect(144,272,336,48,'beton',{r:0}) + pcUnit(a,64,250,.85);
    if (!buf) return base + a.pipe([[103,206],[230,206],[230,156]],7,'cieplo') + a.rect(226,150,170,12,'blacha',{r:6}) + loops +
      a.ok(250,110,12) + a.callout('sal',250,200,455,236,'Salon bez siłownika',{hot:1,d:500}) + a.pill(300,40,'Bez bufora',{fix:1});
    return base + a.rect(196,110,56,162,'papier',{r:18}) + a.rect(380,180,80,92,'maszyna',{r:4}) + a.rect(390,192,60,46,'szklo',{r:3}) + fire(a,420,236) +
      a.pipe([[103,206],[196,206]],7,'cieplo') + a.pipe([[380,200],[252,200]],7,'cieplo') + a.pipe([[224,272],[224,300],[340,300]],7,'cieplo') +
      a.callout('buf',224,130,300,90,'Bufor',{hot:1,d:400}) + a.callout('kom',420,180,455,140,'Kominek z płaszczem',{d:500}) + a.pill(300,40,'Dwa źródła ciepła',{fix:1});
  }
  BUDOWA.addIllus('09-woda-ogrzewanie/bufor', function(a){
    return { caption:'Bufor ma sens przy dwóch źródłach ciepła albo gdy wszystkie pętle mogą zamknąć się naraz. Rozstrzyga instrukcja producenta pompy.', frames:[
      { caption:'Nasz dom: pompa grzeje podłogówkę wprost, salon zostaje zawsze otwarty.', svg:S(a,scheme(a,0),'Pompa ciepła podłączona wprost do rozdzielacza podłogówki') },
      { caption:'Kominek z płaszczem wodnym wymaga bufora między źródłami.', svg:S(a,scheme(a,1),'Pompa ciepła i kominek z płaszczem podłączone do bufora') } ] };
  });

  /* 14. Kominek ---------------------------------------------------------------- */
  BUDOWA.addIllus('09-woda-ogrzewanie/kominek', function(a){
    const s = a.rect(0,262,480,58,'beton',{r:0}) + a.rect(0,30,30,232,'ceramika',{r:0}) +
      a.rect(222,0,36,124,'ceramika',{r:0}) + a.rect(160,120,160,142,'papier',{r:4}) +
      a.rect(190,168,100,74,'maszyna',{r:4}) + a.rect(200,178,80,54,'szklo',{r:3}) + fire(a,240,230) +
      tube('M0 292H240V262', 12, 'rura', 1) + a.arrow([[40,306],[90,306],[130,306]],{d:400}) +
      a.person(410,262,{sit:1,kask:false,flip:1,arms:[20,60]}) + a.num(240,148,'6–9 kW');
    const lab = a.layout.scene('', [
      {t:'Powietrze z zewnątrz', at:[120,292], side:'l', y:224, k:'pow', hot:1},
      {t:'Komin (etap 05)', at:[258,40], side:'r', y:40, k:'kom'},
      {t:'Wkład zamknięty', at:[290,200], side:'r', y:96, k:'wk'} ]);
    return { caption:'Szczelny wkład z powietrzem z zewnątrz nie walczy z rekuperacją. Obudowa kominka to etap 13.', svg:S(a,s+lab,'Kominek z wkładem zamkniętym, kanał powietrza z zewnątrz pod podłogą') };
  });

  /* 15. Próby i odbiory ---------------------------------------------------- */
  BUDOWA.addIllus('09-woda-ogrzewanie/proby-i-odbiory', function(a){
    const docs = a.doc(-78,-52,40,50,{stamp:1,lines:2}) + a.doc(-20,-52,40,50,{stamp:1,lines:2}) + a.doc(38,-52,40,50,{stamp:1,lines:2});
    const s = a.layout.table([{at:'l', t:'Hydraulik', kask:true, k:'h'}, {at:'r', t:'Kierownik budowy', k:'k'}], docs) +
      a.num(240,40,'4–5 protokołów',{d:400});
    return { caption:'Protokoły prób wody, kanalizacji i podłogówki oraz uruchomienia pompy trafiają do teczki instalacji na odbiór domu.', svg:S(a,s,'Hydraulik i kierownik budowy przy stole z podpisanymi protokołami') };
  });
})();
