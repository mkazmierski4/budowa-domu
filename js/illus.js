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

// ludzie: postać (stopy w x,y; o = {s, kneel, sit, chair, arms:[kąt tylnej, kąt przedniej] od pionu w stronę patrzenia, flip, kask, hold})
// sit: siedzi na krześle (siedzisko na wys. 30, głowa ok. 12 niżej niż u stojącej); chair:false bez krzesła.
// Postać i dłoń mają data-guard: podpisy ich omijają (arrange) i przegląd zgłasza zasłonięcie.
A.person = (x,y,o) => {
  o = o || {}; const k = o.kneel, st = o.sit, top = k ? -60 : st ? -64 : -76, a = o.arms || (st ? [20, 70] : [10, 20]);
  const legs = k ? 'M2 -30L17 -28L17 0M-2 -30L-6 -3L-22 -3' : st ? 'M-3 -30H14V-2' : 'M-4 -44V-2M4 -44V-2';
  const arm = (ang,sx) => { const r = ang*Math.PI/180, ex2 = r1(sx + Math.sin(r)*30), ey = r1(top+8 + Math.cos(r)*30); return [`M${sx} ${top+8}L${ex2} ${ey}`, ex2, ey]; };
  const b = arm(a[0], -3), f = arm(a[1], 3);
  const chair = st && o.chair !== false ? '<path class="il-ln" d="M-12 -24V0M9 -24V0" style="stroke-width:3"/><rect x="-16" y="-30" width="28" height="6" rx="2" class="il-m c-drewno"/><rect x="-19" y="-62" width="6" height="38" rx="2" class="il-m c-drewno"/>' : '';
  return `<g transform="translate(${r1(x)} ${r1(y)}) scale(${(o.flip ? -1 : 1)*(o.s || 1)} ${o.s || 1})"${ex(o)}>` + A.shadow(0,0,22,5) + chair +
    `<g data-guard="postać"><path class="il-arm" d="${b[0]}"/><circle cx="${b[1]}" cy="${b[2]}" r="4.6" class="il-skin"/>` +
    `<path class="il-leg" d="${legs}"/>` + (k ? '<path class="il-shoe" d="M13 0h12M-26 -1h6"/>' : st ? '<path class="il-shoe" d="M12 0h9"/>' : '<path class="il-shoe" d="M-8 0h7M3 0h9"/>') +
    `<rect x="-12" y="${top}" width="24" height="${k ? 32 : 34}" rx="9" class="il-shirt"/>` +
    `<circle cx="0" cy="${top-12}" r="10.5" class="il-skin"/><circle cx="5" cy="${top-13}" r="1.3" class="il-eye"/>` +
    (o.kask === false ? `<path class="il-hair" d="M-10 ${top-14}a10.5 10.5 0 0 1 21 -2q-9 -3 -15 2z"/>` : `<path class="il-helmet" d="M-11.5 ${top-14}a11.5 11.5 0 0 1 23 0h3v3h-29z"/>`) +
    `<path class="il-arm" d="${f[0]}"/><circle cx="${f[1]}" cy="${f[2]}" r="4.6" class="il-skin"/></g>` +
    (o.hold ? `<g transform="translate(${f[1]} ${f[2]})">${o.hold}</g>` : '') + '</g>';
};
// dłoń w zbliżeniu: nadgarstek u góry, palce w dół; o = {r: obrót, s, hold: element w palcach (współrzędne od czubka)}
A.hand = (x,y,o) => { o = o || {};
  return `<g transform="translate(${r1(x)} ${r1(y)}) rotate(${o.r || 0}) scale(${o.s || 1})" data-guard="dłoń"${ex(o)}>` + (o.hold ? `<g transform="translate(0 8)">${o.hold}</g>` : '') +
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
A.pill = (x,y,t,o) => { o = o || {}; return `<g class="il-pill${o.acc ? ' acc' : ''}${o.fix ? ' il-fix' : ''}${o.k ? ' il-c' : ''}"${o.k ? ` tabindex="0"` : ''}${ex(o)}><rect x="${r1(x)}" y="${r1(y-14)}" width="0" height="28" rx="14"/><text x="${r1(x)}" y="${r1(y+5)}" text-anchor="${o.a || 'middle'}">${t}</text></g>`; };
A.num = (x,y,t,o) => A.pill(x,y,t,Object.assign({acc:1},o));
// callout: kropka na obiekcie (ax,ay) + pigułka; linia odniesienia jest przeliczana po dopasowaniu i rozsunięciu (relink)
const co = (k,ax,ay,tx,ty,t,al,o) => { o = o || {}; const e = al === 'end' ? tx+12 : tx-12, mx = (ax+e)/2;
  return `<g class="il-c${o.hot ? ' hot' : ''}" data-k="${k}" data-ax="${r1(ax)}" data-ay="${r1(ay)}" tabindex="0"${ex({d:o.d})}><path class="il-ptr" d="M${r1(ax)} ${r1(ay)}Q${r1(mx)} ${r1(ty)} ${r1(e)} ${r1(ty)}"/><circle cx="${r1(ax)}" cy="${r1(ay)}" r="3.5" class="il-dot"/>` +
    `<g class="il-lab">${A.pill(tx, ty, t, {a: al, acc: o.hot})}${o.sub ? A.text(tx, ty+28, o.sub, {s:1, a: al}) : ''}</g></g>`; };
A.callout = (k,ax,ay,tx,ty,t,o) => co(k,ax,ay,tx,ty,t,tx < ax ? 'end' : 'start',o);
// tekst w kształcie (pasek, tabliczka): mieści się sam — mniejsza czcionka (min. 11 px), dwie linie albo podpis pod spodem z linią
A.label = (x,y,w,h,t,mat,o) => { o = o || {};
  return `<g class="il-fit"${ex(o)}>${A.rect(x,y,w,h,mat || 'papier',{r: o.r != null ? o.r : 8})}<text class="il-t il-tb" x="${r1(x+w/2)}" y="${r1(y+h/2+5)}" text-anchor="middle" data-w="${r1(w)}" data-h="${r1(h)}">${t}</text></g>`; };
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

/* ---------- Gotowe obiekty sceny: x,y = środek podstawy (stoi na ziemi, ma cień), s = skala ---------- */
const at = (x,y,s,o,inner,sh) => `<g transform="translate(${r1(x)} ${r1(y)})${s && s !== 1 ? ` scale(${s})` : ''}"${ex(o)}>${sh ? A.shadow(0,0,sh,sh*.13) : ''}${inner}</g>`;
A.house = (x,y,s,o) => at(x,y,s,o, A.rect(-55,-60,110,60,(o && o.mat) || 'bloczek',{r:1}) + A.poly([[-66,-57],[0,-106],[66,-57]],'dachowka') +
  A.window(-46,-48,30,28) + A.window(16,-48,30,28) + A.rect(-9,-36,18,36,'drewno',{r:1}), 74);
A.shield = (x,y,s,o) => tool('<path class="il-m c-ok" d="M0 -30Q14 -22 26 -24Q28 12 0 30Q-28 12 -26 -24Q-14 -22 0 -30Z"/><path class="il-chk" d="M-11 0l8 9 15 -17"/>',x,y,s,o);  // x,y = środek
A.magnifier = (x,y,s,o) => tool('<path class="il-ln" d="M12 12L30 30" style="stroke:var(--il-kmb);stroke-width:7"/><circle r="17" class="il-m c-szklo"/><circle r="17" class="il-ring"/><path class="il-shine" d="M-9 -4Q-8 -10 -2 -11"/>',x,y,s,o);  // x,y = środek szkła
A.circle = (cx,cy,r,o) => `<circle cx="${r1(cx)}" cy="${r1(cy)}" r="${r1(r)}" class="il-zone"${ex(o)}/>`;  // przerywany obszar
A.excavator = (x,y,s,o) => at(x,y,s,o, '<rect x="-52" y="-18" width="92" height="18" rx="9" class="il-m c-kmb"/><circle cx="-40" cy="-9" r="5" class="il-m c-blacha"/><circle cx="28" cy="-9" r="5" class="il-m c-blacha"/>' +
  '<rect x="-46" y="-46" width="74" height="28" rx="4" class="il-m c-maszyna"/><rect x="-54" y="-44" width="10" height="22" rx="2" class="il-m c-kmb"/><path class="il-m c-maszyna" d="M-8 -46V-82H17L28 -62V-46Z"/><path class="il-m c-szklo" d="M-2 -52V-76H14L22 -60V-52Z"/>' +
  '<path class="il-boom" d="M24 -42L62 -88L98 -44"/><path class="il-m c-blacha" d="M90 -46L112 -42L106 -18Q92 -14 86 -30Z"/>', 72);
A.mixerTruck = (x,y,s,o) => at(x,y,s,o, '<rect x="-74" y="-30" width="146" height="10" rx="3" class="il-m c-kmb"/><path class="il-m c-maszyna" d="M40 -30V-66H62L74 -46V-30Z"/><path class="il-m c-szklo" d="M46 -60H60L67 -46H46Z"/>' +
  '<path class="il-m c-blacha" d="M-70 -44Q-72 -72 -40 -80L22 -68Q36 -52 22 -34L-52 -30Q-68 -32 -70 -44Z"/><path class="il-jt" d="M-44 -78L-34 -32M-22 -74L-12 -31M0 -71L8 -33"/><path class="il-ln" d="M-72 -40L-86 -22" style="stroke-width:4"/>' +
  [-50,-24,54].map(c => `<circle cx="${c}" cy="-11" r="11" class="il-m c-kmb"/><circle cx="${c}" cy="-11" r="4" class="il-m c-blacha"/>`).join(''), 82);
A.crane = (x,y,s,o) => { let z = ''; for (let h = 0; h < 216; h += 18) z += `M-8 ${-h}L8 ${-h-18}M8 ${-h}L-8 ${-h-18}`;
  return at(x,y,s,o, `<rect x="-22" y="-10" width="44" height="10" rx="2" class="il-m c-beton"/><path class="il-mast" d="M-8 -10V-226M8 -10V-226${z}"/>` +
    '<path class="il-mast" d="M-60 -226H160M-8 -240H120M8 -240L160 -226M-8 -240L-60 -226"/><rect x="-62" y="-234" width="24" height="16" rx="2" class="il-m c-beton"/><rect x="8" y="-246" width="20" height="18" rx="3" class="il-m c-maszyna"/>' +
    '<path class="il-ln" d="M112 -226V-150"/><path class="il-ln" d="M112 -150q0 8 -6 8" style="stroke-width:3"/>', 30); };
A.tripod = (x,y,s,o) => at(x,y,s,o, '<path class="il-ln" d="M0 -54L-18 0M0 -54L16 0M0 -54L3 2" style="stroke:var(--il-wood-d);stroke-width:3.5"/><rect x="-10" y="-72" width="20" height="16" rx="3" class="il-m c-poziomica"/><circle cx="10" cy="-64" r="4" class="il-m c-szklo"/>', 20);
A.laptop = (x,y,s,o) => tool('<path class="il-m c-blacha" d="M-28 0H28L24 -4H-24Z"/><rect x="-22" y="-36" width="44" height="32" rx="3" class="il-m c-kmb"/><rect x="-19" y="-33" width="38" height="26" rx="2" class="il-m c-szklo"/>',x,y,s,o);  // x,y = środek dolnej krawędzi
// stół / biurko: x,y = środek przy podłodze, w × h; panel: zabudowany przód (zasłania nogi siedzących za nim)
A.table = (x,y,w,h,o) => { o = o || {}; w = w || 160; h = h || 60; const l = x - w/2;
  return `<g${ex(o)}>${A.shadow(x,y,w*.55,6)}${o.panel ? A.rect(l+10,y-h+6,w-20,h-6,'drewno',{r:2,cls:'il-dk'}) : A.rect(l+8,y-h+6,8,h-6,'drewno',{r:1}) + A.rect(l+w-16,y-h+6,8,h-6,'drewno',{r:1})}${A.rect(l,y-h,w,10,'drewno',{r:3})}</g>`; };
A.desk = A.table;
A.container = (x,y,s,o) => { let r = ''; for (let i = -56; i < 32; i += 8) r += `M${i} -52V-8`;
  return at(x,y,s,o, '<rect x="-64" y="-56" width="128" height="52" rx="2" class="il-m c-blacha"/>' + A.line(r,'il-jt') + A.rect(-50,-44,30,20,'szklo') + A.rect(36,-50,22,46,'blacha',{r:1}) +
    '<rect x="-62" y="-5" width="18" height="5" class="il-m c-kmb"/><rect x="44" y="-5" width="18" height="5" class="il-m c-kmb"/>', 70); };
A.toilet = (x,y,s,o) => at(x,y,s,o, '<rect x="-17" y="-74" width="34" height="70" rx="3" class="il-m c-xps"/><path class="il-m c-xps" d="M-19 -73Q0 -86 19 -73Z"/><path class="il-jt" d="M-11 -66V-8H11V-66Z"/><circle cx="7" cy="-36" r="2" class="il-m c-kmb"/><rect x="-20" y="-5" width="40" height="5" class="il-m c-kmb"/>', 22);

/* ---------- Szablony kompozycji (zwracają zawartość <svg> 480 × 320) ---------- */
const lay = A.layout = {};
// scena w środku, podpisy w kolumnach przy lewej i prawej krawędzi; labels = [{t, at:[x,y], side:'l'|'r', y: wysokość pigułki, k, hot, sub}]
lay.scene = (main, labels, o) => {
  o = o || {}; const W = o.w || 480, top = o.top || 34, bot = o.bottom || 292; let s = main;
  ['l','r'].forEach(sd => {
    const c = (labels || []).filter(l => (l.side || (l.at[0] < W/2 ? 'l' : 'r')) === sd).sort((p,q) => p.at[1] - q.at[1]), n = c.length;
    const gap = l => l.sub ? 58 : 40, ys = c.map(l => Math.max(top, Math.min(bot, l.y != null ? l.y : l.at[1])));
    for (let i = 1; i < n; i++) ys[i] = Math.max(ys[i], ys[i-1] + gap(c[i-1]));
    if (n && ys[n-1] > bot){ ys[n-1] = bot; for (let i = n-2; i >= 0; i--) ys[i] = Math.min(ys[i], ys[i+1] - gap(c[i])); }
    c.forEach((l,i) => { s += co(l.k || 's'+sd+i, l.at[0], l.at[1], sd === 'l' ? 25 : W-25, ys[i], l.t, sd === 'l' ? 'start' : 'end', {hot:l.hot, sub:l.sub, d:l.d}); });
  });
  return s;
};
// dobrze / źle obok siebie; okS i badS rysowane w polu 222 × 244 (0,0 = lewy górny róg pola)
lay.compare = (okS, badS, t, o) => { t = t || ['Dobrze', 'Źle'];
  const panel = (x, s, good, title) => `<g class="il-cmp">${A.rect(x,10,222,300,'papier',{r:14,cls:'il-panel'})}<g transform="translate(${x} 56)">${s}</g>` +
    (good ? A.ok(x+28,34,13) : A.bad(x+28,34,13)) + A.pill(x+54,34,title,{a:'start',fix:1}) + '</g>';
  return panel(12, okS, 1, t[0]) + panel(246, badS, 0, t[1]);
};
// oś czasu z odcinków o długości len; kroki = [{t, len, mat, k}], o = {x, y, w, h, title, end:'ok'|'bad'}
lay.timeline = (kroki, o) => {
  o = o || {}; const x0 = o.x != null ? o.x : 40, y = o.y != null ? o.y : 140, W = o.w || 360, h = o.h || 34, tot = kroki.reduce((n,q) => n + (q.len || 1), 0);
  let x = x0, s = o.title ? A.text(x0, y-12, o.title, {b:1}) : '';
  kroki.forEach((q,i) => { const w = (q.len || 1)*W/tot; s += A.fresh(A.label(x, y, w-4, h, q.t, q.mat || (i % 2 ? 'zwir' : 'beton'), {k:q.k}), {d:i*160}); x += w; });
  if (o.end) s += A.fresh((o.end === 'bad' ? A.bad : A.ok)(x+14, y+h/2, 13), {d:kroki.length*160});
  return s;
};
// kroki procesu: koła z ikonami połączone strzałkami; ikony = [{icon: nazwa z ICONS albo SVG, t, k}]
lay.steps = (items, o) => {
  o = o || {}; const y = o.y || 150, x0 = o.x0 || 70, x1 = o.x1 || 410, n = items.length, dx = n > 1 ? (x1-x0)/(n-1) : 0; let s = '';
  items.forEach((it,i) => { const x = x0 + i*dx;
    if (i) s += A.arrow([[x-dx+30, y],[x-30, y]], {d:i*200});
    s += A.fresh(A.stop(x, y, i+1, {icon: it.icon ? (ICONS[it.icon] ? A.icon(it.icon, x, y, 1.15) : it.icon) : null, k:it.k}), {d:i*200});
    if (it.t) s += A.pill(x, n > 4 && i % 2 ? y-52 : y+54, it.t, {k:it.k});
  });
  return s;
};
// ludzie PRZY stole w poprawnej skali; osoby = [{at:'l'|'c'|'r', t: podpis, k, sit, kask, arms}], item = SVG z (0,0) na środku blatu
lay.table = (osoby, item, o) => {
  o = o || {}; const cx = o.x || 240, fl = o.floor || 282, s = o.s || 1.3, hw = (o.w || 200)/2, th = 46*s, P = {l:[cx-hw-14*s, 0], c:[cx, 0], r:[cx+hw+14*s, 1]};
  let back = '', front = '', hands = '', lab = '';
  (osoby || []).forEach(p => { const w = p.at || 'c', q = P[w], sit = p.sit !== false;
    const f = A.person(q[0], fl, Object.assign({s, kask:false, sit, flip:q[1]}, w === 'c' ? {arms:[15,60]} : {}, p));
    if (w === 'c'){ back += f; hands += `<circle cx="${r1(cx-14*s)}" cy="${r1(fl-th+1)}" r="${r1(4.6*s)}" class="il-skin"/><circle cx="${r1(cx+18*s)}" cy="${r1(fl-th+1)}" r="${r1(4.6*s)}" class="il-skin"/>`; }
    else front += f;
    if (p.t) lab += A.pill(q[0], Math.max(24, fl - (sit ? 86.5 : 98.5)*s - 24), p.t, {k:p.k});
  });
  return A.rect(20, fl-2, 440, 8, 'drewno', {r:4}) + back + A.table(cx, fl, 2*hw, th, {panel:1}) +
    (item ? `<g transform="translate(${cx} ${r1(fl-th)})">${item}</g>` : '') + hands + front + lab;
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

// opt = {still: bez animacji wejścia} (przegląd ilustracji)
function mount(fig, def, opt){
  const d = resolve(def), quiet = opt && opt.still;
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
  let fitted = fit(fig);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => { fitted = fit(fig); });
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
    if (draw !== false && !quiet) animateIn(frs[i]);
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
  // pierwsza klatka rysuje się, gdy figura wejdzie w kadr (figura ukryta przy montażu jest wtedy dopasowywana)
  if ('IntersectionObserver' in window){
    const io = new IntersectionObserver(es => { if (es[0].isIntersecting){ io.disconnect(); if (!fitted) fitted = fit(fig); if (!quiet) animateIn(frs[0]); } }, {threshold:.35});
    io.observe(fig);
  } else if (!quiet) animateIn(frs[0]);
}

/* ---------- Dopasowanie po wstawieniu: tekst w kształtach, pigułki, rozsuwanie podpisów ----------
   ILLUS.auto = false wyłącza dopasowanie tekstu i rozsuwanie (stan „surowy” do porównania w przeglądzie). */
const ILL = {auto: true};
function fit(root){
  let all = true;
  root.querySelectorAll('svg').forEach(svg => {
    if (ILL.auto) fitText(svg);
    fitPills(svg);
    const B = boxer(svg);
    if (!B){ all = false; return; }
    if (ILL.auto) arrange(svg, B);
    relink(svg, B);
  });
  return all;
}
// prostokąty w jednostkach viewBox (z uwzględnieniem wszystkich transformacji)
function boxer(svg){
  const vb = svg.viewBox && svg.viewBox.baseVal, r = svg.getBoundingClientRect();
  if (!vb || !vb.width || !r.width) return null;
  const k = vb.width / r.width;
  const B = el => { const b = el.getBoundingClientRect(); return {x:(b.left-r.left)*k + vb.x, y:(b.top-r.top)*k + vb.y, w:b.width*k, h:b.height*k}; };
  B.vb = vb;
  return B;
}
const hit = (p,q,m) => p.x < q.x+q.w+m && q.x < p.x+p.w+m && p.y < q.y+q.h+m && q.y < p.y+p.h+m;
const setTr = g => { const x = (+g.dataset.fx || 0) + (+g.dataset.mx || 0), y = +g.dataset.my || 0; if (x || y) g.setAttribute('transform', `translate(${r1(x)} ${r1(y)})`); else g.removeAttribute('transform'); };

// a.label: za długi napis → mniejsza czcionka (min. 11 px) → dwie linie → podpis pod kształtem z krótką linią
function fitText(svg){
  svg.querySelectorAll('.il-fit > text').forEach(t => {
    const g = t.parentNode, rc = g.querySelector('rect'), w = +t.dataset.w, h = +t.dataset.h;
    if (t.dataset.src == null){ t.dataset.src = t.textContent; t.dataset.y0 = t.getAttribute('y'); }
    const src = t.dataset.src, x = +t.getAttribute('x'), y0 = +t.dataset.y0, cy = y0 - 5;
    t.textContent = src; t.setAttribute('y', y0); t.style.fontSize = ''; t.classList.remove('il-out');
    const old = g.querySelector('.il-lead'); if (old) old.remove();
    let tw; try { tw = t.getBBox().width; } catch(e){ return; }
    const avail = w - 14; if (!tw || tw <= avail) return;
    const fs = parseFloat(getComputedStyle(t).fontSize) || 14, f2 = Math.max(11, Math.floor(fs*avail/tw*10)/10);
    t.style.fontSize = f2 + 'px';
    if (t.getBBox().width <= avail) return;
    const wd = src.split(' ');
    if (wd.length > 1 && h >= 2.3*f2 + 6){
      let cut = 1, best = 1e9;
      for (let i = 1; i < wd.length; i++){ const dd = Math.abs(wd.slice(0,i).join(' ').length - wd.slice(i).join(' ').length); if (dd < best){ best = dd; cut = i; } }
      const lh = f2*1.15, b1 = cy - lh/2 + f2*.35;
      t.innerHTML = `<tspan x="${x}" y="${r1(b1)}">${wd.slice(0,cut).join(' ')}</tspan><tspan x="${x}" y="${r1(b1+lh)}">${wd.slice(cut).join(' ')}</tspan>`;
      if (t.getBBox().width <= avail) return;
      t.textContent = src;
    }
    // poza kształt: pod spodem (albo nad, gdy brak miejsca) z linią odniesienia
    t.style.fontSize = ''; t.classList.add('il-out');
    const ry = +rc.getAttribute('y'), H = svg.viewBox.baseVal.height, below = ry + h + 30 < H;
    const ty = below ? ry + h + 22 : ry - 12;
    t.setAttribute('y', r1(ty));
    g.insertAdjacentHTML('beforeend', `<path class="il-lead" d="M${x} ${r1(below ? ry + h - 6 : ry + 6)}V${r1(below ? ty - 14 : ty + 4)}"/>`);
  });
}

// podpisy (callouty i pigułki) omijają się nawzajem, postacie/dłonie [data-guard], wolne napisy i krawędź rysunku
function arrange(svg, B){
  const X0 = B.vb.x, Y0 = B.vb.y, W = B.vb.width, H = B.vb.height;
  svg.querySelectorAll('.il-lab').forEach(g => g.removeAttribute('transform'));
  svg.querySelectorAll('.il-pill').forEach(g => { g.dataset.mx = g.dataset.my = 0; setTr(g); });
  const guards = Array.from(svg.querySelectorAll('[data-guard]')).map(B).filter(b => b.w > 0);
  const fixed = Array.from(svg.querySelectorAll('text')).filter(t => !t.closest('.il-pill, .il-lab')).map(B).filter(b => b.w > 0);
  const mov = Array.from(svg.querySelectorAll('.il-lab, .il-pill')).filter(el => el.classList.contains('il-lab') || !el.closest('.il-lab'));
  const placed = [];
  const free = b => b.x >= X0+3 && b.y >= Y0+3 && b.x+b.w <= X0+W-3 && b.y+b.h <= Y0+H-3 &&
    !placed.some(p => hit(p,b,2)) && !guards.some(p => hit(p,b,0)) && !fixed.some(p => hit(p,b,0));
  mov.forEach(el => {
    const lab = el.classList.contains('il-lab'), b = B(lab ? el : el.querySelector('rect'));
    if (!b.w) return;
    if (el.classList.contains('il-fix') || el.closest('.il-fix') || free(b)){ placed.push(b); return; }
    let best = null;
    for (let d = 6; d <= 150 && !best; d += 6)
      for (const q of [[0,-d],[0,d],[d,0],[-d,0],[d,-d],[-d,-d],[d,d],[-d,d]]){
        const c = {x:b.x+q[0], y:b.y+q[1], w:b.w, h:b.h};
        if (free(c)){ best = [q[0], q[1], c]; break; }
      }
    if (!best){ placed.push(b); return; }
    if (lab) el.setAttribute('transform', `translate(${best[0]} ${best[1]})`);
    else { el.dataset.mx = best[0]; el.dataset.my = best[1]; setTr(el); }
    placed.push(best[2]);
  });
}
// linia odniesienia callouta: od kropki do najbliższej krawędzi pigułki (po dopasowaniu i rozsunięciu)
function relink(svg, B){
  svg.querySelectorAll('.il-c[data-ax]').forEach(c => {
    const p = c.querySelector('.il-ptr'), rc = c.querySelector('.il-lab rect'), dot = c.querySelector('.il-dot');
    if (!p || !rc || !dot) return;
    const ax = +c.dataset.ax, ay = +c.dataset.ay, db = B(dot), b = B(rc);
    if (!b.w || !db.w) return;
    const ox = db.x + db.w/2 - ax, oy = db.y + db.h/2 - ay, x = b.x - ox, y = b.y - oy, cy = y + b.h/2;
    if (ax < x - 4 || ax > x + b.w + 4){ const e = ax < x ? x - 1 : x + b.w + 1; p.setAttribute('d', `M${ax} ${ay}Q${r1((ax+e)/2)} ${r1(cy)} ${r1(e)} ${r1(cy)}`); }
    else p.setAttribute('d', `M${ax} ${ay}L${ax} ${r1(ay < y ? y - 1 : y + b.h + 1)}`);
  });
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
    g.dataset.fx = r1(dx); setTr(g);
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

return Object.assign(ILL, { mount: mount, lib: A, resolve: resolve, fit: fit });
})();
