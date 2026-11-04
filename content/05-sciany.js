/* Etap 05: Ściany, nadproża, wieńce, strop, rusztowanie, komin. Ceny orientacyjne, 2026 r., okolice małego miasta.
   Dom referencyjny: bryła 13 × 9,5 m + garaż 6,5 × 7 m, dach 40°, ścianka kolankowa 1 m, posadzka ±0,00. */
BUDOWA.addStage({
  id: "05-sciany", nr: 5, title: "Ściany i strop", icon: "🧱", category: "surowy",
  summary: "Od pierwszej warstwy pustaków po stan surowy otwarty: mury, nadproża, wieńce, strop nad parterem, ścianka kolankowa, szczyty, rusztowanie i komin kominka.",
  duration: "8–12 tyg.",
  steps: [

  /* 1 ------------------------------------------------------------------ */
  {
    id: "material-scian",
    title: "Z czego murować ściany",
    lead: "Dom referencyjny murujemy z pustaka ceramicznego 25 cm i ocieplamy styropianem grafitowym 20 cm. Materiał ścian wybierasz raz: od niego zależą fundamenty, grubość ocieplenia i tempo budowy.",
    time: "decyzja przed zamówieniem", team: "ty, projektant, kierownik",
    facts: [["Ściany zewn. netto", "ok. 175 m²", "calc"], ["Bloczków", "ok. 2,6 tys. szt.", "file"], ["Ściana z ociepleniem", "U ok. 0,14 W/m²K", "calc"]],
    widget: "kalkulator-scian",
    body: `
      <p>Przy domu z poddaszem użytkowym 190 m² do wymurowania jest ok. <strong>175 m² ścian zewnętrznych netto</strong> (po odjęciu dużych przeszkleń i bramy garażowej) oraz ok. 50 m² nośnych ścian wewnętrznych. To główna pozycja materiałowa stanu surowego. Warunki techniczne WT2021 wymagają dla ścian zewnętrznych współczynnika U nie większego niż 0,20 W/m²K, a nasza przegroda z ociepleniem 20 cm daje wyraźnie mniej.</p>
      <p>Projekt gotowy ma zwykle jeden materiał ścian. Zamiana na inny wymaga <strong>zgody projektanta (zmiana nośności, grubości, nadproży)</strong>, a często też nowego obliczenia ocieplenia. Zrób ją przed pozwoleniem albo jako zmianę nieistotną z kierownikiem budowy.</p>
      <p>Policz swoją bryłę w kalkulatorze: wpisz obwód, wysokości, szczyty i otwory z projektu.</p>`,
    cost: { min: 0, max: 0 },
    decision: {
      question: "Z czego murować ściany zewnętrzne?",
      intro: "Koszt opcji to materiał na ok. 225 m² ścian zewn. i nośnych (bloczki + zaprawa lub klej), bez robocizny, która jest w kolejnych krokach.",
      chosen: "ceramika",
      options: [
        { id: "ceramika", name: "Pustak ceramiczny poryzowany 25 cm (P+W)",
          cost: { min: 38000, max: 48000 }, time: "najszybszy, 8–10 tyg. murów", note: "ok. 175–210 zł/m² z zaprawą",
          pros: ["Dobra izolacyjność samego muru, oddycha", "Lekki, wygodny w murowaniu i cięciu", "Wspólny system z nadprożami, wieńcami i kominem"],
          cons: ["Wrażliwy na wodę i mróz przed otynkowaniem", "Dokładne docinki i zbrojenie narożników", "Droższy od silikatu"],
          why: "Zgodny z przegrodą z DECYZJE.md (pustak 25 + styropian grafitowy 20). Najlepszy kompromis cieplny, akustyczny i robocizny przy ścianie z dużą liczbą otworów." },
        { id: "silikat", name: "Silikat 24 cm",
          cost: { min: 33000, max: 42000 }, time: "podobnie, ciężki", note: "ok. 150–185 zł/m²",
          pros: ["Wysoka wytrzymałość i akustyka", "Tańszy materiał, równe wymiary, cienka spoina na klej", "Odporny na wilgoć na budowie"],
          cons: ["Zimny: ocieplenie musi być grubsze lub droższe", "Ciężki: wymaga większej ławy i sprzętu (dźwig lub HDS)", "Trudniejsze bruzdowanie pod instalacje"],
          why: "Ma sens w ścianach akustycznie wymagających albo gdy ciężar mas wzmacnia konstrukcję. W ścianach zewnętrznych tego domu przegrywa w cieple i pracy murarza." },
        { id: "komorkowy", name: "Beton komórkowy 24 cm (klasa 600)",
          cost: { min: 35000, max: 45000 }, time: "szybki, duże bloki", note: "ok. 155–190 zł/m²",
          pros: ["Duże bloki, szybkie murowanie na klej", "Łatwe cięcie i bruzdowanie", "Niska waga"],
          cons: ["Kruchy narożnik, wrażliwy na wodę", "Gorsza wytrzymałość na kotwienie (okna, kominek, szafki)", "Słabsza akustyka niż silikat"],
          why: "Dobry w budżetowych domach; przy dużych przeszkleniach, ciężkim kominku i garażu w bryle lepiej postawić na ceramikę." }
      ]
    },
    tips: [
      "<b>Zamów wszystko z jednego systemu.</b> Pustaki, nadproża, elementy narożne, pustaki szczytowe i wieńcowe tego samego producenta mają zgrane wymiary i kartę montażową.",
      "<b>Wylicz z zapasem 5%, nie 15%.</b> Brakujące palety hurtownia dowozi zwykle w ciągu doby, a nadwyżka zalega na działce. Dokładna lista z kalkulatora ogranicza zwroty.",
      "<b>Poproś o ofertę z paletami zwrotnymi i transportem z HDS.</b> Cena za sztukę bez rozładunku bywa o kilka procent niższa niż całość.",
      "<b>Zapytaj 2–3 hurtownie o ten sam system.</b> Ceny palet tego samego pustaka potrafią się różnić orientacyjnie o 10–15%, a rabat zależy od całego zamówienia (nadproża, wieńce, komin)."
    ],
    mistakes: [
      "<b>Zamiana materiału „bo taniej” bez projektanta.</b> Zmienia się nośność, nadproża i ocieplenie. Może się okazać, że przeróbki i zgody kosztują więcej niż oszczędność.",
      "<b>Kupno wszystkiego od razu.</b> Pustaki zalegają, mokną i trzeba je chronić. Dowóz etapami (parter, kolankowa, szczyty) ogranicza straty.",
      "<b>Nieprzeliczone otwory.</b> Duże przeszklenia i brama garażowa to 25–30% ściany. Bez odjęcia ich kupisz materiał na dodatkowy mały dom."
    ],
    formal: [
      ["Projekt konstrukcyjny z oznaczeniem materiału", "kierownik budowy i murarz muszą mieć aktualne wydanie; zmiany tylko na piśmie"],
      ["Deklaracje właściwości użytkowych / oznaczenie CE wyrobów", "wymagane przy odbiorze; zbieraj je od hurtowni"]
    ],
    checklist: [
      "Zatwierdzony materiał ścian zgodny z projektem",
      "Policzona liczba pustaków i palet z zapasem ok. 5%",
      "Oferta zawiera transport i rozładunek HDS",
      "Dokumenty wyrobów (DWU, CE) zebrane do teczki budowy"
    ],
    quiz: [{
      q: "Chcesz zamienić pustak ceramiczny 25 cm na tańszy silikat 24 cm. Co robisz najpierw?",
      a: ["Zamawiam silikat, murarz sobie poradzi", "Pytam projektanta konstruktora i przeliczam ocieplenie", "Zostawiam ceramikę i dopłacam do silikatu"],
      correct: 1,
      explain: "<b>Materiał ścian to decyzja konstrukcyjna i cieplna.</b> Zmienia nośność, nadproża, wymagane ocieplenie i zakotwienia. Zmianę zatwierdza projektant, a kierownik budowy wpisuje ją do dokumentacji."
    }]
  },

  /* 2 ------------------------------------------------------------------ */
  {
    id: "dostawa-skladowanie",
    title: "Dostawa i składowanie materiału",
    lead: "Ściany wystarczy dobrze zaplanować, zanim przyjedzie pierwsza ciężarówka: gdzie staną palety, jak wjadą auta i jak chronić pustaki przed wodą.",
    time: "1 dzień + dowozy etapami", team: "dostawca z HDS, kierowca",
    body: `
      <p>Całość pustaków to ok. <strong>55 palet po ok. 1 t</strong> (orientacyjnie, zależy od systemu). Zamawiasz je w <strong>2–3 transportach</strong>: pod parter, pod kolankową i szczyty oraz osobno nadproża, wieńce i komin. Każdy kurs to auto z żurawiem HDS, więc droga dojazdowa z etapu 03 musi unieść 20–30 t.</p>
      <p>Palety stawiasz <strong>możliwie blisko ściany</strong>, na równym podłożu (lekko nad terenem, na paletach lub belkach), okryte folią lub plandeką. Zaprawę ciepłą i klej składujesz w suchym kontenerze, a cement na paletach z drewna, nie na ziemi. Pianka PUR potrzebuje temperatury powyżej +5°C: przechowuj puszki w cieple.</p>`,
    cost: { min: 2500, max: 5000, note: "HDS, przestawianie palet, folie, drobne zakupy" },
    tips: [
      "<b>HDS stawia palety dokładnie tam, gdzie wskażesz.</b> Przed dostawą zaznacz farbą miejsca na działce, żeby murarz nie nosił pustaków po budowie.",
      "<b>Zakryj palety folią ze szczelinami wentylacyjnymi u dołu.</b> Mokre pustaki gorzej wiążą zaprawę i wolniej wysychają przed tynkiem.",
      "<b>Odbierz towar z listem przewozowym i zdjęciami.</b> Uszkodzone narożniki i brakujące palety reklamujesz od razu, na miejscu.",
      "<b>Zamów pustaki w sezonie wcześniej.</b> Wiosną hurtownie mają kolejki; dostawa wymagana po fundamentach nie może czekać na towar."
    ],
    mistakes: [
      "<b>Palety na rozmiękłym gruncie.</b> Pochylone, przewrócone stosy łamią narożniki i mogą skończyć wypadkiem.",
      "<b>Składowanie przy wykopie.</b> Obciążenie skarpy jest ryzykiem osuwiska. Zachowaj odstęp minimum szerokości wykopu.",
      "<b>Brak okrycia cementu i zaprawy.</b> Jeden deszcz robi z worków zbrylone bryły do wyrzucenia."
    ],
    checklist: [
      "Droga dojazdowa i plac wytrzymują auto z HDS",
      "Miejsca składowania zaznaczone i oddalone od wykopu",
      "Palety osłonięte folią, zaprawa w suchym miejscu",
      "Dostawa potwierdzona, braki spisane na liście przewozowym"
    ],
    quiz: [{
      q: "Dlaczego dowozi się pustaki w 2–3 transportach, a nie od razu na cały dom?",
      a: ["Bo hurtownia nie ma tyle towaru", "Żeby ograniczyć straty, zajęte miejsce i zamoknięcie palet", "Bo tak wymaga kierownik budowy"],
      correct: 1,
      explain: "<b>Materiał leżący miesiącami psuje się i przeszkadza.</b> Etapowanie dostaw (parter, kolankowa, szczyty) zmniejsza ryzyko deszczu, kradzieży i potrzebę drugiego przeładunku."
    }]
  },

  /* 3 ------------------------------------------------------------------ */
  {
    id: "rusztowanie",
    title: "Rusztowanie: rodzaj, bezpieczeństwo, odbiór",
    lead: "Rusztowanie to nie dodatek, tylko miejsce pracy 5–6 ekip przez kilka miesięcy. Zamów je z montażem, odebrane protokołem, i zostaw do końca dachu.",
    time: "montaż 1–2 dni, wynajem 3–6 mies.", team: "firma wynajmu, 2–3 montażystów",
    facts: [["Powierzchnia", "ok. 450–520 m²", "calc"], ["Wynajem", "ok. 3–5 zł/m²/mies.", "wallet"], ["Montaż + demontaż", "ok. 12–20 zł/m²", "wallet"]],
    body: `
      <p>Dom z poddaszem i szczytami ma <strong>ok. 8 m wysokości w kalenicy</strong>. Rusztowanie obejmuje całą bryłę z garażem: na ok. 60 m obwodu i do ok. 8 m wysokości wychodzi 450–520 m² płaszczyzny (orientacyjnie). Stawia się je przed murowaniem i podnosi o kolejne poziomy wraz ze ścianami. Jeśli zostanie do końca dachu i elewacji (etap 12), unikasz drugiego montażu.</p>
      <p>Przy rusztowaniach ramowych pamiętaj o: <strong>pomostach z barierkami i bortami</strong>, drabinach lub klatkach, kotwieniu do ściany w miejscach wskazanych w instrukcji producenta, <strong>uziemieniu</strong> (burza) i bezpiecznym odstępie od linii energetycznych. Montaż wykonują przeszkoleni montażyści, a użytkownik dostaje protokół odbioru.</p>`,
    cost: { min: 12000, max: 20000, note: "montaż, wynajem na ok. 5 mies. i demontaż; dostawienie pod elewację rozliczasz w etapie 12" },
    decision: {
      question: "Jakie rusztowanie i od kogo?",
      intro: "Koszt opcji to dopłata lub oszczędność względem wynajmu rusztowania ramowego z montażem.",
      chosen: "ramowe",
      options: [
        { id: "ramowe", name: "Ramowe z wynajmu, z montażem i protokołem",
          cost: { min: 0, max: 0 }, time: "montaż 1–2 dni", note: "standard dla domów jednorodzinnych",
          pros: ["Szybki montaż i demontaż", "Montażyści z uprawnieniami, protokół", "Wynajem ogranicza koszt zakupu"],
          cons: ["Czynsz za każdy miesiąc", "Trudniej przy skomplikowanej bryle (garaż, ryzality)"],
          why: "Najprostsza i bezpieczna opcja dla bryły dwuspadowej z garażem w bryle. Zamów od razu na okres do końca robót dachowych." },
        { id: "modulowe", name: "Modułowe (systemowe, np. typu Layher)",
          cost: { min: 4000, max: 8000 }, time: "montaż 2–3 dni", note: "droższe, elastyczne",
          pros: ["Dopasowane do narożników i zmiennych wysokości", "Mocniejsza konstrukcja, więcej bezpiecznych elementów"],
          cons: ["Wyższa cena montażu i wynajmu", "Dłuższy montaż"],
          why: "Ma sens przy bardzo urozmaiconej bryle i wysokich szczytach. W naszym domu zwykle zbędne." },
        { id: "wlasne", name: "Własne lub od ekipy, bez protokołu",
          cost: { min: -4000, max: -2000 }, time: "różnie", note: "nie polecamy",
          pros: ["Najniższy koszt"],
          cons: ["Brak odbioru i odpowiedzialności za pomosty", "Ryzyko wypadku, ubezpieczyciel może odmówić wypłaty", "Kierownik budowy może wstrzymać roboty"],
          why: "Pracujesz na wysokości z kilkoma ekipami. Oszczędność kilku tysięcy nie jest warta wypadku." }
      ]
    },
    tips: [
      "<b>Ustal w umowie wynajmu cenę za dodatkowy miesiąc.</b> Stan surowy często trwa dłużej, niż zakładasz; dobra stawka przedłużenia chroni budżet.",
      "<b>Zostaw rusztowanie na dach i okna.</b> Rozbiórka po murach i ponowne stawianie kosztuje drugi raz 8–12 tys. zł.",
      "<b>Pomost nie może mieć szczelin większych niż ok. 2 cm.</b> I zawsze burta na dole: spadające pustaki są groźniejsze niż upadki ludzi.",
      "<b>Odbiór rusztowania po burzy i silnym wietrze.</b> Sprawdź kotwy, spinki i ewentualne uszkodzenia, zanim ekipa wejdzie na górę."
    ],
    mistakes: [
      "<b>Rusztowanie „na gębę” od znajomego.</b> Brak protokołu i niepewna konstrukcja to ryzyko dla ekip i dla ciebie jako inwestora.",
      "<b>Demontaż przed tynkiem i dachem.</b> Płacisz drugi montaż i demontaż, a roboty stoją.",
      "<b>Brak uziemienia i zabezpieczenia przy linii.</b> Pioruny i napięcie na rusztowaniu to realne ryzyko."
    ],
    formal: [
      ["Protokół odbioru rusztowania", "od firmy montażowej, zanim ktokolwiek wejdzie; wpis w dokumentacji budowy"],
      ["Umowa wynajmu", "cena m²/mies., cena montażu i demontażu, okres, kaucja, odpowiedzialność za szkody"]
    ],
    checklist: [
      "Umowa z ceną przedłużenia i terminem demontażu",
      "Protokół odbioru rusztowania po montażu",
      "Barierki, bort, drabina i kotwy sprawdzone",
      "Uziemienie i bezpieczna odległość od przewodów"
    ],
    quiz: [{
      q: "Kto powinien montować i odebrać rusztowanie przed wejściem ekipy?",
      a: ["Murarz, bo wie, co mu potrzebne", "Przeszkolona firma montażowa z protokołem odbioru", "Inwestor, bo odpowiada za budowę"],
      correct: 1,
      explain: "<b>Montaż i odbiór to rola specjalistów.</b> Przeszkolona ekipa stawia rusztowanie według instrukcji producenta i wystawia protokół. Bez niego kierownik budowy ma prawo wstrzymać prace na wysokości."
    }]
  },

  /* 4 ------------------------------------------------------------------ */
  {
    id: "pierwsza-warstwa",
    title: "Pierwsza warstwa i poziomowanie",
    lead: "Pierwsza warstwa pustaków decyduje o równości całego domu. Błąd o 1 cm tutaj rośnie na każdej kolejnej warstwie i kończy się krzywym stropem i oknami.",
    time: "2–4 dni", team: "murarz z pomocnikiem, kierownik",
    facts: [["Niwelator", "reper ±0,00", "ruler"], ["Spoina leżąca", "ok. 1,5 cm cem.", "layers"]],
    body: `
      <p>Przed pierwszą warstwą sprawdzasz <strong>poziom koron ścian fundamentowych</strong> niwelatorem względem repera. Różnice do kilku milimetrów wyrównujesz zaprawą cementową, większe sygnalizujesz kierownikowi. Na wierzchu ścian fundamentowych musi leżeć <strong>izolacja pozioma</strong> (papa, pas z etapu 04), która przerywa podciąganie wody kapilarnej.</p>
      <p>Pierwszą warstwę układa się na <strong>zaprawie cementowej grubości ok. 1–2 cm</strong>, wyrównując poziomicą w obu kierunkach. Zaczynasz od narożników (tzw. „zbrojenie narożne”), napinasz żyłkę i murujesz między nimi. <strong>Od tego momentu liczysz jeden stały poziom odniesienia</strong>: każda warstwa to 24 cm, więc kontrola co kilka rzędów przez niwelator jest tania.</p>
      <button class="xref" data-section="mur"><svg class="ico"><use href="#i-layers"/></svg>zobacz w przekroju</button>`,
    cost: { min: 1500, max: 3000, note: "zaprawa cementowa, niwelacja, drobny sprzęt, dopłata za dokładność" },
    tips: [
      "<b>Zacznij od najwyższego punktu korony fundamentu.</b> Wszystko niższe wyrównujesz zaprawą, wszystko wyższe zaś trzeba skuwać. Pierwsza warstwa to 5–10 mm różnicy, nie 3 cm.",
      "<b>Kontroluj przekątne.</b> Przy domu 13 × 9,5 m przekątna ma 16,10 m; różnica ponad 1 cm = skrzywienie ścian.",
      "<b>Chroń papę przed uszkodzeniem.</b> Izolacja pod pierwszym rzędem ma być czysta, sucha i bez przetarć po taczkach i łopatach.",
      "<b>Zapisz kontrolę w dzienniku budowy.</b> Zdjęcie niwelatora z odczytami to tani dowód, gdy później wylezie krzywa ściana."
    ],
    mistakes: [
      "<b>Zaczynanie murowania bez sprawdzonej korony fundamentu.</b> Błąd 2–3 cm później wyrównuje się grubą spoiną, która tworzy zimne mostki.",
      "<b>Zbyt gruba warstwa wyrównawcza.</b> Zaprawa grubsza niż ok. 2 cm kruszy się i pęka. Większe różnice wyrównuj w dwóch etapach albo zgłoś kierownikowi.",
      "<b>Pierwszy rząd z pustaków przypadkowych.</b> Narożniki wymagają pustaków z całymi ściankami: uszkodzone odkładasz na ścianki działowe."
    ],
    formal: [
      ["Wpis w dzienniku budowy o poziomie ±0,00", "kierownik budowy, po sprawdzeniu pierwszej warstwy"]
    ],
    checklist: [
      "Korona ścian fundamentowych sprawdzona niwelatorem",
      "Izolacja pozioma na całym obwodzie i pod ścianami nośnymi",
      "Pierwsza warstwa w poziomie (poziomica 2 m, tolerancja kilku mm)",
      "Przekątne obrysu zgodne z projektem (16,10 m dla domu bez garażu)"
    ],
    quiz: [{
      q: "Po co układa się pierwszą warstwę na zaprawie cementowej, a nie ciepłej?",
      a: ["Bo ciepła zaprawa jest droższa", "Bo wyrównuje nierówności korony i łączy się z izolacją poziomą", "Bo pierwszą warstwę nie obowiązuje WT2021"],
      correct: 1,
      explain: "<b>Pierwsza spoina wyrównuje fundament.</b> Zaprawa cementowa 1–2 cm dobrze trzyma poziom, a papa pod nią blokuje wilgoć z gruntu. Warstwy wyżej mogą już iść na zaprawie ciepłej lub piance."
    }]
  },

  /* 5 ------------------------------------------------------------------ */
  {
    id: "murowanie-parter",
    title: "Murowanie parteru i przewiązanie",
    lead: "Pustaki murujesz warstwa po warstwie, ze spoinami przesuniętymi, w narożnikach i przy otworach z dokładnie dociętymi elementami. Kluczowa decyzja to zaprawa ciepła czy pianka.",
    time: "3–4 tyg.", team: "2 murarzy + pomocnik",
    facts: [["Wysokość murów", "ok. 2,7 m (11 warstw)", "ruler"], ["Spoina pionowa", "bez zaprawy (na pióro-wpust)", "layers"], ["Temperatura", "zwykle min. ok. +5°C", "clock"]],
    body: `
      <p>Ściany parteru osiągają <strong>ok. 2,7 m</strong> do spodu stropu (11 warstw po 24 cm). Pustaki P+W mają <strong>pióro i wpust</strong>, więc spoin pionowych się nie wypełnia. Układasz je na zaprawie ciepłej (ok. 1 cm) albo na piance PUR po szlifowanych bloczkach.</p>
      <p><strong>Przewiązanie</strong>: spoiny pionowe w kolejnych warstwach muszą być przesunięte min. o ok. 10 cm (zwykle 1/4–1/2 długości pustaka). Przy narożnikach i ścianach nośnych sąsiednie ściany „zazębiasz” naprzemiennie, a gdzie się nie da, stosujesz kotwy lub siatkę (według projektu). <strong>Otwory</strong> okienne i drzwiowe wymiarujesz z projektu, z tolerancją kilku mm. Bruzdy pod instalacje wykuwasz tylko w miejscach dozwolonych przez konstruktora.</p>
      <button class="xref" data-section="mur"><svg class="ico"><use href="#i-layers"/></svg>zobacz w przekroju</button>`,
    cost: { min: 12000, max: 17000, note: "robocizna murowania parteru, zaprawa ciepła, narzędzia" },
    decision: {
      question: "Zaprawa ciepła czy pianka?",
      intro: "Koszt opcji to dopłata lub oszczędność względem murowania na zaprawie ciepłej (robocizna + materiał).",
      chosen: "zaprawa",
      options: [
        { id: "zaprawa", name: "Zaprawa ciepła (spoina ok. 1 cm)",
          cost: { min: 0, max: 0 }, time: "ok. 3–4 tyg.", note: "ok. 100 zł/m² roboc. + 35 zł/m² zaprawa",
          pros: ["Wybacza drobne różnice wysokości pustaków", "Mniej wrażliwa na wiatr i temperaturę", "Znana wszystkim murarzom"],
          cons: ["Wolniejsza, więcej wody na ścianie", "Spoina grubsza, minimalnie większe straty ciepła"],
          why: "Najbezpieczniejszy wybór przy ekipie, której nie znasz, i przy zmiennej pogodzie. Wolniejsza o kilka dni, ale odporna na błędy." },
        { id: "pianka", name: "Pianka murarska (spoina ok. 1–2 mm), pustaki szlifowane",
          cost: { min: -1500, max: 1500 }, time: "o 3–5 dni szybciej", note: "bloczki droższe o ok. 8%, robocizna tańsza",
          pros: ["Szybsza, sucha budowa", "Mniejsze mostki cieplne w spoinach", "Mniej wody w murze"],
          cons: ["Wymaga bardzo równej pierwszej warstwy", "Ograniczenia pogodowe, wiatr i temperatura", "Błąd poprawiasz trudniej, bo piana szybko wiąże"],
          why: "Ma sens przy doświadczonej ekipie i równej pierwszej warstwie. Koszt całkowity jest podobny, więc decyduje tempo i umiejętności murarzy." },
        { id: "cementowa", name: "Tradycyjna zaprawa cementowo-wapienna",
          cost: { min: -2500, max: -1500 }, time: "podobnie jak zaprawa ciepła", note: "nie polecamy w ścianie zewnętrznej",
          pros: ["Najtańszy materiał", "Znana technologia"],
          cons: ["Zimne mostki w spoinach, gorsza izolacyjność ściany", "Grube spoiny nie pasują do systemów P+W", "Mniejsza ciepłochronność niż zaprawa ciepła"],
          why: "W ścianach jednowarstwowych i dwuwarstwowych z pustaków ceramicznych daje wyraźnie wyższą stratę ciepła. Oszczędność jest pozorna." }
      ]
    },
    tips: [
      "<b>Murowanie warstwa po warstwie z żyłką.</b> Najpierw narożniki 3–4 warstwy w górę, potem napinasz sznur i dokładasz środek. Poziomicą sprawdzasz co 2–3 warstwy.",
      "<b>Przerwy w murowaniu kończ „zębami”, nie prostą krawędzią.</b> Zazębienie o połowę pustaka daje przewiązanie, gdy ekipa wróci po przerwie.",
      "<b>Pustaki tnij piłą stołową z wodą lub tarczową.</b> Odpady 3–5% to norma; w pasach nad kolankową dochodzi więcej.",
      "<b>Zimą i na mrozie nie murujesz.</b> Spoina nie wiąże. Zaprawy i pianki mają dolne granice temperatury w karcie wyrobu: sprawdź i przestrzegaj."
    ],
    mistakes: [
      "<b>Pionowe spoiny w jednej linii.</b> Pęknięcia ściany ciągną się przez całą wysokość. Przesunięcie spoin to fundament wytrzymałości muru.",
      "<b>Mur wokół otworów bez nadproży lub z cięciem pod okno za duże.</b> Wymiary otworów bierzesz z projektu okien (etap 07), nie z głowy murarza.",
      "<b>Bruzdy po całej ścianie nośnej.</b> Płytkie bruzdy poziome i głębokie pionowe osłabiają mur; tylko zgodnie z projektem."
    ],
    formal: [
      ["Odbiór kierownika po murach parteru", "kierownik budowy: pion, poziom, przewiązanie, otwory, zapis w dzienniku"],
      ["Karta wyrobu: zaprawa lub pianka", "z hurtowni; temperatura aplikacji, czas wiązania"]
    ],
    checklist: [
      "Spoiny pionowe przesunięte min. ok. 10 cm w każdej warstwie",
      "Narożniki i ściany zazębione zgodnie z projektem",
      "Otwory okienne zgodne z projektem z tolerancją kilku mm",
      "Pion ścian sprawdzony poziomicą 2 m (bez odchyłek ponad ok. 1 cm na wysokość)",
      "Mury osłonięte od deszczu na noc (folia lub koronki)"
    ],
    quiz: [
      {
        q: "Dlaczego spoiny pionowe w kolejnych warstwach muszą być przesunięte?",
        a: ["Żeby ściana wyglądała ładniej", "Bo inaczej ściana pęka wzdłuż pionowej linii spoin", "Bo wymaga tego producent zaprawy"],
        correct: 1,
        explain: "<b>Przewiązanie rozkłada obciążenia.</b> Pionowa linia spoin jest słabym punktem: pęka pod wpływem nierównomiernego osiadania lub skurczu. Przesunięcie o ok. 10 cm lub więcej zapobiega pęknięciom."
      },
      {
        q: "Murowanie na piance wymaga przede wszystkim…",
        a: ["Idealnie równej pierwszej warstwy i szlifowanych pustaków", "Większej ilości wody w murze", "Grubszej spoiny niż zaprawa ciepła"],
        correct: 0,
        explain: "<b>Spoina 1–2 mm nie wyrówna błędu.</b> Pianka wymaga bardzo równej pierwszej warstwy i pustaków rektyfikowanych. Inaczej koryguje się to co warstwę, a o oszczędności czasu zapominasz."
      }
    ]
  },

  /* 6 ------------------------------------------------------------------ */
  {
    id: "sciany-dzialowe",
    title: "Ściany nośne wewnętrzne i działowe",
    lead: "Ściany nośne trzymają strop i murujesz je razem z zewnętrznymi. Działowe (11,5 cm) murujesz później, ale zanim wejdą instalacje, i tylko tam, gdzie pozwala projekt.",
    time: "2–3 tyg.", team: "2 murarzy",
    facts: [["Nośne wewn.", "ok. 50 m²", "layers"], ["Działowe 11,5 cm", "ok. 110 m²", "layers"]],
    body: `
      <p><strong>Ściany nośne wewnętrzne</strong> (np. grubość 24–25 cm wzdłuż osi domu i między domem a garażem) murujesz równolegle z zewnętrznymi i związujesz z nimi. Dzięki temu strop opiera się na pełnym schemacie podpór zgodnym z projektem konstrukcyjnym.</p>
      <p><strong>Ścianki działowe 11,5 cm</strong> (ceramika, silikat lub beton komórkowy) murujesz zwykle po wylaniu stropu: na parterze i poddaszu, z dylatacją od stropu i ścian nośnych (taśma, pianka lub pas elastyczny). Pamiętaj o <strong>wzmocnieniu pod ciężkie przedmioty</strong> (umywalka, szafki, TV), np. łaty, pustaki wypełnione zaprawą lub płyta OSB w zabudowie.</p>`,
    cost: { min: 16000, max: 24000, note: "nośne wewn. (robocizna) + działowe 11,5 cm (materiał + robocizna)" },
    tips: [
      "<b>Wydrukuj plan ścian z wymiarami.</b> Ścianki działowe w złym miejscu zmieniają kuchnię i łazienkę: tańsze jest przesunięcie ściany niż rozbiórka.",
      "<b>Ściany działowe wiążesz co 2–3 rzędy z nośną kotwami lub siatką.</b> Bez tego pękają przy łączeniu.",
      "<b>Dylatuj ściankę od stropu.</b> Pas 1–2 cm elastycznej masy lub wełny na górze zapobiega pęknięciom po ugięciu stropu.",
      "<b>Bruzdy instalacyjne tnij bruzdownicą z odsysaniem pyłu.</b> Płytko i prosto; tylko pionowo lub poziomo, nigdy po skosie."
    ],
    mistakes: [
      "<b>Murowanie działowych przed wylaniem stropu.</b> Strop ugina się pod ciężarem, a ścianka pęka w narożniku.",
      "<b>Za ciężka ścianka na stropie bez projektu.</b> Ścianki działowe powyżej określonego ciężaru wymagają sprawdzenia konstruktora.",
      "<b>Brak wzmocnienia pod wiszące meble.</b> Pustak 11,5 cm nie trzyma szafki kuchennej na kołkach rozporowych."
    ],
    checklist: [
      "Plan ścian zgodny z projektem i aranżacją wnętrz",
      "Nośne wewnętrzne związane z zewnętrznymi",
      "Ścianki działowe z dylatacją od stropu",
      "Miejsca pod ciężkie przedmioty oznaczone i wzmocnione"
    ],
    quiz: [{
      q: "Kiedy najlepiej murować ścianki działowe 11,5 cm na parterze?",
      a: ["Przed stropem, żeby ekipa wcześniej skończyła", "Po wylaniu stropu i jego stwardnieniu, z dylatacją od góry", "Dopiero po tynkach"],
      correct: 1,
      explain: "<b>Strop pracuje po zalaniu.</b> Ścianka wymurowana wcześniej pęka przy ugięciu. Dylatacja od stropu (pas elastyczny 1–2 cm) pozwala stropowi pracować, a ściance nie pękać."
    }]
  },

  /* 7 ------------------------------------------------------------------ */
  {
    id: "nadproza",
    title: "Nadproża nad oknami i drzwiami",
    lead: "Nadproże przenosi obciążenie ponad otworem. Dobiera się je do rozpiętości i obciążenia z projektu, a nie na oko.",
    time: "1–2 tyg. (równolegle z murowaniem)", team: "murarz, czasem zbrojarz",
    facts: [["Oparcie", "min. ok. 25 cm (wg producenta)", "ruler"], ["Liczba otworów", "ok. 30", "file"]],
    body: `
      <p>Dom ma ok. 25 otworów w ścianach zewnętrznych i kilkanaście wewnętrznych. Nad każdym wstawiasz <strong>nadproże prefabrykowane</strong> (belka ceramiczna z betonem lub L19 do uzupełniania) albo <strong>monolityczne</strong> (kształtka U, zbrojenie i beton). Rodzaj, długość i oparcie podaje projekt. Standardowo <strong>nadproże opiera się na ścianie min. ok. 25 cm z każdej strony</strong> (sprawdź kartę producenta).</p>
      <p>Nad oknami w ścianie zewnętrznej nadproże musi być <strong>ocieplone</strong>, żeby nie tworzyć mostka. Z pustakami ceramicznymi stosujesz system dedykowany: belki z elementem izolacyjnym lub kształtki U z wkładem. Przy dużych szerokościach (np. brama garażowa 5 m) potrzebujesz belki zbrojonej lub stalowej według konstruktora.</p>`,
    cost: { min: 6000, max: 10000, note: "belki prefabrykowane, L19, podpory, robocizna" },
    decision: {
      question: "Nadproża prefabrykowane czy monolityczne?",
      intro: "Koszt opcji to dopłata względem nadproży prefabrykowanych (belki + L19).",
      chosen: "prefabrykowane",
      options: [
        { id: "prefabrykowane", name: "Prefabrykowane (belki + L19)",
          cost: { min: 0, max: 0 }, time: "montaż 1 dzień na piętro", note: "szybkie, gotowe do montażu",
          pros: ["Szybki montaż bez szalunków", "Powtarzalna jakość, deklaracja wyrobu", "Mniej wody na budowie"],
          cons: ["Standardowe długości, trudno przy nietypowym otworze", "Ciężkie belki wymagają 2 osób lub żurawia"],
          why: "Najpewniejszy i szybki wariant przy standardowych otworach. Pasuje do systemu ceramicznego i nie wymaga szalunków." },
        { id: "monolityczne", name: "Monolityczne (kształtka U, zbrojenie, beton)",
          cost: { min: 1000, max: 3500 }, time: "+2–3 dni", note: "nietypowe rozpiętości, narożniki",
          pros: ["Dopasowane do każdej szerokości i obciążenia", "Wygodne przy otworach narożnych, szczytach, łukach"],
          cons: ["Wymaga szalunku i zbrojenia", "Wolniejsze, wymaga wiązania betonu", "Większa wrażliwość na błędy ekipy"],
          why: "Ma sens przy otworach nietypowych lub dużych, dla których nie ma prefabrykatu. W innych miejscach przegrywa z prefabrykatem czasem i ryzykiem." }
      ]
    },
    tips: [
      "<b>Nadproże bierz z projektu, nie z magazynu.</b> Typ, długość i zbrojenie podaje konstruktor; hurtownia dobiera tylko pod tabelkę wyrobu.",
      "<b>Ułóż nadproża na całej szerokości muru.</b> Belka z elementem izolacyjnym nie wystaje na zewnątrz, więc nie tworzy mostka.",
      "<b>Stemple pod nadproża monolityczne zostaw min. ok. 7–14 dni.</b> Zdejmuj dopiero po ocenie kierownika budowy.",
      "<b>Okna rozmieść w osi pustaków.</b> Otwory o szerokości wielokrotności modułu ograniczają docinki."
    ],
    mistakes: [
      "<b>Oparcie nadproża poniżej 25 cm.</b> Mur nad otworem „wisi” na krawędzi i pęka w narożniku okna.",
      "<b>Zamiana nadproża na „podobne”.</b> Różna nośność i wymiary skutkują ugięciem; wszelkie zmiany kierownik uzgadnia z konstruktorem.",
      "<b>Brak ocieplenia nadproża zewn.</b> Mostek cieplny nad oknem to kondensat i pleśń w narożniku okna."
    ],
    formal: [
      ["Karty wyrobu nadproży", "dostawca; długość, oparcie, nośność; przechowuj w teczce budowy"]
    ],
    checklist: [
      "Nadproża zgodne z zestawieniem w projekcie",
      "Oparcie na ścianie min. ok. 25 cm z każdej strony",
      "Nadproża zewn. z elementem izolacyjnym",
      "Stemple zdjęte po zgodzie kierownika budowy"
    ],
    quiz: [{
      q: "Co to jest oparcie nadproża i dlaczego jest ważne?",
      a: ["Długość belki wystającej poza otwór; przenosi obciążenie na mur bez pękania", "Grubość warstwy zaprawy pod belką", "Odległość nadproża od stropu"],
      correct: 0,
      explain: "<b>Oparcie to długość zakotwienia w ścianie.</b> Zwykle min. ok. 25 cm z każdej strony (sprawdź kartę producenta). Za krótkie powoduje pęknięcia i osiadanie."
    }]
  },

  /* 8 ------------------------------------------------------------------ */
  {
    id: "duze-otwory",
    title: "Duże przeszklenia: podciągi i słupy",
    lead: "Salon z oknami od podłogi i taras zadaszony wymagają podciągów. Ich przekrój i słupy wyznacza wyłącznie konstruktor.",
    time: "1–2 tyg.", team: "murarz, zbrojarz lub ślusarz, konstruktor",
    body: `
      <p>Przy szerokim przeszkleniu (np. okna tarasowe 4–5 m w salonie) ściana nie może przenosić obciążenia górą. Konstruktor umieszcza <strong>podciąg żelbetowy w grubości stropu</strong> albo <strong>belkę stalową (IPE/HEB) z oparciem na słupach</strong>. Słupy żelbetowe lub stalowe mieszczą się w ścianie albo na jej skraju (np. filar przy kominku).</p>
      <p>To miejsce o największych ugięciach, więc <strong>zbrojenie i wymiary muszą zgadzać się z projektem</strong>. Kierownik odbiera zbrojenie przed betonowaniem, a przy stali sprawdza spoiny, klasę stali i zabezpieczenie ogniowe, jeśli wymagane. Montaż okien w takim otworze omawiasz z dostawcą (etap 07).</p>`,
    cost: { min: 7000, max: 14000, note: "podciągi, słupy, zbrojenie, szalunki lub belki stalowe, robocizna" },
    decision: {
      question: "Podciąg żelbetowy czy stalowy?",
      intro: "Koszt opcji to dopłata względem rozwiązania żelbetowego w stropie, zgodnego z typowym projektem.",
      chosen: "zelbet",
      options: [
        { id: "zelbet", name: "Podciąg żelbetowy w grubości stropu",
          cost: { min: 0, max: 0 }, time: "razem ze stropem", note: "ukryty, zwykle w projekcie",
          pros: ["Nie wystaje pod stropem", "Ognioodporny bez dodatkowej obudowy", "Zbrojarz i betoniarz już są na budowie"],
          cons: ["Wymaga zbrojenia i szalunków", "Dodatkowy ciężar"],
          why: "Typowe rozwiązanie w domu z monolitycznym lub filigranowym stropem. Nie psuje wnętrza i jest tańsze od stali przy dłuższych rozpiętościach." },
        { id: "stal", name: "Belka stalowa (IPE/HEB) ze słupem",
          cost: { min: 1000, max: 5000 }, time: "montaż 1 dzień", note: "smuklejsza, szybki montaż",
          pros: ["Mniejszy przekrój niż żelbet", "Szybki montaż bez szalunków", "Dobra przy bardzo dużych rozpiętościach"],
          cons: ["Wymaga zabezpieczenia antykorozyjnego i ogniowego", "Droższa przy małych rozpiętościach", "Mostek termiczny, trzeba ocieplić"],
          why: "Ma sens, gdy konstruktor dopuszcza ją w projekcie i potrzebna jest smukłość. W naszym domu to rozwiązanie na życzenie projektanta." }
      ]
    },
    tips: [
      "<b>Wymiary tylko z projektu konstrukcyjnego.</b> Na oko nikt nie zgadnie przekroju podciągu: ugięcie i pęknięcia wyjdą po roku.",
      "<b>Odbiór zbrojenia fotografujesz.</b> Zdjęcia strzemion, otulin i podpór to tani dowód, gdy beton już zakryje błędy.",
      "<b>Zaplanuj miejsce pod rolety i prowadnice okien.</b> Nadproże musi mieć miejsce na skrzynkę lub rolety zewn.",
      "<b>Słup w ścianie ocieplaj tak samo jak mur.</b> Zimny słup wypuszcza ciepło i kondensuje wilgoć."
    ],
    mistakes: [
      "<b>Zmniejszenie podciągu, bo „przeszkadza w salonie”.</b> To najprostszy sposób na pęknięty strop i krzywe okno.",
      "<b>Betonowanie bez odbioru zbrojenia.</b> Po zalaniu nie sprawdzisz niczego.",
      "<b>Słup bez podstawy w stropie lub fundamencie.</b> Obciążenie punktowe musi trafić w konstrukcję, nie w pustak."
    ],
    checklist: [
      "Podciągi i słupy zgodne z projektem konstrukcyjnym",
      "Zbrojenie odebrane przez kierownika przed betonowaniem",
      "Stal zabezpieczona (antykorozja, ogień), jeśli wymaga projekt",
      "Wymiary otworu zgodne z oknami z etapu 07"
    ],
    quiz: [{
      q: "Kto określa wymiary podciągu nad dużym przeszkleniem?",
      a: ["Murarz na podstawie doświadczenia", "Konstruktor w projekcie konstrukcyjnym", "Dostawca okien"],
      correct: 1,
      explain: "<b>To decyzja konstrukcyjna.</b> Przekrój i zbrojenie wynikają z obliczeń obciążeń i rozpiętości. Ekipa wykonuje, kierownik odbiera, ale nie wymiaruje."
    }]
  },

  /* 9 ------------------------------------------------------------------ */
  {
    id: "wieniec-stropu",
    title: "Wieniec stropowy",
    lead: "Wieniec opasuje dom na wysokości stropu i spina ściany jak obręcz. Bez niego ściany rozjadą się pod obciążeniem.",
    time: "2–4 dni", team: "zbrojarz, betoniarz, kierownik",
    facts: [["Zbrojenie", "min. 4Ø12 (wg projektu)", "rebar"], ["Beton", "wg projektu, zwykle C20/25", "layers"], ["Długość", "ok. 70 mb", "ruler"]],
    body: `
      <p>Wieniec to belka żelbetowa o przekroju ok. 25 × 25 cm (lub grubości stropu), ułożona w murze lub na nim. Obejmuje <strong>wszystkie ściany zewnętrzne i nośne wewnętrzne</strong> w poziomie stropu. Dom + garaż ma ok. 70 mb wieńca. Projekt podaje zbrojenie (min. <strong>4 pręty Ø12</strong>, strzemiona Ø6 co ok. 25–30 cm), klasę betonu i miejsca łączenia z podciągami.</p>
      <p>Wieniec w ścianie zewnętrznej musi być <strong>ocieplony od zewnątrz</strong>: kształtka wieńcowa z wkładem ceramicznym lub styropianem (XPS ok. 5 cm), żeby nie tworzyć mostka cieplnego. Strop opiera się na wieńcu i ścianach nośnych, a w narożnikach zbrojenie zakładasz zgodnie z rysunkiem konstrukcyjnym.</p>`,
    cost: { min: 8000, max: 12000, note: "stal, beton C20/25, kształtki, szalunki, robocizna" },
    diagram: `<svg viewBox="0 0 360 190" role="img" aria-label="Przekrój ściany z wieńcem i stropem nad parterem">
      <rect x="60" y="100" width="70" height="80" style="fill:var(--plaster);fill-opacity:.7;stroke:var(--ink-2)" stroke-width="1.4"/>
      <text x="70" y="145">mur 25 cm</text>
      <rect x="60" y="68" width="70" height="30" style="fill:var(--ink-3);fill-opacity:.35;stroke:var(--ink-2)" stroke-width="1.4"/>
      <text x="64" y="87">wieniec</text>
      <rect x="130" y="68" width="190" height="30" style="fill:var(--ink-3);fill-opacity:.22;stroke:var(--ink-2)" stroke-width="1.4"/>
      <text x="190" y="87">strop 20 cm</text>
      <rect x="40" y="68" width="20" height="30" style="fill:var(--lawn);fill-opacity:.35;stroke:var(--ink-3)" stroke-width="1.2"/>
      <rect x="40" y="100" width="20" height="80" style="fill:var(--lawn);fill-opacity:.2;stroke:var(--ink-3)" stroke-width="1.2"/>
      <text x="8" y="60">ocieplenie / XPS 5 cm</text>
      <path d="M70 74h50M70 92h50" style="stroke:var(--ink)" stroke-width="2" stroke-dasharray="4 3"/>
      <text x="130" y="140">4Ø12 + strzemiona Ø6</text>
    </svg>`,
    tips: [
      "<b>Zbrojenie odbiera kierownik, nie murarz.</b> Sprawdza średnicę, liczbę prętów, rozstaw strzemion, zakłady i otulinę (ok. 2–3 cm).",
      "<b>Beton z betoniarni z pompą.</b> Wieniec i strop zlewasz jednym ciągiem w ciągu dnia. Zamawiasz orientacyjnie 4–5 m³ na wieniec i 18–25 m³ na strop (dokładnie wg projektu).",
      "<b>Pielęgnacja betonu przez ok. 7 dni.</b> Polewanie wodą i osłona folią przy upale i wietrze chroni przed pęknięciami skurczowymi.",
      "<b>Wieniec pod murłatę robisz osobno (krok 12).</b> To inny poziom i inny dzień betonowania."
    ],
    mistakes: [
      "<b>Wieniec bez ocieplenia.</b> Mostek cieplny na całym obwodzie i kondensat na ścianie.",
      "<b>Mniej prętów „bo wystarczy”.</b> Zbrojenie wieńca to element bezpieczeństwa konstrukcji.",
      "<b>Betonowanie w upale bez pielęgnacji.</b> Spękany wieniec trzeba będzie później naprawiać."
    ],
    formal: [
      ["Odbiór zbrojenia wieńca i stropu", "kierownik budowy przed betonowaniem; wpis w dzienniku; inspektor nadzoru, jeśli jest"],
      ["Dokument dostawy betonu", "klasa, ilość, godzina; zachowaj do teczki budowy"]
    ],
    checklist: [
      "Zbrojenie zgodne z projektem (średnice, rozstaw, zakłady)",
      "Otulina i dystanse zachowane",
      "Wieniec ocieplony od strony zewn.",
      "Pielęgnacja betonu zaplanowana na min. 7 dni"
    ],
    quiz: [{
      q: "Dlaczego wieniec zewnętrzny trzeba ocieplić?",
      a: ["Bo beton jest drogi", "Żeby uniknąć mostka cieplnego i kondensacji na ścianie", "Bo tak wymaga każda firma betoniarska"],
      correct: 1,
      explain: "<b>Beton przewodzi ciepło prawie jak stal.</b> Nieocieplony wieniec jest zimnym pasem na obwodzie domu: na jego wysokości pojawia się wilgoć i pleśń."
    }]
  },

  /* 10 ----------------------------------------------------------------- */
  {
    id: "strop",
    title: "Strop nad parterem",
    lead: "Strop odcina parter od poddasza i usztywnia dom. Dla naszego domu rekomendujemy strop filigranowy: równy, szybki i gotowy pod tynk.",
    time: "montaż 1–2 dni + dojrzewanie 3–4 tyg.", team: "ekipa montażowa, betoniarz, zbrojarz",
    facts: [["Powierzchnia", "ok. 125 m²", "layers"], ["Grubość", "ok. 20–24 cm", "ruler"], ["Zdjęcie stempli", "orient. po 14–21 dniach", "clock"]],
    body: `
      <p>Strop nad parterem o powierzchni <strong>ok. 125 m²</strong> (bryła 13 × 9,5 m) ma rozpiętości do ok. 5–6 m w salonie. Projekt dobiera typ, grubość i zbrojenie. Są trzy główne systemy: <strong>filigran</strong> (prefabrykowana płyta 6 cm + beton uzupełniający), <strong>monolit</strong> (szalunek i zbrojenie na budowie) oraz <strong>Teriva</strong> (belki + pustaki). Wszystkie wymagają wieńca, podpór i betonu z pompy.</p>
      <p>Po zabetonowaniu <strong>stemple stoją orientacyjnie 14–21 dni</strong> (decyzja kierownika), a pełne obciążenie stropu (ścianki działowe, wylewki) dopiero po ok. 28 dniach. Do czasu rozszalowania nie składuj na nim materiałów i nie murujesz kolankowej. Pamiętaj o <strong>otworze schodowym</strong> i przepustach (kominek, wentylacja, kanalizacja), które zaznaczasz przed betonowaniem.</p>`,
    cost: { min: 34000, max: 46000, note: "strop filigranowy ok. 125 m², beton z pompą, stal, stemple, montaż" },
    decision: {
      question: "Jaki strop nad parterem?",
      intro: "Koszt opcji to dopłata lub oszczędność względem stropu filigranowego (ok. 270–360 zł/m² z montażem i betonem).",
      chosen: "filigran",
      options: [
        { id: "filigran", name: "Filigran (płyta prefabrykowana + nadbeton)",
          cost: { min: 0, max: 0 }, time: "montaż 1–2 dni", note: "szybki, równy spód",
          pros: ["Gładki spód gotowy pod gładź lub tynk", "Szybki montaż bez pełnego szalunku", "Dobrze znosi rozpiętości 5–6 m"],
          cons: ["Wymaga dźwigu lub HDS i dokładnych rysunków", "Trudniej poprawiać otwory po fakcie"],
          why: "Przy salonie o rozpiętości 5–6 m i dużej liczbie przepustów to najlepsza równowaga ceny, tempa i jakości spodu stropu." },
        { id: "monolit", name: "Monolit (szalunek, zbrojenie i beton na budowie)",
          cost: { min: 2000, max: 9000 }, time: "7–10 dni robót", note: "najbardziej elastyczny",
          pros: ["Dowolny kształt, otwory i podciągi", "Największa swoboda wobec zmian na budowie"],
          cons: ["Pracochłonny, duży szalunek i stemple", "Dłużej na budowie, więcej pracy zbrojarza"],
          why: "Ma sens przy nietypowej bryle, balkonach, dużych wspornikach. W prostym planie przegrywa z filigranem czasem i kosztem." },
        { id: "teriva", name: "Gęstożebrowy Teriva (belki + pustaki)",
          cost: { min: -6000, max: 0 }, time: "montaż 2–3 dni", note: "tańszy, mniej równy spód",
          pros: ["Najniższa cena, prosta technologia", "Lekki, montaż bez dźwigu"],
          cons: ["Rozpiętości dużo ograniczone: duże sale wymagają podciągów", "Spód z pustaków wymaga tynku", "Słabsza akustyka"],
          why: "Dobry przy małych rozpiętościach, do ok. 4–5 m. Nasz salon wymusiłby dodatkowe podciągi, co znosi oszczędność." }
      ]
    },
    tips: [
      "<b>Zamów rysunki warsztatowe filigranu.</b> Producent robi je na podstawie projektu: sprawdź otwory (schody, kominek, wentylacja) i przepusty przed zamówieniem.",
      "<b>Zaplanuj przepusty na instalacje przed zalaniem.</b> Rury kanalizacji, wentylacji i rekuperacji wstawiasz wcześniej; wiercenie po fakcie to ryzyko.",
      "<b>Betonuj w pogodny dzień, nie przy mrozie.</b> Poniżej +5°C potrzebne są dodatki i osłony. Latem polewaj beton przez min. 7 dni.",
      "<b>Strop zostaw w spokoju 3–4 tyg.</b> Murowanie kolankowej tuż po zalaniu obciąża strop zanim beton osiągnie wytrzymałość."
    ],
    mistakes: [
      "<b>Zdjęcie stempli za wcześnie.</b> Ugięcie stropu, rysy i pęknięcia wychodzą po miesiącach.",
      "<b>Brak otworu schodowego w rysunkach montażowych.</b> Wycinanie otworu po zalaniu osłabia strop i kosztuje fortunę.",
      "<b>Składowanie palet pustaków na świeżym stropie.</b> Obciążenie punktowe może przekroczyć nośność młodego betonu."
    ],
    formal: [
      ["Odbiór zbrojenia i podpór stropu", "kierownik budowy (i inspektor nadzoru, jeśli jest); wpis w dzienniku"],
      ["Dokumenty betonu i prefabrykatów", "klasa betonu, deklaracja wyrobu, dostawa; zachowaj do teczki"],
      ["Zdjęcie stempli", "decyzja kierownika budowy po odpowiednim czasie dojrzewania; sprawdź u kierownika budowy"]
    ],
    checklist: [
      "Typ i grubość stropu zgodne z projektem",
      "Otwór schodowy i przepusty uwzględnione w rysunkach",
      "Zbrojenie i podpory odebrane przed betonowaniem",
      "Beton pielęgnowany ok. 7 dni",
      "Stemple zdjęte na polecenie kierownika"
    ],
    quiz: [
      {
        q: "Strop wylano w poniedziałek. Kiedy zaczynasz murować ściankę kolankową na nim?",
        a: ["We wtorek, żeby nie tracić czasu", "Po min. 14–21 dniach, gdy kierownik zezwoli", "Dopiero po tygodniu, bo beton jest już gotowy"],
        correct: 1,
        explain: "<b>Beton potrzebuje czasu.</b> Pełną wytrzymałość osiąga po ok. 28 dniach. Kierownik budowy decyduje o rozszalowaniu i obciążeniu (orientacyjnie 14–21 dni)."
      },
      {
        q: "Dlaczego w stropie filigranowym przepusty wentylacji i kanalizacji trzeba zaplanować przed zalaniem?",
        a: ["Bo producent tak wymaga", "Bo wiercenie po fakcie osłabia strop i bywa niedopuszczalne", "Bo przepisy zabraniają dziur"],
        correct: 1,
        explain: "<b>Strop pracuje jako całość.</b> Dobrze zaplanowane przepusty uwzględnia konstruktor. Dziury po zalaniu mogą przeciąć zbrojenie i zmniejszyć nośność."
      }
    ]
  },

  /* 11 ----------------------------------------------------------------- */
  {
    id: "schody-otwor",
    title: "Otwór schodowy i schody: co ustalić przed stropem",
    lead: "Schody wybierzesz dopiero w etapie 13, ale otwór w stropie i ewentualne wypusty zbrojenia musisz zaplanować teraz.",
    time: "planowanie 1 dzień", team: "projektant, kierownik",
    body: `
      <p>Dom z poddaszem użytkowym ma jedne schody, najczęściej <strong>jednobiegowe lub dwubiegowe z podestem</strong> w pobliżu hallu. Otwór w stropie to zwykle <strong>ok. 1,0–1,2 m × 2,8–3,2 m</strong> (wymiary podaje projekt schodów, bo zależą od kształtu i wysokości kondygnacji).</p>
      <p>Zapowiedź dwóch wariantów: <strong>schody żelbetowe monolityczne</strong> (zbrojone, betonowane razem ze stropem albo osobno z wypustami) oraz <strong>schody drewniane lub stalowo-drewniane na konstrukcji</strong> (montowane po tynkach). Decyzję i koszt omawiamy w etapie 13; tutaj ustalasz tylko wymiar otworu i miejsce oparcia.</p>`,
    tips: [
      "<b>Zdecyduj o typie schodów przed zamówieniem stropu.</b> Żelbetowe wymagają zbrojenia z wypustami, drewniane tylko otworu.",
      "<b>Zaplanuj wysokość stopni.</b> 17 cm × 16–17 stopni przy wysokości kondygnacji 2,85 m ma wpływ na długość otworu.",
      "<b>Zostaw miejsce na poręcz i odsunięcie od ściany.</b> Otwór liczysz razem z wykończeniem."
    ],
    mistakes: [
      "<b>Otwór „na oko”.</b> Wycinanie po zalaniu nie jest możliwe bez przecięcia zbrojenia.",
      "<b>Za wąski otwór.</b> Kłopot z przeniesieniem mebli i ze spełnieniem wymogów komfortu."
    ],
    checklist: [
      "Wymiary otworu schodowego z projektu schodów",
      "Typ schodów wstępnie wybrany (żelbetowe lub drewniane)",
      "Wypusty zbrojenia w rysunkach stropu, jeśli schody żelbetowe"
    ],
    quiz: [{
      q: "Dlaczego typ schodów trzeba przemyśleć jeszcze przed zalaniem stropu?",
      a: ["Bo wpływa na wymiar otworu i wypusty zbrojenia", "Bo kierownik tego wymaga", "Bo schody montuje się razem z oknami"],
      correct: 0,
      explain: "<b>Strop i schody tworzą jeden układ.</b> Schody żelbetowe łączą się ze stropem wypustami zbrojenia. Zmiana decyzji później oznacza kucie betonu lub przeróbki."
    }]
  },

  /* 12 ----------------------------------------------------------------- */
  {
    id: "kolankowa-szczyty",
    title: "Ścianka kolankowa, szczyty i wieniec pod dach",
    lead: "Na stropie murujesz ściankę kolankową wysokości 1 m i szczyty o kącie 40°, a całość wieńczysz wieńcem pod murłatę.",
    time: "2–3 tyg.", team: "2 murarzy, zbrojarz, dekarz (kotwy)",
    facts: [["Kolankowa", "1,0 m", "ruler"], ["Szczyty", "ok. 47 m²", "layers"], ["Kąt dachu", "40°", "ruler"]],
    body: `
      <p><strong>Ścianka kolankowa</strong> (1 m od stropu) daje użytkową wysokość poddasza przy skosach. Murujesz ją na wieńcu stropowym, a na górze układasz <strong>wieniec pod murłatę</strong> (zbrojenie wg projektu) z kotwami lub wypustami na przytwierdzenie murłaty. Szczyty wyprowadzasz <strong>pod kątem 40°</strong> z pustaków docinanych na skos, z <strong>wieńcami szczytowymi</strong> idącymi wzdłuż krawędzi.</p>
      <p>Garaż w bryle ma dach dwuspadowy prostopadły do bryły głównej, więc jego szczyt murujesz osobno. W miejscach okien połaciowych i wywiewek tworzysz otwory zgodnie z projektem dachu. <strong>Kotwy murłaty</strong> ustawiasz po rysunkach więźby (etap 06).</p>`,
    cost: { min: 19000, max: 28000, note: "mury kolankowej i szczytów (ok. 80 m² netto), wieniec pod murłatę i wieńce szczytowe" },
    tips: [
      "<b>Wykonaj szablon kąta 40°.</b> Cięcie pustaków na skos z szablonem ogranicza odpady i błędy narożników.",
      "<b>Kotwy murłaty z projektu.</b> Zamów dekarza do uzgodnienia rozstawu przed zalaniem wieńca.",
      "<b>Wieniec szczytowy zbrojony zgodnie z projektem.</b> Przy wietrze i śniegu to element pracujący na zginanie.",
      "<b>Osłoń mury przed deszczem.</b> Na szczytach woda spływa wzdłuż ściany; folia lub koronki chronią ją do czasu dachu."
    ],
    mistakes: [
      "<b>Murowanie szczytów bez wieńców szczytowych.</b> Wysoka, smukła ściana może się wychylić pod wiatrem.",
      "<b>Brak kotew murłaty.</b> Dach unosi się przy wichurze, jeśli murłata nie jest zakotwiona w wieńcu.",
      "<b>Rozbieżność z dachem.</b> Różnica poziomu wieńca kolankowego i więźby oznacza skuwanie."
    ],
    formal: [
      ["Odbiór kierownika po wieńcu pod murłatę", "zbrojenie, kotwy, poziom; wpis w dzienniku"]
    ],
    checklist: [
      "Ścianka kolankowa o wysokości zgodnej z projektem",
      "Wieniec pod murłatę zbrojony i z kotwami",
      "Szczyty z wieńcami szczytowymi, kąt 40°",
      "Mury osłonięte przed deszczem do czasu dachu"
    ],
    quiz: [{
      q: "Po co kotwy w wieńcu pod murłatę?",
      a: ["Żeby dach nie unosił się i nie przesuwał przy silnym wietrze", "Dla ozdoby", "Żeby podeprzeć okna połaciowe"],
      correct: 0,
      explain: "<b>Dach pracuje jak żagiel.</b> Murłata zakotwiona w wieńcu przenosi siły wiatru i ssanie na ściany. Bez kotew dach może się przesunąć."
    }]
  },

  /* 13 ----------------------------------------------------------------- */
  {
    id: "komin",
    title: "Komin do kominka na drewno",
    lead: "Kominek w salonie potrzebuje własnego, systemowego komina, wyprowadzonego ponad dach. Komin stawiasz razem ze ścianami, bo ma swoją podstawę.",
    time: "2–4 dni montażu", team: "kominiarz, murarz, dekarz",
    facts: [["Wysokość", "ok. 8–9 m", "ruler"], ["Wkład", "Ø 18–20 cm (wg kominka)", "layers"], ["Rekuperacja", "wywiewka osobna", "clock"]],
    body: `
      <p>W domu bez gazu komin potrzebny jest tylko do <strong>kominka na drewno</strong> (etap 03: bez kotła). Rekomendujemy <strong>komin systemowy ceramiczny</strong> z wkładem (np. Ø 18 cm), izolacją i płaszczem z keramzytobetonu. Komin ceramiczny jest ciężki (rzędu kilkuset kg do ok. 1 t), więc <strong>wymaga własnej podstawy</strong> w stropie lub fundamencie: sprawdź u kierownika budowy, czy przewidział to projekt konstrukcyjny.</p>
      <p>Wylot komina musi sięgać <strong>wyżej niż kalenica lub zgodnie z odległościami z przepisów</strong> (ustal z kominiarzem i projektem). Rekuperacja ma <strong>osobną czerpnię i wyrzutnię</strong> (rury w ścianie lub dachu, etap 10), nie korzysta z komina. Przy szczelnym domu kominek ma mieć <strong>doprowadzenie powietrza z zewnątrz</strong> i zamknięte palenisko.</p>`,
    cost: { min: 9000, max: 14000, note: "komin ceramiczny systemowy ok. 8 m, czapa, drzwiczki rewizyjne, montaż, obróbka" },
    decision: {
      question: "Komin ceramiczny czy stalowy?",
      intro: "Koszt opcji to dopłata lub oszczędność względem komina ceramicznego z płaszczem.",
      chosen: "ceramiczny",
      options: [
        { id: "ceramiczny", name: "Komin systemowy ceramiczny w płaszczu",
          cost: { min: 0, max: 0 }, time: "montaż 2–3 dni", note: "trwały, odporny na sadzę",
          pros: ["Trwały, odporny na kwasy i sadzę", "Dobra izolacja, mały kondensat", "Naturalnie wpisuje się w ścianę murowaną"],
          cons: ["Ciężki, własna podstawa", "Zajmuje miejsce w pomieszczeniach", "Droższy od stali"],
          why: "Bezpieczny, trwały wybór dla kominka na drewno. Zgodny z zasadą jednego systemu producenta z pustakami." },
        { id: "stalowy", name: "System stalowy dwuścienny, izolowany",
          cost: { min: -4000, max: -2000 }, time: "montaż 1–2 dni", note: "lekki, prosty montaż",
          pros: ["Lekki, nie obciąża stropu", "Szybki montaż, nie wymaga fundamentu", "Tańszy od ceramiki"],
          cons: ["Krótsza żywotność i mniejsza odporność na pożar sadzy", "Wymaga obudowy w pomieszczeniach", "Czasem głośniejszy"],
          why: "Dobra opcja, gdy konstrukcja nie przewiduje podstawy lub liczy się czas i budżet. Wymaga zgodności z kartą kominka." }
      ]
    },
    tips: [
      "<b>Kominiarz przed murowaniem.</b> Mistrz kominiarski sprawdza lokalizację, średnicę, wysokość i odległość od elementów palnych: wydaje opinię na etapie projektu i po montażu.",
      "<b>Zachowaj odległości od drewna.</b> Komin w stropie i więźbie wymaga przepustów z izolacją i dystansami wg instrukcji systemu.",
      "<b>Wlot powietrza do paleniska.</b> Osobny kanał (np. rura Ø 100–150 mm) z zewnątrz do kominka: w domu z rekuperacją to konieczność.",
      "<b>Zamów drzwiczki rewizyjne i wyczystkę.</b> Dostęp do czyszczenia musisz mieć od strony pomieszczenia i z dachu (stopnie, ławeczka kominiarska)."
    ],
    mistakes: [
      "<b>Komin za niski lub przy kalenicy w złym miejscu.</b> Kominek „dusi się” i dymi do pomieszczenia.",
      "<b>Podłączenie wywiewki rekuperacji do komina.</b> Zakazane i niebezpieczne: rekuperacja ma osobne przewody.",
      "<b>Brak podstawy pod komin ceramiczny.</b> Ciężar bez fundamentu osiada i pęka."
    ],
    formal: [
      ["Opinia kominiarska", "mistrz kominiarski: po montażu i przed pierwszym paleniem; do odbioru budynku"],
      ["Badanie szczelności i drożności", "kominiarz; protokół do teczki"],
      ["Instrukcja systemu i kominka", "producent: odległości od materiałów palnych, średnice, wysokość"]
    ],
    checklist: [
      "Komin w projekcie z podstawą i opinią kominiarza",
      "Wysokość i wylot zgodne z uzgodnieniem",
      "Przepusty w stropie i dachu z izolacją i dystansami",
      "Doprowadzenie powietrza z zewnątrz do kominka",
      "Opinia kominiarska przed pierwszym paleniem"
    ],
    quiz: [{
      q: "Czy wywiewkę rekuperacji można wyprowadzić przez komin kominka?",
      a: ["Tak, to oszczędza otwór w dachu", "Nie: rekuperacja ma osobne przewody", "Tak, jeśli kominek jest zamknięty"],
      correct: 1,
      explain: "<b>Komin dymowy jest tylko do spalin.</b> Rekuperacja ma osobną czerpnię i wyrzutnię. Mieszanie systemów grozi cofnięciem spalin i zadymieniem."
    }]
  },

  /* 14 ----------------------------------------------------------------- */
  {
    id: "odbior-surowy",
    title: "Odbiór murów, stropu i stanu surowego otwartego",
    lead: "Zanim ruszy dach, kierownik (a najlepiej też inspektor) sprawdza geometrię, nośność i szczelność bryły. Poprawki są teraz tanie.",
    time: "1–2 dni", team: "kierownik, inspektor, geodeta",
    body: `
      <p>Przed wejściem dekarza zmierz <strong>pion i poziom ścian, przekątne, wysokości kolankowej</strong>, otwory pod okna i drzwi oraz grubość stropu. Geodeta sprawdza ewentualne odchyłki. <strong>Rysy w ścianach</strong> (cienkie skurczowe są normalne, szerokie to powód do analizy) i <strong>mostki cieplne</strong> (wieniec, nadproża) opisuje kierownik w dzienniku.</p>
      <p>Odbierasz także <strong>przepusty instalacyjne</strong>, otwór schodowy, komin i kotwy. Mur osłaniasz folią przed pierwszymi deszczami. W tym momencie zamykasz <strong>stan surowy otwarty</strong>; zamknięty (z dachem, oknami) zakończy etapy 06–07.</p>`,
    cost: { min: 600, max: 1500, note: "pomiar geodety, inspektor opcjonalnie dodatkowo" },
    tips: [
      "<b>Mierz co ścianę z osobna.</b> Pion 2 m poziomicą i laser: odchyłka kilku mm na wysokość kondygnacji jest akceptowalna, centymetr wymaga reakcji.",
      "<b>Rysy fotografuj z miarką.</b> Obserwuj je kilka tygodni, żeby ocenić, czy się rozwijają.",
      "<b>Zrób inwentaryzację przepustów.</b> Zdjęcia otworów i wypustów przed tynkiem to oszczędność kucia."
    ],
    mistakes: [
      "<b>Odbiór „na słowo”.</b> Bez pomiarów i dokumentacji później nie masz argumentów wobec ekipy.",
      "<b>Dach bez poprawek ścian.</b> Krzywy wieniec = krzywa więźba i sztuczne dopasowanie."
    ],
    checklist: [
      "Pion, poziom i przekątne ścian w tolerancji",
      "Otwory okienne i drzwiowe w wymiarach z projektu",
      "Wieńce, strop i nadproża odebrane i wpisane w dzienniku",
      "Przepusty i otwór schodowy zgodne z projektem",
      "Komin z opinią kominiarza (lub zapowiedzią)",
      "Mury osłonięte przed opadami"
    ],
    quiz: [{
      q: "Dlaczego odbiór murów robimy przed więźbą, a nie po dachu?",
      a: ["Bo dachowcy tego żądają", "Bo poprawki murów są wtedy najtańsze i najłatwiejsze", "Bo wymaga tego bank"],
      correct: 1,
      explain: "<b>Po dachu zmiany są kosztowne.</b> Krzywy wieniec lub zła wysokość kolankowej przenoszą się na więźbę, okna dachowe i obróbki. Odbiór teraz oszczędza tygodnie i pieniądze."
    }]
  }

  ]
});
