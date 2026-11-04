/* Ilustracje etapu 13 — Wykończenie wnętrz. Liczby zgodne z content/13-wykonczenie.js i docs/DECYZJE.md
   (spadek 1,5–2%, płytki 60 × 120, wanna min. 15 cm od ściany, blat 85–90 cm, deska R ok. 0,10 ≤ 0,15, szczelina pod drzwiami 1–2 cm, regulacja ±10%). */
(function(){
  const S = (a, s, l) => a.svg(s, 480, 320, l);
  const L = a => a.layout;
  const floor = (a, mat, y, w) => a.rect(0, y || 262, w || 480, 320 - (y || 262), mat || 'beton', {r:0});
  // wałek malarski: x,y = koniec rączki w dłoni, wałek nad nim
  const roller = (x,y,s) => `<g transform="translate(${x} ${y}) scale(${s || 1})"><path class="il-ln" d="M0 0V-26H14V-34" style="stroke-width:3"/><rect x="-6" y="-48" width="40" height="14" rx="6" class="il-m c-welna"/></g>`;
  // kamień łupany jak na elewacji (etap 12)
  function stones(a,x,y,w,h,o){
    const M = ['zwir','bloczek','beton','piasek']; let s = a.rect(x,y,w,h,'beton',{r:1}), r = 0;
    for (let yy = y; yy < y+h-3; yy += 13, r++){
      let xx = x - (r % 2 ? 9 : 0), i = r*3;
      while (xx < x+w){ const ww = 16 + ((i*37) % 5)*5, x0 = Math.max(x,xx), x1 = Math.min(x+w,xx+ww);
        if (x1-x0 > 4) s += a.rect(x0+1,yy+1,x1-x0-2,Math.min(11,y+h-yy-2),M[i % 4],{r:3}); xx += ww; i++; }
    }
    return a.g(s,o);
  }
  // płytki: rząd prostokątów z fugą
  const tilesRow = (a,x,y,w,h,n,mat,o) => { let s = ''; const tw = w/n; for (let i = 0; i < n; i++) s += a.rect(x+i*tw+1,y,tw-2,h,mat || 'papier',{r:1}); return a.g(s,o); };

  /* 1 ---------- Kolejność prac ---------- */
  BUDOWA.addIllus('13-wykonczenie/kolejnosc', function(a){
    const f1 = a.text(240,52,'Najpierw mokre i brudne',{b:1,a:'middle'}) +
      L(a).timeline([{t:'Płytki',len:1.4},{t:'Farba 1',len:1},{t:'Schody',len:1.1},{t:'Podłogi',len:1}],{x:40,y:80,w:400,h:44}) +
      a.text(240,172,'Na końcu to, co łatwo porysować',{b:1,a:'middle'}) +
      L(a).timeline([{t:'Drzwi, listwy',len:1.3},{t:'Biały montaż',len:1.2},{t:'Farba 2',len:1},{t:'Sprzątanie',len:1.1}],{x:40,y:200,w:400,h:44,end:'ok'}) +
      a.num(240,286,'ok. 3–5 mies.');
    const room = (good) => a.rect(0,0,222,200,'papier',{r:0}) + a.rect(0,200,222,44,good ? 'papa' : 'drewno',{r:0}) +
      a.person(110,200,{kask:false,arms:[150,170],hold:roller(0,0,.9)}) +
      (good ? a.pill(111,226,'tektura na podłodze') : [[60,214],[92,222],[150,210],[176,226]].map(p => `<ellipse cx="${p[0]}" cy="${p[1]}" rx="7" ry="3" class="il-m c-papier"/>`).join(''));
    const f2 = L(a).compare(room(1), room(0), ['Podłoga osłonięta', 'Deska przed farbą']);
    return { caption: 'Prace mokre i brudne idą pierwsze; deska, drzwi i osprzęt wchodzą do suchego, pomalowanego domu.', frames: [
      { caption: 'Dwie tury: płytki, pierwsza farba, schody i podłogi; potem drzwi, listwy, biały montaż, druga farba i sprzątanie.', svg: S(a, f1, 'Dwie osie czasu z kolejnością prac wykończeniowych') },
      { caption: 'Malarz nad tekturą nie szkodzi niczemu. Malarz nad gotową deską zostawia krople farby i rysy od drabiny.', svg: S(a, f2, 'Dobrze: malowanie nad osłoniętą posadzką. Źle: krople farby na desce') } ] };
  });

  /* 2 ---------- Hydroizolacja (przekrój narożnika łazienki) ---------- */
  // ściana 60–110, wylewka od y 230, płytka/odpływ po prawej
  function corner(a){
    return a.rect(60,30,50,200,'bloczek',{r:0}) + a.rect(110,30,10,200,'papier',{r:0}) +
      a.rect(60,230,420,90,'beton',{r:0}) + a.pipe([[150,262],[470,262]],12,'cieplo');
  }
  BUDOWA.addIllus('13-wykonczenie/hydroizolacja', function(a){
    const tape = a.poly([[120,170],[126,170],[126,224],[190,224],[190,230],[120,230]],'membrana',{k:'tas'});
    const f1 = corner(a) + a.fresh(tape) + a.hand(210,200,{r:-40,s:.8}) +
      L(a).scene('', [{t:'Taśma w narożniku', at:[124,210], side:'r', y:120, k:'tas'}, {t:'Grunt z systemu', at:[300,232], side:'r', y:290}]);
    const l1 = a.poly([[120,40],[126,40],[126,224],[480,224],[480,230],[120,230]],'membrana',{k:'w1'});
    const l2 = a.poly([[126,40],[132,40],[132,218],[480,218],[480,224],[126,224]],'xps',{k:'w2'});
    const f2 = corner(a) + l1 + a.fresh(l2) + a.hand(300,190,{r:-50,s:.8,hold:a.brush(0,0,.9)}) +
      L(a).scene('', [{t:'1. warstwa', at:[400,227], side:'r', y:270, k:'w1'}, {t:'2. warstwa, inny kolor', at:[129,120], side:'r', y:80, k:'w2'}]);
    // spadek do odpływu liniowego przy ścianie
    const slope = a.poly([[132,206],[480,198],[480,218],[132,218]],'beton') + a.poly([[132,200],[480,192],[480,198],[132,206]],'xps');
    const f3 = corner(a) + l1 + l2 + slope + a.rect(136,188,26,30,'kmb',{r:2,k:'odp'}) + a.fresh(a.poly([[162,192],[400,186],[400,190],[162,196]],'woda'),{d:300}) +
      a.arrow([[380,170],[270,166],[180,176]]) +
      L(a).scene('', [{t:'Odpływ liniowy', at:[149,200], side:'r', y:290, k:'odp'}]) + a.num(330,120,'spadek 1,5–2%') + a.pill(330,70,'próba zalania ok. 24 h');
    return { caption: 'Pod płytkami musi być szczelna powłoka: taśmy w narożnikach, dwie warstwy folii w płynie i spadek do odpływu.', frames: [
      { caption: 'Grunt, potem taśma uszczelniająca na styku ściany i podłogi.', svg: S(a, f1, 'Przekrój narożnika łazienki: dłoń wkleja taśmę w narożnik') },
      { caption: 'Dwie warstwy folii w płynie w dwóch kolorach: widać każde miejsce bez powłoki.', svg: S(a, f2, 'Pędzel nakłada drugą warstwę folii w innym kolorze') },
      { caption: 'Spadek ok. 1,5–2% w jedną stronę, do odpływu liniowego przy ścianie. Na koniec próba zalania.', svg: S(a, f3, 'Woda spływa po spadku do odpływu liniowego przy ścianie') } ] };
  });

  /* 3 ---------- Płytki (aksonometria podłogi) ---------- */
  BUDOWA.addIllus('13-wykonczenie/plytki', function(a){
    const P = a.iso(220,90,1);
    const base = P.shadow(0,0,260,170) + P.box(0,0,0,260,170,10,'beton');
    let comb = ''; for (let y = 12; y < 160; y += 10) comb += P.line([[120,y,10],[250,y,10]],'il-jt','stroke-width:3');
    const glue = P.box(120,0,10,140,170,2,'zwir',{k:'klej'}) + comb;
    const tileA = P.box(0,0,10,120,60,4,'papier') + P.box(0,62,10,120,60,4,'papier');
    const f1 = base + tileA + a.fresh(glue) + a.hand(380,190,{r:-70,s:.85,hold:a.trowel(0,0,1.1)}) +
      L(a).scene('', [{t:'Klej zębatą pacą', at:[300,170], side:'r', y:270, k:'klej'}, {t:'Klej też na płytce', at:[150,150], side:'l', y:270}]) +
      a.num(110,48,'C2TE S1');
    const tileB = a.move(P.box(122,0,10,120,60,4,'papier',{k:'pl'}), 0, -60);
    const clips = [[121,30],[121,61],[61,61]].map(p => P.box(p[0]-3,p[1]-3,14,6,6,8,'kmb')).join('');
    const f2 = base + tileA + P.box(120,62,10,140,108,2,'zwir') + tileB + a.fresh(clips,{d:500}) +
      L(a).scene('', [{t:'Klipsy poziomujące', at:[262,170], side:'l', y:270}, {t:'Płytka 60 × 120', at:[330,150], side:'r', y:200, k:'pl'}]) +
      a.num(110,48,'bez pustek pod płytką');
    return { caption: 'Wielki format na podłogówce: klej elastyczny metodą kombinowaną i system poziomowania.', frames: [
      { caption: 'Klej zębatą pacą na podłożu i cienko na spodzie płytki, żeby nie zostały pustki.', svg: S(a, f1, 'Aksonometria posadzki: paca rozprowadza klej obok ułożonych płytek') },
      { caption: 'Płytka opada na klej, klipsy wyrównują styki sąsiednich płytek.', svg: S(a, f2, 'Płytka 60 na 120 opuszczana na klej, klipsy i łata na styku') } ] };
  });

  /* 4 ---------- Łazienka z wanną wolnostojącą ---------- */
  const bath = (a,x,y,w,k) => a.shadow(x+w/2,y,w*.5,6) +
    `<path class="il-m c-papier" d="M${x} ${y-58}H${x+w}Q${x+w-4} ${y} ${x+w-34} ${y}H${x+34}Q${x+4} ${y} ${x} ${y-58}Z"${k ? ` data-k="${k}"` : ''}/>` + a.rect(x-3,y-62,w+6,7,'papier',{r:3});
  const tap = (a,x,y) => a.rect(x-3,y-96,6,96,'kmb',{r:2}) + a.line(`M${x} ${y-94}q0 -10 -16 -10`,'il-ln','stroke-width:5;stroke:var(--il-kmb)') + a.shadow(x,y,10,3);
  const vanity = (a,x,y,w,top,k) => a.rect(x,y-top,w,8,'drewno',{r:2}) + a.rect(x+10,y-top+8,w-20,34,'drewno',{r:2,cls:'il-dk'}) +
    `<path class="il-m c-papier" d="M${x+w/2-26} ${y-top}q0 -18 26 -18q26 0 26 18Z"${k ? ` data-k="${k}"` : ''}/>`;
  BUDOWA.addIllus('13-wykonczenie/lazienka', function(a){
    // skala ok. 1 jedn. = 1 cm, podłoga y 280
    const wallS = a.rect(0,20,480,260,'papier',{r:0}) + tilesRow(a,0,170,480,110,8,'beton') + floor(a,'zwir',280);
    const mirror = a.rect(318,70,124,70,'szklo',{r:6,k:'lus'}) + `<rect x="312" y="64" width="136" height="82" rx="10" class="il-ln" style="stroke:var(--il-piasek);stroke-width:5;fill:none"/>`;
    const wc = a.rect(52,150,32,20,'blacha',{r:3}) + `<path class="il-m c-papier" d="M36 214H96V230Q96 244 74 244H44Q36 244 36 236Z" data-k="wc"/>`;
    const s1 = wallS + wc + mirror + vanity(a,300,280,160,88,'um') + bath(a,110,280,120,'wan') + a.fresh(tap(a,248,280)) +
      L(a).scene('', [{t:'WC 40–43 cm', at:[60,236], side:'l', y:110, k:'wc'}, {t:'Wanna od ściany min. 15 cm', at:[140,240], side:'l', y:300, k:'wan'},
        {t:'Lustro LED', at:[440,90], side:'r', y:40, k:'lus'}, {t:'Umywalka nablatowa', at:[400,186], side:'r', y:300, k:'um'}]);
    const height = (top, good) => a.rect(0,0,222,200,'papier',{r:0}) + a.rect(0,200,222,44,'zwir',{r:0}) +
      vanity(a,40,200,140,top) + a.person(186,200,{kask:false,flip:1,arms:[10,good ? 40 : 75]}) +
      a.num(70,200-top-48,good ? 'ok. 85–90 cm' : '105 cm');
    const s2 = L(a).compare(height(88,1), height(105,0), ['Blat niżej', 'Blat 90 + misa 15']);
    return { caption: 'Łazienka na poddaszu jak na zdjęciu: wanna wolnostojąca, umywalki nablatowe, WC wiszące i lustra LED.', frames: [
      { caption: 'Wanna stoi min. ok. 15 cm od ściany, bateria wolnostojąca obok, WC na stelażu, lustro z podświetleniem nad blatem.', svg: S(a, s1, 'Łazienka: wanna wolnostojąca z baterią podłogową, blat z umywalką nablatową, lustro LED i WC wiszące') },
      { caption: 'Umywalka nablatowa jest wyższa od blatu, więc krawędź misy ma wypaść ok. 85–90 cm nad podłogą.', svg: S(a, s2, 'Dobrze: krawędź umywalki ok. 85–90 cm. Źle: umywalka na wysokim blacie, 105 cm') } ] };
  });

  /* 5 ---------- Armatura podtynkowa ---------- */
  // przekrój ściany: mur 40–120, g-k 120–132, płytka 132–140
  BUDOWA.addIllus('13-wykonczenie/armatura', function(a){
    const wall = a.blocks(40,20,80,242,40,20,'ceramika') + a.rect(120,20,12,242,'papier',{r:0}) + floor(a,'beton') +
      a.pipe([[60,262],[60,170],[96,170]],8,'cieplo') + a.pipe([[78,262],[78,190],[96,190]],8,'woda');
    const body = a.rect(96,150,46,60,'blacha',{r:4,k:'korp'});
    const f1 = wall + a.fresh(body) + a.ghost(a.rect(132,20,8,242,'beton',{r:0})) + a.dim(132,120,142,120,'',{}) +
      L(a).scene('', [{t:'Korpus w ścianie', at:[118,180], side:'r', y:180, k:'korp'}, {t:'Głębokość od lica płytki', at:[137,120], side:'r', y:100}]) +
      a.pill(340,240,'pod ciśnieniem przed płytkami');
    const tiles = a.rect(132,20,8,242,'beton',{r:0});
    const finish = a.rect(140,166,10,28,'kmb',{r:3}) + `<circle cx="160" cy="180" r="14" class="il-m c-kmb" data-k="pok"/>` +
      a.rect(140,40,90,8,'kmb',{r:3}) + a.rect(206,48,50,6,'kmb',{r:2,k:'desz'});
    const f2 = wall + body + tiles + a.fresh(finish) + a.drops(214,80,4) + a.drops(226,110,3) +
      L(a).scene('', [{t:'Termostat', at:[170,180], side:'r', y:200, k:'pok'}, {t:'Deszczownica', at:[240,52], side:'r', y:60, k:'desz'}]) +
      a.num(330,280,'ok. 38°C');
    return { caption: 'Armatura podtynkowa: korpus w ścianie przed płytkami, na płytkach tylko pokrętło i deszczownica.', frames: [
      { caption: 'Hydraulik osadza korpus na głębokość liczoną od lica gotowej płytki i zostawia go pod ciśnieniem.', svg: S(a, f1, 'Przekrój ściany z korpusem baterii podtynkowej przed położeniem płytek') },
      { caption: 'Po płytkach zakłada się tylko termostat z rozetą i deszczownicę.', svg: S(a, f2, 'Na płytkach widać tylko termostat i deszczownicę') } ] };
  });

  /* 6 ---------- Malowanie ---------- */
  BUDOWA.addIllus('13-wykonczenie/malowanie', function(a){
    const room = a.rect(0,0,480,262,'papier',{r:0}) + floor(a,'papa');
    const f1 = room + a.fresh(a.rect(40,30,170,232,'welna',{r:0,st:'opacity:.45',k:'gr'})) +
      a.person(240,262,{kask:false,arms:[170,175],hold:roller(0,0,1)}) +
      L(a).scene('', [{t:'Grunt wyrównuje chłonność', at:[120,140], side:'l', y:290, k:'gr'}]) + a.num(380,60,'1. sufit, 2. ściany');
    let defects = ''; [[150,90],[200,150],[120,190]].forEach((p,i) => defects += `<ellipse cx="${p[0]}" cy="${p[1]}" rx="${10+i*3}" ry="5" class="il-sh" style="opacity:.9"/>`);
    const lamp = a.rect(330,192,20,70,'kmb',{r:2}) + a.poly([[322,150],[358,150],[350,196],[330,196]],'piasek');
    const f2 = room + defects + lamp + a.fresh(`<path class="il-arr draw" d="M318 170Q240 150 110 120"/>`) +
      a.hand(200,210,{r:-35,s:.85,hold:a.trowel(0,0,1)}) +
      L(a).scene('', [{t:'Lampa wzdłuż ściany', at:[340,172], side:'r', y:60}, {t:'Szpachla miejscowo', at:[160,190], side:'l', y:290}]);
    const f3 = room + a.rect(40,30,400,232,'papier',{r:0,cls:'il-dk',st:'opacity:.25'}) +
      a.fresh(a.rect(40,30,180,232,'papier',{r:0})) + a.person(250,262,{kask:false,arms:[150,165],hold:roller(0,0,1)}) +
      a.num(380,60,'2 × farba') + a.pill(380,110,'mokre na mokre');
    return { caption: 'Tynk gipsowy z etapu 11 wystarczy zagruntować, miejscowo zaszpachlować i pomalować dwa razy.', frames: [
      { caption: 'Grunt na całość, w każdym pomieszczeniu najpierw sufit, potem ściany.', svg: S(a, f1, 'Malarz z wałkiem gruntuje ścianę') },
      { caption: 'Lampa świecąca wzdłuż ściany pokazuje nierówności; malarz szpachluje tylko je.', svg: S(a, f2, 'Boczne światło lampy pokazuje cienie nierówności, dłoń ze szpachlą') },
      { caption: 'Dwie warstwy farby jednym ciągiem od narożnika do narożnika. Druga po drzwiach, listwach i osprzęcie.', svg: S(a, f3, 'Malarz maluje drugą warstwę farby wałkiem') } ] };
  });

  /* 7 ---------- Obudowa kominka ---------- */
  function insert(a){
    return a.rect(190,150,100,112,'kmb',{r:4}) + a.rect(202,166,76,64,'szklo',{r:3}) +
      `<path class="il-m c-piasek" d="M222 228q8 -26 18 -30q-4 14 6 18q4 -12 12 -16q0 18 6 28Z"/>` + a.rect(232,40,16,110,'blacha',{r:2});
  }
  BUDOWA.addIllus('13-wykonczenie/kominek', function(a){
    const base = a.rect(0,0,480,262,'papier',{r:0}) + a.rect(0,0,480,40,'beton',{r:0}) + floor(a,'drewno');
    const f1 = base + insert(a) + a.num(240,290,'wkład 6–9 kW') +
      L(a).scene('', [{t:'Wkład z etapu 09', at:[200,190], side:'l', y:190}, {t:'Rura do komina', at:[240,80], side:'r', y:80}]);
    const box = a.rect(150,40,180,222,'piasek',{r:2,k:'pl'}) + a.rect(200,162,80,72,'szklo',{r:3}) +
      a.rect(176,246,128,10,'kmb',{r:2,k:'kr'}) + a.rect(176,52,128,10,'kmb',{r:2});
    const f2 = base + a.ghost(insert(a)) + a.fresh(box) + a.arrow([[120,250],[130,150],[168,58]]) + a.arrow([[300,58],[350,40],[400,60]]) +
      L(a).scene('', [{t:'Płyty kominkowe', at:[170,120], side:'l', y:100, k:'pl'}, {t:'Kratki: wlot i wylot', at:[290,250], side:'r', y:240, k:'kr'}]);
    const f3 = base + a.rect(150,40,180,222,'piasek',{r:2}) + stones(a,150,40,180,110,{k:'kam'}) + stones(a,150,150,40,112) + stones(a,290,150,40,112) +
      a.rect(200,162,80,72,'szklo',{r:3}) + a.rect(176,246,128,10,'kmb',{r:2}) + a.rect(176,52,128,10,'kmb',{r:2}) +
      `<path class="il-m c-piasek" d="M222 228q8 -26 18 -30q-4 14 6 18q4 -12 12 -16q0 18 6 28Z"/>` +
      L(a).scene('', [{t:'Kamień łupany', at:[200,100], side:'l', y:100, k:'kam'}]) + a.pill(408,236,'klej do kominków');
    return { caption: 'Wkład zamyka komora z płyt kominkowych z kratkami, a na wierzch idzie kamień jak na zdjęciu salonu.', frames: [
      { caption: 'Wkład z etapu 09 podłączony do komina.', svg: S(a, f1, 'Wkład kominkowy z ogniem za szybą i rurą do komina') },
      { caption: 'Komora z płyt kominkowych. Zimne powietrze wchodzi dołem, ciepłe wychodzi kratkami pod sufitem.', svg: S(a, f2, 'Obudowa z płyt, strzałki ruchu powietrza przez kratki') },
      { caption: 'Okładzina z kamienia łupanego, z tej samej rodziny co na elewacji.', svg: S(a, f3, 'Obudowa kominka wyłożona kamieniem łupanym') } ] };
  });

  /* 8 ---------- Schody ---------- */
  function stairs(a, mat, n){
    let d = 'M80 262', x = 80, y = 262; for (let i = 0; i < n; i++){ y -= 15; d += `V${y}`; x += 22; d += `H${x}`; }
    return `<path class="il-m c-${mat}" d="${d}L${x+10} ${y+30}L110 262Z"/>`;
  }
  BUDOWA.addIllus('13-wykonczenie/schody', function(a){
    const room = a.rect(0,0,480,262,'papier',{r:0}) + floor(a,'beton') + a.rect(330,30,150,22,'beton',{r:0});
    const f1 = room + a.fresh(stairs(a,'beton',12),{k:'bet'}) +
      L(a).scene('', [{t:'Żelbetowy bieg', at:[200,200], side:'l', y:120, k:'bet'}, {t:'Wypusty w stropie (05)', at:[350,50], side:'r', y:90}]) +
      a.num(300,290,'ok. 4 tyg. schnięcia');
    let treads = ''; for (let i = 0; i < 12; i++) treads += a.rect(78+i*22,262-15*(i+1)-4,26,5,'drewno',{r:1});
    let rail = a.line('M110 166L346 6','il-ln','stroke-width:5;stroke:var(--il-kmb)'); for (let i = 1; i < 12; i++) rail += a.rect(98+i*22,262-15*(i+1)-74,3,70,'kmb',{r:1});
    const f2 = room + stairs(a,'beton',12) + a.fresh(treads,{k:'dab'}) + a.fresh(rail,{d:400}) +
      a.dim(386,82,386,67,'',{}) + a.num(420,110,'h 17–18 cm') +
      L(a).scene('', [{t:'Stopnie dębowe 4 cm', at:[180,184], side:'l', y:240, k:'dab'}]) + a.pill(110,40,'balustrada stalowa');
    return { caption: 'Żelbetowy bieg z okładziną z dębu: cichy i sztywny. Balustrada stalowa, szklana za dopłatą.', frames: [
      { caption: 'Bieg żelbetowy na wypustach ze stropu musi wyschnąć ok. 4 tygodnie.', svg: S(a, f1, 'Żelbetowe schody od posadzki do stropu') },
      { caption: 'Stopnie z litego dębu klejone do betonu, balustrada z pionowych prętów.', svg: S(a, f2, 'Schody z okładziną dębową i balustradą z pionowymi prętami') } ] };
  });

  /* 9 ---------- Podłogi ---------- */
  function slab(a){
    let s = a.rect(0,200,480,120,'eps',{r:0}) + a.rect(0,150,480,50,'beton',{r:0});
    for (let x = 30; x < 480; x += 60) s += `<circle cx="${x}" cy="178" r="8" class="il-m c-xps"/>`;
    return s;
  }
  BUDOWA.addIllus('13-wykonczenie/podlogi', function(a){
    let comb = ''; for (let x = 200; x < 470; x += 9) comb += `M${x} 146V140`;
    const f1 = slab(a) + a.rect(200,142,280,8,'zwir',{r:0,k:'klej'}) + a.line(comb,'il-jt','stroke-width:3') + a.rect(0,132,200,18,'drewno',{r:1}) +
      a.hand(250,120,{r:-70,s:.85,hold:a.trowel(0,0,1.1)}) +
      L(a).scene('', [{t:'Klej na całej powierzchni', at:[330,146], side:'r', y:60, k:'klej'}, {t:'Rury podłogówki', at:[150,178], side:'l', y:280}]);
    const f2 = slab(a) + a.rect(0,142,480,8,'zwir',{r:0}) + a.rect(0,124,200,18,'drewno',{r:1}) + a.move(a.rect(204,124,276,18,'drewno',{r:1,k:'des'}),0,-50) +
      a.fresh(`<path class="il-arr draw" d="M90 196V100M240 196V100M390 196V100"/>`,{d:300}) +
      L(a).scene('', [{t:'Deska dębowa 14–15 mm', at:[330,132], side:'r', y:290, k:'des'}]) + a.num(240,60,'R ok. 0,10 ≤ 0,15');
    const lay = (good) => {
      let s = a.rect(0,150,222,94,'eps',{r:0}) + a.rect(0,110,222,40,'beton',{r:0});
      for (let x = 30; x < 222; x += 55) s += `<circle cx="${x}" cy="132" r="7" class="il-m c-xps"/>`;
      if (good) s += a.rect(0,104,222,6,'zwir',{r:0}) + a.rect(0,88,222,16,'drewno',{r:1}) + a.pill(111,40,'deska klejona');
      else s += a.rect(0,96,222,14,'welna',{r:0}) + a.rect(0,80,222,16,'drewno',{r:1}) + a.rect(20,68,180,12,'bad',{r:4}) + a.pill(111,30,'podkład + dywan');
      return s;
    };
    const f3 = L(a).compare(lay(1), lay(0), ['R ok. 0,10', 'R ponad 0,15']);
    return { caption: 'Deska warstwowa dębowa klejona do wylewki z podłogówką: opór cieplny ok. 0,10 m²·K/W.', frames: [
      { caption: 'Pomiar CM, grunt, potem klej elastyczny zębatą pacą na całą powierzchnię.', svg: S(a, f1, 'Przekrój: wylewka z rurami, dłoń z pacą rozprowadza klej obok ułożonej deski') },
      { caption: 'Deska dociśnięta do kleju; ciepło przechodzi bez szczeliny powietrza.', svg: S(a, f2, 'Deska opada na klej, strzałki ciepła przechodzą przez podłogę') },
      { caption: 'Gruby podkład i dywan działają jak koc: pompa ciepła musi grzać cieplejszą wodą.', svg: S(a, f3, 'Dobrze: deska klejona. Źle: deska na podkładzie i dywan') } ] };
  });

  /* 10 ---------- Siłownia ---------- */
  BUDOWA.addIllus('13-wykonczenie/silownia', function(a){
    const room = a.blocks(0,0,480,250,40,20,'ceramika') + a.rect(0,0,480,250,'papier',{r:0,st:'opacity:.7'}) + floor(a,'beton',250);
    const bar = a.rect(150,118,8,26,'kmb',{r:2}) + a.rect(330,118,8,26,'kmb',{r:2}) + a.rect(140,138,210,8,'blacha',{r:4,k:'dr'});
    const mat = a.rect(0,244,480,10,'kmb',{r:2,k:'gum'}) + a.rect(300,234,160,10,'drewno',{r:2,k:'pla'}) + a.rect(300,228,160,6,'kmb',{r:2});
    const dumb = a.rect(372,210,8,18,'kmb',{r:2}) + a.rect(380,217,26,4,'blacha',{r:1}) + a.rect(406,210,8,18,'kmb',{r:2});
    const s1 = room + mat + bar + dumb + a.person(244,244,{kask:false,arms:[170,190]}) +
      L(a).scene('', [{t:'Kotwy chemiczne', at:[154,122], side:'l', y:60}, {t:'Guma 15–20 mm', at:[100,249], side:'l', y:200, k:'gum'},
        {t:'Platforma pod ciężary', at:[440,236], side:'r', y:150, k:'pla'}]);
    const anchor = (good) => {
      let s = a.rect(0,40,222,160,'ceramika',{r:0}); for (let y = 52; y < 196; y += 36) for (let x = 12; x < 210; x += 52) s += a.rect(x,y,40,24,'papier',{r:2});
      s += a.rect(0,100,222,12,'papier',{r:0,st:'opacity:0'});
      if (good) s += a.rect(64,113,40,30,'beton',{r:3}) + a.rect(116,113,40,30,'beton',{r:3}) + a.rect(0,124,190,8,'stal',{r:2}) + a.pill(111,226,'żywica w tulei');
      else s += a.rect(0,124,130,8,'stal',{r:2}) + a.rect(80,120,50,16,'bad',{r:3}) + a.pill(111,226,'kołek w pustej komorze');
      return s;
    };
    const s2 = L(a).compare(anchor(1), anchor(0), ['Kotwa chemiczna', 'Kołek rozporowy']);
    return { caption: 'Siłownia: guma na podłogówce, platforma pod wolne ciężary, mocowania na kotwach chemicznych.', frames: [
      { caption: 'Guma 15–20 mm na całej podłodze, grubsza platforma tylko pod stanowiskiem ciężarów; drążek na kotwach w ścianie nośnej.', svg: S(a, s1, 'Siłownia: osoba podciąga się na drążku, guma na podłodze, platforma z hantlami') },
      { caption: 'W pustaku z komorami trzyma żywica w tulei siatkowej; zwykły kołek nie ma się w czym rozeprzeć.', svg: S(a, s2, 'Przekrój pustaka: kotwa chemiczna wypełnia komory, kołek rozporowy wisi w pustej komorze') } ] };
  });

  /* 11 ---------- Drzwi ---------- */
  BUDOWA.addIllus('13-wykonczenie/drzwi', function(a){
    const door = (x, kind) => {
      let s = a.shadow(x+45,262,56,6) + a.rect(x-10,48,110,214,'papier',{r:0});
      if (kind === 0) s += a.rect(x-4,52,98,210,'drewno',{r:2}) + a.rect(x+4,60,82,198,'drewno',{r:2,cls:'il-dk'}) + a.rect(x+6,110,6,14,'kmb',{r:2}) + a.rect(x+6,200,6,14,'kmb',{r:2});
      if (kind === 1) s += a.rect(x,56,90,206,'drewno',{r:1}) + a.line(`M${x} 56H${x+90}V258H${x}Z`,'il-jt');
      if (kind === 2) s += a.rect(x,56,90,206,'papier',{r:0,cls:'il-dk',st:'opacity:.25'}) + a.line(`M${x} 56H${x+90}V258H${x}Z`,'il-jt');
      return s + a.rect(x+70,156,16,5,'kmb',{r:2});
    };
    const f1 = floor(a,'drewno') + door(20,0) + door(185,1) + door(350,2) +
      a.pill(65,26,'Przylgowe') + a.pill(230,26,'Bezprzylgowe',{acc:1}) + a.pill(395,26,'Ukryta ościeżnica') +
      a.ok(230,82,12) + a.pill(65,292,'−4–5 tys. zł') + a.num(230,292,'ok. 9 szt.') + a.pill(395,292,'+10–14 tys. zł');
    const f2 = a.rect(0,0,480,262,'papier',{r:0}) + floor(a,'drewno') + a.rect(130,30,220,10,'drewno',{r:1}) + a.rect(130,40,10,222,'drewno',{r:1}) + a.rect(340,40,10,222,'drewno',{r:1}) +
      a.rect(140,40,200,212,'drewno',{r:1,k:'skr'}) + a.fresh(a.arrow([[60,240],[200,262],[420,240]])) +
      a.dim(360,252,360,262,'',{}) + a.num(420,200,'1–2 cm') +
      L(a).scene('', [{t:'Powietrze z pokoju do łazienki', at:[240,256], side:'l', y:290}]);
    return { caption: 'Drzwi bezprzylgowe montuje się po podłogach i malowaniu; szczelina pod skrzydłem przepuszcza powietrze z rekuperacji.', frames: [
      { caption: 'Trzy rodzaje drzwi. Bezprzylgowe dają gładką płaszczyznę bez kucia tynku z etapu 11.', svg: S(a, f1, 'Drzwi przylgowe, bezprzylgowe i z ukrytą ościeżnicą obok siebie z różnicą ceny') },
      { caption: 'Pod skrzydłem 1–2 cm szczeliny: powietrze z nawiewu płynie do wywiewu w łazience i kuchni.', svg: S(a, f2, 'Strzałka powietrza przechodzi pod drzwiami przez szczelinę 1–2 cm') } ] };
  });

  /* 12 ---------- Parapety i listwy ---------- */
  BUDOWA.addIllus('13-wykonczenie/parapety-listwy', function(a){
    // przekrój pod oknem: mur 140–300, rama okna 260–300 nad murem
    const wall = a.blocks(140,150,160,170,40,20,'ceramika') + a.rect(120,150,20,170,'papier',{r:0}) + a.rect(250,60,50,90,'kmb',{r:3}) + a.rect(262,60,26,84,'szklo',{r:2}) +
      a.rect(240,142,22,8,'membrana',{r:1,k:'tas'});
    const sill = a.rect(80,132,186,12,'beton',{r:2,k:'par'});
    const f1 = wall + a.move(sill,-60,0) + a.fresh(a.rect(150,144,90,6,'zwir',{r:0}),{d:500}) +
      L(a).scene('', [{t:'Parapet z konglomeratu', at:[160,136], side:'l', y:80, k:'par'}, {t:'Taśma okna (07) cała', at:[250,146], side:'r', y:200, k:'tas'}]) +
      a.num(110,240,'2–4 cm przed ścianę');
    const sk = (good) => {
      let s = a.rect(0,0,40,244,'papier',{r:0}) + a.rect(0,200,222,44,'beton',{r:0}) + a.rect(50,186,172,14,'drewno',{r:1});
      if (good) s += a.rect(40,140,14,60,'papier',{r:2,cls:'il-dk'}) + a.rect(40,150,4,40,'zwir',{r:0}) + a.dim(40,176,50,176,'',{}) + a.pill(130,110,'klej do ściany');
      else s += a.rect(40,140,14,60,'papier',{r:2,cls:'il-dk'}) + a.line('M47 170L47 214','il-ln','stroke-width:3;stroke:var(--il-bad)') + a.poly([[50,186],[100,176],[150,186]],'drewno') + a.pill(130,110,'gwóźdź w podłogę');
      return s;
    };
    const f2 = L(a).compare(sk(1), sk(0), ['Do ściany', 'Do podłogi']);
    return { caption: 'Parapety wewnętrzne przed ostatnią warstwą farby, listwy klejone do ściany po podłogach.', frames: [
      { caption: 'Parapet wsuwa się pod ramę okna na klej lub piankę niskoprężną, bez nacinania taśmy paroszczelnej.', svg: S(a, f1, 'Przekrój pod oknem: parapet wsuwany pod ramę okna, taśma na murze') },
      { caption: 'Listwa przyklejona do ściany zakrywa szczelinę 8–10 mm; przybita do podłogi blokuje deskę, która się wybrzusza.', svg: S(a, f2, 'Dobrze: listwa klejona do ściany. Źle: listwa przybita do podłogi i wybrzuszona deska') } ] };
  });

  /* 13 ---------- Biały montaż ---------- */
  BUDOWA.addIllus('13-wykonczenie/bialy-montaz', function(a){
    const room = a.rect(0,0,480,262,'papier',{r:0}) + floor(a,'drewno');
    const frame = (x,y,k) => a.rect(x,y,30,30,'papier',{r:4,cls:'il-dk',k}) + a.rect(x+7,y+7,16,16,'papier',{r:3});
    const f1 = room + frame(100,224,'gn') + frame(140,224) + a.fresh(frame(280,110,'lacz')) + a.level(250,92,90) +
      a.hand(340,170,{r:-20,s:.85}) +
      L(a).scene('', [{t:'Gniazda ok. 30 cm', at:[115,238], side:'l', y:160, k:'gn'}, {t:'Łącznik 105–110 cm', at:[295,124], side:'r', y:60, k:'lacz'}]) +
      a.pill(330,292,'jedna seria, po malowaniu');
    const wc = a.rect(40,110,22,152,'papier',{r:0,cls:'il-dk'}) + `<path class="il-m c-papier" d="M62 196H136Q146 196 142 210Q134 234 100 234H62Z" data-k="wc"/>` +
      a.rect(62,202,12,4,'stal',{r:1}) + a.rect(62,222,12,4,'stal',{r:1});
    const sink = a.rect(260,180,160,8,'drewno',{r:2}) + `<path class="il-m c-papier" d="M310 180q0 -22 30 -22q30 0 30 22Z" data-k="um"/>` +
      a.pipe([[340,188],[340,222],[380,222],[380,262]],8,'kan');
    const f2 = room + a.fresh(wc) + a.fresh(sink,{d:300}) + a.person(220,262,{kask:false,arms:[30,60],flip:1}) +
      L(a).scene('', [{t:'Miska na szpilkach', at:[100,222], side:'l', y:290, k:'wc'}, {t:'Syfon i zawory', at:[360,222], side:'r', y:290}]) +
      a.pill(330,40,'próba szczelności');
    return { caption: 'Biały montaż po malowaniu: osprzęt elektryczny z jednej serii i ceramika na gotowych podejściach.', frames: [
      { caption: 'Elektryk zakłada gniazda i łączniki w poziomie, na wysokościach z etapu 08; potem pomiary z protokołem.', svg: S(a, f1, 'Ściana z ramkami gniazd przy podłodze i łącznikiem przy drzwiach, poziomica') },
      { caption: 'Hydraulik wiesza miski WC na stelażach, podłącza umywalki, syfony i baterie.', svg: S(a, f2, 'Hydraulik przy misce WC i umywalce z syfonem') } ] };
  });

  /* 14 ---------- Sprzątanie ---------- */
  BUDOWA.addIllus('13-wykonczenie/sprzatanie', function(a){
    const ic = {
      kont: '<path class="il-m c-blacha" d="M-14 -6H14L11 9H-11Z"/><path class="il-ln" d="M-14 -6L-10 -11H10L14 -6"/>',
      odk: '<rect x="-10" y="-4" width="20" height="13" rx="5" class="il-m c-poziomica"/><path class="il-ln" d="M6 -4Q10 -14 0 -14" style="stroke-width:2.5"/>',
      okno: '<rect x="-12" y="-12" width="24" height="24" rx="2" class="il-m c-szklo"/><path class="il-shine" d="M-6 6L4 -6"/>',
      pod: '<rect x="-14" y="-4" width="28" height="9" rx="1" class="il-m c-drewno"/><path class="il-jt" d="M-4 -4V5M6 -4V5"/>'
    };
    const f1 = a.text(240,60,'Od góry do dołu, na końcu podłogi',{b:1,a:'middle'}) +
      L(a).steps([ic.kont, ic.odk, ic.okno, ic.pod].map((s,i) => ({icon:`<g transform="translate(${70 + i*340/3} 150) scale(1.15)">${s}</g>`, t:['Kontener','Odkurzanie','Okna','Podłogi'][i]})),{y:150}) + a.num(240,280,'2–4 dni');
    const vac = a.rect(140,170,44,30,'poziomica',{r:10}) + `<circle cx="148" cy="202" r="6" class="il-m c-kmb"/><circle cx="176" cy="202" r="6" class="il-m c-kmb"/>` +
      a.line('M184 180Q210 150 186 120L150 120','il-ln','stroke-width:4');
    const clean = (good) => a.rect(0,0,222,200,'papier',{r:0}) + a.rect(0,200,222,44,'drewno',{r:0}) +
      (good ? vac + a.person(100,200,{kask:false,arms:[30,80]}) + a.pill(111,40,'filtr klasy M')
        : a.person(100,200,{kask:false,arms:[30,120],hold:a.brush(0,0,1.2)}) + a.circle(150,170,40) + a.circle(70,90,30) + a.pill(111,40,'kurz wraca na ściany'));
    const f2 = L(a).compare(clean(1), clean(0), ['Odkurzacz', 'Miotła na sucho']);
    return { caption: 'Sprzątanie po budowie: wywóz odpadów, odkurzanie od sufitu do podłogi i mycie bez rysowania szkła i deski.', frames: [
      { caption: 'Najpierw odpady, potem pył od góry do dołu, okna i na końcu podłogi.', svg: S(a, f1, 'Cztery kroki sprzątania: kontener, odkurzanie, okna, podłogi') },
      { caption: 'Odkurzacz z filtrem klasy M zbiera pył; miotła podnosi go i osadza z powrotem na ścianach.', svg: S(a, f2, 'Dobrze: odkurzacz przemysłowy. Źle: zamiatanie na sucho, chmury pyłu') } ] };
  });

  /* 15 ---------- Rozruch rekuperacji ---------- */
  BUDOWA.addIllus('13-wykonczenie/rekuperacja-rozruch', function(a){
    const ceil = a.rect(0,0,480,70,'beton',{r:0}) + a.rect(0,70,480,192,'papier',{r:0}) + floor(a,'drewno') +
      a.pipe([[0,40],[240,40],[240,70]],18,'rura');
    const cap = a.rect(214,70,52,8,'folia',{r:2,k:'zas'});
    const f1 = ceil + a.move(a.ghost(cap),0,0) + a.move(a.rect(300,190,52,8,'folia',{r:2}),-60,-120) + a.person(330,262,{kask:false,arms:[150,170]}) +
      L(a).scene('', [{t:'Zaślepka z etapu 10', at:[240,74], side:'l', y:110, k:'zas'}]) + a.pill(110,200,'kanały czyste?');
    const unit = a.rect(120,90,240,150,'blacha',{r:6}) + a.rect(140,110,200,110,'papier',{r:4,cls:'il-dk'}) + floor(a,'drewno');
    const filt = a.rect(160,130,60,80,'welna',{r:2,k:'nf'});
    const f2 = a.rect(0,0,480,262,'papier',{r:0}) + unit + a.move(filt,-120,0) + a.ghost(a.rect(260,130,60,80,'zwir',{r:2})) +
      L(a).scene('', [{t:'Nowy filtr ePM1', at:[190,170], side:'l', y:60, k:'nf'}, {t:'Stary z budowy do kosza', at:[300,170], side:'r', y:60}]);
    const anemo = `<circle cx="240" cy="82" r="18" class="il-m c-blacha" data-k="an"/><circle cx="240" cy="82" r="8" class="il-m c-kmb"/>`;
    const meter = a.rect(-10,-40,20,34,'poziomica',{r:4}) + `<circle cx="0" cy="-52" r="12" class="il-m c-kmb"/>`;
    const f3 = ceil + anemo + a.person(250,262,{kask:false,arms:[150,180],hold:meter}) + a.fresh(a.arrow([[240,100],[230,120],[240,140]])) +
      L(a).scene('', [{t:'Anemostat', at:[240,90], side:'l', y:120, k:'an'}]) + a.num(380,120,'± 10%') + a.pill(380,180,'protokół');
    return { caption: 'Rekuperacja rusza na stałe dopiero w czystym domu: bez zaślepek, z nowymi filtrami i wyregulowanymi przepływami.', frames: [
      { caption: 'Instalator zdejmuje zaślepki i sprawdza, czy w kanałach nie ma pyłu.', svg: S(a, f1, 'Instalator zdejmuje zaślepkę z wylotu kanału w suficie') },
      { caption: 'W centrali nowe filtry; te, które pracowały podczas budowy, idą do kosza.', svg: S(a, f2, 'Nowy filtr wsuwany do centrali, stary obok') },
      { caption: 'Pomiar anemometrem na każdym anemostacie, ustawienie ok. ±10% od projektu i protokół.', svg: S(a, f3, 'Instalator mierzy anemometrem przepływ pod anemostatem w suficie') } ] };
  });
})();
