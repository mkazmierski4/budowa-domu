/* Etap 10: Rekuperacja, fotowoltaika, smart home. Ceny orientacyjne, 2026 r., okolice małego miasta.
   Kategoria „instalacje”: po etapach 08 (śr. ok. 54 tys.) i 09 (śr. ok. 115 tys.) z limitu 270 tys. zostaje ok. 100 tys. zł. */
BUDOWA.addStage({
  id: "10-rekuperacja-pv", nr: 10, title: "Rekuperacja, fotowoltaika, smart home", icon: "🌬️", category: "instal",
  summary: "Wentylacja z odzyskiem ciepła zamiast kratek, fotowoltaika dobrana do domu z pompą ciepła i proste sterowanie roletami, światłem i ogrzewaniem.",
  duration: "kanały 1 tydz. przed wylewkami, centrala i PV 2–4 dni, rozruch po wykończeniu",
  steps: [

  /* 1 ------------------------------------------------------------------ */
  {
    id: "plan-wentylacji",
    title: "Projekt i bilans powietrza",
    lead: "Rekuperacja to dwa strumienie powietrza: świeże wpada do pokoi, zużyte uchodzi z kuchni, łazienek i garderoby. Ile i którędy, mówi bilans w projekcie, a nie wyczucie instalatora.",
    time: "1–2 tyg. (weryfikacja projektu)", team: "projektant instalacji, instalator",
    facts: [["Wymiana", "ok. 250–300 m³/h", "layers"], ["Centrala", "ok. 400–450 m³/h", "calc"], ["Kubatura", "ok. 500 m³", "house"]],
    body: `
      <p>Dom szczelny, z oknami bez nawiewników (etap 07), potrzebuje wentylacji mechanicznej. Rysunki wykonawcze rekuperacji są już w rozszerzonej dokumentacji z etapu 02; teraz instalator sprawdza je z gotowym układem mebli i kuchni.</p>
      <p><strong>Nawiew</strong> idzie do salonu, sypialni, pokoju dziecięcego i siłowni. <strong>Wywiew</strong> zabiera powietrze z kuchni, obu łazienek, garderoby i pomieszczenia technicznego. Korytarz i schody to strefa przepływu: powietrze przechodzi przez <strong>szczeliny pod drzwiami</strong> (ok. 1–2 cm) albo kratki.</p>
      <p>Dla ok. 190 m² wychodzi orientacyjnie <strong>250–300 m³/h</strong> w trybie normalnym. Wywiew wymaga mniej więcej tyle samo, ile nawiew: łazienka ok. 50 m³/h, kuchnia 50–70 m³/h, WC i garderoba po ok. 20–30 m³/h (wartości wg projektu i PN dla wentylacji mieszkań — sprawdź u projektanta). Garaż nie jest w układzie: ma własne kratki.</p>`,
    cost: { min: 0, max: 1000, note: "weryfikacja projektu przez instalatora; rysunki w etapie 02" },
    tips: [
      "<b>Centrala z zapasem.</b> Wybierz model ok. 400–450 m³/h, który na co dzień pracuje na 60–70% mocy. Jest wtedy cichy i oszczędny.",
      "<b>Nawiew przy oknie, wywiew przy drzwiach.</b> Anemostat w pokoju daleko od drzwi, wtedy powietrze przechodzi przez całe pomieszczenie.",
      "<b>Szczeliny pod drzwiami od razu w zamówieniu.</b> Drzwi wewnętrzne (etap 13) zamawiasz z podcięciem albo tulejami, inaczej nawiew w sypialni nie ma dokąd odpłynąć.",
      "<b>Hałas w sypialni do ok. 25 dB(A).</b> Wpisz to do umowy z instalatorem razem z tłumikami na każdej gałęzi do sypialni."
    ],
    mistakes: [
      "<b>„Dobierzemy na miejscu”.</b> Bez bilansu ekipa kładzie tyle samo rur do każdego pokoju. Salon ma za mało, a łazienka parzy wilgocią.",
      "<b>Wywiew w sypialni.</b> Zabiera świeże powietrze tam, gdzie ma być nawiew. Wywiew tylko z pomieszczeń „brudnych”.",
      "<b>Rekuperacja doklejona po tynkach.</b> Kanały w podwieszanych sufitach kosztują więcej i zabierają wysokość. Trasy planuj przed wylewkami (etap 11)."
    ],
    formal: [
      ["Projekt wentylacji mechanicznej", "część rysunków wykonawczych z etapu 02; zmiany w trasach uzgodnij z projektantem"],
      ["Bilans powietrza", "tabela nawiew/wywiew dla każdego pomieszczenia, podstawa do regulacji w kroku „Rozruch”"]
    ],
    quiz: [{
      q: "Z których pomieszczeń rekuperacja wyciąga powietrze?",
      a: ["Z sypialni i salonu", "Z kuchni, łazienek, garderoby i pomieszczenia technicznego", "Ze wszystkich po równo"],
      correct: 1,
      explain: "<b>Wywiew z pomieszczeń „brudnych”.</b> Świeże powietrze trafia do pokoi, przepływa przez szczeliny pod drzwiami i uchodzi tam, gdzie powstaje wilgoć i zapach."
    }]
  },

  /* 2 ------------------------------------------------------------------ */
  {
    id: "centrala",
    title: "Centrala i wymiennik ciepła",
    lead: "Serce systemu to centrala z dwoma wentylatorami i wymiennikiem. Zimą oddaje świeżemu powietrzu ok. 85–90% ciepła z powietrza wywiewanego, latem przez by-pass omija wymiennik.",
    time: "montaż 1 dzień", team: "instalator wentylacji",
    facts: [["Odzysk ciepła", "ok. 85–90%", "sun"], ["Filtry", "ISO ePM1 / ePM10", "shield"]],
    body: `
      <p>Strumienie w wymienniku się nie mieszają: ciepło przechodzi przez cienkie ścianki. W domu z pompą ciepła to oszczędność rzędu kilkuset kWh prądu rocznie i, co ważniejsze, <strong>stała świeżość bez otwierania okien</strong>.</p>
      <p>Szukaj centrali z <strong>wentylatorami EC</strong> (małe zużycie prądu, ok. 30–60 W w trybie normalnym), <strong>automatycznym by-passem</strong> (letnie chłodzenie nocą), <strong>filtrem ePM1</strong> na nawiewie (pyłki, smog) i sterowaniem przez Modbus lub sieć (krok „Smart home”). Ochronę przed szronieniem zapewnia zwykle elektryczna nagrzewnica wstępna albo wymiennik entalpiczny.</p>`,
    cost: { min: 10000, max: 15000, note: "centrala ok. 400–450 m³/h z by-passem, sterownikiem i filtrami" },
    decision: {
      question: "Jaki wymiennik w centrali?",
      intro: "Oba typy są przeciwprądowe, różnią się tym, co przepuszcza ścianka. Dopłata względem kosztu centrali w kroku.",
      chosen: "przeciwpradowy",
      options: [
        { id: "przeciwpradowy", name: "Przeciwprądowy (tworzywo lub aluminium)",
          cost: { min: 0, max: 0 }, time: "standard", note: "odzyskuje ciepło, nie wilgoć",
          pros: ["Najwyższy odzysk ciepła, ok. 85–90%", "Wymiennik można myć wodą", "Najwięcej modeli i części"],
          cons: ["Zimą powietrze w domu bywa suche (30–35% wilgotności)", "Wymaga nagrzewnicy wstępnej przy mrozie"],
          why: "Prosty, tani w serwisie i wystarczy w domu z łazienkami i kuchnią, które same dokładają wilgoci. Wybierz model, w którym wymiennik można później wymienić na entalpiczny, jeśli zimą będzie za sucho." },
        { id: "entalpiczny", name: "Entalpiczny (membrana)",
          cost: { min: 2000, max: 4000 }, time: "standard", note: "oddaje część wilgoci",
          pros: ["Zimą wilgotność w domu wyższa o ok. 5–10 punktów", "Rzadziej zamarza, często bez nagrzewnicy"],
          cons: ["Droższy wymiennik i wkłady", "Nie myje się go wodą, tylko odkurza", "Część zapachów z kuchni może wracać, gdy okap jest słaby"],
          why: "Ma sens, gdy domownicy źle znoszą suche powietrze (alergie, drewniane podłogi, instrumenty). Zastępuje nawilżacz w sezonie grzewczym." }
      ]
    },
    tips: [
      "<b>Porównuj odzysk przy tej samej wydajności.</b> Katalogowe 95% bywa podane dla małego przepływu. Pytaj o sprawność przy ok. 250–300 m³/h.",
      "<b>Filtry kupuj na rok z góry.</b> Wymiana co 3–6 mies., komplet zwykle 100–300 zł. Tanie zamienniki często nie trzymają klasy ePM1.",
      "<b>Odpływ skroplin z syfonem.</b> Centrala z wymiennikiem przeciwprądowym oddaje zimą wodę. Hydraulik zostawia przy niej odpływ (etap 09) z syfonem, który nie wysycha.",
      "<b>Panel sterujący w korytarzu, nie w szafie.</b> Musisz widzieć komunikat o filtrze. Najlepiej z dostępem przez aplikację."
    ],
    mistakes: [
      "<b>Centrala na granicy wydajności.</b> Model 300 m³/h kręcący się na 100% szumi w każdym pokoju i zużywa prąd jak dwa razy większy na 60%.",
      "<b>Brak by-passu.</b> Latem centrala grzeje nocne, chłodne powietrze ciepłem z domu. By-pass automatyczny to dziś standard.",
      "<b>Syfon bez wody.</b> Suchy syfon zasysa powietrze z kanalizacji. Syfon kulowy albo „suchy” rozwiązuje problem."
    ],
    quiz: [{
      q: "Co robi by-pass w centrali rekuperacyjnej?",
      a: ["Podgrzewa powietrze w zimie", "Kieruje powietrze z pominięciem wymiennika, np. w letnie noce", "Wyłącza wentylatory, gdy nikogo nie ma"],
      correct: 1,
      explain: "<b>Latem ciepło nie jest potrzebne.</b> By-pass omija wymiennik, więc chłodne nocne powietrze wpada do domu bez podgrzania."
    }]
  },

  /* 3 ------------------------------------------------------------------ */
  {
    id: "miejsce-centrali",
    title: "Gdzie stanie centrala",
    lead: "Centrala musi stać w strefie ogrzewanej, z dostępem do filtrów i odpływem skroplin, jak najbliżej środka sieci kanałów. W naszym domu pomieszczenie techniczne na parterze jest już zajęte.",
    time: "decyzja przed montażem kanałów", team: "projektant, instalator",
    body: `
      <p>W pomieszczeniu technicznym (ok. 5–7 m², etap 09) stoją zasobnik, moduł pompy ciepła, węzeł wodny, rozdzielacz podłogówki i pralka. Centrala z czterema kanałami Ø160–200 i rozdzielaczami zajęłaby resztę ścian.</p>
      <p>Lepsze miejsce to <strong>schowek techniczny na poddaszu w strefie ogrzewanej</strong> (np. przy łazience albo garderobie, min. ok. 2 m², drzwi szerokości min. 70 cm). Stąd kanały do pokoi poddasza są krótkie, a do parteru schodzą przez przepusty w stropie (etap 05). Czerpnia i wyrzutnia są tuż obok, przez ścianę szczytową i dach.</p>`,
    decision: {
      question: "Gdzie postawić centralę?",
      intro: "Koszt to dopłata względem centrali i kanałów z poprzednich kroków.",
      chosen: "poddasze",
      options: [
        { id: "poddasze", name: "Schowek techniczny na poddaszu (strefa ogrzewana)",
          cost: { min: 0, max: 0 }, time: "—", note: "krótkie kanały, blisko dachu",
          pros: ["Krótka czerpnia i wyrzutnia", "Pomieszczenie techniczne na parterze zostaje wolne", "Kanały do parteru tylko przez kilka przepustów w stropie"],
          cons: ["Trzeba wygospodarować ok. 2 m² na poddaszu", "Odpływ skroplin i gniazdo w schowku", "Podłoga pod centralą wyciszona (podkładki antywibracyjne)"],
          why: "Najkrótsza droga powietrza w domu z poddaszem i dachem 40°. Nie zabiera miejsca w ciasnym pomieszczeniu technicznym." },
        { id: "techniczne", name: "Pomieszczenie techniczne na parterze",
          cost: { min: 0, max: 1500 }, time: "—", note: "wszystkie urządzenia w jednym miejscu",
          pros: ["Wszystkie urządzenia i serwis w jednym pomieszczeniu", "Odpływ skroplin tuż obok"],
          cons: ["W 5–7 m² brakuje miejsca", "Dłuższe kanały na poddasze przez szacht", "Czerpnia blisko jednostki pompy ciepła na ścianie bocznej"],
          why: "Ma sens, gdy pomieszczenie techniczne ma min. ok. 8–9 m² i czerpnię da się wyprowadzić z dala od pompy ciepła." },
        { id: "strych", name: "Nieogrzewany stryszek nad jętkami",
          cost: { min: 1500, max: 3000 }, time: "—", note: "ocieplanie kanałów i centrali",
          pros: ["Nie zabiera miejsca w domu"],
          cons: ["Każdy kanał trzeba grubo ocieplić, inaczej rosi", "Serwis filtrów po drabinie i przez wyłaz", "Zimą ryzyko zamarzania skroplin"],
          why: "Ostateczność, gdy w domu nie ma ani metra. Wymaga centrali dopuszczonej do pracy w zimnym pomieszczeniu." }
      ]
    },
    tips: [
      "<b>Schowek obok łazienki.</b> Odpływ skroplin wpinasz do jej kanalizacji (etap 09), a hałas centrali nie trafia do sypialni.",
      "<b>Centrala na ścianie albo na stelażu z podkładkami.</b> Drgania przenoszą się po stropie. Zostaw z przodu ok. 70–80 cm na wyjęcie wymiennika.",
      "<b>Gniazdo 230 V na osobnym obwodzie i skrętka.</b> Jeśli w etapie 08 tego nie było w schowku, dołóż teraz, przed tynkami."
    ],
    mistakes: [
      "<b>Centrala nad sypialnią bez wyciszenia.</b> Niski szum wentylatorów słychać w nocy przez strop i ściankę działową.",
      "<b>Dostęp tylko przez wyłaz.</b> Filtry wymienia się co kilka miesięcy. Jeśli trzeba po nie wchodzić po drabinie, przestaniesz to robić."
    ],
    checklist: [
      "Centrala w strefie ogrzewanej, z dostępem od przodu ok. 70–80 cm",
      "Odpływ skroplin z syfonem i gniazdo 230 V przy centrali",
      "Przepusty w stropie do kanałów parteru zgodne z projektem"
    ]
  },

  /* 4 ------------------------------------------------------------------ */
  {
    id: "kanaly",
    title: "Kanały: rozdzielacze i rury do pokoi",
    lead: "Od centrali odchodzą cztery grube kanały, a od rozdzielaczy cienkie rury do każdego anemostatu. Każdy pokój ma swoją rurę, więc rozmowa z sypialni nie przechodzi kanałem do łazienki.",
    time: "projekt tras 1–2 dni", team: "instalator wentylacji",
    facts: [["Rura do pokoju", "Ø75–90 mm", "layers"], ["Przepływ na rurę", "do ok. 25–30 m³/h", "calc"]],
    body: `
      <p>W systemie rozdzielaczowym od centrali biegną kanały główne (Ø160–200) do <strong>skrzynek rozdzielczych</strong> z tłumikiem. Z nich wychodzą rury z tworzywa (PE, okrągłe Ø75–90 albo owalne) do każdego anemostatu. Salon dostaje 3–4 rury, sypialnia 2, łazienka 2.</p>
      <p>Na parterze rury idą w warstwie styropianu pod jastrychem (EPS 15 cm, etap 11) albo w stropie nad parterem, na poddaszu w warstwie podłogi lub pod skosami. Gładkie wnętrze rur i antystatyczna, antybakteryjna powłoka ograniczają osadzanie kurzu.</p>`,
    cost: { min: 9000, max: 13000, note: "kanały główne, rozdzielacze z tłumikami, rury PE, anemostaty" },
    decision: {
      question: "Jakie kanały?",
      intro: "Dopłata albo oszczędność względem systemu rozdzielaczowego w koszcie kroku.",
      chosen: "rozdzielaczowy",
      options: [
        { id: "rozdzielaczowy", name: "System rozdzielaczowy z rur PE (osobna rura do pokoju)",
          cost: { min: 0, max: 0 }, time: "2–3 dni montażu", note: "rury w warstwie podłogi",
          pros: ["Brak przenoszenia dźwięków między pokojami", "Rury mieszczą się w styropianie pod jastrychem", "Regulacja na rozdzielaczu, mało kształtek"],
          cons: ["Dużo rur na małym odcinku przy rozdzielaczu", "Każda rura musi być zaślepiona do końca prac"],
          why: "W domu z podłogówką i stropem filigranowym rury chowamy w warstwach podłogi bez sufitów podwieszanych. Cicho i łatwo wyregulować." },
        { id: "sztywne", name: "Kanały okrągłe sztywne (stal ocynkowana) z trójnikami",
          cost: { min: -3000, max: -1000 }, time: "3–4 dni montażu", note: "jedna linia z odgałęzieniami",
          pros: ["Najtańszy materiał, łatwe czyszczenie szczotką", "Mniejsze opory przy dużych przepływach"],
          cons: ["Wymaga sufitów podwieszanych albo zabudów", "Dźwięk przechodzi z pokoju do pokoju przez wspólną linię", "Trudniejsza regulacja"],
          why: "Dobre w domu z sufitami podwieszanymi na całym parterze albo przy przebudowie, gdy podłogi już są." }
      ]
    },
    tips: [
      "<b>Najwyżej ok. 25–30 m³/h na rurę Ø75.</b> Więcej daje świst na anemostacie. Salon z nawiewem ok. 90 m³/h dostaje 3–4 rury.",
      "<b>Rury od jednego producenta z rozdzielaczami i złączkami.</b> Uszczelki pasują, a w razie reklamacji odpowiada jedna firma.",
      "<b>Kanały główne izolowane.</b> Czerpnia i wyrzutnia mają zimne powietrze i muszą mieć izolację z paroizolacją (np. EPP albo wełna 5 cm z folią), inaczej skrapla się na nich woda.",
      "<b>Anemostaty z regulacją i nazwą pomieszczenia.</b> Ułatwia to późniejszą regulację i wymianę."
    ],
    mistakes: [
      "<b>Rury pod podłogówką w jastrychu.</b> Rury wentylacyjne idą w styropianie pod rurami grzewczymi, a nie w betonie. Uzgodnij kolejność z hydraulikiem.",
      "<b>Za dużo rur przez jeden próg.</b> Wiązka 10 rur w drzwiach zabiera styropian i tworzy mostek. Rozłóż trasy po projekcie."
    ],
    quiz: [{
      q: "Dlaczego w systemie rozdzielaczowym dźwięk nie przechodzi między pokojami?",
      a: ["Bo rury są z tworzywa", "Bo każdy pokój ma osobną rurę do rozdzielacza z tłumikiem", "Bo centrala pracuje wolniej"],
      correct: 1,
      explain: "<b>Osobna droga dla każdego pokoju.</b> Dźwięk musiałby przejść całą rurą do skrzynki z tłumikiem i z powrotem. Przy jednej linii z trójnikami słychać sąsiedni pokój."
    }]
  },

  /* 5 ------------------------------------------------------------------ */
  {
    id: "czerpnia-wyrzutnia",
    title: "Czerpnia i wyrzutnia",
    lead: "Czerpnia bierze świeże powietrze, wyrzutnia wydmuchuje zużyte. Muszą być od siebie daleko i z dala od komina, pompy ciepła i wywiewki kanalizacji.",
    time: "1 dzień", team: "instalator wentylacji, dekarz",
    body: `
      <p>W naszym domu <strong>czerpnia ścienna</strong> jest na ścianie szczytowej poddasza od strony północnej lub zacienionej (latem chłodniejsze powietrze), a <strong>wyrzutnia dachowa</strong> to systemowy kominek wentylacyjny w dachówce ceramicznej (etap 06). Jednostka pompy ciepła stoi przy drugiej ścianie bocznej, a komin kominka i wywiewka kanalizacji (etap 09) też mają swoje miejsca na dachu.</p>
      <p>Orientacyjnie: dolna krawędź czerpni <strong>min. ok. 2 m nad terenem</strong>, kilka metrów od wyrzutni, z dala od śmietnika, podjazdu i wylotów. Dokładne odległości są w projekcie i warunkach technicznych (WT2021) — sprawdź u projektanta.</p>`,
    cost: { min: 1500, max: 3000, note: "czerpnia ścienna, kominek dachowy, izolowane kanały do centrali" },
    tips: [
      "<b>Czerpnia z siatką i dużym przekrojem.</b> Prędkość w czerpni do ok. 2 m/s, inaczej zasysa deszcz i śnieg. Siatka przed liśćmi i owadami.",
      "<b>Wyrzutnia na dachu, czerpnia na ścianie.</b> Ciepłe, wilgotne powietrze wywiewane idzie do góry i nie wraca do czerpni.",
      "<b>Przejście przez dach robi dekarz.</b> Dachówka wentylacyjna z kołnierzem do modelu ceramiki z etapu 06, izolacja kanału aż do kołnierza.",
      "<b>Krótko i grubo.</b> Kanały do czerpni i wyrzutni najlepiej do kilku metrów, Ø160–200, z izolacją."
    ],
    mistakes: [
      "<b>Czerpnia nad jednostką pompy ciepła.</b> Zimą zasysa wychłodzone powietrze z wentylatora pompy, a latem gorące. Spada odzysk, centrala szroni.",
      "<b>Czerpnia przy kominie kominka.</b> Dym przy wietrze trafia do sypialni przez nawiew.",
      "<b>Wyrzutnia przez ścianę tuż obok czerpni.</b> Zużyte powietrze krąży w kółko, a na elewacji pojawia się zaciek."
    ],
    checklist: [
      "Czerpnia min. ok. 2 m nad terenem, z siatką",
      "Czerpnia daleko od wyrzutni, komina, pompy ciepła i wywiewki",
      "Kanały czerpni i wyrzutni izolowane z paroizolacją do samej przegrody",
      "Przejście przez dach wykonane przez dekarza, szczelne"
    ]
  },

  /* 6 ------------------------------------------------------------------ */
  {
    id: "montaz-kanalow",
    title: "Montaż kanałów przed wylewkami",
    lead: "Kanały kładzie się po tynkach i przed styropianem podłogowym, razem z rurami podłogówki. Każdą rurę zaślepia się aż do rozruchu, bo pył z budowy nie wychodzi z niej sam.",
    time: "3–5 dni", team: "2 monterów",
    body: `
      <p>Kolejność w etapie 11: tynki, potem <strong>rury wentylacyjne</strong> w pierwszej warstwie styropianu, potem drugi styropian, folia, podłogówka i jastrych. W stropie nad parterem kanały idą z przepustów do skrzynek anemostatów osadzonych w suficie.</p>
      <p>Po ułożeniu montażysta <strong>zaślepia każdy koniec</strong> (korki albo folia z taśmą) i robi zdjęcia tras z miarką. Centralę wpina się dopiero po szlifowaniu gładzi i malowaniu (etap 13): uruchomienie w pyle zapycha filtry i wymiennik.</p>`,
    cost: { min: 5000, max: 8000, note: "robocizna: kanały, rozdzielacze, przepusty, skrzynki anemostatów" },
    tips: [
      "<b>Rury w styropianie, nie w jastrychu.</b> Wycina się w EPS rowek na rurę, a nad nią zostaje min. ok. 3–5 cm styropianu pod rurami podłogówki.",
      "<b>Łuki zamiast kolan.</b> Rura PE gięta łagodnym łukiem ma mniejsze opory i nie szumi. Promień wg producenta.",
      "<b>Zaślepki do samego rozruchu.</b> Sprawdzaj je po każdej ekipie: tynkarze i posadzkarze lubią je zdejmować.",
      "<b>Mapa tras przed jastrychem.</b> Zdjęcia z miarką przydadzą się przy wierceniu w podłodze, np. pod meble czy listwy."
    ],
    mistakes: [
      "<b>Otwarte końce rur na budowie.</b> Gruz, pył gipsowy i zaprawa w rurze. Czyszczenie po fakcie jest drogie albo niemożliwe.",
      "<b>Zgniecione rury pod taczką.</b> Przed wylewką kładzie się trapy z desek. Owal rury po zgnieceniu nie wraca.",
      "<b>Kanał w pustce przy ścianie zewnętrznej.</b> Zimny kanał nawiewny przy ścianie z mostkiem cieplnym może rosić. Trasy wg projektu."
    ],
    checklist: [
      "Wszystkie rury zaślepione i opisane (pomieszczenie, nawiew/wywiew)",
      "Rury w warstwie styropianu, pod rurami podłogówki",
      "Zdjęcia tras z miarką przed przykryciem",
      "Skrzynki anemostatów w stropie na właściwej wysokości (pod płytę lub tynk)"
    ],
    quiz: [{
      q: "Kiedy można uruchomić centralę rekuperacji na stałe?",
      a: ["Zaraz po ułożeniu kanałów, żeby suszyć tynki", "Po szlifowaniu gładzi i malowaniu, z nowymi filtrami", "Dopiero po przeprowadzce"],
      correct: 1,
      explain: "<b>Rekuperacja nie jest osuszaczem budowy.</b> Pył z tynków i szlifowania zapcha filtry i wymiennik. Uruchamia się ją po pracach pylących, a filtry z okresu próbnego wymienia."
    }]
  },

  /* 7 ------------------------------------------------------------------ */
  {
    id: "okap",
    title: "Okap kuchenny a rekuperacja",
    lead: "Okap nad wyspą nie może być podłączony do rekuperatora: tłuszcz zakleja wymiennik. Przy wentylacji mechanicznej najprościej działa okap obiegowy z filtrem węglowym.",
    time: "decyzja przed kanałami", team: "projektant kuchni, instalator",
    body: `
      <p>Wywiew rekuperacji z kuchni (anemostat kilka metrów od płyty) zabiera wilgoć i zapach z całej kuchni. Okap łapie opary prosto nad płytą indukcyjną na wyspie.</p>
      <p><strong>Okap wyciągowy</strong> wyrzuca na zewnątrz nawet 400–600 m³/h, czyli więcej niż cała rekuperacja. Bez dopływu powietrza z zewnątrz robi podciśnienie: drzwi trudno się otwierają, a przy kominku dym może się cofać. Wymaga więc osobnego kanału na zewnątrz i nawiewu kompensacyjnego. Sam okap (model i montaż) liczymy w kuchni w etapie 13.</p>`,
    decision: {
      question: "Jaki okap przy rekuperacji?",
      intro: "Koszt to dopłata za kanał i nawiew. Sam okap jest w etapie 13.",
      chosen: "obiegowy",
      options: [
        { id: "obiegowy", name: "Okap obiegowy z filtrem węglowym",
          cost: { min: 0, max: 0 }, time: "—", note: "nie zaburza bilansu",
          pros: ["Nie zaburza bilansu rekuperacji ani ciągu kominka", "Bez dziury w ścianie i kanału przez sufit nad wyspą", "Prosty montaż w każdym miejscu"],
          cons: ["Filtr węglowy do wymiany co 6–12 mies. (ok. 100–300 zł)", "Nie usuwa wilgoci, robi to wywiew rekuperacji"],
          why: "W domu z rekuperacją i kominkiem to najbezpieczniejszy wariant. Przy indukcji, bez spalin z gazu, filtr węglowy wystarcza." },
        { id: "wyciagowy", name: "Okap wyciągowy z osobnym kanałem i nawiewem kompensacyjnym",
          cost: { min: 2000, max: 4000 }, time: "+1 dzień", note: "kanał, przepustnica, nawiew",
          pros: ["Najlepiej usuwa zapach przy intensywnym smażeniu", "Bez filtrów węglowych"],
          cons: ["Kanał Ø125–150 przez sufit do ściany zewnętrznej", "Bez nawiewu kompensacyjnego robi podciśnienie", "Zimą wyrzuca ciepłe powietrze bez odzysku"],
          why: "Gdy w domu dużo się smaży i kanał da się poprowadzić krótko. Wymaga przepustnicy zwrotnej i sterowania nawiewem razem z okapem." }
      ]
    },
    tips: [
      "<b>Wywiew rekuperacji z kuchni 2–3 m od płyty.</b> Nie nad wyspą, żeby nie zasysał tłustych oparów do kanału.",
      "<b>Okap wyspowy obiegowy wybierz z dużym filtrem.</b> Moduły z filtrem regenerowanym (do wypalenia w piekarniku) obniżają koszty eksploatacji.",
      "<b>Tryb „gotowanie” w centrali.</b> Na czas gotowania zwiększa wywiew z kuchni. Uruchomisz go z panelu albo automatycznie z czujnika wilgotności."
    ],
    mistakes: [
      "<b>Okap wpięty w kanał wywiewny rekuperatora.</b> Tłuszcz osiada w kanałach i wymienniku, a wentylator okapu rozbija bilans. Producenci central tego zabraniają.",
      "<b>Okap wyciągowy bez dopływu powietrza.</b> Przy kominku to realne ryzyko cofania spalin do salonu."
    ],
    quiz: [{
      q: "Dlaczego nie podłącza się okapu do rekuperatora?",
      a: ["Bo okap ma za słaby silnik", "Bo tłuszcz zakleja kanały i wymiennik, a okap rozbija bilans powietrza", "Bo przepisy zabraniają okapów w domach z rekuperacją"],
      correct: 1,
      explain: "<b>Tłuszcz i bilans.</b> Wymiennik ma cienkie kanały, które tłuszcz szybko zakleja. Okap obiegowy albo wyciągowy z osobnym kanałem i nawiewem rozwiązują to bez szkody dla centrali."
    }]
  },

  /* 8 ------------------------------------------------------------------ */
  {
    id: "kominek-a-rekuperacja",
    title: "Kominek a rekuperacja",
    lead: "Zamknięty wkład kominkowy z etapu 09 bierze powietrze do spalania z zewnątrz, więc nie zabiera go z salonu. Mimo to kominek i rekuperacja muszą się dogadać.",
    time: "ustawienie 1 h", team: "instalator, kominiarz",
    body: `
      <p>Rekuperacja w równowadze nie robi podciśnienia. Problem zaczyna się, gdy <strong>wywiew przeważa</strong>: zapchany filtr nawiewu, szronienie wymiennika albo włączony okap wyciągowy. Wtedy dom „ciągnie” powietrze przez każdą szczelinę, także przez komin.</p>
      <p>Dlatego: wkład <strong>szczelny</strong>, z certyfikatem do domów z wentylacją mechaniczną, powietrze do spalania kanałem z zewnątrz (etap 09), w centrali <strong>funkcja „kominek”</strong> (na czas rozpalania lekko zwiększa nawiew) i <strong>czujnik tlenku węgla</strong> w salonie.</p>`,
    cost: { min: 300, max: 1000, note: "czujnik CO, ewentualnie czujnik różnicy ciśnień" },
    tips: [
      "<b>Rozpalaj przy otwartej szybrze i na funkcji „kominek”.</b> Pierwsze 10–15 minut decyduje o ciągu.",
      "<b>Czujnik CO z baterią na 10 lat.</b> Na ścianie w salonie, ok. 1,5 m nad podłogą, nie nad kominkiem. Drugi przy sypialni na poddaszu.",
      "<b>Opinia kominiarza z wkładem i rekuperacją.</b> Przy odbiorze kominiarz sprawdza ciąg przy pracującej centrali.",
      "<b>Kominek grzeje salon, nie dom.</b> Bez DGP (decyzja z etapu 09) ciepło zostaje w salonie. Rekuperacja przenosi tylko trochę ciepła przez wywiew."
    ],
    mistakes: [
      "<b>Wkład otwarty albo nieszczelny.</b> Przy wentylacji mechanicznej dym trafia do salonu przy każdej nierównowadze.",
      "<b>Zapchany filtr nawiewu.</b> Centrala wyciąga więcej, niż nawiewa. Wymieniaj filtry przed sezonem grzewczym."
    ],
    checklist: [
      "Wkład szczelny, z dokumentem dopuszczenia do domów z wentylacją mechaniczną",
      "Powietrze do spalania kanałem z zewnątrz",
      "Funkcja „kominek” ustawiona i przetestowana",
      "Czujnik CO w salonie"
    ],
    quiz: [{
      q: "Kiedy kominek w domu z rekuperacją może dymić do salonu?",
      a: ["Gdy rekuperacja pracuje w równowadze", "Gdy wywiew przeważa nad nawiewem, np. przez zapchany filtr albo okap wyciągowy", "Gdy w salonie jest anemostat nawiewny"],
      correct: 1,
      explain: "<b>Podciśnienie odwraca ciąg.</b> Gdy z domu wychodzi więcej powietrza, niż wchodzi, brakujące wraca kominem. Stąd filtry na czas, okap obiegowy i czujnik CO."
    }]
  },

  /* 9 ------------------------------------------------------------------ */
  {
    id: "dobor-pv",
    title: "Fotowoltaika: dobór mocy",
    lead: "Dom z pompą ciepła zużyje orientacyjnie 7–8 tys. kWh prądu rocznie. Osiem modułów z wizualizacji to za mało. Rozsądny dobór to 14 modułów, ok. 6,4 kWp, tuż poniżej progu 6,5 kW.",
    time: "decyzja 1–2 tyg.", team: "projektant PV, ty",
    facts: [["Zużycie domu", "ok. 7–8 tys. kWh/rok", "bulb"], ["Instalacja", "14 × ok. 460 W ≈ 6,4 kWp", "sun"], ["Produkcja", "ok. 6–6,5 tys. kWh/rok", "calc"]],
    body: `
      <p>Bilans orientacyjny: pompa ciepła z ciepłą wodą ok. <strong>3,5–4 tys. kWh</strong> (kalkulator w etapie 09), reszta domu (indukcja, AGD, oświetlenie, rekuperacja, pompa basenowa w sezonie) ok. <strong>3,5–4 tys. kWh</strong>. Moduł ok. 460 W na połaci południowej o nachyleniu 40° daje w Polsce ok. 1000 kWh z 1 kWp rocznie.</p>
      <p>Przy rozliczeniu <strong>net-billing</strong> nadwyżka sprzedawana do sieci jest warta wyraźnie mniej niż prąd kupowany. Instalacja „na 100% i więcej” zwraca się wolniej; lepiej pokryć ok. 80–90% zużycia i zużywać prąd w dzień. 14 modułów mieści się w dwóch rzędach na połaci od ogrodu (ok. 13 m szerokości), z dala od okien dachowych i komina.</p>
      <p>Próg <strong>6,5 kW</strong> ma znaczenie formalne: większa instalacja wymaga uzgodnienia projektu z rzeczoznawcą do spraw zabezpieczeń przeciwpożarowych i zawiadomienia straży pożarnej (Prawo budowlane; sposób liczenia mocy — sprawdź u projektanta).</p>`,
    decision: {
      question: "Ile modułów?",
      intro: "Cena z montażem, falownikiem i zabezpieczeniami, moduły ok. 460 W. Krok nie ma własnego kosztu, liczy się wybrana opcja.",
      chosen: "m14",
      options: [
        { id: "m14", name: "14 modułów, ok. 6,4 kWp",
          cost: { min: 23000, max: 30000 }, time: "montaż 2 dni", note: "ok. 80–85% zużycia",
          pros: ["Pokrywa większość rocznego zużycia z pompą ciepła", "Poniżej 6,5 kW: bez rzeczoznawcy ppoż. i zawiadomienia straży", "Mieści się na jednej połaci z zapasem"],
          cons: ["Zimą i tak kupujesz prąd z sieci", "Na auto elektryczne trzeba będzie dołożyć moduły"],
          why: "Najlepszy zwrot przy net-billingu i najprostsze formalności. Do 6,5 kW dołożysz później moduły tylko z nowym uzgodnieniem, więc zostaw miejsce na połaci." },
        { id: "m8", name: "8 modułów, ok. 3,7 kWp (jak w wizualizacji)",
          cost: { min: 15000, max: 20000 }, time: "montaż 1 dzień", note: "ok. 45–50% zużycia",
          pros: ["Najtańsza instalacja", "Prawie cała produkcja zużyta na miejscu"],
          cons: ["Pokrywa mniej niż połowę zużycia domu z pompą ciepła", "Koszt na 1 kWp najwyższy (falownik i montaż i tak są)"],
          why: "Wystarczy w domu bez pompy ciepła albo gdy na dachu jest mało miejsca. U nas za mała." },
        { id: "m20", name: "20 modułów, ok. 9,2 kWp (z myślą o aucie)",
          cost: { min: 31000, max: 41000 }, time: "montaż 2–3 dni", note: "ok. 100% + ładowanie auta",
          pros: ["Zapas na auto elektryczne i klimatyzację", "Niższy koszt 1 kWp"],
          cons: ["Uzgodnienie z rzeczoznawcą ppoż. i zawiadomienie straży (ok. 1–2 tys. zł w cenie)", "Duża nadwyżka latem sprzedawana tanio", "Dwie połacie albo ciasno przy oknach dachowych"],
          why: "Ma sens, gdy auto elektryczne pojawi się od razu i będzie ładowane w dzień (praca zdalna)." }
      ]
    },
    widget: "kalkulator-pv",
    tips: [
      "<b>Licz z rachunków albo z kalkulatora.</b> Wpisz zużycie pompy z etapu 09 i resztę domu. Moc dobieraj do zużycia, nie do powierzchni dachu.",
      "<b>Moduły w jednym rzędzie bez cienia.</b> Komin, okna dachowe i wyrzutnia rekuperacji rzucają cień. Projektant PV robi analizę zacienienia.",
      "<b>Falownik o mocy ok. 6 kW.</b> Lekko mniejszy od mocy modułów to norma: moduły rzadko dają pełną moc.",
      "<b>Gwarancja na moduły 25 lat, na falownik 10.</b> Zapytaj, kto w Polsce obsługuje gwarancję falownika."
    ],
    mistakes: [
      "<b>Instalacja „na cały dach”.</b> Przy net-billingu nadwyżka latem jest warta mało. Zwrot się wydłuża.",
      "<b>Moduły na połaci północnej.</b> Przy 40° od północy produkcja spada o połowę. Tylko połać południowa albo wschód–zachód.",
      "<b>Liczenie zużycia bez pompy ciepła.</b> Dom z pompą zużywa dwa razy więcej prądu niż podobny dom z gazem."
    ],
    quiz: [{
      q: "Dlaczego przy net-billingu nie opłaca się instalacja dużo większa niż zużycie?",
      a: ["Bo operator nie przyjmie nadwyżki", "Bo nadwyżka sprzedana do sieci jest warta mniej niż prąd kupowany", "Bo duże instalacje są zakazane na domach"],
      correct: 1,
      explain: "<b>Kupujesz drożej, niż sprzedajesz.</b> Energia oddana do sieci jest rozliczana po cenach rynkowych, zwykle kilka razy niższych niż cena prądu z dystrybucją. Największy zysk daje prąd zużyty na miejscu."
    }]
  },

  /* 10 ----------------------------------------------------------------- */
  {
    id: "zgloszenie-pv",
    title: "Zgłoszenie do operatora i net-billing",
    lead: "Mikroinstalacja na dachu domu nie wymaga pozwolenia na budowę. Wystarczy zgłoszenie do operatora sieci, który wymienia licznik na dwukierunkowy.",
    time: "2–6 tyg.", team: "instalator PV, operator sieci",
    body: `
      <p>Instalator po montażu składa <strong>zgłoszenie mikroinstalacji</strong> do operatora sieci dystrybucyjnej (OSD), zwykle przez portal operatora. Moc instalacji nie może przekraczać mocy przyłączeniowej domu (u nas przyłącze 3 × 25–32 A z etapu 03, z zapasem). Operator wymienia licznik i od tego dnia liczy prąd oddany i pobrany.</p>
      <p>W net-billingu energia oddana trafia na <strong>depozyt prosumencki</strong> w złotówkach, wyceniana po cenach rynkowych, i zmniejsza kolejne rachunki. Zasady rozliczeń i ewentualne dopłaty się zmieniają: przed umową sprawdź aktualne warunki. W budżecie nie zakładamy żadnej dotacji (decyzja z etapu 00).</p>`,
    tips: [
      "<b>Zgłoszenie robi instalator.</b> Wpisz to do umowy razem z terminem i schematem jednokreskowym w dokumentacji.",
      "<b>Nie włączaj falownika przed wymianą licznika.</b> Stary licznik może naliczać oddany prąd jak pobrany.",
      "<b>Do 6,5 kW bez straży.</b> Przy większej mocy przed użytkowaniem potrzebne jest uzgodnienie projektu z rzeczoznawcą ppoż. i zawiadomienie straży pożarnej.",
      "<b>Aplikacja falownika od pierwszego dnia.</b> Porównuj produkcję z prognozą projektanta. Spadek o kilkanaście procent to sygnał do reklamacji."
    ],
    mistakes: [
      "<b>Dotacja bez sprawdzenia terminu.</b> Programy dopłat często wymagają wniosku przed zakupem albo montażem. Po fakcie bywa za późno.",
      "<b>Moc modułów ponad moc przyłączeniową.</b> Operator może odmówić przyłączenia albo kazać zmienić warunki."
    ],
    formal: [
      ["Zgłoszenie mikroinstalacji do OSD", "instalator, po montażu; operator wymienia licznik, zwykle w kilka tygodni"],
      ["Umowa kompleksowa prosumenta", "sprzedawca energii; aneks do umowy po zgłoszeniu"],
      ["Uzgodnienie z rzeczoznawcą ppoż. i zawiadomienie straży", "tylko instalacje powyżej 6,5 kW"],
      ["Protokół odbioru i pomiarów", "instalator; teczka instalacji do etapu 16"]
    ],
    quiz: [{
      q: "Co jest potrzebne, żeby podłączyć 6,4 kWp na dachu domu jednorodzinnego?",
      a: ["Pozwolenie na budowę", "Zgłoszenie mikroinstalacji do operatora sieci", "Decyzja starosty i opinia straży"],
      correct: 1,
      explain: "<b>Mikroinstalacja to formalność u operatora.</b> Instalator zgłasza ją do OSD, operator wymienia licznik. Uzgodnienie ppoż. dochodzi dopiero powyżej 6,5 kW."
    }]
  },

  /* 11 ----------------------------------------------------------------- */
  {
    id: "montaz-pv",
    title: "Montaż modułów i falownika",
    lead: "Haki pod dachówką, szyny, moduły, przewody przez przepust do falownika. Dekarz z etapu 06 przygotował haki i rurę dla 8 modułów, więc ekipa PV dokłada haki dla reszty.",
    time: "2 dni", team: "2–3 monterów PV, elektryk",
    facts: [["Haki", "ok. 30–40 szt.", "rebar"], ["Przepust", "rura Ø32–40 z etapu 06", "layers"]],
    body: `
      <p>Haki przykręca się do krokwi lub kontrłat pod dachówką; dachówkę nad hakiem szlifuje się albo wymienia na systemową, żeby nie pękała. Na hakach leżą <strong>szyny aluminiowe</strong>, na szynach moduły w dwóch rzędach, z odstępem ok. 20 cm od kalenicy i krawędzi połaci.</p>
      <p>Przewody DC idą przez <strong>przepust i rurę z etapu 06</strong> do falownika. Falownik wieszamy w garażu (chłodno, blisko rozdzielnicy, miejsce na magazyn energii później), a po stronie AC wpinamy go w rozdzielnicę z etapu 08, która ma już ochronniki przepięć T1+T2. Po stronie DC dochodzą rozłącznik i ochronniki DC.</p>`,
    tips: [
      "<b>Haki na krokwiach, nie na samych łatach.</b> Łata 40 × 50 nie uniesie zimą śniegu z modułami. Rozstaw wg obliczeń producenta systemu.",
      "<b>Dekarz przy montażu albo odbiorze.</b> Gwarancja na pokrycie z etapu 06 często wymaga, żeby przy hakach pracował dekarz albo by je odebrał.",
      "<b>Falownik w chłodzie i przewiewie.</b> Przy temperaturze powyżej ok. 40°C falownik obcina moc. Garaż od północy jest lepszy niż strych.",
      "<b>Przewody DC w rurze, z daleka od skrętki.</b> Uziemienie konstrukcji do szyny wyrównawczej (etap 08)."
    ],
    mistakes: [
      "<b>Pęknięta dachówka pod hakiem.</b> Hak naciska na dachówkę, gdy nie podszlifowano jej od spodu. Przecieki wychodzą po pierwszej zimie.",
      "<b>Przewody DC luzem na membranie.</b> Gorące lato i krawędzie dachówek przecierają izolację. To najczęstsza przyczyna pożarów PV.",
      "<b>Złącza różnych producentów.</b> Wtyk jednej firmy w gniazdo drugiej to iskrzenie i utrata gwarancji."
    ],
    checklist: [
      "Haki na krokwiach, dachówki nad hakami podszlifowane, pokrycie szczelne",
      "Przewody DC w rurze przez przepust z etapu 06",
      "Złącza DC jednego producenta, zaciśnięte właściwym narzędziem",
      "Falownik w garażu, rozłącznik DC i ochronniki po obu stronach",
      "Konstrukcja uziemiona, pomiary z protokołem"
    ]
  },

  /* 12 ----------------------------------------------------------------- */
  {
    id: "magazyn-energii",
    title: "Magazyn energii",
    lead: "Bateria przesuwa prąd z południa na wieczór. W domu z pompą ciepła przy net-billingu zwraca się jednak wolno, a ceny magazynów spadają.",
    time: "montaż 1 dzień (teraz albo później)", team: "instalator PV",
    body: `
      <p>Bez magazynu domy zużywają na bieżąco ok. 25–35% produkcji PV, resztę oddają do sieci. Magazyn ok. 10 kWh podnosi to do ok. 50–65%. W zimie, kiedy pompa ciepła zużywa najwięcej, magazyn ma jednak mało czym się ładować.</p>
      <p>Najrozsądniej kupić teraz <strong>falownik hybrydowy</strong>, który przyjmie baterię bez wymiany, i zostawić w garażu miejsce na ścianie i przewód. Magazyn dołożysz, gdy ceny spadną albo zmienią się zasady rozliczeń.</p>`,
    decision: {
      question: "Magazyn energii?",
      intro: "Dopłata względem zwykłego falownika sieciowego z ceny instalacji PV.",
      chosen: "pozniej",
      options: [
        { id: "pozniej", name: "Później: falownik hybrydowy teraz, bateria za kilka lat",
          cost: { min: 1500, max: 3000 }, time: "—", note: "gotowe do dołożenia",
          pros: ["Dołożenie baterii bez wymiany falownika", "Pieniądze na baterię zostają w budżecie instalacji", "Ceny magazynów spadają"],
          cons: ["Na razie brak zasilania awaryjnego", "Trzeba trzymać się baterii zgodnych z falownikiem"],
          why: "Najlepszy kompromis przy budżecie ok. 100 tys. na etap: bateria dziś wydłuża zwrot, a hybryda nie zamyka drogi." },
        { id: "nie", name: "Nie: falownik sieciowy",
          cost: { min: 0, max: 0 }, time: "—", note: "najtaniej",
          pros: ["Najniższa cena", "Najprostsza instalacja"],
          cons: ["Dołożenie baterii to wymiana falownika albo drugi falownik", "Brak zasilania awaryjnego"],
          why: "Gdy na pewno nie planujesz magazynu i zależy ci na najkrótszym zwrocie." },
        { id: "tak", name: "Tak: magazyn ok. 10 kWh od razu",
          cost: { min: 20000, max: 30000 }, time: "+1 dzień", note: "z falownikiem hybrydowym",
          pros: ["Autokonsumpcja ok. 50–65%", "Zasilanie awaryjne lodówki, PC, routera (jeśli falownik ma funkcję backup)", "Większa niezależność od cen"],
          cons: ["Zwrot wyraźnie dłuższy niż samej PV (kalkulator)", "Zabiera ok. 1/4 budżetu etapu", "Wymaga miejsca i warunków ppoż. przy montażu"],
          why: "Ma sens, gdy w okolicy są częste przerwy w dostawie prądu albo pojawią się dopłaty do magazynów (sprawdź aktualne warunki)." }
      ]
    },
    tips: [
      "<b>Zostaw miejsce na ścianie garażu.</b> Ok. 1 × 1,5 m obok falownika, z dala od bramy i auta, i przewód lub rurę do falownika.",
      "<b>Najpierw automatyka, potem bateria.</b> Grzanie ciepłej wody i pralka w godzinach słońca dają darmową „baterię” w postaci zasobnika 300 l (etap 09).",
      "<b>Zasilanie awaryjne to osobna funkcja.</b> Nie każdy falownik hybrydowy podtrzyma dom przy braku sieci. Zapytaj o tryb backup i rozdzielnicę obwodów awaryjnych."
    ],
    mistakes: [
      "<b>Magazyn „bo sąsiad ma”.</b> Bez policzenia zwrotu łatwo wydać 25 tys. zł na kilkaset złotych oszczędności rocznie.",
      "<b>Bateria w kotłowni przy zasobniku i pralce.</b> Magazyny litowe potrzebują wentylowanego, suchego miejsca wg instrukcji producenta."
    ],
    quiz: [{
      q: "Dlaczego warto od razu kupić falownik hybrydowy, nawet bez baterii?",
      a: ["Bo produkuje więcej prądu", "Bo magazyn można później dołożyć bez wymiany falownika", "Bo jest wymagany przez operatora"],
      correct: 1,
      explain: "<b>Hybryda zostawia otwartą drogę.</b> Kosztuje ok. 1,5–3 tys. zł więcej niż falownik sieciowy, a bateria dołożona po latach podłącza się bez przeróbek."
    }]
  },

  /* 13 ----------------------------------------------------------------- */
  {
    id: "smart-home",
    title: "Smart home: rolety, światło, ogrzewanie",
    lead: "Inteligentny dom zaczyna się od kilku rzeczy, z których korzystasz codziennie: rolet, świateł, ogrzewania i prądu z dachu. Przewody i puszki są już z etapu 08.",
    time: "konfiguracja 2–4 dni", team: "elektryk, integrator",
    body: `
      <p>Rolety podtynkowe z etapu 07 mają napędy i przewody 3 × 1,5 do każdej skrzynki, puszki są głębokie (etap 08), a pompa ciepła, rekuperacja i falownik mają własne sterowniki z dostępem przez sieć. Wystarczy <strong>jeden system z aplikacją i przyciskami na ścianach</strong>, który połączy te elementy w scenariusze.</p>
      <p>Przydatne scenariusze: <strong>„Wyjście”</strong> (rolety, światła, alarm), <strong>„Upał”</strong> (rolety od południa w dół w południe), <strong>„Noc”</strong>, <strong>„Kino”</strong>. Do tego <strong>zarządzanie energią</strong>: ciepła woda w zasobniku i podniesiona temperatura podłogi w godzinach produkcji PV, pralka i zmywarka startujące w słońcu, filtracja basenu w dzień (etap 15).</p>`,
    decision: {
      question: "Jaki smart home?",
      intro: "Krok nie ma własnego kosztu, liczy się wybrana opcja. Ceny ze sterownikami i konfiguracją.",
      chosen: "proste",
      options: [
        { id: "proste", name: "Proste sterowanie: jeden system (bezprzewodowy lub hybrydowy) i aplikacja",
          cost: { min: 6000, max: 12000 }, time: "2–4 dni", note: "rolety, światło, termostaty, scenariusze",
          pros: ["Moduły w puszkach głębokich z etapu 08, bez nowych przewodów", "Łączy rolety, oświetlenie, termostaty i automatykę energii", "Łatwo rozbudować o kolejne pomieszczenia"],
          cons: ["Zależność od jednego producenta i jego aplikacji", "Moduły radiowe w puszkach potrzebują przewodu neutralnego", "Integracja PC i rekuperacji zależy od ich protokołów"],
          why: "Daje 90% codziennej wygody za ułamek ceny pełnego systemu. Pasuje do instalacji zrobionej w etapie 08." },
        { id: "brak", name: "Brak: zwykłe łączniki i aplikacje producentów",
          cost: { min: 0, max: 0 }, time: "—", note: "każde urządzenie osobno",
          pros: ["Zero kosztów i konfiguracji", "Nic się nie „zawiesza”"],
          cons: ["Rolety sterowane z osobnych przycisków, bez scenariuszy", "Brak automatyki energii z PV", "Kilka aplikacji w telefonie"],
          why: "Wystarczy, gdy wygoda nie jest priorytetem. Puszki głębokie z etapu 08 pozwalają dołożyć system później." },
        { id: "pelny", name: "Pełny system przewodowy (np. KNX lub centralny sterownik)",
          cost: { min: 35000, max: 60000 }, time: "1–2 tyg.", note: "wszystko z jednej centrali",
          pros: ["Najwyższa niezawodność i pełna integracja", "Czujniki, pogoda, prezencja, logika bez chmury"],
          cons: ["Przewód magistralny trzeba zaplanować przed tynkami (etap 08)", "Drogi programista i serwis", "Przekracza budżet etapu"],
          why: "Ma sens przy dużym budżecie i decyzji przed etapem 08. U nas przewody są już ułożone pod system prosty." }
      ]
    },
    tips: [
      "<b>Każda funkcja działa też bez telefonu.</b> Przyciski na ścianach przy drzwiach i w łóżku. Gość nie musi instalować aplikacji.",
      "<b>Sterowanie lokalne, nie tylko przez chmurę.</b> Przy awarii internetu rolety i światła mają dalej działać.",
      "<b>Najpierw energia.</b> Grzałka i pompa ciepła w godzinach PV podnoszą autokonsumpcję o 10–20 punktów procentowych bez baterii.",
      "<b>Lista urządzeń i haseł w teczce domu.</b> Router, sterownik, PC, rekuperacja, falownik: dane dostępowe w jednym miejscu (etap 16)."
    ],
    mistakes: [
      "<b>System z trzech różnych firm.</b> Każda ma inną aplikację, a scenariusze między nimi nie działają.",
      "<b>Wszystko automatycznie.</b> Rolety zjeżdżające same w czasie przyjęcia na tarasie. Automatyka z przyciskiem „ręcznie”."
    ],
    quiz: [{
      q: "Co najtaniej podnosi zużycie własnego prądu z PV w domu z pompą ciepła?",
      a: ["Magazyn energii 10 kWh", "Grzanie ciepłej wody i włączanie AGD w godzinach słońca", "Wyłączanie rekuperacji w dzień"],
      correct: 1,
      explain: "<b>Zasobnik 300 l to darmowa bateria.</b> Pompa grzeje wodę w południe, pralka i zmywarka startują przy słońcu. Kosztuje tylko ustawienie harmonogramu."
    }]
  },

  /* 14 ----------------------------------------------------------------- */
  {
    id: "rozruch-i-odbiory",
    title: "Rozruch, regulacja i odbiory",
    lead: "Rekuperację uruchamia się po pracach pylących, z nowymi filtrami, i reguluje anemometrem na każdym anemostacie. PV i smart home odbiera się z protokołem i listą ustawień.",
    time: "1 dzień", team: "instalator wentylacji, instalator PV",
    facts: [["Tolerancja przepływu", "ok. ± 10% od projektu", "check"], ["Filtry", "co 3–6 mies.", "clock"]],
    body: `
      <p>Instalator ustawia bieg nominalny centrali, a potem anemometrem z lejem mierzy <strong>każdy anemostat</strong> i dokręca go do wartości z bilansu (krok 1). Suma nawiewu i wywiewu ma się zgadzać, a w sypialniach w nocy ma być cicho.</p>
      <p>Po rozruchu dostajesz <strong>protokół z przepływami</strong>, harmonogram filtrów, instrukcję funkcji „kominek” i „gotowanie”. Z PV: protokół pomiarów, schemat i potwierdzenie zgłoszenia do operatora. Wszystko trafia do teczki instalacji (etap 16).</p>`,
    cost: { min: 800, max: 2000, note: "pomiar i regulacja przepływów z protokołem, nowe filtry" },
    tips: [
      "<b>Regulacja z zamkniętymi oknami i drzwiami.</b> Pomiar przy otwartym oknie nic nie mówi o pracy w zimie.",
      "<b>Nowe filtry po okresie próbnym.</b> Jeśli centrala chodziła w czasie wykończenia, wymień filtry przed regulacją.",
      "<b>Sprawdź noc.</b> Włącz bieg nocny i posłuchaj w sypialni. Jeśli szumi, regulacja albo tłumik do poprawy jeszcze w gwarancji.",
      "<b>Przegląd po pierwszym roku.</b> Czyszczenie wymiennika i kontrola przepływów. PV: porównanie produkcji z prognozą."
    ],
    mistakes: [
      "<b>Odbiór bez protokołu przepływów.</b> Bez niego nie udowodnisz, że system działa wg projektu, gdy w pokoju będzie duszno.",
      "<b>Rekuperacja wyłączana na noc lub na wyjazd.</b> W szczelnym domu wilgoć rośnie w kilka godzin. Zostaw bieg minimalny."
    ],
    checklist: [
      "Przepływy na każdym anemostacie w granicach ok. ± 10% od projektu",
      "Suma nawiewu ≈ suma wywiewu, protokół podpisany",
      "Nowe filtry i harmonogram wymian w aplikacji",
      "Funkcje „kominek” i „gotowanie” sprawdzone",
      "PV: protokół pomiarów, licznik dwukierunkowy, aplikacja falownika",
      "Smart home: lista scenariuszy, dane dostępowe w teczce domu"
    ],
    quiz: [{
      q: "Czym instalator reguluje przepływy przy odbiorze rekuperacji?",
      a: ["Na ucho, po szumie", "Anemometrem z lejem na każdym anemostacie, według bilansu z projektu", "Tylko biegiem centrali w aplikacji"],
      correct: 1,
      explain: "<b>Pomiar na każdym anemostacie.</b> Bieg centrali ustala sumę, a rozkład na pokoje ustawia się anemostatami lub przepustnicami w rozdzielaczu, do wartości z bilansu."
    }]
  }
  ]
});
