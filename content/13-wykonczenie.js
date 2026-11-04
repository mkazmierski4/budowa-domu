/* Etap 13: Wykończenie wnętrz. Ceny orientacyjne, 2026 r., okolice małego miasta, dom referencyjny ok. 190 m².
   Bez mebli, kuchni i lamp dekoracyjnych (etap 14). Podłogi z podłogówką z etapu 09 na wylewce anhydrytowej z etapu 11. */
BUDOWA.addStage({
  id: "13-wykonczenie", nr: 13, title: "Wykończenie wnętrz", icon: "🎨", category: "wykoncz",
  summary: "Od hydroizolacji łazienek po rozruch rekuperacji: płytki, łazienka z wanną wolnostojącą, malowanie, obudowa kominka, schody, podłogi, siłownia, drzwi, listwy i biały montaż.",
  duration: "3–5 mies.",
  steps: [

  /* 1 ------------------------------------------------------------------ */
  {
    id: "kolejnosc",
    title: "Kolejność prac i ochrona",
    lead: "Wykończenie to kilka ekip w jednym domu przez 3–5 miesięcy. Dobra kolejność oszczędza poprawki: najpierw prace mokre i brudne, na końcu to, co łatwo porysować.",
    time: "plan 1–2 dni, całość 3–5 mies.", team: "ty lub kierownik robót, 5–7 ekip",
    facts: [["Wilgotność powietrza", "ok. 40–60%", "bulb"], ["Temperatura", "ok. 18–22°C", "sun"], ["Ekipy", "glazurnik, malarz, parkieciarz, stolarz, hydraulik, elektryk", "users"]],
    body: `
      <p>Kolejność, która działa w domu z podłogówką: <strong>hydroizolacja i płytki → parapety → szpachlowanie i pierwsza warstwa farby → obudowa kominka i schody → podłogi drewniane → drzwi i listwy → biały montaż → ostatnia warstwa farby → sprzątanie → rozruch rekuperacji</strong>. Płytki idą pierwsze, bo glazurnik brudzi i tnie na mokro. Podłogi drewniane i drzwi wchodzą dopiero do suchego, pomalowanego domu.</p>
      <p>Przed pierwszą okładziną potrzebny jest <strong>pomiar CM</strong> wylewki w miejscach oznaczonych w etapie 11 (anhydryt orientacyjnie do 0,3%). Dom jest ogrzewany pompą ciepła, rekuperacja wciąż jest zaślepiona, więc wietrzysz oknami kilka razy dziennie.</p>
      <p>Ochrona kosztuje niewiele: tektura falista lub płyty ochronne na posadzkach, płyta OSB na schodach, folia na oknach i HS, narożniki z tektury. Wymiana porysowanej szyby HS kosztuje więcej niż ochrona całego domu.</p>`,
    cost: { min: 1000, max: 2000, note: "ochrona posadzek, okien i schodów, pomiar CM" },
    decision: {
      question: "Kto prowadzi wykończenie?",
      intro: "Koszty w kolejnych krokach dotyczą osobnych ekip. Firma „pod klucz” dolicza koordynację.",
      chosen: "ekipy",
      options: [
        { id: "ekipy", name: "Osobne ekipy, koordynujesz sam",
          cost: { min: 0, max: 0 }, time: "3–5 mies.", note: "harmonogram w arkuszu",
          pros: ["Najtaniej, każdą ekipę wybierasz osobno", "Możesz sam kupić materiały w promocjach", "Łatwo wymienić słabą ekipę"],
          cons: ["Ty odpowiadasz za kolejność i terminy", "Spory „to nie moja wina” między ekipami", "Wymaga obecności na budowie 2–3 razy w tygodniu"],
          why: "Przy jednym domu i dobrze rozpisanej kolejności to najrozsądniejsza droga. Wykonawców z poprzednich etapów (hydraulik, elektryk) i tak masz." },
        { id: "pod-klucz", name: "Firma wykończeniowa pod klucz",
          cost: { min: 12000, max: 25000 }, time: "3–4 mies.", note: "marża za koordynację ok. 8–15%",
          pros: ["Jeden wykonawca i jedna gwarancja", "Mniej twojego czasu"],
          cons: ["Drożej", "Materiały z ich hurtowni, mniejszy wybór", "Podwykonawcy, których nie znasz"],
          why: "Ma sens, gdy pracujesz daleko od budowy albo nie masz czasu na codzienne decyzje." }
      ]
    },
    tips: [
      "<b>Rozpisz harmonogram tydzień po tygodniu.</b> Glazurnik 4–6 tyg., malarz 2–3 tyg. (w dwóch turach), schody 2–4 tyg. z betonem, podłogi 1–2 tyg., drzwi i listwy 1 tydz., biały montaż 3–5 dni.",
      "<b>Zamów materiały z wyprzedzeniem.</b> Deska, drzwi i płytki wielkoformatowe mają często 3–8 tyg. dostawy. Zamówienie po wejściu ekipy oznacza przestój.",
      "<b>Deska i drzwi leżą w domu przed montażem.</b> Ok. 1–2 tyg. w docelowych warunkach (temperatura i wilgotność), w zamkniętych paczkach, wg karty producenta.",
      "<b>Jeden dziennik zmian.</b> Zdjęcia ścian z instalacjami (zrobione w etapach 08–09) trzymaj pod ręką: każda ekipa wierci i musi wiedzieć, gdzie są przewody i rury."
    ],
    mistakes: [
      "<b>Podłoga drewniana przed malowaniem.</b> Farba, gips i drabiny niszczą lakier, a wilgoć z malowania może podnieść deskę.",
      "<b>Okładziny bez pomiaru CM.</b> Za mokry anhydryt pod płytkami i deską to odspojenia i wybrzuszenia po pierwszym sezonie grzewczym.",
      "<b>Brak ochrony schodów i HS.</b> Zarysowane stopnie dębowe i szyby to typowe szkody z ostatnich tygodni budowy."
    ],
    formal: [
      ["Protokół pomiaru CM", "wykonawca podłóg; przed pierwszą okładziną, do teczki budowy"],
      ["Umowy z ekipami", "zakres, termin, sposób odbioru, kaucja 5–10% do odbioru"]
    ],
    checklist: [
      "Harmonogram ekip rozpisany i uzgodniony",
      "Pomiar CM wylewki wykonany, wynik w protokole",
      "Posadzki, schody, okna i HS osłonięte",
      "Materiały o długiej dostawie zamówione",
      "Zdjęcia instalacji w ścianach dostępne dla ekip"
    ],
    quiz: [{
      q: "Co montujesz wcześniej: płytki w łazienkach czy deskę w sypialniach?",
      a: ["Deskę, bo wymaga więcej czasu", "Płytki, bo to prace mokre i brudne", "Wszystko naraz, żeby było szybciej"],
      correct: 1,
      explain: "<b>Najpierw prace mokre i brudne.</b> Płytki, kleje i malowanie podnoszą wilgotność i kurz. Deska wchodzi do suchego, pomalowanego domu."
    }]
  },

  /* 2 ------------------------------------------------------------------ */
  {
    id: "hydroizolacja",
    title: "Hydroizolacja łazienek",
    lead: "Pod płytkami w łazience musi być szczelna powłoka. Fuga i płytka nie są wodoodporne: woda przechodzi przez nie i bez hydroizolacji trafia w płyty g-k, wylewkę i strop.",
    time: "2–3 dni na łazienkę (z przerwami na schnięcie)", team: "glazurnik",
    facts: [["Warstwy", "grunt + 2 × folia w płynie", "layers"], ["Spadek", "ok. 1,5–2% do odpływu", "rebar"], ["Próba", "zalanie ok. 24 h", "check"]],
    body: `
      <p>W domu są dwie łazienki: <strong>na poddaszu</strong> z wanną wolnostojącą i prysznicem bez brodzika, <strong>na parterze</strong> z prysznicem. Hydroizolacja obejmuje całą podłogę obu łazienek, ściany w strefie prysznica do min. ok. 2 m (powyżej deszczownicy) i pas ok. 20–30 cm nad krawędzią wanny i umywalek.</p>
      <p>Kolejność: <strong>grunt</strong> z systemu (na anhydrycie obowiązkowo grunt dopuszczony do anhydrytu), potem <strong>taśmy uszczelniające</strong> w narożnikach i na styku ściana–podłoga, <strong>mankiety</strong> na rurach, <strong>kołnierz odpływu</strong>, a na koniec <strong>dwie warstwy folii w płynie</strong> na krzyż, każda innym kolorem, żeby było widać braki.</p>
      <p>Prysznic bez brodzika potrzebuje <strong>spadku ok. 1,5–2%</strong> w stronę odpływu. Spadek robi się w zaprawie wyrównującej albo w kleju; odpływ liniowy przy ścianie daje spadek tylko w jedną stronę, więc płytki wielkoformatowe tnie się prosto, bez kopert.</p>`,
    cost: { min: 3500, max: 7000, note: "2 łazienki: grunt, folia, taśmy, mankiety, zaprawa spadkowa, robocizna" },
    decision: {
      question: "Jaki odpływ w prysznicach?",
      intro: "Dwa prysznice bez brodzika (poddasze i parter). Koszt to różnica względem odpływu liniowego.",
      chosen: "liniowy",
      options: [
        { id: "liniowy", name: "Odpływ liniowy przy ścianie",
          cost: { min: 0, max: 0 }, time: "jak reszta", note: "ok. 0,8–2,5 tys. zł/szt.",
          pros: ["Spadek w jedną stronę, płytki wielkoformatowe bez cięcia po przekątnej", "Ruszt można wykleić płytką", "Łatwo czyścić syfon"],
          cons: ["Wymaga ok. 7–10 cm wysokości pod syfon (zaplanowane przed wylewką)", "Droższy od kratki punktowej"],
          why: "Pasuje do płytek wielkoformatowych i prysznica bez progu. Wysokość pod syfon przewidział hydraulik w etapie 09." },
        { id: "punktowy", name: "Kratka punktowa na środku",
          cost: { min: -2000, max: -800 }, time: "jak reszta", note: "ok. 0,3–0,8 tys. zł/szt.",
          pros: ["Tani odpływ", "Niski syfon"],
          cons: ["Spadki „kopertowe” w cztery strony", "Płytki cięte po przekątnej, przy wielkim formacie wygląda źle"],
          why: "Dobry przy małych płytkach i mozaice albo gdy brakuje wysokości w posadzce." },
        { id: "brodzik", name: "Brodzik płaski z konglomeratu",
          cost: { min: -1500, max: 500 }, time: "szybciej o 1–2 dni", note: "brodzik ok. 1–2,5 tys. zł",
          pros: ["Fabrycznie szczelny i ze spadkiem", "Szybki montaż"],
          cons: ["Widoczny próg 2–4 cm", "Mniej „hotelowy” wygląd", "Wymiar z katalogu, nie z łazienki"],
          why: "Rozsądny w łazience na parterze, gdy liczy się czas i cena." }
      ]
    },
    tips: [
      "<b>Dwie warstwy w dwóch kolorach.</b> Druga warstwa w innym kolorze pokazuje każdą dziurę. Grubość i zużycie (zwykle ok. 1,2–1,5 kg/m² razem) podaje karta produktu.",
      "<b>Taśma w każdym narożniku i przy podłodze.</b> Folia sama pęka na styku ścian i posadzki, bo te elementy pracują inaczej. Narożniki wewnętrzne i zewnętrzne są gotowe w systemie.",
      "<b>Próba zalania.</b> Po wyschnięciu zatkaj odpływ, nalej wody na ok. 1–2 cm w strefie prysznica i zostaw na ok. 24 h. Mokra plama pod spodem albo spadek poziomu oznacza poprawkę teraz, a nie skuwanie płytek za rok.",
      "<b>Ruszt odpływu na wysokość płytki.</b> Odpływ liniowy ustawia się na wysokość gotowej posadzki (klej + płytka), nie na wylewkę."
    ],
    mistakes: [
      "<b>Folia bez taśm.</b> Rysa na styku ściana–podłoga po pierwszym sezonie i przeciek do ściany albo stropu.",
      "<b>Cementowy klej prosto na anhydryt.</b> Bez gruntu przeznaczonego do anhydrytu klej traci przyczepność. Grunt musi być z tego samego systemu co klej i folia.",
      "<b>Za mały spadek.</b> Przy mniej niż ok. 1% woda stoi w kałużach przy szklanej ściance."
    ],
    checklist: [
      "Grunt z systemu, na anhydrycie dopuszczony do anhydrytu",
      "Taśmy w narożnikach i na styku ściana–podłoga, mankiety na rurach",
      "Dwie warstwy folii, strefa prysznica do min. ok. 2 m",
      "Spadek do odpływu ok. 1,5–2%, sprawdzony poziomicą",
      "Próba zalania ok. 24 h bez przecieku"
    ],
    quiz: [{
      q: "Czy fuga i płytki gresowe wystarczą jako ochrona przed wodą pod prysznicem?",
      a: ["Tak, gres nie nasiąka", "Nie, woda przechodzi przez fugi; szczelna jest dopiero folia pod płytkami", "Tak, jeśli fuga jest epoksydowa na całej ścianie"],
      correct: 1,
      explain: "<b>Szczelna jest hydroizolacja, nie okładzina.</b> Fuga cementowa przepuszcza wodę, a szczeliny przy silikonie pracują. Folia w płynie z taśmami zatrzymuje wodę przed płytą g-k i wylewką."
    }]
  },

  /* 3 ------------------------------------------------------------------ */
  {
    id: "plytki",
    title: "Płytki: łazienki, kuchnia, hol",
    lead: "Płytki kładziemy tam, gdzie jest woda, piasek z butów albo tłuszcz: łazienki, kuchnia, wiatrołap z holem, pomieszczenie techniczne. Razem ok. 85–90 m² podłóg i ścian.",
    time: "4–6 tyg.", team: "glazurnik z pomocnikiem",
    facts: [["Podłogi", "ok. 57 m²", "house"], ["Ściany łazienek", "ok. 30 m²", "layers"], ["Klej", "C2TE S1 (elastyczny)", "check"]],
    body: `
      <p>Podłogi: <strong>wiatrołap i hol ok. 18 m², kuchnia ok. 16 m², łazienki ok. 17 m², pomieszczenie techniczne ok. 6 m²</strong>. Na podłogach gres rektyfikowany 60 × 120 cm w macie, w łazienkach 60 × 120 na ścianach do pełnej wysokości tylko w strefie prysznica i za wanną, reszta ścian malowana farbą łazienkową. Po montażu kuchni (etap 14) glazurnik wraca na ok. 1 dzień i kładzie płytki nad blatem (ok. 3–4 m²).</p>
      <p>Na podłogówce płytki to najlepsza okładzina: opór cieplny ok. <strong>0,01–0,02 m²·K/W</strong>. Warunek: klej elastyczny <strong>C2TE S1</strong> (albo S2 przy wielkim formacie), klejenie <strong>metodą kombinowaną</strong> (klej na podłożu i na płytce) do pokrycia bez pustek oraz dylatacje z etapu 11 przeniesione w fugę.</p>
      <p>Garaż ma miksokret ze spadkiem. Zamiast płytek dostaje <strong>farbę epoksydową</strong> lub impregnat (ok. 35 m²): mniej pylenia, łatwe mycie, sól z kół nie wnika w beton.</p>`,
    cost: { min: 18000, max: 32000, note: "ok. 87 m² płytek z chemią i robocizną, płytki nad blatem kuchni po jej montażu, garaż epoksyd" },
    tips: [
      "<b>Płytki z jednej partii (kalibru i odcienia).</b> Kup od razu ok. 10–15% zapasu (wielki format więcej) i zostaw kilka sztuk na naprawy.",
      "<b>System poziomowania przy wielkim formacie.</b> Klipsy i kliny wyrównują styki płytek 60 × 120; bez nich „ząbki” na krawędziach widać w bocznym świetle z okna.",
      "<b>Rozkład płytek zanim padnie pierwsza.</b> Glazurnik rysuje siatkę od osi drzwi i odpływu: docinki min. ok. 1/3 płytki, fugi ścian i podłogi w jednej linii.",
      "<b>Fuga 2–3 mm, w łazience z dodatkiem przeciw pleśni albo epoksydowa w prysznicu.</b> Narożniki wewnętrzne i styki z wanną tylko silikonem sanitarnym, nie fugą.",
      "<b>Kąt 45° zamiast listew aluminiowych.</b> Szlifowane narożniki (tzw. jolly) kosztują ok. 40–80 zł/mb dopłaty, ale wyglądają jak na zdjęciach z katalogów."
    ],
    mistakes: [
      "<b>Klejenie „na placki”.</b> Pustki pod płytką pękają pod nogą stołu, a na podłogówce grzeją się nierówno.",
      "<b>Fuga przez dylatację wylewki.</b> Wylewka pracuje, więc fuga pęka po pierwszym sezonie grzewczym. Dylatacja musi zostać w okładzinie (profil lub silikon).",
      "<b>Płytki na świeżej wylewce.</b> Bez pomiaru CM i wygrzewania (etap 11) klej traci przyczepność."
    ],
    checklist: [
      "Płytki z jednej partii, zapas ok. 10–15%",
      "Klej C2TE S1, pokrycie bez pustek (kontrola: zdjęta płytka)",
      "Dylatacje wylewki przeniesione w okładzinę",
      "Fugi równe, narożniki wewnętrzne silikonem",
      "Płaskość: łata 2 m, styki płytek bez uskoków",
      "Garaż: posadzka zagruntowana i pomalowana epoksydem"
    ],
    quiz: [{
      q: "Która okładzina najmniej przeszkadza podłogówce?",
      a: ["Płytki gresowe na kleju", "Deska warstwowa dębowa", "Wykładzina dywanowa z podkładem"],
      correct: 0,
      explain: "<b>Płytka prawie nie izoluje.</b> Gres ma opór ok. 0,01–0,02 m²·K/W. Deska warstwowa klejona to ok. 0,10, a dywan z podkładem potrafi przekroczyć zalecane ok. 0,15."
    }]
  },

  /* 4 ------------------------------------------------------------------ */
  {
    id: "lazienka",
    title: "Łazienka z wanną wolnostojącą",
    lead: "Łazienka na poddaszu jak na zdjęciu inspiracji: wanna wolnostojąca na środku, dwie umywalki nablatowe, WC wiszące, prysznic za szklaną ścianką i lustra z podświetleniem.",
    time: "wybór 2–4 tyg., montaż 3–5 dni", team: "hydraulik, glazurnik, elektryk",
    facts: [["Wanna pełna", "ok. 300–400 kg", "alert"], ["Blat", "ok. 85–90 cm nad podłogą", "house"], ["Lustro", "LED 2700–4000 K, IP44", "bulb"]],
    body: `
      <p><strong>Wanna wolnostojąca</strong> akrylowa albo z konglomeratu (kompozytu mineralnego) stoi na gotowej płytce. Odpływ wychodzi z podłogi w miejscu z etapu 09, więc model wanny musi być znany przed wylewką. Pod wanną nie ma rur podłogówki.</p>
      <p><strong>Umywalki nablatowe</strong> stoją na blacie z szafką podwieszaną; blaty i szafki są w etapie 14, tu liczymy ceramikę. Wysokość krawędzi umywalki ok. 85–90 cm od podłogi, więc blat wypada niżej niż przy umywalce wpuszczanej.</p>
      <p><strong>Stelaże WC</strong> hydraulik zamontował przed obudową z płyt (etap 11), tu liczymy ich koszt razem z miskami i przyciskami. Miska wisi na dwóch szpilkach na wysokości ok. 40–43 cm do krawędzi.</p>
      <p><strong>Lustra z oświetleniem</strong> podłącza elektryk do przewodu z etapu 08. Strefy łazienkowe ograniczają, co wolno zamontować przy wannie i prysznicu: oprawy w pobliżu wody muszą mieć odpowiedni stopień IP. Sprawdź to z elektrykiem.</p>`,
    cost: { min: 10000, max: 20000, note: "wanna, 2 stelaże z miskami, 3 umywalki nablatowe, ścianka walk-in, lustra LED, akcesoria; blaty i szafki w etapie 14" },
    tips: [
      "<b>Wanna min. ok. 15 cm od ścian.</b> Inaczej nie umyjesz za nią. Przy baterii wolnostojącej zostaw ok. 20 cm między wanną a baterią.",
      "<b>Akryl czy konglomerat.</b> Akryl jest lekki (ok. 30–50 kg) i tańszy; konglomerat cięższy (ok. 100–200 kg), cieplejszy w dotyku i trwalszy. Masę pełnej wanny sprawdził konstruktor w etapie 09.",
      "<b>Ścianka walk-in 8 mm z powłoką łatwoczyszczącą.</b> Szkło hartowane, profil przyścienny wklejony w silikon, ramię stabilizujące do sufitu lub ściany.",
      "<b>Lustro szersze niż umywalki.</b> Oświetlenie z boków lub dookoła daje światło bez cieni na twarzy; barwa ok. 3000–4000 K i CRI ≥ 90 (jak w etapie 08).",
      "<b>Przycisk WC z dostępem do rewizji.</b> Przez otwór przycisku wymienia się zawór spłuczki, więc nie zabudowuj go niczym na stałe."
    ],
    mistakes: [
      "<b>Wanna kupiona po wylewce.</b> Odpływ w posadzce nie trafia w syfon, a wymiar nie pasuje do strefy bez podłogówki.",
      "<b>Umywalka nablatowa na zbyt wysokim blacie.</b> Blat 90 cm + umywalka 15 cm = mycie rąk na wysokości ramion.",
      "<b>Szafka podumywalkowa z płyty bez obrzeży.</b> Woda z blatu wnika w krawędzie i płyta pęcznieje po roku."
    ],
    checklist: [
      "Wanna stoi poziomo, odpływ szczelny, rewizja syfonu dostępna",
      "Miski WC na wysokości ok. 40–43 cm, przyciski działają",
      "Umywalki szczelne, syfony bez przecieku",
      "Ścianka szklana stabilna, silikon ciągły",
      "Lustra LED świecą, przewody i strefy uzgodnione z elektrykiem"
    ],
    quiz: [{
      q: "Dlaczego model wanny wolnostojącej trzeba znać przed wylewką?",
      a: ["Bo sklep wymaga zamówienia z wyprzedzeniem", "Bo odpływ i bateria wychodzą z podłogi w miejscu zależnym od modelu", "Bo wanna wolnostojąca musi stać na betonie bez płytek"],
      correct: 1,
      explain: "<b>Odpływ jest w posadzce.</b> Syfon wanny i rury baterii wolnostojącej wychodzą z podłogi; po wylewce przesunięcie ich oznacza kucie i nową hydroizolację."
    }]
  },

  /* 5 ------------------------------------------------------------------ */
  {
    id: "armatura",
    title: "Armatura: podtynkowa czy natynkowa",
    lead: "Baterie decydują o wyglądzie łazienki i o tym, co trzeba schować w ścianie przed płytkami. Podtynkowa wygląda jak w hotelu, natynkowa jest tańsza i łatwiejsza w serwisie.",
    time: "korpusy przed płytkami, wykończenia 1–2 dni", team: "hydraulik",
    facts: [["Termostat", "w każdym prysznicu", "check"], ["Korpus", "w ścianie, przed płytkami", "layers"]],
    body: `
      <p>Komplet: <strong>2 prysznice</strong> z deszczownicą i słuchawką, <strong>bateria wolnostojąca</strong> do wanny (na rurach z podłogi, etap 09) oraz baterie do <strong>3 umywalek nablatowych</strong>. Przy umywalce nablatowej bateria jest albo wysoka stojąca, albo ścienna.</p>
      <p><strong>Podtynkowa</strong>: w ścianie siedzi korpus (puszka z zaworami), na płytkach widać tylko pokrętła i wylewkę. Korpus wbudowuje hydraulik przed płytkami, z głębokością dopasowaną do grubości okładziny. <strong>Natynkowa</strong>: kolumna prysznicowa z termostatem i baterie stojące, wszystko wkręcone w gotowe podejścia.</p>`,
    decision: {
      question: "Jaka armatura w łazienkach?",
      intro: "Cena kompletu z baterią wolnostojącą do wanny, która w obu wariantach stoi na podłodze.",
      chosen: "podtynkowa",
      options: [
        { id: "podtynkowa", name: "Podtynkowa z termostatem",
          cost: { min: 8000, max: 14000 }, time: "korpusy przed płytkami", note: "prysznice i umywalki ścienne",
          pros: ["Czyste ściany, łatwe mycie", "Wygląd jak na zdjęciu inspiracji", "Termostat chroni przed oparzeniem"],
          cons: ["Drożej i trzeba zdecydować przed płytkami", "Serwis przez rozetę, wymiana korpusu to kucie"],
          why: "Pasuje do łazienki z wanną wolnostojącą i płytkami wielkoformatowymi. Kup armaturę jednej marki z korpusami tego samego systemu." },
        { id: "natynkowa", name: "Natynkowa: kolumny i baterie stojące",
          cost: { min: 5000, max: 9000 }, time: "1 dzień", note: "kolumna z termostatem",
          pros: ["Taniej o ok. 3–5 tys. zł", "Prosty montaż i serwis", "Decyzję można podjąć po płytkach"],
          cons: ["Rury i kolumna na ścianie", "Więcej miejsc do czyszczenia z kamienia"],
          why: "Dobry wybór, gdy brakuje czasu na decyzję przed płytkami albo trzeba ciąć budżet." }
      ]
    },
    tips: [
      "<b>Korpus z kartą montażu.</b> Każdy korpus ma zakres głębokości: hydraulik ustawia go od lica gotowej płytki, nie od płyty g-k.",
      "<b>Wylewka umywalkowa ścienna na wysokość ok. 15–20 cm nad umywalką.</b> Długość wylewki dobierz tak, żeby strumień trafiał w środek misy.",
      "<b>Filtr i zawory odcinające.</b> Woda przechodzi przez filtr z etapu 09, ale przy podtynkowych bateriach zawory przy korpusie pozwalają serwisować jedną łazienkę.",
      "<b>Próba ciśnienia przed płytkami.</b> Korpus podłączony, zaślepiony i pod ciśnieniem przez czas klejenia płytek."
    ],
    mistakes: [
      "<b>Korpus za płytko.</b> Rozety nie dochodzą do płytki albo odstają; trzeba kuć i kłaść płytki od nowa.",
      "<b>Termostat podłączony odwrotnie.</b> Ciepła i zimna woda zamienione miejscami: bateria grzeje „na zimnym” i nie trzyma temperatury.",
      "<b>Armatura z różnych systemów.</b> Inna barwa chromu lub czerni w każdej baterii i części, które do siebie nie pasują."
    ],
    checklist: [
      "Korpusy na głębokości z karty, pod ciśnieniem przed płytkami",
      "Termostaty trzymają ok. 38°C, blokada przy 38°C działa",
      "Wylewki umywalkowe celują w środek misy",
      "Bateria wolnostojąca stabilna, rozeta przy płytce"
    ],
    quiz: [{
      q: "Kiedy hydraulik montuje korpus baterii podtynkowej?",
      a: ["Po płytkach, przez otwór wycięty w płytce", "Przed płytkami, z głębokością liczoną od lica gotowej okładziny", "Po malowaniu, razem z białym montażem"],
      correct: 1,
      explain: "<b>Korpus siedzi w ścianie pod płytką.</b> Montuje się go przed hydroizolacją i płytkami, a głębokość ustawia od lica płytki. Po płytkach zakłada się tylko wykończenia."
    }]
  },

  /* 6 ------------------------------------------------------------------ */
  {
    id: "malowanie",
    title: "Gruntowanie, szpachlowanie i malowanie",
    lead: "Tynk gipsowy maszynowy z etapu 11 jest gładki, więc zwykle nie potrzebuje gładzi na całości. Wystarczy grunt, miejscowe szpachlowanie i dwie warstwy farby.",
    time: "2–3 tyg. w dwóch turach", team: "malarz z pomocnikiem",
    facts: [["Powierzchnia", "ok. 850–950 m² ścian i sufitów", "house"], ["Warstwy", "grunt + 2 × farba", "layers"], ["Odstęp", "ok. 2–4 h między warstwami (wg karty)", "clock"]],
    body: `
      <p><strong>Grunt</strong> wyrównuje chłonność tynku i płyt g-k, żeby farba nie wyszła w łaty. Potem <strong>szpachlowanie miejscowe</strong>: zarysowania, łączenia płyt na skosach, styki z ościeżami. Na skosach z oknami dachowymi pada boczne światło, więc tam szpachlujesz staranniej (jakość ok. Q3–Q4).</p>
      <p>Farby: <strong>sufity</strong> biała akrylowa w głębokim macie (ukrywa nierówności), <strong>ściany</strong> lateksowa lub ceramiczna w klasie odporności na szorowanie 1–2 (PN-EN 13300), <strong>łazienki i kuchnia</strong> farba do pomieszczeń wilgotnych. Kolejność w każdym pomieszczeniu: sufit, potem ściany.</p>
      <p>Pierwsza warstwa idzie przed podłogami i drzwiami. <strong>Ostatnia warstwa</strong> po montażu listew, drzwi i osprzętu, żeby zakryć ślady montażu.</p>`,
    cost: { min: 16000, max: 24000, note: "ok. 900 m² ścian i sufitów: grunt, szpachlowanie miejscowe, 2 × farba, robocizna" },
    decision: {
      question: "Jak przygotować ściany pod farbę?",
      intro: "Koszt to dopłata względem miejscowego szpachlowania.",
      chosen: "miejscowo",
      options: [
        { id: "miejscowo", name: "Tynk gipsowy + szpachlowanie miejscowe",
          cost: { min: 0, max: 0 }, time: "2–3 tyg.", note: "Q3 na skosach",
          pros: ["Tynk maszynowy jest już gładki", "Szybciej i bez dodatkowego pyłu", "Taniej"],
          cons: ["Wymaga dobrego tynku z etapu 11", "W bocznym świetle widać drobne fale"],
          why: "Tynk maszynowy zatarty na gładko i wysuszony przyjmuje farbę wprost. Pieniądze lepiej wydać na podłogi i drzwi." },
        { id: "gladz", name: "Gładź na całości",
          cost: { min: 10000, max: 18000 }, time: "+2–3 tyg.", note: "ok. 12–20 zł/m²",
          pros: ["Idealnie równe ściany w każdym świetle", "Ukrywa słabszy tynk"],
          cons: ["Dużo pyłu ze szlifowania", "Dodatkowe tygodnie i wilgoć w domu", "Większe ryzyko pęknięć przy grubych warstwach"],
          why: "Ma sens, gdy tynk wyszedł słabo albo gdy chcesz ciemnych kolorów w satynie, które bezlitośnie pokazują nierówności." }
      ]
    },
    tips: [
      "<b>Tynk musi być suchy.</b> Tynk gipsowy schnie zwykle 2–4 tyg. przy dobrym wietrzeniu. Sprawdź wilgotnościomierzem; próg podaje karta farby.",
      "<b>Lampa przy ścianie.</b> Malarz kontroluje szpachlowanie lampą świecącą wzdłuż ściany. To, czego nie widać przy suficie, widać rano w słońcu.",
      "<b>Wałek z długim włosiem na tynk, krótkim na gładź.</b> Malowanie „mokre na mokre” jednym ciągiem od narożnika do narożnika, bez przerw w połowie ściany.",
      "<b>Kup farbę z jednej partii na całe pomieszczenie.</b> Zapisz numer koloru i partii do teczki domu; łatwiej o poprawki po latach.",
      "<b>Akryl w narożnikach skos–ściana.</b> Taśma rozdzielająca z etapu 11 i elastyczny akryl pod farbę ukryją rysę między skosem a ścianą."
    ],
    mistakes: [
      "<b>Malowanie bez gruntu.</b> Farba schnie w łaty, a druga warstwa nie wyrównuje różnic chłonności.",
      "<b>Ostatnia warstwa przed listwami i drzwiami.</b> Każdy montaż zostawia ślady, a poprawki pędzlem widać w świetle.",
      "<b>Biel „ze sklepu” w każdym pomieszczeniu z innej puszki.</b> Różnice odcieni widać na styku pomieszczeń i w holu."
    ],
    checklist: [
      "Tynk suchy, wilgotność sprawdzona",
      "Grunt na całości, szpachlowanie miejscowe zaszlifowane",
      "Narożniki skos–ściana zaakrylowane",
      "Pierwsza warstwa przed podłogami i drzwiami",
      "Ostatnia warstwa po listwach i osprzęcie, bez śladów wałka",
      "Numery kolorów i partii zapisane"
    ],
    quiz: [{
      q: "Po co grunt pod farbę na tynku gipsowym?",
      a: ["Żeby farba wyschła szybciej", "Żeby wyrównać chłonność i farba nie wyszła w łaty", "Żeby ściana była wodoodporna"],
      correct: 1,
      explain: "<b>Grunt wyrównuje chłonność.</b> Tynk i szpachla chłoną różnie, więc bez gruntu farba schnie nierówno i zostają matowe i błyszczące plamy."
    }]
  },

  /* 7 ------------------------------------------------------------------ */
  {
    id: "kominek",
    title: "Obudowa kominka",
    lead: "Wkład 6–9 kW z etapu 09 dostaje obudowę: konstrukcję z płyt izolacyjnych z kratkami, a na wierzchu kamień jak na zdjęciu salonu.",
    time: "1–2 tyg.", team: "zduń lub firma kominkowa",
    facts: [["Wkład", "6–9 kW, zamknięty, bez DGP", "sun"], ["Konstrukcja", "płyty izolacyjne (np. krzemian wapnia)", "layers"], ["Okładzina", "kamień łupany, jak na elewacji", "house"]],
    body: `
      <p>Wokół wkładu buduje się <strong>komorę</strong> z płyt izolacyjnych do kominków. Płyty znoszą wysoką temperaturę i chronią ścianę oraz okładzinę. W komorze zostaje szczelina na <strong>powietrze konwekcyjne</strong>: wlot u dołu i wylot (kratki) pod sufitem, żeby ciepło nie kumulowało się w obudowie.</p>
      <p>Na płyty kładzie się okładzinę. Na zdjęciu salonu jest <strong>kamień</strong>, więc rekomendujemy kamień łupany w plastrach z tej samej rodziny co elewacja (etap 12). Klej musi być przeznaczony do kominków i do kamienia; w strefie najcieplejszej producent może wymagać szczeliny dylatacyjnej.</p>
      <p>Kominek ma powietrze do spalania z zewnątrz (kanał z etapu 09) i działa w domu z rekuperacją w trybie „kominek” (etap 10). Odbiór kominiarski przed pierwszym paleniem.</p>`,
    cost: { min: 3500, max: 6000, note: "komora z płyt izolacyjnych, kratki, wełna, robocizna" },
    decision: {
      question: "Czym wykończyć kominek?",
      intro: "Ściana kominkowa ok. 6–9 m². Koszt to dopłata do konstrukcji obudowy.",
      chosen: "kamien",
      options: [
        { id: "kamien", name: "Kamień łupany w plastrach",
          cost: { min: 3500, max: 6500 }, time: "+3–5 dni", note: "jak na zdjęciu salonu",
          pros: ["Wygląd ze zdjęcia, spójny z elewacją", "Trwały, ładnie się starzeje"],
          cons: ["Ciężki: konstrukcja i klej muszą to przenieść", "Zbiera kurz w szczelinach"],
          why: "Jest na zdjęciu inspiracji i łączy wnętrze z kamieniem przy wejściu. Kamień z jednej dostawy z elewacją bywa tańszy." },
        { id: "spiek", name: "Spiek wielkoformatowy",
          cost: { min: 6000, max: 11000 }, time: "+3–5 dni", note: "płyty np. 120 × 260 cm",
          pros: ["Kilka płyt bez fug, nowoczesny wygląd", "Łatwe czyszczenie, odporny na temperaturę"],
          cons: ["Drogi materiał i cięcie, wymaga specjalisty", "Transport dużych płyt na budowę"],
          why: "Dla wnętrza w stylu minimalistycznym, gdy kamień wydaje się zbyt rustykalny." },
        { id: "tynk", name: "Tynk dekoracyjny lub mikrocement",
          cost: { min: 1500, max: 3000 }, time: "+2–3 dni", note: "na płytach kominkowych",
          pros: ["Najtaniej", "Gładka bryła bez fug"],
          cons: ["Rysy przy złym zbrojeniu narożników", "Mniej efektowny niż kamień"],
          why: "Gdy trzeba ciąć budżet. Kamień można dołożyć później na jednej ścianie." }
      ]
    },
    tips: [
      "<b>Kratki na wlot i wylot.</b> Wlot przy podłodze, wylot pod sufitem; ich przekrój podaje producent wkładu. Zamknięta obudowa przegrzewa się i pęka.",
      "<b>Wełna z folią aluminiową tylko tam, gdzie każe producent.</b> Izolacja ściany za wkładem i stropu nad komorą wg instrukcji wkładu.",
      "<b>Wymiar szyby wkładu i drzwiczek rewizyjnych.</b> Okładzina nie może zasłaniać drzwiczek ani utrudniać wyjęcia wkładu do serwisu.",
      "<b>Pierwsze palenie małym ogniem.</b> Kilka dni krótkiego palenia, żeby kleje i farba wkładu wygrzały się bez pęknięć."
    ],
    mistakes: [
      "<b>Obudowa z płyt g-k.</b> Zwykła płyta gipsowa przy wkładzie się kruszy i może być niebezpieczna. Tylko płyty przeznaczone do kominków.",
      "<b>Brak wylotu ciepłego powietrza.</b> Ciepło zostaje w komorze, okładzina pęka, a salon grzeje się wolniej.",
      "<b>Palenie przed odbiorem kominiarskim.</b> Bez protokołu mogą być kłopoty z ubezpieczeniem."
    ],
    formal: [
      ["Odbiór przewodu kominowego i podłączenia wkładu", "kominiarz; przed pierwszym paleniem, protokół do teczki"]
    ],
    checklist: [
      "Komora z płyt izolacyjnych do kominków",
      "Kratki wlotu i wylotu wg instrukcji wkładu",
      "Drzwiczki rewizyjne dostępne",
      "Okładzina na kleju do kominków, bez rys",
      "Protokół kominiarski przed pierwszym paleniem"
    ],
    quiz: [{
      q: "Po co kratki w obudowie kominka?",
      a: ["Dla ozdoby", "Żeby gorące powietrze wychodziło z komory i nie przegrzewało obudowy", "Żeby doprowadzić powietrze do spalania"],
      correct: 1,
      explain: "<b>Komora musi oddychać.</b> Zimne powietrze wchodzi dołem, ciepłe wychodzi kratkami pod sufitem. Powietrze do spalania idzie osobnym kanałem z zewnątrz."
    }]
  },

  /* 8 ------------------------------------------------------------------ */
  {
    id: "schody",
    title: "Schody i balustrada",
    lead: "Schody na poddasze to mebel, który widać z salonu. Rekomendujemy żelbetowy bieg z okładziną z dębu: cichy, sztywny i najtańszy w dobrej jakości.",
    time: "beton 1 tydz. + 4 tyg. schnięcia, okładzina 1–2 tyg.", team: "cieśla i betoniarz, stolarz schodowy, ślusarz",
    facts: [["Stopnie", "ok. 15–16, h ok. 17–18 cm", "rebar"], ["Szerokość biegu", "ok. 90–100 cm", "house"], ["Balustrada", "ok. 7 mb", "shield"]],
    body: `
      <p>Wysokość od podłogi parteru do podłogi poddasza to ok. 2,8–3,0 m. Daje to ok. <strong>15–16 stopni</strong> o wysokości ok. 17–18 cm i głębokości ok. 28–30 cm (wygodna reguła: 2 × wysokość + głębokość ≈ 60–65 cm). Wymiary i wymagania (szerokość biegu, wysokość stopni, balustrady) podaje projekt schodów z etapu 02; sprawdź je z kierownikiem budowy.</p>
      <p><strong>Drewniane na beton</strong>: żelbetowy bieg wylewany w szalunku (wypusty zostawione w stropie w etapie 05), potem stopnie z litego dębu ok. 4 cm i podstopnice klejone do betonu. Beton i jego wyschnięcie trzeba zaplanować wcześnie, najlepiej przed tynkami; tutaj liczymy cały koszt schodów.</p>
      <p><strong>Balustrada</strong> na schodach i przy otworze na poddaszu, razem ok. 7 mb. W rekomendacji jest stalowa malowana proszkowo (płaskownik lub pręty pionowe), szklana to ok. 4–6 tys. zł dopłaty.</p>`,
    decision: {
      question: "Jakie schody?",
      intro: "Cena za cały bieg ok. 15–16 stopni z balustradą stalową ok. 7 mb.",
      chosen: "beton",
      options: [
        { id: "beton", name: "Żelbet + okładzina z dębu",
          cost: { min: 22000, max: 34000 }, time: "6–8 tyg. z suszeniem", note: "beton ok. 6–9 tys. + dąb 12–18 tys. + balustrada",
          pros: ["Ciche, sztywne, nie skrzypią", "Bez problemu z obciążeniem", "Dąb można po latach cyklinować"],
          cons: ["Mokra robota i schnięcie betonu", "Bryła schodów zabiera światło pod biegiem"],
          why: "Najlepszy stosunek ceny do trwałości. Wypusty w stropie są z etapu 05, a dąb pasuje do podłóg." },
        { id: "dywanowe", name: "Dywanowe (stopnie kotwione w ścianę)",
          cost: { min: 25000, max: 39000 }, time: "2–3 tyg.", note: "stopnie dębowe ok. 8–10 cm",
          pros: ["Lekkie, „lewitujące” stopnie, światło pod biegiem", "Bardzo nowoczesny wygląd"],
          cons: ["Ściana musi przenieść kotwy (pustak 25 cm z kotwami chemicznymi albo żelbetowy słup/ściana)", "Decyzja najlepiej przed tynkami"],
          why: "Gdy schody prowadzą wzdłuż nośnej ściany i konstruktor potwierdzi kotwienie. Dobrze wyglądają z balustradą szklaną." },
        { id: "metal", name: "Metalowo-drewniane (policzki lub belka)",
          cost: { min: 29000, max: 45000 }, time: "2–3 tyg. montażu, 4–8 tyg. produkcji", note: "konstrukcja stalowa + stopnie dębowe",
          pros: ["Montaż na sucho po tynkach", "Lekka, industrialna forma"],
          cons: ["Najdrożej", "Mogą przenosić dźwięk kroków", "Pomiar z natury i długa produkcja"],
          why: "Gdy brakuje miejsca na żelbet albo zależy ci na stylu loftowym." }
      ]
    },
    tips: [
      "<b>Beton schodów schnie jak wylewka.</b> Przed klejeniem dębu ok. 4 tyg. i pomiar wilgotności. Klej poliuretanowy lub MS wg producenta stopni.",
      "<b>Okładzina po pierwszej warstwie farby.</b> Stopnie przykryj płytą lub tekturą do końca budowy; to najczęściej rysowane miejsce w domu.",
      "<b>Antypoślizg na krawędziach.</b> Olej lub lakier o mniejszym połysku, ewentualnie frezy przeciwpoślizgowe; w domu z dziećmi to ważniejsze niż wygląd.",
      "<b>Balustrada przy dzieciach bez poziomych szczebli.</b> Pionowe pręty z prześwitem najlepiej do ok. 12 cm, żeby dziecko nie przecisnęło głowy i nie wspinało się jak po drabinie. Wymóg w twoim przypadku sprawdź w projekcie.",
      "<b>Oświetlenie schodów.</b> Oprawy w ścianie przy co drugim, trzecim stopniu albo taśma LED pod poręczą; przewody z etapu 08."
    ],
    mistakes: [
      "<b>Różna wysokość stopni.</b> Już 1 cm różnicy na jednym stopniu powoduje potknięcia. Pierwszy i ostatni stopień liczy się od gotowej posadzki.",
      "<b>Za niski prześwit nad głową.</b> Przy otworze pod skosem dachu sprawdź min. ok. 2 m nad krawędzią stopni.",
      "<b>Balustrada z poziomymi linkami.</b> Dla dzieci to drabinka."
    ],
    formal: [
      ["Projekt schodów", "z dokumentacji z etapu 02 (wymiary, zbrojenie, balustrada)"],
      ["Wymagania dla schodów i balustrad", "Warunki techniczne (WT2021); wysokość balustrady i prześwity sprawdź z projektantem"]
    ],
    checklist: [
      "Wszystkie stopnie równej wysokości (różnice do kilku mm)",
      "Prześwit nad schodami min. ok. 2 m",
      "Stopnie przyklejone pełną powierzchnią, nie stukają",
      "Balustrada sztywna, prześwity bezpieczne dla dzieci",
      "Stopnie zabezpieczone do końca prac"
    ],
    quiz: [{
      q: "Która reguła daje wygodne schody?",
      a: ["Wysokość stopnia = głębokość stopnia", "2 × wysokość + głębokość ≈ 60–65 cm", "Im wyższy stopień, tym mniej stopni i tym lepiej"],
      correct: 1,
      explain: "<b>Krok człowieka to ok. 60–65 cm.</b> Przy stopniu 17,5 cm głębokość ok. 28–30 cm daje wygodne, bezpieczne wejście."
    }, {
      q: "Dlaczego przy żelbetowych schodach okładzinę z dębu klei się dopiero po kilku tygodniach?",
      a: ["Bo beton musi wyschnąć, inaczej drewno pęcznieje i odspaja się", "Bo dąb musi się „przyzwyczaić” do koloru ścian", "Bo stolarz ma długie terminy"],
      correct: 0,
      explain: "<b>Wilgoć z betonu wchodzi w drewno.</b> Ok. 4 tyg. schnięcia i pomiar wilgotności chronią przed wypaczeniem stopni."
    }]
  },

  /* 9 ------------------------------------------------------------------ */
  {
    id: "podlogi",
    title: "Podłogi w pokojach i salonie",
    lead: "Salon, pokoje i hol poddasza to ok. 100 m² podłogi na podłogówce. Każda okładzina ogranicza oddawanie ciepła, więc wybierasz nie tylko wygląd, ale i opór cieplny.",
    time: "1–2 tyg.", team: "parkieciarz z pomocnikiem",
    facts: [["Powierzchnia", "ok. 102 m²", "house"], ["Opór cieplny", "zalecany do ok. 0,15 m²·K/W", "sun"], ["Wilgotność anhydrytu", "CM orient. do 0,3%", "check"]],
    body: `
      <p>Podłogówka z etapu 09 grzeje wodą ok. 30–35°C. Okładzina działa jak koc: im większy jej <strong>opór cieplny R</strong>, tym wyższa temperatura zasilania i niższa sprawność pompy ciepła. Producenci zalecają zwykle <strong>R razem z klejem lub podkładem do ok. 0,15 m²·K/W</strong>.</p>
      <p><strong>Deska warstwowa dębowa</strong> ok. 14–15 mm (warstwa użytkowa ok. 3–4 mm) <strong>klejona całą powierzchnią</strong> do wylewki ma R ok. 0,10. Klejenie oznacza lepszy przepływ ciepła i brak „bębnienia” pod stopami. Deska musi być dopuszczona przez producenta do podłogówki.</p>
      <p>Przed klejeniem: pomiar CM, grunt z systemu kleju, wylewka wygrzana zgodnie z protokołem z etapu 11, podłogówka na ok. 18–20°C przez czas klejenia (wg karty kleju i deski).</p>`,
    widget: "kalkulator-podlog",
    decision: {
      question: "Jaka podłoga w salonie i pokojach?",
      intro: "Ok. 102 m²: salon z jadalnią, sypialnia, garderoba, pokój dziecięcy, gabinet i hol poddasza. Cena z robocizną, klejem lub podkładem.",
      chosen: "deska",
      options: [
        { id: "deska", name: "Deska warstwowa dębowa, klejona",
          cost: { min: 23000, max: 36000 }, time: "1–2 tyg.", note: "ok. 225–350 zł/m² z montażem, R ok. 0,10",
          pros: ["Ciepła w dotyku, prawdziwe drewno", "Można ją 1–2 razy odnowić (cyklinowanie)", "Stabilna na podłogówce"],
          cons: ["Rysuje się od pazurów i piasku", "Wymaga suchej wylewki i stałej wilgotności 40–60%"],
          why: "Pasuje do domu z kamieniem i drewnem na elewacji, a opór cieplny mieści się w zaleceniach podłogówki." },
        { id: "panele", name: "Panele laminowane AC4/AC5",
          cost: { min: 10000, max: 17000 }, time: "3–5 dni", note: "z podkładem do podłogówki, R ok. 0,07–0,10",
          pros: ["Najtaniej, ok. 13–19 tys. zł mniej", "Odporne na zarysowania", "Szybki montaż pływający"],
          cons: ["Głośniejsze pod stopami", "Nie do odnowienia", "Podkład musi być do podłogówki"],
          why: "Gdy trzeba oszczędzać: to największa możliwa oszczędność w tym etapie. Deskę można położyć w salonie, a panele w pokojach." },
        { id: "plytki", name: "Płytki wielkoformatowe w całym domu",
          cost: { min: 25000, max: 40000 }, time: "2–3 tyg.", note: "gres 60 × 120 lub 120 × 120, R ok. 0,02",
          pros: ["Najlepsza współpraca z podłogówką", "Odporne na wszystko, łatwe sprzątanie", "Jedna posadzka bez progów"],
          cons: ["Twarde i głośne, chłodne w odbiorze", "Droga robocizna przy wielkim formacie"],
          why: "Dobre przy psach i dla osób, które chcą jednej, nieśmiertelnej posadzki. W sypialniach często wybiera się jednak drewno." }
      ]
    },
    tips: [
      "<b>Deska w domu 1–2 tyg. przed montażem.</b> W zamkniętych paczkach, w docelowej temperaturze i wilgotności, wg karty producenta.",
      "<b>Klej elastyczny (np. MS lub PU) pacą zębatą.</b> Pokrycie pełne; deska dociskana i obciążana, żeby nie podnosiły się końce.",
      "<b>Szczelina przy ścianach ok. 8–10 mm.</b> Zakryje ją listwa. W progach dylatacja zgodna z dylatacją wylewki.",
      "<b>Kierunek desek wzdłuż światła.</b> Deski układane w stronę dużych okien (HS) optycznie wydłużają salon i ukrywają styki.",
      "<b>Nawilżacz zimą.</b> Przy wilgotności poniżej ok. 35–40% deska tworzy szczeliny. Rekuperacja z wymiennikiem entalpicznym (etap 10) w tym pomaga."
    ],
    mistakes: [
      "<b>Deska pływająca na grubym podkładzie.</b> R podkładu + deski przekracza 0,15: pompa ciepła musi grzać cieplejszą wodą i zużywa więcej prądu.",
      "<b>Klejenie przy włączonej pełnej podłogówce.</b> Klej wiąże za szybko i nierówno, deski się wypaczają.",
      "<b>Dywan na całej podłodze salonu.</b> Gruby dywan z filcem to dodatkowy „koc” na grzejniku."
    ],
    checklist: [
      "Pomiar CM poniżej progu z karty deski",
      "Deska dopuszczona do podłogówki, przechowana w domu",
      "Klejenie pełną powierzchnią, końce desek nie odstają",
      "Szczeliny przy ścianach i w progach, dylatacje zachowane",
      "Wilgotność w domu ok. 40–60%"
    ],
    quiz: [{
      q: "Dlaczego deskę na podłogówce lepiej kleić niż kłaść pływająco na podkładzie?",
      a: ["Bo klejenie jest tańsze", "Bo klej przewodzi ciepło lepiej niż powietrze i podkład, a deska nie bębni", "Bo pływającej deski nie wolno kłaść w domu z rekuperacją"],
      correct: 1,
      explain: "<b>Każda warstwa to dodatkowy opór.</b> Pod deską pływającą jest podkład i szczelina powietrza. Klejenie daje niższy opór i cichszą podłogę."
    }]
  },

  /* 10 ----------------------------------------------------------------- */
  {
    id: "silownia",
    title: "Siłownia: podłoga i mocowania",
    lead: "Siłownia ok. 14 m² na parterze potrzebuje podłogi, która przyjmie upadek hantli, i ścian, które utrzymają drążek, stojak albo worek.",
    time: "2–3 dni", team: "ty lub złota rączka",
    facts: [["Podłoga", "guma SBR ok. 15–20 mm", "layers"], ["Pod wolne ciężary", "platforma ok. 30–40 mm", "rebar"], ["Kotwy", "chemiczne w pustaku", "shield"]],
    body: `
      <p>Na wylewce z podłogówką kładzie się <strong>gumę SBR w płytach lub rolce ok. 15–20 mm</strong>. Grubsza guma lepiej tłumi, ale bardziej izoluje: 20 mm to orientacyjnie R ok. 0,1 m²·K/W. Pod stanowiskiem wolnych ciężarów dokłada się tylko lokalną <strong>platformę</strong> (guma 30–40 mm na sklejce).</p>
      <p>Mocowania: drążek, stojak na sztangę, linki treningowe czy lustro kotwi się w <strong>ścianie nośnej z pustaka ceramicznego 25 cm</strong>. W pustaku z komorami trzymają <strong>kotwy chemiczne z tuleją siatkową</strong>; worek bokserski wiesza się na kotwie w stropie żelbetowym. Przed wierceniem sprawdź zdjęcia instalacji z etapów 08–10.</p>
      <p>Siłownia ma nawiew rekuperacji (etap 10). Maty, lustro i sprzęt kupujesz z wyposażeniem siłowni (etap 14); tutaj przygotowujesz ściany i strop.</p>`,
    cost: { min: 800, max: 2000, note: "kotwy chemiczne, hak w stropie, wzmocnienia; maty, lustro i sprzęt w etapie 14" },
    tips: [
      "<b>Guma bez zapachu.</b> Tańsza guma z recyklingu potrafi pachnieć tygodniami; wybieraj płyty z niską emisją i wietrz pomieszczenie przed użyciem.",
      "<b>Kotwy chemiczne wg karty dla pustaka z komorami.</b> Wiertło bez udaru, tuleja siatkowa, czas wiązania przed obciążeniem.",
      "<b>Hak worka w stropie przez konstruktora.</b> Worek 30–40 kg działa dynamicznie; podaj konstruktorowi miejsce, sprawdzi zbrojenie i rury w stropie.",
      "<b>Gniazda na wysokości sprzętu.</b> Bieżnia lub rower stacjonarny ma przewód 1,5–2 m, a gniazdo powinno być przy nim (etap 08)."
    ],
    mistakes: [
      "<b>Kołki rozporowe w pustaku.</b> W komorach pustaka zwykły kołek się nie rozpiera i drążek wypada z sufitu.",
      "<b>Gruba guma 40 mm na całej podłodze.</b> Podłogówka prawie przestaje grzać siłownię.",
      "<b>Wiercenie bez planu instalacji.</b> Trafienie w rurę podłogówki lub przewód to kucie świeżej ściany."
    ],
    checklist: [
      "Guma ułożona, styki dociśnięte",
      "Platforma pod wolne ciężary",
      "Mocowania na kotwach chemicznych, z odstępem od instalacji",
      "Hak w stropie zatwierdzony przez konstruktora"
    ],
    quiz: [{
      q: "Czym zamocować stojak na sztangę w ścianie z pustaka ceramicznego?",
      a: ["Zwykłymi kołkami rozporowymi", "Kotwami chemicznymi z tuleją siatkową", "Klejem montażowym"],
      correct: 1,
      explain: "<b>Pustak ma komory.</b> Kołek rozporowy nie ma się w czym rozeprzeć. Żywica w tulei siatkowej wypełnia komorę i trzyma kotwę."
    }]
  },

  /* 11 ----------------------------------------------------------------- */
  {
    id: "drzwi",
    title: "Drzwi wewnętrzne",
    lead: "Ok. 9 drzwi wewnętrznych montuje się po podłogach i malowaniu. Rodzaj ościeżnicy zmienia wygląd, cenę i to, kiedy trzeba ją zamontować.",
    time: "2–4 dni", team: "monter drzwi",
    facts: [["Liczba", "ok. 9 szt.", "house"], ["Szczelina pod drzwiami", "1–2 cm (rekuperacja)", "sun"], ["Wysokość", "ok. 2,0–2,1 m od gotowej podłogi", "rebar"]],
    body: `
      <p>Drzwi: łazienka i pomieszczenie techniczne na parterze, siłownia, sypialnia, garderoba, łazienka na poddaszu, pokój dziecięcy, gabinet i schowek z centralą rekuperacji. Drzwi wejściowe i drzwi garaż–dom są w etapie 07.</p>
      <p><strong>Przylgowe</strong>: skrzydło zachodzi na ościeżnicę, widać zawiasy. <strong>Bezprzylgowe</strong>: skrzydło zlicowane z ościeżnicą, zawiasy ukryte, zamek magnetyczny. <strong>Ukryta ościeżnica</strong>: aluminiowa rama wtopiona w ścianę, skrzydło malowane razem ze ścianą. Ta wersja wymaga montażu przed szpachlowaniem i malowaniem.</p>
      <p>Rekuperacja (etap 10) przepuszcza powietrze pod drzwiami: <strong>szczelina 1–2 cm</strong> albo podcięcie skrzydła. W łazienkach drzwi podcięte lub z tuleją wentylacyjną.</p>`,
    decision: {
      question: "Jakie drzwi wewnętrzne?",
      intro: "Ok. 9 kompletów: skrzydło, ościeżnica regulowana, klamka, montaż.",
      chosen: "bezprzylgowe",
      options: [
        { id: "przylgowe", name: "Przylgowe z ościeżnicą regulowaną",
          cost: { min: 12000, max: 21000 }, time: "2–3 dni", note: "ok. 1,3–2,3 tys. zł/kpl.",
          pros: ["Najtaniej i najszybciej", "Duży wybór wzorów", "Łatwa regulacja zawiasów"],
          cons: ["Widoczne zawiasy i przylga", "Mniej nowoczesny wygląd"],
          why: "Rozsądne przy cięciu budżetu, np. w pomieszczeniu technicznym i schowku." },
        { id: "bezprzylgowe", name: "Bezprzylgowe z ukrytymi zawiasami",
          cost: { min: 16000, max: 26000 }, time: "2–4 dni", note: "ok. 1,8–2,9 tys. zł/kpl.",
          pros: ["Gładka płaszczyzna, nowoczesny wygląd", "Zamek magnetyczny, ciche zamykanie", "Montaż po malowaniu"],
          cons: ["Drożej niż przylgowe", "Regulacja zawiasów ukrytych wymaga wprawy"],
          why: "Wygląda prawie jak ukryta ościeżnica, ale montuje się ją po malowaniu, bez kucia tynku z etapu 11." },
        { id: "ukryta", name: "Ukryta ościeżnica aluminiowa",
          cost: { min: 26000, max: 40000 }, time: "montaż przed szpachlowaniem", note: "ok. 2,9–4,5 tys. zł/kpl.",
          pros: ["Drzwi znikają w ścianie", "Skrzydło malowane na kolor ściany"],
          cons: ["Najdrożej", "Ościeżnicę osadza się przed tynkami lub szpachlowaniem; po tynkach z etapu 11 to dodatkowe kucie", "Trudne poprawki"],
          why: "Najlepiej zaplanować ją przed tynkami. Na tym etapie dopłata i ryzyko rys przy ościeżnicy są wysokie." }
      ]
    },
    tips: [
      "<b>Pomiar otworów po podłogach.</b> Wysokość liczy się od gotowej posadzki. Otwór w murze zwykle ok. 10 cm szerszy i ok. 5–10 cm wyższy od skrzydła (wg karty ościeżnicy).",
      "<b>Ościeżnica regulowana do grubości ściany.</b> Działówki z tynkiem mają ok. 15 cm, ściany nośne ok. 28 cm; zakres regulacji dobierz do każdej ściany osobno.",
      "<b>Pianka niskoprężna i rozpory.</b> Ościeżnicę montuje się na rozpórkach, żeby pianka nie wygięła boków.",
      "<b>Kierunek otwierania i strona zawiasów na planie.</b> Przy łazienkach drzwi najlepiej otwierają się na zewnątrz albo mają zamek z odblokowaniem z zewnątrz."
    ],
    mistakes: [
      "<b>Drzwi bez szczeliny przy rekuperacji.</b> Zamknięte drzwi „duszą” wentylację, a centrala hałasuje, wpychając powietrze.",
      "<b>Montaż drzwi przed podłogą.</b> Za niska albo za wysoka szczelina, ościeżnica stoi na złym poziomie.",
      "<b>Ukryta ościeżnica wstawiona „na koniec”.</b> Kucie świeżego tynku i rysy przy ramie przez lata."
    ],
    checklist: [
      "Drzwi zamykają się bez tarcia, szczeliny równe",
      "Szczelina pod drzwiami 1–2 cm, w łazienkach podcięcie lub tuleja",
      "Ościeżnice w pionie, bez wygięć od pianki",
      "Klamki i zamki działają, kierunki otwierania zgodne z planem"
    ],
    quiz: [{
      q: "Dlaczego pod drzwiami w domu z rekuperacją zostawia się szczelinę 1–2 cm?",
      a: ["Żeby drzwi nie ocierały o dywan", "Żeby powietrze z nawiewu mogło przepłynąć do wywiewu w łazienkach i kuchni", "Żeby łatwiej sprzątać"],
      correct: 1,
      explain: "<b>Powietrze przepływa przez dom.</b> Nawiew jest w pokojach, wywiew w łazienkach i kuchni. Szczelina pod drzwiami to droga dla tego powietrza."
    }]
  },

  /* 12 ----------------------------------------------------------------- */
  {
    id: "parapety-listwy",
    title: "Parapety wewnętrzne i listwy",
    lead: "Parapety wewnętrzne przy ok. 15 oknach i ok. 150 mb listew przypodłogowych to detale, które domykają wnętrze i zakrywają szczeliny przy ścianach.",
    time: "2–4 dni", team: "stolarz lub kamieniarz, monter listew",
    facts: [["Parapety", "ok. 18–20 mb", "house"], ["Listwy", "ok. 150 mb, wys. 8–10 cm", "layers"]],
    body: `
      <p><strong>Parapety wewnętrzne</strong> z konglomeratu kwarcowego lub kamienia, gr. 2–3 cm, montuje się przed malowaniem ostatniej warstwy. Parapet wsuwa się ok. 1–2 cm pod ramę okna, poziomo, na kleju poliuretanowym lub piance niskoprężnej z podparciem. Wystaje ok. 2–4 cm poza lico ściany. HS w salonie jest do podłogi i parapetu nie ma.</p>
      <p><strong>Listwy przypodłogowe</strong> z MDF lakierowanego na biało, wys. ok. 8–10 cm, zakrywają szczelinę dylatacyjną przy desce. Klei się je do ściany (nie do podłogi), żeby deska mogła pracować. W łazienkach i kuchni zamiast listew jest cokół z płytek lub silikon.</p>`,
    cost: { min: 6000, max: 12000, note: "parapety z konglomeratu ok. 18–20 mb, listwy MDF ok. 150 mb, montaż" },
    tips: [
      "<b>Nie przecinaj taśmy paroszczelnej.</b> Pod parapetem jest taśma z etapu 07. Klej i pianka idą na nią, bez nacinania.",
      "<b>Łączenia listew na 45°.</b> Narożniki wewnętrzne docinane na ucios albo na 45°, styki zaszpachlowane i pomalowane razem z listwą.",
      "<b>Akryl między listwą a ścianą, nie silikon.</b> Akryl można pomalować, silikon nie.",
      "<b>Listwy na końcu, ale przed ostatnią warstwą farby.</b> Wtedy malarz poprawia ślady po kleju i akrylu."
    ],
    mistakes: [
      "<b>Parapet ze spadkiem do środka.</b> Kondensat z szyby i woda z kwiatów spływa na podłogę.",
      "<b>Listwy przybite do podłogi.</b> Deska nie może pracować, przy ścianach pojawiają się wybrzuszenia.",
      "<b>Za wąska listwa.</b> Nie zakrywa szczeliny 8–10 mm przy krzywej ścianie."
    ],
    checklist: [
      "Parapety poziomo, wsunięte pod ramę, taśma paroszczelna cała",
      "Listwy przyklejone do ściany, narożniki dopasowane",
      "Styki zaakrylowane i pomalowane"
    ],
    quiz: [{
      q: "Dlaczego listwę przypodłogową klei się do ściany, a nie do podłogi?",
      a: ["Bo klej nie trzyma na drewnie", "Bo podłoga drewniana pracuje i musi mieć swobodę przy ścianie", "Bo tak jest szybciej"],
      correct: 1,
      explain: "<b>Szczelina dylatacyjna musi zostać wolna.</b> Deska kurczy się i rozszerza z wilgotnością. Listwa przyklejona do podłogi blokuje ten ruch."
    }]
  },

  /* 13 ----------------------------------------------------------------- */
  {
    id: "bialy-montaz",
    title: "Biały montaż: hydraulika i elektryka",
    lead: "Biały montaż to podłączenie wszystkiego, co widać: misek WC, umywalek, baterii, gniazd, łączników i opraw. Robi się go po malowaniu, żeby farba nie pobrudziła osprzętu.",
    time: "3–5 dni", team: "hydraulik, elektryk",
    facts: [["Gniazda i łączniki", "jedna seria, ok. 150–200 punktów", "bulb"], ["Pomiary", "protokół elektryczny", "listcheck"]],
    body: `
      <p><strong>Hydraulik</strong>: miski WC na stelażach z przyciskami, umywalki z syfonami, baterie, wanna z syfonem, deszczownice, zawory kątowe pod zlew i zmywarkę (sama kuchnia w etapie 14), pralka w pomieszczeniu technicznym, drabinki łazienkowe (etap 09). Na końcu próba szczelności i kontrola temperatury wody.</p>
      <p><strong>Elektryk</strong>: osprzęt z jednej serii, oczka i taśmy LED, lustra łazienkowe, termostaty i panele sterowania (etap 10), <strong>okap obiegowy nad wyspą</strong> z filtrem węglowym (etap 10; model wybierasz razem z AGD w etapie 14). Lampy dekoracyjne zawiesza się w etapie 14. Koszt osprzętu i pomiarów jest już w etapie 08.</p>
      <p>Po białym montażu elektryk wykonuje <strong>pomiary</strong> (izolacja, pętla zwarcia, wyłączniki różnicowoprądowe, uziemienie) i wystawia protokół, który trafia do teczki odbioru (etap 16).</p>`,
    cost: { min: 5500, max: 11500, note: "robocizna hydraulika, syfony, zawory kątowe, wężyki, okap obiegowy wyspowy ok. 2–5 tys.; osprzęt elektryczny w etapie 08" },
    tips: [
      "<b>Puszki czyste przed montażem.</b> Farba i tynk w puszce utrudniają montaż i mogą zabrudzić zaciski; elektryk przedmuchuje każdą.",
      "<b>Ramki w poziomie, w jednej linii.</b> Wysokości z etapu 08 liczone od gotowej podłogi: gniazda ok. 30 cm, łączniki ok. 105–110 cm.",
      "<b>Zawory kątowe z filtrem siateczkowym.</b> Resztki z instalacji nie zablokują perlatorów i termostatów.",
      "<b>Silikon sanitarny po montażu ceramiki.</b> Misa WC i umywalki odsunięte od ściany o grubość silikonu, bez szczelin, w których rośnie pleśń."
    ],
    mistakes: [
      "<b>Osprzęt przed malowaniem.</b> Zachlapane ramki, a malowanie wokół nich jest nierówne.",
      "<b>Brak pomiarów.</b> Bez protokołu nie ma kompletu dokumentów do odbioru i ubezpieczenia.",
      "<b>Miska WC dokręcona „na siłę”.</b> Pęknięta ceramika na szpilkach to typowa szkoda białego montażu."
    ],
    formal: [
      ["Protokół pomiarów instalacji elektrycznej", "elektryk z uprawnieniami; po białym montażu, do teczki (etap 16)"],
      ["Protokół szczelności instalacji wodnej", "hydraulik; do teczki instalacji"]
    ],
    checklist: [
      "Wszystkie baterie bez przecieków, syfony szczelne",
      "WC spłukują, zawory spłuczek działają",
      "Gniazda i łączniki z jednej serii, ramki w poziomie",
      "Lustra, oczka i taśmy LED świecą",
      "Protokół pomiarów elektrycznych w teczce"
    ],
    quiz: [{
      q: "Dlaczego gniazda i łączniki montuje się dopiero po malowaniu?",
      a: ["Bo elektryk ma wtedy czas", "Żeby nie zachlapać osprzętu i równo pomalować ścianę wokół puszek", "Bo farba jest przewodząca"],
      correct: 1,
      explain: "<b>Malowanie wokół ramek zostawia ślady.</b> Puszki z zaślepkami maluje się wałkiem jak całą ścianę, a ramki zakrywają krawędź."
    }]
  },

  /* 14 ----------------------------------------------------------------- */
  {
    id: "sprzatanie",
    title: "Sprzątanie po budowie",
    lead: "Pył gipsowy i z cięcia płytek osiada wszędzie: w kanałach, na szybach, w puszkach. Sprzątanie po budowie to osobna praca z innym sprzętem niż zwykłe porządki.",
    time: "2–4 dni", team: "firma sprzątająca 2–4 osoby",
    facts: [["Odkurzacz", "przemysłowy, filtr klasy M", "check"], ["Kontener", "ok. 7 m³", "house"]],
    body: `
      <p>Najpierw <strong>wywóz odpadów</strong>: kontener na gruz i resztki płytek, osobno opakowania i folie. Potem <strong>odkurzanie od góry do dołu</strong>: sufity, ściany, parapety, wnętrza puszek, kratki, podłogi. Na końcu mycie: okna z ramami i uszczelkami, płytki z resztek fugi, ceramika, deska środkiem do drewna.</p>
      <p>Pył budowlany rysuje lakier deski i szkło, więc firma używa <strong>odkurzacza przemysłowego</strong> zamiast miotły i ostrożnie zmywa zaprawę z szyb (bez skrobaków do metalu na szkle hartowanym i powłokach).</p>`,
    cost: { min: 2500, max: 5000, note: "firma sprzątająca ok. 190 m² + kontener" },
    tips: [
      "<b>Odkurzacz z filtrem klasy M.</b> Pył gipsowy zatyka zwykły odkurzacz w kilka minut i przechodzi przez filtr do powietrza.",
      "<b>Okna: najpierw woda, potem ostrze.</b> Zaprawę na szkle namocz; skrobak z ostrzem tylko według zaleceń producenta szyb, nigdy na sucho.",
      "<b>Resztki fugi środkiem kwasowym tylko na gresie.</b> Kamień naturalny przy kominku i armatura mogą się od kwasu odbarwić.",
      "<b>Wymień wkłady filtrów w odkurzaczu centralnym, jeśli go masz.</b> Pył budowlany go zatka."
    ],
    mistakes: [
      "<b>Zamiatanie na sucho.</b> Pył unosi się i osiada z powrotem na pomalowanych ścianach.",
      "<b>Włączenie rekuperacji przed sprzątaniem.</b> Kurz z budowy trafia do kanałów i na filtry."
    ],
    checklist: [
      "Odpady wywiezione, kontener odebrany",
      "Pył odkurzony z sufitów, ścian, parapetów i puszek",
      "Okna, ramy i uszczelki umyte, szyby bez rys",
      "Płytki bez nalotu fugi, deska umyta środkiem do drewna"
    ]
  },

  /* 15 ----------------------------------------------------------------- */
  {
    id: "rekuperacja-rozruch",
    title: "Rozruch rekuperacji",
    lead: "Kanały wentylacji były zaślepione od etapu 10, żeby nie wpadł do nich pył. Teraz, w czystym domu, zdejmuje się zaślepki, zakłada nowe filtry i reguluje przepływy.",
    time: "1 dzień", team: "instalator rekuperacji",
    facts: [["Filtry", "nowe, ePM1 na nawiewie", "check"], ["Regulacja", "± 10% od projektu", "listcheck"], ["Wymiana filtrów", "co 3–6 mies.", "clock"]],
    body: `
      <p>Kolejność: <strong>zdjęcie zaślepek</strong> z wylotów w sufitach i podłogach, kontrola, czy w kanałach nie ma pyłu i gruzu, <strong>montaż anemostatów</strong> i kratek, <strong>nowe filtry</strong> w centrali (te z ewentualnej pracy budowlanej idą do kosza). Potem instalator uruchamia centralę na stałe.</p>
      <p><strong>Regulacja</strong>: anemometrem mierzy przepływ na każdym anemostacie i ustawia go z dokładnością ok. ±10% od projektu (ok. 250–300 m³/h w całym domu). Na koniec ustawia tryby: normalny, wietrzenie, nieobecność i „kominek”. Wynik zapisuje w <strong>protokole</strong>. Koszt rozruchu jest w etapie 10.</p>`,
    tips: [
      "<b>Rozruch po sprzątaniu, nie przed.</b> Centrala pracująca w czasie szlifowania i malowania zbiera pył do kanałów i na wymiennik.",
      "<b>Sprawdź szczeliny pod drzwiami.</b> Przy zamkniętych drzwiach instalator mierzy, czy przepływy się nie zmieniają.",
      "<b>Kalendarz filtrów w aplikacji.</b> Wymiana co 3–6 mies.; pierwsza szybciej, bo po budowie w domu wciąż jest pył.",
      "<b>Hałas w sypialni.</b> Na nocnym biegu nawiew w sypialni ma być ledwo słyszalny. Jeśli szumi, instalator zmniejsza bieg albo zmienia ustawienie anemostatu."
    ],
    mistakes: [
      "<b>Anemostaty „na oko”.</b> Bez pomiaru część pokoi dostaje za dużo powietrza (przeciąg, hałas), a część za mało.",
      "<b>Filtr z budowy zostawiony w centrali.</b> Zapchany filtr dławi przepływ i zwiększa zużycie prądu."
    ],
    formal: [
      ["Protokół regulacji wentylacji mechanicznej", "instalator; przepływy na każdym anemostacie, do teczki (etap 16)"]
    ],
    checklist: [
      "Zaślepki zdjęte, kanały czyste",
      "Nowe filtry w centrali",
      "Przepływy zmierzone i ustawione (±10%)",
      "Tryb „kominek” i harmonogram ustawione",
      "Protokół regulacji w teczce"
    ],
    quiz: [{
      q: "Kiedy uruchomić rekuperację na stałe?",
      a: ["Od razu po wylewkach, żeby osuszała dom", "Po malowaniu i sprzątaniu, z nowymi filtrami", "Po roku mieszkania"],
      correct: 1,
      explain: "<b>Najpierw czysty dom, potem wentylacja.</b> Pył z gipsu i szlifowania osiada w kanałach i na wymienniku. Rozruch po sprzątaniu, z nowymi filtrami i regulacją."
    }]
  }
  ]
});
