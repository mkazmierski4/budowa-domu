Zadanie F0: makieta wyglądu, czyli statyczny podgląd do akceptacji przez właściciela projektu.

Przeczytaj tylko `CLAUDE.md`. Użyj skilla `frontend-design`. To nie jest silnik, tylko wygląd: treść wpisz na sztywno, JS minimalny.

Zrób jeden plik `makieta/makieta.html` (CSS i JS w środku, bez bibliotek, działa z dysku):
1. Pełny układ strony:
   - górny pasek budżetu: 2 000 000 zł, przykładowo „wydano ~412 000 zł”, pasek postępu
   - lewy panel: lista etapów 00–16 z ikonami, rozwinięty etap „04 Fundamenty” z krokami
   - środek: karta kroku „Zbrojenie ław”
   - wizualizacja domu
2. Karta kroku pokazuje wszystkie typy bloków z przykładową, sensowną treścią:
   - opis
   - koszt (min–max)
   - **decyzja** „Jaki fundament?” (ławy / płyta fundamentowa / ławy z bloczków): karty z plusami i minusami, oznaczona rekomendacja, klik zmienia zaznaczenie i kwotę w pasku
   - 💬 „Majster radzi”, ⚠️ błędy, 📋 formalności
   - checklista z odhaczaniem
   - quiz z jednym pytaniem (klik → poprawna/błędna + wyjaśnienie)
3. Wizualizacja w SVG, bez bibliotek, z przełącznikiem:
   - **Dom**: izometria lub elewacja 3/4 domu referencyjnego (dwuspadowy dach, kamień, drewno, garaż 2-stanowiskowy). Suwak „etap 0–16” pokazuje, jak dom rośnie: wykop → fundament → ściany → dach → okna → elewacja → ogród.
   - **Przekrój**: ściana i fundament z warstwami; hover/klik na warstwę pokazuje jej nazwę i grubość.
4. Jasny i ciemny motyw (przełącznik). Widok telefonu: wizualizacja nad treścią, panel etapów chowany. Klimat: ciepły, „architektoniczny” (beże, drewno, grafit), jak zdjęcie wieczornego domu z oświetleniem.

Na koniec: 3–5 linii podsumowania i ścieżka do pliku. Nie aktualizuj innych plików poza `docs/PLAN.md` (F0 ✅).
