/* Widget „planer-kuchni”: długość zabudowy, wyspa, fronty, blat i AGD → szafki, fronty, blat, AGD i koszt kuchni,
   plus sprawdzenie przejścia przy wyspie i wysokości blatu. Model uproszczony, ceny 2026 r. (spójne z krokami etapu 14). */
BUDOWA.addWidget('planer-kuchni', function(el, api){
  var f = api.fmt;
  // korpusy z okuciami i montażem, zł/mb [min,max]: ściana (z górnymi i słupkami), wyspa
  var KORP = { sc: [2300, 3100], wy: [1800, 2300] };
  var M2_SC = 1.6, M2_WY = 1.6, GL_SC = 0.62, SLUPKI = 1.2;   // m² frontów na mb, głębokość blatu, długość słupków bez blatu
  var FRONT = { lam: { n: 'Laminat', zl: [300, 450] }, lak: { n: 'Lakier mat', zl: [800, 1050] }, forn: { n: 'Fornir', zl: [1250, 1700] } };
  var BLAT = { lam: { n: 'Laminat', zl: [350, 600] }, kw: { n: 'Kwarc', zl: [1600, 2300] }, sp: { n: 'Spiek', zl: [2600, 3500] } };
  var AGD = { pod: { n: 'Podstawowe', zl: [8000, 12000] }, sr: { n: 'Średnie', zl: [11000, 18000] }, wyz: { n: 'Wyższe', zl: [18000, 28000] } };
  var s = { sc: 4.2, wy: true, wyL: 2.4, wyG: 1.0, prz: 110, wzr: 175, fr: 'lak', bl: 'kw', agd: 'sr' };
  var sv = api.get(); if (sv) for (var x in s) if (sv[x] !== undefined) s[x] = sv[x];
  if (!FRONT[s.fr]) s.fr = 'lak'; if (!BLAT[s.bl]) s.bl = 'kw'; if (!AGD[s.agd]) s.agd = 'sr';

  function inp(id, label, val, unit){
    return '<div class="wg-row"><label class="wg-l" for="'+id+'">'+label+'</label>' +
      '<div class="wg-in sm"><input id="'+id+'" inputmode="decimal" autocomplete="off" value="'+String(val).replace('.',',')+'"><span>'+unit+'</span></div></div>';
  }
  function seg(name, map, cur){
    return '<div class="segctl" role="radiogroup">'+Object.keys(map).map(function(k){
      return '<label><input type="radio" name="'+name+'" value="'+k+'"'+(k===cur?' checked':'')+'>'+map[k].n+'</label>'; }).join('')+'</div>';
  }

  el.innerHTML =
    '<div class="wg-h"><span class="acc-ic"><svg class="ico" aria-hidden="true"><use href="#i-calc"/></svg></span><span>Planer kuchni<small>Zabudowa, wyspa i standard → koszt i ergonomia</small></span></div>' +
    '<div class="wg-f">' +
      '<div style="display:flex;flex-wrap:wrap;gap:12px 18px">' +
        inp('pkSc', 'Zabudowa przy ścianie', s.sc, 'm') + inp('pkWzr', 'Wzrost osoby gotującej', s.wzr, 'cm') + '</div>' +
      '<div class="tgl"><label class="tg"><input type="checkbox" id="pkWy"'+(s.wy?' checked':'')+'><span class="sw"></span>Wyspa (zlew i zmywarka, odpływ z etapu 09)</label></div>' +
      '<div id="pkWyF" style="display:flex;flex-wrap:wrap;gap:12px 18px">' +
        inp('pkWyL', 'Długość wyspy', s.wyL, 'm') + inp('pkWyG', 'Głębokość wyspy', s.wyG, 'm') + inp('pkPrz', 'Przejście do zabudowy', s.prz, 'cm') + '</div>' +
      '<div class="wg-row"><span class="wg-l">Fronty</span>' + seg('pkFr', FRONT, s.fr) + '</div>' +
      '<div class="wg-row"><span class="wg-l">Blat</span>' + seg('pkBl', BLAT, s.bl) + '</div>' +
      '<div class="wg-row"><span class="wg-l">AGD w zabudowie</span>' + seg('pkAgd', AGD, s.agd) + '</div>' +
    '</div>' +
    '<ul class="wg-res" id="pkRes" aria-live="polite"></ul>' +
    '<div class="wg-sum"><span>Kuchnia razem <b class="num" id="pkZl"></b></span><span>Blat <b class="num" id="pkH"></b></span></div>' +
    '<p class="wg-note">Orientacyjnie, ceny 2026 r. z montażem, okolice małego miasta. Korpusy z płyty 18 mm z okuciami z cichym domykiem; fronty ok. 1,6 m² na metr zabudowy i wyspy (z panelem od salonu); blat bez długości słupków (ok. 1,2 m). AGD: płyta, piekarnik, kompakt, lodówka, zmywarka, zlew z baterią i LED podszafkowe; okap obiegowy jest w etapie 13. Plan etapu dla kuchni referencyjnej: ok. 40–58 tys. zł.</p>';

  var $ = function(q){ return el.querySelector(q); };
  function parse(v){ var n = parseFloat(String(v).replace(/\s/g,'').replace(',','.')); return isFinite(n) && n > 0 ? n : 0; }
  function nf(v, d){ return v.toLocaleString('pl-PL', { maximumFractionDigits: d }); }
  function r100(v){ return Math.round(v / 100) * 100; }
  function li(t, sub, mn, mx, cls){ return '<li'+(cls ? ' class="'+cls+'"' : '')+'><span>'+t+'<small>'+sub+'</small></span><b class="num">'+(mx == null ? mn : f.money(r100(mn), r100(mx)))+'</b></li>'; }

  function calc(){
    var wy = s.wy ? s.wyL : 0;
    var korp = [s.sc * KORP.sc[0] + wy * KORP.wy[0], s.sc * KORP.sc[1] + wy * KORP.wy[1]];
    var m2f = s.sc * M2_SC + wy * M2_WY, fr = FRONT[s.fr];
    var m2b = Math.max(s.sc - SLUPKI, 0) * GL_SC + wy * (s.wy ? s.wyG : 0), bl = BLAT[s.bl], ag = AGD[s.agd];
    var fro = [m2f * fr.zl[0], m2f * fr.zl[1]], bla = [m2b * bl.zl[0], m2b * bl.zl[1]];
    var mn = korp[0] + fro[0] + bla[0] + ag.zl[0], mx = korp[1] + fro[1] + bla[1] + ag.zl[1];
    var h = Math.round((s.wzr / 2 + 7.5) / 2.5) * 2.5, hmin = Math.max(85, Math.min(100, h - 2.5)), hmax = Math.max(85, Math.min(100, h + 2.5));
    var prz = !s.wy ? '' : s.prz < 90 ? 'za wąsko: min. 100 cm, przy otwartej zmywarce nikt nie przejdzie'
      : s.prz < 100 ? 'na granicy: przy zmywarce i szufladach lepiej 100–120 cm'
      : s.prz <= 130 ? 'dobrze: 100–120 cm to wygodne przejście' : 'szeroko: ponad 130 cm to więcej kroków między wyspą a płytą';
    $('#pkRes').innerHTML =
      li('Szafki (korpusy, okucia, montaż)', nf(s.sc,1)+' m przy ścianie'+(s.wy ? ' + '+nf(wy,1)+' m wyspy' : ''), korp[0], korp[1]) +
      li('Fronty: '+fr.n, 'ok. '+nf(m2f,1)+' m² × '+f.num(fr.zl[0])+'–'+f.num(fr.zl[1])+' zł/m²', fro[0], fro[1]) +
      li('Blat: '+bl.n, 'ok. '+nf(m2b,1)+' m² z wycięciami i obróbką', bla[0], bla[1]) +
      li('AGD: '+ag.n, 'płyta, piekarnik, kompakt, lodówka, zmywarka, zlew, LED', ag.zl[0], ag.zl[1]) +
      li('Wysokość blatu', 'połowa wzrostu + 5–10 cm', hmin === hmax ? nf(hmin,1)+' cm' : nf(hmin,1)+'–'+nf(hmax,1)+' cm') +
      (s.wy ? li('Przejście przy wyspie', prz, nf(s.prz,0)+' cm', null, s.prz < 100 ? 'sub' : '') : '');
    $('#pkZl').textContent = f.money(r100(mn), r100(mx));
    $('#pkH').textContent = nf(hmin,1)+'–'+nf(hmax,1)+' cm';
    $('#pkWyF').style.display = s.wy ? 'flex' : 'none';
    ['#pkZl','#pkH'].forEach(function(q){ var b = $(q); b.classList.remove('bump'); void b.offsetWidth; b.classList.add('bump'); });
    api.set(s);
  }

  var MAP = { pkSc: 'sc', pkWyL: 'wyL', pkWyG: 'wyG', pkPrz: 'prz', pkWzr: 'wzr' };
  el.addEventListener('input', function(e){
    var k = MAP[e.target.id]; if (!k) return;
    s[k] = parse(e.target.value); calc();
  });
  el.addEventListener('change', function(e){
    var t = e.target;
    if (t.id === 'pkWy'){ s.wy = t.checked; calc(); }
    else if (t.name === 'pkFr'){ s.fr = t.value; calc(); }
    else if (t.name === 'pkBl'){ s.bl = t.value; calc(); }
    else if (t.name === 'pkAgd'){ s.agd = t.value; calc(); }
  });
  calc();
});
