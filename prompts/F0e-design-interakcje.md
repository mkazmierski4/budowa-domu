(Wklejać do tej samej rozmowy co F0d.)

Opinia właściciela projektu: żaden z 4 wariantów nie pasuje. Wyglądają jak „zwykła strona”. Najbardziej podobała mu się **pierwsza makieta**: układ aplikacji z budżetem u góry, etapami po lewej, kartą kroku i wizualizacją obok, w ciepłych kolorach (piaskowiec, grafit, drewno, wieczór ze światłem w oknach). Była tylko trochę „AI-owa”. Pierwsza wersja nie przetrwała, bo F0b nadpisał plik, ale obecny `makieta/makieta.html` ma **ten sam układ i tę samą wizualizację**, zmienił się tylko styl.

Zrób **jeden** dopracowany kierunek: nowoczesną aplikację edukacyjną, a nie stronę WWW. Ma być estetycznie, przyjemnie, łatwo się czytać i dawać satysfakcję z klikania. Poziom wykończenia jak dobre produkty (Apple, Linear, Duolingo w wersji „dla dorosłych”).

**Układ:** wróć do układu aplikacji z pierwszej makiety (trzy strefy i pasek budżetu). Usuń to, co było AI-owe: emoji, generyczne zaokrąglone karty, przypadkowe kolory. Zamiast emoji użyj spójnego zestawu ikon liniowych.

**Czytanie:**
- Jeden krok to jeden ekran, bez długiego scrolla. Treść podana porcjami: najpierw krótki opis, potem rozwijane sekcje (porady, błędy, formalności).
- Duży, wygodny tekst i dużo światła.
- Nawigacja strzałkami na klawiaturze i gestem przesunięcia na telefonie.

**Animacje i interakcje (dużo, ale płynnie, 150–400 ms, easing sprężynowy):**
- przejście między krokami: slajd lub przenikanie z kierunkiem
- elementy wchodzą kaskadowo (stagger)
- licznik budżetu animuje liczby
- słupki kategorii płynnie zmieniają długość
- przy zmianie wariantu decyzji chwilowo widać różnicę „+12 400 zł”
- karty wariantów reagują na hover i wybór (unoszenie, obrys, zaznaczenie)
- quiz: potrząśnięcie przy złej odpowiedzi, „ptaszek” rysujący się przy dobrej
- checklista: animowane odhaczanie, pasek postępu etapu
- ukończenie kroku lub etapu: subtelna nagroda (np. pieczątka „Odebrano”, pasek postępu domu)
- wizualizacja: przy zmianie etapu nowe elementy „dorysowują się” (stroke-dashoffset) i wsuwają; zaślepkę domu też tak animuj
- respektuj `prefers-reduced-motion`

**Styl:** ciepły, premium, inspirowany zdjęciem domu o zmierzchu (drewno, kamień, grafit, ciepłe światło), ale jasny motyw ma być równie dopracowany jak ciemny. Krój nowoczesny i czytelny, bez krojów ozdobnych w treści.

Zapisz to jako `makieta/makieta-v2.html` (działa z dysku) i opublikuj jako **aktualizację tego samego artefaktu** (url: https://claude.ai/artifact/V8UwQ2T6mGfJssUS5igJsc), żeby link się nie zmienił. Sprawdź podgląd także na szerokości telefonu. Pustą kanwę (https://claude.ai/artifact/XqdwHCVzeep4tVNpUzHMsY) usuń. Do `docs/DECYZJE.md` niczego nie dopisuj, to rejestr decyzji budowlanych. Status zapisz tylko w `docs/PLAN.md`.

Na koniec podaj link i 3–5 linii podsumowania.
