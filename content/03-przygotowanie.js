/* Etap 03: Przygotowanie terenu, przyłącza, zaplecze budowy. Ceny orientacyjne, 2026 r., okolice małego miasta, dom referencyjny. */
BUDOWA.addStage({
  id: "03-przygotowanie", nr: 3, title: "Przygotowanie terenu i przyłącza", icon: "🚧", category: "surowy",
  summary: "Od formalnego startu budowy po przyłącza: kierownik i dziennik, ogrodzenie, droga, zaplecze, prąd i woda, humus, wytyczenie domu, kanalizacja, gaz i światłowód.",
  duration: "3–6 tyg. (przyłącza czekają na operatorów nawet kilka miesięcy)",
  steps: [

  /* 1 ------------------------------------------------------------------ */
  {
    id: "start-formalny",
    title: "Start budowy: kierownik, dziennik, zawiadomienie",
    lead: "Zanim koparka wjedzie na działkę, budowa musi mieć kierownika, dziennik i zgłoszenie rozpoczęcia robót w nadzorze budowlanym. To godzina papierkowej roboty, a jej brak kończy się karą.",
    time: "1–2 tyg. przed startem", team: "kierownik budowy, inspektor nadzoru",
    facts: [["Zawiadomienie", "min. 7 dni przed", "clock"], ["Kierownik", "obowiązkowy", "stamp"], ["Pozwolenie", "ostateczne", "file"]],
    body: `
      <p>Do rozpoczęcia robót potrzebujesz <strong>ostatecznej decyzji o pozwoleniu na budowę</strong> (decyzja wygasa, jeśli nie zaczniesz budowy w ciągu 3 lat). Potem zatrudniasz <strong>kierownika budowy</strong> z uprawnieniami. Odpowiada on za zgodność robót z projektem, bezpieczeństwo i prowadzenie dziennika.</p>
      <p>Co najmniej <strong>7 dni przed startem</strong> składasz w powiatowym inspektoracie nadzoru budowlanego (PINB) zawiadomienie o zamiarze rozpoczęcia robót. Dołączasz m.in. oświadczenie kierownika o przyjęciu obowiązku i zaświadczenie o jego wpisie do izby. Pełną listę załączników i potrzebę <strong>planu BIOZ</strong> sprawdź u kierownika budowy, bo zależy od zakresu robót.</p>
      <p>Dziennik budowy (papierowy albo elektroniczny, zależnie od tego, co dopuszcza urząd i kierownik) prowadzi się od pierwszego dnia. Wpisuje się do niego m.in. <strong>wytyczenie budynku przez geodetę</strong>, odbiory zbrojenia i fundamentów, ważne zdarzenia i zalecenia. Na działce stawiasz też <strong>tablicę informacyjną</strong> budowy.</p>`,
    decision: {
      question: "Czy zatrudnić inspektora nadzoru inwestorskiego?",
      intro: "Kierownik budowy pilnuje budowy z ramienia prawa i wykonawcy. Inspektor to twoje niezależne oczy na budowie. Przy budżecie 2,3 mln zł to pozycja, nad którą warto się zastanowić.",
      chosen: "etapy",
      options: [
        { id: "etapy", name: "Inspektor na kluczowych odbiorach",
          cost: { min: 4000, max: 8000 }, time: "8–12 wizyt", note: "zbrojenie, izolacje, strop, więźba, instalacje",
          pros: ["Fachowe oko tam, gdzie błędów nie da się potem naprawić", "Kilkukrotnie tańszy niż pełny nadzór", "Protokoły przydadzą się przy odbiorze i reklamacji"],
          cons: ["Między wizytami nie widzi, co się dzieje", "Trzeba zgrać terminy z wykonawcami"],
          why: "Najwięcej szkód powstaje w elementach, które zostaną zakryte: zbrojenie, izolacje, rury w posadzce, więźba. Tam inspektor zwraca koszt z nawiązką." },
        { id: "sam", name: "Tylko kierownik budowy",
          cost: { min: 0, max: 0 }, note: "bez dodatkowego nadzoru",
          pros: ["Najtaniej"],
          cons: ["Kierownik jest często wybrany lub opłacany przez wykonawcę", "Nikt niezależny nie patrzy ekipie na ręce"],
          why: "Ma sens, gdy sam znasz się na budowie albo wykonawca jest sprawdzony z poleceń, a ty bywasz na budowie codziennie." },
        { id: "pelny", name: "Pełny nadzór inwestorski",
          cost: { min: 10000, max: 18000 }, time: "kilka wizyt tygodniowo", note: "orientacyjnie",
          pros: ["Stała kontrola jakości i terminów", "Dobry przy inwestorze mieszkającym daleko"],
          cons: ["Kilka razy droższy niż nadzór punktowy"],
          why: "Dla inwestora bez czasu. Wymaga jasnej umowy: ile wizyt, jakie raporty." }
      ]
    },
    tips: [
      "<b>Kierownik budowy (jego koszt 7–12 tys. zł jest w etapie 02) nie może być „podpisem na papierze”.</b> Umów z nim, ile razy tygodniowo bywa na budowie (rozsądnie 1–2 razy) i że jest pod telefonem przy odbiorach zbrojenia.",
      "<b>Zawiadomienie złóż z zapasem.</b> 7 dni liczy się od doręczenia. Składaj ok. 10–14 dni przed startem, żeby nie stać z umówioną koparką.",
      "<b>Kupno OC kierownika sprawdź w umowie.</b> Ubezpieczenie budowy od ognia, kradzieży i szkód (CAR/budowlane) to orientacyjnie 1–3 tys. zł. Poproś o oferty.",
      "<b>Dziennik trzymaj w skrzynce w kontenerze</b> albo u kierownika. Zgubiony dziennik odtwarza się miesiącami."
    ],
    mistakes: [
      "<b>Start budowy bez zawiadomienia.</b> Nadzór budowlany może wstrzymać roboty i nałożyć karę. Zdarza się to częściej, niż się wydaje, gdy znajomy koparkowy „tylko zdejmie humus”.",
      "<b>Kierownik zatrudniony na ostatnią chwilę.</b> Dobrzy kierownicy mają kalendarz zajęty na miesiące, a bez niego nie ruszysz.",
      "<b>Pozwolenie bez klauzuli ostateczności.</b> Zanim decyzja się uprawomocni, strona może się odwołać. Sprawdź datę na decyzji."
    ],
    formal: [
      ["Ostateczna decyzja o pozwoleniu na budowę", "wydaje starosta; sprawdź adnotację o ostateczności"],
      ["Zawiadomienie o zamiarze rozpoczęcia robót", "PINB; min. 7 dni przed; załączniki ustal z kierownikiem"],
      ["Oświadczenie kierownika budowy i zaświadczenie z izby", "kierownik budowy"],
      ["Dziennik budowy", "zakładasz przed startem; wpisuje kierownik, geodeta, inspektor"],
      ["Tablica informacyjna budowy", "stawiasz na działce, widoczna od drogi"]
    ],
    checklist: [
      "Pozwolenie ostateczne, data i numer znane",
      "Kierownik budowy zatrudniony, umowa określa częstotliwość wizyt",
      "Zawiadomienie złożone w PINB z wymaganymi załącznikami",
      "Dziennik budowy założony",
      "Tablica informacyjna stoi przy wjeździe",
      "Ustalono, czy potrzebny jest plan BIOZ i ubezpieczenie budowy"
    ],
    quiz: [{
      q: "Kiedy najpóźniej zawiadomić PINB o rozpoczęciu robót?",
      a: ["W dniu rozpoczęcia robót", "Co najmniej 7 dni przed rozpoczęciem", "Po zdjęciu humusu, bo to jeszcze nie budowa"],
      correct: 1,
      explain: "<b>7 dni przed startem.</b> Zawiadomienie składasz z oświadczeniem kierownika budowy. Robót nie zaczynasz „na próbę”: nawet zdjęcie humusu pod dom to już budowa."
    }]
  },

  /* 2 ------------------------------------------------------------------ */
  {
    id: "ogrodzenie",
    title: "Ogrodzenie tymczasowe budowy",
    lead: "Ogrodzenie chroni materiały przed kradzieżą, ludzi przed upadkiem do wykopu, a ciebie przed odpowiedzialnością. Wystarczy ok. 60 m paneli wokół strefy budowy, nie cała działka.",
    time: "pół dnia", team: "2 osoby",
    facts: [["Panel", "3,5 × 2,0 m", "layers"], ["Obwód", "ok. 60 m", "rebar"], ["Brama", "min. 4 m", "shield"]],
    cost: { min: 3000, max: 6000, note: "ok. 17 paneli ze stopami i zaciskami + brama 4 m z zamkiem" },
    body: `
      <p>Ogrodź <strong>strefę budowy</strong>: dom, garaż, plac na materiały i zaplecze, a droga i wjazd zostają w środku. To zwykle ok. <strong>60 m</strong> ogrodzenia. Cała działka ma ok. 140 m obwodu, więc ogrodzenie całości kosztowałoby ponad dwa razy więcej, a i tak ktoś kiedyś zlikwiduje je pod docelowy płot.</p>
      <p><strong>Panele budowlane</strong> (siatka zgrzewana w ramie, wysokość ok. 2 m) stoją na betonowych stopach i łączy się je zaciskami. Zakładasz je i zdejmujesz bez kopania. Brama dwuskrzydłowa o szerokości min. <strong>4 m</strong> pomieści gruszkę betoniarską i HDS-a.</p>
      <p>Przy wykopie głębszym niż ok. 1 m, na przykład pod basen albo kanalizację, dodatkowo oznaczasz go taśmą i barierką. Wykop przy drodze musi być widoczny po zmroku.</p>`,
    decision: {
      question: "Z czego zrobić ogrodzenie tymczasowe?",
      intro: "Kwota w kroku dotyczy zakupu paneli. Opcje pokazują dopłatę albo oszczędność względem niej.",
      chosen: "panele",
      options: [
        { id: "panele", name: "Panele budowlane (zakup)",
          cost: { min: 0, max: 0 }, note: "po budowie odsprzedasz ok. 50–60%",
          pros: ["Sztywne, ciężko je przeciąć i przewrócić", "Montaż w pół dnia", "Odsprzedaż odzyskuje część kosztu"],
          cons: ["Trzeba je potem sprzedać albo zagospodarować"],
          why: "Dobry kompromis: realnie utrudnia kradzież, a netto kosztuje mniej niż się wydaje." },
        { id: "wynajem", name: "Panele z wynajmu",
          cost: { min: -500, max: 1000 }, time: "14–18 mies. najmu", note: "orientacyjnie, ceny najmu różnią się regionalnie",
          pros: ["Bez zamrażania gotówki", "Firma sama zabiera ogrodzenie"],
          cons: ["Przy długiej budowie koszt dorównuje zakupowi", "Każde opóźnienie to dopłata"],
          why: "Ma sens przy szybkiej budowie do 8–10 miesięcy. Przy naszym harmonogramie zakup wychodzi podobnie, a bez zależności od wypożyczalni." },
        { id: "siatka", name: "Siatka leśna na słupkach",
          cost: { min: -3500, max: -2000 }, note: "najtaniej",
          pros: ["Najtańsza opcja", "Zakładasz sam w kilka godzin"],
          cons: ["Przy kradzieży jest tylko symbolem", "Łatwo ją przeciąć i podważyć", "Przy dużym ruchu ludzi nie wytrzymuje"],
          why: "Wystarczy dla zaznaczenia strefy, ale nie dla ochrony materiałów. Przy budowie na odludziu odradzamy." }
      ]
    },
    tips: [
      "<b>Stopy dociążaj.</b> Pusta stopa panelu wywraca się przy wietrze. Wystarczy worek piasku albo pręt wbity w grunt na rogach.",
      "<b>Brama od drogi dojazdowej, z zamkiem i kłódką klasy do zewnątrz.</b> Klucz mają tylko kierownik, ty i jedna zaufana osoba z ekipy.",
      "<b>Panele ustaw ok. 1 m od granicy.</b> Przesunięty słupek nie pójdzie w spór z sąsiadem, a zostawi miejsce na rynnę i opaskę wzdłuż granicy.",
      "<b>Tablica „Teren budowy, wstęp wzbroniony”</b> przy bramie i na rogach to 20–40 zł, a ma wartość prawną przy ewentualnym wypadku."
    ],
    mistakes: [
      "<b>Płot na granicy działki.</b> Docelowe ogrodzenie i tak zdemontujesz, a tymczasowe na granicy bywa źródłem konfliktów z sąsiadami.",
      "<b>Brama zbyt wąska.</b> Gruszka, HDS i dostawy z dużymi paletami potrzebują min. 4 m. Zdemontowanie panelu na czas dostawy to nerwy.",
      "<b>Brak oznakowania wykopu.</b> Dziecko sąsiada albo pijany przechodzień w wykopie to twoja odpowiedzialność, a ubezpieczenie nie zawsze ją pokryje."
    ],
    formal: [
      ["Zabezpieczenie terenu budowy", "obowiązek kierownika budowy; zakres ustal z nim"],
      ["Tablica informacyjna i ostrzegawcza", "przy bramie, widoczna od drogi"]
    ],
    checklist: [
      "Ogrodzona strefa budowy z placem na materiały",
      "Brama min. 4 m z zamkiem",
      "Panele dociążone, tablice ostrzegawcze zamontowane",
      "Wykopy przy drodze oznaczone",
      "Klucze tylko u 2–3 osób"
    ]
  },

  /* 3 ------------------------------------------------------------------ */
  {
    id: "droga-dojazdowa",
    title: "Droga dojazdowa i plac na materiały",
    lead: "Gruszka z betonem waży do ok. 30 t. Jeśli droga nie unosi takiego ciężaru, na budowie stanie auto, a ty zapłacisz za wyciąganie go ciągnikiem i za dzień przestoju ekipy.",
    time: "1–2 dni", team: "koparka, walec, 2 osoby",
    facts: [["Szerokość", "min. 3,5 m", "layers"], ["Kruszywo", "25–30 cm", "layers"], ["Powierzchnia", "ok. 120 m²", "rebar"]],
    cost: { min: 6000, max: 10000, note: "ok. 120 m² z kruszywa 0/63 na geowłókninie, z transportem i zagęszczeniem" },
    body: `
      <p>Zrób <strong>twardy pas od wjazdu do miejsca domu</strong>: szerokość ok. 3,5–4 m i długość tyle, ile trzeba, plus <strong>plac na materiały</strong> ok. 6 × 10 m przy bramie i mijankę dla dwóch aut. Na budowie jednocześnie stoją gruszka, HDS z dachówką i ekipa z dostawą, a każde zablokowanie drogi kosztuje.</p>
      <p>Przekrój standardowy: zdjęty humus, <strong>geowłóknina</strong> (oddziela grunt od kruszywa), <strong>kruszywo łamane 0/63</strong> w warstwie 25–30 cm, zagęszczone walcem albo zagęszczarką płytową. Na gruncie gliniastym grubość zwiększasz do ok. 35 cm.</p>
      <p>Jeśli wjeżdżasz przez rów, potrzebny jest <strong>przepust</strong> ze zgodą zarządcy drogi. Tymczasowy zjazd z drogi gminnej to zwykle zgoda w gminie na czas budowy, a docelowy zjazd z podjazdu (etap 15) wymaga osobnej zgody. Zapytaj w gminie, co przysługuje ci z lokalizacji zjazdu z etapu 01.</p>`,
    decision: {
      question: "Z czego zrobić drogę tymczasową?",
      intro: "Kwota w kroku zakłada kruszywo. Pozostałe opcje to dopłata albo oszczędność względem niego.",
      chosen: "kruszywo",
      options: [
        { id: "kruszywo", name: "Kruszywo 0/63 na geowłókninie",
          cost: { min: 0, max: 0 }, time: "1–2 dni", note: "droga zostaje jako podbudowa podjazdu",
          pros: ["Droga jest potem podbudową podjazdu i placu manewrowego (zdejmujesz tylko wierzch)", "Trwała na całą budowę", "Naprawiasz dosypaniem kruszywa"],
          cons: ["Trzeba ją wyrównywać po deszczach", "Zostaje błoto na wjeździe, jeśli nie zrobisz oczyszczenia kół"],
          why: "Pracuje na dwa etapy: najpierw na budowie, potem pod podjazdem. Dla budowy trwającej rok to najrozsądniejszy wybór." },
        { id: "plyty", name: "Płyty drogowe żelbetowe z wynajmu",
          cost: { min: 2000, max: 5000 }, time: "montaż w dzień", note: "orientacyjnie, najem plus transport i dźwig",
          pros: ["Nośne od razu, nawet na rozmokłym gruncie", "Bez błota na kołach"],
          cons: ["Najem płyt przez rok jest drogi", "Potrzebny dźwig do układania i zdejmowania", "Nie jest podbudową podjazdu"],
          why: "Dobre na gruntach gliniastych, gdy budujesz w mokrym sezonie. Przy suchym podłożu przepłacasz." },
        { id: "frez", name: "Frez asfaltowy lub gruz z recyklingu",
          cost: { min: -2500, max: -1000 }, note: "najtaniej; sprawdź certyfikat kruszywa",
          pros: ["Tańszy od kruszywa łamanego", "Dobrze się zagęszcza i wiąże"],
          cons: ["Jakość bywa różna, trafia się gruz z odpadami", "Dla podjazdu docelowego nie zawsze go zostawisz"],
          why: "Opcja dla oszczędnych, jeśli dostawca ma papiery i materiał jest czysty. Przy podjeździe z kostki lepsze kruszywo łamane." }
      ]
    },
    tips: [
      "<b>Dwie palety do wyrównania.</b> Zaplanuj dosypanie ok. 10–15 t kruszywa po pierwszych deszczach i po kilku kursach HDS-a. Droga osiada.",
      "<b>Rozciągnij pas tak, by objąć miejsce na HDS.</b> HDS potrzebuje ok. 6 m szerokości do rozstawienia podpór. Zaplanuj miejsce pod rozładunek dachówki wcześniej.",
      "<b>Plac na materiały blisko budynku, ale poza wykopem.</b> Paleta bloczków waży ok. 1–1,5 t, więc ustaw ją min. 2 m od krawędzi wykopu, żeby nie obsunąć skarpy.",
      "<b>Uzgodnij z gminą czystość drogi.</b> Błoto z kół ciężarówek na drodze publicznej to powód do skargi i mandatu. Wystarczy zamiatarka za kilkaset zł dwa razy w tygodniu."
    ],
    mistakes: [
      "<b>Droga na miękkim humusie.</b> Kruszywo położone bez zdjęcia humusu i geowłókniny po tygodniu wciśnie się w grunt, a droga zniknie.",
      "<b>Za wąski łuk wjazdu.</b> Ciężarówka 12 m długości potrzebuje promienia skrętu ok. 10–12 m. Za ciasny wjazd to uszkodzony słupek bramy.",
      "<b>Wjazd w miejscu przyszłego basenu lub tarasu.</b> Droga budowlana wchodzi w ogród, a potem kopiesz ją od nowa. Poprowadź ją tak, żeby zostać ją jako podjazd."
    ],
    formal: [
      ["Zgoda zarządcy drogi na zjazd (także tymczasowy)", "gmina, powiat albo województwo; wniosek z lokalizacją"],
      ["Przepust w rowie", "zgoda zarządcy rowu; zwykle gmina albo spółka wodna"]
    ],
    checklist: [
      "Droga szeroka min. 3,5 m, kruszywo 25–30 cm na geowłókninie",
      "Plac na materiały ok. 6 × 10 m poza wykopami",
      "Miejsce dla HDS-a przy placu",
      "Zgoda na zjazd i przepust, jeśli potrzebne",
      "Droga prowadzona tak, by została podbudową podjazdu"
    ]
  },

  /* 4 ------------------------------------------------------------------ */
  {
    id: "zaplecze",
    title: "Zaplecze: kontener i toaleta",
    lead: "Zamykany kontener na narzędzia i dokumenty oraz toaleta dla ekipy to dwie rzeczy, bez których dobre ekipy nie pracują, a złe kradną.",
    time: "1 dzień", team: "dostawa z HDS-em",
    facts: [["Kontener", "20 stóp, ok. 6 × 2,4 m", "layers"], ["Toaleta", "przenośna z serwisem", "users"]],
    cost: { min: 3500, max: 6000, note: "toaleta przenośna z serwisem na 12–16 mies. + transport kontenera" },
    body: `
      <p><strong>Kontener magazynowy</strong> (najczęściej 20-stopowy, ok. 6 × 2,4 m) trzyma elektronarzędzia, dokumenty, mniejsze materiały i część wyposażenia ekipy. Stawiasz go na utwardzonym placu przy bramie, a nie w polu: bliżej wjazdu, dalej od wykopów.</p>
      <p><strong>Toaleta przenośna</strong> to najczęściej wynajem: kabina z serwisem (opróżnianie i uzupełnianie) raz w tygodniu albo dwa tygodnie. Dobra ekipa pyta o nią przy ofercie. Jeśli planujesz wcześnie wodę i kanalizację, możesz tymczasowo zainstalować toaletę kompaktową, ale to droższe i wolniejsze.</p>
      <p>Ekipy potrzebują też <strong>miejsca na przerwę</strong> w cieniu albo pod dachem. Wystarczy wiata z płyt OSB albo część kontenera z ławą i stołem, a woda w beczce lub baniaku do mycia rąk.</p>`,
    decision: {
      question: "Jaki kontener postawić?",
      intro: "Kwota w kroku obejmuje toaletę. Opcje pokazują koszt kontenera w całym okresie budowy (14–16 miesięcy).",
      chosen: "najem",
      options: [
        { id: "najem", name: "Kontener z wynajmu",
          cost: { min: 4000, max: 7000 }, time: "dostawa w tydzień", note: "ok. 250–400 zł/mies. + transport w obie strony; orientacyjnie",
          pros: ["Bez zamrażania gotówki", "Firma przywozi i zabiera", "Można zmienić wielkość w trakcie"],
          cons: ["Przy długiej budowie najem się sumuje", "Każde opóźnienie to dopłata"],
          why: "Najprostszy wybór: bez kłopotu z odsprzedażą i bez ryzyka, że po budowie zostaniesz z kontenerem." },
        { id: "zakup", name: "Używany kontener kupiony na własność",
          cost: { min: 7000, max: 11000 }, note: "odsprzedaż po budowie odzyska ok. 50–60%",
          pros: ["Po budowie sprzedasz go lub wykorzystasz jako magazyn ogrodowy", "Nie zależysz od terminów najmu"],
          cons: ["Duża kwota na starcie", "Transport i HDS w obie strony"],
          why: "Opłaca się, gdy wiesz, że będziesz go używać także w ogrodzie. Netto wychodzi podobnie jak najem." },
        { id: "szopa", name: "Szopa z płyt OSB postawiona na miejscu",
          cost: { min: 2500, max: 4500 }, note: "robota własna lub ekipa, 1–2 dni",
          pros: ["Najtańsza", "Zrobisz ją na miarę"],
          cons: ["Słaba ochrona przed kradzieżą", "Trzeba ją potem rozebrać"],
          why: "Wystarczy na budowę, gdzie cenne rzeczy nie nocują. Dla elektronarzędzi ekip nie jest bezpieczna." }
      ]
    },
    tips: [
      "<b>Kontener na podkładach, nie na ziemi.</b> Cztery podkłady kolejowe albo kostki betonowe, żeby nie gnił od spodu i nie zalewała go woda.",
      "<b>Dobry zamek to wkładka klasy 4–6 i kłódka zamiast cienkiej zasuwy.</b> Zamek i okucia płyty kosztują 200–400 zł, a ratują kilka tysięcy.",
      "<b>Kontener przenoszony HDS-em.</b> Zamów dostawę razem z innym dostawcą, np. z dachówką czy szalunkami, żeby podzielić koszty transportu.",
      "<b>Prąd w kontenerze z rozdzielni budowlanej.</b> Jedno gniazdo i oświetlenie, żeby ekipa mogła ładować akumulatory."
    ],
    mistakes: [
      "<b>Kontener w miejscu przyszłego domu lub basenu.</b> Przestawianie HDS-em to kolejne kilkaset złotych i pół dnia.",
      "<b>Brak toalety.</b> Ekipy kopią w ogrodzie albo chodzą do sąsiadów, a to rodzi konflikty z sąsiadami i kontrole sanepidu.",
      "<b>Zapomniana odpowiedzialność za zawartość.</b> Narzędzia ekip w twoim kontenerze to ich własność. Zapisz w umowie, kto za nie odpowiada."
    ],
    formal: [
      ["Kontener jako obiekt tymczasowy na czas budowy", "zwykle bez zgłoszenia przy robotach objętych pozwoleniem; sprawdź u kierownika budowy"]
    ],
    checklist: [
      "Kontener na utwardzonym placu, zamykany na dobry zamek",
      "Toaleta przenośna z serwisem co 1–2 tygodnie",
      "Miejsce na przerwę dla ekipy i woda do mycia rąk",
      "Dziennik budowy i dokumenty w suchym, zamykanym miejscu"
    ]
  },

  /* 5 ------------------------------------------------------------------ */
  {
    id: "prad",
    title: "Prąd: skrzynka budowlana i przyłącze",
    lead: "Prąd potrzebny jest od pierwszych dni budowy: do betoniarki, wibratora, szlifierek i oświetlenia. Najlepiej zamówić od razu przyłącze docelowe z odpowiednią mocą i używać go na budowie.",
    time: "2–6 mies. na przyłącze, 1 dzień na rozdzielnię", team: "operator sieci, elektryk z uprawnieniami",
    facts: [["Moc", "3 × 25–32 A", "bulb"], ["Przyłącze", "złącze w granicy", "shield"], ["Rozdzielnia", "z RCD 30 mA", "shield"]],
    cost: { min: 9500, max: 19000, note: "rozdzielnia budowlana 1,5–3 tys. + przyłącze z złączem pomiarowym i linią do domu 8–16 tys. (orientacyjnie)" },
    body: `
      <p>Wniosek o <strong>warunki przyłączenia do sieci</strong> składasz u operatora sieci dystrybucyjnej (OSD) jak najwcześniej, a najlepiej jeszcze przed końcem pozwolenia na budowę. Dostajesz warunki, podpisujesz umowę o przyłączenie, a operator buduje przyłącze do <strong>złącza kablowo-pomiarowego</strong> w granicy działki. Od złącza do domu prowadzisz <strong>kabel zasilający (WLZ)</strong> na własny koszt, najczęściej w tym samym wykopie co woda.</p>
      <p>Moc zamawiaj z zapasem: pompa ciepła, płyta indukcyjna, pompa basenowa, ładowarka auta i fotowoltaika (PV 8 modułów) razem to dużo. Dla naszego domu rozsądnie jest przyjąć <strong>przyłącze trójfazowe o prądzie 3 × 25–32 A</strong>, czyli ok. 17–22 kW (tak jak w etapie 02). Dokładną moc dobierze projektant instalacji elektrycznej, a operator ją zatwierdzi.</p>
      <p>Do pracy w trakcie budowy potrzebujesz <strong>rozdzielnicy budowlanej</strong> w obudowie z zamknięciem, z wyłącznikami różnicowoprądowymi 30 mA, gniazdami 230 V i 400 V (16 A) oraz uziemieniem. Montuje ją elektryk z uprawnieniami, a pomiary robi przed użyciem.</p>`,
    decision: {
      question: "Skąd brać prąd na budowie?",
      intro: "Kwota w kroku zakłada przyłącze docelowe używane na budowie. Opcje pokazują dopłatę albo oszczędność względem niego.",
      chosen: "docelowe",
      options: [
        { id: "docelowe", name: "Przyłącze docelowe z licznikiem, rozdzielnia budowlana obok",
          cost: { min: 0, max: 0 }, time: "2–6 mies. czekania na operatora", note: "jedno przyłącze, jeden wykop",
          pros: ["Jeden wniosek i jedna opłata", "Prąd od razu z docelową mocą", "Rozdzielnię budowlaną zdejmujesz na końcu bez kosztów przyłącza"],
          cons: ["Zależysz od terminów operatora", "Licznik może być na umowie budowlanej, potem zmieniasz taryfę"],
          why: "Najtańsze i najczystsze. Zamów przyłącze równolegle z pozwoleniem, żeby prąd był na starcie. Pomaga też zasilić pompę ciepła i suszenie wylewek." },
        { id: "tymczasowe", name: "Osobne przyłącze tymczasowe (budowlane)",
          cost: { min: 2000, max: 4000 }, time: "1–3 mies.", note: "orientacyjnie; osobny wniosek i opłata",
          pros: ["Szybciej niż docelowe, gdy operator ma kolejkę", "Moc dopasowana do robót"],
          cons: ["Dwa wnioski i dwa przyłącza", "Po budowie trzeba je rozebrać"],
          why: "Ma sens, gdy docelowe przyłącze opóźnia się o pół roku. W typowej sytuacji przepłacasz." },
        { id: "agregat", name: "Agregat prądotwórczy przez cały czas budowy",
          cost: { min: 4000, max: 9000 }, note: "paliwo i wynajem przez kilka miesięcy; orientacyjnie",
          pros: ["Niezależność od operatora", "Działa od pierwszego dnia"],
          cons: ["Hałas i spaliny, a sąsiedzi się skarżą", "Paliwo i regularne serwisowanie", "Nie wystarczy dla suszenia wylewek i pompy ciepła"],
          why: "Doraźny sposób na pierwsze tygodnie. Przy rocznej budowie jest droższy niż przyłącze." }
      ]
    },
    tips: [
      "<b>Wniosek o warunki składa się równolegle z projektem (etap 02), a umowę o przyłączenie podpisuje przed startem budowy.</b> Operator pyta o tytuł prawny do działki i moc. Zadzwoń wcześniej do biura obsługi klienta: wiedzą, czy w okolicy są ograniczenia sieci.",
      "<b>Złącze w granicy od strony drogi.</b> Operator musi mieć do niego dostęp 24 godziny na dobę. Nie chowaj go za bramą ani w ogrodzeniu.",
      "<b>Kabel w rurze osłonowej ze zapasem rur.</b> Rura fi 63 na kabel prądu plus 1–2 rury rezerwowe fi 50 kosztują grosze, a oszczędzą kopania po latach (światłowód, monitoring, oświetlenie ogrodu).",
      "<b>Rozdzielnia budowlana na słupku z zadaszeniem</b> przy placu, nie na kontenerze. Kable biegną w osłonach, nie w kałużach, i nie pod ruchem aut."
    ],
    mistakes: [
      "<b>Za mała moc przyłączeniowa.</b> Zwiększenie mocy po latach to nowa umowa, opłata i czasem przebudowa złącza. Zamów z zapasem.",
      "<b>Przedłużacze z gniazdka u sąsiada.</b> Brak uziemienia, brak zabezpieczeń i konflikt przy pierwszej awarii. Nie rób tego dla oszczędności.",
      "<b>Kabel prowadzony pod drogą budowlaną bez rury.</b> Ciężarówka go zgniecie. Kabel w rurze osłonowej pod przejazdem układaj na głębokości min. ok. 0,7 m."
    ],
    formal: [
      ["Wniosek o określenie warunków przyłączenia", "operator sieci dystrybucyjnej; z mapą i tytułem prawnym"],
      ["Umowa o przyłączenie i opłata", "operator; opłata zależy od mocy i odległości sieci, orientacyjnie kilka tysięcy zł"],
      ["Pomiary i odbiór instalacji budowlanej", "elektryk z uprawnieniami"],
      ["Umowa sprzedaży i dystrybucji energii", "sprzedawca i operator, przed podłączeniem licznika"]
    ],
    checklist: [
      "Wniosek o warunki przyłączenia złożony",
      "Moc przyłączeniowa dobrana z zapasem (pompa ciepła, basen, ładowarka, PV)",
      "Złącze w granicy dostępne z drogi",
      "Rozdzielnia budowlana z RCD 30 mA, zamykana, uziemiona",
      "Kable w osłonach, rury rezerwowe na przyszłość"
    ]
  },

  /* 6 ------------------------------------------------------------------ */
  {
    id: "woda",
    title: "Woda: przyłącze i woda na budowie",
    lead: "Woda potrzebna jest od pierwszych zapraw, a potem na całej budowie. Przyłącze wodociągowe zrobisz raz, w jednym wykopie z kablem prądowym, i będzie służyło też domowi.",
    time: "1–3 mies. na warunki, 1–2 dni wykop", team: "wodociągi, instalator",
    facts: [["Głębokość", "ok. 1,0–1,2 m", "layers"], ["Rura", "PE 32–40 mm", "rebar"], ["Studnia wodomierzowa", "w granicy", "shield"]],
    cost: { min: 6000, max: 12000, note: "ok. 20–30 m rury PE, studnia wodomierzowa, wodomierz i opłata przyłączeniowa" },
    body: `
      <p>Wniosek o <strong>warunki przyłączenia do wodociągu</strong> składasz w przedsiębiorstwie wodociągowym albo gminie. Przyłącze wykonuje wskazana firma albo ty sam z uprawnionym wykonawcą, a odbiera je wodociąg. Kończy się na <strong>wodomierzu głównym</strong> w <strong>studni wodomierzowej</strong> przy granicy działki lub w domu (zależy od wodociągu i przepisów gminy).</p>
      <p>Rura PE leży poniżej strefy przemarzania, czyli orientacyjnie <strong>ok. 1,0–1,2 m</strong> pod terenem (dokładną głębokość podaje wodociąg). Dla domu z ogrodem i basenem zapytaj o średnicę 32 albo 40 mm: nawodnienie ogrodu i napełnianie basenu potrzebują większego przepływu niż sam dom.</p>
      <p>Na budowie wodę pobierasz z <strong>przyłącza docelowego</strong> (przez zawór i wąż albo tymczasowy hydrant ze studni wodomierzowej). Zużycie na całą budowę to orientacyjnie kilkadziesiąt m³: zaprawy, tynki, wylewki, mycie sprzętu i podlewanie betonu. Pamiętaj, że po stronie domu zrobisz też drugi, tańszy wodomierz ogrodowy (bez opłat za ścieki), jeśli wodociąg to dopuszcza.</p>`,
    tips: [
      "<b>Wykop wspólny z prądem, ale z odstępem.</b> Rura wody i kabel prądu leżą w jednym wykopie szerokości ok. 0,6–0,8 m, jednak w osobnych warstwach i z odstępem min. ok. 0,2–0,3 m. Taśma ostrzegawcza nad każdą z nich.",
      "<b>Ustal z wodociągiem średnicę i miejsce wodomierza przed kopaniem.</b> Przeróbka studni po odbiorze kosztuje kilka tysięcy złotych.",
      "<b>Zrób podlicznik ogrodowy.</b> Wodomierz do podlewania ogrodu i napełniania basenu w niektórych wodociągach rozlicza się bez opłaty za ścieki. Zapytaj o to przy składaniu wniosku.",
      "<b>Zawór odcinający przed wodomierzem zabezpiecz przed zimą.</b> Studnia z pokrywą ocieplaną styropianem i zawór na dopływie w domu przy remoncie przyda się wiele razy."
    ],
    mistakes: [
      "<b>Rura płytko pod drogą budowlaną.</b> Pęknie pod ciężarówką albo zamarznie w pierwszą zimę. Kładź na pełnej głębokości.",
      "<b>Wykop przyłącza w miejscu przyszłego basenu lub oczyszczalni.</b> Rozrysuj trasę na planie działki wcześniej, a potem się jej trzymaj.",
      "<b>Brak przejścia w fundamencie.</b> Rura wchodząca do budynku potrzebuje tulei w ławie lub ścianie fundamentowej, zrobionej w etapie 04. Zaplanuj przejścia razem z fundamentem."
    ],
    formal: [
      ["Warunki przyłączenia do wodociągu", "przedsiębiorstwo wodociągowe albo gmina; wniosek z mapą"],
      ["Umowa o zaopatrzenie w wodę", "wodociąg, po odbiorze przyłącza"],
      ["Odbiór przyłącza wodociągowego i plomba wodomierza", "przedstawiciel wodociągu"],
      ["Geodezyjna inwentaryzacja przyłącza", "geodeta; często wymagana do odbioru"]
    ],
    checklist: [
      "Warunki przyłączenia i średnica rury ustalone z wodociągiem",
      "Rura ułożona poniżej strefy przemarzania, taśma ostrzegawcza nad nią",
      "Studnia wodomierzowa z ocieplaną pokrywą",
      "Przepust przez fundament przewidziany w etapie 04",
      "Geodezyjna inwentaryzacja przyłącza wykonana",
      "Rozważony podlicznik ogrodowy"
    ]
  },

  /* 7 ------------------------------------------------------------------ */
  {
    id: "humus",
    title: "Zdjęcie i składowanie humusu",
    lead: "Humus to najcenniejsza warstwa gruntu: 20–40 cm ziemi, na której rośnie trawnik. Zdejmij go koparką, odłóż osobno i oszczędzaj, bo nowy humus kosztuje.",
    time: "1–2 dni", team: "koparka z operatorem",
    facts: [["Grubość", "20–40 cm", "layers"], ["Hałda", "max. ok. 1,5–2 m", "rebar"], ["Ilość", "ok. 150 m³", "calc"]],
    cost: { min: 3000, max: 6000, note: "koparka z operatorem 1–2 dni + transport koparki i układanie hałd" },
    widget: "kalkulator-humusu",
    body: `
      <p>Przed wykopem pod fundamenty <strong>zdejmujesz warstwę humusu</strong> w obrysie budynku z zapasem ok. 3 m dookoła oraz tam, gdzie będzie droga i plac. Koparka z łyżką skarpową zbiera ziemię warstwami, a operator odkłada ją na hałdy. Pod humusem leży <strong>podglebie</strong> (piasek, glina): składuj je osobno, bo nadaje się na zasypkę wykopów, a humus nie.</p>
      <p>Hałdy rozmieszczasz <strong>na placu poza strefą wykopu i ruchu aut</strong>, np. wzdłuż granicy. Wysokość maks. ok. 1,5–2 m, żeby ziemia w środku nie gniła, a zbocze ok. 1:1,5. Po miesiącu hałdy porasta chwast, więc zasiej gorczycę, facelię albo koniczynę: korzenie utrzymują ziemię i chronią przed chwastami.</p>
      <p>Skala jest większa, niż się wydaje: z ok. 500 m² (dom z garażem, zapas, droga i plac) zdejmiesz ok. 150 m³ w gruncie, czyli ok. 190 m³ w hałdzie. Ogród 1000 m² potrzebuje warstwy 15–20 cm, czyli 150–200 m³, więc prawie cały ten humus się przyda. Policz swój wariant w kalkulatorze poniżej. Ziemia wywożona z działki jest formalnie odpadem i wymaga dokumentu przekazania.`,
    decision: {
      question: "Co zrobić z humusem?",
      intro: "Kwota w kroku zakłada zdjęcie i odłożenie humusu na działce. Opcje pokazują dopłatę względem niej.",
      chosen: "halda",
      options: [
        { id: "halda", name: "Hałdy na działce, rozplanowanie po budowie",
          cost: { min: 0, max: 0 }, time: "bez dodatkowego czasu", note: "humus wraca do ogrodu",
          pros: ["Nie kupujesz humusu do ogrodu", "Bez kosztów transportu i zwałki", "Ziemia jest „własna”, z lokalnymi nasionami i życiem glebowym"],
          cons: ["Zajmuje ok. 50–80 m² placu przez rok", "Trzeba dbać o hałdy: wysiew roślin okrywowych"],
          why: "Najtaniej i najrozsądniej. Humusu na 1000 m² ogrodu potrzeba 150–200 m³, a nowy kosztuje orientacyjnie 80–150 zł/m³, czyli kilkanaście tysięcy zł." },
        { id: "wywoz", name: "Wywóz i dokupienie humusu po budowie",
          cost: { min: 5000, max: 9000 }, time: "kilkanaście kursów wywrotki", note: "kursy + zwałka, orientacyjnie; humus do ogrodu kupisz osobno",
          pros: ["Wolny plac, więcej miejsca dla ekip", "Na małej działce nie przeszkadza hałda"],
          cons: ["Płacisz za wywóz, a potem za nowy humus", "Kupiony humus bywa słabej jakości z domieszką gruzu", "Wywóz ziemi to odpad: dokumenty"],
          why: "Ma sens tylko wtedy, gdy hałdy zablokowałyby budowę. Na działce 1200 m² plac wystarczy." },
        { id: "rozplanowanie", name: "Rozplanowanie od razu na przyszłym ogrodzie",
          cost: { min: 500, max: 1500 }, note: "dodatkowe godziny koparki",
          pros: ["Brak hałd, ziemia od razu na miejscu", "Zasiej trawę czy łąkę kwietną na rok"],
          cons: ["Ciężki sprzęt i auta będą go zagęszczać", "Przy basenie i kopaniu pod tarasem trzeba go ruszać drugi raz"],
          why: "Dobre tylko na części działki, której budowa nie dotknie, np. od południowej granicy. Główny ogród zostaw na koniec." }
      ]
    },
    tips: [
      "<b>Zdejmuj humus przy suchej pogodzie.</b> Mokry humus zbija się pod gąsienicami koparki, a potem jest gorszy do sadzenia. Najlepiej przy braku opadów przez 2–3 dni.",
      "<b>Dwie hałdy: humus i podglebie.</b> Odłóż je osobno, nie mieszaj. Podglebie wróci pod fundamenty i kanalizację, humus na wierzch ogrodu.",
      "<b>Hałdy poza korzeniami drzew.</b> Nie zasypuj drzew, które zostają, bo zagniją od zasypania. Drzewa trzymaj w strefie wolnej od ruchu aut.",
      "<b>Sprawdź ziemię przed wywozem.</b> Zapytaj kierownika budowy o wymagane dokumenty i wybierz zwałkę z papierami. Dzikie wysypisko to kara, a odpowiada za nie także zlecający."
    ],
    mistakes: [
      "<b>Zdjęcie humusu tylko pod dom.</b> Droga, plac i zaplecze też stoją na humusie, który zostanie wgnieciony i zamieszany z kruszywem.",
      "<b>Hałda wzdłuż granicy sąsiada.</b> Spływająca woda i chwasty trafiają do niego. Zostaw min. ok. 1 m odstępu i nie wyżej niż ok. 1,5 m.",
      "<b>Mieszanie humusu z gliną i gruzem.</b> Z takiej ziemi nie zrobisz trawnika, a ta, którą wywozisz, jest do wywozu jako odpad."
    ],
    formal: [
      ["Dokument przekazania ziemi (przy wywozie)", "firma transportowa i zwałka; ustal z kierownikiem budowy"],
      ["Wpis do dziennika o zdjęciu humusu", "kierownik budowy"]
    ],
    checklist: [
      "Humus zdjęty w obrysie domu z zapasem 3 m, pod drogą i placem",
      "Dwie osobne hałdy: humus i podglebie",
      "Hałdy do ok. 1,5–2 m, poza wykopami i granicą sąsiada",
      "Hałdy obsiane roślinami okrywowymi",
      "Policzona ilość humusu i potrzeba do ogrodu"
    ],
    quiz: [{
      q: "Dlaczego hałda humusu nie powinna mieć więcej niż ok. 1,5–2 m wysokości?",
      a: ["Bo wyższa przewróci się na sąsiada", "Bo w środku humus zaczyna gnić bez dostępu powietrza i traci jakość", "Bo przepisy zabraniają wyższych hałd"],
      correct: 1,
      explain: "<b>Humus żyje.</b> W wysokiej hałdzie bakterie i grzyby w środku giną bez tlenu, a ziemia gnije. Niska i obsiana hałda zachowuje życie glebowe."
    }]
  },

  /* 8 ------------------------------------------------------------------ */
  {
    id: "wytyczenie",
    title: "Wytyczenie budynku przez geodetę",
    lead: "Geodeta przenosi dom z papieru na teren: wbija paliki w narożnikach i wpisuje wytyczenie do dziennika budowy. Od tego momentu dom stoi tam, gdzie ma stać, z dokładnością do centymetrów.",
    time: "2–3 godz. w terenie + 1–2 dni na dokumenty", team: "geodeta z uprawnieniami",
    facts: [["Dokładność", "ok. ±1–2 cm", "calc"], ["Reper", "min. 2 punkty", "layers"], ["Dziennik", "wpis geodety", "file"]],
    cost: { min: 1200, max: 2400, note: "dom + garaż, ok. 4–6 punktów + reper; inwentaryzacja powykonawcza osobno (etap 16)" },
    body: `
      <p>Geodeta bierze <strong>projekt zagospodarowania działki</strong> z pozwolenia i wytycza w terenie narożniki domu z garażem. Wbija paliki z gwoździem i oznacza je farbą. Dodatkowo zakłada <strong>reper wysokościowy</strong> poza strefą robót, czyli punkt o znanej wysokości, względem którego ustalisz poziom posadzki ±0,00 (u nas ok. 0,35–0,40 m nad terenem).</p>
      <p>Wytyczenie robisz <strong>po zdjęciu humusu</strong>, żeby paliki nie zniknęły pod koparką, i przed budową ław ciesielskich. Geodeta sporządza <strong>szkic wytyczenia</strong> i wpisuje fakt do dziennika budowy. Bez niego odbiór budynku i legalizacja ewentualnych odchyłek są trudniejsze.</p>
      <p>Po budowie ten sam geodeta wykona <strong>inwentaryzację powykonawczą</strong>, czyli pomiar stanu faktycznego domu i przyłączy. Jest ona potrzebna do zakończenia budowy (etap 16). Zamów oba zlecenia w jednym pakiecie, bo zwykle wychodzi tańsza.</p>`,
    tips: [
      "<b>Wytycz po zdjęciu humusu, przed kopaniem ław.</b> Odległość do granicy pomierz dwa razy: wymagane 4 m od okien i 3 m od ściany bez okien są częstym powodem nerwów.",
      "<b>Poproś o dwa repery i narożniki na gwoździach w betonowych słupkach.</b> Paliki drewniane giną po jednym przejeździe koparki, a bez nich za tydzień wzywasz geodetę drugi raz.",
      "<b>Zrób zdjęcia palików i szkic wytyczenia.</b> Przydadzą się, gdy ktoś wyrwie paliki albo pojawi się spór o granicę.",
      "<b>Umów się z geodetą na wizytę kontrolną przy ławach ciesielskich i po zbrojeniu.</b> Pół godziny sprawdzenia kosztuje kilkaset zł, a unika błędu na całej budowie."
    ],
    mistakes: [
      "<b>Wytyczanie przez ekipę „na oko”.</b> Przesunięcie o 30 cm w stronę granicy to naruszenie przepisów o odległościach, a zwykle ciągnie się do samego odbioru.",
      "<b>Brak wpisu w dzienniku.</b> Bez dokumentu wytyczenia przy odbiorze trudno wykazać, że budynek stoi zgodnie z projektem.",
      "<b>Reper w miejscu przejazdu.</b> Po tygodniu go nie ma. Reper ustaw na ogrodzeniu, kontenerze betonowym albo słupku z betonu poza drogą."
    ],
    formal: [
      ["Wytyczenie budynku i szkic wytyczenia", "geodeta z uprawnieniami; wpis do dziennika budowy"],
      ["Odbiór wytyczenia przez kierownika budowy", "wpis kierownika w dzienniku"],
      ["Inwentaryzacja powykonawcza", "geodeta, po budowie (etap 16); ujmuje dom i przyłącza"]
    ],
    checklist: [
      "Wytyczone narożniki domu i garażu, paliki trwale oznaczone",
      "Odległości od granic zmierzone dwukrotnie",
      "Reper wysokościowy poza strefą robót, min. 2 punkty",
      "Wpis geodety w dzienniku i szkic wytyczenia w teczce",
      "Zdjęcia palików w telefonie"
    ]
  },

  /* 9 ------------------------------------------------------------------ */
  {
    id: "lawy-ciesielskie",
    title: "Ławy ciesielskie",
    lead: "Ławy ciesielskie to deski na słupkach ok. 1,5–2 m za krawędzią wykopu. Rozciągnięte między nimi żyłki pokazują osie ścian, a znak poziomu na deskach to ±0,00 całego domu.",
    time: "1–2 dni", team: "2 cieśle",
    facts: [["Odległość", "1,5–2 m od wykopu", "calc"], ["Przekątna domu", "16,10 m", "calc"], ["Materiał", "deski 2,5 cm", "layers"]],
    cost: { min: 800, max: 1800, note: "deski, słupki, gwoździe, żyłka, robocizna 2 osób na 1–2 dni" },
    diagram: `<svg viewBox="0 0 360 220" role="img" aria-label="Plan ław ciesielskich wokół domu z żyłkami osi i przekątną">
      <rect x="110" y="60" width="140" height="108" rx="2" style="fill:var(--lawn);fill-opacity:.25;stroke:var(--ink-3)" stroke-width="1.2" stroke-dasharray="5 4"/>
      <text x="116" y="54">wykop ławy</text>
      <rect x="120" y="70" width="120" height="88" style="fill:var(--plaster);fill-opacity:.6;stroke:var(--ink-2)" stroke-width="1.4"/>
      <text x="152" y="118">obrys domu</text>
      <path d="M92 42H268V186H92Z" fill="none" style="stroke:var(--concrete)" stroke-width="6"/>
      <path d="M92 42H268V186H92Z" fill="none" style="stroke:var(--ink-2)" stroke-width="1"/>
      <path d="M120 42V186M240 42V186M92 70H268M92 158H268" style="stroke:var(--rust)" stroke-width="1" stroke-dasharray="4 3"/>
      <path d="M120 70L240 158" style="stroke:var(--lamp)" stroke-width="1.6"/>
      <text x="170" y="150" style="fill:var(--lamp)">przekątna 16,10 m</text>
      <g style="fill:var(--ink)"><rect x="89" y="39" width="6" height="6"/><rect x="265" y="39" width="6" height="6"/><rect x="89" y="183" width="6" height="6"/><rect x="265" y="183" width="6" height="6"/></g>
      <text x="274" y="46">słupki</text>
      <text x="96" y="204">ławice (deski) 1,5–2 m od wykopu; żyłki = osie ścian</text>
    </svg>
    <figcaption>Żyłki rozciągnięte między ławicami przecinają się w narożnikach domu. Obie przekątne muszą mieć tę samą długość.</figcaption>`,
    body: `
      <p>Przy każdym narożniku budynku ustawiasz <strong>dwa pionowe słupki</strong> w odległości ok. <strong>1,5–2 m od krawędzi wykopu</strong>, żeby koparka ich nie zniosła. Między słupkami przybijasz <strong>poziomą deskę (ławicę)</strong> o grubości ok. 2,5 cm i szerokości ok. 15 cm. Jej górna krawędź leży na <strong>jednym, ściśle określonym poziomie</strong>, np. ±0,00 minus ustalona wartość, zmierzonym niwelatorem od reperu.</p>
      <p>Na ławicy zaznaczasz gwoździami i piłą <strong>osie i zewnętrzne lica ścian fundamentowych oraz ław</strong>. Rozciągnięta żyłka między dwoma gwoździami wyznacza oś ściany, a w miejscu przecięcia dwóch żyłek zawieszasz pion i widzisz narożnik budynku.</p>
      <p><strong>Kontrola kształtu:</strong> przekątne prostokąta 13 × 9,5 m mają po ok. <strong>16,10 m</strong>. Mierzysz je taśmą po obu stronach żyłek. Różnica powyżej 1 cm oznacza krzywy dom, więc poprawiasz ławicę, zanim koparka zacznie kopać.</p>`,
    tips: [
      "<b>Wysokość ławic mierz niwelatorem laserowym od reperu.</b> Deski na jednym poziomie na wszystkich czterech bokach. Odchyłka 2–3 mm to norma, ponad 5 mm to powód do poprawy.",
      "<b>Słupki ok. 5 × 5 cm albo 7 × 7 cm wbite na ok. 0,5 m</b> i podparte zastrzałami. Chwiejny słupek to nieprawidłowy pomiar na całym wykopie.",
      "<b>Wykop pod ławy kopiesz po oznaczeniu żyłką szerokości.</b> Szerokość ławy 60 cm plus ok. 20 cm roboczej przestrzeni z każdej strony. Nad ławą zaznacz wysokości osi i dna ławy.",
      "<b>Zostaw ławice do końca stanu zero.</b> Przydadzą się przy zbrojeniu, szalunkach i ścianach fundamentowych. Zdejmij je dopiero po wylaniu i zasypaniu."
    ],
    mistakes: [
      "<b>Ławice za blisko wykopu.</b> Koparka zahaczy o słupek i cały pomiar do poprawy. Trzymaj min. 1,5 m.",
      "<b>Pomiar tylko jednej przekątnej.</b> Obie muszą się zgadzać. Jedna zgodna przy krzywym kącie nic nie mówi.",
      "<b>Deski na różnych poziomach „bo teren pochyły”.</b> Wszystkie ławice w jednym poziomie, a różnicę terenu uwzględniasz w wysokości słupków."
    ],
    formal: [
      ["Odbiór ław ciesielskich i wytyczenia przez kierownika budowy", "wpis w dzienniku przed kopaniem ław"],
      ["Kontrola geodety (opcjonalnie)", "wizyta kontrolna przed i po zbrojeniu"]
    ],
    checklist: [
      "Ławice min. 1,5 m od krawędzi wykopu",
      "Górne krawędzie desek na jednym poziomie względem reperu",
      "Przekątne budynku równe, różnica nie większa niż ok. 1 cm",
      "Osie i lica ścian zaznaczone na deskach",
      "Słupki sztywne, z zastrzałami",
      "Wpis kierownika w dzienniku"
    ],
    quiz: [{
      q: "Jak sprawdzić, że obrys domu 13 × 9,5 m jest prostokątem?",
      a: ["Zmierzyć tylko dłuższy bok", "Zmierzyć obie przekątne: powinny mieć po ok. 16,10 m", "Zmierzyć przekątną tylko raz i przyjąć ją za wzorzec"],
      correct: 1,
      explain: "<b>Równe przekątne to prostokąt.</b> Przekątna ze wzoru Pitagorasa: √(13² + 9,5²) ≈ 16,10 m. Różnica między przekątnymi powyżej 1 cm oznacza skrzywienie."
    }]
  },

  /* 10 ----------------------------------------------------------------- */
  {
    id: "kanalizacja",
    title: "Kanalizacja: sieć, oczyszczalnia czy szambo",
    lead: "Ścieki z domu muszą gdzieś trafić. Gdy w drodze jest kanalizacja gminna, to najlepsza opcja. Gdy jej nie ma, wybierasz między przydomową oczyszczalnią a szambem.",
    time: "1–2 tyg. na warunki, 2–3 dni robót", team: "wodociągi, instalator, koparka",
    facts: [["Spadek rury", "min. ok. 2%", "calc"], ["Rury", "PVC DN 110–160", "rebar"], ["Dom", "4–5 osób", "users"]],
    body: `
      <p><strong>Kanalizacja gminna:</strong> składasz wniosek o warunki, wodociąg określa miejsce włączenia, a ty układasz rurę PVC (zwykle DN 160) od domu do studzienki rewizyjnej w granicy. To najtańsze i najwygodniejsze rozwiązanie, jeśli sieć jest w drodze przy działce.</p>
      <p><strong>Przydomowa oczyszczalnia:</strong> osadnik gnilny i drenaż rozsączający albo oczyszczalnia biologiczna ze złożem. Wymaga miejsca, <strong>przepuszczalnego gruntu</strong> (sprawdź to w opinii geotechnicznej) i zachowania odległości od budynku, granic i studni. Dla domu 4–5 osób liczysz na ok. 5 RLM (równoważnych mieszkańców), a powierzchnia pod drenaż to kilkadziesiąt m².</p>
      <p><strong>Szambo:</strong> zbiornik bezodpływowy ok. 10 m³. Tanie w budowie, ale wymaga <strong>regularnego wywozu</strong> przez uprawnioną firmę i umowy z nią. Dom 4–5 osób to orientacyjnie 15–20 kursów rocznie, a basen i pranie to dodatkowe obciążenie.</p>
      <p>Odległości od budynku, granic i studni dla oczyszczalni i szamba określają przepisy (WT) oraz instrukcja producenta. Dokładne wartości sprawdź u projektanta i kierownika budowy: są różne dla szamba, osadnika i drenażu.</p>`,
    decision: {
      question: "Jak odprowadzić ścieki z domu?",
      intro: "Wybór zależy od tego, czy w drodze jest kanalizacja. Przyjmujemy działkę referencyjną, na której zapewniono prąd i wodę, a kanalizacji nie założono. Jeśli sieć jest, wybierz pierwszą opcję, zaoszczędzisz ok. 10–15 tys. zł.",
      chosen: "oczyszczalnia",
      options: [
        { id: "siec", name: "Przyłącze do kanalizacji gminnej",
          cost: { min: 8000, max: 16000 }, time: "2–3 dni robót", note: "ok. 20–30 m rury DN 160, studzienka rewizyjna, opłata; orientacyjnie",
          pros: ["Najtańsza w całym użytkowaniu", "Zero obsługi", "Nie zajmuje miejsca w ogrodzie"],
          cons: ["Zależna od tego, czy sieć w ogóle jest przy działce", "Opłata za ścieki co miesiąc, orientacyjnie kilkanaście zł za m³"],
          why: "Zawsze pierwszy wybór, jeśli sieć jest w drodze. Przy domu z basenem odstaw jednak odprowadzenie wody z płukania filtra do osobnego wsiąkania (zapytaj wodociąg)." },
        { id: "oczyszczalnia", name: "Przydomowa oczyszczalnia (osadnik + drenaż lub złoże)",
          cost: { min: 18000, max: 30000 }, time: "2–4 dni robót", note: "orientacyjnie; zależy od gruntu i typu",
          pros: ["Niezależna od sieci, bez wywozu", "Niskie koszty eksploatacji (kilkaset zł rocznie)", "Oczyszczona woda wsiąka w grunt lub trafia do zbiornika"],
          cons: ["Wymaga miejsca i przepuszczalnego gruntu", "Trzeba ją raz w roku serwisować i pilnować rodzaju chemii domowej", "Wymaga formalności (zgłoszenie lub pozwolenie, wg warunków projektu)"],
          why: "Na działce 1200 m² z dobrym gruntem to rozsądny wybór, gdy brak sieci. Ogród jest duży, więc miejsce się znajdzie, jeśli zaplanujesz je razem z basenem i studnią." },
        { id: "szambo", name: "Szambo betonowe lub z polietylenu (10 m³)",
          cost: { min: 8000, max: 14000 }, time: "1–2 dni robót", note: "wywóz orientacyjnie 5–8 tys. zł rocznie",
          pros: ["Tanie w budowie, szybko zrobione", "Nie wymaga przepuszczalnego gruntu"],
          cons: ["Wywóz co 2–3 tygodnie, kilka tysięcy rocznie", "Zapach i dojazd ciężkiego auta do pokrywy", "Wymaga umowy z firmą, a kontrole gminy sprawdzają rachunki"],
          why: "Tylko tymczasowe rozwiązanie, gdy w planach jest sieć za 2–3 lata. Dla stałego domu 4–5 osób nie opłaca się." }
      ]
    },
    tips: [
      "<b>Rura od domu ze spadkiem min. ok. 2% (2 cm na 1 m).</b> Rurę DN 110 prowadź ze spadkiem 2–3%, a DN 160 ok. 1–2%. Za mały spadek zapycha, za duży płucze wodę i zostawia osad.",
      "<b>Studzienka rewizyjna w granicy i przy zmianie kierunku.</b> Dostęp do czyszczenia co ok. 15 m i przy każdym załamaniu. Pokrywa na poziomie terenu.",
      "<b>Przejście przez ścianę fundamentową w rurze osłonowej (tulei).</b> Zaplanuj je razem z fundamentem w etapie 04, żeby nie kuć w betonie.",
      "<b>Miejsce na oczyszczalnię zaplanuj w projekcie ogrodu.</b> Drenaż rozsączający leży pod trawnikiem, nie wolno go zabudowywać ani sadzić nad nim drzew z silnymi korzeniami. Auta po nim nie jeżdżą."
    ],
    mistakes: [
      "<b>Oczyszczalnia na gruncie nieprzepuszczalnym.</b> Glina wymaga większych drenaży, a przy wysokiej wodzie gruntowej oczyszczalnia może nie działać wcale. Opinia geotechniczna powinna to potwierdzić.",
      "<b>Za mały spadek rury.</b> Rura ułożona prawie poziomo zapycha się po roku. Mierz laserem, nie na oko.",
      "<b>Wylewanie chemii do oczyszczalni.</b> Chlor z basenu, mocne środki i płyny do udrażniania zabijają bakterie. Wodę z basenu odprowadzaj osobno."
    ],
    formal: [
      ["Warunki przyłączenia do kanalizacji", "wodociąg lub gmina; wniosek z mapą"],
      ["Zgłoszenie albo pozwolenie na przydomową oczyszczalnię", "starostwo, zwykle w ramach projektu domu; sprawdź u kierownika budowy"],
      ["Umowa na wywóz nieczystości (szambo)", "firma wpisana do rejestru gminy; gmina kontroluje rachunki"],
      ["Protokół próby szczelności i odbiór przyłącza", "wodociąg albo kierownik budowy"]
    ],
    checklist: [
      "Ustalone, czy w drodze jest kanalizacja gminna",
      "Opinia geotechniczna potwierdza przepuszczalność gruntu (przy oczyszczalni)",
      "Miejsce na oczyszczalnię lub szambo z zachowanymi odległościami",
      "Spadki rur zmierzone laserem, min. ok. 2%",
      "Przejście przez fundament przewidziane w etapie 04",
      "Próba szczelności wykonana i odebrana"
    ],
    quiz: [{
      q: "Rura kanalizacyjna ma 10 m długości. Przy spadku 2% o ile niżej leży jej koniec niż początek?",
      a: ["2 cm", "20 cm", "2 m"],
      correct: 1,
      explain: "<b>2% to 2 cm na każdy metr.</b> Na 10 m to 20 cm. Przy zbyt małym spadku nieczystości zalegają i rura się zapycha."
    }]
  },

  /* 11 ----------------------------------------------------------------- */
  {
    id: "gaz",
    title: "Gaz: dlaczego go nie przyłączamy",
    lead: "Dom referencyjny ogrzewa pompa ciepła, a kuchnia ma płytę indukcyjną, więc gaz nie jest potrzebny. Przyłącze to koszt, stała opłata i zobowiązanie, które trudno zwrócić.",
    time: "decyzja bez robót", team: "ty, projektant",
    facts: [["Ogrzewanie", "pompa ciepła powietrzna", "bulb"], ["Kuchnia", "płyta indukcyjna", "bulb"]],
    body: `
      <p>Gaz w nowym domu ma trzy zastosowania: <strong>ogrzewanie, ciepła woda i kuchenka</strong>. Nasz dom ogrzewa i grzeje wodę <strong>powietrzna pompa ciepła</strong> (pompa przy ścianie bocznej), prąd na ten cel częściowo pochodzi z fotowoltaiki na dachu, a w kuchni jest <strong>płyta indukcyjna</strong>. Na gaz zostaje tylko kominek, który i tak pali drewnem.</p>
      <p>Rezygnacja z gazu to <strong>oszczędność przyłącza</strong> i wszystkich stałych opłat (abonament, opłata dystrybucyjna stała, przeglądy). Unikasz też wymiennika, komina spalinowego, czujników tlenku węgla i kłopotów przy ubezpieczeniu. Unijne przepisy zmierzają do <strong>zeroemisyjnych budynków nowych</strong> (orientacyjnie od 2030 r.) i odchodzenia od dopłat do kotłów na paliwa kopalne, więc przyłącze gazowe to coraz słabsza inwestycja.</p>
      <p>Gaz ma sens, gdy planujesz kuchnię gazową z pasji albo grzejesz bardzo duży basen i brakuje ci mocy elektrycznej. W naszym przypadku wystarczy dobrze dobrana moc przyłącza prądu (krok 5).</p>`,
    decision: {
      question: "Czy przyłączać gaz?",
      intro: "Koszty dotyczą samego przyłącza. Nie obejmują kotła, instalacji wewnętrznej ani opłat stałych (kilkaset zł rocznie, orientacyjnie).",
      chosen: "bez",
      options: [
        { id: "bez", name: "Bez gazu, pompa ciepła i prąd",
          cost: { min: 0, max: 0 }, note: "zero przyłącza i opłat stałych",
          pros: ["Brak kosztu przyłącza i abonamentu gazowego", "Mniej instalacji i komin tylko dla kominka", "Spójne z PV i pompą ciepła", "Brak ryzyka podwyżek gazu"],
          cons: ["Kuchnia tylko indukcyjna", "Zależność od prądu: warto mieć PV i magazyn energii albo zapas"],
          why: "Pompa ciepła z PV daje najniższy koszt całego cyklu życia i spełnia wymagania zeroemisyjności. Kominek jest dodatkiem, nie głównym źródłem ciepła." },
        { id: "siec", name: "Przyłącze do sieci gazowej",
          cost: { min: 4000, max: 9000 }, time: "1–3 mies. na warunki i wykonanie", note: "tylko przyłącze, orientacyjnie, jeśli sieć jest w drodze",
          pros: ["Możliwa kuchnia gazowa", "Rezerwa, gdy pompa zawiedzie"],
          cons: ["Opłata przyłączeniowa plus stała opłata co miesiąc", "Wymaga kotła i komina", "Gaz w nowych domach traci poparcie regulacyjne"],
          why: "Ma sens przy gazowej kuchni z pasji albo dużym kominku gazowym. W naszej koncepcji to nadmiar." },
        { id: "lpg", name: "Zbiornik LPG na działce",
          cost: { min: 3000, max: 6000 }, time: "kilka tygodni", note: "instalacja; dzierżawa i gaz osobno",
          pros: ["Nie wymaga sieci gazowej", "Ma wolne miejsce w ogrodzie"],
          cons: ["Zbiornik zabiera 10–15 m² ogrodu i wymaga stref bezpieczeństwa", "Gaz płynny jest droższy od sieciowego", "Zależność od dostawcy"],
          why: "Dla domu poza zasięgiem sieci i bez pompy ciepła. Przy naszej koncepcji nie jest potrzebny." }
      ]
    },
    tips: [
      "<b>Nie ma gazu, więc nie planuj komina spalinowego dla kotła.</b> Zostaje komin tylko dla kominka z wkładem, co zmniejsza koszt i wolną przestrzeń w stropie.",
      "<b>Kuchnia indukcyjna wymaga przyłącza 3-fazowego 16 A</b> z osobnym zabezpieczeniem. Zaplanuj to w etapie 08, a przyłącze prądu z zapasem zrobi resztę.",
      "<b>Zrezygnuj z gazu świadomie, a nie z lenistwa.</b> Zapisz to w projekcie instalacji, żeby wykonawca nie poprowadził „na zapas” rury gazowej.",
      "<b>Rozważ rurę rezerwową w gruncie.</b> Pusta rura fi 50 do kuchni ogrodowej czy grilla kosztuje parę złotych i zostawia opcję na przyszłość bez przyłącza."
    ],
    mistakes: [
      "<b>Przyłącze gazowe „na wszelki wypadek”.</b> Płacisz opłatę przyłączeniową i abonament za coś, czego nie używasz, a zwrot jest trudny.",
      "<b>Pompa ciepła bez planu zasilania.</b> Rezygnacja z gazu wymaga mocy przyłączeniowej, PV i dobrze zaizolowanego domu. Bez nich rachunki za prąd zaskoczą.",
      "<b>Kominek z wkładem bez zaplanowanego dopływu powietrza.</b> Dom z rekuperacją potrzebuje dopływu powietrza do kominka. Zaplanuj to w etapie 10."
    ],
    formal: [
      ["Warunki przyłączenia do sieci gazowej (jeśli jednak wybierzesz)", "operator sieci gazowej; wniosek z mapą"],
      ["Oświadczenie o braku przyłącza gazowego w projekcie", "projektant instalacji"]
    ],
    checklist: [
      "Decyzja: bez gazu, zapisana w projekcie instalacji",
      "Brak rur gazowych i komina dla kotła w projekcie",
      "Moc przyłącza prądu dobrana pod pompę ciepła i indukcję",
      "Kominek z doprowadzonym powietrzem uwzględniony w etapie 10"
    ],
    quiz: [{
      q: "Dlaczego w domu referencyjnym nie przyłączamy gazu?",
      a: ["Bo gaz jest zabroniony w nowych domach", "Bo pompa ciepła z PV i płyta indukcyjna pokrywają wszystkie potrzeby, a przyłącze to koszt i stałe opłaty", "Bo na działce nie ma miejsca na rurę"],
      correct: 1,
      explain: "<b>To wybór ekonomiczny, nie zakaz.</b> Ogrzewanie i ciepłą wodę zapewnia pompa ciepła, a gotowanie indukcja. Gaz dodałby koszt przyłącza i abonament bez korzyści."
    }]
  },

  /* 12 ----------------------------------------------------------------- */
  {
    id: "swiatlowod",
    title: "Światłowód i rura na internet",
    lead: "Kable w ziemi układa się raz. Zanim zasypiesz wykop przyłączy, ułóż rurę osłonową na światłowód i kilka rezerwowych. To kilkaset złotych, które oszczędzą kopanie ogrodu.",
    time: "w jednym wykopie z prądem i wodą", team: "operator, koparka",
    facts: [["Rura", "HDPE 40–50 mm", "rebar"], ["Rura rezerwowa", "min. 1", "layers"]],
    cost: { min: 1000, max: 4000, note: "rury osłonowe 30–40 m, studzienki, ew. opłata operatora za przyłącze; orientacyjnie" },
    body: `
      <p><strong>Światłowód (FTTH)</strong> to dziś podstawowy internet w nowym domu: praca zdalna, streaming, kamery. Operator sam układa kabel albo wykorzystuje twoją <strong>rurę osłonową HDPE</strong> fi 40–50 mm od granicy do skrzynki w domu. Zapytaj operatora, czy w okolicy jest światłowód i na jakich zasadach (często przyłącze jest bezpłatne w pakiecie, ale tylko do granicy).</p>
      <p>Rury układasz <strong>w tym samym wykopie co prąd i woda</strong>, z odstępem od kabla zasilającego. Rura bez kabla (z linką ciągnącą) pozwoli operatorowi lub tobie wciągnąć kabel później, bez kopania. Zostaw też <strong>1–2 rury rezerwowe</strong> pod monitoring i oświetlenie ogrodu.</p>
      <p>Gdy światłowodu nie ma, zostaje <strong>internet radiowy, 5G/LTE lub satelitarny</strong>. Przyda się wtedy zewnętrzna antena i kabel w rurze, a bez światłowodu pamiętaj o zapasie rur na przyszłość.</p>`,
    tips: [
      "<b>Rura z linką, bez ostrych kolan.</b> Promień łuku min. ok. 0,5 m, a w komorze przy domu zostaw zapas kabla. Zawinięty zapas przyda się na zmiany.",
      "<b>Dwa punkty wejścia do domu:</b> do skrzynki technicznej przy rozdzielnicy i do salonu. Przy dobrej sieci domowej dołożysz kable Ethernet do punktów (etap 08).",
      "<b>Zapytaj sąsiadów o operatora.</b> Najlepiej wiedzą, który ma kabel w ulicy i jak szybko reaguje na awarie.",
      "<b>Oznacz trasę taśmą i na planie.</b> Rurę w ziemi łatwo trafić łopatą. Po zasypaniu zrób zdjęcia i szkic z odległościami."
    ],
    mistakes: [
      "<b>Brak rury na internet w wykopie.</b> Po roku kopiesz trawnik, bo operator nie ma jak wprowadzić kabla.",
      "<b>Rura bez linki.</b> Wciągnięcie kabla przez 40 m bez prowadnicy graniczy z cudem. Zostaw linkę lub sznurek w rurze.",
      "<b>Zasilanie i światłowód w tej samej rurze.</b> Kable teletechniczne i zasilające prowadzi się w osobnych rurach. Szczegóły sprawdź u kierownika budowy."
    ],
    formal: [
      ["Zgoda lub umowa z operatorem internetu", "operator; często bezpłatna do granicy, odcinek na działce na twój koszt"],
      ["Inwentaryzacja geodezyjna przyłącza (jeśli wymagana)", "geodeta, razem z pozostałymi przyłączami"]
    ],
    checklist: [
      "Ustalony operator i możliwość światłowodu",
      "Rura osłonowa HDPE fi 40–50 mm z linką w wykopie",
      "Co najmniej 1 rura rezerwowa pod monitoring",
      "Trasa oznaczona taśmą i zdjęta na zdjęciach",
      "Wejście do domu zaplanowane razem z fundamentem"
    ],
    quiz: [{
      q: "Dlaczego warto ułożyć rurę osłonową na internet w wykopie, nawet jeśli światłowód jeszcze nie dotarł?",
      a: ["Bo operator tego wymaga w każdej umowie", "Bo później nie trzeba rozkopywać ogrodu, żeby wprowadzić kabel", "Bo rura sama przewodzi sygnał"],
      correct: 1,
      explain: "<b>Wykop robisz raz.</b> Rura z linką kosztuje parę złotych za metr, a późniejsze kopanie trawnika, kostki lub tarasu to tysiące i bałagan."
    }]
  }

  ]
});
