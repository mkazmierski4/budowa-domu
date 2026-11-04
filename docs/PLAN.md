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
- ⬜ 07 Okna, drzwi zewnętrzne, bramy garażowe (SSZ)
- ⬜ 08 Elektryka, niskoprądowe, oświetlenie
- ⬜ 09 Woda, kanalizacja, ogrzewanie (pompa ciepła, podłogówka)
- ⬜ 10 Rekuperacja, fotowoltaika, smart home
- ⬜ 11 Tynki, wylewki, sucha zabudowa, ocieplenie poddasza
- ⬜ 12 Elewacja: ocieplenie ścian, tynk, kamień, drewno
- ⬜ 13 Wykończenie: podłogi, łazienki, kuchnia, schody, drzwi
- ⬜ 14 Umeblowanie i aranżacja
- ⬜ 15 Ogród: podjazd, taras, ogrodzenie, trawnik, nawadnianie, basen
- ⬜ 16 Odbiory, zgłoszenie zakończenia, przeprowadzka

## Faza 4 — Szlif i publikacja
- ⬜ F4: przegląd spójności budżetu, wyszukiwarka, fonty lokalnie (offline), publikacja na GitHub Pages

## Faza 5 — Ilustracje kroków (1 sesja = 1 etap, pliki `js/illus/NN-slug.js`, tagi już są w `index.html`)
- ✅ F5a: system ilustracji `js/illus.js` + `css/illus.css`, wpięcie w silnik (`BUDOWA.addIllus`), wzorce: `04-fundamenty` (zbrojenie ław 3 klatki, izolacje, XPS), `02-projekt` (droga do pozwolenia) → `prompts/F5a-ilustracje.md`
- ✅ F5b: zmiana stylu na „instrukcję obrazkową” (aksonometria, postacie, kolory, ruch), przerobione 3 wzorce i zasady w `CLAUDE.md`
- ⬜ 00 Finanse (np. podział budżetu, transze kredytu na osi czasu)
- ⬜ 01 Działka
- 🔄 02 Projekt i pozwolenie (gotowe: `droga-do-pozwolenia`)
- ⬜ 03 Przygotowanie budowy
- 🔄 04 Fundamenty (gotowe: `zbrojenie-law`, `izolacja-przeciwwilgociowa`, `ocieplenie-fundamentu`)
- ⬜ 05 Ściany i stropy
- ⬜ 06 Dach
- ⬜ 07–16: po napisaniu treści etapu (F3)
