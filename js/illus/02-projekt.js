/* Ilustracje etapu 02 — Projekt i pozwolenie. Terminy zgodne z docs/DECYZJE.md (projekt ok. 2–3 mies., decyzja do 65 dni + 14 na uprawomocnienie, zawiadomienie min. 7 dni przed startem). */
BUDOWA.addIllus('02-projekt/droga-do-pozwolenia', function(a){
  const S = [[70,282],[190,210],[320,150],[418,90]];
  const stop = (i,icon,k) => a.stop(S[i][0], S[i][1], i+1, {icon: a.icon(icon, S[i][0], S[i][1], 1.15), k:k});
  const s =
    a.road('M8 288Q40 282 70 282C130 282 140 212 190 210C250 208 270 154 320 150C370 146 380 92 418 90L470 88') +
    a.line('M72 258C70 170 90 138 110 138C170 138 240 122 300 140','il-ptr draw','stroke-dasharray:3 6;stroke-width:2.5') +
    a.person(26,282,{s:.62,kask:false,arms:[-20,25]}) +
    stop(0,'mapa','dane') +
    a.stop(110,138,'',{icon:a.icon('prad',110,138,1.15),k:'media'}) + a.pill(110,96,'Media równolegle',{k:'media'}) +
    stop(1,'projekt','proj') + a.pill(190,168,'Projekt',{k:'proj'}) + a.num(190,256,'2–3 mies.',{k:'proj'}) +
    stop(2,'urzad','urz') + a.pill(320,108,'Urząd',{k:'urz'}) + a.num(320,194,'65 + 14 dni',{k:'urz'}) +
    stop(3,'kask','start') + a.pill(408,44,'Start budowy',{k:'start'}) + a.num(418,134,'7 dni',{k:'start'}) +
    a.text(418,162,'po zawiadomieniu',{s:1,a:'middle'}) +
    a.fresh(a.doc(244,236,40,50,{stamp:1}), {d:300}) + a.fresh(a.doc(292,256,32,40,{lines:2}), {d:450});
  return {
    caption: 'Zwykle 3–6 miesięcy. Media (prąd, woda) załatwiasz równolegle z projektem; kredyt na budowę po ostatecznym pozwoleniu.',
    svg: a.svg(s,480,320,'Droga od danych działki przez projekt i urząd do startu budowy')
  };
});

