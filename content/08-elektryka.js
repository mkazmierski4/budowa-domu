/* Etap 08: Elektryka, niskoprądowe, oświetlenie. Ceny orientacyjne, 2026 r., okolice małego miasta, dom referencyjny ok. 190 m². */
BUDOWA.addStage({
  id: "08-elektryka", nr: 8, title: "Elektryka, niskoprądowe, oświetlenie", icon: "⚡", category: "instal",
  summary: "Od projektu punktów, pomieszczenie po pomieszczeniu, przez rozdzielnicę, przewody, puszki i trasy, po oświetlenie LED, sieć LAN, alarm, wideodomofon i pomiary z protokołem.",
  duration: "4–6 tyg. (rozprowadzenie przed tynkami) + 1 tydz. (biały montaż po malowaniu)",
  steps: [

  /* 1 ------------------------------------------------------------------ */
  {
    id: "projekt-instalacji",
    title: "Projekt instalacji elektrycznej",
    lead: "Instalacja to ok. 150–200 punktów, 25–35 obwodów i kilometr przewodów. Bez rysunku z zaznaczonym każdym gniazdem decyzje zapadają na budowie, z kredą w ręku i w pośpiechu.",
    time: "2–4 tyg.", team: "projektant branży elektrycznej albo elektryk z uprawnieniami",
    facts: [["Punkty", "ok. 150–200", "listcheck"], ["Obwody", "ok. 25–35", "bulb"]],
    cost: { min: 1500, max: 3000, note: "rzuty z punktami, schemat rozdzielnicy, zestawienie obwodów" },
    body: `
      <p>W projekcie budowlanym (etap 02) elektryka jest zwykle tylko ogólnie. Do wykonania potrzebujesz <strong>rzutów każdej kondygnacji z zaznaczonymi punktami</strong>: gniazdami, wypustami oświetleniowymi, łącznikami, puszkami niskoprądowymi i zasilaniem urządzeń. Do tego <strong>schemat rozdzielnicy</strong> z listą obwodów i zabezpieczeń.</p>
      <p>Projekt powinien powstać <strong>po ustawieniu mebli</strong>. Gniazdo za sofą, łącznik za otwartymi drzwiami i lampa nad pustym miejscem po wyspie to klasyczne skutki projektowania elektryki przed aranżacją. Wystarczy szkic kuchni od studia mebli i przybliżony układ salonu i sypialni.</p>
      <p>Uzgodnij od razu, co jeszcze potrzebuje prądu albo kabla: pompa ciepła (etap 09), rekuperator i fotowoltaika (etap 10), ładowarka auta, brama garażowa, rolety, pompa basenowa i oświetlenie ogrodu (etap 15).</p>`,
    decision: {
      question: "Kto rozplanuje instalację?",
      intro: "Koszt projektu jest w kroku. Opcje pokazują dopłatę albo oszczędność.",
      chosen: "projekt",
      options: [
        { id: "projekt", name: "Projekt wykonawczy elektryki (rzuty + schemat rozdzielnicy)",
          cost: { min: 0, max: 0 }, time: "2–4 tyg.", note: "1,5–3 tys. zł",
          pros: ["Każdy punkt jest na rysunku przed bruzdowaniem", "Elektrycy wyceniają ten sam zakres", "Rysunek po latach pokazuje, gdzie biegną kable"],
          cons: ["Wymaga wcześniejszej decyzji o meblach i kuchni", "Trzeba poświęcić 2–3 wieczory na uzgodnienia"],
          why: "Najtańsza ochrona przed przeróbkami. Porównywalne oferty i dokumentacja powykonawcza są w cenie jednego dnia pracy ekipy." },
        { id: "elektryk", name: "Elektryk rozrysowuje punkty kredą na ścianach",
          cost: { min: -3000, max: -1500 }, time: "1–2 dni z elektrykiem", note: "bez dokumentu",
          pros: ["Szybko, bez projektanta", "Dobry elektryk ma praktyczne pomysły"],
          cons: ["Oferty trudno porównać, bo każda liczy inną liczbę punktów", "Bez dokumentacji, gdzie biegną przewody", "Decyzje pod presją czasu ekipy"],
          why: "Ma sens przy prostym domu i doświadczonym elektryku, którego znasz. Zrób wtedy chociaż zdjęcia ścian z wymiarami przed tynkami." }
      ]
    },
    tips: [
      "<b>Zacznij od układu mebli.</b> Wydrukuj rzut w skali 1:50 i narysuj na nim sofę, łóżka, biurka, telewizor i szafki kuchenne. Punkty dopasujesz do nich w godzinę.",
      "<b>Licz punkty z zapasem.</b> Typowy błąd to za mało gniazd. W pokojach planuj co najmniej po 2 gniazda podwójne na ścianę z meblem.",
      "<b>Poproś o zestawienie obwodów.</b> Z numerami, przekrojami i zabezpieczeniami. Na jego podstawie powstanie opis rozdzielnicy.",
      "<b>Zostaw w rozdzielnicy 20–30% wolnych modułów.</b> Na ładowarkę auta, basen, PV i smart home, które dojdą później."
    ],
    mistakes: [
      "<b>Projekt przed aranżacją wnętrz.</b> Gniazda lądują za szafą, a nad blatem kuchennym brakuje dwóch par.",
      "<b>Wycena „za punkt” bez listy punktów.</b> Jeden elektryk liczy łącznik jako punkt, drugi nie. Różnica w ofertach to wtedy kilka tysięcy złotych.",
      "<b>Zapomniane urządzenia.</b> Bez przewodu do bramy, rolet, rekuperatora czy pompy basenowej kujesz świeże tynki."
    ],
    formal: [
      ["Projekt instalacji elektrycznej", "projektant z uprawnieniami w specjalności instalacyjnej elektrycznej"],
      ["Warunki przyłączenia i umowa z operatorem sieci", "z etapu 02–03; moc przyłączeniowa ok. 3 × 25–32 A"]
    ],
    checklist: [
      "Rzuty z każdym gniazdem, łącznikiem i wypustem",
      "Schemat rozdzielnicy z listą obwodów i zabezpieczeń",
      "Zasilanie PC, rekuperacji, PV, bramy, rolet, basenu i ładowarki uwzględnione",
      "Rezerwa 20–30% modułów w rozdzielnicy"
    ],
    quiz: [{
      q: "Kiedy najlepiej rozplanować punkty elektryczne?",
      a: ["Przed projektem budowlanym", "Po rozplanowaniu mebli i kuchni, przed bruzdowaniem", "Po tynkach, gdy widać ściany"],
      correct: 1,
      explain: "<b>Najpierw meble, potem prąd.</b> Gniazda i łączniki zależą od tego, gdzie stanie sofa, łóżko i szafki. Po tynkach każda zmiana to kucie."
    }]
  },

  /* 2 ------------------------------------------------------------------ */
  {
    id: "punkty-pomieszczenia",
    title: "Punkty pomieszczenie po pomieszczeniu",
    lead: "Każde pomieszczenie ma swój „przepis”: gdzie stoi telewizor, gdzie ładujesz telefon, czym zapalasz światło od drzwi. Przejdź dom krok po kroku i zapisz potrzeby, zanim elektryk weźmie się do bruzd.",
    time: "1–2 wieczory", team: "ty + elektryk",
    widget: "kalkulator-punktow",
    body: `
      <p><strong>Salon z kominkiem:</strong> ściana TV (2 gniazda podwójne, LAN, przewód HDMI w rurze do sprzętu), gniazda przy sofie i fotelach z ładowarką USB, oświetlenie w 2–3 obwodach (sufit, taśma, kinkiety), gniazdo przy oknie tarasowym na choinkę i lampki. Przy kominku tylko gniazdo poza strefą ciepła, ewentualnie zasilanie wentylatora DGP.</p>
      <p><strong>Kuchnia z wyspą:</strong> nad blatem 4–6 gniazd w parach, w wyspie 2 gniazda podwójne (wyskakujące albo w boku szafki), osobne obwody dla <strong>płyty indukcyjnej</strong> (trójfazowo), piekarnika i zmywarki, zasilanie okapu, taśmy LED pod szafkami, oświetlenie nad wyspą.</p>
      <p><strong>Łazienka z wanną wolnostojącą:</strong> gniazdo przy lustrze poza strefą wanny, zasilanie lustra z podświetleniem, wentylatora (jeśli jest), grzejnika drabinkowego i ewentualnie maty grzewczej. Wszystkie obwody łazienki za wyłącznikiem różnicowoprądowym 30 mA.</p>
      <p><strong>Siłownia:</strong> osobny obwód na bieżnię lub rower, gniazda przy lustrze i na TV, LAN, dobre światło sufitowe bez olśnienia. <strong>Garaż:</strong> ładowarka auta, napęd bramy, gniazda na warsztat co najmniej w jednym obwodzie, oświetlenie z czujnikiem ruchu, gniazdo zewnętrzne przy podjeździe.</p>`,
    tips: [
      "<b>Gniazda podwójne zamiast pojedynczych.</b> Kosztują prawie tyle samo, a ratują przed listwami. Przy łóżku: 2 podwójne po obu stronach.",
      "<b>Łączniki przy klamce, nie za skrzydłem.</b> Sprawdź kierunek otwierania drzwi w projekcie. Łącznik ok. 15–20 cm od ościeżnicy.",
      "<b>Schody i korytarze na łączniki schodowe albo czujniki ruchu.</b> Zapalasz na dole, gasisz na górze. W holu z 3 drzwiami przyda się układ krzyżowy.",
      "<b>Gniazdo co ok. 3 m ściany</b> w pokojach dziennych to rozsądne minimum. W kuchni licz parę gniazd na każdy metr blatu roboczego.",
      "<b>Kalkulator poniżej</b> policzy orientacyjnie punkty, obwody i koszt dla twojego zestawu pomieszczeń."
    ],
    mistakes: [
      "<b>Brak gniazda w wyspie.</b> Mikser i laptop na kablu przez pół kuchni. Przewód do wyspy idzie w posadzce, więc trzeba go zaplanować przed wylewkami (etap 11).",
      "<b>Jedno gniazdo przy TV.</b> Telewizor, dekoder, soundbar, konsola i router to 5 wtyczek.",
      "<b>Światło tylko na środku sufitu.</b> W salonie i sypialni robi się „poczekalnia”. Dodaj światło boczne i taśmy w osobnych obwodach."
    ],
    checklist: [
      "Salon: ściana TV, gniazda przy sofie, 2–3 obwody oświetlenia",
      "Kuchnia: gniazda nad blatem i w wyspie, obwody indukcji, piekarnika, zmywarki",
      "Łazienka: gniazdo poza strefą wanny, lustro, grzejnik, wentylator",
      "Siłownia: osobny obwód na sprzęt, LAN",
      "Garaż: ładowarka, brama, gniazda warsztatowe, gniazdo zewnętrzne",
      "Kierunki otwierania drzwi sprawdzone przy łącznikach"
    ],
    quiz: [{
      q: "Gdzie poprowadzić przewód do gniazd w kuchennej wyspie?",
      a: ["Po ścianie i pod blatem, po montażu mebli", "W posadzce, w rurze osłonowej, przed wylewkami", "Przedłużaczem od najbliższego gniazda"],
      correct: 1,
      explain: "<b>Wyspa stoi na środku.</b> Przewód w rurze osłonowej kładzie się na płycie przed styropianem i wylewką. Później zostaje tylko kucie posadzki."
    }]
  },

  /* 3 ------------------------------------------------------------------ */
  {
    id: "przylacze-uziom",
    title: "Złącze, WLZ i uziom",
    lead: "Prąd przychodzi do złącza na granicy działki. Stamtąd biegnie wewnętrzna linia zasilająca (WLZ) do rozdzielnicy w domu. Obok czeka taśma uziomu, którą zabetonowano w ławach w etapie 04.",
    time: "1–2 dni", team: "elektryk",
    facts: [["WLZ", "np. YKY 5 × 10 mm²", "layers"], ["Uziom", "FeZn 30 × 4 (etap 04)", "rebar"]],
    cost: { min: 1500, max: 3000, note: "WLZ ok. 15–30 m w rurze, szyna wyrównawcza, połączenia" },
    body: `
      <p><strong>WLZ</strong> to kabel ziemny od złącza z licznikiem do rozdzielnicy głównej, ułożony w rurze osłonowej w wykopie z etapu 03 i wprowadzony przez rękaw w ścianie fundamentowej (etap 04). Przekrój dobiera projektant do mocy przyłączeniowej i długości; dla ok. 3 × 25–32 A to zwykle <strong>5 × 10 mm²</strong> miedzi albo więcej (orientacyjnie, sprawdź w projekcie).</p>
      <p><strong>Uziom fundamentowy</strong> z taśmy FeZn 30 × 4 mm jest już w ławach, a jego wyprowadzenia sterczą przy ścianie technicznej. Teraz elektryk łączy je z <strong>główną szyną wyrównawczą</strong> (GSU) w pomieszczeniu technicznym. Do szyny trafiają też: przewód ochronny PE z WLZ, metalowe rury wody, instalacja odgromowa (jeśli będzie) i ochronnik przepięć.</p>
      <p>Pomiar rezystancji uziemienia robi się po podłączeniu i wpisuje do protokołu w ostatnim kroku etapu.</p>`,
    tips: [
      "<b>Rozdzielnica blisko wejścia WLZ.</b> W pomieszczeniu technicznym obok pompy ciepła i rekuperatora skracasz kable i masz jedno miejsce na wszystkie instalacje.",
      "<b>Rura osłonowa z zapasem.</b> Rura Ø 75–110 mm na WLZ pozwoli kiedyś wymienić kabel na grubszy bez kopania.",
      "<b>Szyna wyrównawcza na ścianie, nie w posadzce.</b> Ok. 30–50 cm nad podłogą, opisana, z dostępem do pomiaru.",
      "<b>Podłączenie do sieci zgłasza elektryk.</b> Operator montuje licznik po zgłoszeniu gotowości instalacji z oświadczeniem instalatora (procedurę sprawdź u swojego operatora)."
    ],
    mistakes: [
      "<b>Odcięte wyprowadzenia uziomu.</b> Ekipa od tynków albo izolacji ucięła taśmę równo ze ścianą. Naprawa to kucie i spawanie.",
      "<b>WLZ bez rury, prosto w ziemi i przez fundament.</b> Kabel naciskany przez zasypkę i osiadający grunt pęka, a wymiana wymaga kopania.",
      "<b>Brak połączeń wyrównawczych.</b> Metalowe rury i obudowy bez połączenia z szyną to ryzyko porażenia przy uszkodzeniu izolacji."
    ],
    formal: [
      ["Zgłoszenie gotowości instalacji do przyłączenia", "operator sieci; oświadczenie elektryka z uprawnieniami"],
      ["Umowa kompleksowa (sprzedaż + dystrybucja)", "sprzedawca energii; po montażu licznika"]
    ],
    checklist: [
      "WLZ w rurze osłonowej, przekrój zgodny z projektem",
      "Wyprowadzenia uziomu całe i podłączone do szyny wyrównawczej",
      "Rury wody i elementy metalowe połączone z szyną",
      "Rezystancja uziemienia zmierzona"
    ]
  },

  /* 4 ------------------------------------------------------------------ */
  {
    id: "przewody-przekroje",
    title: "Przewody, przekroje i obwody",
    lead: "Do domu idą przewody miedziane, a o ich grubości decyduje to, co zasilają. Lampy dostają 1,5 mm², gniazda 2,5 mm², a płyta, pompa ciepła i ładowarka przewody pięciożyłowe.",
    time: "zakup 1–2 dni", team: "elektryk",
    facts: [["Oświetlenie", "3 × 1,5 mm², B10", "bulb"], ["Gniazda", "3 × 2,5 mm², B16", "listcheck"]],
    body: `
      <p>W ścianach murowanych standardem jest przewód płaski <strong>YDYp</strong> (pod tynk) albo okrągły <strong>YDY</strong> (w rurach osłonowych, w posadzce, w ścianach z płyt). Żyła ochronna (żółto-zielona) jest zawsze, więc liczy się trzy żyły do obwodu jednofazowego i pięć do trójfazowego.</p>
      <p><strong>Orientacyjny dobór</strong> (ostatecznie decyduje projekt i dokumentacja urządzeń):</p>
      <ul>
        <li>oświetlenie: 3 × 1,5 mm², wyłącznik nadprądowy B10;</li>
        <li>gniazda ogólne: 3 × 2,5 mm², B16, najwyżej ok. 8–10 gniazd na obwód, osobno dla każdej strefy domu;</li>
        <li>piekarnik, zmywarka, pralka, suszarka: osobne obwody 3 × 2,5 mm², B16;</li>
        <li>płyta indukcyjna: 5 × 2,5 mm², 3 × B16 albo zabezpieczenie trójfazowe;</li>
        <li>pompa ciepła: wg instrukcji producenta, zwykle 5 × 2,5–4 mm², C16–C20;</li>
        <li>ładowarka auta 11 kW: 5 × 6 mm² (zapas na długość i ewentualne 22 kW).</li>
      </ul>
      <p>Dla domu ok. 190 m² wychodzi zwykle <strong>25–35 obwodów</strong>. Każdy ma numer w rozdzielnicy i opis na drzwiczkach.</p>`,
    tips: [
      "<b>Kupuj przewody z certyfikatem i z hurtowni.</b> Tanie bębny z niepewnego źródła mają czasem żyły cieńsze niż na nadruku. Sprawdź suwmiarką: 2,5 mm² to ok. 1,8 mm średnicy żyły.",
      "<b>Osobny obwód na każde duże urządzenie.</b> Pralka i suszarka na jednym obwodzie z gniazdami pokoju wybijają bezpiecznik przy każdym prasowaniu.",
      "<b>Dziel gniazda według stref, nie pięter.</b> Jeśli obwód kuchni wybije, w salonie dalej działa router i telewizor.",
      "<b>Dłuższe trasy, grubszy przewód.</b> Do garażu, siłowni czy domku w ogrodzie elektryk sprawdza spadek napięcia. Czasem trzeba 4 mm² zamiast 2,5."
    ],
    mistakes: [
      "<b>Wszystko na 1,5 mm², „bo taniej”.</b> Gniazda na zbyt cienkim przewodzie grzeją się przy czajniku i suszarce do włosów.",
      "<b>Za duży bezpiecznik na cienkim przewodzie.</b> B20 na 2,5 mm² nie ochroni przewodu przed przegrzaniem. Zabezpieczenie dobiera się do przewodu, a nie do tego, żeby „nie wybijało”.",
      "<b>Jeden obwód gniazd na całe piętro.</b> Wybija przy każdym czajniku i odcina wszystko naraz."
    ],
    quiz: [{
      q: "Jaki przewód i zabezpieczenie to typowy obwód gniazd w pokoju?",
      a: ["3 × 1,5 mm² i B16", "3 × 2,5 mm² i B16", "5 × 6 mm² i B32"],
      correct: 1,
      explain: "<b>2,5 mm² i B16 to standard gniazd.</b> 1,5 mm² wystarcza do oświetlenia (B10). 5 × 6 mm² to przewód pod ładowarkę auta."
    }, {
      q: "Pralka i suszarka stoją obok siebie. Jak je zasilić?",
      a: ["Z jednego gniazda podwójnego na obwodzie łazienki", "Każde z osobnego obwodu 2,5 mm², B16", "Przedłużaczem z garażu"],
      correct: 1,
      explain: "<b>Duże grzejące urządzenia mają osobne obwody.</b> Każde pobiera do ok. 2–2,5 kW. Razem na jednym obwodzie wybijają zabezpieczenie."
    }]
  },

  /* 5 ------------------------------------------------------------------ */
  {
    id: "trasy-przewodow",
    title: "Trasy przewodów: pion i poziom",
    lead: "Przewody w ścianach biegną tylko w pionie i poziomie, w stałych pasach. Dzięki temu po latach wiesz, gdzie nie wiercić. Ukośne „skróty” to przyszłe przebite kable.",
    time: "3–4 tyg. (cały dom)", team: "2–3 elektryków",
    facts: [["Pas pod sufitem", "ok. 15–30 cm", "layers"], ["Pas nad podłogą", "ok. 15–30 cm", "layers"]],
    cost: { min: 18000, max: 24000, note: "rozprowadzenie przewodów i puszek, materiał + robocizna, ok. 150–200 punktów" },
    body: `
      <p>Elektrycy pracują po <strong>stanie surowym zamkniętym</strong> (okna już są, etap 07), a przed tynkami (etap 11). Najpierw trasowanie: na ścianach rysują kredą puszki i trasy, a ty to sprawdzasz z projektem. Potem bruzdownica z odkurzaczem, puszki i przewody.</p>
      <p><strong>Zasada stref:</strong> poziomo przewody idą w pasie ok. 15–30 cm pod sufitem (czasem nad podłogą), pionowo od puszki w górę albo w dół do pasa, ok. 10–20 cm od narożników, okien i drzwi. Pod tynk gipsowy w pustaku ceramicznym przewód YDYp przykleja się do ściany albo układa w płytkiej bruździe i mocuje gipsem.</p>
      <p><strong>W posadzce</strong> przewody układa się tylko tam, gdzie trzeba (wyspa, gniazda podłogowe, przejścia), w <strong>rurach osłonowych</strong> na podkładzie betonowym, przed styropianem i podłogówką (etap 11). Na poddaszu część tras idzie po stropie albo w ruszcie sufitu podwieszanego.</p>`,
    decision: {
      question: "Gdzie prowadzić przewody?",
      intro: "Koszt rozprowadzenia jest w kroku. Opcje różnią się czasem pracy i łatwością napraw.",
      chosen: "strefy",
      options: [
        { id: "strefy", name: "Ściany w strefach + posadzka tylko w rurach osłonowych",
          cost: { min: 0, max: 0 }, time: "3–4 tyg.", note: "standard w domu murowanym",
          pros: ["Trasy przewidywalne, łatwo ich unikać przy wierceniu", "Krótkie, tanie przewody YDYp pod tynk", "Posadzka z podłogówką wolna od kabli"],
          cons: ["Dużo bruzdowania i pyłu", "Zmiana po tynkach wymaga kucia"],
          why: "Najprostsze i najtańsze w ścianach z pustaka. Przewody w posadzce tylko tam, gdzie inaczej się nie da, i zawsze w rurach." },
        { id: "posadzka", name: "Większość przewodów w posadzce, w rurach osłonowych",
          cost: { min: 1500, max: 3500 }, time: "+3–5 dni", note: "więcej rur i przewodów",
          pros: ["Mniej bruzd w ścianach", "W rurach można później wymienić przewód"],
          cons: ["Tłok w warstwie pod styropianem, kolizje z kanalizacją i rurami podłogówki", "Dłuższe trasy, więcej materiału", "Wiercenie w podłodze pod meble staje się ryzykowne"],
          why: "Ma sens w ścianach z płyt lub przy pojedynczych pomieszczeniach, gdzie nie chcesz bruzd. Przy podłogówce wymaga dokładnej koordynacji z hydraulikiem." },
        { id: "sufit", name: "Rozprowadzenie w suficie podwieszanym",
          cost: { min: 4000, max: 9000 }, time: "+1 tydz.", note: "z dopłatą za sufit w części pomieszczeń",
          pros: ["Łatwy dostęp, wygodne pod oczka LED", "Krótkie piony do łączników"],
          cons: ["Trzeba zbudować sufit podwieszany (dopłata za zabudowę)", "Obniża wysokość pomieszczeń o 5–10 cm"],
          why: "Ma sens na poddaszu i tam, gdzie i tak planujesz sufit podwieszany pod oświetlenie wpuszczane." }
      ]
    },
    tips: [
      "<b>Zrób zdjęcia i filmy każdej ściany przed tynkiem.</b> Z miarką w kadrze. To najtańsza dokumentacja powykonawcza na świecie.",
      "<b>Bruzdownica z odkurzaczem przemysłowym.</b> Pył z pustaka ceramicznego dostaje się wszędzie, a wąska bruzda (2–3 cm) nie osłabia ściany.",
      "<b>Nie tnij poziomo ścian nośnych głębiej niż trzeba.</b> Przewód płaski mieści się w tynku albo w bruździe na ok. 1–2 cm. Głębokie bruzdy poziome konsultuj z kierownikiem budowy.",
      "<b>Rury osłonowe w posadzce mocuj do podkładu</b> i zostaw w nich pilota (drut lub linkę). Hydraulik i elektryk powinni uzgodnić trasy przed rozłożeniem styropianu."
    ],
    mistakes: [
      "<b>Przewody po skosie przez ścianę.</b> Po latach wiertarka trafia w kabel w miejscu, gdzie „nic nie powinno być”.",
      "<b>Kable luzem w posadzce.</b> Bez rury osłonowej przewód jest dociśnięty styropianem, zakryty jastrychem i niemożliwy do wymiany.",
      "<b>Przewody prowadzone przez kominek i blisko komina.</b> Ciepło niszczy izolację. Zachowaj odstęp wg instrukcji kominka i komina (etap 05)."
    ],
    checklist: [
      "Trasy tylko pionowe i poziome, w pasach",
      "Ściany sfotografowane z miarką przed tynkiem",
      "Rury osłonowe w posadzce zamocowane, z pilotem",
      "Brak przewodów przy kominie i wkładzie kominkowym",
      "Każdy przewód opisany przy rozdzielnicy (numer obwodu)"
    ],
    quiz: [{
      q: "Chcesz zawiesić półkę 50 cm nad łącznikiem. Czy wiercenie jest ryzykowne?",
      a: ["Nie, kable biegną ukośnie do rozdzielnicy", "Tak, nad łącznikiem przewód biegnie pionowo do pasa pod sufitem", "Nie, pod tynkiem nie ma przewodów"],
      correct: 1,
      explain: "<b>Od puszki przewód idzie pionowo.</b> Nad i pod łącznikiem oraz gniazdem nie wierć. Bezpieczne miejsca są obok, poza pionem i pasami poziomymi."
    }]
  },

  /* 6 ------------------------------------------------------------------ */
  {
    id: "puszki-wysokosci",
    title: "Puszki głębokie i wysokości montażu",
    lead: "Puszka to „mieszkanie” gniazda i łącznika. Głęboka puszka mieści zapas przewodu, ściemniacz i moduł smart home. Wysokości ustal raz na cały dom i trzymaj się ich co do centymetra.",
    time: "w trakcie rozprowadzenia", team: "elektryk",
    facts: [["Gniazda", "ok. 30 cm", "listcheck"], ["Łączniki", "ok. 105–110 cm", "listcheck"]],
    body: `
      <p>Standardem w nowych domach są <strong>puszki głębokie</strong> Ø 60 mm, ok. 60–80 mm głębokości. Do łączników z ściemniaczem albo modułem smart home (etap 10) to konieczność. Puszki obok siebie łączy się w ramki wielokrotne w rozstawie <strong>71 mm</strong>, równo w poziomie.</p>
      <p><strong>Wysokości</strong> (zwyczajowe, licz od gotowej posadzki, a nie od stropu):</p>
      <ul>
        <li>gniazda w pokojach: ok. 30 cm;</li>
        <li>łączniki: ok. 105–110 cm, 15–20 cm od ościeżnicy po stronie klamki;</li>
        <li>gniazda nad blatem kuchennym: ok. 105–115 cm (blat ok. 90 cm + 15–20 cm);</li>
        <li>gniazda przy łóżku i biurku: ok. 70–80 cm, nad szafką nocną albo blatem;</li>
        <li>gniazdo pod TV: ok. 30 cm albo za telewizorem ok. 110–130 cm (wg uchwytu).</li>
      </ul>
      <p>W <strong>łazience</strong> obowiązują strefy wokół wanny i prysznica. Gniazdo 230 V wolno montować poza strefą 2, czyli co najmniej ok. 60 cm od krawędzi wanny w poziomie, i zawsze za wyłącznikiem różnicowoprądowym 30 mA (szczegóły sprawdź z elektrykiem przy wannie wolnostojącej).</p>`,
    tips: [
      "<b>Licz od gotowej posadzki.</b> Na stanie surowym podłoga leży ok. 25 cm niżej (styropian 15 cm, jastrych 6,5 cm i okładzina). Elektryk musi znać poziom ±0,00 z etapu 04 albo z reperu na ścianie.",
      "<b>Puszki osadzaj na równo z przyszłym tynkiem.</b> Głęboko schowana puszka to za krótkie śruby ramki, wystająca to krzywe gniazdo.",
      "<b>Zostaw 15–20 cm zapasu przewodu w puszce.</b> Elektryk przy białym montażu musi mieć z czego zrobić końcówki.",
      "<b>Puszki z wieczkiem albo zatyczką na czas tynków.</b> Tynkarz zakleja je gipsem w kilka minut, wydłubywanie trwa godzinami."
    ],
    mistakes: [
      "<b>Wysokości mierzone od stropu.</b> Po wylewkach gniazda lądują 5 cm nad podłogą, a łączniki na wysokości bioder.",
      "<b>Płytkie puszki pod ściemniacze.</b> Moduł się nie mieści, a ramka odstaje od ściany.",
      "<b>Gniazdo nad wanną „bo tam suszarka”.</b> To strefa zabroniona. Suszarkę podłącza się przy lustrze, poza strefą 2."
    ],
    checklist: [
      "Wysokości liczone od poziomu gotowej posadzki",
      "Puszki głębokie pod ściemniacze i moduły smart",
      "Ramki wielokrotne w osi, rozstaw 71 mm",
      "Puszki na licu przyszłego tynku, zabezpieczone",
      "Łazienka: gniazda poza strefą wanny"
    ],
    quiz: [{
      q: "Stan surowy, posadzki jeszcze nie ma. Gniazdo ma być 30 cm nad gotową podłogą. Na jakiej wysokości od stropu ustawić puszkę?",
      a: ["30 cm", "ok. 55 cm (30 cm + warstwy podłogi ok. 25 cm)", "ok. 10 cm"],
      correct: 1,
      explain: "<b>Podłoga „urośnie” o ok. 25 cm.</b> Styropian 15 cm, jastrych z podłogówką i okładzina. Dlatego wysokości liczy się od poziomu ±0,00, a nie od płyty."
    }]
  },

  /* 7 ------------------------------------------------------------------ */
  {
    id: "obwody-sily",
    title: "Płyta indukcyjna, pompa ciepła, ładowarka auta",
    lead: "Trzy największe odbiorniki w domu biorą razem ponad 20 kW. Każdy dostaje własny przewód pięciożyłowy, własne zabezpieczenie i miejsce w rozdzielnicy.",
    time: "2–3 dni", team: "elektryk",
    facts: [["Ładowarka 11 kW", "5 × 6 mm²", "house"], ["Indukcja", "5 × 2,5 mm²", "bulb"]],
    cost: { min: 2000, max: 3500, note: "przewody, rury i zabezpieczenia: indukcja, PC, ładowarka, brama, basen (zapas)" },
    body: `
      <p><strong>Płyta indukcyjna</strong> ok. 7–7,5 kW: puszka przyłączeniowa za szafką pod płytą, przewód 5 × 2,5 mm². <strong>Pompa ciepła</strong> (etap 09): przewód do jednostki zewnętrznej i wewnętrznej wg instrukcji producenta, często z dodatkowym obwodem grzałki i sygnałem od operatora lub z PV. <strong>Napęd bramy</strong> i <strong>rolety</strong>: przewody do puszek przy nadprożach (etap 07).</p>
      <p><strong>Ładowarka auta</strong> w garażu: nawet jeśli auto elektryczne pojawi się za kilka lat, przewód <strong>5 × 6 mm²</strong> z rozdzielnicy do ściany garażu kosztuje teraz kilkaset złotych, a później kucie, kurz i kilka tysięcy. Ładowarka 11 kW pobiera 3 × 16 A, czyli połowę typowej mocy przyłączeniowej. Pomoże <strong>dynamiczne zarządzanie mocą</strong>: ładowarka zwalnia, gdy w domu pracuje indukcja albo pompa ciepła.</p>
      <p><strong>Basen i ogród</strong> (etap 15): zostaw w rozdzielnicy miejsce i wyprowadź rurę osłonową do ogrodu. Kabel ziemny do pompy basenowej i lamp ułożysz przy pracach ziemnych.</p>`,
    decision: {
      question: "Co z ładowarką auta w garażu?",
      intro: "Koszt przygotowania przewodu jest w kroku. Opcje to dopłata albo oszczędność.",
      chosen: "przygotowanie",
      options: [
        { id: "przygotowanie", name: "Przygotowanie: przewód 5 × 6 mm², miejsce w rozdzielnicy",
          cost: { min: 0, max: 0 }, time: "pół dnia", note: "ładowarka dokupiona przy aucie",
          pros: ["Tanie teraz, bez kucia później", "Ładowarkę wybierzesz pod konkretne auto"],
          cons: ["Do czasu zakupu ładujesz z gniazda 230 V, wolno"],
          why: "Najlepszy stosunek kosztu do elastyczności. Przewód to kilkaset złotych, a ładowarki szybko tanieją i zmieniają funkcje." },
        { id: "wallbox", name: "Ładowarka ścienna 11 kW od razu, z zarządzaniem mocą",
          cost: { min: 3500, max: 6500 }, time: "1 dzień", note: "urządzenie + montaż + zabezpieczenia",
          pros: ["Gotowe od pierwszego dnia z autem elektrycznym", "Współpraca z PV i taryfą nocną"],
          cons: ["Wydatek w najdroższej fazie budowy", "Może nie pasować do przyszłego auta i aplikacji"],
          why: "Ma sens, gdy auto elektryczne już masz albo kupujesz w ciągu roku." },
        { id: "brak", name: "Tylko zwykłe gniazdo 230 V w garażu",
          cost: { min: -600, max: -300 }, time: "—", note: "bez przewodu 5 × 6",
          pros: ["Najtaniej teraz"],
          cons: ["Ładowanie ok. 2,3 kW, auto ładuje się całą noc i dłużej", "Przewód pod ładowarkę później to kucie przez tynk i garaż"],
          why: "Tylko gdy masz pewność, że w tym domu nie będzie auta elektrycznego." }
      ]
    },
    tips: [
      "<b>Sprawdź instrukcję pompy ciepła przed rozprowadzeniem.</b> Producent podaje przekrój, zabezpieczenie i czasem wymaga sygnału blokady albo osobnej grzałki.",
      "<b>Ładowarka z ochroną różnicowoprądową.</b> Wymagany jest wyłącznik typu A z wykrywaniem prądu stałego 6 mA albo typ B. Wiele ładowarek ma to w środku, sprawdź w karcie urządzenia.",
      "<b>Przewód ładowarki przy bramie, ok. 1–1,3 m nad posadzką,</b> po stronie gniazda ładowania twojego auta. Obok zostaw rurę z LAN, jeśli ładowarka ma się łączyć z siecią.",
      "<b>Moc przyłączeniowa:</b> przy 3 × 25 A pompa ciepła, indukcja i ładowarka naraz to już dużo. Zarządzanie mocą jest tańsze niż zwiększanie przyłącza."
    ],
    mistakes: [
      "<b>Płyta indukcyjna na przewodzie 3 × 2,5 z gniazda.</b> Pracuje z ograniczoną mocą albo wybija zabezpieczenie.",
      "<b>Brak rury do ogrodu.</b> Basen, pergola i oświetlenie ogrodu wymagają kabli z domu. Bez przepustu kuje się fundament i elewację.",
      "<b>Pompa ciepła na zgadywanym przekroju.</b> Niektóre jednostki potrzebują 3 × 20 A, inne 1 × 16 A. Instrukcja przed bruzdą, nie po."
    ],
    checklist: [
      "Indukcja: przewód 5 × 2,5 mm² do puszki za szafką",
      "Pompa ciepła: przewody wg instrukcji producenta",
      "Garaż: przewód 5 × 6 mm² pod ładowarkę, opisany",
      "Brama i rolety: przewody w puszkach przy nadprożach",
      "Rura osłonowa do ogrodu (basen, oświetlenie) wyprowadzona"
    ]
  },

  /* 8 ------------------------------------------------------------------ */
  {
    id: "oswietlenie",
    title: "Oświetlenie: LED, taśmy, ściemniacze",
    lead: "Dobre światło to kilka warstw: ogólne, robocze i nastrojowe, każde z osobnego łącznika. LED-y w ciepłej barwie, ściemniacze w salonie i sypialni, a na zewnątrz przepusty pod lampy elewacji i ogrodu.",
    time: "w trakcie rozprowadzenia + montaż po malowaniu", team: "elektryk",
    facts: [["Barwa w domu", "2700–3000 K", "bulb"], ["Oddawanie barw", "CRI ≥ 90", "bulb"]],
    cost: { min: 4500, max: 7000, note: "oprawy wpuszczane, taśmy LED z profilami i zasilaczami, ściemniacze, oprawy łazienki i garażu" },
    body: `
      <p><strong>Oświetlenie ogólne:</strong> wypust na środku albo oczka wpuszczane w sufit (na poddaszu i w suficie podwieszanym). <strong>Robocze:</strong> nad blatem kuchennym (taśma pod szafkami), nad wyspą, przy lustrze, w garażu. <strong>Nastrojowe:</strong> taśmy w profilach, kinkiety, podświetlenie schodów, światło przy kominku.</p>
      <p><strong>Taśmy LED</strong> to niskie napięcie 24 V: potrzebują zasilacza (w dostępnym miejscu, nie pod tynkiem) i profilu aluminiowego z kloszem. Przy długich odcinkach zasilanie z obu końców. <strong>Ściemniacze</strong> muszą pasować do źródła: „LED” na obudowie, a dla taśm sterownik po stronie 24 V.</p>
      <p><strong>Zewnątrz:</strong> kinkiety przy wejściu, w garażu i na tarasie (elewacja, etap 12), oświetlenie podjazdu i ogrodu (etap 15). Teraz wyprowadzasz <strong>przewody do puszek na elewacji</strong> i rurę do ogrodu. Lampy wiszące nad stołem i wyspą wybierasz przy umeblowaniu (etap 14), ale ich punkty muszą być już teraz.</p>`,
    decision: {
      question: "Jak oświetlić strefę dzienną?",
      intro: "Koszt opraw podstawowych jest w kroku. Lampy dekoracyjne i wiszące kupisz w etapie 14.",
      chosen: "warstwy",
      options: [
        { id: "warstwy", name: "Wypusty + taśmy LED w profilach + ściemniacze",
          cost: { min: 0, max: 0 }, time: "—", note: "2–3 obwody światła w salonie",
          pros: ["Światło dopasowane do pory dnia i czynności", "Taśmy i ściemniacze tanieją, a robią duży efekt", "Lampy dekoracyjne można zmienić bez kucia"],
          cons: ["Więcej łączników i przewodów", "Zasilacze taśm trzeba gdzieś schować z dostępem"],
          why: "Daje elastyczność za rozsądne pieniądze. Pasuje do salonu z kominkiem i otwartej kuchni z wyspą." },
        { id: "oczka", name: "Gęste oczka LED w suficie podwieszanym",
          cost: { min: 4000, max: 9000 }, time: "+1 tydz.", note: "sufit podwieszany + 30–50 opraw",
          pros: ["Równe, „czyste” światło", "Brak lamp wiszących w polu widzenia"],
          cons: ["Wymaga sufitu podwieszanego", "Oświetla podłogę, nie ściany: wnętrze bywa płaskie", "Wymiana opraw zintegrowanych to wymiana całości"],
          why: "Ma sens w kuchni i korytarzach. W całym domu łatwo przesadzić i stworzyć efekt biura." },
        { id: "szyna", name: "Szynoprzewody magnetyczne",
          cost: { min: 3000, max: 8000 }, time: "+2–3 dni", note: "szyny wpuszczane lub natynkowe + moduły",
          pros: ["Moduły przestawiasz bez elektryka", "Nowoczesny wygląd"],
          cons: ["Drogie moduły jednego producenta", "Szyny wpuszczane wymagają sufitu podwieszanego"],
          why: "Ma sens nad wyspą, w salonie z ruchomą aranżacją i przy galerii obrazów." }
      ]
    },
    tips: [
      "<b>Barwa 2700–3000 K w strefach dziennych i sypialni,</b> 3000–4000 K w garażu, siłowni i pomieszczeniu technicznym. Mieszanie barw w jednym pomieszczeniu wygląda źle.",
      "<b>CRI ≥ 90 w kuchni i łazience.</b> Przy gorszym oddawaniu barw jedzenie i skóra wyglądają szaro.",
      "<b>Oprawy łazienkowe ze szczelnością IP44 i wyżej,</b> nad wanną IP65. W strefie 0 i 1 tylko oprawy na bardzo niskie napięcie, zgodne z instrukcją.",
      "<b>Zasilacz taśmy z zapasem 20–30% mocy</b> i z dostępem (szafka, rewizja w suficie). Zasilacz pod tynkiem to pewna awaria za kilka lat.",
      "<b>Przewody pod kinkiety na elewacji</b> zostaw przed ociepleniem (etap 12). Puszkę osadza się w kostce montażowej w styropianie, nie w samym styropianie."
    ],
    mistakes: [
      "<b>Jeden łącznik na całe światło w salonie.</b> Wieczorem albo „jak na sali operacyjnej”, albo ciemno.",
      "<b>Ściemniacz do tradycyjnych żarówek z LED-ami.</b> Migotanie, buczenie i krótka żywotność.",
      "<b>Taśma bez profilu.</b> Widać pojedyncze diody i taśma przegrzewa się, tracąc jasność po roku.",
      "<b>Zapomniany punkt nad stołem.</b> Stół stoi 1 m od wypustu i lampa wisi na „pająku” z haczyka."
    ],
    checklist: [
      "W salonie i sypialni min. 2 obwody światła",
      "Ściemniacze dobrane do LED",
      "Zasilacze taśm w dostępnych miejscach",
      "Wypusty nad stołem i wyspą zgodne z układem mebli",
      "Przewody pod kinkiety na elewacji i rura do ogrodu"
    ],
    quiz: [{
      q: "Gdzie zamontować zasilacz taśmy LED pod szafkami kuchennymi?",
      a: ["Pod tynkiem, żeby go nie było widać", "W dostępnym miejscu, np. nad szafkami albo w cokole", "W puszce razem z gniazdem"],
      correct: 1,
      explain: "<b>Zasilacz się grzeje i kiedyś zepsuje.</b> Musi mieć przewiew i dostęp do wymiany bez kucia."
    }]
  },

  /* 9 ------------------------------------------------------------------ */
  {
    id: "niskopradowe-lan",
    title: "Sieć LAN i Wi-Fi",
    lead: "Wi-Fi jest dobre do telefonu, ale telewizor, komputer do pracy i punkty dostępowe najlepiej działają po kablu. Przewody LAN w gwieździe do jednej szafki to inwestycja na 30 lat.",
    time: "2–4 dni (z elektrycznym rozprowadzeniem)", team: "elektryk albo instalator teletechniki",
    facts: [["Kabel", "skrętka kat. 6 U/UTP", "layers"], ["Gniazd LAN", "ok. 12–18", "layers"]],
    cost: { min: 3000, max: 5000, note: "skrętka, gniazda, szafka RACK z panelem, 3–4 punkty pod Wi-Fi na suficie; bez switcha i routera" },
    body: `
      <p>Wszystkie przewody LAN biegną <strong>gwiazdą do jednej szafki</strong> (RACK ścienna 9–12U albo szafka multimedialna) w pomieszczeniu technicznym. Tam kończy się też rura ze światłowodem z etapu 03. Każdy kabel kończy się na <strong>panelu krosowym</strong> z opisanym numerem.</p>
      <p>Gniazda LAN: przy TV (2), w gabinecie i pokojach (1–2), w siłowni, przy ładowarce i bramie (opcjonalnie). Do tego <strong>3–4 kable pod punkty Wi-Fi na sufitach</strong> (parter, piętro, garaż albo taras) zasilane po kablu (PoE): jeden router w szafce nie przebije się przez strop i ściany z pustaka.</p>
      <p>Skrętka biegnie w tych samych pasach co przewody 230 V, ale <strong>w odstępie ok. 10–20 cm</strong> albo w rurze osłonowej, i nie w tej samej puszce co gniazdo elektryczne.</p>`,
    decision: {
      question: "Jaka sieć w domu?",
      intro: "Koszt okablowania kat. 6 jest w kroku. Opcje to dopłata albo oszczędność.",
      chosen: "kat6",
      options: [
        { id: "kat6", name: "Skrętka kat. 6 U/UTP gwiazdą + punkty Wi-Fi na suficie",
          cost: { min: 0, max: 0 }, time: "2–4 dni", note: "1 Gb/s, w praktyce do 2,5–5 Gb/s na krótkich odcinkach",
          pros: ["Stabilne łącze dla TV, pracy i kamer", "PoE zasila punkty Wi-Fi i kamery jednym kablem", "Rozsądna cena"],
          cons: ["Trzeba zaplanować miejsce na szafkę z wentylacją"],
          why: "Standard na dziś i na długo. Wystarcza dla światłowodu domowego i transmisji 4K." },
        { id: "kat6a", name: "Skrętka kat. 6A ekranowana",
          cost: { min: 800, max: 2000 }, time: "+1 dzień", note: "10 Gb/s do 100 m",
          pros: ["Zapas na 10 Gb/s", "Lepsza odporność na zakłócenia"],
          cons: ["Grubsza i sztywniejsza, trudniejsza w puszkach", "Ekran trzeba poprawnie uziemić"],
          why: "Ma sens, gdy pracujesz z dużymi plikami albo chcesz zapasu na kolejną dekadę." },
        { id: "wifi", name: "Tylko Wi-Fi mesh, bez kabli",
          cost: { min: -3000, max: -2000 }, time: "—", note: "zostaje światłowód do routera",
          pros: ["Najtaniej przy budowie", "Brak szafki i kabli"],
          cons: ["Spada prędkość przez stropy i ściany z pustaka", "Kamery i TV na Wi-Fi gubią połączenie", "Dołożenie kabli po tynkach to kucie"],
          why: "Ma sens w małym domu. W domu ok. 190 m² z garażem i stropem żelbetowym zwykle zawodzi." }
      ]
    },
    tips: [
      "<b>Licz 2 kable LAN przy TV</b> i co najmniej 1 w każdym pokoju. Dołożenie kabla w trakcie rozprowadzenia kosztuje ok. 100–150 zł, później kilka razy więcej.",
      "<b>Szafka z wentylacją i gniazdem 230 V.</b> Router, switch PoE i rejestrator kamer grzeją się. Zostaw 2–3 gniazda w szafce na osobnym obwodzie.",
      "<b>Kabel pod punkt Wi-Fi w środku domu,</b> na suficie korytarza parteru i poddasza. Puszka z zapasem kabla ok. 1 m.",
      "<b>Opis na obu końcach.</b> Numer gniazda w pokoju = numer portu na panelu. Bez tego szukanie kabla zajmuje godzinę."
    ],
    mistakes: [
      "<b>Skrętka w jednej rurze z przewodem 230 V.</b> Zakłócenia i niezgodność z zasadami instalacji.",
      "<b>Kable LAN kończone wtyczkami w puszce.</b> Ma być gniazdo z jednej strony i panel krosowy z drugiej.",
      "<b>Szafka w szafie na ubrania bez wentylacji.</b> Router i switch przegrzewają się i restartują w lecie."
    ],
    checklist: [
      "Wszystkie kable LAN gwiazdą do szafki",
      "Kable pod punkty Wi-Fi na sufitach parteru, poddasza i garażu",
      "Odstęp od przewodów 230 V albo osobne rury",
      "Szafka z wentylacją i gniazdami 230 V",
      "Każdy kabel opisany i zmierzony testerem"
    ]
  },

  /* 10 ----------------------------------------------------------------- */
  {
    id: "alarm-monitoring",
    title: "Alarm, monitoring, wideodomofon",
    lead: "Kable do czujek, kamer i wideodomofonu kładzie się razem z elektryką, przed tynkami. Urządzenia możesz dokupić później, ale przewodów po tynkach już nie dołożysz bez kucia.",
    time: "2–3 dni okablowania + 1–2 dni montażu", team: "instalator systemów zabezpieczeń",
    facts: [["Czujki", "ok. 10–14", "shield"], ["Kamery", "4 punkty PoE", "shield"]],
    cost: { min: 3500, max: 5500, note: "alarm przewodowy (centrala, manipulator, czujki, sygnalizator), wideodomofon IP, kable pod 4 kamery" },
    body: `
      <p><strong>Alarm przewodowy:</strong> czujki ruchu w pomieszczeniach z oknami na parterze i w garażu, kontaktrony na drzwiach i oknach tarasowych, manipulator przy wejściu i w garażu, sygnalizator zewnętrzny. Centrala stoi w szafce lub obok RACK, z akumulatorem i powiadomieniem przez sieć.</p>
      <p><strong>Monitoring:</strong> 4 kamery (wjazd, wejście, taras, ogród) zasilane po skrętce (PoE) z switcha w szafce. Kable kończ w puszce na elewacji, ok. 2,5–3 m nad terenem, pod okapem. <strong>Wideodomofon</strong> przy furtce: skrętka i przewód do elektrozaczepu w rurze od domu do słupka ogrodzenia (etap 15).</p>
      <p><strong>Smart home</strong> (etap 10) to temat na osobny krok: teraz wystarczy, że puszki są głębokie, przy rozdzielnicy jest miejsce na moduły, a do rolet, bramy i pompy ciepła prowadzą przewody, które sterownik później obsłuży.</p>`,
    decision: {
      question: "Monitoring: kamery teraz czy później?",
      intro: "W koszcie kroku są kable pod 4 kamery. Opcje to dopłata za same kamery z rejestratorem.",
      chosen: "kable",
      options: [
        { id: "kable", name: "Kable pod kamery teraz, kamery po przeprowadzce",
          cost: { min: 0, max: 0 }, time: "—", note: "puszki pod okapem, kable w szafce",
          pros: ["Nie wydajesz w najdroższej fazie budowy", "Kamery wybierzesz, gdy ogród i oświetlenie będą gotowe"],
          cons: ["Przez pierwsze miesiące dom chroni tylko alarm"],
          why: "Kable są tanie i zostają na lata, a kamery szybko się zmieniają. Najpierw alarm i wideodomofon." },
        { id: "kamery", name: "4 kamery IP PoE z rejestratorem od razu",
          cost: { min: 3000, max: 5500 }, time: "1–2 dni", note: "kamery 4–8 Mpx + rejestrator + dysk",
          pros: ["Podgląd budowy w końcowej fazie", "Gotowe od dnia przeprowadzki"],
          cons: ["Wydatek w fazie wykończenia", "Ustawienie kamer przed urządzeniem ogrodu"],
          why: "Ma sens, gdy na budowie zostaje drogie wyposażenie albo działka stoi na uboczu." },
        { id: "wifi", name: "Kamery Wi-Fi na akumulator, bez kabli",
          cost: { min: -800, max: -400 }, time: "—", note: "oszczędność na kablach",
          pros: ["Montaż w każdej chwili", "Bez kabli na elewacji"],
          cons: ["Ładowanie baterii i zrywanie połączenia", "Często abonament w chmurze"],
          why: "Ma sens jako uzupełnienie w ogrodzie i domku dla dzieci. Jako główny monitoring jest zawodne." }
      ]
    },
    tips: [
      "<b>Czujka w rogu pomieszczenia, ok. 2,2–2,4 m nad podłogą,</b> nie naprzeciw kominka i okna od słońca. Fałszywe alarmy zniechęcają do używania systemu.",
      "<b>Kontaktron w oknie tarasowym i drzwiach</b> zaplanuj z dostawcą okien (etap 07). Przewód musi wyjść przy ramie, zanim przyjdą tynki.",
      "<b>Zasilanie kamer po skrętce (PoE),</b> bez osobnych zasilaczy na elewacji. Switch PoE z zasilaniem awaryjnym razem z alarmem.",
      "<b>Rura od domu do furtki</b> (Ø 40–50 mm, z linką) pod wideodomofon, elektrozaczep i oświetlenie słupka. Zrób ją przy przyłączach albo przed podjazdem."
    ],
    mistakes: [
      "<b>Czujka ruchu nad kominkiem albo nad grzejnikiem.</b> Strumień ciepłego powietrza wywołuje alarm w środku nocy.",
      "<b>Kamera na wysokości 4–5 m.</b> Widzi czubki głów, nie twarze. 2,5–3 m to dobry kompromis.",
      "<b>Wideodomofon tylko przy drzwiach.</b> Gość stoi przy furtce 25 m dalej, a ty idziesz w kapciach przez podjazd."
    ],
    checklist: [
      "Kable do czujek, kontaktronów i manipulatorów przed tynkami",
      "4 kable pod kamery, puszki pod okapem",
      "Rura do furtki pod wideodomofon i elektrozaczep",
      "Centrala alarmu i switch PoE przy szafce RACK",
      "Puszki głębokie i przewody pod sterowanie (etap 10)"
    ]
  },

  /* 11 ----------------------------------------------------------------- */
  {
    id: "rozdzielnica",
    title: "Rozdzielnica: RCD, nadprądowe, przepięcia",
    lead: "Rozdzielnica to centrum dowodzenia. Wyłączniki nadprądowe chronią przewody, różnicowoprądowe chronią ludzi, a ochronnik przepięć chroni sprzęt przed skutkami burzy.",
    time: "obudowa w stanie surowym, aparatura 2–3 dni przed białym montażem", team: "elektryk",
    facts: [["RCD", "30 mA, typ A", "shield"], ["Ochronnik", "typ 1+2 (T1+T2)", "bulb"]],
    cost: { min: 5000, max: 8000, note: "obudowa 4–5 rzędów, wyłącznik główny, 4–5 RCD, ok. 30 nadprądowych, SPD T1+T2, listwy, opis" },
    body: `
      <p><strong>Wyłącznik główny</strong> odcina cały dom. Za nim <strong>ochronnik przepięć (SPD) typu 1+2</strong>: odprowadza do uziemienia przepięcia z sieci i od wyładowań w pobliżu. Przy fotowoltaice (etap 10) to szczególnie ważne, bo panele na dachu dokładają drugą drogę przepięć. Strona DC falownika ma własne ochronniki.</p>
      <p><strong>Wyłączniki różnicowoprądowe (RCD) 30 mA</strong> wykrywają prąd uciekający przez człowieka i wyłączają obwód w ułamku sekundy. Wymagane są dla gniazd i łazienki. Dzielisz obwody na <strong>4–5 grup</strong>, każda za swoim RCD: np. kuchnia, łazienki, pokoje parteru, poddasze, garaż i zewnętrzne. Typ <strong>A</strong> (nie AC) ze względu na elektronikę, falownik i ładowarkę.</p>
      <p><strong>Wyłączniki nadprądowe</strong> (B10, B16, C16 itd.) chronią przewody przed przeciążeniem i zwarciem. Każdy obwód ma swój, opisany. Dla domu ok. 190 m² rozdzielnica ma 4–5 rzędów po 12–18 modułów.</p>`,
    decision: {
      question: "Jak rozdzielić ochronę różnicowoprądową?",
      intro: "Koszt rozdzielnicy z grupowymi RCD jest w kroku. Opcje to dopłata.",
      chosen: "grupy",
      options: [
        { id: "grupy", name: "RCD grupowe: 4–5 grup obwodów",
          cost: { min: 0, max: 0 }, time: "—", note: "standard",
          pros: ["Rozsądny koszt", "Usterka w łazience nie wyłącza kuchni i lodówki", "Prosta i czytelna rozdzielnica"],
          cons: ["Wyłączenie RCD odcina kilka obwodów naraz", "Szukanie usterki trwa dłużej"],
          why: "Dobry kompromis. Lodówka, alarm i szafka RACK w osobnej grupie, a obwody kuchni oddzielone od łazienek." },
        { id: "rcbo", name: "RCBO: wyłącznik różnicowo-nadprądowy na każdy obwód",
          cost: { min: 2500, max: 5000 }, time: "—", note: "ok. 25–30 aparatów RCBO",
          pros: ["Usterka wyłącza tylko jeden obwód", "Łatwo znaleźć przyczynę", "Mniej przypadkowych wyłączeń"],
          cons: ["Droższe aparaty", "Większa rozdzielnica"],
          why: "Ma sens dla obwodów krytycznych (lodówka, zamrażarka, alarm, pompa ciepła) albo przy dużej liczbie elektroniki." }
      ]
    },
    tips: [
      "<b>Rozdzielnica na wysokości oczu, ok. 1,4–1,6 m,</b> w miejscu z dostępem i światłem, nie za szafką pralki.",
      "<b>Opisz każdy aparat</b> czytelnie, drukiem, i wklej schemat na wewnętrznej stronie drzwiczek.",
      "<b>Testuj RCD przyciskiem T co pół roku.</b> Mechanizm, który nie pracuje latami, może się zastać.",
      "<b>Zostaw 20–30% wolnego miejsca:</b> ładowarka auta, PV, basen, smart home. Rozbudowa ciasnej rozdzielnicy to wymiana obudowy.",
      "<b>Lodówka i zamrażarka w osobnej grupie RCD</b> albo na RCBO. Wyłączenie łazienki w czasie wyjazdu nie rozmrozi wtedy jedzenia."
    ],
    mistakes: [
      "<b>Jeden RCD na cały dom.</b> Przy każdej usterce gaśnie wszystko, łącznie z lodówką i alarmem.",
      "<b>RCD typu AC przy falowniku i ładowarce.</b> Może nie zadziałać przy prądach z elektroniki. Bezpieczny standard to typ A, przy ładowarce typ A z detekcją DC albo typ B.",
      "<b>Brak ochronnika przepięć.</b> Jedna burza potrafi spalić falownik, pompę ciepła i router: kilkanaście tysięcy złotych."
    ],
    formal: [
      ["Schemat rozdzielnicy", "elektryk; zostaje w drzwiczkach i w dokumentacji domu"]
    ],
    checklist: [
      "Wyłącznik główny i ochronnik przepięć T1+T2",
      "4–5 grup RCD 30 mA typ A",
      "Każdy obwód z opisem i zabezpieczeniem zgodnym z przekrojem",
      "20–30% wolnych modułów",
      "Schemat w drzwiczkach"
    ],
    quiz: [{
      q: "Co chroni wyłącznik różnicowoprądowy (RCD) 30 mA?",
      a: ["Przewody przed przegrzaniem", "Ludzi przed porażeniem przy upływie prądu", "Sprzęt przed przepięciem w czasie burzy"],
      correct: 1,
      explain: "<b>RCD chroni ludzi.</b> Przewody chroni wyłącznik nadprądowy, a sprzęt przed burzą – ochronnik przepięć (SPD)."
    }, {
      q: "Dlaczego dzielić obwody na kilka grup RCD?",
      a: ["Bo tak jest taniej", "Żeby usterka w jednym miejscu nie wyłączała całego domu", "Żeby zmniejszyć rachunki za prąd"],
      correct: 1,
      explain: "<b>Selektywność.</b> Gdy w łazience zawilgocone gniazdo spowoduje wyłączenie, lodówka, alarm i router w innej grupie dalej działają."
    }]
  },

  /* 12 ----------------------------------------------------------------- */
  {
    id: "bialy-montaz",
    title: "Biały montaż: gniazda, łączniki, oprawy",
    lead: "Po tynkach, gładziach i malowaniu elektryk wraca, żeby założyć gniazda, łączniki, oprawy i aparaturę w rozdzielnicy. To ostatnie wejście ekipy przed pomiarami.",
    time: "3–5 dni", team: "1–2 elektryków",
    facts: [["Osprzęt", "ok. 120–150 szt.", "listcheck"]],
    cost: { min: 2500, max: 4500, note: "gniazda, łączniki i ramki ze średniej półki + montaż" },
    body: `
      <p>Biały montaż robi się <strong>po malowaniu</strong> (etap 13), ale przed układaniem podłóg drewnianych lub z ochroną posadzek. Elektryk wydłubuje zatyczki, skraca przewody, montuje osprzęt w ramkach, podłącza oprawy i taśmy, a w rozdzielnicy zakłada aparaturę i opisy.</p>
      <p>Osprzęt wybierz z jednej serii producenta dla całego domu: ramki, gniazda z USB, łączniki schodowe i krzyżowe, gniazda LAN, ściemniacze. Seria z ramkami wielokrotnymi pozwala ustawić gniazdo, łącznik i LAN w jednej linii.</p>`,
    tips: [
      "<b>Kup osprzęt z jednej serii i z zapasem 5–10%.</b> Za kilka lat ta sama ramka może być niedostępna.",
      "<b>Gniazda z bolcem ochronnym, z przesłonami torów prądowych</b> w pokoju dziecięcym i wszędzie, gdzie bywają dzieci.",
      "<b>Gniazda zewnętrzne IP44 z klapką</b> na tarasie i przy podjeździe, za RCD i z łącznikiem w środku domu.",
      "<b>Sprawdź każdy łącznik i gniazdo</b> przy elektryku: tester gniazd kosztuje kilkadziesiąt złotych i pokazuje odwróconą fazę albo brak przewodu ochronnego."
    ],
    mistakes: [
      "<b>Biały montaż przed malowaniem.</b> Ramki do wymiany albo do oklejania, a farba na mechanizmie łącznika.",
      "<b>Krzywe ramki.</b> Widać je z daleka, zwłaszcza w zestawach wielokrotnych. Poziomica przy każdym montażu.",
      "<b>Tanie osprzęty z marketu w całym domu.</b> Luźne styki grzeją się, a gniazda wypadają przy wyciąganiu wtyczki."
    ],
    checklist: [
      "Osprzęt z jednej serii, ramki w poziomie",
      "Gniazda z przesłonami w pokoju dziecięcym",
      "Gniazda zewnętrzne IP44 za RCD",
      "Każde gniazdo sprawdzone testerem",
      "Oprawy i taśmy działają, ściemniacze bez migotania"
    ]
  },

  /* 13 ----------------------------------------------------------------- */
  {
    id: "pomiary-odbior",
    title: "Pomiary i odbiór instalacji",
    lead: "Instalację kończy protokół z pomiarów elektryka z uprawnieniami. To dowód, że zabezpieczenia zadziałają, i dokument potrzebny przy zgłoszeniu zakończenia budowy oraz w ubezpieczalni.",
    time: "1 dzień + 1–3 dni na protokół", team: "elektryk z uprawnieniami (świadectwo kwalifikacyjne E i D)",
    facts: [["Izolacja", "pomiar każdego obwodu", "check"], ["RCD", "test czasu i prądu", "shield"]],
    cost: { min: 800, max: 1500, note: "pomiary i protokół dla ok. 30 obwodów, uziemienie, SPD" },
    body: `
      <p>Pomiary obejmują zwykle: <strong>ciągłość przewodów ochronnych</strong> i połączeń wyrównawczych, <strong>rezystancję izolacji</strong> każdego obwodu, <strong>impedancję pętli zwarcia</strong> (czy zabezpieczenie zadziała dość szybko), <strong>działanie RCD</strong> (prąd i czas), <strong>rezystancję uziemienia</strong> i sprawdzenie kolejności faz. Zakres sprawdź z kierownikiem budowy.</p>
      <p>Dostajesz <strong>protokół z pomiarów</strong>, <strong>schemat rozdzielnicy</strong> i najlepiej <strong>rzuty powykonawcze</strong> (albo zdjęcia ścian z kroku o trasach). Protokół dołączasz do dokumentów przy zakończeniu budowy (etap 16) i pokazujesz przy odbiorze domu przez bank.</p>
      <p>Pomiary okresowe instalacji w domu jednorodzinnym robi się co kilka lat, zwykle przy przeglądzie budynku (sprawdź aktualny wymóg w przepisach i u ubezpieczyciela).</p>`,
    tips: [
      "<b>Pomiary przed zamieszkaniem, nie „kiedyś”.</b> Wykryta usterka izolacji przed meblami to wymiana jednego przewodu, po meblach to remont.",
      "<b>Poproś o wartości, nie tylko „pozytywnie”.</b> Protokół ma mieć liczby dla każdego obwodu i podpis z numerem uprawnień.",
      "<b>Skompletuj teczkę elektryki:</b> projekt, rzuty powykonawcze, zdjęcia ścian, schemat rozdzielnicy, protokół, karty gwarancyjne opraw i osprzętu.",
      "<b>Naciśnij przycisk T na każdym RCD</b> przy elektryku. Jeśli coś nie gaśnie, to znak, że obwód jest w złej grupie."
    ],
    mistakes: [
      "<b>Protokół od kogoś, kto nie mierzył.</b> Papier bez pomiarów nic nie wart przy szkodzie, a ubezpieczyciel to sprawdzi.",
      "<b>Brak dokumentacji powykonawczej.</b> Po latach nikt nie wie, gdzie biegną kable i który aparat co wyłącza.",
      "<b>Pomiary przed podłączeniem wszystkich odbiorników.</b> Zmiany po pomiarach (np. dołożona ładowarka) też wymagają sprawdzenia."
    ],
    formal: [
      ["Protokół z pomiarów instalacji elektrycznej", "elektryk ze świadectwem kwalifikacyjnym (pomiary); do dokumentów zakończenia budowy (etap 16)"],
      ["Oświadczenie o gotowości instalacji", "dla operatora sieci przy montażu licznika (krok 3)"],
      ["Dokumentacja powykonawcza", "rzuty i schemat rozdzielnicy; wpis kierownika budowy w dzienniku"]
    ],
    checklist: [
      "Pomiary izolacji, pętli zwarcia, RCD i uziemienia wykonane",
      "Protokół z wartościami i numerem uprawnień",
      "Schemat rozdzielnicy w drzwiczkach",
      "Rzuty lub zdjęcia powykonawcze w teczce domu",
      "Gwarancje osprzętu i opraw zebrane"
    ],
    quiz: [{
      q: "Po co mierzy się impedancję pętli zwarcia?",
      a: ["Żeby sprawdzić, czy zabezpieczenie wyłączy zwarcie dość szybko", "Żeby policzyć zużycie prądu", "Żeby sprawdzić, czy Wi-Fi będzie działać"],
      correct: 0,
      explain: "<b>Pętla zwarcia pokazuje, czy bezpiecznik zdąży.</b> Przy zbyt dużej impedancji prąd zwarcia jest za mały i wyłącznik może zadziałać za późno."
    }]
  }

  ]
});
