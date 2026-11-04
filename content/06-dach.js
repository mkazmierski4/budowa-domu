/* Etap 06: Więźba, pokrycie dachu, okna dachowe, rynny. Ceny orientacyjne, 2026 r., okolice małego miasta.
   Geometria wg DECYZJE.md: dom 13 × 9,5 m, garaż 6,5 × 7 m (dach prostopadły), 40°, ścianka kolankowa 1 m, bez komina kotła. */
BUDOWA.addStage({
  id: "06-dach", nr: 6, title: "Dach", icon: "🏠", category: "surowy",
  summary: "Więźba C24, membrana i wentylacja, ciemne pokrycie, okna dachowe, obróbki i rynny: dom zamknięty przed deszczem i zimą.",
  duration: "4–7 tyg.",
  steps: [

  /* 1 ------------------------------------------------------------------ */
  {
    id: "geometria-dachu",
    title: "Dach dwuspadowy 40°: geometria i ilości",
    lead: "Dach domu 13 × 9,5 m z garażem 6,5 × 7 m ma ok. 255 m² połaci. Ta jedna liczba rządzi kosztem więźby, pokrycia, membrany i rynien, więc policz ją, zanim zbierzesz oferty.",
    time: "1 dzień obliczeń", team: "ty, projektant, dekarz",
    facts: [["Kąt", "40°", "house"], ["Ścianka kolankowa", "1 m", "layers"], ["Połać razem", "ok. 255 m²", "rebar"]],
    body: `
      <p>Kalenica biegnie wzdłuż dłuższego boku (13 m). Przy rozpiętości 9,5 m i kącie 40° kalenica wznosi się <strong>ok. 4 m nad ścianką kolankową</strong>, a krokiew z okapem 0,4 m ma <strong>ok. 6,7 m</strong>. Garaż ma własny dach dwuspadowy, prostopadły do głównego, który kończy się przy ścianie domu.</p>
      <p>Powierzchnię połaci liczy się z rzutu: <strong>rzut ÷ cos 40° ≈ rzut × 1,31</strong>. Dom z okapami (ok. 14,4 × 10,3 m) daje ok. 190 m² połaci, garaż ok. 70 m². Razem <strong>ok. 255 m²</strong>, w górnej części widełek dla takiego domu. Dłuższe okapy podnoszą liczbę o kilka metrów.</p>
      <p>Poddasze użytkowe nad ścianką 1 m ma pełną wysokość dopiero kilkadziesiąt centymetrów od ściany, bo skos tnie przestrzeń. Dlatego położenie jętek i okien dachowych ustala projekt już na etapie rysunków, a nie na budowie.</p>`,
    diagram: `<svg viewBox="0 0 360 200" role="img" aria-label="Przekrój dachu: ścianki kolankowe 1 m, krokwie pod kątem 40°, jętka, murłaty, kalenica ok. 4 m nad ścianką">
      <rect x="66" y="150" width="12" height="34" style="fill:var(--concrete)"/>
      <rect x="282" y="150" width="12" height="34" style="fill:var(--concrete)"/>
      <rect x="66" y="174" width="228" height="10" style="fill:var(--concrete-top)"/>
      <rect x="62" y="146" width="16" height="6" style="fill:var(--wood)"/>
      <rect x="282" y="146" width="16" height="6" style="fill:var(--wood)"/>
      <path d="M56 158 L180 54 L304 158" fill="none" style="stroke:var(--wood)" stroke-width="5" stroke-linejoin="round"/>
      <path d="M109 114 H251" style="stroke:var(--wood)" stroke-width="4"/>
      <path d="M180 54 V150" style="stroke:var(--ink-3)" stroke-width="1" stroke-dasharray="4 3"/>
      <text x="186" y="104">ok. 4 m</text>
      <text x="186" y="50">kalenica</text>
      <text x="120" y="108">jętka</text>
      <text x="88" y="74">krokiew</text>
      <text x="82" y="164">murłata</text>
      <text x="12" y="166">1 m</text>
      <text x="316" y="164">40°</text>
      <text x="120" y="196">strop nad parterem</text>
    </svg>`,
    widget: "kalkulator-dachu",
    tips: [
      "<b>Licz z rzutu, nie „na oko”.</b> Rzut z okapami × 1,31 (dla 40°) daje połać. Różnica między 230 a 260 m² to kilkanaście tysięcy złotych na pokryciu.",
      "<b>Okap 0,4–0,6 m</b> chroni ścianę i elewację przed deszczem, ale wydłuża krokwie i podbitkę. Przy tynku i drewnie na elewacji nie schodź poniżej ok. 0,4 m.",
      "<b>Zamów dachówkę z zapasem 5–8%.</b> Odpad robi się przy kalenicach, kalenicy garażu i obróbkach. Po budowie zostaje kilkanaście dachówek na naprawy.",
      "<b>Wysokość kalenicy już sprawdzono w etapie 02</b> (MPZP). Jeśli projekt konstrukcyjny podnosi dach choćby o kilkanaście centymetrów (większe krokwie, płatew), zgłoś to projektantowi."
    ],
    mistakes: [
      "<b>Wycena „za metr rzutu” bez okapów i garażu.</b> Wykonawca liczy mniej, a faktura wychodzi wyższa o kilkanaście procent.",
      "<b>Zmiana kąta dachu na budowie.</b> Zmienia obciążenie śniegiem, ilość materiału i zgodność z planem miejscowym. Zmiany tylko za zgodą projektanta."
    ],
    formal: [
      ["Kąt, kolor i rodzaj pokrycia", "sprawdź w MPZP i projekcie architektonicznym; zmiany istotne wymagają zgody projektanta (czasem formalności)"]
    ],
    checklist: [
      "Policzona powierzchnia połaci z okapami (dom + garaż)",
      "Kąt 40° i wysokość kalenicy zgodne z projektem i planem miejscowym",
      "Zebrane co najmniej 3 oferty na ten sam zakres i tę samą powierzchnię"
    ],
    quiz: [{
      q: "Rzut dachu z okapami ma ok. 196 m², kąt 40°. Ile mniej więcej wyniesie połać?",
      a: ["ok. 196 m², bo dach jest ten sam", "ok. 255 m²", "ok. 400 m²"],
      correct: 1,
      explain: "<b>Połać = rzut ÷ cos α.</b> Dla 40° to rzut × 1,31, czyli ok. 255 m². Im bardziej stromy dach, tym więcej materiału."
    }]
  },

  /* 2 ------------------------------------------------------------------ */
  {
    id: "drewno-c24",
    title: "Drewno na więźbę: C24, suszone, impregnowane",
    lead: "Jakość więźby zaczyna się w tartaku. Zamawiaj drewno konstrukcyjne klasy C24, suszone komorowo i zaimpregnowane, i sprawdź je jeszcze przed rozładunkiem.",
    time: "2–4 tyg. na dostawę", team: "ciesielnia, tartak",
    facts: [["Klasa", "C24", "stamp"], ["Wilgotność", "ok. 15–18%", "layers"], ["Objętość", "ok. 16–18 m³", "rebar"]],
    body: `
      <p><strong>C24</strong> to klasa wytrzymałościowa drewna iglastego (sosna, świerk) wg PN-EN 338. Projekt konstrukcyjny podaje przekroje, a klasę powinno potwierdzać oznaczenie na tarcicy lub dokument dostawy. Dla naszego dachu potrzeba <strong>orientacyjnie 16–18 m³</strong>: krokwie, jętki, murłaty, płatwie, słupki, kleszcze i deskowanie wiatrownic. Dokładną ilość poda kosztorys z projektu.</p>
      <p>Drewno <strong>suszone komorowo (ok. 15–18% wilgotności)</strong> i struganą KVH wygina się i pęka mniej niż świeżo cięte. W więźbie pod poddaszem użytkowym ma to znaczenie, bo później na krokwiach siedzi ocieplenie, płyty i wykończenie. Impregnacja grzybobójcza i owadobójcza (zanurzeniowa albo ciśnieniowa) chroni przed pleśnią, grzybami i szkodnikami.</p>
      <p>Ochrona ogniowa nie jest zwykle wymagana dla więźby domu jednorodzinnego. Wymaga jej ewentualnie projekt, np. przy kominku bardzo blisko drewna. Sprawdź to u projektanta i kierownika budowy.</p>`,
    tips: [
      "<b>Zmierz wilgotność wilgotnościomierzem.</b> Kilka belek z różnych palet, wartość do ok. 18–20% jest do przyjęcia, powyżej nie rozładowuj bez negocjacji. Pomiar zajmuje minutę.",
      "<b>Żądaj tarcicy struganej na krokwie widocznych na poddaszu.</b> Jeśli więźba ma zostać odsłonięta (np. w salonie z antresolą), strugana i szlifowana to inny poziom wyglądu.",
      "<b>Składuj na przekładkach, pod przykryciem.</b> Drewno na ziemi i pod folią nasiąka. Wystarczą paleta, kantówki i plandeka z wentylacją.",
      "<b>Najpierw zamów drewno, potem ustal termin ciesielstwa.</b> Dobre ciesielnie mają kolejki; dostawa trwa 2–4 tyg."
    ],
    mistakes: [
      "<b>Drewno „z sąsiedniego lasu”.</b> Świeże, niesortowane i bez dokumentu klasy nie przejdzie odbioru kierownika.",
      "<b>Zamiana przekrojów dla oszczędności.</b> 8 × 18 zamiast 8 × 20 wygląda niewinnie, ale odbiera nośność i sztywność krokwi. Zmiany tylko po konsultacji z konstruktorem.",
      "<b>Impregnacja malowana pędzlem na budowie.</b> Pędzlem nie dotrzesz w głąb drewna. Zamów drewno zaimpregnowane fabrycznie."
    ],
    formal: [
      ["Dokument dostawy drewna (klasa C24, oznakowanie, impregnacja)", "tartak lub ciesielnia; kierownik budowy dołącza do dokumentacji budowy"]
    ],
    checklist: [
      "Klasa C24 potwierdzona dokumentem lub oznaczeniem",
      "Wilgotność zmierzona, do ok. 18–20%",
      "Drewno zaimpregnowane fabrycznie, przekroje zgodne z projektem",
      "Składowanie na przekładkach, pod przykryciem"
    ],
    quiz: [{
      q: "Ciesielnia proponuje świeże, nieimpregnowane drewno „bo taniej”. Co robisz?",
      a: ["Zgadzasz się, bo więźba i tak będzie ukryta", "Odmawiasz i zamawiasz suszone C24 z impregnacją, bo skurcz i grzyby wyjdą po latach", "Dopłacasz tylko za impregnację, a suszenie jest nieistotne"],
      correct: 1,
      explain: "<b>Świeże drewno skurczy się i wygnie</b> już po pierwszej zimie (pęknięcia tynków i płyt na poddaszu), a bez impregnacji grozi pleśń i szkodniki. Różnica w cenie jest mała w porównaniu z naprawą."
    }]
  },

  /* 3 ------------------------------------------------------------------ */
  {
    id: "murlata-wieniec",
    title: "Murłata i kotwienie w wieńcu",
    lead: "Murłata to belka, na której opiera się cała więźba. Musi być idealnie pozioma i przykręcona do wieńca kotwami, bo wiatr próbuje zerwać dach z domu.",
    time: "1–2 dni", team: "2 cieśli",
    facts: [["Murłata", "14 × 14 cm", "layers"], ["Kotwy", "co ok. 1–1,5 m", "rebar"], ["Tolerancja", "± 5 mm", "stamp"]],
    body: `
      <p>Wieniec żelbetowy wykonujesz w etapie 05 razem ze ścianką kolankową. <strong>Kotwy (pręty gwintowane M12–M14) muszą być w nim zabetonowane</strong> w miejscach, które wyznaczy projekt konstrukcyjny, zwykle co 1–1,5 m i przy narożach. Zapomnienie o nich oznacza wklejanie kotew chemicznych po fakcie.</p>
      <p>Murłatę (zwykle <strong>14 × 14 cm</strong>) układa się na izolacji poziomej (papa lub pas folii), żeby wilgoć z betonu nie przechodziła do drewna. Kotwy przewierca się w murłacie i dokręca nakrętkami z szerokimi podkładkami. Krokwie opierają się o murłatę i są do niej przybite i skręcone kątownikami lub złączami ciesielskimi.</p>
      <p>Przed montażem niwelatorem sprawdź <strong>poziom wieńca i ścianek kolankowych</strong> oraz przekątne dachu domu i garażu. Błędy z muru przeniosą się na całą połać.</p>`,
    cost: { min: 2000, max: 3500, note: "kotwy, murłaty, izolacja pod murłatę, montaż" },
    tips: [
      "<b>Niwelator, nie poziomica.</b> Różnica wysokości murłaty w narożach nie powinna przekraczać ok. 5 mm. Większe błędy wyrównuje się klinami, nie na stałe.",
      "<b>Podkładka pod każdą nakrętkę kotwy.</b> Zwykła nakrętka w drewnie wciska się i luzuje. Użyj podkładek ok. 50 × 50 mm.",
      "<b>Murłata pod garaż osobno.</b> Dach garażu ma własną murłatę; połączenie z dachem głównym projektuje konstruktor.",
      "<b>Zrób zdjęcia wieńca z kotwami przed betonowaniem.</b> Odbiór u kierownika w etapie 05 obejmuje ich liczbę i rozmieszczenie."
    ],
    mistakes: [
      "<b>Murłata bez izolacji od betonu.</b> Mokre drewno gnije od dołu, a nie widać tego, dopóki dach nie zacznie siadać.",
      "<b>Kotwy rozmieszczone „co się dało”.</b> Zbyt rzadkie albo za blisko krawędzi wieńca nie przenoszą ssania wiatru i łatwo pękają beton przy dokręceniu."
    ],
    formal: [
      ["Odbiór wieńca i kotew przed montażem więźby", "kierownik budowy, wpis w dzienniku; inspektor nadzoru, jeśli jest"]
    ],
    checklist: [
      "Kotwy w wieńcu zgodne z projektem (liczba, średnica, rozstaw)",
      "Poziom wieńca sprawdzony niwelatorem (± 5 mm)",
      "Izolacja pod murłatą ułożona",
      "Murłata przykręcona z podkładkami, przekątne dachu sprawdzone"
    ],
    quiz: [{
      q: "Do czego służą kotwy zabetonowane w wieńcu?",
      a: ["Do podwieszenia stropu", "Do przytwierdzenia murłaty, a przez nią więźby, żeby wiatr nie zerwał dachu", "Do uziemienia pioruna"],
      correct: 1,
      explain: "<b>Wiatr działa na dach jak żagiel</b>: ssie go do góry. Kotwy przekazują tę siłę na wieniec i ścianę."
    }]
  },

  /* 4 ------------------------------------------------------------------ */
  {
    id: "wiezba-montaz",
    title: "Krokwie, jętki i montaż więźby",
    lead: "Więźba to szkielet dachu. Dla poddasza użytkowego wybieramy tradycyjną więźbę ciesielską, bo zostawia otwartą przestrzeń do zamieszkania.",
    time: "2–3 tyg. (tradycyjna)", team: "3–4 cieśli + HDS",
    facts: [["Krokwie", "ok. 8 × 20 cm co 80–90 cm", "layers"], ["Jętki", "wysokość ok. 2,4–2,6 m", "rebar"], ["Montaż", "2–3 tyg.", "clock"]],
    body: `
      <p>Dach ma <strong>krokwie</strong> (ukośne belki od murłaty do kalenicy) i <strong>jętki</strong> (poziome belki łączące parę krokwi, które odciągają rozpór). Przekroje i rozstaw ustala konstruktor, orientacyjnie krokwie 8 × 20 cm co 80–90 cm, jętki ok. 5 × 15 cm. Przy rozpiętości 9,5 m konstruktor może dodać płatwie i słupki oparte na ścianach, żeby skrócić rozpiętość krokwi.</p>
      <p>Jętki zamykają poddasze od góry, dlatego wysokość ich dolnej krawędzi wybiera się wspólnie z projektantem: <strong>ok. 2,4–2,6 m od podłogi</strong>, żeby pod nimi dało się wygodnie stać. Wysokość pomieszczeń na poddaszu użytkowym musi spełniać wymagania WT2021; sprawdź w projekcie.</p>
      <p>Tradycyjna więźba powstaje na budowie z drewna ciętego i składanego na miejscu. Alternatywą są <strong>wiązary dachowe</strong> z płytek kolczastych, produkowane w fabryce, montowane w 2–3 dni.</p>`,
    decision: {
      question: "Jaka więźba?",
      intro: "Koszt opcji to dopłata do kosztu kroku (ok. 42–56 tys. zł za tradycyjną więźbę z drewnem i robocizną).",
      chosen: "tradycyjna",
      options: [
        { id: "tradycyjna", name: "Tradycyjna więźba ciesielska",
          cost: { min: 0, max: 0 }, time: "2–3 tyg.", note: "krokwie, jętki, płatwie",
          pros: ["Otwarta przestrzeń poddasza użytkowego", "Łatwe wycięcia na okna dachowe, komin i zmiany", "Prosta adaptacja do garażu i lukarn"],
          cons: ["Zależna od jakości cieśli", "Dłuższy montaż, dłużej odkryty strop", "Więcej drewna"],
          why: "Wybieramy ją, bo poddasze jest użytkowe (pokój dziecięcy, siłownia). Daje najwięcej wolnej kubatury i elastyczność przy oknach dachowych i kominku." },
        { id: "wiazary", name: "Prefabrykowane wiązary (typ „attic” do poddasza)",
          cost: { min: -2000, max: 8000 }, time: "2–3 dni montażu", note: "dźwig/HDS, dokładny montaż",
          pros: ["Szybki montaż: dom pod dachem w kilka dni", "Dokładne wymiary z fabryki", "Mniej odpadu"],
          cons: ["Wiązar typu attic zabiera część szerokości poddasza", "Trudniej wyciąć otwory na okna i komin (zmiany w wiązarach liczy producent)", "Projekt wiązarów to dodatkowy koszt i czas"],
          why: "Ma sens przy poddaszu nieużytkowym albo gdy liczy się czas. Przy naszej ścianie kolankowej 1 m i dwóch pokojach na poddaszu odbiera użyteczną szerokość." }
      ]
    },
    cost: { min: 36000, max: 48000, note: "drewno C24 + impregnacja + robocizna ciesielska + HDS" },
    tips: [
      "<b>Wymiany pod okna dachowe i komin wykonaj w więźbie od razu.</b> Dodatkowe krokwie i belki wymianowe zakłada się przy montażu. Późniejsze cięcie osłabia dach.",
      "<b>Wiatrownice i stężenia nie są ozdobą.</b> Skośne deski lub taśmy stężające w płaszczyźnie dachu przeciwdziałają przechyłowi, zwłaszcza przy wietrze.",
      "<b>Nie podcinaj krokwi „na własną rękę”.</b> Zacios na murłacie jest płytki i wg projektu. Głębokie nacięcie osłabia belkę.",
      "<b>Odbiór pośredni więźby przed membraną.</b> Kierownik albo inspektor sprawdzają przekroje, połączenia, kotwienie, stężenia i otwory. Po zakryciu pokryciem tego nie zobaczysz.",
      "<b>Montuj przy bezwietrznej pogodzie i zabezpiecz stropem.</b> Gdy dach stoi odkryty, deszcz leje się na strop; zaplanuj szybkie przykrycie."
    ],
    mistakes: [
      "<b>Za rzadko wiązana więźba.</b> Zbyt duży rozstaw krokwi (np. 1,2 m) ugina się pod łatami i dachówką, a pokrycie pęka po kilku latach.",
      "<b>Gwoździe zamiast złączy.</b> Kątowniki i wkręty ciesielskie z atestem utrzymują krokwie. Pojedyncze gwoździe przy wietrze puszczają.",
      "<b>Brak miejsca na ocieplenie.</b> Krokwie 8 × 20 plus ocieplenie wełną 25–30 cm wymagają dodatkowej warstwy pod krokwiami (etap 11)."
    ],
    formal: [
      ["Projekt więźby (rysunki wykonawcze z etapu 02)", "konstruktor; wiązary: projekt producenta zatwierdza konstruktor"],
      ["Odbiór pośredni więźby", "kierownik budowy, wpis w dzienniku; inspektor nadzoru (jeśli zatrudniony, kluczowy odbiór)"]
    ],
    checklist: [
      "Przekroje i rozstaw krokwi zgodne z projektem konstrukcyjnym",
      "Jętki na wysokości ok. 2,4–2,6 m, wymiany pod okna dachowe i komin",
      "Stężenia i wiatrownice zamontowane",
      "Połączenia z murłatą skręcone kątownikami lub złączami",
      "Odbiór pośredni więźby wpisany do dziennika budowy"
    ],
    quiz: [
      {
        q: "Dlaczego dla poddasza użytkowego wybieramy tradycyjną więźbę, a nie wiązary kratowe?",
        a: ["Wiązary są zawsze droższe", "Wiązary kratowe wypełniają poddasze belkami i odbierają przestrzeń do zamieszkania", "Wiązary nie wytrzymują śniegu"],
        correct: 1,
        explain: "<b>Przestrzeń użytkowa.</b> Klasyczne wiązary mają kratownicę przez całą szerokość poddasza. Wersje „attic” zostawiają miejsce w środku, ale kosztem szerokości, a tradycyjna więźba daje najwięcej wolnej kubatury."
      },
      {
        q: "Do czego służy jętka?",
        a: ["Podpiera kalenicę od dołu", "Łączy pary krokwi i zmniejsza rozpór", "Zamyka okap"],
        correct: 1,
        explain: "<b>Jętka</b> poziomo spina dwie krokwie. Dzięki temu dach nie rozpycha ścian na boki."
      }
    ]
  },

  /* 5 ------------------------------------------------------------------ */
  {
    id: "membrana",
    title: "Membrana wysokoparoprzepuszczalna",
    lead: "Membrana to druga skóra dachu: zatrzymuje wodę i wiatr, a zarazem wypuszcza parę z ocieplenia. Układa się ją zaraz po więźbie, żeby dom był od razu osłonięty.",
    time: "1–2 dni", team: "2–3 dekarzy",
    facts: [["Typ", "wysokoparoprzepuszczalna", "layers"], ["Zakład", "ok. 10–15 cm", "rebar"], ["Czas ekspozycji", "do 3–4 mies.", "clock"]],
    body: `
      <p><strong>Membrana wysokoparoprzepuszczalna (MWP)</strong> to folia o niskim oporze dyfuzyjnym (orientacyjnie sd ≤ 0,1 m), ułożona pod kontrłatami. Wypuszcza parę z poddasza i jednocześnie nie przepuszcza wody, która dostała się pod dachówkę. Dzięki niej ocieplenie między krokwiami może „oddychać”.</p>
      <p>Układa się ją od okapu ku kalenicy, <strong>poziomymi pasami</strong>, z zakładami wg producenta (zwykle 10–15 cm), uszczelnionymi taśmą. Na krokwiach powinna lekko <strong>zwisać (1–2 cm)</strong>, a nie być napięta, żeby woda spływała, a nie stała. W okapie wyprowadza się ją na rynnę lub blachę okapową, tak żeby woda nie wlewała się pod deskę czołową.</p>
      <p>Od wewnątrz, w etapie 11, ułożysz <strong>paroizolację</strong>. Razem tworzą sandwicz: para wchodzi do izolacji w minimalnej ilości, a nadmiar wychodzi przez membranę.</p>`,
    cost: { min: 3000, max: 4500, note: "membrana + taśmy + montaż, ok. 285 m² z zakładami" },
    tips: [
      "<b>Membrana jest tymczasowym dachem.</b> Odporność na UV to zwykle kilka miesięcy (zależy od producenta, sprawdź kartę). Nie zostawiaj jej odkrytej przez całą zimę.",
      "<b>Przy kominie i oknach dachowych dolepiaj taśmy i kołnierze od razu.</b> Nieszczelność przy kominie to jedno z częstszych źródeł zacieków.",
      "<b>Nie przecinaj membrany na odpływy skroplin.</b> Każde przebicie zaklejaj taśmą.",
      "<b>Wełna może przylegać do membrany, jeśli deklaracja producenta na to pozwala.</b> Przy innych typach zostaw szczelinę wentylacyjną pod membraną."
    ],
    mistakes: [
      "<b>Membrana odwrotną stroną.</b> Strona z nadrukiem ma być na zewnątrz; zawsze czytaj instrukcję producenta.",
      "<b>Napięta jak plandeka.</b> Na zimnie się kurczy i pęka przy łatach; woda nie ma kiedy spłynąć.",
      "<b>Pionowe zakłady zamiast poziomych.</b> Woda przecieka przez pionowe łączenia."
    ],
    checklist: [
      "Typ membrany (sd, odporność na UV) zgodny z projektem",
      "Zakłady sklejone taśmą, membrana nie jest napięta",
      "Wyprowadzenie na rynnę w okapie, uszczelnione przy kominie i oknach",
      "Plan zamknięcia dachu pokryciem przed końcem sezonu"
    ],
    quiz: [{
      q: "Co oznacza „wysokoparoprzepuszczalna” w membranie dachowej?",
      a: ["Przepuszcza dużo wody", "Wypuszcza parę wodną z poddasza, ale zatrzymuje wodę z zewnątrz", "Odbija ciepło do wnętrza"],
      correct: 1,
      explain: "<b>Para wychodzi, woda nie wchodzi.</b> Dzięki temu ocieplenie i drewno nie zawilgacają się od wnętrza."
    }]
  },

  /* 6 ------------------------------------------------------------------ */
  {
    id: "kontrlaty-laty",
    title: "Kontrłaty i łaty: wentylacja dachu",
    lead: "Kontrłaty tworzą szczelinę wentylacyjną pod pokryciem, a łaty trzymają dachówki. Bez szczeliny dach zawilgotnieje od spodu, a zimą zbierze lód.",
    time: "3–5 dni", team: "3 dekarzy",
    facts: [["Kontrłaty", "ok. 30 × 50 mm", "layers"], ["Łaty", "40 × 50 mm, co ok. 33 cm", "rebar"], ["Szczelina", "ok. 3–5 cm", "stamp"]],
    body: `
      <p><strong>Kontrłaty</strong> przybija się wzdłuż krokwi, przez membranę, i to one tworzą <strong>szczelinę wentylacyjną</strong>. Powietrze wchodzi w okapie (pod pierwszą łatą, przez kratkę lub grzebień okapowy), idzie pod pokryciem w górę i wychodzi przy kalenicy, gdzie szczelinę wieńczy wentylowana kalenica. Typowa wysokość kontrłat to 25–50 mm; dokładny wymiar zależy od długości połaci i wymagań producenta pokrycia.</p>
      <p><strong>Łaty</strong> (zwykle 40 × 50 mm) układa się poziomo, a ich rozstaw wynika z długości dachówki: dla dachówki ceramicznej ok. 32–35 cm, <strong>podawany przez producenta</strong>. Pierwsza łata przy okapie jest nieco grubsza (o ok. 2 cm), a łaty kalenicowe wymagają specjalnego rozstawu.</p>
      <p>Na naszych 255 m² potrzeba <strong>ok. 320 mb kontrłat i ok. 770 mb łat</strong> (z zapasem). Kontrłaty i łaty to drewno sortowane, suche i zaimpregnowane, bo schnie ono tylko od spodu.</p>`,
    cost: { min: 5000, max: 7500, note: "kontrłaty, łaty, elementy wentylacji okapu, montaż" },
    tips: [
      "<b>Rozstaw łat ustal po zamówieniu dachówki.</b> Dachówka z innej partii może mieć inną długość; producent podaje zakres.",
      "<b>Mierz rozstaw dla całej połaci jedną tyczką.</b> Przesunięcie o centymetr po kilku rzędach daje krzywą linię dachówek, a przy kalenicy kosztowne docinki.",
      "<b>Okap i kalenica muszą oddychać.</b> Kratka okapowa i wentylowana kalenica są częścią systemu, a nie dodatkiem.",
      "<b>Łaty co 33 cm dla ceramiki, a dla blachy inne.</b> Blachodachówka ma moduł np. 35 cm, a rąbek pełne deskowanie."
    ],
    mistakes: [
      "<b>Kontrłaty zbyt cienkie.</b> Szczelina się zamyka, bo membrana ugina się między krokwiami.",
      "<b>Brak kratek w okapie.</b> Bez otworu powietrze nie wchodzi, a szczelina działa jak zamknięty pas.",
      "<b>Łaty ze zwykłej tarcicy.</b> Tarcica zielona się skręca i dachówki zmieniają położenie."
    ],
    checklist: [
      "Kontrłaty przybite wzdłuż krokwi, szczelina otwarta w okapie i przy kalenicy",
      "Rozstaw łat sprawdzony miarą na całej połaci",
      "Pierwsza łata przy okapie podniesiona o ok. 2 cm",
      "Łaty przy kominie, oknach dachowych i koszach zgodne z instrukcją"
    ],
    quiz: [{
      q: "Po co jest szczelina wentylacyjna pod pokryciem?",
      a: ["Żeby dach lepiej wyglądał", "Żeby odprowadzić wilgoć i chronić dach przed lodem i grzybem", "Żeby zmniejszyć ciężar pokrycia"],
      correct: 1,
      explain: "<b>Przepływ powietrza</b> od okapu do kalenicy osusza spód pokrycia i wyrównuje temperaturę połaci, co ogranicza powstawanie nawisów lodowych zimą."
    }]
  },

  /* 7 ------------------------------------------------------------------ */
  {
    id: "pokrycie",
    title: "Pokrycie dachu: ciemna dachówka",
    lead: "Pokrycie decyduje o wyglądzie, trwałości i hałasie podczas deszczu. W domu z poddaszem użytkowym i ciemnym dachem jak na zdjęciu wybieramy dachówkę ceramiczną.",
    time: "1,5–2 tyg.", team: "3–4 dekarzy",
    facts: [["Ciężar ceramiki", "ok. 40–45 kg/m²", "layers"], ["Trwałość", "50+ lat", "shield"], ["Powierzchnia", "ok. 255 m²", "rebar"]],
    body: `
      <p>Najpierw układa się dachówki od <strong>okapu do kalenicy</strong>, rząd po rzędzie, każdą zaczepiając o łatę. Na końcu montuje się kalenice (najlepiej na sucho, ze szczelinami wentylacyjnymi), wiatrówki w szczytach i obróbki. Ciemny kolor (grafit, antracyt) uzyskuje się przez angobowanie lub szkliwienie, które trzyma barwę dziesiątki lat.</p>
      <p>Mocowanie mechaniczne to <strong>klamry lub wkręty</strong>: przy kącie 40° dachówki w strefach brzegowych (okap, kalenica, szczyt) mocuje się każdą lub co drugą, a w polu zwykle co którąś, wg instrukcji producenta i strefy wiatrowej. Tu nie ma miejsca na „na oko”.</p>
      <p>Kolor i rodzaj pokrycia mogą być opisane w MPZP. Zanim zamówisz, sprawdź zapisy; czarne lub grafitowe dachy bywają dozwolone, ale nie zawsze.</p>`,
    decision: {
      question: "Jakie pokrycie?",
      intro: "Koszt całego pokrycia z montażem (materiał, akcesoria, robocizna) dla ok. 255 m².",
      chosen: "ceramiczna",
      options: [
        { id: "ceramiczna", name: "Dachówka ceramiczna ciemna (angoba/szkliwo)",
          cost: { min: 40000, max: 55000 }, time: "8–12 dni", note: "ok. 160–215 zł/m²",
          pros: ["Trwałość 50+ lat, kolor nie płowieje", "Cisza podczas deszczu, dobra akustyka poddasza", "Wysoka wartość domu, pasuje do kamienia i drewna"],
          cons: ["Ciężka (więźba na to liczona)", "Drożej niż beton i blacha", "Kruchość przy układaniu, ostrożny dekarz"],
          why: "Najlepszy wybór dla dachu 40° z poddaszem użytkowym: cicha, trwała, bez pracy przez dekady. Ciemny kolor z angobą trzyma wygląd ze zdjęcia." },
        { id: "betonowa", name: "Dachówka betonowa",
          cost: { min: 27000, max: 38000 }, time: "7–10 dni", note: "ok. 105–150 zł/m²",
          pros: ["Tańsza niż ceramika", "Ciężka i cicha", "Duży wybór kolorów"],
          cons: ["Kolor z czasem blaknie, osadzają się mchy", "Cięższa niż ceramika (ok. 43–50 kg/m²)", "Żywotność ok. 40–50 lat"],
          why: "Dobra alternatywa, gdy brakuje ok. 15 tys. zł. Wymaga częstszego czyszczenia i odświeżenia powłoki." },
        { id: "blachodachowka", name: "Blachodachówka (powłoka matowa)",
          cost: { min: 23000, max: 34000 }, time: "4–6 dni", note: "ok. 90–135 zł/m²",
          pros: ["Najtańsza, najlżejsza (ok. 5–8 kg/m²)", "Szybki montaż", "Dobra przy dużych połaciach"],
          cons: ["Głośniejsza w deszcz i grad, wymaga wygłuszenia", "Nagrzewa się mocniej", "Żywotność powłoki 25–40 lat"],
          why: "Dla budżetu. W domu z poddaszem sypialnianym wymaga maty wygłuszającej i grubszej izolacji." },
        { id: "rabek", name: "Blacha na rąbek stojący (ciemna)",
          cost: { min: 60000, max: 82000 }, time: "2–3 tyg.", note: "ok. 235–320 zł/m²",
          pros: ["Nowoczesny wygląd, gładka powierzchnia", "Trwała (powłoka 40+ lat)", "Lekka"],
          cons: ["Najdroższa robocizna: dekarz rąbkowy to specjalista", "Głośna bez deskowania i maty", "Trudniejsza przy dużej liczbie połączeń (kosze, okna dachowe)"],
          why: "Nie pasuje do dachu z garażem prostopadłym, koszami i oknami dachowymi: robocizna rośnie, a efekt drogi." }
      ]
    },
    tips: [
      "<b>Mieszaj dachówki z kilku palet.</b> Odcienie z różnych partii się różnią; układaj z 3–4 palet jednocześnie, żeby nie było plam.",
      "<b>Zamów próbkę i obejrzyj na zewnątrz.</b> Ciemny kolor w katalogu wygląda inaczej niż na dachu w słońcu.",
      "<b>Zachowaj dokumentację montażu dla gwarancji.</b> Producent wymaga układania wg wytycznych: łaty, mocowanie, kalenice; ślady na fakturach i zdjęcia chronią roszczenia.",
      "<b>Ciemny dach grzeje poddasze latem.</b> Powierzchnia dochodzi do kilkudziesięciu °C; dobra wentylacja szczeliną i grube ocieplenie (etap 11) kompensują nagrzewanie.",
      "<b>Dekarz zakłada ławy i stopnie asekuracyjne w czasie pracy.</b> Dach 40° jest śliski: wymagaj szelek lub rusztowania połaciowego."
    ],
    mistakes: [
      "<b>Dachówka niedoszacowana o 10%.</b> Dobierane z innej partii dachówki różnią się kolorem na całym dachu.",
      "<b>Montaż w mróz lub na mokrych łatach.</b> Dekarz kładzie dachówkę, ale zakłady i klamry nie pracują poprawnie; poczekaj na suchą pogodę.",
      "<b>Brak mocowania w strefach brzegowych.</b> Wiatr zrywa dachówki przy okapie i na szczycie jako pierwsze."
    ],
    formal: [
      ["Karta techniczna i gwarancja producenta pokrycia", "dostawca; gwarancja wymaga montażu wg wytycznych, certyfikowany dekarz bywa warunkiem"],
      ["Umowa z dekarzem (ryczałt, gwarancja robocizny min. 5 lat)", "zasady z etapu 00; kaucja gwarancyjna 5–10%"]
    ],
    checklist: [
      "Kolor i rodzaj pokrycia zgodne z MPZP i projektem",
      "Dachówki z kilku palet, zapas 5–8%",
      "Mocowanie w strefach brzegowych i przy kalenicy wg instrukcji",
      "Kalenice wentylowane, wiatrówki na szczytach",
      "Gwarancja producenta i dekarza w dokumentach"
    ],
    quiz: [
      {
        q: "Dlaczego dachówki układa się z kilku palet naraz?",
        a: ["Żeby szybciej pracować", "Żeby wymieszać drobne różnice odcieni i uniknąć plam na dachu", "Bo producent tego wymaga w gwarancji"],
        correct: 1,
        explain: "<b>Partie się różnią.</b> Mieszanie palet rozprasza różnice koloru po całej połaci."
      },
      {
        q: "Który wybór jest najlepszy dla poddasza użytkowego pod ciemnym dachem 40°?",
        a: ["Blacha na rąbek bez wygłuszenia", "Dachówka ceramiczna ciemna: cicha, trwała, kolor nie płowieje", "Najtańsza blachodachówka bez maty"],
        correct: 1,
        explain: "<b>Hałas i trwałość.</b> Ceramika jest cicha i trwa kilkadziesiąt lat; blachy wymagają wygłuszenia, a wtedy tracą przewagę w cenie."
      }
    ]
  },

  /* 8 ------------------------------------------------------------------ */
  {
    id: "obrobki-kominek",
    title: "Obróbki: komin kominka, kosze, kalenice i szczyty",
    lead: "Najwięcej przecieków ma dach nie w polu dachówek, ale przy kominie, koszach i ścianach. Tu liczy się precyzja blacharza, nie cena materiału.",
    time: "3–5 dni", team: "dekarz + blacharz",
    facts: [["Komin", "tylko kominek", "house"], ["Obróbki", "blacha powlekana lub aluminium", "layers"], ["Zakład", "kołnierz + fartuch", "shield"]],
    body: `
      <p>W naszym domu nie ma komina kotła (ogrzewa pompa ciepła), jest tylko <strong>komin od kominka</strong> w salonie. Wykonany w etapie 05, przechodzi przez poddasze i dach. W miejscu przejścia dekarz wykonuje <strong>obróbkę komina</strong>: kołnierz zawinięty w ścianę i fartuch od strony spływu wody. Najlepiej z blachy powlekanej w kolorze dachu, a przy pokryciu ceramicznym także z elastycznych taśm uszczelniających (np. aluminium z butylem).</p>
      <p>Wysokość wylotu komina nad dachem wynika z przepisów i odległości od kalenicy (zwykle min. ok. 0,6 m ponad kalenicę lub wg zasad, gdy komin jest bliżej); <strong>sprawdź u kominiarza i kierownika budowy</strong>. Elementy palne w więźbie zostaw w odległości wymaganej projektem komina.</p>
      <p>Pozostałe obróbki to: <strong>obróbka przyścienna</strong> przy styku dachu garażu z domem (nasz dach prostopadły), kosze dachowe (jeśli powstają), <strong>pas nadrynnowy</strong>, wiatrownice i deski czołowe na szczytach. Pod nimi musi być prawidłowa membrana i zakłady.</p>`,
    cost: { min: 4500, max: 8000, note: "komin, styk garażu, kalenice, szczyty, deski czołowe" },
    tips: [
      "<b>Blacha obróbkowa w kolorze dachu, nie z innej bajki.</b> Różne odcienie szarości wyglądają jak niedokończony dach.",
      "<b>Przejście komina rób przed pokryciem w tej strefie.</b> Dekarz układa dachówki wokół, a obróbkę dokłada na koniec; nie odwrotnie.",
      "<b>Oba spadki garażu i domu mają wspólną linię styku.</b> Zaplanuj odpływ wody z garażu na dach domu: nie powinna spływać po ścianie.",
      "<b>Uszczelniaj elastycznym kitem tylko tymczasowo.</b> Trwałe obróbki mocuje się mechanicznie i zakłada na zakład; silikon po kilku latach pęka."
    ],
    mistakes: [
      "<b>Kominek bez przerwy od drewna.</b> Za mała odległość od elementów palnych to ryzyko pożaru; zapytaj kominiarza przed obiciem.",
      "<b>Za krótki fartuch nad kominem.</b> Woda wpływa w szczelinę przy ulewie i spływa po kominie do wnętrza.",
      "<b>Obróbki wykonane „na koniec, po znajomości”.</b> To jedno z miejsc, gdzie tanio wychodzi najdrożej."
    ],
    formal: [
      ["Odbiór komina przez kominiarza (przed uruchomieniem kominka)", "kominiarz, kilkaset zł; wpis do dokumentów odbioru domu (etap 16)"]
    ],
    checklist: [
      "Wylot komina na wymaganej wysokości, sprawdzony z kominiarzem",
      "Obróbka komina: kołnierz i fartuch, uszczelnienie mechaniczne",
      "Obróbka przyścienna przy garażu, szczyty i kalenice",
      "Kolor blach dopasowany do pokrycia"
    ],
    quiz: [{
      q: "Gdzie najczęściej dachy przeciekają?",
      a: ["W środku pola dachówek", "Przy kominie, koszach i ścianach, czyli na obróbkach", "Na kalenicy"],
      correct: 1,
      explain: "<b>Połączenia dwóch płaszczyzn.</b> Pole dachówek jest szczelne z natury, a woda wchodzi tam, gdzie obróbka jest nietrafiona."
    }]
  },

  /* 9 ------------------------------------------------------------------ */
  {
    id: "okna-dachowe",
    title: "Okna dachowe z kołnierzem i izolacją",
    lead: "Cztery okna dachowe doświetlą poddasze, a dobrze osadzone nie przeciekają ani nie robią mostków cieplnych. Montuje się je razem z dachówką, a nie po niej.",
    time: "2–3 dni", team: "2 dekarzy",
    facts: [["Okna", "ok. 4 szt.", "layers"], ["Rozmiar", "np. 78 × 140 cm", "rebar"], ["U okna", "ok. 1,0–1,1 W/(m²·K)", "shield"]],
    body: `
      <p>Orientacyjnie <strong>cztery okna dachowe</strong> (np. 78 × 140 cm) po dwa na połać doświetlą pokój dziecięcy, siłownię i sypialnię. Dokładną liczbę i położenie wyznacza projekt architektoniczny. Dolna krawędź skrzydła powinna być ok. <strong>90–110 cm nad podłogą</strong>, żeby wygodnie otwierać okno i patrzeć na zewnątrz.</p>
      <p>Okno montuje się w płaszczyźnie połaci przy użyciu <strong>kołnierza uszczelniającego</strong> dobranego do pokrycia (inny dla dachówki, inny dla blachy). Dookoła okna układa się <strong>zestaw izolacyjny</strong> (ocieplenie ościeży, wełna lub piana) i taśmę paroizolacyjną od strony wnętrza. Taki zestaw likwiduje mostek cieplny przy ramie.</p>
      <p>Okna dachowe trzeba zamówić z wyprzedzeniem (<strong>3–6 tyg.</strong>) i ustawić w więźbie na wymianach wykonanych w kroku 4. Szczegóły okien w ścianach i drzwi są w etapie 07.</p>`,
    cost: { min: 13000, max: 18000, note: "4 okna 3-szybowe + kołnierze + zestawy izolacyjne + montaż" },
    tips: [
      "<b>Zamów okna z kołnierzami i zestawem izolacyjnym w tym samym zamówieniu.</b> Nie kupuj kołnierza „uniwersalnego”: dopasowany do dachówki jest kluczowy.",
      "<b>Wysokość montażu sprawdź z projektem wnętrz.</b> Okno za nisko wystaje nad podłogę, za wysoko nie da się otworzyć; wnętrza z siłownią i pokojem dziecka mają inne wymagania.",
      "<b>Wybierz szyby trzyszybowe z ciepłą ramką.</b> W połaciach bez nich okna pocą się i kapie z ram; U okna sprawdź w deklaracji.",
      "<b>Zaplanuj rolety zewnętrzne lub markizy.</b> Przy dachu ciemnym i południowej połaci poddasze nagrzewa się latem; rolety zewnętrzne są skuteczniejsze niż wewnętrzne."
    ],
    mistakes: [
      "<b>Okno wmontowane po pokryciu.</b> Trzeba rozbierać dachówki, a kołnierz się nie układa.",
      "<b>Brak taśmy paroizolacyjnej od wnętrza.</b> Para z pokoju trafia w zestaw i okno się zawilgaca; mostek cieplny gotowy.",
      "<b>Za mała liczba okien.</b> Dokładanie otworów w gotowej więźbie jest kosztowne i wymaga konstruktora."
    ],
    formal: [
      ["Deklaracja właściwości użytkowych okien dachowych (U, szczelność)", "producent; załącz do dokumentacji odbioru"],
      ["Zmiana liczby lub położenia okien względem projektu", "zgoda projektanta; zmiana istotna może wymagać formalności"]
    ],
    checklist: [
      "Liczba i położenie okien dachowych zgodne z projektem",
      "Dolna krawędź skrzydła ok. 90–110 cm nad podłogą",
      "Kołnierz dopasowany do pokrycia, zestaw izolacyjny zamontowany",
      "Taśma paroizolacyjna przyklejona od wnętrza (etap 11)",
      "Zamówione rolety lub markizy zewnętrzne"
    ],
    quiz: [{
      q: "Kiedy najlepiej wmontować okno dachowe?",
      a: ["Po całkowitym ułożeniu dachówek", "Po ułożeniu łat, razem z pokryciem, z kołnierzem dopasowanym do dachówki", "Dopiero w etapie wykończenia wnętrz"],
      correct: 1,
      explain: "<b>Okno i pokrycie wykonuje się razem.</b> Kołnierz układa się pod dachówką, więc po pokryciu trzeba by je rozbierać."
    }]
  },

  /* 10 ----------------------------------------------------------------- */
  {
    id: "rynny",
    title: "Rynny i rury spustowe",
    lead: "Rynny odprowadzają ok. 250 m² połaci wody deszczowej od fundamentów. Zły spadek albo słaby materiał kończy się wylewaniem i zamarzaniem przy cokole.",
    time: "2–3 dni", team: "2 monterów",
    facts: [["Długość rynien", "ok. 43 mb", "rebar"], ["Rury spustowe", "ok. 6 szt.", "layers"], ["Spadek", "3–5 mm/mb", "stamp"]],
    body: `
      <p>Okapy domu i garażu mają razem <strong>ok. 43 mb</strong>. Rynny montuje się na hakach długich (przybijane do krokwi przed pokryciem) albo krótkich (do deski czołowej). Muszą mieć <strong>spadek 3–5 mm na metr</strong> ku rurze spustowej, a rynnę osadza się tak, żeby woda z dachówki spływała do rynny, a nie za nią.</p>
      <p>Potrzebne są <strong>ok. 6 rur spustowych Ø 90–100 mm</strong> (liczbę i średnice potwierdź w projekcie lub u producenta systemu). Woda z rur powinna trafić do <strong>zbiornika na deszczówkę lub drenażu rozsączającego</strong>: zaplanujemy to w etapie 15, a przy rurach zostawiamy wpusty lub przejście.</p>`,
    decision: {
      question: "Jaki system rynnowy?",
      intro: "Koszt kompletu ok. 43 mb rynien, haków, rur spustowych i narożników, z montażem.",
      chosen: "stal",
      options: [
        { id: "stal", name: "Stal powlekana (kolor grafit/antracyt)",
          cost: { min: 5000, max: 8000 }, time: "2 dni", note: "ok. 115–185 zł/mb",
          pros: ["Sztywna, wytrzymała na śnieg i lód", "Kolor dopasowany do ciemnego dachu", "Trwałość 30–40 lat"],
          cons: ["Powłoka może zarysować się przy montażu", "Droższa niż PVC"],
          why: "Najlepszy stosunek ceny i trwałości przy ciemnym dachu. Wytrzymuje zsuwający się śnieg z dachu 40°." },
        { id: "pvc", name: "PVC (plastik)",
          cost: { min: 3000, max: 4500 }, time: "1–2 dni", note: "ok. 70–105 zł/mb",
          pros: ["Najtańsze, lekkie", "Nie rdzewieje", "Łatwy montaż"],
          cons: ["Kruszeje od słońca i mrozu po kilkunastu latach", "Odkształca się pod śniegiem", "Ograniczona paleta kolorów"],
          why: "Tylko gdy liczy się każdy tysiąc. Przy dachu 40° i zsuwającym się śniegu bywa uszkadzane." },
        { id: "tytan", name: "Tytan-cynk",
          cost: { min: 12000, max: 17000 }, time: "3–4 dni", note: "ok. 280–395 zł/mb",
          pros: ["Trwałość 50+ lat, patynuje", "Najwyższa jakość i wygląd", "Samonaprawia zarysowania"],
          cons: ["Najdroższe, ok. 2 × stal", "Wymaga lutowania lub specjalnych złączy", "Patyna szara nie pasuje do każdego koloru"],
          why: "Dla domu „na pokolenia”. Przy budżecie z limitami kategorii nie uzasadnia różnicy wobec stali." }
      ]
    },
    tips: [
      "<b>Sprawdź spadek poziomicą z długim listwą.</b> Rynna z zerowym spadkiem trzyma wodę i zimą zamarza.",
      "<b>Haki długie przed pokryciem.</b> Mocuje się je do krokwi w trakcie układania łat; haki krótkie po pokryciu są mniej wytrzymałe.",
      "<b>Wpusty z siatką chroniące przed liśćmi.</b> Duże drzewa przy domu zatkają rury w pierwszą jesień.",
      "<b>Nie wpuszczaj rur spustowych do kanalizacji ściekowej.</b> Deszczówka wymaga osobnego odprowadzenia (zbiornik, drenaż)."
    ],
    mistakes: [
      "<b>Rynny za wąskie dla 255 m² połaci.</b> Przy ulewie przelewają się nad rynną; dobór systemu wg powierzchni.",
      "<b>Rynny montowane przed pokryciem.</b> Dekarz je przesunie lub uszkodzi.",
      "<b>Woda z rur wprost pod ścianę.</b> Podmywa fundament i moczy ścianę; odprowadź co najmniej kilka metrów."
    ],
    checklist: [
      "Spadek rynien sprawdzony poziomicą (3–5 mm/mb)",
      "Rury spustowe w liczbie zgodnej z projektem, wpusty z siatką",
      "Odprowadzenie wody zaplanowane (zbiornik lub drenaż, etap 15)",
      "Kolor systemu dopasowany do dachu"
    ],
    quiz: [{
      q: "Jaki spadek ma mieć rynna?",
      a: ["Zero, aby woda stała i się nie wylewała", "3–5 mm na metr w stronę rury spustowej", "Ok. 5 cm na metr"],
      correct: 1,
      explain: "<b>Niewielki spadek wystarcza.</b> Większy sprawia, że rynna wygląda krzywo; zerowy zostawia wodę, która zimą zamarza."
    }]
  },

  /* 11 ----------------------------------------------------------------- */
  {
    id: "snieg-wylaz",
    title: "Ochrona przed śniegiem, wyłaz i ławy kominiarskie",
    lead: "Dach 40° zrzuca śnieg całymi płatami. Płotki śniegowe chronią wejścia, garaż i samochody, a wyłaz z ławą pozwala bezpiecznie dojść do komina.",
    time: "1–2 dni", team: "dekarz",
    facts: [["Płotki", "ok. 25–30 mb", "layers"], ["Wyłaz", "1 szt.", "house"], ["Ławy", "do komina", "shield"]],
    body: `
      <p><strong>Płotki śniegowe</strong> (zatrzymywacze) zatrzymują warstwę śniegu na dachu, żeby topniała stopniowo. Montuje się je nad wejściem, tarasem i garażem, a także wzdłuż okapów nad miejscami, gdzie ktoś przebywa. Dokładne rozmieszczenie podaje producent pokrycia; obciążenie śniegiem zależy od strefy i opisano je w projekcie konstrukcyjnym.</p>
      <p><strong>Wyłaz dachowy</strong> (z poddasza lub z kondygnacji) i <strong>ława kominiarska</strong> (stopnie na połaci wzdłuż drogi do komina) umożliwiają kominiarzowi i serwisantowi bezpieczne wejście. Dla kominka jest to wymóg przeglądu.</p>`,
    cost: { min: 2500, max: 4500, note: "płotki ok. 25–30 mb, wyłaz, ława kominiarska, zatrzymywacze" },
    tips: [
      "<b>Płotki w kolorze dachu, mocowane w łatach lub do krokwi.</b> Zamocowane tylko w dachówce zerwą się przy dużym obciążeniu.",
      "<b>Dwa rzędy nad wejściem i garażem.</b> To miejsca, gdzie spadający lód robi największą szkodę.",
      "<b>Wyłaz tam, gdzie wygodnie dojdziesz.</b> Nie pod skosem, w którym nie ma miejsca na wyjście; ustal z projektantem.",
      "<b>Śnieg z dachu garażu spada na dach domu.</b> Przy styku obydwu połaci zamontuj płotki także na niższym dachu."
    ],
    mistakes: [
      "<b>Brak płotków nad wejściem.</b> Płaty śniegu zerwą daszek, rynnę i dobiją samochód.",
      "<b>Płotki tylko „dla wyglądu”.</b> Zbyt krótkie albo bez mocowania w krokwi nie spełniają roli."
    ],
    checklist: [
      "Płotki śniegowe nad wejściem, garażem i tarasem",
      "Wyłaz i ława kominiarska zamontowane, dostępne",
      "Mocowanie do łat lub krokwi, nie tylko do dachówki"
    ],
    quiz: [{
      q: "Gdzie szczególnie warto zamontować płotki śniegowe?",
      a: ["Tylko przy kalenicy", "Nad wejściem, garażem, tarasem i innymi miejscami, gdzie bywają ludzie lub auta", "Nie warto, bo śnieg stopnieje sam"],
      correct: 1,
      explain: "<b>Chroń miejsca użytkowe.</b> Lawina śniegu i lodu z dachu 40° może uszkodzić samochód i zranić człowieka."
    }]
  },

  /* 12 ----------------------------------------------------------------- */
  {
    id: "pod-pv-podbitka",
    title: "Przygotowanie pod PV i zapowiedź podbitki",
    lead: "Fotowoltaikę zamontujesz w etapie 10, ale haki i przepust przez dach najłatwiej przygotować teraz, podczas układania dachówek. Podbitka czeka na etap 12.",
    time: "pół dnia", team: "dekarz",
    facts: [["Moduły", "8 szt. (ok. 15 m²)", "layers"], ["Haki", "pod konstrukcję PV", "rebar"], ["Podbitka", "etap 12", "clock"]],
    body: `
      <p>Plan z etapu 10 zakłada <strong>8 modułów PV na połaci frontowej</strong> (orientację docelowo potwierdzimy w etapie 10). Już teraz dekarz może zamontować <strong>haki dachowe</strong> w miejscach wskazanych w projekcie PV, na krokwiach pod dachówką, oraz <strong>przepust kablowy</strong> (dachówkę przepustową) z rurą osłonową do poddasza. Wtedy w etapie 10 nie trzeba otwierać dachu i uszczelniać go na nowo.</p>
      <p>Dodatkowe obciążenie 8 modułów to ok. 15–20 kg/m²: mieści się w rezerwach więźby, ale zgłoś to konstruktorowi. Tam, gdzie pod okapem zostanie <strong>podbitka</strong> (deski lub panele), zostaw tylko szczelinę wentylacyjną i listwy do mocowania: sama podbitka powstanie w etapie 12 razem z elewacją.</p>`,
    cost: { min: 800, max: 1800, note: "haki, przepust kablowy, rura osłonowa" },
    tips: [
      "<b>Haki w rozstawie wg projektu PV.</b> Źle rozmieszczone haki trzeba będzie przestawiać, a po dachówce zostaną dziury.",
      "<b>Rura osłonowa Ø 32–40 mm do poddasza z linką.</b> Przewody DC prowadzisz bezpiecznie i wymieniasz bez wiercenia.",
      "<b>Zrób zdjęcia i plan położenia haków.</b> Za kilka lat serwis i ekipa PV będą wiedzieć, gdzie są elementy nośne.",
      "<b>Podbitkę zostaw otwartą na wentylację.</b> Kratki w okapie nie mogą być zakryte deskami."
    ],
    mistakes: [
      "<b>PV bez przygotowania na etapie dachu.</b> Dziury w gotowych dachówkach i ryzyko przecieków.",
      "<b>Zasłonięta szczelina okapowa podbitką.</b> Wentylacja dachu przestaje działać."
    ],
    checklist: [
      "Plan rozmieszczenia haków i przepustu uzgodniony z projektem PV",
      "Rura osłonowa z linką do poddasza",
      "Konstruktor poinformowany o dodatkowym obciążeniu",
      "Szczelina okapowa pod przyszłą podbitkę otwarta"
    ],
    quiz: [{
      q: "Dlaczego warto przygotować haki pod PV podczas układania dachówek?",
      a: ["Bo moduły są wtedy tańsze", "Żeby nie robić otworów w gotowym pokryciu i nie ryzykować przecieków", "Bo bez haków nie ma gwarancji na dach"],
      correct: 1,
      explain: "<b>Dach otwiera się raz.</b> Haki zamontowane przy dachówkach są prawidłowo uszczelnione i nie osłabiają pokrycia."
    }]
  },

  /* 13 ----------------------------------------------------------------- */
  {
    id: "odbior-dachu",
    title: "Odbiór dachu i zabezpieczenie na zimę",
    lead: "Dach odbiera się, zanim zakryjesz go rusztowaniem i wykończeniem. Po ulewie sprawdź poddasze od środka: to najtańszy test szczelności.",
    time: "1–2 dni", team: "kierownik, ty, dekarz",
    facts: [["Odbiór", "kierownik budowy", "stamp"], ["Test", "po ulewie", "clock"], ["Zdjęcia", "dokumentacja", "file"]],
    body: `
      <p>Odbiór dachu obejmuje: <strong>wymiary i połączenia więźby</strong> (wcześniej pośredni), pokrycie, obróbki, rynny, okna dachowe, wyłaz i płotki. Kierownik budowy wpisuje odbiór do dziennika; przy kluczowym odbiorze (po zamknięciu dachu) warto zaprosić inspektora nadzoru, jeśli go zatrudniasz (etap 03).</p>
      <p>Przed zimą sprawdź też: <strong>kalenice i szczyty, wlot i wylot wentylacji, szczelność przejść</strong> (komin, okna dachowe, przepusty). Po pierwszej dużej ulewie wejdź na poddasze z latarką i sprawdź ślady wilgoci przy kominie, oknach i koszach.</p>
      <p>Zakończenie dachu domyka stan surowy zamknięty. W harmonogramie ogólnym to moment, od którego możesz prowadzić instalacje i tynki także zimą.</p>`,
    tips: [
      "<b>Zrób zdjęcia dachu z drona lub z drabiny.</b> Pokazują stan na dzień odbioru, przydatne przy gwarancji i ubezpieczeniu.",
      "<b>Ostatnią płatność (kaucję) trzymaj do czasu testu po ulewie.</b> Przeciek po pierwszej burzy wychodzi zwykle w pierwszych tygodniach.",
      "<b>Sprawdź rynny w deszczu.</b> Po prawidłowym montażu woda wpada do rur, a nie przelewa się przez wierzch.",
      "<b>Zimą odkrytym poddaszem zajmij się natychmiast.</b> Jeśli dach nie jest zamknięty przed zimą, membrana i ośnieżenie dadzą przeciek do stropu."
    ],
    mistakes: [
      "<b>Odbiór „na słowo”.</b> Bez protokołu i zdjęć trudno później dochodzić gwarancji.",
      "<b>Wejście na dach w zimie bez asekuracji.</b> Zlecaj kontrolę dekarzowi, nie rób jej sam."
    ],
    formal: [
      ["Protokół odbioru robót dekarskich", "kierownik budowy + wykonawca; kaucja gwarancyjna 5–10% wg umowy"],
      ["Wpis w dzienniku budowy (zamknięcie stanu surowego)", "kierownik budowy"]
    ],
    checklist: [
      "Odbiór dachu u kierownika, wpis w dzienniku",
      "Pokrycie, obróbki, rynny, okna dachowe i płotki skontrolowane",
      "Wentylacja okapu i kalenicy drożna",
      "Test po ulewie: poddasze sucho, rynny działają",
      "Dokumentacja zdjęciowa, gwarancje, deklaracje materiałów w teczce"
    ],
    quiz: [{
      q: "Jaki jest najprostszy test szczelności dachu?",
      a: ["Wejść na dach po śniegu", "Po dużej ulewie sprawdzić poddasze od środka latarką", "Polać dach wodą z węża raz w roku"],
      correct: 1,
      explain: "<b>Woda sama pokaże nieszczelność.</b> Po ulewie ślady przy kominie, oknach lub koszach są widoczne od środka; łatwiej je wtedy naprawić na gwarancji."
    }]
  }

  ]
});
