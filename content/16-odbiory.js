/* Etap 16: Odbiory, zakończenie budowy, przeprowadzka. Ceny orientacyjne, 2026 r., okolice małego miasta.
   Terminy urzędowe wg Prawa budowlanego w brzmieniu znanym na 2026 r. — sprawdź aktualne przepisy i praktykę swojego PINB. */
BUDOWA.addStage({
  id: "16-odbiory", nr: 16, title: "Odbiory i przeprowadzka", icon: "🔑", category: "dzialka",
  summary: "Protokoły, geodeta, świadectwo energetyczne, oświadczenie kierownika i zawiadomienie o zakończeniu budowy. Potem adres, podatek, media, polisa, bank, usterki i przeprowadzka.",
  duration: "1–3 mies.",
  steps: [

  /* 1 ------------------------------------------------------------------ */
  {
    id: "plan-konca",
    title: "Plan końcówki: dokumenty i terminy",
    lead: "Końcówka budowy to głównie papiery. Kilkanaście dokumentów od różnych osób trzeba zebrać w dobrej kolejności, bo bez nich nie zawiadomisz nadzoru budowlanego, a bez tego nie wolno zamieszkać.",
    time: "plan: 1 wieczór, całość 1–3 mies.", team: "ty, kierownik budowy",
    facts: [["Dokumentów", "ok. 15–20", "file"], ["Sprzeciw PINB", "14 dni", "clock"], ["Koszt etapu", "ok. 7–16 tys. zł", "wallet"]],
    body: `
      <p>Zacznij planować na <strong>2–3 miesiące przed przeprowadzką</strong>, gdy kończą się podłogi i biały montaż. Najdłużej trwają rzeczy, które zależą od innych: geodeta czeka na termin w ośrodku dokumentacji, audytor potrzebuje projektu i danych instalacji, a kierownik podpisze oświadczenie dopiero przy kompletnych protokołach.</p>
      <p>Kolejność jest prosta: <strong>protokoły i pomiary → geodeta i świadectwo energetyczne → oświadczenie kierownika i wpis w dzienniku → zawiadomienie do PINB → 14 dni → wprowadzasz się</strong>. Równolegle: numer porządkowy, umowy na media, polisa domu i dokumenty do banku.</p>
      <p>Po przeprowadzce zostają terminy liczone od zamieszkania: meldunek, informacja do podatku od nieruchomości, deklaracja śmieciowa i przegląd domu po pierwszym roku. Listę z terminami masz w widgecie poniżej.</p>`,
    tips: [
      "<b>Jedna teczka od początku.</b> Wkładaj do niej każdy protokół od razu, gdy ekipa go wystawi. Zbieranie ich po roku od elektryka, który zmienił numer telefonu, to strata tygodni.",
      "<b>Zapytaj kierownika o jego listę.</b> Każdy kierownik budowy ma własny zestaw dokumentów, bez których nie podpisze oświadczenia. Poproś o nią 2–3 miesiące przed końcem.",
      "<b>Termin przeprowadzki ustaw z zapasem.</b> Do ostatniego dokumentu dolicz 14 dni na sprzeciw PINB i ok. 2 tygodnie zapasu. Wypowiedzenie najmu daj dopiero, gdy zawiadomienie jest złożone.",
      "<b>Sprawdź swój PINB.</b> Niektóre powiatowe inspektoraty mają własne listy załączników i wzory oświadczeń na stronie. Zadzwoń i zapytaj, zanim złożysz."
    ],
    mistakes: [
      "<b>Wprowadzenie się „na chwilę” przed zawiadomieniem.</b> Użytkowanie bez zawiadomienia albo przed upływem 14 dni grozi karą administracyjną, a bank i ubezpieczyciel mogą odmówić.",
      "<b>Zamawianie geodety i audytora na ostatnią chwilę.</b> Geodeta w sezonie ma terminy za 2–4 tygodnie, a potem czeka na przyjęcie operatu do zasobu.",
      "<b>Ostatnia faktura zapłacona przed odbiorem.</b> Gdy wykonawca dostał całość, usterki i brakujące protokoły przestają być pilne."
    ],
    widget: "lista-odbiorow",
    quiz: [{
      q: "Od czego zależy najwcześniejszy dzień przeprowadzki przy zawiadomieniu o zakończeniu budowy?",
      a: ["Od daty ostatniej wypłaty z banku", "Od kompletu dokumentów i 14 dni na ewentualny sprzeciw PINB", "Od wpisu budynku do księgi wieczystej"],
      correct: 1,
      explain: "<b>Komplet + 14 dni.</b> Zawiadomienie składasz z kompletem załączników. Jeśli nadzór budowlany w 14 dni od doręczenia nie wniesie sprzeciwu, możesz użytkować dom."
    }]
  },

  /* 2 ------------------------------------------------------------------ */
  {
    id: "protokoly-instalacji",
    title: "Protokoły i pomiary instalacji",
    lead: "Każda instalacja kończy się papierem: pomiarami elektrycznymi, próbami szczelności, protokołem uruchomienia pompy ciepła i regulacji rekuperacji. Kierownik budowy dołącza je do zakończenia.",
    time: "zbieranie 1–2 tyg.", team: "elektryk, hydraulik, serwis PC, instalator rekuperacji",
    facts: [["Protokołów", "ok. 6–8", "listcheck"], ["Test n50", "cel ok. 1,0 1/h", "check"]],
    body: `
      <p>Większość dokumentów powstała w etapach 08–10. Teraz sprawdzasz, czy masz je wszystkie, czy są podpisane przez osoby z uprawnieniami i czy dotyczą <strong>stanu końcowego</strong>, a nie stanu sprzed wylewek.</p>
      <p><strong>Elektryka (08):</strong> protokół pomiarów (rezystancja izolacji, impedancja pętli zwarcia, działanie wyłączników różnicowoprądowych, rezystancja uziemienia) i schemat rozdzielnicy z opisem obwodów. <strong>Woda i ogrzewanie (09):</strong> protokoły prób szczelności wody i podłogówki, uruchomienie pompy ciepła przez autoryzowany serwis (warunek gwarancji). <strong>Rekuperacja (10):</strong> protokół regulacji przepływów. <strong>PV (10):</strong> zgłoszenie mikroinstalacji do operatora i potwierdzenie wymiany licznika.</p>
      <p>Końcowy <strong>test szczelności budynku (n50)</strong> nie jest obowiązkowy, ale po etapie 11 masz już wynik przed płytami g-k. Drugi pomiar na gotowym domu wyłapie przebicia od gniazd, puszek i montażu kuchni, a jego wynik przyda się audytorowi do świadectwa energetycznego.</p>`,
    decision: {
      question: "Czy robić końcowy test szczelności (n50)?",
      intro: "Pierwszy test zrobiłeś przed płytami g-k (etap 11). Koszt to pomiar firmy z drzwiami nawiewnymi.",
      chosen: "koncowy",
      options: [
        { id: "koncowy", name: "Tak, test końcowy na gotowym domu",
          cost: { min: 800, max: 1500 }, time: "2–3 godz.", note: "z lokalizacją nieszczelności",
          pros: ["Potwierdza wynik po wszystkich ekipach", "Wynik do świadectwa energetycznego i dokumentacji", "Wyłapuje przebicia od puszek, kuchni i obudów"],
          cons: ["Naprawy już tylko punktowe (uszczelniacze, pianka, taśmy)", "Dodatkowy koszt"],
          why: "Przy rekuperacji szczelność decyduje o rachunkach i działaniu wentylacji. Za ok. 1 tys. zł masz dowód, że ekipy wykończeniowe nie popsuły paroizolacji." },
        { id: "bez", name: "Bez testu końcowego",
          cost: { min: 0, max: 0 }, time: "—", note: "zostaje wynik z etapu 11",
          pros: ["Oszczędność ok. 1 tys. zł", "Jeden termin mniej"],
          cons: ["Nie wiesz, co zepsuły ekipy wykończeniowe", "Audytor przyjmie wartość z obliczeń, nie z pomiaru"],
          why: "Ma sens, gdy test przed płytami wyszedł wyraźnie poniżej 1,0 1/h, a po nim nikt nie wiercił w skosach ani w paroizolacji." }
      ]
    },
    tips: [
      "<b>Protokół z pieczątką i numerem uprawnień.</b> Pomiary elektryczne podpisuje osoba z uprawnieniami (świadectwo kwalifikacyjne E w zakresie pomiarów). Kartka z samymi wynikami nie wystarczy.",
      "<b>Pomiary po białym montażu.</b> Protokół elektryka ma dotyczyć gotowej instalacji z gniazdami i oprawami, nie tej sprzed tynków.",
      "<b>Test n50 przy zamkniętych kanałach.</b> Firma zaślepia czerpnię i wyrzutnię rekuperacji i komin kominka (zamknięta szyba i przepustnica). Kanałów wewnątrz nie zaklejasz.",
      "<b>Dym albo kamera termowizyjna.</b> W czasie podciśnienia technik chodzi z wytwornicą dymu lub kamerą. Poproś o zdjęcia nieszczelności, zanim kuchnia zakryje ścianę."
    ],
    mistakes: [
      "<b>Protokół uruchomienia pompy ciepła „zrobimy przy okazji”.</b> Bez uruchomienia przez autoryzowany serwis producent może odmówić gwarancji na sprężarkę.",
      "<b>Brak schematu rozdzielnicy.</b> Po latach nikt nie wie, który wyłącznik od czego. Opis obwodów ma być na drzwiczkach i w teczce.",
      "<b>Wynik n50 bez opisu warunków.</b> Liczba bez informacji o metodzie i przygotowaniu budynku jest mało warta dla audytora."
    ],
    formal: [
      ["Protokół pomiarów instalacji elektrycznej", "elektryk z uprawnieniami pomiarowymi; do oświadczenia kierownika"],
      ["Protokoły prób szczelności wody i ogrzewania", "hydraulik, z etapu 09; podpis kierownika robót"],
      ["Protokół uruchomienia pompy ciepła", "serwis autoryzowany producenta; warunek gwarancji"],
      ["Protokół regulacji rekuperacji", "instalator; przepływy na każdym anemostacie"],
      ["Zgłoszenie mikroinstalacji PV", "instalator do operatora sieci; potwierdzenie wymiany licznika"]
    ],
    checklist: [
      "Protokół pomiarów elektrycznych po białym montażu, z podpisem i uprawnieniami",
      "Schemat rozdzielnicy z opisem obwodów na drzwiczkach",
      "Protokoły prób szczelności wody i podłogówki",
      "Protokół uruchomienia pompy ciepła przez autoryzowany serwis",
      "Protokół regulacji rekuperacji z przepływami",
      "Potwierdzenie przyłączenia PV i licznik dwukierunkowy",
      "Wynik testu n50 (jeśli wykonany) z raportem"
    ]
  },

  /* 3 ------------------------------------------------------------------ */
  {
    id: "kominiarz",
    title: "Odbiór kominiarski",
    lead: "Mistrz kominiarski sprawdza przewód dymowy kominka i wentylację, a protokół jest jednym z załączników do zakończenia budowy. Bez niego nie odpalisz legalnie kominka.",
    time: "1–2 godz. na miejscu", team: "mistrz kominiarski",
    facts: [["Koszt", "ok. 300–800 zł", "wallet"], ["Przegląd potem", "co rok", "clock"]],
    body: `
      <p>Kominiarz sprawdza <strong>komin systemowy kominka</strong> z etapu 05: drożność, ciąg, szczelność (próba dymowa), wysokość wylotu nad dachem, odległości od drewna więźby i obróbkę na dachu. Ogląda też <strong>podłączenie wkładu</strong>, kanał powietrza z zewnątrz do spalania i drzwiczki rewizyjne.</p>
      <p>Przy rekuperacji ogląda <strong>wentylację</strong>: czerpnię, wyrzutnię i ich odległość od komina, a w pomieszczeniu z kominkiem sprawdza, czy wkład jest szczelny i ma dopuszczenie do domów z wentylacją mechaniczną. Czujniki czadu w salonie i na poddaszu (etap 10) też powinny już wisieć.</p>
      <p>Wynik to <strong>protokół odbioru przewodów kominowych</strong>. Jeśli coś jest nie tak (za niski wylot, brak rewizji), kominiarz wpisze uwagi i przyjdzie ponownie po poprawce.</p>`,
    cost: { min: 300, max: 800, note: "odbiór i protokół; ponowna wizyta po poprawkach dodatkowo" },
    tips: [
      "<b>Wezwij kominiarza przed obudową kominka.</b> Najlepiej dwa razy: przy podłączeniu wkładu (zanim obudowa zakryje połączenia) i na końcu po protokół.",
      "<b>Pierwsze palenie po protokole.</b> Rozpalaj małym ogniem 3–4 dni, żeby wkład i obudowa wygrzały się powoli. Farba na wkładzie będzie dymić i pachnieć, otwórz okna.",
      "<b>Zapisz kontakt kominiarza.</b> Ten sam zakład zrobi coroczny przegląd i czyszczenie. Ubezpieczyciel przy szkodzie od pożaru zapyta o protokół.",
      "<b>Funkcja „kominek” w rekuperacji.</b> Przed pierwszym paleniem sprawdź, czy centrala ma ją włączoną i czy nie robi podciśnienia w salonie."
    ],
    mistakes: [
      "<b>Kominek odpalony przed odbiorem.</b> Bez protokołu ubezpieczyciel może odmówić wypłaty po pożarze, a kominiarz może znaleźć wadę, którą trzeba będzie rozkuwać.",
      "<b>Wylot komina za nisko.</b> Przy dachu 40° wylot musi wystawać odpowiednio nad kalenicę lub połać. Poprawka po zakończeniu dachu jest droga.",
      "<b>Brak czujnika czadu.</b> Przy szczelnym domu i kominku to tani i najważniejszy element bezpieczeństwa."
    ],
    formal: [
      ["Protokół odbioru przewodów kominowych", "mistrz kominiarski; załącznik do zakończenia budowy"],
      ["Opinia kominiarska z etapu 05", "dołącz do teczki razem z kartą komina systemowego"]
    ],
    checklist: [
      "Próba dymowa i ciąg komina sprawdzone",
      "Wylot komina na właściwej wysokości nad dachem",
      "Wkład podłączony, z doprowadzeniem powietrza z zewnątrz",
      "Czujniki czadu zamontowane (salon, poddasze)",
      "Protokół kominiarski w teczce"
    ],
    quiz: [{
      q: "Kiedy najlepiej pierwszy raz rozpalić kominek?",
      a: ["Od razu po montażu wkładu, żeby osuszyć dom", "Po protokole kominiarskim, małym ogniem przez kilka dni", "Dopiero po roku, gdy dom osiądzie"],
      correct: 1,
      explain: "<b>Najpierw protokół, potem mały ogień.</b> Odbiór potwierdza, że komin i podłączenie są bezpieczne. Wkład wygrzewa się kilka dni małym ogniem."
    }]
  },

  /* 4 ------------------------------------------------------------------ */
  {
    id: "geodeta-inwentaryzacja",
    title: "Geodezyjna inwentaryzacja powykonawcza",
    lead: "Geodeta mierzy gotowy dom i nanosi go na mapę zasadniczą. Jego dokumentacja jest obowiązkowym załącznikiem do zakończenia budowy i aktualizuje ewidencję budynków.",
    time: "pomiar 1 dzień, operat 1–3 tyg.", team: "geodeta",
    facts: [["Koszt", "ok. 1,8–3 tys. zł", "wallet"], ["Czas", "2–4 tyg.", "clock"]],
    body: `
      <p>Geodeta zgłasza pracę w powiatowym ośrodku dokumentacji, mierzy obrys budynku, wysokość i położenie względem granic, a potem przekazuje operat do zasobu. Ty dostajesz <strong>mapę z wynikami inwentaryzacji powykonawczej</strong>, którą dołączasz do zawiadomienia o zakończeniu budowy.</p>
      <p><strong>Przyłącza</strong> (prąd, woda, światłowód, rura do oczyszczalni) geodeta mierzył już przed zasypaniem wykopów w etapie 03. Jeśli ich wtedy nie zinwentaryzowano, zrobi to teraz, ale bez odkopania zobaczy tylko końcówki. Sprawdź to wcześniej.</p>
      <p>Na podstawie operatu starostwo wpisuje budynek do <strong>ewidencji gruntów i budynków</strong>. Z niej korzysta później gmina przy podatku i nadawaniu numeru.</p>`,
    cost: { min: 1800, max: 3000, note: "inwentaryzacja budynku; przyłącza zmierzone w etapie 03" },
    tips: [
      "<b>Zamów geodetę 3–4 tygodnie przed planowanym zawiadomieniem.</b> Pomiar trwa godzinę lub dwie, ale przyjęcie operatu do zasobu potrafi trwać kilka tygodni.",
      "<b>Ten sam geodeta co przy wytyczeniu.</b> Ma już twoją działkę w systemie i szybciej porówna stan z projektem.",
      "<b>Taras, basen i ogrodzenie później.</b> Elementy ogrodu z etapu 15 często nie wymagają inwentaryzacji teraz. Zapytaj geodetę, co z nich trzeba będzie zgłosić osobno.",
      "<b>Poproś o wersję cyfrową.</b> Mapa w PDF przyda się projektantowi ogrodu i firmie od nawadniania."
    ],
    mistakes: [
      "<b>Dom przesunięty względem projektu.</b> Odchyłka wychodzi dopiero teraz. Dlatego wytyczenie i kontrola ław (etapy 03–04) muszą być zrobione przez geodetę.",
      "<b>Przyłącza bez inwentaryzacji przed zasypaniem.</b> Po zasypaniu trzeba odkopywać albo zostaje niepełna mapa, z którą bywa problem przy zakończeniu.",
      "<b>Zawiadomienie bez mapy, bo „geodeta doniesie”.</b> PINB potraktuje zawiadomienie jako niekompletne i termin 14 dni nie zacznie biec."
    ],
    formal: [
      ["Dokumentacja geodezyjna z wynikami inwentaryzacji powykonawczej", "geodeta; załącznik do zawiadomienia o zakończeniu budowy"],
      ["Aktualizacja ewidencji gruntów i budynków", "starostwo, na podstawie operatu geodety (bez osobnego wniosku, sprawdź w swoim powiecie)"]
    ],
    checklist: [
      "Geodeta zamówiony 3–4 tygodnie przed zawiadomieniem",
      "Przyłącza zinwentaryzowane (w etapie 03 albo teraz)",
      "Mapa z inwentaryzacją powykonawczą odebrana (papier + PDF)",
      "Położenie domu zgodne z projektem zagospodarowania"
    ]
  },

  /* 5 ------------------------------------------------------------------ */
  {
    id: "swiadectwo-energetyczne",
    title: "Świadectwo charakterystyki energetycznej",
    lead: "Świadectwo mówi, ile energii zużywa dom na ogrzewanie, ciepłą wodę i wentylację. Jest obowiązkowym załącznikiem do zakończenia budowy i ważne przez 10 lat.",
    time: "1–2 tyg.", team: "audytor wpisany do wykazu",
    facts: [["Koszt", "ok. 500–1200 zł", "wallet"], ["Ważność", "10 lat", "clock"]],
    body: `
      <p>Świadectwo sporządza osoba wpisana do <strong>wykazu osób uprawnionych</strong> (sprawdzisz w rejestrze prowadzonym przez ministerstwo). Liczy wskaźniki energii użytkowej, końcowej i nieodnawialnej pierwotnej (EP) na podstawie projektu, przegród, instalacji i ewentualnych zmian w czasie budowy.</p>
      <p>Dla naszego domu z pompą ciepła, rekuperacją, PV i ścianami o U ok. 0,13 wynik powinien wyraźnie spełniać wymagania WT2021. Audytor potrzebuje <strong>projektu, danych pompy ciepła, centrali rekuperacji, okien i PV</strong>. Wynik testu n50 poprawia obliczenia.</p>
      <p>Gotowe świadectwo audytor przekazuje do <strong>centralnego rejestru</strong>, a ty dostajesz wydruk z numerem. Przyda się też przy sprzedaży lub wynajmie domu.</p>`,
    cost: { min: 500, max: 1200, note: "dom jednorodzinny ok. 190 m², orientacyjnie" },
    tips: [
      "<b>Daj audytorowi karty urządzeń.</b> Konkretne COP pompy, sprawność odzysku centrali i Uw okien poprawiają wynik w stosunku do wartości domyślnych.",
      "<b>Zmiany z budowy też.</b> Jeśli zamieniłeś grubość ocieplenia, okna albo źródło ciepła, audytor musi o tym wiedzieć. Świadectwo ma opisywać dom zbudowany, nie projektowany.",
      "<b>Najtańsze świadectwo bez wizyty to ryzyko.</b> Oferty „online za 200 zł” bywają oparte na samym projekcie. Przy błędach PINB może zakwestionować załącznik.",
      "<b>Numer w rejestrze.</b> Sprawdź, czy świadectwo zostało przekazane do rejestru, zanim dołączysz je do zawiadomienia."
    ],
    mistakes: [
      "<b>Świadectwo zamówione po zawiadomieniu.</b> To załącznik do zakończenia budowy, nie formalność na później.",
      "<b>Dane z projektu zamiast z budowy.</b> Inna pompa albo okna niż w projekcie dają inny wynik i niezgodność dokumentów.",
      "<b>Audytor bez uprawnień.</b> Sprawdź go w wykazie przed zleceniem."
    ],
    formal: [
      ["Świadectwo charakterystyki energetycznej", "audytor z wykazu; ważne 10 lat; załącznik do zakończenia budowy"],
      ["Wpis do centralnego rejestru", "robi audytor; ty dostajesz numer świadectwa"]
    ],
    checklist: [
      "Audytor sprawdzony w wykazie osób uprawnionych",
      "Przekazane karty pompy ciepła, rekuperacji, okien i PV",
      "Uwzględnione zmiany wprowadzone w czasie budowy",
      "Świadectwo z numerem z centralnego rejestru w teczce"
    ]
  },

  /* 6 ------------------------------------------------------------------ */
  {
    id: "kierownik-dziennik",
    title: "Oświadczenie kierownika i zamknięcie dziennika",
    lead: "Kierownik budowy podpisuje oświadczenie, że dom zbudowano zgodnie z projektem, pozwoleniem i przepisami, a teren budowy uporządkowano. Robi też końcowy wpis w elektronicznym dzienniku budowy.",
    time: "1–2 tyg. od kompletu protokołów", team: "kierownik budowy, projektant",
    facts: [["Kierownik", "w kosztach etapu 02", "users"], ["Dziennik", "EDB w e-Budownictwie", "book"]],
    body: `
      <p>Kierownik przychodzi na <strong>odbiór końcowy</strong>, przegląda protokoły (elektryka, próby, kominiarz, geodeta) i sprawdza, czy teren jest uprzątnięty: bez gruzu, kontenera, toalety i resztek materiałów. Potem podpisuje <strong>oświadczenie kierownika budowy</strong> i robi końcowy wpis w <strong>elektronicznym dzienniku budowy (EDB)</strong>.</p>
      <p>Jeśli w czasie budowy wprowadzono <strong>zmiany nieistotne</strong> (np. inny układ ścianek działowych albo przesunięte okno w granicach projektu), projektant nanosi je na kopię projektu i opisuje. Kierownik dołącza to do oświadczenia. Zmiany istotne wymagały zmiany pozwolenia już w trakcie budowy.</p>
      <p>Przy EDB nie nosisz papierowego dziennika do urzędu. Nadzór budowlany widzi wpisy w systemie, ale zapytaj w swoim PINB, czy czegoś nie wymaga na papierze.</p>`,
    cost: { min: 0, max: 1000, note: "naniesienie zmian nieistotnych przez projektanta, gdy były" },
    tips: [
      "<b>Odbiór z kierownikiem z listą.</b> Przejdź dom pomieszczenie po pomieszczeniu z wydrukiem jego wymagań. Brak jednego protokołu to kolejny tydzień.",
      "<b>Oświadczenie ma kilka części.</b> Zgodność z projektem i przepisami oraz doprowadzenie do porządku terenu budowy (a także terenów przyległych, jeśli z nich korzystałeś). Sprawdź, czy wszystkie są podpisane.",
      "<b>Zmiany nieistotne zbieraj na bieżąco.</b> Projektant szybciej opisze je w trakcie budowy niż po roku z pamięci ekip.",
      "<b>Inspektor nadzoru też się wpisuje.</b> Jeśli miałeś inspektora (etap 03), jego końcowy wpis w EDB porządkuje dokumentację."
    ],
    mistakes: [
      "<b>Kontener i hałda gruzu na działce przy odbiorze.</b> Kierownik nie podpisze doprowadzenia terenu do porządku, a PINB może to sprawdzić.",
      "<b>„Drobna zmiana” bez opisu projektanta.</b> Przesunięte okno czy dobudowana wiata bez dokumentu to niezgodność z projektem w dniu zakończenia.",
      "<b>Kierownik rozliczony przed odbiorem końcowym.</b> Ostatnią ratę dla kierownika płać po podpisanym oświadczeniu."
    ],
    formal: [
      ["Oświadczenie kierownika budowy", "zgodność z projektem i przepisami, uporządkowanie terenu; załącznik do zakończenia"],
      ["Kopia projektu z naniesionymi zmianami nieistotnymi", "projektant (opis i rysunki), gdy zmiany były"],
      ["Końcowy wpis w elektronicznym dzienniku budowy", "kierownik budowy w e-Budownictwie"]
    ],
    checklist: [
      "Teren uprzątnięty: bez gruzu, kontenera i toalety",
      "Komplet protokołów u kierownika",
      "Zmiany nieistotne opisane przez projektanta",
      "Oświadczenie kierownika podpisane",
      "Końcowy wpis w EDB"
    ]
  },

  /* 7 ------------------------------------------------------------------ */
  {
    id: "zakonczenie-budowy",
    title: "Zawiadomienie o zakończeniu budowy albo pozwolenie na użytkowanie",
    lead: "Dom jednorodzinny zwykle oddajesz do użytkowania przez zawiadomienie nadzoru budowlanego. Jeśli w 14 dni PINB nie wniesie sprzeciwu, możesz się wprowadzić.",
    time: "14 dni od doręczenia (pozwolenie: orientacyjnie 1–2 mies.)", team: "ty jako inwestor, PINB",
    facts: [["Sprzeciw", "14 dni", "clock"], ["Opłata", "zwykle 0 zł", "wallet"], ["Kontrola przy pozwoleniu", "do 21 dni", "stamp"]],
    body: `
      <p><strong>Zawiadomienie o zakończeniu budowy</strong> składasz do powiatowego inspektoratu nadzoru budowlanego (PINB), na formularzu albo przez e-Budownictwo. Dotyczy obu dróg z etapu 02: domu budowanego na pozwolenie i na zgłoszenie z projektem. Załączniki: oświadczenie kierownika budowy, protokoły badań i sprawdzeń (elektryka, kominiarz i inne, jeśli były wymagane), dokumentacja geodezyjna z inwentaryzacji powykonawczej, świadectwo charakterystyki energetycznej, ewentualnie opis zmian nieistotnych.</p>
      <p>PINB ma <strong>14 dni od doręczenia</strong> na sprzeciw w drodze decyzji. Gdy go nie wniesie, możesz użytkować dom. Inspektor może też przyjść na kontrolę. Możesz poprosić o <strong>zaświadczenie o braku sprzeciwu</strong>; przyda się w banku.</p>
      <p><strong>Pozwolenie na użytkowanie</strong> jest potrzebne, gdy chcesz zamieszkać przed wykonaniem wszystkich robót z projektu, gdy PINB nałoży taki obowiązek albo przy legalizacji. Wtedy nadzór robi obowiązkową kontrolę w ciągu 21 dni od wniosku, a zamieszkać można po decyzji ostatecznej. Terminy i zakres sprawdź w swoim PINB (orientacyjnie).</p>`,
    decision: {
      question: "Jak oddać dom do użytkowania?",
      intro: "Koszt jest znikomy. Różnica to czas i ryzyko opóźnienia przeprowadzki.",
      chosen: "zawiadomienie",
      options: [
        { id: "zawiadomienie", name: "Zawiadomienie o zakończeniu budowy (po komplecie robót)",
          cost: { min: 0, max: 0 }, time: "14 dni", note: "milcząca zgoda PINB",
          pros: ["Najszybciej: 14 dni od doręczenia", "Bez decyzji i bez obowiązkowej kontroli", "Działa przy pozwoleniu i przy zgłoszeniu z projektem"],
          cons: ["Wszystkie roboty z projektu muszą być skończone", "Niekompletne załączniki = wezwanie i przesunięcie terminu"],
          why: "Standard dla domu jednorodzinnego. Przy kompletnych dokumentach to tylko 14 dni czekania i zero opłat." },
        { id: "pozwolenie", name: "Pozwolenie na użytkowanie (np. przed końcem robót)",
          cost: { min: 0, max: 200 }, time: "orientacyjnie 1–2 mies.", note: "kontrola PINB w 21 dni",
          pros: ["Pozwala zamieszkać przed wykonaniem wszystkich robót (np. bez części wykończenia)", "Decyzja na piśmie, jasna dla banku"],
          cons: ["Obowiązkowa kontrola i decyzja", "Dłużej: kontrola, decyzja i jej uprawomocnienie", "Trzeba opisać, jakie roboty zostały i kiedy się skończą"],
          why: "Ma sens, gdy kończy ci się najem, a np. poddasze albo elewacja nie są gotowe. Przy budownictwie mieszkaniowym opłata skarbowa zwykle nie występuje, sprawdź w PINB." }
      ]
    },
    tips: [
      "<b>Złóż elektronicznie.</b> W e-Budownictwie zawiadomienie trafia od razu, a data doręczenia jest jasna. Termin 14 dni liczysz od niej.",
      "<b>Kopie, nie oryginały.</b> Do zawiadomienia zwykle dołączasz kopie protokołów. Oryginały zostają w twojej teczce (zapytaj PINB o swoje wymagania).",
      "<b>Zaświadczenie o braku sprzeciwu.</b> Poproś o nie po 14 dniach. Bank i ubezpieczyciel chętnie je zobaczą.",
      "<b>Stan deweloperski a zakończenie.</b> Jeśli projekt obejmuje podłogi i wykończenie, a ich nie ma, zapytaj kierownika, czy to „roboty do wykonania”. Wtedy potrzebna może być droga przez pozwolenie na użytkowanie."
    ],
    mistakes: [
      "<b>Wprowadzka w dniu złożenia zawiadomienia.</b> Przez 14 dni PINB może wnieść sprzeciw. Użytkowanie wcześniej grozi karą (dla domu jednorodzinnego orientacyjnie ok. 10 tys. zł).",
      "<b>Niekompletne załączniki.</b> Brak mapy geodety albo świadectwa to wezwanie do uzupełnienia i nowy bieg terminu.",
      "<b>Zgłoszenie zakończenia „części domu” bez pozwolenia.</b> Mieszkanie na parterze przy niedokończonym poddaszu to przypadek na pozwolenie na użytkowanie, nie na zawiadomienie."
    ],
    formal: [
      ["Zawiadomienie o zakończeniu budowy", "inwestor do PINB (formularz albo e-Budownictwo); 14 dni na sprzeciw"],
      ["Załączniki", "oświadczenie kierownika, protokoły badań i sprawdzeń, inwentaryzacja geodezyjna, świadectwo energetyczne, opis zmian nieistotnych"],
      ["Wniosek o pozwolenie na użytkowanie (gdy wymagane)", "PINB; kontrola obowiązkowa w ciągu 21 dni, decyzja"],
      ["Zaświadczenie o braku sprzeciwu", "PINB, na wniosek po upływie 14 dni (sprawdź opłatę)"]
    ],
    checklist: [
      "Wszystkie załączniki skompletowane i skopiowane",
      "Zawiadomienie złożone, data doręczenia zapisana",
      "Upłynęło 14 dni bez sprzeciwu",
      "Zaświadczenie o braku sprzeciwu dla banku (opcjonalnie)"
    ],
    quiz: [{
      q: "Kiedy zamiast zawiadomienia potrzebne jest pozwolenie na użytkowanie?",
      a: ["Zawsze przy domu z garażem w bryle", "Gdy chcesz zamieszkać przed wykonaniem wszystkich robót albo PINB nałoży taki obowiązek", "Gdy budowa trwała dłużej niż 3 lata"],
      correct: 1,
      explain: "<b>Wcześniejsze zamieszkanie albo decyzja PINB.</b> Standardowo dom jednorodzinny oddajesz zawiadomieniem. Pozwolenie na użytkowanie wchodzi m.in. przy użytkowaniu przed końcem robót."
    }, {
      q: "Od kiedy liczy się 14 dni na sprzeciw PINB?",
      a: ["Od dnia wysłania zawiadomienia pocztą", "Od doręczenia kompletnego zawiadomienia do PINB", "Od wpisu kierownika w dzienniku"],
      correct: 1,
      explain: "<b>Od doręczenia kompletu.</b> Gdy brakuje załącznika, PINB wzywa do uzupełnienia i termin realnie się przesuwa."
    }]
  },

  /* 8 ------------------------------------------------------------------ */
  {
    id: "adres-podatek",
    title: "Numer porządkowy i podatek od nieruchomości",
    lead: "Dom dostaje numer porządkowy od gminy, a po zakończeniu budowy zgłaszasz go do podatku od nieruchomości. Obie sprawy załatwisz w urzędzie gminy.",
    time: "numer: 2–4 tyg., podatek: 14 dni na zgłoszenie", team: "ty, urząd gminy",
    facts: [["Informacja IN-1", "14 dni", "clock"], ["Podatek", "ok. 0,8–1,2 tys. zł/rok", "wallet"]],
    body: `
      <p><strong>Numer porządkowy</strong> nadaje wójt lub burmistrz na wniosek właściciela. Wiele gmin robi to już w trakcie budowy, bo numer jest potrzebny do umów z mediami, meldunku i dokumentów w banku. Do wniosku zwykle dołączasz mapę z zaznaczonym budynkiem. Tabliczkę z numerem montujesz na elewacji, widoczną od ulicy (montażówka z etapu 12).</p>
      <p><strong>Podatek od nieruchomości:</strong> w ciągu 14 dni od zakończenia budowy albo rozpoczęcia użytkowania składasz do gminy <strong>informację o nieruchomościach (IN-1)</strong>. Obowiązek podatkowy powstaje od 1 stycznia następnego roku. Podatek płacisz od powierzchni użytkowej budynku i od gruntu, według stawek z uchwały gminy.</p>
      <p>Powierzchnię liczysz po wewnętrznej długości ścian. <strong>Na poddaszu część o wysokości 1,40–2,20 m liczysz w 50%, a poniżej 1,40 m pomijasz.</strong> Dla naszego domu z dachem 40° i ścianką kolankową 1 m to realna różnica.</p>`,
    cost: { min: 0, max: 100, note: "wniosek o numer zwykle bezpłatny, tabliczka" },
    tips: [
      "<b>Wniosek o numer już przy ścianach.</b> Gdy dom stoi, złóż wniosek. Numer przyda się przy umowie na prąd docelowy i przy meldunku.",
      "<b>Poddasze liczone osobno.</b> Do IN-1 podaj powierzchnie z podziałem na wysokości. Inaczej zapłacisz za całe skosy.",
      "<b>Garaż w bryle domu.</b> W budynku mieszkalnym garaż zwykle liczy się jako część budynku mieszkalnego. Sprawdź interpretację w swojej gminie.",
      "<b>Ulga od gminy.</b> Niektóre gminy mają zwolnienia z podatku dla nowych mieszkańców albo na OZE. Zapytaj przy składaniu IN-1."
    ],
    mistakes: [
      "<b>Brak IN-1, bo „gmina wie z geodety”.</b> Obowiązek złożenia informacji jest twój. Po latach gmina naliczy zaległy podatek z odsetkami.",
      "<b>Całe poddasze w 100%.</b> Zawyżona powierzchnia to wyższy podatek co roku.",
      "<b>Numer na skrzynce pocztowej zamiast na domu.</b> Tabliczka ma być na budynku, widoczna od drogi, także dla karetki w nocy (podświetlenie z etapu 08)."
    ],
    formal: [
      ["Wniosek o nadanie numeru porządkowego", "wójt lub burmistrz; zwykle bez opłaty, sprawdź w gminie"],
      ["Informacja o nieruchomościach (IN-1)", "urząd gminy, 14 dni od zakończenia budowy lub zamieszkania"],
      ["Decyzja podatkowa", "gmina; podatek płatny w ratach, pierwszy rok od 1 stycznia po zakończeniu"]
    ],
    checklist: [
      "Numer porządkowy nadany",
      "Tabliczka z numerem na elewacji, widoczna od ulicy",
      "IN-1 złożona w 14 dni",
      "Powierzchnia poddasza policzona z podziałem na wysokości"
    ],
    quiz: [{
      q: "Jak liczy się do podatku powierzchnię poddasza o wysokości od 1,40 do 2,20 m?",
      a: ["W 100%", "W 50%", "Wcale"],
      correct: 1,
      explain: "<b>W połowie.</b> Część poniżej 1,40 m się pomija, a 1,40–2,20 m liczy w 50%. Dlatego warto podać gminie powierzchnię z podziałem."
    }]
  },

  /* 9 ------------------------------------------------------------------ */
  {
    id: "media-docelowe",
    title: "Umowy na media docelowe",
    lead: "Na budowie płaciłeś za prąd budowlany i wodę do zaprawy. Teraz zmieniasz umowy na docelowe: taryfa domowa, woda dla gospodarstwa, odpady, oczyszczalnia i internet.",
    time: "1–3 tyg.", team: "ty, sprzedawca energii, wodociągi, gmina",
    facts: [["Deklaracja śmieciowa", "14 dni", "clock"], ["Zużycie prądu", "ok. 7,5 tys. kWh/rok", "bulb"]],
    body: `
      <p><strong>Prąd:</strong> przyłącze 3 × 25–32 A z etapu 03 zostaje, zmienia się umowa: z taryfy budowlanej na domową (np. G11, G12, G12w albo dynamiczną). Z PV (etap 10) rozliczasz się w net-billingu, a licznik dwukierunkowy już jest. <strong>Woda:</strong> umowa na cele bytowe, odczyt wodomierza na zamknięcie budowy, ewentualnie podlicznik ogrodowy (etap 03).</p>
      <p><strong>Ścieki:</strong> przydomowa oczyszczalnia (etap 03) wymaga zgłoszenia do starostwa przed eksploatacją (jeśli firma tego nie zrobiła) i wpisu do gminnej ewidencji, a potem umowy na wywóz osadu. <strong>Odpady:</strong> deklarację o opłacie za gospodarowanie odpadami składasz w gminie w 14 dni od zamieszkania.</p>
      <p><strong>Internet:</strong> światłowód z rury z etapu 03 do szafki RACK (etap 08). Operatora zamów 3–6 tygodni przed przeprowadzką, bo termin instalacji bywa długi.</p>`,
    decision: {
      question: "Jaka taryfa prądu przy pompie ciepła i PV?",
      intro: "To koszt eksploatacji, nie budżet budowy. Porównaj oferty na swoich godzinach zużycia; stawki są orientacyjne.",
      chosen: "g12w",
      options: [
        { id: "g12w", name: "Dwustrefowa z weekendami (np. G12w)",
          cost: { min: 0, max: 0 }, time: "zmiana od razu", note: "tańsze noce i weekendy",
          pros: ["Pompa ciepła i CWU w tańszych godzinach", "Weekendy w całości tańsze: pranie, ładowanie auta", "Prosto, bez śledzenia cen"],
          cons: ["Droższa strefa dzienna", "Trzeba ustawić harmonogram pompy i AGD"],
          why: "Pasuje do domu z pompą ciepła i smart home (etap 10): CWU w godzinach PV albo w tańszej strefie. Dobry punkt startu na pierwszy rok, potem porównaj z rachunkami." },
        { id: "g11", name: "Jednostrefowa (G11)",
          cost: { min: 0, max: 0 }, time: "zmiana od razu", note: "jedna cena całą dobę",
          pros: ["Najprostsza", "Bez planowania zużycia"],
          cons: ["Nie wykorzystuje tańszych godzin przy dużym zużyciu PC"],
          why: "Ma sens przy małym zużyciu albo gdy nie chcesz nic ustawiać. Przy pompie ciepła zwykle wychodzi drożej." },
        { id: "dynamiczna", name: "Taryfa dynamiczna (ceny godzinowe)",
          cost: { min: 0, max: 0 }, time: "wymaga licznika zdalnego odczytu", note: "cena zmienia się co godzinę",
          pros: ["Najniższe ceny w godzinach nadwyżek energii", "Dobrze współpracuje z magazynem energii i automatyką"],
          cons: ["Ryzyko drogich godzin zimą", "Wymaga automatyki i pilnowania"],
          why: "Dla zaawansowanych z magazynem energii (etap 10: później) i sterowaniem pompą wg cen. Na start zwykle nie." }
      ]
    },
    tips: [
      "<b>Odczyt licznika i wodomierza w dniu zmiany.</b> Zrób zdjęcie z datą. Rozliczenie budowy i domu oddzielisz bez sporów.",
      "<b>Harmonogram pompy pod taryfę.</b> Po zmianie taryfy ustaw grzanie CWU i dogrzewanie podłogówki w tańszych godzinach albo w godzinach produkcji PV.",
      "<b>Oczyszczalnia: bakterie i pierwszy wywóz.</b> Zapytaj firmę z etapu 03 o rozruch i harmonogram wywozu osadu (zwykle 1–2 razy w roku).",
      "<b>Internet z wyprzedzeniem.</b> Bez internetu nie zadziała część smart home i monitoring. Zamów instalację przed przeprowadzką."
    ],
    mistakes: [
      "<b>Taryfa budowlana na dłużej.</b> Prąd budowlany jest zwykle droższy. Zmień umowę zaraz po zakończeniu.",
      "<b>Brak deklaracji śmieciowej.</b> Gmina naliczy opłatę z urzędu, często w wyższej stawce.",
      "<b>Oczyszczalnia bez zgłoszenia.</b> Przy kontroli gminy albo starostwa brak dokumentu to kłopot i możliwa kara."
    ],
    formal: [
      ["Umowa kompleksowa na prąd (taryfa domowa)", "sprzedawca energii / operator; zamiast umowy budowlanej"],
      ["Umowa na dostawę wody", "wodociągi gminne; odczyt na zamknięcie budowy"],
      ["Zgłoszenie przydomowej oczyszczalni", "starostwo przed eksploatacją + gminna ewidencja (sprawdź, czy nie zrobiła tego firma)"],
      ["Deklaracja o opłacie za odpady", "gmina, 14 dni od zamieszkania"]
    ],
    checklist: [
      "Umowa na prąd zmieniona na taryfę domową",
      "Umowa na wodę dla gospodarstwa, zdjęcie wodomierza",
      "Oczyszczalnia zgłoszona, umowa na wywóz osadu",
      "Deklaracja śmieciowa złożona",
      "Internet zamówiony z terminem przed przeprowadzką"
    ]
  },

  /* 10 ----------------------------------------------------------------- */
  {
    id: "ubezpieczenie-domu",
    title: "Ubezpieczenie domu zamiast polisy budowlanej",
    lead: "Polisa budowlana z etapu 00 chroniła plac budowy. Gotowy dom potrzebuje zwykłej polisy domu: mury, stałe elementy, ruchomości i OC w życiu prywatnym, z cesją na bank.",
    time: "1–2 dni", team: "ty, agent lub ubezpieczyciel",
    facts: [["Składka", "ok. 1–2 tys. zł/rok", "wallet"], ["Suma murów", "ok. 1,3–1,6 mln zł", "shield"]],
    body: `
      <p>Nowa polisa ma ruszyć <strong>najpóźniej w dniu wprowadzki</strong>, a polisa budowlana skończyć się dzień później, bez dziury. Bank wymaga ciągłości ochrony i <strong>cesji praw z polisy</strong> na swoją rzecz.</p>
      <p>Zakres: <strong>mury i stałe elementy</strong> (okna, podłogi, kuchnia w zabudowie, instalacje), <strong>ruchomości</strong> (meble, sprzęt), <strong>OC w życiu prywatnym</strong> i assistance. Dopisz osobno urządzenia, które łatwo pominąć: <strong>pompę ciepła na zewnątrz, panele PV, rekuperator, ogrodzenie, basen i pergolę</strong> (gdy powstaną w etapie 15).</p>
      <p>Sumę murów ustal jako <strong>koszt odtworzenia domu bez działki</strong>, nie jako cenę rynkową z działką. Przy naszym budżecie to orientacyjnie 1,3–1,6 mln zł.</p>`,
    cost: { min: 1000, max: 2000, note: "składka za pierwszy rok, orientacyjnie" },
    decision: {
      question: "Jak ustalić sumę ubezpieczenia?",
      intro: "Wpływa na wypłatę przy dużej szkodzie, a składka różni się o kilkaset złotych rocznie.",
      chosen: "odtworzeniowa",
      options: [
        { id: "odtworzeniowa", name: "Wartość odtworzeniowa (koszt odbudowy)",
          cost: { min: 0, max: 0 }, time: "—", note: "ok. 1,3–1,6 mln zł bez działki",
          pros: ["Pozwala odbudować dom w tym samym standardzie", "Bez potrącenia za zużycie w pierwszych latach"],
          cons: ["Wyższa składka", "Sumę trzeba co kilka lat aktualizować do cen budowy"],
          why: "Przy nowym domu to jedyna suma, za którą odbudujesz go po pożarze. Różnica w składce to zwykle kilkaset złotych rocznie." },
        { id: "rzeczywista", name: "Wartość rzeczywista (z potrąceniem zużycia)",
          cost: { min: -500, max: -200 }, time: "—", note: "tańsza składka",
          pros: ["Niższa składka"],
          cons: ["Wypłata pomniejszona o zużycie", "Przy całkowitej szkodzie zabraknie na odbudowę"],
          why: "Ma sens dla starszych budynków gospodarczych. Dla nowego domu na kredyt to oszczędność w złym miejscu." },
        { id: "z-dzialka", name: "Wartość rynkowa (z działką)",
          cost: { min: 200, max: 500 }, time: "—", note: "ok. 2–2,3 mln zł",
          pros: ["Proste: suma równa budżetowi"],
          cons: ["Płacisz za ochronę działki, której nie zniszczy pożar", "Nadubezpieczenie nie zwiększa wypłaty"],
          why: "Częsty błąd. Ubezpieczyciel wypłaci najwyżej koszt odbudowy, więc nadwyżka sumy to wyrzucona składka." }
      ]
    },
    tips: [
      "<b>Najpierw rozmowa z bankiem.</b> Zapytaj, jaka minimalna suma i zakres są wymagane do cesji. Część banków ma listę akceptowanych ubezpieczycieli.",
      "<b>Kradzież z włamaniem wymaga zabezpieczeń.</b> Ubezpieczyciel zapyta o drzwi RC2 (etap 07), alarm (etap 08) i zamki. Masz je, podaj je w ankiecie, bo obniżają składkę.",
      "<b>Przepięcia i stłuczenie szyb.</b> Przy PV, pompie i dużym HS w salonie te rozszerzenia kosztują kilkadziesiąt złotych, a szkody bywają w tysiącach.",
      "<b>Zdjęcia domu do polisy.</b> Zrób komplet zdjęć wnętrz i urządzeń z dnia przeprowadzki. Przy szkodzie pokażą standard wykończenia."
    ],
    mistakes: [
      "<b>Dziura między polisami.</b> Polisa budowlana kończy się, nowa startuje za tydzień. Szkoda w tym czasie nie jest pokryta.",
      "<b>Brak cesji na bank.</b> Bank może naliczyć wyższą marżę albo wypowiedzieć warunki umowy.",
      "<b>Pompa ciepła i PV poza polisą.</b> To elementy za kilkadziesiąt tysięcy złotych na zewnątrz domu, narażone na grad i przepięcia."
    ],
    formal: [
      ["Polisa domu (mury, stałe elementy, ruchomości, OC)", "ubezpieczyciel; start najpóźniej w dniu wprowadzki"],
      ["Cesja praw z polisy na bank", "wzór banku; potwierdzenie przyjęcia od ubezpieczyciela"],
      ["Zakończenie polisy budowlanej", "ubezpieczyciel z etapu 00; ewentualny zwrot części składki"]
    ],
    checklist: [
      "Polisa domu z sumą odtworzeniową",
      "PV, pompa ciepła i rekuperator w zakresie",
      "Cesja na bank przyjęta",
      "Polisa budowlana zakończona bez przerwy w ochronie"
    ]
  },

  /* 11 ----------------------------------------------------------------- */
  {
    id: "bank-rozliczenie",
    title: "Rozliczenie z bankiem",
    lead: "Ostatnia transza, dokumenty z zakończenia budowy i koniec okresu podwyższonej marży. Bank chce zobaczyć, że dom jest gotowy i legalnie oddany do użytkowania.",
    time: "2–6 tyg.", team: "ty, doradca w banku, inspektor banku",
    facts: [["Inspekcja banku", "ok. 200–600 zł", "wallet"], ["Termin dokumentów", "wg umowy kredytu", "clock"]],
    body: `
      <p><strong>Ostatnia transza</strong> zwykle wymaga inspekcji (rzeczoznawca banku sprawdza zaawansowanie) i czasem rozliczenia faktur z poprzednich transz. Zaplanuj ją tak, żeby pieniądze były na ostatnie płatności dla ekip po odbiorach, a nie przed.</p>
      <p>Po zakończeniu budowy bank zwykle chce: <strong>zawiadomienia z potwierdzeniem braku sprzeciwu</strong> (albo pozwolenia na użytkowanie), polisy domu z cesją, czasem zaświadczenia o numerze porządkowym i odpisu księgi wieczystej z wpisaną hipoteką. W wielu umowach marża jest <strong>podwyższona do wpisu hipoteki</strong> albo do dostarczenia dokumentów o zakończeniu budowy. Sprawdź w umowie, co dokładnie kończy ten okres.</p>
      <p>Po ostatniej transzy kończy się zwykle <strong>karencja w spłacie kapitału</strong>. Rata rośnie do pełnej wysokości, więc zaplanuj budżet domowy na pierwszy miesiąc w nowym domu.</p>`,
    cost: { min: 200, max: 600, note: "inspekcja przy ostatniej transzy, orientacyjnie" },
    tips: [
      "<b>Lista dokumentów z banku na piśmie.</b> Poproś doradcę o listę wymaganych dokumentów i terminów po zakończeniu budowy. Co bank, to inny zestaw.",
      "<b>Dostarcz od razu.</b> Każdy miesiąc podwyższonej marży przy ok. 0,9 mln zł kredytu to kilkaset złotych (orientacyjnie).",
      "<b>Sprawdź księgę wieczystą.</b> W elektronicznej KW zobaczysz, czy hipoteka jest wpisana. Odpis wydrukujesz sam.",
      "<b>Rezerwa zostaje na koncie.</b> Rezerwa 10% z etapu 00 nie jest ostatnią transzą. Nie wydawaj jej na meble przed odbiorem usterek."
    ],
    mistakes: [
      "<b>Nierozliczone faktury.</b> Bank może wstrzymać ostatnią transzę, dopóki nie udokumentujesz poprzednich.",
      "<b>Dokumenty „przy okazji”.</b> Brak dokumentów w terminie z umowy bywa podstawą do utrzymania wyższej marży albo kar.",
      "<b>Zaskoczenie pełną ratą.</b> Koniec karencji zbiega się z kosztami przeprowadzki i umeblowania."
    ],
    formal: [
      ["Wniosek o ostatnią transzę", "bank; inspekcja i kosztorys wykonanych prac"],
      ["Dokumenty zakończenia budowy dla banku", "zawiadomienie z brakiem sprzeciwu lub pozwolenie, polisa z cesją, odpis KW"],
      ["Potwierdzenie obniżenia marży", "bank, po spełnieniu warunku z umowy"]
    ],
    checklist: [
      "Ostatnia transza wypłacona po odbiorach",
      "Faktury rozliczone zgodnie z umową kredytu",
      "Dokumenty zakończenia budowy w banku",
      "Hipoteka wpisana w KW, marża obniżona",
      "Nowa rata wpisana do budżetu domowego"
    ]
  },

  /* 12 ----------------------------------------------------------------- */
  {
    id: "dokumentacja-gwarancje",
    title: "Teczka domu: dokumentacja i gwarancje",
    lead: "Jeden segregator i jedna kopia cyfrowa z całą historią domu. Za 10 lat to on powie ci, gdzie jest rura w ścianie i do kogo dzwonić z cieknącym oknem.",
    time: "1–2 wieczory", team: "ty",
    facts: [["Segregatorów", "1–2 + kopia cyfrowa", "book"], ["Zdjęcia instalacji", "przed tynkami", "file"]],
    body: `
      <p>W teczce trzymasz: <strong>projekt z naniesionymi zmianami</strong>, rysunki powykonawcze instalacji (trasy rur podłogówki, kanałów rekuperacji, przewodów), protokoły z odbiorów, świadectwo energetyczne, mapę geodety, umowy z wykonawcami i <strong>karty gwarancyjne</strong> wszystkich urządzeń i materiałów.</p>
      <p>Najcenniejsze są <strong>zdjęcia instalacji przed tynkami i wylewkami</strong> z miarką w kadrze (etapy 08–11). Dzięki nim wiesz, gdzie wolno wiercić. Dołącz deklaracje właściwości użytkowych materiałów i numery partii (tynk, płytki, farba z etapów 12–13) do dokupienia w tym samym odcieniu.</p>
      <p>Zrób też <strong>tabelę gwarancji</strong>: co, od kiedy, do kiedy, jakie przeglądy są warunkiem i kontakt do serwisu. Gwarancja pompy ciepła czy okien często wymaga corocznego przeglądu.</p>`,
    tips: [
      "<b>Kopia cyfrowa w dwóch miejscach.</b> Skany i zdjęcia w chmurze i na dysku. Papier zalany przy awarii hydrauliki to częsty scenariusz.",
      "<b>Folder ze zdjęciami po pomieszczeniach.</b> Nazwy typu „Salon_sciana_pld_przed_tynkiem” znajdziesz po latach w minutę.",
      "<b>Tabela gwarancji z datami przypomnień.</b> Wpisz przeglądy do kalendarza w telefonie z miesięcznym wyprzedzeniem.",
      "<b>Lista ekip z telefonami.</b> Elektryk, hydraulik, dekarz, okna, serwis PC i rekuperacji. Przyda się przy usterce w niedzielę."
    ],
    mistakes: [
      "<b>Brak zdjęć przed tynkami.</b> Wiercenie „na czuja” w ścianie z podłogówką albo przewodem kończy się kuciem.",
      "<b>Wyrzucone kartony z kartami gwarancyjnymi.</b> Karta i dowód zakupu są potrzebne przy reklamacji.",
      "<b>Gwarancja utracona przez brak przeglądu.</b> Producenci pomp ciepła i okien często uzależniają gwarancję od przeglądów."
    ],
    formal: [
      ["Projekt z naniesionymi zmianami i rysunki powykonawcze instalacji", "projektant, wykonawcy instalacji"],
      ["Karty gwarancyjne i deklaracje właściwości użytkowych", "od dostawców i ekip; z numerami partii"],
      ["Umowy z wykonawcami z protokołami odbioru", "podstawa roszczeń z rękojmi i gwarancji"]
    ],
    checklist: [
      "Projekt z naniesionymi zmianami w teczce",
      "Zdjęcia instalacji przed tynkami i wylewkami posegregowane",
      "Karty gwarancyjne wszystkich urządzeń zebrane",
      "Tabela gwarancji z warunkami przeglądów",
      "Kopia cyfrowa w dwóch miejscach"
    ]
  },

  /* 13 ----------------------------------------------------------------- */
  {
    id: "usterki-rekojmia",
    title: "Odbiór końcowy, usterki, rękojmia",
    lead: "Przed ostatnią płatnością przejdź dom z listą usterek i każdym wykonawcą. Co wpiszesz do protokołu teraz, załatwisz szybko. Później zostaje rękojmia i gwarancja.",
    time: "1–2 dni odbiorów, usuwanie 2–4 tyg.", team: "ty, wykonawcy, opcjonalnie inspektor",
    facts: [["Kaucja gwarancyjna", "5–10%", "wallet"], ["Rękojmia (wady budynku)", "orientacyjnie 5 lat", "shield"]],
    body: `
      <p>Odbiór końcowy robisz z każdym wykonawcą osobno, w dzień, przy dobrym świetle. Sprawdzasz <strong>okna i drzwi</strong> (domykanie, uszczelki, regulacja), <strong>ściany i sufity</strong> w bocznym świetle, <strong>podłogi</strong> (pustki pod płytkami, szczeliny przy panelach), <strong>armaturę</strong> (przecieki, spadki w prysznicu), <strong>elektrykę</strong> (każde gniazdo, każdy obwód) i <strong>ogrzewanie</strong> (czy każda pętla grzeje).</p>
      <p>Usterki wpisujesz do <strong>protokołu z terminem usunięcia</strong>, zwykle 14–30 dni. Kaucję gwarancyjną 5–10% (umowy z etapu 00) zatrzymujesz do przeglądu po zimie albo po roku.</p>
      <p><strong>Rękojmia</strong> wynika z Kodeksu cywilnego: przy wadach budynku orientacyjnie do 5 lat, przy rzeczach ruchomych krócej. <strong>Gwarancja</strong> to dobrowolne zobowiązanie producenta lub wykonawcy, na warunkach z karty. Zakres sprawdź w umowach, a przy sporze zapytaj prawnika.</p>`,
    decision: {
      question: "Kto robi odbiór techniczny domu?",
      intro: "Odbiory od wykonawców i tak robisz sam. Pytanie, czy dobrać do tego fachowca z kamerą.",
      chosen: "inspektor",
      options: [
        { id: "inspektor", name: "Inspektor odbiorów z kamerą termowizyjną",
          cost: { min: 800, max: 1800 }, time: "pół dnia + raport", note: "najlepiej w sezonie grzewczym",
          pros: ["Raport ze zdjęciami jako podstawa reklamacji", "Termowizja pokazuje mostki i nieszczelności", "Fachowiec widzi to, czego laik nie zna"],
          cons: ["Dodatkowy koszt", "Termowizja wymaga różnicy temperatur (zima)"],
          why: "Przy domu za ponad 1,5 mln zł to tanie ubezpieczenie przed wadami, które wyjdą po okresie rękojmi. Raport ułatwia rozmowę z wykonawcą." },
        { id: "kierownik", name: "Kierownik budowy na odbiorach od ekip",
          cost: { min: 300, max: 800 }, time: "kilka wizyt", note: "dodatkowe godziny kierownika",
          pros: ["Zna budowę od początku", "Tańsze"],
          cons: ["Bez termowizji", "Ocenia też własny nadzór"],
          why: "Dobry wybór, gdy kierownik był aktywny przez całą budowę, a ty masz czas, żeby chodzić z nim po domu." },
        { id: "sam", name: "Sam, z listą kontrolną",
          cost: { min: 0, max: 0 }, time: "1–2 dni", note: "lista + poziomica + latarka",
          pros: ["Bez kosztów", "Dokładnie poznajesz swój dom"],
          cons: ["Łatwo przeoczyć wady ukryte i mostki", "Mniej argumentów w sporze"],
          why: "Możliwe, gdy już raz odbierałeś dom albo masz w rodzinie budowlańca. Termowizję zrób wtedy chociaż pierwszej zimy." }
      ]
    },
    tips: [
      "<b>Latarka z boku, nie z przodu.</b> Światło puszczone wzdłuż ściany pokazuje każde falowanie gładzi i nierówny tynk.",
      "<b>Opukaj płytki.</b> Głuchy dźwięk oznacza pustkę pod płytką. W łazience i na tarasie to przyszłe pęknięcie.",
      "<b>Odkręć wszystko naraz.</b> Wanna, prysznic, umywalki i zmywarka razem: wychodzą problemy z odpływem i ciśnieniem.",
      "<b>Protokół ze zdjęciami i terminem.</b> Każda usterka: miejsce, opis, zdjęcie, termin. Podpis obu stron. To podstawa zatrzymania kaucji."
    ],
    mistakes: [
      "<b>Pełna płatność przed usunięciem usterek.</b> Bez zatrzymanej kwoty usterki czekają miesiącami.",
      "<b>Mylenie gwarancji z rękojmią.</b> Gdy gwarancja wygasła albo ma wąski zakres, rękojmia z Kodeksu cywilnego wciąż działa. Zgłaszaj wady na piśmie.",
      "<b>Ustne zgłoszenie usterki.</b> Do rękojmi i gwarancji liczy się zgłoszenie pisemne lub mailowe z datą."
    ],
    formal: [
      ["Protokół odbioru końcowego z listą usterek", "z każdym wykonawcą; terminy usunięcia, podpisy"],
      ["Protokół usunięcia usterek", "po naprawach; warunek ostatniej płatności"],
      ["Zgłoszenie wady z rękojmi lub gwarancji", "na piśmie lub mailem; opis, zdjęcia, data wykrycia"]
    ],
    checklist: [
      "Okna i drzwi sprawdzone, wyregulowane",
      "Ściany i sufity w bocznym świetle",
      "Płytki opukane, fugi i silikony sprawdzone",
      "Każde gniazdo i obwód działa",
      "Każda pętla podłogówki grzeje",
      "Protokół usterek z terminami podpisany",
      "Kaucja gwarancyjna zatrzymana do przeglądu po roku"
    ],
    quiz: [{
      q: "Czym różni się rękojmia od gwarancji?",
      a: ["To to samo, tylko inna nazwa", "Rękojmia wynika z ustawy, a gwarancja z dobrowolnego zobowiązania na warunkach z karty", "Gwarancja zawsze trwa dłużej niż rękojmia"],
      correct: 1,
      explain: "<b>Ustawa a dokument.</b> Rękojmia działa z mocy Kodeksu cywilnego. Gwarancja jest dodatkowa, a jej zakres i warunki (np. przeglądy) określa gwarant."
    }]
  },

  /* 14 ----------------------------------------------------------------- */
  {
    id: "przeprowadzka",
    title: "Przeprowadzka i meldunek",
    lead: "Przeprowadzkę planuj po upływie 14 dni od zawiadomienia i po odbiorach. Potem meldunek i zmiana adresu tam, gdzie to obowiązkowe.",
    time: "1–2 dni przeprowadzki, formalności 30 dni", team: "ty, firma przeprowadzkowa",
    facts: [["Meldunek", "do 30 dni", "clock"], ["Firma", "ok. 1,2–2,5 tys. zł", "wallet"]],
    body: `
      <p>Najpierw <strong>sprzątanie budowlane</strong>: pył po szlifowaniu jest wszędzie, także w kanałach rekuperacji. Centralę z nowymi filtrami uruchamiasz na stałe dopiero po sprzątaniu (etap 10). Potem meble z etapu 14, a na końcu drobne rzeczy.</p>
      <p><strong>Meldunek</strong> na pobyt stały zrobisz przez internet (usługa na gov.pl z profilem zaufanym albo w mObywatelu) lub w urzędzie gminy, najpóźniej w 30. dniu od przeprowadzki. Jako właściciel nie potrzebujesz niczyjego potwierdzenia.</p>
      <p>Zmiana adresu: w <strong>dowodzie osobistym</strong> adresu nie ma, więc go nie wymieniasz. Właściciel samochodu zgłasza zmianę adresu w wydziale komunikacji w 30 dni (sprawdź aktualne zasady). Do tego bank, pracodawca, urząd skarbowy (przy najbliższym zeznaniu albo aktualizacji), lekarz i przekierowanie poczty.</p>`,
    decision: {
      question: "Jak się przeprowadzić?",
      intro: "Duże meble i sprzęt z etapu 14 mogą przyjść prosto ze sklepu. Przewozisz głównie rzeczy ze starego mieszkania.",
      chosen: "mieszana",
      options: [
        { id: "mieszana", name: "Firma do ciężkich rzeczy, drobne sami",
          cost: { min: 1200, max: 2500 }, time: "1 dzień + kursy autem", note: "2–3 osoby, bus, kilka godzin",
          pros: ["Ciężkie meble i AGD bez ryzyka dla podłóg i pleców", "Ubezpieczenie mienia w transporcie", "Drobne rzeczy przewozisz w swoim tempie"],
          cons: ["Trzeba dobrze spakować się przed przyjazdem firmy"],
          why: "Rozsądny środek: nowe podłogi i schody z etapu 13 nie ucierpią przy wnoszeniu, a koszt jest umiarkowany." },
        { id: "firma", name: "Pełna usługa z pakowaniem",
          cost: { min: 3000, max: 5500 }, time: "1–2 dni", note: "pakowanie, transport, rozpakowanie",
          pros: ["Najmniej pracy i stresu", "Firma odpowiada za cały ładunek"],
          cons: ["Najdrożej", "Obcy pakują twoje rzeczy"],
          why: "Ma sens przy małych dzieciach, braku czasu albo przeprowadzce z daleka." },
        { id: "sami", name: "Sami, z wypożyczonym busem",
          cost: { min: 400, max: 900 }, time: "1–2 weekendy", note: "wynajem busa, pasy, folie",
          pros: ["Najtaniej"],
          cons: ["Ryzyko porysowanych podłóg i ścian", "Kontuzje przy ciężkich meblach", "Brak ubezpieczenia ładunku"],
          why: "Gdy rzeczy jest mało, a meble i AGD przyjdą prosto ze sklepu z wniesieniem." }
      ]
    },
    tips: [
      "<b>Zabezpiecz podłogi i schody.</b> Tektura falista albo płyty na schodach, filcowe podkładki pod meble, folia na progach. Rysy na nowym dębie widać latami.",
      "<b>Filtry rekuperacji po sprzątaniu.</b> Wymień filtry po sprzątaniu budowlanym i po miesiącu mieszkania. Pył z budowy zatyka je szybko.",
      "<b>Pierwsza noc w domu.</b> Pudło „na pierwszy dzień”: pościel, ręczniki, czajnik, ładowarki, apteczka, papier toaletowy, narzędzia.",
      "<b>Klucze i kody.</b> Zmień kody alarmu, bramy i Wi-Fi ustawione przez instalatorów. Wkładki w drzwiach wymień, jeśli klucze krążyły po ekipach."
    ],
    mistakes: [
      "<b>Przeprowadzka przed odbiorem usterek.</b> Naprawy przy umeblowanym domu są trudniejsze, a meble zasłaniają wady.",
      "<b>Uruchomienie rekuperacji w czasie sprzątania.</b> Pył trafia do kanałów i centrali. Najpierw sprzątanie, potem filtry i rozruch.",
      "<b>Kody i klucze od ekip.</b> Kilkanaście osób znało kod bramy i alarmu. Zmień je pierwszego dnia."
    ],
    formal: [
      ["Zameldowanie na pobyt stały", "online (gov.pl, mObywatel) lub urząd gminy; do 30. dnia od przeprowadzki"],
      ["Zmiana adresu w dowodzie rejestracyjnym", "wydział komunikacji, 30 dni (sprawdź aktualne zasady)"],
      ["Zmiana adresu w banku, u pracodawcy, w urzędzie skarbowym", "wg zasad instytucji"]
    ],
    checklist: [
      "Upłynęło 14 dni od zawiadomienia bez sprzeciwu",
      "Sprzątanie budowlane zrobione, filtry rekuperacji nowe",
      "Podłogi i schody zabezpieczone na czas wnoszenia",
      "Meldunek zrobiony",
      "Kody alarmu, bramy i Wi-Fi zmienione"
    ]
  },

  /* 15 ----------------------------------------------------------------- */
  {
    id: "przeglady-pierwszy-rok",
    title: "Przeglądy okresowe i pierwszy rok w domu",
    lead: "Nowy dom przez pierwszy rok pracuje: wysycha, osiada, okna się ustawiają. Raz w roku przegląd kominiarski, co kilka miesięcy filtry rekuperacji, a po roku przegląd całego domu i rozliczenie kaucji.",
    time: "co rok kilka wizyt", team: "kominiarz, serwisy, ty",
    facts: [["Kominiarz", "co najmniej raz w roku", "clock"], ["Filtry rekuperacji", "co 3–6 mies.", "listcheck"], ["Serwis PC", "co rok", "shield"]],
    body: `
      <p><strong>Przeglądy okresowe:</strong> kominiarz co najmniej raz w roku (przegląd przewodów kominowych z protokołem; czyszczenie przewodu kominka częściej, zgodnie z przepisami ppoż. — orientacyjnie kilka razy w roku przy regularnym paleniu). <strong>Filtry rekuperacji</strong> co 3–6 miesięcy, czyszczenie wymiennika raz w roku. <strong>Pompa ciepła</strong>: serwis raz w roku, zwykle warunek gwarancji. <strong>Oczyszczalnia</strong>: wywóz osadu 1–2 razy w roku. <strong>PV</strong>: przegląd co 1–2 lata. Obowiązki kontroli dla domu jednorodzinnego z Prawa budowlanego sprawdź u kierownika budowy.</p>
      <p><strong>Pierwszy rok:</strong> drobne rysy skurczowe na tynkach i narożach płyt g-k są normalne, bo dom wysycha. Po pierwszym sezonie grzewczym: <strong>regulacja okien i drzwi</strong> (etap 07), kontrola silikonów w łazienkach, dylatacji przy podłogach, elewacji po zimie (etap 12) i krzywej grzewczej pompy.</p>
      <p>Przed rocznicą odbioru zrób <strong>przegląd całego domu</strong> z listą z etapu 13 (usterki). Zgłoś wady na piśmie, zanim skończą się gwarancje wykonawców, i dopiero wtedy oddaj kaucje gwarancyjne.</p>`,
    cost: { min: 300, max: 1000, note: "pierwszy przegląd kominiarski, regulacje i drobne naprawy poza gwarancją; dalej koszty eksploatacji" },
    tips: [
      "<b>Wilgotność 40–60%.</b> Pierwszej zimy dom oddaje wodę z tynków i wylewek. Zostaw rekuperację na normalnym biegu, a w razie skroplin na szybach podnieś wydajność.",
      "<b>Rysy maluj po roku.</b> Drobne rysy skurczowe wypełnij i przemaluj po pierwszym sezonie grzewczym, nie od razu.",
      "<b>Kalendarz przeglądów.</b> Wpisz do telefonu: kominiarz (jesień przed sezonem), filtry (co 3 mies.), serwis PC (wiosna), wywóz osadu, przegląd PV.",
      "<b>Licz zużycie od pierwszego dnia.</b> Odczyty prądu, wody i produkcji PV co miesiąc pokażą, czy pompa i rekuperacja działają jak w projekcie."
    ],
    mistakes: [
      "<b>Panika przy pierwszych rysach.</b> Rysy włoskowe na łączeniach materiałów to skurcz. Niepokojące są rysy szersze niż ok. 0,3 mm albo ukośne od narożników otworów; pokaż je kierownikowi lub konstruktorowi.",
      "<b>Filtry „na oko”.</b> Zatkane filtry zwiększają zużycie prądu i hałas centrali, a dom wentyluje się słabiej.",
      "<b>Kaucja oddana przed przeglądem po roku.</b> Wtedy jedyną drogą zostaje rękojmia i spór."
    ],
    formal: [
      ["Protokół okresowego przeglądu przewodów kominowych", "kominiarz, co najmniej raz w roku; zachowaj dla ubezpieczyciela"],
      ["Potwierdzenia serwisu pompy ciepła i rekuperacji", "serwis; warunek gwarancji"],
      ["Potwierdzenia wywozu osadu z oczyszczalni", "firma asenizacyjna; gmina może o nie poprosić"],
      ["Książka obiektu budowlanego", "dla domu jednorodzinnego zwykle nieobowiązkowa; sprawdź u kierownika budowy, i tak prowadź zeszyt przeglądów"]
    ],
    checklist: [
      "Przegląd kominiarski przed pierwszym sezonem grzewczym",
      "Filtry rekuperacji wymienione po 3 mies.",
      "Serwis pompy ciepła w terminie z gwarancji",
      "Okna i drzwi wyregulowane po pierwszym sezonie",
      "Przegląd całego domu przed rocznicą odbioru",
      "Kaucje gwarancyjne rozliczone po usunięciu usterek"
    ],
    quiz: [{
      q: "Drobne rysy włoskowe na narożach płyt g-k po pierwszej zimie to zwykle:",
      a: ["Osiadanie fundamentu, trzeba wezwać konstruktora", "Skurcz materiałów przy wysychaniu domu", "Wada płyt, reklamacja u producenta"],
      correct: 1,
      explain: "<b>Skurcz przy wysychaniu.</b> Dom oddaje wilgoć z prac mokrych. Rysy wypełniasz po sezonie. Niepokoją rysy szerokie, ukośne albo rosnące."
    }, {
      q: "Jak często wymieniać filtry rekuperacji?",
      a: ["Raz na 5 lat", "Co 3–6 miesięcy", "Tylko gdy centrala zgłosi awarię"],
      correct: 1,
      explain: "<b>Co 3–6 miesięcy.</b> Pierwszy raz po sprzątaniu budowlanym i po miesiącu mieszkania, potem regularnie."
    }]
  }
  ]
});
