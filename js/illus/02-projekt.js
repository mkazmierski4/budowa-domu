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
