# Budowa domu — interaktywna encyklopedia

Przeglądarkowy, darmowy poradnik „od działki do klucza”. To encyklopedia z dużą liczbą interakcji, nie gra: nie da się przegrać, budżet jest stały i tylko pokazuje koszty.

## Zasady pracy (oszczędnie z tokenami)
- Pracujemy **fazami**. Plan i status są w `docs/PLAN.md`. Każda sesja robi **jedno** zadanie z promptu w `prompts/`.
- Czytaj tylko pliki potrzebne do zadania. Nie przeglądaj całego repo. Nie czytaj plików z innymi etapami treści.
- Po skończonym zadaniu: zaktualizuj status w `docs/PLAN.md`, dopisz decyzje do `docs/DECYZJE.md` i zakończ krótkim podsumowaniem (3–5 linii).
- Bez frameworków i bez build stepu. Czysty HTML/CSS/JS. Strona ma działać po otwarciu `index.html` z dysku (file://), więc nie używamy `fetch()` ani JSON-ów. Treść trzymamy w plikach `.js` ładowanych tagiem `<script>`.
- Sesje mogą działać **równolegle**. `docs/PLAN.md` i `docs/DECYZJE.md` czytaj ponownie tuż przed edycją i zmieniaj tylko swoje linie. `index.html` ma już tagi dla wszystkich etapów, więc go nie edytuj.
- Repo git na **prywatnym** GitHubie (`git@github-private:mkazmierski4/budowa-domu.git`). **Sesje robocze nie robią commitów ani pushy.** Commituje i pushuje sesja-manager po każdej paczce zadań, bo sesje działają równolegle. Nigdy nie zmieniaj globalnej konfiguracji gita ani logowania `gh`.
- Po zrobieniu lub zmianie strony otwórz ją użytkownikowi w przeglądarce: `Start-Process "<ścieżka do html>"`.
- Hosting docelowy: GitHub Pages.
- Język: polski, z polskimi znakami, UTF-8.

## Założenia merytoryczne (stałe, wspólne dla wszystkich etapów)
- **Budżet całkowity: 2 300 000 zł** (decyzja właściciela 2026-11-03, wariant A) (działka + dom + wykończenie + ogród). Ceny są orientacyjne, z **2026 r.**, dla **okolic małego miasta**.
- **Dom referencyjny** (jak na zdjęciu inspiracji):
  - ok. 190 m² użytkowej, parter + poddasze użytkowe, dach dwuspadowy ok. 40°
  - garaż 2-stanowiskowy w bryle
  - elewacja: tynk + kamień + deska drewniana; duże przeszklenia, taras zadaszony
  - pomieszczenia: salon z kominkiem, kuchnia z wyspą, sypialnia, łazienka z wanną wolnostojącą, pokój dziecięcy, siłownia
  - ogród ok. 1000 m²: trawnik, oświetlenie, basen, pergola, domek dla dzieci
- **Działka:** ok. 1200 m².
- Normy: aktualne polskie przepisy (Prawo budowlane, WT2021, PN/Eurokody). Gdy nie masz pewności, napisz to wprost. Nie wymyślaj numerów paragrafów.
- Rekomendowane rozwiązania muszą być spójne między etapami. **Przed pisaniem przeczytaj `docs/DECYZJE.md`.**

## Struktura plików
```
index.html            — szkielet, ładuje wszystko
css/style.css
js/engine.js          — rejestr etapów, nawigacja, budżet, zapis postępu (localStorage)
js/viz.js             — wizualizacja 2D (SVG) rosnącego domu
js/widgets/*.js       — specjalne interakcje (kalkulatory itp.), rejestrowane po nazwie
js/illus.js           — biblioteka i silnik ilustracji kroków (css/illus.css)
js/illus/NN-slug.js   — ilustracje jednego etapu
content/NN-slug.js    — jeden plik = jeden etap
docs/PLAN.md, docs/DECYZJE.md
prompts/              — prompty dla kolejnych sesji
```

## Format treści (content/NN-slug.js)
```js
BUDOWA.addStage({
  id: "04-fundamenty", nr: 4, title: "Fundamenty", icon: "🧱",
  category: "surowy",                    // kategoria budżetu: dzialka | surowy | instal | wykoncz | ogrod
  summary: "Jedno-dwa zdania.", duration: "3–5 tyg.",
  steps: [{
    id: "zbrojenie-law",
    title: "Zbrojenie ław",
    lead: "Wyróżnione zdanie otwierające.",  // opcjonalne; bez niego leadem jest pierwszy <p> z body
    time: "2–4 dni", team: "2–3 zbrojarzy", // opcjonalne, pokazywane jako fakty
    facts: [["Stal", "ok. 0,6–0,9 t", "rebar"]], // opcjonalne: [etykieta, wartość, ikona]
    body: `<p>Krótkie akapity HTML.</p>`,
    cost: { min: 18000, max: 26000, note: "stal + robocizna" },      // opcjonalne
    decision: {                                                       // opcjonalne
      question: "Jaki fundament?",
      intro: "Jedno zdanie nad kartami.",   // opcjonalne
      chosen: "lawy",                       // rekomendowana opcja (spójna z DECYZJE.md)
      options: [{ id: "lawy", name: "Ławy + ściany fundamentowe",
        cost: { min: 0, max: 0 }, time: "4 tyg.", note: "krótka cecha",
        pros: [], cons: [], why: "Przy chosen: dlaczego rekomendujemy. Przy innych: kiedy ma sens." }]
    },
    tips: ["<b>Kluczowa fraza.</b> Rozwinięcie…"],  // 💬 konkretne, praktyczne
    mistakes: ["<b>Błąd.</b> Skutek…"],             // ⚠️
    formal: [["Dokument", "kto / kiedy / ile"]],    // 📋 albo sam tekst
    checklist: ["Do sprawdzenia przy odbiorze…"],
    quiz: [{ q: "…", a: ["…", "…", "…"], correct: 0, explain: "…" }],
    widget: "kalkulator-betonu",          // opcjonalne, z js/widgets/
    diagram: `<svg viewBox="…">…</svg>`    // opcjonalny prosty schemat; kolory przez style="fill:var(--…)"
  }]
});
```
Każdy krok powinien mieć co najmniej `body` i `tips`. Interakcje (decision, quiz, checklist, widget) dodajemy wszędzie, gdzie mają sens.

Zasady silnika (F1):
- **Koszt kroku** = `cost` kroku + `cost` wybranej opcji. Koszt opcji to **dopłata albo oszczędność** względem kosztów kroków (może być ujemny). Gdy krok nie ma własnego `cost`, opcja niesie cały koszt (np. cena działki). Budżet liczy środek widełek i min–max.
- Punkty w `tips`, `mistakes` i `formal` zaczynaj od `<b>kluczowej frazy</b>`. Bez `<b>` silnik pogrubi pierwsze zdanie, jeśli punkt ma ich kilka.
- Krok z `checklist` jest gotowy po odbiorze, a krok bez niej po przeczytaniu.
- Link do przekroju w treści: `<button class="xref" data-section="lawa"><svg class="ico"><use href="#i-layers"/></svg>zobacz w przekroju</button>`.
- Widgety etapu dopisuj w `js/widgets/NN-slug.js` (tag jest już w `index.html`): `BUDOWA.addWidget("nazwa", function(el, api){ … })`. `api.get()` i `api.set(v)` zapisują stan widgetu, a `api.fmt` daje `zl`, `num`, `k` i `money`. Gotowe klasy CSS to `.wg-h`, `.wg-f`, `.wg-in`, `.chips`, `.segctl`, `.tg`, `.wg-res` i `.wg-sum`. Wzór: `js/widgets/koszty-zakupu.js`.

## Ilustracje (F5)
Każdy krok może mieć ilustrację na górze zakładki „Opis”. Plik etapu: `js/illus/NN-slug.js` (tag jest już w `index.html`, plików treści nie ruszamy). Ilustracja zastępuje stary `diagram` kroku.
**Styl: instrukcja obrazkowa, nie rysunek techniczny** (rysunek techniczny zostaje tylko w wizualizacji domu i przekroju):
- scena „jak to widzisz na budowie” w lekkiej aksonometrii (`a.iso`), z ludźmi, dłońmi w akcji i narzędziami;
- płaskie kolory materiałów (szary beton, rdzawe pręty, biały EPS, niebieski XPS, brązowa ziemia, żółta folia), miękkie cienie, bez kreskowań i bez wpisanych kolorów — tylko materiały i klasy z `css/illus.css` (oba motywy działają same);
- mało tekstu: 2–4 krótkie podpisy (`callout`, `pill`) i 1–3 kluczowe liczby (`num`, `dim`), bez łańcuchów wymiarowych; błąd pokazuj jako dwie wersje ze znaczkiem `ok` ✓ / `bad` ✗;
- sekwencja pokazuje ruch: to, co się zmienia, opakuj w `a.move(s, dx, dy)` (np. kosz opada) albo `a.fresh(s)` (wyskakuje); strzałki i drogi z klasą `draw` rysują się kreską;
- układ 480 × 320, ok. 3–6 KB na ilustrację (sekwencja do ok. 8 KB), opisy po polsku, liczby zgodne z treścią kroku i `docs/DECYZJE.md`. Pigułki same dopasowują szerokość i nie wychodzą poza rysunek.
```js
BUDOWA.addIllus("04-fundamenty/zbrojenie-law", function(a){
  const P = a.iso(172, 70, 1);                       // aksonometria: P.box(x,y,z, w,d,h, mat), P.P(x,y,z) → [px,py]
  return { caption: "Podpis pod całością.", frames: [
    { caption: "Klatka 1…", svg: a.svg(P.box(0,0,-70,200,100,10,"chudy") + a.move(a.hand(240,200), 0, -60) + a.callout("k",ax,ay,tx,ty,"Dystanse") + a.num(x,y,"co ok. 1 m"), 480, 320, "aria-label") },
    { caption: "Klatka 2…", svg: … } ] };      // jedna klatka: zwróć string SVG albo { caption, svg }
});
```
Biblioteka `a` (zwraca string SVG; `o.k` = klucz podświetlania wspólny dla podpisu i elementów, `o.d` = opóźnienie animacji w ms):
- układ i ruch: `svg(inner,w,h,label)`, `g(s,{tr})`, `fresh(s)`, `move(s,dx,dy)`, `ghost(s)`, `text(x,y,t,{a,s,b})`, `line(pts|d,cls)`
- aksonometria: `iso(ox,oy,skala)` → `P.box`, `P.face(pts,mat)`, `P.bar(pts,w)` (pręt), `P.line`, `P.shadow`, `P.P`, `P.d`
- materiały 2D: `rect(x,y,w,h,mat,o)`, `poly(pts,mat,o)`, `ground(x,y,w,h)`, `shadow(cx,cy,rx,ry)`; `mat`: beton, chudy, stal, drewno, ziemia, trawa, piasek, zwir, kmb, papa, folia, eps, xps, welna, ceramika, bloczek, woda, dachowka, szklo, blacha, papier
- elementy budowy: `rebar(pts,w)`, `bar(x,y,r)`, `stirrup(x,y,w,h)`, `spacer(x,y,w,h)`, `blocks(x,y,w,h,bw,bh,mat)`, `board`, `batten`, `tiles(x,y,w,n)`, `pipe(pts,d,'kan'|'woda'|'cieplo'|'rura')`, `cable(pts,kolor)`, `window(x,y,w,h)`, `drops(x,y,n)`, `rust(x,y)`
- ludzie i narzędzia: `person(x,y,{s,kneel,arms:[kąt,kąt],flip,kask,hold})`, `hand(x,y,{r,s,hold})`, `trowel`, `level(x,y,len)`, `drill`, `mixer`, `shovel`, `brush` (x,y,skala)
- opisy: `callout(k,ax,ay,tx,ty,t,{hot})`, `pill(x,y,t,{k,acc})`, `num(x,y,t)`, `dim/measure(x1,y1,x2,y2,t,{dx,dy})`, `arrow(pts)`, `marker(x,y,n)`, `ok(x,y,r)`, `bad(x,y,r)`, `doc(x,y,w,h,{stamp,lines,icon})`
- procesy: `road(d)`, `stop(x,y,n,{icon,k})`, `icon('mapa'|'projekt'|'prad'|'urzad'|'kask'|'kalendarz',x,y,s)`

- tekst w kształcie: `label(x,y,w,h,t,mat)` (pasek, tabliczka): za długi napis sam się zmniejsza (min. 11 px), łamie na dwie linie albo wychodzi pod kształt z linią. Nie rysuj `rect` + `text` ręcznie.
- obiekty (x,y = środek podstawy, mają cień): `house`, `excavator`, `mixerTruck`, `crane`, `tripod`, `container`, `toilet` (x,y,s); `table/desk(x,y,w,h,{panel})`, `laptop`, `shield`, `magnifier` (x,y,s), `circle(cx,cy,r)` (przerywany obszar, klasa `il-zone`); postać siedząca: `person(x,y,{sit:1})` (z krzesłem).
- szablony `a.layout.*` (zwracają zawartość 480 × 320): `scene(main, [{t, at:[x,y], side, y, sub, hot, k}])` (podpisy w kolumnach przy krawędziach, linie same się dociągają), `compare(okSvg, badSvg, [tytuł✓, tytuł✗])` (pola 222 × 244), `timeline([{t, len}], {x,y,w,title,end})`, `steps([{icon, t}])`, `table([{at:'l'|'c'|'r', t}], przedmiot)` (ludzie siedzą przy stole w skali).
- po wstawieniu SVG biblioteka sama rozsuwa pigułki i callouty (omijają siebie, napisy i postacie/dłonie z `data-guard`) i przelicza linie odniesienia. To siatka bezpieczeństwa, nie zwalnia z układania.

Wzorce: `js/illus/04-fundamenty.js` (sekwencja z ruchem, ✓/✗), `js/illus/02-projekt.js` (droga z przystankami, `compare`, `timeline`), `js/illus/00-finanse.js` → `ubezpieczenie` (`scene`), `js/illus/01-dzialka.js` → `akt-notarialny` (`table`).

**Zasady kompozycji:**
- Jeden wyraźny temat na klatkę. Wszystko inne go wspiera albo znika.
- Podpisy przy krawędziach (kolumny `scene`, góra, dół), nie na obiektach. Nigdy na głowie, twarzy ani dłoni.
- Skala: człowiek stojący ok. 100 jedn. przy `s=1`, stół do ok. połowy jego wzrostu, drzwi trochę wyższe od człowieka. Ludzie stoją lub siedzą **przy** meblach i na ziemi, nie na nich.
- Nic nie wisi w powietrzu: każdy przedmiot stoi na gruncie, płycie, stole albo ścianie i ma cień. Wyjątki to chmura, deszcz i znaczek przyczepiony do obiektu.
- Układ z siatki (kolumny, rzędy, szablony), a nie rozrzucony po rysunku.

**Obowiązek przed oddaniem:** otwórz `makieta/przeglad-ilustracji.html?etap=NN-slug` (jedna ilustracja: `&id=NN-slug/krok`), popraw wszystkie czerwone błędy (licznik etapu ma być 0) i obejrzyj zrzut w obu motywach (przełącznik Jasny/Ciemny) oraz w szerokości „Telefon”.

## Warstwy przekroju
Link „zobacz w przekroju” w treści: `BUDOWA.showSection("<layerId>")` (→ `VIZ.highlight`), przełącza wizualizację na przekrój i podświetla warstwę. Lista jest też w `VIZ.LAYERS`.

| layerId | Warstwa | | layerId | Warstwa |
|---|---|---|---|---|
| `grunt` | Grunt rodzimy | | `podklad` | Podkład betonowy 10 cm |
| `podsypka` | Podsypka zagęszczona | | `papa` | Izolacja podposadzkowa |
| `zasypka` | Zasypka wykopu | | `epsp` | Styropian podłogowy EPS 100, 15 cm |
| `humus` | Humus | | `folia` | Folia z siatką |
| `opaska` | Opaska żwirowa | | `jastrych` | Jastrych z ogrzewaniem podłogowym |
| `chudy` | Chudy beton | | `posadzka` | Posadzka (poziom ±0,00) |
| `lawa` | Ława żelbetowa 60 × 35 cm | | `dylat` | Taśma dylatacyjna |
| `scianaf` | Ściana fundamentowa 25 cm | | `mur` | Pustak ceramiczny 25 cm |
| `bitum` | Izolacja przeciwwilgociowa (masa bitumiczna) | | `tynkw` | Tynk gipsowy (wewnętrzny) |
| `xps` | Polistyren XPS 15 cm (fundament, cokół) | | `klej` | Klej do płyt |
| `mozaika` | Tynk mozaikowy na cokole | | `ocieplenie` | Ocieplenie ściany: styropian grafitowy 20 cm / wełna (przełącznik) |
| `poziom` | Izolacja pozioma (papa na ścianie fund.) | | `zbrojona` | Warstwa zbrojona (klej + siatka) |
| | | | `tynkz` | Tynk cienkowarstwowy (elewacja) |
