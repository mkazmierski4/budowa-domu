Zadanie F5c: jakość ilustracji. Narzędzie przeglądu, automatyczne kontrole i ulepszenie biblioteki.

Problem od właściciela projektu: wiele ilustracji z etapów 00–05 jest źle zrobionych. Część jest super, ale typowe błędy to:
- napisy wychodzą poza swoje prostokąty (np. „odwołanie 14 dni” szersze niż pasek)
- pigułki z podpisami zasłaniają postacie (głowa schowana pod „Sprzedający”)
- zła skala i logika sceny (ludzie stoją NA stole u notariusza)
- elementy „wiszą w powietrzu” bez związku z resztą (tarcza, pigułki OC/Szkody)
- przypadkowy, nieestetyczny układ

Przyczyna: sesje rysowały bez sprawdzenia obrazu, a biblioteka pozwala stawiać podpisy gdziekolwiek.

Przeczytaj `CLAUDE.md` (sekcja „Ilustracje”), `js/illus.js` i `css/illus.css`. Z plików `js/illus/*.js` czytaj tylko to, co potrzebne do testów. Użyj skilla `frontend-design`.

Zrób:
1. **`makieta/przeglad-ilustracji.html`**: strona przeglądu dla właściciela i sesji.
   - Siatka wszystkich ilustracji wybranego etapu (lub wszystkich), każda klatka sekwencji osobno, z ID kroku.
   - Przełączniki: motyw jasny/ciemny, szerokość „telefon”.
   - **Automatyczne kontrole w przeglądarce** (getBBox / getBoundingClientRect), zaznaczone na czerwono z opisem:
     - tekst wychodzi poza swój kształt
     - podpisy nachodzą na siebie
     - podpis zasłania postać, głowę lub dłoń (elementy oznaczone jako chronione)
     - coś wychodzi poza viewBox
   - Licznik błędów na etap.
   - **Ocena właściciela**: przy każdej ilustracji ✓ / ✗ i pole na komentarz (localStorage w try/catch), oraz przycisk „Kopiuj listę do poprawy”, który kopiuje tekst w formacie `etap/krok-id: komentarz`.
2. **Ulepszenia biblioteki `js/illus.js`** (zachowaj API, istniejące ilustracje mają dalej działać):
   - Automatyczne rozsuwanie podpisów po wstawieniu SVG: pigułki i callouty omijają siebie nawzajem i elementy chronione (postać, głowa, dłoń dostają atrybut chroniący), a linia odniesienia się wydłuża.
   - Tekst w kształtach dopasowuje się sam: zmniejszenie czcionki do minimum albo zawinięcie albo wyniesienie podpisu na zewnątrz z linią.
   - **Szablony kompozycji**, żeby sesje nie układały wszystkiego ręcznie:
     - `a.layout.scene(main, labels)`: scena w środku, podpisy w kolumnach po bokach z liniami odniesienia
     - `a.layout.compare(okSvg, badSvg, tytuły)`
     - `a.layout.timeline(kroki)`
     - `a.layout.steps(ikony)`
     - `a.layout.table(osoby, przedmiot)` (ludzie siedzą lub stoją PRZY stole, w poprawnej skali)
   - Brakujące elementy, które sesje rysowały lokalnie: `house`, `shield`, `magnifier`, `circle` (przerywany), `excavator`, `mixerTruck`, `crane`, `tripod` (geodeta), `laptop`, `desk`/`table`, `container`, `toilet`, osoba siedząca.
3. Przerób jako dowód 3 złe przykłady z zrzutów:
   - `00-finanse/ubezpieczenie`
   - `01-dzialka/akt-notarialny`
   - oś „pozwolenie vs zgłoszenie” w `02-projekt`
   Każdy ma przejść kontrole bez błędów i dobrze wyglądać w obu motywach.
4. Do CLAUDE.md (sekcja „Ilustracje”) dopisz:
   - zasady kompozycji: jeden wyraźny temat, podpisy przy krawędziach, nie na obiektach; skala ludzi względem mebli i budynku; nic nie wisi w powietrzu bez podłoża lub cienia
   - **obowiązek**: przed oddaniem otwórz przegląd dla swojego etapu, popraw wszystkie czerwone błędy i obejrzyj zrzut w obu motywach
5. Zaktualizuj `docs/PLAN.md` (F5c), otwórz `makieta/przeglad-ilustracji.html` (`Start-Process`) i napisz krótkie podsumowanie: liczba błędów automatycznych na etap przed poprawkami.
