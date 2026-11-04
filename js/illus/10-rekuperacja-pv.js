/* Ilustracje etapu 10 — Rekuperacja, fotowoltaika, smart home. Liczby zgodne z treścią kroków i docs/DECYZJE.md
   (wymiana ok. 250–300 m³/h, odzysk ok. 85–90%, rury Ø75–90, czerpnia min. ok. 2 m nad terenem, 14 modułów ≈ 6,4 kWp,
   próg 6,5 kW, falownik hybrydowy w garażu, regulacja ± 10%, filtry co 3–6 mies.).
   Kolory powietrza: zimne = p-woda (niebieskie), ciepłe = p-cieplo. */
(function(){
  const S = (a, s, l) => a.svg(s, 480, 320, l);
  const tube = (d, w, kind, o) => `<path class="il-pipe p-${kind}${o && o.draw ? ' draw' : ''}" d="${d}" style="stroke-width:${w}"${o && o.d ? ` data-d="${o.d}"` : ''}/>`;
  // dom w przekroju: parter + poddasze (bez gruntu), x 70–410, posadzka y 250, strop 170–184
  const sec = a => a.rect(90,250,300,12,'beton',{r:1}) + a.rect(90,142,10,108,'ceramika',{r:0}) + a.rect(380,142,10,108,'ceramika',{r:0}) +
    a.rect(90,170,300,14,'beton',{r:1}) + a.poly([[70,146],[240,30],[410,146],[398,152],[240,44],[82,152]],'dachowka');
  // centrala rekuperacyjna; x,y = środek podstawy
  const unit = (a, x, y, s) => a.g(a.shadow(0,0,30,4) + a.rect(-28,-34,56,34,'blacha',{r:4}) + a.rect(-21,-28,16,22,'papier',{r:2}) +
    '<circle cx="12" cy="-17" r="9" class="il-ring"/><path class="il-jt" d="M12 -26V-8M3 -17H21"/>', {tr:`translate(${x} ${y}) scale(${s || 1})`});
  const anem = (a, x, y) => a.rect(x-9, y, 18, 4, 'blacha', {r:2});
  // moduł PV: x,y lewy górny róg
  const mod = (a, x, y, w, h) => a.rect(x, y, w, h, 'kmb', {r:2}) + a.line(`M${x+w/2} ${y+2}V${y+h-2}M${x+2} ${y+h/2}H${x+w-2}`, 'il-jt');
  const pcUnit = (a, x, y, s) => a.g(a.shadow(0,0,48,6) + a.rect(-36,-14,8,14,'blacha') + a.rect(28,-14,8,14,'blacha') +
    a.rect(-46,-76,92,62,'blacha',{r:6}) + '<circle cx="-10" cy="-45" r="22" class="il-ring"/><path class="il-jt" d="M-10 -67V-23M-32 -45H12"/>', {tr:`translate(${x} ${y}) scale(${s || 1})`});
  const smoke = (d, o) => `<path class="il-ln${o && o.draw ? ' draw' : ''}" d="${d}" style="stroke-width:3;opacity:.55"/>`;
  const fire = (a, x, y) => a.poly([[x-16,y],[x-11,y-20],[x-4,y-10],[x,y-28],[x+6,y-12],[x+12,y-21],[x+16,y]],'bad') + a.poly([[x-9,y],[x-3,y-12],[x+3,y-6],[x+9,y]],'poziomica');

  /* 1. Projekt i bilans ------------------------------------------------- */
  BUDOWA.addIllus('10-rekuperacja-pv/plan-wentylacji', function(a){
    const s = a.ground(0,262,480,58) + sec(a) + a.rect(236,184,6,54,'ceramika',{r:0}) + a.rect(236,96,6,64,'ceramika',{r:0}) +
      unit(a,318,170) +
      tube('M300 168V175H150V186M150 175H124V170', 5, 'woda', {draw:1}) + anem(a,150,184) + a.rect(116,166,16,4,'blacha',{r:2}) +
      tube('M336 168V180H350V186', 5, 'cieplo', {draw:1, d:300}) + anem(a,350,184) +
      a.arrow([[150,198],[190,236],[232,244]],{d:500}) + a.arrow([[250,244],[310,234],[346,200]],{d:800}) +
      a.arrow([[124,158],[180,140],[230,164]],{d:600}) +
      a.num(400,40,'ok. 250–300 m³/h',{d:900});
    return { caption:'Świeże powietrze wpada do pokoi, przepływa pod drzwiami i uchodzi z kuchni i łazienek. Ilość dla każdego pomieszczenia jest w bilansie.',
      svg:S(a, a.layout.scene(s, [
        {t:'Nawiew: pokoje', at:[150,188], side:'l', y:66, k:'naw', hot:1},
        {t:'Szczelina pod drzwiami', at:[239,244], side:'l', y:292, k:'dr'},
        {t:'Centrala', at:[318,150], side:'r', y:100, k:'cen'},
        {t:'Wywiew: kuchnia, łazienki', at:[350,188], side:'r', y:292, k:'wyw'} ]), 'Przekrój domu: nawiew do pokoi, wywiew z kuchni i łazienek, centrala na poddaszu') };
  });

  /* 2. Centrala i wymiennik --------------------------------------------- */
  function box(a, by){
    return a.shadow(240,262,130,8) + a.rect(130,84,220,176,'blacha',{r:10}) + a.rect(140,94,200,156,'papier',{r:6,cls:'il-dk'}) +
      (by ? a.ghost(a.poly([[240,128],[282,170],[240,212],[198,170]],'szklo')) : '');
  }
  const hx = a => a.poly([[240,128],[282,170],[240,212],[198,170]],'szklo') + a.line('M219 149L261 191M229 139L271 181M209 159L251 201','il-jt');
  BUDOWA.addIllus('10-rekuperacja-pv/centrala', function(a){
    const zima = box(a,0) +
      tube('M10 120H160L238 162', 12, 'woda') + tube('M242 162L320 120H470', 12, 'cieplo', {draw:1, d:300}) +
      tube('M470 220H320L242 178', 12, 'cieplo') + tube('M238 178L160 220H10', 12, 'woda', {draw:1, d:500}) + hx(a) +
      a.pill(70,92,'Świeże z zewnątrz',{k:'cz'}) + a.pill(70,250,'Na zewnątrz',{k:'wy'}) +
      a.pill(410,92,'Do pokoi',{k:'na'}) + a.pill(410,250,'Z kuchni i łazienek',{k:'ww'}) +
      a.num(240,290,'odzysk ok. 85–90%',{d:700});
    const lato = box(a,1) +
      tube('M10 120H470', 12, 'woda', {draw:1}) + tube('M470 220H10', 12, 'cieplo', {draw:1, d:300}) +
      a.pill(70,92,'Chłodna noc',{k:'cz'}) + a.pill(410,92,'Do pokoi bez grzania',{k:'na'}) +
      a.num(240,290,'by-pass omija wymiennik',{d:500});
    return { caption:'Strumienie się nie mieszają: ciepło przechodzi przez ścianki wymiennika.', frames:[
      { caption:'Zima: świeże powietrze ogrzewa się od wywiewanego.', svg:S(a,zima,'Centrala zimą: dwa strumienie krzyżują się w wymienniku') },
      { caption:'Lato: by-pass prowadzi chłodne nocne powietrze z pominięciem wymiennika.', svg:S(a,lato,'Centrala latem: powietrze omija wymiennik przez by-pass') } ] };
  });

  /* 3. Miejsce centrali ------------------------------------------------- */
  BUDOWA.addIllus('10-rekuperacja-pv/miejsce-centrali', function(a){
    const s = a.ground(0,262,480,58) + sec(a) + a.rect(272,96,6,74,'ceramika',{r:0}) + a.rect(168,96,144,6,'drewno',{r:1}) +
      unit(a,330,170) + a.fresh(a.ok(300,118,12),{d:300}) +
      a.rect(296,196,28,54,'papier',{r:10}) + a.rect(330,214,40,36,'blacha',{r:3}) + unit(a,250,250,.8) +
      unit(a,240,96,.7) + a.fresh(a.bad(240,56,12),{d:500});
    return { caption:'Centrala stoi w schowku na poddaszu, w strefie ogrzewanej. W pomieszczeniu technicznym brakuje miejsca, a zimny stryszek wymaga ocieplania każdego kanału.',
      svg:S(a, a.layout.scene(s, [
        {t:'Zimny stryszek', at:[226,84], side:'l', y:70, k:'st'},
        {t:'Parter: brak miejsca', at:[250,226], side:'l', y:226, k:'te'},
        {t:'Schowek na poddaszu', at:[330,150], side:'r', y:66, k:'po', hot:1} ]), 'Trzy miejsca na centralę: schowek na poddaszu (dobrze), pomieszczenie techniczne, zimny stryszek (źle)') };
  });

  /* 4. Kanały ------------------------------------------------------------- */
  BUDOWA.addIllus('10-rekuperacja-pv/kanaly', function(a){
    const room = (x,y,w,h,t) => a.rect(x,y,w,h,'papier',{r:4,cls:'il-panel'}) + a.text(x+10,y+22,t,{s:1});
    const blue = [[[226,232],[226,196],[70,196],[70,120]],[[232,232],[232,190],[130,190],[130,90]],[[238,232],[238,184],[190,184],[190,130]],[[244,232],[244,80],[300,80],[300,110]]];
    const red = [[[256,232],[256,170],[420,170],[420,120]],[[262,232],[262,276],[420,276]]];
    let s = room(30,40,200,200,'Salon') + room(240,40,110,120,'Siłownia') + room(360,40,90,160,'Kuchnia') + room(290,250,160,52,'Łazienka');
    blue.forEach((p,i) => { s += a.fresh(a.pipe(p,6,'woda'),{d:200+i*150}); s += a.rect(p[p.length-1][0]-7,p[p.length-1][1]-7,14,14,'blacha',{r:7}); });
    red.forEach((p,i) => { s += a.fresh(a.pipe(p,6,'cieplo'),{d:800+i*150}); s += a.rect(p[p.length-1][0]-7,p[p.length-1][1]-7,14,14,'blacha',{r:7}); });
    s += a.rect(210,226,62,30,'blacha',{r:5}) + a.pipe([[241,256],[241,300]],16,'rura');
    return { caption:'Z rozdzielacza każda rura biegnie do jednego anemostatu. Salon dostaje kilka rur, a dźwięk nie przechodzi z pokoju do pokoju.',
      svg:S(a, a.layout.scene(s + a.num(110,282,'rura Ø75–90',{d:1100}), [
        {t:'Rozdzielacz', sub:'z tłumikiem', at:[241,241], side:'l', y:226, k:'roz', hot:1} ], {top:60}), 'Rzut parteru: rozdzielacz i osobne rury do anemostatów w pokojach') };
  });

  /* 5. Czerpnia i wyrzutnia ---------------------------------------------- */
  BUDOWA.addIllus('10-rekuperacja-pv/czerpnia-wyrzutnia', function(a){
    const s = a.ground(0,262,480,58) + a.poly([[140,262],[140,140],[240,46],[340,140],[340,262]],'bloczek') +
      a.poly([[128,148],[240,36],[352,148],[340,152],[240,50],[140,152]],'dachowka') +
      a.rect(208,30,18,40,'ceramika',{r:1}) + a.rect(204,26,26,6,'beton',{r:1}) + smoke('M217 24q-6 -5 0 -10t2 -8') +
      a.rect(178,140,26,18,'blacha',{r:3}) + a.line('M182 145H200M182 150H200M182 155H200','il-jt') +
      a.rect(282,78,14,24,'blacha',{r:3}) + a.rect(278,74,22,6,'blacha',{r:2}) +
      a.window(250,190,36,40) + a.rect(206,212,28,50,'drewno',{r:1}) +
      a.arrow([[90,132],[130,140],[172,148]],{d:300}) + a.arrow([[289,70],[300,46],[322,28]],{d:500}) +
      pcUnit(a,420,262,.7) + a.person(90,262,{kask:false}) +
      a.dim(158,262,158,158,'min. ok. 2 m',{dx:-4});
    return { caption:'Czerpnia na ścianie szczytowej, wyrzutnia na dachu. Obie z dala od komina i od pompy ciepła po drugiej stronie domu.',
      svg:S(a, a.layout.scene(s, [
        {t:'Czerpnia', at:[191,140], side:'l', y:100, k:'cz', hot:1},
        {t:'Komin kominka', at:[217,40], side:'l', y:40, k:'ko'},
        {t:'Wyrzutnia', at:[289,74], side:'r', y:60, k:'wy'},
        {t:'Pompa ciepła', at:[420,214], side:'r', y:180, k:'pc'} ]), 'Ściana szczytowa domu z czerpnią, wyrzutnią na dachu, kominem i pompą ciepła z boku') };
  });

  /* 6. Montaż kanałów ------------------------------------------------------ */
  function uklad(a){
    const s = a.rect(0,262,480,58,'beton',{r:0}) + a.rect(0,226,480,36,'eps',{r:0}) + a.rect(100,226,340,18,'piasek',{r:0,cls:'il-dk'}) +
      a.rect(420,150,52,76,'blacha',{r:5}) +
      a.move(a.rect(100,226,330,16,'papier',{r:8}) + a.hand(260,226,{s:.9}), 0, -60) +
      a.person(60,262,{kneel:1, arms:[60,95]});
    return a.layout.scene(s, [
      {t:'Rura PE w styropianie', at:[300,234], side:'r', y:290, k:'ru', hot:1},
      {t:'Rozdzielacz', at:[446,150], side:'r', y:120, k:'ro'} ]) + a.num(260,60,'po tynkach, przed jastrychem',{d:600});
  }
  function zaslepka(a){
    const tubeEnd = a.rect(10,120,170,30,'papier',{r:10});
    const ok = tubeEnd + a.rect(172,116,22,38,'kmb',{r:5}) + a.text(111,210,'koniec zaślepiony',{s:1,a:'middle'});
    let gruz = ''; [[188,96],[200,110],[178,104],[196,84]].forEach(p => { gruz += a.poly([[p[0],p[1]],[p[0]+8,p[1]+2],[p[0]+4,p[1]+8]],'zwir'); });
    const bad = tubeEnd + '<ellipse cx="180" cy="135" rx="6" ry="15" class="il-m c-kmb"/>' + a.fresh(gruz,{d:300}) + a.text(111,210,'pył i gruz w rurze',{s:1,a:'middle'});
    return a.layout.compare(ok, bad, ['Zaślepione do rozruchu', 'Otwarta rura']);
  }
  function warstwy(a){
    let tubes = '', heat = '';
    [120,200,280,360].forEach(x => { tubes += `<circle cx="${x}" cy="240" r="11" class="il-m c-papier"/><circle cx="${x}" cy="240" r="11" class="il-ring" style="stroke-width:2"/>`; });
    for (let x = 60; x <= 440; x += 40) heat += `<circle cx="${x}" cy="186" r="5" class="il-m c-bad"/>`;
    const s = a.rect(0,262,480,58,'beton',{r:0}) + a.rect(0,226,480,36,'eps',{r:0}) + tubes + a.rect(0,192,480,34,'eps',{r:0}) +
      a.rect(0,190,480,3,'folia',{r:0}) + a.fresh(a.rect(0,150,480,40,'beton',{r:0}),{d:400}) + heat +
      a.dim(470,226,470,192,'3–5 cm',{dx:-4});
    return a.layout.scene(s, [
      {t:'Jastrych (etap 11)', at:[90,168], side:'l', y:100, k:'ja'},
      {t:'Podłogówka', at:[300,186], side:'r', y:100, k:'po'},
      {t:'Rury wentylacji', at:[200,240], side:'l', y:290, k:'ru', hot:1} ]);
  }
  BUDOWA.addIllus('10-rekuperacja-pv/montaz-kanalow', function(a){
    return { caption:'Rury wentylacji leżą w styropianie pod podłogówką. Do rozruchu każdy koniec jest zaślepiony.', frames:[
      { caption:'Rura PE wchodzi w rowek w pierwszej warstwie styropianu.', svg:S(a,uklad(a),'Monter układa rurę wentylacyjną w styropianie przy rozdzielaczu') },
      { caption:'Zaślepka zostaje do rozruchu centrali.', svg:S(a,zaslepka(a),'Dobrze: rura zaślepiona. Źle: otwarta rura z gruzem') },
      { caption:'Nad rurami drugi styropian, podłogówka i jastrych.', svg:S(a,warstwy(a),'Przekrój podłogi: rury wentylacji w styropianie, nad nimi podłogówka i jastrych') } ] };
  });

  /* 7. Okap --------------------------------------------------------------- */
  BUDOWA.addIllus('10-rekuperacja-pv/okap', function(a){
    const wyspa = a.rect(0,0,222,8,'beton',{r:0}) + a.rect(40,168,142,40,'drewno',{r:2}) + a.rect(34,160,154,10,'beton',{r:2}) + a.rect(80,156,60,5,'kmb',{r:2});
    const hood = a.poly([[76,70],[146,70],[160,96],[62,96]],'blacha') + a.rect(102,8,18,62,'blacha',{r:0});
    const ok = wyspa + hood + a.rect(70,92,82,6,'kmb',{r:2}) +
      a.arrow([[110,150],[100,126],[110,104]],{d:200}) + a.arrow([[168,100],[194,126],[178,150]],{d:500}) + a.text(111,236,'filtr węglowy, obieg',{s:1,a:'middle'});
    const bad = wyspa + a.poly([[76,70],[146,70],[160,96],[62,96]],'blacha') + a.pipe([[111,70],[111,34],[170,34]],14,'rura') +
      a.rect(160,8,54,46,'blacha',{r:4}) + a.fresh(a.drops(174,60,3),{d:300}) + a.text(111,236,'tłuszcz w centrali',{s:1,a:'middle'});
    return { caption:'Okap obiegowy oczyszcza opary nad wyspą. Rekuperacja wyciąga wilgoć z kuchni osobnym anemostatem.',
      svg:S(a, a.layout.compare(ok, bad, ['Okap obiegowy', 'Okap do rekuperatora']), 'Dobrze: okap obiegowy z filtrem. Źle: okap podłączony do centrali') };
  });

  /* 8. Kominek a rekuperacja ---------------------------------------------- */
  function salon(a){
    const s = a.rect(0,282,480,38,'drewno',{r:0}) + a.rect(0,0,480,26,'beton',{r:0}) +
      a.rect(150,26,60,120,'ceramika',{r:0}) + a.rect(130,146,100,136,'beton',{r:4}) + a.rect(146,180,68,62,'kmb',{r:4}) + a.rect(152,186,56,50,'szklo',{r:3}) + fire(a,180,234) +
      a.pipe([[180,282],[180,300],[10,300]],10,'woda') + a.arrow([[60,292],[110,306],[150,296]],{d:300}) +
      anem(a,360,26) + a.arrow([[360,36],[372,70],[350,104]],{d:500}) +
      a.rect(300,130,20,24,'papier',{r:4}) + '<circle cx="310" cy="142" r="4" class="il-m c-ok"/>' +
      a.person(420,282,{kask:false, flip:1});
    return a.layout.scene(s, [
      {t:'Wkład szczelny', at:[214,200], side:'r', y:224, k:'wk', hot:1},
      {t:'Powietrze z zewnątrz', at:[40,300], side:'l', y:240, k:'pz'},
      {t:'Czujnik CO', at:[320,142], side:'r', y:150, k:'co'},
      {t:'Funkcja „kominek”', at:[360,30], side:'r', y:64, k:'fk'} ], {top:56});
  }
  function balans(a, bad){
    const k = a.rect(0,0,222,8,'beton',{r:0}) + a.rect(70,8,30,112,'ceramika',{r:0}) + a.rect(54,120,62,90,'beton',{r:4}) + a.rect(64,150,42,40,'kmb',{r:3}) + fire(a,85,186) +
      a.rect(150,8,50,40,'blacha',{r:4}) + a.rect(158,16,10,24,bad ? 'kmb' : 'papier',{r:2});
    return k + (bad
      ? smoke('M100 160q14 -6 28 4t30 0', {draw:1}) + smoke('M100 176q16 -4 30 6t26 2', {draw:1}) + a.arrow([[180,52],[198,96],[186,140]]) + a.text(111,236,'podciśnienie: dym do salonu',{s:1,a:'middle'})
      : a.arrow([[85,110],[86,70],[85,24]]) + a.text(111,236,'nawiew = wywiew',{s:1,a:'middle'}));
  }
  BUDOWA.addIllus('10-rekuperacja-pv/kominek-a-rekuperacja', function(a){
    return { caption:'Wkład zamknięty bierze powietrze z zewnątrz. Rekuperacja w równowadze nie zaburza ciągu.', frames:[
      { caption:'Kanał z zewnątrz pod podłogą, czujnik CO na ścianie, funkcja „kominek” w centrali.', svg:S(a,salon(a),'Salon z zamkniętym kominkiem, kanałem powietrza z zewnątrz i czujnikiem CO') },
      { caption:'Zapchany filtr nawiewu robi podciśnienie i dym wraca do salonu.', svg:S(a,a.layout.compare(balans(a,0), balans(a,1), ['W równowadze', 'Zapchany filtr nawiewu']),'Dobrze: dym idzie kominem. Źle: dym cofa się do salonu') } ] };
  });

  /* 9. Dobór mocy PV ------------------------------------------------------- */
  function bilans(a){
    const k = 380/8000, x0 = 50;
    const s = a.text(x0,70,'Rocznie w kWh',{b:1}) +
      a.text(x0,112,'Zużycie',{s:1}) + a.fresh(a.label(x0,120,3800*k-3,40,'Dom 3800','drewno',{k:'dom'}),{d:100}) + a.fresh(a.label(x0+3800*k,120,3700*k,40,'Pompa ciepła 3700','xps',{k:'pc'}),{d:300}) +
      a.text(x0,202,'Produkcja 14 modułów',{s:1}) + a.fresh(a.label(x0,210,6440*k,40,'ok. 6400','poziomica',{k:'pv'}),{d:600});
    return s + a.num(240,290,'pokrywa ok. 80–85%',{d:900});
  }
  function dach(a){
    let m = '';
    for (let r = 0; r < 2; r++) for (let i = 0; i < 7; i++){
      const q = mod(a, 112+i*37, 104+r*48, 34, 44);
      m += r*7+i < 8 ? q : a.fresh(q, {d:300+(r*7+i-8)*120});
    }
    const s = a.ground(0,300,480,20) + a.rect(70,250,340,50,'bloczek',{r:0}) + a.poly([[56,252],[424,252],[384,70],[96,70]],'dachowka') +
      a.rect(344,36,22,36,'ceramika',{r:1}) + a.window(332,206,32,38) + m;
    return a.layout.scene(s, [
      {t:'8 modułów z wizualizacji', at:[150,126], side:'l', y:40, k:'m8'},
      {t:'+6 modułów', at:[300,174], side:'r', y:120, k:'m6', hot:1} ]) + a.num(240,284,'14 × 460 W ≈ 6,4 kWp',{d:1200});
  }
  BUDOWA.addIllus('10-rekuperacja-pv/dobor-pv', function(a){
    return { caption:'Dom z pompą ciepła potrzebuje ok. 7,5 tys. kWh rocznie. 14 modułów pokrywa większość i zostaje poniżej 6,5 kW.', frames:[
      { caption:'Zużycie domu i pompy ciepła a produkcja 14 modułów.', svg:S(a,bilans(a),'Paski: zużycie domu i pompy ciepła oraz produkcja 14 modułów') },
      { caption:'Na połaci od ogrodu mieści się 14 modułów w dwóch rzędach.', svg:S(a,dach(a),'Połać dachu z 14 modułami w dwóch rzędach') } ] };
  });

  /* 10. Zgłoszenie ---------------------------------------------------------- */
  BUDOWA.addIllus('10-rekuperacja-pv/zgloszenie-pv', function(a){
    const sun = x => `<circle cx="${x}" cy="150" r="8" class="il-m c-poziomica"/>` + a.line(`M${x} 136v-4M${x} 164v4M${x-14} 150h-4M${x+14} 150h4`,'il-ln');
    const meter = x => a.rect(x-11,138,22,26,'papier',{r:3}) + a.rect(x-7,142,14,7,'szklo',{r:1}) + a.line(`M${x-6} 156h12M${x-2} 153l-4 3 4 3M${x+2} 153l4 3 -4 3`,'il-ln');
    const coin = x => `<circle cx="${x}" cy="150" r="11" class="il-m c-poziomica"/><circle cx="${x}" cy="150" r="7" class="il-ring" style="stroke-width:2"/>`;
    const s = a.text(240,60,'Od montażu do rozliczenia',{b:1,a:'middle'}) +
      a.layout.steps([{t:'Montaż', icon:sun(70), k:'m'}, {t:'Zgłoszenie', icon:'projekt', k:'z'}, {t:'Nowy licznik', icon:meter(296.7), k:'l'}, {t:'Net-billing', icon:coin(410), k:'n'}]) +
      a.num(240,284,'zwykle 2–6 tyg.',{d:900});
    return { caption:'Instalator zgłasza mikroinstalację do operatora, operator wymienia licznik. Pozwolenie na budowę nie jest potrzebne.', svg:S(a,s,'Cztery kroki: montaż, zgłoszenie do operatora, licznik dwukierunkowy, net-billing') };
  });

  /* 11. Montaż PV ----------------------------------------------------------- */
  function roof(a){
    let l = '';
    for (let x = 20; x < 460; x += 64) l += a.rect(x,226,16,14,'drewno',{r:1});
    return a.rect(0,250,480,24,'drewno',{r:1}) + a.rect(0,240,480,10,'drewno',{r:1,cls:'il-dk'}) + a.rect(0,274,480,46,'welna',{r:0}) + l + a.tiles(0,206,480,10);
  }
  const hook = (a, x) => a.rect(x-12,244,26,6,'blacha',{r:1}) + a.rect(x+6,182,6,64,'blacha',{r:1}) + a.rect(x+6,178,30,6,'blacha',{r:2});
  function f1(a){
    const s = roof(a) + hook(a,110) + a.fresh(hook(a,330),{d:300}) + a.move(a.hand(352,178,{s:.9}), 30, -40);
    return a.layout.scene(s, [{t:'Hak na krokwi', at:[116,190], side:'l', y:120, k:'h', hot:1}, {t:'Krokiew', at:[240,262], side:'r', y:300, k:'k'}]) +
      a.num(240,60,'ok. 30–40 haków',{d:600});
  }
  function f2(a){
    const s = roof(a) + hook(a,110) + hook(a,330) + a.move(a.rect(40,166,400,12,'blacha',{r:2}), 0, -50);
    return a.layout.scene(s, [{t:'Szyna aluminiowa', at:[240,170], side:'r', y:110, k:'s', hot:1}]);
  }
  function f3(a){
    const s = roof(a) + hook(a,110) + hook(a,330) + a.rect(40,166,400,12,'blacha',{r:2}) +
      a.move(mod(a,40,140,196,26) + mod(a,244,140,196,26), 0, -60) +
      a.fresh(a.cable([[444,160],[462,180],[462,300]],'var(--il-kmb)'),{d:500});
    return a.layout.scene(s, [{t:'Moduły', at:[140,146], side:'l', y:80, k:'m', hot:1}, {t:'Przewody DC do przepustu', sub:'rura z etapu 06', at:[462,236], side:'r', y:96, k:'dc'}]);
  }
  BUDOWA.addIllus('10-rekuperacja-pv/montaz-pv', function(a){
    return { caption:'Haki przykręca się do krokwi pod dachówką, na nich szyny, na szynach moduły. Przewody DC schodzą przepustem z etapu 06.', frames:[
      { caption:'Haki pod dachówką, przykręcone do krokwi.', svg:S(a,f1(a),'Przekrój pokrycia: hak przykręcony do krokwi wychodzi spod dachówki') },
      { caption:'Na hakach leżą szyny aluminiowe.', svg:S(a,f2(a),'Szyna aluminiowa opada na haki') },
      { caption:'Moduły na szynach, przewody DC przez przepust do falownika.', svg:S(a,f3(a),'Moduły na szynach i przewód DC do przepustu') } ] };
  });

  /* 12. Magazyn energii ----------------------------------------------------- */
  BUDOWA.addIllus('10-rekuperacja-pv/magazyn-energii', function(a){
    const s = a.rect(10,20,460,262,'papier',{r:10,cls:'il-panel'}) + a.rect(0,282,480,38,'beton',{r:0}) +
      a.rect(100,90,74,96,'blacha',{r:6}) + a.rect(112,104,50,26,'szklo',{r:3}) + a.line('M118 146h38M118 156h38','il-jt') +
      '<rect x="200" y="150" width="96" height="132" rx="8" class="il-zone"/>' + a.ghost(a.rect(212,162,72,112,'blacha',{r:6})) +
      a.cable([[137,186],[137,230],[60,230],[60,282]]) + a.cable([[174,170],[200,170]],'var(--il-kmb)') +
      a.person(400,282,{kask:false, flip:1});
    return { caption:'Teraz falownik hybrydowy na ścianie garażu, obok wolne miejsce i przewód na baterię. Magazyn dołożysz, gdy się opłaci.',
      svg:S(a, a.layout.scene(s, [
        {t:'Falownik hybrydowy', at:[137,98], side:'l', y:60, k:'f', hot:1},
        {t:'Do rozdzielnicy (etap 08)', at:[60,250], side:'l', y:250, k:'r'},
        {t:'Miejsce na baterię', sub:'ok. 1 × 1,5 m', at:[296,170], side:'r', y:80, k:'b'} ]), 'Ściana garażu: falownik hybrydowy i wolne miejsce na magazyn energii') };
  });

  /* 13. Smart home ---------------------------------------------------------- */
  BUDOWA.addIllus('10-rekuperacja-pv/smart-home', function(a){
    const phone = a.rect(-24,-2,48,76,'kmb',{r:8}) + a.rect(-19,4,38,62,'szklo',{r:4}) + a.rect(-14,10,28,10,'poziomica',{r:3}) + a.rect(-14,26,28,10,'papier',{r:3}) + a.rect(-14,42,28,10,'papier',{r:3});
    const yr = x => 30 + (x-240)*.682;   // zewnętrzna krawędź prawej połaci
    let mods = ''; for (let i = 0; i < 4; i++){ const x = 262 + i*30; mods += a.poly([[x,yr(x)-3],[x+26,yr(x+26)-3],[x+26,yr(x+26)-11],[x,yr(x)-11]],'kmb'); }
    const house = a.g(sec(a) + mods + a.window(118,196,60,46) + a.fresh(a.rect(118,196,60,26,'blacha',{r:2}),{d:300}) + a.line('M118 202h60M118 208h60M118 214h60','il-jt') +
      a.line('M300 184v8','il-ln') + '<circle cx="300" cy="200" r="9" class="il-m c-poziomica"/>' +
      a.rect(262,214,14,18,'papier',{r:3}) + a.rect(340,196,26,54,'papier',{r:9}), {tr:'translate(96 24) scale(.78)'});
    const s = a.ground(0,228,480,92) + house + a.hand(70,236,{hold:phone});
    return { caption:'Jeden system łączy rolety, światła, ogrzewanie i prąd z dachu. Przyciski na ścianach działają też bez telefonu.',
      svg:S(a, a.layout.scene(s, [
        {t:'Rolety', at:[211,180], side:'l', y:60, k:'ro'},
        {t:'Światło', at:[330,180], side:'r', y:60, k:'sw'},
        {t:'Ogrzewanie', at:[306,197], side:'r', y:250, k:'og'},
        {t:'Ciepła woda z PV', at:[377,198], side:'r', y:292, k:'cw', hot:1} ]), 'Przekrój domu z roletami, światłem, termostatem i zasobnikiem, sterowanymi z telefonu') };
  });

  /* 14. Rozruch i odbiory --------------------------------------------------- */
  function pomiar(a){
    const s = a.rect(0,0,480,70,'beton',{r:0}) + a.rect(0,282,480,38,'drewno',{r:0}) + anem(a,246,70) +
      a.poly([[224,76],[268,76],[254,102],[238,102]],'papier') + a.rect(236,100,20,20,'maszyna',{r:3}) + a.rect(240,104,12,7,'szklo',{r:1}) +
      a.person(225,282,{s:1.6, kask:false, arms:[20,160]}) + a.arrow([[300,80],[318,110],[302,140]],{d:300});
    return a.layout.scene(s, [{t:'Anemometr z lejem', at:[226,96], side:'l', y:120, k:'an', hot:1}, {t:'Anemostat', at:[254,72], side:'r', y:100, k:'as'}]) +
      a.num(380,250,'± 10% od projektu',{d:600});
  }
  function filtr(a){
    const pleat = x => a.line(`M${x} 150v80M${x+12} 150v80M${x+24} 150v80M${x+36} 150v80M${x+48} 150v80M${x+60} 150v80`,'il-jt');
    const s = a.rect(0,282,480,38,'beton',{r:0}) + a.shadow(300,282,110,8) + a.rect(200,120,200,162,'blacha',{r:8}) + a.rect(214,140,172,100,'kmb',{r:4}) +
      a.move(a.rect(150,146,80,88,'papier',{r:3}) + pleat(160) + a.hand(150,190,{r:-90, s:.9}), 60, 0);
    return a.layout.scene(s, [{t:'Nowy filtr ePM1', at:[190,234], side:'l', y:270, k:'f', hot:1}]) + a.num(300,80,'co 3–6 mies.',{d:500});
  }
  BUDOWA.addIllus('10-rekuperacja-pv/rozruch-i-odbiory', function(a){
    return { caption:'Regulacja na każdym anemostacie, protokół przepływów i filtry wymieniane co kilka miesięcy.', frames:[
      { caption:'Instalator mierzy przepływ na każdym anemostacie i ustawia go według bilansu.', svg:S(a,pomiar(a),'Instalator mierzy anemometrem z lejem przepływ na anemostacie w suficie') },
      { caption:'Po rozruchu: nowe filtry i harmonogram wymian.', svg:S(a,filtr(a),'Dłoń wsuwa nowy filtr do centrali') } ] };
  });
})();
