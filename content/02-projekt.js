/* Etap 02: Projekt, adaptacja, pozwolenie/zgłoszenie. Ceny orientacyjne, 2026 r., okolice małego miasta, dom referencyjny ok. 190 m². */
BUDOWA.addStage({
  id: "02-projekt", nr: 2, title: "Projekt i pozwolenie", icon: "📐", category: "dzialka",
  summary: "Od wyboru projektu przez zgodność z planem miejscowym i warunki przyłączenia po pozwolenie na budowę, kierownika, dziennik i zawiadomienie o starcie robót.",
  duration: "3–6 mies.",
  steps: [

  /* 1 ------------------------------------------------------------------ */
  {
    id: "droga-do-pozwolenia",
    title: "Od pomysłu do pierwszego wykopu",
    lead: "Zanim koparka wjedzie na działkę, musisz mieć projekt, ostateczne pozwolenie (albo brak sprzeciwu przy zgłoszeniu), kierownika budowy i zgłoszony start robót. Całość zajmuje zwykle 3–6 miesięcy, a większość tego czasu da się prowadzić równolegle.",
    time: "3–6 mies.", team: "ty, architekt, geodeta, urząd",
    facts: [["Projekt", "ok. 2–3 mies.", "file"], ["Urząd", "21–65 dni + 14", "stamp"], ["Zabudowa domu", "ok. 169 m²", "house"]],
    body: `
      <p>Kolejność prac jest prosta i warto jej pilnować: <strong>mapa i plan miejscowy</strong> (etap 01) → <strong>projekt i adaptacja</strong> → <strong>warunki przyłączenia mediów</strong> (równolegle z projektem) → <strong>wniosek lub zgłoszenie</strong> w e-Budownictwie → <strong>decyzja ostateczna</strong> → <strong>kierownik, dziennik budowy i zawiadomienie</strong> → wykop.</p>
      <p>Dom referencyjny ma ok. <strong>190 m² użytkowej</strong>: parter i poddasze użytkowe, dach dwuspadowy 40°, garaż 2-stanowiskowy w bryle. Bryła to ok. 13 × 9,5 m plus garaż 6,5 × 7 m, czyli powierzchnia zabudowy ok. <strong>169 m²</strong>, to jest ok. 14% działki 1200 m².</p>
      <p>Najwięcej czasu zjadają <strong>braki w dokumentach</strong> i oczekiwanie na operatorów sieci. Dlatego warunki przyłączenia składaj, gdy architekt dopiero zaczyna rysować, a nie po skończonym projekcie.</p>`,
    diagram: `<svg viewBox="0 0 360 150" role="img" aria-label="Sześć kroków od planu miejscowego do startu robót">
      <rect x="10" y="10" width="100" height="42" rx="6" style="fill:var(--plaster);stroke:var(--ink-2)" stroke-width="1.2"/>
      <text x="20" y="28">1 Plan i mapa</text><text x="20" y="43">MPZP, geodeta</text>
      <rect x="130" y="10" width="100" height="42" rx="6" style="fill:var(--plaster);stroke:var(--ink-2)" stroke-width="1.2"/>
      <text x="140" y="28">2 Projekt</text><text x="140" y="43">adaptacja, PZT</text>
      <rect x="250" y="10" width="100" height="42" rx="6" style="fill:var(--plaster);stroke:var(--ink-2)" stroke-width="1.2"/>
      <text x="260" y="28">3 Media</text><text x="260" y="43">warunki przyłącz.</text>
      <rect x="10" y="96" width="100" height="42" rx="6" style="fill:var(--plaster);stroke:var(--ink-2)" stroke-width="1.2"/>
      <text x="20" y="114">4 Wniosek</text><text x="20" y="129">e-Budownictwo</text>
      <rect x="130" y="96" width="100" height="42" rx="6" style="fill:var(--plaster);stroke:var(--ink-2)" stroke-width="1.2"/>
      <text x="140" y="114">5 Decyzja</text><text x="140" y="129">ostateczna</text>
      <rect x="250" y="96" width="100" height="42" rx="6" style="fill:var(--cladding);fill-opacity:.55;stroke:var(--ink-2)" stroke-width="1.2"/>
      <text x="260" y="114">6 Start robót</text><text x="260" y="129">kierownik, EDB</text>
      <path d="M110 31H130M230 31H250M110 117H130M230 117H250" style="stroke:var(--ink-2)" stroke-width="1.4"/>
      <path d="M300 52V74H60V96" fill="none" style="stroke:var(--ink-2)" stroke-width="1.4"/>
    </svg>
    <figcaption>Sześć kroków etapu. Kroki 2 i 3 prowadzisz równolegle.</figcaption>`,
    tips: [
      "<b>Zacznij od architekta, nie od katalogu.</b> Przed zakupem projektu poproś o 1–2 godziny konsultacji z wypisem z MPZP i mapą. Architekt powie, czy dom 13 × 9,5 m z dachem 40° w ogóle się zmieści.",
      "<b>Złóż wnioski o media na początku.</b> Operator prądu potrzebuje tytułu prawnego do działki, a odpowiedź trwa zwykle 3–8 tygodni. Do projektu przyłączy potrzebujesz jej wcześniej niż do wniosku o pozwolenie.",
      "<b>Trzymaj teczkę od pierwszego dnia.</b> Mapa, opinia geotechniczna, wypis z MPZP, warunki mediów, projekt w PDF. Wszystko w jednym folderze w chmurze i na pendrivie, bo kierownik i wykonawcy będą o to pytać.",
      "<b>Nie kupuj materiałów przed ostatecznym pozwoleniem.</b> Zmiany w projekcie zdarzają się po uwagach urzędu i zwykle dotyczą okien, dachu albo garażu."
    ],
    mistakes: [
      "<b>Zakup projektu bez sprawdzenia planu miejscowego.</b> Dach 40° przy planie dopuszczającym 25–35° oznacza przeróbkę albo odmowę pozwolenia.",
      "<b>Czekanie z mediami na pozwolenie.</b> Operator potrafi zająć kilka tygodni, a przyłącze wodne i prądowe są potrzebne już na budowie.",
      "<b>Rozpoczęcie prac „bo już mam wizję”.</b> Wycinka drzew, wjazd ciężkim sprzętem i zdjęcie humusu przed pozwoleniem mogą skończyć się karą i wstrzymaniem budowy."
    ],
    formal: [
      ["Wypis i wyrys z MPZP albo decyzja WZ", "z etapu 01; projektant potrzebuje ich na starcie"],
      ["Mapa do celów projektowych", "z etapu 01; musi być aktualna"],
      ["Opinia geotechniczna", "z etapu 01; trafia do projektu konstrukcji"]
    ],
    checklist: [
      "Mam mapę, MPZP albo WZ i opinię geotechniczną",
      "Znam kolejność: projekt, media, wniosek, decyzja ostateczna, kierownik, zawiadomienie",
      "Mam wybranego architekta lub pracownię",
      "Wnioski o media złożone równolegle z projektem",
      "Założony folder na dokumenty budowy"
    ],
    quiz: [{
      q: "Co musisz mieć w ręku, zanim architekt zacznie adaptację projektu do działki?",
      a: ["Pozwolenie na budowę i kierownika budowy", "Mapę do celów projektowych, wypis z MPZP lub WZ i opinię geotechniczną", "Ofertę wykonawcy i harmonogram płatności"],
      correct: 1,
      explain: "<b>Adaptacja opiera się na danych z działki.</b> Mapa pokazuje granice i wysokości, plan miejscowy parametry, a opinia geotechniczna sposób posadowienia. Pozwolenie i kierownik przychodzą później."
    }]
  },

  /* 2 ------------------------------------------------------------------ */
  {
    id: "wybor-projektu",
    title: "Projekt gotowy czy indywidualny",
    lead: "Dla domu ok. 190 m² najlepszy kompromis to projekt gotowy z adaptacją i zmianami. Dostajesz sprawdzone rysunki, a płacisz o kilkanaście tysięcy mniej niż za projekt od zera.",
    time: "6–12 tyg. (gotowy), 3–5 mies. (indywidualny)", team: "architekt z uprawnieniami, konstruktor",
    facts: [["Bryła", "13 × 9,5 m + garaż 6,5 × 7 m", "house"], ["Dach", "dwuspadowy 40°", "layers"]],
    body: `
      <p><strong>Projekt gotowy</strong> kupujesz na licencji. To rysunki dla typowych warunków, więc potrzebujesz <strong>adaptacji</strong>: architekt z uprawnieniami dopasowuje dom do twojej działki, planu miejscowego, gruntu i stref klimatycznych (obciążenie śniegiem i wiatrem, głębokość przemarzania) i przygotowuje <strong>projekt zagospodarowania działki</strong>. Bez adaptacji nie dostaniesz pozwolenia.</p>
      <p><strong>Zmiany</strong> w projekcie gotowym są normalne: przestawienie ścian działowych, garaż w bryle, powiększone przeszklenia, wolnostojąca wanna, siłownia zamiast gabinetu. Zmiany <strong>istotne</strong> (np. bryła, kąt dachu) wymagają zgody autora projektu, zgodnie z licencją. Sprawdź to przed zakupem.</p>
      <p><strong>Projekt indywidualny</strong> robi się od zera pod ciebie i twoją działkę. Daje najwięcej swobody, ale trwa kilka miesięcy i kosztuje wyraźnie więcej. Zwykle ma sens przy trudnej działce (skarpa, wąski front) albo gdy dom ma być unikatowy.</p>`,
    decision: {
      question: "Jak zdobyć projekt domu?",
      intro: "Ceny obejmują projekt zagospodarowania działki, projekt architektoniczno-budowlany i techniczny (konstrukcja i instalacje) dla domu ok. 190 m², 2026 r., orientacyjnie.",
      chosen: "gotowy-zmiany",
      options: [
        { id: "gotowy", name: "Projekt gotowy + adaptacja, bez większych zmian",
          cost: { min: 17000, max: 27000 }, time: "6–8 tyg.", note: "licencja + adaptacja do działki",
          pros: ["Najtańszy i najszybszy wariant", "Sprawdzone rozwiązania i gotowe zestawienie materiałów", "Mała ilość poprawek"],
          cons: ["Dom nie będzie dokładnie taki, jak chcesz", "Garaż w bryle, wanna wolnostojąca i siłownia wymagają zmian w układzie"],
          why: "Dobry, gdy układ pomieszczeń pasuje ci bez zmian. Dom referencyjny ma kilka cech spoza typowego katalogu." },
        { id: "gotowy-zmiany", name: "Projekt gotowy + adaptacja + zmiany pod nasz dom",
          cost: { min: 24000, max: 38000 }, time: "8–12 tyg.", note: "licencja + zmiany + adaptacja",
          pros: ["Układ pod rodzinę: salon z kominkiem, kuchnia z wyspą, pokój dziecięcy, siłownia", "Bryła i konstrukcja pozostają sprawdzone", "Ok. 15–30 tys. zł taniej niż projekt od zera"],
          cons: ["Zmiany bryły wymagają zgody autora", "Każda zmiana ścian przelicza konstrukcję i instalacje"],
          why: "Najlepszy stosunek ceny do efektu. Zmiany dotyczą układu wnętrz i przeszkleń, a nie bryły, więc zostają przy prostym dachu 40° i prostej konstrukcji." },
        { id: "indywidualny", name: "Projekt indywidualny",
          cost: { min: 42000, max: 68000 }, time: "3–5 mies.", note: "projekt od zera, 190 m²",
          pros: ["Dom idealnie dopasowany do działki i stron świata", "Pełna swoboda w bryle, przeszkleniach i detalach", "Autor zna twoje oczekiwania od pierwszego szkicu"],
          cons: ["Wyraźnie droższy i wolniejszy", "Więcej decyzji do podjęcia, więcej wersji roboczych", "Bez gotowego zestawienia materiałów"],
          why: "Ma sens przy trudnej działce albo gdy bryła ma być wyjątkowa. Dla prostego domu z dachem dwuspadowym nie zwraca się." }
      ]
    },
    tips: [
      "<b>Przejrzyj 10–15 projektów w katalogach, a potem wybierz 2–3.</b> Zwracaj uwagę na rzut parteru, nie na wizualizację. Dobry rzut ma krótkie komunikacje i salon od strony ogrodu.",
      "<b>Dopasuj wymiary do działki.</b> Front domu z garażem to ok. 19,5 m. Przy 30 m frontu masz po ok. 4 m od granicy z każdej strony, jeśli jest to zgodne z planem.",
      "<b>Czytaj licencję.</b> Najczęściej kupujesz prawo do jednej realizacji. Zmiany istotne wymagają zgody autora, a kopię do innej działki trzeba dokupić.",
      "<b>Zapytaj architekta, ile razy może poprawiać.</b> W umowie ustal 2–3 rundy poprawek w cenie, kolejne płatne godzinowo (orientacyjnie 150–250 zł za godzinę)."
    ],
    mistakes: [
      "<b>Zakup projektu „z katalogu” bez sprawdzenia, czy mieści się w planie.</b> Wysokość, kąt dachu i powierzchnia zabudowy w MPZP często odrzucają połowę katalogu.",
      "<b>Pomijanie adaptacji „bo projekt jest gotowy”.</b> Urząd odrzuci wniosek bez projektu zagospodarowania działki i oświadczeń projektanta.",
      "<b>Zmiany robione ustnie.</b> Każda poprawka powinna być na piśmie z ceną i terminem, żeby uniknąć sporu o rachunek."
    ],
    formal: [
      ["Licencja na projekt gotowy", "umowa z biurem projektowym; sprawdź prawo do zmian i liczbę realizacji"],
      ["Adaptacja przez architekta z uprawnieniami", "umowa o dzieło; zakres: PZT, adaptacja arch-bud, branże"],
      ["Zaświadczenie z izby (PIIB/OIA) i uprawnienia projektanta", "do wniosku; sprawdź ważność i numer"]
    ],
    checklist: [
      "Wybrane 2–3 projekty zgodne z MPZP",
      "Architekt potwierdził, że bryła zmieści się na działce",
      "Umowa określa zakres, termin, liczbę poprawek i cenę",
      "Licencja dopuszcza potrzebne zmiany",
      "Projekt zawiera PZT, arch-bud i techniczny (konstrukcja i instalacje)"
    ],
    quiz: [{
      q: "Kupiłeś projekt gotowy. Czego jeszcze potrzebujesz przed złożeniem wniosku o pozwolenie?",
      a: ["Niczego, projekt jest kompletny", "Adaptacji do działki i projektu zagospodarowania działki wykonanych przez uprawnionego architekta", "Zgody wszystkich sąsiadów"],
      correct: 1,
      explain: "<b>Projekt gotowy jest uniwersalny.</b> Dopiero adaptacja dopasowuje go do działki, planu miejscowego i gruntu oraz tworzy projekt zagospodarowania działki, czyli to, co urząd faktycznie zatwierdza."
    }]
  },

  /* 3 ------------------------------------------------------------------ */
  {
    id: "zgodnosc-mpzp",
    title: "Zgodność z planem miejscowym lub WZ",
    lead: "Urząd odmówi pozwolenia na projekt sprzeczny z MPZP albo z decyzją WZ. Dlatego przed adaptacją sprawdzasz pięć parametrów: linię zabudowy, wysokość, kąt dachu, powierzchnię zabudowy i powierzchnię biologicznie czynną.",
    time: "1–2 dni", team: "ty + architekt",
    facts: [["Kalenica", "ok. 8–8,5 m nad terenem", "layers"], ["Zabudowa", "ok. 169 m² (ok. 14%)", "house"], ["Biol. czynna", "ok. 60–70%", "shield"]],
    body: `
      <p>Przejdź razem z architektem przez uchwałę planu punkt po punkcie i porównaj z naszym domem:</p>
      <ul>
        <li><strong>Linia zabudowy.</strong> Nieprzekraczalna linia od drogi (zwykle 5–8 m) to granica, za którą nie może wyjść ściana ani taras zadaszony. Dom stoi przy niej, a ogród z basenem za domem.</li>
        <li><strong>Wysokość i kondygnacje.</strong> Dom ma parter i użytkowe poddasze; kalenica leży ok. 8–8,5 m nad terenem (posadzka ±0,00 to teren +0,35–0,40 m). Plan często dopuszcza 9–10 m, ale sprawdź, czy poddasze użytkowe liczy się jako kondygnacja.</li>
        <li><strong>Kąt i kształt dachu.</strong> Dach dwuspadowy 40° musi mieścić się w widełkach z planu, np. 30–45°. Sprawdź też kolor pokrycia i kierunek kalenicy.</li>
        <li><strong>Powierzchnia zabudowy.</strong> Dom z garażem zajmuje ok. 169 m², czyli ok. 14% działki. Plany zwykle dopuszczają 20–30%. Zadaszony taras często wlicza się do zabudowy, a zadaszenie przy słupach także.</li>
        <li><strong>Powierzchnia biologicznie czynna.</strong> Po odjęciu domu, podjazdu, chodników, tarasu i basenu zostaje ok. 750–850 m², czyli ok. 60–70% działki. Plany wymagają zwykle 40–60%. Basen z obejściem do biologicznie czynnej nie wchodzi.</li>
      </ul>
      <p>Przy <strong>decyzji WZ</strong> parametry wynikają z sąsiedztwa: wysokość, kąt dachu i wskaźniki wzorujesz na budynkach w okolicy. Jeśli sąsiednie domy mają 30°, decyzja może dopuścić tylko zbliżony kąt, więc 40° trzeba obronić we wniosku.</p>`,
    diagram: `<svg viewBox="0 0 360 190" role="img" aria-label="Przekrój wysokościowy domu: poziom posadzki, ścianka kolankowa 1 m, dach 40 stopni, kalenica ok. 8,2 m">
      <rect x="0" y="170" width="360" height="20" style="fill:var(--soil, var(--concrete))"/>
      <rect x="80" y="162" width="190" height="8" style="fill:var(--concrete)"/>
      <rect x="80" y="86" width="190" height="76" style="fill:var(--plaster);stroke:var(--ink-2)" stroke-width="1.2"/>
      <path d="M80 106H270" style="stroke:var(--ink-2)" stroke-width="1" stroke-dasharray="4 3"/>
      <path d="M72 86 175 6 278 86Z" style="fill:var(--rust);fill-opacity:.55;stroke:var(--ink-2)" stroke-width="1.2"/>
      <path d="M222 86A48 48 0 0 0 214 62" fill="none" style="stroke:var(--ink)" stroke-width="1"/>
      <text x="228" y="82">40°</text>
      <text x="86" y="130">parter ok. 2,8 m</text>
      <text x="86" y="100">kolankowa 1 m</text>
      <text x="108" y="64">poddasze użytkowe</text>
      <text x="6" y="160">±0,00</text>
      <path d="M292 6V170M286 6h12M286 170h12" style="stroke:var(--ink-2)" stroke-width="1"/>
      <text x="300" y="92">ok. 8,2 m</text>
    </svg>
    <figcaption>Przekrój wysokościowy: kalenica ok. 8–8,5 m nad terenem (orientacyjnie). Sprawdź z architektem, czy mieści się w limicie planu.</figcaption>`,
    tips: [
      "<b>Weź linijkę i kalkulator.</b> Wylicz w arkuszu: zabudowa ÷ działka, biologicznie czynna ÷ działka, wysokość kalenicy. Zapisz wynik w jednej tabeli i pokaż architektowi.",
      "<b>Zapytaj w urzędzie, jak liczą taras zadaszony.</b> W jednych gminach wlicza się do zabudowy, w innych nie. To różnica kilkudziesięciu metrów kwadratowych.",
      "<b>Biologicznie czynna to nie „zielone na zdjęciu”.</b> Kostka brukowa na piasku, kratki ażurowe i trawa na stropie liczą się według definicji z planu, a nie według wyglądu. Sprawdź definicję.",
      "<b>Odstępstwa od przepisów technicznych to osobna sprawa.</b> Zgodność z planem miejscowym nie znosi wymogu odległości od granic: ściana z oknami 4 m, bez okien 3 m (zasada ogólna, sprawdź warunki szczególne)."
    ],
    mistakes: [
      "<b>Wysokość liczona od złego punktu.</b> Plan określa, czy mierzymy od poziomu terenu przy wejściu, od najniższego poziomu terenu, czy od posadzki. Różnica to kilkadziesiąt centymetrów.",
      "<b>Zapomniany basen, pergola i podjazd w bilansie.</b> Zielone ma zostać ok. 60–70%, a przy dużym podjeździe i tarasie granica z planu szybko się zbliża.",
      "<b>Dach „prawie 40°”.</b> Plan z widełkami 30–38° odrzuci dach 40° także przy odrobinie przekroczenia."
    ],
    formal: [
      ["Wypis i wyrys z MPZP", "z etapu 01; projektant weryfikuje wszystkie parametry"],
      ["Oświadczenie projektanta o zgodności z MPZP lub WZ", "wchodzi w skład projektu zagospodarowania działki"]
    ],
    checklist: [
      "Przeznaczenie terenu pasuje do domu jednorodzinnego",
      "Linia zabudowy zachowana, taras i garaż wewnątrz niej",
      "Wysokość kalenicy ok. 8–8,5 m mieści się w limicie",
      "Kąt dachu 40° i jego kształt dopuszczone",
      "Zabudowa ok. 14% i biologicznie czynna ok. 60–70% zgodne z planem",
      "Wymogi planu co do ogrodzeń i miejsc postojowych sprawdzone"
    ],
    quiz: [{
      q: "Plan miejscowy dopuszcza dachy 25–35°, a wybrany projekt ma dach 40°. Co jest najrozsądniejsze?",
      a: ["Zbudować dach 40°, bo wygląda lepiej", "Zmienić projekt na dach w widełkach z planu albo wybrać inny projekt", "Złożyć zgłoszenie zamiast wniosku o pozwolenie"],
      correct: 1,
      explain: "<b>Projekt musi być zgodny z planem.</b> Urząd odmówi pozwolenia na dach spoza widełek, a zmiana planu trwa latami. Zgłoszenie też wymaga zgodności z planem."
    }]
  },

  /* 4 ------------------------------------------------------------------ */
  {
    id: "warunki-przylaczenia",
    title: "Warunki przyłączenia mediów",
    lead: "Operatorzy sieci wydają warunki przyłączenia na wniosek, zwykle w 3–8 tygodni. Złóż je na początku projektu, żeby architekt mógł od razu zaplanować przyłącza i moc.",
    time: "3–8 tyg.", team: "operatorzy sieci",
    body: `
      <p>Dom z pompą ciepła nie potrzebuje gazu, więc składasz trzy wnioski: <strong>prąd</strong> do operatora sieci dystrybucyjnej, <strong>woda</strong> do wodociągów i <strong>kanalizacja</strong> do przedsiębiorstwa lub gminy. Internet zamawiasz u dostawcy zwykle później.</p>
      <p>Przy prądzie podajesz <strong>moc przyłączeniową</strong>. Pompa ciepła, płyta indukcyjna, pompa basenu, rekuperator i ładowarka auta to razem sporo, a zwiększenie mocy później kosztuje i trwa. Z architektem ustal zapas: orientacyjnie 3 × 25 A albo 3 × 32 A, czyli ok. 17–22 kW. Zapytaj też o mikroinstalację fotowoltaiczną, którą dom będzie miał później.</p>
      <p>Ścieki: jeśli kanalizacji nie ma, w projekcie pojawia się <strong>przydomowa oczyszczalnia</strong> albo <strong>zbiornik bezodpływowy</strong>. Wniosek o warunki składasz wtedy do gminy. Szczegóły techniczne wybierzesz w etapie 03.</p>`,
    tips: [
      "<b>Podaj konkretne dane we wniosku.</b> Numer działki, tytuł prawny, planowaną moc i datę rozpoczęcia budowy. Niepełny wniosek wraca z wezwaniem i zjada 2–3 tygodnie.",
      "<b>Zapytaj o termin ważności warunków.</b> Warunki prądowe są zwykle ważne ok. 2 lata (sprawdź w dokumencie), co wystarcza na budowę, ale nie na długie odkładanie startu.",
      "<b>Dopytaj o odległość i koszt przyłącza.</b> Opłatę przyłączeniową i długość przyłączy poznasz dopiero w warunkach lub umowie. To zwykle 5–20 tys. zł za prąd i ok. 8–25 tys. zł za wodę i kanalizację, orientacyjnie.",
      "<b>Sprawdź zjazd z drogi.</b> Jeśli działka nie ma jeszcze zjazdu, wniosek o zgodę na lokalizację zjazdu złóż równolegle."
    ],
    mistakes: [
      "<b>Zbyt mała moc „bo tyle ma sąsiad”.</b> Sąsiad nie ma pompy ciepła i basenu. Zwiększenie mocy po budowie to nowy wniosek i często nowa opłata.",
      "<b>Wniosek bez prawa do działki.</b> Operator prądu wymaga tytułu prawnego. Przed aktem notarialnym potrzebna jest zgoda sprzedającego.",
      "<b>Umowa przyłączeniowa podpisana „na ostatnią chwilę”.</b> Montaż przyłącza zależy od terminu operatora, więc wykop i wprowadzenie mediów mogą czekać."
    ],
    formal: [
      ["Wniosek o warunki przyłączenia do sieci elektroenergetycznej", "operator sieci; tytuł prawny, plan sytuacyjny, moc"],
      ["Wniosek o warunki przyłączenia do wodociągu i kanalizacji", "przedsiębiorstwo wodociągowe lub gmina"],
      ["Zgoda na lokalizację zjazdu", "zarządca drogi; często potrzebna do pozwolenia"]
    ],
    checklist: [
      "Złożony wniosek o warunki prądu z mocą i zapasem",
      "Złożone wnioski o wodę i kanalizację albo wniosek do gminy w sprawie oczyszczalni",
      "Zjazd z drogi uzgodniony z zarządcą",
      "Warunki przekazane architektowi",
      "Znane terminy ważności warunków"
    ],
    quiz: [{
      q: "Dlaczego warto przy prądzie zamówić moc z zapasem?",
      a: ["Bo opłata przyłączeniowa rośnie wtedy tylko symbolicznie", "Bo pompa ciepła, indukcja, basen i ładowarka auta razem potrzebują sporo mocy, a zwiększenie później kosztuje i trwa", "Bo operator tego wymaga"],
      correct: 1,
      explain: "<b>Moc zmieniasz drogo i powoli.</b> Dom z pompą ciepła, rekuperacją, basenem i ładowarką ma duże obciążenia. Zapas to tanie ubezpieczenie."
    }]
  },

  /* 5 ------------------------------------------------------------------ */
  {
    id: "pzt",
    title: "Projekt zagospodarowania działki",
    lead: "Projekt zagospodarowania działki (PZT) to plan sytuacyjny: gdzie stoi dom, ile ma do granic, którędy wjeżdżasz i gdzie biegną przyłącza. To rysunek, który urząd i geodeta czytają najuważniej.",
    time: "1–2 tyg.", team: "architekt z uprawnieniami",
    body: `
      <p>PZT powstaje na <strong>mapie do celów projektowych</strong>. Architekt nanosi na nią: obrys domu i garażu z odległościami od granic, poziom posadzki ±0,00 względem terenu, zjazd i podjazd, miejsca postojowe, przyłącza (woda, kanalizacja, prąd), ewentualną oczyszczalnię i studzienki, ogrodzenie oraz drzewa do wycięcia.</p>
      <p>Dobrze jest nanieść od razu <strong>pełny plan ogrodu</strong>: taras zadaszony, basen 4,2 × 8,5 m, pergolę i domek dla dzieci. Dzięki temu urząd widzi całość i pilnuje zgodności z planem, a ty nie musisz później zmieniać dokumentów. Niektóre z tych obiektów mają własne progi (zgłoszenie, pozwolenie, odległości), więc <strong>sprawdź u projektanta, czy wystarczy ich naniesienie na PZT</strong>.</p>
      <p>PZT jest też podstawą <strong>wytyczenia domu</strong>. Geodeta przenosi punkty z rysunku w teren w etapie 03, więc błąd na PZT to błąd w terenie.</p>`,
    tips: [
      "<b>Poproś o PZT w skali 1:500 na mapie z wysokościami.</b> Przy poziomie ±0,00 = teren +0,35–0,40 m widać od razu, czy woda spłynie od domu i czy podjazd do garażu nie ma za dużego spadku (orientacyjnie do ok. 5–6%).",
      "<b>Podjazd do garażu 2-stanowiskowego zaplanuj na min. 5,5–6 m szerokości</b> i ok. 6 m długości przed bramą, żeby dwa auta wyjeżdżały bez cofania po trawniku.",
      "<b>Zaznacz miejsce na zbiorniki i maszynownię basenu.</b> Pompa, filtr i zbiornik wyrównawczy potrzebują ok. 4–6 m² i osobnego zasilania.",
      "<b>Wycinka drzew to osobna sprawa.</b> Zależnie od gatunku i obwodu pnia może wymagać zezwolenia albo zgłoszenia w gminie. Sprawdź przed wycięciem, bo kary są wysokie."
    ],
    mistakes: [
      "<b>PZT bez sprawdzenia odległości od granic.</b> 4 m dla ściany z oknami i 3 m bez okien (zasada ogólna). Pół metra błędu to odmowa albo przesunięcie domu.",
      "<b>Garaż bez miejsca do manewru.</b> Wąski podjazd 3 m i ostry skręt oznaczają, że auta nie wjadą bez cofania i niszczenia trawnika.",
      "<b>Przyłącza „na oko”.</b> Rury wody i kanalizacji muszą być poniżej głębokości przemarzania (ok. 1,0–1,2 m w Polsce, sprawdź w projekcie). Zbyt płytko oznacza zamarzanie."
    ],
    formal: [
      ["Projekt zagospodarowania działki", "architekt z uprawnieniami; część projektu budowlanego do wniosku"],
      ["Zgoda gminy na wycinkę drzew", "gmina; zależnie od gatunku i obwodu pnia"]
    ],
    checklist: [
      "Dom i garaż naniesione z odległościami od granic",
      "Poziom ±0,00 względem terenu i spływ wody",
      "Zjazd, podjazd i miejsca postojowe",
      "Przyłącza: woda, kanalizacja lub oczyszczalnia, prąd",
      "Basen, pergola i domek zaznaczone zgodnie z zaleceniem projektanta",
      "Drzewa do wycięcia zinwentaryzowane"
    ]
  },

  /* 6 ------------------------------------------------------------------ */
  {
    id: "projekt-budowlany-techniczny",
    title: "Projekt architektoniczno-budowlany i techniczny",
    lead: "Do urzędu trafia projekt zagospodarowania działki i projekt architektoniczno-budowlany. Projekt techniczny jest szczegółowy i potrzebny wykonawcom, a kierownik musi go mieć przed startem.",
    time: "2–4 tyg. (rozszerzenie)", team: "architekt, konstruktor, projektanci instalacji",
    cost: { min: 300, max: 800, note: "4–5 kompletów wydruków dla kierownika i ekip" },
    body: `
      <p><strong>Projekt architektoniczno-budowlany</strong> pokazuje, co powstanie: rzuty, przekroje, elewacje, opis techniczny, zastosowane rozwiązania, charakterystykę energetyczną, a także informację o bezpieczeństwie i ochronie zdrowia (BIOZ). To dokument, który urząd zatwierdza razem z PZT.</p>
      <p><strong>Projekt techniczny</strong> to szczegóły: konstrukcja (ławy, stropy, więźba), instalacje (elektryka, woda, kanalizacja, ogrzewanie, wentylacja), detale połączeń. Do urzędu go zwykle <strong>nie składasz</strong>, ale musi istnieć i być na budowie od pierwszego dnia. Zakres sprawdź u projektanta.</p>
      <p><strong>Projekt wykonawczy</strong> to opcjonalne, jeszcze dokładniejsze rysunki wybranych elementów: schodów, więźby, kominka, układu instalacji w posadzce. Wykonawca dostaje wtedy dokładne wymiary i mniej improwizuje.</p>`,
    decision: {
      question: "Jak szczegółowa dokumentacja techniczna?",
      intro: "Koszty to dopłata do projektu z poprzedniego kroku. Dom z pompą ciepła, rekuperacją, podłogówką i fotowoltaiką ma wiele instalacji, które łatwo „zagubić” w standardzie.",
      chosen: "rozszerzony",
      options: [
        { id: "standard", name: "Standardowy projekt techniczny",
          cost: { min: 0, max: 0 }, time: "w cenie adaptacji", note: "jak w projekcie gotowym",
          pros: ["Bez dodatkowych kosztów", "Wystarcza dla prostych rozwiązań"],
          cons: ["Instalacje opisane ogólnie", "Wykonawcy dopytują i wyceniają z zapasem", "Zmiany wyłaniają się podczas budowy i kosztują więcej"],
          why: "Wystarczy dla prostej wersji domu z grzejnikami i bez rekuperacji." },
        { id: "rozszerzony", name: "Rozszerzony: rysunki wykonawcze instalacji, więźby i schodów",
          cost: { min: 5000, max: 11000 }, time: "2–4 tyg.", note: "plany tras instalacji, rozdzielnie, więźba",
          pros: ["Wiadomo, gdzie biegną rury, kanały rekuperacji i kable", "Mniej poprawek i spornych wycen", "Łatwiej porównać oferty wykonawców"],
          cons: ["Dodatkowe 5–11 tys. zł", "Każda późniejsza zmiana wymaga nowego rysunku"],
          why: "Dom ma pompę ciepła, podłogówkę, rekuperację, PV i kominek. Zapłacone teraz 5–11 tys. zł oszczędza kilkadziesiąt tysięcy poprawek i spornych wycen." },
        { id: "rozszerzony-nadzor", name: "Rozszerzony + nadzór autorski w trakcie budowy",
          cost: { min: 8000, max: 16000 }, time: "2–4 tyg. + wizyty", note: "dokumentacja + wizyty autora",
          pros: ["Projektant odwiedza budowę i rozstrzyga wątpliwości", "Szybkie decyzje przy zmianach", "Wzmacnia kontrolę jakości"],
          cons: ["Wyższy koszt", "Dodatkowa osoba w łańcuchu decyzji"],
          why: "Dobry przy bardziej skomplikowanej bryle albo gdy nie ufasz wykonawcy. Przy prostym dachu 40° wystarczy kierownik z doświadczeniem." }
      ]
    },
    tips: [
      "<b>Zapytaj o format plików.</b> Dostaniesz PDF-y do urzędu, ale poproś też o pliki DWG lub DXF, bo wykonawcy instalacji z nich korzystają.",
      "<b>Weź 4–5 kompletów papierowych w skali A3.</b> Dla kierownika, ekipy murarskiej, dekarza i instalatorów. Papier na budowie wciąż jest szybszy niż telefon.",
      "<b>Poproś o zestawienie materiałów i stali.</b> Ławy 60 × 35 cm, zbrojenie, pustak 25 cm, ocieplenie 20 cm: ilości do wyceny masz od razu.",
      "<b>Zapisz zmiany na rysunku, nie w głowie.</b> Zmiany nieistotne dokumentuje kierownik w dzienniku, istotne wymagają zmiany decyzji. Różnicę ocenia projektant."
    ],
    mistakes: [
      "<b>Kupno wersji „do urzędu” bez rysunków technicznych.</b> Pozwolenie dostaniesz, ale wykonawcy zaczną zgadywać. To najdroższy rodzaj oszczędności.",
      "<b>Instalacje „do uzgodnienia z ekipą”.</b> Rury, kable i kanały wentylacji zaprojektowane po wylewkach przestają się mieścić.",
      "<b>Brak zgodności branż.</b> Konstruktor przewidział otwór, architekt go nie narysował, instalator wierci w nadprożu. Poproś o uzgodnienia międzybranżowe."
    ],
    formal: [
      ["Projekt zagospodarowania działki i projekt architektoniczno-budowlany", "do wniosku; podpisują projektanci z uprawnieniami"],
      ["Projekt techniczny", "dla kierownika; w skład wchodzi konstrukcja i instalacje"],
      ["Informacja BIOZ", "część projektu; kierownik dostosowuje ją do realiów budowy"],
      ["Zaświadczenia z izby i oświadczenia projektantów", "do wniosku; projektanci dołączają je sami"]
    ],
    checklist: [
      "Mam PZT i projekt architektoniczno-budowlany do wniosku",
      "Projekt techniczny istnieje i jest na budowie przed startem",
      "Konstrukcja i instalacje uzgodnione międzybranżowo",
      "Pliki cyfrowe (PDF i DWG) i wydruki A3",
      "Zestawienie stali i materiałów do wyceny"
    ]
  },

  /* 7 ------------------------------------------------------------------ */
  {
    id: "pozwolenie-czy-zgloszenie",
    title: "Pozwolenie na budowę czy zgłoszenie",
    lead: "Dom jednorodzinny możesz zbudować na zgłoszenie z projektem, jeśli jego obszar oddziaływania mieści się w całości na twojej działce. W przeciwnym razie albo gdy architekt nie jest pewien, potrzebujesz pozwolenia.",
    time: "21 dni (zgłoszenie) / do 65 dni (pozwolenie)", team: "architekt, starostwo",
    body: `
      <p><strong>Pozwolenie na budowę</strong> to decyzja administracyjna. Organ (starosta) bada zgodność projektu z planem lub WZ i przepisami, a sąsiedzi w obszarze oddziaływania są <strong>stronami postępowania</strong> i mogą się odwołać. Daje to pewność dokumentu, ale kosztuje czas.</p>
      <p><strong>Zgłoszenie z projektem budowlanym</strong> jest szybsze. Dla wolnostojącego domu jednorodzinnego możliwe, jeśli <strong>obszar oddziaływania mieści się w całości na działce, na której zaprojektowano dom</strong>. Organ ma 21 dni na sprzeciw. Brak sprzeciwu oznacza zgodę. Sąsiedzi nie są stroną, ale to organ ocenia obszar oddziaływania, a projektant musi go wyznaczyć.</p>
      <p>Dla naszego domu na 1200 m² z odległością 4 m od granic <strong>zgłoszenie jest zwykle możliwe</strong>. Zależy jednak od cienia, hałasu i zabudowy sąsiadów. Dom z garażem, tarasem i basenem to większy obszar niż sam dom, więc o wyborze decyduje architekt. Przepisy bywały zmieniane, więc <strong>sprawdź aktualne warunki w starostwie</strong>.</p>`,
    decision: {
      question: "Pozwolenie czy zgłoszenie?",
      intro: "Koszt opłat urzędowych jest niewielki. Różnią się czas, ryzyko odwołań i dokument, który dostajesz.",
      chosen: "pozwolenie",
      options: [
        { id: "pozwolenie", name: "Pozwolenie na budowę",
          cost: { min: 47, max: 47 }, time: "do 65 dni + 14 dni na odwołanie", note: "opłata skarbowa 47 zł",
          pros: ["Wyraźna decyzja z datą i klauzulą ostateczności", "Przed startem wszystko jest przesądzone", "Niezależnie od obszaru oddziaływania"],
          cons: ["Dłużej: 2–4 mies. przy braku problemów", "Sąsiedzi mogą się odwołać i opóźnić start"],
          why: "Ostrożna rekomendacja: ostateczna decyzja kończy sprawę, a zgłoszenie z błędnie wyznaczonym obszarem oddziaływania kończy się sprzeciwem i stratą czasu. Jeśli architekt potwierdzi, że obszar mieści się na działce, zgłoszenie oszczędza 1–2 miesiące." },
        { id: "zgloszenie", name: "Zgłoszenie z projektem budowlanym",
          cost: { min: 0, max: 0 }, time: "21 dni", note: "bez opłaty skarbowej",
          pros: ["Zazwyczaj najszybsze", "Sąsiedzi nie biorą udziału w postępowaniu", "Bez opłat urzędowych"],
          cons: ["Wymaga obszaru oddziaływania w całości na działce", "Przy sprzeciwie wracasz do pozwolenia", "Brak formalnej decyzji, bank może poprosić o zaświadczenie"],
          why: "Dobre, gdy architekt na piśmie potwierdzi obszar na działce, a sąsiedztwo jest spokojne. Sprawdź w swoim banku, czy akceptuje brak sprzeciwu." }
      ]
    },
    tips: [
      "<b>Zapytaj architekta wprost.</b> „Czy obszar oddziaływania w całości mieści się na mojej działce i co to oznacza dla zgłoszenia?” Poproś o odpowiedź na piśmie.",
      "<b>Porozmawiaj z sąsiadami przed złożeniem wniosku.</b> Pokaż im projekt. Sąsiad, który zna dom, rzadko się odwołuje. Ten, który dowie się z listu, częściej.",
      "<b>Pozwolenie obejmuje dom z garażem w jednej decyzji.</b> Basen, pergola i domek mają własne progi, więc zapytaj, czy wystarczy ich naniesienie na PZT.",
      "<b>Pozwolenie wygasa po 3 latach.</b> Jeśli roboty nie ruszą w tym czasie albo zostaną przerwane na ponad 3 lata, decyzja przestaje obowiązywać (sprawdź aktualny przepis)."
    ],
    mistakes: [
      "<b>Wybór zgłoszenia „bo szybciej”, mimo że obszar wchodzi na sąsiada.</b> Organ się sprzeciwi, a ty stracisz 21 dni i trzeba składać nowy wniosek.",
      "<b>Składanie bez rozmowy z sąsiadami.</b> Odwołanie wojewodzie kosztuje zwykle 1–3 miesiące.",
      "<b>Start robót przed decyzją ostateczną.</b> Samowola budowlana grozi wstrzymaniem, nakazem rozbiórki i opłatą legalizacyjną."
    ],
    formal: [
      ["Wniosek o pozwolenie na budowę", "starosta; opłata skarbowa 47 zł, pełnomocnictwo 17 zł (orientacyjnie)"],
      ["Zgłoszenie budowy z projektem budowlanym", "starosta; brak sprzeciwu w 21 dni"],
      ["Oświadczenie o prawie do dysponowania nieruchomością na cele budowlane", "inwestor; składane we wniosku"]
    ],
    checklist: [
      "Architekt określił obszar oddziaływania",
      "Wybrana ścieżka: pozwolenie albo zgłoszenie",
      "Sąsiedzi poinformowani o zamiarze budowy",
      "Sprawdzone w banku wymagania dla zgłoszenia, jeśli taki wybór",
      "Znane terminy: ważność decyzji i start robót"
    ],
    quiz: [{
      q: "Kiedy dom jednorodzinny możesz zbudować na zgłoszenie z projektem, a nie na pozwolenie?",
      a: ["Gdy dom ma mniej niż 200 m²", "Gdy obszar oddziaływania domu mieści się w całości na twojej działce", "Zawsze, jeśli sąsiedzi się zgodzą"],
      correct: 1,
      explain: "<b>Decyduje obszar oddziaływania.</b> Zgoda sąsiadów nie jest warunkiem, a metraż samego domu sam nie wyklucza zgłoszenia. Przepisy bywają zmieniane, więc sprawdź aktualne brzmienie."
    }]
  },

  /* 8 ------------------------------------------------------------------ */
  {
    id: "wniosek-ebudownictwo",
    title: "Wniosek przez e-Budownictwo",
    lead: "Wniosek składasz elektronicznie w portalu e-Budownictwo, logując się profilem zaufanym albo przez mObywatela. Architekt podpisuje projekt i załączniki, a ty oświadczasz o prawie do działki.",
    time: "1–3 dni przygotowań", team: "ty lub pełnomocnik (architekt)",
    body: `
      <p>Portal <strong>e-Budownictwo</strong> (Główny Urząd Nadzoru Budowlanego) prowadzi cały proces: wniosek, korespondencję z urzędem, a później dziennik budowy. Wniosek składasz z konta inwestora, a dokumenty projektowe wgrywasz jako pliki. <strong>Sprawdź w swoim starostwie</strong>, czy akceptuje wyłącznie formę elektroniczną.</p>
      <p>Do wniosku dołączasz zwykle: <strong>projekt zagospodarowania działki i projekt architektoniczno-budowlany</strong> podpisane przez projektantów, <strong>oświadczenie o prawie do dysponowania nieruchomością na cele budowlane</strong> (wypełniane w formularzu), decyzję WZ (gdy brak planu), warunki przyłączenia i opinie wymagane przepisami albo planem. Dokładną listę podaje starostwo.</p>
      <p>Urząd sprawdza kompletność. Jeśli czegoś brakuje, <strong>wzywa do uzupełnienia</strong>, a zwykle daje na to 7–14 dni (orientacyjnie). Czas oczekiwania liczy się od uzupełnienia, więc kompletny wniosek za pierwszym razem to oszczędność tygodni.</p>`,
    decision: {
      question: "Kto składa wniosek?",
      intro: "Wniosek może złożyć inwestor albo pełnomocnik. Opłata za pełnomocnictwo i ewentualna usługa architekta to niewielkie koszty.",
      chosen: "architekt",
      options: [
        { id: "samodzielnie", name: "Składam sam przez e-Budownictwo",
          cost: { min: 0, max: 0 }, time: "1–2 dni nauki portalu",
          pros: ["Bez dodatkowych kosztów", "Masz pełną kontrolę nad dokumentami"],
          cons: ["Musisz poznać portal i język wezwań", "Braki trzeba naprawiać samemu lub przez telefon do architekta"],
          why: "Wystarczy, gdy architekt przygotuje kompletny pakiet, a ty znasz podstawy portalu." },
        { id: "architekt", name: "Pełnomocnik: architekt składa i obsługuje wniosek",
          cost: { min: 17, max: 800 }, time: "bez dodatkowych kroków", note: "17 zł pełnomocnictwo + ewentualna opłata",
          pros: ["Architekt zna wymogi starostwa i braki usuwa od ręki", "Mniej pomyłek formalnych", "Ty zajmujesz się innymi sprawami"],
          cons: ["Dodatkowa opłata skarbowa i czasem honorarium", "Pamiętaj o pozostaniu w kontakcie z urzędem"],
          why: "Architekt zna lokalne praktyki i odpowie na wezwanie w jeden dzień. Często ta usługa jest w cenie adaptacji, więc zapytaj o to w umowie." }
      ]
    },
    tips: [
      "<b>Załóż konto w e-Budownictwie wcześniej.</b> Profil zaufany zdobywasz przez bankowość internetową albo mObywatela w kilka minut, ale weryfikacja potrafi wymagać wizyty w urzędzie.",
      "<b>Wgrywaj pliki w poprawnej nazwie i formacie.</b> PDF z podpisem, każdy załącznik osobno, nazwy typu „PZT.pdf” i „PAB.pdf”. Pliki w jednym 200-megabajtowym PDF-ie wracają z błędem.",
      "<b>Sprawdź wezwanie i odpowiedz w terminie.</b> Braki zgłoś w całości za jednym razem. Kolejne wezwanie to kolejne tygodnie.",
      "<b>Zapisz numer sprawy.</b> Przyda się przy telefonie do wydziału, przy zawiadomieniu o rozpoczęciu robót i odbiorze końcowym."
    ],
    mistakes: [
      "<b>Wniosek bez oświadczenia o prawie do dysponowania nieruchomością.</b> To jeden z najczęstszych braków. Bez niego urząd zawiesza sprawę.",
      "<b>Podpisy nieprawidłowe lub bez uprawnień.</b> Sprawdź, czy projektanci mają ważne uprawnienia i zaświadczenia z izby.",
      "<b>Pominięty załącznik, który wymaga plan.</b> Plan może wymagać np. opinii albo uzgodnień. Przeczytaj uchwałę."
    ],
    formal: [
      ["Konto inwestora w e-Budownictwie", "profil zaufany albo mObywatel"],
      ["Pełnomocnictwo dla architekta (opcjonalnie)", "17 zł opłaty skarbowej, orientacyjnie"],
      ["Wniosek wraz z załącznikami", "PZT, PAB, oświadczenia, decyzje, warunki"]
    ],
    checklist: [
      "Mam konto w e-Budownictwie i profil zaufany",
      "PZT i PAB są podpisane przez projektantów",
      "Oświadczenie o prawie do dysponowania nieruchomością wypełnione",
      "WZ, warunki przyłączenia i opinie dołączone",
      "Zapisany numer sprawy i dane kontaktowe urzędnika"
    ]
  },

  /* 9 ------------------------------------------------------------------ */
  {
    id: "terminy-i-uprawomocnienie",
    title: "Terminy urzędu i uprawomocnienie",
    lead: "Urząd ma do 65 dni na decyzję o pozwoleniu, potem 14 dni na odwołanie. Dopiero po tym decyzja jest ostateczna i możesz zacząć. Przy zgłoszeniu czekasz 21 dni.",
    time: "ok. 1,5–4 mies.", team: "starostwo",
    widget: "terminarz-formalnosci",
    body: `
      <p>Oś czasu dla <strong>pozwolenia</strong>: złożenie wniosku → decyzja (ustawowo <strong>do 65 dni</strong>, często 30–50) → doręczenie → <strong>14 dni na odwołanie</strong> → decyzja ostateczna. Jeśli wszystkie strony złożą oświadczenia o zrzeczeniu się odwołania, decyzja staje się ostateczna od razu.</p>
      <p>Dla <strong>zgłoszenia</strong>: złożenie → 21 dni na sprzeciw → brak sprzeciwu oznacza, że możesz przystąpić do robót (zawiadomienie o rozpoczęciu robót składasz najpóźniej 7 dni przed startem).</p>
      <p><strong>Decyzja ostateczna</strong> to dokument, na którym kierownik budowy opiera start. Poproś starostwo o <strong>adnotację lub zaświadczenie o ostateczności</strong> (opłata skarbowa orientacyjnie 17 zł; sprawdź w starostwie). Bank często go wymaga przy uruchamianiu kredytu na budowę.</p>
      <p>Przeliczysz terminy w kalkulatorze poniżej. To szacunek: urzędy bywają szybsze, a wezwanie do braków albo odwołanie sąsiada wydłuża całość.</p>`,
    tips: [
      "<b>Zadzwoń do referenta po 3–4 tygodniach.</b> Zapytaj, czy wszystko jest kompletne. Wezwanie do uzupełnień często przychodzi po miesiącu, bo sprawa leżała w kolejce.",
      "<b>Sąsiedzi mogą zrzec się odwołania.</b> Przynieś im prostą kartkę do podpisu. Każdy podpis skraca czekanie, a decyzja ostateczna pojawia się, gdy wszystkie strony potwierdzą zrzeczenie.",
      "<b>Nie planuj ekipy ani kredytu „na dzień po decyzji”.</b> Dodaj zapas 2–4 tygodnie: doręczenie, uprawomocnienie, zawiadomienie i wytyczenie domu.",
      "<b>Zrób kopię całej decyzji.</b> Zapisz datę doręczenia i daty ostateczności w arkuszu. Potem to kierownik wpisze do dziennika."
    ],
    mistakes: [
      "<b>Liczenie 14 dni od daty decyzji, a nie od doręczenia.</b> Termin biegnie od doręczenia stronom. Przy wielu stronach liczy się doręczenie ostatniej.",
      "<b>Start po 14 dniach bez sprawdzenia, czy ktoś się odwołał.</b> Odwołanie w terminie wstrzymuje uprawomocnienie.",
      "<b>Odkładanie startu bez końca.</b> Pozwolenie wygasa, gdy robót nie rozpoczęto w 3 lata od ostateczności decyzji (sprawdź aktualny przepis)."
    ],
    formal: [
      ["Decyzja o pozwoleniu na budowę", "starosta; do 65 dni, potem 14 dni na odwołanie"],
      ["Adnotacja lub zaświadczenie o ostateczności decyzji", "starostwo; opłata skarbowa orientacyjnie 17 zł"],
      ["Brak sprzeciwu przy zgłoszeniu", "po 21 dniach; zaświadczenie na wniosek"]
    ],
    checklist: [
      "Znam datę doręczenia decyzji",
      "Policzone 14 dni na odwołanie (lub mam zrzeczenia stron)",
      "Mam adnotację lub zaświadczenie o ostateczności",
      "Decyzja i projekt skopiowane i zapisane",
      "Zapas 2–4 tygodni między decyzją a startem"
    ],
    quiz: [{
      q: "Po ilu dniach od doręczenia decyzja o pozwoleniu na budowę staje się ostateczna, jeśli nikt się nie odwoła?",
      a: ["Po 7 dniach", "Po 14 dniach", "Po 30 dniach"],
      correct: 1,
      explain: "<b>Odwołanie wnosi się w 14 dni od doręczenia.</b> Gdy upłynie ten czas bez odwołania, decyzja jest ostateczna. Zrzeczenie się odwołania przez wszystkie strony skraca ten czas."
    }]
  },

  /* 10 ----------------------------------------------------------------- */
  {
    id: "kierownik-budowy",
    title: "Kierownik budowy",
    lead: "Kierownik budowy to osoba z uprawnieniami, która odpowiada za zgodność robót z projektem i przepisami. Bez niego nie wolno zacząć budowy, a dobry kierownik oszczędza więcej, niż kosztuje.",
    time: "cały czas budowy: 12–18 mies.", team: "kierownik z uprawnieniami",
    body: `
      <p>Kierownika budowy musisz wskazać przy zawiadomieniu o rozpoczęciu robót. To osoba z <strong>uprawnieniami budowlanymi</strong> (w specjalności konstrukcyjno-budowlanej albo architektonicznej) i <strong>wpisem do izby</strong> (PIIB), z ważnym ubezpieczeniem OC. Przy domu z instalacjami potrzebni są też kierownicy robót elektrycznych i sanitarnych, zwykle po stronie wykonawców instalacji.</p>
      <p>Kierownik prowadzi dziennik budowy, odpowiada za bezpieczeństwo i jakość robót, zgłasza odbiory zanikających elementów (zbrojenie ław, izolacje, więźba) i uczestniczy w odbiorze końcowym. Ty płacisz mu zwykle ryczałtem na czas budowy albo miesięcznie.</p>
      <p><strong>Inspektor nadzoru inwestorskiego</strong> nie jest wymagany przy domu jednorodzinnym, ale może być dodatkową kontrolą wykonawcy. To twój przedstawiciel, a nie wykonawcy.</p>`,
    decision: {
      question: "Kto ma być kierownikiem budowy?",
      intro: "Kierownik z firmy wykonawczej jest tańszy, ale pilnuje interesów firmy. Niezależny kontroluje wykonawcę w twoim imieniu.",
      chosen: "niezalezny",
      options: [
        { id: "niezalezny", name: "Niezależny kierownik budowy",
          cost: { min: 7000, max: 12000 }, time: "wizyty co tydzień lub w kluczowych momentach", note: "orientacyjnie, ryczałt na całą budowę",
          pros: ["Pilnuje ciebie, a nie wykonawcy", "Zauważa błędy zbrojenia, izolacji i zalewania", "Wspiera odbiory i dokumentację"],
          cons: ["Dodatkowy koszt ok. 7–12 tys. zł", "Musi mieć czas na wizyty"],
          why: "Dom za 2,3 mln zł i kilku wykonawców to sytuacja, w której warto mieć kogoś, kto sprawdza ich pracę. Koszt to ułamek procenta budżetu." },
        { id: "z-firmy", name: "Kierownik zapewniony przez generalnego wykonawcę",
          cost: { min: 3000, max: 6000 }, time: "zależnie od umowy", note: "często w cenie robót",
          pros: ["Najtańszy wariant", "Kierownik zna ekipę i harmonogram", "Mniej osób do koordynacji"],
          cons: ["Konflikt interesów: ocenia pracę własnej firmy", "Gorsza kontrola jakości przy błędach wykonawcy"],
          why: "Ma sens przy zaufanym generalnym wykonawcy i umowie z kontrolą jakości. Przy kilku podwykonawcach daje słabszą ochronę." },
        { id: "z-inspektorem", name: "Niezależny kierownik + inspektor nadzoru inwestorskiego",
          cost: { min: 17000, max: 30000 }, time: "dwie osoby, wizyty regularne", note: "kierownik + inspektor",
          pros: ["Dwie niezależne osoby sprawdzają budowę", "Inspektor zatwierdza odbiory i wyceny", "Najlepsza ochrona jakości"],
          cons: ["Najdroższy wariant", "Więcej uzgodnień i dokumentów"],
          why: "Dla bardzo wymagającego inwestora lub przy sporze z wykonawcą. Dla typowej budowy niezależny kierownik wystarcza." }
      ]
    },
    tips: [
      "<b>Sprawdź uprawnienia i OC przed podpisaniem umowy.</b> Wpis do PIIB zweryfikujesz po numerze na stronie izby, a ubezpieczenie ma być ważne przez cały okres budowy.",
      "<b>Wpisz w umowie liczbę wizyt.</b> Orientacyjnie co tydzień, a przy zbrojeniu ław, zalewaniu stropów i montażu więźby w dniu robót.",
      "<b>Poproś o zdjęcia zbrojenia i izolacji przed zasypaniem.</b> Po zalaniu betonu nikt już tego nie sprawdzi.",
      "<b>Ustal, kto podpisuje odbiory robót zanikających.</b> Kierownik, ty i wykonawca powinniście mieć wspólny protokół."
    ],
    mistakes: [
      "<b>Kierownik „na papierze”.</b> Podpis jest, ale na budowie go nie ma. Skutkiem są błędy zbrojenia i wylewki, które wychodzą dopiero po miesiącach.",
      "<b>Wybór najtańszego z ogłoszenia.</b> Kierownik za 2 tys. zł prawdopodobnie przyjedzie raz. Policz koszt jednej wizyty, a nie ryczałt.",
      "<b>Samodzielne kierowanie bez uprawnień.</b> Nie możesz być kierownikiem własnej budowy bez wymaganych uprawnień i wpisu do izby."
    ],
    formal: [
      ["Umowa z kierownikiem budowy", "zakres wizyt, odpowiedzialność, wynagrodzenie, termin"],
      ["Oświadczenie kierownika o przyjęciu obowiązku", "dołączone do zawiadomienia o rozpoczęciu robót"],
      ["Zaświadczenie z izby (PIIB) i polisa OC", "sprawdź przed podpisaniem"]
    ],
    checklist: [
      "Uprawnienia kierownika sprawdzone w PIIB",
      "Ważna polisa OC kierownika",
      "Umowa z liczbą wizyt i zakresem odbiorów",
      "Uzgodnione kluczowe momenty wizyt: ławy, strop, więźba, izolacje",
      "Wybrani kierownicy robót instalacyjnych, jeśli potrzebni"
    ],
    quiz: [{
      q: "Dlaczego niezależny kierownik budowy zwykle jest lepszym wyborem niż kierownik od generalnego wykonawcy?",
      a: ["Bo jest tańszy", "Bo pilnuje twoich interesów, a nie firmy, której pracę ocenia", "Bo przepisy tego wymagają"],
      correct: 1,
      explain: "<b>Konflikt interesów.</b> Kierownik zatrudniony przez wykonawcę ocenia pracę własnego pracodawcy. Niezależny kontroluje ją w twoim imieniu. Przepisy dopuszczają oba warianty."
    }]
  },

  /* 11 ----------------------------------------------------------------- */
  {
    id: "dziennik-budowy",
    title: "Elektroniczny dziennik budowy",
    lead: "Dziennik budowy prowadzi się elektronicznie (EDB) w e-Budownictwie. Zakłada go inwestor po uzyskaniu pozwolenia, a wpisy robią uczestnicy procesu budowlanego.",
    time: "ok. 1 godzina na założenie", team: "inwestor, kierownik budowy",
    body: `
      <p><strong>EDB</strong> to rejestr przebiegu budowy: rozpoczęcie robót, zmiany w projekcie, polecenia, wpisy o odbiorach zanikających elementów, zdarzenia, a na końcu zakończenie budowy. Działa w tym samym portalu co wniosek.</p>
      <p>Inwestor zakłada dziennik w portalu, wskazuje <strong>kierownika budowy</strong> i dodaje uprawnione osoby: inspektora nadzoru (jeśli jest), projektanta (nadzór autorski) i kierowników robót. Każdy wpis jest datowany i podpisywany elektronicznie, co daje <strong>pewny zapis</strong> wydarzeń i ułatwia rozliczenia z wykonawcami.</p>
      <p>Dla ciebie to najlepsze źródło dowodów w razie sporu: wpis „zbrojenie ław odebrane, zgodne z projektem” albo „polecono wymianę partii bloczków” rozstrzyga wątpliwości. <strong>Sprawdź u kierownika</strong> aktualne zasady korzystania z portalu i zakres obowiązkowych wpisów.</p>`,
    tips: [
      "<b>Wejdź do dziennika po każdej wizycie kierownika.</b> Sprawdź, czy są wpisy. Brak wpisów to sygnał, że kierownik rzadko bywa.",
      "<b>Poproś o wpis przy każdej zmianie ustalonej ustnie.</b> Zmiana grubości ocieplenia, wymiany materiału albo kolejności robót powinna mieć ślad w dzienniku.",
      "<b>Zrób kopię wpisów raz w miesiącu.</b> Zapisz PDF lub eksport, jeśli system na to pozwala, i trzymaj w folderze budowy.",
      "<b>Dodaj w dzienniku wszystkie osoby z uprawnieniami.</b> Projektant z nadzoru autorskiego i inspektor mogą wtedy sami wpisywać swoje zalecenia."
    ],
    mistakes: [
      "<b>Dziennik zakładany po rozpoczęciu robót.</b> Brakuje wpisów z początku budowy, a nadzór budowlany może to zakwestionować.",
      "<b>Wpisy „od ręki”, bez dat i szczegółów.</b> Wpis „odbiór OK” nic nie znaczy. Potrzebny jest zakres, element i data.",
      "<b>Dostęp tylko dla kierownika.</b> Ty jako inwestor też musisz mieć wgląd, żeby kontrolować, co jest zapisywane."
    ],
    formal: [
      ["Założenie dziennika w e-Budownictwie", "inwestor, po decyzji ostatecznej albo zgłoszeniu"],
      ["Nadanie uprawnień kierownikowi i innym uczestnikom", "inwestor lub kierownik w systemie"],
      ["Wpisy o przebiegu robót i odbiorach", "kierownik budowy na bieżąco"]
    ],
    checklist: [
      "Dziennik założony przed startem robót",
      "Kierownik i inni uczestnicy dodani z uprawnieniami",
      "Znam sposób logowania i przeglądania wpisów",
      "Ustalone, co kierownik wpisuje po każdej wizycie",
      "Miesięczna kopia wpisów w folderze budowy"
    ],
    quiz: [{
      q: "Dlaczego warto żądać wpisu do dziennika przy każdej zmianie ustalonej ustnie?",
      a: ["Bo urząd karze za brak wpisów", "Bo wpis jest datowanym śladem i rozstrzyga ewentualny spór z wykonawcą", "Bo bez wpisu wykonawca nie dostanie wypłaty"],
      correct: 1,
      explain: "<b>Dziennik jest dowodem.</b> Zmiany bez śladu to najczęstsze źródło sporów o koszty i jakość. Wpis datuje decyzję i wskazuje, kto ją podjął."
    }]
  },

  /* 12 ----------------------------------------------------------------- */
  {
    id: "zawiadomienie-start",
    title: "Zawiadomienie o rozpoczęciu robót",
    lead: "Na 7 dni przed pierwszą łopatą inwestor zawiadamia nadzór budowlany o starcie robót, dołączając oświadczenie kierownika. To ostatnia formalność przed wykopem.",
    time: "min. 7 dni przed startem", team: "inwestor, kierownik budowy",
    body: `
      <p>Zawiadomienie składa się <strong>najpóźniej 7 dni przed rozpoczęciem robót</strong>, w e-Budownictwie, do powiatowego inspektora nadzoru budowlanego (PINB). Dołączasz do niego: <strong>oświadczenie kierownika budowy</strong> o przyjęciu obowiązków wraz z danymi uprawnień, informację o dzienniku budowy i <strong>informację BIOZ</strong> (bezpieczeństwo i ochrona zdrowia), a przy pozwoleniu także numer decyzji i datę jej ostateczności. <strong>Sprawdź u kierownika</strong>, czy w twoim powiecie wymagane są dodatkowe dokumenty.</p>
      <p>Po upływie 7 dni możesz zacząć. W etapie 03 geodeta <strong>wytycza dom</strong> w terenie, a zaplecze budowy (prąd, woda, sanitariaty, ogrodzenie) przygotowujesz razem z wykopem.</p>
      <p>Przez cały czas budowy kierownik musi być dostępny, a dokumenty (pozwolenie, projekt, dziennik) powinny leżeć na budowie, w widocznym miejscu. Nadzór może przyjść na kontrolę bez zapowiedzi.</p>`,
    tips: [
      "<b>Złóż zawiadomienie od razu po ostatecznej decyzji</b> i po wyborze kierownika. Zyskujesz tydzień, w którym geodeta wytycza dom, a ty przygotowujesz zaplecze.",
      "<b>Zaplanuj ekipę wykopową na dzień po 7 dniach.</b> Koparka zwykle jest dostępna za 1–2 tygodnie, więc rezerwuj ją po złożeniu zawiadomienia.",
      "<b>Trzymaj teczkę na budowie.</b> Pozwolenie, projekt, dziennik, protokoły i ubezpieczenie w jednym miejscu, na wypadek kontroli.",
      "<b>Wykonaj zdjęcia terenu przed rozpoczęciem.</b> Stan działki, drogi dojazdowej, płotu sąsiada i drzew. Przydadzą się, jeśli ktoś zgłosi szkody."
    ],
    mistakes: [
      "<b>Start robót przed upływem 7 dni.</b> To naruszenie przepisów, które może skończyć się karą i wstrzymaniem.",
      "<b>Niekompletne oświadczenie kierownika.</b> Brak numeru uprawnień albo zaświadczenia z izby wydłuża formalności.",
      "<b>Zdejmowanie humusu i wycinka przed zawiadomieniem.</b> Prace ziemne przy budowie często traktuje się jako początek robót. Zapytaj kierownika, od kiedy liczy się start."
    ],
    formal: [
      ["Zawiadomienie o zamiarze rozpoczęcia robót budowlanych", "PINB, przez e-Budownictwo, min. 7 dni przed startem"],
      ["Oświadczenie kierownika budowy o przyjęciu obowiązku", "załącznik do zawiadomienia"],
      ["Informacja BIOZ", "z projektu; kierownik potwierdza zakres"]
    ],
    checklist: [
      "Decyzja ostateczna albo brak sprzeciwu w 21 dni",
      "Kierownik przyjął obowiązek i dostarczył oświadczenie",
      "Dziennik budowy założony",
      "Zawiadomienie złożone min. 7 dni przed startem",
      "Zdjęcia stanu terenu przed rozpoczęciem",
      "Pozwolenie i projekt na budowie"
    ],
    quiz: [{
      q: "Na ile dni przed rozpoczęciem robót trzeba złożyć zawiadomienie o ich rozpoczęciu?",
      a: ["Na 1 dzień", "Na min. 7 dni", "Na 30 dni"],
      correct: 1,
      explain: "<b>Co najmniej 7 dni.</b> W tym czasie nadzór budowlany ma możliwość weryfikacji dokumentów, a ty przygotowujesz teren i ekipę."
    }]
  },

  /* 13 ----------------------------------------------------------------- */
  {
    id: "tablica-informacyjna",
    title: "Tablica informacyjna",
    lead: "Przed rozpoczęciem robót na działce stawiasz tablicę informacyjną z danymi budowy. To prosty, tani wymóg, a jej brak daje urzędowi powód do mandatu.",
    time: "1 dzień", team: "ty, kierownik budowy",
    cost: { min: 150, max: 400, note: "tablica ok. 70 × 90 cm ze stelażem" },
    body: `
      <p>Tablica informacyjna musi stać <strong>w widocznym miejscu od frontu działki</strong> i zostać do zakończenia budowy. Zawiera: rodzaj i adres budowy, dane inwestora, numer decyzji o pozwoleniu (albo zgłoszenia), imiona i nazwiska kierownika budowy, projektanta i inspektora nadzoru (jeśli jest), numery uprawnień i telefon do organu nadzoru budowlanego.</p>
      <p>Wymiary podaje rozporządzenie. Orientacyjnie to <strong>ok. 70 × 90 cm</strong>, ale <strong>sprawdź u kierownika budowy</strong> aktualne wymogi. Wystarczy tablica z blachy lub tworzywa, zamocowana na słupkach lub ogrodzeniu, odporna na deszcz.</p>
      <p>Dodatkowo postaw <strong>tablice ostrzegawcze</strong> przy wykopie i przy wejściu: „Teren budowy”, „Wstęp wzbroniony” i podstawowe znaki BHP. Pamiętaj o ogrodzeniu wykopu, żeby nikt nie wpadł.</p>`,
    tips: [
      "<b>Zamów tablicę u lokalnej drukarni reklamowej.</b> To koszt 150–400 zł, a gotowa jest w 2–3 dni. Dołącz dane z decyzji i od kierownika.",
      "<b>Zamocuj na słupkach przy bramie, od strony drogi.</b> Tablica ma być czytelna z ulicy i zabezpieczona przed kradzieżą.",
      "<b>Zrób kopię dokumentów przy tablicy.</b> W skrzynce wodoodpornej lub folii: decyzja, projekt i numer kierownika, na wypadek kontroli pod nieobecność.",
      "<b>Zostaw ją do odbioru końcowego.</b> Nie zdejmuj tablicy po stanie surowym. Kontrola może przyjść w dowolnym momencie."
    ],
    mistakes: [
      "<b>Tablica z błędnymi danymi.</b> Zły numer decyzji albo brak kierownika to podstawa do mandatu.",
      "<b>Ukryta za płotem lub ledwie czytelna.</b> Musi być widoczna z drogi.",
      "<b>Zdjęta po kilku miesiącach.</b> Obowiązek trwa do zakończenia budowy."
    ],
    formal: [
      ["Tablica informacyjna budowy", "inwestor; treść wg rozporządzenia, wymiary sprawdź u kierownika"],
      ["Tablice ostrzegawcze i BHP", "kierownik budowy; zakres z informacji BIOZ"]
    ],
    checklist: [
      "Tablica zawiera numer decyzji, dane inwestora i kierownika",
      "Zamontowana w widocznym miejscu od frontu",
      "Ogrodzony wykop i tablice ostrzegawcze",
      "Dokumenty budowy dostępne na miejscu",
      "Zdjęcia terenu przed startem"
    ]
  }

  ]
});
