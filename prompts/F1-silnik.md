Zadanie F1: silnik strony i wzorcowy etap „01 Działka”.

Przeczytaj `CLAUDE.md` i `docs/DECYZJE.md`. Wygląd jest **zatwierdzony** w `makieta/makieta-v2.html`. Przejmij z niej układ, style, motywy, ikony, podział kroku (Opis / Wybór / Pytanie / Odbiór), nawigację (strzałki, swipe, zakładki na telefonie) i **wszystkie animacje**. Nie projektuj od nowa. **Nie przenoś rysunku domu:** wizualizację robi równolegle sesja F2 w `js/viz.js`. Zostaw kontener `<div id="viz">`.

Jedyna poprawka wyglądu od właściciela projektu: rozwijane sekcje (porady majstra, błędy, formalności) mają być estetyczniej wypisane. Zrób z nich czytelne listy z myślnikiem lub cienkim znacznikiem, z odstępami między punktami, kluczową frazą pogrubioną na początku punktu i delikatnym wejściem kaskadowym. Bez ścian tekstu.

Kontrakt z viz.js (trzymaj się dokładnie):
- viz.js udostępnia `window.VIZ = { mount(el), setStage(nr), highlight(layerId), setView("dom"|"przekroj") }`
- silnik po starcie wywołuje `VIZ.mount(document.getElementById("viz"))`, a przy każdej zmianie etapu `VIZ.setStage(nr)` (o ile `window.VIZ` istnieje)
- w treści link „zobacz w przekroju” wywołuje `BUDOWA.showSection(layerId)`, który przekazuje do `VIZ.highlight(layerId)`
- ukończenie etapu (animacja „dorysowania” w makiecie) też idzie przez `VIZ.setStage(nr)`
- motyw: atrybut `data-theme` na `<html>`

Zrób:
1. `index.html`, `css/style.css`, `js/engine.js`.
   - Render pól kroku według formatu z CLAUDE.md: body, cost, decision, tips, mistakes, formal, checklist, quiz, widget (`BUDOWA.addWidget(name, renderFn)`), diagram, rozłożone na części kroku jak w makiecie. Puste części pomijaj.
   - Budżet: suma z wybranych opcji i kosztów kroków (środek widełek oraz min–max) wobec 2 000 000 zł, z kategoriami z DECYZJE.md. Każdy etap ma pole `category`; dopisz je do formatu w CLAUDE.md.
   - localStorage (try/catch): przeczytane kroki, wybory, checklisty, odebrane etapy, motyw.
   - Hash w URL `#01-dzialka/krok`.
   - W `index.html`: `<link>` do `css/viz.css`, `<script>` dla `js/viz.js` i wszystkich etapów 00–16 (slugi bez polskich znaków). Silnik po cichu pomija brakujące pliki. Listę nazw plików wpisz do `docs/PLAN.md`.
2. `content/01-dzialka.js`: wzorcowy, pełny etap, ok. 8–10 kroków:
   - gdzie szukać działki
   - MPZP/WZ
   - media
   - badania gruntu (geotechnika)
   - kształt i nasłonecznienie
   - dojazd/służebności
   - sprawdzenie księgi wieczystej
   - umowa przedwstępna
   - akt notarialny i koszty transakcyjne
   - mapa do celów projektowych

   W każdym kroku porady, błędy, formalności, a gdzie ma to sens, decyzje i quiz. Widget `koszty-zakupu` w `js/widgets/koszty-zakupu.js` (cena działki → PCC 2%, taksa notarialna, wpisy do KW, razem). Ceny realne: 2026 r., okolice małego miasta.
3. Treść etapu 04 z makiety (9 kroków „Fundamenty”) przepisz do `content/04-fundamenty.js` w formacie z CLAUDE.md. Będzie punktem wyjścia dla sesji z etapem 04. Ustaw jej status 🔄 w PLAN.md.
4. Zaktualizuj swoje linie w `docs/PLAN.md` (F1 ✅) i `docs/DECYZJE.md` (działka z kosztem). Przed edycją przeczytaj je ponownie, bo F2 działa równolegle.

Na koniec otwórz `index.html` (`Start-Process`) i napisz krótkie podsumowanie, w tym ewentualne zmiany formatu treści (wpisz je do CLAUDE.md).
