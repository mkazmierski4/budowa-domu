/* Ilustracje etapu 06 — Dach. Liczby zgodne z docs/DECYZJE.md (40°, kolankowa 1 m, połać ok. 255 m², krokiew ok. 6,7 m, C24 15–18%, murłata 14 × 14 z kotwami M12–M14 co 1–1,5 m,
   krokwie 8 × 20 co 80–90 cm, jętki 2,4–2,6 m, membrana z zakładem 10–15 cm, łaty 40 × 50 co ok. 33 cm, 4 okna dachowe 90–110 cm nad podłogą, rynny ok. 43 mb / 6 rur, 8 modułów PV). */
(function(){
  const G = a => a.ground(0,262,480,56);
  const LN = (a,p,w,c) => a.line(p,'il-ln','stroke-width:'+w+(c ? ';stroke:'+c : ''));
  const wood = 'var(--il-wood-d)';

  // przekrój poprzeczny poddasza: strop, ścianki kolankowe, murłaty (kalenica x = 240)
  // rysowany 36 jedn. niżej i podnoszony przez lift(), żeby pod stropem zmieścił się kawałek parteru
  const lift = (a,s) => G(a) + a.g(s,{tr:'translate(0 -36)'});
  const section = a => a.rect(90,250,24,48,'ceramika',{r:0}) + a.rect(366,250,24,48,'ceramika',{r:0}) + a.rect(70,236,340,14,'beton',{r:1}) +
    a.rect(90,204,24,32,'ceramika',{r:0,k:'kol'}) + a.rect(366,204,24,32,'ceramika',{r:0,k:'kol'}) + a.rect(93,195,18,9,'drewno',{r:1}) + a.rect(369,195,18,9,'drewno',{r:1});
  const rafterL = o => `<path d="M70 210L240 67V79L70 222Z" class="il-m c-drewno"${o ? ' data-k="'+o+'"' : ''}/>`;
  const rafterR = o => `<path d="M410 210L240 67V79L410 222Z" class="il-m c-drewno"${o ? ' data-k="'+o+'"' : ''}/>`;
  const jetka = a => a.rect(147,148,186,9,'drewno',{r:1,k:'jet'});

  /* 1 ---------- Geometria dachu ---------- */
  // widok domu z garażem w aksonometrii: kalenica wzdłuż 13 m, garaż prostopadły
  function roofIso(a,P){
    return P.shadow(0,0,145,165) + P.box(0,0,0,130,95,50,'papier') +
      P.face([[-4,-5,47],[134,-5,47],[134,47.5,90],[-4,47.5,90]],'dachowka') + P.face([[130,0,50],[130,95,50],[130,47.5,90]],'papier','fr') +
      P.face([[-4,47.5,90],[134,47.5,90],[134,100,47],[-4,100,47]],'dachowka','ft',{k:'dom'}) +
      P.box(80,95,0,65,70,30,'papier') + P.face([[112.5,95,57],[148,95,27],[148,169,27],[112.5,169,57]],'dachowka','ft',{k:'gar'}) +
      P.face([[80,165,30],[145,165,30],[112.5,165,57]],'papier','fl') + P.face([[86,165,0],[139,165,0],[139,165,22],[86,165,22]],'blacha','fl');
  }
  BUDOWA.addIllus('06-dach/geometria-dachu', function(a){
    const f1 = lift(a, section(a) + rafterL('kro') + rafterR() + jetka(a) + a.line('M142 204A40 40 0 0 0 132.6 178.3','il-meas') +
      a.num(172,214,'40°') + a.dim(445,204,445,70,'ok. 4 m',{dx:-6}) + LN(a,[[390,204],[452,204]],1.2) + LN(a,[[240,67],[452,67]],1.2));
    const P = a.iso(262,120,.9), d = P.P(60,75,68), g = P.P(130,130,42);
    const f2 = roofIso(a,P);
    return { caption: 'Dach 40° nad ścianką kolankową 1 m: z tej geometrii liczysz wszystkie ilości.', frames: [
      { caption: 'Przekrój: kalenica ok. 4 m nad ścianką kolankową, krokiew ok. 6,7 m.', svg: a.svg(a.layout.scene(f1, [
          {t:'Krokiew ok. 6,7 m', at:[120,136], side:'l', y:60, k:'kro'}, {t:'Ścianka kolankowa 1 m', at:[100,184], side:'l', y:250, k:'kol'}]),480,320,'Przekrój dachu 40° nad ścianką kolankową 1 m z krokwiami i jętką') },
      { caption: 'Połać domu i prostopadłego dachu garażu: razem ok. 255 m².', svg: a.svg(a.layout.scene(f2, [
          {t:'Dom ok. 190 m²', at:d, side:'l', y:110, k:'dom'}, {t:'Garaż ok. 70 m²', at:g, side:'r', y:200, k:'gar'}]) + a.num(240,300,'razem ok. 255 m²'),480,320,'Bryła domu z dachem dwuspadowym i prostopadłym dachem garażu') } ] };
  });

  /* 2 ---------- Drewno C24 ---------- */
  const stack = (a,x,y,n,w) => { let s = a.rect(x+14,y+n*13,16,262-y-n*13,'beton',{r:1}) + a.rect(x+w-30,y+n*13,16,262-y-n*13,'beton',{r:1});
    for (let i = 0; i < n; i++) s += a.board(x,y+i*13,w,12); return s; };
  const meter = '<rect x="-9" y="-4" width="18" height="26" rx="4" class="il-m c-maszyna"/><rect x="-6" y="0" width="12" height="8" rx="2" class="il-m c-szklo"/><path class="il-ln" d="M-4 22v8M4 22v8"/>';
  BUDOWA.addIllus('06-dach/drewno-c24', function(a){
    const f1 = G(a) + a.shadow(160,262,140,8) + stack(a,30,140,8,260) + a.rect(24,132,272,12,'folia',{r:4,st:'opacity:.8'}) +
      a.label(236,172,46,22,'C24','papier',{k:'c24'}) + a.person(372,262,{flip:true,arms:[10,-70],hold:meter}) +
      a.callout('c24',259,183,150,70,'Stempel klasy na tarcicy',{hot:1}) + a.num(372,120,'15–18%') + a.num(150,292,'ok. 16–18 m³');
    const ok = a.ground(0,226,222,18) + a.shadow(111,226,96,6) + stack(a,20,170,4,182) + a.rect(14,162,194,10,'folia',{r:4}) + a.pill(111,140,'suche, przykryte');
    const bad = a.ground(0,226,222,18) + a.rect(16,214,190,12,'ziemia',{r:6}) + a.drops(40,194,3) +
      '<path d="M18 206Q110 176 204 206L204 216Q110 186 18 216Z" class="il-m c-drewno"/><path d="M22 192Q112 160 200 186L200 196Q112 170 22 202Z" class="il-m c-drewno"/>' +
      a.pill(111,140,'mokre, wygięte');
    return { caption: 'Drewno konstrukcyjne C24, suszone komorowo i zaimpregnowane, sprawdzasz przed rozładunkiem.', frames: [
      { caption: 'Przy dostawie: stempel C24 i wilgotnościomierz (ok. 15–18%).', svg: a.svg(f1,480,320,'Stos tarcicy na podkładach pod folią, osoba mierzy wilgotność drewna') },
      { caption: 'Dobrze: na podkładach, przykryte. Źle: na ziemi, mokre i wygięte.', svg: a.svg(a.layout.compare(ok, bad, ['Na podkładach','Na błocie']),480,320,'Porównanie: drewno suche na podkładach i mokre wygięte na ziemi') } ] };
  });

  /* 3 ---------- Murłata i kotwy ---------- */
  // x wzdłuż wieńca 0–240, y 0–25; wieniec z 0–25, murłata z 27–41
  const XS = [30,120,210];
  BUDOWA.addIllus('06-dach/murlata-wieniec', function(a){
    const mk = () => a.iso(118,128,1);
    const base = P => P.box(0,0,-44,240,25,44,'ceramika') + P.box(0,0,0,240,25,25,'beton',{k:'wie'});
    const bolts = (P,z) => XS.map(x => P.bar([[x,12.5,25],[x,12.5,z]],4,{k:'kot'})).join('');
    const P1 = mk(), k1 = P1.P(120,12.5,48), w1 = P1.P(200,25,12);
    const f1 = base(P1) + bolts(P1,52) + a.fresh(P1.box(0,2,25,240,21,2,'papa',{k:'pap'})) + a.measure(P1.P(30,0,62)[0],P1.P(30,0,62)[1],P1.P(120,0,62)[0],P1.P(120,0,62)[1]);
    const P2 = mk(), h = P2.P(200,12,41);
    const f2 = base(P2) + P2.box(0,2,25,240,21,2,'papa') + a.move(P2.box(0,5.5,27,240,14,14,'drewno',{k:'mur'}),0,-60) + bolts(P2,50) +
      a.move(a.hand(h[0],h[1]-6,{s:.75}),0,-60);
    const P3 = mk(), l = P3.P(110,12.5,42);
    const nuts = XS.map(x => P3.box(x-4,8.5,41,8,8,3,'blacha')).join('');
    const f3 = base(P3) + P3.box(0,2,25,240,21,2,'papa') + P3.box(0,5.5,27,240,14,14,'drewno',{k:'mur'}) + bolts(P3,47) + a.fresh(nuts) +
      a.fresh(P3.box(70,8,41,90,9,6,'poziomica',{k:'poz'}),{d:300}) + a.ok(l[0]+10,l[1]-56,13);
    return { caption: 'Murłata 14 × 14 cm na papie, przykręcona do kotew zabetonowanych w wieńcu.', frames: [
      { caption: 'Kotwy M12–M14 wystają z wieńca co ok. 1–1,5 m; na koronę idzie pas papy.', svg: a.svg(a.layout.scene(f1, [
          {t:'Kotwy M12–M14', at:k1, side:'r', y:60, k:'kot', hot:1}, {t:'Papa pod drewnem', at:P1.P(180,12,27), side:'r', y:150, k:'pap'}, {t:'Wieniec', at:w1, side:'r', y:240, k:'wie'}]) +
          a.num(110,60,'co 1–1,5 m'),480,320,'Wieniec z kotwami i paskiem papy na koronie') },
      { caption: 'Przewiercona murłata nasuwa się na kotwy.', svg: a.svg(a.layout.scene(f2, [
          {t:'Murłata 14 × 14 cm', at:P2.P(60,12,41), side:'l', y:250, k:'mur', hot:1}]),480,320,'Murłata opada na kotwy wieńca') },
      { caption: 'Nakrętki z szerokimi podkładkami i kontrola poziomu: ± 5 mm.', svg: a.svg(a.layout.scene(f3, [
          {t:'Nakrętka + podkładka', at:P3.P(210,12,44), side:'r', y:110}, {t:'Poziomica', at:P3.P(115,12,47), side:'l', y:250, k:'poz'}]) +
          a.num(110,60,'± 5 mm'),480,320,'Murłata dokręcona nakrętkami, poziomica na wierzchu') } ] };
  });

  /* 4 ---------- Więźba ---------- */
  BUDOWA.addIllus('06-dach/wiezba-montaz', function(a){
    const up = {arms:[165,175], s:.8};
    const f1 = lift(a, section(a) + rafterL('kro') + a.move(rafterR('kro'),30,-50) + a.person(200,236,up) + a.person(300,236,Object.assign({flip:true},up)));
    const f2 = lift(a, section(a) + rafterL() + rafterR() + a.move(jetka(a),0,-30) + a.dim(300,236,300,157,'') + a.person(230,236,{s:.6,kask:false})) + a.num(366,160,'2,4–2,6 m');
    // rząd par krokwi w aksonometrii
    const P = a.iso(196,92,1.2); let r = P.box(0,-4,-20,190,12,20,'ceramika') + P.box(0,87,-20,190,12,20,'ceramika') + P.box(0,-2,0,190,8,4,'drewno') + P.box(0,89,0,190,8,4,'drewno');
    for (let i = 0; i < 7; i++){ const x = 8+i*29;
      r += a.fresh(P.line([[x,-6,-2],[x,47.5,42],[x,101,-2]],'il-ln','stroke:var(--il-drewno);stroke-width:6;stroke-linejoin:round') + P.line([[x,26,24],[x,69,24]],'il-ln','stroke:var(--il-drewno);stroke-width:4'),{d:i*110}); }
    const m = P.P(37,101,-2), n = P.P(66,101,-2);
    const f3 = r + a.dim(m[0],m[1]+16,n[0],n[1]+16,'') + a.num(130,290,'co 80–90 cm') + a.pill(360,40,'Montaż 2–3 tyg.');
    return { caption: 'Tradycyjna więźba ciesielska: pary krokwi spięte jętkami zostawiają otwarte poddasze.', frames: [
      { caption: 'Para krokwi opiera się na murłatach i spotyka w kalenicy.', svg: a.svg(a.layout.scene(f1, [{t:'Krokwie ok. 8 × 20 cm', at:[150,108], side:'l', y:60, k:'kro', hot:1}]),480,320,'Dwóch cieśli ustawia parę krokwi na murłatach') },
      { caption: 'Jętka spina parę krokwi na wysokości ok. 2,4–2,6 m nad podłogą.', svg: a.svg(a.layout.scene(f2, [{t:'Jętka', at:[180,116], side:'l', y:80, k:'jet', hot:1}]),480,320,'Jętka nad głową stojącej osoby') },
      { caption: 'Kolejne pary co 80–90 cm tworzą szkielet dachu.', svg: a.svg(f3,480,320,'Rząd par krokwi z jętkami na murłatach') } ] };
  });

  /* 5 ---------- Membrana ---------- */
  // połać widziana z góry: krokwie pionowo, pasy membrany poziomo od okapu
  const rafters = a => { let s = a.rect(20,262,440,10,'blacha',{r:2}); for (let x = 40; x < 450; x += 60) s += a.rect(x,30,18,232,'drewno',{r:1}); return s; };
  const stapler = '<path d="M-14 -6H14V4H-14Z" class="il-m c-maszyna"/><path d="M-12 4H12V9H-12Z" class="il-m c-kmb"/>';
  BUDOWA.addIllus('06-dach/membrana', function(a){
    const strip = (y,o) => a.rect(20,y,440,56,'membrana',Object.assign({r:1,st:'opacity:.92'},o));
    const f1 = rafters(a) + a.move(strip(206,{k:'mem'}),-300,0) + `<rect x="452" y="200" width="16" height="68" rx="8" class="il-m c-membrana"/>` +
      a.hand(176,214,{s:.8,hold:stapler}) + a.arrow([[330,180],[336,120],[330,60]]) + a.pill(240,24,'Od okapu ku kalenicy',{acc:1});
    const f2 = rafters(a) + strip(206) + a.move(strip(156,{k:'zak'}),0,-50) + a.rect(20,206,440,6,'kmb',{r:0,st:'opacity:.35'}) +
      a.drops(108,120,3) + a.arrow([[120,140],[124,190],[120,240]]) + a.ok(160,250,12);
    return { caption: 'Membrana wysokoparoprzepuszczalna zatrzymuje wodę, a wypuszcza parę.', frames: [
      { caption: 'Pierwszy pas wzdłuż okapu, przypinany do krokwi; ma lekko zwisać.', svg: a.svg(a.layout.scene(f1, [{t:'Membrana', at:[300,234], side:'r', y:290, k:'mem'}]),480,320,'Pas membrany rozwijany wzdłuż okapu i przypinany do krokwi') },
      { caption: 'Kolejny pas wyżej, z zakładem ok. 10–15 cm i taśmą; woda spływa po wierzchu.', svg: a.svg(a.layout.scene(f2, [{t:'Zakład 10–15 cm + taśma', at:[300,209], side:'r', y:110, k:'zak', hot:1}]),480,320,'Drugi pas membrany zachodzi na pierwszy; krople spływają po zakładzie') } ] };
  });

  /* 6 ---------- Kontrłaty i łaty ---------- */
  // przekrój wzdłuż krokwi, pochylony: lewo = okap, prawo = kalenica
  const T = 'rotate(-22 240 170)', R = (x,y) => { const c = Math.cos(-22*Math.PI/180), s = Math.sin(-22*Math.PI/180), dx = x-240, dy = y-170; return [240+dx*c-dy*s, 170+dx*s+dy*c]; };
  const LX = [50,133,216,299,382];
  const layers = (a,n) => {
    let s = a.rect(20,186,440,46,'drewno',{r:1,k:'kro'}) + a.rect(20,182,440,4,'membrana',{r:0});
    if (n > 0) s += (n === 1 ? a.move(a.rect(20,170,440,12,'drewno',{r:1,k:'kon'}),0,-40) : a.rect(20,170,440,12,'drewno',{r:1,k:'kon'}));
    if (n > 1) s += LX.map((x,i) => n === 2 ? a.fresh(a.rect(x,158,12,12,'drewno',{r:1,k:'lat'}),{d:i*120}) : a.rect(x,158,12,12,'drewno',{r:1,k:'lat'})).join('');
    if (n > 2) s += LX.map((x,i) => a.fresh(`<path d="M${x-4} 150H${x+96}L${x+92} 160H${x+2}V170H${x-4}Z" class="il-m c-dachowka"/>`,{d:i*90})).join('') +
      `<path class="il-arr draw" d="M28 176H452M440 169L452 176L440 183" style="stroke:var(--il-woda)"/>`;
    return a.g(s,{tr:T});
  };
  BUDOWA.addIllus('06-dach/kontrlaty-laty', function(a){
    const f1 = layers(a,1), f2 = layers(a,2), f3 = layers(a,3);
    const d1 = R(145,176), d2 = R(227,164), m = R(56,170), n = R(139,170);
    return { caption: 'Kontrłaty dają szczelinę wentylacyjną, łaty trzymają dachówkę.', frames: [
      { caption: 'Na membranie, wzdłuż każdej krokwi: kontrłata.', svg: a.svg(a.layout.scene(f1, [{t:'Kontrłata ok. 30 × 50 mm', at:d1, side:'l', y:70, k:'kon', hot:1}, {t:'Krokiew', at:R(320,210), side:'r', y:260, k:'kro'}]),480,320,'Kontrłata przybijana na membranę wzdłuż krokwi') },
      { caption: 'Poprzecznie łaty 40 × 50 mm, w rozstawie z dachówki: ok. 33 cm.', svg: a.svg(a.layout.scene(f2, [{t:'Łata 40 × 50 mm', at:d2, side:'l', y:70, k:'lat', hot:1}]) +
          a.dim(m[0],m[1]-34,n[0],n[1]-34,'') + a.num(330,90,'co ok. 33 cm'),480,320,'Łaty przybite poprzecznie do kontrłat') },
      { caption: 'Powietrze płynie pod dachówką od okapu do kalenicy.', svg: a.svg(a.layout.scene(f3, [{t:'Wylot w kalenicy', at:R(450,176), side:'r', y:60}, {t:'Wlot przy okapie', at:R(30,176), side:'l', y:290}]) +
          a.num(330,280,'szczelina 3–5 cm'),480,320,'Strzałka przepływu powietrza w szczelinie pod dachówką') } ] };
  });

  /* 7 ---------- Pokrycie ---------- */
  BUDOWA.addIllus('06-dach/pokrycie', function(a){
    let bat = '', rows = '';
    for (let i = 0; i < 7; i++){ const y = 242 - i*30; bat += a.rect(20,y,440,7,'drewno',{r:1}); if (i < 4) rows += a.fresh(a.tiles(20,y-4,440,11),{d:i*180}); }
    const tile = '<path class="il-m c-dachowka" d="M-20 0h40v22q-20 9 -40 0z"/>';
    const f1 = rafters(a) + bat + rows + a.move(a.hand(300,96,{s:.85,hold:a.g(tile,{tr:'translate(0 4)'})}),40,-50) +
      a.pill(120,24,'Rząd po rzędzie w górę') + a.num(380,24,'ok. 255 m²');
    // szczegół: dachówka zaczepiona noskiem o łatę, klamra
    const f2 = a.rect(20,236,440,26,'drewno',{r:1}) + a.rect(20,222,440,14,'drewno',{r:1}) + a.rect(20,218,440,4,'membrana',{r:0}) +
      [90,250].map(x => a.rect(x,190,40,32,'drewno',{r:1,k:'lat'})).join('') +
      [70,230].map(x => `<path d="M${x} 150H${x+200}L${x+196} 172H${x+64}V194H${x+44}V178H${x-6}Z" class="il-m c-dachowka"/>`).join('') +
      `<path class="il-rb" d="M300 150V140H318V196H290" style="stroke-width:3" data-k="kla"/>`;
    return { caption: 'Ciemna dachówka ceramiczna: od okapu do kalenicy, zaczepiana o łaty i mocowana klamrami.', frames: [
      { caption: 'Dachówki rząd po rzędzie, od okapu w górę.', svg: a.svg(f1,480,320,'Dłoń kładzie dachówkę na kolejnej łacie, niższe rzędy już ułożone') },
      { caption: 'Każda dachówka wisi noskiem na łacie; w strefach brzegowych dochodzi klamra.', svg: a.svg(a.layout.scene(f2, [
          {t:'Nosek na łacie', at:[118,190], side:'l', y:80, k:'lat'}, {t:'Klamra', at:[318,168], side:'r', y:80, k:'kla', hot:1}]) +
          a.num(240,290,'ok. 40–45 kg/m²'),480,320,'Przekrój: dachówki zaczepione noskami o łaty, klamra przy krawędzi') } ] };
  });

  /* 8 ---------- Obróbki komina ---------- */
  BUDOWA.addIllus('06-dach/obrobki-kominek', function(a){
    const roof = '<path d="M0 230L222 94V244H0Z" class="il-m c-dachowka"/>';
    const chim = a.rect(96,40,46,150,'ceramika',{r:1}) + a.rect(90,32,58,12,'beton',{r:2});
    const ok = roof + chim + '<path d="M80 184L152 140V122L96 156V172L80 180Z" class="il-m c-blacha"/>' +
      a.arrow([[212,104],[182,110],[156,114]]) + a.arrow([[84,196],[62,206],[34,214]]) + a.pill(111,226,'kołnierz + fartuch');
    const bad = roof + chim + '<path d="M96 158H142V164H96Z" class="il-m c-papier"/>' + a.drops(118,176,3) + a.drops(124,206,2) + a.pill(111,226,'przecieka pod dachówkę');
    return { caption: 'Najwięcej przecieków jest przy kominie kominka, w koszach i przy ścianach.',
      svg: a.svg(a.layout.compare(ok, bad, ['Kołnierz z blachy','Sam silikon']),480,320,'Komin w połaci: z kołnierzem i fartuchem z blachy oraz tylko z silikonem') };
  });

  /* 9 ---------- Okna dachowe ---------- */
  BUDOWA.addIllus('06-dach/okna-dachowe', function(a){
    const open = a.rect(220,118,18,8,'drewno',{r:1}) + a.rect(158,118,140,10,'drewno',{r:1,k:'wym'}) + a.rect(158,236,140,10,'drewno',{r:1,k:'wym'});
    const f1 = rafters(a) + a.rect(178,128,100,108,'kmb',{r:0,st:'opacity:.25'}) + open + a.move(a.window(178,128,100,108,{k:'okn'}),0,-90);
    let t = ''; for (let i = 0; i < 8; i++){ const y = 248 - i*30; t += a.tiles(20,y,150,4) + a.tiles(292,y,168,4); }
    const f2 = rafters(a) + open + t + a.fresh(a.rect(170,120,116,124,'welna',{r:3,k:'izo'})) + a.fresh(a.rect(168,118,120,128,'blacha',{r:6,k:'kol'}),{d:250}) + a.window(178,128,100,108);
    // przekrój: osoba przy oknie na poddaszu
    const f3 = a.rect(20,250,440,12,'beton',{r:1}) + a.rect(20,190,30,60,'ceramika',{r:0}) + a.rect(20,262,30,54,'ceramika',{r:0}) +
      '<path d="M30 186L238 12H258L44 200Z" class="il-m c-dachowka"/><path d="M62 166L126 112L140 124L76 178Z" class="il-m c-szklo" data-k="okn"/>' +
      a.person(210,250,{s:1.05,kask:false,arms:[5,40],flip:true}) + a.dim(100,250,100,174,'') + a.num(140,214,'90–110 cm');
    return { caption: 'Cztery okna dachowe ok. 78 × 140 cm: osadzone w więźbie, z kołnierzem i izolacją.', frames: [
      { caption: 'Okno wchodzi między krokwie, na wymiany z kroku 4.', svg: a.svg(a.layout.scene(f1, [{t:'Wymiany', at:[260,123], side:'r', y:80, k:'wym'}, {t:'Okno 78 × 140 cm', at:[228,200], side:'r', y:200, k:'okn', hot:1}]),480,320,'Okno dachowe opuszczane między krokwie') },
      { caption: 'Wokół ramy zestaw izolacyjny, na wierzchu kołnierz dopasowany do dachówki.', svg: a.svg(a.layout.scene(f2, [{t:'Kołnierz do dachówki', at:[176,124], side:'l', y:60, k:'kol', hot:1}, {t:'Zestaw izolacyjny', at:[282,240], side:'r', y:270, k:'izo'}]),480,320,'Okno dachowe w kołnierzu z izolacją, dookoła dachówki') },
      { caption: 'Dolna krawędź ok. 90–110 cm nad podłogą: widać ogród, okno łatwo otworzyć.', svg: a.svg(f3,480,320,'Przekrój poddasza: osoba przy oknie dachowym, wysokość dolnej krawędzi') } ] };
  });

  /* 10 ---------- Rynny ---------- */
  BUDOWA.addIllus('06-dach/rynny', function(a){
    const eaves = a.rect(20,60,440,40,'dachowka',{r:0}) + a.tiles(20,96,440,14) + a.rect(20,112,440,24,'drewno',{r:1});
    const hooks = [50,150,250,350].map((x,i) => `<path class="il-rb" d="M${x} 126V${150+i*4}q0 14 14 14" style="stroke-width:3"/>`).join('');
    const f1 = eaves + hooks + LN(a,[[40,146],[440,162]],1.5,'var(--il-bad)') + a.ok(420,210,12);
    const gut = '<path d="M30 140L420 156V172Q420 182 410 182L40 166Q30 166 30 156Z" class="il-m c-blacha"/>';
    const f2 = eaves + hooks + gut + a.drops(120,150,3) + a.arrow([[90,196],[240,204],[380,212]]) + a.ground(0,282,480,36) + a.rect(340,290,110,22,'woda',{r:8,k:'rur'}) + a.rect(398,178,18,114,'blacha',{r:2,k:'rur'});
    return { caption: 'Rynny ze stali powlekanej, ok. 43 mb i ok. 6 rur spustowych.', frames: [
      { caption: 'Haki na sznurze ze spadkiem 3–5 mm na metr do rury spustowej.', svg: a.svg(a.layout.scene(f1, [{t:'Haki przed pokryciem', at:[150,154], side:'l', y:240}]) + a.num(240,236,'spadek 3–5 mm/mb'),480,320,'Haki rynnowe przy okapie wyznaczone sznurem ze spadkiem') },
      { caption: 'Woda spływa do rury, a z niej do zbiornika lub drenażu (etap 15).', svg: a.svg(a.layout.scene(f2, [{t:'Do zbiornika, nie do kanalizacji', at:[360,300], side:'l', y:250, k:'rur', hot:1}]) + a.num(240,30,'ok. 43 mb · 6 rur'),480,320,'Rynna ze spadkiem i rura spustowa prowadząca wodę w dół') } ] };
  });

  /* 11 ---------- Śnieg, wyłaz, ławy ---------- */
  BUDOWA.addIllus('06-dach/snieg-wylaz', function(a){
    const roof = '<path d="M10 70L190 150V164L10 84Z" class="il-m c-dachowka"/>' + a.rect(30,160,150,84,'papier',{r:0}) + a.rect(130,186,30,58,'drewno',{r:1});
    const ok = roof + '<path d="M40 70L140 116L130 98L50 62Z" class="il-m c-eps"/>' + `<path class="il-ln" d="M136 110V96M146 114V100M130 104L150 112" style="stroke-width:3;stroke:var(--il-blacha)"/>` +
      a.person(100,244,{s:.7,kask:false}) + a.pill(111,20,'płotki ok. 25–30 mb');
    const bad = roof + a.move('<path d="M160 160L210 176L204 190L150 178Z" class="il-m c-eps"/>',-40,-30) + a.arrow([[150,140],[190,156],[200,196]]) + a.person(110,244,{s:.7,kask:false,arms:[150,160]});
    const f2 = '<path d="M20 290L120 30H360L460 290Z" class="il-m c-dachowka"/>' + a.rect(236,4,44,70,'ceramika',{r:1,k:'kom'}) +
      a.rect(150,200,70,54,'blacha',{r:4,k:'wyl'}) + a.rect(158,208,54,38,'szklo',{r:2});
    let st = ''; for (let i = 0; i < 4; i++) st += a.rect(238,182-i*30,40,8,'blacha',{r:2,k:'law'});
    return { caption: 'Dach 40° zrzuca śnieg płatami; płotki, wyłaz i ława kominiarska to bezpieczeństwo.', frames: [
      { caption: 'Płotki nad wejściem, tarasem i garażem trzymają śnieg na dachu.', svg: a.svg(a.layout.compare(ok, bad, ['Z płotkiem','Bez płotka']),480,320,'Porównanie: płotek trzyma śnieg nad wejściem; bez płotka śnieg spada na osobę') },
      { caption: 'Wyłaz i ława kominiarska: bezpieczna droga do komina kominka.', svg: a.svg(a.layout.scene(f2 + st, [{t:'Wyłaz dachowy', at:[150,228], side:'l', y:228, k:'wyl'}, {t:'Ława kominiarska', at:[278,120], side:'r', y:150, k:'law', hot:1}, {t:'Komin kominka', at:[280,40], side:'r', y:50, k:'kom'}]),480,320,'Połać z wyłazem i stopniami ławy kominiarskiej prowadzącymi do komina') } ] };
  });

  /* 12 ---------- Pod PV, podbitka ---------- */
  BUDOWA.addIllus('06-dach/pod-pv-podbitka', function(a){
    const f1 = a.rect(20,200,440,46,'drewno',{r:1}) + a.rect(20,196,440,4,'membrana',{r:0}) + a.rect(20,184,440,12,'drewno',{r:1}) +
      [60,190,320].map(x => a.rect(x,172,14,12,'drewno',{r:1})).join('') + a.tiles(20,158,170,3) + a.tiles(320,158,140,3) +
      a.fresh(`<path class="il-rb" d="M220 200V176H246V128H300" style="stroke-width:6" data-k="hak"/>`) + a.move(a.hand(262,118,{s:.75,hold:a.drill(-6,4,.6)}),40,-30);
    let pv = ''; for (let i = 0; i < 4; i++) for (let j = 0; j < 2; j++) pv += a.rect(110+i*66,70+j*90,60,84,'szklo',{r:3});
    const f2 = '<path d="M20 290L80 40H400L460 290Z" class="il-m c-dachowka"/>' + a.ghost(pv) + a.rect(330,230,28,22,'kmb',{r:3,k:'prz'}) + a.rect(20,290,440,20,'drewno',{r:1,k:'pod'});
    return { caption: 'Haki pod PV i przepust kablowy montujesz teraz, podbitka czeka na etap 12.', frames: [
      { caption: 'Hak przykręcony do krokwi wychodzi między dachówkami.', svg: a.svg(a.layout.scene(f1, [{t:'Hak na krokwi', at:[230,196], side:'l', y:80, k:'hak', hot:1}]),480,320,'Hak dachowy przykręcany wkrętarką do krokwi pod dachówką') },
      { caption: 'Miejsce na 8 modułów (etap 10), przepust z rurą osłonową; podbitka w etapie 12.', svg: a.svg(a.layout.scene(f2, [{t:'Przepust + rura Ø 32–40', at:[344,241], side:'r', y:200, k:'prz'}, {t:'Podbitka: etap 12', at:[60,300], side:'l', y:250, k:'pod'}]) +
          a.num(240,24,'8 modułów PV'),480,320,'Połać z zarysem ośmiu modułów PV i przepustem kablowym') } ] };
  });

  /* 13 ---------- Odbiór dachu ---------- */
  BUDOWA.addIllus('06-dach/odbior-dachu', function(a){
    const f1 = a.rect(20,250,440,12,'beton',{r:1}) + '<path d="M20 200L240 20L460 200V214L240 34L20 214Z" class="il-m c-drewno"/>' +
      a.rect(196,60,30,190,'ceramika',{r:1,k:'kom'}) + a.drops(60,40,3) + a.drops(380,48,3) + a.drops(150,10,2) +
      '<path d="M302 156L226 110V170Z" class="il-m c-poziomica" style="opacity:.35"/>' + a.person(320,250,{flip:true,kask:false,arms:[10,150]}) + a.ok(262,196,12);
    const drop = (x,y) => `<path class="il-m c-woda" d="M${x} ${y-12}q-10 14 0 20q10 -6 0 -20z"/>`;
    const cam = (x,y) => a.rect(x-12,y-8,24,17,'kmb',{r:3}) + `<circle cx="${x}" cy="${y}" r="5" class="il-m c-szklo"/>`;
    const f2 = a.layout.steps([{icon:drop(70,150), t:'Po ulewie'}, {icon:cam(183.3,150), t:'Zdjęcia'}, {icon:'kask', t:'Kierownik'}, {icon:a.doc(398,136,24,28,{lines:2}), t:'Dziennik'}]);
    return { caption: 'Odbiór dachu i najtańszy test szczelności: poddasze po ulewie.', frames: [
      { caption: 'Po pierwszej dużej ulewie: latarka i poddasze, zwłaszcza komin, okna i kosze.', svg: a.svg(a.layout.scene(f1, [{t:'Przy kominie sucho', at:[226,120], side:'l', y:150, k:'kom'}]),480,320,'Osoba na poddaszu oświetla komin po deszczu') },
      { caption: 'Zdjęcia przed zakryciem, odbiór kierownika i wpis do dziennika.', svg: a.svg(f2,480,320,'Kroki odbioru: test po ulewie, zdjęcia, kierownik, wpis') } ] };
  });
})();
