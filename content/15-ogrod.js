/* Etap 15: Ogród. Podjazd, taras, ogrodzenie, trawnik, nawadnianie, oświetlenie, basen. Ceny orientacyjne, 2026 r., okolice małego miasta.
   Działka ok. 30 × 40 m, wjazd od północy, ogród, taras i basen od południa (DECYZJE 01, F0c). */
BUDOWA.addStage({
  id: "15-ogrod", nr: 15, title: "Ogród", icon: "🌳", category: "ogrod",
  summary: "Ok. 1000 m² wokół domu: najpierw ciężki sprzęt i wszystko, co pod ziemią (deszczówka, basen, kable, rury), potem podjazd, taras i ogrodzenie, na końcu humus, trawnik i rośliny.",
  duration: "3–5 mies. (kwiecień–październik)",
  steps: [

  /* 1 ------------------------------------------------------------------ */
  {
    id: "projekt-ogrodu",
    title: "Projekt ogrodu i kolejność prac",
    lead: "Ogród robi się od dołu do góry: najpierw to, co wymaga koparki i dźwigu, potem rury i kable, potem nawierzchnie, a trawnik i rośliny na samym końcu. Odwrotna kolejność kończy się rozjeżdżonym trawnikiem i rozkopanym podjazdem.",
    time: "2–4 tyg. projektu", team: "architekt krajobrazu, ty",
    facts: [["Ogród", "ok. 1000 m² (działka 1200 m²)", "house"], ["Limit kategorii", "250 tys. zł", "wallet"], ["Sezon prac", "kwiecień–październik", "sun"]],
    body: `
      <p>Na działce ok. 30 × 40 m dom z garażem zajmuje ok. 170 m², wjazd jest od północy, a <strong>taras, basen i większość ogrodu od południa</strong>. Projekt ogrodu rozkłada na planie: podjazd i ścieżki, taras, basen 4,2 × 8,5 m, trawnik ok. 600 m², żywopłot, drzewa, pergolę, domek dla dzieci, miejsce na kubły i drewno.</p>
      <p>Najważniejsza część projektu to <strong>kolejność</strong> i to, czego nie widać: trasy rur deszczówki, kabli do basenu, bramy i lamp, rur nawadniania. Rysuje się je na jednym planie z wymiarami od narożników domu, żeby za 10 lat wiedzieć, gdzie nie kopać.</p>
      <p>Kolejność w sezonie: <strong>1)</strong> wykop i niecka basenu, skrzynki rozsączające, rury deszczówki (koparka, dźwig, wywrotki) → <strong>2)</strong> kable i rury w ziemi → <strong>3)</strong> podjazd, ścieżki, opaska, taras → <strong>4)</strong> ogrodzenie i brama (tymczasowe z etapu 03 stoi do końca ciężkich dostaw) → <strong>5)</strong> humus, nawadnianie, trawnik, rośliny.</p>`,
    decision: {
      question: "Kto projektuje ogród?",
      intro: "Projekt kosztuje 1–3% ogrodu, a oszczędza przeróbki rur, kabli i nawierzchni.",
      chosen: "koncepcja",
      options: [
        { id: "koncepcja", name: "Koncepcja od architekta krajobrazu",
          cost: { min: 3000, max: 6000 }, time: "2–4 tyg.", note: "plan zagospodarowania + dobór roślin",
          pros: ["Jeden plan dla wszystkich ekip", "Rośliny dobrane do gleby, słońca i miejsca", "Widać koszt przed kopaniem"],
          cons: ["Szczegóły instalacji (nawadnianie, oświetlenie) robi wykonawca"],
          why: "Wystarcza dla ogrodu tej wielkości. Projekt nawadniania i oświetlenia firmy wykonawcze robią zwykle w cenie montażu, na podkładzie z koncepcji." },
        { id: "pelny", name: "Pełny projekt wykonawczy",
          cost: { min: 8000, max: 15000 }, time: "1–2 mies.", note: "rysunki, przekroje, zestawienia",
          pros: ["Przedmiary do przetargu między firmami", "Nadzór autorski"],
          cons: ["Za drogi przy płaskim ogrodzie bez skarp i murów oporowych"],
          why: "Ma sens przy trudnym terenie (spadki, mury oporowe, oczko wodne) albo gdy całość robi kilka ekip bez koordynatora." },
        { id: "sam", name: "Samodzielnie, plan na papierze",
          cost: { min: 500, max: 1500 }, time: "kilka wieczorów", note: "konsultacja w szkółce, projekt nawadniania od firmy",
          pros: ["Najtaniej", "Pełna kontrola"],
          cons: ["Łatwo zapomnieć o rurach i kablach przed nawierzchnią", "Rośliny dobrane „z katalogu”, nie do gleby"],
          why: "Dla osób, które lubią ogród i mają czas. Plan tras podziemnych zrób i tak, z wymiarami." }
      ]
    },
    tips: [
      "<b>Jeden plan tras podziemnych.</b> Deszczówka, prąd, nawadnianie, oświetlenie, światłowód: wymiary od narożników domu i zdjęcia otwartych wykopów z miarką. Trafia do teczki domu (etap 16).",
      "<b>Najpierw basen, potem reszta.</b> Wykop basenu to ok. 70–90 m³ ziemi i kilkanaście kursów wywrotki, a niecka poliestrowa przyjeżdża na naczepie i wchodzi dźwigiem. Po ułożonym podjeździe i trawniku nikt tam już nie wjedzie.",
      "<b>Ogrodzenie tymczasowe zostaje.</b> Panele z etapu 03 zdejmij dopiero, gdy wjadą ostatnie ciężkie dostawy. Docelowe ogrodzenie i bramę montuj po podjeździe albo równolegle z nim.",
      "<b>Planuj w czasie.</b> Ogród to 3–5 miesięcy pracy kilku ekip. Rośliny sadzi się wiosną albo jesienią, trawnik sieje w kwietniu–maju albo w sierpniu–wrześniu.",
      "<b>Ogród wychodzi ok. 225–350 tys. zł (śr. ok. 288 tys.) przy limicie 250 tys.</b> Na 2. rok przesuń to, co lekkie: zadaszenie szklane tarasu (ok. 27 tys.; stopy słupów i konsole zrób od razu), pergolę (ok. 8,5 tys.; stopy od razu) i część drzew. Basenu nie przesuwaj: koparka i dźwig zniszczyłyby gotowy ogród."
    ],
    mistakes: [
      "<b>Trawnik przed podjazdem.</b> Gruszka z betonem, wywrotka z kostką i dźwig rozjeżdżają go w jeden dzień.",
      "<b>Kable i rury „później się przewierci”.</b> Przewiert pod gotową kostką kosztuje kilka razy więcej niż rura osłonowa położona w wykopie.",
      "<b>Brak miejsca na kubły i dostawy.</b> Wiata śmietnikowa w końcu ogrodu znaczy noszenie worków przez trawnik dwa razy w tygodniu."
    ],
    formal: [
      ["<b>Biologicznie czynna.</b> Ok. 60–70% działki wg MPZP (etap 02)", "kostka, taras i basen się nie liczą; sprawdza projektant ogrodu"],
      ["<b>Plan zagospodarowania (PZT).</b> Z projektu domu", "basen, zjazd, zbiorniki i oczyszczalnia muszą się z nim zgadzać"]
    ],
    checklist: [
      "Plan ogrodu z basenem, tarasem, podjazdem, ścieżkami i nasadzeniami",
      "Trasy rur i kabli zwymiarowane od narożników domu",
      "Harmonogram: ciężki sprzęt → instalacje w ziemi → nawierzchnie → zieleń",
      "Sprawdzona powierzchnia biologicznie czynna z MPZP"
    ],
    widget: "kalkulator-ogrodu",
    quiz: [{
      q: "Co robi się w ogrodzie najpierw?",
      a: ["Trawnik, żeby zdążył się ukorzenić", "Wykop basenu, deszczówkę i rury w ziemi", "Ogrodzenie docelowe, żeby zamknąć działkę"],
      correct: 1,
      explain: "<b>Od dołu do góry.</b> Najpierw prace z ciężkim sprzętem i wszystko pod ziemią, potem nawierzchnie, na końcu trawnik i rośliny."
    }]
  },

  /* 2 ------------------------------------------------------------------ */
  {
    id: "odwodnienie",
    title: "Deszczówka i odwodnienie",
    lead: "Z dachu ok. 255 m² spływa przy ulewie kilka metrów sześciennych wody na godzinę. Ma trafić w grunt na twojej działce albo do zbiornika, a nie pod fundament, do oczyszczalni czy na sąsiada.",
    time: "3–5 dni", team: "2–3 osoby + minikoparka",
    facts: [["Dach", "ok. 255 m², 6 rur spustowych", "house"], ["Rury", "PVC-KG Ø110, spadek min. 1–2%", "layers"], ["Od fundamentu", "skrzynki min. ok. 3 m", "alert"]],
    body: `
      <p>Każda z ok. <strong>6 rur spustowych</strong> (etap 06) kończy się <strong>osadnikiem</strong> (wpust z koszem na liście), z którego rura PVC-KG Ø110 ze spadkiem min. 1–2% prowadzi wodę do miejsca rozsączania. Przed bramą garażową montuje się <strong>odwodnienie liniowe</strong>, bo podjazd ma spadek w stronę domu.</p>
      <p>Grunt pod naszym domem jest przepuszczalny (opinia geotechniczna, etap 04), więc wodę najprościej <strong>rozsączyć w skrzynkach rozsączających</strong> z dala od domu. Zbiornik na deszczówkę dokłada podlewanie za darmo, ale kosztuje 2–3 razy więcej.</p>
      <p>Woda deszczowa <strong>nie trafia do przydomowej oczyszczalni</strong> (etap 03), bo ją wypłukuje i przelewa, ani do drenażu oczyszczalni. Nie wolno też kierować jej na działkę sąsiada.</p>`,
    cost: { min: 4000, max: 6500, note: "rury KG, 6 osadników, odwodnienie liniowe przed garażem, minikoparka" },
    decision: {
      question: "Dokąd odprowadzić deszczówkę?",
      intro: "Koszty dotyczą samego miejsca rozsączania lub zbiornika; rury i osadniki są w koszcie kroku.",
      chosen: "skrzynki",
      options: [
        { id: "skrzynki", name: "Skrzynki rozsączające ok. 3–4 m³",
          cost: { min: 3500, max: 6000 }, time: "1–2 dni", note: "w geowłókninie, pod trawnikiem",
          pros: ["Mało miejsca, płytko (ok. 1–1,5 m)", "Można po nich chodzić i kosić", "Działa w gruncie przepuszczalnym"],
          cons: ["Wymaga osadników, inaczej zamula się liśćmi", "Woda idzie w grunt, nie do podlewania"],
          why: "Najprostsze przy przepuszczalnym gruncie z opinii geotechnicznej. Ogród podlewamy z wodociągu przez automatykę." },
        { id: "zbiornik", name: "Zbiornik ok. 5 m³ z pompą + przelew do skrzynek",
          cost: { min: 10000, max: 15000 }, time: "2–3 dni", note: "podziemny, filtr, pompa zatapialna",
          pros: ["Woda do podlewania i mycia auta za darmo", "Odciąża wodociąg w suszy"],
          cons: ["Drożej o ok. 7–9 tys. zł", "Duży wykop (koparka przed podjazdem)", "W długiej suszy i tak pusty"],
          why: "Ma sens, gdy woda z wodociągu jest droga albo gmina ogranicza podlewanie latem. Wtedy podłącz go do nawadniania." },
        { id: "studnia", name: "Studnia chłonna z kręgów",
          cost: { min: 3000, max: 5500 }, time: "1 dzień", note: "kręgi Ø1–1,2 m na warstwie żwiru",
          pros: ["Tania i prosta", "Łatwo ją oczyścić od góry"],
          cons: ["Głęboka, potrzebna wysoka warstwa gruntu przepuszczalnego nad wodą gruntową", "Pokrywa w trawniku"],
          why: "Dobra przy głęboko zalegającej wodzie gruntowej i małej ilości miejsca w ogrodzie." }
      ]
    },
    tips: [
      "<b>Skrzynki min. ok. 3 m od domu.</b> I z dala od granicy, oczyszczalni oraz jej drenażu. Dokładne odległości podaje producent skrzynek i projektant (orientacyjnie).",
      "<b>Osadnik przy każdej rurze.</b> Wpust z koszem na liście i piasek, z rewizją do czyszczenia co pół roku. Bez niego skrzynki zamulą się w kilka lat.",
      "<b>Odwodnienie liniowe klasy B125.</b> Przed garażem korytko na obciążenie autem osobowym, wpięte w ten sam system. Przy tarasie korytko szczelinowe przy HS (etap 07).",
      "<b>Spadek terenu od domu.</b> Min. ok. 2% na pierwszych 2–3 m, czyli ok. 5 cm na 2,5 m. Woda z trawnika nie może stać przy cokole.",
      "<b>Zrób próbę z wężem.</b> Przed zasypaniem puść wodę do każdego osadnika i zobacz, czy płynie do skrzynek bez cofki."
    ],
    mistakes: [
      "<b>Deszczówka do oczyszczalni.</b> Ulewa wypłukuje osad czynny, oczyszczalnia przestaje działać i śmierdzi.",
      "<b>Rozsączanie przy fundamencie.</b> Woda wraca pod ławy i do ścian, nawet z izolacją z etapu 04.",
      "<b>Skrzynki bez geowłókniny.</b> Grunt wypłukuje się do środka, skrzynki się zamulają, a nad nimi zapada się trawnik."
    ],
    formal: [
      ["<b>Rozsączanie na własnej działce.</b> Zwykle bez pozwoleń", "orientacyjnie; opłata za zmniejszenie retencji dotyczy dużych zabudowanych działek, sprawdź w gminie"],
      ["<b>Zbiornik na deszczówkę.</b> Mały zbiornik zwykle bez pozwolenia i zgłoszenia", "sprawdź w starostwie limity pojemności i odległości"],
      ["<b>Prawo wodne.</b> Nie wolno zmieniać spływu wody na szkodę sąsiada", "spadki i rozsączanie tylko na własnej działce"]
    ],
    checklist: [
      "Osadnik z koszem przy każdej rurze spustowej",
      "Rury KG Ø110 ze spadkiem min. 1–2%, bez przeciwspadków",
      "Skrzynki w geowłókninie, min. ok. 3 m od domu, z dala od oczyszczalni",
      "Odwodnienie liniowe przed garażem wpięte w system",
      "Próba z wężem przed zasypaniem, zdjęcia i wymiary tras"
    ],
    quiz: [{
      q: "Dlaczego deszczówki nie wpuszcza się do przydomowej oczyszczalni?",
      a: ["Bo za dużo kosztuje wywóz", "Bo ulewa wypłukuje bakterie i przelewa oczyszczalnię", "Bo deszczówka jest za czysta"],
      correct: 1,
      explain: "<b>Oczyszczalnia jest liczona na ścieki z domu.</b> Kilka m³ wody z dachu w godzinę wypłukuje osad czynny i przelewa drenaż rozsączający."
    }]
  },

  /* 3 ------------------------------------------------------------------ */
  {
    id: "basen",
    title: "Basen 4,2 × 8,5 m",
    lead: "Basen to największa pozycja ogrodu i największy ciężki sprzęt na działce: koparka, wywrotki, gruszka z betonem, a przy niecce poliestrowej dźwig. Dlatego idzie pierwszy, zanim powstanie podjazd i trawnik.",
    time: "3–5 tyg. (poliester), 6–10 tyg. (beton)", team: "firma basenowa + elektryk",
    facts: [["Niecka", "4,2 × 8,5 m, głęb. ok. 1,5 m", "layers"], ["Woda", "ok. 50 m³", "calc"], ["Od domu", "min. ok. 3–4 m", "house"]],
    body: `
      <p>Basen stoi od południa, z boku tarasu (F0c), z widokiem z salonu i kuchni. Niecka ma ok. <strong>4,2 × 8,5 m i ok. 1,5 m głębokości</strong>, czyli ok. 50 m³ wody. Wykop jest o ok. 0,5 m szerszy z każdej strony, a pod nieckę wylewa się płytę betonową na zagęszczonej podsypce.</p>
      <p>Obok niecki stoi <strong>technika</strong>: pompa z filtrem piaskowym lub szklanym, skimmery, dysze, odpływ denny, lampy LED i <strong>pompa ciepła basenowa</strong> ok. 9–13 kW. W sezonie maj–wrzesień grzeje głównie w dzień z prądu z PV (etap 10). Zasilanie 230 V idzie rurą z etapu 08, na osobnym obwodzie z RCD 30 mA.</p>
      <p>Wokół niecki <strong>plaża</strong> ok. 1–1,5 m z płyt antypoślizgowych, spójnych z tarasem. Woda z płukania filtra i spuszczania basenu <strong>nie trafia do oczyszczalni</strong> (chlor zabija bakterie), tylko do osobnego miejsca rozsączania.</p>
      <p>Basen, który zjada budżet, to klasyka. Jeśli trzeba przesuwać wydatki, przesuwa się raczej pergolę i zadaszenie tarasu, nie basen: do gotowego ogrodu koparka i dźwig już nie wjadą bez szkód.</p>`,
    cost: { min: 25000, max: 40000, note: "wykop i wywóz, technika filtracji, pompa ciepła basenowa, plaża, elektryka, plandeka" },
    decision: {
      question: "Jaki basen?",
      intro: "Koszt opcji to sama niecka z montażem; wykop, technika, pompa ciepła i plaża są w koszcie kroku.",
      chosen: "poliester",
      options: [
        { id: "poliester", name: "Poliestrowy prefabrykowany",
          cost: { min: 50000, max: 70000 }, time: "3–5 tyg.", note: "niecka z fabryki, montaż dźwigiem",
          pros: ["Gładka, szczelna powłoka, łatwa w czyszczeniu", "Szybki montaż, mało prac mokrych", "Trwałość 20–30 lat"],
          cons: ["Kształt i wymiar z katalogu", "Transport ponadgabarytowy i dźwig: potrzebny dojazd ok. 4 m szerokości", "Obsypka chudym betonem warstwami, równo z napełnianiem"],
          why: "Wymiar 4,2 × 8,5 m jest w katalogach wielu producentów. Najlepszy stosunek ceny, czasu i trwałości, a dźwig wjeżdża drogą budowy (etap 03) przed podjazdem." },
        { id: "beton", name: "Betonowy (żelbet) z folią lub mozaiką",
          cost: { min: 75000, max: 110000 }, time: "6–10 tyg.", note: "zbrojona niecka wylewana na miejscu",
          pros: ["Dowolny kształt, schody, ławki, przelew", "Najtrwalsza konstrukcja"],
          cons: ["Najdrożej i najdłużej", "Folia do wymiany co ok. 10–15 lat", "Potrzebny projekt konstrukcji"],
          why: "Ma sens przy nietypowym kształcie, basenie przelewowym albo większym budżecie. Przy naszym wymiarze dopłata ok. 25–40 tys. zł." },
        { id: "stal", name: "Stalowy systemowy z folią",
          cost: { min: 30000, max: 45000 }, time: "3–4 tyg.", note: "ściana stalowa, folia, obetonowany",
          pros: ["Najtaniej", "Szybki montaż bez dźwigu"],
          cons: ["Folia do wymiany co ok. 8–12 lat", "Mniej sztywny, wymaga starannej obsypki", "Mniej prestiżowy wygląd brzegu"],
          why: "Dobry, gdy liczy się budżet. Oszczędza ok. 20–25 tys. zł względem poliestru, za cenę częstszej wymiany folii." }
      ]
    },
    tips: [
      "<b>Dojazd dla dźwigu i naczepy.</b> Niecka poliestrowa ma ok. 4,2 m szerokości. Droga budowy z etapu 03 (szer. min. 3,5 m, kruszywo 0/63) musi zostać nienaruszona do dnia montażu, a nad nią nie mogą wisieć przewody.",
      "<b>Obsypka i woda równo.</b> Nieckę poliestrową obsypuje się chudym betonem warstwami ok. 30 cm i jednocześnie napełnia wodą do tego samego poziomu, żeby ściany się nie wygięły.",
      "<b>Pompa ciepła basenu z dala od sypialni.</b> Pracuje latem w dzień i w nocy, ok. 45–55 dB. Postaw ją przy technice, min. kilka metrów od okien i granicy, nie obok pompy domu (etap 09).",
      "<b>Przykrycie to oszczędność.</b> Plandeka solarna ogranicza parowanie i utratę ciepła nawet o połowę. Roleta automatyczna kosztuje ok. 20–35 tys. zł i daje bezpieczeństwo dzieci (do rozważenia później).",
      "<b>Napełnianie z podlicznika.</b> 50 m³ wody z wodociągu to kilkaset złotych. Uprzedź wodociągi, jeśli sieć jest słaba, i napełniaj przez noc.",
      "<b>Dzieci i basen.</b> Domek dla dzieci stawiamy po drugiej stronie ogrodu (krok 15). Przy małych dzieciach rozważ ogrodzenie basenu z furtką z samozamykaczem albo sztywne przykrycie."
    ],
    mistakes: [
      "<b>Basen na końcu, po trawniku.</b> Koparka, wywrotki i dźwig niszczą podjazd, ogrodzenie i trawnik. Naprawa kosztuje więcej niż sam wykop.",
      "<b>Wykop pod klinem fundamentu.</b> Za blisko domu wykop podcina grunt pod ławą. Trzymaj min. ok. 3–4 m albo poproś konstruktora o ocenę.",
      "<b>Płukanie filtra do oczyszczalni.</b> Chlorowana woda zabija bakterie w oczyszczalni.",
      "<b>Za słaba pompa ciepła.</b> Przy niecce bez przykrycia mała pompa nie dogrzeje wody w maju i wrześniu. Dobór robi firma basenowa do objętości i sezonu."
    ],
    formal: [
      ["<b>Basen przydomowy do 50 m² powierzchni.</b> Zwykle bez pozwolenia i bez zgłoszenia (nasz ok. 36 m²)", "orientacyjnie, przepisy się zmieniają: sprawdź w starostwie przed wykopem"],
      ["<b>MPZP i PZT.</b> Basen musi zmieścić się w planie (linie zabudowy, biologicznie czynna)", "najlepiej narysowany w projekcie zagospodarowania z etapu 02"],
      ["<b>Elektryka basenu.</b> Strefy wokół niecki, połączenia wyrównawcze, RCD 30 mA", "protokół pomiarów od elektryka z uprawnieniami"]
    ],
    checklist: [
      "Lokalizacja zgodna z PZT, min. ok. 3–4 m od domu",
      "Dojazd dla naczepy i dźwigu wolny w dniu montażu",
      "Płyta pod nieckę wypoziomowana, protokół od firmy",
      "Obsypka warstwami równo z napełnianiem",
      "Technika, pompa ciepła i lampy uruchomione, instrukcja i gwarancja",
      "Pomiary elektryczne z połączeniami wyrównawczymi",
      "Woda z płukania filtra poza oczyszczalnią"
    ],
    quiz: [{
      q: "Dlaczego basen buduje się przed podjazdem i trawnikiem?",
      a: ["Bo wtedy jest tańsza woda", "Bo wymaga koparki, wywrotek, betonu i często dźwigu", "Bo trawnik nie rośnie obok pustego wykopu"],
      correct: 1,
      explain: "<b>Ciężki sprzęt na początku.</b> Do gotowego ogrodu koparka i dźwig nie wjadą bez zniszczenia nawierzchni i trawnika."
    }, {
      q: "Dokąd trafia woda z płukania filtra basenu?",
      a: ["Do przydomowej oczyszczalni", "Do osobnego miejsca rozsączania", "Na trawnik sąsiada"],
      correct: 1,
      explain: "<b>Chlor zabija bakterie w oczyszczalni.</b> Woda z płukania filtra idzie do osobnej studzienki lub skrzynek rozsączających."
    }]
  },

  /* 4 ------------------------------------------------------------------ */
  {
    id: "podjazd",
    title: "Podjazd i ścieżki",
    lead: "Podbudowa podjazdu leży od początku budowy: to droga dojazdowa z etapu 03. Teraz się ją wyrównuje, dokłada warstwę wyrównawczą i układa nawierzchnię.",
    time: "1,5–2,5 tyg.", team: "3–4 brukarzy",
    facts: [["Powierzchnia", "ok. 110 m² (podjazd ok. 80 + ścieżki ok. 30)", "house"], ["Kostka", "8 cm podjazd, 6 cm ścieżki", "layers"], ["Spadek", "1,5–2% od domu", "alert"]],
    body: `
      <p>Podjazd prowadzi od bramy od północy do garażu (brama garażowa ok. 5 m, etap 07): ok. <strong>80 m²</strong> z miejscem na dwa auta przed garażem. Ścieżki do wejścia, furtki, wiaty na kubły i dookoła na taras to ok. <strong>30 m²</strong>.</p>
      <p>Warstwy pod autem: <strong>kruszywo 0/63 ok. 25–30 cm</strong> z drogi budowy (wyrównane i dogęszczone po 1,5 roku jazdy ciężkiego sprzętu), kruszywo 0/31,5 ok. 10 cm, <strong>podsypka</strong> 3–5 cm, kostka 8 cm. Pod ścieżkami wystarczy ok. 20 cm kruszywa i kostka 6 cm.</p>
      <p>Najpierw <strong>obrzeża na ławie z betonu</strong>, potem podsypka ściągana łatą po prowadnicach, kostka układana „od siebie”, na koniec zagęszczarka z matą gumową i fugi piaskiem lub grysem.</p>`,
    cost: { min: 18000, max: 26000, note: "ok. 110 m² kostki betonowej z obrzeżami, korekta podbudowy z etapu 03" },
    decision: {
      question: "Jaka nawierzchnia podjazdu?",
      intro: "Kwoty to dopłata albo oszczędność względem kostki betonowej.",
      chosen: "kostka",
      options: [
        { id: "kostka", name: "Kostka betonowa 8 / 6 cm, antracyt i grafit",
          cost: { min: 0, max: 0 }, time: "1,5–2,5 tyg.", note: "ok. 160–240 zł/m² z robocizną na gotowej podbudowie",
          pros: ["Sprawdzona, każdy brukarz ją zna", "Łatwa naprawa: wyjmujesz i układasz z powrotem", "Kolor do stolarki i dachówki"],
          cons: ["Fugi zarastają, raz na 2–3 lata czyszczenie", "Powierzchnia mniej elegancka niż płyty"],
          why: "Najlepszy stosunek ceny do trwałości pod auto. Ciemna kostka o gładkiej powierzchni pasuje do antracytowych okien i dachu." },
        { id: "plyty", name: "Płyty betonowe wielkoformatowe",
          cost: { min: 10000, max: 18000 }, time: "2–3 tyg.", note: "np. 60 × 60 lub 80 × 40 cm, grubość min. 8 cm pod auto",
          pros: ["Nowoczesny wygląd, mało fug", "Pasuje do płyt tarasu"],
          cons: ["Drożej, a duże płyty pękają przy złej podbudowie", "Pod auto potrzebne grube płyty lub podbudowa związana"],
          why: "Dla efektu „jak z katalogu”. Rozważ na ścieżkach i przed wejściem, a pod autem zostaw kostkę." },
        { id: "zwir", name: "Żwir stabilizowany kratkami, ścieżki z płyt",
          cost: { min: -11000, max: -7000 }, time: "1 tyg.", note: "kratki z tworzywa + grys 8–16 mm",
          pros: ["Taniej o ok. 7–11 tys. zł", "Woda wsiąka w miejscu", "Naturalny wygląd"],
          cons: ["Grys wynoszony na butach do domu", "Odśnieżanie łopatą, nie pługiem", "Kamyki pod kółkami walizek i wózka"],
          why: "Ma sens na miejscu postojowym dla gości albo przy bardzo ciasnym budżecie." }
      ]
    },
    tips: [
      "<b>Najpierw sprawdź podbudowę.</b> Po budowie droga z etapu 03 ma koleiny i zanieczyszczenia gliną. Usuń miękkie miejsca, dosyp kruszywa i zagęść płytą 300–500 kg do odbicia ok. 1 cm.",
      "<b>Wysokość przy garażu i drzwiach.</b> Kostka przy bramie garażowej ok. 1–2 cm niżej niż posadzka garażu, przy drzwiach wejściowych z odwodnieniem albo spadkiem od progu.",
      "<b>Kostka 8 cm pod auto.</b> 6 cm wystarczy na ścieżki. Pod wywrotkę z drewnem czy szambiarkę (oczyszczalnia, wywóz osadu) 8 cm i dobra podbudowa to minimum.",
      "<b>Zamów 5–8% zapasu.</b> Kostka z jednej partii, bo kolor różni się między partiami. Kilka palet zostaw na naprawy.",
      "<b>Rury pod kostką przed układaniem.</b> Pusta rura osłonowa Ø50–110 pod podjazdem w poprzek (do furtki, lamp, nawadniania) kosztuje kilkadziesiąt złotych. Przewiert później: kilkaset."
    ],
    mistakes: [
      "<b>Kostka bez obrzeży na betonie.</b> Krawędzie się rozjeżdżają, kostka „ucieka” na trawnik.",
      "<b>Podsypka 10 cm piasku.</b> Gruba podsypka tworzy koleiny pod kołami. Ma być 3–5 cm.",
      "<b>Spadek do domu.</b> Woda stoi pod bramą garażową i spływa do garażu."
    ],
    checklist: [
      "Podbudowa wyrównana i zagęszczona, bez kolein i gliny",
      "Obrzeża na ławie betonowej, w linii",
      "Spadek 1,5–2% od domu, odwodnienie liniowe przed garażem",
      "Kostka z jednej partii, fugi wypełnione",
      "Rury osłonowe pod podjazdem przed układaniem"
    ],
    quiz: [{
      q: "Jaka grubość podsypki pod kostkę jest prawidłowa?",
      a: ["3–5 cm", "10–15 cm", "Bez podsypki, kostka na kruszywie"],
      correct: 0,
      explain: "<b>Cienka podsypka.</b> 3–5 cm wyrównuje, grubsza warstwa siada pod autem i tworzy koleiny."
    }]
  },

  /* 5 ------------------------------------------------------------------ */
  {
    id: "opaska",
    title: "Opaska żwirowa wokół domu",
    lead: "Pas żwiru szerokości ok. 50 cm przy ścianach chroni cokół przed błotem z deszczu, a fundament przed wodą. Zamyka cokół z tynkiem mozaikowym z etapu 12.",
    time: "1–2 dni", team: "2 osoby",
    facts: [["Długość", "ok. 40 mb (bez tarasu i podjazdu)", "house"], ["Szerokość", "ok. 50 cm", "layers"], ["Żwir", "płukany 16–32 mm", "rebar"]],
    body: `
      <p>Opaska idzie wzdłuż ścian, gdzie nie ma tarasu ani podjazdu: ok. <strong>40 mb</strong>. Warstwy: wykorytowanie ok. 15–20 cm ze <strong>spadkiem od ściany</strong>, geowłóknina, żwir płukany 16–32 mm, obrzeże od strony trawnika.</p>
      <p>Pod opaską kończy się izolacja i XPS z etapu 04, a cokół z tynkiem mozaikowym schodzi kilka cm poniżej terenu (etap 12). Żwir chroni ten pas przed rozbryzgiem wody i kosiarką. Przy pompie ciepła (etap 09) opaska przechodzi w podstawę z rozsączaniem skroplin.</p>`,
    cost: { min: 3000, max: 5000, note: "ok. 40 mb: geowłóknina, obrzeże, żwir płukany, robocizna" },
    tips: [
      "<b>Spadek od ściany pod żwirem.</b> Dno opaski ze spadkiem ok. 2% od domu. Żwir sam w sobie wody nie odprowadzi, robi to dno.",
      "<b>Geowłóknina, nie folia.</b> Włóknina przepuszcza wodę i blokuje chwasty. Folia trzyma wodę przy cokole.",
      "<b>Obrzeże trawnikowe.</b> Stalowe lub betonowe obrzeże oddziela żwir od trawnika i daje równe koszenie.",
      "<b>Żwir szary lub grafitowy.</b> Spójny z cokołem i kostką. Biały żwir szybko brudzi się od rynien i ziemi."
    ],
    mistakes: [
      "<b>Trawnik do samej ściany.</b> Rozbryzg ziemi brudzi cokół, a kosiarka obija tynk mozaikowy.",
      "<b>Kostka przy ścianie ze spadkiem do domu.</b> Woda wsiąka przy cokole zamiast odpływać."
    ],
    checklist: [
      "Spadek dna opaski od ściany",
      "Geowłóknina pod żwirem, obrzeże od trawnika",
      "Cokół nieuszkodzony, XPS przykryty"
    ]
  },

  /* 6 ------------------------------------------------------------------ */
  {
    id: "taras",
    title: "Taras od ogrodu",
    lead: "Taras ok. 32 m² (ok. 8 × 4 m) leży przed przesuwnym HS z salonu. Jego powierzchnia jest na poziomie gotowej posadzki ±0,00, bez progu, więc przy drzwiach musi mieć odwodnienie.",
    time: "1–2 tyg.", team: "2–3 osoby",
    facts: [["Powierzchnia", "ok. 32 m² (8 × 4 m)", "house"], ["Poziom", "±0,00 przy HS", "layers"], ["Spadek płyty", "1,5–2% od domu", "alert"]],
    body: `
      <p>Dom stoi ok. 35–40 cm nad terenem (posadzka ±0,00, etap 04), więc taras to <strong>podniesiona płyta</strong>: zagęszczone kruszywo, płyta betonowa ok. 10–12 cm ze <strong>spadkiem 1,5–2% od domu</strong>, izolacja przy ścianie i XPS przy cokole. Krawędź od ogrodu ma 1–2 stopnie albo obsadzenie.</p>
      <p>Przy HS (etap 07) biegnie <strong>odwodnienie liniowe szczelinowe</strong>, wpięte w deszczówkę z kroku 2. Na płycie leży okładzina, którą wybierasz niżej. Zadaszenie szklane ok. 6 × 3,5 m nad częścią przy salonie to osobny krok.</p>`,
    cost: { min: 6000, max: 9000, note: "podbudowa, płyta betonowa ze spadkiem, izolacja przy ścianie, odwodnienie liniowe przy HS, stopnie" },
    decision: {
      question: "Jaka nawierzchnia tarasu?",
      intro: "Kwoty to okładzina z montażem na płycie z kosztu kroku, ok. 32 m².",
      chosen: "gres",
      options: [
        { id: "gres", name: "Płyty gresowe 2 cm na wspornikach",
          cost: { min: 9000, max: 13000 }, time: "3–5 dni", note: "60 × 60 cm, R11, wsporniki regulowane",
          pros: ["Poziom „na milimetr” z progiem HS", "Woda spływa szczelinami do płyty i odwodnienia", "Nie blaknie, nie nagrzewa się jak kompozyt", "Ta sama płyta na plaży basenu"],
          cons: ["Drożej niż płytki na kleju", "Pod płytami zbiera się trochę liści, raz w roku do przeczyszczenia"],
          why: "Najtrwalsze i najrówniejsze rozwiązanie przy progu HS na ±0,00. Płyty zdejmujesz bez kucia, jeśli trzeba sięgnąć do odwodnienia." },
        { id: "kompozyt", name: "Deska kompozytowa na legarach",
          cost: { min: 8000, max: 12000 }, time: "3–4 dni", note: "WPC, deska pełna, legary aluminiowe",
          pros: ["Ciepła w dotyku, „drewniany” wygląd", "Bez olejowania"],
          cons: ["Od południa w słońcu nagrzewa się nawet do 50–60°C", "Rozszerza się, potrzebne szczeliny i dylatacje", "Tańsze deski płowieją"],
          why: "Ładna przy tarasie w cieniu. Przy naszym tarasie od południa i przy basenie (bose stopy) wybieramy gres." },
        { id: "drewno", name: "Deska drewniana (modrzew, termodrewno)",
          cost: { min: 7000, max: 13000 }, time: "3–4 dni", note: "modrzew syberyjski jak na elewacji (etap 12)",
          pros: ["Najbardziej naturalna", "Spójna z deską na elewacji"],
          cons: ["Olejowanie co 1–2 lata", "Szarzeje, przy wodzie z basenu szybciej", "Drzazgi"],
          why: "Dla osób, które lubią drewno i dbają o nie. Wymaga przewiewu pod deskami." }
      ]
    },
    tips: [
      "<b>Wysokość z progiem HS.</b> Wierzch płyt równy z progiem albo 1–2 cm niżej przy odwodnieniu szczelinowym. Wymiar ustala się od gotowej posadzki ±0,00 (etap 11), nie od terenu.",
      "<b>Wsporniki na płycie ze spadkiem.</b> Regulowane wsporniki kompensują spadek płyty, a płyty gresu leżą poziomo. Szczeliny 3–4 mm odprowadzają wodę.",
      "<b>Gres antypoślizgowy R11.</b> Przy basenie i na mokrym tarasie R11 to minimum. Ta sama seria płyt na plaży basenu i ścieżce.",
      "<b>Kotwy zadaszenia przed okładziną.</b> Stopy słupów zadaszenia (krok 7) i przepusty na kable do lamp osadź w płycie przed ułożeniem gresu."
    ],
    mistakes: [
      "<b>Taras wyżej niż próg.</b> Przy ulewie woda staje przy HS i wchodzi pod uszczelki.",
      "<b>Płytki gresowe na kleju na zewnątrz bez systemu.</b> Po 2–3 zimach odpadają, bo woda zamarza w kleju.",
      "<b>Płyta bez spadku.</b> Woda stoi pod płytami, zielenieje i zamarza."
    ],
    checklist: [
      "Płyta betonowa ze spadkiem od domu, zdjęcia przed okładziną",
      "Odwodnienie liniowe przy HS wpięte w deszczówkę",
      "Poziom okładziny zgodny z progiem HS",
      "Stopy słupów zadaszenia i przepusty na kable osadzone",
      "Płyty R11 z jednej partii, szczeliny równe"
    ],
    quiz: [{
      q: "Dlaczego na tarasie od południa przy basenie wybieramy gres zamiast kompozytu?",
      a: ["Bo gres jest tańszy od każdego kompozytu", "Bo kompozyt mocno nagrzewa się w słońcu, a gres na wspornikach daje poziom progu", "Bo kompozytu nie można kłaść na zewnątrz"],
      correct: 1,
      explain: "<b>Słońce i bose stopy.</b> Kompozyt potrafi mieć 50–60°C w lipcu. Gres na wspornikach jest chłodniejszy, trwały i łatwo dopasować go do progu HS."
    }]
  },

  /* 7 ------------------------------------------------------------------ */
  {
    id: "zadaszenie-tarasu",
    title: "Zadaszenie szklane tarasu",
    lead: "Nad częścią tarasu przy salonie stoi zadaszenie ok. 6 × 3,5 m: aluminium w kolorze antracytu i szkło bezpieczne. Chroni przed deszczem, a nie zabiera światła wnętrzu.",
    time: "1–3 dni montażu (produkcja 4–8 tyg.)", team: "2–3 monterów firmy",
    facts: [["Powierzchnia", "ok. 21 m² (6 × 3,5 m)", "house"], ["Szkło", "VSG (laminowane), np. 10–12 mm", "shield"], ["Spadek", "min. ok. 5–8°", "alert"]],
    body: `
      <p>Konstrukcja z <strong>aluminium</strong> (antracyt, jak stolarka) opiera się na 2–3 słupach od ogrodu i na belce przyściennej mocowanej do muru. Dach ze <strong>szkła laminowanego VSG</strong>: po stłuczeniu zostaje w całości na folii, nikomu nie spada na głowę.</p>
      <p>Belka przyścienna przechodzi przez 20 cm styropianu (etap 12) do muru. Mocuje się ją na <strong>systemowych konsolach lub kotwach chemicznych w murze</strong>, z izolacją termiczną, żeby nie robić mostka i nie zgnieść ocieplenia. Woda z szyb spływa do rynny w belce frontowej i rurą w słupie do deszczówki.</p>
      <p>Szkło od południa grzeje jak szklarnia. Pod szkłem lub nad nim można dołożyć <strong>markizę</strong> (ok. 5–10 tys. zł), także później.</p>`,
    decision: {
      question: "Czym zadaszyć taras?",
      intro: "F0c i zdjęcie inspiracji pokazują szkło. Koszty z montażem, ok. 21 m².",
      chosen: "szklo",
      options: [
        { id: "szklo", name: "Aluminium + szkło VSG",
          cost: { min: 22000, max: 32000 }, time: "produkcja 4–8 tyg.", note: "ok. 1000–1500 zł/m²",
          pros: ["Salon zostaje jasny", "Trwałe, bez konserwacji poza myciem", "Pasuje do dużych przeszkleń domu"],
          cons: ["Latem gorąco bez markizy", "Szkło trzeba myć", "Drogo"],
          why: "Jak na zdjęciu inspiracji i w F0c. Salon z HS od ogrodu nie traci światła, a taras jest używalny od kwietnia do października." },
        { id: "lamele", name: "Pergola bioklimatyczna z ruchomymi lamelami",
          cost: { min: 38000, max: 55000 }, time: "produkcja 6–10 tyg.", note: "aluminium, napęd, czujnik deszczu",
          pros: ["Regulacja cienia i przewiewu", "Najwyższy komfort latem"],
          cons: ["Drożej o ok. 16–23 tys. zł", "Zamknięta zaciemnia salon", "Napęd i uszczelki do serwisu"],
          why: "Ma sens, gdy taras ma być „letnim salonem” w pełnym słońcu i budżet na to pozwala." },
        { id: "poliweglan", name: "Aluminium + poliwęglan komorowy",
          cost: { min: 12000, max: 18000 }, time: "produkcja 2–4 tyg.", note: "płyty 16 mm, opal lub przezroczyste",
          pros: ["Taniej o ok. 10–14 tys. zł", "Lekkie, tańsza konstrukcja"],
          cons: ["Matowieje i żółknie po kilku–kilkunastu latach", "Głośny w deszczu", "Wygląda „ogrodowo”, nie jak szkło"],
          why: "Rozsądne przy cięciu kosztów, gdy wygląd jest mniej ważny niż ochrona przed deszczem." }
      ]
    },
    tips: [
      "<b>Obciążenie śniegiem od producenta.</b> Konstrukcja i szkło liczone dla strefy śniegowej i wiatrowej twojej gminy. Poproś o deklarację lub obliczenia.",
      "<b>Mocowanie przez ocieplenie.</b> Jeśli w etapie 12 nie wstawiono bloków montażowych, firma użyje konsol systemowych. Każde przejście przez tynk uszczelnione taśmą i masą.",
      "<b>Spadek i rynna.</b> Min. ok. 5–8°, rynna w belce frontowej, rura spustowa w słupie podłączona do osadnika (krok 2).",
      "<b>Przewody przed montażem.</b> Zasilanie do lamp LED w belkach i ewentualnej markizy przewidź w płycie tarasu i w ścianie (rura z etapu 08)."
    ],
    mistakes: [
      "<b>Kotwy w samym styropianie.</b> Zadaszenie z kilkuset kilogramami śniegu wyrwie belkę razem z ociepleniem.",
      "<b>Szkło hartowane zamiast laminowanego na dachu.</b> Po pęknięciu rozsypuje się na drobne kawałki nad głowami.",
      "<b>Zadaszenie bez rynny.</b> Woda leje się kurtyną na taras i pod HS."
    ],
    formal: [
      ["<b>Zadaszenie tarasu.</b> Najlepiej narysowane w projekcie domu (etap 02)", "gdy nie ma go w projekcie, sprawdź w starostwie, czy wystarczy zgłoszenie"]
    ],
    checklist: [
      "Obliczenia lub deklaracja na śnieg i wiatr",
      "Belka przyścienna na konsolach w murze, przejścia uszczelnione",
      "Szkło VSG z oznaczeniem na szybie",
      "Rynna i rura spustowa podłączone do deszczówki"
    ]
  },

  /* 8 ------------------------------------------------------------------ */
  {
    id: "ogrodzenie",
    title: "Ogrodzenie działki",
    lead: "Działka ok. 30 × 40 m to ok. 140 m granicy. Od ulicy ok. 25 mb ogrodzenia „na pokaz” (plus brama i furtka), a z boków i z tyłu ok. 110 mb prostego panelu.",
    time: "1–2 tyg.", team: "2–3 monterów",
    facts: [["Front", "ok. 25 mb + brama 4,5 m i furtka", "house"], ["Boki i tył", "ok. 110 mb, wys. ok. 1,5 m", "layers"], ["Do 2,2 m", "zwykle bez zgłoszenia", "file"]],
    body: `
      <p>Boki i tył to <strong>panele 3D ok. 1,5 m</strong> ocynkowane i malowane proszkowo (antracyt) na słupkach co ok. 2,5 m, z <strong>podmurówką prefabrykowaną</strong> ok. 20 cm, żeby trawnik nie wchodził pod siatkę, a pies i lis nie przechodzili pod spodem. Wzdłuż od środka sadzi się żywopłot (krok 14).</p>
      <p>Front od ulicy widać najbardziej, dlatego dobiera się go do domu: <strong>przęsła stalowe ze sztachet poziomych w kolorze antracytu</strong> na słupkach z bloczków albo na podmurówce. Słupek przy furtce mieści skrzynkę na listy, wideodomofon (etap 08) i numer domu (krok 9).</p>
      <p>Ogrodzenie stoi w granicy działki, więc <strong>granice muszą być pewne</strong>: punkty graniczne z mapy (etap 01), a w razie wątpliwości wznowienie przez geodetę.</p>`,
    cost: { min: 14000, max: 20000, note: "boki i tył: ok. 110 mb panelu 3D z podmurówką prefabrykowaną, z montażem" },
    decision: {
      question: "Jakie ogrodzenie od frontu?",
      intro: "Koszt dotyczy ok. 25 mb od ulicy, bez bramy i furtki (krok 9).",
      chosen: "przesla",
      options: [
        { id: "przesla", name: "Przęsła stalowe (sztachety poziome) na słupkach z bloczków",
          cost: { min: 13000, max: 19000 }, time: "1–1,5 tyg.", note: "ok. 500–750 zł/mb",
          pros: ["Wygląd spójny z antracytową stolarką", "Brama i furtka w tym samym wzorze", "Częściowa osłona przed wzrokiem z ulicy"],
          cons: ["Drożej niż panel", "Fundament pod słupki z bloczków"],
          why: "Front to „wizytówka” domu, a 25 mb to mała część ogrodzenia. Oszczędzamy na bokach i z tyłu, gdzie wystarczy panel." },
        { id: "panel", name: "Panel 3D, jak na bokach",
          cost: { min: 4000, max: 6000 }, time: "2–3 dni", note: "ok. 150–230 zł/mb",
          pros: ["Najtaniej, szybko", "Przejrzyste"],
          cons: ["Wygląda „technicznie”", "Brak osłony od ulicy, dopóki nie urośnie żywopłot"],
          why: "Rozsądne przy cięciu kosztów; front można później zmienić, zostawiając bramę." },
        { id: "mur", name: "Mur z bloczków łupanych z przęsłami lub kamieniem",
          cost: { min: 25000, max: 38000 }, time: "2–3 tyg.", note: "fundament, bloczki, daszki",
          pros: ["Najbardziej solidny i prestiżowy", "Dobre miejsce na skrzynki, domofon i oświetlenie"],
          cons: ["Drożej o ok. 12–19 tys. zł", "Fundament i murowanie: prace mokre"],
          why: "Ma sens, gdy front jest blisko ruchliwej ulicy albo plan miejscowy wymaga określonej formy ogrodzenia." }
      ]
    },
    tips: [
      "<b>Wspólny koszt z sąsiadem.</b> Ogrodzenie w granicy z sąsiadem można postawić na pół. Umowa na piśmie: materiał, wysokość, kto utrzymuje.",
      "<b>Podmurówka prefabrykowana.</b> Płyty ok. 20 cm w uchwytach między słupkami. Taniej i szybciej niż ławy betonowe, a trawnik kosisz do krawędzi.",
      "<b>Słupki na betonie.</b> Słupki panelu w otworach ok. 60–80 cm, zalane betonem, w linii z naciągniętej linki. Słupy bramy na osobnym fundamencie (krok 9).",
      "<b>Przepust dla jeży.</b> Kilka otworów ok. 13 × 13 cm w podmurówce przy granicy z łąką lub sąsiadem pozwala przejść małym zwierzętom.",
      "<b>Kable przed ogrodzeniem frontu.</b> Do słupka furtki i bramy: zasilanie napędu, wideodomofon, ewentualnie lampa (rury z etapu 08)."
    ],
    mistakes: [
      "<b>Ogrodzenie „na oko” od płotu sąsiada.</b> Granica bywa przesunięta o kilkadziesiąt cm, a przestawianie ogrodzenia kosztuje drugi raz.",
      "<b>Słupki bez betonu.</b> Panel przechyla się po pierwszej zimie (przemarzanie) i pod wiatrem.",
      "<b>Ogrodzenie wyższe niż pozwala plan.</b> MPZP często podaje maksymalną wysokość i zakaz pełnych ogrodzeń od ulicy."
    ],
    formal: [
      ["<b>Ogrodzenie do 2,2 m.</b> Zwykle bez pozwolenia i bez zgłoszenia", "wyższe wymaga zgłoszenia; orientacyjnie, sprawdź w starostwie"],
      ["<b>MPZP.</b> Wysokość, ażurowość i materiał od ulicy", "wypis z planu (etap 01)"],
      ["<b>Granice działki.</b> Punkty graniczne", "w razie wątpliwości wznowienie znaków przez geodetę, ok. 1,5–3 tys. zł"]
    ],
    checklist: [
      "Granice potwierdzone punktami granicznymi",
      "Wysokość i forma zgodne z MPZP",
      "Słupki w linii i w pionie, zabetonowane",
      "Podmurówka ciągła, bez szczelin pod panelami",
      "Rury do furtki i bramy przed ogrodzeniem frontu"
    ],
    quiz: [{
      q: "Do jakiej wysokości ogrodzenie zwykle nie wymaga zgłoszenia?",
      a: ["1,5 m", "2,2 m", "3,0 m"],
      correct: 1,
      explain: "<b>Orientacyjnie 2,2 m.</b> Wyższe ogrodzenie wymaga zgłoszenia. Plan miejscowy może dodatkowo ograniczać wysokość i formę, więc sprawdź wypis."
    }]
  },

  /* 9 ------------------------------------------------------------------ */
  {
    id: "brama-furtka",
    title: "Brama wjazdowa, furtka i skrzynka",
    lead: "Brama przesuwna z napędem otwiera się z auta lub telefonu, a furtka obok ma elektrozaczep sterowany z wideodomofonu. Obie otwierają się do środka albo wzdłuż ogrodzenia, nigdy na drogę.",
    time: "2–4 dni (produkcja 3–6 tyg.)", team: "2 monterów + elektryk",
    facts: [["Brama", "przesuwna, światło ok. 4,5 m", "house"], ["Miejsce na przesuw", "ok. 6,5–7 m wzdłuż frontu", "layers"], ["Napęd", "230 V, fotokomórki", "bulb"]],
    body: `
      <p><strong>Brama przesuwna samonośna</strong> nie ma szyny w podjeździe: wisi na wózkach osadzonych na fundamencie obok wjazdu. Potrzebuje <strong>ok. 1,5 szerokości wjazdu</strong> miejsca wzdłuż ogrodzenia (przy 4,5 m ok. 6,5–7 m), co na froncie ok. 30 m jest bez problemu.</p>
      <p>Napęd 230 V zasila rura z etapu 08. Bramę otwierają piloty, telefon (smart home, etap 10) i przycisk w domu. Obowiązkowe są <strong>fotokomórki</strong> i listwa bezpieczeństwa, a w razie braku prądu odblokowanie ręczne kluczem.</p>
      <p>W słupku przy furtce: <strong>wideodomofon</strong> (etap 08), <strong>skrzynka na listy</strong> z wrzutem od ulicy i wyjmowaniem od działki, oświetlenie i <strong>tabliczka z numerem domu</strong> widoczna z ulicy.</p>`,
    cost: { min: 3500, max: 6000, note: "furtka z elektrozaczepem, skrzynka na listy, numer, montaż, podłączenie" },
    decision: {
      question: "Jaka brama wjazdowa?",
      intro: "Koszt opcji to brama z fundamentem; furtka i skrzynka są w koszcie kroku.",
      chosen: "przesuwna",
      options: [
        { id: "przesuwna", name: "Przesuwna samonośna z napędem",
          cost: { min: 8000, max: 13000 }, time: "produkcja 3–6 tyg.", note: "stal ocynk + proszek, wzór jak przęsła",
          pros: ["Nie zajmuje podjazdu przy otwieraniu", "Śnieg i spadek podjazdu nie przeszkadzają", "Bez szyny w nawierzchni"],
          cons: ["Fundament przeciwwagi i miejsce wzdłuż frontu", "Drożej niż skrzydłowa"],
          why: "Podjazd jest krótki i ze spadkiem, a zimą skrzydła blokuje śnieg. Przesuwna działa zawsze." },
        { id: "skrzydlowa", name: "Dwuskrzydłowa z napędem",
          cost: { min: 6000, max: 10000 }, time: "produkcja 3–5 tyg.", note: "otwierana do środka działki",
          pros: ["Taniej o ok. 2–3 tys. zł", "Nie potrzebuje miejsca wzdłuż frontu"],
          cons: ["Skrzydła zajmują podjazd przy otwieraniu", "Śnieg i spadek terenu blokują skrzydła", "Wiatr szarpie skrzydłami"],
          why: "Ma sens przy wąskim froncie i płaskim podjeździe." },
        { id: "bez-napedu", name: "Przesuwna bez napędu (napęd później)",
          cost: { min: 5500, max: 9000 }, time: "produkcja 3–6 tyg.", note: "przygotowana pod napęd: listwa zębata, rura z kablem",
          pros: ["Taniej o ok. 2,5–4 tys. zł na start", "Napęd można dołożyć w godzinę"],
          cons: ["Wysiadanie z auta przy każdym wjeździe, także w deszczu"],
          why: "Dobra opcja oszczędności, jeśli rura z kablem i listwa są gotowe od razu." }
      ]
    },
    tips: [
      "<b>Fundament bramy przed kostką.</b> Pod wózki bramy samonośnej ok. 0,4 × 2–3 m, głęb. ok. 0,8–1 m, z kotwami według producenta. Wylewa się go razem z podjazdem.",
      "<b>Kolor i wzór jak przęsła.</b> Brama, furtka i przęsła od jednego producenta, w tym samym kolorze i rozstawie sztachet.",
      "<b>Skrzynka z wrzutem od ulicy.</b> Listonosz nie wchodzi na działkę, a ty wyjmujesz pocztę od środka. Format min. A4 i miejsce na małe paczki.",
      "<b>Dwie rury do słupka furtki.</b> Jedna na 230 V (napęd, lampa), druga na niskie napięcie (wideodomofon, elektrozaczep). Zapas na przyszłość."
    ],
    mistakes: [
      "<b>Brama otwierana na drogę.</b> Niezgodne z warunkami technicznymi i niebezpieczne dla przechodniów.",
      "<b>Napęd bez fotokomórek.</b> Brama może przygnieść dziecko, psa albo auto.",
      "<b>Brak tabliczki z numerem.</b> Kurier i karetka nie znajdą domu; numer porządkowy trzeba umieścić na budynku lub ogrodzeniu."
    ],
    formal: [
      ["<b>Brama i furtka.</b> Nie mogą otwierać się na zewnątrz działki", "warunki techniczne; przesuwna i otwierana do środka spełniają"],
      ["<b>Numer porządkowy.</b> Tabliczka widoczna z ulicy", "numer nadaje gmina (wniosek przy zakończeniu budowy, etap 16)"],
      ["<b>Zjazd z drogi publicznej.</b> Zgoda zarządcy drogi", "zwykle uzgodniona przy projekcie (etap 02); jeśli nie, przed kostką przy drodze"]
    ],
    checklist: [
      "Brama przesuwa się równo, bez zacinania, na całej długości",
      "Fotokomórki zatrzymują bramę",
      "Odblokowanie ręczne działa, klucz w domu",
      "Furtka otwierana z wideodomofonu",
      "Skrzynka z wrzutem od ulicy, numer domu widoczny"
    ],
    quiz: [{
      q: "Ile miejsca wzdłuż frontu potrzebuje brama przesuwna samonośna 4,5 m?",
      a: ["Ok. 4,5 m", "Ok. 6,5–7 m", "Ok. 10 m"],
      correct: 1,
      explain: "<b>Ok. 1,5 szerokości wjazdu.</b> Skrzydło ma przeciwwagę, która przesuwa się za słupek wzdłuż ogrodzenia."
    }]
  },

  /* 10 ----------------------------------------------------------------- */
  {
    id: "humus-teren",
    title: "Humus wraca: niwelacja terenu",
    lead: "Humus zdjęty w etapie 03 przeleżał całą budowę w hałdzie. Teraz wraca na miejsce: ok. 20 cm pod trawnik i 30–40 cm pod rabaty i żywopłot.",
    time: "3–5 dni", team: "operator ładowarki + 2 osoby",
    facts: [["Humus w hałdzie", "ok. 190 m³ (etap 03)", "layers"], ["Pod trawnik", "ok. 20 cm", "rebar"], ["Spadek od domu", "min. ok. 2%", "alert"]],
    body: `
      <p>Najpierw <strong>sprzątanie</strong>: gruz, resztki styropianu, folia, worki po kleju i zaprawie. Potem <strong>podglebie</strong> z wykopów wyrównuje się do rzędnych z projektu i spulchnia, bo po budowie jest ubite jak beton.</p>
      <p>Na wierzch idzie humus z hałdy: pod trawnik ok. <strong>20 cm</strong>, pod żywopłot i rabaty <strong>30–40 cm</strong>. Ok. 600 m² trawnika i ok. 150 m² rabat to ok. 170–180 m³ ziemi luzem, czyli prawie cała hałda z etapu 03.</p>
      <p>Teren musi <strong>spadać od domu</strong> (min. ok. 2% na pierwszych 2–3 m) i od tarasu, w stronę trawnika i skrzynek rozsączających, nigdy na działkę sąsiada.</p>`,
    cost: { min: 3000, max: 7000, note: "ładowarka lub minikoparka 2–4 dni, glebogryzarka, sprzątanie gruzu" },
    tips: [
      "<b>Spulchnij podglebie.</b> Po budowie grunt jest ubity przez sprzęt. Glebogryzarka albo zrywak koparki na 20–30 cm, inaczej woda stoi, a korzenie trawy nie schodzą w dół.",
      "<b>Humus nie na mokro.</b> Rozkładaj go, gdy jest suchy i kruchy. Mokry ugniata się w bryły i traci strukturę na lata.",
      "<b>Nawadnianie i kable przed ostatnią warstwą.</b> Rowki na rury i przewody wykopuje się w rozłożonym humusie, a potem całość wyrównuje i wałuje.",
      "<b>Za mało humusu?</b> Dokup ziemię ogrodową przesianą (ok. 60–100 zł/m³ z transportem), ale obejrzyj ją przed zakupem: bez gruzu, korzeni perzu i gliny."
    ],
    mistakes: [
      "<b>Humus na gruzie.</b> Trawnik żółknie nad zakopanym gruzem i resztkami zaprawy, które podnoszą odczyn gleby.",
      "<b>Za cienka warstwa.</b> 5–10 cm humusu na glinie daje trawnik, który latem wysycha mimo podlewania.",
      "<b>Teren ze spadkiem do domu.</b> Woda z trawnika płynie pod cokół i na taras."
    ],
    checklist: [
      "Teren oczyszczony z gruzu, folii i resztek materiałów",
      "Podglebie spulchnione",
      "Humus ok. 20 cm pod trawnik, 30–40 cm pod rabaty",
      "Spadki od domu i tarasu, bez zastoisk po deszczu"
    ]
  },

  /* 11 ----------------------------------------------------------------- */
  {
    id: "nawadnianie",
    title: "Nawadnianie automatyczne",
    lead: "Nawadnianie podzielone na sekcje: zraszacze na trawnik, linia kroplująca pod żywopłot i na rabaty. Sterownik włącza je nad ranem i pomija dni z deszczem.",
    time: "3–5 dni", team: "2–3 osoby z firmy",
    facts: [["Trawnik", "ok. 600 m², 4–5 sekcji", "house"], ["Linia kroplująca", "ok. 100 mb (żywopłot, rabaty)", "layers"], ["Rury", "PE 25–32 mm, ok. 20–30 cm w gruncie", "rebar"]],
    body: `
      <p>Projekt zaczyna się od pomiaru: <strong>ile litrów na minutę daje kran przy 3 bar</strong> (przyłącze PE 32–40 z etapu 03, reduktor z etapu 09). Od tego zależy, ile zraszaczy pracuje naraz. Przy ok. 25–35 l/min to 4–6 zraszaczy rotacyjnych na sekcję.</p>
      <p>Sekcje: <strong>3–4 sekcje zraszaczy rotacyjnych</strong> na duże pola trawnika, 1 sekcja zraszaczy statycznych na wąskie pasy (przy podjeździe, przy opasce), <strong>1–2 sekcje linii kroplującej</strong> pod żywopłotem i na rabatach. Elektrozawory siedzą w skrzynce zaworowej w trawniku, a sterownik w garażu, z czujnikiem deszczu i sterowaniem z telefonu.</p>
      <p>Zraszacze rotacyjne mają zasięg 5–12 m i ustawia się je tak, żeby <strong>woda z jednego dolatywała do sąsiedniego</strong> (pokrycie „głowa do głowy”). Na zimę układ <strong>przedmuchuje się sprężonym powietrzem</strong>.</p>`,
    decision: {
      question: "Jak podlewać ogród?",
      intro: "Koszty z montażem, dla ok. 600 m² trawnika i ok. 100 mb linii kroplującej.",
      chosen: "auto",
      options: [
        { id: "auto", name: "Automatyczne z wodociągu",
          cost: { min: 8000, max: 13000 }, time: "3–5 dni", note: "sterownik Wi-Fi, czujnik deszczu, 5–6 sekcji",
          pros: ["Podlewanie nad ranem, gdy woda nie paruje", "Trawnik z siewu wschodzi równo", "Urlop bez proszenia sąsiada"],
          cons: ["Koszt wody latem", "Serwis i przedmuchanie na zimę ok. 200–400 zł rocznie"],
          why: "Trawnik ok. 600 m², żywopłot i drzewa w pierwszych 2–3 latach bez podlewania nie dadzą rady. Automatyka zużywa mniej wody niż wąż." },
        { id: "studnia", name: "Automatyczne z własnej studni",
          cost: { min: 18000, max: 30000 }, time: "1–2 tyg.", note: "studnia głębinowa + pompa + nawadnianie",
          pros: ["Woda praktycznie za darmo", "Niezależność od ograniczeń w suszy"],
          cons: ["Drożej o ok. 10–17 tys. zł", "Woda bywa żelazista (rdzawe plamy na kostce)", "Formalności zależne od głębokości"],
          why: "Ma sens przy drogiej wodzie i dużym zużyciu. Najpierw zapytaj sąsiadów o głębokość i jakość wody." },
        { id: "reczne", name: "Ręczne: krany i szybkozłączki",
          cost: { min: 1500, max: 3000 }, time: "1 dzień", note: "2–3 punkty poboru wody, wąż, zraszacz",
          pros: ["Najtaniej", "Brak elektroniki"],
          cons: ["Codzienne przestawianie zraszacza latem", "Trawnik z siewu wschodzi nierówno", "Wakacje = suchy ogród"],
          why: "Dla małego ogrodu albo jako etap przejściowy. Rury w ziemi pod przyszłą automatykę i tak warto położyć." }
      ]
    },
    tips: [
      "<b>Podlewaj rano, rzadko i obficie.</b> Ok. 20–25 mm wody tygodniowo w 2–3 dawkach, między 4 a 7 rano. Korzenie schodzą głębiej, trawa lepiej znosi suszę.",
      "<b>Zawór spustowy i przedmuchanie.</b> W październiku sprężarką (lub serwis) przedmuchaj każdą sekcję. Woda w rurach rozsadza zraszacze i złączki.",
      "<b>Podlicznik ogrodowy przy oczyszczalni daje mało.</b> Przy przydomowej oczyszczalni (etap 03) nie płacisz za ścieki, więc podlicznik nie obniża rachunku. Sprawdź zasady w swoich wodociągach (orientacyjnie).",
      "<b>Linia kroplująca pod korą.</b> Pod żywopłotem i na rabatach linia z kroplownikami co 30–33 cm, przykryta korą. Woda idzie prosto do korzeni, liście zostają suche."
    ],
    mistakes: [
      "<b>Za dużo zraszaczy na sekcji.</b> Ciśnienie spada, zraszacze się nie wynurzają, a trawnik ma suche plamy.",
      "<b>Zraszacze polewające dom i taras.</b> Mokry cokół i elewacja, zacieki na szkle. Ustaw sektory i promienie zraszaczy.",
      "<b>Brak przedmuchania na zimę.</b> Pęknięte rury i zraszacze, naprawa wiosną."
    ],
    formal: [
      ["<b>Studnia na własne potrzeby.</b> Płytka studnia zwykle bez pozwolenia; głębsza wymaga zgłoszenia lub projektu", "orientacyjnie; sprawdź w starostwie i Wodach Polskich"]
    ],
    checklist: [
      "Zmierzona wydajność wody (l/min przy 3 bar)",
      "Każda sekcja: zraszacze wynurzają się, zasięg głowa do głowy",
      "Sektory nie polewają domu, tarasu ani basenu",
      "Sterownik z czujnikiem deszczu, harmonogram nad ranem",
      "Plan tras rur ze zdjęciami do teczki domu"
    ],
    quiz: [{
      q: "Od czego zależy, ile zraszaczy może pracować w jednej sekcji?",
      a: ["Od wielkości trawnika", "Od wydajności wody (l/min) i ciśnienia na przyłączu", "Od mocy sterownika"],
      correct: 1,
      explain: "<b>Woda jest ograniczeniem.</b> Suma wydatków zraszaczy w sekcji nie może przekroczyć wydajności przyłącza przy roboczym ciśnieniu."
    }]
  },

  /* 12 ----------------------------------------------------------------- */
  {
    id: "oswietlenie-ogrodu",
    title: "Oświetlenie ogrodu",
    lead: "Kable do ogrodu idą rurą z etapu 08. Na zewnątrz stosujemy system niskonapięciowy 12–24 V: zasilacz w garażu, cienki kabel płytko w ziemi, lampy wpinane bez elektryka.",
    time: "2–3 dni", team: "elektryk + 1 osoba",
    facts: [["Punkty", "ok. 15–20 lamp", "bulb"], ["Napięcie", "12–24 V z zasilacza", "bulb"], ["Barwa", "ok. 2700–3000 K", "sun"]],
    body: `
      <p>Oświetlenie ma trzy zadania: <strong>bezpieczeństwo</strong> (podjazd, ścieżki, schodki tarasu, furtka), <strong>orientację</strong> (słupki przy ścieżkach) i <strong>nastrój</strong> (drzewa, pergola, basen). Kinkiety na elewacji są z etapu 12, a lampy w basenie z kroku 3.</p>
      <p>Zasilacz 12–24 V w garażu albo w szafce IP44 dostaje 230 V z rozdzielnicy (rura z etapu 08). Od niego <strong>kabel niskonapięciowy</strong> na ok. 20–30 cm, z taśmą ostrzegawczą, a pod podjazdem w rurze osłonowej. Lampy wpina się w kabel złączkami.</p>
      <p>Sterowanie: zegar astronomiczny lub czujnik zmierzchu, 2–3 strefy (ścieżki całą noc przyciemnione, drzewa do 23:00) i scenariusze w smart home (etap 10).</p>`,
    decision: {
      question: "Jaki system oświetlenia?",
      intro: "Koszty z montażem dla ok. 15–20 punktów.",
      chosen: "nn",
      options: [
        { id: "nn", name: "Niskonapięciowe 12–24 V",
          cost: { min: 6000, max: 10000 }, time: "2–3 dni", note: "zasilacz, kabel, lampy systemowe",
          pros: ["Bezpieczne przy dzieciach, basenie i kosiarce", "Kabel płytko, lampy łatwo przestawić", "Rozbudowa bez elektryka"],
          cons: ["Długość obwodu ograniczona spadkiem napięcia", "Lampy z jednego systemu"],
          why: "Bezpieczne w ogrodzie z basenem i dziećmi. Elektryk robi tylko 230 V do zasilaczy." },
        { id: "230", name: "Oświetlenie 230 V",
          cost: { min: 8000, max: 14000 }, time: "3–5 dni", note: "kabel ziemny YKY ok. 60–70 cm głęb., puszki IP",
          pros: ["Dowolne lampy, także mocne reflektory", "Bez zasilaczy"],
          cons: ["Głębokie wykopy i elektryk przy każdej zmianie", "Większe ryzyko przy uszkodzeniu kabla łopatą"],
          why: "Ma sens dla mocnych reflektorów (np. elewacja z daleka) albo lamp na odległych słupach." },
        { id: "solar", name: "Lampy solarne",
          cost: { min: 1500, max: 3500 }, time: "1 dzień", note: "bez kabli",
          pros: ["Najtaniej, bez kabli"],
          cons: ["Zimą świecą krótko lub wcale", "Słabe światło, akumulatory do wymiany co 2–3 lata"],
          why: "Jako dodatek dekoracyjny. Ścieżki i podjazd potrzebują pewnego światła przez cały rok." }
      ]
    },
    tips: [
      "<b>Kable przed trawnikiem i kostką.</b> Trasy kabli i rury osłonowe kładzie się razem z nawadnianiem, przed trawnikiem. Na plan tras z wymiarami.",
      "<b>Ciepła barwa, mała moc.</b> 2700–3000 K, lampy przy ścieżkach po 2–5 W wystarczą. Za mocne światło oślepia i świeci sąsiadom w okna.",
      "<b>Światło w dół.</b> Słupki z kloszem kierującym światło na ścieżkę, nie w niebo i nie w oczy.",
      "<b>Zapas mocy zasilacza 20–30%.</b> I osobne zasilacze dla stref daleko od siebie, żeby lampy na końcu kabla nie świeciły słabiej."
    ],
    mistakes: [
      "<b>Kabel 230 V płytko w ziemi bez rury.</b> Łopata albo aerator do trawnika i porażenie prądem.",
      "<b>Lampy w trawniku na drodze kosiarki.</b> Ustawiaj je w rabatach, przy obrzeżach i w opasce.",
      "<b>Jedna strefa na cały ogród.</b> Wszystko świeci naraz albo nic, a rachunek rośnie."
    ],
    checklist: [
      "Zasilacze z zapasem mocy, w garażu lub szafce IP44",
      "Kable z taśmą ostrzegawczą, pod podjazdem w rurze",
      "Strefy i harmonogram ustawione",
      "Plan tras kabli w teczce domu"
    ]
  },

  /* 13 ----------------------------------------------------------------- */
  {
    id: "trawnik",
    title: "Trawnik",
    lead: "Ok. 600 m² trawnika to największa zielona powierzchnia ogrodu. Wysiewasz go albo układasz z rolki na humusie z kroku 10, gdy nawadnianie już działa.",
    time: "2–5 dni + 6–10 tyg. do pełnego użytkowania (siew)", team: "2–3 osoby",
    facts: [["Powierzchnia", "ok. 600 m²", "house"], ["Termin siewu", "IV–V lub VIII–IX", "sun"], ["Nasiona", "ok. 30–40 g/m²", "calc"]],
    body: `
      <p>Przed trawnikiem: <strong>humus wyrównany</strong> grabiami i łatą, <strong>wałowany</strong> (wał ok. 100 kg) tak, żeby but zostawiał płytki ślad, i <strong>nawóz startowy</strong>. Nawadnianie i kable leżą już w ziemi.</p>
      <p><strong>Siew:</strong> mieszanka rekreacyjna lub sportowa (dzieci, pies), ok. 30–40 g/m², w dwóch kierunkach na krzyż, płytko zagrabiona i wałowana. Pierwsze koszenie przy ok. 8–10 cm, na ok. 5–6 cm. <strong>Z rolki:</strong> rolki ułożone w ciągu 24 godzin od cięcia, na mijankę, dociśnięte wałem i podlewane codziennie przez 2–3 tygodnie.</p>`,
    cost: { min: 2000, max: 4000, note: "wyrównanie, wałowanie, nawóz startowy, robocizna" },
    decision: {
      question: "Trawnik z siewu czy z rolki?",
      intro: "Koszt opcji: nasiona lub rolki z ułożeniem dla ok. 600 m².",
      chosen: "siew",
      options: [
        { id: "siew", name: "Z siewu",
          cost: { min: 2000, max: 4000 }, time: "zielony po 2–3 tyg., użytkowy po 6–10 tyg.", note: "ok. 20–25 kg mieszanki",
          pros: ["Kilka razy taniej", "Mieszanka dobrana do miejsca (cień, słońce, zabawa)", "Lepiej ukorzeniony na lata"],
          cons: ["Tylko w terminach siewu", "Chwasty w pierwszym roku, ptaki", "Kilka tygodni bez wchodzenia"],
          why: "Przy działającym nawadnianiu wschodzi równo, a różnica ok. 10–13 tys. zł pomaga zmieścić ogród w limicie." },
        { id: "rolka", name: "Z rolki",
          cost: { min: 12000, max: 17000 }, time: "zielony od razu, użytkowy po 3–4 tyg.", note: "ok. 20–28 zł/m² z ułożeniem",
          pros: ["Efekt od razu, mniej błota", "Można układać od wiosny do jesieni", "Mniej chwastów"],
          cons: ["Drożej o ok. 10–13 tys. zł", "Codzienne podlewanie przez 2–3 tygodnie", "Trawa z plantacji, nie zawsze dobrana do cienia"],
          why: "Ma sens, gdy wprowadzacie się latem z małymi dziećmi i trawnik ma być gotowy od razu." }
      ]
    },
    tips: [
      "<b>Wałuj przed siewem i po siewie.</b> Wał ok. 100 kg ujawnia dołki, które trzeba dosypać. Nierówności trawnika są potem na lata.",
      "<b>Nie koś krócej niż 4–5 cm.</b> Za niski trawnik szybciej wysycha i zarasta mchem.",
      "<b>Robot koszący.</b> Przewód ograniczający kładzie się przed trawnikiem albo zaraz po siewie. Nowsze roboty działają bez przewodu (GPS), ale stację i zasilanie zaplanuj teraz.",
      "<b>Pierwszy nawóz po 4–6 tyg.</b> Potem 3–4 razy w sezonie, ostatni jesienny z potasem."
    ],
    mistakes: [
      "<b>Siew w lipcu w upał.</b> Nasiona wysychają, wschody są rzadkie.",
      "<b>Rolki leżą 2 dni na palecie.</b> Żółkną i gniją, część nie przyjmie się wcale.",
      "<b>Trawnik w głębokim cieniu.</b> Pod drzewami i od północy lepsze są rośliny okrywowe niż trawa."
    ],
    checklist: [
      "Humus wyrównany i wałowany, bez kamieni",
      "Nawadnianie i kable w ziemi przed siewem",
      "Siew lub rolki w terminie, podlewanie codziennie przez pierwsze tygodnie",
      "Pierwsze koszenie przy ok. 8–10 cm"
    ],
    quiz: [{
      q: "Kiedy najlepiej wysiać trawnik?",
      a: ["W lipcu, bo jest ciepło", "W kwietniu–maju albo w sierpniu–wrześniu", "W listopadzie, przed zimą"],
      correct: 1,
      explain: "<b>Wiosna albo koniec lata.</b> Ziemia jest ciepła i wilgotna, a nie ma upałów. W lipcu nasiona wysychają."
    }]
  },

  /* 14 ----------------------------------------------------------------- */
  {
    id: "nasadzenia",
    title: "Żywopłot, drzewa i rabaty",
    lead: "Rośliny sadzi się na końcu, wiosną albo jesienią. Żywopłot wzdłuż ogrodzenia daje prywatność za 3–5 lat, a 3–5 drzew cień nad tarasem i placem zabaw.",
    time: "3–5 dni", team: "2–3 ogrodników",
    facts: [["Żywopłot", "ok. 90 mb, 3–4 szt./mb", "house"], ["Drzewa", "3–5 szt.", "sun"], ["Termin", "III–V lub IX–XI", "clock"]],
    body: `
      <p><strong>Żywopłot</strong> wzdłuż boków i tyłu (ok. 90 mb) z <strong>grabu pospolitego</strong>: rośnie szybko, dobrze znosi cięcie, a suche liście trzyma do wiosny, więc zimą też zasłania. Zamiast tui, które w suche lata brązowieją. Sadzonki 80–120 cm, 3–4 szt./mb, w rowie z kompostem, pod korą i z linią kroplującą.</p>
      <p><strong>Drzewa</strong>: 1–2 przy tarasie i placu zabaw (cień), 1–2 w głębi ogrodu, z dala od basenu (liście). Na zdjęciu inspiracji jest <strong>oliwka</strong>, ale w gruncie w Polsce zwykle nie przetrwa zimy. Zamienniki o podobnym, srebrzystym wyglądzie: <strong>oliwnik wąskolistny</strong> (Elaeagnus angustifolia), <strong>grusza wierzbolistna</strong> 'Pendula', <strong>rokitnik</strong>. Prawdziwą oliwkę trzymaj w dużej donicy na tarasie i zimuj w jasnym, chłodnym pomieszczeniu (ok. 5–10°C).</p>
      <p><strong>Rabaty</strong> przy tarasie, wejściu i wzdłuż opaski: trawy ozdobne, lawenda, hortensje bukietowe, byliny. Pod korą 5–7 cm na agrowłókninie albo bez niej (lepiej dla gleby, trochę więcej pielenia).</p>`,
    cost: { min: 9000, max: 16000, note: "grab ok. 300 szt., 3–5 drzew 2–3 m, rabaty ok. 150 m², kora, kompost, sadzenie" },
    tips: [
      "<b>Drzewa min. 3–5 m od basenu i domu.</b> Liście w basenie co jesień, a korzenie przy rurach deszczówki i skrzynkach rozsączających to kłopot. Sprawdź docelową szerokość korony.",
      "<b>Sadzonki z bryłą lub w doniczkach.</b> Gotowe drzewa 2–3 m z bryłą korzeniową przyjmują się lepiej niż duże okazy za kilka tysięcy złotych.",
      "<b>Palik i podlewanie przez 2–3 lata.</b> Młode drzewo przy palikach, linia kroplująca lub worek nawadniający w lecie. Najczęstsza przyczyna wypadania to susza w pierwszym roku.",
      "<b>Oliwka w donicy.</b> Donica min. 60–80 l, podłoże przepuszczalne, zimowanie od pierwszych przymrozków do kwietnia. Niektóre odmiany znoszą krótki mróz do ok. −10°C, ale nie polskie zimy w gruncie (orientacyjnie).",
      "<b>Odległość od granicy.</b> Żywopłot sadź ok. 50–70 cm od ogrodzenia, żeby dało się go przycinać z obu stron bez wchodzenia do sąsiada."
    ],
    mistakes: [
      "<b>Oliwka posadzona w gruncie.</b> Po pierwszej mroźnej zimie zostaje drogi, suchy kij.",
      "<b>Tuje „bo szybko”.</b> W suche lata brązowieją i wypadają całymi odcinkami, a żywopłot z luką wygląda gorzej niż żaden.",
      "<b>Wierzby i topole przy rurach.</b> Korzenie wchodzą do drenażu i rur kanalizacyjnych."
    ],
    checklist: [
      "Żywopłot ok. 50–70 cm od ogrodzenia, z linią kroplującą",
      "Drzewa z dala od basenu, domu i skrzynek rozsączających",
      "Paliki i kora, podlewanie w pierwszym sezonie",
      "Oliwka (jeśli jest) w donicy, z planem zimowania"
    ],
    quiz: [{
      q: "Czym zastąpić oliwkę ze zdjęcia w ogrodzie w Polsce?",
      a: ["Oliwką w gruncie, owiniętą agrowłókniną", "Oliwnikiem wąskolistnym albo gruszą wierzbolistną", "Tują szmaragdową"],
      correct: 1,
      explain: "<b>Podobny wygląd, mrozoodporność.</b> Oliwnik i grusza wierzbolistna mają srebrzyste liście i znoszą polskie zimy. Prawdziwą oliwkę trzymaj w donicy."
    }]
  },

  /* 15 ----------------------------------------------------------------- */
  {
    id: "pergola-domek",
    title: "Pergola, domek dla dzieci, kubły i drewno",
    lead: "Ostatnie elementy ogrodu: pergola z pnączami, domek ze zjeżdżalnią w zasięgu wzroku z kuchni, wiata na kubły przy bramie i drewutnia na drewno do kominka.",
    time: "1–2 tyg.", team: "1–2 cieśli / montażystów",
    facts: [["Pergola", "ok. 3 × 4 m", "house"], ["Strefa pod zjeżdżalnią", "ok. 1,5–2 m wolnego miejsca", "shield"], ["Drewno", "ok. 3–5 mp na sezon", "rebar"]],
    body: `
      <p><strong>Pergola</strong> ok. 3 × 4 m z drewna (modrzew jak deska na elewacji, etap 12) przy basenie albo na końcu ścieżki, z pnączami: winobluszcz, powojnik, róża pnąca. Słupy na stopach betonowych z kotwami, nie wkopane w ziemię.</p>
      <p><strong>Domek dla dzieci na palach ze zjeżdżalnią</strong> stoi po przeciwnej stronie ogrodu niż basen, ale w <strong>widoku z kuchni i tarasu</strong>. Pod zjeżdżalnią i wokół domku <strong>nawierzchnia amortyzująca</strong> (zrębki, piasek lub płyty gumowe ok. 30 cm), nie trawa i nie kostka.</p>
      <p><strong>Wiata na kubły</strong> przy bramie od frontu, na utwardzonym podłożu: 4–5 pojemników (zmieszane, papier, szkło, metale i tworzywa, bio). Bioodpady możesz kompostować w ogrodzie. <strong>Drewutnia</strong> przy garażu albo przy wejściu na taras: zadaszona, przewiewna z boków, drewno na podkładach nad ziemią.</p>`,
    cost: { min: 7000, max: 14000, note: "domek ze zjeżdżalnią i nawierzchnią amortyzującą, wiata śmietnikowa, drewutnia" },
    decision: {
      question: "Jaka pergola?",
      intro: "Koszt z montażem i stopami, ok. 3 × 4 m.",
      chosen: "drewno",
      options: [
        { id: "drewno", name: "Drewniana (modrzew) z pnączami",
          cost: { min: 6000, max: 11000 }, time: "3–5 dni", note: "słupy 12 × 12, stopy z kotwami",
          pros: ["Spójna z deską na elewacji", "Pnącza zarastają ją w 2–3 lata"],
          cons: ["Olejowanie co 2–3 lata"],
          why: "Tańsza i cieplejsza w wyglądzie, pasuje do modrzewia z elewacji." },
        { id: "alu", name: "Aluminiowa (antracyt)",
          cost: { min: 9000, max: 16000 }, time: "2–3 dni", note: "systemowa",
          pros: ["Bez konserwacji", "Pasuje do zadaszenia tarasu i stolarki"],
          cons: ["Drożej o ok. 3–5 tys. zł", "Chłodniejsza w wyglądzie"],
          why: "Gdy liczy się zero konserwacji i spójność z antracytową stolarką." },
        { id: "pozniej", name: "Pergola w 2. roku",
          cost: { min: 0, max: 0 }, time: "—", note: "teraz tylko stopy fundamentowe",
          pros: ["Odciąża budżet pierwszego roku"],
          cons: ["Pnącza zaczynają rosnąć rok później"],
          why: "Najprostsza oszczędność, jeśli ogród przekracza limit. Stopy pod słupy wylej od razu, przed trawnikiem." }
      ]
    },
    tips: [
      "<b>Domek w zasięgu wzroku, basen poza drogą.</b> Dziecko biegnące z domku do domu nie powinno mijać basenu.",
      "<b>Drewno do kominka sezonowane 1,5–2 lata.</b> Wilgotność poniżej 20% (miernik ok. 50–100 zł). Mokre drewno kopci, brudzi szybę i komin (etap 05).",
      "<b>Wiata na kubły z drzwiami do ulicy.</b> Niektóre gminy pozwalają, żeby śmieciarka brała pojemniki prosto z wiaty w ogrodzeniu, bez wystawiania.",
      "<b>Kompostownik w cieniu.</b> Z dala od tarasu i okien, ale blisko rabat. Skoszona trawa i liście wracają jako kompost."
    ],
    mistakes: [
      "<b>Zjeżdżalnia na kostce.</b> Upadek z 1,5 m na beton kończy się na SOR-ze.",
      "<b>Drewno w szczelnej szopie.</b> Bez przewiewu pleśnieje zamiast schnąć.",
      "<b>Kubły w końcu ogrodu.</b> Noszenie pojemników przez trawnik co tydzień."
    ],
    formal: [
      ["<b>Altany, wiaty i obiekty małej architektury.</b> Do określonej powierzchni zwykle bez pozwolenia; wiaty i altany mają limity powierzchni i liczby na działkę", "orientacyjnie, przepisy się zmieniały; sprawdź w starostwie przed budową wiaty i drewutni"],
      ["<b>Miejsce na odpady.</b> Odległości od okien i granicy wg warunków technicznych i regulaminu gminy", "zapytaj projektanta lub w gminie"]
    ],
    checklist: [
      "Stopy pergoli z kotwami, słupy nad gruntem",
      "Domek w widoku z kuchni, z dala od basenu, z nawierzchnią amortyzującą",
      "Wiata na kubły przy bramie, na utwardzeniu",
      "Drewutnia zadaszona i przewiewna"
    ]
  }

  ]
});
