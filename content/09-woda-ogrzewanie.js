/* Etap 09: Woda, kanalizacja, ogrzewanie (pompa ciepła, podłogówka). Ceny orientacyjne, 2026 r., okolice małego miasta. */
BUDOWA.addStage({
  id: "09-woda-ogrzewanie", nr: 9, title: "Woda, kanalizacja, ogrzewanie", icon: "🚿", category: "instal",
  summary: "Rury wody i kanalizacji w ścianach i podłogach, pompa ciepła powietrzna z zasobnikiem, podłogówka w całym domu i kominek jako dodatek. Bez gazu, z próbami szczelności przed wylewkami.",
  duration: "6–10 tyg. (z przerwą na wylewki)",
  steps: [

  /* 1 ------------------------------------------------------------------ */
  {
    id: "plan-instalacji",
    title: "Plan instalacji i kolejność prac",
    lead: "Hydraulik wchodzi po zamknięciu stanu surowego (okna, etap 07), razem z elektrykiem i przed tynkami. Najpierw kanalizacja, potem woda, na końcu podłogówka tuż przed wylewkami.",
    time: "1–2 dni uzgodnień", team: "hydraulik, elektryk, kierownik budowy",
    facts: [["Start", "po oknach, przed tynkami", "clock"], ["Pomieszczenie techniczne", "ok. 5–7 m² na parterze", "house"]],
    body: `
      <p>Rysunki wykonawcze instalacji zamówiłeś w etapie 02. Teraz trzeba je <strong>przenieść na ściany</strong>: hydraulik, elektryk i kierownik budowy obchodzą dom z projektem i markerem. Każdy punkt (umywalka, WC, wanna, zlew na wyspie, pralka, kran ogrodowy) dostaje wysokość i oś.</p>
      <p>Kolejność na budowie: <strong>piony i podejścia kanalizacji</strong> → <strong>rury wody</strong> → bruzdy elektryka → tynki (etap 11) → styropian i folia na podłodze (etap 11) → <strong>rury podłogówki i próba ciśnieniowa</strong> → wylewka (etap 11). Pompę ciepła montuje się przed wylewkami albo zaraz po nich, bo przyda się do wygrzewania jastrychu.</p>
      <p>Serce instalacji to <strong>pomieszczenie techniczne</strong> na parterze, przy ścianie bocznej, za którą stanie jednostka zewnętrzna pompy ciepła. Mieszczą się w nim: węzeł wodny, zasobnik CWU, moduł pompy, rozdzielacz podłogówki parteru, pralka i suszarka. Krótkie przewody to mniejsze straty i niższy koszt.</p>`,
    tips: [
      "<b>Wybierz armaturę przed hydraulikiem.</b> Wanna wolnostojąca, stelaże WC, baterie podtynkowe i odpływ liniowy mają własne wymiary montażowe. Model kupiony po instalacji to często kucie i przeróbki.",
      "<b>Oznacz wszystko na ścianie.</b> Oś punktu, wysokość od poziomu ±0,00 i średnica. Zrób zdjęcia ścian z miarką, zanim tynkarz je zakryje.",
      "<b>Pomieszczenie techniczne min. ok. 5–7 m².</b> Zasobnik 300 l ma ok. 60–70 cm średnicy, do tego dostęp serwisowy ok. 60 cm z przodu urządzeń i kratka ściekowa w posadzce.",
      "<b>Jedna ekipa na wodę, kanalizację i ogrzewanie.</b> Przy podziale na dwie firmy nikt nie odpowiada za styk instalacji, np. za podłączenie zasobnika do pompy."
    ],
    mistakes: [
      "<b>Hydraulik po tynkach.</b> Bruzdy w świeżym tynku, kurz i poprawki tynkarza na twój koszt.",
      "<b>Pomieszczenie techniczne na końcu domu.</b> Każdy metr rury od pompy do łazienek to straty ciepła i dłuższe czekanie na ciepłą wodę.",
      "<b>Brak kratki ściekowej w pomieszczeniu technicznym.</b> Zawór bezpieczeństwa zasobnika i pompy musi gdzieś odprowadzać wodę."
    ],
    formal: [
      ["Projekt instalacji wod-kan i c.o.", "z etapu 02 (dokumentacja rozszerzona); zmiany uzgadniaj z projektantem"],
      ["Wpis do dziennika budowy", "rozpoczęcie robót instalacyjnych, kierownik budowy"]
    ],
    checklist: [
      "Wybrane modele wanny, stelaży WC, baterii i odpływów",
      "Punkty wodne i kanalizacyjne oznaczone na ścianach (oś, wysokość)",
      "Pomieszczenie techniczne z kratką ściekową i miejscem na zasobnik",
      "Ustalona kolejność: hydraulik → elektryk → tynki → podłogówka → wylewki"
    ],
    quiz: [{
      q: "Kiedy hydraulik układa rury podłogówki?",
      a: ["Przed tynkami, razem z kanalizacją", "Po tynkach, na styropianie i folii, tuż przed wylewką", "Po wylewce, w nacięciach jastrychu"],
      correct: 1,
      explain: "<b>Podłogówka idzie na końcu stanu „brudnego”.</b> Rury leżą na styropianie i folii z etapu 11 i od razu po próbie ciśnieniowej zalewa je jastrych."
    }]
  },

  /* 2 ------------------------------------------------------------------ */
  {
    id: "kanalizacja-piony",
    title: "Piony kanalizacyjne i ich wentylacja",
    lead: "Pion to główna rura Ø110, która zbiera ścieki z łazienki na poddaszu i z parteru, a na dole łączy się z kanalizacją podposadzkową z etapu 04. Na górze pion musi oddychać.",
    time: "2–3 dni", team: "2 hydraulików",
    facts: [["Pion", "Ø110 mm", "layers"], ["Podejścia", "spadek ok. 2–3%", "layers"]],
    body: `
      <p>W domu referencyjnym wystarczą <strong>2 piony</strong>: jeden pod łazienką na poddaszu (wanna, umywalki, WC), drugi przy kuchni i pomieszczeniu technicznym. Piony stoją w narożnikach albo w ściankach instalacyjnych, nigdy w ścianie sypialni.</p>
      <p>Każdy pion ma na dole <strong>rewizję</strong> (otwór do czyszczenia) ok. 1 m nad podłogą, z dostępem przez klapkę. Wewnątrz domu używa się rur <strong>PP-HT</strong> (szare, na uszczelki), a pod posadzką zostają pomarańczowe PVC-KG z etapu 04.</p>
      <p>Spływająca woda zasysa powietrze. Bez wentylacji syfony się opróżniają i do łazienki wraca zapach. Co najmniej jeden pion wyprowadź <strong>ponad dach</strong> przez dachówkę wentylacyjną (wywiewka). Pozostałe zakończ <strong>zaworem napowietrzającym</strong> na poddaszu, w dostępnym miejscu.</p>`,
    cost: { min: 6000, max: 10000, note: "piony, podejścia, wywiewka, robocizna" },
    decision: {
      question: "Jakie rury w pionach?",
      intro: "Dotyczy rur w ścianach domu. Koszt to dopłata do instalacji z rur standardowych.",
      chosen: "pphts",
      options: [
        { id: "pphts", name: "PP-HT standard + mata akustyczna na pionach",
          cost: { min: 0, max: 0 }, time: "bez zmian", note: "obudowa pionów z wełną",
          pros: ["Tanie i łatwo dostępne kształtki", "Mata i obudowa wyciszają większość szumu"],
          cons: ["Przy kolanach słychać spływ, gdy pion jest blisko sypialni"],
          why: "Piony stoją w ściankach instalacyjnych z dala od sypialni, więc standard z wyciszeniem w obudowie wystarczy." },
        { id: "cicha", name: "Rury niskoszumowe (PP z wypełnieniem mineralnym)",
          cost: { min: 2000, max: 4000 }, time: "bez zmian", note: "ok. 3× droższe kształtki",
          pros: ["Wyraźnie ciszej, zwłaszcza w nocy", "Cięższe i sztywniejsze"],
          cons: ["Droższe kształtki", "Trzeba trzymać się jednego systemu"],
          why: "Ma sens, gdy pion musi przejść przy sypialni albo salonie i nie ma miejsca na grubą obudowę." },
        { id: "pvc", name: "PVC-U szare na klej",
          cost: { min: -1000, max: -500 }, time: "+1 dzień", note: "rzadko stosowane w domach",
          pros: ["Najtańszy materiał"],
          cons: ["Klejenie bez możliwości poprawki", "Głośniejsze i kruche na mrozie"],
          why: "Raczej nie w nowym domu. Oszczędność jest symboliczna, a poprawki są trudne." }
      ]
    },
    tips: [
      "<b>Wywiewka min. ok. 0,5 m nad dachem</b> i z dala od okien dachowych (orientacyjnie kilka metrów w poziomie). Przejście przez dachówkę robi dekarz albo hydraulik z gotowym zestawem do tego modelu dachówki.",
      "<b>Mocuj pion obejmami z gumą co ok. 1–2 m</b>, pod kielichami. Sztywne mocowanie bez gumy przenosi szum na ścianę.",
      "<b>Przejście przez strop w tulei</b> wypełnionej masą akustyczną lub wełną, a w strefie pożarowej (np. garaż) w kołnierzu ogniochronnym.",
      "<b>Kielichy zawsze pod prąd.</b> Ścieki płyną w kierunku kielicha kolejnej rury, nie pod jego krawędź."
    ],
    mistakes: [
      "<b>Wszystkie piony zamknięte zaworami.</b> Instalacja bez żadnego wylotu ponad dach potrafi „bulgotać” i wysysać syfony. Sprawdź w projekcie, który pion ma wywiewkę.",
      "<b>Zawór napowietrzający zamurowany na stałe.</b> Musi mieć dostęp i powietrze: klapka rewizyjna albo kratka.",
      "<b>Pion w ścianie sypialni.</b> Nawet cicha rura daje szum spuszczanej wody w nocy."
    ],
    quiz: [{
      q: "Po co pion kanalizacyjny wyprowadza się ponad dach?",
      a: ["Żeby woda deszczowa trafiała do kanalizacji", "Żeby spływające ścieki nie wysysały wody z syfonów i nie wracał zapach", "Żeby kominiarz mógł sprawdzić rurę"],
      correct: 1,
      explain: "<b>Wentylacja wyrównuje ciśnienie.</b> Bez niej spływ z WC zasysa wodę z syfonów umywalek, a przez puste syfony do domu wchodzi zapach z kanalizacji."
    }]
  },

  /* 3 ------------------------------------------------------------------ */
  {
    id: "podejscia-kanalizacyjne",
    title: "Podejścia: wanna wolnostojąca i wyspa kuchenna",
    lead: "Dwa punkty wymagają planu wcześniej niż reszta: wanna wolnostojąca w łazience na poddaszu i zlew w wyspie kuchennej. Oba odpływy idą w podłodze, a nie w ścianie.",
    time: "1–2 dni", team: "hydraulik",
    facts: [["Wanna", "odpływ Ø50, spadek min. 2%", "layers"], ["Wyspa", "zawór napowietrzający w szafce", "layers"]],
    body: `
      <p><strong>Wanna wolnostojąca</strong> stoi z dala od ściany, więc jej odpływ wychodzi z podłogi. Na poddaszu rura Ø50 biegnie do pionu w warstwie podłogowej nad stropem, pod styropianem i podłogówką. Przy spadku 2% każdy metr długości zabiera 2 cm wysokości, dlatego wanna powinna stać możliwie blisko pionu (do ok. 2–3 m).</p>
      <p>Woda do wanny wychodzi z podłogi do <strong>baterii wolnostojącej</strong>: dwie rury w posadzce i zestaw podtynkowy pod konkretny model baterii. Pełna wanna to ok. 300–400 kg, więc jej miejsce potwierdź z konstruktorem (strop filigran zwykle sobie radzi).</p>
      <p><strong>Wyspa kuchenna</strong>: zlew i zmywarka potrzebują odpływu Ø50 z posadzki parteru. Najlepiej, gdy wyprowadzenie zostawiono już w etapie 04 pod podkładem. Jeśli nie, rura może iść w warstwie styropianu (15 cm) ze spadkiem do najbliższego pionu. Z dala od pionu podejście wentyluje <strong>zawór napowietrzający</strong> w szafce wyspy.</p>`,
    cost: { min: 4000, max: 7000, note: "ok. 14 punktów kanalizacyjnych, syfony podpodłogowe, odpływ liniowy" },
    tips: [
      "<b>Średnice podejść:</b> umywalka Ø40, wanna, prysznic, zlew, pralka Ø50, WC Ø110. Podejście WC jak najkrócej do pionu.",
      "<b>Spadek ok. 2–3%.</b> Za mały daje osady, za duży (ponad ok. 5–6%) zrywa wodę z syfonów i szumi.",
      "<b>Wysokość warstw podłogi na poddaszu sprawdź przed montażem.</b> Rura Ø50 ze spadkiem na 2,5 m potrzebuje ok. 10 cm. Jeśli warstwy są cieńsze, wannę przesuń bliżej pionu albo prowadź odpływ pod stropem w suficie podwieszanym parteru.",
      "<b>Odpływ liniowy w prysznicu</b> wymaga ok. 7–10 cm wysokości syfonu. Kup go razem z wanną i baterią, zanim hydraulik zacznie.",
      "<b>Kran ogrodowy mrozoodporny</b> (zawór z odcięciem wewnątrz ściany) od strony tarasu i od frontu."
    ],
    mistakes: [
      "<b>Wanna kupiona po instalacji.</b> Odpływ wychodzi 20 cm obok otworu w wannie i trzeba kuć podłogę.",
      "<b>Odpływ wyspy bez wentylacji.</b> Zlew bulgocze, a zmywarka wysysa wodę z syfonu i w kuchni czuć kanalizację.",
      "<b>Rura kanalizacyjna na rurach podłogówki.</b> Kanalizacja idzie najniżej, pod styropianem. Krzyżowanie warstw kończy się za cienkim jastrychem."
    ],
    checklist: [
      "Odpływ wanny w osi z karty technicznej wanny",
      "Spadki podejść ok. 2–3% sprawdzone poziomicą",
      "Wyprowadzenie odpływu w wyspie i zawór napowietrzający w planie szafki",
      "Wszystkie końcówki zaślepione korkami przed tynkami i wylewką"
    ],
    quiz: [{
      q: "Wanna stoi 3 m od pionu, spadek odpływu to 2%. Ile wysokości zabiera sam spadek?",
      a: ["Ok. 2 cm", "Ok. 6 cm", "Ok. 15 cm"],
      correct: 1,
      explain: "<b>3 m × 2% = 6 cm.</b> Do tego dochodzi średnica rury i syfon, dlatego wanna wolnostojąca powinna stać blisko pionu."
    }]
  },

  /* 4 ------------------------------------------------------------------ */
  {
    id: "odejscie-do-oczyszczalni",
    title: "Odejście do oczyszczalni",
    lead: "Kanalizacja domu wychodzi przez rękaw w ścianie fundamentowej (etap 04) i rurą Ø160 spływa do przydomowej oczyszczalni z etapu 03. Przy budynku stawiasz studzienkę rewizyjną.",
    time: "1 dzień", team: "hydraulik + koparka",
    facts: [["Rura", "PVC-KG Ø160, spadek min. ok. 1,5–2%", "layers"], ["Oczyszczalnia", "ok. 5 RLM (etap 03)", "house"]],
    body: `
      <p>Między budynkiem a oczyszczalnią zostaje zwykle <strong>kilka do kilkunastu metrów</strong> rury. Studzienka rewizyjna (np. Ø315 lub Ø425) tuż przy domu pozwala przetkać przewód bez wchodzenia do budynku i zmienić kierunek trasy.</p>
      <p>Rura leży na podsypce z piasku, ze stałym spadkiem i bez „brzuchów”. Na głębokości mniejszej niż strefa przemarzania (ok. 1,0–1,2 m) trzeba ją <strong>ocieplić</strong> płytą XPS nad rurą. Wylot z budynku jest zwykle płytko, bo oczyszczalnia nie może stać za głęboko.</p>
      <p>Oczyszczalnię wybrała i ustawiła firma w etapie 03. Ten krok łączy ją z domem. Jeśli połączenie było w zakresie tamtej firmy, koszt tu znika. <strong>Deszczówka nie trafia do oczyszczalni</strong>: rynny idą do zbiornika lub drenażu (etap 15).</p>`,
    cost: { min: 1500, max: 3000, note: "studzienka rewizyjna + ok. 10 m rury Ø160, jeśli nie zrobiła tego firma od oczyszczalni" },
    tips: [
      "<b>Porównaj rzędne przed wykopem.</b> Wylot z budynku, spadek rury i wlot do oczyszczalni muszą się zgadzać. Różnica kilku centymetrów potrafi wymusić przestawienie zbiornika.",
      "<b>Zrób zdjęcie trasy z miarką</b> i wrysuj ją na mapę. Przyda się przy podjeździe, tarasie i basenie (etap 15).",
      "<b>Nad płytko położoną rurą XPS ok. 5–10 cm</b> szerszy od wykopu, zwłaszcza pod podjazdem, gdzie mróz wchodzi głębiej."
    ],
    mistakes: [
      "<b>Rura na gruzie albo kamieniach.</b> Osiada i robi się zastoisko, które zatyka się co kilka miesięcy.",
      "<b>Rynny podłączone do oczyszczalni.</b> Ulewa wypłukuje bakterie i zalewa drenaż rozsączający.",
      "<b>Brak studzienki przy domu.</b> Przy zatkaniu trzeba rozkopywać ogród."
    ],
    formal: [["Inwentaryzacja geodezyjna", "trasa i studzienki przed zasypaniem; geodeta, zwykle razem z innymi przyłączami"]],
    checklist: [
      "Spadek rury min. ok. 1,5–2% na całej długości",
      "Studzienka rewizyjna przy budynku",
      "Próba szczelności (zalanie) przed zasypaniem",
      "Geodeta zmierzył trasę przed zasypaniem"
    ]
  },

  /* 5 ------------------------------------------------------------------ */
  {
    id: "rury-wodne",
    title: "Rury wody zimnej i ciepłej",
    lead: "Do wody w domu jednorodzinnym używa się dziś rur z tworzyw: PEX, PP albo wielowarstwowych. Wszystkie wytrzymają dekady, różnią się sposobem łączenia i rozszerzalnością.",
    time: "3–5 dni", team: "2 hydraulików",
    facts: [["Punkty wodne", "ok. 16 (z kranami ogrodowymi)", "layers"], ["Średnica do punktu", "16 mm (zasilanie 20–26 mm)", "layers"]],
    body: `
      <p>Instalacja to trzy obiegi: <strong>zimna woda</strong>, <strong>ciepła woda</strong> i <strong>cyrkulacja</strong> (patrz krok o zasobniku). Rury w ścianach i podłogach biegną w otulinie albo w peszlu, żeby mogły pracować przy zmianach temperatury.</p>
      <p><strong>Izolacja rur</strong> to nie dodatek. Ciepła woda i cyrkulacja dostają otulinę o grubości zależnej od średnicy (WT2021 podają minimalne grubości dla przewodów ciepłej wody; dla rur do ok. 22 mm to ok. 20 mm otuliny, w przejściach przez ściany połowa, orientacyjnie). Zimna woda dostaje otulinę przeciw skraplaniu, szczególnie przy rurach ciepłej wody.</p>
      <p>Rury ciepłej i zimnej wody prowadź osobno, ciepłą powyżej zimnej. W bruzdach ściennych mocuj co ok. 50–80 cm, a w podłodze trzymaj z dala od rur podłogówki.</p>`,
    cost: { min: 11000, max: 16000, note: "rury, kształtki, otuliny, robocizna (z cyrkulacją)" },
    decision: {
      question: "Z jakich rur zrobić instalację wodną?",
      intro: "Koszt to dopłata albo oszczędność względem instalacji z rur wielowarstwowych.",
      chosen: "wielo",
      options: [
        { id: "wielo", name: "Wielowarstwowe PE-RT/Al/PE, złączki zaprasowywane",
          cost: { min: 0, max: 0 }, time: "3–5 dni", note: "warstwa aluminium w środku",
          pros: ["Mała rozszerzalność, rura trzyma kształt po wygięciu", "Szybkie, pewne łączenie praską", "Bariera tlenowa, ten sam system do wody i grzejnika łazienkowego"],
          cons: ["Złączki zawężają przekrój", "Potrzebna praska z właściwymi szczękami (system jednego producenta)"],
          why: "Najwygodniejsza do układu rozdzielaczowego: rura gnie się ręcznie, mało złączek i mało pracy przy rozszerzaniu. Ekipy znają ją najlepiej." },
        { id: "pex", name: "PEX w peszlu (sieciowany polietylen)",
          cost: { min: 0, max: 2000 }, time: "3–5 dni", note: "złączki zaciskane lub nasuwane",
          pros: ["Elastyczna, odporna na wysoką temperaturę", "Rura w peszlu da się wymienić bez kucia"],
          cons: ["Duża rozszerzalność, rura „pływa”", "Droższe złączki nasuwane"],
          why: "Dobra przy długich przebiegach w podłodze w peszlu. Wybór zależy głównie od tego, w czym pracuje twoja ekipa." },
        { id: "pp", name: "Polipropylen PP (zgrzewany)",
          cost: { min: -3000, max: -1000 }, time: "4–6 dni", note: "rury stabilizowane do ciepłej wody",
          pros: ["Najtańszy materiał", "Zgrzew nie przecieka, gdy jest dobrze zrobiony"],
          cons: ["Sztywny, każda zmiana kierunku to kształtka", "Duża rozszerzalność ciepłej wody (potrzebne kompensacje)", "Błędy zgrzewu zawężają rurę"],
          why: "Ma sens w układzie trójnikowym i przy doświadczonym zgrzewaczu. W podłodze i przy rozdzielaczach mniej wygodny." }
      ]
    },
    tips: [
      "<b>Zdjęcia każdej ściany i podłogi z miarką</b> zanim cokolwiek zakryjesz. To twoja dokumentacja powykonawcza: nie przewiercisz rury przy wieszaniu szafki.",
      "<b>Jeden system rur i złączek</b> od jednego producenta. Mieszanie systemów to utrata gwarancji na szczelność.",
      "<b>Otulina ze zszytymi szwami.</b> Na zakrętach docinaj klin, nie zgniataj otuliny, i zaklej taśmą.",
      "<b>Zawór odcinający na każdym punkcie</b> albo na rozdzielaczu. Wymiana baterii nie zatrzyma wtedy wody w całym domu."
    ],
    mistakes: [
      "<b>Złączka w posadzce.</b> Każde połączenie pod jastrychem to potencjalny przeciek. W podłodze tylko całe odcinki rur.",
      "<b>Ciepła woda bez otuliny.</b> Straty na drodze do łazienki i dłuższe czekanie na ciepłą wodę, a w posadzce dodatkowe grzanie podłogi.",
      "<b>Rura dociśnięta tynkiem bez peszla lub otuliny.</b> Nie ma miejsca na wydłużenie i tynk pęka wzdłuż rury."
    ],
    checklist: [
      "Jeden system rur i złączek, karta producenta na budowie",
      "Otulina na ciepłej wodzie i cyrkulacji, antykondensacyjna na zimnej",
      "Brak złączek w posadzce",
      "Zdjęcia tras z miarką przed tynkami"
    ],
    quiz: [{
      q: "Dlaczego w posadzce nie powinno być złączek?",
      a: ["Bo złączki są drogie", "Bo każde połączenie to możliwy przeciek, a pod jastrychem nie da się go naprawić bez kucia", "Bo przepisy zakazują rur w podłodze"],
      correct: 1,
      explain: "<b>Rura z jednego kawałka nie przecieka w środku.</b> Złączki zostawia się w dostępnych miejscach: przy rozdzielaczu i przy punkcie poboru."
    }]
  },

  /* 6 ------------------------------------------------------------------ */
  {
    id: "rozdzielacze-wody",
    title: "Węzeł wodny i rozdzielacze",
    lead: "Woda z przyłącza (etap 03) wchodzi do pomieszczenia technicznego. Tu przechodzi przez zawór, filtr i reduktor ciśnienia, a potem rozchodzi się po domu z rozdzielaczy.",
    time: "1–2 dni", team: "hydraulik",
    facts: [["Ciśnienie w domu", "ok. 3–4 bar po reduktorze", "layers"], ["Rozdzielacze", "2 szt.: parter i poddasze", "layers"]],
    body: `
      <p>Kolejność od ściany: <strong>zawór główny</strong> → <strong>filtr siatkowy</strong> (najlepiej samopłuczący) → <strong>reduktor ciśnienia</strong> z manometrem → <strong>zawór antyskażeniowy</strong> (zwrotny) → odejścia: rozdzielacz zimnej wody, zasilanie zasobnika CWU, kran ogrodowy z osobnym zaworem.</p>
      <p>W układzie <strong>rozdzielaczowym</strong> każdy punkt dostaje własną rurę z rozdzielacza, bez połączeń po drodze. Rozdzielacz parteru stoi w pomieszczeniu technicznym, a poddasza w szafce w łazience lub we wnęce obok. Zmiękczacz wody dołóż, gdy woda z wodociągu jest twarda (wynik z wodociągów albo test paskowy).</p>
      <p>Wodomierz główny jest w studni przy granicy (etap 03). Jeśli gmina pozwala, podlicznik ogrodowy obniża opłatę za ścieki przy podlewaniu i napełnianiu basenu.</p>`,
    cost: { min: 3000, max: 6000, note: "filtr, reduktor, zawory, 2 rozdzielacze w szafkach" },
    decision: {
      question: "Jak rozprowadzić wodę po domu?",
      intro: "Koszt to różnica względem układu rozdzielaczowego.",
      chosen: "rozdz",
      options: [
        { id: "rozdz", name: "Rozdzielaczowy (każdy punkt osobną rurą)",
          cost: { min: 0, max: 0 }, time: "bez zmian", note: "rura 16 mm do punktu",
          pros: ["Brak połączeń w ścianach i podłogach", "Każdy punkt odcinasz osobno przy rozdzielaczu", "Stałe ciśnienie przy kilku odbiorach naraz"],
          cons: ["Więcej metrów rury", "Szafka na rozdzielacz na każdej kondygnacji"],
          why: "Przy dwóch łazienkach, wannie i wyspie daje najwięcej spokoju: nic nie łączy się w ścianie, a awaria jednego punktu nie odcina wody w całym domu." },
        { id: "troj", name: "Trójnikowy (rura główna z odgałęzieniami)",
          cost: { min: -2000, max: -1000 }, time: "−1 dzień", note: "klasyczny układ",
          pros: ["Mniej rury, niższy koszt", "Nie potrzeba szafek"],
          cons: ["Połączenia ukryte w ścianach", "Spadek ciśnienia przy kilku kranach naraz"],
          why: "Wystarcza w małym domu z punktami blisko siebie. Przy naszym rozkładzie oszczędność jest niewielka." },
        { id: "mix", name: "Mieszany (rozdzielacz w łazience, reszta trójnikami)",
          cost: { min: -1000, max: 0 }, time: "bez zmian", note: "kompromis",
          pros: ["Łazienki bez połączeń w ścianach", "Krótsze rury do punktów w kuchni i technicznym"],
          cons: ["Dwa sposoby prowadzenia rur w jednym domu"],
          why: "Rozsądny, gdy kuchnia i pomieszczenie techniczne sąsiadują z węzłem wodnym." }
      ]
    },
    tips: [
      "<b>Reduktor ustaw na ok. 3–4 bar.</b> Wyższe ciśnienie z sieci niszczy baterie, uszczelki i zawory bezpieczeństwa zasobnika.",
      "<b>Filtr samopłuczący ok. 90–100 µm</b> przed reduktorem. Piasek z nowego przyłącza potrafi zablokować baterię termostatyczną w pierwszym tygodniu.",
      "<b>Szafka rozdzielacza min. ok. 60 × 50 cm</b> z dostępem bez zdejmowania płytek. Opisz każdy zawór: „wanna”, „WC góra”…",
      "<b>Osobny zawór na wodę ogrodową</b> z możliwością spuszczenia na zimę."
    ],
    mistakes: [
      "<b>Brak zaworu antyskażeniowego.</b> Woda z instalacji może cofnąć się do sieci; wodociąg może tego wymagać przy odbiorze (sprawdź w warunkach przyłączenia).",
      "<b>Rozdzielacz zabudowany płytkami.</b> Do zaworów nie da się dostać bez rozbierania ściany."
    ],
    checklist: [
      "Zawór główny, filtr, reduktor z manometrem, zawór antyskażeniowy",
      "Ciśnienie po reduktorze ok. 3–4 bar",
      "Zawory na rozdzielaczu opisane",
      "Szafki rozdzielaczy dostępne po wykończeniu"
    ]
  },

  /* 7 ------------------------------------------------------------------ */
  {
    id: "podlogowka",
    title: "Ogrzewanie podłogowe: pętle, rozstaw, rozdzielacze",
    lead: "Podłogówka grzeje cały dom niską temperaturą wody (ok. 30–35°C), a to idealny partner dla pompy ciepła. Rury leżą na styropianie i folii z etapu 11 i za chwilę znikną w jastrychu.",
    time: "3–5 dni", team: "2 hydraulików",
    facts: [["Rura", "PE-RT lub PEX 16 × 2 z barierą tlenową", "layers"], ["Pętla", "do ok. 80–100 m", "layers"], ["Rozstaw", "10–15 cm", "layers"]],
    body: `
      <p>Projektant dzieli dom na <strong>pętle</strong>: każde pomieszczenie dostaje co najmniej jedną, duży salon kilka. Pętla ma do ok. 80–100 m rury 16 mm, a pętle podpięte do jednego rozdzielacza powinny mieć zbliżoną długość. W domu referencyjnym to ok. <strong>10 pętli na parterze i 8 na poddaszu</strong>, z rozdzielaczem na każdej kondygnacji.</p>
      <p>Rozstaw zależy od strat ciepła: ok. <strong>10 cm w łazienkach</strong> i przy dużych przeszkleniach (strefa brzegowa), ok. <strong>15 cm w pokojach</strong>. Rury układa się w ślimak (spiralę), bo temperatura podłogi wychodzi wtedy równa. Garaż zostaje bez podłogówki albo z jedną pętlą temperującą.</p>
      <p>Na obwodzie każdego pomieszczenia jest <strong>taśma dylatacyjna</strong>, a w progach i na dużych płytach dylatacje jastrychu (etap 11). Rura przechodząca przez dylatację dostaje peszel ok. 30 cm.</p>
      <p><button class="xref" data-section="jastrych"><svg class="ico"><use href="#i-layers"/></svg>zobacz w przekroju</button></p>`,
    cost: { min: 15000, max: 22000, note: "ok. 170 m² ogrzewanej podłogi: rury, 2 rozdzielacze z przepływomierzami, szafki, robocizna" },
    widget: "kalkulator-ogrzewania",
    tips: [
      "<b>Rury przypinaj spinkami co ok. 30–50 cm</b> do styropianu z folią z nadrukiem siatki. Folia z siatką przyspiesza zachowanie rozstawu.",
      "<b>Odległość od ściany ok. 10 cm</b>, a od pionów kanalizacji i kominka więcej. Pod szafami w zabudowie i wyspą kuchenną rur nie kładź.",
      "<b>Rozdzielacz z przepływomierzami</b> pozwala wyregulować pętle hydraulicznie. Bez tego krótka pętla grzeje, a długa ledwo.",
      "<b>Opisz pętle na rozdzielaczu</b> i narysuj plan z długościami. Za 10 lat ten rysunek będzie wart złoto.",
      "<b>Jeden pokój „referencyjny” bez siłownika</b> (zwykle salon) zostawia stały przepływ dla pompy ciepła i pomaga obyć się bez bufora."
    ],
    mistakes: [
      "<b>Pętle o bardzo różnych długościach.</b> Woda wybiera najkrótszą drogę i najdłuższa pętla jest zimna.",
      "<b>Wysoka temperatura zasilania.</b> Podłogówka przy pompie ciepła ma grzać ok. 30–35°C. Ustawienie 45°C „żeby było szybciej” podnosi rachunki o kilkadziesiąt procent.",
      "<b>Deptanie i przejazdy taczką po rurach.</b> Rura zagnieciona na płasko to przewężenie na zawsze. Przejścia rób po deskach."
    ],
    checklist: [
      "Rozstaw zgodny z projektem (10 cm łazienki i strefy przy oknach, 15 cm pokoje)",
      "Długości pętli opisane na rozdzielaczu i na planie",
      "Taśma dylatacyjna na obwodzie, peszle na dylatacjach",
      "Brak rur pod zabudową i wyspą kuchenną"
    ],
    quiz: [{
      q: "Dlaczego w łazience rozstaw rur podłogówki jest mniejszy niż w sypialni?",
      a: ["Bo w łazience potrzeba wyższej temperatury i mało jest wolnej podłogi", "Bo płytki źle przewodzą ciepło", "Bo tak łatwiej układać"],
      correct: 0,
      explain: "<b>Łazienka ma ok. 24°C, sypialnia ok. 20°C.</b> Wanna i szafki zajmują część podłogi, więc na reszcie trzeba gęściej ułożyć rury."
    }]
  },

  /* 8 ------------------------------------------------------------------ */
  {
    id: "proba-przed-wylewka",
    title: "Próba ciśnieniowa przed wylewką",
    lead: "Zanim jastrych przykryje rury podłogówki, instalacja musi przejść próbę ciśnieniową. W czasie wylewania rury zostają pod ciśnieniem, żeby ewentualny przeciek był od razu widać.",
    time: "1 dzień (próba 24 h)", team: "hydraulik + kierownik budowy",
    facts: [["Próba", "ok. 6 bar, ok. 24 h (wg producenta rur)", "clock"], ["Przy wylewaniu", "ok. 3 bar", "layers"]],
    body: `
      <p>Instalator napełnia pętle wodą, odpowietrza i podnosi ciśnienie, zwykle do ok. <strong>6 bar</strong> (orientacyjnie: 1,5–2 razy ciśnienie robocze, wg instrukcji producenta rur). Po wyrównaniu temperatury ciśnienie nie może spadać przez czas próby, zwykle 24 h. Wynik wpisuje do <strong>protokołu</strong>.</p>
      <p>W dniu wylewania (etap 11) rury zostają pod ciśnieniem roboczym ok. <strong>3 bar</strong>. Jeśli wylewkarz przebije rurę, manometr spada od razu i miejsce da się naprawić złączką serwisową, zanim jastrych zwiąże.</p>
      <p>Tak samo sprawdza się instalację wodną przed tynkami (osobny protokół, patrz ostatni krok). Zimą próbę robi się powietrzem albo wodą z glikolem, bo pętle mogą zamarznąć.</p>`,
    tips: [
      "<b>Manometr na rozdzielaczu sfotografuj</b> na początku i na końcu próby, z widoczną godziną.",
      "<b>Zabezpiecz rozdzielacz</b> folią i deską przed betonem z pompy.",
      "<b>Pierwsze grzanie jastrychu</b> dopiero po czasie podanym przez producenta wylewki (dla jastrychu cementowego zwykle ok. 21–28 dni, anhydrytowego krócej). Wygrzewanie robi pompa ciepła według programu z etapu 11."
    ],
    mistakes: [
      "<b>Wylewka na rury bez ciśnienia.</b> Przebicie widać dopiero po tygodniach, w postaci mokrej plamy i spadku ciśnienia. Szukanie miejsca to kucie.",
      "<b>Próba z niezamkniętym zaworem do pompy.</b> Moduł hydrauliczny może nie wytrzymać ciśnienia próby. Odetnij urządzenia."
    ],
    formal: [["Protokół próby ciśnieniowej", "hydraulik + kierownik budowy, przed wylewką; wpis do dziennika budowy"]],
    checklist: [
      "Pętle odpowietrzone, urządzenia odcięte",
      "Ciśnienie próby utrzymane przez czas z instrukcji producenta",
      "Protokół podpisany przez kierownika budowy",
      "Rury pod ciśnieniem roboczym w dniu wylewania"
    ],
    quiz: [{
      q: "Dlaczego rury podłogówki zostają pod ciśnieniem w czasie wylewania jastrychu?",
      a: ["Żeby jastrych szybciej wysechł", "Żeby od razu zobaczyć przebicie rury i naprawić je przed związaniem", "Żeby rury nie wypływały na wierzch"],
      correct: 1,
      explain: "<b>Spadek na manometrze to sygnał alarmowy.</b> Przebicie widać od razu, a nie po miesiącu, gdy jastrych jest twardy."
    }]
  },

  /* 9 ------------------------------------------------------------------ */
  {
    id: "lazienka-poddasze",
    title: "Łazienka na poddaszu i drabinka",
    lead: "Łazienka z wanną wolnostojącą na poddaszu ma podłogówkę jak reszta domu, a ręczniki suszy drabinka elektryczna. Przy niskiej temperaturze wody z pompy drabinka wodna i tak byłaby letnia.",
    time: "w ramach instalacji", team: "hydraulik + elektryk (etap 08)",
    facts: [["Drabinka", "elektryczna ok. 400–600 W", "bulb"], ["Podłoga", "rozstaw ok. 10 cm", "layers"]],
    body: `
      <p>Podłogówka w łazience ma gęstszy rozstaw (ok. 10 cm) i zwykle osobną pętlę. Pod wanną wolnostojącą rury się nie kładzie, w strefie prysznica tak (jeśli pozwala na to odpływ liniowy i jego wysokość).</p>
      <p><strong>Drabinka elektryczna</strong> z grzałką i sterownikiem (program, czujnik) grzeje wtedy, kiedy chcesz, także latem, gdy podłogówka nie pracuje. Elektryk prowadzi do niej osobny obwód z RCD (etap 08), a gniazdo albo puszka przyłączeniowa stoi poza strefą natrysku.</p>
      <p>Na parterze ten sam schemat: łazienka z podłogówką i mniejsza drabinka. Na poddaszu sprawdź też <strong>izolację stropu</strong>: między ogrzewanymi kondygnacjami wystarczy cieńsza warstwa styropianu pod podłogówką (orientacyjnie 3–5 cm, wg projektu).</p>`,
    cost: { min: 3000, max: 6000, note: "2 drabinki elektryczne ze sterownikiem (poddasze i parter)" },
    decision: {
      question: "Jaka drabinka w łazience?",
      intro: "Koszt to różnica względem drabinek elektrycznych.",
      chosen: "elektr",
      options: [
        { id: "elektr", name: "Elektryczna z grzałką i sterownikiem",
          cost: { min: 0, max: 0 }, time: "montaż 1 h", note: "osobny obwód z etapu 08",
          pros: ["Grzeje niezależnie od pory roku", "Brak rur do grzejnika", "Prąd częściowo z PV (etap 10)"],
          cons: ["Zużywa prąd przy częstym używaniu (kilkadziesiąt do ok. 150 zł/rok, orientacyjnie)"],
          why: "Przy pompie ciepła i podłogówce woda ma ok. 30–35°C, za mało dla grzejnika. Drabinka elektryczna daje ciepłe ręczniki o każdej porze." },
        { id: "wodna", name: "Wodna z instalacji c.o.",
          cost: { min: 500, max: 1500 }, time: "+0,5 dnia", note: "osobne rury z rozdzielacza",
          pros: ["Brak zużycia prądu przez grzałkę"],
          cons: ["Przy 30–35°C ledwo ciepła", "Nie grzeje latem", "Dodatkowe rury i zawory"],
          why: "Ma sens przy kotle z wysoką temperaturą wody, nie przy podłogówce z pompą ciepła." },
        { id: "mieszana", name: "Wodno-elektryczna (grzałka w grzejniku wodnym)",
          cost: { min: 1000, max: 2000 }, time: "+0,5 dnia", note: "oba zasilania",
          pros: ["Zimą trochę ciepła z wody, latem z grzałki"],
          cons: ["Najdroższa i najbardziej skomplikowana", "Grzałka w zamkniętym obiegu wymaga zaworów"],
          why: "Raczej przy kotle. Przy naszym układzie dopłacasz za rury, które niewiele dają." }
      ]
    },
    tips: [
      "<b>Wysokość drabinki</b> dobierz do wanny i ścian skośnych. Przy skosie poddasza sprawdź, czy da się swobodnie zdjąć ręcznik.",
      "<b>Sterownik z programem tygodniowym</b> lub czujnikiem ruchu oszczędza prąd. Drabinka 500 W włączona na stałe to ok. 12 kWh na dobę.",
      "<b>Wnęka na rozdzielacz poddasza</b> poza strefą wody, np. w szafce przy łazience."
    ],
    mistakes: [
      "<b>Podłogówka pod wanną wolnostojącą.</b> Ciepło idzie w wannę, a rury blokują odpływ.",
      "<b>Drabinka bez osobnego obwodu.</b> Gniazdo w łazience z grzałką, suszarką do włosów i pralką wybija bezpieczniki."
    ],
    checklist: [
      "Osobna pętla podłogówki w łazience, rozstaw ok. 10 cm",
      "Puszka zasilania drabinki poza strefą natrysku (etap 08)",
      "Brak rur pod wanną wolnostojącą"
    ]
  },

  /* 10 ------------------------------------------------------------------ */
  {
    id: "dobor-pompy-ciepla",
    title: "Pompa ciepła: dobór mocy i typ",
    lead: "Pompa ciepła powietrzna to jedyne źródło ciepła w domu: grzeje podłogi i wodę użytkową. Moc dobiera projektant z obliczeń strat ciepła (OZC), a nie „na metry”.",
    time: "1–2 tyg. (dobór i dostawa)", team: "projektant instalacji, instalator",
    facts: [["Zapotrzebowanie", "orientacyjnie 6–8 kW", "bulb"], ["Typowa pompa", "ok. 8 kW (A7/W35)", "bulb"]],
    body: `
      <p>Dom zgodny z <strong>WT2021</strong> (ściany z 20 cm styropianu, okna trzyszybowe, rekuperacja z etapu 10) traci zimą orientacyjnie <strong>30–45 W na m²</strong>. Dla ok. 190 m² ogrzewanej powierzchni (bez garażu) wychodzi ok. <strong>6–8 kW</strong> projektowego obciążenia cieplnego. Projektant liczy je dokładnie (norma PN-EN 12831) i do tego dobiera urządzenie: <strong>sprawdź u projektanta</strong>.</p>
      <p>Pompa z tabliczką „8 kW” daje tyle przy +7°C na zewnątrz i 35°C wody. W mrozie −15°C jej moc spada, a dobór uwzględnia temperaturę obliczeniową twojej strefy klimatycznej. Krótkie, najmroźniejsze dni pokrywa grzałka w pompie. Dom bez gazu i bez kotła ma tylko jedno źródło, więc dobór powinien być rzetelny, ale nie z dużym zapasem: przewymiarowana pompa często się włącza i wyłącza (taktuje) i szybciej się zużywa.</p>
      <p>Jednostka zewnętrzna stoi <strong>przy ścianie bocznej</strong> domu, za pomieszczeniem technicznym. Prąd w części daje fotowoltaika (8 modułów, etap 10).</p>`,
    cost: { min: 34000, max: 46000, note: "pompa monoblok ok. 8 kW z modułem hydraulicznym, zasobnik w kolejnym kroku, montaż i uruchomienie" },
    decision: {
      question: "Jaka pompa ciepła?",
      intro: "Koszt to różnica względem pompy powietrznej typu monoblok. Gaz odpada (decyzja z etapu 03).",
      chosen: "monoblok",
      options: [
        { id: "monoblok", name: "Powietrzna monoblok",
          cost: { min: 0, max: 0 }, time: "montaż 2–3 dni", note: "obieg chłodniczy zamknięty w jednostce zewnętrznej",
          pros: ["Do domu wchodzą tylko rury z wodą, bez czynnika chłodniczego", "Montaż bez uprawnień chłodniczych", "Często na naturalnym czynniku R290 (propan)"],
          cons: ["Rury z wodą na zewnątrz trzeba chronić przed zamarzaniem", "Przy R290 strefy bezpieczeństwa wokół jednostki"],
          why: "Prosty montaż, mniej miejsc na wyciek czynnika i łatwy serwis. Jednostka przy ścianie bocznej jest kilka metrów od pomieszczenia technicznego, więc krótkie rury nie są problemem." },
        { id: "split", name: "Powietrzna split",
          cost: { min: -2000, max: 2000 }, time: "montaż 2–3 dni", note: "moduł wewnątrz, rury z czynnikiem przez ścianę",
          pros: ["Na zewnątrz nie ma rur z wodą, nie ma ryzyka zamarzania", "Większy wybór modułów wewnętrznych z zasobnikiem"],
          cons: ["Montaż wymaga instalatora z certyfikatem F-gazowym", "Czynnik chłodniczy krąży w domu: szczelność i przeglądy", "Ograniczona długość przewodów chłodniczych"],
          why: "Dobra, gdy jednostka musi stać daleko od domu albo w miejscu, gdzie rury z wodą byłyby narażone na mróz." },
        { id: "gruntowa", name: "Gruntowa (odwierty lub kolektor poziomy)",
          cost: { min: 25000, max: 45000 }, time: "+2–4 tyg.", note: "odwierty ok. 2 × 70–90 m",
          pros: ["Najwyższa sprawność zimą", "Brak jednostki zewnętrznej i jej hałasu", "Możliwe tanie chłodzenie pasywne latem"],
          cons: ["Dopłata kilkudziesięciu tysięcy złotych", "Odwierty to osobne formalności i wiertnica na działce", "Kolektor poziomy zajmuje ogród (koliduje z basenem)"],
          why: "Przy domu w standardzie WT2021 i z PV oszczędność na prądzie zwraca dopłatę bardzo długo. Rozważ, jeśli zależy ci na ciszy i chłodzeniu." }
      ]
    },
    tips: [
      "<b>Zamów OZC (obliczenie obciążenia cieplnego)</b> w ramach projektu instalacji. To kilkaset złotych, a od mocy pompy zależy kilkanaście tysięcy.",
      "<b>Patrz na SCOP dla klimatu chłodniejszego i 35°C</b>, nie na COP z prospektu przy +7°C. Różnica na rachunku to kilkaset złotych rocznie.",
      "<b>Hałas w dB(A) mocy akustycznej</b> porównuj na tych samych warunkach. Cicha jednostka to mniej sporów z sąsiadem.",
      "<b>Sprawdź warunki dopłat przed zamówieniem</b> (etap 00). Program może wymagać urządzenia z listy i wniosku przed zakupem; w budżecie żadnej dotacji nie zakładamy."
    ],
    mistakes: [
      "<b>Dobór „10 kW na wszelki wypadek”.</b> Pompa przewymiarowana taktuje, częściej się psuje i kosztuje więcej.",
      "<b>Wybór po mocy na tabliczce.</b> Liczy się moc przy temperaturze obliczeniowej twojej strefy, np. −16°C lub −20°C.",
      "<b>Pompa bez serwisu w okolicy.</b> Awaria w styczniu i serwis za 200 km to tydzień na grzałce."
    ],
    formal: [
      ["Karta katalogowa i deklaracja zgodności", "od dostawcy; potrzebne do wniosku o dopłatę"],
      ["Uruchomienie przez autoryzowany serwis", "warunek gwarancji u większości producentów"]
    ],
    quiz: [{
      q: "Co oznacza zapis „8 kW (A7/W35)” na pompie ciepła?",
      a: ["Pompa zawsze daje 8 kW", "Moc przy +7°C powietrza na zewnątrz i 35°C wody grzewczej", "Pompa zużywa 8 kW prądu"],
      correct: 1,
      explain: "<b>Moc zależy od warunków.</b> W mrozie spada, dlatego projektant sprawdza moc przy temperaturze obliczeniowej, a nie z tabliczki."
    }, {
      q: "Dlaczego nie warto kupować pompy ciepła z dużym zapasem mocy?",
      a: ["Bo zajmuje więcej miejsca", "Bo często się włącza i wyłącza, przez co pracuje mniej sprawnie i krócej żyje", "Bo nie da się jej podłączyć do podłogówki"],
      correct: 1,
      explain: "<b>Taktowanie to wróg sprężarki.</b> Pompa dobrana do strat ciepła pracuje długo i spokojnie na niskiej mocy."
    }]
  },

  /* 11 ------------------------------------------------------------------ */
  {
    id: "montaz-pompy",
    title: "Montaż jednostki zewnętrznej",
    lead: "Jednostka zewnętrzna stoi przy ścianie bocznej, na własnym fundamencie, ok. 30 cm nad terenem. Musi mieć powietrze, odpływ skroplin i ciszę od strony sypialni i sąsiada.",
    time: "1–2 dni", team: "instalator + elektryk",
    facts: [["Nad terenem", "ok. 20–30 cm (śnieg)", "layers"], ["Od ściany", "min. ok. 30 cm (wg producenta)", "layers"]],
    body: `
      <p>Jednostka stoi na <strong>fundamencie betonowym</strong> albo dwóch belkach na podsypce, z konsolą podłogową na wibroizolatorach. Zawieszenie na ścianie przenosi drgania do domu, więc w domu z pustaka unikaj go przy sypialniach.</p>
      <p>Przy odszranianiu z jednostki spływa woda, zimą nawet kilkanaście litrów na dobę. <strong>Skropliny</strong> odprowadź rurą do studzienki żwirowej poniżej strefy przemarzania albo do drenażu, nie na chodnik (lód).</p>
      <p>Przez ścianę wchodzą rury zasilania i powrotu (w monobloku z wodą), przewód zasilający i sterowanie. Przepusty planuje się wcześniej, a po montażu uszczelnia i ociepla. Przy pompie na <strong>R290</strong> producent podaje strefę bezpieczeństwa: bez studzienek, zagłębień i źródeł zapłonu blisko jednostki.</p>`,
    cost: { min: 2000, max: 4000, note: "fundament, konsola, wibroizolatory, studzienka na skropliny, przepusty" },
    tips: [
      "<b>Wylot powietrza nie w stronę okien sypialni ani tarasu</b>. Zimne powietrze i szum lecą kilka metrów.",
      "<b>Ochrona rur monobloku przed mrozem:</b> glikol w obiegu albo zawory antyzamarzaniowe (opróżniają rury przy braku prądu). Wybór zależy od producenta.",
      "<b>Zostaw ok. 1 m wolnego miejsca przed jednostką</b> dla serwisu i przepływu powietrza. Żywopłot sadź dalej (etap 15).",
      "<b>Daszek tylko systemowy</b> albo w odległości z instrukcji. Za niski zasysa własne zimne powietrze i obniża sprawność."
    ],
    mistakes: [
      "<b>Jednostka w narożniku między ścianami.</b> Zimne powietrze krąży, pompa zasysa je z powrotem i spada sprawność.",
      "<b>Skropliny na kostce.</b> Zimą lodowisko przy ścianie i zawilgocony cokół.",
      "<b>Jednostka przy granicy i oknie sąsiada.</b> Hałas nocą to najczęstszy spór o pompy ciepła. Sprawdź ograniczenia hałasu u projektanta."
    ],
    checklist: [
      "Fundament poziomy, jednostka ok. 20–30 cm nad terenem",
      "Odległości od ścian wg instrukcji producenta",
      "Skropliny odprowadzone poniżej strefy przemarzania",
      "Przepusty uszczelnione i ocieplone",
      "Rury zewnętrzne ocieplone i zabezpieczone przed zamarzaniem"
    ]
  },

  /* 12 ------------------------------------------------------------------ */
  {
    id: "zasobnik-cwu",
    title: "Zasobnik ciepłej wody i cyrkulacja",
    lead: "Pompa ciepła grzeje wodę użytkową w zasobniku 300 l z dużą wężownicą. Cyrkulacja sprawia, że ciepła woda leci z kranu po kilku sekundach, a nie po pół minuty.",
    time: "1–2 dni", team: "instalator",
    facts: [["Zasobnik", "300 l, wężownica min. ok. 3 m²", "layers"], ["Temperatura", "ok. 48–55°C", "bulb"]],
    body: `
      <p>Przy pompie ciepła zasobnik ma <strong>powiększoną wężownicę</strong> (ok. 3 m² i więcej), bo woda grzewcza ma niższą temperaturę niż przy kotle. 300 l wystarcza dla 4 osób i napełnienia wanny wolnostojącej (ok. 180–250 l mieszanej wody).</p>
      <p>Na co dzień woda ma ok. 48–55°C. Raz w tygodniu pompa albo grzałka podgrzewa zasobnik do ok. <strong>60–65°C</strong> (dezynfekcja termiczna przeciw bakteriom Legionella). Na wyjściu stoi <strong>zawór mieszający termostatyczny</strong>, żeby z kranu nie leciał wrzątek.</p>
      <p><strong>Cyrkulacja</strong> to dodatkowa rura z łazienek z powrotem do zasobnika i mała pompa. Sterujesz nią programem (rano i wieczorem) albo przyciskiem, a nie całą dobę: cyrkulacja pracująca bez przerwy wychładza zasobnik i zabiera prąd.</p>`,
    cost: { min: 4500, max: 8000, note: "zasobnik 300 l z grzałką, naczynie i zawory, pompa cyrkulacyjna z programem" },
    tips: [
      "<b>Naczynie wzbiorcze do wody użytkowej</b> (białe lub niebieskie) i zawór bezpieczeństwa ok. 6 bar z odpływem do kratki.",
      "<b>Anoda magnezowa:</b> sprawdzaj co 1–2 lata, a przy twardej wodzie częściej.",
      "<b>Pompa cyrkulacyjna z programatorem</b> albo termostatem na powrocie. Pracuje kilka godzin dziennie i zużywa kilka W.",
      "<b>Grzanie wody w dzień, gdy świeci słońce</b>: ustaw priorytet CWU w godzinach produkcji PV (etap 10)."
    ],
    mistakes: [
      "<b>Zasobnik ze zwykłą wężownicą od kotła.</b> Pompa nie odda mocy, woda nie dogrzeje się do 50°C i grzałka pracuje za nią.",
      "<b>Cyrkulacja całą dobę.</b> Straty kilku kWh dziennie i zimna woda w zasobniku wieczorem.",
      "<b>Brak zaworu mieszającego</b> przy dezynfekcji termicznej. Woda 65°C parzy w kilka sekund."
    ],
    checklist: [
      "Zasobnik z wężownicą do pompy ciepła (min. ok. 3 m²)",
      "Zawór bezpieczeństwa i naczynie wzbiorcze CWU",
      "Zawór mieszający termostatyczny na wyjściu",
      "Program dezynfekcji termicznej ustawiony",
      "Cyrkulacja z programem czasowym, rury w otulinie"
    ]
  },

  /* 13 ------------------------------------------------------------------ */
  {
    id: "bufor",
    title: "Bufor: potrzebny czy nie?",
    lead: "Bufor to zbiornik wody grzewczej między pompą a podłogówką. W domu z podłogówką na całej powierzchni często nie jest potrzebny, ale decyduje o tym producent pompy i projektant.",
    time: "decyzja przy projekcie", team: "projektant, instalator",
    facts: [["Woda w podłogówce", "orientacyjnie 200–300 l", "layers"]],
    body: `
      <p>Pompa ciepła potrzebuje <strong>minimalnej ilości wody w obiegu</strong> i stałego przepływu, żeby pracować długo i bez taktowania, a przy odszranianiu mieć skąd wziąć ciepło. Podłogówka w całym domu ma w rurach i jastrychu ogromną bezwładność, często wystarczającą zamiast bufora.</p>
      <p>Warunek: część pętli zostaje <strong>zawsze otwarta</strong> (np. salon bez siłownika), a regulacja temperatury idzie krzywą grzewczą pompy, a nie zamykaniem pętli. Gdy wszystkie pokoje mają siłowniki i potrafią zamknąć się jednocześnie, bufor albo sprzęgło stają się potrzebne.</p>
      <p>Bufor jest też konieczny przy <strong>kominku z płaszczem wodnym</strong> (patrz następny krok). Dlatego obie decyzje podejmij razem.</p>`,
    decision: {
      question: "Czy instalować bufor?",
      intro: "Opcje niosą cały koszt kroku. Ostatecznie rozstrzyga instrukcja producenta pompy.",
      chosen: "bez",
      options: [
        { id: "bez", name: "Bez bufora (bezpośrednio na podłogówkę)",
          cost: { min: 0, max: 0 }, time: "—", note: "salon bez siłownika, regulacja krzywą grzewczą",
          pros: ["Najwyższa sprawność, brak dodatkowej pompy i strat", "Mniej miejsca w pomieszczeniu technicznym", "Najprostsza hydraulika"],
          cons: ["Wymaga dopuszczenia przez producenta pompy", "Część pętli zawsze otwarta"],
          why: "Podłogówka w całym domu ma dużo wody i bezwładności, a pompa monoblok z inwerterem zmniejsza moc. Bez kominka z płaszczem nie ma powodu do bufora." },
        { id: "szereg", name: "Mały bufor szeregowy (ok. 40–60 l) na powrocie",
          cost: { min: 1500, max: 3000 }, time: "+0,5 dnia", note: "bez dodatkowej pompy",
          pros: ["Zwiększa ilość wody w obiegu przy odszranianiu", "Pozwala na siłowniki w większości pokoi"],
          cons: ["Dodatkowy koszt i miejsce", "Straty ciepła z bufora (do ocieplenia)"],
          why: "Dobry kompromis, gdy producent wymaga większej pojemności wodnej albo gdy chcesz sterować każdym pokojem osobno." },
        { id: "sprzeglo", name: "Bufor równoległy (sprzęgło) 100–200 l",
          cost: { min: 3500, max: 6000 }, time: "+1 dzień", note: "druga pompa obiegowa",
          pros: ["Rozdziela obieg pompy i podłogówki", "Pozwala dołączyć drugie źródło (kominek z płaszczem)"],
          cons: ["Mieszanie wody obniża sprawność pompy", "Druga pompa obiegowa, więcej prądu i awarii"],
          why: "Ma sens tylko przy kilku źródłach ciepła lub kilku obiegach o różnych temperaturach." }
      ]
    },
    tips: [
      "<b>Zapytaj producenta o minimalną pojemność wodną instalacji</b> i porównaj z wyliczeniem pętli. To jedna liczba, która rozstrzyga sprawę.",
      "<b>Nie montuj bufora „bo wszyscy montują”.</b> Każdy zbiornik to straty i mieszanie temperatur.",
      "<b>Zostaw miejsce i trójniki z zaworami</b> na ewentualny mały bufor. Dołożenie go za rok będzie wtedy łatwe."
    ],
    mistakes: [
      "<b>Siłowniki na wszystkich pętlach bez bufora.</b> Gdy wszystkie się zamkną, pompa nie ma przepływu i wpada w awarię.",
      "<b>Duże sprzęgło przy jednym źródle ciepła.</b> Płacisz za zbiornik i pompę, które obniżają sprawność."
    ],
    quiz: [{
      q: "Kiedy bufor przy pompie ciepła staje się konieczny?",
      a: ["Zawsze, w każdym domu", "Gdy wszystkie pętle mogą się zamknąć naraz albo jest drugie źródło ciepła, np. kominek z płaszczem", "Tylko przy podłogówce"],
      correct: 1,
      explain: "<b>Bufor gwarantuje przepływ i pojemność wodną.</b> Przy otwartych pętlach podłogówki w całym domu tę rolę pełni sama instalacja."
    }]
  },

  /* 14 ------------------------------------------------------------------ */
  {
    id: "kominek",
    title: "Kominek na drewno jako dodatek",
    lead: "Kominek w salonie to przyjemność i awaryjne źródło ciepła, nie ogrzewanie domu. Wkład zamknięty z powietrzem z zewnątrz podłączasz do komina z etapu 05.",
    time: "2–3 dni (wkład), obudowa w etapie 13", team: "zdun lub instalator kominków, kominiarz",
    facts: [["Moc wkładu", "orientacyjnie 6–9 kW", "bulb"], ["Komin", "systemowy ceramiczny (etap 05)", "layers"]],
    body: `
      <p>Szczelny dom w standardzie WT2021 potrzebuje zimą ok. 6–8 kW na cały budynek. Kominek o mocy 8 kW w jednym salonie szybko go przegrzewa. Dlatego wybieraj <strong>mały wkład</strong> i traktuj go jako dodatek na chłodne wieczory i zapas na wypadek awarii prądu.</p>
      <p>W domu z rekuperacją (etap 10) wkład musi być <strong>zamknięty i szczelny</strong>, z <strong>powietrzem do spalania doprowadzonym z zewnątrz</strong> kanałem w podłodze lub ścianie. Inaczej rekuperator i kominek walczą o powietrze i dym może cofnąć się do salonu.</p>
      <p>Obudowa, płyty i wykończenie kominka to etap 13. Tu liczymy wkład, podłączenie do komina, kanał powietrza i odbiór kominiarski.</p>`,
    cost: { min: 5000, max: 10000, note: "wkład zamknięty ok. 6–9 kW z certyfikatem, czopuch, kanał powietrza z zewnątrz, montaż" },
    decision: {
      question: "Jaki kominek?",
      intro: "Koszt to dopłata względem zwykłego wkładu zamkniętego (obudowa w etapie 13).",
      chosen: "bez",
      options: [
        { id: "bez", name: "Wkład zamknięty bez rozprowadzenia ciepła",
          cost: { min: 0, max: 0 }, time: "2–3 dni", note: "grzeje salon, powietrze z zewnątrz",
          pros: ["Prosty, tani i bezawaryjny", "Nie wpływa na pracę pompy ciepła", "Zgodny z rekuperacją przy szczelnym wkładzie"],
          cons: ["Ciepło głównie w salonie (otwarty na kuchnię)", "Przy dłuższym paleniu salon się przegrzewa"],
          why: "Dom grzeje pompa ciepła. Kominek ma być dla przyjemności, więc prosty, szczelny wkład wystarczy. Komin z etapu 05 przewidziano właśnie do kominka zamkniętego z powietrzem z zewnątrz." },
        { id: "dgp", name: "Z rozprowadzeniem gorącego powietrza (DGP)",
          cost: { min: 4000, max: 8000 }, time: "+2–3 dni", note: "kanały do kilku pokoi",
          pros: ["Ciepło trafia do kilku pomieszczeń", "Mniej przegrzewania salonu"],
          cons: ["Kanały w stropie i ścianach, kolizje z rekuperacją", "Kurz i szum w kratkach", "Przy rekuperacji w dużej mierze zbędne"],
          why: "Ma sens w domu bez rekuperacji i z grzejnikami, gdy kominek grzeje często. W naszym domu rekuperator i tak rozprowadza powietrze." },
        { id: "plaszcz", name: "Z płaszczem wodnym, podłączony do instalacji c.o.",
          cost: { min: 10000, max: 18000 }, time: "+3–5 dni", note: "wymaga bufora i zabezpieczeń",
          pros: ["Nadwyżka ciepła trafia do bufora i podłogówki", "Mniej pracy pompy ciepła przy częstym paleniu"],
          cons: ["Bufor, wymiennik, zabezpieczenia przed przegrzaniem", "Wymaga zasilania pomp: przy awarii prądu kłopot", "Skomplikowana współpraca z pompą ciepła"],
          why: "Opłaca się, gdy masz tanie drewno i palisz codziennie. Przy pompie ciepła i PV dopłata zwraca się bardzo długo." }
      ]
    },
    tips: [
      "<b>Wkład z certyfikatem zgodności z wymogami ekoprojektu</b> i sprawdzona uchwała antysmogowa w twoim województwie. Starsze wkłady mogą być zakazane.",
      "<b>Mniejsza moc niż myślisz:</b> orientacyjnie 6–9 kW, z możliwością pracy na niskiej mocy. Większy wkład tylko przegrzewa salon.",
      "<b>Kanał powietrza z zewnątrz</b> zwykle Ø100–125 mm z przepustnicą. Najłatwiej położyć go w warstwie podłogi przed wylewką (etap 11).",
      "<b>Odbiór kominiarski</b> przed pierwszym paleniem: drożność, szczelność, ciąg. Potem przegląd co roku."
    ],
    mistakes: [
      "<b>Otwarte palenisko przy rekuperacji.</b> Dym cofa się do salonu, a ciepło ucieka kominem.",
      "<b>Za duży kominek „do ogrzewania całego domu”.</b> W szczelnym domu salon ma 28°C, a reszta jest grzana i tak przez pompę.",
      "<b>Mokre drewno.</b> Max ok. 20% wilgotności (sezonowanie 1,5–2 lata). Mokre drewno to sadza w kominie i dym u sąsiadów."
    ],
    formal: [
      ["Opinia kominiarska", "komin i podłączenie wkładu, przed odbiorem domu (etap 16)"],
      ["Deklaracja do CEEB", "zgłoszenie źródła ciepła (pompa i kominek) do Centralnej Ewidencji Emisyjności Budynków; termin wg aktualnych przepisów, sprawdź"]
    ],
    checklist: [
      "Wkład zamknięty z certyfikatem, moc ok. 6–9 kW",
      "Powietrze do spalania z zewnątrz",
      "Podłączenie do komina z etapu 05, czopuch uszczelniony",
      "Protokół kominiarza przed pierwszym paleniem"
    ],
    quiz: [{
      q: "Dlaczego w domu z rekuperacją kominek powinien mieć powietrze z zewnątrz?",
      a: ["Żeby szybciej się rozpalał", "Żeby nie zabierał powietrza z salonu i dym nie cofał się do domu", "Żeby nie trzeba było czyścić komina"],
      correct: 1,
      explain: "<b>Szczelny dom nie ma szczelin, przez które wpada powietrze.</b> Kominek musi dostać je osobnym kanałem, inaczej podciśnienie wciąga dym z powrotem."
    }]
  },

  /* 15 ------------------------------------------------------------------ */
  {
    id: "proby-i-odbiory",
    title: "Próby szczelności, uruchomienie i odbiór",
    lead: "Na końcu każda instalacja dostaje swój protokół: woda, kanalizacja, podłogówka i pompa ciepła. Bez nich nie ma gwarancji ani spokojnego odbioru domu.",
    time: "2–4 dni (w różnych terminach)", team: "hydraulik, serwis pompy, kierownik budowy",
    facts: [["Próba wody", "orientacyjnie ok. 10 bar (wg producenta rur)", "clock"], ["Protokoły", "4–5 dokumentów", "file"]],
    body: `
      <p><strong>Woda</strong>: próba ciśnieniowa przed tynkami, przy zaślepionych końcówkach (ciśnienie i czas wg normy PN-EN 806 i instrukcji producenta rur; zwykle ok. 1,5 raza ciśnienie robocze, w praktyce ok. 10 bar; sprawdź u kierownika budowy). Potem płukanie instalacji i, jeśli wymaga tego wodociąg, badanie wody.</p>
      <p><strong>Kanalizacja</strong>: próba szczelności wodą (zalanie podejść i pionu) albo kontrola przy przepływie, przed obudową pionów. <strong>Podłogówka</strong>: protokół z kroku o próbie przed wylewką.</p>
      <p><strong>Pompa ciepła</strong>: uruchomienie przez autoryzowany serwis, ustawienie krzywej grzewczej, regulacja przepływów na rozdzielaczach, program CWU i dezynfekcji. Po pierwszym sezonie warto krzywą obniżyć: każdy stopień mniej to kilka procent rachunku.</p>`,
    cost: { min: 1000, max: 2500, note: "uruchomienie autoryzowane, regulacja hydrauliczna, płukanie" },
    tips: [
      "<b>Teczka instalacji:</b> protokoły prób, karty gwarancyjne, plany pętli z długościami, zdjęcia tras z miarką, instrukcje. Kierownik budowy potrzebuje ich do odbioru (etap 16).",
      "<b>Regulacja hydrauliczna</b> na przepływomierzach według projektu. Bez niej dalekie pokoje są chłodniejsze, a pompa grzeje wyżej, niż musi.",
      "<b>Pierwszy sezon to strojenie.</b> Krzywa grzewcza, histereza, program CWU pod PV. Zapisuj zmiany i zużycie prądu co miesiąc.",
      "<b>Przegląd pompy raz w roku</b>: filtr siatkowy, ciśnienie, odpływ skroplin, czyste lamele."
    ],
    mistakes: [
      "<b>Próba wody po zakryciu rur.</b> Przeciek znaleziony po tynkach i płytkach to kucie i poprawki.",
      "<b>Pompa uruchomiona przez hydraulika bez autoryzacji.</b> Producent może odmówić gwarancji.",
      "<b>Krzywa grzewcza „fabryczna” na zawsze.</b> Ustawienia domyślne są zwykle za wysokie dla domu WT2021."
    ],
    formal: [
      ["Protokół próby ciśnieniowej wody", "hydraulik + kierownik budowy, przed tynkami"],
      ["Protokół szczelności kanalizacji", "przed obudową pionów"],
      ["Protokół próby podłogówki", "przed wylewką (krok 8)"],
      ["Protokół uruchomienia pompy ciepła", "autoryzowany serwis; warunek gwarancji"],
      ["Dokumentacja powykonawcza", "do odbioru domu (etap 16)"]
    ],
    checklist: [
      "Próba wody przed tynkami, protokół podpisany",
      "Kanalizacja sprawdzona przed obudową pionów",
      "Podłogówka: protokół przed wylewką",
      "Pompa uruchomiona przez autoryzowany serwis",
      "Przepływy pętli wyregulowane, krzywa grzewcza ustawiona",
      "Teczka instalacji kompletna"
    ],
    quiz: [{
      q: "Kiedy wykonuje się próbę ciśnieniową instalacji wodnej?",
      a: ["Po ułożeniu płytek", "Przed tynkami, gdy rury są jeszcze widoczne", "Po pierwszym miesiącu mieszkania"],
      correct: 1,
      explain: "<b>Próba ma sens, gdy wszystko widać.</b> Przeciek przy złączce naprawiasz w kilka minut, zamiast kuć gotową ścianę."
    }]
  }
  ]
});
