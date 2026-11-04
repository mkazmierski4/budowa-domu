Zadanie F4: szlif całości przed publikacją (strona będzie publiczna na GitHub Pages).

Przeczytaj `CLAUDE.md`, `docs/PLAN.md` i `docs/DECYZJE.md`. Pliki treści czytaj tylko tam, gdzie poprawiasz konkretne kroki. Użyj skilla `frontend-design` do nowych elementów UI.

1. **Spójność budżetu** (limity kategorii zmienione 2026-11-04, linia „podział budżetu” w DECYZJE.md; silnik `js/engine.js` jest już poprawiony):
   - `content/00-finanse.js`: krok 1 (tekst, fakty, diagram, procenty) i krok 4 przelicz na 315 / 685 / 245 / 545 / 280 tys. + rezerwa 230 tys.
   - `content/15-ogrod.js`: pergola jako „2. rok”. Rekomendowana opcja nie ma jej w koszcie, ale stopy pod słupy robimy od razu. Dopasuj tekst i widget.
   - Okap: etap 13 i etap 14 mają się zgadzać. Zlew jest w wyspie, a płyta przy ścianie, więc okap jest przyścienny i obiegowy. Popraw etap 13 (tekst i koszt).
   - Sprawdź w aplikacji, że suma planu jest ≤ 2,07 mln, kwota „Zostaje” nie jest czerwona, a żadna kategoria nie przekracza limitu o więcej niż kilka tysięcy.
2. **Pełny test aplikacji** (headless Chrome/Edge, skrypt w scratchpadzie, nie w repo):
   - przejdź wszystkie 17 etapów i każdy krok, w obu motywach i przy 1366 px oraz 390 px
   - zbieraj błędy JS z konsoli i 404
   - sprawdź, że każdy widget się renderuje i reaguje na zmianę wartości, że decyzje przeliczają budżet, quizy i checklisty działają, a odbiór etapu dorysowuje dom
   - napraw znalezione błędy
   - usuń z `index.html` tagi plików, które nie istnieją, żeby nie było 404
3. **Ilustracje:**
   - w bibliotece popraw kontrast tekstu na materiale `papier` w ciemnym motywie (zgłoszone w etapie 16)
   - w `makieta/przeglad-ilustracji.html` wszystkie etapy mają mieć 0 błędów w obu motywach i na telefonie
4. **Wyszukiwarka:** pole w pasku i skrót Ctrl+K (na telefonie ikona). Szuka w tytułach etapów i kroków, treści, poradach i decyzjach, podświetla trafienia i przenosi do kroku. Bez bibliotek, indeks budowany w przeglądarce.
5. **Ekran powitalny** przy pierwszej wizycie (potem dostępny z menu):
   - czym jest encyklopedia
   - dom referencyjny i budżet 2,3 mln zł
   - jak korzystać: etapy, decyzje, quizy, odbiory, wizualizacja
   - zastrzeżenie, że ceny są orientacyjne na 2026 r., a materiał jest edukacyjny i nie zastępuje projektanta ani kierownika budowy
6. **Publikacja:**
   - fonty lokalnie w `fonts/` (woff2, sprawdź licencję OFL i dołącz plik licencji), żeby strona działała offline
   - meta tagi (title, description, Open Graph) i favicon (SVG, motyw domu)
   - `README.md` po polsku: co to jest, jak uruchomić lokalnie, struktura, zastrzeżenie
   - plik `.nojekyll`
   - strona ma działać z podkatalogu (`/budowa-domu/`), więc tylko względne ścieżki
7. Zaktualizuj `docs/PLAN.md` (F4 ✅). Nie commituj. Otwórz index.html (`Start-Process`). Podsumowanie: lista naprawionych błędów, końcowy budżet według kategorii, wynik testu (liczba etapów i kroków bez błędów).
