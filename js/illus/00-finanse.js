/* Ilustracje etapu 00 — Finanse. Liczby zgodne z docs/DECYZJE.md (2,3 mln zł: 330/680/270/540/250 + rezerwa 230 tys.; kredyt 35–45%; sposoby budowy; transze 5–8). */
(function(){
const V = (s,label) => '<svg viewBox="0 0 480 320" role="img" aria-label="'+label+'">'+s+'</svg>';

// pozioma belka z podziałem: [[nazwa, wartość, materiał]], x0, szerokość całości, y, wysokość
function strip(a, seg, total, x0, W, y, h, pre){
  let x = x0, s = '';
  seg.forEach((g,i) => { const w = g[1]*W/total; s += a.fresh(a.rect(x, y, Math.max(w-2,4), h, g[2], {k:pre+i}), {d:i*110}); g[3] = x + w/2; x += w; });
  return s;
}

BUDOWA.addIllus('00-finanse/budzet-podzial', function(a){
  const seg = [['Działka',330,'piasek'],['Surowy',680,'ceramika'],['Instalacje',270,'woda'],['Wykończenie',540,'drewno'],['Ogród',250,'trawa'],['Rezerwa',230,'papier']];
  let s = a.shadow(240,208,220,8) + strip(a, seg, 2300, 30, 420, 150, 50, 'c');
  seg.forEach((g,i) => {
    const up = i % 2 === 0, py = up ? 118 : (i === 5 ? 272 : 236), c = g[3];
    s += a.line(up ? [[c,132],[c,148]] : [[c,202],[c,py-14]], 'il-ptr') + a.pill(c, py, g[0]+' '+g[1], {k:'c'+i, acc:i === 5});
  });
  s += a.num(240,56,'2 300 000 zł') + a.text(240,84,'podział w tys. zł',{s:1,a:'middle'}) + a.person(34,306,{s:.62,kask:false,arms:[10,-30]});
  return { caption:'Pięć kategorii mieści się w 2,07 mln zł, a 230 tys. zł (10%) to rezerwa, której etapy nie wydają.', svg:V(s,'Budżet 2,3 mln zł podzielony na pięć kategorii i rezerwę') };
});

BUDOWA.addIllus('00-finanse/wklad-zdolnosc', function(a){
  const f1 = strip(a, [['Kredyt',40,'woda'],['Własne środki',60,'trawa']], 100, 30, 420, 150, 56, 'w') +
    a.rect(30,150,60.5,56,'piasek',{k:'dz'}) + a.shadow(240,214,220,8) +
    a.pill(114,112,'Kredyt 35–45%',{k:'w0'}) + a.text(114,246,'ok. 0,8–1 mln zł',{s:1,a:'middle'}) +
    a.pill(330,112,'Własne środki',{k:'w1'}) + a.line([[330,126],[330,148]],'il-ptr') + a.line([[114,126],[114,148]],'il-ptr') +
    a.callout('dz',60,206,60,262,'Działka wlicza się',{}) + a.num(330,246,'wkład min. 20%') +
    a.fresh(a.ok(440,100,14),{d:700});
  const row = (y,pct,lab,good) => a.fresh(a.rect(30,y,420*pct/100,26,good ? 'trawa' : 'ceramika'),{d:200}) + a.text(34,y-8,lab,{s:1}) + (good ? a.ok(30+420*pct/100+22,y+13,12) : a.bad(30+420*pct/100+22,y+13,12));
  const f2 = a.line([[177,60],[177,262]],'il-ln','stroke-dasharray:5 5;stroke-width:2.2') + a.pill(177,42,'limit rata 30–35% dochodu',{acc:1}) +
    row(86,28,'rata dziś',1) + row(150,33,'rata przy stopach +2 pp',1) + row(214,45,'za wysoka rata',0) +
    a.text(240,296,'Rata liczona z dochodu netto',{s:1,a:'middle'});
  return { caption:'Bank patrzy na wkład i ratę; kredyt to ok. 35–45% budżetu.', frames:[
    {caption:'Kredyt pokrywa ok. 35–45% budżetu, reszta to twoje środki, w tym działka.', svg:V(f1,'Podział budżetu na kredyt i środki własne')},
    {caption:'Rata musi mieścić się w 30–35% dochodu także po podwyżce stóp o 2 pp.', svg:V(f2,'Test raty kredytu przy wyższych stopach')} ] };
});

BUDOWA.addIllus('00-finanse/doplaty', function(a){
  const pump = x => a.rect(x,80,66,50,'blacha') + a.rect(x+10,90,46,30,'szklo',{r:14}) + a.arrow([[x+20,110],[x+33,96],[x+46,110]]);
  const pv = x => a.poly([[x,130],[x+80,130],[x+94,80],[x+14,80]],'szklo') + a.line(`M${x+47} 80L${x+40} 130M${x+7} 105H${x+87}`,'il-jt');
  const doc1 = a.doc(36,70,44,56,{stamp:1}), s1 = doc1 + a.arrow([[90,100],[116,86],[148,100]]) + pump(160) + pv(244) + a.ok(420,105,16,{d:400}) + a.pill(110,40,'Najpierw wniosek');
  const s2 = a.g(pump(36) + pv(120) + a.arrow([[226,100],[250,86],[290,100]]) + a.doc(310,70,44,56,{}) + a.bad(420,105,16,{d:400}), {tr:'translate(0 130)'}) + a.pill(110,170,'Najpierw zakup');
  return { caption:'Dotacje zmieniają się co kilka miesięcy: sprawdź aktualne warunki i złóż wniosek przed zakupem pompy i paneli.',
    svg:V(s1 + s2 + a.num(330,300,'sprawdź aktualne warunki'),'Wniosek o dopłatę przed zakupem pompy ciepła i paneli, nie po')};
});

BUDOWA.addIllus('00-finanse/rezerwa', function(a){
  const boxes = (extra) => { let s = '', i;
    for (i = 0; i < 9; i++) s += a.rect(30+i*42,170,38,44,'bloczek',{r:3});
    return s + a.rect(30+9*42,170,38,44,'piasek',{r:3,k:'rez'}) + a.shadow(240,222,220,8); };
  const f1 = boxes() + a.num(200,128,'plan 2,07 mln zł') + a.line([[30,148],[370,148]],'il-meas') +
    a.pill(429,128,'Rezerwa 230',{k:'rez',acc:1}) + a.text(429,246,'10%',{s:1,a:'middle'}) + a.drops(120,56,4) + a.drops(250,40,3) +
    a.text(240,296,'Na budowie zawsze wychodzi więcej',{s:1,a:'middle'});
  let g2 = '', i;
  for (i = 0; i < 9; i++) g2 += a.rect(30+i*42,170,38,i === 4 ? 24 : 44,'bloczek',{r:3,cls:''}).replace('y="170"','y="'+(i === 4 ? 190 : 170)+'"');
  const f2 = g2 + a.shadow(240,222,220,8) + a.ghost(a.rect(408,170,38,44,'piasek',{r:3})) +
    a.move(a.rect(198,170,38,20,'piasek',{r:3,k:'rez'}),210,0) + a.fresh(a.ok(217,150,13),{d:900}) +
    a.pill(240,100,'rezerwa łata dziurę',{acc:1}) + a.text(240,296,'Osobne konto, ruszane tylko na nieplanowane',{s:1,a:'middle'});
  return { caption:'Rezerwa 10% to osobne pieniądze na rzeczy, których jeszcze nie znasz.', frames:[
    {caption:'Plan mieści się w 2,07 mln zł, a 10% leży osobno.', svg:V(f1,'Dziesięć kloców budżetu, jeden z nich to rezerwa')},
    {caption:'Gdy coś wyjdzie ponad plan, sięgasz po rezerwę, nie po kredyt.', svg:V(f2,'Rezerwa uzupełnia brakujący element budżetu')} ] };
});

BUDOWA.addIllus('00-finanse/harmonogram-ogolny', function(a){
  const seg = [['Formalności',105,'papier'],['Budowa',262,'ceramika'],['Schnięcie',53,'drewno']];
  let s = a.shadow(240,196,220,8) + strip(a, seg, 420, 30, 420, 150, 40, 't');
  s += a.num(240,50,'18–24 mies.') + a.pill(82,118,'Formalności',{k:'t0'}) + a.pill(250,118,'Budowa 12–15 mies.',{k:'t1'}) + a.pill(404,270,'Wprowadzka',{acc:1}) +
    a.text(82,226,'projekt, pozwolenie',{s:1,a:'middle'}) + a.text(250,226,'od wykopu do tynków i wylewek',{s:1,a:'middle'}) +
    a.icon('kalendarz',50,270,1.2) + a.person(300,300,{s:.55,kask:true,arms:[10,40]}) +
    a.poly([[410,205],[440,180],[470,205]],'dachowka') + a.rect(414,205,52,26,'bloczek',{r:2});
  const card = (x,t,sub,inner,k) => a.rect(x,60,140,160,'papier',{r:12}) + inner + a.pill(x+70,246,t,{k:k}) + a.text(x+70,284,sub,{s:1,a:'middle'});
  const f2 = card(14,'Wiosna','fundamenty', a.ground(24,168,120,40) + a.rect(40,138,88,30,'beton') + a.person(112,168,{s:.5}) + a.shovel(60,140,.8),'s0') +
    card(170,'Przed zimą','stan surowy zamknięty', a.blocks(190,128,96,60,16,12,'ceramika') + a.poly([[184,128],[238,92],[292,128]],'dachowka') + a.rect(194,188,88,6,'ziemia'),'s1') +
    card(326,'Zimą','instalacje i tynki', a.rect(346,104,100,90,'papier',{r:4}) + a.pipe([[356,184],[356,120],[430,120]],8,'woda') + a.pipe([[372,184],[372,150],[430,150]],8,'cieplo') + a.window(398,160,40,30),'s2');
  return { caption:'Fundamenty wiosną, stan surowy przed zimą, instalacje i tynki zimą.', frames:[
    {caption:'Od zakupu działki do wprowadzki mija 18–24 miesiące.', svg:V(s,'Oś czasu całej budowy: 18–24 miesiące')},
    {caption:'Rytm roku: fundamenty wiosną, stan surowy zamknięty przed zimą, wnętrza zimą.', svg:V(f2,'Trzy pory roku budowy')} ] };
});

BUDOWA.addIllus('00-finanse/sposob-budowy', function(a){
  const card = (x,t,cost,time,people,k,chosen) => a.rect(x,40,140,236,'papier',{r:12,k:k}) + a.pill(x+70,72,t) + people +
    a.num(x+70,182,cost,{k:k,acc:chosen}) + a.pill(x+70,222,time) + (chosen ? a.pill(x+70,252,'nasza baza',{acc:1}) : '') + (chosen ? a.ok(x+118,64,13,{d:400}) : '');
  const s =
    card(10,'Generalny','+100–180 tys.','12–14 mies.',a.person(80,150,{s:.7,kask:true,arms:[10,40]}),'gw',0) +
    card(170,'Na etapy','baza 0 zł','14–18 mies.',a.person(138,150,{s:.62,kask:true}) + a.person(206,150,{s:.62,kask:true,flip:1,arms:[20,50]}),'et',1) +
    card(330,'Gospodarczy','−60…−120 tys.','20–30 mies.',a.person(400,150,{s:.7,kask:false,arms:[20,60]}) + a.drill(440,120,.7),'gs',0);
  return { caption:'Zakładamy ekipy na etapy z niezależnym kierownikiem budowy.', svg:V(s,'Trzy sposoby budowy: generalny wykonawca, ekipy na etapy, system gospodarczy')};
});

BUDOWA.addIllus('00-finanse/kosztorys-harmonogram', function(a){
  const rows = [['Fundamenty',0,.16],['Stan surowy',.14,.34],['Dach',.42,.14],['Instalacje',.5,.22],['Wykończenie',.66,.34]], mats = ['beton','ceramika','dachowka','woda','drewno'];
  let s = a.doc(20,16,40,52,{lines:3}) + a.pill(76,44,'Co, kiedy, za ile',{a:'start'}) + a.num(398,44,'1,5–4 tys. zł');
  rows.forEach((r,i) => { const y = 100 + i*36, x = 130 + r[1]*320, w = r[2]*320;
    s += a.text(20,y+17,r[0],{s:1}) + a.line([[130,y+28],[450,y+28]],'il-jt') + a.fresh(a.rect(x,y,w,22,mats[i],{r:5}),{d:i*150}) + a.fresh(a.marker(x+w+14,y+11,i+1),{d:i*150+300}); });
  s += a.text(240,296,'Kółka to transze kredytu',{s:1,a:'middle'});
  return { caption:'Kosztorys i harmonogram mówią bankowi i tobie, co wypłacić po którym etapie.', svg:V(s,'Harmonogram rzeczowo-finansowy z transzami')};
});

BUDOWA.addIllus('00-finanse/kredyt-transze', function(a){
  const P = a.iso(200,170,1.2);
  const f1 = a.ground(30,236,420,50) + a.fresh(a.doc(60,70,70,90,{stamp:1,lines:4}),{d:200}) + a.pill(95,40,'Umowa kredytu') + a.num(300,70,'4–8 tyg.') + a.text(300,98,'na decyzję i umowę',{s:1,a:'middle'}) +
    a.arrow([[140,120],[220,100],[290,150]]) + a.person(400,236,{s:.7,kask:false,arms:[10,-20]});
  const f2 = a.ground(30,236,420,50) + P.box(0,0,0,110,70,14,'beton') + a.move(P.box(0,0,14,110,10,20,'ceramika'),0,-60) +
    a.person(350,236,{s:.8,kask:true,arms:[20,50]}) + a.doc(380,150,44,56,{stamp:1}) + a.pill(350,60,'Inspekcja banku',{acc:1}) + a.fresh(a.ok(300,150,15),{d:600});
  let st = '';
  for (let i = 0; i < 6; i++) st += a.fresh(a.rect(46+i*68,236-(i+1)*26,56,(i+1)*26,i < 2 ? 'beton' : i < 4 ? 'ceramika' : 'dachowka',{r:4}) + a.fresh(a.text(74+i*68,226-(i+1)*26,'zł',{a:'middle',b:1})),{d:i*160});
  const f3 = a.ground(30,236,420,50,{trawa:false}) + st + a.num(150,40,'5–8 transz') + a.text(330,40,'wypłata po kilku dniach',{s:1,a:'middle'});
  return { caption:'Pieniądze płyną etapami: bank wypłaca kolejną transzę po inspekcji.', frames:[
    {caption:'Umowa kredytu: 4–8 tygodni na decyzję i umowę.', svg:V(f1,'Podpisanie umowy kredytu na budowę')},
    {caption:'Po etapie przychodzi inspekcja banku i odbiór.', svg:V(f2,'Inspekcja banku po zakończeniu etapu')},
    {caption:'Zwykle 5–8 transz, każda po kolejnym odebranym etapie.', svg:V(f3,'Kolejne transze kredytu wraz z postępem budowy')} ] };
});

BUDOWA.addIllus('00-finanse/wybor-ekip', function(a){
  const card = (x,t,inner,k) => a.rect(x,60,100,150,'papier',{r:12,k:k}) + inner + a.pill(x+50,236,t,{k:k}) + a.fresh(a.ok(x+84,76,11),{d:400});
  const s =
    a.rect(14,60,100,150,'papier',{r:12}) + a.rect(34,100,60,26,'bad',{r:13}) + a.text(64,118,'najtańsza',{s:1,a:'middle'}) + a.bad(64,168,20) + a.pill(64,236,'sama cena') +
    card(140,'Realizacje', a.rect(158,110,64,44,'bloczek') + a.poly([[154,110],[190,82],[226,110]],'dachowka') + a.rect(184,128,12,26,'drewno'),'a') +
    card(256,'Firma', a.doc(284,90,44,60,{stamp:1,lines:3}),'b') +
    card(372,'Referencje', a.person(422,168,{s:.7,kask:false,arms:[20,60]}) + a.rect(436,92,38,24,'szklo',{r:8}) + a.text(455,108,'…',{a:'middle'}),'c') +
    a.text(240,290,'Sprawdź, zanim podpiszesz',{s:1,a:'middle'});
  return { caption:'Dobra ekipa z rozsądną ceną jest warta więcej niż najtańsza oferta.', svg:V(s,'Sprawdzanie ekipy: realizacje, firma i referencje zamiast samej ceny')};
});

BUDOWA.addIllus('00-finanse/umowy', function(a){
  let s = a.shadow(240,292,90,6) + a.rect(170,26,140,262,'papier',{r:8}) + a.line([[184,56],[290,56]],'il-docl','stroke-width:3.5');
  [['zak',78],['cena',110],['ter',142],['zal',174],['kau',206],['zm',238]].forEach(r => { s += a.rect(182,r[1],116,18,'piasek',{r:4,k:r[0]}) + a.line([[188,r[1]+9],[286,r[1]+9]],'il-docl'); });
  s += a.callout('cena',182,119,150,70,'Ryczałt za etap',{}) + a.callout('kau',182,215,150,250,'Kaucja 5–10%',{sub:'gwarancyjna'}) +
    a.callout('zal',298,183,334,104,'Zaliczka 10–20%',{sub:'tylko na materiał'}) + a.callout('ter',298,151,334,160,'Kara 0,2–0,5%',{sub:'za dzień zwłoki'}) +
    a.callout('zm',298,247,334,246,'Zmiany',{sub:'tylko na piśmie'});
  return { caption:'Umowa jasno opisuje zakres, cenę, termin, odbiory i konsekwencje zwłoki.', svg:V(s,'Umowa z wykonawcą ze wskazanymi kluczowymi zapisami')};
});

BUDOWA.addIllus('00-finanse/ubezpieczenie', function(a){
  const P = a.iso(210,150,1.15);
  let s = a.ground(40,236,400,50) + P.box(20,0,0,110,90,70,'bloczek') + P.box(10,-4,70,130,98,6,'drewno') +
    a.drops(80,28,5) + a.drops(300,24,4) +
    a.fresh('<path d="M240 30q40 4 70 -10q0 54 -35 76q-35 -22 -35 -76z" class="il-m c-woda"/><path class="il-ok" d="M258 62l12 13 22 -26"/>',{d:300}) +
    a.pill(100,110,'Szkody') + a.pill(380,150,'Kradzież') + a.pill(90,206,'OC') + a.num(240,288,'3–8 tys. zł') +
    a.pill(240,262,'z cesją na bank, przed wykopem');
  return { caption:'Polisa budowlana kosztuje niewiele, a chroni materiały i niedokończony dom.', svg:V(s,'Dom w budowie pod tarczą ubezpieczenia')};
});
})();
