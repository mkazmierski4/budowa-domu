/* Ilustracje etapu 11 — Tynki, wylewki, sucha zabudowa, ocieplenie poddasza. Liczby zgodne z treścią kroków i docs/DECYZJE.md
   (wełna 20 + 10 cm, U ≤ 0,15, zakład folii min. 10 cm, tynk gipsowy 1–1,5 cm, EPS 100 15 cm, jastrych 6,5 cm,
   rury ok. 3 bar przy wylewaniu, grzanie od ok. 7/21 dni, CM anhydryt ok. 0,3%, kolankowa 1,0 m, łata 2 m). */
(function(){
  const S = (a, s, l) => a.svg(s, 480, 320, l);
  // agregat tynkarski; x,y = środek podstawy
  const agregat = (a, x, y) => a.g(a.shadow(0,0,40,6) + a.rect(-34,-46,68,40,'maszyna',{r:6}) + a.poly([[-26,-46],[-18,-70],[18,-70],[26,-46]],'blacha') +
    `<circle cx="-22" cy="-6" r="7" class="il-m c-kmb"/><circle cx="22" cy="-6" r="7" class="il-m c-kmb"/>`, {tr:`translate(${x} ${y})`});
  // wałek: x,y = środek walca
  const roller = (a, x, y, mat) => a.rect(x-26,y-8,52,16,mat || 'welna',{r:8}) + a.line(`M${x} ${y-8}V${y-40}`,'il-ln','stroke-width:3');
  // manometr, v w barach (skala 0–10)
  const gauge = (a, x, y, r, v) => { const t = (135 + v*27)*Math.PI/180;
    return `<circle cx="${x}" cy="${y}" r="${r}" class="il-m c-papier"/><circle cx="${x}" cy="${y}" r="${r}" class="il-ring"/>` +
      a.line(`M${x} ${y}L${Math.round(x+Math.cos(t)*r*.7)} ${Math.round(y+Math.sin(t)*r*.7)}`,'il-ln','stroke-width:3.5') + `<circle cx="${x}" cy="${y}" r="4" class="il-m c-kmb"/>`; };
  // nagrzewnica elektryczna; x,y = środek podstawy
  const heater = (a, x, y) => a.g(a.shadow(0,0,30,5) + a.rect(-26,-50,52,46,'blacha',{r:8}) + a.rect(-16,-40,32,26,'kmb',{r:4}) +
    a.line('M-12 -34H12M-12 -27H12M-12 -20H12','il-ln','stroke:var(--il-bad);stroke-width:2.5') + a.rect(-20,-6,6,6,'kmb',{r:1}) + a.rect(14,-6,6,6,'kmb',{r:1}), {tr:`translate(${x} ${y})`});
  const fire = (a, x, y) => a.poly([[x-16,y],[x-12,y-20],[x-4,y-10],[x,y-28],[x+6,y-12],[x+12,y-20],[x+16,y]],'bad');
  const pipes = (a, x0, x1, y, step, skip) => { let s = ''; for (let x = x0; x <= x1; x += step) if (!skip || Math.abs(x - skip) > 30) s += `<circle cx="${x}" cy="${y}" r="5" class="il-m c-bad"/>`; return s; };

  /* 1. Kolejność prac ---------------------------------------------------- */
  BUDOWA.addIllus('11-tynki-wylewki/kolejnosc-prac', function(a){
    const y = 150, xs = [70,155,240,325,410];
    const ic = [
      x => a.rect(x-12,y-9,24,18,'welna',{r:4}),
      x => a.trowel(x-8,y-2,.6),
      x => a.rect(x-12,y-8,24,8,'eps',{r:1}) + a.rect(x-12,y,24,8,'eps',{r:1}),
      x => a.rect(x-12,y-4,24,12,'beton',{r:2}) + `<circle cx="${x-5}" cy="${y+2}" r="3" class="il-m c-bad"/><circle cx="${x+5}" cy="${y+2}" r="3" class="il-m c-bad"/>`,
      x => a.rect(x-9,y-12,18,24,'papier',{r:1}) + a.line(`M${x} ${y-12}V${y+12}`,'il-jt')
    ];
    const s = a.text(240,40,'Kolejność prac w etapie 11',{b:1,a:'middle'}) +
      a.layout.steps(['Wełna i folia','Tynki','Styropian','Wylewka','Płyty g-k'].map((t,i) => ({t, icon: ic[i](xs[i]), k:'s'+i}))) +
      a.num(240,272,'Prace mokre przed płytami g-k');
    return { caption:'Najpierw zamykamy poddasze, potem prace mokre (tynki, wylewki), a płyty g-k na końcu, gdy dom przestanie parować.', svg:S(a,s,'Pięć kroków: wełna i folia, tynki, styropian, wylewka, płyty g-k') };
  });

  /* 2. Ocieplenie poddasza ----------------------------------------------- */
  function dach(a, low, prof){
    const top = a.tiles(90,34,300,10) + a.rect(90,56,300,10,'drewno',{r:1}) + a.rect(90,66,300,6,'membrana',{r:0,k:'mem'});
    const s = top + a.rect(90,72,30,84,'welna',{r:0}) + a.rect(360,72,30,84,'welna',{r:0}) +
      a.rect(120,72,30,84,'drewno',{r:1,k:'kro'}) + a.rect(330,72,30,84,'drewno',{r:1,k:'kro'});
    const lo = a.rect(90,156,300,42,'welna',{r:0,k:'w10'}) + a.rect(132,156,6,42,'blacha',{r:1}) + a.rect(342,156,6,42,'blacha',{r:1});
    const cd = a.rect(90,198,300,8,'blacha',{r:1,k:'cd'});
    return s + (low ? (low === 1 ? lo : a.move(lo, 0, 90)) : '') + (prof ? (prof === 1 ? cd : a.fresh(cd,{d:500})) : '');
  }
  BUDOWA.addIllus('11-tynki-wylewki/ocieplenie-poddasza', function(a){
    const mid = a.rect(150,72,180,84,'welna',{r:0,k:'w20'});
    const f1 = dach(a) + a.move(mid + a.hand(240,168,{r:180}), 0, 90);
    const f2 = dach(a,2,2) + mid;
    const f3 = dach(a,1,1) + mid + a.dim(410,66,410,206,'',{d:300}) + a.num(442,136,'30 cm',{d:400}) + a.num(240,262,'U ≤ 0,15 W/(m²·K)',{d:600});
    return { caption:'Dwie warstwy wełny: 20 cm między krokwiami i 10 cm pod nimi, w stelażu z profili.', frames:[
      { caption:'Wełna 20 cm na wcisk wypełnia całą wysokość krokwi, aż do membrany.', svg:S(a, a.layout.scene(f1, [
        {t:'Membrana (etap 06)', at:[100,69], side:'l', y:110, k:'mem'},
        {t:'Krokiew 8 × 20', at:[135,140], side:'l', y:240, k:'kro'},
        {t:'Wełna 20 cm', at:[310,110], side:'r', y:250, k:'w20', hot:1} ]), 'Wełna wciskana między krokwie od spodu') },
      { caption:'Pod krokwiami wieszaki, druga warstwa 10 cm i profile CD pod płyty.', svg:S(a, a.layout.scene(f2, [
        {t:'Wieszak', at:[135,180], side:'l', y:240, k:'wsz'},
        {t:'Wełna 10 cm', at:[380,176], side:'r', y:250, k:'w10', hot:1},
        {t:'Profil CD', at:[300,202], side:'r', y:290, k:'cd'} ]), 'Druga warstwa wełny pod krokwiami w stelażu') },
      { caption:'Razem ok. 30 cm wełny: drewno krokwi jest przykryte, dach spełnia WT2021.', svg:S(a, f3, 'Dwie warstwy wełny razem ok. 30 cm, U nie większe niż 0,15') } ] };
  });

  /* 3. Paroizolacja ------------------------------------------------------ */
  function paro1(a){
    const wall = a.rect(100,40,44,222,'ceramika',{r:0}) + a.rect(0,262,480,58,'beton',{r:0});
    const foil = a.rect(150,60,170,190,'folia',{r:2,st:'opacity:.85'}) + a.rect(290,60,110,190,'folia',{r:2,st:'opacity:.85'});
    const bead = a.rect(144,60,10,190,'kmb',{r:5,k:'masa'}) + a.line('M150 150q-14 10 0 20','il-ln','stroke-width:2.5');
    const tape = a.fresh(a.rect(296,60,22,190,'blacha',{r:2,k:'tas'}),{d:300});
    const rol = a.move(roller(a,307,150,'blacha') + a.hand(307,110,{s:.9}), 0, -80);
    return a.layout.scene(wall + foil + bead + tape + rol + a.dim(290,276,320,276,'min. 10 cm',{dy:-2,d:600}), [
      {t:'Masa z luzem przy murze', at:[149,120], side:'l', y:34, k:'masa'},
      {t:'Taśma na zakładzie', at:[318,200], side:'r', y:200, k:'tas', hot:1} ]);
  }
  function paro2(a){
    const sheet = a.rect(20,20,182,150,'folia',{r:4,st:'opacity:.85'});
    const ok = sheet + a.rect(96,80,30,30,'kmb',{r:15}) + a.cable([[111,95],[111,200]],'var(--il-bad)') + a.text(111,214,'mankiet na przejściu',{s:1,a:'middle'});
    let holes = ''; [[50,50],[90,70],[140,40],[60,130],[160,120],[120,150]].forEach(p => { holes += `<circle cx="${p[0]}" cy="${p[1]}" r="3" class="il-m c-kmb"/>`; });
    const bad = sheet + holes + a.fresh(a.arrow([[60,100],[110,110],[170,90]]) ,{d:300}) + a.text(111,214,'zszywki bez taśmy: przeciąg',{s:1,a:'middle'});
    return a.layout.compare(ok, bad, ['Szczelne przejście', 'Dziury i luźne zakłady']);
  }
  BUDOWA.addIllus('11-tynki-wylewki/paroizolacja', function(a){
    return { caption:'Folia od ciepłej strony, sklejona na zakładach, przyklejona do muru i szczelna przy każdym przejściu.', frames:[
      { caption:'Zakład min. 10 cm dociskasz taśmą wałkiem, przy murze pas masy z luzem.', svg:S(a,paro1(a),'Folia paroizolacyjna: zakład z taśmą i połączenie z murem na masie') },
      { caption:'Kabel przez mankiet, a nie przez dziurę. Każda nieszczelność to przeciąg i wilgoć w wełnie.', svg:S(a,paro2(a),'Dobrze: mankiet na kablu. Źle: dziury po zszywkach i przeciąg') } ] };
  });

  /* 4. Tynki: wybór ------------------------------------------------------ */
  BUDOWA.addIllus('11-tynki-wylewki/tynki-wybor', function(a){
    const col = (x, wall, name, note, k) => a.rect(x,50,136,180,'ceramika',{r:6}) + wall + a.pill(x+68,252,name,{k}) + a.text(x+68,290,note,{s:1,a:'middle'});
    let dots = ''; for (let r = 0; r < 7; r++) for (let c = 0; c < 5; c++) dots += `<circle cx="${192 + c*24 + (r%2)*10}" cy="${72 + r*22 + (c%3)*4}" r="2.4" class="il-m c-zwir"/>`;
    const gips = a.rect(28,58,120,164,'papier',{r:4}) + '<path class="il-shine" d="M44 200L120 80"/>';
    const cw = a.rect(180,58,120,164,'piasek',{r:4}) + dots;
    const gk = a.rect(332,58,120,164,'papier',{r:2}) + a.line('M392 58V222','il-jt') + [80,120,160,200].map(y => `<circle cx="340" cy="${y}" r="2" class="il-m c-kmb"/><circle cx="444" cy="${y}" r="2" class="il-m c-kmb"/>`).join('');
    const s = col(20, gips, 'Gipsowy', 'gładko od razu', 'gip') + col(172, cw, 'Cem.-wap.', 'faktura, potrzebna gładź', 'cw') + col(324, gk, 'Suchy tynk g-k', 'płyta na kleju', 'gk') +
      a.fresh(a.ok(40,70,14),{d:300}) + a.num(88,30,'1–1,5 cm',{d:500});
    return { caption:'W domu tynk gipsowy maszynowy, w garażu cementowo-wapienny. Suchy tynk g-k tylko przy bardzo napiętych terminach.', svg:S(a,s,'Trzy rodzaje tynku: gipsowy, cementowo-wapienny i suchy tynk z płyt') };
  });

  /* 5. Przygotowanie ścian ----------------------------------------------- */
  function sciana(a){
    return a.rect(0,262,480,58,'beton',{r:0}) + a.blocks(160,98,200,164,40,27,'ceramika') + a.rect(160,62,200,36,'beton',{r:0}) + a.window(236,140,80,100);
  }
  BUDOWA.addIllus('11-tynki-wylewki/przygotowanie-scian', function(a){
    const wet = a.rect(164,150,64,108,'woda',{r:2,st:'opacity:.35'});
    const f1 = a.layout.scene(sciana(a) + a.fresh(wet,{d:400}) + a.move(a.hand(200,150,{hold:a.brush(0,4,.9)}), 0, -60), [
      {t:'Grunt na pustak', at:[180,230], side:'l', y:240, k:'gr', hot:1},
      {t:'Wieniec: grunt z piaskiem', at:[340,80], side:'r', y:40, k:'bk'} ]);
    let mesh = ''; for (let x = 166; x < 360; x += 12) mesh += `M${x} 84V114`; for (let y = 88; y < 114; y += 10) mesh += `M160 ${y}H360`;
    const f2 = a.layout.scene(sciana(a) + a.fresh(a.line(mesh,'il-ln','stroke-width:1;opacity:.6') + a.rect(160,84,200,30,'papier',{r:0,st:'opacity:.25'}),{d:200}) +
      a.fresh(a.rect(356,98,8,164,'blacha',{r:2,k:'nar'}),{d:500}) + a.fresh(`<rect x="232" y="136" width="88" height="108" rx="4" class="il-m c-blacha" style="fill:none;stroke-width:5"/>`,{d:700}), [
      {t:'Siatka na styku', at:[200,100], side:'l', y:110, k:'sia', hot:1},
      {t:'Listwa przyokienna', at:[234,200], side:'l', y:220, k:'lis'},
      {t:'Narożnik w pionie', at:[362,180], side:'r', y:180, k:'nar'} ]);
    return { caption:'Grunt, siatka na styku betonu z pustakiem, narożniki i listwy przy oknach: jeden dzień pracy, mniej rys na lata.', frames:[
      { caption:'Pustak pije wodę: grunt zmniejsza chłonność. Gładki beton dostaje grunt z piaskiem.', svg:S(a,f1,'Gruntowanie ściany z pustaka pędzlem') },
      { caption:'Siatka na wieńcu, narożnik na zaprawie w pionie, listwa przy ramie okna.', svg:S(a,f2,'Siatka na styku wieńca z murem, narożnik i listwa przyokienna') } ] };
  });

  /* 6. Tynkowanie -------------------------------------------------------- */
  function scianaT(a, cov){
    return a.rect(0,262,480,58,'beton',{r:0}) + a.blocks(30,110,420,152,42,26,'ceramika') + a.rect(30,100,420,10,'beton',{r:0}) + (cov ? a.rect(30,110,cov,152,'papier',{r:0,k:'tyn'}) : '');
  }
  BUDOWA.addIllus('11-tynki-wylewki/tynkowanie', function(a){
    const blob = a.rect(150,110,56,152,'papier',{r:18,k:'tyn'});
    const f1 = scianaT(a,120) + a.fresh(blob,{d:300}) + agregat(a,400,262) + a.pipe([[372,250],[300,258],[262,230],[224,186]],6,'rura') +
      a.person(250,262,{flip:1,arms:[40,120],hold:a.rect(-4,-6,18,8,'blacha',{r:2})});
    const lata = a.rect(40,0,200,8,'blacha',{r:2,k:'lat'});
    const f2 = scianaT(a,220) + a.move(a.g(lata,{tr:'translate(0 166)'}), 0, 50) + a.person(150,262,{arms:[165,160]}) + a.num(340,60,'1–1,5 cm',{d:400});
    const f3 = scianaT(a,420) + a.person(250,262,{flip:1,arms:[30,135],hold:a.trowel(-6,-2,.9)}) + a.fresh(a.ok(400,70,14),{d:400});
    return { caption:'Agregat natryskuje gips, łata ściąga nadmiar, a paca wygładza ścianę pod farbę.', frames:[
      { caption:'Natrysk agregatem: najpierw sufit, potem ściana, warstwa ok. 1–1,5 cm.', svg:S(a, a.layout.scene(f1, [
        {t:'Agregat', at:[400,226], side:'r', y:60, k:'agr'},
        {t:'Natrysk gipsu', at:[190,150], side:'l', y:60, k:'tyn', hot:1} ]), 'Tynkarz natryskuje gips agregatem') },
      { caption:'Łata h ściąga nadmiar w pionie i poziomie.', svg:S(a, a.layout.scene(f2, [{t:'Łata h', at:[60,170], side:'l', y:60, k:'lat', hot:1}]), 'Ściąganie tynku łatą') },
      { caption:'Po związaniu zacieranie i gładzenie pacą: gładka ściana bez gładzi.', svg:S(a, a.layout.scene(f3, [{t:'Gładzenie pacą', at:[214,180], side:'l', y:60, k:'pac', hot:1}]), 'Gładzenie tynku pacą') } ] };
  });

  /* 7. Suszenie budynku -------------------------------------------------- */
  function room(a){
    const win = a.rect(36,120,20,100,'blacha',{r:2}) + a.poly([[56,124],[96,112],[96,228],[56,216]],'szklo');
    const air = a.fresh(a.arrow([[260,150],[150,140],[40,150]]),{d:300}) + a.fresh(a.arrow([[300,190],[180,180],[60,180]]),{d:500});
    return a.rect(0,262,480,58,'beton',{r:0}) + a.rect(20,92,16,170,'ceramika',{r:0}) + a.rect(444,92,16,170,'ceramika',{r:0}) + a.rect(20,80,440,12,'beton',{r:0}) +
      win + air + heater(a,330,262) + a.rect(420,140,22,32,'papier',{r:4,k:'hig'}) + a.text(431,162,'%',{s:1,a:'middle'});
  }
  BUDOWA.addIllus('11-tynki-wylewki/suszenie-budynku', function(a){
    const f1 = a.layout.scene(room(a), [
      {t:'Okna na przestrzał 10–15 min', at:[76,130], side:'l', y:40, k:'okn', hot:1},
      {t:'Nagrzewnica elektryczna', at:[330,220], side:'r', y:290, k:'nag'},
      {t:'Higrometr', at:[420,150], side:'r', y:40, k:'hig'} ]);
    const fl = a.rect(0,226,222,18,'beton',{r:0});
    const ok = fl + a.rect(20,40,60,90,'szklo',{r:3}) + heater(a,111,226) + a.text(150,140,'suche ciepło',{s:1,a:'middle'});
    const bad = fl + a.rect(86,180,50,46,'blacha',{r:6}) + a.fresh(fire(a,111,180),{d:200}) + a.rect(20,40,60,90,'szklo',{r:3}) + a.fresh(a.drops(36,70,4),{d:400}) + a.text(150,140,'gaz: woda i spaliny',{s:1,a:'middle'});
    return { caption:'Tynki i wylewki oddają tony wody. Grzej nagrzewnicą elektryczną i wietrz krótko, ale szeroko.', frames:[
      { caption:'Ok. 10–20°C, wietrzenie na przestrzał i higrometr na każdej kondygnacji.', svg:S(a,f1,'Pokój z otwartym oknem, nagrzewnicą i higrometrem') },
      { caption:'Nagrzewnica gazowa z płomieniem dokłada wody: na szybach skrapla się rosa.', svg:S(a,a.layout.compare(ok,bad,['Elektryczna','Gazowa w środku']),'Dobrze: nagrzewnica elektryczna. Źle: gazowa i rosa na szybie') } ] };
  });

  /* 8. Styropian, folia, taśma ------------------------------------------- */
  function floor(a, n){
    let s = a.rect(140,40,40,280,'ceramika',{r:0}) + a.rect(180,40,6,224,'papier',{r:0,k:'tyn'}) + a.rect(140,270,340,50,'beton',{r:0,k:'pod'}) + a.rect(180,264,300,6,'papa',{r:0,k:'pap'});
    const e1 = a.rect(186,214,294,50,'eps',{r:0,k:'eps'}) + a.line('M300 214V264','il-jt');
    const e2 = a.rect(186,189,294,25,'eps',{r:0,k:'eps'}) + a.line('M380 189V214','il-jt');
    const fo = a.rect(186,186,294,3,'folia',{r:0,k:'fol'});
    s += n === 1 ? a.move(e1, 0, -70) : e1;
    if (n >= 2) s += n === 2 ? a.move(e2, 0, -60) + a.fresh(fo,{d:600}) : e2 + fo;
    return s;
  }
  BUDOWA.addIllus('11-tynki-wylewki/warstwy-podlogi', function(a){
    const f1 = a.layout.scene(floor(a,1), [
      {t:'Papa (etap 04)', at:[440,267], side:'r', y:150, k:'pap'},
      {t:'EPS 100, 10 cm', at:[420,240], side:'r', y:100, k:'eps', hot:1} ]);
    const f2 = a.layout.scene(floor(a,2) + a.num(280,140,'razem 15 cm',{d:800}), [
      {t:'Styki na mijankę', at:[380,200], side:'r', y:60, k:'eps', hot:1},
      {t:'Folia z siatką', at:[440,187], side:'r', y:100, k:'fol'} ]);
    const tape = a.fresh(a.rect(186,140,8,46,'welna',{r:1,k:'tas'}) + a.rect(194,182,34,4,'folia',{r:0}),{d:300});
    const f3 = a.layout.scene(floor(a,3) + tape + a.person(300,186,{kneel:1,flip:1,arms:[60,80],s:.9}), [
      {t:'Taśma dylatacyjna', at:[190,150], side:'l', y:110, k:'tas', hot:1},
      {t:'Tynk do płyty', at:[183,240], side:'l', y:240, k:'tyn'} ]);
    return { caption:'Na podkładzie z papą: dwie warstwy EPS 100 (razem 15 cm), folia z siatką i taśma dylatacyjna przy ścianach.', frames:[
      { caption:'Pierwsza warstwa EPS 100 10 cm na papie z etapu 04.', svg:S(a,f1,'Pierwsza warstwa styropianu na podkładzie z papą') },
      { caption:'Druga warstwa 5 cm ze stykami przesuniętymi, na wierzchu folia z nadrukiem siatki.', svg:S(a,f2,'Druga warstwa styropianu i folia') },
      { caption:'Taśma dylatacyjna przy każdej ścianie, fartuch na folii. Teraz hydraulik kładzie rury.', svg:S(a,f3,'Taśma dylatacyjna przy ścianie') } ] };
  });

  /* 9. Wylewka ----------------------------------------------------------- */
  function slab(a){
    return a.rect(0,280,480,40,'beton',{r:0}) + a.rect(30,238,420,42,'eps',{r:0}) + a.rect(30,235,420,3,'folia',{r:0}) + a.rect(20,120,10,200,'ceramika',{r:0}) + a.rect(30,178,6,58,'welna',{r:0});
  }
  BUDOWA.addIllus('11-tynki-wylewki/wylewka', function(a){
    const gg = a.rect(400,140,40,22,'blacha',{r:3}) + gauge(a,420,112,24,3) + a.pipe([[420,162],[420,229]],6,'cieplo');
    const f1 = a.layout.scene(slab(a) + pipes(a,60,390,229,30) + gg, [
      {t:'Rury podłogówki (etap 09)', at:[150,229], side:'l', y:150, k:'rur'},
      {t:'ok. 3 bar', at:[420,112], side:'r', y:60, k:'bar', hot:1} ]);
    const pour = a.rect(36,214,414,21,'beton',{r:0,k:'jas'});
    const f2 = a.layout.scene(slab(a) + a.fresh(pour,{d:200}) + pipes(a,60,390,229,30) + gg +
      a.pipe([[480,196],[380,192],[318,172],[296,160]],8,'rura') + a.person(320,214,{flip:1,arms:[40,70],hold:a.rect(-22,-4,24,8,'blacha',{r:3})}) +
      a.dim(64,214,64,235,'',{d:600}) + a.num(120,190,'6,5 cm',{d:700}), [
      {t:'Anhydryt otula rury', at:[200,224], side:'l', y:110, k:'jas', hot:1},
      {t:'Manometr bez spadku', at:[420,112], side:'r', y:60, k:'bar'} ]);
    return { caption:'Wylewka 6,5 cm na rurach pod ciśnieniem: spadek na manometrze od razu pokaże uszkodzoną rurę.', frames:[
      { caption:'Rury na folii, rozdzielacz zamknięty, w instalacji ok. 3 bar.', svg:S(a,f1,'Rury podłogówki na folii i manometr 3 bar') },
      { caption:'Płynny anhydryt rozlewa się i otula rury. Manometr cały czas pokazuje to samo.', svg:S(a,f2,'Wylewanie anhydrytu na rury podłogówki') } ] };
  });

  /* 10. Wygrzewanie ------------------------------------------------------ */
  BUDOWA.addIllus('11-tynki-wylewki/wygrzewanie', function(a){
    const x0 = 60, yb = 200;
    const curve = a.line(`M${x0} ${yb}H150V160H210V130H250V100H330V130H360V160H400V${yb}`,'il-ln draw','stroke-width:5;stroke:var(--il-bad)');
    const s = a.rect(x0,60,360,yb-60,'papier',{r:8,cls:'il-panel'}) + a.line(`M${x0} ${yb}H430`,'il-ln','stroke-width:2.5') + curve +
      a.icon('kalendarz',100,170,1.4) +
      a.pill(180,138,'25°C · 3 dni',{k:'st'}) + a.pill(290,80,'max wg karty',{k:'mx',acc:1}) +
      a.layout.timeline([{t:'Czekanie',len:1.8},{t:'Start',len:1.2},{t:'Grzanie',len:1.8},{t:'Spadek',len:1.4},{t:'CM',len:.8}],{x:60,y:232,w:360,h:30,end:'ok'}) +
      a.text(240,292,'start: anhydryt ok. 7 dni, cement ok. 21 dni',{s:1,a:'middle'});
    return { caption:'Wygrzewanie z protokołem: temperatura rośnie stopniowo, trzyma się kilka dni i stopniowo spada. Na końcu pomiar CM.', svg:S(a,s,'Wykres wygrzewania jastrychu: czekanie, start 25 stopni, grzanie, spadek, pomiar') };
  });

  /* 11. Płyty g-k -------------------------------------------------------- */
  function attic(a){
    return a.rect(0,280,480,40,'beton',{r:0}) + a.rect(40,225,24,55,'ceramika',{r:0}) + a.rect(416,225,24,55,'ceramika',{r:0}) +
      a.poly([[30,225],[240,48],[450,225],[440,232],[240,62],[40,232]],'dachowka') +
      a.poly([[64,225],[163,142],[317,142],[416,225],[402,225],[312,150],[168,150],[78,225]],'welna');
  }
  BUDOWA.addIllus('11-tynki-wylewki/plyty-gk', function(a){
    const left = a.poly([[78,225],[168,150],[176,156],[86,231]],'papier',{k:'sk'}) + a.rect(168,150,144,7,'papier',{r:0,k:'suf'});
    const plate = a.poly([[312,150],[402,225],[394,231],[304,156]],'papier',{k:'pl'});
    const f1 = a.layout.scene(attic(a) + left + a.move(plate, 30, 40) + a.person(318,280,{arms:[150,170]}) + a.num(200,302,'wkręty co 15–20 cm',{d:600}), [
      {t:'Kolankowa 1,0 m', at:[52,250], side:'l', y:290, k:'kol'},
      {t:'Sufit pod jętkami', at:[240,152], side:'l', y:60, k:'suf'},
      {t:'Płyta na skos', at:[360,195], side:'r', y:290, k:'pl', hot:1} ]);
    const corner = (crack) => a.rect(30,120,40,124,'papier',{r:0}) + a.poly([[70,120],[210,10],[210,26],[76,132]],'papier') +
      (crack ? a.fresh(a.line('M70 118l8 6 -6 8 9 6 -6 9','il-ln','stroke-width:4;stroke:var(--il-bad)'),{d:300}) : a.fresh(a.rect(66,116,10,22,'blacha',{r:3}),{d:300}));
    const f2 = a.layout.compare(corner(0) + a.text(111,226,'taśma lub akryl',{s:1,a:'middle'}), corner(1) + a.text(111,226,'sztywna spoina: rysa',{s:1,a:'middle'}), ['Elastyczne naroże','Sztywna spoina']);
    return { caption:'Płyty g-k po pracach mokrych: sufit pod jętkami i skosy, a styk z kolankową elastyczny.', frames:[
      { caption:'Płyta 12,5 mm idzie w poprzek profili, wkręty co ok. 15–20 cm.', svg:S(a,f1,'Montaż płyt g-k na skosach poddasza') },
      { caption:'Naroże skos–ściana: taśma rozdzielająca albo akryl, bo dach pracuje.', svg:S(a,f2,'Dobrze: elastyczne naroże. Źle: sztywna spoina i rysa') } ] };
  });

  /* 12. Pomiar CM -------------------------------------------------------- */
  BUDOWA.addIllus('11-tynki-wylewki/pomiar-cm', function(a){
    const butla = a.g(a.shadow(0,0,22,5) + a.rect(-14,-70,28,70,'blacha',{r:10}) + gauge(a,0,-84,16,4), {tr:'translate(380 200)'});
    const s = a.rect(0,248,480,72,'eps',{r:0}) + a.rect(0,245,480,3,'folia',{r:0}) + a.rect(0,200,480,45,'beton',{r:0}) + pipes(a,30,460,232,32,250) +
      a.rect(240,200,20,45,'ziemia',{r:0,k:'pr'}) + a.circle(250,222,34,{k:'pkt'}) + butla +
      a.person(320,200,{kneel:1,flip:1,arms:[70,90],s:.9}) + a.num(120,120,'anhydryt ok. 0,3% CM',{d:500});
    return { caption:'Pomiar CM w punkcie oznaczonym przed wylewką, z dala od rur. Wynik porównujesz z kartą kleju i podłogi.', svg:S(a, a.layout.scene(s, [
      {t:'Punkt bez rur', at:[226,212], side:'l', y:180, k:'pkt'},
      {t:'Próbka z całej grubości', at:[250,240], side:'l', y:290, k:'pr', hot:1},
      {t:'Butla CM', at:[392,110], side:'r', y:60, k:'cm'} ]), 'Pomiar wilgotności jastrychu metodą karbidową') };
  });

  /* 13. Wyrównanie i gruntowanie ----------------------------------------- */
  BUDOWA.addIllus('11-tynki-wylewki/wyrownanie-gruntowanie', function(a){
    const base = a.rect(0,250,480,70,'eps',{r:0}) + a.poly([[0,206],[180,206],[220,212],[280,212],[320,206],[480,206],[480,250],[0,250]],'beton');
    const f1 = a.layout.scene(base + a.rect(100,198,280,8,'blacha',{r:2,k:'lat'}) + a.fresh(a.rect(222,206,56,6,'woda',{r:0,k:'gap'}),{d:400}) +
      a.person(410,206,{kneel:1,flip:1,arms:[40,50],s:.9}) + a.num(240,150,'łata 2 m',{d:300}), [
      {t:'Szczelina pod łatą', at:[250,210], side:'l', y:290, k:'gap', hot:1} ]);
    const masa = a.fresh(a.poly([[180,206],[320,206],[280,212],[220,212]],'piasek',{k:'mas'}),{d:200});
    const prim = a.fresh(a.rect(0,200,180,6,'woda',{r:0,st:'opacity:.4',k:'gru'}),{d:500});
    const f2 = a.layout.scene(base + masa + prim + a.move(roller(a,140,192,'welna') + a.hand(140,152,{s:.9}), 60, 0), [
      {t:'Grunt z systemu kleju', at:[60,203], side:'l', y:110, k:'gru', hot:1},
      {t:'Masa w zagłębieniu', at:[250,208], side:'r', y:290, k:'mas'} ]);
    return { caption:'Kontrola łatą, masa samopoziomująca w dołkach i grunt dobrany do kleju. Etap 13 zaczyna się na równym podkładzie.', frames:[
      { caption:'Łata 2 m pokazuje dołek. Wymaganie równości podaje producent okładziny.', svg:S(a,f1,'Sprawdzanie równości jastrychu łatą') },
      { caption:'Dołek wypełnia masa samopoziomująca, cały podkład dostaje grunt.', svg:S(a,f2,'Masa samopoziomująca i gruntowanie wałkiem') } ] };
  });
})();
