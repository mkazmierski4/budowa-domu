/* Etap 11: Tynki, wylewki, sucha zabudowa, ocieplenie poddasza. Ceny orientacyjne, 2026 r., okolice małego miasta.
   Spójne z DECYZJE.md: krokwie 8 × 20 (06), membrana sd ≤ 0,1 m (06), jętki 2,4–2,6 m (06), kolankowa 1,0 m (05),
   podłogówka ok. 170 m² na EPS (09), podłoga na gruncie: podkład + papa (04), EPS 100 15 cm + folia + jastrych 6,5 cm (przekrój). */
BUDOWA.addStage({
  id: "11-tynki-wylewki", nr: 11, title: "Tynki, wylewki, sucha zabudowa", icon: "🪣", category: "wykoncz",
  summary: "Ocieplenie i zabudowa poddasza, szczelna paroizolacja, tynki wewnętrzne i wylewki na podłogówce. Etap mokry: najwięcej wody wnosisz do domu, więc kolejność, ogrzewanie i wietrzenie decydują o jakości.",
  duration: "10–16 tyg. (z suszeniem)",
  steps: [

  /* 1 ------------------------------------------------------------------ */
  {
    id: "kolejnosc-prac",
    title: "Kolejność prac po instalacjach",
    lead: "Etap 11 zaczyna się, gdy dom jest zamknięty (okna i drzwi z etapu 07), a rury i przewody w ścianach przeszły próby. Każda praca zakrywa poprzednią, więc kolejność jest ważniejsza niż tempo.",
    time: "plan 1–2 dni", team: "kierownik budowy + ekipy",
    facts: [["Temperatura", "min. +5°C w domu", "bulb"], ["Wody w tynkach i wylewkach", "kilka ton", "layers"]],
    body: `
      <p>Rekomendowana kolejność: <strong>1)</strong> ocieplenie poddasza wełną ze stelażem, <strong>2)</strong> paroizolacja z taśmami i test szczelności, <strong>3)</strong> tynki ścian i sufitu parteru, <strong>4)</strong> styropian, folia i taśma dylatacyjna na podłogach, <strong>5)</strong> rury podłogówki i próba ciśnienia (etap 09), <strong>6)</strong> wylewki, <strong>7)</strong> suszenie i wygrzewanie, <strong>8)</strong> płyty g-k na poddaszu i szpachlowanie, <strong>9)</strong> pomiar wilgotności i przygotowanie pod podłogi (etap 13).</p>
      <p>Dlaczego tak? Wełna i folia zamykają poddasze, więc da się ogrzać dom zimą. Tynki idą przed wylewką, bo zaprawa spadająca ze ściany nie niszczy wtedy gotowej posadzki. Płyty g-k montujemy na końcu prac mokrych, bo karton płyty nie lubi wilgoci z tynków i jastrychu.</p>
      <p>Według harmonogramu (etap 00) tynki i wylewki przypadają <strong>zimą</strong>. To dobrze, bo dom jest zamknięty, ale trzeba go ogrzewać i wietrzyć. Zobacz krok o suszeniu.</p>`,
    cost: { min: 1000, max: 2000, note: "folie ochronne, taśmy, kontener na odpady, sprzątanie" },
    tips: [
      "<b>Zrób zdjęcia ścian i podłóg przed zakryciem.</b> Trasy przewodów i rur z miarką w kadrze. Po tynkach i wylewce to jedyna mapa, gdzie nie wolno wiercić.",
      "<b>Próby przed tynkiem.</b> Woda pod ciśnieniem, kanalizacja i pomiary przewodów (etapy 08–09) mają być zrobione i spisane, zanim tynkarz wejdzie na budowę.",
      "<b>Zabezpiecz okna i drzwi.</b> Ramy i szyby folią z taśmą malarską (nie zwykłą pakową, bo zostawia klej), progi płytą. Zaprawa gipsowa trawi szybę i aluminium.",
      "<b>Jedna osoba koordynuje.</b> Tynkarz, posadzkarz, hydraulik i ekipa od g-k mają się spotkać raz na budowie i ustalić wysokości (±0,00), kolejność i terminy."
    ],
    mistakes: [
      "<b>Tynki przed próbami instalacji.</b> Przeciek wychodzi po malowaniu i trzeba kuć gotową ścianę.",
      "<b>Płyty g-k przed wylewką.</b> Wilgoć z jastrychu i tynku wchodzi w karton, płyty się falują, a spoiny pękają.",
      "<b>Mokre prace w zimnym domu.</b> Poniżej +5°C tynk i jastrych nie wiążą prawidłowo, a woda zamarza w świeżej zaprawie."
    ],
    formal: [
      ["Wpis w dzienniku budowy", "kierownik budowy: odbiory instalacji przed zakryciem"],
      ["Protokoły prób instalacji", "z etapów 08–09, do teczki odbiorowej (etap 16)"]
    ],
    checklist: [
      "Okna, drzwi i brama zamontowane, otwory zamknięte",
      "Próby wody, kanalizacji i pomiary elektryczne spisane",
      "Zdjęcia tras instalacji z miarką zrobione",
      "Okna i progi zabezpieczone folią i płytami",
      "Ustalony poziom ±0,00 i grubości warstw podłogi z każdą ekipą"
    ],
    quiz: [{
      q: "Dlaczego płyty g-k na poddaszu montuje się dopiero po tynkach i wylewkach?",
      a: ["Bo tynkarz potrzebuje dostępu do krokwi", "Bo wilgoć z prac mokrych niszczy karton płyt i spoiny", "Bo płyty są wtedy tańsze"],
      correct: 1,
      explain: "<b>Tynki i jastrych oddają tony wody.</b> Płyta g-k chłonie ją kartonem, odkształca się, a spoiny pękają. Najpierw prace mokre, potem sucha zabudowa."
    }]
  },

  /* 2 ------------------------------------------------------------------ */
  {
    id: "ocieplenie-poddasza",
    title: "Ocieplenie poddasza",
    lead: "Dach to największa powierzchnia, przez którą ucieka ciepło. Na poddaszu użytkowym ocieplamy skosy i strop jętkowy, a wymagane U ≤ 0,15 W/(m²·K) daje ok. 30 cm wełny.",
    time: "1–2 tyg.", team: "2–3 osoby",
    facts: [["Grubość", "20 + 10 cm wełny", "layers"], ["Powierzchnia", "ok. 140–150 m²", "house"], ["Wymóg WT2021", "U ≤ 0,15", "bulb"]],
    body: `
      <p>Krokwie mają 20 cm wysokości (etap 06), więc pierwsza warstwa wełny <strong>20 cm</strong> wypełnia całą przestrzeń między nimi i może dotykać membrany wysokoparoprzepuszczalnej. Druga warstwa <strong>10 cm</strong> idzie pod krokwiami, w stelażu z profili, i przykrywa drewno, które jest mostkiem cieplnym.</p>
      <p>Ocieplamy skosy od ścianki kolankowej do jętek i <strong>strop jętkowy</strong> (ok. 2,4–2,6 m nad podłogą). Nad jętkami zostaje nieogrzewany strych: wełna leży tam na stropie, a nie w szczycie dachu. Ocieplenie ma szczelnie dochodzić do murłaty i ściany kolankowej, bo to tam najczęściej zostaje szczelina.</p>
      <p>Stelaż (profile CD na wieszakach) montujemy razem z drugą warstwą wełny. Płyty g-k przykręcimy do niego dopiero po pracach mokrych.</p>`,
    cost: { min: 14000, max: 19000, note: "wełna 30 cm, stelaż, robocizna, ok. 145 m²" },
    decision: {
      question: "Czym ocieplić dach?",
      intro: "Wszystkie trzy warianty spełniają U ≤ 0,15 przy odpowiedniej grubości. Koszt to dopłata do wełny.",
      chosen: "welna",
      options: [
        { id: "welna", name: "Wełna mineralna między i pod krokwiami",
          cost: { min: 0, max: 0 }, time: "1–2 tyg.", note: "20 + 10 cm, λ ok. 0,035",
          pros: ["Niepalna, dobrze tłumi hałas deszczu", "Paroprzepuszczalna, współpracuje z membraną", "Najtańsza, każda ekipa ją zna"],
          cons: ["Wymaga starannego docinania na wcisk", "Paroizolacja musi być naprawdę szczelna"],
          why: "Sprawdzony układ: druga warstwa pod krokwiami usuwa mostki cieplne, a wełna dobrze chroni przed hałasem i ogniem. Szczelność zapewnia paroizolacja z kolejnego kroku." },
        { id: "pur", name: "Pianka PUR otwartokomórkowa (natrysk)",
          cost: { min: 2000, max: 8000 }, time: "1–3 dni", note: "ok. 25–30 cm natrysku",
          pros: ["Szybko i bez szczelin, wypełnia każdy zakamarek", "Dobrze uszczelnia przy murłacie"],
          cons: ["Trudno skontrolować grubość i zmienić coś później", "Wymaga ekipy z certyfikatem i oparów z dala od mieszkańców", "Paroizolacja wg systemu producenta"],
          why: "Ma sens przy skomplikowanym dachu z wieloma lukarnami. Przy prostym dachu dwuspadowym wełna jest tańsza i tak samo ciepła." },
        { id: "pir", name: "Płyty PIR nad lub pod krokwiami",
          cost: { min: 15000, max: 25000 }, time: "1–2 tyg.", note: "λ ok. 0,022, cieńsza warstwa",
          pros: ["Najlepsza izolacyjność przy małej grubości", "Płyty z folią aluminiową mogą pełnić rolę paroizolacji"],
          cons: ["Najdroższe", "Gorzej tłumią hałas", "Szczeliny między płytami trzeba piankować i taśmować"],
          why: "Opłaca się, gdy brakuje wysokości pod skosami albo przy remoncie dachu z wierzchu. U nas wysokość jest wystarczająca." }
      ]
    },
    tips: [
      "<b>Wełna na wcisk, szersza o 1–2 cm.</b> Tnij ją nożem z ząbkami o 1–2 cm szerzej niż rozstaw krokwi. Wtedy trzyma się sama i nie zostawia szczelin przy drewnie.",
      "<b>Druga warstwa na mijankę.</b> Wełna pod krokwiami idzie w poprzek pierwszej albo z przesuniętymi stykami. Przykrywa drewno i szczeliny warstwy dolnej.",
      "<b>Profile CD co 40–50 cm.</b> Rozstaw wg systemu płyt (pod płytę 12,5 mm na suficie zwykle 40 cm), wieszaki co ok. 0,8–1 m. Stelaż poziomuj laserem, bo krokwie nigdy nie są idealne.",
      "<b>Okna dachowe obłóż szczelnie.</b> Wokół ościeżnicy wełnę dociśnij do kołnierza izolacyjnego z etapu 06, a skos nad oknem prowadź poziomo, pod oknem pionowo (więcej światła).",
      "<b>Pracuj w masce i rękawicach.</b> Maska FFP2, okulary, długi rękaw. Tniesz setki metrów wełny."
    ],
    mistakes: [
      "<b>Tylko 20 cm między krokwiami.</b> Krokwie co 80–90 cm to ok. 10% powierzchni drewna bez ocieplenia. Dach nie spełni U ≤ 0,15.",
      "<b>Szczelina przy murłacie.</b> Wełna kończy się na krokwi, a wiatr wieje pod skos. Zimą w tym miejscu pojawia się pleśń.",
      "<b>Zgnieciona wełna.</b> Dociśnięta stelażem do połowy grubości izoluje dużo gorzej. Wysokość wieszaków dobierz do 10 cm wełny."
    ],
    checklist: [
      "Wełna 20 cm wypełnia całą wysokość krokwi, bez szczelin przy drewnie",
      "Druga warstwa 10 cm pod krokwiami przykrywa drewno",
      "Ocieplenie dochodzi do murłaty i ściany kolankowej",
      "Strop jętkowy ocieplony na całej powierzchni",
      "Stelaż wypoziomowany, profile co 40–50 cm"
    ],
    quiz: [{
      q: "Po co druga warstwa wełny pod krokwiami, skoro 20 cm wypełnia przestrzeń między nimi?",
      a: ["Żeby przykryć krokwie, które są mostkiem cieplnym, i dojść do U ≤ 0,15", "Tylko dla lepszej akustyki", "Bo wełna między krokwiami z czasem opada"],
      correct: 0,
      explain: "<b>Drewno izoluje kilka razy gorzej niż wełna.</b> Krokwie to ok. 10% powierzchni dachu. Warstwa 10 cm pod nimi usuwa ten mostek i razem daje ok. 30 cm, czyli U poniżej 0,15."
    }]
  },

  /* 3 ------------------------------------------------------------------ */
  {
    id: "paroizolacja",
    title: "Paroizolacja i jej szczelność",
    lead: "Para wodna z wnętrza nie może wejść w wełnę, bo w zimnej strefie zamieni się w wodę. Folia paroizolacyjna działa tylko wtedy, gdy jest szczelna na całej powierzchni: na zakładach, przy ścianach i przy każdym przejściu.",
    time: "3–5 dni", team: "2 osoby",
    facts: [["Zakład", "min. ok. 10 cm, taśma", "layers"], ["Test szczelności", "n50 cel ok. 1,0", "shield"]],
    body: `
      <p>Paroizolację mocujemy do stelaża od strony pomieszczenia, czyli <strong>od ciepłej strony</strong> wełny. Używamy folii paroizolacyjnej albo membrany o zmiennym sd z jednego systemu z taśmami i masą klejącą. Zwykła folia budowlana się do tego nie nadaje.</p>
      <p>Najtrudniejsze są <strong>połączenia</strong>: z murem szczytów i ściany kolankowej (masa klejąca na zagruntowanym murze, potem taśma, którą zakryje tynk), z oknami dachowymi (kołnierz paroizolacyjny z zestawu okna), z kominem i z przejściami kabli, rur kanalizacji i kanałów rekuperacji (mankiety uszczelniające).</p>
      <p>Po zaklejeniu zrób <strong>test szczelności</strong> (blower door) przy podciśnieniu: dym albo dłoń pokaże, gdzie ucieka powietrze, a folię da się jeszcze poprawić. Za płytą g-k byłoby już za późno.</p>`,
    cost: { min: 4000, max: 7000, note: "folia systemowa, taśmy, masa, mankiety, robocizna + test szczelności" },
    tips: [
      "<b>Zakłady min. ok. 10 cm, zawsze taśma.</b> Sam zakład nie jest szczelny. Taśmę dociskaj rolką, a nie palcem.",
      "<b>Przy murze masa, nie zszywacz.</b> Folię przyklej do zagruntowanego muru pasem masy z luzem ok. 2–3 cm (krokwie pracują), a potem zatynkuj. Tynk przykryje połączenie.",
      "<b>Mankiet na każde przejście.</b> Kabel do oczka, rura wywiewki, kanał rekuperacji: każdy dostaje mankiet albo taśmę. Liczba otworów to liczba potencjalnych przecieków.",
      "<b>Test przy otwartym poddaszu.</b> Umów test szczelności, gdy folia jest zaklejona, a płyt g-k jeszcze nie ma. Wynik n50 ok. 1,0 to dobry cel przy rekuperacji (sprawdź z projektantem).",
      "<b>Puszki szczelne.</b> Gdzie oczka muszą przejść przez folię, użyj puszek paroszczelnych albo poprowadź przewody w szczelinie między folią a płytą."
    ],
    mistakes: [
      "<b>Folia tylko przypięta zszywaczem.</b> Setki dziur i nieklejone zakłady. Wilgoć wchodzi w wełnę, a dom traci ciepło.",
      "<b>Folia napięta „na bęben” przy murze.</b> Krokwie pracują, folia pęka przy pierwszym mrozie. Zostaw luz w fałdzie.",
      "<b>Zwykła folia budowlana zamiast paroizolacji.</b> Nie ma deklarowanych parametrów, a taśmy się do niej nie kleją."
    ],
    formal: [
      ["Protokół testu szczelności", "firma pomiarowa; wynik n50 do teczki budowy i do świadectwa energetycznego"]
    ],
    checklist: [
      "Folia z jednego systemu z taśmami i masą",
      "Zakłady min. ok. 10 cm sklejone taśmą",
      "Połączenia z murem na masie, z luzem",
      "Kołnierze paroizolacyjne przy oknach dachowych",
      "Mankiety na wszystkich przejściach kabli i rur",
      "Test szczelności zrobiony, nieszczelności poprawione"
    ],
    quiz: [{
      q: "Po której stronie wełny montuje się paroizolację?",
      a: ["Od zewnątrz, pod membraną", "Od wnętrza, czyli od ciepłej strony", "Wszystko jedno, byle była"],
      correct: 1,
      explain: "<b>Paroizolacja od ciepłej strony.</b> Zatrzymuje parę z mieszkania, zanim ta dojdzie do zimnych warstw. Od zewnątrz jest membrana wysokoparoprzepuszczalna, która wypuszcza resztki wilgoci."
    }]
  },

  /* 4 ------------------------------------------------------------------ */
  {
    id: "tynki-wybor",
    title: "Tynki wewnętrzne: wybór",
    lead: "Na ścianach z pustaka ceramicznego i na suficie parteru robimy tynk gipsowy maszynowy. Daje gładką ścianę pod malowanie bez gładzi, a w garażu kładziemy cementowo-wapienny.",
    time: "decyzja przed zamówieniem ekipy", team: "inwestor + tynkarz",
    facts: [["Powierzchnia", "ok. 600–700 m²", "house"], ["Grubość", "ok. 1–1,5 cm", "layers"]],
    body: `
      <p>Do otynkowania jest ok. <strong>600–700 m²</strong>: ściany zewnętrzne od środka, nośne i działowe z obu stron, kolankowa i szczyty na poddaszu, sufit parteru (strop filigran z etapu 05). Skosy i sufit poddasza będą z płyt g-k.</p>
      <p><strong>Tynk gipsowy</strong> nakłada się agregatem w jednej warstwie ok. 1–1,5 cm i zaciera na gładko, więc w pokojach wystarczy grunt i farba. W <strong>garażu</strong> (zimny, wilgotny od auta) i w miejscach narażonych na wodę dajemy tynk <strong>cementowo-wapienny</strong>. W łazienkach gips jest w porządku pod hydroizolacją i płytkami (etap 13).</p>
      <p>Zobacz tynk w przekroju ściany: <button class="xref" data-section="tynkw"><svg class="ico"><use href="#i-layers"/></svg>zobacz w przekroju</button></p>`,
    cost: { min: 28000, max: 38000, note: "tynk gipsowy maszynowy z materiałem, garaż cementowo-wapienny" },
    decision: {
      question: "Jaki tynk wewnętrzny?",
      intro: "Ceny dla ok. 650 m² z materiałem i robocizną. Koszt opcji to dopłata do tynku gipsowego.",
      chosen: "gips",
      options: [
        { id: "gips", name: "Gipsowe maszynowe",
          cost: { min: 0, max: 0 }, time: "2–3 tyg. + schnięcie", note: "ok. 40–55 zł/m²",
          pros: ["Gładkie od razu, bez gładzi", "Szybkie: dom w 2–3 tygodnie", "Dobrze regulują wilgotność w pomieszczeniach"],
          cons: ["Nie do garażu i miejsc stale mokrych", "Bardziej miękkie, łatwiej je obić"],
          why: "Najlepszy stosunek ceny do efektu w domu z pustaka: równa, gładka ściana gotowa do malowania. W garażu i strefach mokrych zostaje cementowo-wapienny." },
        { id: "cw", name: "Cementowo-wapienne",
          cost: { min: 5000, max: 9000 }, time: "3–4 tyg. + dłuższe schnięcie", note: "ok. 50–65 zł/m² + gładź",
          pros: ["Twarde i odporne na wilgoć", "Dobre pod płytki i w garażu"],
          cons: ["Faktura „baranek”: pod malowanie trzeba gładzi", "Schną dłużej, wnoszą więcej wody"],
          why: "Ma sens w domu, w którym ściany będą często obijane, albo gdy większość ścian pokryją płytki." },
        { id: "gk", name: "Suche tynki (płyty g-k na kleju)",
          cost: { min: 8000, max: 14000 }, time: "3–4 tyg., bez schnięcia", note: "ok. 60–75 zł/m² ze szpachlowaniem",
          pros: ["Prawie bez wody, można szybko malować", "Dobre przy pracy w mrozie"],
          cons: ["Pusto za płytą: gorzej trzyma kołki", "Szpachlowanie styków na całej powierzchni", "Słabiej tłumi dźwięki między pokojami"],
          why: "Ma sens, gdy terminy są bardzo napięte albo nie da się ogrzać domu zimą. Szczelność ściany zapewniają wtedy dodatkowe taśmy, nie tynk." }
      ]
    },
    tips: [
      "<b>Tynk to też szczelność powietrzna.</b> W domu z pustaka szczelną warstwę od środka tworzy właśnie tynk. Tynkuj ściany od posadzki betonowej do stropu, także za wanną i zabudową kuchni.",
      "<b>Ustal kategorię tynku w umowie.</b> Wpisz dopuszczalne odchyłki (np. od pionu i płaszczyzny na 2 m) i sposób sprawdzenia łatą. Bez tego trudno reklamować krzywą ścianę.",
      "<b>Łazienki: gips pod hydroizolacją.</b> Tynk gipsowy pod płytkami wymaga gruntu i folii w płynie wg systemu kleju. Prysznic walk-in uszczelnij taśmami w narożach (etap 13).",
      "<b>Cena z materiałem i narożnikami.</b> Porównuj oferty za m² razem z gruntowaniem, narożnikami, siatkami i zabezpieczeniem okien. Najtańsza oferta często ich nie obejmuje."
    ],
    mistakes: [
      "<b>Gips w garażu.</b> Zimą auto wnosi śnieg i sól, ściana pije wilgoć i odpada.",
      "<b>Brak tynku za meblami kuchennymi.</b> Goła ściana z pustaka przepuszcza powietrze: test szczelności wychodzi gorzej, a w kontaktach czuć przeciąg."
    ],
    quiz: [{
      q: "Dlaczego w garażu dajemy tynk cementowo-wapienny zamiast gipsowego?",
      a: ["Bo jest tańszy", "Bo gips źle znosi wilgoć, śnieg i sól wnoszone przez auto", "Bo gips nie trzyma się pustaka"],
      correct: 1,
      explain: "<b>Gips nie lubi stałej wilgoci.</b> W nieogrzewanym garażu, gdzie auto przywozi wodę i sól, tynk cementowo-wapienny jest trwalszy."
    }]
  },

  /* 5 ------------------------------------------------------------------ */
  {
    id: "przygotowanie-scian",
    title: "Przygotowanie ścian, narożniki i listwy",
    lead: "Dobry tynk zależy od podłoża: zagruntowany mur, siatka na styku różnych materiałów, metalowe narożniki i listwy przy oknach. To jeden dzień pracy, który oszczędza lata pęknięć.",
    time: "2–4 dni", team: "2 tynkarzy",
    body: `
      <p><strong>Gruntowanie:</strong> pustak ceramiczny bardzo pije wodę, więc dostaje grunt zmniejszający chłonność. Gładki beton (strop filigran, wieńce, nadproża) dostaje grunt z piaskiem kwarcowym („betonkontakt”), żeby tynk miał się czego trzymać.</p>
      <p><strong>Siatka</strong> z włókna szklanego idzie na styku różnych materiałów: wieniec i nadproże z pustakiem, bruzdy po instalacjach, styk ściany działowej ze stropem. Pas ok. 20–30 cm, po ok. 10–15 cm na każdy materiał.</p>
      <p><strong>Narożniki</strong> (kątowniki aluminiowe lub ocynkowane z siatką) osadzamy na zaprawie w pionie przy wszystkich narożach wypukłych i przy ościeżach. Przy ramach okien i drzwi dajemy <strong>listwę przyokienną</strong> z taśmą, która oddziela tynk od ramy i nie pozwala mu pękać.</p>`,
    cost: { min: 3000, max: 5000, note: "grunty, siatki, narożniki, listwy przyokienne" },
    tips: [
      "<b>Narożnik w pionie poziomicą 2 m.</b> Narożnik wyznacza płaszczyznę tynku. Krzywo osadzony da krzywą krawędź na zawsze.",
      "<b>Listwa przyokienna zamiast podcinania kielnią.</b> Rama okna pracuje inaczej niż mur. Listwa z taśmą i fartuchem ochronnym daje równą, niepękającą krawędź.",
      "<b>Puszki i rury zaślepione.</b> Puszki elektryczne zakryj pokrywkami, końcówki rur korkami. Gips w puszce to godzina dłubania na każdej.",
      "<b>Paroizolacja doklejona do muru.</b> Na szczytach i kolankowej taśma od folii poddasza ma być już na murze, zanim tynk ją przykryje.",
      "<b>Grunt dzień wcześniej.</b> Grunt ma wyschnąć przed tynkowaniem (zwykle kilka do 24 godzin wg producenta)."
    ],
    mistakes: [
      "<b>Brak siatki na wieńcu.</b> Po pierwszym sezonie grzewczym na styku betonu i pustaka pojawia się pozioma rysa przez cały pokój.",
      "<b>Tynk dociągnięty do ramy okna.</b> Rama się rusza, tynk pęka, a przez szczelinę ucieka powietrze."
    ],
    checklist: [
      "Mury zagruntowane, beton z gruntem „betonkontakt”",
      "Siatki na stykach materiałów i bruzdach",
      "Narożniki w pionie przy wszystkich narożach wypukłych",
      "Listwy przyokienne przy ramach okien i drzwi",
      "Puszki i końcówki rur zabezpieczone"
    ]
  },

  /* 6 ------------------------------------------------------------------ */
  {
    id: "tynkowanie",
    title: "Tynkowanie maszynowe",
    lead: "Agregat miesza gips z wodą i natryskuje go na ścianę. Ekipa ściąga nadmiar łatą, a po związaniu zaciera i gładzi powierzchnię. Dom ok. 190 m² to 2–3 tygodnie pracy.",
    time: "2–3 tyg.", team: "3–4 tynkarzy + agregat",
    facts: [["Wydajność", "ok. 80–120 m² dziennie", "clock"], ["Temperatura", "+5 do +25°C", "bulb"]],
    body: `
      <p>Kolejność w pomieszczeniu: <strong>sufit, potem ściany</strong>. Tynk natryskuje się warstwą ok. 1–1,5 cm, ściąga łatą h w pionie i poziomie, a po wstępnym związaniu (ok. 1–2 godzin) zaciera pacą gąbkową i gładzi pacą stalową. Gotowa powierzchnia jest matowa i gładka.</p>
      <p>Tynk dochodzi do <strong>płyty betonowej</strong>, a nie do gotowej posadzki. Dolny pasek ściany zakryje potem jastrych i listwa przypodłogowa, a ściana jest szczelna od samego dołu.</p>
      <p>W czasie tynkowania i przez pierwsze 1–2 dni po nim <strong>nie rób przeciągów</strong>. Potem dom trzeba intensywnie wietrzyć i ogrzewać (następne kroki).</p>`,
    tips: [
      "<b>Odbiór łatą 2 m.</b> Przyłóż łatę w kilku kierunkach. Szczelina pod łatą pokazuje odchyłkę; porównaj ją z kategorią z umowy.",
      "<b>Sprawdź pod światło.</b> Lampa przy ścianie, światło po skosie: od razu widać fale i ślady pacy. Zaznacz ołówkiem, poprawki są tanie przed malowaniem.",
      "<b>Kąty proste w łazience i kuchni.</b> Tam meble i płytki pokażą każdą krzywiznę. Poproś o sprawdzenie kątownicą w narożach.",
      "<b>Nie przekraczaj grubości.</b> Tynk gipsowy powyżej ok. 2–2,5 cm w jednej warstwie może odpaść. Duże nierówności muru wyrównuje się wcześniej."
    ],
    mistakes: [
      "<b>Tynk przy mrozie.</b> Ściana zamarza, zanim gips zwiąże: osypuje się i trzeba go skuć.",
      "<b>Przeciąg zaraz po tynkowaniu.</b> Zewnętrzna warstwa schnie za szybko i pęka siateczką rys.",
      "<b>Brak odbioru przed wyjazdem ekipy.</b> Poprawki po miesiącu to nowa wycena i kłótnia, kto zawinił."
    ],
    checklist: [
      "Ściany w pionie i płaszczyźnie w granicach kategorii z umowy",
      "Narożniki proste, ościeża równe",
      "Brak rys, pęcherzy i odspojeń (opukanie)",
      "Tynk dochodzi do płyty i do stropu, także za meblami",
      "Puszki i rury odkryte, okna czyste"
    ],
    quiz: [{
      q: "Do jakiego poziomu schodzi tynk ściany na parterze?",
      a: ["Do gotowej posadzki ±0,00", "Do płyty betonowej, pod warstwy podłogi", "Do wysokości listwy przypodłogowej"],
      correct: 1,
      explain: "<b>Tynk do płyty.</b> Ściana jest wtedy szczelna od samego dołu, a pasek tynku zakryje jastrych i listwa. Tynk kończony nad posadzką zostawia nieszczelną szczelinę."
    }]
  },

  /* 7 ------------------------------------------------------------------ */
  {
    id: "suszenie-budynku",
    title: "Ogrzewanie i wietrzenie przy schnięciu",
    lead: "Tynki i wylewki wnoszą do domu kilka ton wody. Musi ona wyparować i wyjść oknami, a nie zostać w ścianach. Zimą to oznacza grzanie i krótkie, intensywne wietrzenie.",
    time: "4–10 tyg. (tynki i wylewki)", team: "inwestor",
    facts: [["Temperatura", "ok. 10–20°C", "bulb"], ["Wietrzenie", "kilka razy dziennie po 10–15 min", "shield"]],
    body: `
      <p>Pompa ciepła grzeje przez podłogówkę, a ta działa dopiero w gotowym jastrychu. Na czas tynków dom ogrzewamy <strong>nagrzewnicami elektrycznymi</strong> (albo olejowymi z kominem wyprowadzonym na zewnątrz). Nagrzewnice gazowe z otwartym płomieniem odpadają: spalanie dokłada do domu wodę i dwutlenek węgla.</p>
      <p>Wietrz <strong>krótko i szeroko</strong>: otwórz okna na przestrzał na 10–15 minut kilka razy dziennie, potem zamknij i dogrzej. Uchylone na stałe okna wychładzają mury, a wilgoć skrapla się na szybach. Przy wilgotności w domu stale powyżej ok. 70–75% dodaj osuszacz kondensacyjny.</p>
      <p><strong>Rekuperacji (etap 10) nie używaj do suszenia.</strong> Kanały i centrala zbierają pył gipsowy i cementowy. Kanały mają być zaślepione aż do rozruchu po malowaniu (etap 13).</p>`,
    cost: { min: 2000, max: 5000, note: "nagrzewnice i osuszacz (wynajem), prąd" },
    tips: [
      "<b>Higrometr w każdej kondygnacji.</b> Kosztuje kilkadziesiąt złotych. Wilgotność ponad 80% przez kilka dni to sygnał: więcej wietrzenia albo osuszacz.",
      "<b>Nie grzej za mocno.</b> Ok. 10–20°C wystarcza. Przy ponad 25°C i suchym powietrzu tynk wysycha za szybko i pęka.",
      "<b>Wietrzenie także w nocy i w weekend.</b> Ustal z sąsiadem albo ekipą, kto otwiera okna, gdy ciebie nie ma. Kilka dni zamknięcia przy mokrych tynkach to rosa na szybach i pleśń w narożach.",
      "<b>Licz prąd.</b> Nagrzewnice 2 × 9 kW przez kilka tygodni to realny koszt. Lepiej mniejsza moc i dobrze zamknięte poddasze (wełna i folia przed tynkami)."
    ],
    mistakes: [
      "<b>Nagrzewnica gazowa w zamkniętym domu.</b> Woda ze spalania i tlenek węgla: ściany nie schną, a ludziom grozi zatrucie.",
      "<b>Okna uchylone na miesiąc.</b> Chłodne mury, woda na szybach i ramach, a schnięcie trwa dwa razy dłużej.",
      "<b>Suszenie rekuperatorem.</b> Pył zapycha filtry i kanały, a czyszczenie instalacji kosztuje więcej niż wynajem osuszacza."
    ],
    checklist: [
      "Temperatura w domu nie spada poniżej +5°C",
      "Wilgotność mierzona higrometrem na obu kondygnacjach",
      "Grafik wietrzenia ustalony",
      "Kanały rekuperacji zaślepione",
      "Brak nagrzewnic z otwartym płomieniem w środku"
    ]
  },

  /* 8 ------------------------------------------------------------------ */
  {
    id: "warstwy-podlogi",
    title: "Styropian, folia i taśma dylatacyjna",
    lead: "Zanim hydraulik rozłoży rury podłogówki, na podłodze muszą leżeć styropian, folia i taśma dylatacyjna przy ścianach. Te warstwy decydują o cieple, akustyce i o tym, czy wylewka nie popęka.",
    time: "3–5 dni", team: "2 osoby",
    facts: [["Na gruncie", "EPS 100, 15 cm", "layers"], ["Na stropie", "ok. 5–8 cm", "layers"], ["Taśma", "ok. 8–10 mm", "listcheck"]],
    body: `
      <p><strong>Na gruncie</strong> (parter): na podkładzie betonowym z papą z etapu 04 kładziemy <strong>EPS 100 15 cm</strong> w dwóch warstwach (np. 10 + 5 cm) z przesuniętymi stykami. Przewody w rurach osłonowych i kanały rekuperacji Ø75–90 (etap 10) układamy w dolnej warstwie i dokładnie obcinamy styropian wokół nich. <button class="xref" data-section="epsp"><svg class="ico"><use href="#i-layers"/></svg>zobacz w przekroju</button></p>
      <p><strong>Na stropie</strong> (poddasze): ciepło nie ucieka w dół, więc wystarcza ok. 5–8 cm, najlepiej z warstwą styropianu akustycznego, który tłumi kroki. Odpływ wanny wolnostojącej (etap 09) biegnie w tej warstwie.</p>
      <p>Na styropian idzie <strong>folia PE z nadrukiem siatki</strong> (ułatwia rozkład rur), z zakładami ok. 10 cm sklejonymi taśmą. Przy wszystkich ścianach, słupach i schodach stawiamy <strong>taśmę dylatacyjną</strong> ok. 8–10 mm z fartuchem foliowym, który wchodzi na folię. <button class="xref" data-section="dylat"><svg class="ico"><use href="#i-layers"/></svg>zobacz w przekroju</button></p>`,
    cost: { min: 8000, max: 12000, note: "EPS, folia, taśma dylatacyjna, robocizna, ok. 170 m² + garaż" },
    tips: [
      "<b>Poziom ±0,00 laserem.</b> Zanim położysz styropian, wyznacz na ścianach poziom gotowej posadzki. Od niego odejmij okładzinę (np. 1,5–2 cm) i jastrych 6,5 cm: tak wyjdzie wierzch styropianu.",
      "<b>Dwie warstwy na mijankę.</b> Styki górnej warstwy przesunięte względem dolnej o min. ok. 20 cm. Jedna gruba warstwa zostawia szczeliny na całą grubość.",
      "<b>Taśma do samego wierzchu.</b> Taśma dylatacyjna ma wystawać ponad przyszłą wylewkę. Nadmiar obetniesz dopiero przed układaniem podłogi.",
      "<b>Dylatacje w drzwiach.</b> W progach między pomieszczeniami i przy długich wylewkach dajemy dylatacje szczelinowe wg projektu podłogówki. Pętle ogrzewania nie powinny przez nie przechodzić bez rury osłonowej.",
      "<b>Folia szczelna przy ścianach.</b> Fartuch taśmy na folii, a folia wywinięta na taśmę. Płynny jastrych nie może wpłynąć pod styropian."
    ],
    mistakes: [
      "<b>Brak taśmy dylatacyjnej.</b> Wylewka sztywno dotyka ściany, przy grzaniu pęka przy ścianach, a kroki słychać w całym domu.",
      "<b>Styropian zwykły zamiast podłogowego.</b> Pod jastrychem i meblami siada, a posadzka pęka. Na podłogę EPS 100 albo twardszy.",
      "<b>Przewody luzem w styropianie.</b> Bez rur osłonowych i bez dokładnego docięcia pod jastrychem zostają pustki, które pękają."
    ],
    checklist: [
      "Poziom ±0,00 zaznaczony na ścianach",
      "EPS 100 15 cm na gruncie w dwóch warstwach, styki przesunięte",
      "Folia z zakładami ok. 10 cm, sklejona",
      "Taśma dylatacyjna przy wszystkich ścianach i słupach",
      "Wolne miejsce pod rury podłogówki i rozdzielacze"
    ],
    quiz: [{
      q: "Do czego służy taśma dylatacyjna przy ścianach?",
      a: ["Uszczelnia podłogę przed wodą", "Oddziela wylewkę od ściany, żeby mogła pracować przy grzaniu i nie przenosiła kroków", "Trzyma folię na swoim miejscu"],
      correct: 1,
      explain: "<b>Jastrych z podłogówką rozszerza się przy grzaniu.</b> Taśma daje mu kilka milimetrów luzu i oddziela od ścian, więc posadzka nie pęka i nie przenosi dźwięków."
    }]
  },

  /* 9 ------------------------------------------------------------------ */
  {
    id: "wylewka",
    title: "Wylewka nad podłogówką",
    lead: "Jastrych zakrywa rury podłogówki, przenosi ciepło i jest podkładem pod podłogę. Wylewamy go po próbie ciśnienia rur (etap 09), z rurami pod ciśnieniem ok. 3 bar.",
    time: "1–2 dni wylewania", team: "posadzkarze + pompa lub miksokret",
    facts: [["Grubość", "6,5 cm (ok. 4,5 cm nad rurą)", "layers"], ["Powierzchnia", "ok. 170 m² + garaż", "house"], ["Rury w czasie wylewania", "ok. 3 bar", "check"]],
    body: `
      <p>Przyjmujemy jastrych <strong>6,5 cm</strong>: rura 16 mm i ok. 4,5 cm nad nią. Tak jest w przekroju. Anhydryt pozwala zejść do ok. 5 cm, ale trzymamy jedną grubość, żeby nie przeliczać progów i drzwi. <button class="xref" data-section="jastrych"><svg class="ico"><use href="#i-layers"/></svg>zobacz w przekroju</button></p>
      <p>Rekomendujemy <strong>wylewkę anhydrytową</strong> na całej ogrzewanej części domu. Płynna masa otula rury bez pustek, dobrze przewodzi ciepło i wychodzi bardzo równa, więc płytki wielkoformatowe i deska (etap 13) nie wymagają dużego wyrównywania. W <strong>garażu</strong> i pomieszczeniu technicznym z kratką robimy wylewkę cementową (miksokretem) z włóknami, ze spadkiem do bramy albo kratki.</p>
      <p>W czasie wylewania rury podłogówki są pod ciśnieniem ok. 3 bar, a rozdzielacze zamknięte. Przecięcie rury łopatą od razu widać na manometrze.</p>`,
    cost: { min: 9000, max: 12000, note: "poziom ceny miksokretu: ok. 170 m² + garaż ok. 45 m²" },
    decision: {
      question: "Jaka wylewka nad podłogówką?",
      intro: "Ceny dla ok. 170 m² ogrzewanej podłogi, grubość 6,5 cm. Koszt opcji to dopłata do wylewki miksokretem.",
      chosen: "anhydryt",
      options: [
        { id: "anhydryt", name: "Anhydrytowa (płynna)",
          cost: { min: 3500, max: 5000 }, time: "1 dzień + szlifowanie", note: "ok. 60–80 zł/m² ze szlifem",
          pros: ["Dokładnie otula rury: lepsze oddawanie ciepła", "Bardzo równa, mniej dylatacji (pola do ok. 300 m² wg producenta)", "Ruch po ok. 1–2 dniach"],
          cons: ["Nie lubi stałej wilgoci: nie w garażu", "Mleczko na wierzchu trzeba zeszlifować", "Przed podłogą wymaga bardzo niskiej wilgotności (orient. 0,3–0,5% CM)"],
          why: "Najlepsza pod podłogówkę z pompą ciepła: dobry kontakt z rurą, równa powierzchnia pod duże płytki i deskę, szybkie wylanie całego domu. Dopłata ok. 4 tys. zł za równość i ciepło na lata." },
        { id: "cement-plynna", name: "Cementowa płynna (samopoziomująca)",
          cost: { min: 2000, max: 3500 }, time: "1 dzień", note: "ok. 55–70 zł/m²",
          pros: ["Płynna jak anhydryt, dobrze otula rury", "Odporna na wilgoć, także w łazience"],
          cons: ["Więcej dylatacji niż anhydryt", "Dostępność zależy od lokalnej betoniarni"],
          why: "Dobry wybór, gdy w okolicy jest sprawdzona ekipa, a w domu dużo mokrych stref. Cechy pośrednie między anhydrytem a miksokretem." },
        { id: "miksokret", name: "Cementowa półsucha (miksokret)",
          cost: { min: 0, max: 0 }, time: "2–3 dni", note: "ok. 45–60 zł/m²",
          pros: ["Najtańsza, każda ekipa ją robi", "Odporna na wilgoć: garaż, kotłownia, łazienki", "Szybciej można na nią wejść niż na anhydryt bez szlifu"],
          cons: ["Zacierana ręcznie: mniej równa", "Pustki przy rurach przy słabym zagęszczeniu", "Więcej dylatacji i rys skurczowych"],
          why: "Ma sens przy ciasnym budżecie i podłogach z elastycznych paneli. W naszym domu zostaje w garażu i pomieszczeniu technicznym." }
      ]
    },
    widget: "kalkulator-wylewki",
    tips: [
      "<b>Rury pod ciśnieniem ok. 3 bar.</b> Manometr na rozdzielaczu ma pokazywać to samo przed i po wylewaniu. Spadek to przecięta rura: szukasz jej od razu, a nie po roku.",
      "<b>Rury przyklejone do styropianu.</b> Płynny jastrych wypycha rury do góry. Spinki co ok. 30–50 cm i co ok. 20–30 cm na łukach.",
      "<b>Okna zamknięte przez 2 dni.</b> Anhydryt w pierwszych dniach nie może mieć przeciągu ani słońca przez okno. Potem intensywne wietrzenie.",
      "<b>Szlif anhydrytu po ok. 5–7 dniach.</b> Mleczko na wierzchu zeszlifuj, zanim stwardnieje na dobre. Bez tego klej i grunt się nie trzymają.",
      "<b>Spadki w garażu i przy kratce.</b> Ok. 1–1,5% do bramy albo odpływu. Ustal je przed wylaniem kołkami poziomującymi."
    ],
    mistakes: [
      "<b>Wylewanie bez ciśnienia w rurach.</b> Przebita albo zgnieciona rura wychodzi dopiero przy pierwszym grzaniu, pod gotową posadzką.",
      "<b>Anhydryt w garażu.</b> Woda i sól z auta rozmiękczają go od góry. Garaż tylko cementowa.",
      "<b>Wylewka przed tynkami.</b> Zaprawa i woda z tynku spadają na świeżą posadzkę, a pod ścianą zostają twarde grudy."
    ],
    formal: [
      ["Protokół próby ciśnienia podłogówki", "hydraulik (etap 09); przed wylewaniem"],
      ["Karta techniczna wylewki i dokumenty dostawy", "firma posadzkarska: klasa, np. CA-C20-F4 albo CT-C20-F4 (sprawdź w projekcie)"]
    ],
    checklist: [
      "Rury podłogówki pod ciśnieniem ok. 3 bar, manometr spisany",
      "Taśmy dylatacyjne i folia szczelne przy ścianach",
      "Grubość nad rurą sprawdzona na kilku punktach",
      "Dylatacje w progach i polach wg projektu",
      "Garaż: wylewka cementowa ze spadkiem"
    ],
    quiz: [{
      q: "Dlaczego w czasie wylewania rury podłogówki są pod ciśnieniem?",
      a: ["Żeby rury się nie zgniotły i żeby od razu zauważyć przebicie", "Żeby jastrych szybciej wysechł", "Bo tak każe producent pompy ciepła"],
      correct: 0,
      explain: "<b>Ciśnienie to czujnik uszkodzenia.</b> Spadek na manometrze w czasie wylewania pokazuje przebitą rurę, którą da się wtedy naprawić. Pod gotową podłogą to kucie."
    }, {
      q: "Gdzie w naszym domu nie dajemy wylewki anhydrytowej?",
      a: ["W salonie", "W łazience na poddaszu", "W garażu"],
      correct: 2,
      explain: "<b>Anhydryt nie znosi stałej wilgoci.</b> Garaż dostaje wylewkę cementową ze spadkiem. W łazience anhydryt jest dopuszczalny pod hydroizolacją wg systemu."
    }]
  },

  /* 10 ----------------------------------------------------------------- */
  {
    id: "wygrzewanie",
    title: "Schnięcie i wygrzewanie podłogówki",
    lead: "Jastrych musi wyschnąć, zanim położysz na nim podłogę. Pomaga w tym wygrzewanie pompą ciepła według programu z protokołem: temperatura rośnie stopniowo, trzyma się kilka dni i stopniowo spada.",
    time: "4–10 tyg.", team: "instalator + inwestor",
    facts: [["Start grzania", "cement ok. 21 dni, anhydryt ok. 7 dni", "clock"], ["Zasilanie", "start ok. 25°C, max wg producenta", "bulb"]],
    body: `
      <p>Orientacyjna reguła dla jastrychu cementowego: <strong>ok. 1 tydzień na każdy centymetr do 4 cm</strong>, a każdy kolejny centymetr to ok. 2 tygodnie. Przy 6,5 cm wychodzi ok. 9 tygodni bez wygrzewania. Anhydryt przy dobrym wietrzeniu schnie szybciej. Dokładny czas pokaże dopiero pomiar CM (następny krok).</p>
      <p><strong>Wygrzewanie funkcyjne i wygrzewające</strong>: zaczyna się po ok. 21 dniach dla cementu i ok. 7 dniach dla anhydrytu (wg karty producenta). Zasilanie ok. 25°C przez 3 dni, potem stopniowo do temperatury maksymalnej z karty wylewki i projektu podłogówki, kilka dni grzania i stopniowe schodzenie. Wiele pomp ciepła ma gotowy program „suszenie jastrychu”.</p>
      <p>Program i temperatury zapisuj w <strong>protokole wygrzewania</strong>. Wykonawca podłóg (etap 13) poprosi o niego przed układaniem płytek i deski.</p>`,
    cost: { min: 500, max: 1500, note: "prąd do wygrzewania, protokół" },
    tips: [
      "<b>Program z pompy, zasilanie z ustawień serwisu.</b> Poproś serwisanta pompy (etap 09) o włączenie programu suszenia jastrychu. Pompa ma wtedy często włączoną grzałkę: licz się z większym rachunkiem.",
      "<b>Wietrz w czasie wygrzewania.</b> Woda z jastrychu idzie w powietrze. Bez wietrzenia skrapla się na oknach i wraca w ściany.",
      "<b>Nie przykrywaj jastrychu.</b> Folie, płyty i stosy materiałów zostawiają mokre plamy, które wyjdą w pomiarze CM.",
      "<b>Pierwsze grzanie to też test.</b> Sprawdź, czy wszystkie pętle się nagrzewają (dłoń albo kamera termowizyjna). Zimna pętla to zapowietrzenie albo źle ustawiony przepływ."
    ],
    mistakes: [
      "<b>Od razu pełna temperatura.</b> Gwałtowne grzanie świeżego jastrychu daje rysy i odspojenia przy rurach.",
      "<b>Podłoga „na oko”, bo minęło 6 tygodni.</b> Deska puchnie, płytki odpadają, a gwarancja wykonawcy nie obejmuje mokrego podkładu.",
      "<b>Wygrzewanie bez zapisu.</b> Nie masz dowodu dla wykonawcy podłóg ani dla producenta okładziny."
    ],
    formal: [
      ["Protokół wygrzewania jastrychu", "instalator lub inwestor: daty, temperatury zasilania, podpis"]
    ],
    checklist: [
      "Grzanie rozpoczęte nie wcześniej niż wg karty wylewki",
      "Temperatura podnoszona stopniowo, zapis dzienny",
      "Wszystkie pętle się nagrzewają",
      "Protokół wygrzewania podpisany"
    ],
    quiz: [{
      q: "Ile orientacyjnie schnie jastrych cementowy 6,5 cm bez wygrzewania?",
      a: ["Ok. 2–3 tygodnie", "Ok. 9 tygodni", "Ok. pół roku"],
      correct: 1,
      explain: "<b>Reguła kciuka:</b> ok. 1 tydzień na każdy cm do 4 cm (4 tyg.) i po ok. 2 tygodnie na każdy kolejny (2,5 cm × 2 = 5 tyg.). Razem ok. 9 tygodni przy dobrym wietrzeniu."
    }]
  },

  /* 11 ----------------------------------------------------------------- */
  {
    id: "plyty-gk",
    title: "Płyty g-k na poddaszu",
    lead: "Gdy tynki i jastrych przestaną parować, poddasze dostaje płyty gipsowo-kartonowe: sufit pod jętkami, skosy i obudowy. Szczelna folia jest już za stelażem, więc płyty tylko zamykają ocieplenie.",
    time: "2–3 tyg.", team: "2 monterów",
    facts: [["Powierzchnia", "ok. 150–170 m²", "house"], ["Płyta", "12,5 mm, w łazience H2", "layers"], ["Wkręty", "co ok. 15–20 cm", "listcheck"]],
    body: `
      <p>Płyty przykręcamy do stelaża z kroku o ociepleniu: <strong>sufit pod jętkami i skosy</strong>, a na dole skosu połączenie ze ścianą kolankową (1,0 m, otynkowana). Ścianki działowe są murowane (etap 05), więc z płyt robimy tylko <strong>obudowy</strong>: piony kanalizacji, stelaże podtynkowe w łazience i zabudowy wokół okien dachowych.</p>
      <p>W łazience płyty impregnowane <strong>H2</strong> (zielone) pod hydroizolacją, przy kominie i kominku płyty ogniochronne wg systemu kominka. Płyty montuj, gdy wilgotność w domu spadnie do ok. 70% i będzie ciepło (min. ok. +10°C).</p>
      <p>Szpachlowanie: taśma zbrojąca na stykach, dwie–trzy warstwy masy, szlif. W narożach styku skos–ściana i skos–sufit daj <strong>taśmę rozdzielającą</strong> albo akryl: dach pracuje, a sztywna spoina tam pęka.</p>`,
    cost: { min: 12000, max: 17000, note: "płyty, szpachlowanie, taśmy, obudowy, robocizna" },
    tips: [
      "<b>Płyty prostopadle do profili.</b> Krawędzie podłużne w poprzek profili, styki poprzeczne przesunięte o min. ok. 40 cm. Krzyżowe spoiny pękają.",
      "<b>Wkręty co ok. 15–20 cm, łeb tuż pod kartonem.</b> Za płytko wystaje, za głęboko przerywa karton i wkręt nie trzyma.",
      "<b>Wzmocnienia przed płytą.</b> Pod karnisze, lampy wiszące, półki i stelaż WC dołóż profile albo deski. Później kołek w samej płycie nie utrzyma ciężaru.",
      "<b>Folia nienaruszona.</b> Wkręty idą w profile, a nie w folię obok. Kable do oczek prowadź pod folią w stelażu albo przez mankiety.",
      "<b>Ostatnia warstwa masy pod światło.</b> Lampa na skosie pokaże każdą falę spoiny. Poprawki przed gruntem i farbą (etap 13)."
    ],
    mistakes: [
      "<b>Płyty w wilgotnym domu.</b> Karton chłonie wodę, płyty się wyginają, a spoiny pękają po pierwszym sezonie.",
      "<b>Sztywna spoina na styku skosu z kolankową.</b> Dach pracuje przy wietrze i mrozie: po zimie w każdym narożu jest rysa.",
      "<b>Brak wzmocnienia pod szafki w łazience.</b> Szafka z umywalką wyrywa kołki z płyty."
    ],
    checklist: [
      "Wilgotność w domu ok. 70% lub mniej przed montażem",
      "Płyty H2 w łazience, ogniochronne przy kominie wg systemu",
      "Styki przesunięte, wkręty co ok. 15–20 cm",
      "Wzmocnienia pod szafki, karnisze i lampy",
      "Naroża skos–ściana z taśmą rozdzielającą lub akrylem",
      "Spoiny gładkie pod światło"
    ],
    quiz: [{
      q: "Dlaczego na styku skosu z otynkowaną ścianą kolankową nie robi się sztywnej spoiny?",
      a: ["Bo masa się tam nie trzyma", "Bo dach i ściana pracują inaczej, a sztywna spoina pęka", "Bo tak jest szybciej"],
      correct: 1,
      explain: "<b>Konstrukcja dachu pracuje</b> przy wietrze, śniegu i zmianach temperatury. Taśma rozdzielająca albo akryl pozwalają na ruch i zostawiają czystą linię zamiast rysy."
    }]
  },

  /* 12 ----------------------------------------------------------------- */
  {
    id: "pomiar-cm",
    title: "Pomiar wilgotności metodą CM",
    lead: "Zanim położysz płytki, deskę albo panele, zmierz wilgotność jastrychu metodą karbidową (CM). To jedyna metoda, którą uznają producenci okładzin i kleju.",
    time: "1–2 godz.", team: "posadzkarz albo firma pomiarowa",
    facts: [["Anhydryt z podłogówką", "orient. ≤ 0,3% CM", "layers"], ["Cement z podłogówką", "orient. ≤ 1,5–1,8% CM", "layers"]],
    body: `
      <p>Z jastrychu wykuwa się próbkę z <strong>całej grubości</strong> (z dolnej części, bo tam schnie najdłużej), waży, zamyka w butli z karbidem i odczytuje ciśnienie gazu. Wynik w procentach CM porównuje się z wymaganiem producenta okładziny.</p>
      <p>Orientacyjne progi przy podłogówce: <strong>anhydryt ok. 0,3% CM</strong>, <strong>cement ok. 1,5–1,8% CM</strong> (pod deskę i panele ostrzej niż pod płytki). Rozstrzyga karta techniczna kleju i podłogi, więc sprawdź ją przed pomiarem.</p>
      <p>Miejsca pomiaru wyznacza się <strong>przed wylewaniem</strong> (ok. 3 w domu, z dala od rur), żeby wiertło nie trafiło w podłogówkę.</p>`,
    cost: { min: 300, max: 800, note: "pomiar CM w kilku punktach z protokołem" },
    tips: [
      "<b>Punkty pomiarowe oznacz przed wylewką.</b> Zostaw w każdej kondygnacji 1–2 miejsca bez rur, oznaczone na planie i na ścianie.",
      "<b>Mierz w najgorszym miejscu.</b> Najgrubsza wylewka, róg bez przewiewu, garaż od strony domu. Średnia z dobrych miejsc nic nie mówi.",
      "<b>Mierniki elektroniczne tylko orientacyjnie.</b> Pokazują trend, ale nie zastąpią CM. Wykonawca podłóg i tak poprosi o protokół CM.",
      "<b>Wygrzewanie wyłącz dzień wcześniej.</b> Pomiar na gorącym jastrychu zaniża wynik (wg zaleceń firmy pomiarowej)."
    ],
    mistakes: [
      "<b>Pomiar tylko z wierzchu.</b> Góra jest sucha, dół mokry. Po położeniu deski wilgoć idzie w górę.",
      "<b>Wiercenie w podłogówce.</b> Bez oznaczonych punktów pomiar kończy się przebitą rurą."
    ],
    formal: [
      ["Protokół pomiaru wilgotności CM", "posadzkarz lub firma: punkty, grubość, wynik; do wykonawcy podłóg (etap 13)"]
    ],
    checklist: [
      "Pomiar w min. 3 punktach na dom",
      "Próbka z całej grubości jastrychu",
      "Wyniki poniżej progów z karty kleju i podłogi",
      "Protokół podpisany"
    ],
    quiz: [{
      q: "Która wylewka z podłogówką ma najniższy dopuszczalny próg wilgotności przed podłogą?",
      a: ["Anhydrytowa, orient. ok. 0,3% CM", "Cementowa, orient. ok. 1,8% CM", "Oba progi są takie same"],
      correct: 0,
      explain: "<b>Anhydryt wymaga bardzo suchego podkładu</b>, orient. ok. 0,3% CM przy podłogówce. Cement dopuszcza wyższą wartość, ale schnie dłużej. Liczy się karta producenta kleju i podłogi."
    }]
  },

  /* 13 ----------------------------------------------------------------- */
  {
    id: "wyrownanie-gruntowanie",
    title: "Wyrównanie i gruntowanie przed podłogami",
    lead: "Ostatni krok etapu 11: sprawdzić równość jastrychu łatą, wyrównać miejsca, które odstają, i zagruntować podkład pod klej. Etap 13 zaczyna się na czystej, równej i suchej powierzchni.",
    time: "2–5 dni", team: "posadzkarz",
    facts: [["Kontrola", "łata 2 m", "listcheck"], ["Masa", "ok. 2–10 mm lokalnie", "layers"]],
    body: `
      <p>Łata 2 m w kilku kierunkach pokaże, czy podkład spełnia wymagania okładziny. Duże płytki i deska klejona wymagają podkładu <strong>równiejszego</strong> niż panele. Wymaganie podaje producent podłogi albo umowa z wykonawcą etapu 13.</p>
      <p>Wysokie miejsca szlifujemy, niskie wyrównujemy <strong>masą samopoziomującą</strong> (po gruncie). Rysy skurczowe zszywa się klamrami i żywicą, a dylatacje z jastrychu przenosimy w okładzinę w tym samym miejscu.</p>
      <p>Na koniec odkurzanie przemysłowe i <strong>grunt</strong> dobrany do wylewki (na anhydryt inny niż na cement) i do kleju. Przy okazji przytnij taśmę dylatacyjną przy ścianach dopiero teraz, nie wcześniej. <button class="xref" data-section="posadzka"><svg class="ico"><use href="#i-layers"/></svg>zobacz w przekroju</button></p>`,
    cost: { min: 2000, max: 5000, note: "szlif, masa samopoziomująca lokalnie, grunty, odkurzanie" },
    tips: [
      "<b>Grunt z systemu kleju.</b> Grunt, masa i klej od jednego producenta. Mieszanie systemów to pierwsza odpowiedź serwisu przy reklamacji.",
      "<b>Masa po gruncie, w ciepłym domu.</b> Masa samopoziomująca na niezagruntowanym podkładzie pęka i odspaja się. Temperatura i czas schnięcia wg worka.",
      "<b>Dylatacje zostają dylatacjami.</b> Szczelina w jastrychu musi wypaść w tym samym miejscu w płytkach albo pod listwą progową.",
      "<b>Kanały rekuperacji wciąż zaślepione.</b> Pył ze szlifowania jastrychu i gładzi wchodzi w każdą szczelinę. Centralę uruchamia się na stałe dopiero po szlifowaniu i malowaniu (etapy 10 i 13)."
    ],
    mistakes: [
      "<b>Wyrównywanie klejem pod płytkami.</b> Gruba warstwa kleju schnie miesiącami, płytki odstają albo pękają.",
      "<b>Zamknięcie dylatacji masą.</b> Wylewka nadal pracuje, a pęknięcie przechodzi przez płytki po pierwszym sezonie grzewczym."
    ],
    checklist: [
      "Równość sprawdzona łatą 2 m wg wymagań okładziny",
      "Mleczko anhydrytu zeszlifowane",
      "Rysy zszyte, dylatacje oznaczone",
      "Podkład odkurzony i zagruntowany gruntem z systemu kleju",
      "Kanały rekuperacji nadal zaślepione"
    ]
  }

  ]
});
