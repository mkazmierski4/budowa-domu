/* Etap 12: Elewacja. Ocieplenie ścian (ETICS), cokół, tynk, kamień, deska, podbitka. Ceny orientacyjne, 2026 r., okolice małego miasta.
   Dom referencyjny: ok. 300 m² ścian brutto, ok. 250 m² netto (bez okien, drzwi i bramy); tynk ok. 175 m², kamień ok. 30 m², deska ok. 45 m². */
(function(){
const XR = (id, t) => `<button class="xref" data-section="${id}"><svg class="ico"><use href="#i-layers"/></svg>${t || "zobacz w przekroju"}</button>`;

BUDOWA.addStage({
  id: "12-elewacja", nr: 12, title: "Elewacja", icon: "🎨", category: "wykoncz",
  summary: "Ocieplenie ścian styropianem grafitowym 20 cm, cokół z tynkiem mozaikowym, tynk silikonowy, kamień przy wejściu, deska modrzewiowa i podbitka. Dom dostaje wygląd ze zdjęcia inspiracji.",
  duration: "6–10 tyg. (w sezonie)",
  steps: [

  /* 1 ------------------------------------------------------------------ */
  {
    id: "plan-elewacji",
    title: "Plan elewacji: materiały, kolory, kolejność",
    lead: "Elewację planujesz na rysunku, zanim przyjedzie pierwsza paleta styropianu. Trzeba ustalić, gdzie kończy się tynk, gdzie zaczyna kamień i deska, i co jest pod spodem.",
    time: "1–2 tyg. przed startem", team: "ty, architekt lub wykonawca",
    facts: [["Ściany netto", "ok. 250 m²", "house"], ["Tynk / kamień / deska", "ok. 70 / 12 / 18%", "layers"]],
    body: `
      <p>Nasz dom ma ok. <strong>300 m² ścian brutto</strong> (z trójkątami szczytów i garażem). Po odjęciu okien, drzwi, HS i bramy zostaje ok. <strong>250 m²</strong> do ocieplenia. Na tym leżą trzy wykończenia jak na zdjęciu inspiracji: <strong>tynk</strong> (ok. 175 m²), <strong>kamień</strong> przy wejściu i na froncie garażu (ok. 30 m²) oraz <strong>deska</strong> na szczycie i przy tarasie (ok. 45 m²).</p>
      <p>Ocieplenie jest jedno pod całym domem: <strong>styropian grafitowy 20 cm</strong> w systemie ETICS (klej, kołki, siatka, tynk od jednego producenta). Pod kamieniem i deską też jest styropian z warstwą zbrojoną, tylko bez tynku. ${XR("ocieplenie")}</p>
      <p>Kolejność robót: rusztowanie → podłoże i montażówki → cokół → klejenie styropianu → kołki i szlifowanie → warstwa zbrojona z detalami przy oknach → tynk → kamień i deska → podbitka → demontaż rusztowania.</p>`,
    cost: { min: 300, max: 1000, note: "próbki tynku i kamienia, ewentualnie wizualizacja kolorów" },
    tips: [
      "<b>Narysuj podział na elewacjach z projektu.</b> Wydrukuj 4 widoki, zakreśl kolorami tynk, kamień i deskę. Każda granica materiałów to profil, listwa albo dylatacja, więc lepiej, żeby było ich mało.",
      "<b>Granice materiałów stawiaj na narożnikach i krawędziach okien.</b> Zmiana tynku na deskę w środku płaskiej ściany wygląda gorzej i jest trudniejsza w obróbce.",
      "<b>Sprawdź kolorystykę w planie miejscowym.</b> MPZP potrafi narzucić np. stonowane kolory elewacji. Kolor tynku i kamienia wybieraj z tym zapisem w ręku.",
      "<b>Próbki oglądaj na zewnątrz, w słońcu i w cieniu.</b> Próbka tynku A4 w salonie sprzedawcy wygląda o 1–2 tony ciemniej niż 175 m² ściany w południowym słońcu.",
      "<b>Jeden system na całą elewację.</b> Klej, siatka, kołki, grunt i tynk od jednego producenta. Tylko wtedy masz gwarancję systemu i jasną odpowiedzialność."
    ],
    mistakes: [
      "<b>Wybór kamienia „na końcu”.</b> Ciężka okładzina wymaga innego kołkowania i kleju niż tynk. Trzeba o niej wiedzieć, zanim ekipa przyklei styropian.",
      "<b>Mieszanie produktów różnych firm.</b> Tańszy klej jednej firmy i siatka drugiej to brak gwarancji systemu, a przy odpadającej elewacji każdy zrzuca winę na drugiego.",
      "<b>Za dużo materiałów na jednej ścianie.</b> Tynk, kamień, deska i płyty na jednym widoku to chaos. Na zdjęciu inspiracji każda ściana ma najwyżej dwa materiały."
    ],
    formal: [
      ["Projekt budowlany: ocieplenie i kolorystyka", "grubość i materiał ocieplenia wg projektu; zmianę grubości lub materiału uzgodnij z projektantem i kierownikiem budowy"],
      ["MPZP: ustalenia o kolorach i materiałach elewacji", "wypis z planu z etapu 01"]
    ],
    checklist: [
      "Elewacje z zaznaczonym tynkiem, kamieniem i deską",
      "Wybrany jeden system ETICS (karta systemu, lista składników)",
      "Kolor tynku sprawdzony w MPZP i na próbce w słońcu",
      "Kamień i deska wybrane przed klejeniem styropianu"
    ],
    quiz: [{
      q: "Dlaczego kamień na elewacji trzeba wybrać przed klejeniem styropianu?",
      a: ["Bo kamień jest drogi i trzeba go zamówić wcześniej", "Bo ciężka okładzina wymaga innego kleju, kołkowania i dopuszczenia w systemie", "Bo kamień kładzie się bezpośrednio na mur"],
      correct: 1,
      explain: "<b>Kamień zmienia sposób mocowania ocieplenia.</b> System musi dopuszczać okładzinę o danym ciężarze, a kołki często idą przez siatkę zbrojącą. To trzeba wiedzieć przed startem."
    }],
    widget: "kalkulator-elewacji"
  },

  /* 2 ------------------------------------------------------------------ */
  {
    id: "pogoda",
    title: "Kiedy robić elewację: pogoda i temperatura",
    lead: "Kleje i tynki to chemia, która lubi umiarkowaną pogodę. Za zimno, za gorąco, deszcz albo silny wiatr i elewacja traci przyczepność albo kolor.",
    time: "kwiecień–wrzesień", team: "kierownik ekipy",
    facts: [["Temperatura prac", "ok. +5 do +25°C", "sun"], ["Bez deszczu", "min. 24–48 h po tynku", "clock"]],
    body: `
      <p>Według harmonogramu z etapu 00 dom stoi zamknięty przez zimę, a w środku trwają instalacje, tynki i wylewki. <strong>Elewację robisz wiosną</strong>, kiedy wilgoć z tynków i jastrychów częściowo odparuje, a noce są już na plusie.</p>
      <p>Typowe granice z kart systemów (sprawdź u swojego producenta): <strong>temperatura powietrza i podłoża ok. +5 do +25°C</strong>, także w nocy, wilgotność względna niezbyt wysoka, <strong>bez deszczu i bezpośredniego, ostrego słońca</strong> na świeżej warstwie. Tynk silikatowy często wymaga min. ok. +8°C.</p>
      <p>Na rusztowaniu wieszasz <strong>siatkę osłonową</strong>. Chroni świeży tynk przed słońcem, wiatrem i deszczem, a grafitowy styropian przed nagrzewaniem.</p>`,
    tips: [
      "<b>Sprawdzaj prognozę na 3 dni do przodu.</b> Tynk potrzebuje ok. 24–48 h bez deszczu i mrozu. Nie zaczynaj ściany, jeśli w nocy ma być przymrozek.",
      "<b>Słońce „chodzi” po domu.</b> Rano tynkuj ścianę zachodnią, po południu wschodnią. Południową najlepiej w pochmurny dzień albo za gęstą siatką.",
      "<b>Wiatr suszy szybciej niż słońce.</b> Przy porywistym wietrze tynk zasycha w pasy i widać łączenia. Wtedy lepiej robić warstwę zbrojoną niż tynk.",
      "<b>Plan na sezon:</b> kwiecień–maj ocieplenie i zbrojenie, maj–czerwiec tynk, czerwiec–lipiec kamień, deska i podbitka. Wrzesień to ostatni bezpieczny miesiąc na tynk."
    ],
    mistakes: [
      "<b>Tynk „na wyścigi” w październiku.</b> Zimne noce spowalniają wiązanie, a pierwszy przymrozek niszczy świeżą warstwę. Skutek: przebarwienia i odspojenia.",
      "<b>Tynkowanie w pełnym słońcu w lipcu.</b> Ściana ma 40°C, tynk wysycha w minutę, widać każde zatrzymanie pacy.",
      "<b>Ocieplanie mokrych murów zaraz po tynkach wewnętrznych.</b> Wilgoć zamknięta pod styropianem długo schnie do środka i potrafi dać pleśń w narożach."
    ],
    checklist: [
      "Tynki i wylewki wewnątrz przeschły (min. kilka tygodni wietrzenia)",
      "Prognoza: min. +5°C w nocy, bez deszczu przez 24–48 h",
      "Siatka osłonowa na rusztowaniu",
      "Harmonogram ścian według słońca"
    ],
    quiz: [{
      q: "Jaka pogoda jest najlepsza do kładzenia tynku cienkowarstwowego?",
      a: ["Upał i pełne słońce, bo tynk szybko wyschnie", "Pochmurno, ok. 10–20°C, bez wiatru i deszczu", "Każda, byle nie padało"],
      correct: 1,
      explain: "<b>Tynk musi wiązać równo.</b> Słońce i wiatr suszą go nierówno (widać łączenia), a deszcz i mróz go niszczą. Najlepiej umiarkowanie i pochmurno."
    }]
  },

  /* 3 ------------------------------------------------------------------ */
  {
    id: "rusztowanie",
    title: "Rusztowanie elewacyjne",
    lead: "Rusztowanie z etapu 05 zwykle zjechało po dachu. Do elewacji wraca drugi raz, odsunięte od muru tak, żeby zmieściło się 20 cm styropianu i ręce tynkarza.",
    time: "1–2 dni montażu, 2–3 mies. najmu", team: "firma rusztowaniowa",
    facts: [["Rusztowanie", "ok. 330–380 m²", "layers"], ["Odstęp od muru", "ok. 35–40 cm", "rebar"]],
    body: `
      <p>Ramowe rusztowanie z wynajmu, z montażem, demontażem i <strong>protokołem odbioru</strong>. Obejmuje cały obwód domu i garażu oraz szczyty do kalenicy. Pomosty stoją ok. <strong>35–40 cm od muru</strong>: 20 cm zajmie styropian, reszta to miejsce na pracę.</p>
      <p>Rusztowanie kotwi się do muru. Kotwy przechodzą przez ocieplenie, więc po demontażu zostają otwory, które ekipa zaślepia i dotynkowuje. Ustal to w umowie.</p>
      <p>Na rusztowaniu wisi <strong>siatka osłonowa</strong>: bezpieczeństwo (nic nie spada) i ochrona świeżego tynku przed słońcem i wiatrem.</p>`,
    cost: { min: 7000, max: 11000, note: "montaż, demontaż, najem 2–3 mies., siatka osłonowa" },
    tips: [
      "<b>Pomost na wysokości ok. 1,8–2 m pod kolejnym poziomem.</b> Tynkarz musi sięgnąć całej wysokości między pomostami bez schylania się. Ustal z firmą rozstaw poziomów.",
      "<b>Najem liczony za tydzień albo miesiąc.</b> Zaplanuj roboty tak, żeby rusztowanie nie stało w czasie oczekiwania na kamień czy deskę. Każdy miesiąc to orientacyjnie 2–3 tys. zł.",
      "<b>Kotwy rusztowania w miejscach, gdzie potem będzie deska.</b> Otwory po kotwach pod deską nie będą widoczne. Pod tynkiem zostają ślady, jeśli poprawka jest źle zrobiona.",
      "<b>Przy garażu i tarasie zostaw przejście.</b> Ekipy od instalacji i ogrodu też będą chodzić wokół domu."
    ],
    mistakes: [
      "<b>Rusztowanie za blisko muru.</b> Po przyklejeniu styropianu zostaje kilka centymetrów i nie da się równo zatrzeć tynku. Ekipa przestawia rusztowanie w trakcie i rośnie rachunek.",
      "<b>Brak protokołu odbioru.</b> Rusztowanie bez protokołu to ryzyko przy wypadku i kontroli. Firma ma je oddać do użytkowania na piśmie.",
      "<b>Kotwy wyrwane i dziury zaklejone samym tynkiem.</b> Po roku w tych miejscach widać kropki. Otwór trzeba wypełnić styropianem lub pianką, zazbroić i dopiero tynkować."
    ],
    formal: [
      ["Protokół odbioru rusztowania", "firma rusztowaniowa, przed rozpoczęciem prac"],
      ["Wpis do dziennika budowy", "kierownik budowy: rozpoczęcie robót elewacyjnych"]
    ],
    checklist: [
      "Rusztowanie wokół domu i garażu, do kalenicy szczytów",
      "Odstęp pomostów od muru ok. 35–40 cm",
      "Protokół odbioru od firmy",
      "Siatka osłonowa zawieszona",
      "W umowie: zaślepienie otworów po kotwach"
    ]
  },

  /* 4 ------------------------------------------------------------------ */
  {
    id: "podloze",
    title: "Przygotowanie podłoża i montażówki",
    lead: "Styropian trzyma się tylko tak dobrze, jak dobre jest podłoże. Mur ma być suchy, równy, nośny i czysty, a wszystko, co później przykręcisz do ściany, potrzebuje zawczasu twardego punktu w ociepleniu.",
    time: "2–4 dni", team: "2 osoby z ekipy elewacyjnej",
    facts: [["Nierówności muru", "do ok. 1–2 cm", "rebar"]],
    body: `
      <p>Ekipa sprawdza mur łatą: <strong>ubytki i dziury uzupełnia zaprawą</strong>, nacieki i resztki zaprawy skuwa, ściany odkurza. Nierówności do ok. 1–2 cm wyrówna klej pod styropianem, większe trzeba wyrównać zaprawą. Podłoże pyliste lub chłonne dostaje <strong>grunt</strong> z systemu.</p>
      <p>Teraz jest ostatni moment na <strong>montażówki</strong>: twarde wkładki (z twardego tworzywa lub gęstego EPS) w miejscach, gdzie zawiśnie coś ciężkiego: kinkiety (przewody z etapu 08), numer domu, skrzynka na listy, uchwyty rynien przy ścianie, zadaszenie wejścia, markiza. Wkręcasz w nie później bez mostka i bez zgniatania styropianu.</p>
      <p>Sprawdź też, czy są gotowe: <strong>skrzynki rolet</strong> (etap 07), przepusty instalacji (rury pompy ciepła, czerpnia rekuperacji w ścianie szczytowej z etapu 10) i przewody do lamp.</p>`,
    cost: { min: 1500, max: 3500, note: "zaprawa, grunt, montażówki ok. 10–15 szt., robocizna" },
    tips: [
      "<b>Test przyczepności „na taśmę”.</b> Naklej taśmę na mur, oderwij szarpnięciem. Jeśli zostaje dużo pyłu, ściana wymaga odkurzenia i gruntowania.",
      "<b>Przewody do lamp wyprowadź ok. 25 cm ponad lico muru.</b> Po ociepleniu 20 cm zostanie zapas do podłączenia. Zaznacz ich miejsce na zdjęciu z miarą.",
      "<b>Montażówki zamawiaj pod konkretny przedmiot.</b> Lampa: mały krążek; zadaszenie wejścia: blok z kotwami chemicznymi wg producenta zadaszenia.",
      "<b>Wilgotność muru sprawdzisz miernikiem</b> (kilkadziesiąt zł). Ceramika poniżej ok. 4–5% to dobry znak; wyższy wynik, zwłaszcza od dołu, oznacza, że trzeba jeszcze przewietrzyć."
    ],
    mistakes: [
      "<b>Klejenie na mokry lub zapylony mur.</b> Klej trzyma pył, nie ścianę. Płyty odpadają przy pierwszym silnym wietrze.",
      "<b>Lampy przykręcane później na długie kołki przez styropian.</b> Kołek zgniata ocieplenie, lampa się przechyla, a wokół robi się mostek i pęknięcie tynku.",
      "<b>Zapomniane przepusty.</b> Przewiercanie gotowej elewacji pod rurę pompy ciepła czy kabel kamery to ryzyko zacieków i rys."
    ],
    checklist: [
      "Ubytki uzupełnione, nacieki skute, ściana odkurzona",
      "Grunt na podłożu pylistym",
      "Montażówki w miejscach lamp, numeru, zadaszenia i markizy",
      "Przewody do lamp wyprowadzone ok. 25 cm przed lico muru",
      "Skrzynki rolet i przepusty instalacji gotowe"
    ]
  },

  /* 5 ------------------------------------------------------------------ */
  {
    id: "cokol",
    title: "Cokół: XPS i tynk mozaikowy",
    lead: "Cokół to najbardziej narażony pas elewacji: chlapie w niego deszcz, uderza kosiarka, zimą leży śnieg. Dlatego jest z XPS i ma tynk mozaikowy, a nie zwykły.",
    time: "2–3 dni", team: "2 osoby",
    facts: [["XPS", "15 cm, do ok. +30 cm nad teren", "layers"], ["Cokół", "ok. 30 m²", "house"]],
    body: `
      <p>W etapie 04 ściana fundamentowa dostała <strong>XPS 15 cm</strong>, wyprowadzony do ok. <strong>+30 cm nad teren</strong>. Wyżej zaczyna się styropian grafitowy. Lica obu płyt są w jednej płaszczyźnie, a różnicę grubości (15 i 20 cm) wyrównuje się klejem albo cokół zostaje lekko cofnięty o 5 cm z listwą okapnikową. To ustala projekt detalu. ${XR("xps")}</p>
      <p>Na XPS idzie <strong>warstwa zbrojona</strong> (XPS ma szorstką albo frezowaną powierzchnię, gładką trzeba przeszlifować), a potem <strong>tynk mozaikowy</strong>: żywica z kolorowymi grysami, odporna na wodę, uderzenia i brud. Tynk schodzi kilka centymetrów poniżej przyszłego terenu. ${XR("mozaika")}</p>
      <p>Po elewacji, w etapie 15, wzdłuż cokołu powstanie <strong>opaska żwirowa</strong> ok. 30–50 cm. Ogranicza rozbryzg błota.</p>`,
    cost: { min: 4000, max: 6500, note: "warstwa zbrojona na XPS, tynk mozaikowy ok. 30 m², profile" },
    tips: [
      "<b>Kolor mozaiki ciemniejszy od tynku.</b> Grafit, antracyt albo ciemny beż: ślady błota znikają. Dobrze łączy się z antracytowymi oknami i rynnami.",
      "<b>Granica cokół–tynk musi być prosta.</b> Ekipa wyznacza ją laserem albo sznurem, a nie „po XPS-ie”. Na 13 m elewacji 2 cm różnicy widać od razu.",
      "<b>Mozaikę nakłada się pacą ze stali nierdzewnej</b>, cienko, na grubość ziaren. Narzędzie z czarnej stali zostawia szare smugi.",
      "<b>Zabezpiecz dolną krawędź.</b> Poniżej terenu warstwa zbrojona i mozaika dochodzą do izolacji przeciwwilgociowej z etapu 04; nie zostawiaj odsłoniętego XPS pod ziemią bez ochrony."
    ],
    mistakes: [
      "<b>Zwykły tynk silikonowy na cokole.</b> Po roku jest ochlapany, porysowany i zielenieje od dołu.",
      "<b>Styropian EPS zamiast XPS przy gruncie.</b> EPS nasiąka wodą i kruszy się po kilku zimach. Przy gruncie i na cokole tylko XPS.",
      "<b>Mozaika kończy się równo z terenem.</b> Po ułożeniu opaski i kostki widać pas gołej siatki. Tynk ma schodzić kilka centymetrów poniżej."
    ],
    checklist: [
      "XPS do ok. +30 cm nad teren, styk z EPS bez szczeliny",
      "Warstwa zbrojona na XPS z siatką",
      "Granica cokół–tynk wyznaczona laserem",
      "Mozaika schodzi kilka cm poniżej przyszłego terenu"
    ],
    quiz: [{
      q: "Dlaczego na cokole jest XPS, a nie zwykły styropian?",
      a: ["Bo XPS jest tańszy", "Bo XPS prawie nie nasiąka wodą i znosi mróz oraz uderzenia", "Bo XPS lepiej izoluje akustycznie"],
      correct: 1,
      explain: "<b>Przy gruncie jest mokro.</b> XPS ma zamknięte komórki, więc nie chłonie wody i nie kruszy się po zimach. EPS w tej strefie szybko się niszczy."
    }]
  },

  /* 6 ------------------------------------------------------------------ */
  {
    id: "ocieplenie",
    title: "Ocieplenie ścian: styropian czy wełna",
    lead: "Ocieplenie to warstwa, która decyduje o rachunkach na następne 30 lat. Do pustaka 25 cm wybieramy styropian grafitowy 20 cm, a wełna to wariant droższy, ale niepalny i paroprzepuszczalny.",
    time: "decyzja przed zamówieniem", team: "ty, projektant",
    facts: [["Styropian grafitowy", "λ ok. 0,031 W/(m·K)", "layers"], ["U ściany", "ok. 0,13 W/(m²·K)", "stamp"]],
    body: `
      <p>Ściana z pustaka ceramicznego 25 cm i <strong>styropianu grafitowego 20 cm</strong> ma współczynnik U ok. <strong>0,13 W/(m²·K)</strong> (orientacyjnie, dokładnie liczy projektant). Wymaganie WT2021 dla ściany zewnętrznej to <strong>U ≤ 0,20</strong>, więc mamy spory zapas, który przy pompie ciepła daje niższe rachunki. ${XR("ocieplenie")}</p>
      <p>Na ok. 250 m² ścian potrzeba ok. <strong>52 m³ styropianu</strong> (z ok. 5% zapasu na docinki). Płyty fasadowe, grafitowe (szare), o λ ok. 0,031–0,033 i oznaczeniu do ETICS (np. EPS 70 lub 80).</p>
      <p>Wełna mineralna fasadowa (lamelowa lub płytowa) jest niepalna i bardzo paroprzepuszczalna, ale cięższa, droższa i wolniejsza w montażu. W domu jednorodzinnym przepisy nie wymagają wełny; sens ma przy życzeniu „ściany oddychającej” albo specjalnych wymaganiach pożarowych.</p>`,
    cost: { min: 14000, max: 18000, note: "styropian grafitowy 20 cm ok. 52 m³ z dostawą" },
    decision: {
      question: "Czym ocieplić ściany?",
      intro: "Koszt opcji to dopłata albo oszczędność względem styropianu grafitowego 20 cm (materiał i robocizna na ok. 250 m²).",
      chosen: "grafit20",
      options: [
        { id: "grafit20", name: "Styropian grafitowy 20 cm (λ ok. 0,031)",
          cost: { min: 0, max: 0 }, time: "ok. 2 tyg. klejenia", note: "U ściany ok. 0,13",
          pros: ["Duży zapas względem WT2021", "Lekki, szybki w montażu, tani", "Zgodny z przekrojem i ciepłym montażem okien z etapu 07 (rama zachodzi w ocieplenie)"],
          cons: ["Palny (w systemie ETICS dopuszczony do domów jednorodzinnych)", "Na słońcu nagrzewa się i odkształca: potrzebna siatka osłonowa", "Słabo paroprzepuszczalny"],
          why: "Najlepszy stosunek ceny do izolacyjności. Grubość 20 cm pasuje do skrzynek rolet i konsol okien z etapu 07, a niskie U zmniejsza pracę pompy ciepła." },
        { id: "grafit15", name: "Styropian grafitowy 15 cm",
          cost: { min: -6000, max: -4000 }, time: "jak wyżej", note: "U ściany ok. 0,16–0,17",
          pros: ["Taniej o kilka tysięcy zł", "Spełnia WT2021"],
          cons: ["Mniejszy zapas izolacyjności, wyższe rachunki przez lata", "Skrzynki rolet i konsole okien z etapu 07 projektowane pod 20 cm: trzeba je ukryć inaczej"],
          why: "Ma sens tylko przy innym projekcie okien i rolet. Oszczędność na materiale zwraca się w rachunkach po kilkunastu latach." },
        { id: "welna", name: "Wełna mineralna fasadowa 20 cm",
          cost: { min: 20000, max: 32000 }, time: "+1 tydz.", note: "λ ok. 0,035–0,036, U ok. 0,15",
          pros: ["Niepalna (klasa A1)", "Bardzo paroprzepuszczalna: mur szybciej schnie", "Lepiej tłumi hałas z zewnątrz"],
          cons: ["Materiał 2× droższy, więcej kołków i kleju", "Wolniejszy montaż, wrażliwa na deszcz w trakcie", "Wymaga tynku silikatowego lub silikonowego, nie akrylowego"],
          why: "Wybierz, jeśli zależy ci na niepalnej elewacji albo murze o dużej wilgotności. W budżecie 2,3 mln zł to ok. 26 tys. zł więcej bez zysku na rachunkach." }
      ]
    },
    tips: [
      "<b>Na każdej paczce sprawdź etykietę:</b> λ (0,031–0,033), przeznaczenie „fasada / ETICS”, numer partii. Płyty z jednej partii mają ten sam wymiar.",
      "<b>Styropian sezonowany.</b> Świeży z fabryki jeszcze się kurczy. Pytaj, czy płyty leżały min. kilka tygodni; skurczony na ścianie robi szczeliny.",
      "<b>Palety trzymaj w cieniu, pod plandeką w jasnym kolorze.</b> Grafitowy styropian na słońcu potrafi się wypaczyć jeszcze przed klejeniem.",
      "<b>Liczysz ok. 52 m³, czyli ok. 260 płyt 100 × 50 × 20 cm.</b> Ekipa zamawia z zapasem ok. 5%; resztki przydadzą się do ościeży i poprawek."
    ],
    mistakes: [
      "<b>Biały styropian 040 „bo taniej” w tej samej grubości.</b> U ściany rośnie o ok. 25%, a oszczędność to kilka tysięcy zł.",
      "<b>Styropian podłogowy albo „budowlany” bez oznaczenia do ETICS.</b> Ma inne parametry i system traci gwarancję.",
      "<b>Zmiana grubości bez sprawdzenia detali.</b> Skrzynki rolet, konsole okien i parapety z etapu 07 są dobrane pod 20 cm."
    ],
    formal: [
      ["Deklaracja właściwości użytkowych styropianu", "od producenta, w dokumentach budowy"],
      ["Ocena techniczna (lub aprobata) zestawu ETICS", "od producenta systemu; zbierasz do odbioru"]
    ],
    checklist: [
      "Styropian grafitowy do ETICS, λ ≤ 0,033, 20 cm",
      "Płyty z jednej partii, sezonowane",
      "Palety w cieniu, pod jasną plandeką",
      "Dokumenty: deklaracja i ocena techniczna systemu"
    ],
    quiz: [{
      q: "Ile wynosi orientacyjnie U naszej ściany (pustak 25 + grafit 20 cm) i jaki jest limit WT2021?",
      a: ["U ok. 0,13; limit 0,20 W/(m²·K)", "U ok. 0,25; limit 0,30", "U ok. 0,20; limit 0,15"],
      correct: 0,
      explain: "<b>Mamy zapas.</b> Limit dla ścian zewnętrznych to 0,20 W/(m²·K). 20 cm grafitu daje ok. 0,13, co przy pompie ciepła obniża rachunki."
    }]
  },

  /* 7 ------------------------------------------------------------------ */
  {
    id: "klejenie",
    title: "Klejenie metodą obwodowo-punktową",
    lead: "Klej idzie pasem po obwodzie płyty i kilkoma plackami w środku. Pas po obwodzie zamyka szczeliny, żeby za płytą nie krążyło zimne powietrze.",
    time: "ok. 1,5–2 tyg.", team: "3–4 osoby",
    facts: [["Pokrycie klejem", "min. ok. 40%", "check"], ["Klej", "ok. 4–5 kg/m²", "layers"]],
    body: `
      <p>Klej na płytę: <strong>pas ok. 3–5 cm szerokości po obwodzie</strong>, odsunięty ok. 2 cm od krawędzi, i <strong>3–6 placków</strong> w środku. Po dociśnięciu klej ma pokryć <strong>min. ok. 40%</strong> powierzchni (sprawdź wymaganie systemu). Na równym murze dopuszczalne jest też klejenie na całej powierzchni zębatą pacą.</p>
      <p>Płyty kładzie się <strong>od dołu</strong>, od listwy lub krawędzi XPS, poziomo, <strong>z przesunięciem spoin o min. ok. 15–20 cm</strong> (mijankowo). Na narożnikach płyty zazębiają się na przemian. Przy oknach płyta jest wycinana w kształt litery L, żeby spoina nie wypadała na linii narożnika otworu.</p>
      <p>Styropian zachodzi na ramę okna ok. 2–3 cm (ciepły montaż z etapu 07) i przykrywa skrzynki rolet.</p>`,
    cost: { min: 11500, max: 14000, note: "klej ok. 1,2 t + robocizna klejenia ok. 250 m²" },
    tips: [
      "<b>Po przyłożeniu dociśnij i przesuń płytę o 1–2 cm.</b> Klej się rozprowadza, a płyta trafia w lico sąsiednich. Sprawdzaj łatą 2 m co kilka płyt.",
      "<b>Klej nigdy na krawędzie płyt.</b> Wypłynięty klej między płytami to mostek termiczny, który zimą widać jako ciemną kreskę na tynku.",
      "<b>Szczeliny do ok. 4 mm wypełnij pianką niskoprężną,</b> nie klejem i nie paskiem styropianu. Po wyschnięciu ściąć nożem równo z licem.",
      "<b>Naroża okien: płyta w L.</b> Spoina na przedłużeniu krawędzi okna pęknie na ukos jako pierwsza.",
      "<b>Mierz klej na płycie.</b> Odklej jedną płytę po kilku minutach i obejrzyj: ślady kleju mają tworzyć zamknięty obwód i kilka placków."
    ],
    mistakes: [
      "<b>Same placki bez obwodu.</b> Powietrze krąży za płytami, ocieplenie działa gorzej, a płyty „pracują” i robią rysy na tynku.",
      "<b>Klejenie na „ile zostało” kleju.</b> Za mało kleju to płyty, które klawiszują przy dociskaniu kołków.",
      "<b>Spoiny w jednej linii (bez mijanki).</b> Tworzą długie słabe linie, wzdłuż których tynk pęka."
    ],
    checklist: [
      "Pas kleju po obwodzie płyty + placki w środku",
      "Spoiny przesunięte min. ok. 15–20 cm",
      "Narożniki zazębione na przemian",
      "Przy oknach płyty w L",
      "Szczeliny wypełnione pianką niskoprężną",
      "Płaskość sprawdzona łatą 2 m"
    ],
    quiz: [{
      q: "Po co klej po obwodzie płyty, a nie tylko placki?",
      a: ["Żeby płyta była cięższa", "Żeby za płytą nie krążyło powietrze i ocieplenie działało pełną mocą", "Żeby zaoszczędzić klej"],
      correct: 1,
      explain: "<b>Zamknięty obwód zatrzymuje powietrze.</b> Same placki zostawiają kanały, przez które zimne powietrze krąży za ociepleniem i wychładza mur."
    }]
  },

  /* 8 ------------------------------------------------------------------ */
  {
    id: "kolkowanie",
    title: "Kołkowanie i szlifowanie",
    lead: "Kołki to zabezpieczenie na wypadek wiatru i utraty przyczepności. W naszym domu wkręcane, zagłębione w styropian i przykryte zaślepką, żeby nie było ich widać na tynku.",
    time: "3–5 dni", team: "2–3 osoby",
    facts: [["Kołki", "ok. 6–8 szt./m²", "rebar"], ["Długość", "ok. 260–300 mm", "rebar"]],
    body: `
      <p>Kołkuje się po związaniu kleju, <strong>zwykle po 1–3 dniach</strong>. Ilość i układ podaje projekt lub karta systemu: w polu zwykle <strong>ok. 6 szt./m²</strong>, przy narożnikach budynku (strefa krawędziowa) więcej, ok. 8 szt./m² i więcej przy wyższej strefie wiatrowej.</p>
      <p>Kołek <strong>wkręcany z talerzykiem zagłębionym</strong> ok. 15–20 mm w styropian, a otwór nad nim zamyka <strong>zaślepka styropianowa</strong>. Talerzyk nie tworzy wtedy mostka i nie przebija się na tynku jako jasna kropka („biedronka”). Kołek musi wejść w pustak na głębokość wymaganą przez producenta (przy pustaku poryzowanym to zwykle kołki kategorii C, ok. 6–9 cm zakotwienia).</p>
      <p>Po kołkowaniu ekipa <strong>szlifuje całą powierzchnię</strong> pacą z papierem ściernym, usuwa garby na stykach, a potem odkurza. Grafitowego styropianu nie zostawia się długo bez warstwy zbrojonej: słońce go nagrzewa i degraduje powierzchnię.</p>`,
    cost: { min: 4500, max: 7500, note: "ok. 1700–2000 kołków z zaślepkami + robocizna kołkowania i szlifu" },
    tips: [
      "<b>Wiercenie bez udaru w pustaku poryzowanym.</b> Udar rozbija ścianki pustaka i kołek nie ma się czego trzymać.",
      "<b>Kołek próbny.</b> Na początku ekipa osadza kilka kołków i sprawdza, czy trzymają (wyrwanie ręką ma być niemożliwe). Przy wątpliwościach producent kołków robi próbę wyrywania.",
      "<b>Kołki w miejscu spoin płyt i w środku płyty</b> (układ „T” albo „W” z karty systemu). Nie trafiaj w same krawędzie płyty.",
      "<b>Szlif w 2–3 dni po klejeniu,</b> kiedy płyty siedzą pewnie. Pył grafitowy odkurz szczotką albo odkurzaczem, bo klej zbrojący nie złapie zapylonej powierzchni.",
      "<b>Grafit pod siatką osłonową.</b> Bez warstwy zbrojonej trzymaj go jak najkrócej (orientacyjnie do ok. 2 tyg., sprawdź kartę producenta)."
    ],
    mistakes: [
      "<b>Kołki wbite „na płasko” w lico styropianu.</b> Talerzyk to mostek termiczny: zimą widać kropki szronu, latem jasne plamy na tynku.",
      "<b>Kołki dobrane „na oko”.</b> Za krótki kołek w pustaku drążonym trzyma się tylko styropianu. Długość = styropian + klej + zagłębienie talerzyka + zakotwienie.",
      "<b>Pominięty szlif.</b> Garby na stykach płyt widać po tynku w bocznym świetle wieczorem."
    ],
    checklist: [
      "Kołki wg schematu z systemu (więcej na narożnikach)",
      "Talerzyki zagłębione, zaślepki równo z licem",
      "Kołki pewnie zakotwione w pustaku",
      "Ściana przeszlifowana i odkurzona",
      "Odbiór przez kierownika przed warstwą zbrojoną"
    ],
    quiz: [{
      q: "Po co zagłębia się talerzyk kołka i zamyka go zaślepką?",
      a: ["Żeby kołek trzymał mocniej", "Żeby nie było mostka termicznego i kropek na tynku", "Żeby było szybciej"],
      correct: 1,
      explain: "<b>Talerzyk przy licu to mostek.</b> Wychładza tynk w tym punkcie, więc osiada na nim wilgoć i brud. Zagłębiony i przykryty zaślepką znika z elewacji."
    }]
  },

  /* 9 ------------------------------------------------------------------ */
  {
    id: "warstwa-zbrojona",
    title: "Warstwa zbrojona: klej, siatka, narożniki",
    lead: "Siatka zatopiona w kleju to pancerz elewacji. Przenosi naprężenia i uderzenia, więc od niej zależy, czy tynk popęka.",
    time: "1,5–2 tyg.", team: "3–4 osoby",
    facts: [["Grubość", "ok. 3–5 mm", "layers"], ["Zakład siatki", "min. ok. 10 cm", "rebar"]],
    body: `
      <p>Na styropian ekipa nakłada klej pacą zębatą, wtapia w niego <strong>siatkę z włókna szklanego</strong> (ok. 145–165 g/m², z systemu) i od razu przykrywa cienką warstwą kleju. Siatka leży <strong>w zewnętrznej części warstwy</strong>, nie na styropianie. Pasy siatki zachodzą na siebie <strong>min. ok. 10 cm</strong>. ${XR("zbrojona")}</p>
      <p>Przed siatką na ścianę idą detale: <strong>narożniki z siatką</strong> na wszystkich krawędziach zewnętrznych, <strong>profile z kapinosem</strong> nad otworami (woda kapie z krawędzi zamiast spływać pod okno) i <strong>siatki ukośne</strong> w narożach okien (następny krok).</p>
      <p>Na parterze, gdzie łatwo uderzyć (wejście, garaż, taras), można dać <strong>drugą warstwę siatki</strong> albo siatkę pancerną. Warstwa schnie zwykle <strong>min. 3 dni</strong> (zależnie od pogody i grubości), zanim przyjdzie grunt pod tynk.</p>`,
    cost: { min: 11000, max: 14500, note: "klej i siatka ok. 250 m², narożniki i profile ok. 120 mb, robocizna" },
    tips: [
      "<b>Siatka ma być niewidoczna, ale bliżej zewnętrznej strony.</b> Jeśli widać jej oczka, warstwa jest za cienka; jeśli leży na styropianie, nie pracuje.",
      "<b>Pasy siatki od góry do dołu,</b> z zakładem min. 10 cm. Na narożnikach siatka ze ściany zachodzi na narożnik, nie odwrotnie.",
      "<b>Kapinos nad każdym oknem i na krawędzi podbitki.</b> Bez niego woda spływa po spodniej powierzchni nadproża i brudzi ramę.",
      "<b>Pod kamieniem i deską warstwa zbrojona też jest pełna.</b> To podkład pod okładzinę i ochrona styropianu, nawet jeśli nikt jej nie zobaczy.",
      "<b>Druga siatka na parterze do wysokości ok. 2 m</b> kosztuje kilkaset złotych na wejściu i garażu. Ratuje elewację przed rowerem, piłką i kosiarką."
    ],
    mistakes: [
      "<b>Siatka przyłożona do styropianu i „zasmarowana”.</b> Leży w złym miejscu, nie przenosi naprężeń. Tynk pęka wzdłuż spoin płyt.",
      "<b>Siatki na styk bez zakładu.</b> W tym miejscu pojawia się pionowa rysa w pierwszym roku.",
      "<b>Tynk na niewyschniętą warstwę.</b> Klej oddaje wilgoć przez tynk: plamy i przebarwienia, szczególnie przy ciemnych kolorach."
    ],
    checklist: [
      "Siatka w kleju bliżej lica, nie widać oczek",
      "Zakłady siatki min. ok. 10 cm",
      "Narożniki z siatką na wszystkich krawędziach",
      "Profile z kapinosem nad oknami",
      "Druga siatka przy wejściu i garażu (jeśli ustalono)",
      "Warstwa wyschnięta przed gruntem pod tynk"
    ],
    quiz: [{
      q: "Gdzie powinna leżeć siatka w warstwie zbrojonej?",
      a: ["Bezpośrednio na styropianie", "W zewnętrznej części kleju, ale całkowicie w nim zatopiona", "Na wierzchu, żeby tynk lepiej się trzymał"],
      correct: 1,
      explain: "<b>Siatka pracuje tylko w kleju.</b> Zatopiona bliżej lica przenosi naprężenia. Na styropianie nic nie daje, a na wierzchu odbije się na tynku."
    }]
  },

  /* 10 ----------------------------------------------------------------- */
  {
    id: "okna-dylatacje",
    title: "Okna, parapety i dylatacje",
    lead: "Naroża okien, styki z parapetem i miejsca, gdzie kończy się jeden materiał, to punkty, w których elewacja pęka i przecieka. Tu dokładność opłaca się najbardziej.",
    time: "3–5 dni (w trakcie zbrojenia)", team: "2 osoby",
    facts: [["Siatki ukośne", "ok. 20 × 35 cm", "rebar"], ["Parapety", "ok. 18–20 mb, spadek min. ok. 5°", "check"]],
    body: `
      <p>W każdym narożu okna i drzwi naklejasz <strong>siatkę ukośną</strong> pod kątem 45° (pasek ok. 20 × 35 cm). Naprężenia skupiają się właśnie tam i bez niej rysa pójdzie skosem od rogu.</p>
      <p>Styk tynku z ramą okna zamyka <strong>profil przyokienny</strong> (listwa z siatką i taśmą). Pozwala ramie i elewacji pracować niezależnie, bez szczeliny. Okna są w ciepłym montażu z etapu 07, więc styropian zachodzi na ramę 2–3 cm.</p>
      <p><strong>Parapety zewnętrzne</strong> (aluminium antracyt, kupione z oknami w etapie 07) montuje się po warstwie zbrojonej, przed tynkiem: pod ramę, z <strong>taśmą rozprężną</strong> pod spodem, <strong>spadkiem min. ok. 5°</strong>, wysięgiem <strong>3–4 cm</strong> poza lico i <strong>zaślepkami bocznymi</strong> wpuszczonymi w tynk z elastyczną szczeliną.</p>
      <p><strong>Dylatacje:</strong> tam, gdzie konstrukcja ma przerwę (np. styk garażu z domem, jeśli przewiduje ją projekt), elewacja dostaje profil dylatacyjny. Styki z innymi materiałami (deska, podbitka, cokół, przepusty) zamykają profile zakończeniowe i taśma rozprężna.</p>`,
    cost: { min: 4000, max: 7500, note: "siatki ukośne, profile przyokienne ok. 100 mb, montaż parapetów, profile dylatacyjne, taśmy" },
    tips: [
      "<b>Siatki ukośne przed siatką główną,</b> w tym samym kleju. Pasek ma dotykać naroża otworu.",
      "<b>Parapet poniżej dolnej krawędzi ramy, w profilu podparapetowym.</b> Woda z szyby spływa na parapet, a nie pod niego.",
      "<b>Zaślepki boczne parapetu z luzem.</b> Aluminium wydłuża się latem o kilka milimetrów; sztywno zatynkowane zaślepki wyrywają tynk.",
      "<b>Profil dylatacyjny tylko w miejscu dylatacji konstrukcji.</b> Jego miejsce wskazuje projektant, nie ekipa „dla porządku”.",
      "<b>Przepusty (pompa ciepła, kable) uszczelnij kołnierzem lub taśmą,</b> zanim przyjdzie tynk. Silikon z tubki wytrzyma jeden sezon."
    ],
    mistakes: [
      "<b>Brak siatek ukośnych.</b> Skośne rysy z naroży okien to najczęstsza reklamacja elewacji.",
      "<b>Parapet na styk z tynkiem i bez spadku.</b> Woda stoi i wnika pod parapet, a na tynku pod oknem pojawiają się zacieki i odpryski po mrozie.",
      "<b>Tynk dociągnięty do ramy „na ostro”.</b> Rama i ściana pracują inaczej; po roku jest szczelina na całym obwodzie okna."
    ],
    checklist: [
      "Siatki ukośne we wszystkich narożach otworów",
      "Profile przyokienne wokół okien i drzwi",
      "Parapety: pod ramą, spadek min. ok. 5°, wysięg 3–4 cm",
      "Zaślepki parapetów z elastyczną szczeliną",
      "Taśma rozprężna pod parapetami",
      "Profile dylatacyjne w miejscach dylatacji konstrukcji",
      "Przepusty instalacji uszczelnione systemowo"
    ],
    quiz: [{
      q: "Po co naklejać siatkę ukośną w narożu okna?",
      a: ["Dla ozdoby", "Żeby przejąć naprężenia, które w tym miejscu robią skośne rysy", "Żeby przykleić parapet"],
      correct: 1,
      explain: "<b>Naroże otworu to punkt koncentracji naprężeń.</b> Dodatkowy pasek siatki pod kątem 45° przejmuje je i zapobiega rysom od rogu okna."
    }]
  },

  /* 11 ----------------------------------------------------------------- */
  {
    id: "tynk",
    title: "Tynk cienkowarstwowy",
    lead: "Tynk to skóra elewacji: chroni przed deszczem i daje kolor. Do styropianu grafitowego wybieramy tynk silikonowy, odporny na brud i elastyczny.",
    time: "1–2 tyg.", team: "3–4 osoby na jedną ścianę naraz",
    facts: [["Tynk", "ok. 175 m², ziarno 1,5 mm", "layers"], ["Zużycie", "ok. 2,5–3 kg/m²", "calc"]],
    body: `
      <p>Na wyschniętą warstwę zbrojoną idzie <strong>grunt pod tynk</strong> (podbarwiony w kolorze tynku), a po ok. 24 h <strong>tynk cienkowarstwowy</strong>. Ziarno ok. <strong>1,5 mm</strong>, faktura „baranek” lub „kornik”. Na zdjęciu inspiracji tynk jest jasny, gładki w odbiorze, więc baranek 1,5 mm sprawdzi się najlepiej. ${XR("tynkz")}</p>
      <p>Każdą ścianę tynkuje się <strong>w jednym ciągu, „mokre na mokre”</strong>: kilka osób na kolejnych poziomach rusztowania, bez przerwy aż do narożnika albo krawędzi. Przerwa w środku ściany zostawia widoczne łączenie.</p>
      <p><strong>Kolor:</strong> na styropianie producenci zwykle wymagają jasności <strong>HBW ≥ ok. 20–25</strong>. Ciemniejsze kolory nagrzewają się i grożą odkształceniem płyt; wtedy tylko tynki z pigmentami odbijającymi ciepło (TSR) i zgodą systemu.</p>`,
    cost: { min: 9000, max: 12500, note: "grunt + tynk silikonowy ok. 175 m² z robocizną" },
    decision: {
      question: "Jaki tynk na elewację?",
      intro: "Koszty to dopłata albo oszczędność względem tynku silikonowego na ok. 175 m².",
      chosen: "silikon",
      options: [
        { id: "silikon", name: "Silikonowy",
          cost: { min: 0, max: 0 }, time: "schnie ok. 24–48 h", note: "ok. 35–45 zł/m² materiału",
          pros: ["Hydrofobowy: deszcz zmywa brud, ściana długo czysta", "Elastyczny, dobra paroprzepuszczalność", "Szeroka paleta kolorów, łatwy w nakładaniu"],
          cons: ["Droższy od akrylu", "Przy ciemnych kolorach i tak potrzebny wariant TSR"],
          why: "Najlepszy kompromis dla domu ze styropianem i dużym ogrodem: mniej zabrudzeń i alg, łatwa praca ekipy, dobra trwałość koloru." },
        { id: "silikat", name: "Silikatowy",
          cost: { min: -1000, max: 1000 }, time: "schnie dłużej, min. ok. +8°C", note: "mineralny, alkaliczny",
          pros: ["Bardzo paroprzepuszczalny (dobry do wełny)", "Naturalnie odporny na glony", "Niepalny"],
          cons: ["Trudniejszy w nakładaniu, łatwo o przebarwienia", "Mniejsza paleta, gorzej znosi ciemne kolory", "Wrażliwy na pogodę w czasie prac"],
          why: "Dobry wybór przy ociepleniu wełną. Przy styropianie jego paroprzepuszczalność nie daje zysku." },
        { id: "akryl", name: "Akrylowy",
          cost: { min: -3500, max: -2000 }, time: "schnie ok. 24 h", note: "ok. 22–28 zł/m² materiału",
          pros: ["Najtańszy", "Elastyczny i odporny na uderzenia", "Intensywne kolory"],
          cons: ["Elektryzuje się i brudzi: szare zacieki po kilku latach", "Słabo paroprzepuszczalny, nie na wełnę", "Częściej porastają go glony"],
          why: "Oszczędność to ok. 2–3,5 tys. zł, ale elewacja szybciej szarzeje. Ma sens tylko na małych, osłoniętych fragmentach." }
      ]
    },
    tips: [
      "<b>Zamów cały tynk w jednej partii</b> (z jednego zamówienia i numeru partii) i dopisz ok. 5% zapasu. Druga partia może mieć inny odcień.",
      "<b>Jedna ściana bez przerwy.</b> Na ścianę ok. 13 m potrzeba 3–4 osób; tynk nakłada się i zaciera pasami od góry do dołu.",
      "<b>Przerwy technologiczne tylko na narożnikach,</b> krawędziach okien albo pod taśmą malarską w linii zmiany materiału.",
      "<b>Kolor: wybierz jaśniejszy o tonę niż na próbce.</b> Duża powierzchnia w słońcu zawsze wydaje się ciemniejsza.",
      "<b>Odkładaj 1–2 wiaderka na poprawki</b> (podpisane numerem partii i koloru). Przydadzą się po montażu lamp i demontażu rusztowania."
    ],
    mistakes: [
      "<b>Przerwa w środku ściany (np. na obiad).</b> Linia łączenia zostaje na zawsze, szczególnie widoczna w bocznym świetle.",
      "<b>Tynk na słońcu i wietrze.</b> Zasycha za szybko, robią się smugi i różnice koloru.",
      "<b>Ciemny kolor na zwykłym tynku i styropianie.</b> Ściana nagrzewa się do 70–80°C, płyty się odkształcają, tynk pęka."
    ],
    checklist: [
      "Grunt pod tynk podbarwiony, schnie ok. 24 h",
      "Tynk z jednej partii + ok. 5% zapasu",
      "Kolor z HBW dopuszczonym przez system",
      "Każda ściana w jednym ciągu, bez łączeń w polu",
      "Odłożone wiaderka na poprawki"
    ],
    quiz: [{
      q: "Dlaczego ściany tynkuje się „mokre na mokre”, bez przerw?",
      a: ["Bo tak jest szybciej", "Bo każda przerwa zostawia widoczne łączenie na zawsze", "Bo tynk inaczej nie wyschnie"],
      correct: 1,
      explain: "<b>Zaschnięta krawędź i świeży tynk dają różną fakturę.</b> Łączenie widać w bocznym świetle. Przerwy robi się tylko na narożnikach i krawędziach."
    }, {
      q: "Który tynk najdłużej zostaje czysty na elewacji ze styropianu?",
      a: ["Akrylowy", "Silikonowy", "Zwykły cementowo-wapienny"],
      correct: 1,
      explain: "<b>Silikon jest hydrofobowy.</b> Woda spływa i zmywa brud, a ściana szybko schnie, więc glony mają gorsze warunki."
    }]
  },

  /* 12 ----------------------------------------------------------------- */
  {
    id: "kamien",
    title: "Kamień na elewacji",
    lead: "Kamień przy wejściu i na froncie garażu to najbardziej rzucający się w oczy element ze zdjęcia inspiracji. Na ociepleniu musi być lekki i klejony zgodnie z systemem.",
    time: "1–2 tyg.", team: "1–2 kamieniarzy",
    facts: [["Kamień", "ok. 30 m²", "house"], ["Ciężar okładziny", "w limicie systemu ETICS", "alert"]],
    body: `
      <p>Kamień kładziesz na <strong>warstwę zbrojoną bez tynku</strong>. Gdy okładzina jest cięższa, system zwykle wymaga <strong>dodatkowych kołków osadzonych przez siatkę</strong> (po zatopieniu siatki, przed klejeniem kamienia). Dopuszczalny ciężar okładziny na ETICS ze styropianem podaje ocena techniczna systemu: sprawdź ją przed zakupem kamienia.</p>
      <p>Klej <strong>elastyczny, mrozoodporny</strong> (np. C2TE S1), nakładany na ścianę i na płytkę (metoda kombinowana), bez pustek. Spoiny fugą elastyczną do kamienia albo „na sucho” (płytki układane ciasno), a na końcu impregnat.</p>
      <p>Na zdjęciu inspiracji kamień jest łupany, w cienkich nieregularnych płytkach. Takie plastry kamienia naturalnego (ok. 1–2,5 cm) wyglądają jak prawdziwy mur, a ważą kilka razy mniej.</p>`,
    cost: { min: 6000, max: 9000, note: "klej elastyczny, kołki przez siatkę, fuga, impregnat, robocizna ok. 30 m²" },
    decision: {
      question: "Jaki kamień na elewację?",
      intro: "Koszt opcji to sam materiał na ok. 30 m². Robocizna i chemia są w koszcie kroku.",
      chosen: "naturalny",
      options: [
        { id: "naturalny", name: "Kamień naturalny łupany w plastrach (1–2,5 cm)",
          cost: { min: 10000, max: 14500 }, time: "ok. 1,5 tyg.", note: "ok. 330–480 zł/m², piaskowiec, łupek, kwarcyt",
          pros: ["Wygląd jak na zdjęciu inspiracji: prawdziwy, nieregularny kamień", "Nie blaknie, starzeje się szlachetnie", "Każda płytka inna, brak powtarzalnego wzoru"],
          cons: ["Cięższy: trzeba trzymać się limitu systemu i kołkować przez siatkę", "Wolniejsze układanie, dużo docinania", "Najdroższy z popularnych wariantów"],
          why: "Daje efekt ze zdjęcia inspiracji i nie wymaga odnawiania. Na 30 m² dopłata do imitacji to ok. 6–8 tys. zł, co mieści się w budżecie wykończenia." },
        { id: "spiek", name: "Spiek kwarcowy wielkoformatowy",
          cost: { min: 13000, max: 19000 }, time: "ok. 1 tydz.", note: "ok. 430–630 zł/m², grubość ok. 6–12 mm",
          pros: ["Lekki i bardzo twardy, nie chłonie wody", "Duże płyty: mało fug, nowoczesny wygląd", "Łatwy w czyszczeniu"],
          cons: ["Wygląda jak płaski kamień cięty, nie łupany", "Duże formaty wymagają doświadczonej ekipy i równego podłoża", "Najdroższy"],
          why: "Dobry do nowoczesnej, minimalistycznej elewacji. Do łupanego kamienia ze zdjęcia pasuje słabiej." },
        { id: "imitacja", name: "Płytki kamiennopodobne (betonowe)",
          cost: { min: 4500, max: 7000 }, time: "ok. 1 tydz.", note: "ok. 150–230 zł/m²",
          pros: ["Lekkie, mieszczą się w limitach systemów", "Tanie, szybkie układanie, powtarzalne", "Duży wybór wzorów"],
          cons: ["Z bliska widać powtarzające się wzory", "Barwione w masie lub powierzchniowo: z czasem płowieją", "Wymagają impregnacji co kilka lat"],
          why: "Najtańszy sposób na kamienny akcent. Wybierz, jeśli brakuje budżetu albo okładzina ma być tylko dodatkiem." }
      ]
    },
    tips: [
      "<b>Kamień zamów z zapasem ok. 10%</b> i rozłóż na ziemi, zanim trafi na ścianę. Mieszaj płytki z kilku palet, żeby kolory rozłożyły się równo.",
      "<b>Narożniki kamienne (kątowniki)</b> wyglądają jak prawdziwy mur. Bez nich na narożniku widać grubość płytki.",
      "<b>Układaj od dołu, od listwy lub cokołu,</b> a na górnej krawędzi kamienia zostaw profil z kapinosem albo obróbkę, żeby woda nie wchodziła za okładzinę.",
      "<b>Klej rozprowadzany na obie powierzchnie,</b> bez pustek. Woda w pustce zamarza i odspaja kamień.",
      "<b>Impregnat po ok. 2–4 tyg.</b> (gdy fugi wyschną) ogranicza zabrudzenia i wykwity. Powtarzaj co kilka lat."
    ],
    mistakes: [
      "<b>Ciężki kamień „na styropian” bez sprawdzenia systemu.</b> Okładzina może się odspoić razem z ociepleniem. Ciężar sprawdzasz w ocenie technicznej systemu.",
      "<b>Kamień klejony na tynk.</b> Tynk nie jest podłożem nośnym; kamień odpada z tynkiem.",
      "<b>Zwykły klej do płytek wewnętrznych.</b> Pęka przy mrozie i nagrzewaniu; tylko elastyczny i mrozoodporny."
    ],
    formal: [
      ["Ocena techniczna systemu ETICS z okładziną", "producent systemu: dopuszczalny ciężar okładziny i sposób kołkowania"]
    ],
    checklist: [
      "Ciężar kamienia w limicie systemu",
      "Kołki przez siatkę osadzone (jeśli wymagane)",
      "Klej elastyczny mrozoodporny, bez pustek",
      "Narożniki kamienne na krawędziach",
      "Górna krawędź okładziny zabezpieczona przed wodą",
      "Impregnat po wyschnięciu fug"
    ],
    quiz: [{
      q: "Na czym kleisz kamień na ocieplonej ścianie?",
      a: ["Na gotowym tynku", "Na warstwie zbrojonej, zgodnie z systemem ETICS", "Bezpośrednio na styropianie"],
      correct: 1,
      explain: "<b>Podłożem jest warstwa zbrojona.</b> Tynk nie przeniesie ciężaru, a styropian bez siatki się rozwarstwi. System podaje też, czy kołkować przez siatkę."
    }]
  },

  /* 13 ----------------------------------------------------------------- */
  {
    id: "deska",
    title: "Deska elewacyjna na ruszcie",
    lead: "Drewno na szczycie i przy tarasie ociepla wygląd domu. Deska wisi na ruszcie z wentylowaną szczeliną za sobą, żeby szybko schła po deszczu.",
    time: "1–1,5 tyg.", team: "2 cieśli lub stolarzy",
    facts: [["Deska", "ok. 45 m²", "house"], ["Szczelina", "min. ok. 2–3 cm", "rebar"]],
    body: `
      <p>Na warstwie zbrojonej (bez tynku) montuje się <strong>ruszt</strong>: pionowe łaty ok. 4 × 5 cm co ok. 50–60 cm, mocowane do muru <strong>łącznikami dystansowymi przez ocieplenie</strong> (systemowe kotwy, które nie zgniatają styropianu). Łaty tworzą <strong>szczelinę wentylacyjną min. ok. 2–3 cm</strong>: powietrze wchodzi od dołu, wychodzi u góry.</p>
      <p>Na dole i na górze szczeliny zakłada się <strong>siatkę przeciw owadom</strong> (perforowany profil). Deska kończy się <strong>min. ok. 30 cm nad terenem</strong>, czyli nad cokołem.</p>
      <p>Deski poziome (romb, ok. 20–25 × 120–145 mm) z odstępem 6–10 mm, mocowane <strong>wkrętami ze stali nierdzewnej A2 lub A4</strong> albo na ukrytych klipsach. Fabrycznie olejowane z czterech stron, czoła zabezpieczone przed cięciem i po nim.</p>`,
    cost: { min: 6000, max: 8500, note: "ruszt, łączniki dystansowe, siatki, wkręty A2, robocizna ok. 45 m²" },
    decision: {
      question: "Z czego deska elewacyjna?",
      intro: "Koszt opcji to sam materiał na ok. 45 m². Ruszt i montaż są w koszcie kroku.",
      chosen: "modrzew",
      options: [
        { id: "modrzew", name: "Modrzew syberyjski, olejowany fabrycznie",
          cost: { min: 7500, max: 11000 }, time: "ok. 1 tydz.", note: "ok. 170–240 zł/m²",
          pros: ["Naturalnie żywiczny i trwały", "Ciepły kolor jak na zdjęciu inspiracji", "Najtańsze dobre drewno elewacyjne"],
          cons: ["Bez olejowania szarzeje do srebrnego w 1–2 lata", "Może puszczać żywicę i lekko pracować", "Olejowanie co ok. 2–3 lata, jeśli chcesz zachować kolor"],
          why: "Najlepszy stosunek ceny do trwałości. Kolor pasuje do tynku i kamienia, a deska na szczycie pod okapem jest częściowo osłonięta przed deszczem." },
        { id: "termo", name: "Termodrewno (termososna, termojesion)",
          cost: { min: 10500, max: 15000 }, time: "ok. 1 tydz.", note: "ok. 230–330 zł/m²",
          pros: ["Bardzo stabilne wymiarowo, nie paczy się", "Trwałe bez chemii, ciemny brązowy kolor", "Nie wydziela żywicy"],
          cons: ["Kruche: łatwo odłupać krawędź przy montażu", "Też szarzeje bez olejowania", "Droższe od modrzewia"],
          why: "Dobre przy dużych, nasłonecznionych płaszczyznach, gdzie zależy ci na stabilności. Dopłata ok. 3–4 tys. zł na 45 m²." },
        { id: "kompozyt", name: "Deska kompozytowa (WPC)",
          cost: { min: 9000, max: 13500 }, time: "ok. 1 tydz.", note: "ok. 200–300 zł/m² z systemowym rusztem",
          pros: ["Nie wymaga olejowania, kolor stały", "Nie gnije, nie szarzeje jak drewno", "Systemowe klipsy i profile"],
          cons: ["Wygląda mniej naturalnie z bliska", "Mocno rozszerza się z temperaturą: wymaga dylatacji", "Ciemne kolory bardzo się nagrzewają"],
          why: "Wybierz, jeśli nie chcesz żadnej konserwacji. Z bliska przegrywa z drewnem wyglądem." }
      ]
    },
    tips: [
      "<b>Wkręty tylko nierdzewne.</b> Modrzew z czarną stalą daje czarne zacieki wokół każdego wkrętu po pierwszym deszczu.",
      "<b>Czoła desek olejuj dodatkowo po przycięciu.</b> Przez czoło drewno chłonie najwięcej wody i tam zaczyna pękać.",
      "<b>Odstęp 6–10 mm między deskami</b> i pierwsza deska min. 30 cm nad terenem. Deszcz odbity od ziemi nie moczy drewna.",
      "<b>Szare czy brązowe?</b> Zdecyduj od razu. Naturalne szarzenie jest równe tylko przy jednakowym wystawieniu na deszcz; pod okapem drewno zostanie jaśniejsze.",
      "<b>Kinkiety i przewody przez deskę wyprowadź przed montażem</b> (montażówki z kroku 4). Później trudno trafić w kabel za deską."
    ],
    mistakes: [
      "<b>Deska przybita prosto do styropianu lub bez szczeliny.</b> Drewno nie schnie od tyłu, pleśnieje i wypacza się w pierwszym sezonie.",
      "<b>Brak siatki przeciw owadom.</b> Osy i ptaki zakładają gniazda w szczelinie wentylacyjnej.",
      "<b>Deska do samego terenu.</b> Po dwóch zimach dolna deska jest szara, popękana i zielona."
    ],
    checklist: [
      "Ruszt z łącznikami dystansowymi do muru",
      "Szczelina wentylacyjna min. ok. 2–3 cm, otwarta dołem i górą",
      "Siatki przeciw owadom na dole i górze",
      "Deska min. ok. 30 cm nad terenem",
      "Wkręty nierdzewne A2/A4 lub klipsy",
      "Czoła desek zaolejowane"
    ],
    quiz: [{
      q: "Po co szczelina wentylacyjna za deską elewacyjną?",
      a: ["Żeby deska była cieplejsza", "Żeby drewno szybko schło od tyłu i nie gniło", "Żeby łatwiej przykręcić deskę"],
      correct: 1,
      explain: "<b>Drewno musi schnąć z obu stron.</b> Powietrze płynące szczeliną od dołu do góry odbiera wilgoć. Bez niej deska pleśnieje i się wypacza."
    }]
  },

  /* 14 ----------------------------------------------------------------- */
  {
    id: "podbitka",
    title: "Podbitka dachu",
    lead: "Podbitka zamyka spód okapu. Wygląda jak sufit nad elewacją, ale ma też zadanie techniczne: wpuszcza powietrze pod dach do szczeliny wentylacyjnej nad membraną.",
    time: "3–5 dni", team: "2 osoby (dekarz lub ekipa elewacji)",
    facts: [["Podbitka", "ok. 30 m², ok. 70 mb okapów", "house"], ["Okap", "ok. 40 cm", "rebar"]],
    body: `
      <p>Dach z etapu 06 ma <strong>okap ok. 40 cm</strong> i <strong>wentylowaną szczelinę od okapu do kalenicy</strong> nad membraną. Podbitka zamyka okapy i krawędzie szczytów (razem ok. 70 mb, ok. 30 m²), ale musi zostawić <strong>wlot powietrza</strong>: perforowane panele albo kratkę wentylacyjną na całej długości okapu.</p>
      <p>Ruszt z łat ok. 3 × 5 cm mocuje się do krokwi, poziomo i równo. Podbitka dochodzi do elewacji, a styk zamyka listwa przyścienna z taśmą rozprężną. W podbitce mogą być <strong>oczka LED</strong> nad wejściem i tarasem, jeśli przewody przygotowano w etapie 08.</p>
      <p>Podbitkę robi się <strong>po tynku</strong> (rusztowanie jeszcze stoi), ale przed demontażem rusztowania.</p>`,
    cost: { min: 2000, max: 3000, note: "ruszt, listwy, siatka przeciw ptakom, robocizna" },
    decision: {
      question: "Z czego podbitka?",
      intro: "Koszt opcji to sam materiał na ok. 30 m². Ruszt i montaż są w koszcie kroku.",
      chosen: "pvc",
      options: [
        { id: "pvc", name: "Panele PVC antracyt (część perforowana)",
          cost: { min: 2500, max: 3500 }, time: "ok. 3 dni", note: "ok. 80–120 zł/m²",
          pros: ["Bez konserwacji, nie gnije", "Systemowe panele perforowane i listwy", "Kolor jak okna, rynny i dachówka"],
          cons: ["Wygląda mniej szlachetnie niż drewno", "Pracuje termicznie: potrzebne luzy w listwach"],
          why: "Okap jest trudno dostępny, więc liczy się brak konserwacji. Antracyt łączy się z oknami i rynnami, a ciepły akcent daje deska na elewacji." },
        { id: "drewno", name: "Deska modrzewiowa jak na elewacji",
          cost: { min: 4000, max: 6500 }, time: "ok. 4–5 dni", note: "ok. 140–210 zł/m²",
          pros: ["Spójna z deską na szczycie", "Ciepły, naturalny wygląd"],
          cons: ["Olejowanie z rusztowania lub podnośnika co kilka lat", "Wlot powietrza trzeba robić kratkami lub szczeliną"],
          why: "Ma sens, gdy podbitka ma przedłużać deskę ze szczytu. Pamiętaj o koszcie konserwacji na wysokości." },
        { id: "alu", name: "Panele aluminiowe lub stalowe powlekane",
          cost: { min: 5500, max: 8500 }, time: "ok. 3 dni", note: "ok. 180–280 zł/m²",
          pros: ["Najtrwalsze, nie płowieją", "Mogą imitować drewno (okleina)", "Sztywne, proste krawędzie"],
          cons: ["Najdroższe", "Wymagają precyzyjnego rusztu"],
          why: "Dla tych, którzy chcą trwałości metalu i efektu premium. Dopłata do PVC ok. 3–5 tys. zł." }
      ]
    },
    tips: [
      "<b>Perforacja na całej długości okapu.</b> Zbyt mały wlot powietrza to zawilgocona membrana i deski pod dachówką.",
      "<b>Siatka przeciw ptakom i owadom</b> za perforacją lub w kratce. Wróble chętnie zakładają gniazda w okapach.",
      "<b>Panele PVC z luzem na końcach</b> (ok. 5 mm na każde 4–5 m). Latem się wydłużają i bez luzu falują.",
      "<b>Oczka LED w podbitce z puszkami hermetycznymi</b> (IP44 lub wyżej) i przewodem w peszlu."
    ],
    mistakes: [
      "<b>Pełna podbitka bez wlotu powietrza.</b> Odcina wentylację dachu z etapu 06: skropliny pod membraną i zagrzybione łaty.",
      "<b>Podbitka po demontażu rusztowania.</b> Ekipa pracuje z drabin, wolniej i niebezpieczniej, a ty płacisz za ponowne rusztowanie albo podnośnik.",
      "<b>Styk podbitki z tynkiem „na silikon”.</b> Po roku jest szczelina. Listwa przyścienna z taśmą rozprężną."
    ],
    checklist: [
      "Wlot powietrza na całej długości okapu",
      "Siatka przeciw ptakom i owadom",
      "Ruszt poziomy, równy",
      "Listwa przyścienna z taśmą rozprężną",
      "Oświetlenie w podbitce podłączone (jeśli przewidziane)"
    ],
    quiz: [{
      q: "Dlaczego podbitka musi mieć perforację lub kratki?",
      a: ["Dla ozdoby", "Żeby powietrze wpływało pod dach do szczeliny wentylacyjnej nad membraną", "Żeby woda z rynny mogła spływać"],
      correct: 1,
      explain: "<b>Wentylacja dachu zaczyna się w okapie.</b> Powietrze wchodzi przez podbitkę i wychodzi kalenicą, osuszając deskowanie i łaty."
    }]
  },

  /* 15 ----------------------------------------------------------------- */
  {
    id: "odbior-elewacji",
    title: "Odbiór elewacji i demontaż rusztowania",
    lead: "Elewację odbierasz, zanim rusztowanie zniknie. Potem każda poprawka na wysokości to podnośnik i kolejna faktura.",
    time: "1–2 dni + demontaż", team: "ty, kierownik budowy, kierownik ekipy",
    facts: [["Łata", "2 m, w bocznym świetle", "listcheck"]],
    body: `
      <p>Elewację oglądasz <strong>w bocznym świetle</strong> (rano lub wieczorem, latarka przy ścianie) i z kilku metrów. Szukasz: <strong>łączeń i smug</strong> w tynku, <strong>kropek po kołkach</strong>, rys przy narożnikach okien, krzywych krawędzi, parapetów bez spadku, fug kamienia z pustkami, desek bez szczeliny i siatek.</p>
      <p>Płaskość sprawdzasz <strong>łatą 2 m</strong>: prześwit pod łatą powinien być niewielki (orientacyjnie do kilku milimetrów; dokładną tolerancję wpisz do umowy). Poprawki ekipa robi z rusztowania. Dopiero potem demontaż, zaślepienie i zatynkowanie otworów po kotwach rusztowania.</p>
      <p>Zbierz dokumenty: <strong>kartę systemu ETICS</strong> i oceny techniczne, deklaracje właściwości użytkowych, numery partii i kolorów tynku, kamienia i deski (przydadzą się przy poprawkach za 10 lat). Kierownik budowy robi wpis w dzienniku.</p>`,
    cost: { min: 500, max: 1500, note: "poprawki, mycie okien i parapetów, sprzątanie wokół domu" },
    tips: [
      "<b>Odbiór przy latarce.</b> Światło z boku pokazuje każdy garb i łączenie, których w południe nie widać.",
      "<b>Zrób zdjęcia każdej ściany z daleka i detali z bliska</b> z datą. Przy reklamacji po zimie masz punkt odniesienia.",
      "<b>Zatrzymaj kaucję gwarancyjną 5–10%</b> (zgodnie z umowami z etapu 00) do pierwszego przeglądu po zimie.",
      "<b>Konserwacja:</b> mycie tynku miękką szczotką i wodą co 2–3 lata, olejowanie deski co ok. 2–3 lata (jeśli ma zostać brązowa), impregnat kamienia co kilka lat.",
      "<b>Po demontażu rusztowania obejrzyj dolną część ścian</b> przy cokole: stopy rusztowania i taczki lubią obić narożniki."
    ],
    mistakes: [
      "<b>Odbiór z poziomu ziemi w południe.</b> Rysy i łączenia wychodzą dopiero przy słońcu bokiem, gdy rusztowania już nie ma.",
      "<b>Brak numerów partii tynku.</b> Za kilka lat poprawka „na kolor” kończy się innym odcieniem na całej ścianie.",
      "<b>Wypłata całości przed zimą.</b> Pierwsze rysy i odspojenia pokazuje pierwsza zima; zatrzymaj część wynagrodzenia jako kaucję."
    ],
    formal: [
      ["Protokół odbioru robót elewacyjnych", "ty i kierownik ekipy, z listą usterek i terminem poprawek"],
      ["Wpis do dziennika budowy", "kierownik budowy: zakończenie robót elewacyjnych"],
      ["Dokumenty systemu ETICS, kamienia i deski", "do teczki budowy (przydadzą się przy zakończeniu budowy, etap 16)"]
    ],
    checklist: [
      "Ściany obejrzane w bocznym świetle, bez łączeń i kropek",
      "Płaskość sprawdzona łatą 2 m",
      "Naroża okien bez rys, parapety ze spadkiem",
      "Kamień bez pustek pod płytkami, fugi pełne",
      "Deska: szczelina i siatki na miejscu",
      "Otwory po kotwach rusztowania zatynkowane",
      "Dokumenty systemu i numery partii w teczce",
      "Kaucja gwarancyjna zatrzymana do przeglądu po zimie"
    ],
    quiz: [{
      q: "Kiedy najlepiej odebrać elewację?",
      a: ["Po demontażu rusztowania, w słoneczne południe", "Przed demontażem rusztowania, w bocznym świetle", "Po pierwszej zimie"],
      correct: 1,
      explain: "<b>Rusztowanie to tani dostęp do poprawek.</b> Boczne światło pokazuje łączenia i garby. Przegląd po zimie też zrób, ale jako drugi odbiór, z kaucją w ręku."
    }]
  }
  ]
});
})();
