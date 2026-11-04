# Plan projektu

Statusy: ⬜ do zrobienia · 🔄 w trakcie · ✅ gotowe

## Faza 0 — Makieta wyglądu
- ✅ F0: statyczna makieta `makieta/makieta.html` do akceptacji → `prompts/F0-makieta.md`
- ✅ F0b: przeprojektowanie w stylu „podręcznik techniczny”, bez emoji → `prompts/F0b-design.md` (zbyt surowe, odrzucone)
- ✅ F0d: 4 warianty designu w `makieta/warianty.html` → `prompts/F0d-warianty.md` (wszystkie odrzucone: „zwykła strona”)
- ✅ F0e: jeden kierunek, aplikacja edukacyjna (budżet u góry, etapy, krok porcjami, animowany dom), jasny i ciemny motyw, `makieta/makieta-v2.html`, Artifact: https://claude.ai/artifact/V8UwQ2T6mGfJssUS5igJsc (czeka na akceptację)
- ✅ F0c: szczegółowa wizualizacja 2D w `makieta/wizualizacja.html` → `prompts/F0c-wizualizacja.md`

Zatwierdzone (2026-11-03): wygląd `makieta/makieta-v2.html` (Artifact V8UwQ2T6mGfJssUS5igJsc), wizualizacja `makieta/wizualizacja.html`. Poprawka do F1: estetyczniejsze listy w rozwijanych sekcjach.

## Faza 1 — Silnik + wzorcowy etap
- ✅ F1: szkielet strony, engine.js, style, etap wzorcowy `01-dzialka` → `prompts/F1-silnik.md` · pliki `index.html`, `css/style.css`, `js/engine.js`, `js/widgets/koszty-zakupu.js`, `content/01-dzialka.js`, `content/04-fundamenty.js` · poprawki 2026-11-03: jedno przewijanie strony, rezerwa w budżecie

Pliki etapów (wpięte w `index.html`; brakujące silnik pomija). Treść: `content/<nazwa>.js`, widgety etapu: `js/widgets/<nazwa>.js`:
`00-finanse` · `01-dzialka` · `02-projekt` · `03-przygotowanie` · `04-fundamenty` · `05-sciany` · `06-dach` · `07-okna` · `08-elektryka` · `09-woda-ogrzewanie` · `10-rekuperacja-pv` · `11-tynki-wylewki` · `12-elewacja` · `13-wykonczenie` · `14-umeblowanie` · `15-ogrod` · `16-odbiory`

## Faza 2 — Wizualizacja
- ✅ F2: viz.js — przeniesienie wizualizacji z makiety (dom + przekrój) → `prompts/F2-wizualizacja.md` · pliki `js/viz.js`, `css/viz.css`, test `makieta/test-viz.html`

