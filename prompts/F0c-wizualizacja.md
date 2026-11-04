Zadanie F0c: nowa, **dużo bardziej szczegółowa** wizualizacja 2D domu w osobnym pliku `makieta/wizualizacja.html`.

Przeczytaj `CLAUDE.md`. Z `makieta/makieta.html` przeczytaj tylko część SVG i JS wizualizacji, żeby znać obecny zakres (suwak etapów 0–16, tryby Dom/Przekrój, podświetlanie warstwy). **makieta.html nie edytuj,** bo równolegle zmienia ją inna sesja. Użyj skilla `frontend-design`.

Opinia właściciela projektu: obecna wizualizacja jest za prosta, ma być **o wiele bardziej szczegółowa**. Styl: **rysunek architektoniczny lub techniczny**, czysta kreska, stonowane wypełnienia materiałów, profesjonalnie, bez „kreskówkowości”.

Technika (ważne dla tokenów i jakości): **generuj szczegóły proceduralnie w JS**, zamiast ręcznie wypisywać tysiące elementów. Napisz małe funkcje pomocnicze, np. `courses()` (rzędy bloczków z przewiązaniem), `tiles()` (dachówki), `boards()` (deska elewacyjna), `rebarCage()` (pręty i strzemiona), `hatch()` (kreskowania materiałów), `grass()`, `tree()`. Plik może mieć do ok. 100 KB.

1. **Widok Dom:** aksonometria (izometria) domu referencyjnego. Każdy etap 0–16 pokazuje realny stan budowy, ze sprzętem i detalem:
   - 0–1: działka, granice, paliki geodety, ogrodzenie tymczasowe, kontener, toi-toi, skrzynka budowlana prądu
   - 3: zdjęty humus, hałda ziemi, ławy ciesielskie ze sznurkami, wykop, koparka
   - 4: szalunki, kosze zbrojeniowe w wykopie, betonowanie (gruszka, pompa), ściany fundamentowe z bloczków, izolacja pionowa, XPS, zasypka, chudziak, rury kanalizacji
   - 5: ściany warstwami bloczków z widocznym przewiązaniem, nadproża, wieńce, strop, **rusztowanie** (ramy, podesty, poręcze), palety bloczków, betoniarka
   - 6: więźba (krokwie, murłata, jętki), membrana, łaty i kontrłaty, potem dachówka, obróbki, rynny, okna dachowe, komin
   - 7: okna z ramiakami, drzwi, brama garażowa segmentowa
   - 8–11: tylko ślady instalacji widoczne z zewnątrz (skrzynka przyłączeniowa, jednostka pompy ciepła, czerpnia/wyrzutnia, panele PV)
   - 12: ocieplenie (płyty EPS lub wełny na kołkach), siatka, tynk, kamień, deska drewniana, podbitka
   - 13–14: we wnętrzach, widocznych przez przeszklenia, ciepłe światło i zarys mebli
   - 15: podjazd z kostki (wzór), taras zadaszony, trawnik, nasadzenia, drzewa, lampy, basen, pergola, domek z zjeżdżalnią, ogrodzenie
   - 16: dom zamieszkany, światła wieczorem, samochód na podjeździe
2. **Przybliżenia detali:** przy każdym etapie kluczowy detal w ramce-lupie (callout), np. zbrojenie ławy z otuliną i dystansami, węzeł nadproża, okap, osadzenie okna w warstwie ocieplenia (ciepły montaż), kołkowanie ocieplenia.
3. **Widok Przekrój:** przekrój ściany i fundamentu jak w rysunku wykonawczym: kreskowania materiałów zgodne z konwencją rysunku budowlanego (beton, żelbet z prętami, ceramika, wełna falką, EPS/XPS, grunt, piasek), linie wymiarowe z grubościami, opisy na liniach odniesienia, poziom ±0,00 i poziom terenu. Hover/klik na warstwę pokazuje nazwę, grubość i funkcję.
4. Sterowanie: suwak etapów, przełącznik Dom/Przekrój, jasny i ciemny motyw (w ciemnym wieczór z oświetleniem), poprawne skalowanie na telefonie. Kolory w tokenach CSS.
5. Kod podziel tak, żeby dało się go później łatwo wydzielić do `js/viz.js` (jeden obiekt `VIZ` z `setStage(nr)`, `highlight(layerId)`, `mount(el)`).

Na koniec: otwórz plik w przeglądarce (`Start-Process`) i napisz 3–5 linii podsumowania (rozmiar pliku, co jest w każdym etapie).
