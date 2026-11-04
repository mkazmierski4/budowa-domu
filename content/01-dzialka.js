/* Etap 01: Działka. Wzorcowy etap (F1). Ceny orientacyjne, 2026 r., okolice małego miasta. */
BUDOWA.addStage({
  id: "01-dzialka", nr: 1, title: "Działka", icon: "📍", category: "dzialka",
  summary: "Jak znaleźć i bezpiecznie kupić ok. 1200 m² pod dom z ogrodem: plan miejscowy, media, grunt, dojazd, księga wieczysta i notariusz.",
  duration: "2–6 mies.",
  steps: [

  /* 1 ------------------------------------------------------------------ */
  {
    id: "gdzie-szukac",
    title: "Gdzie szukać działki",
    lead: "Działkę ok. 1200 m² pod dom z ogrodem i basenem najłatwiej znaleźć na obrzeżach małego miasta, 5–10 km od centrum. Media są tam zwykle w drodze, a cena nie zjada budżetu domu.",
    time: "1–3 mies.", team: "ty, czasem pośrednik",
    body: `
      <p>Najwięcej ofert jest w portalach ogłoszeniowych, ale dobre działki często sprzedają się „z polecenia”: przez sołtysa, lokalnego geodetę, urząd gminy albo tabliczkę „sprzedam” na płocie. Warto też śledzić <strong>przetargi gminy</strong> w Biuletynie Informacji Publicznej.</p>
      <p>Zanim zaczniesz jeździć na oglądanie, ustal sito: <strong>1100–1300 m², front min. ok. 27–30 m</strong>, przeznaczenie pod zabudowę jednorodzinną, prąd i woda w drodze, dojazd drogą publiczną. Wszystko, co odpada na tym sicie, oszczędza ci tygodnie.</p>
      <p>Oglądaj działkę kilka razy: <strong>po deszczu</strong> (czy stoi woda), <strong>w dzień roboczy</strong> (hałas, ruch, zapachy z gospodarstw albo zakładów) i <strong>wieczorem</strong> (oświetlenie drogi, sąsiedztwo).</p>`,
    decision: {
      question: "Gdzie szukać działki?",
      intro: "Lokalizacja to największa pozycja w kategorii „Działka i formalności”. Ceny dotyczą działki ok. 1200 m² w 2026 r.",
      chosen: "obrzeza",
      options: [
        { id: "obrzeza", name: "Obrzeża małego miasta (5–10 km), media w drodze",
          cost: { min: 190000, max: 240000 }, time: "dojazd 10–15 min", note: "ok. 160–200 zł/m²",
          pros: ["Media zwykle w drodze, przyłącza krótkie i tanie", "Często obowiązuje plan miejscowy", "Do szkoły i sklepu kilka minut autem"],
          cons: ["Sąsiedzi blisko, osiedle wciąż się buduje", "Dobre działki znikają szybko"],
          why: "Najlepszy stosunek ceny do kosztu przyłączy i wygody. Zostawia w kategorii „Działka i formalności” ok. 100 tys. zł na projekt, pozwolenie i koszty zakupu." },
        { id: "miasto", name: "W granicach małego miasta",
          cost: { min: 300000, max: 420000 }, time: "dojazd do 5 min", note: "ok. 250–350 zł/m²",
          pros: ["Pełne media, często kanalizacja", "Szkoła, sklep i komunikacja w zasięgu pieszo"],
          cons: ["Działki 1200 m² są rzadkie i drogie", "Zabiera 100–180 tys. zł z budowy albo wykończenia", "Plan miejscowy częściej narzuca ostre warunki"],
          why: "Ma sens, gdy liczy się życie bez auta. Przy budżecie 2,3 mln zł trzeba wtedy ciąć dom albo ogród." },
        { id: "wies", name: "Dalej od miasta (15–25 km), bez mediów",
          cost: { min: 85000, max: 130000 }, time: "dojazd 20–30 min", note: "ok. 70–110 zł/m²",
          pros: ["Niska cena, duży wybór", "Cisza, często większe działki"],
          cons: ["Przyłącza na setki metrów: kilkadziesiąt tys. zł", "Często bez planu miejscowego, a o warunki zabudowy coraz trudniej", "Codzienne dojazdy kosztują czas i paliwo"],
          why: "Opłaca się tylko wtedy, gdy media są blisko i jest plan miejscowy. Inaczej oszczędność na cenie zjadają przyłącza i formalności." }
      ]
    },
    tips: [
      "<b>Szukaj poza portalami.</b> Zapytaj w gminie, u lokalnego geodety i sołtysa. Właściciele ziemi w małych miejscowościach często w ogóle nie wystawiają ogłoszeń.",
      "<b>Sprawdź działkę w Geoportalu, zanim pojedziesz.</b> Na geoportal.gov.pl zobaczysz granice, numer działki, sieci uzbrojenia i często plan miejscowy. Pięć minut zamiast pół dnia jazdy.",
      "<b>Porozmawiaj z sąsiadami.</b> Najszybciej powiedzą o podmokłym gruncie, wylewającym rowie, planowanej drodze albo uciążliwym sąsiedztwie.",
      "<b>Policz dojazdy.</b> Dwa auta i 2 × 15 km dziennie przez 20 lat to realny koszt. Tańsza działka dalej od miasta nie zawsze wychodzi taniej."
    ],
    mistakes: [
      "<b>Zakup „bo ładny widok”.</b> Bez sprawdzenia planu, mediów i gruntu. Najdroższe niespodzianki wychodzą dopiero przy projekcie.",
      "<b>Za wąska działka.</b> Przy froncie poniżej ok. 25 m dom z garażem w bryle nie zmieści się z wymaganymi odległościami od granic.",
      "<b>Oglądanie tylko w słoneczny weekend.</b> Wodę po ulewie, hałas z drogi w godzinach szczytu czy zapach z fermy zobaczysz w inne dni."
    ],
    formal: [
      ["Numer działki, obręb i numer księgi wieczystej", "poproś sprzedającego przy pierwszym kontakcie"],
      ["Wypis z rejestru gruntów", "starostwo, wniosek online lub w urzędzie"]
    ],
    checklist: [
      "Znany numer działki, obręb i numer księgi wieczystej",
      "Działka sprawdzona w Geoportalu: granice i sieci",
      "Oględziny w dzień roboczy i po deszczu",
      "Front działki ma min. ok. 27 m",
      "Policzony czas i koszt codziennych dojazdów"
    ],
    quiz: [{
      q: "Dlaczego tańsza działka 20 km od miasta bywa w sumie droższa?",
      a: ["Bo ma wyższy podatek od nieruchomości", "Bo przyłącza mediów i dojazdy potrafią zjeść całą oszczędność", "Bo bank nie da na nią kredytu"],
      correct: 1,
      explain: "<b>Liczy się koszt całkowity.</b> Kilkaset metrów przyłącza wody i prądu, droga dojazdowa i codzienne dojazdy potrafią kosztować więcej niż różnica w cenie działki."
    }]
  },

  /* 2 ------------------------------------------------------------------ */
  {
    id: "mpzp-wz",
    title: "Plan miejscowy albo warunki zabudowy",
    lead: "Zanim pokochasz działkę, sprawdź, co wolno na niej zbudować. Rozstrzyga o tym miejscowy plan zagospodarowania przestrzennego (MPZP), a gdy go nie ma, decyzja o warunkach zabudowy (WZ).",
    time: "1–2 tyg. (MPZP), 1–3 mies. (WZ)", team: "urząd gminy",
    body: `
      <p><strong>MPZP</strong> to prawo miejscowe uchwalane przez gminę. Wypis i wyrys pokazują przeznaczenie terenu (np. <strong>MN</strong> – zabudowa mieszkaniowa jednorodzinna) i parametry: linię zabudowy, wysokość, kąt i kształt dachu, powierzchnię zabudowy i biologicznie czynną, czasem kolor pokrycia i liczbę miejsc postojowych.</p>
      <p>Dla naszego domu liczą się zwłaszcza: <strong>dach dwuspadowy ok. 40°</strong>, wysokość z poddaszem użytkowym, garaż w bryle i powierzchnia zabudowy ok. 170 m² plus taras i basen. Plan, który wymaga np. dachu 25° albo płaskiego, przekreśla ten projekt.</p>
      <p><strong>WZ</strong> wydaje wójt lub burmistrz na wniosek, który może złożyć każdy, także przed zakupem. Gmina bada m.in. zabudowę sąsiednią i dostęp do mediów. Reforma planowania z 2023 r. wprowadza <strong>plany ogólne gmin</strong>; po ich wejściu w życie nowe WZ wydaje się co do zasady tylko na obszarach uzupełnienia zabudowy, a decyzje mają ograniczony czas ważności. Terminy reformy były przesuwane, więc zapytaj w urzędzie, jaki jest stan w twojej gminie.</p>`,
    decision: {
      question: "Na czym oprzeć zakup?",
      intro: "Nie zawsze to twój wybór, ale wpływa na ryzyko i czas. Koszty to opłaty urzędowe.",
      chosen: "mpzp",
      options: [
        { id: "mpzp", name: "Działka z MPZP (przeznaczenie MN)",
          cost: { min: 50, max: 250 }, time: "wypis w 1–2 tyg.", note: "opłata skarbowa za wypis i wyrys",
          pros: ["Jasne zasady od razu, bez decyzji urzędu", "Plan nie wygasa jak decyzja", "Projektant wie, co wolno"],
          cons: ["Plan może narzucać szczegóły: dach, kolor, linię zabudowy", "Zmiana planu trwa latami"],
          why: "Daje pewność przed zakupem. Wypis i wyrys kosztują grosze, a od razu widać, czy dom referencyjny się zmieści." },
        { id: "wz", name: "Działka bez planu, z decyzją WZ",
          cost: { min: 598, max: 700 }, time: "1–3 mies.", note: "598 zł opłaty skarbowej",
          pros: ["Wniosek można złożyć przed zakupem", "Parametry dopasowane do wniosku i sąsiedztwa"],
          cons: ["Wymaga zabudowy sąsiedniej i dostępu do mediów", "Po reformie planowania trudniej ją uzyskać, a ważność jest ograniczona", "Sąsiedzi są stroną i mogą się odwołać"],
          why: "Bezpieczna tylko wtedy, gdy decyzja jest ostateczna przed aktem notarialnym. Uzależnij zakup od jej uzyskania w umowie przedwstępnej." }
      ]
    },
    tips: [
      "<b>Wypis i wyrys, nie ogłoszenie.</b> „Działka budowlana” w ogłoszeniu to nie dokument. Dokumentem jest wypis z MPZP albo ostateczna decyzja WZ.",
      "<b>Czytaj całą uchwałę, nie tylko symbol terenu.</b> Wymagania co do dachu, ogrodzeń czy miejsc postojowych często są w ustaleniach ogólnych na pierwszych stronach.",
      "<b>Zapytaj o plany dla sąsiedztwa.</b> Obok może powstać droga, usługi albo zakład. Gmina powie, jakie procedury planistyczne trwają.",
      "<b>Zaświadczenie o przeznaczeniu działki</b> przyda się też notariuszowi i bankowi."
    ],
    mistakes: [
      "<b>Zakup działki rolnej „do odrolnienia”.</b> Jeśli plan albo WZ nie dopuszczają zabudowy mieszkaniowej, możesz czekać latami albo nigdy.",
      "<b>Przeoczona linia zabudowy.</b> Nieprzekraczalna linia 6–8 m od drogi na krótkiej działce zabiera miejsce na ogród.",
      "<b>Decyzja WZ „w trakcie”.</b> Kupno przed uprawomocnieniem decyzji to ryzyko: sąsiad może się odwołać."
    ],
    formal: [
      ["Wypis i wyrys z MPZP", "urząd gminy; opłata skarbowa od kilkudziesięciu zł"],
      ["Zaświadczenie o przeznaczeniu w planie", "urząd gminy, 50 zł"],
      ["Decyzja o warunkach zabudowy (gdy brak planu)", "wójt lub burmistrz, 598 zł, do kilku miesięcy"],
      ["Wyłączenie gruntu z produkcji rolnej", "starostwo; potrzebne m.in. na gruntach rolnych klas I–III poza miastami, może wiązać się z opłatą"]
    ],
    checklist: [
      "Wypis i wyrys z MPZP albo ostateczna decyzja WZ w ręku",
      "Przeznaczenie: zabudowa mieszkaniowa jednorodzinna",
      "Dopuszczony dach dwuspadowy ok. 40° i poddasze użytkowe",
      "Linia zabudowy i wskaźniki mieszczą dom z garażem, taras i basen",
      "Sprawdzona klasa gruntu i ewentualne wyłączenie z produkcji rolnej",
      "Zapytano w gminie o plan ogólny i procedury w okolicy"
    ],
    quiz: [{
      q: "Ogłoszenie mówi „działka budowlana”. Co to potwierdza?",
      a: ["Że na pewno można postawić dom", "Nic wiążącego, trzeba sprawdzić MPZP albo decyzję WZ", "Że działka ma wszystkie media"],
      correct: 1,
      explain: "<b>Ogłoszenie to nie dokument.</b> O tym, co wolno zbudować, decyduje plan miejscowy albo ostateczna decyzja o warunkach zabudowy. Wypis z planu kosztuje kilkadziesiąt złotych."
    }]
  },

  /* 3 ------------------------------------------------------------------ */
  {
    id: "media",
    title: "Media: prąd, woda, ścieki, internet",
    lead: "Działka bez mediów może kosztować w sumie więcej niż droższa działka z mediami w drodze. Sprawdź je przed zakupem, a najlepiej zdobądź warunki przyłączenia.",
    time: "2–8 tyg. na warunki", team: "operatorzy sieci, gmina",
    body: `
      <p>Nasz dom grzeje <strong>pompa ciepła</strong>, więc gaz nie jest potrzebny. Liczą się: <strong>prąd</strong> (z zapasem mocy na pompę ciepła, indukcję, pompę basenową i ładowarkę auta), <strong>woda</strong>, <strong>odprowadzenie ścieków</strong> i <strong>internet</strong>.</p>
      <p>Najtańszy wariant to sieci <strong>w drodze przy granicy działki</strong>. Każde 100 m sieci do pociągnięcia to dodatkowe tygodnie i pieniądze: wodociąg w ziemi kosztuje orientacyjnie 150–300 zł za metr, a operator sieci energetycznej potrafi rozbudowywać sieć nawet rok.</p>
      <p>Ścieki: kanalizacja gminna to najlepsza opcja. Bez niej zostaje <strong>przydomowa oczyszczalnia</strong> (potrzebne miejsce i przepuszczalny grunt) albo <strong>szambo</strong> (tanie w budowie, drogie w wywozie). Wybór zapadnie w etapie 03, ale już teraz sprawdź, czy jest na to miejsce.</p>
      <p>Internet: zapytaj o światłowód. Przy pracy zdalnej to kryterium tak samo ważne jak woda.</p>`,
    tips: [
      "<b>Zapytaj sprzedającego o warunki przyłączenia.</b> Jeśli już je ma, sprawdź datę ważności i czy da się je przenieść na ciebie.",
      "<b>Szukaj śladów sieci w terenie.</b> Złącze energetyczne przy granicy, hydrant albo studzienka w drodze to dobry znak. Dokładniej pokaże to mapa z sieciami.",
      "<b>Wnioski o warunki złóż jak najwcześniej.</b> Operator prądu wymaga tytułu prawnego do działki, więc poproś sprzedającego o złożenie wniosku albo o pisemną zgodę.",
      "<b>Zamów moc z zapasem.</b> Pompa ciepła, płyta indukcyjna, ładowarka auta i pompa basenowa to razem sporo. Zwiększenie mocy później kosztuje i trwa."
    ],
    mistakes: [
      "<b>„Prąd jest, bo słup stoi obok”.</b> Linia średniego napięcia nie oznacza możliwości przyłączenia. Liczy się sieć niskiego napięcia i zgoda operatora.",
      "<b>Brak miejsca na oczyszczalnię.</b> Na wąskiej działce bez kanalizacji drenaż rozsączający, studnia i basen mogą się nie zmieścić przez wymagane odległości.",
      "<b>Liczenie tylko ceny działki.</b> 300 m przyłączy wody i prądu potrafi kosztować kilkadziesiąt tysięcy złotych i pół roku czekania."
    ],
    formal: [
      ["Warunki przyłączenia do sieci elektroenergetycznej", "operator sieci dystrybucyjnej, wniosek z tytułem prawnym do działki"],
      ["Warunki przyłączenia do wodociągu i kanalizacji", "przedsiębiorstwo wodociągowe albo gmina"],
      ["Mapa z sieciami uzbrojenia terenu", "Geoportal albo starostwo"]
    ],
    checklist: [
      "Prąd: sieć niskiego napięcia przy działce albo warunki przyłączenia",
      "Woda: wodociąg w drodze przy granicy",
      "Ścieki: kanalizacja albo miejsce na oczyszczalnię lub szambo",
      "Internet: światłowód albo dobry zasięg sieci komórkowej",
      "Znana odległość każdej sieci od granicy działki"
    ],
    quiz: [{
      q: "Na granicy działki stoi słup energetyczny. Czy to wystarczy, żeby podłączyć dom?",
      a: ["Tak, zawsze", "Nie, decydują warunki przyłączenia od operatora sieci", "Tak, jeśli słup jest betonowy"],
      correct: 1,
      explain: "<b>Słup to nie przyłącze.</b> Może nieść linię średniego napięcia, do której domu się nie podłączy. Pewność dają dopiero warunki przyłączenia od operatora."
    }]
  },

  /* 4 ------------------------------------------------------------------ */
  {
    id: "geotechnika",
    title: "Badania gruntu",
    lead: "Geolog wierci kilka otworów i mówi, na czym postawisz dom: czy grunt jest nośny i jak wysoko stoi woda. Kosztuje to 2–3,5 tys. zł, a może oszczędzić kilkadziesiąt tysięcy.",
    time: "1 dzień + 1–2 tyg. na opinię", team: "geolog z uprawnieniami",
    cost: { min: 1800, max: 3500, note: "3–4 odwierty i opinia geotechniczna" },
    body: `
      <p>Standardem dla domu jednorodzinnego są <strong>3–4 odwierty</strong> na głębokość ok. 3–6 m w obrysie przyszłego budynku. Wynikiem jest <strong>opinia geotechniczna</strong>: opis warstw gruntu, poziom wód gruntowych i zalecenia co do posadowienia. Projektant potrzebuje jej do adaptacji projektu.</p>
      <p>Dla domu referencyjnego zakładamy <strong>ławy fundamentowe</strong> ze spodem ok. 1,4 m pod terenem. To działa na gruncie nośnym (piaski, zwarte gliny) i przy wodzie poniżej fundamentu. Torf, nasypy, namuły albo woda tuż pod powierzchnią oznaczają droższe rozwiązania: wymianę gruntu, płytę fundamentową, drenaż.</p>
      <p>Najlepiej zbadać grunt <strong>przed zakupem</strong>. Sprzedający zwykle się zgadza, jeśli zapiszesz to w umowie przedwstępnej albo po prostu poprosisz.</p>`,
    decision: {
      question: "Kiedy zbadać grunt?",
      intro: "Badania kosztują tyle samo przed zakupem i po nim. Różni się to, kto ponosi ryzyko złej wiadomości.",
      chosen: "przed",
      options: [
        { id: "przed", name: "Przed zakupem, za zgodą sprzedającego",
          cost: { min: 0, max: 0 }, time: "przed umową przyrzeczoną",
          pros: ["Wiesz, za co płacisz", "Argument do negocjacji ceny przy słabym gruncie", "Możesz się wycofać"],
          cons: ["Wymaga zgody sprzedającego", "Płacisz także wtedy, gdy nie kupisz"],
          why: "Kilka tysięcy złotych przed aktem to tanie ubezpieczenie. Słaby grunt potrafi podnieść koszt fundamentów o kilkadziesiąt tysięcy złotych." },
        { id: "po", name: "Po zakupie, przed projektem",
          cost: { min: 0, max: 0 }, time: "przed adaptacją projektu",
          pros: ["Bez rozmów ze sprzedającym", "Odwierty dokładnie pod ostateczne położenie domu"],
          cons: ["Za niespodzianki płacisz sam", "Zła wiadomość przychodzi, gdy pieniądze są już wydane"],
          why: "Do przyjęcia, gdy sąsiednie domy stoją bez problemów na ławach i znasz okoliczny grunt." },
        { id: "bez", name: "Bez badań, „bo sąsiad ma dobrze”",
          cost: { min: -3500, max: -1800 }, note: "nie polecamy",
          pros: ["Oszczędność kilku tysięcy złotych"],
          cons: ["Projektant przyjmie założenia na wyrost albo zgadnie", "Ryzyko pęknięć, zalewanego garażu i drogich poprawek"],
          why: "Warstwy gruntu potrafią się zmienić 30 m dalej." }
      ]
    },
    tips: [
      "<b>Odwierty w miejscu domu, nie w rogu działki.</b> Pokaż geologowi orientacyjne położenie budynku i garażu.",
      "<b>Pytaj o najwyższy poziom wody.</b> Wiosną woda stoi wyżej niż jesienią. Liczy się poziom maksymalny, nie tylko ten z dnia badania.",
      "<b>Jeden odwiert w miejscu basenu.</b> Niecka 4,2 × 8,5 m wchodzi w grunt ok. 1,5 m. Dodatkowy otwór kosztuje niewiele, a mówi dużo.",
      "<b>Bez kanalizacji poproś o ocenę przepuszczalności</b> gruntu pod przydomową oczyszczalnię."
    ],
    mistakes: [
      "<b>„Sąsiad nie miał problemów”.</b> Warstwy gruntu zmieniają się na krótkich odcinkach, szczególnie przy dawnych rowach i oczkach wodnych.",
      "<b>Jeden odwiert na całą działkę.</b> Nie pokazuje różnic pod domem, a nierówne osiadanie narożników to typowa przyczyna rys.",
      "<b>Opinia „pożyczona” z działki obok.</b> Projektant może ją przyjąć, ale ryzyko i tak zostaje po twojej stronie."
    ],
    formal: [
      ["Opinia geotechniczna", "geolog z uprawnieniami; trafia do projektu"],
      ["Zgoda sprzedającego na wejście na działkę", "na piśmie albo w umowie przedwstępnej"],
      ["Dokumentacja badań podłoża (przy złożonych warunkach)", "geolog; badań jest wtedy więcej i są droższe"]
    ],
    checklist: [
      "Odwierty w obrysie domu, garażu i basenu",
      "Opinia podaje rodzaj gruntu i poziom wody gruntowej",
      "Opinia zawiera zalecenia co do posadowienia",
      "Grunt pozwala na ławy albo znany jest koszt innego fundamentu",
      "Opinia przekazana projektantowi"
    ],
    quiz: [{
      q: "Geolog znalazł torf na głębokości 1 m. Co to oznacza dla domu?",
      a: ["Nic, torf to dobre podłoże", "Trzeba liczyć się z wymianą gruntu albo innym fundamentem", "Wystarczy grubsza wylewka"],
      correct: 1,
      explain: "<b>Torf to grunt nienośny.</b> Ściska się pod obciążeniem, więc dom osiadałby nierówno. Rozwiązaniem jest wymiana gruntu, płyta albo głębsze posadowienie, a każde z nich jest droższe niż zwykłe ławy."
    }]
  },

  /* 5 ------------------------------------------------------------------ */
  {
    id: "ksztalt-slonce",
    title: "Kształt, wymiary i słońce",
    lead: "Na 1200 m² zmieści się dom z garażem, taras, basen i ogród, pod warunkiem że działka ma dobry kształt i właściwą orientację względem stron świata.",
    body: `
      <p>Dom referencyjny ma w rzucie ok. <strong>13 × 9,5 m plus garaż 6,5 × 7 m</strong>, razem ok. 19,5 m frontu. Przepisy techniczno-budowlane wymagają zwykle odsunięcia ściany z oknami o <strong>4 m</strong> od granicy, a ściany bez okien o <strong>3 m</strong>. Są wyjątki, np. budowa w granicy, gdy pozwala na to plan. Stąd minimalny front ok. 27 m, wygodny 30 m i więcej.</p>
      <p>Najlepsza jest działka prostokątna, ok. <strong>30 × 40 m</strong>, z wjazdem od północy albo wschodu. Wtedy salon, taras i ogród z basenem patrzą na południe i zachód, a garaż i wejście oddzielają dom od drogi.</p>
      <p>Działka wąska i długa, trójkątna albo z dużym spadkiem nie przekreśla budowy, ale wymusza inny projekt albo droższe roboty ziemne. Sprawdź też cień: wysoki las, budynki albo nasyp drogi po stronie południowej zabiorą słońce ogrodowi i fotowoltaice.</p>`,
    diagram: `<svg viewBox="0 0 360 300" role="img" aria-label="Plan działki 30 na 40 metrów z domem, tarasem i basenem">
      <rect x="0" y="0" width="360" height="24" style="fill:var(--concrete-top)"/>
      <text x="12" y="16">droga gminna (północ)</text>
      <rect x="90" y="34" width="180" height="240" rx="2" style="fill:var(--lawn);fill-opacity:.32;stroke:var(--ink-3)" stroke-width="1.2" stroke-dasharray="5 4"/>
      <rect x="196" y="24" width="30" height="10" style="fill:var(--concrete)"/>
      <path d="M90 70H270" style="stroke:var(--rust)" stroke-width="1.2" stroke-dasharray="4 3"/>
      <text x="276" y="74">linia zabudowy</text>
      <rect x="114" y="70" width="39" height="42" style="fill:var(--concrete);stroke:var(--ink-2)" stroke-width="1.2"/>
      <text x="118" y="95">garaż</text>
      <rect x="153" y="70" width="78" height="57" style="fill:var(--plaster);stroke:var(--ink-2)" stroke-width="1.2"/>
      <text x="181" y="102">dom</text>
      <rect x="163" y="127" width="62" height="24" style="fill:var(--cladding);fill-opacity:.55"/>
      <text x="179" y="143">taras</text>
      <rect x="182" y="190" width="51" height="25" rx="2" style="fill:var(--water)"/>
      <text x="191" y="206">basen</text>
      <rect x="112" y="236" width="14" height="14" style="fill:var(--amber)"/>
      <text x="132" y="247">domek</text>
      <text x="100" y="178">ogród ok. 1000 m²</text>
      <path d="M90 121H114" style="stroke:var(--ink-2)" stroke-width="1"/>
      <path d="M90 117v8M114 117v8" style="stroke:var(--ink-2)" stroke-width="1"/>
      <text x="94" y="136">4 m</text>
      <path d="M90 284H270M90 280v8M270 280v8" style="stroke:var(--ink-2)" stroke-width="1"/>
      <text x="168" y="298">30 m</text>
      <path d="M78 34V274M74 34h8M74 274h8" style="stroke:var(--ink-2)" stroke-width="1"/>
      <text x="0" y="0" transform="translate(70 166) rotate(-90)">40 m</text>
      <path d="M326 112 333 136 326 130 319 136Z" style="fill:var(--ink)"/>
      <text x="322" y="106">N</text>
      <circle cx="322" cy="246" r="11" style="fill:var(--lamp)"/>
      <path d="M322 228v-5M322 264v5M304 246h-5M340 246h5" style="stroke:var(--lamp)" stroke-width="2" stroke-linecap="round"/>
      <text x="300" y="286">południe</text>
    </svg>
    <figcaption>Działka 30 × 40 m z wjazdem od północy. Dom z garażem stoi przy linii zabudowy, a taras, basen i ogród mają słońce od południa.</figcaption>`,
    decision: {
      question: "Z której strony wjazd?",
      intro: "Strona wjazdu ustawia cały układ domu i ogrodu. Wszystkie warianty kosztują tyle samo, różnią się wygodą i słońcem.",
      chosen: "polnoc",
      options: [
        { id: "polnoc", name: "Wjazd od północy lub północnego wschodu",
          cost: { min: 0, max: 0 }, note: "ogród od południa",
          pros: ["Ogród, taras i basen w słońcu przez cały dzień", "Garaż i wejście oddzielają ogród od ulicy", "Krótki podjazd do garażu"],
          cons: ["Front domu jest ciemniejszy, ale wejście i garaż nie potrzebują słońca"],
          why: "Duże przeszklenia salonu i taras od południa i zachodu dają światło i ciepło zimą, a ogród zostaje prywatny." },
        { id: "poludnie", name: "Wjazd od południa",
          cost: { min: 0, max: 0 }, note: "ogród od północy",
          pros: ["Podjazd szybciej schnie, śnieg topnieje sam"],
          cons: ["Ogród za domem w jego cieniu", "Taras i basen widoczne z ulicy albo salon obrócony od słońca"],
          why: "Wymaga innego projektu z salonem na tyłach i mniejszym ogrodem w słońcu." },
        { id: "bok", name: "Wjazd od wschodu lub zachodu",
          cost: { min: 0, max: 0 }, note: "ogród z boku",
          pros: ["Ogród od południa możliwy przy szerokiej działce"],
          cons: ["Potrzebna szersza działka albo obrócony dom", "Słońce na tarasie tylko przez część dnia"],
          why: "Dobry kompromis przy działce szerokiej na 35 m i więcej." }
      ]
    },
    tips: [
      "<b>Weź kompas albo telefon.</b> Na miejscu sprawdź, gdzie jest południe i co stoi po tej stronie: las, budynki, wysoki nasyp.",
      "<b>Wrysuj dom w mapę.</b> Na wydruku z Geoportalu w skali narysuj prostokąt 19,5 × 9,5 m z odległościami 4 m od granic. Od razu widać, czy zostaje miejsce na basen i ogród.",
      "<b>Niewielki spadek, do kilku procent, to zaleta.</b> Woda spływa od domu. Większy oznacza mury oporowe albo inny projekt.",
      "<b>Linie energetyczne nad działką</b> wyznaczają pas, w którym nie wolno budować. Zmierz, ile miejsca zabierają."
    ],
    mistakes: [
      "<b>Kupno działki „na metry”.</b> 1200 m² w kształcie trójkąta albo pasa szerokiego na 18 m to zupełnie inna działka niż prostokąt 30 × 40 m.",
      "<b>Zapomniany cień.</b> Las po południowej stronie to chłodny ogród, wolno schnący trawnik i słaba fotowoltaika.",
      "<b>Basen bez miejsca.</b> Basen 4,2 × 8,5 m z obejściem i maszynownią potrzebuje ok. 70–80 m². Na wąskiej działce zabraknie na niego miejsca w słońcu."
    ],
    formal: [
      ["Odległości od granic i zabudowa w granicy", "przepisy techniczno-budowlane i ustalenia planu; sprawdzi projektant"],
      ["Strefy ochronne linii energetycznych i gazociągów", "operator sieci; informacja w warunkach albo na mapie"]
    ],
    checklist: [
      "Front działki min. ok. 27 m, wygodnie 30 m",
      "Dom 19,5 × 9,5 m wrysowany w mapę z odległościami od granic",
      "Ogród i taras mogą być od południa lub zachodu",
      "Brak wysokiego cienia po stronie południowej",
      "Spadek terenu niewielki",
      "Brak linii energetycznych nad miejscem domu i basenu"
    ],
    quiz: [{
      q: "Jak blisko granicy działki może stać ściana domu z oknami w typowym przypadku?",
      a: ["1,5 m", "3 m", "4 m"],
      correct: 2,
      explain: "<b>4 m dla ściany z oknami lub drzwiami, 3 m dla ściany bez otworów.</b> Plan miejscowy i przypadki szczególne mogą to zmieniać, ale do oceny szerokości działki przyjmuj 4 m."
    }]
  },

  /* 6 ------------------------------------------------------------------ */
  {
    id: "dojazd",
    title: "Dojazd i służebności",
    lead: "Działka musi mieć dostęp do drogi publicznej: bezpośrednio albo przez drogę wewnętrzną lub służebność. Bez tego nie dostaniesz pozwolenia na budowę.",
    time: "1–4 tyg.", team: "notariusz, zarządca drogi",
    body: `
      <p>Najprostsza sytuacja: działka graniczy z utwardzoną <strong>drogą gminną</strong>. Wtedy potrzebujesz tylko zgody zarządcy drogi na zjazd, zwykle formalności w gminie.</p>
      <p>Często dojazd prowadzi przez <strong>drogę wewnętrzną</strong>, czyli osobną działkę, w której kupujesz udział razem z działką budowlaną, albo przez cudzy grunt na podstawie <strong>służebności drogowej</strong>. Służebność musi być ustanowiona aktem notarialnym i wpisana do księgi wieczystej. Ustne zapewnienie sąsiada nic nie znaczy dla urzędu ani dla kolejnego właściciela.</p>
      <p>Działkę mogą też obciążać <strong>służebności przesyłu</strong>: linia energetyczna, gazociąg, wodociąg. Operator ma prawo wejść i serwisować sieć, a w pasie nad nią nie wolno budować.</p>`,
    tips: [
      "<b>Udział w drodze dojazdowej kupuj w tym samym akcie.</b> Działka budowlana bez udziału w drodze wewnętrznej to działka bez dojazdu.",
      "<b>Sprawdź, kto utrzymuje drogę.</b> Drogę wewnętrzną utrzymują współwłaściciele: odśnieżanie, utwardzenie, oświetlenie.",
      "<b>Droga musi unieść budowę.</b> Gruszka z betonem i ciężarówka z dachówką potrzebują twardej drogi szerokiej na min. ok. 3,5 m, przejezdnej także po deszczu.",
      "<b>Zjazd z drogi powiatowej lub wojewódzkiej</b> wymaga zgody innego zarządcy i trwa dłużej niż z gminnej."
    ],
    mistakes: [
      "<b>Dojazd „po polu sąsiada, bo zawsze się jeździło”.</b> Nowy właściciel pola może go zamknąć z dnia na dzień.",
      "<b>Służebność osobista zamiast gruntowej.</b> Osobista należy do konkretnej osoby i nie przechodzi na kolejnych właścicieli działki.",
      "<b>Droga na mapie, ale nie w terenie.</b> Działka drogowa wydzielona na papierze, a w rzeczywistości pole albo rów. Budowa drogi spada na ciebie."
    ],
    formal: [
      ["Dostęp do drogi publicznej", "sprawdź na mapie ewidencyjnej i w księdze działki drogowej"],
      ["Służebność gruntowa (drogowa)", "akt notarialny i wpis w dziale III księgi działki obciążonej"],
      ["Zgoda na lokalizację zjazdu", "zarządca drogi: gmina, powiat albo województwo"]
    ],
    checklist: [
      "Działka graniczy z drogą publiczną albo ma udział w drodze wewnętrznej",
      "Służebność, jeśli potrzebna, ustanowiona aktem i wpisana do KW",
      "Droga utwardzona i przejezdna dla ciężkiego sprzętu",
      "Znany zarządca drogi i możliwość zjazdu",
      "Sprawdzone służebności przesyłu i strefy sieci"
    ],
    quiz: [{
      q: "Dojazd do działki prowadzi przez pole sąsiada „na słowo”. Co zrobić przed zakupem?",
      a: ["Nic, ustna zgoda wystarczy", "Ustanowić służebność drogową aktem notarialnym i wpisać ją do KW", "Postawić tablicę z informacją o przejeździe"],
      correct: 1,
      explain: "<b>Tylko wpis w księdze chroni dojazd.</b> Służebność gruntowa ustanowiona aktem notarialnym przechodzi na kolejnych właścicieli obu działek."
    }]
  },

  /* 7 ------------------------------------------------------------------ */
  {
    id: "ksiega-wieczysta",
    title: "Księga wieczysta",
    lead: "Księga wieczysta mówi, kto jest właścicielem, co obciąża działkę i czy ktoś ma do niej roszczenia. Przejrzysz ją za darmo w internecie w kwadrans.",
    time: "15–30 min", team: "ty, potem notariusz",
    body: `
      <p>Treść księgi sprawdzisz w serwisie Ministerstwa Sprawiedliwości <strong>ekw.ms.gov.pl</strong>, znając jej numer. Księga ma cztery działy:</p>
      <ul>
        <li><strong>Dział I</strong> – oznaczenie nieruchomości: numer działki, obręb, powierzchnia. Porównaj z wypisem z rejestru gruntów.</li>
        <li><strong>Dział II</strong> – właściciel. Musi się zgadzać ze sprzedającym, a przy kilku współwłaścicielach podpisują wszyscy.</li>
        <li><strong>Dział III</strong> – służebności, roszczenia, prawo pierwokupu, ostrzeżenia, np. o egzekucji komorniczej.</li>
        <li><strong>Dział IV</strong> – hipoteki.</li>
      </ul>
      <p>Zwróć uwagę na <strong>wzmianki</strong>, czyli informacje o złożonych, jeszcze nierozpatrzonych wnioskach. Wzmianka o wpisie hipoteki albo zmianie właściciela oznacza, że zaraz coś się zmieni.</p>
      <p>Hipoteka w dziale IV nie musi przekreślać zakupu. Sprzedający spłaca kredyt z twojej wpłaty, a bank wydaje zgodę na wykreślenie hipoteki. Wszystko to opisuje akt notarialny.</p>`,
    tips: [
      "<b>Sprawdź księgę dwa razy:</b> przed umową przedwstępną i w dniu aktu. Notariusz też to zrobi, ale ty wcześniej zobaczysz, czy jest o czym rozmawiać.",
      "<b>Porównaj powierzchnię i numer działki</b> w księdze i w rejestrze gruntów. Rozbieżności wyjaśnij przed zakupem.",
      "<b>Nieuregulowany spadek?</b> Jeśli w dziale II figuruje zmarły właściciel, najpierw potrzebne jest stwierdzenie nabycia spadku i wpis spadkobierców. To może potrwać miesiące.",
      "<b>Działka rolna:</b> notariusz sprawdzi, czy komuś przysługuje prawo pierwokupu. Dla działek poniżej 0,3 ha ograniczenia obrotu ziemią rolną co do zasady nie obowiązują."
    ],
    mistakes: [
      "<b>Wydruk księgi sprzed pół roku.</b> Treść księgi zmienia się z dnia na dzień. Sprawdzaj aktualną wersję online.",
      "<b>Pominięty dział III.</b> Służebność przesyłu albo roszczenie innego kupującego potrafi zablokować budowę albo sprzedaż.",
      "<b>Działka bez księgi.</b> Działka widoczna tylko w ewidencji wymaga najpierw założenia księgi i ustalenia, kto jest właścicielem."
    ],
    formal: [
      ["Przegląd treści księgi wieczystej", "ekw.ms.gov.pl, bezpłatnie"],
      ["Odpis z księgi wieczystej", "online albo w sądzie, opłata kilkadziesiąt zł"],
      ["Wypis z rejestru gruntów", "starostwo; do porównania z działem I"],
      ["Zgoda banku na wykreślenie hipoteki", "bank sprzedającego, przed aktem"]
    ],
    checklist: [
      "Numer i powierzchnia działki zgodne z ewidencją",
      "Sprzedający jest właścicielem, podpisują wszyscy współwłaściciele",
      "Dział III bez niechcianych obciążeń i roszczeń",
      "Dział IV: brak hipoteki albo opisany plan jej spłaty",
      "Brak wzmianek o nierozpatrzonych wnioskach"
    ],
    quiz: [{
      q: "W którym dziale księgi wieczystej sprawdzisz, czy działka jest obciążona hipoteką?",
      a: ["Dział II", "Dział III", "Dział IV"],
      correct: 2,
      explain: "<b>Dział IV to hipoteki.</b> Dział III zawiera inne obciążenia: służebności, roszczenia i ostrzeżenia, np. o egzekucji komorniczej."
    }]
  },

  /* 8 ------------------------------------------------------------------ */
  {
    id: "umowa-przedwstepna",
    title: "Umowa przedwstępna",
    lead: "Umowa przedwstępna rezerwuje działkę na czas załatwiania kredytu, badań i warunków przyłączenia. Dobrze napisana chroni obie strony.",
    time: "1–2 tyg. przygotowań", team: "notariusz, strony",
    body: `
      <p>Umowa przedwstępna zobowiązuje strony do zawarcia umowy sprzedaży w określonym terminie i na określonych warunkach. Może mieć <strong>zwykłą formę pisemną</strong> albo <strong>formę aktu notarialnego</strong>.</p>
      <p>Różnica jest zasadnicza. Przy akcie notarialnym, gdy sprzedający się wycofa, możesz przed sądem <strong>żądać zawarcia umowy sprzedaży</strong>. Przy zwykłej umowie pisemnej zostaje odszkodowanie albo zadatek. Roszczenie z umowy notarialnej wpisuje się do działu III księgi wieczystej, więc nikt inny nie kupi działki w międzyczasie.</p>
      <p><strong>Zadatek</strong>, zwykle ok. 10% ceny, przepada, gdy wycofasz się ty. Gdy wycofa się sprzedający, oddaje go w podwójnej wysokości. <strong>Zaliczka</strong> jest po prostu zwracana. W umowie zapisz warunki, od których zależy zakup: kredyt, wynik badań gruntu, warunki przyłączenia, decyzja WZ.</p>`,
    decision: {
      question: "W jakiej formie zawrzeć umowę przedwstępną?",
      intro: "Przy działce za ok. 215 tys. zł różnica w koszcie jest niewielka, a w bezpieczeństwie duża.",
      chosen: "notarialna",
      options: [
        { id: "notarialna", name: "Akt notarialny z wpisem roszczenia do KW",
          cost: { min: 1000, max: 1600 }, time: "termin u notariusza 1–2 tyg.", note: "pół taksy z VAT i wpis roszczenia",
          pros: ["Możesz sądownie wymusić sprzedaż", "Wpis roszczenia w KW blokuje sprzedaż komuś innemu", "Notariusz sprawdzi dokumenty już teraz"],
          cons: ["Koszt ok. 1–1,6 tys. zł", "Trzeba umówić termin"],
          why: "Przy zadatku ok. 20 tys. zł to tanie zabezpieczenie. Banki też chętniej przyjmują taką umowę do wniosku kredytowego." },
        { id: "pisemna", name: "Zwykła umowa pisemna",
          cost: { min: 0, max: 0 }, time: "od ręki",
          pros: ["Bez kosztów, od ręki"],
          cons: ["Przy wycofaniu się sprzedającego zostaje tylko zadatek albo odszkodowanie", "Brak wpisu w KW, działkę można sprzedać komuś innemu"],
          why: "Wystarczy przy krótkim terminie i zaufanym sprzedającym. Zawsze z zadatkiem i zapisanymi warunkami." }
      ]
    },
    tips: [
      "<b>Warunki zapisz wprost.</b> Zadatek ma wrócić do ciebie, jeśli bank odmówi kredytu albo badania gruntu wypadną źle. Bez takiego zapisu przepada.",
      "<b>Termin z zapasem.</b> Kredyt z wyceną działki trwa zwykle 4–8 tygodni. Daj sobie ok. 3 miesiące.",
      "<b>Zgoda na badania i wnioski.</b> Wpisz zgodę sprzedającego na wejście geologa i geodety oraz na składanie wniosków o warunki przyłączenia.",
      "<b>Ustal wydanie działki:</b> protokół, znaki graniczne, klucze do bramy, stan ogrodzenia."
    ],
    mistakes: [
      "<b>Pomylenie zaliczki z zadatkiem.</b> Skutki są zupełnie inne. Słowo „zadatek” musi paść w umowie wprost.",
      "<b>Brak terminu umowy przyrzeczonej.</b> Bez terminu każda strona może zwlekać, a roszczenie po czasie się przedawnia.",
      "<b>Zadatek gotówką bez potwierdzenia.</b> Zawsze przelewem albo z pokwitowaniem w umowie."
    ],
    formal: [
      ["Umowa przedwstępna w formie aktu notarialnego", "notariusz; taksa to połowa stawki maksymalnej plus VAT"],
      ["Wniosek o wpis roszczenia do KW", "składa notariusz; opłata sądowa 150 zł"],
      ["Umowa przedwstępna do wniosku kredytowego", "bank; zwykle razem z wypisem z MPZP"]
    ],
    checklist: [
      "Forma umowy wybrana świadomie",
      "Zadatek nazwany wprost, z kwotą i terminem zapłaty",
      "Warunki: kredyt, grunt, warunki przyłączenia, WZ",
      "Termin umowy przyrzeczonej z zapasem",
      "Zgoda sprzedającego na badania i wnioski",
      "Roszczenie wpisane do działu III KW (przy akcie notarialnym)"
    ],
    quiz: [{
      q: "Kupujący wpłacił 20 tys. zł zadatku, a sprzedający się wycofał. Ile może żądać kupujący?",
      a: ["20 tys. zł", "40 tys. zł", "Nic, zadatek przepada"],
      correct: 1,
      explain: "<b>Zadatek działa w obie strony.</b> Gdy wycofuje się sprzedający, oddaje zadatek w podwójnej wysokości. Gdy wycofuje się kupujący, zadatek przepada."
    }]
  },

  /* 9 ------------------------------------------------------------------ */
  {
    id: "akt-notarialny",
    title: "Akt notarialny i koszty zakupu",
    lead: "Przy akcie notarialnym działka przechodzi na ciebie. Oprócz ceny zapłacisz podatek PCC, taksę notarialną i opłaty sądowe, razem kilka tysięcy złotych.",
    time: "1–2 godz. u notariusza", team: "notariusz",
    cost: { min: 6500, max: 8500, note: "PCC, taksa z VAT, wypisy i wpisy do KW przy cenie ok. 215 tys. zł" },
    widget: "koszty-zakupu",
    body: `
      <p>Notariusz przygotowuje akt na podstawie dokumentów: odpisu księgi wieczystej, wypisu z rejestru gruntów, wypisu z MPZP albo decyzji WZ i dokumentu, na podstawie którego sprzedający nabył działkę. Do aktu potrzebne są dowody osobiste i ustalony sposób zapłaty: przelew, kredyt albo depozyt notarialny.</p>
      <p><strong>Koszty kupującego</strong> przy zakupie od osoby prywatnej: podatek od czynności cywilnoprawnych <strong>2%</strong> wartości rynkowej, <strong>taksa notarialna</strong> (stawka maksymalna zależy od ceny, do tego 23% VAT), wypisy aktu i <strong>200 zł opłaty sądowej</strong> za wpis własności do księgi. Przy kredycie dochodzi 200 zł za wpis hipoteki. Notariusz pobiera podatek i opłaty, a potem sam przekazuje je do urzędu i sądu.</p>
      <p>Kupując działkę od firmy, która jest płatnikiem VAT, płacisz VAT w cenie, a PCC nie ma. Policz swój wariant w kalkulatorze poniżej.</p>`,
    tips: [
      "<b>Taksa to stawka maksymalna.</b> Można ją negocjować. Zapytaj dwóch–trzech notariuszy o wycenę z góry.",
      "<b>Poproś o projekt aktu kilka dni wcześniej.</b> Spokojnie sprawdzisz numer działki, cenę, sposób zapłaty i termin wydania.",
      "<b>Depozyt notarialny</b> chroni obie strony przy wpłacie własnych pieniędzy: sprzedający dostaje je dopiero po podpisaniu aktu.",
      "<b>Wydanie działki protokołem.</b> Zapisz stan działki i znaki graniczne, a przy przyłączach także stany liczników."
    ],
    mistakes: [
      "<b>Zaniżona cena w akcie „dla oszczędności”.</b> Urząd skarbowy może określić wartość rynkową i doliczyć podatek z odsetkami.",
      "<b>Brak zgody banku na wykreślenie hipoteki.</b> Działka przejdzie na ciebie z cudzym długiem w dziale IV.",
      "<b>Koszty zakupu pominięte w budżecie.</b> Kilka tysięcy złotych przy akcie zwykle trzeba mieć z własnych pieniędzy."
    ],
    formal: [
      ["Akt notarialny umowy sprzedaży", "notariusz; taksa według stawek maksymalnych plus VAT"],
      ["Podatek PCC 2%", "pobiera i odprowadza notariusz"],
      ["Wniosek o wpis własności i hipoteki do KW", "składa notariusz elektronicznie; 200 zł za każdy wpis"],
      ["Informacja o nieruchomości do podatku (IN-1)", "urząd gminy, 14 dni od zakupu"]
    ],
    checklist: [
      "Projekt aktu przeczytany przed podpisaniem",
      "Cena, numer działki i termin wydania zgodne z ustaleniami",
      "Ustalony sposób zapłaty, a przy hipotece sprzedającego zgoda banku",
      "Udział w drodze dojazdowej albo służebność ujęte w akcie",
      "Koszty transakcyjne policzone i zabezpieczone",
      "Informacja IN-1 złożona w gminie w 14 dni"
    ],
    quiz: [{
      q: "Kto płaci podatek PCC przy zakupie działki od osoby prywatnej?",
      a: ["Sprzedający", "Kupujący", "Po połowie"],
      correct: 1,
      explain: "<b>PCC płaci kupujący.</b> Stawka to 2% wartości rynkowej. Notariusz pobiera podatek przy akcie i sam przekazuje go do urzędu skarbowego."
    }]
  },

  /* 10 ----------------------------------------------------------------- */
  {
    id: "mapa-projektowa",
    title: "Mapa do celów projektowych",
    lead: "Ostatni krok etapu: geodeta przygotowuje aktualną mapę działki z wysokościami terenu i sieciami. Na niej projektant usytuuje dom.",
    time: "3–6 tyg.", team: "geodeta z uprawnieniami",
    cost: { min: 2000, max: 3500, note: "dla działki ok. 1200 m²; wznowienie granic osobno 1,5–3 tys. zł" },
    body: `
      <p>Mapa do celów projektowych to aktualna mapa zasadnicza uzupełniona pomiarem w terenie: granice, budynki, drzewa, sieci uzbrojenia, wysokości terenu. Sporządza ją <strong>geodeta z uprawnieniami</strong>, a przyjmuje do zasobu powiatowy ośrodek dokumentacji geodezyjnej.</p>
      <p>Zamów ją zaraz po zakupie. Trwa zwykle <strong>3–6 tygodni</strong>, a bez niej nie ruszy adaptacja projektu w etapie 02. Jeśli znaki graniczne zniknęły albo granica z sąsiadem jest sporna, ten sam geodeta może je <strong>wznowić</strong>. To osobna usługa.</p>`,
    tips: [
      "<b>Poproś o pomiar drzew i wysokości drogi.</b> Projektant ustawi poziom posadzki, u nas ok. 0,35–0,40 m nad terenem, względem drogi i spływu wody.",
      "<b>Weź też wersję cyfrową.</b> Plik DWG lub DXF albo PDF w skali przyda się projektantowi i wykonawcy przyłączy.",
      "<b>Ten sam geodeta później wytyczy dom.</b> Zna działkę, a pakiet usług bywa tańszy.",
      "<b>Zapytaj o kolejkę w ośrodku dokumentacji.</b> W niektórych powiatach to ona wydłuża całą usługę."
    ],
    mistakes: [
      "<b>Stara mapa od sprzedającego.</b> Nieaktualna mapa nie przejdzie w starostwie albo przeniesie stare błędy do projektu.",
      "<b>Granica „na oko” według płotu sąsiada.</b> Płot przesunięty o 40 cm to później spór i przesunięty dom.",
      "<b>Za mały zakres mapy.</b> Bez pasa drogi i sieci za granicą działki projektant nie zaprojektuje przyłączy."
    ],
    formal: [
      ["Mapa do celów projektowych", "geodeta; przyjęcie do zasobu w powiatowym ośrodku dokumentacji"],
      ["Wznowienie znaków granicznych (opcjonalnie)", "geodeta, z protokołem i zawiadomieniem sąsiadów"]
    ],
    checklist: [
      "Mapa obejmuje działkę z pasem drogi i sieciami",
      "Naniesione wysokości terenu i drzewa",
      "Znaki graniczne odnalezione albo wznowione",
      "Mapa w wersji papierowej i cyfrowej",
      "Mapa przekazana projektantowi (etap 02)"
    ]
  }

  ]
});