## Faza 3 — Treść (1 sesja = 1–2 etapy, prompt: `prompts/F3-tresc-szablon.md`)
- ✅ 00 Finanse, kredyt, harmonogram (F3: 11 kroków w `content/00-finanse.js`, widget `kalkulator-raty` w `js/widgets/00-finanse.js`)
- ✅ 01 Działka (wykonane w F1, do ewentualnego rozbudowania)
- ✅ 02 Projekt, adaptacja, pozwolenie/zgłoszenie (13 kroków, 5 decyzji, 9 quizów, widget `terminarz-formalnosci`; `content/02-projekt.js`, `js/widgets/02-projekt.js`)
- ✅ 03 Przygotowanie terenu, przyłącza, zaplecze budowy (12 kroków, widget `kalkulator-humusu` w `js/widgets/03-przygotowanie.js`)
- ✅ 04 Fundamenty (stan zero), izolacje, kanalizacja podposadzkowa (15 kroków, 4 decyzje, 9 quizów, widget `kalkulator-betonu`; `content/04-fundamenty.js`, `js/widgets/04-fundamenty.js`)
- ✅ 05 Ściany, nadproża, wieńce, stropy, rusztowania, komin (14 kroków, 7 decyzji, 16 quizów, widget `kalkulator-scian`; `content/05-sciany.js`, `js/widgets/05-sciany.js`)
- ✅ 06 Więźba, pokrycie dachu, okna dachowe, rynny (13 kroków, 4 decyzje, 15 quizów, widget `kalkulator-dachu`; `content/06-dach.js`, `js/widgets/06-dach.js`)
- ✅ 07 Okna, drzwi zewnętrzne, bramy garażowe (SSZ) (12 kroków, 6 decyzji, 12 quizów, widget `kalkulator-okien`; `content/07-okna.js`, `js/widgets/07-okna.js`; etap 125–196 tys., śr. ok. 161 tys. zł, ok. 5 tys. ponad resztę limitu „surowy”)
- ✅ 08 Elektryka, niskoprądowe, oświetlenie (13 kroków, 7 decyzji, 10 quizów, widget `kalkulator-punktow`; `content/08-elektryka.js`, `js/widgets/08-elektryka.js`; etap 42,3–65 tys., śr. ok. 54 tys. zł z limitu „instal” 270 tys. dla 08–10)
- ✅ 09 Woda, kanalizacja, ogrzewanie (15 kroków, 6 decyzji, 12 quizów, widget `kalkulator-ogrzewania`; `content/09-woda-ogrzewanie.js`, `js/widgets/09-woda-ogrzewanie.js`; 15 ilustracji, 8 sekwencji w `js/illus/09-woda-ogrzewanie.js`, przegląd 0 błędów, oba motywy i telefon)
- ✅ 10 Rekuperacja, fotowoltaika, smart home (14 kroków, 7 decyzji, 11 quizów, widget `kalkulator-pv`; `content/10-rekuperacja-pv.js`, `js/widgets/10-rekuperacja-pv.js`; 14 ilustracji, 6 sekwencji w `js/illus/10-rekuperacja-pv.js`, przegląd 0 błędów, oba motywy i telefon; etap 57–88 tys., śr. ok. 73 tys. zł; PV 14 modułów zamiast 8 — viz do poprawy)
- ✅ 11 Tynki, wylewki, sucha zabudowa, ocieplenie poddasza (13 kroków, 3 decyzje, 11 quizów, widget `kalkulator-wylewki`; `content/11-tynki-wylewki.js`, `js/widgets/11-tynki-wylewki.js`; etap 87,3–129,3 tys., śr. ok. 108 tys. zł z limitu „wykoncz” 540 tys. dla 11–14; 13 ilustracji, 9 sekwencji w `js/illus/11-tynki-wylewki.js`, przegląd 0 błędów, oba motywy i telefon)
- ✅ 12 Elewacja: ocieplenie ścian, tynk, kamień, drewno (15 kroków, 5 decyzji, 14 quizów, widget `kalkulator-elewacji`; `content/12-elewacja.js`, `js/widgets/12-elewacja.js`; etap 101,3–147 tys., śr. ok. 124 tys. zł z limitu „wykoncz”; 15 ilustracji, 13 sekwencji w `js/illus/12-elewacja.js`, przegląd 0 błędów, oba motywy i telefon)
- ✅ 13 Wykończenie wnętrz: łazienki, płytki, malowanie, kominek, schody, podłogi, drzwi, biały montaż (15 kroków, 8 decyzji, 15 quizów, widget `kalkulator-podlog`; `content/13-wykonczenie.js`, `js/widgets/13-wykonczenie.js`; etap 139,3–238 tys., śr. ok. 189 tys. zł z limitu „wykoncz”; 15 ilustracji, 11 sekwencji w `js/illus/13-wykonczenie.js`, przegląd 0 błędów, oba motywy i telefon)
- ✅ 14 Umeblowanie i aranżacja (15 kroków, 9 decyzji, 9 quizów, widget `planer-kuchni`; `content/14-umeblowanie.js`, `js/widgets/14-umeblowanie.js`; etap 91,1–156,7 tys., śr. ok. 124 tys. zł; z etapem 13 ok. 313 tys. przy limicie ok. 308 tys., lista odłożeń w kroku 1; 15 ilustracji, 9 sekwencji w `js/illus/14-umeblowanie.js`, przegląd 0 błędów, oba motywy i telefon; okap wyspowy z 13 vs płyta przy ścianie w 14 do uzgodnienia)
- ✅ 15 Ogród: podjazd, taras, ogrodzenie, trawnik, nawadnianie, basen (15 kroków, 12 decyzji, 11 quizów, widget `kalkulator-ogrodu`; `content/15-ogrod.js`, `js/widgets/15-ogrod.js`; etap 225–350,5 tys., śr. ok. 288 tys. zł, ok. 38 tys. ponad limit „ogród” 250 tys. (na 2. rok: zadaszenie tarasu, pergola); 15 ilustracji, 13 sekwencji w `js/illus/15-ogrod.js`, przegląd 0 błędów, oba motywy i telefon)
- ✅ 16 Odbiory, zgłoszenie zakończenia, przeprowadzka (15 kroków, 6 decyzji, 8 quizów, widget `lista-odbiorow`; `content/16-odbiory.js`, `js/widgets/16-odbiory.js`; etap 6,9–15,5 tys., śr. ok. 11 tys. zł z kategorii „działka i formalności”; 15 ilustracji, 8 sekwencji w `js/illus/16-odbiory.js`, przegląd 0 błędów, oba motywy i telefon)

