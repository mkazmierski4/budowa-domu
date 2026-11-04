/* Ilustracje etapu 16 — Odbiory, zakończenie budowy, przeprowadzka. Liczby z content/16-odbiory.js i docs/DECYZJE.md
   (14 dni na sprzeciw PINB, kontrola do 21 dni przy pozwoleniu, n50 ok. 1,0, geodeta 1,8–3 tys., świadectwo 10 lat, IN-1 14 dni, meldunek 30 dni). */
(function(){
  const V = (a,s,l) => a.svg(s,480,320,l);
  const panel = a => a.rect(20,24,440,262,'papier',{r:10,cls:'il-panel'});
  const floor = a => a.rect(0,282,480,12,'drewno',{r:3});
  // chmurka (wolno jej wisieć)
  const cloud = (a,x,y) => `<path class="il-m c-zwir" d="M${x} ${y}h64a13 13 0 0 0 -6 -25a17 17 0 0 0 -31 -6a14 14 0 0 0 -27 31z"/>`;

  BUDOWA.addIllus('16-odbiory/plan-konca', function(a){
    const st = (x,y,icon,k) => a.stop(x,y,'',{icon,k});
    const s = a.road('M8 284Q40 278 64 272C110 260 128 208 170 202C222 196 244 158 290 152C340 146 360 104 400 98L470 92') +
      a.person(24,284,{s:.62,kask:false,arms:[-20,25]}) +
      st(64,272,a.doc(54,258,20,26,{lines:2}),'pr') + a.pill(64,228,'Protokoły',{k:'pr'}) +
      st(170,202,a.icon('mapa',170,202,1.15),'geo') + a.pill(170,158,'Geodeta i świadectwo',{k:'geo'}) +
      st(290,152,a.icon('kask',290,152,1.15),'kb') + a.pill(290,200,'Kierownik',{k:'kb'}) +
      st(400,98,a.icon('urzad',400,98,1.15),'pinb') + a.pill(400,54,'PINB',{k:'pinb'}) + a.num(400,142,'14 dni',{k:'pinb'}) +
      a.fresh(a.house(452,90,.42),{d:500});
    return { caption: 'Najpierw protokoły i pomiary, potem geodeta i świadectwo, oświadczenie kierownika i zawiadomienie. Po 14 dniach bez sprzeciwu wprowadzasz się.',
      svg: V(a,s,'Droga od protokołów przez geodetę i kierownika do nadzoru budowlanego i domu') };
  });

  BUDOWA.addIllus('16-odbiory/protokoly-instalacji', function(a){
    const meter = '<rect x="-9" y="-12" width="18" height="24" rx="3" class="il-m c-poziomica"/><rect x="-6" y="-9" width="12" height="7" rx="1" class="il-m c-szklo"/>';
    const f1 = panel(a) + floor(a) + a.rect(244,196,30,30,'blacha',{r:6}) + '<circle cx="254" cy="211" r="2.6" class="il-m c-kmb"/><circle cx="264" cy="211" r="2.6" class="il-m c-kmb"/>' +
      a.table(96,282,120,56) + a.fresh(a.doc(72,170,48,56,{lines:3,stamp:1}),{d:300}) +
      a.cable([[296,232],[284,222],[266,214]],'var(--il-bad)') +
      a.person(334,282,{s:1.1,kneel:1,flip:1,arms:[10,80],hold:meter});
    const fan = '<circle cx="210" cy="206" r="36" class="il-m c-maszyna"/><circle cx="210" cy="206" r="8" class="il-m c-blacha"/><path class="il-ln" d="M210 176V236M180 206H240"/>';
    const f2 = panel(a) + floor(a) + a.rect(150,96,120,186,'blacha',{r:3}) + a.rect(160,106,100,176,'bad',{r:2}) + fan +
      a.arrow([[278,236],[330,250],[380,246]]) + a.person(84,282,{s:1.05,kask:false,arms:[10,60],hold:'<rect x="-4" y="-20" width="30" height="20" rx="3" class="il-m c-kmb"/>'});
    return { caption: 'Pomiary i próby robisz na gotowych instalacjach. Protokoły trafiają do kierownika budowy.', frames: [
      { caption: 'Elektryk mierzy każdy obwód po białym montażu i podpisuje protokół z numerem uprawnień.',
        svg: V(a, a.layout.scene(f1, [{t:'Pomiary po białym montażu', at:[259,211], y:52, k:'p'}, {t:'Protokół z podpisem', at:[96,198], y:52, k:'d'}]), 'Elektryk klęczy przy gniazdku z miernikiem, obok protokół na stole') },
      { caption: 'Test n50: wentylator w drzwiach robi podciśnienie, a technik szuka nieszczelności.',
        svg: V(a, a.layout.scene(f2, [{t:'Wentylator w drzwiach', at:[236,190], y:120, k:'w'}]) + a.num(330,52,'cel n50 ok. 1,0'), 'Drzwi z wentylatorem do testu szczelności i technik z laptopem') } ] };
  });

  BUDOWA.addIllus('16-odbiory/kominiarz', function(a){
    const smoke = '<path class="il-m c-zwir" d="M282 96a10 10 0 0 1 8 -16a12 12 0 0 1 22 -4a10 10 0 0 1 6 18z"/><path class="il-m c-zwir" style="opacity:.7" d="M292 68a8 8 0 0 1 6 -13a10 10 0 0 1 18 -2a8 8 0 0 1 4 15z"/>';
    const scene = a.ground(0,282,480,38) + a.house(220,282,1.6) + a.rect(272,104,20,44,'ceramika',{r:1}) + a.rect(268,98,28,8,'beton',{r:2}) +
      a.move(smoke,0,24,{d:200}) + a.person(392,282,{s:1.05,kask:false,arms:[10,60],hold:'<rect x="-4" y="-6" width="20" height="26" rx="3" class="il-m c-papier"/>'});
    const f1 = a.layout.scene(scene, [{t:'Próba dymowa', at:[300,84], y:40, k:'d'}, {t:'Wylot nad dachem', at:[282,104], y:84, k:'w'}]);
    const f2 = panel(a) + a.window(48,58,72,66) + a.num(330,70,'potem co rok') +
      a.layout.table([{at:'l', t:'Kominiarz', k:'k'}, {at:'r', t:'Ty', k:'t'}], a.fresh(a.doc(-26,-50,52,48,{stamp:1,lines:3}),{d:300}));
    return { caption: 'Kominiarz sprawdza komin kominka i wentylację. Protokół to załącznik do zakończenia budowy.', frames: [
      { caption: 'Próba dymowa i ciąg: komin ma być drożny i szczelny, a wylot na właściwej wysokości.', svg: V(a,f1,'Dom z kominem, z którego wydobywa się dym próbny, obok kominiarz') },
      { caption: 'Protokół odbioru przewodów kominowych. Kominek odpalasz dopiero po nim.', svg: V(a,f2,'Kominiarz i inwestor przy stole z protokołem') } ] };
  });

  BUDOWA.addIllus('16-odbiory/geodeta-inwentaryzacja', function(a){
    const f1 = a.ground(0,270,480,50) + a.house(320,270,1.3) +
      a.line('M134 196L238 196','il-ptr draw','stroke-dasharray:3 6') + a.line('M134 196L404 196','il-ptr draw','stroke-dasharray:3 6;opacity:.5') +
      a.marker(250,256,1,{k:'n'}) + a.marker(392,256,2,{k:'n'}) +
      a.tripod(126,270,1.15) + a.person(76,272,{s:1.05,arms:[30,100]});
    const plan = a.rect(48,44,230,236,'papier',{r:8}) + a.line('M68 64H258V260H68Z','il-meas') + a.poly([[100,110],[200,110],[200,190],[100,190]],'bloczek') +
      a.poly([[200,124],[244,124],[244,190],[200,190]],'beton') + a.rect(140,64,36,10,'zwir',{r:2});
    const f2 = a.fresh(plan,{d:100}) + a.arrow([[290,160],[340,150],[384,160]]) + a.icon('urzad',420,170,1.8) + a.pill(400,226,'Do zawiadomienia',{k:'z'}) + a.num(160,300,'2–4 tyg.',{k:'t'});
    return { caption: 'Geodeta mierzy gotowy dom, a mapa z inwentaryzacją jest obowiązkowym załącznikiem do zakończenia budowy.', frames: [
      { caption: 'Pomiar narożników gotowego budynku względem granic działki.', svg: V(a, a.layout.scene(f1, [{t:'Narożniki budynku', at:[250,256], y:44, k:'n'}]) + a.num(380,44,'1,8–3 tys. zł'), 'Geodeta z instrumentem mierzy narożniki domu') },
      { caption: 'Operat trafia do ośrodka dokumentacji, a ty dostajesz mapę do zawiadomienia.', svg: V(a,f2,'Mapa z domem na działce przekazywana do urzędu') } ] };
  });

  BUDOWA.addIllus('16-odbiory/swiadectwo-energetyczne', function(a){
    const mats = ['ok','trawa','poziomica','drewno','bad'];
    let bars = '';
    mats.forEach((m,i) => { bars += a.fresh(a.rect(80,104+i*30,64+i*22,20,m,{r:4}),{d:i*120}); });
    const s = a.shadow(151,292,105,5) + a.rect(56,40,190,250,'papier',{r:8}) + a.rect(72,60,90,8,'beton',{r:4}) + bars + a.poly([[236,114],[252,104],[252,124]],'kmb') +
      a.ground(270,282,210,38) + a.house(380,282,1.1) + a.poly([[394.5,176.2],[430.8,203.1],[435.6,196.7],[399.3,169.8]],'szklo');
    return { caption: 'Świadectwo liczy zużycie energii na ogrzewanie, ciepłą wodę i wentylację. Pompa ciepła, rekuperacja i PV dają wynik wyraźnie lepszy od wymagań.',
      svg: V(a, s + a.callout('w',252,114,300,60,'Nasz dom',{hot:1}) + a.num(400,110,'ważne 10 lat') + a.pill(150,304,'Audytor z wykazu',{k:'a'}), 'Świadectwo z paskami klas energetycznych i dom z panelami') };
  });

  BUDOWA.addIllus('16-odbiory/kierownik-dziennik', function(a){
    const f1 = a.ground(0,270,480,50) + a.house(140,270,1.3) + a.ghost(a.container(380,270,.9)) + a.ghost(a.toilet(456,270,.9)) +
      a.person(264,272,{s:1.05,arms:[10,70],hold:'<rect x="-4" y="-6" width="20" height="26" rx="3" class="il-m c-papier"/>'}) + a.fresh(a.ok(380,200,18),{d:400});
    const sig = a.line('M262 196q8 -12 14 0t14 -2t12 -4','il-ln draw','stroke-width:2.5');
    const f2 = panel(a) + floor(a) + a.table(200,282,260,70) + a.laptop(160,212,2.4) + a.rect(134,146,52,8,'papier',{r:4}) + a.rect(134,162,36,8,'papier',{r:4}) +
      a.doc(250,148,64,64,{lines:2}) + a.fresh(sig,{d:300}) + a.person(400,282,{s:1.1,arms:[10,-50]});
    return { caption: 'Kierownik sprawdza komplet i teren, podpisuje oświadczenie i robi końcowy wpis w elektronicznym dzienniku.', frames: [
      { caption: 'Teren uprzątnięty: bez kontenera, toalety i gruzu.', svg: V(a, a.layout.scene(f1, [{t:'Kontener i toaleta znikają', at:[380,230], y:44, k:'t'}]), 'Kierownik budowy na uprzątniętej działce, kontener i toaleta zabrane') },
      { caption: 'Oświadczenie kierownika i końcowy wpis w EDB.', svg: V(a, a.layout.scene(f2, [{t:'Wpis w EDB', at:[160,160], y:52, k:'e'}, {t:'Oświadczenie kierownika', at:[300,180], y:52, k:'o'}]), 'Laptop z dziennikiem budowy i podpisane oświadczenie kierownika') } ] };
  });

  BUDOWA.addIllus('16-odbiory/zakonczenie-budowy', function(a){
    const D = 380/45;
    const s = a.layout.timeline([{t:'14 dni', len:14, k:'z'}], {x:40, y:84, w:14*D, h:40, title:'Zawiadomienie', end:'ok'}) +
      a.pill(290,104,'zwykle bez opłat',{k:'o'}) +
      a.layout.timeline([{t:'kontrola do 21 dni', len:21, k:'k'}, {t:'decyzja', len:10, k:'d'}, {t:'14 dni', len:14, k:'u'}], {x:40, y:184, w:45*D, h:40, title:'Pozwolenie na użytkowanie', end:'ok'}) +
      a.icon('urzad',62,280,1.6) + a.pill(100,280,'Zamieszkać po upływie terminu',{k:'m',acc:1,a:'start'});
    return { caption: 'Zawiadomienie: 14 dni od doręczenia. Pozwolenie na użytkowanie: kontrola, decyzja i jej uprawomocnienie, orientacyjnie 1–2 miesiące.',
      svg: V(a,s,'Osie czasu: zawiadomienie 14 dni, pozwolenie na użytkowanie kontrola, decyzja i 14 dni') };
  });

  BUDOWA.addIllus('16-odbiory/adres-podatek', function(a){
    const f1 = a.ground(0,282,480,38) + a.house(210,282,1.7) + a.fresh(a.label(244,252,60,26,'nr 12','beton'),{d:300}) +
      a.icon('urzad',62,200,1.8) + a.person(400,282,{s:1.1,kask:false,flip:1,arms:[10,120]});
    // przekrój poddasza: ścianka kolankowa 1 m, dach 40°; strefy 0% / 50% / 100% wysokości
    const z = (p,m,k) => a.poly(p,m,{k});
    const f2 = a.rect(40,270,400,12,'beton',{r:2}) + a.rect(48,230,12,40,'ceramika',{r:1}) + a.rect(420,230,12,40,'ceramika',{r:1}) +
      z([[60,270],[79,270],[79,214],[60,230]],'zwir','z0') + z([[401,270],[420,270],[420,230],[401,214]],'zwir','z0') +
      z([[79,270],[117,270],[117,182],[79,214]],'poziomica','z5') + z([[363,270],[401,270],[401,214],[363,182]],'poziomica','z5') +
      z([[117,270],[363,270],[363,182],[240,79],[117,182]],'trawa','z1') +
      a.poly([[36,236],[240,56],[444,236],[426,236],[240,79],[54,236]],'dachowka');
    return { caption: 'Numer porządkowy nadaje gmina. Do podatku zgłaszasz dom w 14 dni od zakończenia budowy (IN-1).', frames: [
      { caption: 'Wniosek o numer do gminy; tabliczka na domu, widoczna od ulicy.', svg: V(a, a.layout.scene(f1, [{t:'Wniosek o numer', at:[62,200], y:44, k:'w'}, {t:'Numer na elewacji', at:[302,254], y:44, k:'n'}]), 'Dom z tabliczką numeru porządkowego i urząd gminy') },
      { caption: 'Poddasze do podatku: poniżej 1,40 m nie liczysz, 1,40–2,20 m liczysz w 50%, wyżej w 100%.', svg: V(a, a.layout.scene(f2, [{t:'poniżej 1,40 m: 0%', at:[68,250], y:40, k:'z0'}, {t:'1,40–2,20 m: 50%', at:[96,236], y:84, k:'z5'}, {t:'powyżej 2,20 m: 100%', at:[260,200], y:40, k:'z1'}]) + a.num(240,304,'IN-1 w 14 dni'), 'Przekrój poddasza ze strefami liczonymi w 0, 50 i 100 procentach') } ] };
  });

  BUDOWA.addIllus('16-odbiory/media-docelowe', function(a){
    const X = [70,183,297,410], Y = 150;
    const ic = (i,inner) => a.g(inner,{tr:`translate(${X[i]} ${Y}) scale(1.15)`});
    const drop = '<path class="il-m c-woda" d="M0 -13q-10 13 -9 18a9 9 0 0 0 18 0q1 -5 -9 -18z"/>';
    const tank = '<rect x="-12" y="-6" width="24" height="16" rx="6" class="il-m c-beton"/><rect x="-4" y="-12" width="8" height="7" rx="2" class="il-m c-kmb"/>';
    const bin = '<rect x="-9" y="-8" width="18" height="20" rx="2" class="il-m c-trawa"/><rect x="-11" y="-12" width="22" height="5" rx="2" class="il-m c-kmb"/>';
    const it = [{icon:a.icon('prad',X[0],Y,1.15), t:'Prąd: taryfa', k:'p'}, {icon:ic(1,drop), t:'Woda', k:'w'}, {icon:ic(2,tank), t:'Oczyszczalnia', k:'o'}, {icon:ic(3,bin), t:'Odpady', k:'s'}];
    const s = a.layout.steps(it, {y:Y}) + a.pill(240,64,'Z umów budowlanych na domowe',{k:'u'}) + a.num(240,276,'deklaracja śmieciowa: 14 dni',{k:'s'});
    return { caption: 'Prąd z taryfy budowlanej na domową, woda dla gospodarstwa, zgłoszona oczyszczalnia i deklaracja śmieciowa w 14 dni od zamieszkania.',
      svg: V(a,s,'Cztery umowy na media: prąd, woda, oczyszczalnia i odpady') };
  });

  BUDOWA.addIllus('16-odbiory/ubezpieczenie-domu', function(a){
    const A0 = [230,113], d = [99,73.5], n = [.6,-.8], p = t => [A0[0]+d[0]*t, A0[1]+d[1]*t];
    const pv = [p(.2), p(.75)], q = (pt,k) => [pt[0]+n[0]*k, pt[1]+n[1]*k];
    const pump = a.shadow(372,272,28,5) + a.rect(350,234,46,38,'blacha',{r:4}) + '<circle cx="368" cy="253" r="12" class="il-m c-maszyna"/>';
    const main = a.ground(0,272,480,48) + a.fresh('<path class="il-zone" d="M64 272A176 206 0 0 1 416 272Z"/>',{d:200}) +
      a.house(230,272,1.5) + a.poly([pv[0],pv[1],q(pv[1],10),q(pv[0],10)],'szklo') + pump + a.fresh(a.shield(240,52,.8),{d:300});
    const s = a.layout.scene(main, [{t:'Mury i stałe elementy', at:[190,236], y:150, k:'m'}, {t:'PV i pompa ciepła', at:[372,246], y:120, k:'u'}, {t:'Cesja na bank', at:[262,52], y:52, k:'c', hot:1}]) + a.num(240,300,'1–2 tys. zł/rok');
    return { caption: 'Polisa domu startuje najpóźniej w dniu wprowadzki. Suma murów to koszt odbudowy, nie cena z działką.',
      svg: V(a,s,'Dom z panelami i pompą ciepła pod kloszem polisy z cesją na bank') };
  });

  BUDOWA.addIllus('16-odbiory/bank-rozliczenie', function(a){
    const s = panel(a) + a.num(330,62,'marża w dół po dokumentach') +
      a.layout.table([{at:'l', t:'Ty', k:'t'}, {at:'r', t:'Doradca', k:'d'}],
        a.fresh(a.doc(-62,-46,40,44,{stamp:1,lines:2}),{d:200}) + a.fresh(a.doc(-14,-46,40,44,{lines:3}),{d:350}) + a.laptop(54,-2,1));
    return { caption: 'Ostatnia transza po odbiorach, a potem dokumenty zakończenia budowy i polisa z cesją. Sprawdź w umowie, co kończy okres wyższej marży.',
      svg: V(a,s,'Inwestor i doradca bankowy przy stole z dokumentami i laptopem') };
  });

  BUDOWA.addIllus('16-odbiory/dokumentacja-gwarancje', function(a){
    const phone = '<rect x="-24" y="0" width="48" height="80" rx="7" class="il-m c-kmb"/><rect x="-20" y="5" width="40" height="68" rx="4" class="il-m c-szklo"/>';
    const f1 = a.blocks(30,30,420,252,42,21,'ceramika') + floor(a) +
      a.pipe([[110,282],[110,150],[280,150]],10,'woda') + a.cable([[200,30],[200,112],[330,112]],'var(--il-poziomica)') +
      a.label(110,236,190,22,'miarka w kadrze','poziomica') + a.hand(392,150,{hold:phone});
    const binder = (x,m,n) => a.rect(x,118,44,104,m,{r:4}) + a.rect(x+8,132,28,24,'papier',{r:3});
    const f2 = panel(a) + floor(a) + a.table(240,282,300,60) + binder(150,'drewno','1') + binder(200,'blacha','2') + binder(250,'trawa','3') +
      a.fresh(a.doc(304,170,44,52,{lines:3}),{d:300}) + cloud(a,370,90);
    return { caption: 'Teczka domu: projekt ze zmianami, protokoły, gwarancje i zdjęcia instalacji. Kopia cyfrowa w dwóch miejscach.', frames: [
      { caption: 'Zdjęcia instalacji przed tynkiem, z miarką w kadrze: po latach wiesz, gdzie wolno wiercić.', svg: V(a, a.layout.scene(f1, [{t:'Zdjęcie przed tynkiem', at:[392,240], y:290, k:'f'}]), 'Dłoń z telefonem fotografuje rury i przewody na murze przed tynkiem') },
      { caption: 'Trzy segregatory: projekt i mapy, protokoły, gwarancje. Wszystko także w chmurze.', svg: V(a, a.layout.scene(f2, [{t:'1. Projekt i mapy', at:[172,140], y:52, k:'1'}, {t:'2. Protokoły', at:[222,190], y:100, k:'2'}, {t:'3. Gwarancje', at:[272,190], y:150, k:'3'}, {t:'Kopia w chmurze', at:[400,80], y:52, k:'c'}]), 'Trzy segregatory na stole i kopia w chmurze') } ] };
  });

  BUDOWA.addIllus('16-odbiory/usterki-rekojmia', function(a){
    const lamp = (x,y,r) => `<g transform="translate(${x} ${y}) rotate(${r})"><rect x="-8" y="-4" width="34" height="14" rx="4" class="il-m c-kmb"/><rect x="24" y="-6" width="10" height="18" rx="3" class="il-m c-poziomica"/></g>`;
    const okS = a.rect(40,10,160,200,'papier',{r:4}) + a.poly([[60,208],[200,40],[200,120]],'poziomica',{st:'opacity:.35'}) +
      a.line('M70 60q30 -8 60 0t60 0M70 110q30 -8 60 0t60 0M70 160q30 -8 60 0t60 0','il-ln','opacity:.6') + a.rect(0,210,222,10,'drewno',{r:3}) + lamp(46,206,-50);
    const badS = a.rect(40,10,160,200,'papier',{r:4}) + '<circle cx="120" cy="110" r="48" class="il-m c-poziomica" style="opacity:.35"/>' + a.rect(0,210,222,10,'drewno',{r:3}) + lamp(110,196,-90);
    const row = (y,ok,t) => (ok ? a.ok(86,y,10) : a.bad(86,y,10)) + a.rect(104,y-6,ok ? 120 : 150,12,'papier',{r:6,cls:'il-dk'}) + a.text(240,y+5,t,{s:1});
    const f2 = a.shadow(176,284,130,5) + a.rect(56,40,240,240,'papier',{r:8}) + a.rect(76,60,110,8,'beton',{r:4}) + row(104,1,'') + row(144,0,'') + row(184,0,'') + row(224,1,'') +
      a.num(390,100,'14–30 dni') + a.text(390,128,'na usunięcie',{s:1,a:'middle'}) + a.pill(390,200,'Kaucja 5–10%',{k:'k'}) + a.text(390,228,'do przeglądu po roku',{s:1,a:'middle'});
    return { caption: 'Przed ostatnią płatnością: odbiór z każdym wykonawcą, protokół usterek z terminami i zatrzymana kaucja.', frames: [
      { caption: 'Światło puszczone wzdłuż ściany pokazuje falowanie gładzi. Na wprost nie widać nic.', svg: V(a, a.layout.compare(okS, badS, ['Latarka z boku', 'Latarka na wprost']), 'Porównanie: latarka z boku pokazuje nierówności, na wprost nie') },
      { caption: 'Każda usterka w protokole: miejsce, zdjęcie, termin, podpisy obu stron.', svg: V(a,f2,'Protokół usterek z pozycjami do poprawy, termin i kaucja') } ] };
  });

  BUDOWA.addIllus('16-odbiory/przeprowadzka', function(a){
    const box = (x,y) => a.rect(x,y,46,36,'piasek',{r:3}) + a.line(`M${x+4} ${y+12}h38`,'il-jt');
    const f1 = a.ground(0,272,480,48) + a.house(380,272,1.4) + a.shadow(86,272,60,6) + box(40,236) + box(90,236) + box(64,200) +
      a.rect(250,268,88,6,'papier',{r:2}) +
      a.move(a.person(230,272,{s:1.1,kask:false,arms:[70,80],hold:'<rect x="-4" y="-26" width="40" height="32" rx="3" class="il-m c-piasek"/>'}),-70,0,{d:150});
    const phone = '<rect x="-46" y="0" width="92" height="150" rx="10" class="il-m c-kmb"/><rect x="-40" y="7" width="80" height="134" rx="6" class="il-m c-szklo"/>' +
      '<rect x="-30" y="22" width="60" height="10" rx="5" class="il-m c-papier"/><rect x="-30" y="42" width="44" height="10" rx="5" class="il-m c-papier"/>';
    const f2 = a.hand(240,108,{s:1.2,hold:phone}) + a.fresh(a.ok(240,252,20),{d:400}) + a.pill(25,150,'Meldunek online',{k:'m',a:'start'}) + a.num(390,150,'do 30 dni',{k:'t'}) + a.pill(25,236,'Dowód bez zmian',{k:'d',a:'start'});
    return { caption: 'Przeprowadzka po 14 dniach od zawiadomienia i po odbiorze usterek. Meldunek do 30 dni.', frames: [
      { caption: 'Ciężkie meble i AGD przewozi firma, drobne rzeczy wozisz sam. Podłogi i schody zabezpieczone.', svg: V(a, a.layout.scene(f1, [{t:'Kartony i meble', at:[86,210], y:60, k:'k'}]) + a.num(380,52,'1,2–2,5 tys. zł'), 'Osoba niesie karton do nowego domu') },
      { caption: 'Meldunek przez internet albo w urzędzie gminy. Adresu w dowodzie osobistym nie ma.', svg: V(a,f2,'Dłoń z telefonem i potwierdzeniem zameldowania') } ] };
  });

  BUDOWA.addIllus('16-odbiory/przeglady-pierwszy-rok', function(a){
    const W = 380, q = W/4;
    let filters = '';
    for (let i = 0; i < 4; i++) filters += a.fresh(a.rect(40+i*q+6,112,26,18,'welna',{r:3,k:'f'}),{d:i*150});
    const s = a.layout.timeline([{t:'zima',len:3},{t:'wiosna',len:3},{t:'lato',len:3},{t:'jesień',len:3}], {x:40, y:166, w:W, h:36, title:'Pierwszy rok w domu', end:'ok'}) +
      filters + a.pill(130,70,'Filtry rekuperacji co 3–6 mies.',{k:'f'}) +
      a.marker(40+q*1.5,228,1,{k:'pc'}) + a.pill(40+q*1.5,264,'Serwis pompy ciepła',{k:'pc'}) +
      a.marker(40+q*3.5,228,2,{k:'km'}) + a.pill(40+q*3.5-30,264,'Kominiarz przed sezonem',{k:'km'}) +
      a.num(455,30,'po roku: przegląd domu i kaucje',{k:'r',a:'end'});
    return { caption: 'Filtry co 3–6 miesięcy, serwis pompy co rok, kominiarz przed sezonem grzewczym. Przed rocznicą odbioru przegląd całego domu.',
      svg: V(a,s,'Oś roku z przeglądami: filtry, serwis pompy ciepła, kominiarz i przegląd po roku') };
  });
})();
