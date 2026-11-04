/* Etap 07: Okna, drzwi zewnętrzne, brama garażowa (stan surowy zamknięty). Ceny orientacyjne, 2026 r., okolice małego miasta.
   Dom referencyjny: ok. 15 okien i drzwi balkonowych (ok. 27 m²) + HS w salonie ok. 4,0 × 2,4 m; okna dachowe są w etapie 06. */
BUDOWA.addStage({
  id: "07-okna", nr: 7, title: "Okna, drzwi i brama", icon: "🪟", category: "surowy",
  summary: "Stan surowy zamknięty: okna trzyszybowe w ciepłym montażu, duże przesuwne przeszklenie w salonie, drzwi wejściowe, brama garażowa i rolety zaplanowane przed elewacją.",
  duration: "6–12 tyg. (z produkcją), montaż 1–2 tyg.",
  steps: [

  /* 1 ------------------------------------------------------------------ */
  {
    id: "zakres-ssz",
    title: "Stan surowy zamknięty: plan i zamówienie",
    lead: "Okna zamawiasz, gdy mury stoją, a montujesz po dachu. Produkcja trwa 6–10 tygodni, więc zamówienie musi wyjść, zanim dekarz skończy.",
    time: "pomiar 1 dzień, produkcja 6–10 tyg.", team: "doradca firmy okiennej, kierownik budowy",
    facts: [["Okna i drzwi balkonowe", "ok. 15 szt., ok. 27 m²", "layers"], ["HS w salonie", "ok. 4,0 × 2,4 m", "house"], ["Termin", "przed zimą", "clock"]],
    body: `
      <p><strong>Stan surowy zamknięty (SSZ)</strong> to dom z dachem, oknami, drzwiami zewnętrznymi i bramą garażową. Od tej chwili wnętrze jest suche i zamknięte na klucz, więc mogą wejść instalatorzy, a zimą tynkarze i wylewki.</p>
      <p>W naszym domu to ok. <strong>15 okien i drzwi balkonowych</strong> (ok. 27 m²), <strong>duże przesuwne przeszklenie w salonie</strong> (ok. 4,0 × 2,4 m), drzwi wejściowe, drzwi z garażu do domu i brama ok. 5,0 m. Cztery okna dachowe zamontował już dekarz (etap 06).</p>
      <p>Okna zamawia się według <strong>pomiaru z natury</strong>, nie z projektu: pomiarowiec firmy mierzy każdy otwór po wymurowaniu. Przy tej okazji decydujesz o wszystkim, co zależy od otworu: ciepły montaż, profile poszerzające, skrzynki rolet, progi.</p>`,
    tips: [
      "<b>Zamawiaj, gdy stoją mury i wieńce.</b> Pomiar po zalaniu stropu i wieńców, montaż po pokryciu dachu. Przy 6–10 tyg. produkcji zamówienie w czasie robót dachowych daje okna przed jesienią.",
      "<b>Jedna firma na okna, HS, rolety i ciepły montaż.</b> Wtedy jeden wykonawca odpowiada za szczelność styku okno–mur–roleta. Drzwi i bramę możesz kupić osobno.",
      "<b>Porównuj oferty na tej samej specyfikacji.</b> Wypisz: profil, pakiet szyb (Ug, ramka), Uw całego okna, okucia, kolor, rodzaj montażu i taśm. Oferta „okno za 900 zł” bez tych danych nic nie mówi.",
      "<b>Wentylacja to rekuperacja (etap 10).</b> Nie zamawiaj nawiewników okiennych: przy wentylacji mechanicznej tylko psują bilans.",
      "<b>Zaliczka tylko na produkcję.</b> 20–30% przy zamówieniu, reszta po montażu i odbiorze (zasada z etapu 00)."
    ],
    mistakes: [
      "<b>Zamawianie z wymiarów projektu.</b> Otwór w murze zawsze różni się o 1–3 cm. Okno za duże nie wejdzie, za małe zostawia szczeliny na pół pianki.",
      "<b>Zamówienie dopiero po dachu.</b> Dom stoi otwarty 2–3 miesiące, a zimą nie wejdą tynki ani wylewki.",
      "<b>Decyzja o roletach „później”.</b> Skrzynka podtynkowa i prowadnice wymagają miejsca w otworze i w ociepleniu. Po elewacji zostaje tylko roleta nadstawna albo kucie."
    ],
    formal: [
      ["Umowa z firmą okienną", "specyfikacja każdego okna (profil, Uw, szyby, okucia, kolor), sposób montażu, termin, kary, gwarancja"],
      ["Protokół pomiaru z natury", "podpisany przez ciebie przed produkcją; sprawdź kierunki otwierania i podział skrzydeł"],
      ["Wpis do dziennika budowy", "kierownik budowy po montażu stolarki (zakres i data)"]
    ],
    checklist: [
      "Pomiar z natury wykonany po wymurowaniu i wieńcach",
      "Zestawienie okien zgodne z projektem (wymiary, podziały, kierunki otwierania)",
      "W umowie: Uw każdego okna, pakiet szyb, ramka ciepła, rodzaj montażu",
      "Ustalony termin montażu po dachu i przed zimą"
    ],
    quiz: [{
      q: "Kiedy najlepiej zamówić okna do domu, który właśnie dostaje dach?",
      a: ["Po skończeniu dachu, żeby nic ich nie uszkodziło", "W trakcie robót dachowych, po pomiarze otworów z natury", "Na etapie projektu, z zestawienia stolarki"],
      correct: 1,
      explain: "<b>Produkcja trwa 6–10 tygodni.</b> Pomiar z natury po wymurowaniu i zamówienie w czasie robót dachowych daje montaż zaraz po pokryciu, przed zimą."
    }]
  },

  /* 2 ------------------------------------------------------------------ */
  {
    id: "profile-okien",
    title: "Z czego okna: PVC, aluminium czy drewno",
    lead: "Profil decyduje o cenie, wyglądzie i konserwacji. Ciepło trzymają wszystkie trzy, jeśli mają dobry pakiet szyb i ciepły montaż.",
    time: "decyzja 1–2 tyg.", team: "ty, doradca, architekt",
    facts: [["Okien", "ok. 15 szt. / 27 m²", "layers"], ["Kolor", "antracyt z zewnątrz", "house"], ["Głębokość profilu", "ok. 76–90 mm", "rebar"]],
    body: `
      <p>Elewacja naszego domu to tynk, kamień i drewno pod ciemnym dachem, więc okna dobrze wyglądają w <strong>antracycie od zewnątrz</strong> i bieli od środka. Taki kolor ma każdy z materiałów; w PVC to okleina albo lakierowany profil.</p>
      <p><strong>PVC</strong> to dziś profile 6–7-komorowe o głębokości ok. 76–90 mm, ze stalowym wzmocnieniem. <strong>Aluminium</strong> ma przekładki termiczne i smuklejsze ramy, więc więcej szkła. <strong>Drewno</strong> (klejonka sosnowa lub dębowa) jest ciepłe w odbiorze, ale wymaga malowania co kilka lat; <strong>drewno-aluminium</strong> ma od zewnątrz nakładkę z aluminium i nie wymaga konserwacji.</p>
      <p>Ceny poniżej to ok. 27 m² okien z montażem standardowym i okleiną antracytową, bez przeszklenia HS (osobny krok) i bez ciepłego montażu (osobny krok).</p>`,
    decision: {
      question: "Z jakiego profilu okna?",
      intro: "Koszt ok. 15 okien i drzwi balkonowych, ok. 27 m², pakiet trzyszybowy, kolor antracyt z zewnątrz.",
      chosen: "pvc",
      options: [
        { id: "pvc", name: "PVC, 6–7 komór, okleina antracyt",
          cost: { min: 30000, max: 41000 }, time: "produkcja 6–8 tyg.", note: "ok. 1100–1500 zł/m²",
          pros: ["Najlepszy stosunek ceny do ciepła (Uw ok. 0,7–0,85)", "Bez konserwacji, łatwa wymiana uszczelek", "Szeroki wybór producentów i serwis w okolicy"],
          cons: ["Szersze ramy niż w aluminium", "Ciemna okleina mocniej się nagrzewa: duże skrzydła tylko z dobrym wzmocnieniem"],
          why: "Spełnia WT2021 z zapasem i zostawia pieniądze na HS, rolety i ciepły montaż. Przy antracytowej okleinie z zewnątrz wygląda dobrze z tynkiem, kamieniem i drewnem." },
        { id: "alu", name: "Aluminium z przekładką termiczną",
          cost: { min: 50000, max: 66000 }, time: "produkcja 8–10 tyg.", note: "ok. 1,6–1,7 × PVC",
          pros: ["Smukłe ramy, więcej światła", "Sztywne: duże skrzydła i narożniki", "Trwały kolor lakieru proszkowego"],
          cons: ["Drożej o ok. 20–25 tys. zł", "Ciepłe tylko w seriach z szeroką przekładką; tańsze serie nie spełniają Uw ≤ 0,9"],
          why: "Ma sens przy bardzo dużych przeszkleniach i nowoczesnej bryle, gdy budżet pozwala. Sprawdzaj Uw całego okna, nie samego profilu." },
        { id: "drewno", name: "Drewno klejone (sosna, meranti, dąb)",
          cost: { min: 44000, max: 58000 }, time: "produkcja 8–12 tyg.", note: "ok. 1,4–1,5 × PVC",
          pros: ["Naturalny wygląd, pasuje do deski na elewacji", "Ciepłe i sztywne"],
          cons: ["Malowanie co ok. 5–8 lat od strony południowej", "Wrażliwe na wilgoć budowy: wylewki i tynki trzeba wietrzyć"],
          why: "Dla tych, którzy chcą drewna w środku i akceptują konserwację. Na budowie chronić szczególnie starannie." },
        { id: "drewnoalu", name: "Drewno-aluminium",
          cost: { min: 58000, max: 78000 }, time: "produkcja 10–12 tyg.", note: "ok. 1,9–2,1 × PVC",
          pros: ["Drewno w środku, aluminium na zewnątrz: bez malowania", "Bardzo trwałe, najlepszy wygląd"],
          cons: ["Najdroższe, ok. 30–40 tys. zł więcej niż PVC", "Dłuższa produkcja"],
          why: "Wariant premium. Przy budżecie 2,3 mln zł zjada rezerwę stanu surowego, więc tylko wtedy, gdy oszczędzisz gdzie indziej." }
      ]
    },
    tips: [
      "<b>Porównuj Uw całego okna, nie Uf profilu.</b> Ładna liczba w katalogu profilu nic nie znaczy; w umowie ma być Uw dla okna referencyjnego 1,23 × 1,48 m i dla twoich wymiarów.",
      "<b>Okucia z mikrowentylacją i zaczepami antywyważeniowymi.</b> Na parterze min. 2–4 grzybki antywyważeniowe na skrzydło i klamka z kluczykiem w pokoju dziecięcym.",
      "<b>Ciemny kolor tylko z zewnątrz.</b> Okleina antracytowa obustronnie to +10–15% i ciemne wnętrze; biel od środka jest jaśniejsza i tańsza.",
      "<b>Podział skrzydeł ustal z meblami.</b> Okno w kuchni nad blatem: dolna krawędź ok. 100–105 cm i skrzydło otwierane ponad baterią albo okno uchylne."
    ],
    mistakes: [
      "<b>Wybór po cenie za sztukę.</b> Tańsze okno często ma ramkę aluminiową, gorsze okucia i Uw 1,0+. Różnica zwraca się w ogrzewaniu i w braku reklamacji.",
      "<b>Za duże skrzydło PVC w ciemnym kolorze.</b> Nagrzana rama się wygina, skrzydło opada. Powyżej ok. 1,2 × 2,4 m zapytaj o dopuszczenie producenta.",
      "<b>Okna różnych firm w jednej elewacji.</b> Odcień okleiny i szerokość ram się różnią, widać to od ulicy."
    ],
    formal: [
      ["Deklaracja właściwości użytkowych", "dla okien i drzwi zewnętrznych (oznakowanie CE), wg PN-EN 14351-1; dostawca daje przy dostawie"],
      ["Specyfikacja w umowie", "profil, Uw, pakiet szyb, okucia, kolor, kierunki otwierania każdego okna"]
    ],
    widget: "kalkulator-okien",
    quiz: [{
      q: "Co porównujesz w ofertach okien, żeby ocenić ich ciepło?",
      a: ["Liczbę komór profilu", "Współczynnik Uw całego okna", "Grubość szyby zewnętrznej"],
      correct: 1,
      explain: "<b>Uw opisuje całe okno:</b> ramę, szyby i ramkę dystansową. Liczba komór to chwyt marketingowy, a WT2021 wymaga właśnie Uw ≤ 0,9 W/(m²·K)."
    }]
  },

  /* 3 ------------------------------------------------------------------ */
  {
    id: "szyby-uw",
    title: "Pakiet trzyszybowy, Uw i ciepła ramka",
    lead: "WT2021 wymaga dla okien pionowych Uw ≤ 0,9 W/(m²·K). Spełnisz to tylko pakietem trzyszybowym z ciepłą ramką.",
    time: "w zamówieniu", team: "doradca firmy okiennej",
    facts: [["Okna pionowe", "Uw ≤ 0,9", "stamp"], ["Drzwi zewnętrzne", "Ud ≤ 1,3", "stamp"], ["Pakiet szyb", "Ug ok. 0,5–0,6", "layers"]],
    body: `
      <p><strong>Pakiet trzyszybowy</strong> to trzy tafle z dwiema komorami wypełnionymi argonem i powłokami niskoemisyjnymi. Ma <strong>Ug ok. 0,5–0,6 W/(m²·K)</strong> i grubość ok. 44–52 mm. Dwie szyby (Ug ok. 1,0–1,1) dają Uw ok. 1,1–1,3, więc nie spełniają WT2021.</p>
      <p><strong>Ciepła ramka</strong> (tworzywowa albo ze stali nierdzewnej zamiast aluminium) rozdziela szyby przy krawędzi. Obniża Uw o ok. 0,05–0,1 i, co ważniejsze, podnosi temperaturę brzegu szyby, więc zimą nie skrapla się tam woda.</p>
      <p>Wymagania WT2021 (Warunki techniczne, załącznik o izolacyjności cieplnej): okna pionowe i drzwi balkonowe <strong>Uw ≤ 0,9</strong>, okna dachowe <strong>≤ 1,1</strong>, drzwi zewnętrzne <strong>Ud ≤ 1,3</strong>. Wymagania te dotyczą pomieszczeń ogrzewanych; dla garażu nieogrzewanego sprawdź w projekcie. WT wymagają też ograniczenia przegrzewania latem (współczynnik przepuszczalności energii słonecznej okien z osłonami); najprościej spełniają to zewnętrzne rolety albo żaluzje.</p>`,
    cost: { min: 2000, max: 4000, note: "szyby bezpieczne w HS, drzwiach balkonowych i niskich przeszkleniach" },
    tips: [
      "<b>Szyby bezpieczne tam, gdzie można w nie wpaść.</b> Przeszklenia do podłogi, HS, drzwi tarasowe i okna przy schodach: wewnętrzna szyba klejona (VSG, np. 33.2 lub 44.2), zewnętrzna hartowana. Dopłata ok. 2–4 tys. zł na cały dom.",
      "<b>Ramka ciepła w kolorze ramy.</b> Czarna albo grafitowa ramka przy antracytowym oknie wygląda czyściej niż srebrna.",
      "<b>Szyba przeciwsłoneczna tylko z rozwagą.</b> Od południa zyski zimą są cenne; latem lepiej chroni roleta zewnętrzna niż ciemna szyba, która zabiera też światło zimą.",
      "<b>Sprawdź naklejkę na ramce.</b> Na pakiecie jest data produkcji i oznaczenie szyb. Przy odbiorze porównaj z umową."
    ],
    mistakes: [
      "<b>Okna dwuszybowe „bo taniej”.</b> Nie spełnią WT2021, a kierownik budowy nie podpisze oświadczenia o zgodności z projektem.",
      "<b>Mylenie Ug z Uw.</b> Ug 0,5 to sama szyba; całe okno ma zwykle Uw 0,7–0,9. Sprzedawca, który podaje tylko Ug, coś ukrywa.",
      "<b>Zwykła szyba przy podłodze.</b> Pęknięta hartowana i klejona szyba nie rani; zwykła tak."
    ],
    formal: [
      ["WT2021: izolacyjność cieplna stolarki", "okna pionowe Uw ≤ 0,9; okna połaciowe ≤ 1,1; drzwi zewnętrzne ≤ 1,3 W/(m²·K) (dla pomieszczeń ogrzewanych)"],
      ["Świadectwo charakterystyki energetycznej", "przy zakończeniu budowy (etap 16); dane okien z deklaracji właściwości użytkowych"]
    ],
    checklist: [
      "W ofercie Uw każdego okna ≤ 0,9, drzwi ≤ 1,3",
      "Pakiet trzyszybowy z argonem i ciepłą ramką",
      "Szyby bezpieczne w HS, drzwiach balkonowych i przeszkleniach do podłogi",
      "Oznaczenie pakietu na ramce zgodne z umową"
    ],
    quiz: [{
      q: "Jaki współczynnik ciepła wymagają WT2021 dla okien pionowych w domu?",
      a: ["Uw ≤ 1,3 W/(m²·K)", "Uw ≤ 0,9 W/(m²·K)", "Ug ≤ 0,5 W/(m²·K)"],
      correct: 1,
      explain: "<b>Uw ≤ 0,9 dla okien pionowych</b> i drzwi balkonowych. 1,3 to wymaganie dla drzwi zewnętrznych, a Ug dotyczy samej szyby, nie okna."
    }, {
      q: "Po co ciepła ramka między szybami?",
      a: ["Żeby szyba była grubsza", "Żeby brzeg szyby był cieplejszy i nie zbierała się tam woda", "Żeby argon nie uciekał przez ramę"],
      correct: 1,
      explain: "<b>Aluminiowa ramka to mostek na brzegu szyby.</b> Ciepła ramka podnosi temperaturę krawędzi o kilka stopni, więc zimą nie ma skroplin i czarnych uszczelek."
    }]
  },

  /* 4 ------------------------------------------------------------------ */
  {
    id: "duze-przeszklenia",
    title: "Duże przeszklenie salonu",
    lead: "Przeszklenie salonu na taras to najdroższy pojedynczy element stolarki. Otwór ok. 4,0 × 2,4 m stoi na podciągu z etapu 05.",
    time: "produkcja 8–10 tyg., montaż 1 dzień", team: "3–4 monterów, często przyssawki lub mały dźwig",
    facts: [["Otwór", "ok. 4,0 × 2,4 m", "house"], ["Skrzydło", "ok. 150–250 kg", "rebar"], ["Próg", "ok. 0–2 cm", "layers"]],
    body: `
      <p>Salon z kominkiem otwiera się na zadaszony taras od południa. W otworze ok. <strong>4,0 × 2,4 m</strong> możesz wstawić drzwi <strong>podnoszono-przesuwne (HS)</strong>, zestaw <strong>stałych szyb z drzwiami tarasowymi</strong> albo drzwi <strong>harmonijkowe</strong>. Wymiar otworu i podciąg nad nim są w projekcie konstrukcji (etap 05).</p>
      <p><strong>HS</strong>: klamka podnosi ciężkie skrzydło na wózki, a ono przesuwa się wzdłuż stałej części. Próg jest prawie płaski (ok. 0–2 cm), więc salon przechodzi w taras. Zamknięte skrzydło opada na uszczelki i jest szczelne jak okno.</p>
      <p>Pod progiem HS musi być <strong>nośny i ciepły podkład</strong>: profil z twardego tworzywa albo XPS o wysokiej wytrzymałości, oparty na stropie lub płycie. Po wylewce (etap 11) i warstwach tarasu (etap 15) poziomy po obu stronach progu mają się zgadzać, więc ustal je teraz.</p>`,
    decision: {
      question: "Jakie przeszklenie w salonie?",
      intro: "Otwór ok. 4,0 × 2,4 m, pakiet trzyszybowy z szybami bezpiecznymi, PVC w kolorze okien, z montażem.",
      chosen: "hs",
      options: [
        { id: "hs", name: "Drzwi podnoszono-przesuwne HS, 2 pola (1 stałe + 1 przesuwne)",
          cost: { min: 23000, max: 33000 }, time: "montaż 1 dzień", note: "skrzydło ok. 2,0 × 2,4 m",
          pros: ["Szerokie przejście ok. 1,9 m i niski próg", "Szczelne jak okno: skrzydło opada na uszczelki", "Nic nie wystaje do salonu ani na taras"],
          cons: ["Drogie i ciężkie: montaż 3–4 osób", "Próg i poziomy podłóg trzeba zaplanować teraz"],
          why: "Najlepiej łączy salon z tarasem przy dobrej szczelności. Pasuje do zadaszonego tarasu i dużych przeszkleń z projektu." },
        { id: "stale", name: "Szyby stałe + drzwi tarasowe rozwierno-uchylne",
          cost: { min: 13000, max: 20000 }, time: "montaż 1 dzień", note: "np. 2 pola stałe + drzwi 1,0 m",
          pros: ["Taniej o ok. 10–13 tys. zł", "Stałe szyby: najlepsze Uw i najwęższe ramy", "Prosty montaż"],
          cons: ["Przejście tylko ok. 0,9 m", "Otwarte skrzydło zajmuje miejsce w salonie", "Próg drzwi zwykle wyższy"],
          why: "Dobry wybór, gdy liczysz każdy tysiąc. Widok podobny, ale salon nie „otwiera się” na taras." },
        { id: "harmonijka", name: "Drzwi harmonijkowe (składane), aluminium",
          cost: { min: 32000, max: 46000 }, time: "montaż 1–2 dni", note: "4–5 skrzydeł",
          pros: ["Całkowite otwarcie otworu latem", "Efekt „salon na tarasie”"],
          cons: ["Najdrożej, a ramy co ok. 80–90 cm zasłaniają widok zimą", "Więcej uszczelek: gorsza szczelność po latach", "Złożone skrzydła zajmują miejsce"],
          why: "Ma sens, gdy latem salon i taras mają być jedną przestrzenią. W naszym klimacie przez 8 miesięcy patrzysz na ramy." }
      ]
    },
    tips: [
      "<b>Ciepły próg zamawiaj razem z HS.</b> Producent ma systemowy profil podprogowy (twarde tworzywo, ok. 10–15 cm). Zwykły styropian się ugnie pod skrzydłem ważącym 200 kg.",
      "<b>Poziom gotowej podłogi ustal z wylewkarzem.</b> Spód progu HS = góra stropu lub płyty; góra progu = gotowa podłoga ±0,00. Dopiero wtedy wylewka, deska tarasu i odwodnienie liniowe przed progiem.",
      "<b>Odwodnienie przed progiem.</b> Taras zadaszony, ale deszcz z wiatrem i tak dojdzie. Spadek tarasu 1,5–2% od domu i odwodnienie liniowe przy HS (etap 15).",
      "<b>Skrzydło przesuwne po stronie, gdzie chodzisz.</b> Najczęściej od kuchni i jadalni. Stałe pole zostaw od strony kominka."
    ],
    mistakes: [
      "<b>HS na zwykłym styropianie albo klinach.</b> Próg się ugina, skrzydło przestaje się domykać, w zimie wieje przy podłodze.",
      "<b>Otwór „mniej więcej”.</b> Przy 4 m szerokości każde 2 cm krzywizny podciągu to problem. Sprawdź poziom nadproża przed pomiarem.",
      "<b>Brak miejsca na roletę.</b> HS od południa przegrzewa salon. Skrzynka rolety lub żaluzji nad HS musi wejść w ocieplenie albo w nadproże, zanim powstanie elewacja."
    ],
    checklist: [
      "Wymiar otworu zgodny z projektem, nadproże w poziomie (± 5 mm)",
      "Systemowy ciepły profil pod progiem, oparty na stropie lub płycie",
      "Ustalony poziom gotowej podłogi i tarasu przy progu",
      "Szyby bezpieczne (hartowana + klejona)",
      "Skrzydło przesuwa się lekko i domyka bez szczeliny"
    ],
    quiz: [{
      q: "Dlaczego pod próg HS nie wkłada się zwykłego styropianu?",
      a: ["Bo jest za ciepły", "Bo ugnie się pod ciężkim skrzydłem i próg straci poziom", "Bo przepisy zabraniają styropianu w otworach"],
      correct: 1,
      explain: "<b>Skrzydło HS waży 150–250 kg.</b> Pod progiem musi być nośny i ciepły profil systemowy oparty na stropie albo płycie."
    }]
  },

  /* 5 ------------------------------------------------------------------ */
  {
    id: "otwory-dostawa",
    title: "Przygotowanie otworów i dostawa",
    lead: "Okno jest tak szczelne jak otwór, w którym siedzi. Dzień przed montażem sprawdź otwory, a przy dostawie każde okno.",
    time: "1 dzień + dostawa", team: "murarz do poprawek, monter, ty",
    facts: [["Luz montażowy", "ok. 1–2 cm na stronę", "rebar"], ["Otwory", "ok. 20 szt.", "house"]],
    body: `
      <p>Otwory po murarzu rzadko są idealne. Przed montażem trzeba <strong>wyrównać i oczyścić ościeża</strong>: uzupełnić ubytki zaprawą, zamknąć puste komory pustaków na krawędzi i zagruntować miejsca, gdzie przyklei się taśma. Przy ociepleniu 20 cm okno i tak będzie wysunięte przed mur, ale taśma musi mieć gładki, nośny pas na licu muru.</p>
      <p>Dostawa przychodzi zwykle na stojakach. Okna stoją pionowo, w suchym miejscu, <strong>w budynku, nie na trawie</strong>. Przy rozładunku sprawdź każde okno: wymiar, kolor, kierunek otwierania, rysy na szybach i ramach, etykietę pakietu szyb.</p>`,
    cost: { min: 500, max: 1500, note: "zaprawa, grunt, poprawki ościeży (robocizna murarza)" },
    tips: [
      "<b>Mierz przekątne otworu.</b> Różnica do ok. 5 mm jest w porządku, większą trzeba poprawić przed montażem, nie pianką.",
      "<b>Rysy szukaj w świetle z boku.</b> Rysa na szybie zgłoszona po montażu to spór; przed podpisaniem dostawy to wymiana.",
      "<b>Odbiór dostawy z listą.</b> Firma daje zestawienie z numerami pozycji. Każde okno ma naklejkę z numerem i pomieszczeniem: wnieś je od razu do właściwych otworów.",
      "<b>Zasilanie przy oknach z roletą lub napędem.</b> Elektryk (etap 08) musi zostawić kabel 3 × 1,5 przy skrzynce każdej rolety i przy bramie. Zaznacz to teraz na planie."
    ],
    mistakes: [
      "<b>Okna składowane na zewnątrz pod folią.</b> W słońcu folia ochronna wtapia się w okleinę, a w deszczu woda zostaje w okuciach.",
      "<b>Montaż w kruszące się ościeże.</b> Kotwa w pustej komorze pustaka nie trzyma, a taśma na pyle odpada po roku.",
      "<b>Podpisany odbiór „w ciemno”.</b> Uszkodzenie z transportu zgłoszone po tygodniu trudno udowodnić."
    ],
    checklist: [
      "Ościeża wyrównane, czyste, zagruntowane w pasie taśm",
      "Przekątne otworów: różnica ≤ ok. 5 mm",
      "Każde okno sprawdzone przy dostawie: wymiar, kolor, kierunek otwierania, szyby",
      "Okna składowane pionowo w budynku, z dala od cięcia i spawania"
    ]
  },

  /* 6 ------------------------------------------------------------------ */
  {
    id: "cieply-montaz",
    title: "Ciepły montaż w warstwie ocieplenia",
    lead: "Montaż decyduje o tym, czy okno trzyszybowe naprawdę jest ciepłe. Okno wysuwasz w warstwę ocieplenia, a styk z murem zamykasz trzema warstwami: szczelną od środka, izolacją w środku i paroprzepuszczalną od zewnątrz.",
    time: "ok. 1–2 tyg. na cały dom", team: "2–3 monterów",
    facts: [["Ściana", "pustak 25 + styropian 20", "layers"], ["Wysunięcie okna", "ok. 1/3–1/2 ocieplenia", "rebar"], ["Obwód do uszczelnienia", "ok. 100–120 mb", "layers"]],
    body: `
      <p>Nasza ściana to <strong>pustak 25 cm + styropian grafitowy 20 cm</strong> <button class="xref" data-section="ocieplenie"><svg class="ico"><use href="#i-layers"/></svg>zobacz w przekroju</button>. Najcieplej jest, gdy okno siedzi <strong>w warstwie ocieplenia</strong>: wysunięte przed lico muru na stalowych konsolach albo na ramie montażowej z twardego tworzywa. Wtedy izotermy przechodzą przez okno, a nie przez mur, i ościeże nie przemarza.</p>
      <p>Styk okno–mur zamykają trzy warstwy:</p>
      <p><strong>1. Od środka taśma paroszczelna</strong>: nie wpuszcza wilgotnego powietrza z domu w piankę. <strong>2. W środku pianka niskoprężna</strong> albo taśma rozprężna: izolacja cieplna. <strong>3. Od zewnątrz taśma paroprzepuszczalna</strong>: chroni przed deszczem, ale wypuszcza wilgoć. Zasada: <strong>szczelniej od środka niż od zewnątrz</strong>.</p>
      <p>Pod oknem montuje się <strong>profil podparapetowy</strong> (ok. 30–40 mm), żeby parapet zewnętrzny wszedł pod ramę, a w otworach z HS i drzwiami ciepły profil progowy. Styropian elewacji (etap 12) zachodzi potem na ramę o ok. 2–3 cm.</p>`,
    cost: { min: 9000, max: 14000, note: "robocizna i materiały ciepłego montażu na licu muru, ok. 100–120 mb" },
    decision: {
      question: "Jak osadzić okna?",
      intro: "Koszt to dopłata albo oszczędność względem ciepłego montażu na licu muru (cena kroku).",
      chosen: "wysuniety",
      options: [
        { id: "wysuniety", name: "Wysunięty w ocieplenie: konsole lub ramy + taśmy",
          cost: { min: 6000, max: 10000 }, time: "1,5–2 tyg.", note: "system jednego producenta",
          pros: ["Najmniejszy mostek cieplny na styku: ok. 0,02–0,04 W/(m·K)", "Ościeża nie przemarzają, brak pleśni w narożach", "Spójne z ociepleniem 20 cm"],
          cons: ["Drożej i dłużej", "Wymaga projektu montażu: konsole pod ciężkie okna, HS na ramie"],
          why: "Przy ociepleniu 20 cm okno na licu muru siedzi w najzimniejszym miejscu ściany. Wysunięcie o ok. 1/3–1/2 grubości styropianu to dziś standard w domach z pompą ciepła i rekuperacją." },
        { id: "lico", name: "Ciepły montaż na licu muru (taśmy + pianka)",
          cost: { min: 0, max: 0 }, time: "1–1,5 tyg.", note: "okno w murze, przy zewnętrznej krawędzi",
          pros: ["Taniej, prostsze kotwienie", "Szczelny, jeśli taśmy są dobrze przyklejone"],
          cons: ["Większy mostek na styku (ok. 0,05–0,1 W/(m·K))", "Ościeże trzeba docieplić 3–5 cm styropianu"],
          why: "Poprawny minimalny standard. Wystarczy, gdy budżet jest napięty, ale styropian elewacji musi starannie zachodzić na ramę." },
        { id: "pianka", name: "Tradycyjny: sama pianka, bez taśm",
          cost: { min: -5000, max: -3000 }, time: "3–5 dni", note: "pianka + silikon lub nic",
          pros: ["Najtaniej i najszybciej"],
          cons: ["Pianka nasiąka od środka parą, a od zewnątrz deszczem: po kilku latach traci izolacyjność", "Przewiewy i grzyb przy ościeżach", "Psuje wynik testu szczelności przy rekuperacji"],
          why: "Nie polecamy. Oszczędność 3–5 tys. zł na stolarce za ok. 90 tys. zł nie ma sensu." }
      ]
    },
    tips: [
      "<b>Taśmy klej na czystym, zagruntowanym murze.</b> Taśma paroszczelna od środka zachodzi ok. 5–8 cm na mur, żeby tynk wewnętrzny (etap 11) mógł ją przykryć.",
      "<b>Pianka niskoprężna, nie zwykła.</b> Zwykła pianka montażowa rozpycha ramę; wypełniaj szczelinę ok. 1–2 cm w 2/3 i nie podcinaj jej na zewnątrz bez osłony.",
      "<b>Kotwy co ok. 70 cm i ok. 15 cm od naroży.</b> Pod HS i ciężkimi przeszkleniami konsole lub rama wg systemu; klocki podporowe pod ramę w miejscach słupków.",
      "<b>Wypoziomuj i wypionuj każde okno.</b> Tolerancja ok. 1–2 mm na metr; poziomica 60–100 cm i laser. Krzywe okno potem samo się otwiera.",
      "<b>Zdjęcia każdego okna przed zakryciem taśm.</b> Przydadzą się przy reklamacji i odbiorze kierownika."
    ],
    mistakes: [
      "<b>Odwrócone taśmy.</b> Paroprzepuszczalna od środka, szczelna od zewnątrz: wilgoć zostaje w piance i pojawia się grzyb na ościeżu.",
      "<b>Okno w środku muru, ościeże bez docieplenia.</b> Zimne ościeże, skropliny i czarne narożniki od pierwszej zimy.",
      "<b>Montaż w mrozie bez zimowej pianki i taśm.</b> Klej taśmy nie trzyma poniżej ok. +5°C, jeśli nie jest zimowy. Sprawdź kartę produktu."
    ],
    formal: [
      ["Instrukcja montażu producenta okien", "warunek gwarancji; poproś o nią przed montażem"],
      ["Protokół montażu", "lista okien, sposób montażu, użyte taśmy i pianki, podpis montera"]
    ],
    checklist: [
      "Okna wysunięte w warstwę ocieplenia zgodnie z projektem montażu",
      "Taśma paroszczelna od środka, paroprzepuszczalna od zewnątrz, ciągłe w narożach",
      "Pianka niskoprężna, bez pustek, nie wystaje poza taśmy",
      "Kotwy co ok. 70 cm, konsole pod ciężkimi oknami",
      "Okna w pionie i poziomie (± 1–2 mm/m), skrzydła domykają się same",
      "Profil podparapetowy i ciepły próg zamontowane"
    ],
    quiz: [{
      q: "Która taśma idzie od strony pokoju?",
      a: ["Paroprzepuszczalna, żeby mur oddychał", "Paroszczelna, żeby para z domu nie wchodziła w piankę", "Żadna, wystarczy pianka i silikon"],
      correct: 1,
      explain: "<b>Szczelniej od środka niż od zewnątrz.</b> Para z ciepłego wnętrza nie może wejść w piankę, a jeśli coś się dostanie, ma wyjść przez taśmę paroprzepuszczalną na zewnątrz."
    }, {
      q: "Dlaczego przy ociepleniu 20 cm wysuwa się okno przed lico muru?",
      a: ["Żeby parapet wewnętrzny był szerszy", "Żeby okno stało w warstwie izolacji i ościeże nie przemarzało", "Bo tak łatwiej założyć rolety nadstawne"],
      correct: 1,
      explain: "<b>Okno w ociepleniu to krótsza droga ucieczki ciepła.</b> Na licu muru okno siedzi w zimnej strefie ściany, a ościeża łatwiej się wychładzają."
    }]
  },

  /* 7 ------------------------------------------------------------------ */
  {
    id: "parapety",
    title: "Parapety zewnętrzne i wewnętrzne",
    lead: "Parapet zewnętrzny kupujesz razem z oknami, a montujesz przy elewacji. Liczy się wysięg, spadek i szczelne zakończenia.",
    time: "zamówienie z oknami, montaż w etapie 12", team: "elewacja: tynkarze",
    facts: [["Parapety zewnętrzne", "ok. 18–20 mb", "layers"], ["Wysięg poza elewację", "ok. 3–4 cm", "rebar"], ["Spadek", "min. ok. 5°", "rebar"]],
    body: `
      <p><strong>Parapet zewnętrzny</strong> zakłada się pod profil podparapetowy okna, na ociepleniu, ze <strong>spadkiem min. ok. 5°</strong> (ok. 8–10%) i <strong>wysięgiem 3–4 cm</strong> poza gotową elewację, z kapinosem. Boki zamykają zaślepki z uszczelką, które wchodzą pod tynk. Montuje go ekipa elewacyjna (etap 12), ale wymiary i kolor ustal teraz, bo zależą od wysunięcia okna.</p>
      <p><strong>Parapety wewnętrzne</strong> (konglomerat, kamień, drewno, MDF) zakłada się po tynkach i wylewkach, w etapie wykończenia (13). Teraz zostaw pod nimi miejsce: podniesienie ramy o profil podparapetowy daje ok. 3–4 cm.</p>`,
    decision: {
      question: "Jakie parapety zewnętrzne?",
      intro: "Ok. 18–20 mb, kolor antracyt jak okna; montaż w etapie 12.",
      chosen: "alu",
      options: [
        { id: "alu", name: "Aluminium powlekane, z zaślepkami systemowymi",
          cost: { min: 2500, max: 4500 }, time: "montaż w etapie 12", note: "ok. 120–200 zł/mb z zaślepkami",
          pros: ["Lekki, nie rdzewieje", "Ten sam kolor co okna (RAL)", "Systemowe zaślepki dylatacyjne: szczelne boki"],
          cons: ["Bębni przy deszczu, jeśli nie ma podkładu wygłuszającego", "Łatwo wgnieść na budowie"],
          why: "Standard przy elewacji z tynku: lekki, trwały i szczelny na bokach. Spód podklejony taśmą wygłuszającą nie bębni." },
        { id: "stal", name: "Stal powlekana",
          cost: { min: 1800, max: 3200 }, time: "montaż w etapie 12", note: "jak blacha na rynnach",
          pros: ["Taniej o ok. 1 tys. zł", "Kolor jak rynny i obróbki"],
          cons: ["Przy cięciu krawędzie rdzewieją bez zabezpieczenia", "Mniej gotowych zaślepek"],
          why: "Dobra oszczędność, jeśli dekarz lub blacharz wykona je z tej samej blachy co obróbki dachu." },
        { id: "kamien", name: "Konglomerat lub kamień",
          cost: { min: 5000, max: 9000 }, time: "montaż w etapie 12", note: "pasuje do kamienia na elewacji",
          pros: ["Masywny wygląd, pasuje do okładziny kamiennej", "Nie bębni"],
          cons: ["Drogi i ciężki", "Spoiny i boki trudniej uszczelnić na ociepleniu"],
          why: "Tylko przy oknach w ścianie z okładziną kamienną, gdzie zgra się z kamieniem." }
      ]
    },
    tips: [
      "<b>Parapet pod ramę, nie do ramy.</b> Wchodzi w profil podparapetowy albo pod taśmę; silikon na styku to doraźna łatka.",
      "<b>Taśma pod parapetem.</b> Pod parapetem na styropianie elewacji: taśma uszczelniająca i klej montażowy na pełnej powierzchni, bez pustki, w której zbiera się woda.",
      "<b>Długość z zapasem na zaślepki.</b> Parapet dłuższy od okna o grubość ocieplenia ościeży i ok. 2 cm na stronę pod tynk."
    ],
    mistakes: [
      "<b>Parapet bez spadku albo ze spadkiem do okna.</b> Woda stoi pod ramą i wnika w ocieplenie.",
      "<b>Boki parapetu na silikon.</b> Za 2–3 lata silikon pęka, a woda spływa w styropian ościeża; na tynku zostają zacieki.",
      "<b>Za krótki wysięg.</b> Woda ścieka po tynku pod oknem i zostawia brudne smugi."
    ],
    checklist: [
      "Wymiary i kolor parapetów zamówione razem z oknami",
      "Profil podparapetowy przy każdym oknie",
      "Plan montażu z elewacją: spadek min. ok. 5°, wysięg 3–4 cm, zaślepki pod tynk"
    ]
  },

  /* 8 ------------------------------------------------------------------ */
  {
    id: "drzwi-wejsciowe",
    title: "Drzwi wejściowe",
    lead: "Drzwi wejściowe to wizytówka domu, zamek i ściana w jednym. Liczy się Ud ≤ 1,3, klasa antywłamaniowa i ciepły próg.",
    time: "produkcja 4–8 tyg., montaż 0,5 dnia", team: "2 monterów",
    facts: [["Ud (WT2021)", "≤ 1,3", "stamp"], ["Klasa", "RC2 lub RC3", "shield"], ["Skrzydło", "ok. 100–110 × 210–230 cm", "house"]],
    body: `
      <p>Wejście od północy, od strony podjazdu. Skrzydło ok. <strong>100–110 cm szerokości</strong> (wygodnie z zakupami i wózkiem) i ok. 210–230 cm wysokości, często z doświetlem bocznym. Wymagania: <strong>Ud ≤ 1,3 W/(m²·K)</strong> (WT2021), klasa antywłamaniowa <strong>RC2</strong> (lepiej RC3), zamek wielopunktowy, wkładka klasy C i ciepły, niski próg.</p>
      <p>Dobre drzwi mają skrzydło grubości ok. 70–100 mm z rdzeniem z pianki, dwie lub trzy uszczelki i zawiasy regulowane w trzech płaszczyznach. Zamek elektromechaniczny z czytnikiem linii papilarnych albo kodem to wygoda, ale wymaga przewodu od elektryka (etap 08).</p>`,
    decision: {
      question: "Jakie drzwi wejściowe?",
      intro: "Skrzydło ok. 100 × 220 cm, Ud ≤ 1,3, RC2, z montażem w ciepłym systemie.",
      chosen: "alu",
      options: [
        { id: "alu", name: "Aluminiowe, panel nakładany obustronnie",
          cost: { min: 12000, max: 22000 }, time: "produkcja 6–8 tyg.", note: "Ud ok. 0,8–1,1",
          pros: ["Sztywne, nie paczą się przy ciemnym kolorze i słońcu", "Ciepłe w seriach z grubą przekładką", "Duży wybór paneli i pochwytów"],
          cons: ["Drogie, zwłaszcza z doświetlem i zamkiem elektronicznym", "Panel z ozdobnym przeszkleniem obniża izolacyjność"],
          why: "Trwałe i stabilne w antracycie od zewnątrz, nawet od strony nasłonecznionej. Pasują do nowoczesnej bryły i okien." },
        { id: "stal", name: "Stalowe ocieplane",
          cost: { min: 6000, max: 11000 }, time: "produkcja 3–6 tyg.", note: "Ud ok. 1,0–1,3",
          pros: ["Taniej o ok. 6–10 tys. zł", "Solidne, łatwo o RC2"],
          cons: ["Ciemne skrzydło nagrzewa się i może się odkształcać", "Mniej eleganckie wykończenie", "Skraplanie na krawędzi przy słabszych modelach"],
          why: "Rozsądna oszczędność, gdy drzwi są pod zadaszeniem i nie świeci na nie słońce." },
        { id: "drewno", name: "Drewniane (klejonka dębowa lub meranti)",
          cost: { min: 13000, max: 22000 }, time: "produkcja 6–10 tyg.", note: "Ud ok. 0,9–1,2",
          pros: ["Pasuje do deski na elewacji", "Ciepłe w dotyku i wyglądzie"],
          cons: ["Malowanie co kilka lat", "Wrażliwe na wilgoć i słońce: potrzebny daszek"],
          why: "Gdy wejście jest pod głębokim zadaszeniem i zależy ci na drewnie. Wymaga dbania." },
        { id: "pvc", name: "PVC",
          cost: { min: 6000, max: 10000 }, time: "produkcja 4–6 tyg.", note: "jak okna",
          pros: ["Najtaniej", "Kolor i profil jak okna"],
          cons: ["Skrzydło 100 × 220 cm w antracycie łatwo się wypacza", "Niższa odporność na włamanie"],
          why: "Do drzwi bocznych i technicznych, nie do głównego wejścia w tym domu." }
      ]
    },
    tips: [
      "<b>Zamek elektromechaniczny planuj z elektrykiem.</b> Przewód w ościeżu (zwykle w zawiasie lub kablu przejściowym) i zasilacz w rozdzielnicy. Dopłata ok. 1,5–3 tys. zł.",
      "<b>Daszek albo wnęka nad wejściem.</b> Ok. 1,0–1,5 m zadaszenia chroni drzwi przed deszczem i słońcem; w projekcie zwykle jest.",
      "<b>Klucze dla ekip to osobna wkładka.</b> Na czas budowy załóż tanią wkładkę budowlaną, docelową z kartą kodową dopiero po przeprowadzce.",
      "<b>Próg ciepły, ok. 2 cm.</b> Niski próg z przekładką termiczną albo próg magnetyczny; wyższy nie przeszkadza, mostek pod progiem tak."
    ],
    mistakes: [
      "<b>Drzwi montowane przed wylewką bez ustalenia poziomu.</b> Próg za nisko albo za wysoko o 3–5 cm, potem schodek w posadzce.",
      "<b>Ciemne PVC lub stal od słońca.</b> Skrzydło wygina się latem i przestaje domykać się na wszystkie zaczepy.",
      "<b>Oszczędność na wkładce.</b> Drzwi RC2 z wkładką za 50 zł otwiera się w minutę."
    ],
    formal: [
      ["Deklaracja właściwości użytkowych", "Ud, klasa antywłamaniowa, szczelność; wg PN-EN 14351-1"],
      ["Certyfikat klasy RC i wkładki", "potwierdzenie od producenta; przydatne do ubezpieczenia domu"]
    ],
    checklist: [
      "Ud ≤ 1,3 w dokumentach, klasa RC2 lub wyższa",
      "Próg na poziomie gotowej posadzki, z ciepłą podkładką",
      "Skrzydło domyka się lekko, bez ocierania, na wszystkie zaczepy",
      "Przewód do zamka elektronicznego i dzwonka przygotowany",
      "Wkładka budowlana na czas prac"
    ],
    quiz: [{
      q: "Ile może wynosić współczynnik Ud drzwi wejściowych wg WT2021?",
      a: ["Najwyżej 0,9", "Najwyżej 1,3", "Najwyżej 1,8"],
      correct: 1,
      explain: "<b>Drzwi zewnętrzne: Ud ≤ 1,3 W/(m²·K).</b> Dobre drzwi aluminiowe mają ok. 0,8–1,1."
    }]
  },

  /* 9 ------------------------------------------------------------------ */
  {
    id: "brama-garazowa",
    title: "Brama garażowa i drzwi z garażu do domu",
    lead: "Brama segmentowa unosi się pod sufit, więc zostawia całą szerokość wjazdu i miejsce przed garażem. Wymaga jednak zapasu nad otworem i przy ościeżach.",
    time: "produkcja 3–6 tyg., montaż 1 dzień", team: "2 monterów, elektryk do podłączenia napędu",
    facts: [["Otwór", "ok. 5,0 × 2,25 m", "house"], ["Nadproże nad otworem", "min. ok. 20–30 cm", "rebar"], ["Węgarki boczne", "min. ok. 10–12 cm", "rebar"]],
    body: `
      <p>Garaż na dwa auta ma ok. 6,5 × 7 m, więc mieści <strong>jedną bramę ok. 5,0 m</strong> albo dwie po ok. 2,5 m. <strong>Segmentowa</strong> to panele ok. 40 mm z pianką poliuretanową, które jadą w prowadnicach pod sufit. Potrzebuje <strong>zapasu nad otworem min. ok. 20–30 cm</strong> (zależnie od systemu i napędu), <strong>węgarków bocznych ok. 10–12 cm</strong> i prostej, równej posadzki pod uszczelką.</p>
      <p>Napęd elektryczny z pilotem lub aplikacją, fotokomórka i <strong>odblokowanie awaryjne</strong> to dziś standard. Elektryk zostawia gniazdo 230 V przy suficie, ok. 50 cm za otworem.</p>
      <p><strong>Drzwi z garażu do domu</strong> oddzielają strefę zimną od ciepłej. Muszą być ocieplone, szczelne (spaliny) i z samozamykaczem. Wymagania przeciwpożarowe dla domu jednorodzinnego sprawdź w projekcie; drzwi o klasie EI 30 to rozsądny zapas.</p>`,
    cost: { min: 2500, max: 5000, note: "drzwi z garażu do domu, ocieplone, z samozamykaczem i montażem" },
    decision: {
      question: "Jaka brama garażowa?",
      intro: "Garaż ok. 6,5 × 7 m, otwór ok. 5,0 × 2,25 m, z napędem i montażem.",
      chosen: "segment",
      options: [
        { id: "segment", name: "Segmentowa, jedna ok. 5,0 m, panel 40 mm, napęd",
          cost: { min: 8500, max: 14000 }, time: "montaż 1 dzień", note: "antracyt, przetłoczenia poziome",
          pros: ["Cała szerokość wjazdu, nie wychyla się na podjazd", "Ocieplona i szczelna", "Napęd, fotokomórka, pilot w cenie"],
          cons: ["Zajmuje sufit garażu na głębokość ok. 2,5–3 m", "Wymaga nadproża i węgarków"],
          why: "Najlepsza przy garażu w bryle: ciepła, wygodna i spójna z oknami w kolorze. Jedna szeroka brama ułatwia parkowanie dwóch aut." },
        { id: "dwie", name: "Dwie segmentowe po ok. 2,5 m",
          cost: { min: 15000, max: 24000 }, time: "montaż 1–2 dni", note: "dwa napędy",
          pros: ["Otwierasz tylko połowę: mniej ciepła ucieka", "Słupek między bramami usztywnia ścianę"],
          cons: ["Drożej o ok. 7–10 tys. zł", "Ciaśniejszy wjazd"],
          why: "Gdy elewacja ma rytm dwóch bram albo konstruktor chce słupa w środku otworu." },
        { id: "uchylna", name: "Uchylna, ocieplana, z napędem",
          cost: { min: 5000, max: 8500 }, time: "montaż 1 dzień", note: "jedna płyta",
          pros: ["Taniej o ok. 4–5 tys. zł", "Mało zajmuje przy suficie"],
          cons: ["Wychyla się ok. 1 m na zewnątrz: nie zaparkujesz tuż przy niej", "Słabsze ocieplenie i uszczelnienie", "Zmniejsza wysokość wjazdu"],
          why: "Przy garażu nieogrzewanym i krótkim podjeździe może wystarczyć; w domu z garażem w bryle słabiej trzyma ciepło." },
        { id: "roletowa", name: "Roletowa (rolowana)",
          cost: { min: 9000, max: 15000 }, time: "montaż 1 dzień", note: "skrzynka nad otworem",
          pros: ["Nie zajmuje sufitu", "Dobra przy niskim nadprożu"],
          cons: ["Najsłabsza izolacja", "Głośniejsza, mniej odporna na włamanie"],
          why: "Tylko gdy nad otworem nie ma miejsca na prowadnice bramy segmentowej." }
      ]
    },
    tips: [
      "<b>Sprawdź nadproże przed zamówieniem.</b> Zbyt mały zapas nad otworem wymusza okucia niskiego prowadzenia (dopłata, gorsza praca) albo bramę roletową.",
      "<b>Posadzka garażu w poziomie wzdłuż bramy.</b> Różnica powyżej ok. 1 cm na 5 m zostawi szczelinę pod uszczelką. Bramę montuj po posadzce garażu albo z ustalonym jej poziomem.",
      "<b>Napęd z akumulatorem awaryjnym albo ręcznym odblokowaniem od środka.</b> Bez prądu i bez drugiego wejścia do garażu nie wyjedziesz.",
      "<b>Kolor i przetłoczenia jak okna.</b> Brama to ok. 11 m² frontu domu; panel gładki lub z delikatnymi poziomymi liniami w antracycie."
    ],
    mistakes: [
      "<b>Drzwi do domu bez samozamykacza i uszczelki.</b> Spaliny i zimno z garażu wchodzą do korytarza.",
      "<b>Brak gniazda dla napędu.</b> Przedłużacz przez cały garaż na stałe i kucie po tynkach.",
      "<b>Montaż bramy przed tynkami i posadzką bez ochrony.</b> Paneli nie da się dobrze umyć z zaprawy, a uszczelka dolna się niszczy."
    ],
    formal: [
      ["Deklaracja zgodności bramy z napędem", "brama z napędem jako maszyna: PN-EN 13241, instrukcja i oznakowanie CE"],
      ["Wymagania dla drzwi garaż–dom", "sprawdź w projekcie (izolacyjność, ew. odporność ogniowa); sprawdź u kierownika budowy"]
    ],
    checklist: [
      "Zapas nad otworem i węgarki zgodne z kartą bramy",
      "Gniazdo 230 V przy suficie dla napędu",
      "Brama domyka się równo na całej szerokości, fotokomórka zatrzymuje ruch",
      "Odblokowanie awaryjne działa",
      "Drzwi garaż–dom ocieplone, z progiem, uszczelką i samozamykaczem"
    ],
    quiz: [{
      q: "Czego brama segmentowa potrzebuje w otworze garażu?",
      a: ["Tylko gniazda przy podłodze", "Zapasu nad otworem i węgarków po bokach na prowadnice", "Płaskiego dachu nad garażem"],
      correct: 1,
      explain: "<b>Prowadnice biegną po bokach i pod sufitem.</b> Potrzeba ok. 20–30 cm nad otworem i ok. 10–12 cm z boków, zależnie od systemu."
    }]
  },

  /* 10 ------------------------------------------------------------------ */
  {
    id: "rolety-zaluzje",
    title: "Rolety i żaluzje fasadowe",
    lead: "Osłony zewnętrzne chronią duże przeszklenia przed przegrzaniem latem. Skrzynki, prowadnice i przewody planuje się przed elewacją, nawet jeśli same rolety kupisz później.",
    time: "decyzja przed montażem okien, montaż z oknami lub przed elewacją", team: "firma okienna, elektryk",
    facts: [["Osłon", "ok. 15 szt. + HS", "house"], ["Skrzynka w ociepleniu", "ok. 15–20 cm", "layers"], ["Przewód do każdej", "3 × 1,5", "bulb"]],
    body: `
      <p>Duże przeszklenia od południa i zachodu latem nagrzewają dom tak, że nawet rekuperacja nie pomoże. Najskuteczniej działają osłony <strong>zewnętrzne</strong>: zatrzymują słońce przed szybą. Rolety wewnętrzne i zasłony tylko zasłaniają widok.</p>
      <p><strong>Rolety podtynkowe (adaptacyjne)</strong> mają skrzynkę ukrytą w warstwie ocieplenia nad oknem: przy 20 cm styropianu mieści się ona bez zmiany nadproży z etapu 05. Prowadnice biegną w ościeżu, pancerz z aluminiowych listew zamyka okno w całości. <strong>Żaluzje fasadowe (raffstore)</strong> mają obrotowe lamele: regulujesz ilość światła, a widać przez nie ogród.</p>
      <p>Każda osłona z napędem potrzebuje <strong>przewodu 3 × 1,5 mm²</strong> do skrzynki. Elektryk (etap 08) prowadzi go przed tynkami; sterowanie może być lokalne, grupowe albo z systemu domu (etap 10).</p>`,
    decision: {
      question: "Jakie osłony zewnętrzne?",
      intro: "Ok. 15 okien i drzwi + HS w salonie, z napędem elektrycznym, montaż przed elewacją. Okna dachowe mają własne rolety (opcja w etapie 06).",
      chosen: "rolety",
      options: [
        { id: "rolety", name: "Rolety podtynkowe w ociepleniu, z napędem",
          cost: { min: 28000, max: 44000 }, time: "montaż z oknami", note: "ok. 1600–2600 zł/szt.",
          pros: ["Zamykają okno w całości: cień, prywatność, ochrona przed włamaniem", "Skrzynka niewidoczna, mieści się w 20 cm styropianu", "Ciszej w sypialniach"],
          cons: ["Zasunięte zasłaniają widok i światło", "Szerokie HS wymaga dużej skrzynki i mocnego napędu"],
          why: "Najlepszy stosunek ceny do ochrony przed przegrzaniem i włamaniem. Skrzynki w ociepleniu nie wymagają zmian nadproży." },
        { id: "fasadowe", name: "Żaluzje fasadowe (raffstore), z napędem",
          cost: { min: 48000, max: 72000 }, time: "montaż przed elewacją", note: "ok. 2800–4500 zł/szt.",
          pros: ["Regulacja światła lamelami: cień bez ciemności", "Nowoczesny wygląd, pasuje do dużych przeszkleń"],
          cons: ["Drożej o ok. 20–28 tys. zł", "Głośne przy wietrze, wymagają czujnika wiatru", "Nie zastępują rolety w sypialni (prześwitują)"],
          why: "Najwygodniejsze na duże przeszklenia od południa i zachodu. Można je dać tylko na HS i salon, a w sypialniach rolety." },
        { id: "nadstawne", name: "Rolety nadstawne (skrzynka na oknie)",
          cost: { min: 20000, max: 32000 }, time: "dostawa z oknami", note: "skrzynka widoczna od środka",
          pros: ["Taniej o ok. 8–12 tys. zł", "Montaż razem z oknem, jeden producent"],
          cons: ["Skrzynka obniża okno o ok. 15–20 cm i jest mostkiem cieplnym", "Widoczna od wewnątrz, słabsze Uw okna"],
          why: "Kompromis cenowy, ale w domu trzyszybowym z ciepłym montażem psuje izolację nad każdym oknem." },
        { id: "przygotowanie", name: "Tylko przygotowanie: przewody i miejsce w ociepleniu",
          cost: { min: 5000, max: 9000 }, time: "przed elewacją", note: "rolety dokupisz później",
          pros: ["Oszczędność dziś ok. 25–35 tys. zł", "Rolety podtynkowe da się dołożyć bez kucia, jeśli przygotowano skrzynki lub wsporniki"],
          cons: ["Pierwsze lato w domu z nagrzanym salonem", "Montaż później kosztuje więcej i rusza tynk przy oknach"],
          why: "Dobra droga, gdy budżet stanu surowego się nie spina. Zrób przewody i miejsce na skrzynki, osłony kup po przeprowadzce." }
      ]
    },
    tips: [
      "<b>Lista okien z osłonami przed pomiarem.</b> Pomiarowiec dolicza skrzynki do wymiaru, a montaż okna uwzględnia prowadnice.",
      "<b>Napęd radiowy albo przewodowy, ale z jednym systemem.</b> Mieszanie producentów utrudnia sterowanie grupowe i z aplikacji.",
      "<b>Czujnik wiatru dla żaluzji fasadowych.</b> Przy porywach ok. 50–60 km/h lamele same się podnoszą.",
      "<b>Okna dachowe też grzeją.</b> Rolety zewnętrzne solarne do 4 okien dachowych to ok. 1,5–2,5 tys. zł/szt. (opcja w etapie 06)."
    ],
    mistakes: [
      "<b>Osłony dokupione po elewacji.</b> Zostaje roleta nadstawna na fasadzie albo cięcie świeżego tynku i styropianu.",
      "<b>Brak przewodów do skrzynek.</b> Kable po tynku albo silniki na baterie, które trzeba ładować.",
      "<b>Rolety tylko od środka na HS od południa.</b> Szyba i tak się nagrzewa, ciepło zostaje w salonie."
    ],
    checklist: [
      "Lista okien z osłonami ustalona przed pomiarem",
      "Skrzynki i prowadnice zamontowane przed elewacją",
      "Przewód 3 × 1,5 do każdej skrzynki, opisany w rozdzielnicy",
      "Napędy działają, krańcówki ustawione, pancerz nie ociera"
    ],
    quiz: [{
      q: "Dlaczego osłony zewnętrzne chronią przed przegrzaniem lepiej niż rolety wewnętrzne?",
      a: ["Bo są grubsze", "Bo zatrzymują słońce, zanim dojdzie do szyby", "Bo działają tylko w nocy"],
      correct: 1,
      explain: "<b>Ciepło ma zostać na zewnątrz.</b> Roleta wewnętrzna nagrzewa się za szybą i oddaje ciepło do pokoju; zewnętrzna zatrzymuje je przed oknem."
    }]
  },

  /* 11 ------------------------------------------------------------------ */
  {
    id: "ochrona-okien",
    title: "Ochrona okien do końca budowy",
    lead: "Od montażu do przeprowadzki minie pół roku tynków, wylewek i elewacji. Okna trzeba w tym czasie chronić przed zaprawą, uderzeniem i wilgocią.",
    time: "do końca budowy", team: "ty, każda ekipa",
    facts: [["Folia fabryczna", "zdjąć w ciągu ok. 2–3 mies.", "clock"], ["Wilgotność przy wylewkach", "wietrz kilka razy dziennie", "alert"]],
    body: `
      <p>Zaraz po montażu okna i drzwi przykrywa się <strong>folią ochronną z taśmą malarską do budowy</strong>, a progi HS i drzwi <strong>płytą lub nakładką</strong>. Fabryczną folię z profili zdejmij w ciągu ok. 2–3 miesięcy: dłużej na słońcu wtapia się w okleinę.</p>
      <p>Największe zagrożenie to <strong>wilgoć</strong>. Tynki i wylewki (etap 11) wnoszą do domu kilka ton wody. Przy szczelnych oknach woda skrapla się na szybach i w okuciach. Wietrz kilka razy dziennie na pełne otwarcie, nie w mikrowentylacji, i nie zostawiaj okien uchylonych na noc zimą.</p>`,
    cost: { min: 500, max: 1500, note: "folie, taśmy, nakładki progowe, osłony ościeży" },
    tips: [
      "<b>Taśma do budowy, nie pakowa.</b> Zwykła taśma po słońcu zostawia klej, którego nie zmyjesz z okleiny. Taśma malarska UV z deklaracją na kilka tygodni.",
      "<b>Okucia nasmaruj i zamknij.</b> Pył tynkarski w okuciu to zużyty mechanizm. Przed tynkami okna zamknięte, a wietrzenie przez wskazane okna.",
      "<b>Zaprawę zmywaj od razu wodą.</b> Zaschnięty tynk na szybie zdrapany szpachlą zostawia rysy.",
      "<b>Klucz do drzwi wejściowych u ciebie.</b> Ekipy dostają wkładkę budowlaną; docelową zakładasz po zakończeniu prac."
    ],
    mistakes: [
      "<b>Okna jako podpora rusztowania albo drabiny.</b> Krzywe skrzydło i pęknięte szyby.",
      "<b>Szlifowanie, cięcie i spawanie przy oknie.</b> Iskry zostawiają na szybie trwałe wżery.",
      "<b>Folia fabryczna zostawiona na rok.</b> Na profilu zostają ślady kleju i odbarwienia."
    ],
    checklist: [
      "Okna i drzwi osłonięte folią, progi zabezpieczone płytą",
      "Fabryczna folia zdjęta w ciągu ok. 2–3 miesięcy",
      "Ustalony plan wietrzenia przy tynkach i wylewkach"
    ]
  },

  /* 12 ------------------------------------------------------------------ */
  {
    id: "odbior-stolarki",
    title: "Odbiór: szczelność i regulacja",
    lead: "Odbiór stolarki to sprawdzenie każdego okna: czy siedzi w pionie, domyka się, nie wieje i ma szczelne taśmy. Regulację robi się dwa razy: po montażu i po pierwszym sezonie.",
    time: "0,5–1 dnia", team: "ty, kierownik budowy, monter",
    facts: [["Okien do odbioru", "ok. 20 z drzwiami i bramą", "listcheck"], ["Test szczelności", "przed tynkami (opcjonalnie)", "compare"]],
    body: `
      <p>Przy odbiorze sprawdzasz <strong>każde okno</strong>: pion i poziom, równe szczeliny między skrzydłem a ramą, domykanie bez dociskania, działanie wszystkich pozycji klamki, ciągłość taśm na całym obwodzie i brak uszkodzeń szyb oraz okleiny. Monter ustawia docisk okuć i opadanie skrzydeł.</p>
      <p>Przy rekuperacji warto zrobić <strong>wstępny test szczelności (blower door)</strong> przed tynkami: wentylator w drzwiach robi podciśnienie, a ty szukasz przewiewów dymem albo dłonią przy oknach. Nieszczelną taśmę poprawisz jeszcze bez kucia. Test końcowy robi się po wykończeniu (etap 16).</p>
      <p>Po pierwszym sezonie grzewczym zamów <strong>przegląd gwarancyjny</strong>: regulację okuć, smarowanie i sprawdzenie uszczelek.</p>`,
    cost: { min: 800, max: 1500, note: "wstępny test szczelności przed tynkami, orientacyjnie" },
    tips: [
      "<b>Kartka papieru jako test docisku.</b> Zamknij okno na kartce. Gdy da się ją wyciągnąć bez oporu, docisk jest za słaby.",
      "<b>Domykanie bez uniesienia skrzydła.</b> Skrzydło, które trzeba podnieść, żeby zamknąć, jest źle wyregulowane albo okno stoi krzywo.",
      "<b>Lista usterek z numerami okien.</b> Wpisz do protokołu, monter poprawia w ciągu ok. 14 dni; ostatnią płatność zostaw do poprawek.",
      "<b>Test szczelności przed tynkami.</b> Wynik n50 ok. 1,0–1,5 h⁻¹ na tym etapie wróży dobry wynik końcowy z rekuperacją (orientacyjnie, cel ustala projektant)."
    ],
    mistakes: [
      "<b>Odbiór „z daleka”.</b> Wady taśm i pianki widać tylko z bliska, przed tynkami. Później są pod zaprawą.",
      "<b>Płatność całości przed regulacją.</b> Po zapłacie na poprawki czeka się tygodniami.",
      "<b>Brak przeglądu po pierwszej zimie.</b> Dom osiada, okucia pracują. Bez regulacji uszczelki się zużywają, a gwarancja może wymagać przeglądu."
    ],
    formal: [
      ["Protokół odbioru stolarki", "lista okien, usterki, termin usunięcia, podpisy; ostatnia płatność po poprawkach"],
      ["Karty gwarancyjne i instrukcje", "okna, drzwi, brama, rolety; warunki przeglądów"],
      ["Wpis do dziennika budowy", "kierownik budowy: zakończenie stanu surowego zamkniętego"]
    ],
    checklist: [
      "Wszystkie okna w pionie i poziomie, równe szczeliny skrzydło–rama",
      "Skrzydła domykają się bez dociskania, klamka działa we wszystkich pozycjach",
      "Taśmy ciągłe na całym obwodzie, bez fałd i odklejeń",
      "Brak rys na szybach i uszkodzeń okleiny",
      "Drzwi, brama i rolety działają, piloty i klucze przekazane",
      "Protokół z listą usterek i terminem poprawek podpisany"
    ],
    quiz: [{
      q: "Kiedy najlepiej poszukać nieszczelności przy oknach?",
      a: ["Po malowaniu ścian", "Przed tynkami, gdy taśmy są jeszcze widoczne", "Dopiero po pierwszej zimie"],
      correct: 1,
      explain: "<b>Po tynkach taśm już nie widać.</b> Wstępny test szczelności i oględziny przed tynkami pozwalają poprawić taśmę w kilka minut zamiast kuć ościeże."
    }, {
      q: "Co sprawdza test „kartki papieru” przy zamkniętym oknie?",
      a: ["Czy szyba nie jest porysowana", "Docisk skrzydła do uszczelki", "Kierunek otwierania"],
      correct: 1,
      explain: "<b>Kartka powinna stawiać opór.</b> Jeśli wysuwa się swobodnie, okucie trzeba wyregulować, bo tamtędy będzie wiało."
    }]
  }

  ]
});
