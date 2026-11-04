/* Ilustracje etapu 01 — Działka. Liczby zgodne z docs/DECYZJE.md (ok. 1200 m², ok. 30 × 40 m, 5–10 km od centrum, MPZP z MN, wjazd od północy, geotechnika 1,8–3,5 tys., koszty zakupu 6,5–8,5 tys. zł). */
(function(){
const V = (s,label) => '<svg viewBox="0 0 480 320" role="img" aria-label="'+label+'">'+s+'</svg>';
const circ = (cx,cy,r) => 'M'+(cx-r)+' '+cy+'a'+r+' '+r+' 0 1 0 '+2*r+' 0a'+r+' '+r+' 0 1 0 '+(-2*r)+' 0';
const house = (a,x,y,s) => a.rect(x,y,22*s,14*s,'bloczek',{r:1}) + a.poly([[x-2*s,y],[x+11*s,y-9*s],[x+24*s,y]],'dachowka');

BUDOWA.addIllus('01-dzialka/gdzie-szukac', function(a){
  let s = a.line(circ(150,190,110),'il-ln','stroke-dasharray:5 7;stroke-width:2') + a.line(circ(150,190,55),'il-ln','stroke-dasharray:5 7;stroke-width:2');
  [[118,170],[150,180],[128,200],[160,155],[104,198],[170,198]].forEach(h => { s += house(a,h[0],h[1],1); });
  s += a.road('M170 200C230 200 250 190 285 175') + a.fresh(a.rect(270,150,90,66,'trawa',{r:8,k:'dz'}) + a.line([[315,150],[315,128]],'il-ln','stroke-width:3') + '<circle cx="315" cy="122" r="9" class="il-m c-bad"/>',{d:500}) +
    a.dim(150,190,150,70,'5–10 km',{dx:0}) + a.pill(150,264,'Obrzeża miasta',{k:'m'}) + a.callout('dz',360,196,396,252,'Działka ok. 1200 m²',{hot:0}) +
    a.text(300,60,'media w drodze',{s:1,a:'start'});
  return { caption:'Szukaj 5–10 km od centrum małego miasta: taniej, a media zwykle są już w drodze.', svg:V(s,'Działka na obrzeżach miasta, 5–10 km od centrum')};
});

BUDOWA.addIllus('01-dzialka/mpzp-wz', function(a){
  const s = a.road('M10 160H70C130 160 150 90 210 90H340') + a.road('M70 160C130 160 150 230 210 230H340') +
    a.person(36,160,{s:.6,kask:false,arms:[10,40]}) +
    a.stop(260,90,'',{icon:a.icon('urzad',260,90,1.15),k:'m'}) + a.pill(260,50,'Jest MPZP: wypis 1–2 tyg.',{k:'m'}) +
    a.stop(260,230,'',{icon:a.icon('projekt',260,230,1.15),k:'w'}) + a.pill(260,272,'Brak planu: WZ 1–3 mies.',{k:'w'}) +
    a.fresh(a.poly([[392,150],[424,126],[456,150]],'dachowka') + a.rect(396,150,56,34,'bloczek',{r:2}),{d:500}) + a.num(424,208,'przeznaczenie MN');
  return { caption:'Zanim pokochasz działkę, sprawdź, co wolno na niej zbudować (MN = zabudowa jednorodzinna).', svg:V(s,'Droga do ustalenia zasad zabudowy: plan miejscowy albo warunki zabudowy')};
});

BUDOWA.addIllus('01-dzialka/media', function(a){
  let s = a.rect(40,96,400,196,'trawa',{r:10}) + a.road('M0 50H480') +
    a.cable([[180,64],[180,200]],'var(--il-poziomica)') + a.pipe([[230,64],[230,200]],8,'woda') + a.pipe([[280,64],[280,200]],6,'rura') +
    a.rect(150,200,180,60,'bloczek',{r:3}) + a.poly([[142,200],[240,162],[338,200]],'dachowka') +
    a.pipe([[330,236],[380,236]],8,'kan') + a.fresh('<ellipse cx="412" cy="236" rx="30" ry="18" class="il-m c-beton"/><ellipse cx="412" cy="230" rx="22" ry="8" class="il-m c-kmb"/>',{d:500}) +
    a.pill(180,112,'Prąd',{k:'p'}) + a.pill(230,146,'Woda',{k:'w'}) + a.pill(300,112,'Światłowód',{k:'i'}) + a.pill(412,186,'Oczyszczalnia',{k:'o'}) +
    a.text(70,50,'droga',{s:1,a:'start'}) + a.person(76,282,{s:.55,kask:false});
  return { caption:'Prąd, woda i światłowód w drodze; ścieki na działce referencyjnej do własnej oczyszczalni.', svg:V(s,'Przyłącza do działki: prąd, woda, światłowód i oczyszczalnia')};
});

BUDOWA.addIllus('01-dzialka/geotechnika', function(a){
  const rod = a.line([[240,70],[240,240]],'il-ln','stroke:var(--il-stal);stroke-width:5') + a.line([[222,70],[258,70]],'il-ln','stroke:var(--il-stal);stroke-width:5');
  const f1 = a.ground(30,220,420,60) + [90,380,440].map((x,i) => a.marker(x,208,i+1)).join('') + a.person(190,220,{s:.95,kask:true,arms:[2,-4]}) + a.move(rod,0,-40) +
    a.poly([[262,220],[290,196],[318,220]],'ziemia') + a.pill(240,34,'Kilka otworów',{k:'o'}) + a.num(360,100,'2–3,5 tys. zł') + a.text(360,126,'1 dzień + 1–2 tyg. na opinię',{s:1,a:'middle'});
  const f2 = a.rect(30,92,420,12,'trawa',{r:3}) + a.rect(30,104,420,24,'ziemia',{r:0}) + a.rect(30,128,420,82,'piasek',{r:0}) + a.rect(30,210,420,42,'zwir',{r:0}) + a.rect(30,252,420,38,'woda',{r:0,k:'w'}) +
    a.rect(200,150,60,20,'beton',{r:2,k:'l'}) + a.dim(150,104,150,170,'ława −1,40 m') + a.callout('g',380,170,330,60,'Grunt nośny',{}) + a.callout('w',380,270,330,300,'Woda niżej niż ława',{}) + a.fresh(a.ok(300,160,14),{d:600});
  return { caption:'Geolog mówi, na czym postawisz dom: czy grunt jest nośny i jak wysoko stoi woda.', frames:[
    {caption:'Wiercenie kilku otworów na działce.', svg:V(f1,'Geolog wierci otwory badawcze na działce')},
    {caption:'Opinia: warstwy gruntu i poziom wody względem ławy (spód −1,40 m).', svg:V(f2,'Przekrój gruntu z poziomem wody i ławą fundamentową')} ] };
});

BUDOWA.addIllus('01-dzialka/ksztalt-slonce', function(a){
  let sun = '<circle cx="415" cy="240" r="20" class="il-m c-poziomica"/>';
  for (let i = 0; i < 8; i++){ const g = i*Math.PI/4; sun += a.line([[415+Math.cos(g)*27,240+Math.sin(g)*27],[415+Math.cos(g)*37,240+Math.sin(g)*37]],'il-ln','stroke:var(--il-poziomica);stroke-width:3'); }
  const s = a.road('M0 22H480') + a.rect(150,40,180,240,'trawa',{r:6}) + a.rect(255,36,24,26,'zwir',{r:0}) +
    a.rect(170,58,78,57,'bloczek',{r:3}) + a.rect(248,58,39,42,'chudy',{r:3}) + a.rect(172,118,70,22,'drewno',{r:2}) + a.rect(190,150,25,51,'woda',{r:3}) +
    sun + a.arrow([[380,220],[345,200],[310,180]]) +
    a.pill(76,92,'Wjazd od północy',{k:'n'}) + a.pill(76,240,'Ogród i taras',{k:'s'}) + a.text(76,268,'od południa',{s:1,a:'middle'}) +
    a.dim(135,40,135,280,'40 m') + a.dim(150,302,330,302,'30 m') + a.text(404,296,'ok. 1200 m²',{s:1,a:'middle'}) + a.marker(444,60,'N');
  return { caption:'30 × 40 m: dom z garażem od północy, taras, basen i ogród od południa.', svg:V(s,'Plan działki 30 na 40 metrów z domem od północy i ogrodem od południa')};
});

BUDOWA.addIllus('01-dzialka/dojazd', function(a){
  const col = (x,t,mid,ok,sub) => a.rect(x,50,150,26,'beton',{r:3}) + mid + a.pill(x+75,262,t,{k:'c'+x}) + (ok ? a.ok(x+75,228,13,{d:400}) : a.bad(x+75,228,13,{d:400})) + (sub || '');
  const own = (x,y,h) => a.rect(x+30,y,90,h,'trawa',{r:4}) + a.text(x+75,y+h/2+4,'nasza',{s:1,a:'middle'});
  const s = col(10,'Droga publiczna', own(10,76,110),1) +
    col(165,'Służebność', a.rect(175,76,130,56,'piasek',{r:4}) + a.rect(217,76,24,76,'zwir',{r:0}) + own(165,150,56),1) +
    col(320,'Brak dostępu', a.rect(330,76,130,56,'piasek',{r:4}) + own(320,138,56),0) + a.text(240,300,'Dojazd: bezpośrednio, drogą wewnętrzną albo służebnością',{s:1,a:'middle'});
  return { caption:'Bez dostępu do drogi publicznej nie dostaniesz pozwolenia na budowę.', svg:V(s,'Trzy sposoby dojazdu do działki: droga publiczna, służebność i brak dostępu')};
});

BUDOWA.addIllus('01-dzialka/ksiega-wieczysta', function(a){
  let s = a.shadow(290,294,100,6) + a.rect(190,22,200,266,'papier',{r:8}) + a.line([[206,48],[330,48]],'il-docl','stroke-width:3.5');
  [['d2',84],['d3',144],['d4',204]].forEach(r => { s += a.rect(202,r[1],176,42,'piasek',{r:5,k:r[0]}) + a.line([[210,r[1]+14],[350,r[1]+14],[210,r[1]+27],[310,r[1]+27]].reduce((d,p,i)=>d+(i%2?'L':'M')+p.join(' '),''),'il-docl'); });
  s += a.callout('d2',202,105,172,100,'Dział II',{sub:'właściciel'}) + a.callout('d3',202,165,172,170,'Dział III',{sub:'służebności, roszczenia'}) + a.callout('d4',202,225,172,240,'Dział IV',{sub:'hipoteki'}) +
    a.fresh('<circle cx="430" cy="160" r="26" class="il-m c-szklo"/><circle cx="430" cy="160" r="26" class="il-ln" style="stroke-width:5"/><path class="il-ln" d="M449 180L468 202" style="stroke-width:7"/>',{d:500}) + a.num(430,70,'15–30 min') + a.text(436,98,'za darmo',{s:1,a:'middle'});
  return { caption:'Księgę przejrzysz online: kto jest właścicielem, czy są służebności i hipoteki.', svg:V(s,'Księga wieczysta z podświetlonymi działami II, III i IV')};
});

BUDOWA.addIllus('01-dzialka/umowa-przedwstepna', function(a){
  let s = a.shadow(240,292,90,6) + a.rect(170,26,140,262,'papier',{r:8}) + a.line([[184,56],[290,56]],'il-docl','stroke-width:3.5');
  [['n',78],['w',116],['z',154],['t',192]].forEach(r => { s += a.rect(182,r[1],116,24,'piasek',{r:4,k:r[0]}) + a.line([[188,r[1]+12],[286,r[1]+12]],'il-docl'); });
  s += a.fresh('<g transform="rotate(-14 270 252)"><circle cx="270" cy="252" r="22" class="il-stamp"/><path class="il-stamp" d="M260 252l7 7 13 -16"/></g>',{d:600}) +
    a.callout('n',298,90,334,70,'Forma notarialna',{sub:'roszczenie w dziale III KW'}) + a.callout('w',182,128,150,120,'Warunki',{sub:'kredyt, badania, przyłącza'}) +
    a.callout('z',298,166,334,170,'Zadatek',{}) + a.callout('t',182,204,150,214,'Termin aktu',{});
  return { caption:'Rezerwuje działkę na czas kredytu i badań; u notariusza daje silniejszą ochronę.', svg:V(s,'Umowa przedwstępna ze wskazanymi kluczowymi zapisami')};
});

BUDOWA.addIllus('01-dzialka/akt-notarialny', function(a){
  // kancelaria: ściana z oknem i zegarem, ludzie siedzą PRZY stole (a.layout.table pilnuje skali)
  const clock = '<circle cx="240" cy="72" r="19" class="il-m c-papier"/><path class="il-ln" d="M240 72V60M240 72L249 77" style="stroke-width:2.5"/>';
  const f1 = a.rect(20,24,440,262,'papier',{r:10,cls:'il-panel'}) + a.window(48,58,72,66) + clock + a.num(316,72,'1–2 godz.') +
    a.layout.table([{at:'l', t:'Sprzedający', k:'s'}, {at:'c', t:'Notariusz', k:'n', st:'--il-shirt:var(--il-pants)'}, {at:'r', t:'Ty', k:'t'}],
      a.fresh(a.doc(-44,-26,34,26,{stamp:1,lines:2}), {d:300}) + '<path class="il-ln" d="M24 -2L42 -14" style="stroke-width:3"/>');
  const row = (y,t,k) => a.rect(280,y,170,36,'papier',{r:8,k:k}) + a.pill(365,y+18,t);
  const f2 = a.rect(40,112,200,140,'piasek',{r:10}) + a.rect(70,170,140,66,'trawa',{r:6}) + a.pill(140,140,'Cena działki',{k:'c'}) + a.text(140,274,'190–240 tys. zł',{s:1,a:'middle'}) +
    row(112,'PCC 2%','p') + row(160,'Taksa notarialna','t') + row(208,'Wpis do księgi','k') + a.num(366,76,'ok. 6,5–8,5 tys. zł') + a.text(366,274,'koszty zakupu',{s:1,a:'middle'});
  return { caption:'Poza ceną zapłacisz PCC 2%, taksę notarialną i opłaty sądowe.', frames:[
    {caption:'Przy akcie notarialnym działka przechodzi na ciebie.', svg:V(f1,'Podpisanie aktu notarialnego u notariusza')},
    {caption:'Koszty zakupu to ok. 6,5–8,5 tys. zł ponad cenę działki.', svg:V(f2,'Cena działki oraz koszty PCC, taksa i wpis do księgi')} ] };
});

BUDOWA.addIllus('01-dzialka/mapa-projektowa', function(a){
  const f1 = a.ground(30,236,420,46) + a.line([[180,160],[150,238]],'il-ln','stroke-width:3.5') + a.line([[180,160],[181,242]],'il-ln','stroke-width:3.5') + a.line([[180,160],[214,238]],'il-ln','stroke-width:3.5') +
    a.rect(164,134,34,28,'maszyna',{r:4}) + a.rect(198,142,14,8,'szklo',{r:2}) + a.person(300,236,{s:.85,kask:true,arms:[2,-2]}) + a.line([[336,110],[336,238]],'il-ln','stroke:var(--il-bad);stroke-width:5') +
    a.pill(240,40,'Pomiar w terenie',{k:'p'}) + a.num(380,84,'3–6 tyg.');
  const f2 = a.shadow(240,292,130,6) + a.rect(110,24,260,260,'papier',{r:6}) +
    a.line('M126 90C190 66 270 106 354 78M126 130C200 110 280 148 354 122M126 170C190 160 270 190 354 168M126 210C200 200 290 230 354 212','il-jt') +
    a.line('M150 60H330V250H150Z','il-ln','stroke-dasharray:6 5;stroke-width:2.2') + a.line([[150,236],[240,236],[240,250]],'il-ln','stroke:var(--il-poziomica);stroke-width:3') + a.fresh(a.ghost(a.rect(200,110,70,48,'bloczek')),{d:500}) +
    a.callout('h',336,112,396,70,'Wysokości terenu',{}) + a.callout('s',240,243,396,262,'Sieci',{}) + a.num(86,60,'2–3,5 tys. zł');
  return { caption:'Na tej mapie projektant usytuuje dom.', frames:[
    {caption:'Geodeta mierzy teren: 3–6 tygodni od zlecenia do mapy.', svg:V(f1,'Geodeta z tachimetrem mierzy działkę')},
    {caption:'Mapa z wysokościami terenu i sieciami: podkład dla projektu.', svg:V(f2,'Mapa do celów projektowych z warstwicami i siecią')} ] };
});
})();