/* Pozostałe kroki etapu 02. Liczby z docs/DECYZJE.md: projekt gotowy 24–38 tys., zabudowa ok. 169 m² (ok. 14%), biol. czynna 60–70%, 65 + 14 dni, zgłoszenie 21 dni, zawiadomienie min. 7 dni, kierownik 7–12 tys. */
(function(){
  // ekran laptopa (x,y = lewy górny róg, rows = szerokości pasków treści)
  const laptop = (a,x,y,rows) => a.rect(x,y,150,96,'blacha',{r:8}) + a.rect(x+8,y+8,134,80,'papier',{r:4}) + a.rect(x-14,y+96,178,10,'blacha',{r:5}) +
    rows.map((w,i) => a.rect(x+18,y+20+i*20,w,10,'szklo',{r:5})).join('');
  // mały dom (parter + dach), x,y = lewy dół
  const house = (a,x,y,s) => a.g(a.poly([[0,-30],[26,-52],[52,-30],[52,0],[0,0]],'bloczek') + a.poly([[-4,-30],[26,-56],[56,-30]],'dachowka') + a.rect(20,-18,12,18,'drewno',{r:1}), {tr:`translate(${x} ${y}) scale(${s||1})`});

  BUDOWA.addIllus('02-projekt/wybor-projektu', function(a){
    const card = (x,t,time,extra) => a.rect(x,50,180,210,'papier',{r:14}) + house(a,x+62,160,1.1) + a.pill(x+90,86,t) + a.num(x+90,200,time) + extra;
    const s = card(40,'Gotowy + adaptacja','6–12 tyg.',a.pill(130,236,'24–38 tys. zł',{k:'cena'}) + a.ok(210,60,16)) + card(260,'Indywidualny','3–5 mies.',a.pill(350,236,'drożej, dłużej',{k:'dr'}));
    return { caption: 'Gotowy projekt z adaptacją: kilkanaście tysięcy taniej i kilka miesięcy szybciej niż projekt od zera.',
      svg: a.svg(s, 480, 320, 'Porównanie: projekt gotowy z adaptacją i projekt indywidualny') };
  });

  BUDOWA.addIllus('02-projekt/zgodnosc-mpzp', function(a){
    const s = a.rect(20,50,300,230,'trawa',{r:10}) + a.line('M50 80H290V250H50Z','il-meas') + a.poly([[90,120],[220,120],[220,215],[90,215]],'bloczek') + a.poly([[220,150],[285,150],[285,215],[220,215]],'beton') +
      a.marker(50,80,1,{k:'l1'}) + a.marker(155,168,2,{k:'l2'}) + a.marker(252,184,3,{k:'l3'}) + a.marker(100,262,4,{k:'l4'}) + a.marker(298,262,5,{k:'l5'}) +
      a.pill(400,70,'1. Linia zabudowy',{k:'l1'}) + a.pill(400,112,'2. Kalenica ok. 8–8,5 m',{k:'l2'}) + a.pill(400,154,'3. Dach 40°',{k:'l3'}) +
      a.pill(400,196,'4. Zabudowa ok. 14%',{k:'l4'}) + a.num(400,238,'5. Biol. czynna 60–70%',{k:'l5'}) + a.text(400,274,'basen się nie liczy',{s:1,a:'middle'});
    return { caption: 'Pięć parametrów sprawdzasz przed adaptacją, nie po odmowie urzędu.', svg: a.svg(s,480,320,'Plan działki z pięcioma parametrami MPZP do sprawdzenia') };
  });

  BUDOWA.addIllus('02-projekt/warunki-przylaczenia', function(a){
    const s = a.rect(0,262,480,40,'zwir',{r:0}) + a.road('M0 282H480') +
      a.cable([[90,262],[90,196],[170,196]],'#e0a800') + a.pipe([[150,262],[150,214],[170,214]],8,'woda') + a.pipe([[210,262],[210,236],[200,236]],8,'kan') +
      house(a,170,200,1.6) +
      a.icon('prad',90,238,1.1) + a.pill(90,160,'Prąd 3×25–32 A',{k:'p'}) + a.icon('urzad',340,100,1.4) +
      a.pill(340,50,'Wnioski równolegle z projektem',{k:'w'}) + a.arrow([[300,100],[260,130]]) + a.num(400,198,'3–8 tyg.',{k:'t'}) +
      a.pill(150,250,'Woda',{k:'w2'}) + a.pill(280,250,'Ścieki: oczyszczalnia',{k:'k'});
    return { caption: 'Operatorzy odpowiadają w 3–8 tygodni, więc wnioski składasz na początku projektu.', svg: a.svg(s,480,320,'Dom z przyłączami prądu, wody i ścieków oraz wniosek do operatorów') };
  });

  BUDOWA.addIllus('02-projekt/pzt', function(a){
    const s = a.rect(0,14,480,36,'zwir',{r:0}) + a.road('M0 32H480') + a.rect(50,70,380,230,'trawa',{r:10}) +
      a.rect(210,56,36,16,'zwir',{r:3}) + a.arrow([[228,40],[228,100],[228,118]]) +
      a.poly([[150,120],[290,120],[290,198],[150,198]],'bloczek') + a.poly([[290,128],[360,128],[360,198],[290,198]],'beton') +
      a.line('M228 198V250','il-ptr draw','stroke-dasharray:3 6') +
      a.pill(130,92,'Wjazd od północy',{k:'wj'}) + a.pill(325,164,'Garaż',{k:'g'}) + a.pill(240,262,'Ogród i taras od południa',{k:'og'}) + a.num(370,284,'ok. 1200 m²',{k:'pow'});
    return { caption: 'PZT to plan z góry: dom, wjazd, przyłącza i odległości od granic. Urząd i geodeta czytają go najuważniej.', svg: a.svg(s,480,320,'Plan zagospodarowania działki: wjazd od północy, dom z garażem, ogród od południa') };
  });

  BUDOWA.addIllus('02-projekt/projekt-budowlany-techniczny', function(a){
    const s = a.fresh(a.doc(40,70,70,90,{lines:3}),{d:100}) + a.fresh(a.doc(120,70,70,90,{lines:4}),{d:250}) + a.fresh(a.doc(290,60,84,110,{lines:6}),{d:400}) +
      a.pill(75,190,'PZT') + a.pill(155,190,'Arch.-bud.') + a.pill(332,190,'Techniczny') +
      a.icon('urzad',116,240,1.3) + a.pill(116,282,'Do urzędu',{k:'u'}) +
      a.icon('kask',332,240,1.3) + a.pill(332,282,'Dla ekip i kierownika',{k:'e'}) + a.num(420,100,'+5–11 tys. zł',{k:'r'}) + a.text(420,128,'wersja rozszerzona',{s:1,a:'middle'});
    return { caption: 'Do urzędu idą PZT i projekt arch.-bud., a wykonawcy pracują na szczegółowym projekcie technicznym.', svg: a.svg(s,480,320,'Trzy części projektu: dwie do urzędu, jedna dla ekip') };
  });

  BUDOWA.addIllus('02-projekt/pozwolenie-czy-zgloszenie', function(a){
    const plot = (x,r,cx) => a.rect(x,60,190,130,'trawa',{r:8}) + house(a,x+70,150,1) + `<circle cx="${cx}" cy="125" r="${r}" style="stroke:var(--il-line);stroke-width:2.5;stroke-dasharray:5 5;fill:none"/>`;
    const s = plot(30,48,125) + plot(260,70,355) + a.ok(125,36,16) + a.bad(355,36,16) +
      a.pill(125,214,'Zgłoszenie',{acc:1}) + a.num(125,250,'21 dni') + a.pill(125,286,'oddziaływanie na działce',{k:'z'}) +
      a.pill(355,214,'Pozwolenie',{acc:1}) + a.num(355,250,'do 65 dni') + a.pill(355,286,'oddziaływanie poza granicą',{k:'p'});
    return { caption: 'Gdy obszar oddziaływania mieści się na twojej działce, zgłoszenie z projektem oszczędza 1–2 miesiące. Wątpliwość = pozwolenie.', svg: a.svg(s,480,320,'Obszar oddziaływania w granicach działki (zgłoszenie) i poza nią (pozwolenie)') };
  });

  BUDOWA.addIllus('02-projekt/wniosek-ebudownictwo', function(a){
    const f1 = a.svg(laptop(a,165,70,[90,60,100]) + a.fresh(a.pill(240,52,'Profil zaufany / mObywatel',{acc:1}),{d:300}) + a.person(70,280,{s:.9,kask:false,arms:[10,60]}), 480,320,'Logowanie do e-Budownictwa profilem zaufanym');
    const f2 = a.svg(a.fresh(a.doc(150,50,110,140,{lines:5,stamp:1}),{d:200}) + a.person(340,280,{s:.9,kask:false,arms:[10,60]}) + a.callout('pod',240,170,420,100,'Podpis architekta',{d:400}) + a.pill(205,240,'Projekt + załączniki'), 480,320,'Architekt podpisuje projekt i załączniki');
    return { caption: 'Wniosek składasz elektronicznie, najczęściej przez architekta jako pełnomocnika.', frames: [
      { caption: 'Logujesz się profilem zaufanym albo przez mObywatela.', svg: f1 }, { caption: 'Architekt podpisuje projekt i załączniki.', svg: f2 },
      { caption: 'Ty oświadczasz o prawie do działki i wniosek idzie do urzędu.', svg: a.svg(laptop(a,40,100,[90,60]) + a.arrow([[220,130],[320,110],[380,120]]) + a.icon('urzad',420,130,1.6) + a.num(420,190,'17–800 zł',{k:'opl'}) + a.pill(240,250,'Oświadczenie o prawie do działki',{k:'o'}), 480,320,'Wniosek z oświadczeniem wysłany do urzędu') }] };
  });

  BUDOWA.addIllus('02-projekt/terminy-i-uprawomocnienie', function(a){
    const seg = (x,y,w,mat,t) => a.rect(x,y,w,34,mat,{r:8}) + a.text(x+w/2,y+22,t,{a:'middle',b:1});
    const s = a.text(40,50,'POZWOLENIE',{b:1}) + seg(40,62,250,'beton','urząd: do 65 dni') + seg(296,62,100,'zwir','odwołanie 14 dni') + a.ok(430,79,14) +
      a.text(40,140,'ZGŁOSZENIE',{b:1}) + seg(40,152,140,'beton','21 dni') + a.ok(214,169,14) +
      a.icon('kalendarz',60,250,1.6) + a.pill(250,236,'Start po decyzji ostatecznej',{k:'s',acc:1}) + a.num(250,276,'ok. 1,5–4 mies.',{k:'t'});
    return { caption: 'Pozwolenie: do 65 dni + 14 dni na uprawomocnienie. Zgłoszenie: 21 dni.', svg: a.svg(s,480,320,'Osie czasu: pozwolenie 65 + 14 dni, zgłoszenie 21 dni') };
  });

  BUDOWA.addIllus('02-projekt/kierownik-budowy', function(a){
    const s = a.ground(0,262,480,58) + a.blocks(250,150,170,112,34,18,'ceramika') +
      a.person(170,264,{s:1.2,arms:[10,70],hold:'<rect x="-4" y="-6" width="22" height="28" rx="3" class="il-m c-papier"/>'}) +
      a.callout('odb',280,170,420,90,'Odbiera zbrojenie, izolacje, strop',{d:300}) + a.num(80,60,'7–12 tys. zł',{k:'c'}) + a.pill(80,96,'cały czas budowy',{k:'t'}) +
      a.fresh(a.ok(335,208,16),{d:600});
    return { caption: 'Kierownik odpowiada za zgodność robót z projektem. Bez niego nie wolno zacząć.', svg: a.svg(s,480,320,'Kierownik budowy w kasku sprawdza murowaną ścianę') };
  });

  BUDOWA.addIllus('02-projekt/dziennik-budowy', function(a){
    const row = (y,who,mat,w) => a.rect(88,y,w,16,mat,{r:8}) + a.pill(250,y+8,who,{a:'start'});
    const s = laptop(a,40,50,[]) + row(78,'inwestor','szklo',40) + row(98,'kierownik','beton',60) + row(118,'geodeta','zwir',50) +
      a.num(115,230,'założenie: ok. 1 godz.',{k:'z'}) + a.pill(360,230,'EDB w e-Budownictwie',{k:'e',acc:1});
    return { caption: 'Dziennik zakłada inwestor po pozwoleniu, a wpisy robią kierownik, geodeta i inni uczestnicy.', svg: a.svg(s,480,320,'Ekran elektronicznego dziennika budowy z wpisami uczestników') };
  });

  BUDOWA.addIllus('02-projekt/zawiadomienie-start', function(a){
    let d = '';
    for (let i = 0; i < 7; i++) d += a.rect(36+i*50,150,44,52,'papier',{r:8}) + a.text(58+i*50,184,i+1,{a:'middle',b:1});
    const s = a.fresh(a.doc(40,30,52,66,{lines:3,stamp:1}),{d:100}) + a.pill(110,60,'Zawiadomienie + oświadczenie kierownika',{a:'start',k:'z'}) + d +
      a.num(190,238,'min. 7 dni',{k:'t'}) + a.move(a.shovel(386,276,1.1),0,-30,{d:500}) + a.pill(386,300,'Pierwsza łopata',{k:'s'});
    return { caption: 'Zawiadomienie idzie do nadzoru budowlanego najpóźniej 7 dni przed startem.', svg: a.svg(s,480,320,'Siedem dni od zawiadomienia do pierwszej łopaty') };
  });

  BUDOWA.addIllus('02-projekt/tablica-informacyjna', function(a){
    const s = a.ground(0,254,480,66) + a.batten(150,170,12,90) + a.batten(318,170,12,90) + a.rect(130,70,220,110,'papier',{r:8}) + a.rect(142,82,196,16,'drewno',{r:4}) +
      [112,128,144,160].map((y,i) => a.line(`M150 ${y}h${i%2 ? 120 : 160}`,'il-docl')).join('') +
      a.person(420,266,{s:1.1,arms:[10,-60]}) + a.pill(240,36,'Dane budowy, kierownik, pozwolenie',{k:'d'}) + a.pill(110,230,'Przy wjeździe',{k:'w'}) + a.num(240,304,'brak tablicy = mandat',{k:'m'});
    return { caption: 'Tablica stoi widocznie od drogi, zanim zaczną się roboty.', svg: a.svg(s,480,320,'Tablica informacyjna budowy przy wjeździe na działkę') };
  });
})();
