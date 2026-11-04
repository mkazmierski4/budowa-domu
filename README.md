# Od działki do klucza

Darmowa, interaktywna encyklopedia budowy domu jednorodzinnego: od zakupu działki, przez projekt, stan surowy, instalacje i wykończenie, po ogród, odbiory i przeprowadzkę.

To nie jest gra. Nie da się przegrać, a budżet jest stały i tylko pokazuje koszty. Każdy krok ma krótki opis z ilustracją, porady, częste błędy i formalności. Tam, gdzie ma to sens, są też:
- **decyzje**: warianty z kosztami, które od razu przeliczają budżet,
- **quizy**: krótkie pytania sprawdzające,
- **odbiory**: listy kontrolne, po których dom na wizualizacji rośnie,
- **kalkulatory**: beton, ściany, dach, okna, ogrzewanie, fotowoltaika, ogród i inne.

## Dom referencyjny i budżet

Wszystkie etapy liczą ten sam dom: ok. 190 m² użytkowej, parter i poddasze użytkowe, dach dwuspadowy ok. 40°, garaż na dwa auta w bryle. Działka ma ok. 1200 m², a ogród z basenem ok. 1000 m².

Budżet całkowity to **2 300 000 zł**: działka i formalności 315 tys., stan surowy 685 tys., instalacje 245 tys., wykończenie 545 tys., ogród 280 tys. oraz rezerwa 230 tys. (10%).

## Uruchomienie lokalnie

Strona nie ma build stepu ani zależności. Wystarczy pobrać repozytorium i otworzyć `index.html` w przeglądarce (działa też z dysku, przez `file://`, i offline, bo fonty są w `fonts/`).

Postęp, wybory i motyw zapisują się w `localStorage` przeglądarki.

Skróty: `←` i `→` przechodzą między częściami kroku, `Ctrl+K` (albo `/`) otwiera wyszukiwarkę.

## Publikacja

Strona jest przygotowana pod GitHub Pages (plik `.nojekyll`, tylko względne ścieżki), więc działa również z podkatalogu, np. `/budowa-domu/`.

## Struktura

```
index.html            szkielet strony, ładuje wszystkie skrypty
favicon.svg
css/                  style.css (aplikacja), viz.css (wizualizacja), illus.css (ilustracje), fonts.css
fonts/                font Onest (woff2) i licencja OFL
js/engine.js          rejestr etapów, nawigacja, budżet, zapis postępu, wyszukiwarka, ekran powitalny
js/viz.js             wizualizacja 2D (SVG) rosnącego domu i przekrój warstw
js/illus.js           biblioteka ilustracji kroków
js/illus/NN-slug.js   ilustracje jednego etapu
js/widgets/*.js       kalkulatory i inne interakcje
content/NN-slug.js    treść: jeden plik = jeden etap
makieta/              makiety i narzędzia robocze (m.in. przegląd ilustracji)
docs/                 plan prac i rejestr decyzji merytorycznych
```

## Zastrzeżenie

Materiał ma charakter **edukacyjny**. Ceny są **orientacyjne**, z 2026 r., dla okolic małego miasta, i w konkretnej gminie mogą się różnić. Poradnik nie zastępuje projektanta, kierownika budowy, rzeczoznawcy ani porady prawnej, podatkowej czy finansowej. Przepisy (Prawo budowlane, warunki techniczne, normy) zmieniają się, więc przed decyzją sprawdź aktualny stan w urzędzie albo u osoby z uprawnieniami.

## Licencje

Font Onest: SIL Open Font License 1.1, Copyright 2021 The Onest Project Authors (`fonts/OFL.txt`).
