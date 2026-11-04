Zadanie F2: przenieś zatwierdzoną wizualizację z `makieta/wizualizacja.html` do `js/viz.js` i `css/viz.css`.

Przeczytaj `CLAUDE.md` i `makieta/wizualizacja.html`. Z `makieta/makieta-v2.html` przeczytaj tylko CSS animacji „dorysowania” i tokeny kolorów, żeby wizualizacja pasowała do aplikacji. Równolegle sesja F1 robi silnik (`index.html`, `engine.js`, `style.css`). **Tych plików nie edytuj.**

Kontrakt z silnikiem:
- udostępniasz `window.VIZ = { mount(el), setStage(nr), highlight(layerId), setView("dom"|"przekroj") }`
- silnik wywołuje `mount` po starcie, a `setStage` przy każdej zmianie etapu
- motyw czytasz z `data-theme` na `<html>` i reagujesz na jego zmianę (MutationObserver)
- kolory bierzesz z tokenów CSS aplikacji, z wartościami zapasowymi

Zrób:
1. `js/viz.js` i `css/viz.css`: wizualizacja 1:1 z makiety (dom, 17 przybliżeń, przekrój z przełączaniem ocieplenia). Dodaj animacje w stylu makiety v2:
   - przy `setStage` nowe elementy dorysowują się (stroke-dashoffset) i wsuwają kaskadowo, a przy cofaniu znikają płynnie
   - przybliżenie wchodzi ze skalowaniem
   - respektuj `prefers-reduced-motion`
   - suwak zostaje jako „podgląd” innego etapu z przyciskiem powrotu do bieżącego
2. `makieta/test-viz.html`: minimalna strona z atrapą silnika (przyciski etapów, motyw) do sprawdzenia viz.js.
3. Do CLAUDE.md dopisz sekcję „Warstwy przekroju”: lista `layerId` z nazwami (do linków w treści).
4. Zaktualizuj swoją linię w `docs/PLAN.md` (F2 ✅). Przed edycją przeczytaj plik ponownie.

Na koniec otwórz `makieta/test-viz.html` (`Start-Process`) i napisz krótkie podsumowanie.
