/* Etap 04: Fundamenty (stan zero). F3: rozbudowa z 9 kroków makiety do 15; widget kalkulator-betonu w js/widgets/04-fundamenty.js.
   Ścieżka rekomendowana: ławy 60 × 35 (4Ø12, strz. Ø6), ściany z bloczków 25, bitum + XPS 15, podkład 10 + papa. */
(function(){
  var X = function(id){ return '<button class="xref" data-section="'+id+'"><svg class="ico" aria-hidden="true"><use href="#i-layers"/></svg>zobacz w przekroju</button>'; };

  BUDOWA.addStage({
    id: "04-fundamenty", nr: 4, title: "Fundamenty", icon: "🧱", category: "surowy",
    summary: "Od wykopu przez ławy, ściany fundamentowe i izolacje po kanalizację pod podłogą i podkład. Po tym etapie dom stoi „na zero”.",
    duration: "4–6 tyg.",
    steps: [
    {
      id: "wybor-fundamentu",
      title: "Typ fundamentu i stan zero",
      lead: "Typ fundamentu wynika z projektu konstrukcyjnego i opinii geotechnicznej. Opisujemy ławy ze ścianami z bloczków, bo pasują do gruntu nośnego i do ekip z małego miasta.",
      time: "przed startem", team: "kierownik budowy + projektant",
      facts: [["Ława", "60 × 35 cm", "layers"], ["Spód ławy", "−1,40 m", "layers"], ["Etap trwa", "4–6 tyg.", "clock"]],
      body: `<p><b>Stan zero</b> to wszystko, co jest poniżej posadzki parteru: wykop, ławy, ściany fundamentowe, izolacje, kanalizacja pod podłogą i podkład. Dopiero na tym stają ściany parteru (etap 05).</p>
        <p>O wyborze decydują dwie rzeczy: <strong>nośność gruntu</strong> (opinia z etapu 01) i <strong>strefa przemarzania</strong> (w Polsce ok. 0,8–1,4 m, zależnie od regionu). W domu referencyjnym spód ławy leży na −1,40 m względem posadzki ±0,00, czyli ok. 1 m pod terenem. Jeśli wykop pokaże coś innego niż opinia (nasyp, torf, woda), decyzję zmienia projektant konstrukcji, a nie ekipa.</p>`,
      decision: {
        question: "Jaki fundament?",
        intro: "Koszt wariantu to dopłata do kosztów kroków etapu. Dalsza część etapu opisuje wariant rekomendowany.",
        chosen: "lawy",
        options: [
          { id: "lawy", name: "Ławy + ściany z bloczków betonowych",
            cost: { min: 0, max: 0 }, time: "4–6 tyg.", note: "najtańsza sprawdzona droga",
            pros: ["Zna to każda ekipa", "Łatwo poprowadzić przepusty instalacji", "Błędy widać przed zasypaniem"],
            cons: ["Więcej etapów i przerw technologicznych", "Mostek termiczny na styku ściany i posadzki"],
            why: "Dla domu z poddaszem na gruncie nośnym to najtańsze i najlepiej znane rozwiązanie. Ekipę łatwo znaleźć, a każdy element można obejrzeć i odebrać, zanim zniknie pod ziemią." },
          { id: "plyta", name: "Płyta fundamentowa",
            cost: { min: 25000, max: 50000 }, time: "2–3 tyg.", note: "orientacyjnie, razem z ociepleniem pod płytą",
            pros: ["Jedno betonowanie, szybko", "Ciepła podłoga bez mostków", "Dobra na słabszy grunt"],
            cons: ["Wyższy koszt na starcie", "Instalacje trzeba zaplanować co do centymetra", "Mniej doświadczonych ekip"],
            why: "<b>Kiedy płyta ma sens.</b> Przy słabym gruncie, wysokiej wodzie gruntowej albo gdy liczy się czas i ciepła podłoga. Zbrojenie to wtedy siatki na całej powierzchni, a nie kosz w ławie. Wymaga osobnego projektu." },
          { id: "szalunkowe", name: "Ławy + ściany z bloczków szalunkowych",
            cost: { min: 9000, max: 15000 }, time: "4–5 tyg.", note: "ściana zbrojona i zalana betonem",
            pros: ["Ściana zbrojona, sztywniejsza", "Szybciej niż szalunek tradycyjny"],
            cons: ["Drożej niż bloczki pełne", "Łatwo o pustki przy złym zagęszczeniu betonu"],
            why: "<b>Kiedy bloczki szalunkowe.</b> Gdy projektant przewidział zbrojenie ścian fundamentowych, np. przy wysokim poziomie wód gruntowych albo nierównomiernym gruncie." }
        ]
      },
      tips: [
        "<b>Rysunki przed koparką.</b> Sprawdź z kierownikiem rzędne: ±0,00 = teren +0,35–0,40 m, spód ławy −1,40 m, wymiary ław i klasę betonu.",
        "<b>Płyta to nie „lepszy fundament”.</b> To inne rozwiązanie na inne warunki. Na dobrym gruncie ławy są tańsze i w pełni wystarczające.",
        "<b>Termin.</b> Fundamenty najlepiej wiosną, żeby stan surowy zamknąć przed zimą (harmonogram z etapu 00)."
      ],
      mistakes: [
        "<b>Zmiana typu fundamentu „bo sąsiad tak zrobił”.</b> Bez projektanta konstrukcji tracisz gwarancję nośności i pozwolenie na budowę przestaje pasować do rzeczywistości.",
        "<b>Start bez kierownika budowy.</b> Zbrojenia i dna wykopu nie wolno zalać bez jego odbioru i wpisu do dziennika."
      ],
      formal: [
        ["Projekt konstrukcyjny fundamentów (rzędne, zbrojenie, klasa betonu)", "projektant konstrukcji, w projekcie budowlanym"],
        ["Opinia geotechniczna", "z etapu 01; kierownik porównuje ją z gruntem w wykopie"]
      ],
      checklist: ["Projekt konstrukcyjny i rzędne są u kierownika i u ekipy", "Opinia geotechniczna jest dostępna na budowie", "Typ fundamentu zgodny z projektem"]
    },
    {
      id: "wykop-odbior",
      title: "Wykop pod ławy i jego odbiór",
      lead: "Koparka kopie rowy do rzędnej z projektu, a kierownik sprawdza, czy grunt w dnie jest taki, jak w opinii geotechnicznej.",
      time: "1–2 dni", team: "operator koparki + kierownik budowy",
      facts: [["Wykop", "ok. 1,0 m szer.", "layers"], ["Urobek", "ok. 70 m³", "layers"], ["Dno", "−1,50 m z chudym", "rebar"]],
      cost: { min: 3500, max: 6000, note: "koparka, ręczne wykończenie dna, pompa" },
      body: `<p>Geodeta wytyczył obrys w etapie 03, humus jest już zdjęty. Wykop ma ok. <strong>1,0 m szerokości</strong> (ława 60 cm + luz na szalunek i pracę) i sięga do <strong>−1,50 m</strong> (ława −1,40 + 10 cm chudego betonu). Z ok. 70 m³ urobku ok. 40–50 m³ wróci na zasypkę, reszta zostaje na działce.</p>
        <p>Dno wykopu jest <strong>odbierane przed chudym betonem</strong>. Kierownik ogląda grunt i porównuje z opinią: piasek i żwir to dobra wiadomość, glina i pył tracą nośność po zmoczeniu, a nasyp, torf lub ziemia ogrodowa oznaczają wymianę gruntu. Wątpliwości rozstrzyga geotechnik.</p>`,
      tips: [
        "<b>Ostatnie 10–15 cm zostaw na ręczne wykończenie.</b> Koparka rozluźnia dno łyżką, a rozluźniony grunt osiądnie pod ławą.",
        "<b>Hałdy ziemi min. 1–1,5 m od krawędzi.</b> Wykop głębszy niż ok. 1 m wymaga skarpy lub rozparcia, sprawdź u kierownika budowy. Do wykopu pod hałdą nie wchodzimy.",
        "<b>Woda w wykopie.</b> Zrób studzienkę w rogu i pompę. Nie betonuj w kałuży i nie wylewaj betonu na rozmiękłą glinę.",
        "<b>Dno ma być poziome.</b> Przy spadku terenu ławy robi się schodkowo, uskoki podaje projekt. Rzędne sprawdź niwelatorem od reperu."
      ],
      mistakes: [
        "<b>Przekopane dno „o dwie łyżki”.</b> Nie zasypuj go ziemią. Uzupełnia się chudym betonem (albo zagęszczonym kruszywem, jeśli kierownik się zgodzi), bo luźna ziemia osiądzie.",
        "<b>Wykop stoi tygodniami otwarty.</b> Deszcz rozmiękcza grunt i po kilku dniach trzeba wymienić warstwę. Kop wtedy, gdy ekipa jest gotowa na chudy beton w ciągu 1–2 dni."
      ],
      formal: [["Odbiór dna wykopu i wpis do dziennika budowy", "kierownik budowy, przed chudym betonem; przy wątpliwościach geotechnik"]],
      checklist: ["Dno na rzędnej z projektu i poziome", "Grunt zgodny z opinią geotechniczną (bez nasypu, torfu, wody)", "Dno bez błota i wody, ostatnia warstwa wykończona ręcznie", "Skarpy i hałdy zabezpieczone", "Kierownik budowy odebrał wykop i zrobił wpis"],
      quiz: [{
        q: "Koparka przekopała dno 15 cm głębiej niż w projekcie. Co robimy?",
        a: ["Zasypujemy ziemią z hałdy i zagęszczamy nogą", "Uzupełniamy chudym betonem (albo kruszywem, jeśli kierownik się zgodzi)", "Nic, ława będzie po prostu niżej"],
        correct: 1,
        explain: "<b>Luźna ziemia osiądnie.</b> Pod ławą każde miejsce o słabszej nośności to punkt, w którym budynek będzie się osiadał nierówno. Chudy beton wyrównuje poziom i daje twarde podłoże."
      }]
    },
    {
      id: "chudy-beton",
      title: "Chudy beton",
      lead: "Cienka warstwa niskiej klasy betonu na dnie wykopu daje równe, czyste podłoże pod szalunek i zbrojenie.",
      time: "1 dzień", team: "2 osoby",
      facts: [["Grubość", "ok. 10 cm", "layers"], ["Szerokość", "ława + 5 cm/strona", "layers"], ["Beton", "C8/10", "rebar"]],
      cost: { min: 3000, max: 4500, note: "ok. 5–6 m³ betonu + robocizna" },
      body: `<p>Chudy beton (np. C8/10) <strong>nie przenosi obciążeń domu</strong>. Chroni dno przed rozmiękaniem, wyrównuje poziom i pozwala położyć zbrojenie czysto, z otuliną od dołu. Jest o ok. 5 cm szerszy z każdej strony niż ława. ${X("chudy")}</p>`,
      tips: [
        "<b>Wylej go zaraz po odbiorze wykopu.</b> Zwykle wystarcza rynna z gruszki, pompa jest zbędna.",
        "<b>Sprawdź poziom łatą i niwelatorem.</b> Nierówności chudego betonu przeniosą się na wysokość ławy.",
        "<b>Daj mu stwardnieć.</b> Po 1–2 dniach da się po nim chodzić i montować szalunek."
      ],
      mistakes: [
        "<b>Chudy beton pominięty „dla oszczędności”.</b> Oszczędzasz ok. 3 tys. zł, a zbrojenie ląduje w błocie i bez otuliny od dołu.",
        "<b>Wylany na rozmiękły grunt.</b> Zamyka błoto pod fundamentem. Najpierw usuń rozmiękłą warstwę."
      ],
      formal: [["Wpis o wykonaniu chudego betonu", "kierownik budowy"]],
      checklist: ["Warstwa równa, ok. 10 cm, o 5 cm szersza niż ława", "W wykopie nie ma błota ani wody", "Rzędna wierzchu zgodna z projektem"]
    },
    {
      id: "szalunki-law",
      title: "Szalunki ław",
      lead: "Deski lub płyty szalunkowe nadają ławie dokładny kształt i trzymają beton, dopóki nie zwiąże.",
      time: "1–2 dni", team: "2–3 cieśli",
      cost: { min: 3000, max: 5500, note: "deski/płyty + robocizna" },
      body: `<p>Szalunek ustawia się na chudym betonie, w obrysie ławy 60 cm. Jego górna krawędź wyznacza <strong>wierzch ławy</strong>, więc musi być ustawiona na rzędnej z niwelatora, a boki podparte.</p>`,
      decision: {
        question: "Szalunek czy ława w gruncie?",
        intro: "Koszt to dopłata albo oszczędność względem kosztu szalunku w kroku.",
        chosen: "deskowy",
        options: [
          { id: "deskowy", name: "Szalunek z desek lub płyt",
            cost: { min: 0, max: 0 }, time: "1–2 dni", note: "wymiary co do centymetra",
            pros: ["Dokładne wymiary i proste krawędzie", "Czyste boki, łatwiej o otulinę", "Działa w każdym gruncie"],
            cons: ["Koszt i czas ciesielki", "Trzeba podeprzeć co 50–70 cm"],
            why: "Najpewniejszy sposób na ławę o wymiarach z projektu. Różnica w koszcie jest mała, a pewności więcej, zwłaszcza przy wykopie szerszym niż ława." },
          { id: "wgruncie", name: "Ława w gruncie, bez szalunku",
            cost: { min: -2500, max: -1500 }, time: "0 dni", note: "tylko w stabilnym gruncie spoistym",
            pros: ["Oszczędność deski i robocizny", "Szybciej"],
            cons: ["Ściany wykopu się osypują", "Zużycie betonu rośnie o 10–15%", "Wykop musi mieć dokładnie szerokość ławy"],
            why: "<b>Kiedy ma sens.</b> W zwartej glinie lub piasku gliniastym, gdy ściany wykopu stoją prosto, a kierownik się zgodzi. Zbrojenie musi i tak mieć otulinę z boków. Pas roboczy dla izolacji dokopuje się później." },
          { id: "systemowy", name: "Szalunek systemowy z wynajmu",
            cost: { min: 500, max: 1500 }, time: "1 dzień", note: "szybki montaż",
            pros: ["Szybki montaż i demontaż", "Sztywne, równe boki"],
            cons: ["Wynajem i transport", "Opłaca się przy dużych budowach"],
            why: "<b>Kiedy ma sens.</b> Gdy ekipa ma wprawę i chce skrócić czas. Dla jednego domu różnica jest niewielka." }
        ]
      },
      tips: [
        "<b>Sztywno i podparcie co 50–70 cm.</b> Gruszka potrafi rozepchnąć szalunek bez rozpór.",
        "<b>Górna krawędź na sznurku lub laserze.</b> Dobrze mieć w deskach nabite gwoździe lub kreski na rzędnej wierzchu ławy.",
        "<b>Posmaruj deski od środka olejem szalunkowym</b> albo zwilż je, żeby nie wyciągały wody z betonu i łatwo się odrywały."
      ],
      mistakes: [
        "<b>Szalunek bez rozpór.</b> Ława wychodzi szersza i krzywa, a ściana fundamentowa nie leży już w osi.",
        "<b>Szpary w deskach.</b> Mleczko cementowe ucieka, a w ławie robią się „plastry” z odsłoniętym kruszywem."
      ],
      checklist: ["Wymiary ławy zgodne z projektem", "Szalunek prosty, podparty i szczelny", "Górna krawędź na rzędnej z niwelatora"]
    },
    {
      id: "zbrojenie-law",
      title: "Zbrojenie ław",
      lead: "Stalowy kosz wewnątrz betonu. Po zalaniu nie da się go już obejrzeć, więc sprawdza się go teraz, z miarką w ręku.",
      time: "2–4 dni", team: "2–3 zbrojarzy",
      facts: [["Pręty", "4 × Ø12", "rebar"], ["Strzemiona", "Ø6 co 25–30 cm", "rebar"], ["Stal", "ok. 0,4–0,5 t", "rebar"]],
      cost: { min: 4500, max: 7000, note: "stal ok. 0,4–0,5 t + dystanse + robocizna" },
      body: `<p>Beton dobrze znosi ściskanie, ale pęka, gdy się go zgina, np. kiedy grunt pod jednym narożnikiem osiądzie bardziej niż pod drugim. Stal przejmuje to rozciąganie.</p>
        <p>W ławie 60 × 35 cm leży kosz z <strong>czterech prętów Ø12</strong> (dwa u góry, dwa u dołu) i <strong>strzemion Ø6 co 25–30 cm</strong>. Z ok. 76 m ław daje to <strong>ok. 0,4–0,5 t stali</strong> razem z zakładami i prętami startowymi. Wartości są orientacyjne: wiążący jest projekt konstrukcyjny. ${X("lawa")}</p>`,
      diagram: `<svg viewBox="0 0 360 210" role="img" aria-label="Przekrój ławy 60 na 35 cm z koszem zbrojeniowym, otuliną i chudym betonem">
        <rect x="0" y="150" width="360" height="60" style="fill:var(--ground);fill-opacity:.55"/>
        <rect x="96" y="150" width="168" height="22" style="fill:var(--concrete-top);stroke:var(--ink-3)" stroke-width="1"/>
        <text x="270" y="166">chudy beton 10 cm</text>
        <rect x="108" y="66" width="144" height="84" style="fill:var(--concrete);fill-opacity:.7;stroke:var(--ink-2)" stroke-width="1.4"/>
        <rect x="150" y="14" width="60" height="52" style="fill:var(--stone);fill-opacity:.7;stroke:var(--ink-2)" stroke-width="1.2"/>
        <text x="216" y="44">ściana fund. 25 cm</text>
        <rect x="120" y="78" width="120" height="60" fill="none" style="stroke:var(--rust)" stroke-width="2"/>
        <g style="fill:var(--ink)"><circle cx="124" cy="82" r="5"/><circle cx="236" cy="82" r="5"/><circle cx="124" cy="134" r="5"/><circle cx="236" cy="134" r="5"/></g>
        <text x="258" y="96">4 × Ø12</text>
        <text x="258" y="112" style="fill:var(--rust)">strzemię Ø6</text>
        <path d="M108 190H252" style="stroke:var(--ink-3)" stroke-width="1"/>
        <text x="152" y="204">ława 60 cm</text>
        <path d="M100 66V150" style="stroke:var(--ink-3)" stroke-width="1"/>
        <text x="20" y="112">35 cm</text>
        <path d="M108 138H120" style="stroke:var(--lamp)" stroke-width="2"/>
        <text x="18" y="142" style="fill:var(--lamp)">otulina ok. 5 cm</text>
      </svg>`,
      tips: [
        "<b>Dystanse kup gotowe</b>, betonowe lub plastikowe, co ok. 1 m pod koszem. Kawałki cegły pod prętami zostają w fundamencie na zawsze.",
        "<b>Otulina zwykle 5 cm z każdej strony</b> (bez chudego betonu często 7,5 cm), ale zawsze wg projektu. Stal nie może dotykać gruntu ani szalunku.",
        "<b>Zakłady prętów ok. 50–60 cm</b> (ok. 40–50 średnic) albo jak w projekcie. W narożnikach pręty zaginaj w „L” z zakładem, nie krzyżuj na styk.",
        "<b>Strzemiona wiąż drutem wiązałkowym na każdym przecięciu</b> w narożnikach, a na prostych odcinkach na co drugim. Rozjechany kosz zmienia otulinę.",
        "<b>Pręty startowe</b> w miejscach słupów, trzpieni i wieńców sprawdź z rysunkiem, zanim przyjedzie gruszka. Dokładanie ich po zalaniu to wiercenie w ławie.",
        "<b>Rury osłonowe pod ławą</b>, jeśli projekt prowadzi instalację pod nią, wstaw teraz. Kucie świeżej ławy ją osłabia."
      ],
      mistakes: [
        "<b>Kosz leży prosto na chudym betonie albo w błocie.</b> Stal rdzewieje, a beton odpada kawałkami po kilku latach.",
        "<b>Zbrojenie oblepione ziemią po deszczu.</b> Brud i błoto zmniejszają przyczepność betonu do stali, więc przed betonowaniem trzeba je umyć.",
        "<b>Zbyt rzadkie strzemiona, bo „i tak się trzyma”.</b> Kosz rozjeżdża się przy wibrowaniu betonu, a pręty lądują przy brzegu."
      ],
      formal: [
        ["Deklaracja właściwości użytkowych stali i atesty", "dostawca stali, z dostawą"],
        ["Zdjęcia zbrojenia z przyłożoną miarką", "inwestor, ok. 30 min, na każdym odcinku"]
      ],
      checklist: [
        "Średnice i liczba prętów zgodne z projektem",
        "Strzemiona w rozstawie z projektu, dobrze związane",
        "Kosz stoi na dystansach, otulina z każdej strony",
        "Zakłady i naroża mają właściwą długość",
        "Pręty startowe i rury osłonowe są na miejscu",
        "Zbrojenie czyste, bez błota i wody"
      ],
      quiz: [{
        q: "Po co pod koszem zbrojeniowym stawia się dystanse?",
        a: ["Żeby zużyć mniej betonu", "Żeby stal była z każdej strony otoczona betonem", "Żeby dało się chodzić po zbrojeniu"],
        correct: 1,
        explain: "<b>Otulina chroni stal.</b> Beton wokół prętów odcina je od wilgoci i tlenu, więc stal nie rdzewieje. Pręt dotykający gruntu zacznie korodować, a rdza rozsadzi beton od środka."
      }]
    },
    {
      id: "uziom-fundamentowy",
      title: "Uziom fundamentowy",
      lead: "Taśma stalowa w ławach tworzy uziom całego domu. Wykonuje się go tylko raz, zanim zniknie pod betonem.",
      time: "pół dnia", team: "elektryk z uprawnieniami",
      facts: [["Taśma", "FeZn 30 × 4 mm", "rebar"], ["Długość", "ok. 76 m", "layers"], ["Wyprowadzenia", "2–3 miejsca", "bulb"]],
      cost: { min: 2000, max: 3500, note: "taśma, złączki, robocizna elektryka" },
      body: `<p>Uziom to element instalacji elektrycznej i ochrony odgromowej. W domu, który ma fundament z betonu, <strong>najtaniej i najtrwalej</strong> robi się go w ławie: taśma ocynkowana (np. FeZn 30 × 4 mm) ułożona na sztorc lub płasko pośrodku, otulona betonem ze wszystkich stron.</p>
        <p>Rodzaj uziomu, miejsca wyprowadzeń (zwykle rozdzielnica i pomieszczenie techniczne) oraz wymaganą rezystancję podaje <strong>projekt instalacji elektrycznej</strong>. W razie wątpliwości sprawdź u kierownika budowy.</p>`,
      tips: [
        "<b>Taśma w betonie, nie na betonie.</b> Podwieś ją do strzemion lub dystansów tak, żeby beton otulał ją min. 5 cm.",
        "<b>Złącza spawaj lub zaciskaj gotowymi złączkami</b> i zabezpiecz antykorozyjnie. Każde połączenie obejrzy kierownik.",
        "<b>Wyprowadzenia (2–3 sztuki)</b> wystawiaj ponad przyszłą posadzkę i zabezpiecz przed zgniecionym betonem. Oznacz je kolorem, żeby nikt ich nie ściął.",
        "<b>Pomiar rezystancji</b> zrób przed zasypaniem. W etapie 08 elektryk tylko podłączy uziom do głównej szyny wyrównawczej."
      ],
      mistakes: [
        "<b>Uziom „dorabiany” po zalaniu ławy.</b> Wymaga prętów wbitych w ziemię przy domu. Drożej i słabiej niż taśma w fundamencie.",
        "<b>Taśma ułożona na dnie lub przy szalunku.</b> Bez otuliny rdzewieje i traci przewodność."
      ],
      formal: [["Pomiar rezystancji uziomu z protokołem", "elektryk z uprawnieniami, przed zasypaniem; protokół do dziennika"]],
      checklist: ["Taśma ciągła, połączenia zabezpieczone", "Beton otuli taśmę min. 5 cm", "Wyprowadzenia w miejscach z projektu, widoczne i oznaczone", "Pomiar rezystancji zrobiony i zapisany"],
      quiz: [{
        q: "Dlaczego uziom fundamentowy układa się przed betonowaniem ław?",
        a: ["Po zalaniu ławy nie da się go tanio dodać", "Bo taśma musi zardzewieć, żeby działać", "Bo przepisy zabraniają uziomów po zasypaniu"],
        correct: 0,
        explain: "<b>Fundament zakrywa się raz.</b> Taśma w ławie jest tania i trwała, a późniejszy uziom z prętów wbitych w grunt to dodatkowy koszt i mniej pewna jakość."
      }]
    },
    {
      id: "odbior-zbrojenia",
      title: "Odbiór zbrojenia i wpis do dziennika",
      lead: "Ostatnia chwila, żeby coś poprawić. Po przyjeździe gruszki każda uwaga kosztuje dużo więcej.",
      time: "pół dnia", team: "kierownik budowy + inwestor",
      facts: [["Odbiera", "kierownik budowy", "stamp"], ["Kiedy", "przed betonem", "clock"], ["Dowód", "wpis + zdjęcia", "file"]],
      body: `<p>Zbrojenie, szalunek, uziom i rury osłonowe to <strong>roboty zanikające</strong>: po zalaniu znikną i nikt ich nie sprawdzi. Kierownik budowy ogląda je z projektem i miarką w ręku, a potem robi wpis do dziennika budowy, że można betonować. Inspektor nadzoru, jeśli jest (etap 03), obecny jest przy tym odbiorze.</p>
        <p>Ty robisz zdjęcia: kosza, otuliny, zakładów, wyprowadzeń uziomu i rur z przyłożoną miarką, z datą. To tanie ubezpieczenie na lata.</p>`,
      tips: [
        "<b>Umów odbiór z gruszką na następny dzień</b>, a nie na ten sam. Wtedy jest czas na poprawki i beton nie czeka.",
        "<b>Mierz sam trzy rzeczy:</b> otulinę, rozstaw strzemion i długość zakładu w narożnikach. Resztę kierownik zna lepiej.",
        "<b>Nie podpisuj dziennika za kierownika.</b> Wpis ma być jego, z datą i godziną."
      ],
      mistakes: [
        "<b>Zalewanie bez odbioru, „bo prognoza zła”.</b> Jeśli kosz jest źle ułożony, to dopiero kuć po wyschnięciu. Przełóż termin.",
        "<b>Brak zdjęć.</b> Za kilka lat, przy rysach na ścianie, to jedyny dowód, że zbrojenie było."
      ],
      formal: [
        ["Wpis kierownika o odbiorze robót zanikających (zbrojenie, szalunek, uziom)", "kierownik budowy, przed betonowaniem"],
        ["Dokumentacja zdjęciowa zbrojenia i przepustów", "inwestor, do dokumentacji budowy"]
      ],
      checklist: [
        "Zbrojenie, otulina i zakłady zgodne z projektem",
        "Szalunek na właściwej rzędnej, prosty i podparty",
        "Uziom i rury osłonowe na swoich miejscach",
        "Zdjęcia z miarką zrobione",
        "Kierownik budowy zrobił wpis i dopuścił do betonowania"
      ]
    },
    {
      id: "betonowanie-law",
      title: "Betonowanie i pielęgnacja ław",
      lead: "Beton z betoniarni wypełnia szalunek, wibrator usuwa z niego powietrze, a przez kolejne dni trzeba go pilnować, żeby nie wysechł.",
      time: "1 dzień + 7 dni pielęgnacji", team: "3–4 osoby + operator pompy",
      facts: [["Beton", "ok. 17 m³", "layers"], ["Klasa", "C16/20–C25/30 wg projektu", "stamp"], ["Gruszki", "2–3", "clock"]],
      cost: { min: 9500, max: 14000, note: "beton ok. 17 m³ + pompa + robocizna + pielęgnacja" },
      body: `<p>Klasę betonu podaje projekt, zwykle <strong>C16/20 do C25/30</strong> w klasie ekspozycji dla gruntu (XC2). Zamów z konsystencją plastyczną (S3), z dokumentem dostawy (WZ). Ławy betonuje się najlepiej <strong>za jednym razem</strong>, bez przerw roboczych, więc dostawy muszą jechać jedna po drugiej, co ok. 30–45 min. ${X("lawa")}</p>
        <p>Beton ma ok. 1,5–2 godzin od załadunku na wbudowanie (w upał krócej), co zapisuje WZ. Wibruj go buławą igłową w kilku punktach, aż przestaną wychodzić pęcherze. Po wylaniu wyrównaj górę ławy łatą do rzędnej.</p>
        <p><strong>Pielęgnacja</strong> decyduje o tym, czy beton osiągnie klasę. Przez min. 7 dni utrzymuj go wilgotnym: w upał polewaj 2–3 razy dziennie, w deszcz lub wiatr przykryj folią. Ściany murować można zwykle po 3–7 dniach, po zgodzie kierownika. Pełną wytrzymałość beton ma po 28 dniach.</p>`,
      widget: "kalkulator-betonu",
      tips: [
        "<b>Pompa, jeśli gruszka nie podjedzie do krawędzi wykopu.</b> Rynną dojdzie ok. 4–5 m, dalej taczki, które trwają godzinami. Pompa to zwykle ok. 1,5 tys. zł.",
        "<b>Wibruj, ale nie dotykaj zbrojenia buławą</b> i nie ciągnij nią betonu na boki. Wkładaj pionowo co 30–50 cm, po kilkanaście sekund w punkcie.",
        "<b>Pogoda: betonuj przy +5…+25 °C.</b> W upał zacieniaj i polewaj, w chłodzie dodaj dodatek przyspieszający. W mrozie nie betonuj bez zgody kierownika.",
        "<b>Zamów 3 kostki próbne</b> (orientacyjnie kilkaset zł), jeśli chcesz mieć dowód klasy betonu po 28 dniach.",
        "<b>Spisz godzinę każdej gruszki na WZ.</b> Przy sporze z betoniarnią to jedyny dowód."
      ],
      mistakes: [
        "<b>Dolewanie wody „żeby lepiej płynął”.</b> Każdy litr wody obniża wytrzymałość i zwiększa skurcz. Konsystencję reguluje betoniarnia plastyfikatorem.",
        "<b>Przerwa w betonowaniu na kilka godzin.</b> Powstaje zimna fuga, czyli słaby punkt w ławie.",
        "<b>Brak pielęgnacji w upalny tydzień.</b> Powierzchnia wysycha i pęka, a beton traci część wytrzymałości."
      ],
      formal: [["Dokument dostawy betonu (WZ) z klasą, konsystencją i godziną załadunku", "betoniarnia, przy każdej gruszce; kopia do dziennika"]],
      checklist: [
        "Klasa i konsystencja na WZ zgodne z projektem",
        "Beton zagęszczony wibratorem, góra ławy na rzędnej",
        "Do betonu nie dolewano wody",
        "Ławy chronione folią lub polewane przez 7 dni",
        "Ustalono, po ilu dniach wolno murować (z kierownikiem)"
      ],
      quiz: [{
        q: "Beton w gruszce zgęstniał, a ekipa chce dolać wody z węża. Co robisz?",
        a: ["Zgadzasz się, woda i tak odparuje", "Odmawiasz i prosisz betoniarnię o dodatek upłynniający", "Pozwalasz dolać połowę wiadra"],
        correct: 1,
        explain: "<b>Woda osłabia beton.</b> Im więcej wody ponad recepturę, tym niższa wytrzymałość i większy skurcz. Upłynnia się plastyfikatorem, który dozuje wytwórnia."
      }]
    },
    {
      id: "sciany-fundamentowe",
      title: "Ściany fundamentowe",
      lead: "Bloczki betonowe na zaprawie wynoszą dom ponad grunt i niosą ściany parteru.",
      time: "3–5 dni", team: "2–3 murarzy",
      facts: [["Grubość", "25 cm", "layers"], ["Wysokość", "ok. 1,0 m (4 warstwy)", "layers"], ["Bloczki", "ok. 850–900 szt.", "rebar"]],
      cost: { min: 14000, max: 20000, note: "bloczki ok. 6–8 zł/szt., zaprawa, robocizna" },
      body: `<p>Ściany muruje się na ławach, zaczynając od narożników, z bloczków betonowych 38 × 25 × 24 cm (ok. 11 szt. na m² ściany). Korona sięga rzędnej z projektu, tuż pod przyszłą ścianą parteru. Ściana ma 25 cm grubości, więc po bokach ławy zostaje po ok. 17 cm półki. ${X("scianaf")}</p>`,
      tips: [
        "<b>Pierwsza warstwa na zaprawie 1,5–2 cm, sprawdzona laserem i poziomnicą.</b> Kolejne warstwy powtórzą każdy jej błąd.",
        "<b>Przewiązuj spoiny pionowe min. o 1/4 długości bloczka</b>, ze spoinami poziomymi i pionowymi wypełnionymi zaprawą.",
        "<b>Murujemy po 3–7 dniach od betonowania ław</b> i nie w mrozie. Zaprawa przy temperaturze poniżej +5 °C nie wiąże prawidłowo.",
        "<b>Przejścia instalacji rób na bieżąco</b> (następny krok), zamiast kuć gotowy mur."
      ],
      mistakes: [
        "<b>Spoiny niewypełnione zaprawą.</b> Ściana jest słabsza i przepuszcza wilgoć.",
        "<b>Ściana nie w osi ławy.</b> Obciążenie idzie krawędzią i ława może pękać."
      ],
      formal: [["Wpis o wykonaniu i odbiorze ścian fundamentowych (rzędne, pion, poziom)", "kierownik budowy"]],
      checklist: ["Ściany w pionie i w poziomie (łata 2 m)", "Korona na rzędnej z projektu", "Spoiny wypełnione, bez ubytków", "Ściany w osi ławy, wymiary zgodne z rzutem"],
      quiz: [{
        q: "Od czego zaczyna się murowanie ściany fundamentowej?",
        a: ["Od środka ściany, byle szybko", "Od narożników i dokładnie wypoziomowanej pierwszej warstwy", "Od zalania ściany betonem"],
        correct: 1,
        explain: "<b>Narożniki i pierwsza warstwa.</b> Narożniki wyznaczają linię, a pierwsza warstwa poziom całego muru. Błędy z pierwszej warstwy trzeba potem wyrównywać zaprawą po całej wysokości."
      }]
    },
    {
      id: "przejscia-instalacji",
      title: "Przejścia instalacji przez fundament",
      lead: "Rury osłonowe w ścianie fundamentowej to dziury, których po zasypaniu już nie dowiercisz. Muszą być w dobrych miejscach i szczelne.",
      time: "1 dzień", team: "hydraulik + elektryk",
      facts: [["Kanalizacja", "rękaw Ø160", "layers"], ["Woda, prąd", "Ø63–75", "rebar"], ["Światłowód", "Ø50 + rezerwa", "bulb"]],
      cost: { min: 2000, max: 4500, note: "rury osłonowe, przepusty, robocizna" },
      body: `<p>Z etapu 03 do domu dochodzą: <strong>kanalizacja</strong> (z oczyszczalni), <strong>woda</strong> (PE 32–40), <strong>prąd</strong> i <strong>światłowód</strong>. Każda wchodzi przez ścianę fundamentową w rękawie, czyli rurze osłonowej większej niż instalacja. Zwykle kanalizacja Ø160 na rurę Ø110, woda i prąd Ø63–75, światłowód Ø50. Rzędne i średnice podaje projekt instalacji.</p>
        <p>Wejścia robi się nad ławą, w trakcie murowania. Do rękawów wkłada się instalację później, ale przejście musi być uszczelnione na zewnątrz: gotowy przepust z uszczelką lub elastyczna masa, a izolacja pionowa przylega do rury.</p>`,
      tips: [
        "<b>Kanalizacja ze spadkiem min. 2%</b> w stronę oczyszczalni. Wylot przez ścianę ustaw tak, żeby rura pod podłogą mogła spaść bez dobijania do ławy.",
        "<b>Rury rezerwowe Ø110 i Ø50</b> na przyszłe potrzeby (ładowarka samochodu, kable do ogrodu i basenu). Dołożenie ich później kosztuje wielokrotnie więcej.",
        "<b>Zaślep końce rur</b> zaślepkami i oznacz, która jest czym. Błoto i beton w rękawie to godziny pracy.",
        "<b>Zrób zdjęcia i szkic z miarą od narożnika.</b> Po zasypaniu to jedyna mapa przejść."
      ],
      mistakes: [
        "<b>Rury przez ławę zamiast nad nią.</b> Przecięta ława traci nośność. Jeśli projekt to przewiduje, rękaw musi być wstawiony przed betonowaniem.",
        "<b>Przejście bez uszczelnienia.</b> Woda gruntowa i wilgoć wchodzą do domu wzdłuż rury, a naprawa wymaga odkopania ściany."
      ],
      formal: [["Fotodokumentacja i szkic przejść z wymiarami", "inwestor + wykonawca, do dokumentacji budowy"]],
      checklist: ["Rękawy na rzędnych z projektu, ze spadkiem", "Przejścia uszczelnione", "Rury rezerwowe wstawione", "Końce zaślepione, zdjęcia i szkic zrobione"]
    },
    {
      id: "izolacja-przeciwwilgociowa",
      title: "Izolacja pozioma i pionowa",
      lead: "Dwie izolacje chronią dom przed wodą z gruntu: pionowa na ścianie fundamentowej i pozioma pod ścianami parteru.",
      time: "2–3 dni (z schnięciem)", team: "2 osoby",
      facts: [["Pionowa", "masa KMB, 2 warstwy", "layers"], ["Pozioma", "papa lub folia", "layers"], ["Powierzchnia", "ok. 65 m²", "layers"]],
      cost: { min: 4000, max: 6500, note: "grunt, masa KMB, papa, robocizna" },
      body: `<p><strong>Izolacja pionowa</strong> to bezrozpuszczalnikowa masa bitumiczna (KMB) nałożona w dwóch warstwach na oczyszczoną, zagruntowaną ścianę fundamentową, od ławy aż po poziom terenu i wyżej. ${X("bitum")}</p>
        <p><strong>Izolacja pozioma</strong> (papa lub folia) leży na koronie ściany fundamentowej i przerywa podciąganie wilgoci w górę, w ściany parteru. Musi być połączona z pionową. ${X("poziom")}</p>`,
      decision: {
        question: "Czym wykonać izolację pionową?",
        intro: "Koszt to dopłata względem kosztu kroku.",
        chosen: "kmb",
        options: [
          { id: "kmb", name: "Masa bitumiczna KMB, 2 warstwy",
            cost: { min: 0, max: 0 }, time: "1–2 dni + schnięcie", note: "sprawdzona, tania",
            pros: ["Bezspoinowa, bez łączeń", "Przykleja się do ściany i do XPS", "Tania i znana ekipom"],
            cons: ["Wymaga suchej ściany i temperatury powyżej +5 °C", "Trzeba poczekać na wyschnięcie warstw"],
            why: "Najlepszy stosunek ceny do jakości dla domu bez piwnicy i bez wysokiej wody gruntowej. Tworzy ciągłą powłokę bez szwów i dobrze współpracuje z XPS." },
          { id: "papa", name: "Papa termozgrzewalna na gruncie",
            cost: { min: 500, max: 1500 }, time: "1 dzień", note: "szybciej, ale z palnikiem",
            pros: ["Szybko, bez czekania na schnięcie", "Bardzo trwała mechanicznie"],
            cons: ["Praca z palnikiem przy styropianie jest ryzykowna", "Zakłady i narożniki wymagają wprawy"],
            why: "<b>Kiedy ma sens.</b> Przy wysokiej wodzie gruntowej lub gdy projektant wymaga papy. Wtedy sprawdź u kierownika, czy izolacja pozioma i pionowa się łączą." }
        ]
      },
      tips: [
        "<b>Ściana sucha i czysta.</b> Zagruntuj, odczekaj, potem dwie warstwy masy (zużycie ok. 3–4 kg/m² łącznie). Druga warstwa po wyschnięciu pierwszej.",
        "<b>Narożnik ław wewnętrzny wyobluj fasetą z zaprawy</b>, zamiast zostawiać kąt prosty. Tam izolacja pęka najczęściej.",
        "<b>Izolacja pozioma wyprowadzona poza obrys ściany</b> i nałożona na pionową z zakładem ok. 10–15 cm. Papa pod ścianami parteru ma być ciągła.",
        "<b>Nie zasypuj, dopóki masa nie wyschnie.</b> Deszcz zmyje niewyschniętą warstwę."
      ],
      mistakes: [
        "<b>Przerwy w izolacji na narożnikach, przy przepustach i na styku z ławą.</b> Wilgoć wejdzie dokładnie tam.",
        "<b>Masa rozpuszczalnikowa pod styropian.</b> Rozpuszczalnik wyżera płyty. Kupuj masy oznaczone jako bezrozpuszczalnikowe i zgodne z XPS."
      ],
      checklist: ["Ściana oczyszczona i zagruntowana", "Dwie warstwy masy, ciągłe, bez przerw", "Narożniki z fasetą, przepusty obłożone izolacją", "Izolacja pozioma połączona z pionową"],
      quiz: [{
        q: "Po co izolacja pozioma na koronie ściany fundamentowej?",
        a: ["Żeby wilgoć z gruntu nie podciągała się w ściany parteru", "Żeby ściana była cieplejsza", "Żeby zaprawa lepiej wiązała"],
        correct: 0,
        explain: "<b>Podciąganie kapilarne.</b> Woda w porach muru potrafi wspiąć się na kilkadziesiąt centymetrów. Papa lub folia pod ścianami parteru ją zatrzymuje."
      }]
    },
    {
      id: "ocieplenie-fundamentu",
      title: "Ocieplenie fundamentu (XPS)",
      lead: "Płyty XPS 15 cm na ścianie fundamentowej ograniczają ucieczkę ciepła przez cokół i chronią izolację przed uszkodzeniem.",
      time: "1–2 dni", team: "2 osoby",
      facts: [["Grubość", "15 cm", "layers"], ["Powierzchnia", "ok. 65–70 m²", "layers"], ["Wysokość", "do cokołu +30 cm", "layers"]],
      cost: { min: 7000, max: 10500, note: "XPS 15 cm ok. 95–110 zł/m², klej, robocizna" },
      body: `<p>XPS (polistyren ekstrudowany) ma zamkniętą strukturę i prawie nie chłonie wody, więc nadaje się do gruntu. Płyty klei się na masę bitumiczną, od dołu ściany fundamentowej aż do cokołu ok. 30 cm nad terenem. Wyżej wchodzi styropian grafitowy 20 cm (etap 12), a cokół wykończy tynk mozaikowy. ${X("xps")}</p>`,
      tips: [
        "<b>Klej tylko do XPS i do mas bitumicznych</b>, bez rozpuszczalników. Dociśnij płyty i sprawdź szczeliny.",
        "<b>Układaj płyty na mijankę</b> ze szczelnym dociskiem. Szpary zalepiaj pianką lub klejem, żeby ciepło nie uciekało.",
        "<b>Poniżej terenu bez kołków.</b> Kołkuje się dopiero część cokołu nad terenem, w etapie 12.",
        "<b>Folia kubełkowa lub geowłóknina na płytach</b> chroni je przed kamieniami w zasypce, zwłaszcza w gruncie z gruzem."
      ],
      mistakes: [
        "<b>Zwykły styropian (EPS) zamiast XPS w gruncie.</b> Nasiąka wodą i po kilku latach przestaje izolować.",
        "<b>Płyty z przerwą na styku z ociepleniem ściany.</b> To mostek termiczny na cokole, a zimą miejsce z pleśnią."
      ],
      checklist: ["Płyty XPS 15 cm, ciągłe, bez szczelin", "Klej zgodny z masą i z XPS", "Ocieplenie sięga cokołu ok. 30 cm nad terenem", "Płyty zabezpieczone przed kamieniami w zasypce"],
      quiz: [{
        q: "Dlaczego pod terenem stosuje się XPS, a nie zwykły styropian EPS?",
        a: ["Bo jest tańszy", "Bo prawie nie chłonie wody", "Bo mocniej się klei"],
        correct: 1,
        explain: "<b>Wilgoć w gruncie.</b> XPS ma zamkniętą strukturę i prawie nie nasiąka. EPS chłonie wodę, a mokry styropian izoluje znacznie gorzej."
      }]
    },
    {
      id: "zasypka-wykopu",
      title: "Zasypka i zagęszczanie wykopu",
      lead: "Wykop wokół ścian zasypuje się warstwami po 20–30 cm i każdą zagęszcza. Jedna gruba warstwa osiądnie.",
      time: "1–2 dni", team: "2 osoby + płyta wibracyjna",
      facts: [["Warstwa", "20–30 cm", "layers"], ["Objętość", "ok. 40–50 m³", "layers"], ["Sprzęt", "płyta wibracyjna", "rebar"]],
      cost: { min: 2500, max: 5000, note: "zagęszczarka, robocizna, ewentualny piasek" },
      body: `<p>Zasypuje się dopiero po wyschnięciu izolacji i zamontowaniu XPS. Wewnątrz domu i na zewnątrz robi się to <strong>równocześnie, warstwami</strong>, żeby ściana fundamentowa nie dostała jednostronnego naporu. Przy ścianie dawaj piasek lub pospółkę, które przepuszczają wodę, dalej może być grunt z wykopu, bez humusu i gruzu. ${X("zasypka")}</p>`,
      decision: {
        question: "Czy potrzebny jest drenaż opaskowy?",
        intro: "Koszt to dopłata względem kosztu kroku. Decyzję opiera się na opinii geotechnicznej, nie na wrażeniu.",
        chosen: "bez",
        options: [
          { id: "bez", name: "Bez drenażu",
            cost: { min: 0, max: 0 }, time: "0 dni", note: "grunt przepuszczalny, brak wody",
            pros: ["Brak kosztu", "Mniej instalacji do pilnowania"],
            cons: ["Ryzyko, jeśli grunt jednak zatrzymuje wodę"],
            why: "Dla gruntu przepuszczalnego (piasek, żwir) i niskiego poziomu wód z opinii geotechnicznej drenaż nie jest potrzebny, a ściany chroni izolacja i XPS." },
          { id: "drenaz", name: "Drenaż opaskowy",
            cost: { min: 7000, max: 14000 }, time: "+1–2 dni", note: "rura PVC Ø100 z filtrem, żwir, odbiornik",
            pros: ["Odprowadza wodę od fundamentu", "Chroni przy glinie i wysokiej wodzie"],
            cons: ["Wymaga odbiornika (studnia chłonna, rów)", "Wymaga serwisu"],
            why: "<b>Kiedy ma sens.</b> Gdy geotechnika stwierdza glinę, wodę w wykopie albo grunt zatrzymujący wodę. Wykonuje się go przed zasypką, wokół domu i ze spadkiem do odbiornika." }
        ]
      },
      tips: [
        "<b>Warstwy 20–30 cm i płyta wibracyjna 60–100 kg przy ścianie.</b> Ciężki walec trzymaj min. 1 m od ściany, bo uszkodzi izolację.",
        "<b>Grunt lekko wilgotny zagęszcza się najlepiej.</b> Suchy się nie zagęści, rozmoczony się nie zagęści wcale.",
        "<b>Nie sypij brył gliny większych niż pięść</b> i nie wrzucaj gruzu. Pustki po nich zapadną się po deszczu.",
        "<b>Nadsyp ok. 10 cm ponad teren</b>, bo i tak jeszcze osiądzie. Docelowy poziom wyrówna ogród w etapie 15."
      ],
      mistakes: [
        "<b>Zasypka naraz całą grubością.</b> Zagęścisz tylko wierzch, a pod spodem zostaną puste przestrzenie.",
        "<b>Humus lub gruz w zasypce.</b> Humus gnije i się zapada, a gruz uszkadza izolację."
      ],
      formal: [["Wpis o zasypce i zagęszczeniu warstwami", "kierownik budowy"]],
      checklist: ["Izolacja i XPS wyschnięte i nieuszkodzone", "Zasypka obustronnie, warstwami po 20–30 cm", "Każda warstwa zagęszczona", "W zasypce nie ma humusu ani gruzu"],
      quiz: [{
        q: "Jak grubą warstwę zasypki wolno zagęszczać naraz?",
        a: ["Ok. 20–30 cm", "Ok. 1 m, deszcz dogęści", "Cały wykop naraz"],
        correct: 0,
        explain: "<b>Płyta zagęszcza kilkanaście–kilkadziesiąt cm.</b> Grubsza warstwa jest zagęszczona tylko na wierzchu, a pod spodem zostaje luz, który osiądnie po kilku miesiącach razem z opaską."
      }]
    },
    {
      id: "kanalizacja-podposadzkowa",
      title: "Kanalizacja podposadzkowa",
      lead: "Rury kanalizacji pod podłogą układa się teraz, na zagęszczonej podsypce. Po wylaniu podkładu ich wymiana to kucie posadzki.",
      time: "1–2 dni", team: "hydraulik",
      facts: [["Rury", "PVC-KG Ø110–160", "rebar"], ["Spadek", "min. 2%", "layers"], ["Odcinki", "ok. 25–40 m", "layers"]],
      cost: { min: 3500, max: 6000, note: "rury i kształtki PVC-KG + robocizna" },
      body: `<p>Kanalizacja pod podłogą zbiera ścieki z łazienki, WC, kuchni i pralni i prowadzi je do wyjścia przez ścianę fundamentową, a dalej do <strong>oczyszczalni</strong> z etapu 03. Rury z PVC-KG leżą na pierwszej, zagęszczonej warstwie podsypki, ze spadkiem i z obsypką piaskiem.</p>
        <p>Pionów, które wyjdą nad posadzkę, i podejść do przyborów dotyczy etap 09. Tu układa się to, co zniknie pod podkładem.</p>`,
      tips: [
        "<b>Spadek min. 2%</b> (2 cm na metr) i łuki 2 × 45° zamiast kolanka 90°. Kolanka zatykają się najczęściej.",
        "<b>Czyszczaki (rewizje)</b> w pionach i przy wyjściu z budynku. Jedna rewizja za mało to hydraulik z kopaczem za kilka lat.",
        "<b>Próba szczelności przed obsypką</b> wodą lub powietrzem wg normy, a wynik do dziennika.",
        "<b>Obsypka piaskiem ok. 10 cm nad rurą</b> i zagęszczenie obok, nie na rurze. Kamienie obok rury odciskają jej ścianę.",
        "<b>Zdjęcia i szkic z miarą od ścian.</b> Pod posadzką to potem jedyna mapa, a piony i wpusty muszą trafić w miejsca z projektu."
      ],
      mistakes: [
        "<b>Rura układana „na oko” bez niwelatora.</b> Na odcinkach z za małym spadkiem osad się odkłada i rura się zapycha.",
        "<b>Otwarte końce rur po montażu.</b> Do rury trafia beton z podkładu i znika cała praca."
      ],
      formal: [["Protokół próby szczelności i wpis o robotach zanikających", "kierownik budowy, hydraulik, przed podkładem"]],
      checklist: ["Spadek min. 2% na całej długości", "Rewizje we właściwych miejscach", "Próba szczelności zrobiona i zapisana", "Końce rur zaślepione, zdjęcia i szkic z miarami"],
      quiz: [{
        q: "Dlaczego kanalizację pod podłogą sprawdza się szczelnie przed obsypką i podkładem?",
        a: ["Bo później dostęp do rur wymaga kucia posadzki", "Bo przepisy wymagają próby tylko zimą", "Bo rura rozszerza się po zalaniu"],
        correct: 0,
        explain: "<b>Po podkładzie to kucie.</b> Przeciek pod płytą oznacza podmoczony grunt, wilgoć i zapach, a naprawa wymaga zerwania posadzki."
      }]
    },
    {
      id: "podsypka-podklad",
      title: "Podsypka i podkład pod posadzkę",
      lead: "Wnętrze między ścianami wypełnia zagęszczona podsypka, na niej leży podkład betonowy i papa, i tak kończy się stan zero.",
      time: "1–2 tyg.", team: "3–4 osoby + płyta wibracyjna",
      facts: [["Podsypka", "ok. 35 cm", "layers"], ["Podkład", "10 cm, C8/10–C12/15", "layers"], ["Powierzchnia", "ok. 150 m²", "layers"]],
      cost: { min: 20000, max: 27000, note: "podsypka ok. 60 m³, podkład ok. 16 m³, papa" },
      body: `<p><strong>Podsypka</strong> to ok. 35 cm piasku grubego lub pospółki (ok. 60 m³ luzem), układana i zagęszczana warstwami po 15–20 cm. ${X("podsypka")}</p>
        <p>Na niej wylewa się <strong>podkład betonowy</strong> ok. 10 cm (C8/10–C12/15), który wyrównuje podłoże i jest podstawą dla izolacji. ${X("podklad")}</p>
        <p>Po wyschnięciu na podkład idzie papa jako <strong>izolacja podposadzkowa</strong>, wywinięta na ściany 15–20 cm i połączona z izolacją poziomą ścian. Styropian podłogowy EPS 15 cm, folia i jastrych z podłogówką pojawią się w etapie 11.</p>`,
      tips: [
        "<b>Zagęszczaj warstwami po 15–20 cm</b>, płytą 100–150 kg, minimum 3 przejścia na warstwę. Wszystkie piony i rury kanalizacji zabezpiecz przed uderzeniem.",
        "<b>Podkład wyrównaj łatą do ok. 5 mm na 2 m.</b> Papa i kolejne warstwy odwzorują każdą nierówność.",
        "<b>Daj podkładowi wyschnąć min. 7 dni</b> przed papą. Papa na mokrym betonie nie przylega.",
        "<b>Papę zagruntuj i zgrzewaj ostrożnie</b> z zakładem ok. 10 cm. Zakłady na narożach i przy ścianach zrób dłuższe."
      ],
      mistakes: [
        "<b>Podsypka wsypana i niezagęszczona.</b> Po roku podkład pęka, a pęknięcia przechodzą na posadzkę.",
        "<b>Podkład na błocie lub mokrym piasku.</b> Wilgoć zostaje w podłodze na wiele miesięcy."
      ],
      formal: [
        ["Wpis o zagęszczeniu podsypki, wykonaniu podkładu i izolacji podposadzkowej", "kierownik budowy"],
        ["Zakończenie stanu zero i zgoda na murowanie ścian parteru", "kierownik budowy, po odbiorze całego etapu"]
      ],
      checklist: [
        "Podsypka zagęszczona warstwami",
        "Podkład wylany w poziomie, ok. 10 cm",
        "Izolacja podposadzkowa ciągła, wywinięta na ściany i połączona z poziomą",
        "Piony i rury kanalizacji zabezpieczone i oznaczone",
        "Kierownik budowy zamknął stan zero wpisem"
      ]
    }
    ]
  });
})();
