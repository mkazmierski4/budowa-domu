/* Ilustracje etapu 03 — Przygotowanie terenu i przyłącza. Liczby z docs/DECYZJE.md (ogrodzenie ok. 60 m, brama min. 4 m, droga 0/63 25–30 cm ok. 120 m² szer. min. 3,5 m, humus 30 cm ok. 190 m³ w hałdzie, dom 13 × 9,5 m, przyłącza w jednym wykopie poniżej 1,0–1,2 m). */
(function(){
  const truck = (a,x,y,s) => a.g(a.rect(0,-34,70,26,'blacha',{r:5}) + a.rect(70,-44,34,36,'dachowka',{r:6}) + a.poly([[2,-40],[60,-40],[52,-70],[8,-62]],'maszyna') +
    '<circle cx="18" cy="-4" r="9" class="il-m c-maszyna"/><circle cx="52" cy="-4" r="9" class="il-m c-maszyna"/><circle cx="88" cy="-4" r="9" class="il-m c-maszyna"/>', {tr:`translate(${x} ${y}) scale(${s||1})`});
  const house = (a,x,y,s) => a.g(a.poly([[0,-30],[26,-52],[52,-30],[52,0],[0,0]],'bloczek') + a.poly([[-4,-30],[26,-56],[56,-30]],'dachowka') + a.rect(20,-18,12,18,'drewno',{r:1}), {tr:`translate(${x} ${y}) scale(${s||1})`});
  const sec = (a,y) => a.rect(20,y,440,320-y,'ziemia',{r:0}) + a.rect(20,y-4,440,10,'trawa',{r:4});

  BUDOWA.addIllus('03-przygotowanie/start-formalny', function(a){
    const item = (x,icon,t,k) => a.fresh(a.doc(x,70,72,92,{lines:3,stamp:1}),{d:x*3}) + a.pill(x+36,190,t,{k:k});
    const s = item(36,'','Kierownik','k') + item(150,'','Dziennik','d') + item(264,'','Zawiadomienie','z') + a.arrow([[340,120],[390,120]]) + a.icon('kask',420,120,1.5) +
      a.num(300,236,'min. 7 dni przed startem',{k:'t'}) + a.pill(110,278,'Inspektor na kluczowych odbiorach: +4–8 tys. zł',{a:'start',k:'i'});
    return { caption: 'Godzina papierkowej roboty przed pierwszym wykopem. Kierownik, tablica i zawiadomienie są policzone w etapie 02.', svg: a.svg(s,480,320,'Trzy dokumenty przed startem: kierownik, dziennik, zawiadomienie') };
  });

  BUDOWA.addIllus('03-przygotowanie/ogrodzenie', function(a){
    const panel = (x,y) => a.line(`M${x} ${y}h60v-70h-60z`,'il-ln','stroke-width:2.5') + a.line(`M${x} ${y-35}h60M${x+20} ${y}v-70M${x+40} ${y}v-70`,'il-jt') + a.rect(x-4,y-2,12,6,'beton',{r:2}) + a.rect(x+52,y-2,12,6,'beton',{r:2});
    const f1 = a.svg(a.ground(0,260,480,60) + panel(120,262) + panel(184,262) + a.move(panel(248,262),70,-30) + a.person(380,262,{s:1.1,arms:[10,-50]}) + a.num(240,60,'ok. 60 m paneli',{k:'p'}) + a.pill(240,92,'wokół strefy budowy, nie całej działki',{k:'s'}), 480,320,'Dwie osoby ustawiają panele ogrodzenia budowy');
    const f2 = a.svg(a.ground(0,260,480,60) + panel(30,262) + panel(94,262) + panel(320,262) + panel(384,262) + a.dim(160,230,314,230,'brama min. 4 m',{dy:-34}) + truck(a,200,258,.8) + a.ok(240,150,16) + a.pill(240,300,'Wjedzie ciężarówka',{k:'w'}), 480,320,'Brama co najmniej 4 m szerokości, którą wjeżdża ciężarówka');
    return { caption: 'Panele kupujesz i po budowie odsprzedajesz za ok. 50–60% (koszt 3–6 tys. zł).', frames: [
      { caption: 'Panele na stopkach ustawia pół dnia 2 osoby.', svg: f1 }, { caption: 'W ogrodzeniu zostaw bramę min. 4 m dla ciężarówek.', svg: f2 }] };
  });

  BUDOWA.addIllus('03-przygotowanie/droga-dojazdowa', function(a){
    const base = a.rect(20,200,440,80,'ziemia',{r:0}) + a.rect(20,196,440,10,'trawa',{r:4});
    const f1 = a.svg(base + a.fresh(a.rect(20,196,440,5,'papier',{r:1}),{d:100}) + a.move(a.person(110,196,{s:.9,arms:[10,60]}),0,0) + a.callout('gw',330,198,400,120,'Geowłóknina',{d:300}) + a.pill(240,60,'Droga ok. 120 m², szer. min. 3,5 m',{k:'d'}), 480,320,'Na zdjętej ziemi rozłożona geowłóknina');
    const f2 = a.svg(base + a.rect(20,196,440,5,'papier',{r:1}) + a.move(a.rect(60,166,360,30,'zwir',{r:4}),0,-50) + a.dim(450,166,450,196,'25–30 cm',{dx:-34,dy:-40}) + a.callout('kr',200,180,160,100,'Kruszywo 0/63',{d:400}) + a.person(60,166,{s:.8,arms:[0,40],hold:'<g transform="rotate(10)"></g>'}), 480,320,'Warstwa kruszywa 0/63 o grubości 25–30 cm');
    const f3 = a.svg(base + a.rect(60,166,360,30,'zwir',{r:4}) + a.rect(60,196,360,5,'papier',{r:1}) + a.move(truck(a,170,170,1.1),-120,0) + a.num(280,60,'do ok. 30 t',{k:'t'}) + a.ok(240,110,16) + a.pill(240,250,'Po zagęszczeniu walcem',{k:'w'}), 480,320,'Zagęszczona droga, po której jedzie ciężarówka z betonem');
    return { caption: 'Droga ma unieść gruszkę do ok. 30 t. Po budowie kruszywo zostaje jako podbudowa podjazdu (6–10 tys. zł).', frames: [
      { caption: 'Zdejmujesz ziemię i rozkładasz geowłókninę.', svg: f1 }, { caption: 'Sypiesz kruszywo 0/63 warstwą 25–30 cm.', svg: f2 }, { caption: 'Zagęszczasz walcem i wjeżdża beton.', svg: f3 }] };
  });

  BUDOWA.addIllus('03-przygotowanie/zaplecze', function(a){
    const s = a.ground(0,254,480,66) + a.rect(60,140,200,114,'blacha',{r:4}) + a.rect(60,132,200,12,'maszyna',{r:3}) + a.rect(80,170,54,84,'maszyna',{r:3}) + a.rect(180,170,60,40,'szklo',{r:3}) +
      a.rect(120,196,10,18,'dachowka',{r:2}) + a.rect(310,160,64,94,'szklo',{r:6}) + a.rect(304,150,76,14,'drewno',{r:4}) + a.rect(322,186,14,22,'papier',{r:3}) +
      a.callout('kon',160,150,100,70,'Kontener 20′',{d:200}) + a.callout('wc',350,170,430,96,'Toaleta z serwisem',{d:350}) + a.num(240,296,'7,5–13 tys. zł',{k:'c'}) + a.pill(110,290,'na kłódkę',{k:'k'});
    return { caption: 'Kontener z wynajmu i toaleta przenośna z serwisem. Dobre ekipy bez tego nie pracują.', svg: a.svg(s,480,320,'Kontener budowlany i toaleta przenośna na działce') };
  });

  BUDOWA.addIllus('03-przygotowanie/prad', function(a){
    const s = a.ground(0,254,480,66) + a.rect(36,100,10,154,'drewno',{r:2}) + a.rect(16,108,50,6,'drewno',{r:2}) + a.cable([[40,110],[110,180],[170,230]],'#222') +
      a.rect(140,170,70,60,'blacha',{r:6}) + a.rect(150,180,50,30,'papier',{r:3}) + a.ok(175,196,10) + a.rect(150,230,10,24,'maszyna',{r:2}) + a.rect(190,230,10,24,'maszyna',{r:2}) +
      a.cable([[210,200],[300,230],[340,238]],'#e0a800') + a.mixer(370,230,1.1) + a.callout('rozd',175,176,150,90,'Rozdzielnia z RCD 30 mA',{d:300}) +
      a.num(400,100,'3×25–32 A',{k:'a'}) + a.pill(400,134,'przyłącze docelowe',{k:'p'}) + a.pill(330,300,'rury rezerwowe w wykopie',{k:'r'});
    return { caption: 'Przyłącze docelowe służy od pierwszych dni do betoniarki i wibratora. Operator potrzebuje 2–6 miesięcy, więc zamów wcześnie.', svg: a.svg(s,480,320,'Słup, rozdzielnia budowlana i betoniarka zasilana z przyłącza') };
  });

  BUDOWA.addIllus('03-przygotowanie/woda', function(a){
    const s = sec(a,90) +
      a.pipe([[60,208],[420,208]],14,'woda') + a.cable([[60,222],[420,222]],'#e0a800') + a.pipe([[60,236],[420,236]],8,'rura') +
      a.dim(440,90,440,208,'1,0–1,2 m',{dx:-40,dy:-20}) + a.line('M30 90H450','il-ptr','stroke-dasharray:4 6') + a.pill(120,70,'poziom terenu',{k:'t'}) +
      a.callout('pe',180,208,120,150,'Woda PE 32–40',{d:200}) + a.callout('pr',260,222,330,266,'Prąd',{d:350}) + a.callout('sw',230,236,160,290,'Światłowód',{d:500}) +
      a.rect(390,160,36,46,'beton',{r:4}) + a.pill(395,140,'studnia wodomierzowa',{k:'s',a:'middle'});
    return { caption: 'Jeden wykop na wodę, prąd i światłowód, rura poniżej strefy przemarzania.', svg: a.svg(s,480,320,'Przekrój wykopu z rurą wodociągową, kablem prądowym i rurą na światłowód') };
  });

  BUDOWA.addIllus('03-przygotowanie/humus', function(a){
    const f1 = a.svg(a.rect(30,190,420,90,'ziemia',{r:4}) + a.rect(30,160,420,30,'trawa',{r:4}) + a.move(a.shovel(150,150,1.3),0,-40) + a.person(300,160,{s:.9,arms:[10,60]}) +
      a.dim(60,160,60,190,'30 cm',{dx:34}) + a.callout('h',360,175,410,90,'Humus',{d:300}) + a.pill(240,246,'Podglebie',{k:'p'}), 480,320,'Zdejmowanie warstwy humusu o grubości 30 cm');
    const f2 = a.svg(a.ground(0,250,480,70) + a.fresh(a.poly([[50,250],[100,170],[170,170],[220,250]],'trawa'),{d:100}) + a.fresh(a.poly([[270,250],[320,180],[380,180],[430,250]],'ziemia'),{d:300}) +
      a.pill(135,140,'Humus',{k:'h'}) + a.pill(350,150,'Podglebie',{k:'p'}) + a.ok(245,220,14) + a.num(240,290,'ok. 190 m³ w hałdzie',{k:'v'}), 480,320,'Dwie osobne hałdy: humus i podglebie');
    const f3 = a.svg(a.ground(0,250,480,70) + a.poly([[40,250],[120,150],[200,150],[260,250]],'trawa') + a.poly([[40,250],[100,200],[130,170],[200,150],[260,250]],'ziemia',{cls:'il-ghost'}) + a.ok(150,110,16) + a.dim(300,150,300,250,'1,5–2 m',{dx:44}) +
      a.fresh(a.pill(380,200,'Nie mieszaj z gruzem',{k:'g'}),{d:300}) + a.bad(420,160,14) + a.pill(150,290,'Hałda do 1,5–2 m',{k:'w'}), 480,320,'Hałda humusu nie wyższa niż 1,5–2 m');
    return { caption: 'Humus wraca do ogrodu w etapie 15. Zdjęcie 500 m² × 30 cm kosztuje 3–6 tys. zł.', frames: [
      { caption: 'Koparka zdejmuje 30 cm humusu.', svg: f1 }, { caption: 'Humus i podglebie odkładasz osobno.', svg: f2 }, { caption: 'Hałda do 1,5–2 m, bez gruzu i śmieci.', svg: f3 }] };
  });

  // paliki i geodeta w aksonometrii: dom 13 × 9,5 m = 130 × 95 w jednostkach rysunku
  BUDOWA.addIllus('03-przygotowanie/wytyczenie', function(a){
    const P = a.iso(260,90,1.05), C = [[35,52],[165,52],[165,147],[35,147]];
    const base = P.box(0,0,-10,200,200,10,'trawa') + P.line([[35,52,0],[165,52,0],[165,147,0],[35,147,0],[35,52,0]],'il-ln','stroke-dasharray:6 5');
    const stake = c => P.box(c[0]-3,c[1]-3,0,6,6,32,'drewno') + P.box(c[0]-3,c[1]-3,32,6,6,5,'dachowka');
    const tripod = a.line('M66 252L82 196L98 252M82 196V160','il-ln','stroke-width:3') + a.rect(70,146,26,16,'maszyna',{r:4});
    const f1 = a.svg(base + C.map(stake).join('') + tripod + a.person(40,262,{s:.9,arms:[10,60]}) + a.dim(P.P(35,160,0)[0],P.P(35,160,0)[1],P.P(165,160,0)[0],P.P(165,160,0)[1],'13 × 9,5 m',{dx:0,dy:36}) + a.callout('pal',P.P(35,52,30)[0],P.P(35,52,30)[1],110,60,'Paliki w narożach',{d:300}), 480,320,'Geodeta wbija paliki w narożnikach domu');
    const f2 = a.svg(base + C.map(stake).join('') + a.fresh(a.doc(330,200,80,100,{lines:4,stamp:1}),{d:200}) + a.pill(370,180,'Wpis w dzienniku',{k:'w'}) + a.num(110,280,'2–3 godz. w terenie',{k:'t'}) + a.pill(110,250,'+ reper wysokościowy',{k:'r'}), 480,320,'Wytyczenie wpisane do dziennika budowy');
    return { caption: 'Geodeta przenosi dom z papieru na teren. Wytyczenie kosztuje razem z ławami ciesielskimi 2–4,2 tys. zł.', frames: [
      { caption: 'Geodeta wbija paliki w narożnikach domu 13 × 9,5 m.', svg: f1 }, { caption: 'Wytyczenie wpisuje do dziennika budowy.', svg: f2 }] };
  });

  BUDOWA.addIllus('03-przygotowanie/lawy-ciesielskie', function(a){
    const P = a.iso(240,64,.82);
    const ground = P.box(0,0,-10,200,200,10,'trawa') + P.face([[50,55,0],[150,55,0],[150,145,0],[50,145,0]],'ziemia');
    const post = (x,y) => P.box(x,y,0,4,4,34,'drewno');
    const posts = [[20,20],[20,176],[176,20],[176,176]].map(q => post(q[0],q[1])).join('');
    const boards = P.box(20,20,26,4,160,8,'drewno') + P.box(176,20,26,4,160,8,'drewno') + P.box(20,20,26,160,4,8,'drewno') + P.box(20,176,26,160,4,8,'drewno');
    const strings = [55,145].map(v => P.line([[v,22,36],[v,178,36]],'il-ln','stroke:var(--il-bad);stroke-width:1.6') + P.line([[22,v,36],[178,v,36]],'il-ln','stroke:var(--il-bad);stroke-width:1.6')).join('');
    const d1 = P.P(20,100,30), d2 = P.P(50,100,0);
    const f1 = a.svg(ground + posts + a.fresh(boards,{d:100}) + a.dim(d1[0]-10,d1[1]+18,d2[0]-10,d2[1]+18,'1,5–2 m',{dx:-20,dy:30}) + a.pill(380,60,'Deski na słupkach',{k:'d'}) + a.pill(380,96,'za krawędzią wykopu',{k:'w'}), 480,320,'Deski na słupkach 1,5–2 m za krawędzią wykopu');
    const f2 = a.svg(ground + posts + boards + a.fresh(strings,{d:100}) + a.pill(380,60,'Żyłki wyznaczają osie ścian',{k:'z',a:'middle'}) + a.num(380,100,'przekątne 16,10 m',{k:'p'}), 480,320,'Żyłki rozciągnięte między ławami pokazują osie ścian');
    const f3 = a.svg(a.rect(70,150,16,130,'drewno',{r:2}) + a.rect(330,150,16,130,'drewno',{r:2}) + a.board(50,120,320,30) + a.level(110,106,220) + a.rect(200,126,60,14,'dachowka',{r:2}) + a.text(230,138,'±0,00',{a:'middle',b:1}) +
      a.callout('lv',230,120,400,70,'Poziom domu',{d:300}) + a.fresh(a.hand(150,90,{r:-10,s:.7}),{d:200}) + a.ok(232,200,14), 480,320,'Znak poziomu ±0,00 na ławie ciesielskiej');
    return { caption: 'Ławy ciesielskie wyznaczają osie i poziom ±0,00 całego domu. Kontroluj przekątne (16,10 m).', frames: [
      { caption: 'Ławice stawiasz 1,5–2 m za krawędzią wykopu.', svg: f1 }, { caption: 'Żyłki między deskami pokazują osie ścian.', svg: f2 }, { caption: 'Na desce zaznaczasz poziom ±0,00 poziomicą.', svg: f3 }] };
  });

  BUDOWA.addIllus('03-przygotowanie/kanalizacja', function(a){
    const opt = (x,t,sub,hot) => a.rect(x,50,140,220,'papier',{r:14}) + house(a,x+14,130,.9) + a.pipe([[x+34,130],[x+34,170],[x+110,170]],8,'kan') + a.pill(x+70,32,t,{acc:hot}) + a.text(x+70,244,sub,{s:1,a:'middle'});
    const s = opt(20,'Sieć gminna','8–16 tys. zł',0) + a.rect(110,160,36,22,'zwir',{r:3}) + opt(170,'Oczyszczalnia','18–30 tys. zł',1) + a.rect(260,158,50,30,'beton',{r:6}) + a.drops(268,166,3) + a.ok(240,60,16) +
      opt(320,'Szambo','stały wywóz',0) + a.rect(410,158,36,30,'maszyna',{r:6}) + a.pill(240,296,'Rekomendacja: oczyszczalnia ok. 5 RLM',{k:'r'});
    return { caption: 'Na działce referencyjnej nie ma sieci, więc oczyszczalnia. Przy kanalizacji w drodze przełączasz się na przyłącze gminne.', svg: a.svg(s,480,320,'Trzy sposoby odprowadzenia ścieków: sieć, oczyszczalnia, szambo') };
  });

  BUDOWA.addIllus('03-przygotowanie/gaz', function(a){
    const s = a.ground(0,254,480,66) + house(a,120,254,2.4) + a.pipe([[10,270],[90,270],[110,262]],8,'rura') + a.bad(60,236,18) + a.num(60,300,'0 zł',{k:'z'}) +
      a.rect(300,196,50,56,'blacha',{r:6}) + '<circle cx="325" cy="224" r="15" class="il-m c-maszyna"/><path class="il-ln" d="M325 224l8 -8M325 224l-8 -8M325 224l8 8M325 224l-8 8"/>' +
      a.pill(325,172,'Pompa ciepła',{k:'pc'}) + a.rect(380,214,58,12,'maszyna',{r:3}) + a.pill(409,190,'Płyta indukcyjna',{k:'pl'}) + a.pill(240,52,'Dom bez gazu',{k:'d',acc:1}) + a.pill(240,92,'kominek na drewno + PV',{k:'k'});
    return { caption: 'Pompa ciepła i indukcja zastępują gaz. Unikasz przyłącza, stałej opłaty i komina dla kotła.', svg: a.svg(s,480,320,'Dom bez przyłącza gazu: pompa ciepła i płyta indukcyjna') };
  });

  BUDOWA.addIllus('03-przygotowanie/swiatlowod', function(a){
    const s = sec(a,90) + a.pipe([[40,190],[440,190]],14,'woda') + a.pipe([[40,214],[440,214]],18,'rura') + a.line('M40 214H440','il-ptr draw','stroke-dasharray:2 8;stroke-width:3') +
      a.pipe([[40,246],[440,246]],12,'rura') + a.pipe([[40,266],[440,266]],12,'rura') + a.cable([[40,164],[440,164]],'#e0a800') +
      a.callout('hd',200,214,330,130,'Rura HDPE 40–50 mm z linką',{d:200}) + a.callout('rez',260,256,380,296,'1–2 rury rezerwowe',{d:400}) +
      a.num(100,60,'1–4 tys. zł',{k:'c'}) + a.pill(100,92,'w jednym wykopie',{k:'w'});
    return { caption: 'Kable w ziemi układa się raz: rurę na światłowód i rezerwy kładziesz razem z wodą i prądem.', svg: a.svg(s,480,320,'Przekrój wykopu z rurą osłonową na światłowód i rurami rezerwowymi') };
  });
})();
