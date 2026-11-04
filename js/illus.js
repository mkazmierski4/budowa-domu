/* =====================================================================
   ILLUS — ilustracje kroków w stylu „instrukcji obrazkowej”: scena w lekkiej
   aksonometrii, płaskie kolory materiałów, sympatyczne postacie, mało tekstu.
   (Rysunek techniczny jest tylko w wizualizacji domu i przekroju: viz.js.)
   Rejestracja (w js/illus/NN-slug.js):
     BUDOWA.addIllus("NN-slug/step-id", function(api){ return svgString; });
     BUDOWA.addIllus("NN-slug/step-id", { caption, frames: [{ caption, svg }] });
   Funkcja może też zwrócić obiekt z klatkami. svg = pełny <svg> albo sama
   zawartość (wtedy api.svg ją owija, domyślnie 480 × 320).
   Silnik woła ILLUS.mount(figure, def). Kolory: css/illus.css (tokeny --il-*, oba motywy).
   ===================================================================== */
window.ILLUS = (function(){
'use strict';

const r1 = n => Math.round(n*10)/10;
const OUT = 'cubic-bezier(.22,1,.36,1)', SPRING = 'cubic-bezier(.34,1.45,.64,1)';
const still = () => !document.body.animate || matchMedia('(prefers-reduced-motion: reduce)').matches;

// o = {k: klucz podświetlania, from: [dx,dy] wjazd przy pokazaniu klatki, d: opóźnienie ms, cls, st}
const ex = o => !o ? '' : (o.k ? ` data-k="${o.k}"` : '') + (o.from ? ` data-from="${o.from.join(' ')}"` : '') + (o.d ? ` data-d="${o.d}"` : '') + (o.st ? ` style="${o.st}"` : '');
const pts = p => 'M' + p.map(q => r1(q[0])+' '+r1(q[1])).join('L');
const MATS = 'beton chudy stal drewno ziemia trawa piasek zwir kmb papa folia eps xps welna ceramika bloczek woda dachowka szklo blacha papier';

/* ---------- Biblioteka elementów (wszystko zwraca string SVG) ---------- */
const A = {};
A.MATS = MATS.split(' ');
A.svg = (inner, w, h, label) => `<svg viewBox="0 0 ${w||480} ${h||320}" role="img"${label ? ` aria-label="${label}"` : ''}>${inner}</svg>`;
A.g = (s, o) => `<g${o && o.tr ? ` transform="${o.tr}"` : ''}${ex(o)}>${s}</g>`;
A.fresh = (s, o) => `<g class="nw"${ex(o)}>${s}</g>`;          // pojawia się (wyskakuje) przy pokazaniu klatki
A.move = (s, dx, dy, o) => `<g${ex(Object.assign({from:[dx,dy]}, o))}>${s}</g>`;  // wjeżdża z przesunięcia: „kosz opada”
A.ghost = s => `<g class="il-ghost">${s}</g>`;               // poprzednie położenie, przezroczyste
A.text = (x,y,t,o) => { o = o || {}; return `<text class="il-t${o.s ? ' il-ts' : ''}${o.b ? ' il-tb' : ''}" x="${r1(x)}" y="${r1(y)}"${o.a ? ` text-anchor="${o.a}"` : ''}${ex(o)}>${t}</text>`; };
A.line = (p,cls,st) => `<path class="${cls || 'il-ln'}" d="${typeof p === 'string' ? p : pts(p)}"${st ? ` style="${st}"` : ''}/>`;

// materiał = płaski kolor (klasa c-<mat>); rect/poly 2D, cień miękki
A.rect = (x,y,w,h,mat,o) => `<rect x="${r1(x)}" y="${r1(y)}" width="${r1(w)}" height="${r1(h)}" rx="${o && o.r != null ? o.r : 2}" class="il-m c-${mat}${o && o.cls ? ' '+o.cls : ''}"${ex(o)}/>`;
A.poly = (p,mat,o) => `<path d="${pts(p)}Z" class="il-m c-${mat}${o && o.cls ? ' '+o.cls : ''}"${ex(o)}/>`;
A.shadow = (cx,cy,rx,ry) => `<ellipse cx="${r1(cx)}" cy="${r1(cy)}" rx="${r1(rx)}" ry="${r1(ry || rx*.3)}" class="il-sh"/>`;
A.ground = (x,y,w,h,o) => A.rect(x,y,w,h,'ziemia',Object.assign({r:6},o)) + (o && o.trawa === false ? '' : A.rect(x,y-3,w,9,'trawa',{r:4}));

// lekka aksonometria: P = a.iso(ox, oy, s); P.box(x,y,z, w,d,h, mat) — x w prawo w dół, y w lewo w dół, z w górę
A.iso = (ox, oy, s) => {
  const c = .866*s, h = .5*s;
  const P = (x,y,z) => [r1(ox + (x-y)*c), r1(oy + (x+y)*h - (z||0)*s)];
  const d = q => 'M' + q.map(p => P(p[0],p[1],p[2]).join(' ')).join('L') + 'Z';
  const I = {P, d};
  I.face = (q,mat,cls,o) => `<path d="${d(q)}" class="${cls || 'ft'} c-${mat}"${ex(o)}/>`;
  I.box = (x,y,z,w,dp,ht,mat,o) => `<g class="c-${mat}"${ex(o)}>` +
    `<path class="fl" d="${d([[x,y+dp,z],[x+w,y+dp,z],[x+w,y+dp,z+ht],[x,y+dp,z+ht]])}"/>` +
    `<path class="fr" d="${d([[x+w,y,z],[x+w,y+dp,z],[x+w,y+dp,z+ht],[x+w,y,z+ht]])}"/>` +
    `<path class="ft" d="${d([[x,y,z+ht],[x+w,y,z+ht],[x+w,y+dp,z+ht],[x,y+dp,z+ht]])}"/></g>`;
  I.shadow = (x,y,w,dp,z) => `<path class="il-sh" d="${d([[x,y,z||0],[x+w,y,z||0],[x+w,y+dp,z||0],[x,y+dp,z||0]])}"/>`;
  I.line = (q,cls,st) => `<path class="${cls || 'il-ln'}" d="${'M' + q.map(p => P(p[0],p[1],p[2]).join(' ')).join('L')}"${st ? ` style="${st}"` : ''}/>`;
  I.bar = (q,w,o) => `<path class="il-rb" d="${'M' + q.map(p => P(p[0],p[1],p[2]).join(' ')).join('L')}" style="stroke-width:${w || 3}"${ex(o)}/>`;
  I.at = (x,y,z,s2,o) => { const p = P(x,y,z); return inner => `<g transform="translate(${p[0]} ${p[1]})${s2 && s2 !== 1 ? ` scale(${s2})` : ''}"${ex(o)}>${inner}</g>`; };
  return I;
};

// stal: pręt (rdzawy, z żeberkami), przekrój pręta, strzemię, dystans
A.rebar = (p,w,o) => { const q = pts(p); w = w || 4; return `<g${ex(o)}><path class="il-rb" d="${q}" style="stroke-width:${w}"/><path class="il-rib" d="${q}" style="stroke-width:${w}"/></g>`; };
A.bar = (x,y,r,o) => `<circle cx="${r1(x)}" cy="${r1(y)}" r="${r || 4}" class="il-m c-stal"${ex(o)}/>`;
A.stirrup = (x,y,w,h,o) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="5" class="il-rb" style="stroke-width:2.5"${ex(o)}/>`;
A.spacer = (x,y,w,h,o) => { w = w || 16; h = h || 12; return A.poly([[x-w/2,y],[x+w/2,y],[x+w*.3,y-h],[x-w*.3,y-h]],'beton',o); };

// mur, drewno, dach, instalacje, okno — płaskie, kolorowe
A.blocks = (x,y,w,h,bw,bh,mat,o) => {
  let d = '', row = 0;
  for (let yy = y+h; yy > y+.5; yy -= bh, row++){
    if (yy < y+h) d += `M${x} ${r1(yy)}H${x+w}`;
    for (let xx = x + (row % 2 ? bw/2 : bw); xx < x+w-1; xx += bw) d += `M${r1(xx)} ${r1(yy)}V${r1(Math.max(y, yy-bh))}`;
  }
  return `<g${ex(o)}>` + A.rect(x,y,w,h,mat || 'bloczek',{r:1}) + A.line(d,'il-jt') + '</g>';
};
A.board = (x,y,w,h,o) => A.rect(x,y,w,h,'drewno',Object.assign({r:1.5},o)) + A.line(h > w ? `M${r1(x+w*.35)} ${y+4}V${y+h-4}` : `M${x+4} ${r1(y+h*.4)}H${x+w-4}`,'il-jt');
A.batten = (x,y,w,h,o) => A.rect(x,y,w,h||w,'drewno',Object.assign({r:1.5},o));
A.tiles = (x,y,w,n,o) => { let s = ''; const tw = w/n; for (let i = 0; i < n; i++) s += `<path class="il-m c-dachowka" d="M${r1(x+i*tw)} ${y}h${r1(tw)}v14q${r1(-tw/2)} 7 ${r1(-tw)} 0z"/>`; return `<g${ex(o)}>${s}</g>`; };
A.pipe = (p,d,kind,o) => `<path class="il-pipe p-${kind || 'woda'}" d="${pts(p)}" style="stroke-width:${d || 10}"${ex(o)}/>`;
A.cable = (p,color,o) => `<path class="il-cab" d="${pts(p)}" style="stroke:${color || 'var(--il-line)'}"${ex(o)}/>`;
A.window = (x,y,w,h,o) => `<g${ex(o)}>${A.rect(x,y,w,h,'blacha',{r:3})}${A.rect(x+6,y+6,w-12,h-12,'szklo',{r:2})}<path class="il-shine" d="M${x+14} ${y+h-16}L${x+w*.5} ${y+12}"/></g>`;

// ludzie: postać (stopy w x,y; o = {s, kneel, arms:[kąt tylnej, kąt przedniej] od pionu w stronę patrzenia, flip, kask, hold})
A.person = (x,y,o) => {
  o = o || {}; const k = o.kneel, top = k ? -60 : -76, a = o.arms || [10, 20];
  const legs = k ? 'M2 -30L17 -28L17 0M-2 -30L-6 -3L-22 -3' : 'M-4 -44V-2M4 -44V-2';
  const arm = (ang,sx) => { const r = ang*Math.PI/180, ex2 = r1(sx + Math.sin(r)*30), ey = r1(top+8 + Math.cos(r)*30); return [`M${sx} ${top+8}L${ex2} ${ey}`, ex2, ey]; };
  const b = arm(a[0], -3), f = arm(a[1], 3);
  return `<g transform="translate(${r1(x)} ${r1(y)}) scale(${(o.flip ? -1 : 1)*(o.s || 1)} ${o.s || 1})"${ex(o)}>` + A.shadow(0,0,22,5) +
    `<path class="il-arm" d="${b[0]}"/><circle cx="${b[1]}" cy="${b[2]}" r="4.6" class="il-skin"/>` +
    `<path class="il-leg" d="${legs}"/>` + (k ? '<path class="il-shoe" d="M13 0h12M-26 -1h6"/>' : '<path class="il-shoe" d="M-8 0h7M3 0h9"/>') +
    `<rect x="-12" y="${top}" width="24" height="${k ? 32 : 34}" rx="9" class="il-shirt"/>` +
    `<circle cx="0" cy="${top-12}" r="10.5" class="il-skin"/><circle cx="5" cy="${top-13}" r="1.3" class="il-eye"/>` +
    (o.kask === false ? `<path class="il-hair" d="M-10 ${top-14}a10.5 10.5 0 0 1 21 -2q-9 -3 -15 2z"/>` : `<path class="il-helmet" d="M-11.5 ${top-14}a11.5 11.5 0 0 1 23 0h3v3h-29z"/>`) +
    `<path class="il-arm" d="${f[0]}"/><circle cx="${f[1]}" cy="${f[2]}" r="4.6" class="il-skin"/>` +
    (o.hold ? `<g transform="translate(${f[1]} ${f[2]})">${o.hold}</g>` : '') + '</g>';
};
// dłoń w zbliżeniu: nadgarstek u góry, palce w dół; o = {r: obrót, s, hold: element w palcach (współrzędne od czubka)}
A.hand = (x,y,o) => { o = o || {};
  return `<g transform="translate(${r1(x)} ${r1(y)}) rotate(${o.r || 0}) scale(${o.s || 1})"${ex(o)}>` + (o.hold ? `<g transform="translate(0 8)">${o.hold}</g>` : '') +
    `<rect x="-17" y="-78" width="34" height="44" rx="7" class="il-shirt"/><path class="il-cuff" d="M-16 -38h32"/>` +
    `<path class="il-skin" d="M-14 -36H14V-6Q14 8 0 8Q-14 8 -14 -6Z"/><path class="il-skin" d="M13 -28q11 3 8 15q-3 5 -8 1Z"/>` +
    `<path class="il-fing" d="M-6 -6V3M1 -6V5M8 -8V1"/></g>`;
};

// narzędzia (x,y = punkt chwytu, s = skala)
const tool = (inner,x,y,s,o) => `<g transform="translate(${r1(x)} ${r1(y)}) scale(${s || 1})"${ex(o)}>${inner}</g>`;
A.trowel = (x,y,s,o) => tool('<path class="il-m c-blacha" d="M-4 6L28 0L22 22Z"/><path class="il-ln" d="M0 4L-6 -6" style="stroke-width:2.5"/><rect x="-14" y="-16" width="16" height="8" rx="4" transform="rotate(-30)" class="il-m c-drewno"/>',x,y,s,o);
A.level = (x,y,len,o) => `<g${ex(o)}>${A.rect(x,y,len,12,'poziomica',{r:3})}<rect x="${r1(x+len/2-10)}" y="${y+3}" width="20" height="6" rx="3" class="il-m c-szklo"/><circle cx="${r1(x+len/2+2)}" cy="${y+6}" r="2" class="il-m c-papier"/></g>`;
A.drill = (x,y,s,o) => tool('<path class="il-m c-maszyna" d="M-6 -10H26Q34 -10 34 -2Q34 6 26 6H16L14 28H2L4 6H-6Z"/><rect x="-14" y="-7" width="9" height="10" rx="2" class="il-m c-blacha"/><path class="il-ln" d="M-30 -2H-14" style="stroke-width:2.5"/><rect x="1" y="26" width="15" height="7" rx="2" class="il-m c-kmb"/>',x,y,s,o);
A.mixer = (x,y,s,o) => tool('<path class="il-ln" d="M-14 10L-22 44M14 10L22 44" style="stroke-width:3"/><circle cx="-22" cy="46" r="6" class="il-m c-kmb"/><path class="il-m c-maszyna" d="M-22 -4Q-26 -30 0 -36Q26 -30 22 -4Q20 14 0 16Q-20 14 -22 -4Z"/><ellipse cx="0" cy="-36" rx="11" ry="4" class="il-m c-kmb"/><path class="il-shine" d="M-14 -10Q-14 -24 -4 -28"/>',x,y,s,o);
A.shovel = (x,y,s,o) => tool('<path class="il-ln" d="M0 -40V20" style="stroke:var(--il-wood-d);stroke-width:4"/><path class="il-ln" d="M-7 -40H7" style="stroke-width:3"/><path class="il-m c-blacha" d="M-10 18H10V32Q0 46 -10 32Z"/>',x,y,s,o);
A.brush = (x,y,s,o) => tool('<rect x="-3" y="-34" width="6" height="26" rx="3" class="il-m c-drewno"/><rect x="-10" y="-10" width="20" height="7" rx="2" class="il-m c-blacha"/><path class="il-m c-kmb" d="M-10 -3H10L8 14Q0 18 -8 14Z"/>',x,y,s,o);

// opisy: krótki podpis (pigułka), kluczowa liczba (akcent), miara ze strzałkami, podpis z miękkim wskaźnikiem
A.pill = (x,y,t,o) => { o = o || {}; return `<g class="il-pill${o.acc ? ' acc' : ''}${o.k ? ' il-c' : ''}"${o.k ? ` tabindex="0"` : ''}${ex(o)}><rect x="${r1(x)}" y="${r1(y-14)}" width="0" height="28" rx="14"/><text x="${r1(x)}" y="${r1(y+5)}" text-anchor="${o.a || 'middle'}">${t}</text></g>`; };
A.num = (x,y,t,o) => A.pill(x,y,t,Object.assign({acc:1},o));
A.callout = (k,ax,ay,tx,ty,t,o) => {
  o = o || {}; const L = tx < ax, e = L ? tx+12 : tx-12, mx = (ax+e)/2;
  return `<g class="il-c${o.hot ? ' hot' : ''}" data-k="${k}" tabindex="0"${ex({d:o.d})}><path class="il-ptr" d="M${r1(ax)} ${r1(ay)}Q${r1(mx)} ${r1(ty)} ${r1(e)} ${r1(ty)}"/><circle cx="${r1(ax)}" cy="${r1(ay)}" r="3.5" class="il-dot"/>` +
    A.pill(tx, ty, t, {a: L ? 'end' : 'start', acc: o.hot}) + (o.sub ? A.text(tx, ty+28, o.sub, {s:1, a: L ? 'end' : 'start'}) : '') + '</g>';
};
A.dim = (x1,y1,x2,y2,t,o) => { const ah = (x,y,ang) => `M${r1(x)} ${r1(y)}l${r1(Math.cos(ang+.5)*8)} ${r1(Math.sin(ang+.5)*8)}M${r1(x)} ${r1(y)}l${r1(Math.cos(ang-.5)*8)} ${r1(Math.sin(ang-.5)*8)}`;
  const g = Math.atan2(y2-y1,x2-x1);
  return `<g${ex(o)}><path class="il-meas" d="M${r1(x1)} ${r1(y1)}L${r1(x2)} ${r1(y2)}${ah(x1,y1,g)}${ah(x2,y2,g+Math.PI)}"/>` + (t ? A.num((x1+x2)/2 + (o && o.dx || 0), (y1+y2)/2 + (o && o.dy || 0), t) : '') + '</g>'; };
A.measure = A.dim;
A.arrow = (p,o) => { // miękka strzałka ruchu przez punkty [[x,y],[cx,cy],[x2,y2]]
  const [a,c,b] = p.length > 2 ? p : [p[0],[(p[0][0]+p[1][0])/2,(p[0][1]+p[1][1])/2],p[1]];
  const g = Math.atan2(b[1]-c[1], b[0]-c[0]);
  return `<path class="il-arr draw" d="M${a[0]} ${a[1]}Q${c[0]} ${c[1]} ${b[0]} ${b[1]}M${r1(b[0]-Math.cos(g-.55)*11)} ${r1(b[1]-Math.sin(g-.55)*11)}L${b[0]} ${b[1]}L${r1(b[0]-Math.cos(g+.55)*11)} ${r1(b[1]-Math.sin(g+.55)*11)}"${ex(o)}/>`;
};
A.marker = (x,y,n,o) => `<g class="il-mk"${ex(o)}><circle cx="${x}" cy="${y}" r="12"/><text x="${x}" y="${y+5}" text-anchor="middle">${n}</text></g>`;

// dobrze / źle: znaczek ✓ albo ✗
A.ok = (x,y,r,o) => `<g class="il-ok"${ex(o)}><circle cx="${x}" cy="${y}" r="${r || 14}"/><path d="M${x-(r||14)*.42} ${y}l${(r||14)*.3} ${(r||14)*.32} ${(r||14)*.5} -${(r||14)*.62}"/></g>`;
A.bad = (x,y,r,o) => { const q = (r || 14)*.36; return `<g class="il-bad"${ex(o)}><circle cx="${x}" cy="${y}" r="${r || 14}"/><path d="M${x-q} ${y-q}l${2*q} ${2*q}M${x+q} ${y-q}l-${2*q} ${2*q}"/></g>`; };
A.drops = (x,y,n,o) => { let s = ''; for (let i = 0; i < (n || 3); i++) s += `<path class="il-m c-woda" d="M${x+i*11} ${y+(i%2)*7}q-5 7 0 9q5 -2 0 -9z"/>`; return `<g${ex(o)}>${s}</g>`; };
A.rust = (x,y,o) => `<g class="il-rust"${ex(o)}><circle cx="${x}" cy="${y}" r="3"/><circle cx="${x+9}" cy="${y+3}" r="2.2"/><circle cx="${x+4}" cy="${y+7}" r="1.6"/></g>`;

// dokument: karta z zagiętym rogiem; o = {stamp, lines, icon, k}
A.doc = (x,y,w,h,o) => { o = o || {}; let ln = '';
  for (let i = 0; i < (o.lines || 3); i++) ln += `M${x+8} ${y+h*.42+i*8}h${r1((w-16)*(i % 2 ? .65 : 1))}`;
  return `<g${ex(o)}>${A.shadow(x+w/2,y+h+3,w*.55,4)}<path class="il-m c-papier" d="M${x} ${y+4}q0 -4 4 -4H${x+w-12}L${x+w} ${y+12}V${y+h-4}q0 4 -4 4H${x+4}q-4 0 -4 -4Z"/><path class="il-fold" d="M${x+w-12} ${y}V${y+12}H${x+w}"/>` +
    `<path class="il-docl" d="M${x+8} ${y+12}h${r1((w-24)*.6)}" style="stroke-width:3"/><path class="il-docl" d="${ln}"/>` + (o.icon || '') +
    (o.stamp ? `<g transform="rotate(-14 ${x+w-12} ${y+h-12})"><circle cx="${x+w-12}" cy="${y+h-12}" r="10" class="il-stamp"/><path class="il-stamp" d="M${x+w-17} ${y+h-12}l4 4 6 -8"/></g>` : '') + '</g>'; };

// droga z przystankami (infografiki procesu)
A.road = (d,o) => `<g${ex(o)}><path class="il-road draw" d="${d}"/><path class="il-road-c" d="${d}"/></g>`;
A.stop = (x,y,n,o) => `<g class="il-stop"${ex(o)}>${A.shadow(x,y+22,20,5)}<circle cx="${x}" cy="${y}" r="21"/>${o && o.icon ? o.icon : `<text x="${x}" y="${y+6}" text-anchor="middle">${n}</text>`}</g>`;
A.icon = (name,x,y,s) => tool(ICONS[name] || '',x,y,s);
const ICONS = {
  mapa:'<path class="il-m c-papier" d="M-12 -9l8 -3 8 3 8 -3v20l-8 3 -8 -3 -8 3z"/><path class="il-ln" d="M-4 -12v20M4 -9v20"/><circle cx="6" cy="-2" r="3" class="il-m c-bad"/>',
  projekt:'<path class="il-m c-papier" d="M-12 -12h24v24h-24z"/><path class="il-ln" d="M-7 6V-1L0 -7L7 -1V6ZM-2 6V1h4v5"/>',
  prad:'<path class="il-m c-poziomica" d="M3 -13L-8 2h7l-3 11L9 -2H2z"/>',
  urzad:'<path class="il-m c-papier" d="M-13 -4L0 -12L13 -4ZM-12 10h24v3h-24zM-9 -2h3v11h-3zM-1.5 -2h3v11h-3zM6 -2h3v11h-3z"/>',
  kask:'<path class="il-helmet" d="M-12 4a12 12 0 0 1 24 0h3v4h-30z"/><path class="il-ln" d="M0 -8v6"/>',
  kalendarz:'<rect x="-11" y="-10" width="22" height="21" rx="3" class="il-m c-papier"/><path class="il-m c-bad" d="M-11 -7q0 -3 3 -3h16q3 0 3 3v4h-22z"/><path class="il-ln" d="M-5 3h3M2 3h3M-5 7h3"/>'
};

/* ---------- Montaż ---------- */
let fullFig = null, home = null;
const wrap = s => /^\s*<svg/i.test(s) ? s : A.svg(s);
function resolve(def){
  let d = typeof def === 'function' ? def(A) : def;
  if (!d) return null;
  if (typeof d === 'string') d = {frames:[{svg:d}]};
  else if (!d.frames) d = {caption:d.caption, frames:[{svg:d.svg, caption:null}]};
  d.frames = d.frames.filter(f => f && f.svg).map(f => ({caption:f.caption || '', svg: wrap(typeof f.svg === 'function' ? f.svg(A) : f.svg)}));
  return d.frames.length ? d : null;
}
const ICO = {play:'<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 2.5v11l9.5-5.5z"/></svg>',
  pause:'<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3.5 2.5h3.2v11H3.5zM9.3 2.5h3.2v11H9.3z"/></svg>',
  again:'<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M8 2.5a5.5 5.5 0 1 1-5.2 3.7" style="fill:none;stroke:currentColor;stroke-width:1.8"/><path d="M1.5 2.5l1.4 4.3 4.2-1.6z"/></svg>'};

function mount(fig, def){
  const d = resolve(def);
  if (!d){ fig.remove(); return; }
  const n = d.frames.length, seq = n > 1;
  fig.classList.add('viz', 'il');
  fig.innerHTML = `<div class="il-sheet">
    <div class="il-vp" tabindex="0" aria-label="Ilustracja. Ctrl + kółko przybliża, dwuklik powiększa${seq ? ', strzałki zmieniają klatkę' : ''}"><div class="il-stack">${d.frames.map((f,i) => `<div class="il-fr" data-i="${i}">${f.svg}</div>`).join('')}</div></div>
    <div class="il-ctl">${seq ? `<button type="button" class="il-play" aria-label="Odtwórz sekwencję">${ICO.play}</button>
      <span class="il-dots">${d.frames.map((f,i) => `<button type="button" data-i="${i}" aria-label="Klatka ${i+1}: ${f.caption.replace(/<[^>]+>/g,'').replace(/"/g,'&quot;')}"></button>`).join('')}</span>` : ''}
      <p class="il-fcap" aria-live="polite"></p>
      <button type="button" class="il-tool" aria-pressed="false" title="Pełny ekran (Esc zamyka)">Pełny ekran</button></div>
  </div>${d.caption ? `<figcaption>${d.caption}</figcaption>` : ''}`;
  const $ = s => fig.querySelector(s), frs = Array.from(fig.querySelectorAll('.il-fr')), vp = $('.il-vp'), stack = $('.il-stack');
  fitPills(fig);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => fitPills(fig));
  const cap = $('.il-fcap'), play = $('.il-play'), dots = Array.from(fig.querySelectorAll('.il-dots button'));
  let cur = -1, timer = null, pinned = null;

  function show(i, draw){
    if (i === cur) return;
    if (cur > -1 && frs[cur].getAnimations) frs[cur].getAnimations({subtree:true}).forEach(a => a.finish());
    cur = i; pinned = null; hl(null);
    frs.forEach((f,j) => { f.classList.toggle('on', j === i); f.setAttribute('aria-hidden', j !== i); });
    dots.forEach((b,j) => b.setAttribute('aria-current', j === i));
    const c = d.frames[i].caption;
    cap.innerHTML = c ? (seq ? `<b>${i+1}/${n}</b>` : '') + c : '';
    cap.hidden = !c;
    if (draw !== false) animateIn(frs[i]);
  }
  function setPlay(s){ if (!play) return; play.innerHTML = ICO[s]; play.setAttribute('aria-label', s === 'pause' ? 'Zatrzymaj' : s === 'again' ? 'Odtwórz od początku' : 'Odtwórz sekwencję'); }
  function stop(){ clearTimeout(timer); timer = null; setPlay(cur === n-1 ? 'again' : 'play'); }
  function tick(){
    if (!fig.isConnected){ stop(); return; }
    if (cur >= n-1){ stop(); return; }
    show(cur+1); timer = setTimeout(tick, still() ? 4200 : 3400);
  }
  if (play) play.onclick = () => {
    if (timer){ stop(); return; }
    if (cur >= n-1) show(0); else show(cur+1);
    setPlay('pause'); timer = setTimeout(tick, still() ? 4200 : 3400);
  };
  dots.forEach(b => b.onclick = () => { if (timer) stop(); show(+b.dataset.i); setPlay(cur === n-1 ? 'again' : 'play'); });

  // podświetlanie podpisów: najechanie lub fokus, na dotyku kliknięcie przypina
  function hl(k){
    stack.classList.toggle('il-focus', !!k);
    fig.querySelectorAll('[data-k]').forEach(e => e.classList.toggle('on', !!k && e.getAttribute('data-k') === k));
  }
  const keyOf = e => { const t = e.target.closest && e.target.closest('[data-k]'); return t && stack.contains(t) ? t.getAttribute('data-k') : null; };
  stack.addEventListener('pointerover', e => { const k = keyOf(e); if (k) hl(k); });
  stack.addEventListener('pointerout', e => { if (keyOf(e)) hl(pinned); });
  stack.addEventListener('focusin', e => { const k = keyOf(e); if (k) hl(k); });
  stack.addEventListener('focusout', () => hl(pinned));
  stack.addEventListener('click', e => { const k = keyOf(e); pinned = k && pinned !== k ? k : null; hl(pinned); });
  stack.addEventListener('keydown', e => { if ((e.key === 'Enter' || e.key === ' ') && keyOf(e)){ e.preventDefault(); const k = keyOf(e); pinned = pinned === k ? null : k; hl(pinned); } });

  const pz = zoomer(vp, stack, fig);
  vp.addEventListener('keydown', e => {
    if (!seq || e.target !== vp) return;
    if (e.key === 'ArrowRight' && cur < n-1){ e.preventDefault(); if (timer) stop(); show(cur+1); }
    if (e.key === 'ArrowLeft' && cur > 0){ e.preventDefault(); if (timer) stop(); show(cur-1); }
  });
  const fb = $('.il-tool');
  fb.onclick = () => setFull(fig, fullFig !== fig, pz);

  show(0, false);
  // pierwsza klatka rysuje się, gdy figura wejdzie w kadr
  if ('IntersectionObserver' in window){
    const io = new IntersectionObserver(es => { if (es[0].isIntersecting){ io.disconnect(); animateIn(frs[0]); } }, {threshold:.35});
    io.observe(fig);
  } else animateIn(frs[0]);
}

// pigułki z podpisami: tło dopasowane do szerokości napisu (po załadowaniu fontu jeszcze raz)
function fitPills(fig){
  fig.querySelectorAll('.il-pill').forEach(g => {
    const t = g.querySelector('text'), r = g.querySelector('rect'); let b;
    try { b = t.getBBox(); } catch(e){ return; }
    if (!b.width) return;
    r.setAttribute('x', r1(b.x - 11)); r.setAttribute('width', r1(b.width + 22));
    // pigułka nie wychodzi poza rysunek: przesunięcie do krawędzi
    const vb = g.ownerSVGElement && g.ownerSVGElement.viewBox.baseVal, W = vb && vb.width;
    if (!W) return;
    const x0 = b.x - 11, x1 = b.x + b.width + 11, dx = x0 < 4 ? 4 - x0 : x1 > W - 4 ? W - 4 - x1 : 0;
    g.setAttribute('transform', dx ? `translate(${r1(dx)} 0)` : '');
  });
}
// ruch przy pokazaniu klatki: .nw wyskakuje, [data-from] wjeżdża z przesunięcia, .draw rysuje się kreską
function animateIn(fr){
  if (still() || !fr) return;
  let i = 0;
  fr.querySelectorAll('.nw').forEach(el => {
    el.style.transformBox = 'fill-box'; el.style.transformOrigin = '50% 100%';
    el.animate([{opacity:0, transform:'scale(.6)'},{opacity:1, transform:'none'}], {duration:520, delay: 200 + i++*140 + (+el.dataset.d || 0), easing:SPRING, fill:'backwards'});
  });
  fr.querySelectorAll('[data-from]').forEach(el => {
    const q = el.dataset.from.split(' ').map(Number);
    el.animate([{transform:`translate(${q[0]}px,${q[1]}px)`},{transform:'none'}], {duration:1100, delay: 250 + (+el.dataset.d || 0), easing:OUT, fill:'backwards'});
  });
  fr.querySelectorAll('.draw').forEach(el => {
    let len = 0; try { len = el.getTotalLength(); } catch(e){}
    if (!len) return;
    el.animate([{strokeDasharray:`${len} ${len}`, strokeDashoffset:len},{strokeDasharray:`${len} ${len}`, strokeDashoffset:0}], {duration:900, delay: 300 + (+el.dataset.d || 0), easing:OUT, fill:'backwards'});
  });
  fr.querySelectorAll('.il-c[data-d], .il-ok, .il-bad').forEach(el => {
    el.animate([{opacity:0},{opacity:1}], {duration:400, delay: 700 + (+el.dataset.d || 0), easing:'ease-out', fill:'backwards'});
  });
}

/* ---------- Przybliżanie (jak w viz: Ctrl + kółko, dwuklik, przeciąganie po przybliżeniu) ---------- */
function zoomer(vp, tgt, fig){
  const s = {k:1, x:0, y:0}; let drag = null, moved = false;
  const apply = () => {
    const w = vp.clientWidth, h = vp.clientHeight;
    s.x = Math.min(0, Math.max(w - w*s.k, s.x)); s.y = Math.min(0, Math.max(h - h*s.k, s.y));
    vp.classList.toggle('il-zoomed', s.k > 1.001);
    tgt.style.transform = s.k > 1.001 ? `translate(${r1(s.x)}px,${r1(s.y)}px) scale(${Math.round(s.k*1000)/1000})` : '';
  };
  const at = (k,px,py) => { k = Math.max(1, Math.min(4, k)); s.x = px - (px - s.x)*k/s.k; s.y = py - (py - s.y)*k/s.k; s.k = k; apply(); };
  const loc = e => { const r = vp.getBoundingClientRect(); return [e.clientX - r.left, e.clientY - r.top]; };
  const api = { fit(){ s.k = 1; s.x = s.y = 0; apply(); } };
  vp.addEventListener('wheel', e => {
    if (!fig.classList.contains('il-full') && !e.ctrlKey) return;
    e.preventDefault(); const [px,py] = loc(e);
    at(s.k*Math.exp(-e.deltaY*(e.deltaMode === 1 ? .05 : e.ctrlKey ? .01 : .0016)), px, py);
  }, {passive:false});
  vp.addEventListener('dblclick', e => { const [px,py] = loc(e); if (s.k > 2.5) api.fit(); else at(s.k*2, px, py); });
  vp.addEventListener('pointerdown', e => { if (s.k > 1.001 && (e.pointerType !== 'mouse' || e.button === 0)){ drag = {x:e.clientX, y:e.clientY, sx:s.x, sy:s.y}; moved = false; } });
  vp.addEventListener('pointermove', e => {
    if (!drag) return; const dx = e.clientX - drag.x, dy = e.clientY - drag.y;
    if (!moved && Math.hypot(dx,dy) > 4){ moved = true; vp.classList.add('il-drag'); try { vp.setPointerCapture(e.pointerId); } catch(_){} }
    if (moved){ s.x = drag.sx + dx; s.y = drag.sy + dy; apply(); }
  });
  const up = () => { drag = null; vp.classList.remove('il-drag'); setTimeout(() => { moved = false; }, 0); };
  vp.addEventListener('pointerup', up); vp.addEventListener('pointercancel', up);
  vp.addEventListener('click', e => { if (moved){ e.stopPropagation(); e.preventDefault(); } }, true);
  vp.addEventListener('keydown', e => {
    if (e.key === '+' || e.key === '=') at(s.k*1.4, vp.clientWidth/2, vp.clientHeight/2);
    else if (e.key === '-') at(s.k/1.4, vp.clientWidth/2, vp.clientHeight/2);
    else if (e.key === '0') api.fit(); else return;
    e.preventDefault();
  });
  return api;
}

// pełny ekran: figura przenosi się do <body> (przodek z transform przyciąłby position:fixed)
function setFull(fig, on, pz){
  if (on && fullFig) setFull(fullFig, false);
  const b = fig.querySelector('.il-tool');
  if (on){ home = document.createComment('illus'); fig.parentNode.insertBefore(home, fig); document.body.appendChild(fig); fullFig = fig; fig._pz = pz; }
  else { if (home && home.parentNode){ home.parentNode.insertBefore(fig, home); home.remove(); } home = null; fullFig = null; }
  fig.classList.toggle('il-full', on);
  document.documentElement.classList.toggle('vz-lock', on);
  b.setAttribute('aria-pressed', on); b.textContent = on ? 'Zamknij' : 'Pełny ekran';
  (pz || fig._pz).fit();
  b.focus({preventScroll:true});
}
document.addEventListener('keydown', e => { if (fullFig && e.key === 'Escape'){ e.stopPropagation(); setFull(fullFig, false); } }, true);

return { mount: mount, lib: A };
})();