## Faza 4 — Szlif i publikacja
- ✅ F4: szlif przed publikacją → `prompts/F4-szlif.md` · budżet 2 063 731 zł (kategorie w limitach ±0,4 tys.), pergola na 2. rok (15), okap przyścienny (13), pełny test headless (17 etapów, 230 kroków, oba motywy, 1366 i 390 px: 0 błędów), poziome przewijanie przez opis wizualizacji naprawione, usunięty tag nieistniejącego `js/widgets/01-dzialka.js`, kontrast napisów w ilustracjach (przegląd: 0 błędów w 4 wariantach), wyszukiwarka Ctrl+K, ekran powitalny, fonty lokalnie, favicon, meta/OG, `README.md`, `.nojekyll`; do zrobienia przy publikacji: włączyć Pages, ewentualnie obrazek OG

## Faza 5 — Ilustracje kroków (1 sesja = 1 etap, pliki `js/illus/NN-slug.js`, tagi już są w `index.html`)
- ✅ F5a: system ilustracji `js/illus.js` + `css/illus.css`, wpięcie w silnik (`BUDOWA.addIllus`), wzorce: `04-fundamenty` (zbrojenie ław 3 klatki, izolacje, XPS), `02-projekt` (droga do pozwolenia) → `prompts/F5a-ilustracje.md`
- ✅ F5b: zmiana stylu na „instrukcję obrazkową” (aksonometria, postacie, kolory, ruch), przerobione 3 wzorce i zasady w `CLAUDE.md`
- ✅ F5c: jakość ilustracji: `makieta/przeglad-ilustracji.html` (kontrole automatyczne, ocena ✓/✗ z komentarzem, kopiowanie listy), w `js/illus.js` rozsuwanie podpisów, dopasowanie tekstu (`label`), szablony `a.layout.*`, nowe obiekty; przerobione `00-finanse/ubezpieczenie`, `01-dzialka/akt-notarialny`, `02-projekt/terminy-i-uprawomocnienie` i `pozwolenie-czy-zgloszenie`. Błędy automatyczne przed: 00: 4, 01: 5, 02: 4, 03: 4, 04: 4, 05: 1 (razem 22); po: 2 (`01-dzialka/media`, `05-sciany/komin`: wyjście poza kadr) → `prompts/F5c-jakosc-ilustracji.md`
- ✅ 00 Finanse (10 ilustracji, 4 sekwencje; infografiki; zrzuty sprawdzone w ciemnym motywie)
- ✅ 01 Działka (11 ilustracji, 2 sekwencje 2-klatkowe; infografiki; zrzuty sprawdzone w ciemnym motywie)
- ✅ 02 Projekt i pozwolenie (13 ilustracji, 1 sekwencja 3-klatkowa; infografiki)
- ✅ 03 Przygotowanie budowy (12 ilustracji, 5 sekwencji; bez zrzutów ekranu — sprawdzone tylko wykonaniem w Node)
- 🔄 04 Fundamenty (gotowe: `zbrojenie-law`, `izolacja-przeciwwilgociowa`, `ocieplenie-fundamentu`)
- ✅ 04 Fundamenty (15 ilustracji: 3 wzorce + 12 nowych, 8 sekwencji w sumie; zrzut w jasnym motywie, bez ciemnego i telefonu)
- ✅ 05 Ściany i stropy (14 ilustracji, 12 sekwencji; `js/illus/05-sciany.js`)
- ✅ 06 Dach (13 ilustracji, 12 sekwencji (4 po 3 klatki), 3 porównania ✓/✗; `js/illus/06-dach.js`; przegląd 0 błędów w obu motywach i na telefonie)
- ✅ 07 Okna, drzwi i brama (12 ilustracji, 7 sekwencji; przegląd 0 błędów w pełnej szerokości i na telefonie, zrzuty w jasnym i ciemnym motywie; `js/illus/07-okna.js`)
- ✅ 08 Elektryka (13 ilustracji, 6 sekwencji; przegląd 0 błędów, zrzuty w ciemnym i jasnym motywie oraz na telefonie; `js/illus/08-elektryka.js`)
- ⬜ 09–16: po napisaniu treści etapu (F3)
