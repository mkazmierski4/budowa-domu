/* Ilustracje etapu 07 — Okna, drzwi, brama. Liczby zgodne z content/07-okna.js i docs/DECYZJE.md
   (pustak 25 + styropian 20, okno wysunięte ok. 1/3 w ocieplenie, Uw ≤ 0,9, Ud ≤ 1,3, HS ok. 4,0 × 2,4 m, brama ok. 5,0 m). */
(function(){
  const S = (a, s, l) => a.svg(s, 480, 320, l);
  const lay = a => a.layout;
  const G = a => a.ground(0,262,480,57);
  // okno w widoku: rama antracyt + szyba
  const win = (a,x,y,w,h,mat) => a.rect(x,y,w,h,mat || 'kmb',{r:2}) + a.rect(x+7,y+7,w-14,h-14,'szklo',{r:1}) + `<path class="il-shine" d="M${x+16} ${y+h-18}L${x+w*.5} ${y+14}"/>`;
  const stroke = (a,p,c,w) => a.line(p,'il-ln','stroke:var(--il-'+c+');stroke-width:'+(w || 4)+';fill:none');
  const sun = (x,y) => `<circle cx="${x}" cy="${y}" r="18" class="il-m c-piasek"/>`;

  /* 1 ---------- Plan i zamówienie ---------- */
  BUDOWA.addIllus('07-okna/zakres-ssz', function(a){
    const s = a.text(240,52,'Kolejność: od murów do montażu',{b:1,a:'middle'}) +
      lay(a).steps([{icon:'kask',t:'Mury'},{icon:'projekt',t:'Pomiar'},{icon:'kalendarz',t:'Produkcja'},{icon:a.house(410,146,.28),t:'Montaż'}],{y:130}) +
      a.num(240,246,'produkcja 6–10 tyg.') + a.pill(240,290,'zamawiasz w czasie robót dachowych');
    return { caption: 'Pomiar z natury po wymurowaniu, zamówienie w czasie robót dachowych, montaż po pokryciu dachu, przed zimą.',
      svg: S(a, s, 'Cztery kroki: mury, pomiar z natury, produkcja 6–10 tygodni, montaż po dachu') };
  });

  /* 2 ---------- Profile ---------- */
  BUDOWA.addIllus('07-okna/profile-okien', function(a){
    const X = [80,183,297,400], M = [['papier','PVC','1×'],['blacha','Aluminium','ok. 1,6×'],['drewno','Drewno','ok. 1,45×'],['drewno','Drewno-alu','ok. 2×']];
    let s = a.rect(20,280,440,8,'drewno',{r:4}) + a.table(240,282,430,58);
    X.forEach((x,i) => {
      const m = M[i];
      s += a.shadow(x,224,34,4) + win(a,x-30,112,60,112,m[0]) + (i === 3 ? a.rect(x+24,112,6,112,'blacha',{r:1}) : '') +
        a.pill(x,80,m[1],{k:'p'+i}) + a.num(x,304,m[2]);
    });
    s += a.ok(X[0]+38,104,12);
    return { caption: 'Cena względem PVC dla ok. 27 m² okien. Wybrane PVC z antracytową okleiną z zewnątrz.',
      svg: S(a, s, 'Cztery próbki okien na stole: PVC, aluminium, drewno i drewno-aluminium z mnożnikami ceny') };
  });

  /* 3 ---------- Pakiet szyb ---------- */
  BUDOWA.addIllus('07-okna/szyby-uw', function(a){
    const pk = [150,206,262].map(x => a.rect(x,46,14,196,'szklo',{r:2,k:'sz'})).join('') +
      a.rect(164,226,42,16,'kmb',{r:2,k:'rm'}) + a.rect(220,226,42,16,'kmb',{r:2,k:'rm'}) +
      a.text(185,110,'Ar',{a:'middle',b:1}) + a.text(241,110,'Ar',{a:'middle',b:1}) +
      a.rect(130,242,166,22,'blacha',{r:3}) + a.shadow(213,266,90,5);
    const f1 = pk + lay(a).scene('', [
      {t:'3 szyby', at:[157,70], side:'l', k:'sz'},
      {t:'Argon w komorach', at:[185,160], side:'l'},
      {t:'Ciepła ramka', at:[185,234], side:'l', k:'rm'}]) +
      a.num(400,90,'Ug ok. 0,5–0,6') + a.num(400,150,'Uw ≤ 0,9') + a.pill(400,210,'WT2021');
    const edge = (mat, wet) => a.rect(70,20,12,200,'szklo',{r:2}) + a.rect(130,20,12,200,'szklo',{r:2}) + a.rect(82,196,48,22,mat,{r:2}) +
      a.rect(56,218,100,20,'blacha',{r:3}) + (wet ? a.drops(144,170,3) + a.drops(150,196,2) : '') +
      a.text(8,40,'ciepło',{s:1}) + a.text(156,40,'mróz',{s:1});
    const f2 = lay(a).compare(edge('kmb', 0), edge('blacha', 1), ['Ciepła ramka', 'Ramka alu']);
    return { caption: 'WT2021: okna pionowe Uw ≤ 0,9, drzwi zewnętrzne Ud ≤ 1,3 W/(m²·K).', frames: [
      { caption: 'Trzy szyby, dwie komory z argonem i ciepła ramka na brzegu.', svg: S(a, f1, 'Przekrój pakietu trzyszybowego z argonem i ciepłą ramką') },
      { caption: 'Ciepła ramka trzyma brzeg szyby suchy; aluminiowa zbiera skropliny.', svg: S(a, f2, 'Dobrze: ciepła ramka bez skroplin. Źle: ramka aluminiowa i krople wody') } ] };
  });

  /* 4 ---------- HS w salonie ---------- */
  function hsWall(a){
    return G(a) + a.rect(20,40,440,222,'bloczek',{r:0}) + a.rect(80,70,320,192,'kmb',{r:2}) + a.rect(86,76,308,180,'papier',{r:0}) + a.rect(86,206,308,50,'trawa',{r:0});
  }
  const fixedPane = a => a.rect(244,78,148,170,'szklo',{r:1}) + `<path class="il-shine" d="M262 230L320 92"/>`;
  const slidePane = (a,x) => a.rect(x,74,160,180,'kmb',{r:2}) + a.rect(x+8,82,144,164,'szklo',{r:1}) + a.rect(x+140,140,6,40,'blacha',{r:2,k:'kl'}) + `<path class="il-shine" d="M${x+22} 230L${x+76} 96"/>`;
  BUDOWA.addIllus('07-okna/duze-przeszklenia', function(a){
    const f1 = hsWall(a) + fixedPane(a) + slidePane(a,84) + a.person(268,262,{s:1.15,flip:true,kask:false,arms:[10,40]}) +
      a.dim(80,24,400,24,'ok. 4,0 m') + a.callout('kl',230,160,120,290,'Klamka podnosi skrzydło');
    const f2 = hsWall(a) + fixedPane(a) + a.move(slidePane(a,236),-150,0) + a.arrow([[110,160],[160,150],[210,160]]) +
      a.num(160,110,'przejście ok. 1,9 m') + a.person(120,262,{s:1.15,kask:false});
    const sill = (ok) => a.rect(0,200,222,44,'beton',{r:0}) + (ok ? a.rect(40,176,140,24,'xps',{r:2}) + a.rect(40,150,140,26,'kmb',{r:2}) :
      a.poly([[40,176],[180,184],[180,200],[40,200]],'eps') + a.g(a.rect(40,152,140,26,'kmb',{r:2}),{tr:'rotate(3 40 165)'}) + a.drops(186,170,2)) +
      a.text(111,232,'strop',{s:1,a:'middle'});
    const f3 = lay(a).compare(sill(1) + a.pill(111,120,'profil systemowy'), sill(0) + a.pill(111,120,'zwykły styropian'), ['Próg na profilu', 'Próg się ugina']);
    return { caption: 'Drzwi podnoszono-przesuwne HS w otworze ok. 4,0 × 2,4 m nad podciągiem z etapu 05.', frames: [
      { caption: 'Klamka podnosi skrzydło na wózki.', svg: S(a, f1, 'Zamknięte drzwi HS w salonie, osoba trzyma klamkę') },
      { caption: 'Skrzydło przesuwa się przed stałe pole: przejście ok. 1,9 m.', svg: S(a, f2, 'Skrzydło HS przesuwa się w prawo, otwiera przejście na taras') },
      { caption: 'Pod progiem nośny profil systemowy, nie zwykły styropian.', svg: S(a, f3, 'Dobrze: próg na profilu systemowym. Źle: próg na styropianie ugina się') } ] };
  });

  /* 5 ---------- Otwory i dostawa ---------- */
  BUDOWA.addIllus('07-okna/otwory-dostawa', function(a){
    const f1 = G(a) + a.blocks(40,42,400,220,40,20,'ceramika') + a.rect(170,82,140,150,'papier',{r:0,k:'otw'}) +
      a.line([[176,88],[304,226]],'il-meas') + a.line([[304,88],[176,226]],'il-meas') +
      a.hand(318,200,{r:-25,s:.8,hold:a.trowel(0,0,1)}) +
      a.num(240,24,'przekątne: różnica ≤ 5 mm') + a.callout('otw',172,150,90,290,'Ubytki uzupełnione zaprawą');
    const rack = a.poly([[40,200],[70,40],[100,200]],'drewno') + win(a,82,60,60,140) + win(a,112,70,60,130) + a.rect(20,200,180,8,'drewno',{r:2}) + a.shadow(110,210,90,5);
    const okS = a.rect(0,210,222,34,'beton',{r:0}) + rack;
    const badS = a.ground(0,200,222,44) + a.g(win(a,40,150,140,50) + a.rect(34,144,152,62,'folia',{r:6,st:'opacity:.55'}),{tr:'rotate(-6 110 175)'}) + sun(180,40) + a.drops(60,110,3);
    const f2 = lay(a).compare(okS, badS, ['W budynku', 'Na trawie']);
    return { caption: 'Otwór sprawdzasz przed montażem, okna przy dostawie.', frames: [
      { caption: 'Wyrównane ościeże i przekątne otworu: różnica do ok. 5 mm.', svg: S(a, f1, 'Otwór okienny w murze z przekątnymi, ręka z kielnią uzupełnia ościeże') },
      { caption: 'Okna stoją pionowo na stojaku w budynku, nie na trawie pod folią.', svg: S(a, f2, 'Dobrze: okna na stojaku w budynku. Źle: okno na trawie pod folią w słońcu') } ] };
  });

  /* 6 ---------- Ciepły montaż: przekrój pionowy przy dolnej ramie ---------- */
  // 3 px = 1 cm; mur 110–185 (25 cm), styropian 189–249 (20 cm), rama 178–204 (wysunięta ok. 1/3 w ocieplenie)
  const mur = a => a.blocks(110,206,75,114,25,19,'ceramika');
  const kons = a => a.rect(185,197,27,5,'stal',{r:1,k:'kon'}) + a.rect(185,200,5,48,'stal',{r:1,k:'kon'}) + `<circle cx="187.5" cy="214" r="2" class="il-m c-blacha"/><circle cx="187.5" cy="238" r="2" class="il-m c-blacha"/>`;
  const rama = a => a.rect(178,56,26,141,'kmb',{r:2,k:'ok'}) + a.rect(187,64,9,124,'szklo',{r:1});
  const sides = a => a.pill(60,30,'Wnętrze') + a.pill(420,30,'Zewnątrz');
  const pianka = a => a.rect(178,197,26,9,'piasek',{r:1,k:'pia'});
  const tasmy = a => stroke(a,[[178,186],[178,206],[146,206]],'folia',4) + stroke(a,[[204,186],[204,200],[194,210],[192,250]],'welna',4);
  BUDOWA.addIllus('07-okna/cieply-montaz', function(a){
    const T = x => a.g(x,{tr:'translate(40 0)'});
    const drill = a.g(a.drill(0,0,1.1),{tr:'translate(232 225)'});
    const f1 = sides(a) + T(mur(a) + a.move(kons(a),40,0) + drill + a.hand(262,262,{r:-80,s:.75})) +
      lay(a).scene('', [{t:'Konsola stalowa', at:[252,199], side:'r', y:120, k:'kon'}]) + a.num(80,290,'co ok. 70 cm');
    const f2 = sides(a) + T(mur(a) + kons(a) + a.move(rama(a),0,-60)) +
      lay(a).scene('', [{t:'Okno w ociepleniu', at:[244,120], side:'r', y:120, k:'ok'}]) + a.num(110,290,'ok. 1/3 grubości styropianu');
    const f3 = sides(a) + T(mur(a) + kons(a) + rama(a) + a.fresh(pianka(a)) + a.fresh(tasmy(a),{d:300})) +
      lay(a).scene('', [
        {t:'Taśma paroszczelna', at:[200,206], side:'l', y:110},
        {t:'Pianka', at:[222,201], side:'l', y:160, k:'pia'},
        {t:'Taśma zewnętrzna', at:[234,236], side:'r', y:200}]) + a.pill(400,240,'paroprzepuszczalna');
    const eps = a.rect(190,210,59,110,'eps',{r:0,k:'eps'}), par = a.poly([[204,197],[262,205],[262,214],[258,214],[258,209],[204,203]],'blacha',{k:'par'});
    const f4 = sides(a) + T(mur(a) + kons(a) + rama(a) + pianka(a) + tasmy(a) + a.fresh(eps) + a.fresh(par,{d:300})) +
      lay(a).scene('', [
        {t:'Parapet ze spadkiem', at:[280,204], side:'r', y:150, k:'par'},
        {t:'Styropian 20 cm', at:[270,270], side:'r', y:260, k:'eps'}]) + a.num(90,290,'ψ ok. 0,03 W/(m·K)');
    return { caption: 'Przekrój przy dolnej ramie: pustak 25 cm + styropian 20 cm, okno w warstwie ocieplenia.', frames: [
      { caption: 'Stalowe konsole przykręcone do muru, co ok. 70 cm.', svg: S(a, f1, 'Wiertarka przykręca stalową konsolę do lica muru') },
      { caption: 'Okno staje na konsolach, wysunięte ok. 1/3 w ocieplenie.', svg: S(a, f2, 'Okno opada na konsole przed licem muru') },
      { caption: 'Szczelniej od środka: taśma paroszczelna, pianka, taśma paroprzepuszczalna.', svg: S(a, f3, 'Trzy warstwy uszczelnienia styku okna i muru') },
      { caption: 'Styropian elewacji i parapet ze spadkiem domykają styk.', svg: S(a, f4, 'Styropian 20 cm i parapet zewnętrzny pod ramą okna') } ] };
  });

  /* 7 ---------- Parapety ---------- */
  BUDOWA.addIllus('07-okna/parapety', function(a){
    const base = a.rect(60,0,24,96,'kmb',{r:2}) + a.rect(84,104,70,140,'eps',{r:0}) + a.rect(20,104,64,140,'ceramika',{r:0}) + a.rect(154,104,5,140,'papier',{r:0});
    const okS = base + a.poly([[84,94],[196,104],[196,112],[192,112],[192,108],[84,100]],'blacha') + a.drops(190,130,2) + a.num(140,200,'min. 5°') + a.pill(150,30,'3–4 cm');
    const badS = base + a.rect(84,96,76,6,'blacha',{r:1}) + a.rect(158,108,6,110,'woda',{r:2,st:'opacity:.5'}) + a.drops(166,120,3) + a.drops(96,82,2);
    return { caption: 'Parapet zewnętrzny: pod ramą, ze spadkiem i wysięgiem 3–4 cm poza elewację. Montaż w etapie 12.',
      svg: S(a, lay(a).compare(okS, badS, ['Spadek i kapinos', 'Płasko, na styk']), 'Dobrze: parapet ze spadkiem i wysięgiem. Źle: płaski parapet, woda spływa po tynku') };
  });

  /* 8 ---------- Drzwi wejściowe ---------- */
  BUDOWA.addIllus('07-okna/drzwi-wejsciowe', function(a){
    const s = G(a) + a.rect(30,40,420,222,'papier',{r:0}) + a.rect(170,40,190,16,'drewno',{r:2}) +
      a.rect(192,64,34,198,'szklo',{r:1,k:'dos'}) + a.rect(230,64,90,198,'kmb',{r:2}) + a.line('M244 80V246M306 80V246','il-jt') +
      a.rect(304,118,6,96,'blacha',{r:2,k:'zam'}) + a.rect(188,256,136,6,'blacha',{r:1,k:'pr'}) +
      a.person(362,262,{s:1.6,flip:true,kask:false,arms:[10,75]}) +
      lay(a).scene('', [
        {t:'Doświetle', at:[200,110], side:'l', k:'dos'},
        {t:'Zamek wielopunktowy', at:[304,170], side:'l', y:170, k:'zam'},
        {t:'Ciepły próg ok. 2 cm', at:[200,258], side:'l', y:250, k:'pr'}]) +
      a.num(418,64,'Ud ≤ 1,3') + a.pill(430,108,'RC2');
    return { caption: 'Drzwi aluminiowe ok. 100 × 220 cm: Ud ≤ 1,3, klasa RC2, zamek wielopunktowy i niski ciepły próg.',
      svg: S(a, s, 'Drzwi wejściowe z doświetlem, osoba sięga do pochwytu') };
  });

  /* 9 ---------- Brama garażowa ---------- */
  function garage(a){
    return G(a) + a.rect(30,40,420,222,'papier',{r:0}) + a.rect(80,118,320,144,'beton',{r:0}) + a.rect(80,104,320,14,'bloczek',{r:0,k:'nad'});
  }
  const seg = (a,y) => a.rect(80,y,320,36,'blacha',{r:1}) + a.line(`M84 ${y+18}H396`,'il-jt');
  BUDOWA.addIllus('07-okna/brama-garazowa', function(a){
    const f1 = garage(a) + [118,154,190,226].map(y => seg(a,y)).join('') +
      a.dim(80,290,400,290,'ok. 5,0 m') + a.num(240,72,'zapas nad otworem 20–30 cm') +
      lay(a).scene('', [{t:'Węgarki 10–12 cm', at:[80,200], side:'l', y:200}]);
    const car = a.rect(170,206,140,40,'blacha',{r:10}) + a.rect(190,184,100,30,'blacha',{r:10}) + a.rect(200,190,80,18,'szklo',{r:4}) +
      `<circle cx="200" cy="248" r="13" class="il-m c-maszyna"/><circle cx="280" cy="248" r="13" class="il-m c-maszyna"/>` + a.shadow(240,262,80,5);
    const f2 = garage(a) + car + a.move(seg(a,118),0,108) + a.arrow([[420,230],[430,180],[420,130]]) +
      lay(a).scene('', [{t:'Napęd, pilot, fotokomórka', at:[396,136], side:'r', y:60}]) + a.num(240,300,'cała szerokość wjazdu');
    return { caption: 'Brama segmentowa ok. 5,0 × 2,25 m z napędem, panel 40 mm w kolorze okien.', frames: [
      { caption: 'Zamknięta: potrzebuje zapasu nad otworem i węgarków na prowadnice.', svg: S(a, f1, 'Zamknięta brama segmentowa w ścianie garażu') },
      { caption: 'Segmenty jadą pod sufit i zwalniają cały wjazd.', svg: S(a, f2, 'Brama uniesiona, w garażu widać auto') } ] };
  });

  /* 10 ---------- Rolety ---------- */
  function wall10(a){ return G(a) + a.rect(40,30,400,232,'papier',{r:0}) + win(a,170,110,140,130); }
  const box = a => a.rect(160,84,160,24,'blacha',{r:2,k:'skr'}) + a.rect(160,108,8,132,'blacha',{r:1,k:'prow'}) + a.rect(312,108,8,132,'blacha',{r:1,k:'prow'});
  const armor = a => { let l = ''; for (let y = 120; y < 236; y += 10) l += `M168 ${y}H312`; return a.rect(168,108,144,130,'blacha',{r:1}) + a.line(l,'il-jt'); };
  BUDOWA.addIllus('07-okna/rolety-zaluzje', function(a){
    const f1 = wall10(a) + a.ghost(box(a)) + a.cable([[320,96],[380,96],[380,250]],'var(--il-kmb)') +
      lay(a).scene('', [
        {t:'Skrzynka w ociepleniu', at:[180,96], side:'l', y:90, k:'skr'},
        {t:'Prowadnice', at:[164,190], side:'l', y:190, k:'prow'},
        {t:'Przewód 3 × 1,5', at:[380,200], side:'r', y:150}]);
    const f2 = wall10(a) + box(a) + a.move(armor(a),0,-110) + sun(400,64) + a.arrow([[380,80],[350,110],[324,140]]) +
      a.num(100,290,'cień przed szybą');
    const sunS = sun(30,30);
    const okS = a.rect(120,40,10,190,'szklo',{r:1}) + a.rect(96,40,8,190,'blacha',{r:1}) + sunS + a.arrow([[50,50],[70,90],[90,120]]) + a.text(170,140,'chłodno',{s:1,a:'middle'});
    const badS = a.rect(96,40,10,190,'szklo',{r:1}) + a.rect(130,40,8,190,'papier',{r:1}) + sunS + a.arrow([[50,50],[90,90],[124,120]]) +
      a.line('M150 120q8 -10 0 -20q-8 -10 0 -20M170 130q8 -10 0 -20q-8 -10 0 -20','il-arr') + a.text(180,170,'gorąco',{s:1,a:'middle'});
    const f3 = lay(a).compare(okS, badS, ['Na zewnątrz', 'Od środka']);
    return { caption: 'Skrzynki, prowadnice i przewody planujesz przed elewacją.', frames: [
      { caption: 'Skrzynka chowa się w 20 cm styropianu nad oknem; do każdej idzie przewód.', svg: S(a, f1, 'Okno z ukrytą skrzynką rolety, prowadnicami i przewodem') },
      { caption: 'Pancerz zjeżdża w prowadnicach i zatrzymuje słońce przed szybą.', svg: S(a, f2, 'Roleta opuszcza się przed oknem, słońce nie dochodzi do szyby') },
      { caption: 'Osłona zewnętrzna chłodzi; wewnętrzna nagrzewa się za szybą.', svg: S(a, f3, 'Dobrze: roleta zewnętrzna. Źle: roleta wewnętrzna, ciepło w pokoju') } ] };
  });

  /* 11 ---------- Ochrona ---------- */
  BUDOWA.addIllus('07-okna/ochrona-okien', function(a){
    const okS = win(a,40,20,140,170) + a.rect(34,14,152,182,'folia',{r:6,st:'opacity:.5'}) +
      a.rect(30,10,28,10,'papier',{r:2}) + a.rect(162,10,28,10,'papier',{r:2}) + a.rect(20,214,182,14,'drewno',{r:2}) + a.text(111,244,'płyta na progu',{s:1,a:'middle'});
    const spark = 'M150 110l20 -8M152 120l22 2M148 128l16 12M146 102l10 -16';
    const badS = win(a,40,20,140,170) + [[70,60],[96,90],[130,50],[80,140]].map(p => `<circle cx="${p[0]}" cy="${p[1]}" r="6" class="il-m c-beton"/>`).join('') +
      a.line(spark,'il-arr') + a.text(111,226,'iskry i zaprawa',{s:1,a:'middle'});
    return { caption: 'Folia budowlana na oknie, płyta na progu, fabryczną folię z profili zdejmij w 2–3 miesiące.',
      svg: S(a, lay(a).compare(okS, badS, ['Pod osłoną', 'Bez osłony']), 'Dobrze: okno pod folią, próg pod płytą. Źle: zaprawa i iskry na szybie') };
  });

  /* 12 ---------- Odbiór ---------- */
  BUDOWA.addIllus('07-okna/odbior-stolarki', function(a){
    const f1 = a.rect(150,30,60,240,'kmb',{r:2}) + a.rect(214,30,60,240,'kmb',{r:2}) + a.rect(222,40,44,220,'szklo',{r:1}) +
      a.move(a.rect(200,120,90,70,'papier',{r:2,k:'kar'}),-40,0) + a.hand(318,190,{r:-90,s:.8}) +
      lay(a).scene('', [{t:'Kartka stawia opór', at:[290,140], side:'r', y:80, k:'kar'}]) + a.num(80,290,'docisk skrzydła');
    const f2 = G(a) + a.rect(30,40,420,222,'papier',{r:0}) + a.rect(60,70,100,192,'kmb',{r:2}) + a.rect(68,78,84,184,'folia',{r:2,k:'bd'}) +
      `<circle cx="110" cy="190" r="30" class="il-m c-blacha"/><circle cx="110" cy="190" r="8" class="il-m c-maszyna"/>` +
      win(a,270,90,120,120) + a.arrow([[420,150],[405,140],[392,130]]) + a.person(330,262,{s:1.15,arms:[10,70],kask:false}) +
      lay(a).scene('', [{t:'Wentylator w drzwiach', at:[110,160], side:'l', y:44, k:'bd'}]) + a.num(330,290,'n50 ok. 1,0–1,5 h⁻¹ przed tynkami');
    return { caption: 'Odbiór każdego okna przed tynkami, regulacja po montażu i po pierwszej zimie.', frames: [
      { caption: 'Kartka przytrzaśnięta skrzydłem ma stawiać opór.', svg: S(a, f1, 'Dłoń wyciąga kartkę zaciśniętą między skrzydłem a ramą') },
      { caption: 'Wstępny test szczelności: podciśnienie i szukanie przewiewów przy oknach.', svg: S(a, f2, 'Wentylator w drzwiach robi podciśnienie, osoba sprawdza okno dłonią') } ] };
  });
})();
