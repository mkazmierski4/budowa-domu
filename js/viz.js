/* =====================================================================
   VIZ — wizualizacja budowy (aksonometria + lupa detalu + przekrój).
   Przeniesione 1:1 z makieta/wizualizacja.html (zatwierdzona 2026-11-03),
   dodane animacje dorysowania w stylu makieta-v2.html.
   API: VIZ.mount(el), VIZ.setStage(nr), VIZ.highlight(layerId),
        VIZ.setView('dom'|'przekroj'), VIZ.STAGES, VIZ.LAYERS.
   Bez zależności, działa z file://. Style: css/viz.css (tokeny --vz-*).
   ===================================================================== */
window.VIZ = (function(){
'use strict';

/* ---------- Projekcja izometryczna: świat w metrach, x wzdłuż domu, y w głąb, z w górę ---------- */
const W = 1280, H = 800, S = 24, CX = Math.cos(Math.PI/6)*S, CY = .5*S;
const OX = 705, OY = 318;
const r1 = n => Math.round(n*10)/10;
function P(x,y,z){ return [OX + (x-y)*CX, OY + (x+y)*CY - (z||0)*S]; }
function M(pts){ return 'M' + pts.map(p => { const q = P(p[0],p[1],p[2]); return r1(q[0])+' '+r1(q[1]); }).join('L'); }
const poly  = (pts,cls) => `<path class="${cls}" d="${M(pts)}Z"/>`;
const pline = (pts,cls) => `<path class="${cls}" d="${M(pts)}"/>`;
const path  = (d,cls) => d ? `<path class="${cls}" d="${d}"/>` : '';

/* Odwzorowania płaszczyzn: (u,v) → punkt 3D */
const FY = y => (u,v) => [u,y,v];          // ściana frontowa (normalna +y): u=x, v=z
const FX = x => (u,v) => [x,u,v];          // ściana boczna (normalna +x): u=y, v=z
const FZ = z => (u,v) => [u,v,z];          // poziom: u=x, v=y
const FP = (o,a,b) => (u,v) => [o[0]+a[0]*u+b[0]*v, o[1]+a[1]*u+b[1]*v, o[2]+a[2]*u+b[2]*v];
const fr = (f,u0,v0,u1,v1,cls) => poly([f(u0,v0),f(u1,v0),f(u1,v1),f(u0,v1)], cls);
const fpoly = (f,uv,cls) => poly(uv.map(p => f(p[0],p[1])), cls);
function seg(f,u0,v0,u1,v1){ const a = P(...f(u0,v0)), b = P(...f(u1,v1)); return `M${r1(a[0])} ${r1(a[1])}L${r1(b[0])} ${r1(b[1])}`; }
function box(x0,y0,z0,x1,y1,z1,ct,cy,cx){
  return fr(FY(y1),x0,z0,x1,z1,cy||ct) + fr(FX(x1),y0,z0,y1,z1,cx||cy||ct) + fr(FZ(z1),x0,y0,x1,y1,ct);
}
function cyl(x,y,z0,z1,r,cls){            // pionowy walec (słup, rura)
  const a = P(x,y,z0), b = P(x,y,z1), rx = r*S*1.22, ry = r*S*.71;
  return `<path class="${cls}" d="M${r1(a[0]-rx)} ${r1(a[1])}V${r1(b[1])}A${r1(rx)} ${r1(ry)} 0 0 1 ${r1(a[0]+rx)} ${r1(b[1])}V${r1(a[1])}A${r1(rx)} ${r1(ry)} 0 0 1 ${r1(a[0]-rx)} ${r1(a[1])}Z"/>`
       + `<ellipse class="${cls}" cx="${r1(b[0])}" cy="${r1(b[1])}" rx="${r1(rx)}" ry="${r1(ry)}"/>`;
}
function ell(x,y,z,r,cls){ const a = P(x,y,z); return `<ellipse class="${cls}" cx="${r1(a[0])}" cy="${r1(a[1])}" rx="${r1(r*S*1.22)}" ry="${r1(r*S*.71)}"/>`; }

/* Deterministyczny los, żeby szczegóły nie „skakały” przy zmianie etapu */
let seed = 1;
const rnd = () => (seed = (seed*16807) % 2147483647) / 2147483647;
const reseed = s => { seed = s; };

/* ---------- Generatory detalu ---------- */
// rzędy bloczków z przewiązaniem (mijankowo co pół bloczka)
function courses(f,u0,u1,v0,v1,L,Hc,ph){
  let d = '', r = 0;
  for (let v = v0+Hc; v < v1-1e-6; v += Hc) d += seg(f,u0,v,u1,v);
  for (let v = v0; v < v1-1e-6; v += Hc, r++){
    const vt = Math.min(v+Hc, v1), off = (r%2 ? L/2 : 0) + (ph||0);
    for (let u = u0 + ((off%L)+L)%L; u < u1-1e-6; u += L) if (u > u0+1e-6) d += seg(f,u,v,u,vt);
  }
  return d;
}
// linie równoległe (deska elewacyjna, łaty, panele bramy)
function stripes(f,u0,u1,v0,v1,st,alongV){
  let d = '';
  if (alongV) for (let u = u0+st; u < u1-1e-6; u += st) d += seg(f,u,v0,u,v1);
  else for (let v = v0+st; v < v1-1e-6; v += st) d += seg(f,u0,v,u1,v);
  return d;
}
// deski pionowe w trójkącie szczytu: u od u0 do u1, góra ograniczona funkcją top(u)
function gableBoards(f,u0,u1,v0,top,st){
  let d = '';
  for (let u = u0+st; u < u1-1e-6; u += st){ const t = top(u); if (t > v0) d += seg(f,u,v0,u,t); }
  return d;
}
// dachówki zakładkowe: rzędy z cieniem zakładu i pionowe zamki
function tiles(f,u0,u1,v0,v1,row,w){
  let d = '', dd = '', r = 0;
  for (let v = v0+row; v < v1-1e-6; v += row, r++){ d += seg(f,u0,v,u1,v); dd += seg(f,u0,v-.06,u1,v-.06); }
  for (let v = v0; v < v1-1e-6; v += row){
    const vt = Math.min(v+row, v1);
    for (let u = u0+w; u < u1-1e-6; u += w) dd += seg(f,u,v,u,vt-.08);
  }
  return path(dd,'jj') + path(d,'j');
}
// kosz zbrojeniowy wzdłuż odcinka (pręty podłużne + strzemiona co st)
function rebarCage(a,b,w,h,z0,st){
  const dx = b[0]-a[0], dy = b[1]-a[1], L = Math.hypot(dx,dy), ux = dx/L, uy = dy/L, nx = -uy*w/2, ny = ux*w/2;
  let d = '';
  const corner = [[nx,ny,0],[-nx,-ny,0],[-nx,-ny,h],[nx,ny,h]];
  corner.forEach(c => d += M([[a[0]+c[0],a[1]+c[1],z0+c[2]],[b[0]+c[0],b[1]+c[1],z0+c[2]]]));
  for (let t = 0; t <= L+1e-6; t += st){
    const px = a[0]+ux*t, py = a[1]+uy*t;
    d += M(corner.map(c => [px+c[0],py+c[1],z0+c[2]])) + 'Z';
  }
  return path(d,'steel');
}
// kępki trawy w obszarze x0..x1, y0..y1 (z wykluczeniami)
function grass(x0,x1,y0,y1,n,excl){
  let d = '';
  for (let i = 0; i < n; i++){
    const x = x0 + rnd()*(x1-x0), y = y0 + rnd()*(y1-y0);
    if (excl && excl.some(e => x > e[0] && x < e[2] && y > e[1] && y < e[3])) continue;
    const p = P(x,y,0), k = .7 + rnd()*.6;
    d += `M${r1(p[0])} ${r1(p[1])}l${r1(-1.6*k)} ${r1(-3*k)}M${r1(p[0])} ${r1(p[1])}l0 ${r1(-4*k)}M${r1(p[0])} ${r1(p[1])}l${r1(1.6*k)} ${r1(-3*k)}`;
  }
  return path(d,'jj');
}
// drzewo liściaste w stylu rysunku architektonicznego: cień, pień, korona z obrysem i gałęziami
function tree(x,y,h,r,lit){
  const g = P(x,y,0), c = P(x,y,h*.62), R = r*S;
  let s = `<ellipse class="shadow" cx="${r1(g[0]+R*.5)}" cy="${r1(g[1]+2)}" rx="${r1(R*.9)}" ry="${r1(R*.34)}"/>`;
  s += `<path class="ln" d="M${r1(g[0])} ${r1(g[1])}V${r1(c[1]+R*.3)}M${r1(g[0])} ${r1(c[1]+R*.6)}l${r1(-R*.35)} ${r1(-R*.45)}M${r1(g[0])} ${r1(c[1]+R*.45)}l${r1(R*.4)} ${r1(-R*.5)}"/>`;
  let d = '';
  for (let i = 0; i < 14; i++){
    const a = i/14*Math.PI*2, rr = R*(.92 + rnd()*.12);
    d += (i ? 'L' : 'M') + r1(c[0]+Math.cos(a)*rr) + ' ' + r1(c[1]+Math.sin(a)*rr*.92);
  }
  s += `<path class="crown e" d="${d}Z" style="fill-opacity:.88"/>`;
  let br = '';
  for (let i = 0; i < 6; i++){
    const a = rnd()*Math.PI*2, l = R*(.35 + rnd()*.4);
    br += `M${r1(c[0])} ${r1(c[1]+R*.2)}Q${r1(c[0]+Math.cos(a)*l*.4)} ${r1(c[1]+Math.sin(a)*l*.4)} ${r1(c[0]+Math.cos(a)*l)} ${r1(c[1]+Math.sin(a)*l*.9)}`;
  }
  s += path(br,'jj');
  s += `<path class="j" d="M${r1(c[0]-R*.55)} ${r1(c[1]+R*.35)}a${r1(R*.6)} ${r1(R*.5)} 0 0 0 ${r1(R*1.1)} 0"/>`;
  return s;
}
function bush(x,y,r){
  const c = P(x,y,r*.6), R = r*S;
  return `<ellipse class="shadow" cx="${r1(c[0]+R*.4)}" cy="${r1(c[1]+R*.6)}" rx="${r1(R*1.1)}" ry="${r1(R*.4)}"/>`
       + `<ellipse class="crown-d e" cx="${r1(c[0])}" cy="${r1(c[1])}" rx="${r1(R)}" ry="${r1(R*.75)}"/>`
       + `<path class="jj" d="M${r1(c[0]-R*.5)} ${r1(c[1])}q${r1(R*.5)} ${r1(-R*.4)} ${r1(R)} 0"/>`;
}
// panel ogrodzenia (słupki + siatka/ sztachety) wzdłuż odcinka
function fence(a,b,h,st,kind){
  const L = Math.hypot(b[0]-a[0], b[1]-a[1]), n = Math.max(1, Math.round(L/st));
  let posts = '', fill = '';
  const at = t => [a[0]+(b[0]-a[0])*t, a[1]+(b[1]-a[1])*t];
  for (let i = 0; i <= n; i++){ const p = at(i/n); posts += M([[p[0],p[1],0],[p[0],p[1],h]]); }
  if (kind === 'temp'){                 // ogrodzenie tymczasowe: panele z siatki na stopach betonowych
    for (let i = 0; i <= n; i++){ const p = at(i/n); fill += M([[p[0]-.25,p[1],0],[p[0]+.25,p[1],0]]); }
    let m = '';
    for (let k = 1; k < 6; k++) m += M([[a[0],a[1],h*k/6],[b[0],b[1],h*k/6]]);
    const m2 = Math.round(L/.25);
    for (let k = 0; k <= m2; k++){ const p = at(k/m2); m += M([[p[0],p[1],.05],[p[0],p[1],h]]); }
    return path(m,'mesh') + path(posts,'ln') + path(fill,'ln') + pline([[a[0],a[1],h],[b[0],b[1],h]],'ln');
  }
  let sl = '';                          // docelowe: sztachety pionowe
  const m2 = Math.round(L/.14);
  for (let k = 0; k <= m2; k++){ const p = at(k/m2); sl += M([[p[0],p[1],.15],[p[0],p[1],h-.1]]); }
  return path(sl,'jj') + path(posts,'ln') + pline([[a[0],a[1],h-.1],[b[0],b[1],h-.1]],'ln') + pline([[a[0],a[1],.3],[b[0],b[1],.3]],'thin');
}
// rusztowanie ramowe wzdłuż ściany: ramy co bay, podesty, poręcze, krzyżulce
function scaffold(f,u0,u1,levels,depth,bay){
  // f(u, off, z): u wzdłuż ściany, off odsunięcie od lica, z wysokość
  let back = '', front = '', deck = '', diag = '', rail = '';
  const top = levels[levels.length-1] + 1.1;
  for (let u = u0, i = 0; u <= u1+1e-6; u += bay, i++){
    back += M([f(u,.3,0), f(u,.3,top)]); front += M([f(u,.3+depth,0), f(u,.3+depth,top)]);
    levels.forEach(z => deck += M([f(u,.3,z), f(u,.3+depth,z)]));
    if (u+bay <= u1+1e-6 && i%2 === 0) diag += M([f(u,.3+depth,0), f(u+bay,.3+depth,levels[0])]) + M([f(u+bay,.3+depth,levels[0]), f(u,.3+depth,levels[1]||top)]);
  }
  let planks = '';
  levels.forEach(z => {
    planks += poly([f(u0,.3,z), f(u1,.3,z), f(u1,.3+depth,z), f(u0,.3+depth,z)], 'plank e');
    rail += M([f(u0,.3+depth,z+1), f(u1,.3+depth,z+1)]) + M([f(u0,.3+depth,z+.5), f(u1,.3+depth,z+.5)]) + M([f(u0,.3+depth,z+.15), f(u1,.3+depth,z+.15)]);
  });
  return path(back,'scaff') + planks + path(deck,'scaff') + path(front + diag + rail,'scaff');
}
// koparka gąsienicowa (uproszczona bryła)
function excavator(x,y,rot){
  let s = box(x,y,0,x+3.6,y+.6,.7,'roof-d e') + box(x,y+1.9,0,x+3.6,y+2.5,.7,'roof-d e');
  s += path(stripes(FY(y+2.5),x,x+3.6,0,.7,.3,true),'jj');
  s += box(x+.3,y+.3,.7,x+3.3,y+2.2,1.3,'mach-d e','mach e','mach-d e');
  s += box(x+1.6,y+.4,1.3,x+3.2,y+2.1,1.9,'mach e','mach e','mach-d e');        // korpus
  s += box(x+.4,y+.4,1.3,x+1.6,y+1.5,3.1,'mach e','mach e','mach-d e');         // kabina
  s += fr(FY(y+1.5),x+.55,1.9,x+1.45,2.95,'glass e') + fr(FX(x+1.6),.6+y,1.9,1.35+y,2.95,'glass-d e');
  const b1 = [x+.2,y+1.95,1.8], b2 = [x-1.6,y+1.95,3.6], b3 = [x-3.2,y+1.95,1.4];
  s += `<path class="ln" style="stroke:var(--m-machine-d);stroke-width:4.5" d="${M([b1,b2,b3])}"/>`;
  s += `<path class="ln" style="stroke:var(--m-machine);stroke-width:3" d="${M([b1,b2,b3])}"/>`;
  s += poly([[b3[0]+.3,y+1.6,1.6],[b3[0]-.5,y+1.6,1.0],[b3[0]-.3,y+1.6,.4],[b3[0]+.5,y+1.6,.6]],'roof-d e');
  s += poly([[b3[0]+.3,y+2.3,1.6],[b3[0]-.5,y+2.3,1.0],[b3[0]-.3,y+2.3,.4],[b3[0]+.5,y+2.3,.6]],'metal-d e');
  return s;
}
// ciężarówka z nadwoziem (gruszka / pompa / zwykła) — oś wzdłuż x
function truck(x,y,kind){
  let s = box(x,y,.4,x+7.2,y+2.4,.95,'roof-d e');
  s += cyl(x+1.2,y+2.4,.0,.0001,.45,'roof-d e') + cyl(x+5.6,y+2.4,0,.0001,.45,'roof-d e');
  s += box(x+5.4,y,.95,x+7.4,y+2.4,2.9,'white e','white e','white e');        // kabina
  s += fr(FX(x+7.4),y+.25,1.9,y+2.15,2.7,'glass e') + fr(FY(y+2.4),x+5.6,1.9,x+6.6,2.7,'glass-d e');
  if (kind === 'mix'){
    let d = '';
    for (let i = 0; i <= 8; i++){ const t = i/8, xx = x+.4+t*4.6, rr = 1.05*Math.sin(Math.PI*(.12+.76*t)) + .15; d += M([[xx,y+1.2-rr,1.1+.9*t+rr*.2],[xx,y+1.2+rr,1.1+.9*t+rr*.2]]); }
    s += poly([[x+.4,y+.7,1.4],[x+2.2,y+.2,2.0],[x+5.0,y+.6,2.9],[x+5.0,y+1.8,3.0],[x+2.2,y+2.3,2.4],[x+.4,y+1.7,1.5]],'mach e');
    s += poly([[x+2.2,y+2.3,2.4],[x+5.0,y+1.8,3.0],[x+5.0,y+1.8,1.6],[x+2.2,y+2.3,1.0],[x+.4,y+1.7,1.0],[x+.4,y+1.7,1.5]],'mach-d e');
    s += path(d,'jj');
    s += pline([[x+.2,y+1.2,1.4],[x-.9,y+1.2,.7]],'ln');
  }
  if (kind === 'pump'){
    s += box(x+.3,y+.4,.95,x+5.2,y+2.0,1.6,'mach e','mach e','mach-d e');
    s += box(x-.4,y-.3,0,x+.2,y+.0,.95,'metal-d e') + box(x-.4,y+2.4,0,x+.2,y+2.7,.95,'metal-d e'); // podpory
  }
  return s;
}
// paleta bloczków (zafoliowana, z taśmą)
function pallet(x,y,cls){
  let s = box(x,y,0,x+1.2,y+.8,.14,'timber-d e');
  s += box(x,y,.14,x+1.2,y+.8,1.1,cls+' e');
  s += path(courses(FY(y+.8),x,x+1.2,.14,1.1,.5,.24) + courses(FX(x+1.2),y,y+.8,.14,1.1,.38,.24),'j');
  s += pline([[x+.6,y+.8,.14],[x+.6,y+.8,1.1],[x+.6,y,1.1]],'thin');
  return s;
}
// betoniarka wolnospadowa
function mixer(x,y){
  let s = pline([[x,y,0],[x+.3,y+.3,.9],[x+.6,y,0]],'ln') + pline([[x,y+.9,0],[x+.3,y+.6,.9]],'ln');
  const c = P(x+.3,y+.45,1.15);
  s += `<path class="mach e" d="M${r1(c[0]-9)} ${r1(c[1]+6)}l-3 -12 l7 -7 h10 l5 7 l-3 12z"/><ellipse class="roof-d e" cx="${r1(c[0]+1)}" cy="${r1(c[1]-13)}" rx="5" ry="2.2"/>`;
  return s;
}

/* ---------- Etapy (numeracja jak w docs/PLAN.md) ---------- */
const STAGES = [
  ['Finanse i plan', 'Działka przed zakupem: trawa, stare drzewa, granice oznaczone kamieniami granicznymi.'],
  ['Działka', 'Działka kupiona. Geodeta wbił paliki, stoi ogrodzenie tymczasowe, kontener, toi-toi i skrzynka budowlana prądu.'],
  ['Projekt i pozwolenie', 'Obrys budynku z projektu zagospodarowania i wymiary, na razie tylko na papierze i palikach.'],
  ['Przygotowanie terenu', 'Humus zdjęty na hałdę, ławy ciesielskie ze sznurkami wyznaczają osie, koparka kopie wykop pod ławy.'],
  ['Fundamenty', 'Stan zero w toku: z prawej kosze zbrojeniowe i betonowanie z pompy, z lewej ściany fundamentowe z izolacją, XPS i zasypką.'],
  ['Ściany i stropy', 'Ściany z pustaków na przewiązanie, nadproża, wieniec i strop. Ścianka kolankowa i szczyt rosną z rusztowania.'],
  ['Dach', 'Dach warstwami od prawej: krokwie i jętki, membrana z kontrłatami, łaty, a z lewej dachówka z obróbkami i rynnami.'],
  ['Okna i drzwi', 'Stan surowy zamknięty: okna z ramiakami, drzwi wejściowe, segmentowa brama garażowa.'],
  ['Instalacje', 'Z zewnątrz widać tylko złącze kablowo-pomiarowe w ogrodzeniu i przepusty w ścianie.'],
  ['Ogrzewanie i woda', 'Przy ścianie stanęła jednostka zewnętrzna pompy ciepła na fundamencie.'],
  ['Rekuperacja i PV', 'Na dachu panele fotowoltaiczne, na ścianie czerpnia i wyrzutnia rekuperatora.'],
  ['Tynki i wylewki', 'Mokre prace w środku: agregat do wylewek przed domem, wąż wchodzi przez okno.'],
  ['Elewacja', 'Ocieplenie w toku od prawej: płyty na kołkach, siatka w kleju, z lewej gotowy tynk, kamień i deska.'],
  ['Wykończenie', 'Rusztowanie zdjęte. W środku, za przeszkleniami, widać kuchnię z wyspą i ciepłe światło.'],
  ['Umeblowanie', 'Salon z kominkiem i meblami. Dom gotowy w środku, ogród jeszcze surowy.'],
  ['Ogród', 'Podjazd z kostki, zadaszony taras, trawnik, nasadzenia, lampy, basen, pergola, domek ze zjeżdżalnią i ogrodzenie.'],
  ['Odbiory i przeprowadzka', 'Dom zamieszkany: samochód na podjeździe, wieczorem pali się światło w oknach i w ogrodzie.']
];

/* ---------- Geometria domu referencyjnego (metry) ---------- */
const Z0 = .35, ZW = .12, ZS0 = 3.1, ZS1 = 3.35, EAVE = 4.35;
const TG = Math.tan(40*Math.PI/180), CS = Math.cos(40*Math.PI/180), SN = Math.sin(40*Math.PI/180);
const RIDGE = EAVE + 4.75*TG, OVH = .6, EZ = EAVE - OVH*TG, LS = (4.75+OVH)/CS;
const ff = (u,v) => [u, 9.5+OVH - v*CS, EZ + v*SN];        // połać frontowa (u = x, v = m po spadku)
const fb = (u,v) => [u, -OVH + v*CS, EZ + v*SN];           // połać tylna
const GZ = 3.2, GR = GZ + 3.25*TG, GLS = 3.65/CS;
const fg = (u,v) => [-3.25 + v*CS, u, GR - v*SN];          // połać garażu w stronę domu (u = y)
const fgl = (u,v) => [-3.25 - v*CS, u, GR - v*SN];         // połać garażu na zewnątrz
const gableTop = y => EAVE + (4.75 - Math.abs(y-4.75))*TG; // szczyt x = 13
const garTop = x => GZ + (3.25 - Math.abs(x+3.25))*TG;     // szczyt garażu y = 9.5
const R = (u0,v0,u1,v1) => [[u0,v0],[u1,v0],[u1,v1],[u0,v1]];
const OF = [[1.0,Z0,2.2,2.65,'door'],[2.3,Z0,2.75,2.65,'side'],[3.8,1.25,5.6,2.75,'win'],[6.8,1.25,8.6,2.75,'win'],[9.8,Z0,11.6,2.75,'fr']];
const OS = [[1.2,Z0,7.6,2.75,'hs'],[3.0,3.75,6.5,5.9,'gw']];
const GD = [-6.0,ZW,-0.8,2.4];
const RWIN = [2.0,5.2,9.6];

/* Ściany z przycinaniem wzoru do obrysu (clipPath) */
// Identyfikatory clipPath liczone z treści: ta sama ściana ma ten sam id na każdym etapie,
// więc porównanie elementów między etapami (animacja dorysowania) działa po samym markupie.
const DEF = new Map();
const hid = s => { let h = 2166136261; for (let i = 0; i < s.length; i++){ h ^= s.charCodeAt(i); h = Math.imul(h,16777619); } return 'vzc' + (h>>>0).toString(36); };
const clipDef = (id,inner) => { if (!DEF.has(id)) DEF.set(id, `<clipPath id="${id}">${inner}</clipPath>`); return id; };
function face(f,uv,cls,patt){
  const d = M(uv.map(p => f(p[0],p[1]))) + 'Z';
  let s = `<path class="${cls}" d="${d}"/>`;
  if (patt){ const id = clipDef(hid(d), `<path d="${d}"/>`); s += `<g clip-path="url(#${id})">${patt}</g>`; }
  return s;
}
function clipTo(ds,inner){ const id = clipDef(hid(ds.join('|')), ds.map(d => `<path d="${d}"/>`).join('')); return `<g clip-path="url(#${id})">${inner}</g>`; }
const dots = (f,uv) => M(uv.map(p => f(p[0],p[1]))) + 'Z';

// okładzina kamienna: rzędy o losowej wysokości i długości
function stoneWall(f,u0,u1,v0,v1){
  let d = '', sh = '', v = v0;
  while (v < v1){
    const h = .14 + rnd()*.14, vt = Math.min(v+h, v1); let u = u0 - rnd()*.3;
    d += seg(f,u0,vt,u1,vt);
    while (u < u1){ const l = .3 + rnd()*.45; if (u > u0) d += seg(f,u,v,u,vt); if (rnd() < .22) sh += fpoly(f,R(Math.max(u,u0),v,Math.min(u+l,u1),vt),'stone-d e0'); u += l; }
    v = vt;
  }
  return sh + path(d,'j');
}
// płyty ocieplenia 100×50 na mijankę + kołki talerzowe (rogi i środek płyty)
function epsBoards(f,u0,u1,v0,v1){
  let d = courses(f,u0,u1,v0,v1,1,.5), c = '';
  for (let v = v0, r = 0; v < v1-.1; v += .5, r++){
    for (let u = u0 + (r%2 ? .5 : 0); u < u1; u += 1){
      [[u,v+.06],[u+.5,v+.25]].forEach(q => { if (q[0] > u0+.05 && q[0] < u1-.05 && q[1] < v1-.05){ const p = P(...f(q[0],q[1])); c += `<circle class="dowel" cx="${r1(p[0])}" cy="${r1(p[1])}" r="1.2"/>`; } });
    }
  }
  return path(d,'j') + c;
}
const meshNet = (f,u0,u1,v0,v1) => path(stripes(f,u0,u1,v0,v1,.16,true) + stripes(f,u0,u1,v0,v1,.16,false),'mesh');

/* ---------- Teren działki: bryła gruntu z przekrojem warstw ---------- */
function terrain(n){
  let s = '';
  const sideF = [FY(29), FX(24)], rng = [[-10,24],[-6,29]];
  sideF.forEach((f,i) => {
    const [a,b] = rng[i];
    s += fr(f,a,-2.2,b,0,(i ? 'soil-d' : 'soil')+' e');
    s += fr(f,a,-.3,b,0,'humus e0') + fr(f,a,-2.2,b,-1.25,'sand e0');
    let d = '';
    for (let k = 0; k < 60; k++){ const u = a + rnd()*(b-a), v = -.4 - rnd()*.8; d += seg(f,u,v,u+.25,v-.12); }
    for (let k = 0; k < 90; k++){ const u = a + rnd()*(b-a), v = -1.3 - rnd()*.85; const p = P(...f(u,v)); d += `M${r1(p[0])} ${r1(p[1])}h.8`; }
    s += path(d,'jj') + path(seg(f,a,-.3,b,-.3) + seg(f,a,-1.25,b,-1.25),'thin');
  });
  s += fr(FZ(0),-10,-6,24,29,'lawn e');
  const PL = P(-1,29,-2.2);
  s += `<text class="lbl" transform="translate(${r1(PL[0])} ${r1(PL[1]+18)}) rotate(30)">ulica, wjazd na działkę</text>`;
  if (n >= 3 && n < 15) s += fpoly(FZ(0),[[-9,-3.5],[19,-3.5],[19,15],[-9,15]],'soil e0') + grass(-9,19,-3.5,15,40);
  if (n < 15) s += grass(-10,24,-6,29, n < 3 ? 520 : 300, n >= 3 ? [[-9,-3.5,19,15]] : null);
  if (n <= 14) s += poly([[-10,-6,0],[24,-6,0],[24,29,0],[-10,29,0]],'bnd');
  if (n <= 2) [[-10,-6],[24,-6],[24,29],[-10,29]].forEach(c => s += box(c[0]-.12,c[1]-.12,0,c[0]+.12,c[1]+.12,.3,'conc-t e','conc e','conc-d e'));
  return s;
}

/* ---------- Fundamenty: wykop, ławy, ściany fundamentowe ---------- */
const FL = { // osie ław: [x0,y0,x1,y1]
  A:[-6.375,2.625,.125,2.625], B:[.125,.125,.125,9.375], C:[.125,.125,12.875,.125], D:[12.875,.125,12.875,9.375],
  E:[-6.375,9.375,12.875,9.375], F:[-6.375,2.625,-6.375,9.375], G:[.125,4.75,12.875,4.75] };
function strip(l,hw,t0,t1){ // prostokąt wokół osi l w zakresie t0..t1 (wzdłuż osi)
  const [x0,y0,x1,y1] = l, hz = y0 === y1;
  const a = t0 == null ? (hz ? x0 : y0) - hw : t0, b = t1 == null ? (hz ? x1 : y1) + hw : t1;
  return hz ? [a, y0-hw, b, y0+hw] : [x0-hw, a, x0+hw, b];
}
const rectXY = (r,z) => [[r[0],r[1],z],[r[2],r[1],z],[r[2],r[3],z],[r[0],r[3],z]];
function prisms(rs,z0,z1,top,side,patt){
  rs = rs.slice().sort((a,b) => (a[2]+a[3]) - (b[2]+b[3]));
  let sides = '', tops = '';
  rs.forEach(r => {
    sides += fr(FY(r[3]),r[0],z0,r[2],z1,side+' e') + fr(FX(r[2]),r[1],z0,r[3],z1,side+'-d e');
    if (patt) sides += path(courses(FY(r[3]),r[0],r[2],z0,z1,.38,.12) + courses(FX(r[2]),r[1],r[3],z0,z1,.38,.12),'j');
    tops += poly(rectXY(r,z1), top+' e0');
  });
  return sides + tops;
}
function foundations(n){
  const keys = Object.keys(FL), TR = keys.map(k => strip(FL[k],.6)), trD = TR.map(r => M(rectXY(r,0))+'Z');
  let s = '';
  if (n === 3 || n === 4){
    s += trD.map(d => `<path class="soil-d e" style="opacity:.55" d="${d}"/>`).join('');
    let inner = TR.map(r => poly(rectXY(r,-1.45),'soil e0')).join('');
    if (n === 4){
      const T = (k,a,b) => strip(FL[k],.3,a,b);
      inner += prisms(keys.map(k => strip(FL[k],.4)), -1.45, -1.35, 'conc-t', 'conc');           // chudy beton
      const lawa = [T('A'),T('B'),T('C'),T('F'),T('G'),T('E',-6.675,9),T('D',-.175,4)];
      inner += prisms(lawa, -1.35, -1.0, 'conc-t', 'conc');
      // szalunek + kosze zbrojeniowe tam, gdzie jeszcze nie zabetonowano
      [[12.875,4,12.875,9.7],[9,9.375,13.2,9.375]].forEach(c => {
        const hz = c[1] === c[3];
        inner += rebarCage([c[0],c[1]],[c[2],c[3]],.42,.27,-1.3,.25);
        const o = hz ? [[0,-.32],[0,.32]] : [[-.32,0],[.32,0]];
        o.forEach(q => inner += poly([[c[0]+q[0],c[1]+q[1],-1.35],[c[2]+q[0],c[3]+q[1],-1.35],[c[2]+q[0],c[3]+q[1],-.95],[c[0]+q[0],c[1]+q[1],-.95]],'timber e'));
      });
      // ściany fundamentowe z bloczków (garaż i lewa część frontu)
      const wall = [strip(FL.A,.125),strip(FL.F,.125),strip(FL.B,.125,.0,9.5),strip(FL.E,.125,-6.5,4.5)];
      inner += prisms(wall, -1.0, ZW, 'conc-t', 'block', true);
      inner += fr(FY(9.5),-6.5,-1.0,4.5,ZW-.05,'bit e0');                                        // izolacja przeciwwilgociowa
      inner += fr(FY(9.65),-6.5,-1.0,3.2,-.05,'xps e') + path(stripes(FY(9.65),-6.5,3.2,-1.0,-.05,.6,true),'j');
      inner += fr(FX(3.2),9.5,-1.0,9.65,-.05,'xps e');
    }
    s += inner + trD.map(d => `<path class="thin" style="stroke-dasharray:5 3" d="${d}"/>`).join('');
    if (n === 4){
      s += fpoly(FZ(0),[[-6.9,9.65],[1.2,9.65],[1.2,9.975],[-6.9,9.975]],'soil e0');                 // zasypka
      s += prisms([strip(FL.A,.125),strip(FL.F,.125),strip(FL.B,.125,.0,9.5),strip(FL.E,.125,-6.5,4.5)].map(r => r), ZW-.01, ZW, 'conc-t', 'block');
      s += fpoly(FZ(-.05),R(-6.25,2.75,-.0,9.25),'conc-t e');                                     // podkład w garażu
      s += path(stripes(FZ(-.05),-6.25,0,2.75,9.25,1.2,true),'jj');
      // kanalizacja podposadzkowa: podejścia i przejście przez ścianę do studzienki
      s += `<path class="pvc-l" d="${M([[3,6.5,0],[3,9.5,0],[3,13.5,0]])}"/>`+`<path class="pvc-l" d="${M([[3,6.5,0],[8.5,6.5,0]])}"/>`;
      [[3,6.5],[6,6.5],[8.5,6.5],[5,3.2]].forEach(p => s += cyl(p[0],p[1],0,.45,.06,'pvc e'));
      s += cyl(3,13.5,0,.15,.32,'conc e');
    }
  }
  return s;
}

/* ---------- Ściany ---------- */
// rodzaj lica wg etapu i położenia: raw | eps | mesh | fin
function finishAt(n,u,side){
  if (n < 12) return 'raw';
  if (n > 12) return 'fin';
  if (side === 'x') return 'eps';
  return u < 4 ? 'fin' : u < 8 ? 'mesh' : 'eps';
}
function wallSkin(f,uv,u0,u1,v0,v1,kind,mat){
  if (kind === 'raw') return face(f,uv,'cer e',path(courses(f,u0,u1,v0,v1,.375,.25),'j'));
  if (kind === 'eps') return face(f,uv,'eps e',epsBoards(f,u0,u1,v0,v1));
  if (kind === 'mesh') return face(f,uv,'glue e',meshNet(f,u0,u1,v0,v1));
  if (mat === 'stone') return face(f,uv,'stone e',stoneWall(f,u0,u1,v0,v1));
  if (mat === 'wood') return face(f,uv,'wood e',path(stripes(f,u0,u1,v0,v1,.15,true),'j'));
  return face(f,uv,'pl e','');
}
// lico z podziałem na pasy (kompozyt na etapie 12)
function skin(n,f,uv,u0,u1,v0,v1,side,mat){
  if (n !== 12 || side === 'x') return wallSkin(f,uv,u0,u1,v0,v1,finishAt(n,u0,side),mat);
  let s = '';
  [[-99,4,'fin'],[4,8,'mesh'],[8,99,'eps']].forEach(b => {
    const a = Math.max(u0,b[0]), c = Math.min(u1,b[1]);
    if (a < c) s += clipTo([dots(f,R(a,v0-1,c,v1+9))], wallSkin(f,uv,u0,u1,v0,v1,b[2],mat));
  });
  return s;
}
function opening(f,o,n,kind){
  const [u0,v0,u1,v1,t] = o, fin = n >= 12;
  let s = '';
  if (n < 7){ s += fpoly(f,R(u0,v0,u1,v1),'void e'); }
  else if (t === 'door'){
    s += fpoly(f,R(u0,v0,u1,v1),'frame e') + fpoly(f,R(u0+.06,v0,u1-.06,v1-.06),'wood e');
    s += path(stripes(f,u0+.06,u1-.06,v0,v1-.06,.12,true),'jj') + path(seg(f,u1-.25,v0+.8,u1-.25,v0+1.9),'ln');
  } else {
    s += fpoly(f,R(u0,v0,u1,v1),'frame e') + fpoly(f,R(u0+.07,v0+.07,u1-.07,v1-.07),'glass e0');
    if (n >= 13) s += fpoly(f,R(u0+.07,v0+.07,u1-.07,v1-.07),'lit e0');
    s += interior(f,o,n);
    const w = u1-u0, k = t === 'hs' ? 4 : t === 'side' ? 1 : w > 1.5 ? 2 : 1;
    let d = '';
    for (let i = 1; i < k; i++) d += seg(f,u0+w*i/k,v0,u0+w*i/k,v1);
    for (let i = 0; i < k; i++) d += dots(f,R(u0+w*i/k+.07,v0+.07,u0+w*(i+1)/k-.07,v1-.07));   // ramiaki skrzydeł
    s += path(d,'ln');
    if (t === 'win') s += fpoly(f,R(u0-.05,v0-.06,u1+.05,v0),'metal e');                       // parapet
  }
  if (!fin && n >= 5) s += fpoly(f,R(u0-.25,v1,u1+.25,v1+.24),'conc e') + path(stripes(f,u0-.25,u1+.25,v1,v1+.24,.4,true),'jj'); // nadproże
  if (fin && n >= 7 && t !== 'gw') s += path(dots(f,R(u0-.03,v0,u1+.03,v1+.03)),'thin');
  return s;
}
// zarys wnętrza za szybą (etapy 13–16)
function interior(f,o,n){
  if (n < 13) return '';
  const [u0,v0,u1,v1,t] = o; let s = '';
  const sil = uv => fpoly(f,uv,'frame e0" style="opacity:.55');
  if (t === 'win' && u0 > 6){ s += sil(R(u0+.2,v0,u1-.2,v0+.15)); s += path(seg(f,u0+.6,v1-.07,u0+.6,v1-.45)+seg(f,u1-.6,v1-.07,u1-.6,v1-.45),'ln'); s += sil(R(u0+.5,v1-.55,u0+.7,v1-.45)) + sil(R(u1-.7,v1-.55,u1-.5,v1-.45)); }
  if (t === 'win' && u0 < 6){ s += sil(R(u0+.07,v1-.5,u1-.07,v1-.07)); s += sil(R(u0+.07,v0+.07,u1-.07,v0+.3)); }
  if (t === 'fr'){ s += sil(R(u0+.2,v0,u0+1.4,v0+.95)) + sil(R(u0+.1,v0+.85,u0+.25,v1-.6)); }
  if (t === 'hs'){
    s += sil([[u0+.3,v0],[u0+2.6,v0],[u0+2.6,v0+.45],[u0+.45,v0+.45],[u0+.45,v0+.8],[u0+.3,v0+.8]]);     // sofa
    s += sil(R(u0+3.6,v0,u0+5.0,v0+1.5)) + `<g class="glow">${fpoly(f,R(u0+3.9,v0+.3,u0+4.7,v0+.9),'e0')}</g>`;
    s += fpoly(f,R(u0+3.9,v0+.3,u0+4.7,v0+.9),'lit e0');                                         // kominek z szybą
    if (n >= 14){ s += sil(R(u0+5.5,v0,u0+6.0,v0+.08)) + path(seg(f,u0+5.75,v0,u0+5.75,v0+1.5),'ln') + sil([[u0+5.55,v0+1.5],[u0+5.95,v0+1.5],[u0+5.85,v0+1.75],[u0+5.65,v0+1.75]]); }
  }
  if (t === 'gw' && n >= 14){ s += sil(R(u0+.3,v0,u0+1.9,v0+.5)) + sil(R(u1-.9,v0,u1-.3,v0+1.6)); }
  return s;
}
function garageDoor(f,n){
  const [u0,v0,u1,v1] = GD;
  if (n < 7) return fpoly(f,R(u0,v0,u1,v1),'void e');
  return fpoly(f,R(u0,v0,u1,v1),'metal e') + path(stripes(f,u0,u1,v0,v1,.56,false),'ln') + path(stripes(f,u0,u1,v0,v1,.14,false),'jj') + path(dots(f,R(u0-.05,v0,u1+.05,v1+.05)),'thin');
}

function walls(n){
  let s = '';
  const front = FY(9.5), side = FX(13), gF = FY(9.5);
  const roofOn = n >= 6;
  // --- garaż ---
  const gTopZ = n === 5 ? 4.6 : GR, gdx = (gTopZ-GZ)/TG;

  if (n >= 5){
    if (!roofOn) s += fpoly(FZ(GZ),R(-6.5,2.5,0,9.5),'conc-t e') + path(stripes(FZ(GZ),-6.5,0,2.5,9.5,.6,true),'jj');
    const guv = n === 5 ? [[0,GZ],[-gdx,gTopZ],[-6.5+gdx,gTopZ],[-6.5,GZ]] : [[0,GZ],[-3.25,GR],[-6.5,GZ]];


    const kGar = n === 12 ? 'fin' : finishAt(n,0,'y');
    s += wallSkin(gF,[[-6.5,ZW],[0,ZW],[0,GZ+.01],[-6.5,GZ+.01]],-6.5,0,ZW,GZ,kGar,'pl');
    s += wallSkin(gF,guv,-6.5,0,GZ,GR,kGar,'wood');
    s += garageDoor(gF,n);
  }
  // --- bryła główna: strop, ścianki kolankowe, komin (gdy nie ma dachu) ---
  if (n >= 5 && !roofOn){
    s += fpoly(FZ(ZS1),R(0,0,13,9.5),'conc-t e') + path(stripes(FZ(ZS1),0,13,0,9.5,.6,false),'jj');
    s += fr(FY(.25),0,ZS1,13,EAVE,'cer-d e') + path(courses(FY(.25),0,13,ZS1,EAVE,.375,.25),'j') + poly(rectXY([0,0,13,.25],EAVE),'cer-t e');
    const zc = 6.2, yc = (zc-EAVE)/TG;
    s += face(FX(.25),[[0,ZS1],[9.5,ZS1],[9.5,EAVE],[9.5-yc,zc],[yc,zc],[0,EAVE]],'cer-d e',path(courses(FX(.25),0,9.5,ZS1,zc,.375,.25),'j'));
    s += box(3.2,3.6,ZS1,3.8,4.3,5.4,'conc-t e','block e','block e') + path(courses(FY(4.3),3.2,3.8,ZS1,5.4,.25,.25),'j');
  }
  // --- lico frontowe i boczne ---
  if (n >= 5){
    const fUV = R(0,ZW,13,EAVE);
    s += skin(n,front,fUV,0,13,ZW,EAVE,'y',n >= 13 || n === 12 ? 'pl' : 'pl');
    if (n >= 12) s += finishAt(n,0,'y') === 'fin' || n === 12 ? wallSkin(front,R(0,ZW,3.1,ZS1),0,3.1,ZW,ZS1,'fin','stone') : '';
    const zc = n === 5 ? 6.2 : RIDGE, yc = (zc-EAVE)/TG;
    const sUV = n === 5 ? [[0,ZW],[9.5,ZW],[9.5,EAVE],[9.5-yc,zc],[yc,zc],[0,EAVE]] : [[0,ZW],[9.5,ZW],[9.5,EAVE],[4.75,RIDGE],[0,EAVE]];
    s += wallSkin(side,sUV,0,9.5,ZW,zc,finishAt(n,0,'x'),'pl');
    if (n >= 13) s += wallSkin(side,[[0,ZS1],[9.5,ZS1],[9.5,EAVE],[4.75,RIDGE],[0,EAVE]],0,9.5,ZS1,RIDGE,'fin','wood');
    if (n >= 12) s += fr(front,-6.5,0,13,ZW+.2,'stone-d e') + fr(side,0,0,9.5,ZW+.2,'stone-d e');           // cokół
    else s += fr(front,-6.5,0,13,ZW,'conc e') + fr(side,0,0,9.5,ZW,'conc-d e');
    if (n < 12){                                                                                         // wieńce
      s += fr(front,0,ZS0,13,ZS1,'conc e') + fr(side,0,ZS0,9.5,ZS1,'conc-d e') + fr(front,-6.5,GZ-.25,0,GZ,'conc e');
      if (n >= 5) s += fr(front,0,EAVE-.25,13,EAVE,'conc e');
    }
    if (!roofOn) s += poly(rectXY([0,9.25,13,9.5],EAVE),'cer-t e') + poly([[12.75,0,EAVE],[13,0,EAVE],[13,9.5,EAVE],[12.75,9.5,EAVE]],'cer-t e');
    OF.forEach(o => s += opening(front,o,n));
    OS.forEach(o => s += opening(side,o,n));
    if (n >= 10){                                                                                        // czerpnia i wyrzutnia
      [[1.6,4.75],[7.9,4.75]].forEach(c => { let uv = []; for (let i = 0; i < 12; i++){ const a = i/12*Math.PI*2; uv.push([c[0]+Math.cos(a)*.16,c[1]+Math.sin(a)*.16]); } s += fpoly(side,uv,'metal e') + path(stripes(side,c[0]-.12,c[0]+.12,c[1]-.12,c[1]+.12,.06,false),'jj'); });
    }
    if (n >= 13) [[0.55,2.2],[3.25,2.2]].forEach(c => s += fpoly(front,R(c[0]-.06,c[1],c[0]+.06,c[1]+.18),'frame e') + `<g class="glow">${ell(c[0],9.6,c[1]+.1,.25,'e0')}</g>`);
  }
  return s;
}

/* ---------- Dach ---------- */
function roof(n){
  if (n < 6) return '';
  let s = '';
  const stage6 = n === 6;
  // garaż: połać zewnętrzna (wąski pas), połać w stronę domu, rynna
  s += face(fgl,R(2.1,0,9.9,GLS),'roof-d e',tiles(fgl,2.1,9.9,0,GLS,.34,.3));
  s += face(fg,R(2.1,0,9.9,3.25/CS),'roof e',tiles(fg,2.1,9.9,0,3.25/CS,.34,.3));
  s += pline([[-3.25,2.1,GR+.05],[-3.25,9.9,GR+.05]],'ln" style="stroke-width:2.2');
  s += poly([[-6.9,9.9,GZ-.4*TG],[-3.25,9.9,GR],[-3.25,9.9,GR-.22],[-6.9,9.9,GZ-.4*TG-.22]],'wood-d e') + poly([[-3.25,9.9,GR],[0,9.9,GZ],[0,9.9,GZ-.22],[-3.25,9.9,GR-.22]],'wood-d e');
  // połać tylna
  s += face(fb,R(-.4,0,13.4,LS),'roof-d e',tiles(fb,-.4,13.4,0,LS,.34,.3));
  // komin (nad kalenicą)
  s += box(3.2,3.6,6,3.8,4.3,RIDGE+.95,'conc-t e','pl e','pl-s e') + box(3.15,3.55,RIDGE+.95,3.85,4.35,RIDGE+1.05,'metal e');
  if (!stage6) s += poly([[3.15,4.32,RIDGE-.3],[3.85,4.32,RIDGE-.3],[3.85,4.32,RIDGE-.1],[3.15,4.32,RIDGE-.1]],'metal e');
  // połać frontowa: na etapie 6 warstwami od prawej
  const segs = stage6 ? [[-.4,6.5,'tile'],[6.5,8.5,'laty'],[8.5,10.5,'memb'],[10.5,13.4,'rafter']] : [[-.4,13.4,'tile']];
  segs.forEach(([a,b,k]) => {
    if (k === 'tile') s += face(ff,R(a,0,b,LS),'roof e',tiles(ff,a,b,0,LS,.34,.3));
    if (k === 'laty' || k === 'memb'){
      s += fpoly(ff,R(a,0,b,LS),'memb e') + path(stripes(ff,a,b,0,LS,1.1,false),'jj');
      let d = ''; for (let u = a+.45; u < b; u += .9) d += dots(ff,R(u-.03,0,u+.03,LS));
      s += path(d,'timber-d e" style="fill:var(--m-timber-d)');
      if (k === 'laty'){ let l = ''; for (let v = .3; v < LS; v += .34) l += dots(ff,R(a,v-.025,b,v+.025)); s += path(l,'timber e" style="fill:var(--m-timber)'); }
    }
    if (k === 'rafter'){
      s += fpoly(ff,R(a,0,b,LS),'conc-d e0" style="opacity:.55');
      let back = '', front = '', col = '';
      for (let u = a+.45; u < b; u += .9){
        back += dots(fb,R(u-.04,0,u+.04,LS));
        front += dots(ff,R(u-.04,0,u+.04,LS));
        const zj = 6.9, vj = (zj-EZ)/SN; col += M([ff(u,vj), fb(u,vj)]);
      }
      s += path(back,'timber-d e') + path(col,'ln" style="stroke:var(--m-timber-d);stroke-width:1.6') + path(front,'timber e');
      s += box(a,9.25,EAVE,b,9.5,EAVE+.15,'timber e','timber-d e','timber-d e');                     // murłata
    }
  });
  // okna dachowe, panele PV, kalenica, wiatrownica, rynny
  RWIN.forEach((u,i) => {
    if (stage6 && u > 6.5) return;
    s += fpoly(ff,R(u-.05,2.15,u+.83,3.65),'metal e') + fpoly(ff,R(u+.04,2.25,u+.74,3.52),n >= 13 ? 'lit e' : 'glass e');
    if (n >= 13) s += `<g class="glow">${fpoly(ff,R(u+.04,2.25,u+.74,3.52),'e0')}</g>`;
  });
  if (n >= 10) [6.5,7.68,10.7,11.88].forEach(u => [1.0,2.78].forEach(v => {
    s += fpoly(ff,R(u,v,u+1.13,v+1.72),'frame e') + path(stripes(ff,u,u+1.13,v,v+1.72,.28,true) + stripes(ff,u,u+1.13,v,v+1.72,.29,false),'jj" style="stroke:var(--vz-sheet);opacity:.35');
  }));
  if (!stage6) s += pline([ff(-.4,LS),ff(13.4,LS)],'ln" style="stroke:var(--m-roof-d);stroke-width:3.2') + path(stripes((u,v) => ff(u,LS+v),-.4,13.4,-.05,.05,.33,true),'jj');
  s += poly([ff(13.4,0),ff(13.4,LS),[13.4,4.75,RIDGE-.25],[13.4,9.5+OVH,EZ-.25]],'wood-d e') + poly([fb(13.4,0),fb(13.4,LS),[13.4,4.75,RIDGE-.25],[13.4,-OVH,EZ-.25]],'wood-d e');
  s += fpoly(FY(9.5+OVH),R(-.4,EZ-.22,13.4,EZ),'wood-d e');                                         // deska czołowa / podbitka
  if (!stage6 || true){
    s += poly([[-.4,10.25,EZ-.18],[13.4,10.25,EZ-.18],[13.4,10.25,EZ-.02],[-.4,10.25,EZ-.02]],'metal e'); // rynna
    [[.3,9.6],[12.7,9.6]].forEach(p => s += fpoly(FY(p[1]+.02),R(p[0]-.05,0,p[0]+.05,EZ-.1),'metal e'));
    s += poly([[-6.9,9.95,GZ-.5],[-6.9,2.1,GZ-.5],[-6.9,2.1,GZ-.36],[-6.9,9.95,GZ-.36]],'metal e');
  }
  return s;
}

/* ---------- Teren budowy, sprzęt i ogród ---------- */
function mound(cx,cy,rx,ry,h,cls){
  const pts = [];
  for (let k = 0; k <= 4; k++){ const z = h*k/4, f = Math.sqrt(1-(k/4.4)**2); for (let i = 0; i < 24; i++){ const a = i/24*Math.PI*2; pts.push(P(cx+Math.cos(a)*rx*f*(.92+rnd()*.12), cy+Math.sin(a)*ry*f, z)); } }
  pts.sort((a,b) => a[0]-b[0] || a[1]-b[1]);
  const cr = (o,a,b) => (a[0]-o[0])*(b[1]-o[1]) - (a[1]-o[1])*(b[0]-o[0]), lo = [], up = [];
  pts.forEach(p => { while (lo.length > 1 && cr(lo[lo.length-2],lo[lo.length-1],p) <= 0) lo.pop(); lo.push(p); });
  pts.slice().reverse().forEach(p => { while (up.length > 1 && cr(up[up.length-2],up[up.length-1],p) <= 0) up.pop(); up.push(p); });
  const hull = lo.slice(0,-1).concat(up.slice(0,-1));
  let d = '';
  for (let i = 0; i < 26; i++){ const a = rnd()*Math.PI*2, f = rnd()*.8, q = P(cx+Math.cos(a)*rx*f, cy+Math.sin(a)*ry*f, h*(1-f)*.9); d += `M${r1(q[0])} ${r1(q[1])}l3 1.5`; }
  return `<path class="${cls} e" d="M${hull.map(p => r1(p[0])+' '+r1(p[1])).join('L')}Z"/>` + path(d,'jj');
}
function container(){
  let s = box(-9.2,22,0,-6.8,28,2.6,'metal e','metal e','metal-d e');
  s += path(stripes(FX(-6.8),22,28,0,2.6,.18,true),'jj') + fr(FX(-6.8),23.2,1.0,24.6,1.9,'glass e') + fr(FY(28),-9.0,.1,-7.0,2.45,'metal-d e') + path(seg(FY(28),-8,.1,-8,2.45),'ln');
  s += box(-9.2,19.4,0,-8.1,20.6,2.3,'white e','white e','white e') + fr(FX(-8.1),19.55,.1,20.45,2.05,'safety e') + fr(FX(-8.1),19.8,1.8,20.2,1.95,'frame e');
  return s;
}
function siteBox(x,y,kind){
  let s = fpoly(FY(y),R(x-.04,0,x+.04,1.3),'timber-d e') ;
  if (kind === 'rb') s += box(x-.3,y-.2,.8,x+.3,y,1.5,'metal e','safety e','safety e') + fr(FY(y),x-.2,.95,x+.2,1.35,'frame e');
  else s += box(x-.45,y-.3,0,x+.45,y,1.35,'pl e','pl e','pl-s e') + fr(FY(y),x-.35,.1,x+.35,1.25,'pl-s e') + fr(FY(y),x-.15,.95,x+.15,1.15,'glass e');
  return s;
}
function batterBoards(){
  let s = '', str = '';
  const L = [[[-8,9.5],[14.5,9.5]],[[-8,2.5],[0,2.5]],[[-1.5,0],[14.5,0]],[[13,-1.5],[13,11]],[[-6.5,1],[-6.5,11]],[[0,-1.5],[0,2.5]]];
  L.forEach(([a,b]) => str += M([[a[0],a[1],.6],[b[0],b[1],.6]]));
  [[14.5,11],[-8,11],[14.5,-1.5],[-1.5,-1.5]].forEach(([x,y]) => {
    const sx = x > 0 ? -1 : 1, sy = y > 5 ? -1 : 1;
    s += pline([[x,y,.6],[x+sx*2.6,y,.6]],'ln" style="stroke:var(--m-timber-d);stroke-width:2.4') + pline([[x,y,.6],[x,y+sy*2.6,.6]],'ln" style="stroke:var(--m-timber-d);stroke-width:2.4');
    [[x,y],[x+sx*2.6,y],[x,y+sy*2.6]].forEach(p => s += pline([[p[0],p[1],0],[p[0],p[1],.75]],'ln" style="stroke-width:1.6'));
  });
  return s + path(str,'str');
}
function pool(n){
  let s = fpoly(FZ(0),R(16.9,1.7,21.7,10.8),'conc-t e');
  const inner = R(17.2,2,21.4,10.5), dTop = dots(FZ(0),inner);
  s += `<path class="conc-d e" d="${dTop}"/>`;
  s += clipTo([dTop], fpoly(FZ(-.15),inner,'water e0') + path(stripes(FZ(-.15),17.2,21.4,2,10.5,.9,false),'jj" style="stroke:var(--vz-sheet);opacity:.5'));
  s += `<g class="glow">${ell(19.3,6,-.15,1.6,'e0')}</g>` + box(17.2,10.5,0,17.6,10.9,.25,'metal e');
  return s;
}
function pergola(){
  let s = '';
  [[17,13],[21,13],[17,16],[21,16]].forEach(p => s += box(p[0]-.07,p[1]-.07,0,p[0]+.07,p[1]+.07,2.5,'wood e','wood e','wood-d e'));
  s += box(16.8,12.9,2.5,21.2,13.1,2.7,'wood e','wood e','wood-d e') + box(16.8,15.9,2.5,21.2,16.1,2.7,'wood e','wood e','wood-d e');
  for (let x = 17; x <= 21; x += .4) s += box(x-.03,12.7,2.7,x+.03,16.3,2.8,'wood e','wood-d e','wood-d e');
  s += box(18,14,0,20,15.2,.75,'deck e') + box(17.6,14.2,0,17.9,15,.45,'wood-d e');
  return s;
}
function playhouse(){
  let s = '';
  [[20,-4],[22.2,-4],[20,-2],[22.2,-2]].forEach(p => s += box(p[0]-.06,p[1]-.06,0,p[0]+.06,p[1]+.06,1,'wood-d e'));
  s += box(19.9,-4.1,1,22.3,-1.9,1.1,'deck e') + box(20.2,-3.8,1.1,22,-2.3,2.3,'pl e','wood e','wood-d e');
  s += path(stripes(FY(-2.3),20.2,22,1.1,2.3,.13,true),'jj') + fr(FY(-2.3),20.8,1.1,21.4,1.95,'frame e') + fr(FX(22),-3.4,1.5,-2.8,2.0,'glass e');
  s += poly([[20.05,-2.15,2.3],[22.15,-2.15,2.3],[22.15,-3.05,3.0],[20.05,-3.05,3.0]],'safety e') + poly([[22.15,-2.15,2.3],[22.15,-3.05,3.0],[22.15,-3.95,2.3]],'pl-s e');
  s += poly([[21,-1.9,1.05],[21.5,-1.9,1.05],[21.5,1.0,.1],[21,1.0,.1]],'safety e') + pline([[21,-1.9,1.3],[21,1.0,.35]],'ln') + pline([[21.5,-1.9,1.3],[21.5,1.0,.35]],'ln');
  return s;
}
function terrace(){
  let s = box(13,1.6,0,16.6,9.2,.28,'deck e','wood-d e','wood-d e') + path(stripes(FZ(.28),13,16.6,1.6,9.2,.15,true),'jj');
  [[16.45,1.7],[16.45,5.4],[16.45,9.05]].forEach(p => s += box(p[0]-.08,p[1]-.08,.28,p[0]+.08,p[1]+.08,3.0,'metal e','metal e','metal-d e'));
  s += box(13,1.6,3.0,16.7,9.3,3.15,'metal e','metal e','metal-d e');
  s += fpoly(FZ(3.15),R(13.05,1.65,16.6,9.2),'glassT e0') + path(stripes(FZ(3.15),13,16.6,1.6,9.2,.9,false),'thin');
  [[16.3,3.5],[16.3,7.2]].forEach(p => s += `<g class="glow">${ell(p[0],p[1],.3,.6,'e0')}</g>`);
  s += box(14.4,3.8,.28,15.6,5.8,1.0,'wood e','wood e','wood-d e');
  return s;
}
function paving(){
  const f = FZ(0);
  let s = fpoly(f,R(-7,9.5,0,29),'pave e') + path(courses(f,-7,0,9.5,29,.6,.3),'jj') + fpoly(f,R(-7.2,9.5,-7,29),'pave-d e0') + fpoly(f,R(0,9.5,.2,29),'pave-d e0');
  s += fpoly(f,R(.2,9.5,3.2,11.6),'pave e') + path(courses(f,.2,3.2,9.5,11.6,.6,.3),'jj');
  s += fpoly(f,R(13.6,9.2,14.8,17),'pave e') + path(courses(FZ(0),13.6,14.8,9.2,17,.6,.3),'jj');
  return s;
}
function lamp(x,y,h){ return pline([[x,y,0],[x,y,h]],'ln" style="stroke-width:1.6') + box(x-.07,y-.07,h,x+.07,y+.07,h+.12,'lit e') + `<g class="glow">${ell(x,y,0,.9,'e0')}</g>`; }
function car(x,y){
  let s = `<ellipse class="shadow" cx="${r1(P(x+1,y+2.3,0)[0])}" cy="${r1(P(x+1,y+2.3,0)[1])}" rx="46" ry="16"/>`;
  s += box(x,y,.3,x+1.85,y+4.7,.95,'car e') + poly([[x+.15,y+1.4,.95],[x+1.7,y+1.4,.95],[x+1.7,y+3.8,.95],[x+.15,y+3.8,.95]],'car e');
  s += box(x+.15,y+1.6,.95,x+1.7,y+3.6,1.45,'car e','glass e','glass-d e');
  s += fr(FY(y+4.7),x+.15,.6,x+.45,.75,'lit e') + fr(FY(y+4.7),x+1.4,.6,x+1.7,.75,'lit e');
  [[y+.9],[y+3.8]].forEach(([yy]) => s += fr(FX(x+1.85),yy-.35,.0,yy+.35,.5,'frame e'));
  return s;
}

/* ---------- Kompozycja sceny dla etapu n ---------- */
function scene(n){
  reseed(7);
  let back = '', mid = '', front = '';
  back += terrain(n);
  back += tree(-7.5,-3.5,9,2.6) + tree(-8.5,1.5,7,1.9);
  if (n >= 15) back += tree(22.6,-5,6.5,1.7);
  if (n >= 15) back += playhouse();
  if (n >= 1 && n <= 2) [[-6.5,2.5],[0,2.5],[0,0],[13,0],[13,9.5],[-6.5,9.5]].forEach(c => back += pline([[c[0],c[1],0],[c[0],c[1],.6]],'ln" style="stroke-width:2') + pline([[c[0],c[1],.45],[c[0],c[1],.6]],'ln" style="stroke:var(--vz-safety);stroke-width:2.6'));
  if (n === 2){
    back += poly([[-6.5,2.5,0],[0,2.5,0],[0,0,0],[13,0,0],[13,9.5,0],[-6.5,9.5,0]],'dash');
    back += dimLine([-6.5,11.5,0],[13,11.5,0],'19,50 m') + dimLine([15,0,0],[15,9.5,0],'9,50 m');
    const c = P(5,5,0); back += `<text class="lbl" x="${r1(c[0]-55)}" y="${r1(c[1])}">obrys budynku z projektu</text>`;
  }
  if (n === 3) back += mound(19.5,15.5,2.4,2.8,1.5,'humus') ;
  if (n >= 4 && n <= 14) back += mound(20,15.5,2.2,2.6,1.2,'humus');
  back += foundations(n);
  if (n === 3) back += batterBoards();
  // budynek
  mid += walls(n) + roof(n);
  if (n >= 9) mid += box(13.4,.2,0,13.95,1.25,.12,'conc-t e','conc e','conc-d e') + box(13.45,.25,.12,13.9,1.2,.98,'white e','white e','pl-s e') + face(FX(13.9),(() => { const uv = []; for (let i = 0; i < 14; i++){ const a = i/14*Math.PI*2; uv.push([.72+Math.cos(a)*.3,.55+Math.sin(a)*.3]); } return uv; })(),'metal-d e','');
  // rusztowania
  if (n >= 5 && n <= 12){
    const top = n === 5 ? [1.9,3.8] : [1.9,3.8];
    mid += scaffold((u,o,z) => [13+o,u,z],0,9.5,top,.75,2.375);
    mid += scaffold((u,o,z) => [u,9.5+o,z],n === 12 ? 6 : -6.5,13,top,.75,n === 12 ? 2.333 : 2.44);
  }
  // przód działki
  if (n >= 1 && n <= 14){
    front += container();
    front += fence([-10,29],[-7.5,29],2,3.5,'temp') + fence([-1.5,29],[24,29],2,3.5,'temp') + fence([24,-6],[24,29],2,3.5,'temp');
    front += siteBox(1.6,28.6, n >= 8 ? 'zk' : 'rb');
    if (n >= 3) front += fpoly(FY(28.85),R(4,1.1,5.6,2.1),'pl e') + path(stripes(FY(28.85),4.1,5.5,1.2,2.0,.16,false),'jj') + pline([[4.1,28.85,0],[4.1,28.85,2.1]],'ln') + pline([[5.5,28.85,0],[5.5,28.85,2.1]],'ln');
  }
  if (n === 3) front += excavator(16,10.2);
  if (n === 4){
    front += truck(15.2,1.1,'pump') + truck(15.2,5,'mix');
    front += `<path class="ln" style="stroke:var(--m-machine-d);stroke-width:4" d="${M([[16,2.3,1.7],[14.5,3.2,7.5],[12.9,6.6,4.2]])}"/><path class="ln" style="stroke:var(--m-machine);stroke-width:2.5" d="${M([[16,2.3,1.7],[14.5,3.2,7.5],[12.9,6.6,4.2]])}"/>`;
    front += pline([[12.9,6.6,4.2],[12.88,6.6,-.9]],'ln" style="stroke-width:2.2');
  }
  if (n >= 5 && n <= 6){
    front += pallet(3,12.2,'cer') + pallet(4.5,12.2,'cer') + pallet(3,13.4,'cer') + mixer(7.2,12.4) + mound(9.2,13.4,1.1,1.0,.7,'sand');
    if (n === 6) front += pallet(6,14.5,'roof');
  }
  if (n === 11){
    front += box(9.5,13,0,11.2,14.1,1.0,'mach e','mach e','mach-d e') + box(10,13.2,1.0,10.8,13.9,1.5,'metal e');
    front += `<path class="rope" d="${M([[10.4,13,.5],[10.4,11.5,.1],[10.6,10.2,.3],[10.7,9.6,.6]])}" style="stroke-width:1.6"/>`;
    front += mound(12,15,1.0,1.0,.6,'sand');
  }
  if (n >= 15){
    front += paving() + terrace() + pool(n) + pergola();
    front += grass(-10,24,-6,29,380,[[-7.2,9.2,3.3,29],[-7,-1,13.5,9.8],[13,1.5,22,17],[16,12.5,22,17]]);
    [[4,10.4],[5.2,10.6],[6.4,10.4],[7.6,10.6],[8.8,10.4]].forEach(p => front += bush(p[0],p[1],.45));
    for (let y = -4; y < 28; y += 1.4) front += bush(23.4,y,.55);
    front += tree(-8.5,17,7,1.9) + tree(9,22,6.5,1.7) + tree(20,24,6,1.6);
    [[.4,13],[.4,17],[.4,21],[.4,25],[3.3,11.3],[14.4,12.5],[16.8,11.5]].forEach(p => front += lamp(p[0],p[1],.6));
    front += fence([-10,29],[-7.2,29],1.5,2.4) + fence([.2,29],[24,29],1.5,2.4) + fence([24,-6],[24,29],1.5,2.4);
    front += fpoly(FY(29),R(-7.2,0,.2,1.4),'metal-d e" style="fill-opacity:.35') + path(stripes(FY(29),-7.2,.2,0,1.4,.12,true),'jj');
    front += siteBox(1.6,28.6,'zk');
  }
  if (n === 16) front += car(-5.5,13.5);
  return {body: back + mid + front, defs: Array.from(DEF.values()).join('')};
}
function dimLine(a,b,txt){
  const pa = P(...a), pb = P(...b), ang = Math.atan2(pb[1]-pa[1], pb[0]-pa[0])*180/Math.PI, m = [(pa[0]+pb[0])/2,(pa[1]+pb[1])/2];
  const tick = p => `M${r1(p[0]-4)} ${r1(p[1]+4)}L${r1(p[0]+4)} ${r1(p[1]-4)}`;
  return `<path class="ln" d="M${r1(pa[0])} ${r1(pa[1])}L${r1(pb[0])} ${r1(pb[1])}${tick(pa)}${tick(pb)}"/><text class="lbl" text-anchor="middle" transform="translate(${r1(m[0])} ${r1(m[1]-5)}) rotate(${r1(ang)})">${txt}</text>`;
}

/* ---------- Lupa: kluczowy detal etapu (rysunek 320×320, opisy numerowane) ---------- */
const rc = (x,y,w,h,f,st) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="url(#${f})" class="e"${st ? ` style="${st}"` : ''}/>`;
const pa = (d,f,cls) => `<path d="${d}" ${f ? `fill="url(#${f})"` : 'fill="none"'} class="${cls || 'e'}"/>`;
const bar = (x,y,r) => `<circle cx="${x}" cy="${y}" r="${r || 3.4}" class="steel-f"/>`;
function nb(x,y,bx,by,k){
  const dx = bx-160, dy = by-160, dd = Math.hypot(dx,dy); if (dd > 134){ bx = Math.round(160+dx*134/dd); by = Math.round(160+dy*134/dd); }
  return `<path class="thin" d="M${x} ${y}L${bx} ${by}"/><circle cx="${x}" cy="${y}" r="1.6" class="inkf"/><circle cx="${bx}" cy="${by}" r="8.5" class="paper" style="stroke:var(--vz-accent);stroke-width:1.2"/><text x="${bx}" y="${by+3.8}" text-anchor="middle" style="font-size:11px;font-weight:700;fill:var(--vz-accent)">${k}</text>`;
}
const tick = (x,y) => `M${x-3.5} ${y+3.5}L${x+3.5} ${y-3.5}`;
const dh = (y,x1,x2,t) => `<path class="dim" d="M${x1} ${y}H${x2}${tick(x1,y)}${tick(x2,y)}"/><text class="dim-t" x="${(x1+x2)/2}" y="${y-4}" text-anchor="middle">${t}</text>`;
const dv = (x,y1,y2,t) => `<path class="dim" d="M${x} ${y1}V${y2}${tick(x,y1)}${tick(x,y2)}"/><text class="dim-t" transform="translate(${x-4} ${(y1+y2)/2}) rotate(-90)" text-anchor="middle">${t}</text>`;
const gl = (y,x1,x2) => `<path class="ln" d="M${x1} ${y}H${x2}"/>`;  // linia terenu
const joints = (x,y,w,h,st) => { let d = ''; for (let k = y+st; k < y+h; k += st) d += `M${x} ${k}h${w}`; return `<path class="j" d="${d}"/>`; };

const DETAILS = [
 { t:'Znak graniczny', tg:[-10,-6,.3], d:'Narożnik działki wyznacza geodeta. Znak ma krzyż na wierzchu, a pod nim leży punkt podziemny, który pozwala go odtworzyć.',
   items:['Słupek graniczny z krzyżem na wierzchu','Punkt podziemny (świadek) pod słupkiem','Granica działki','Humus i grunt rodzimy'],
   svg: rc(0,150,320,170,'hSoil') + rc(0,150,320,26,'hHum') + gl(150,0,320) + rc(142,118,36,120,'hConc') + `<path class="ln" d="M150 124h20M160 119v10"/>` + rc(146,262,28,12,'hConc') + `<path class="bnd" d="M160 20V300"/>`
      + nb(166,126,232,86,1) + nb(170,268,240,256,2) + nb(160,60,96,48,3) + nb(60,190,46,224,4) },
 { t:'Panel ogrodzenia tymczasowego', tg:[10,29,1.3], d:'Panele z siatki zgrzewanej stoją w betonowych stopach i są spięte obejmami. Ogrodzenie zamyka plac budowy dla osób postronnych.',
   items:['Panel z siatki zgrzewanej','Obejma spinająca sąsiednie panele','Stopa betonowa z otworami na słupki','Teren'],
   svg: (() => { let d = ''; for (let x = 40; x <= 280; x += 16) d += `M${x} 70V240`; for (let y = 70; y <= 240; y += 24) d += `M40 ${y}H280`;
      return gl(270,0,320) + `<path class="mesh" style="stroke-width:1;opacity:1" d="${d}"/><path class="ln" style="stroke-width:3" d="M40 62V262M280 62V262M160 62V262"/>` + rc(132,246,56,24,'hConc') + rc(12,246,56,24,'hConc') + rc(252,246,56,24,'hConc') + `<rect x="152" y="86" width="16" height="12" class="metal e"/><rect x="152" y="210" width="16" height="12" class="metal e"/>`; })()
      + nb(100,130,92,40,1) + nb(168,92,232,42,2) + nb(176,262,236,290,3) + nb(80,280,60,300,4) },
 { t:'Palik osi budynku', tg:[13,9.5,.4], d:'Geodeta wytycza narożniki budynku z projektu. Gwóźdź w łbie palika to dokładny punkt przecięcia osi ścian.',
   items:['Palik drewniany wbity w grunt','Gwóźdź: punkt przecięcia osi','Farba sygnalizacyjna, żeby nikt go nie wyrwał','Teren przed zdjęciem humusu'],
   svg: rc(0,170,320,150,'hSoil') + rc(0,170,320,24,'hHum') + gl(170,0,320) + `<path class="timber e" d="M146 90h28v150l-14 30-14-30z"/><rect x="146" y="90" width="28" height="26" class="safety e"/><path class="ln" style="stroke-width:2" d="M160 92V70"/><circle cx="160" cy="70" r="3" class="inkf"/><path class="dash" d="M60 70H260M160 30V110"/>`
      + nb(160,180,232,206,1) + nb(160,70,96,40,2) + nb(170,104,240,96,3) + nb(70,176,52,226,4) },
 { t:'Ława ciesielska', tg:[14.5,11,.6], d:'Deski na palikach stoją poza wykopem. Sznurki między gwoździami odtwarzają osie ścian, a pion przenosi je na dno wykopu.',
   items:['Deska ławy, wierzch wypoziomowany','Gwoździe na osiach i licach ścian','Sznurek murarski','Pion przenosi oś na dno wykopu','Palik ławy, ok. 1,5–2 m od krawędzi wykopu','Wykop pod ławę fundamentową'],
   svg: rc(0,190,320,130,'hSoil') + `<path class="paper e" d="M120 190h120v100H120z"/>` + gl(190,0,120) + gl(190,240,320)
      + `<rect x="20" y="96" width="70" height="14" class="timber e"/><path class="ln" style="stroke-width:3" d="M28 110V200M82 110V200"/><path class="ln" d="M48 96v-8M62 96v-8"/>`
      + `<path class="str" style="stroke-width:1.2" d="M48 90H310"/><path class="thin" d="M188 90V250"/><path class="inkf" d="M183 250h10l-5 12z"/>`
      + nb(40,104,30,62,1) + nb(48,90,92,52,2) + nb(250,90,268,58,3) + nb(188,200,250,164,4) + nb(28,170,52,236,5) + nb(160,282,104,300,6) },
 { t:'Zbrojenie ławy fundamentowej', tg:[12.875,7,-1.1], d:'Kosz zbrojeniowy leży na dystansach, więc beton otula pręty z każdej strony. Bez otuliny stal koroduje, a ława traci nośność.',
   items:['Ściana fundamentowa z bloczków betonowych','Ława żelbetowa 60 × 35 cm','Pręty podłużne 4 × Ø12','Strzemiona Ø6 co ok. 25–30 cm','Dystanse: otulina ok. 5 cm','Chudy beton ok. 10 cm','Grunt rodzimy poniżej strefy przemarzania'],
   svg: rc(0,0,320,320,'hSoil') + rc(122,30,76,110,'hConc') + joints(122,30,76,110,36) + rc(70,140,180,105,'hConc') + rc(56,245,208,30,'hScreed')
      + `<rect x="85" y="155" width="150" height="75" rx="4" class="steel" style="stroke-width:2"/>` + bar(92,223) + bar(228,223) + bar(92,162) + bar(228,162)
      + `<path class="inkf" d="M86 245l6-13 6 13zM222 245l6-13 6 13z"/>` + dh(296,70,250,'60') + dv(276,140,245,'35') + dv(80,230,245,'5')
      + nb(150,80,96,48,1) + nb(120,200,40,186,2) + nb(228,162,262,112,3) + nb(160,155,200,112,4) + nb(92,240,46,262,5) + nb(160,262,206,300,6) + nb(286,200,292,236,7) },
 { t:'Nadproże i wieniec', tg:[10.7,9.5,2.95], d:'Nad otworem leży nadproże oparte na murze po obu stronach. Wyżej wieniec żelbetowy spina ściany i razem ze stropem tworzy sztywną skrzynię.',
   items:['Strop żelbetowy ok. 20 cm','Wieniec żelbetowy: 4 × Ø12 i strzemiona','Nadproże nad oknem','Pustak ceramiczny 25 cm','Otwór okienny'],
   svg: rc(110,170,100,150,'hCer') + `<rect x="110" y="235" width="100" height="85" class="void e"/>` + rc(110,170,100,65,'hCer') + rc(110,205,100,30,'hConc')
      + rc(110,100,100,70,'hConc') + rc(110,40,220,60,'hConc') + `<rect x="122" y="112" width="76" height="46" class="steel" style="stroke-width:1.6"/>` + bar(127,117,3) + bar(193,117,3) + bar(127,153,3) + bar(193,153,3)
      + `<path class="steel" style="stroke-width:1.6" d="M216 52H320M216 90H320"/>` + bar(140,218,2.6) + bar(180,218,2.6) + rc(110,10,100,30,'hCer') + dv(96,100,170,'25') + dv(96,40,100,'20')
      + nb(260,70,268,24,1) + nb(160,135,250,140,2) + nb(160,220,250,206,3) + nb(130,186,50,186,4) + nb(160,280,240,272,5) },
 { t:'Okap dachu', tg:[8,10.1,EZ], d:'Szczelina pod dachówką musi być wentylowana od okapu do kalenicy. Rynna wisi na hakach z lekkim spadkiem do rury spustowej.',
   items:['Dachówka na łatach','Łata i kontrłata (szczelina wentylacyjna)','Membrana dachowa','Krokiew z wełną mineralną między krokwiami','Murłata na wieńcu, kotwiona','Rynna na hakach i pas nadrynnowy','Deska czołowa i podbitka z kratką wentylacyjną'],
   svg: `<g transform="rotate(-40 160 160)">` + rc(-20,150,330,40,'hWood') + rc(-20,140,330,10,'hWool','opacity:.0') + `<rect x="-20" y="146" width="330" height="3" class="memb e"/>` + rc(-20,124,330,20,'hWoodX') + `<path class="ln" d="M-20 124H310"/>`
      + (() => { let s = ''; for (let x = -10; x < 310; x += 34) s += `<rect x="${x}" y="114" width="12" height="10" class="timber e"/><path class="roof e" d="M${x+10} 114l34-2v-8l-34 4z"/>`; return s; })() + `</g>`
      + rc(150,222,90,98,'hCer') + rc(150,190,90,32,'hConc') + rc(176,170,44,34,'hWoodX') + rc(150,190,90,0,'hConc') + rc(180,210,0,0,'hConc')
      + rc(200,150,90,40,'hWool') + `<path class="wood e" d="M18 218h12v40H18z"/><path class="wood e" d="M30 250H150v8H30z"/><path class="metal e" d="M2 236a14 14 0 0 0 28 0z"/><path class="ln" d="M26 224l16-8"/>`
      + `<path class="thin" d="M60 252v6M80 252v6M100 252v6"/>`
      + nb(96,80,70,32,1) + nb(160,120,132,48,2) + nb(210,116,236,64,3) + nb(240,170,284,178,4) + nb(198,186,286,214,5) + nb(16,240,24,286,6) + nb(90,254,104,294,7) },
 { t:'Ciepły montaż okna', tg:[8.6,9.5,2.0], d:'Okno wysunięte w warstwę ocieplenia na konsolach. Od środka taśma paroszczelna, od zewnątrz paroprzepuszczalna, a ocieplenie zachodzi na ramę.',
   items:['Mur z pustaka ceramicznego','Ocieplenie, zachodzi na ramę okna','Rama okna na konsolach w strefie ocieplenia','Taśma paroszczelna od środka','Taśma paroprzepuszczalna od zewnątrz','Pianka PU w szczelinie','Tynk wewnętrzny'],
   svg: rc(170,0,90,320,'hCer') + rc(260,0,12,320,'hPl') + rc(40,0,130,150,'hEps') + rc(40,210,130,110,'hEps') + rc(28,0,12,150,'hPl') + rc(28,210,12,110,'hPl')
      + `<rect x="130" y="150" width="66" height="60" class="frame e"/><rect x="138" y="158" width="50" height="44" class="glass e"/><path class="ln" d="M163 158v44"/>`
      + `<path class="metal e" d="M170 196h30v6h-30z"/><path class="safety e" style="opacity:.7" d="M196 148h8v64h-8z"/><path class="memb e" d="M122 146h8v68h-8z"/><path class="wool e" d="M130 146h66v4h-66zM130 210h66v4h-66z" style="opacity:.6"/>`
      + `<rect x="106" y="150" width="24" height="60" fill="url(#hEps)" class="e"/>`
      + nb(214,60,278,40,1) + nb(80,80,40,40,2) + nb(150,180,92,238,3) + nb(200,170,284,150,4) + nb(124,200,80,250,5) + nb(184,148,240,104,6) + nb(266,260,292,284,7) },
 { t:'Złącze kablowo-pomiarowe', tg:[1.6,28.6,.9], d:'Licznik stoi w linii ogrodzenia, z dostępem od ulicy. Kabel do domu biegnie w rurze osłonowej, w piasku, pod taśmą ostrzegawczą.',
   items:['Szafka złącza z licznikiem','Fundament szafki','Rura osłonowa z kablem do domu','Taśma ostrzegawcza nad kablem','Podsypka z piasku','Kabel ułożony zwykle ok. 0,7 m pod terenem'],
   svg: rc(0,170,320,150,'hSoil') + gl(170,0,320) + `<rect x="40" y="60" width="90" height="120" class="pl e"/><rect x="50" y="72" width="70" height="56" class="pl-s e"/><rect x="66" y="84" width="38" height="24" class="glass e"/>` + rc(46,180,78,30,'hConc')
      + rc(110,240,210,36,'hSand') + `<path class="pvc-l" style="stroke-width:10" d="M90 200V258H320"/><path class="ln" style="stroke:var(--vz-safety);stroke-width:3" d="M130 236H320"/>` + dv(300,170,258,'ok. 70')
      + nb(85,100,170,90,1) + nb(60,200,40,240,2) + nb(200,258,190,296,3) + nb(240,236,244,206,4) + nb(150,270,120,302,5) + nb(300,214,284,140,6) },
 { t:'Jednostka zewnętrzna pompy ciepła', tg:[13.7,.7,.7], d:'Jednostka stoi na stopie betonowej na podkładkach antywibracyjnych. Skropliny spływają do drenażu żwirowego poniżej strefy przemarzania.',
   items:['Jednostka zewnętrzna z wentylatorem','Podkładki antywibracyjne','Stopa betonowa','Drenaż żwirowy na skropliny','Rury chłodnicze w otulinie, przejście przez ścianę','Ściana domu z ociepleniem'],
   svg: rc(0,210,320,110,'hSoil') + gl(210,0,320) + rc(0,0,70,210,'hEps') + `<rect x="100" y="80" width="160" height="110" class="white e"/><circle cx="180" cy="135" r="40" class="metal e"/><path class="thin" d="M180 95v80M140 135h80M152 107l56 56M208 107l-56 56"/>`
      + `<rect x="110" y="190" width="16" height="8" class="roof e"/><rect x="234" y="190" width="16" height="8" class="roof e"/>` + rc(96,198,168,30,'hConc') + rc(150,228,60,70,'hGrav')
      + `<path class="ln" style="stroke-width:6;stroke:var(--m-eps-d)" d="M100 110H40V60"/>`
      + nb(200,120,268,52,1) + nb(118,194,56,248,2) + nb(240,212,286,240,3) + nb(180,270,240,292,4) + nb(70,110,40,140,5) + nb(30,40,60,28,6) },
 { t:'Mocowanie paneli fotowoltaicznych', tg:[8.1,ff(8,3)[1],ff(8,3)[2]], d:'Hak dachowy przykręca się do krokwi i wyprowadza spod dachówki, bez jej przewiercania. Na hakach leżą szyny, a do nich klemy trzymają moduły.',
   items:['Moduł fotowoltaiczny w ramie','Klema mocująca','Szyna aluminiowa','Hak dachowy pod dachówką','Krokiew','Dachówka na łatach i kontrłatach'],
   svg: rc(0,230,320,50,'hWood') + `<rect x="0" y="222" width="320" height="8" class="memb e"/>` + rc(0,206,320,16,'hWoodX') + (() => { let s = ''; for (let x = 0; x < 320; x += 52) s += `<path class="roof e" d="M${x} 206h50v-14h-50z"/>`; return s; })()
      + `<path class="metal-d e" d="M120 230v-46h40v-14h8v20h-40v40z"/><rect x="40" y="152" width="250" height="16" class="metal e"/><rect x="30" y="118" width="270" height="20" class="frame e"/><path class="metal e" d="M150 138h20v14h-20z"/>`
      + nb(80,128,60,80,1) + nb(160,144,210,100,2) + nb(250,160,286,120,3) + nb(126,214,70,286,4) + nb(220,256,252,296,5) + nb(260,198,292,214,6) },
 { t:'Wylewka z ogrzewaniem podłogowym', tg:[10.7,9.5,.4], d:'Rurki ogrzewania leżą w jastrychu na styropianie. Przy ścianach taśma dylatacyjna pozwala wylewce pracować bez pęknięć.',
   items:['Płytka na kleju','Jastrych z rurkami ogrzewania, ok. 6,5 cm','Folia z nadrukiem siatki','Styropian podłogowy EPS 100','Izolacja przeciwwilgociowa','Podkład betonowy','Taśma dylatacyjna przy ścianie'],
   svg: rc(0,0,90,320,'hCer') + rc(90,90,230,10,'hPl','fill:var(--m-plaster-s)') + rc(90,100,230,52,'hScreed') + (() => { let s = ''; for (let x = 120; x < 320; x += 40) s += `<circle cx="${x}" cy="134" r="7" class="safety e"/>`; return s; })()
      + `<rect x="90" y="152" width="230" height="4" class="memb e"/>` + rc(90,156,230,72,'hEps') + `<rect x="90" y="228" width="230" height="4" class="bit e"/>` + rc(90,232,230,60,'hConc') + `<rect x="90" y="90" width="7" height="138" class="wool e"/>`
      + dv(306,100,152,'6,5') + dv(306,156,228,'15')
      + nb(160,95,150,40,1) + nb(200,120,232,60,2) + nb(240,154,266,250,3) + nb(160,190,120,250,4) + nb(130,230,60,250,5) + nb(220,270,240,300,6) + nb(94,120,48,96,7) },
 { t:'Kołkowanie ocieplenia', tg:[11,9.5,1.8], d:'Klej idzie obwodowo i plackami, potem kołki talerzowe z zaślepką. Na koniec siatka w kleju i tynk, bez prześwitujących łbów kołków.',
   items:['Mur z pustaka ceramicznego','Klej obwodowo-punktowo','Płyta ocieplenia','Kołek talerzowy zagłębiony, z zaślepką','Siatka w warstwie kleju','Tynk cienkowarstwowy'],
   svg: rc(200,0,120,320,'hCer') + rc(188,0,12,320,'hPl','fill:var(--m-glue)') + rc(60,0,128,320,'hEps') + rc(48,0,12,320,'hPl','fill:var(--m-glue)') + rc(42,0,6,320,'hPl')
      + `<path class="mesh" style="stroke-width:1.4;opacity:1" d="M54 0V320"/><path class="white e" d="M60 140h14v-26h-14zM74 124h176v6H74z"/><rect x="62" y="116" width="10" height="22" class="roof e"/>`
      + `<path class="glue e" d="M188 40h12v50h-12zM188 200h12v60h-12z"/>`
      + nb(260,60,280,28,1) + nb(194,230,254,260,2) + nb(120,220,120,290,3) + nb(68,127,40,90,4) + nb(54,200,24,230,5) + nb(45,260,24,290,6) },
 { t:'Hydroizolacja łazienki', tg:[7.7,9.5,1.3], d:'W strefie mokrej folia w płynie idzie w dwóch warstwach, a w narożu taśma uszczelniająca. Fuga przy podłodze jest elastyczna.',
   items:['Ściana z tynkiem','Taśma uszczelniająca w narożu','Folia w płynie, dwie warstwy','Klej i płytka','Fuga elastyczna (silikon)','Jastrych'],
   svg: rc(0,0,110,220,'hCer') + rc(110,0,12,220,'hPl') + rc(0,220,320,100,'hScreed') + `<path class="memb e" d="M122 0v214h198v6H116V0z"/><path class="safety e" style="opacity:.8" d="M122 180v34h40v6h-46v-40z"/>`
      + `<rect x="128" y="0" width="8" height="200" class="glue e"/><rect x="136" y="0" width="10" height="200" class="pl e"/><rect x="150" y="204" width="170" height="8" class="glue e"/><rect x="150" y="194" width="170" height="10" class="pl-s e"/><path class="frame e" d="M136 200h14v4h-14z"/>`
      + nb(50,100,40,48,1) + nb(120,200,64,250,2) + nb(240,216,262,264,3) + nb(240,198,250,150,4) + nb(143,202,200,120,5) + nb(80,280,60,300,6) },
 { t:'Kominek z powietrzem z zewnątrz', tg:[13,4.8,1.2], d:'Wkład zamknięty pobiera powietrze do spalania kanałem z zewnątrz. Przy rekuperacji to warunek bezpiecznej pracy kominka.',
   items:['Wkład kominkowy z szybą','Izolacja wkładu wełną do kominków','Obudowa kominka','Kanał powietrza z zewnątrz pod posadzką','Przyłącze do komina systemowego','Posadzka na wylewce'],
   svg: rc(0,250,320,70,'hScreed') + `<rect x="50" y="40" width="190" height="210" class="pl e"/>` + rc(70,100,150,150,'hWool') + `<rect x="95" y="140" width="100" height="90" class="frame e"/><rect x="105" y="150" width="80" height="60" class="lit e"/><rect x="130" y="40" width="30" height="100" class="metal e"/>`
      + `<path class="metal e" d="M240 270h80v20h-80z"/><path class="metal e" d="M150 230v50h90v-10h-80v-40z"/>`
      + nb(145,180,40,190,1) + nb(80,120,40,90,2) + nb(230,60,276,40,3) + nb(280,280,290,240,4) + nb(145,60,100,26,5) + nb(40,290,30,260,6) },
 { t:'Nawierzchnia z kostki', tg:[-3.5,20,0], d:'Kostka leży na podsypce, a całość na zagęszczonej podbudowie z kruszywa. Obrzeże w betonie trzyma krawędź przed rozjechaniem.',
   items:['Kostka betonowa 8 cm','Podsypka piaskowo-cementowa 3–5 cm','Podbudowa z kruszywa, zagęszczana warstwami','Geowłóknina','Grunt rodzimy','Obrzeże na ławie betonowej'],
   svg: rc(0,0,320,320,'hSoil') + (() => { let s = ''; for (let x = 60; x < 320; x += 44) s += `<rect x="${x}" y="90" width="42" height="34" class="pave e"/>`; return s; })() + rc(60,124,260,16,'hSand') + rc(40,140,280,88,'hGrav')
      + `<path class="ln" style="stroke-dasharray:6 3" d="M40 228H320"/>` + rc(26,70,30,90,'hConc') + rc(10,150,70,40,'hConc')
      + dv(306,90,124,'8') + dv(306,140,228,'25–30')
      + nb(140,108,140,50,1) + nb(220,132,240,60,2) + nb(180,180,200,250,3) + nb(120,228,110,270,4) + nb(240,280,270,296,5) + nb(40,110,30,40,6) },
 { t:'Niecka basenu', tg:[19,10.6,0], d:'Niecka żelbetowa z hydroizolacją i okładziną. Wokół zasypka z drenażem, żeby woda gruntowa nie napierała na ściany.',
   items:['Korona brzegu, antypoślizgowa','Ściana niecki żelbetowa','Hydroizolacja i okładzina','Dysza powrotna','Zasypka z drenażem','Woda'],
   svg: rc(0,80,320,240,'hSoil') + rc(0,80,110,200,'hGrav') + rc(110,70,40,250,'hConc') + `<path class="steel" style="stroke-width:1.6" d="M120 90V300M140 90V300"/>` + rc(150,80,170,240,'hPl','fill:var(--m-water)') + `<rect x="150" y="80" width="8" height="240" class="glass e"/>`
      + `<rect x="90" y="60" width="90" height="14" class="stone e"/><path class="metal e" d="M150 200h24v10h-24z"/><circle cx="80" cy="270" r="10" class="pvc e"/><path class="ln" d="M150 96H320" style="stroke:var(--m-water-d)"/>`
      + nb(130,66,140,26,1) + nb(130,180,60,140,2) + nb(154,240,210,270,3) + nb(170,205,240,190,4) + nb(80,270,40,300,5) + nb(260,140,286,110,6) }
];

/* ---------- Kreskowania materiałów (wspólne dla przekroju i lupy) ---------- */
const PAT = `<svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs>
<pattern id="hConc" width="26" height="26" patternUnits="userSpaceOnUse"><rect width="26" height="26" style="fill:var(--m-conc)"/><g style="fill:var(--vz-ink);opacity:.55"><circle cx="4" cy="5" r=".9"/><circle cx="17" cy="9" r=".7"/><circle cx="9" cy="19" r="1"/><circle cx="22" cy="21" r=".8"/><path d="M12 3l3 1-2 2zM2 14l3-1 0 3zM19 15l2 3-3 0z" style="fill:none;stroke:var(--vz-ink);stroke-width:.6"/></g></pattern>
<pattern id="hScreed" width="9" height="9" patternUnits="userSpaceOnUse"><rect width="9" height="9" style="fill:var(--m-conc-t)"/><circle cx="2" cy="3" r=".55" style="fill:var(--vz-ink);opacity:.45"/><circle cx="6.5" cy="7" r=".5" style="fill:var(--vz-ink);opacity:.45"/></pattern>
<pattern id="hCer" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="6" height="6" style="fill:var(--m-cer)"/><path d="M0 0V6" style="stroke:var(--m-cer-d);stroke-width:1.1"/></pattern>
<pattern id="hEps" width="11" height="11" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="11" height="11" style="fill:var(--m-eps)"/><path d="M0 0V11M0 0H11" style="stroke:var(--m-eps-d);stroke-width:.8"/></pattern>
<pattern id="hXps" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(-45)"><rect width="7" height="7" style="fill:var(--m-xps)"/><path d="M0 0V7" style="stroke:var(--vz-ink);stroke-width:.5;opacity:.5"/></pattern>
<pattern id="hWool" width="16" height="22" patternUnits="userSpaceOnUse"><rect width="16" height="22" style="fill:var(--m-wool)"/><path d="M0 0C14 0 14 11 0 11C14 11 14 22 0 22M16 0C2 0 2 11 16 11C2 11 2 22 16 22" style="fill:none;stroke:var(--vz-ink);stroke-width:.6;opacity:.6"/></pattern>
<pattern id="hSoil" width="24" height="24" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="24" height="24" style="fill:var(--m-soil)"/><path d="M2 0V8M5 0V8M8 0V8M14 12V20M17 12V20M20 12V20" style="stroke:var(--m-soil-d);stroke-width:.9"/></pattern>
<pattern id="hHum" width="14" height="10" patternUnits="userSpaceOnUse"><rect width="14" height="10" style="fill:var(--m-humus)"/><path d="M1 3h4M8 7h4" style="stroke:var(--vz-ink);stroke-width:.7;opacity:.5"/></pattern>
<pattern id="hSand" width="10" height="10" patternUnits="userSpaceOnUse"><rect width="10" height="10" style="fill:var(--m-sand)"/><g style="fill:var(--vz-ink);opacity:.5"><circle cx="2" cy="2" r=".7"/><circle cx="7" cy="4" r=".6"/><circle cx="4" cy="8" r=".6"/></g></pattern>
<pattern id="hGrav" width="18" height="16" patternUnits="userSpaceOnUse"><rect width="18" height="16" style="fill:var(--m-gravel)"/><g style="fill:none;stroke:var(--vz-ink);stroke-width:.6;opacity:.6"><ellipse cx="4" cy="4" rx="3" ry="2.2"/><ellipse cx="13" cy="6" rx="2.4" ry="2"/><ellipse cx="7" cy="12" rx="2.8" ry="2.1"/><ellipse cx="16" cy="13" rx="1.8" ry="1.5"/></g></pattern>
<pattern id="hWood" width="40" height="8" patternUnits="userSpaceOnUse"><rect width="40" height="8" style="fill:var(--m-timber)"/><path d="M0 3C10 2 20 5 40 3M0 6.5C14 7 26 5.5 40 6.5" style="fill:none;stroke:var(--m-timber-d);stroke-width:.7"/></pattern>
<pattern id="hWoodX" width="12" height="12" patternUnits="userSpaceOnUse"><rect width="12" height="12" style="fill:var(--m-timber)"/><path d="M0 0L12 12M12 0L0 12" style="stroke:var(--m-timber-d);stroke-width:.6"/></pattern>
<pattern id="hPl" width="6" height="6" patternUnits="userSpaceOnUse"><rect width="6" height="6" style="fill:var(--m-plaster)"/><circle cx="3" cy="3" r=".45" style="fill:var(--vz-ink);opacity:.35"/></pattern>
</defs></svg>`;

/* ---------- Przekrój ściany zewnętrznej i fundamentu (1 m = 250 px) ---------- */
const SX = u => r1(430 + u*250), SY = z => r1(290 - z*250);
const RR = (u0,z0,u1,z1) => [[u0,z0],[u1,z0],[u1,z1],[u0,z1]];
const LAYERS = [
  {id:'grunt', n:'Grunt rodzimy', t:'', f:'Nośne podłoże. Spód ławy musi leżeć poniżej strefy przemarzania: w Polsce 0,8–1,4 m, zależnie od regionu.', p:RR(-.8,-1.62,1.6,-.40), h:'hSoil', at:[-.6,-1.2], s:'L'},
  {id:'podsypka', n:'Podsypka zagęszczona', t:'ok. 70 cm', f:'Piasek lub pospółka zagęszczana warstwami co 20–30 cm. Słabo zagęszczona osiądzie i posadzka popęka.', p:RR(.25,-1.05,1.6,-.34), h:'hSand', at:[1.2,-.75], s:'R'},
  {id:'zasypka', n:'Zasypka wykopu', t:'', f:'Grunt przepuszczalny (piasek) zagęszczany warstwami. Nie zasypuje się gruzem, który przebiłby izolację.', p:[[-.55,-1.5],[-.225,-1.5],[-.225,-1.4],[-.175,-1.4],[-.175,-1.05],[-.17,-1.05],[-.17,-.55],[-.85,-.55]], h:'hSand', at:[-.45,-1.0], s:'L'},
  {id:'humus', n:'Humus', t:'ok. 20 cm', f:'Wierzchnia warstwa ziemi. Zdjęta przed budową i rozłożona z powrotem pod trawnik.', p:RR(-.8,-.60,-.73,-.40), h:'hHum', at:[-.77,-.5], s:'L'},
  {id:'opaska', n:'Opaska żwirowa', t:'ok. 50 cm szer.', f:'Pas płukanego żwiru przy ścianie z obrzeżem. Chroni cokół przed chlapaniem i odprowadza wodę.', p:RR(-.73,-.55,-.17,-.40), h:'hGrav', at:[-.5,-.47], s:'L'},
  {id:'chudy', n:'Chudy beton', t:'10 cm', f:'Równe i czyste podłoże pod ławę. Zbrojenie nie leży w błocie, a beton ławy nie ucieka w grunt.', p:RR(-.225,-1.5,.475,-1.4), h:'hScreed', at:[.35,-1.45], s:'R'},
  {id:'lawa', n:'Ława żelbetowa', t:'60 × 35 cm', f:'Rozkłada ciężar domu na grunt. Kosz z 4 prętów Ø12 i strzemion Ø6, otulina ok. 5 cm.', p:RR(-.175,-1.4,.425,-1.05), h:'hConc', at:[.3,-1.2], s:'R'},
  {id:'scianaf', n:'Ściana fundamentowa', t:'25 cm', f:'Bloczki betonowe na zaprawie. Wynosi dom ponad grunt i przenosi obciążenie ścian na ławę.', p:RR(0,-1.05,.25,-.24), h:'hConc', at:[.12,-.7], s:'R'},
  {id:'bitum', n:'Izolacja przeciwwilgociowa', t:'ok. 0,4 cm', f:'Masa bitumiczna na ścianie fundamentowej, pod XPS. Chroni mur przed wilgocią z gruntu.', p:RR(-.012,-1.05,0,-.24), h:null, cls:'bit', at:[-.006,-.9], s:'L'},
  {id:'xps', n:'Polistyren XPS', t:'15 cm', f:'Ocieplenie fundamentu i cokołu. Nie chłonie wody, więc może pracować w gruncie.', p:RR(-.162,-1.05,-.012,-.10), h:'hXps', at:[-.09,-.8], s:'L'},
  {id:'mozaika', n:'Tynk mozaikowy na cokole', t:'ok. 0,5 cm', f:'Odporny na chlapanie i uderzenia. Schodzi kilka centymetrów poniżej terenu.', p:RR(-.172,-.46,-.162,-.10), h:null, cls:'stone-d', at:[-.167,-.25], s:'L'},
  {id:'poziom', n:'Izolacja pozioma', t:'ok. 0,5 cm', f:'Papa na ścianie fundamentowej, połączona z izolacją podłogi. Blokuje podciąganie wilgoci w górę muru.', p:RR(0,-.247,.25,-.24), h:null, cls:'bit', at:[.18,-.244], s:'R'},
  {id:'podklad', n:'Podkład betonowy', t:'10 cm', f:'Płyta pod warstwy podłogi. Na nim układa się izolację przeciwwilgociową.', p:RR(.25,-.34,1.6,-.24), h:'hConc', at:[1.45,-.29], s:'R'},
  {id:'papa', n:'Izolacja podposadzkowa', t:'ok. 0,5 cm', f:'Papa lub folia na podkładzie, wywinięta i sklejona z izolacją poziomą ściany.', p:RR(.25,-.24,1.6,-.233), h:null, cls:'bit', at:[1.35,-.236], s:'R'},
  {id:'epsp', n:'Styropian podłogowy EPS 100', t:'15 cm', f:'Ocieplenie podłogi na gruncie. Twardszy niż elewacyjny, bo przenosi obciążenie posadzki.', p:RR(.265,-.233,1.6,-.083), h:'hEps', at:[1.4,-.16], s:'R'},
  {id:'folia', n:'Folia z siatką', t:'ok. 0,02 cm', f:'Oddziela jastrych od styropianu. Nadruk siatki ułatwia rozłożenie rurek ogrzewania.', p:RR(.265,-.083,1.6,-.079), h:null, cls:'memb', at:[1.3,-.081], s:'R'},
  {id:'jastrych', n:'Jastrych z ogrzewaniem podłogowym', t:'6,5 cm', f:'Wylewka cementowa lub anhydrytowa z rurkami ogrzewania. Akumuluje ciepło z pompy ciepła.', p:RR(.275,-.079,1.6,-.015), h:'hScreed', at:[1.25,-.045], s:'R'},
  {id:'posadzka', n:'Posadzka', t:'ok. 1,5 cm', f:'Płytka lub deska na kleju. Wierzch posadzki parteru to poziom ±0,00.', p:RR(.265,-.015,1.6,0), h:null, cls:'wood', at:[1.2,-.008], s:'R'},
  {id:'dylat', n:'Taśma dylatacyjna', t:'1 cm', f:'Oddziela wylewkę od ściany, żeby mogła pracować termicznie bez pękania.', p:RR(.265,-.083,.275,-.015), h:null, cls:'wool', at:[.27,-.05], s:'R'},
  {id:'mur', n:'Pustak ceramiczny', t:'25 cm', f:'Ściana nośna. Przenosi strop, dach i parcie wiatru.', p:RR(0,-.24,.25, .95), h:'hCer', at:[.12,.6], s:'R'},
  {id:'tynkw', n:'Tynk gipsowy', t:'1,5 cm', f:'Wykończenie od środka. Uszczelnia mur i wyrównuje go pod malowanie.', p:RR(.25,0,.265, .95), h:'hPl', at:[.258,.85], s:'R'},
  {id:'klej', n:'Klej do płyt', t:'ok. 1 cm', f:'Nakładany obwodowo i plackami, co najmniej 40% powierzchni płyty.', p:RR(-.012,-.10,0, .95), h:null, cls:'glue', at:[-.006,.95], s:'L'},
  {id:'ocieplenie', n:'Styropian grafitowy', t:'20 cm', f:'Ocieplenie ściany. Grafitowy izoluje lepiej od białego przy tej samej grubości.', p:RR(-.212,-.10,-.012, .95), h:'hEps', at:[-.1,.6], s:'L'},
  {id:'zbrojona', n:'Warstwa zbrojona', t:'ok. 0,4 cm', f:'Klej z zatopioną siatką z włókna szklanego. Przenosi naprężenia, żeby tynk nie pękał.', p:RR(-.218,-.10,-.212, .95), h:null, cls:'glue', at:[-.215,.35], s:'L'},
  {id:'tynkz', n:'Tynk cienkowarstwowy', t:'ok. 0,2 cm', f:'Ostatnia warstwa elewacji. Silikonowy lub silikatowy jest odporny na zabrudzenia.', p:RR(-.226,-.10,-.218, .95), h:null, cls:'pl', at:[-.222,.15], s:'L'}
];
const WOOL = {n:'Wełna mineralna fasadowa', f:'Ocieplenie ściany. Niepalna i paroprzepuszczalna, cięższa i droższa od styropianu.'};
let insul = 'eps';

function leaderLayout(list,side){
  const xs = side === 'L' ? 210 : 860, tx = side === 'L' ? 202 : 868;
  const items = list.map(l => ({l, y: +SY(l.at[1])})).sort((a,b) => a.y-b.y);
  for (let i = 1; i < items.length; i++) if (items[i].y - items[i-1].y < 22) items[i].y = items[i-1].y + 22;
  const over = items.length ? items[items.length-1].y - 700 : 0;
  if (over > 0) items.forEach(it => it.y -= over);
  for (let i = items.length-2; i >= 0; i--) if (items[i+1].y - items[i].y < 22) items[i].y = items[i+1].y - 22;
  return items.map(it => {
    const ax = SX(it.l.at[0]), ay = SY(it.l.at[1]);
    return `<g class="lead" data-l="${it.l.id}"><path class="thin" d="M${ax} ${ay}L${xs} ${r1(it.y)}H${side === 'L' ? xs-6 : xs+6}"/><circle class="inkf" cx="${ax}" cy="${ay}" r="2"/><text class="call" x="${tx}" y="${r1(it.y+4)}" text-anchor="${side === 'L' ? 'end' : 'start'}">${it.l.id === 'ocieplenie' && insul === 'wool' ? WOOL.n : it.l.n}${it.l.t ? ' ' + it.l.t : ''}</text></g>`;
  }).join('');
}
function level(u,z,txt,side){
  const x = +SX(u), y = +SY(z);
  return `<path class="dim" d="M${x-40} ${y}H${x+40}"/><path class="lev" d="M${x} ${y}l-6 -9h12z"/><text class="dim-t" x="${side ? x+10 : x-10}" y="${y-12}" text-anchor="${side ? 'start' : 'end'}">${txt}</text>`;
}
function dimH(z,a,b,t){ const y = +SY(z), x1 = +SX(a), x2 = +SX(b); return `<path class="dim" d="M${x1} ${y}H${x2}${tick(x1,y)}${tick(x2,y)}M${x1} ${y-6}v12M${x2} ${y-6}v12"/><text class="dim-t" x="${r1((x1+x2)/2)}" y="${y-5}" text-anchor="middle">${t}</text>`; }
function dimV(u,a,b,t){ const x = +SX(u), y1 = +SY(a), y2 = +SY(b); return `<path class="dim" d="M${x} ${y1}V${y2}${tick(x,y1)}${tick(x,y2)}M${x-6} ${y1}h12M${x-6} ${y2}h12"/><text class="dim-t" x="${x+8}" y="${r1((y1+y2)/2+4)}">${t}</text>`; }

function sectionSVG(){
  let s = `<rect width="1200" height="780" class="paper"/>`;
  s += `<text class="lbl" x="210" y="34" text-anchor="end" style="font-size:14px">Strona zewnętrzna</text><text class="lbl" x="868" y="34" style="font-size:14px">Wnętrze, parter</text>`;
  LAYERS.forEach(l => {
    const d = 'M' + l.p.map(q => SX(q[0]) + ' ' + SY(q[1])).join('L') + 'Z';
    const hp = l.id === 'ocieplenie' && insul === 'wool' ? 'hWool' : l.h;
    s += `<g class="layer" data-l="${l.id}"><path d="${d}" ${hp ? `fill="url(#${hp})"` : `class="${l.cls}"`} style="stroke:var(--vz-ink);stroke-width:.6"/><path class="hl-o" d="${d}"/></g>`;
  });
  // zbrojenie ławy
  s += `<rect x="${SX(-.125)}" y="${SY(-1.1)}" width="125" height="62.5" rx="4" class="steel" style="stroke-width:2.2;pointer-events:none"/>`;
  [[-.112,-1.112],[.362,-1.112],[-.112,-1.338],[.362,-1.338]].forEach(q => s += `<circle cx="${SX(q[0])}" cy="${SY(q[1])}" r="3.8" class="steel-f" style="pointer-events:none"/>`);
  // spoiny bloczków, przerwy w murze
  let jd = ''; for (let z = -1.05+.12; z < -.24; z += .12) jd += `M${SX(0)} ${SY(z)}H${SX(.25)}`;
  for (let z = -.24+.249; z < 1.1; z += .249) jd += `M${SX(0)} ${SY(z)}H${SX(.25)}`;
  s += `<path class="j" style="opacity:.8" d="${jd}"/>`;
  s += `<path class="ln" style="stroke-width:1.6" d="M${SX(-.8)} ${SY(-.40)}H${SX(-.172)}"/>`;
  s += `<path class="ln" d="M${SX(-.3)} ${SY(.95)}H${SX(-.06)}l8 -10 8 20 8 -10H${SX(.35)}"/>`;
  s += `<path class="dash" style="stroke-dasharray:10 4 2 4" d="M${SX(-.8)} ${SY(-1.40)}H${SX(-.6)}"/><text class="lbl" x="${SX(-.78)}" y="${+SY(-1.40)+16}">granica przemarzania, przykład 1,0 m</text>`;
  // wymiary i poziomy
  s += dimH(1.02,-.226,-.012,'21') + dimH(1.02,0,.25,'25') + dimH(1.1,-.226,.265,'48 razem');
  s += dimH(-1.57,-.175,.425,'60') + dimV(.5,-1.4,-1.05,'35') + dimV(.5,-1.05,-.24,'81');
  s += dimV(1.53,-.015,0,'') + dimV(1.53,-.079,-.015,'6,5') + dimV(1.53,-.233,-.083,'15') + dimV(1.53,-.34,-.24,'10');
  s += dimH(-.75,-.162,-.012,'15');
  s += level(1.05,0,'±0,00 posadzka parteru',1) + level(-.62,-.40,'−0,40 teren',0) + level(.9,-1.40,'−1,40 spód ławy',1) + level(.9,-1.05,'−1,05',1);
  s += leaderLayout(LAYERS.filter(l => l.s === 'L'),'L') + leaderLayout(LAYERS.filter(l => l.s === 'R' && !['dylat','folia','posadzka'].includes(l.id)).concat(LAYERS.filter(l => ['dylat','folia','posadzka'].includes(l.id))),'R');
  s += `<text class="lbl-s" x="1180" y="770" text-anchor="end">Kreskowania wg zwyczajowej konwencji rysunku budowlanego. Wymiary w cm, rzędne w m.</text>`;
  return s;
}


/* ---------- Montaż i API ---------- */
const NS = 'http://www.w3.org/2000/svg';
const OUT = 'cubic-bezier(.22,1,.36,1)', SPRING = 'cubic-bezier(.34,1.45,.64,1)';
const pad = n => String(n).padStart(2,'0');
const clamp = n => Math.max(0, Math.min(16, n|0));
const still = () => !root || !root.animate || matchMedia('(prefers-reduced-motion: reduce)').matches;
const anim = (el,k,o) => still() || !el.animate ? null : el.animate(k,o);

let root = null, svgH, svgD, svgS, gClip, gScene, gOut, gMark;
let pz = null, full = false, home = null, cur = 0, shown = 0, view = 'dom', pinned = 'lawa', prevNodes = null;
const $ = sel => root.querySelector(sel);

function mount(el){
  root = el; el.classList.add('viz');
  el.innerHTML = PAT + `
  <div class="vz-bar">
    <div class="vz-tools" role="group" aria-label="Powiększenie i ekran">
      <button type="button" id="vzZin" aria-label="Przybliż" title="Przybliż (Ctrl + kółko, dwuklik)">+</button>
      <button type="button" id="vzZout" aria-label="Oddal" title="Oddal">−</button>
      <button type="button" id="vzFit" title="Cały rysunek (0)">Dopasuj</button>
      <button type="button" id="vzFull" aria-pressed="false" title="Pełny ekran (Esc zamyka)">Pełny ekran</button>
    </div>
    <div class="vz-seg" role="tablist" aria-label="Widok wizualizacji">
      <button role="tab" id="vzTabDom" aria-selected="true" aria-controls="vzViewDom">Dom</button>
      <button role="tab" id="vzTabSec" aria-selected="false" aria-controls="vzViewSec">Przekrój</button>
    </div>
  </div>
  <section class="vz-view" id="vzViewDom" role="tabpanel" aria-labelledby="vzTabDom">
    <div class="vz-sheet">
      <div class="vz-canvas">
        <div class="vz-vp" id="vzVpDom" tabindex="0" aria-label="Rysunek domu: Ctrl + kółko przybliża, przeciąganie przesuwa"><svg id="vzHouse" viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid meet" role="img" aria-label="Aksonometria domu na wybranym etapie budowy"></svg></div>
        <div class="vz-loupe"><svg id="vzDet" viewBox="0 0 320 320" role="img" aria-label="Powiększony detal etapu"></svg></div>
      </div>
      <div class="vz-ctrl">
        <div class="vz-ctrl-head"><label for="vzRange">Podgląd etapu</label><output id="vzOut" for="vzRange"></output><span class="vz-sname" id="vzName"></span>
          <button type="button" class="vz-back" id="vzBack" hidden></button></div>
        <input type="range" id="vzRange" min="0" max="16" step="1" value="0" aria-describedby="vzCap">
        <div class="vz-ticks" aria-hidden="true">${STAGES.map((s,i) => `<span>${pad(i)}</span>`).join('')}</div>
        <p class="vz-caption" id="vzCap"></p>
      </div>
      <div class="vz-detail"><p class="vz-detail-text"><b id="vzDetT"></b><span id="vzDetD"></span></p><ol class="vz-det-list" id="vzDetL"></ol></div>
    </div>
  </section>
  <section class="vz-view" id="vzViewSec" role="tabpanel" aria-labelledby="vzTabSec" hidden>
    <div class="vz-sheet">
      <div class="vz-canvas vz-sec"><div class="vz-vp" id="vzVpSec" tabindex="0" aria-label="Przekrój: Ctrl + kółko przybliża, przeciąganie przesuwa"><svg id="vzSec" viewBox="0 0 1200 780" preserveAspectRatio="xMidYMid meet" role="img" aria-label="Przekrój ściany zewnętrznej i fundamentu"></svg></div></div>
      <div class="vz-opt" role="radiogroup" aria-label="Ocieplenie ściany"><span>Ocieplenie ściany:</span>
        <span class="vz-seg"><button type="button" id="vzInsEps" aria-selected="true">Styropian grafitowy</button><button type="button" id="vzInsWool" aria-selected="false">Wełna mineralna</button></span></div>
      <div class="vz-sec-side"><div class="vz-layer-info" id="vzLayerInfo" aria-live="polite"></div><div class="vz-chips" id="vzChips" aria-label="Warstwy przekroju"></div></div>
    </div>
  </section>
  <div class="vz-tb">
    <div><span>Obiekt</span><b>Dom 190 m², poddasze użytkowe</b></div>
    <div><span>Widok</span><b id="vzTbView">Aksonometria</b></div>
    <div><span>Etap</span><b id="vzTbStage"></b></div>
    <div><span>Skala</span><b id="vzTbScale">bez skali</b></div>
  </div>`;
  svgH = $('#vzHouse'); svgD = $('#vzDet'); svgS = $('#vzSec');
  let stars = ''; reseed(3); for (let i = 0; i < 40; i++) stars += `<circle cx="${r1(rnd()*W)}" cy="${r1(rnd()*230)}" r="${r1(.5+rnd()*.8)}"/>`;
  svgH.innerHTML = `<defs><linearGradient id="vzSky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" style="stop-color:var(--vz-sky-1)"/><stop offset="1" style="stop-color:var(--vz-sky-2)"/></linearGradient>
    <filter id="fGlow" x="-100%" y="-100%" width="300%" height="300%"><feGaussianBlur stdDeviation="7"/></filter></defs><defs class="vz-clips"></defs>
    <rect width="${W}" height="${H}" class="sky"/><g class="stars">${stars}</g><g class="vz-scene"></g><g class="vz-gone"></g><g class="vz-mark"></g>`;
  gClip = $('.vz-clips'); gScene = $('.vz-scene'); gOut = $('.vz-gone'); gMark = $('.vz-mark');
  prevNodes = null;

  pz = {dom: panzoom($('#vzVpDom'), svgH), przekroj: panzoom($('#vzVpSec'), svgS)};
  $('#vzZin').onclick = () => pz[view].step(1.6);
  $('#vzZout').onclick = () => pz[view].step(1/1.6);
  $('#vzFit').onclick = () => pz[view].fit();
  $('#vzFull').onclick = () => setFull(!full);
  full = false;

  $('#vzTabDom').onclick = () => setView('dom');
  $('#vzTabSec').onclick = () => setView('przekroj');
  const ins = k => { insul = k; $('#vzInsEps').setAttribute('aria-selected', k === 'eps'); $('#vzInsWool').setAttribute('aria-selected', k === 'wool'); drawSection(); hl(pinned); };
  $('#vzInsEps').onclick = () => ins('eps'); $('#vzInsWool').onclick = () => ins('wool');
  const range = $('#vzRange');
  range.addEventListener('input', () => show(+range.value));
  $('#vzBack').onclick = () => show(cur);

  drawSection();
  setView(view);
  show(cur, true);
  return root;
}

/* Rysuje etap n. Porównuje elementy z poprzednim rysunkiem: nowe dorysowują się kaskadowo,
   znikające gasną. Przy cofaniu nowe elementy (np. rusztowanie) tylko się pojawiają. */
function show(n, first){
  n = clamp(n);
  const back = n < shown, changed = n !== shown || first;
  shown = n;
  const sc = scene(n), det = DETAILS[n], tp = P(...det.tg);
  gClip.innerHTML = sc.defs;
  gOut.getAnimations && gOut.getAnimations({subtree:true}).forEach(a => a.cancel());
  gOut.innerHTML = '';
  gScene.innerHTML = sc.body;

  const kids = Array.from(gScene.children), pool = new Map(), fresh = [];
  (prevNodes || []).forEach(nd => { const a = pool.get(nd.__k); a ? a.push(nd) : pool.set(nd.__k, [nd]); });
  kids.forEach(nd => { nd.__k = nd.outerHTML; const a = pool.get(nd.__k); if (a && a.length) a.pop(); else fresh.push(nd); });
  prevNodes = kids;

  const cx = 180, cy = 176, ang = Math.atan2(tp[1]-cy, tp[0]-cx), ex = cx + Math.cos(ang)*168, ey = cy + Math.sin(ang)*168;
  gMark.innerHTML = `<path class="leader" d="M${r1(tp[0])} ${r1(tp[1])}L${r1(ex)} ${r1(ey)}"/><circle class="tgt" cx="${r1(tp[0])}" cy="${r1(tp[1])}" r="11"/><circle class="paper" style="stroke:var(--vz-accent);stroke-width:1.2" cx="${r1(tp[0]+13)}" cy="${r1(tp[1]-13)}" r="8"/><text class="tgt-t" style="font-size:11px" text-anchor="middle" x="${r1(tp[0]+13)}" y="${r1(tp[1]-9)}">A</text>
    <text class="lbl" x="${W-24}" y="${H-20}" text-anchor="end">Etap ${pad(n)}. ${STAGES[n][0]}</text>`;
  svgD.innerHTML = `<defs><clipPath id="vzLoupe"><circle cx="160" cy="160" r="150"/></clipPath></defs><circle cx="160" cy="160" r="152" class="paper"/>
    <g clip-path="url(#vzLoupe)">${det.svg}</g><circle cx="160" cy="160" r="152" style="fill:none;stroke:var(--vz-accent);stroke-width:2.2"/><circle cx="160" cy="160" r="157" style="fill:none;stroke:var(--vz-accent);stroke-width:.6"/>
    <circle cx="296" cy="26" r="14" class="paper" style="stroke:var(--vz-accent);stroke-width:1.6"/><text x="296" y="31" text-anchor="middle" style="font-size:15px;font-weight:700;fill:var(--vz-accent)">A</text>`;
  $('#vzDetT').textContent = 'Detal A. ' + det.t;
  $('#vzDetD').textContent = det.d;
  $('#vzDetL').innerHTML = det.items.map(t => `<li>${t}</li>`).join('');
  syncUI();

  if (!changed || view !== 'dom' || still()) return n;
  // znikające elementy: stare węzły nad nowym rysunkiem, wygaszane
  pool.forEach(a => a.forEach(nd => gOut.appendChild(nd)));
  if (gOut.firstChild){ const a = anim(gOut, [{opacity:1},{opacity:0}], {duration:back ? 320 : 220, easing:'ease-in', fill:'forwards'}); if (a) a.onfinish = () => { gOut.innerHTML = ''; a.cancel(); }; }
  // nowe elementy: ciągłe serie rodzeństwa owijamy w <g>, żeby wsuwały się grupami
  const runs = [];
  fresh.forEach(nd => { const r = runs[runs.length-1]; if (r && nd.previousElementSibling === r[r.length-1]) r.push(nd); else runs.push([nd]); });
  let budget = first ? 260 : 520;
  runs.forEach((run, i) => {
    const g = document.createElementNS(NS, 'g');
    gScene.insertBefore(g, run[0]); run.forEach(nd => g.appendChild(nd));
    if (back){ anim(g, [{opacity:0},{opacity:1}], {duration:320, easing:'ease-out', fill:'backwards'}); return; }
    const base = Math.min(i, 18) * (first ? 50 : 70);
    anim(g, [{opacity:0, transform:'translateY(12px)'},{opacity:1, transform:'none'}], {duration:420, delay:base, easing:SPRING, fill:'backwards'});
    let k = 0;
    g.querySelectorAll('path,rect,polygon,ellipse,circle').forEach(el => {
      if (budget <= 0 || el.closest('.glow,.lit,.stars')) return;
      let len = 0; try { len = el.getTotalLength(); } catch(e){}
      if (!len || !isFinite(len)) return;
      budget--; drawIn(el, len, base + Math.min(k++, 26)*24);
    });
  });
  if (!first){
    anim(gMark, [{opacity:0},{opacity:1}], {duration:360, delay:200, easing:'ease-out', fill:'backwards'});
    anim(svgD, [{opacity:0, transform:'scale(.55)'},{opacity:1, transform:'none'}], {duration:520, delay:120, easing:SPRING, fill:'backwards'});
    anim($('#vzCap'), [{opacity:0, transform:'translateY(4px)'},{opacity:1, transform:'none'}], {duration:300, easing:OUT});
    anim($('.vz-detail'), [{opacity:0},{opacity:1}], {duration:300, delay:150, easing:'ease-out', fill:'backwards'});
  }
  return n;
}
// kreska rysuje się od zera (stroke-dashoffset), wypełnienie dochodzi po niej
function drawIn(el, len, delay){
  const css = el.style.cssText, cs = getComputedStyle(el);
  const stroked = cs.stroke !== 'none', filled = cs.fill !== 'none', fo = parseFloat(cs.fillOpacity) || 1;
  if (!stroked){ el.style.stroke = 'var(--vz-draw)'; el.style.strokeWidth = '1.3'; }
  el.style.strokeDasharray = len; el.style.strokeDashoffset = len;
  const a = el.animate([{strokeDashoffset:len},{strokeDashoffset:0}], {duration:420, delay, easing:OUT, fill:'forwards'});
  const b = filled ? el.animate([{fillOpacity:0},{fillOpacity:0, offset:.45},{fillOpacity:fo}], {duration:620, delay, easing:'ease-out', fill:'backwards'}) : null;
  (b || a).onfinish = () => { a.cancel(); if (b) b.cancel(); el.style.cssText = css; };
}
function syncUI(){
  const range = $('#vzRange');
  range.value = shown; range.style.setProperty('--p', (shown/16*100) + '%');
  $('#vzOut').textContent = pad(shown);
  $('#vzName').textContent = STAGES[shown][0];
  $('#vzCap').textContent = STAGES[shown][1];
  root.querySelectorAll('.vz-ticks span').forEach((t,i) => { t.classList.toggle('on', i === shown); t.classList.toggle('dn', i <= cur); });
  const b = $('#vzBack'); b.hidden = shown === cur; b.textContent = `Wróć do bieżącego: ${pad(cur)} ${STAGES[cur][0]}`;
  $('#vzTbStage').textContent = pad(shown) + ' ' + STAGES[shown][0] + (shown === cur ? '' : ' (podgląd)');
}

function drawSection(){
  svgS.innerHTML = sectionSVG();
  const chips = $('#vzChips'), cs = getComputedStyle(root); chips.innerHTML = '';
  LAYERS.slice().reverse().forEach(l => {
    const b = document.createElement('button');
    const col = l.h ? cs.getPropertyValue({hConc:'--m-conc',hSand:'--m-sand',hSoil:'--m-soil',hHum:'--m-humus',hGrav:'--m-gravel',hScreed:'--m-conc-t',hXps:'--m-xps',hEps:'--m-eps',hCer:'--m-cer',hPl:'--m-plaster'}[l.h]) : cs.getPropertyValue(l.cls === 'pl' ? '--m-plaster' : '--m-' + l.cls);
    b.type = 'button'; b.dataset.l = l.id; b.innerHTML = `<i class="${l.cls || ''}" style="${col ? 'background:' + col : ''}"></i>${l.id === 'ocieplenie' && insul === 'wool' ? WOOL.n : l.n}`;
    b.onclick = () => hl(l.id);
    chips.appendChild(b);
  });
  svgS.querySelectorAll('.layer, .lead').forEach(g => {
    g.addEventListener('mouseenter', () => hl(g.dataset.l, true));
    g.addEventListener('mouseleave', () => hl(pinned, true));
    g.addEventListener('click', () => hl(g.dataset.l));
  });
}
function hl(id, hover){
  const l = LAYERS.find(x => x.id === id); if (!l || !root) return false;
  if (!hover) pinned = id;
  const wool = l.id === 'ocieplenie' && insul === 'wool';
  $('#vzLayerInfo').innerHTML = `<h3>${wool ? WOOL.n : l.n}</h3>${l.t ? `<span class="thick">${l.t}</span>` : ''}<p>${wool ? WOOL.f : l.f}</p>`;
  svgS.classList.add('focus');
  svgS.querySelectorAll('.layer').forEach(g => g.classList.toggle('on', g.dataset.l === id));
  root.querySelectorAll('#vzChips button').forEach(b => b.setAttribute('aria-pressed', b.dataset.l === id));
  return true;
}

/* ---------- Pan i zoom ---------- */
// Stan {k,x,y}: transform svg = translate(x,y) scale(k), origin 0 0. Zoom 1–4×, pan ograniczony tak,
// żeby rysunek zawsze przykrywał okno. Transform leży na <svg>, lupa detalu jest poza nim.
const ZMIN = 1, ZMAX = 4;
function panzoom(vp, svg){
  const s = {k:1, x:0, y:0}, ptrs = new Map();
  let drag = null, pinch = null, suppress = false;
  const clampXY = () => {
    const w = vp.clientWidth, h = vp.clientHeight;
    if (!w || !h) return;
    s.x = Math.min(0, Math.max(w - w*s.k, s.x)); s.y = Math.min(0, Math.max(h - h*s.k, s.y));
  };
  const apply = () => { clampXY(); vp.classList.toggle('vz-zoomed', s.k > 1.001); svg.style.transform = `translate(${r1(s.x)}px,${r1(s.y)}px) scale(${r1(s.k*1000)/1000})`; };
  const zoomAt = (k2, px, py) => {
    k2 = Math.max(ZMIN, Math.min(ZMAX, k2));
    s.x = px - (px - s.x)*k2/s.k; s.y = py - (py - s.y)*k2/s.k; s.k = k2; apply();
  };
  const local = e => { const r = vp.getBoundingClientRect(); return [e.clientX - r.left, e.clientX === undefined ? 0 : e.clientY - r.top]; };
  const noAnim = on => vp.classList.toggle('vz-drag', on);
  const api = {
    fit(instant){ if (instant){ svg.style.transition = 'none'; } s.k = 1; s.x = s.y = 0; apply(); if (instant){ svg.getBoundingClientRect(); svg.style.transition = ''; } },
    step(f){ zoomAt(s.k*f, vp.clientWidth/2, vp.clientHeight/2); },
    refresh: apply
  };
  // poza pełnym ekranem kółko przewija stronę; zoom tylko z Ctrl (też gest pinch na gładziku)
  vp.addEventListener('wheel', e => {
    if (!full && !e.ctrlKey) return;
    e.preventDefault();
    const [px, py] = local(e);
    const u = e.deltaMode === 1 ? .05 : e.ctrlKey ? .01 : .0016;
    zoomAt(s.k*Math.exp(-e.deltaY*u), px, py);
  }, {passive:false});
  vp.addEventListener('dblclick', e => { const [px, py] = local(e); if (s.k > ZMAX - .2) api.fit(); else zoomAt(s.k*2, px, py); });
  vp.addEventListener('pointerdown', e => {
    if (e.pointerType === 'mouse' && e.button !== 0) return;
    ptrs.set(e.pointerId, [e.clientX, e.clientY]);
    if (ptrs.size === 1) drag = {x:e.clientX, y:e.clientY, sx:s.x, sy:s.y, moved:false};
    else if (ptrs.size === 2){
      const [a, b] = Array.from(ptrs.values()), r = vp.getBoundingClientRect();
      pinch = {d:Math.hypot(a[0]-b[0], a[1]-b[1]) || 1, cx:(a[0]+b[0])/2 - r.left, cy:(a[1]+b[1])/2 - r.top, k:s.k, x:s.x, y:s.y};
      drag = null; noAnim(true);
      try { vp.setPointerCapture(e.pointerId); } catch(_){}
    }
  });
  vp.addEventListener('pointermove', e => {
    if (!ptrs.has(e.pointerId)) return;
    ptrs.set(e.pointerId, [e.clientX, e.clientY]);
    if (pinch && ptrs.size >= 2){
      const [a, b] = Array.from(ptrs.values()), r = vp.getBoundingClientRect();
      const k2 = Math.max(ZMIN, Math.min(ZMAX, pinch.k*Math.hypot(a[0]-b[0], a[1]-b[1])/pinch.d));
      const cx = (a[0]+b[0])/2 - r.left, cy = (a[1]+b[1])/2 - r.top;
      s.x = cx - (pinch.cx - pinch.x)*k2/pinch.k; s.y = cy - (pinch.cy - pinch.y)*k2/pinch.k; s.k = k2; suppress = true; apply();
    } else if (drag){
      const dx = e.clientX - drag.x, dy = e.clientY - drag.y;
      if (!drag.moved && Math.hypot(dx, dy) > 4 && s.k > 1.001){
        drag.moved = true; noAnim(true);
        try { vp.setPointerCapture(e.pointerId); } catch(_){}
      }
      if (drag.moved){ s.x = drag.sx + dx; s.y = drag.sy + dy; suppress = true; apply(); }
    }
  });
  const up = e => {
    if (!ptrs.delete(e.pointerId)) return;
    if (ptrs.size < 2) pinch = null;
    if (ptrs.size === 1){ const [x, y] = Array.from(ptrs.values())[0]; drag = {x, y, sx:s.x, sy:s.y, moved:true}; }
    else { drag = null; noAnim(false); }
    if (suppress) setTimeout(() => { suppress = false; }, 0);
  };
  vp.addEventListener('pointerup', up); vp.addEventListener('pointercancel', up);
  // przeciągnięcie nie może kliknąć warstwy przekroju pod kursorem
  vp.addEventListener('click', e => { if (suppress){ e.stopPropagation(); e.preventDefault(); } }, true);
  vp.addEventListener('keydown', e => {
    const k = e.key, st = 60;
    if (k === '+' || k === '=') api.step(1.4); else if (k === '-') api.step(1/1.4); else if (k === '0') api.fit();
    else if (s.k > 1.001 && k.startsWith('Arrow')){ s.x += k === 'ArrowLeft' ? st : k === 'ArrowRight' ? -st : 0; s.y += k === 'ArrowUp' ? st : k === 'ArrowDown' ? -st : 0; apply(); }
    else return;
    e.preventDefault();
  });
  if (window.ResizeObserver) new ResizeObserver(apply).observe(vp);
  return api;
}

// pełny ekran: ten sam root w nakładce (CSS), zoom wraca do całości, bo zmienia się rozmiar okna
function setFull(on){
  if (!root || on === full) return;
  full = on;
  // przenosimy do <body>: przodek z transform/animacją zrobiłby z siebie blok dla position:fixed i przyciął nakładkę
  if (on){ home = document.createComment('viz'); root.parentNode.insertBefore(home, root); document.body.appendChild(root); }
  else if (home && home.parentNode){ home.parentNode.insertBefore(root, home); home.remove(); home = null; }
  root.classList.toggle('vz-full', on);
  document.documentElement.classList.toggle('vz-lock', on);
  const b = $('#vzFull'); b.setAttribute('aria-pressed', on); b.textContent = on ? 'Zamknij' : 'Pełny ekran';
  root.scrollTop = 0;
  Object.values(pz).forEach(p => p.fit(true));
  b.focus({preventScroll:true});
}
document.addEventListener('keydown', e => { if (full && e.key === 'Escape'){ e.stopPropagation(); setFull(false); } }, true);

/* ---------- API dla silnika ---------- */
function setStage(n){
  cur = clamp(n);
  if (root) show(cur);
  return cur;
}
function setView(v){
  view = v === 'przekroj' || v === 'sec' ? 'przekroj' : 'dom';
  if (!root) return view;
  const sec = view === 'przekroj';
  $('#vzViewDom').hidden = sec; $('#vzViewSec').hidden = !sec;
  $('#vzTabDom').setAttribute('aria-selected', !sec); $('#vzTabSec').setAttribute('aria-selected', sec);
  $('#vzTbView').textContent = sec ? 'Przekrój pionowy ściany' : 'Aksonometria';
  $('#vzTbScale').textContent = sec ? 'bez skali, wymiary w cm' : 'bez skali';
  if (sec) hl(pinned);
  if (pz) pz[view].refresh();
  return view;
}
// highlight z treści („zobacz w przekroju”): przełącza na przekrój i wskazuje warstwę
function highlight(id){
  if (!LAYERS.some(l => l.id === id)) return false;
  pinned = id;
  if (!root) return true;
  setView('przekroj');
  const g = svgS.querySelector(`.layer[data-l="${id}"]`);
  if (g) anim(g, [{opacity:.2},{opacity:1},{opacity:.4},{opacity:1}], {duration:900, easing:'ease-in-out'});
  return true;
}

// motyw: tokeny przełączają się w CSS; kolory próbek warstw liczymy ponownie
function retheme(){ if (root){ drawSection(); hl(pinned, true); } }
new MutationObserver(retheme).observe(document.documentElement, {attributes:true, attributeFilter:['data-theme']});
const mq = matchMedia('(prefers-color-scheme: dark)');
if (mq.addEventListener) mq.addEventListener('change', retheme);

return { mount, setStage, highlight, setView, STAGES,
  LAYERS: LAYERS.map(l => ({id: l.id, name: l.n})),
  get stage(){ return cur; }, get shown(){ return shown; } };
})();
