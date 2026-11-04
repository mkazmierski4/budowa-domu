/* Etap 14: Umeblowanie i aranżacja. Kuchnia z wyspą, szafy i garderoba, pokoje, oświetlenie dekoracyjne, tekstylia, rośliny.
   Ceny orientacyjne, 2026 r., okolice małego miasta. Prace wykończeniowe (podłogi, płytki, drzwi, ceramika, armatura, okap) są w etapie 13.
   Kuchnia referencyjna: zabudowa ścienna ok. 4,2 m (z dwoma słupkami) + wyspa ok. 2,4 × 1,0 m ze zlewem i zmywarką (odpływ z etapu 09). */
(function(){

BUDOWA.addStage({
  id: "14-umeblowanie", nr: 14, title: "Umeblowanie i aranżacja", icon: "🛋️", category: "wykoncz",
  summary: "Kuchnia z wyspą, szafy i garderoba, meble do salonu, jadalni, sypialni, pokoju dziecięcego, siłowni i łazienek, lampy dekoracyjne, zasłony i rośliny. Kolejność zamówień tak, żeby wprowadzić się do gotowego domu.",
  duration: "3–4 mies. zamówień, 4–8 tyg. montażu",
  steps: [

  /* 1 ------------------------------------------------------------------ */
  {
    id: "plan-wnetrz",
    title: "Plan wnętrz: co na wymiar, a co gotowe",
    lead: "Meble zaczynasz od rzutu domu z narysowanymi meblami, a nie od sklepu. Na rzucie widać strefy, przejścia i to, co musi być zrobione na wymiar.",
    time: "2–4 tyg. (w trakcie etapu 11–13)", team: "ty, projektant kuchni, opcjonalnie projektant wnętrz",
    facts: [["Budżet etapu", "ok. 91–157 tys. zł (śr. 124)", "wallet"], ["Kuchnia z AGD", "ok. 40% etapu", "house"]],
    body: `
      <p>Weź rzut z projektu (etap 02) i narysuj meble w skali: kuchnię z wyspą, stół przy przeszkleniu, narożnik, łóżka, szafy. Rzut powinien już istnieć, bo na nim projektant elektryki rozmieścił gniazda i punkty świetlne (etap 08). Teraz sprawdzasz, czy wszystko się zgadza i gdzie stanie każdy mebel.</p>
      <p>Podziel meble na dwie grupy. <strong>Na wymiar</strong> robimy to, co jest wbudowane i dopasowane do ścian: kuchnię, szafy wnękowe, zabudowę pod skosami i ścianę tapicerowaną. <strong>Gotowe</strong> kupujemy to, co wolnostojące: narożnik, stół, krzesła, łóżka, meble dziecięce, sprzęt do siłowni. Taki podział daje dopasowanie tam, gdzie widać różnicę, i oszczędza tam, gdzie jej nie widać.</p>
      <p><strong>Budżet etapu to ok. 124 tys. zł</strong> (orientacyjnie 91–157 tys.). Etapy 11 i 12 zostawiły na wykończenie i meble (13 + 14) ok. 313 tys. zł z limitu 545 tys., a etap 13 to średnio ok. 188 tys. Razem wychodzi ok. 312 tys., czyli na styk, a przy górnych widełkach dużo więcej. Dlatego zawczasu ustal, co możesz odłożyć: sprzęt do siłowni (ok. 4–6 tys. zł), ścianę tapicerowaną (ok. 3–4,5 tys.), część lamp dekoracyjnych i dywanów (ok. 3–5 tys.), zasłony szyte na wymiar w pokojach na poddaszu (ok. 2–4 tys.) i fronty lakierowane, które możesz zamienić na laminat (ok. 4–6 tys.). Razem daje to ok. 16–25 tys. zł bez cięcia kuchni i szaf.</p>`,
    cost: { min: 0, max: 2000, note: "projekt kuchni i szaf zwykle w cenie zamówienia; konsultacja projektanta wnętrz" },
    decision: {
      question: "Co zamawiać na wymiar, a co kupić gotowe?",
      intro: "Koszt to dopłata albo oszczędność względem planu: kuchnia i szafy na wymiar, reszta gotowa.",
      chosen: "mix",
      options: [
        { id: "mix", name: "Kuchnia i szafy na wymiar, reszta gotowa",
          cost: { min: 0, max: 0 }, time: "6–10 tyg. na kuchnię", note: "plan etapu",
          pros: ["Dopasowanie do ścian, skosów i instalacji tam, gdzie to ważne", "Meble wolnostojące można wymienić bez remontu", "Rozsądny koszt"],
          cons: ["Dwa terminy dostaw do pilnowania", "Trzeba pilnować spójności kolorów z różnych źródeł"],
          why: "Wbudowane meble pracują z murem i instalacjami, więc tam stolarz na wymiar jest wart swojej ceny. Narożnik czy stół lepiej obejrzeć i wypróbować w salonie meblowym." },
        { id: "wszystko-wymiar", name: "Wszystko u stolarza na wymiar",
          cost: { min: 20000, max: 35000 }, time: "10–14 tyg.", note: "jeden styl, jeden wykonawca",
          pros: ["Pełna spójność materiałów", "Każdy centymetr wykorzystany"],
          cons: ["Najdrożej", "Długie terminy i jedno ryzyko opóźnienia dla całego domu", "Łóżka i biurka na wymiar trudno potem sprzedać"],
          why: "Ma sens przy nietypowych wnętrzach i dużym budżecie. W naszym domu dopłata nie zmienia funkcji, tylko styl." },
        { id: "gotowe", name: "Wszystko gotowe, kuchnia modułowa",
          cost: { min: -14000, max: -8000 }, time: "1–4 tyg.", note: "moduły z marketu lub sieci",
          pros: ["Najtaniej i najszybciej", "Można kupować stopniowo"],
          cons: ["Szczeliny przy ścianach i pod skosami", "Słabsze okucia i blaty w tańszych seriach", "Wyspa ze zlewem wymaga przeróbek"],
          why: "Dobre wyjście, gdy budżet z etapu 13 się nie spina. Wtedy przynajmniej kuchnię zamów na wymiar, a resztę kupuj stopniowo." }
      ]
    },
    tips: [
      "<b>Rysuj w skali 1:50 albo w darmowym planerze.</b> Wydruk rzutu, papierowe prostokąty mebli i taśma malarska na podłodze w surowym domu dają więcej niż katalogi.",
      "<b>Przejścia min. 80–90 cm, w kuchni 100–120 cm.</b> Tyle potrzeba, żeby dwie osoby się minęły, a szuflady i zmywarka otworzyły się do końca.",
      "<b>Wymiary bierz z gotowych ścian.</b> Projekt mówi „380 cm”, a po tynkach i płytkach jest 376. Ostateczny pomiar kuchni i szaf robi stolarz po tynkach i podłogach.",
      "<b>Jedna paleta na cały dom.</b> 2–3 kolory bazowe, jedno drewno (np. dąb jak w schodach i podłogach z etapu 13) i jeden metal okuć. Łatwiej kupować meble z różnych miejsc.",
      "<b>Projektant wnętrz na kilka godzin.</b> Konsultacja w cenie ok. 1,5–2 tys. zł często zwraca się na jednej pomyłce w kuchni. Pełny projekt całego domu to ok. 60–120 zł/m², czyli 11–23 tys. zł (orientacyjnie)."
    ],
    mistakes: [
      "<b>Kupowanie mebli przed rzutem.</b> Narożnik z promocji, który zasłania drzwi tarasowe albo gniazdo. Zwrot dużego mebla kosztuje transport i nerwy.",
      "<b>Za duże meble.</b> W pustym domu wszystko wygląda na małe. Sofa 3,5 m w salonie 30 m² zabiera przejście do tarasu.",
      "<b>Zapomniane instalacje.</b> Szafa wnękowa na ścianie z rozdzielaczem podłogówki, łóżko na wylocie nawiewu rekuperacji, telewizor bez gniazda i przepustu na kable."
    ],
    checklist: [
      "Rzut z meblami w skali, z zaznaczonymi przejściami",
      "Lista: co na wymiar, co gotowe, z budżetem na pomieszczenie",
      "Gniazda, punkty świetlne i nawiewy z etapów 08 i 10 sprawdzone na rzucie z meblami",
      "Paleta kolorów i drewna na cały dom"
    ],
    quiz: [{
      q: "Które meble w naszym domu najbardziej opłaca się zamówić na wymiar?",
      a: ["Narożnik i stół do jadalni", "Kuchnię, szafy wnękowe i zabudowę pod skosami", "Łóżka i biurko w pokoju dziecięcym"],
      correct: 1,
      explain: "<b>Na wymiar to, co wbudowane.</b> Kuchnia i szafy są przy ścianach, skosach i instalacjach, więc dopasowanie robi różnicę. Mebli wolnostojących nie trzeba dopasowywać do muru."
    }]
  },

  /* 2 ------------------------------------------------------------------ */
  {
    id: "kolejnosc-zakupow",
    title: "Kolejność zakupów i terminy dostaw",
    lead: "Meble mają dłuższe terminy niż większość robót. Kuchnia to 6–10 tygodni od zamówienia, sofa i łóżko tapicerowane 4–12 tygodni. Zamawiasz je, kiedy ekipa jeszcze kładzie podłogi.",
    time: "od 12 tyg. przed przeprowadzką", team: "ty",
    facts: [["Kuchnia", "6–10 tyg.", "clock"], ["Sofa na zamówienie", "6–12 tyg.", "clock"]],
    body: `
      <p>Kolejność wynika z dwóch rzeczy: <strong>kiedy można zrobić pomiar</strong> i <strong>jak długo trwa produkcja</strong>. Kuchnię i szafy stolarz mierzy po tynkach, wylewkach i podłogach (etapy 11 i 13), bo liczy się każdy centymetr. Wcześniej możesz już mieć projekt, wybrane fronty i AGD, a pomiar tylko potwierdza wymiary.</p>
      <p>Orientacyjny plan od przeprowadzki wstecz: <strong>12 tyg.</strong> projekt kuchni i wybór AGD (wymiary AGD muszą być w projekcie), <strong>10 tyg.</strong> pomiar i zamówienie kuchni oraz szaf, <strong>8–10 tyg.</strong> zamówienie sofy i łóżka tapicerowanego, <strong>6 tyg.</strong> lampy dekoracyjne i szyny sufitowe, <strong>3–4 tyg.</strong> zasłony szyte po montażu szyn, <strong>1–2 tyg.</strong> meble gotowe, materace, sprzęt do siłowni i rośliny.</p>
      <p>Montaż kuchni idzie po podłogach i pierwszym malowaniu. Potem płytki albo szkło nad blatem (etap 13), ostatnia warstwa farby i dopiero na końcu meble wolnostojące, dywany i zasłony.</p>`,
    cost: { min: 800, max: 2000, note: "transport, wniesienie na poddasze, montaż drobnych mebli" },
    tips: [
      "<b>AGD kupujesz przed projektem kuchni.</b> Przynajmniej modele i wymiary do zabudowy: lodówka, piekarnik, kompakt, zmywarka. Stolarz projektuje korpusy pod konkretne urządzenia.",
      "<b>W umowie wpisz termin i karę.</b> Np. 0,1–0,2% wartości za każdy dzień zwłoki. Daty montażu kuchni nie trzymaj „na słowo”.",
      "<b>Zaliczka 30–50%, reszta po montażu.</b> Nie płać 100% z góry. Ostatnią ratę płać po odbiorze z listą poprawek.",
      "<b>Dostawy na jeden tydzień, nie na jeden dzień.</b> Kuchnia, szafy i sofa jednego dnia to kartony w każdym pokoju i brak miejsca na montaż.",
      "<b>Wniesienie na poddasze.</b> Sprawdź szerokość schodów i zakrętów (etap 13). Materac 180 × 200 i rama łóżka muszą przejść, a narożnik często przyjeżdża w modułach."
    ],
    mistakes: [
      "<b>Zamówienie kuchni z wymiarów z projektu.</b> Po tynkach i płytkach ściana jest krótsza o kilka centymetrów i szafki się nie mieszczą.",
      "<b>Sofa zamówiona tydzień przed przeprowadzką.</b> Przez dwa miesiące siedzisz na krzesłach ogrodowych.",
      "<b>Meble wolnostojące przed malowaniem.</b> Folie, kurz z szlifowania i zachlapane tapicerki. Najpierw kończysz brudne prace, potem wnosisz meble."
    ],
    formal: [
      ["Umowa na meble na wymiar", "zakres, rysunek, termin, kary umowne, harmonogram płatności, gwarancja (np. 24 mies.)"],
      ["Zakup na odległość", "meble gotowe kupione przez internet możesz zwykle zwrócić w 14 dni; meble robione na wymiar są z tego wyłączone"]
    ],
    checklist: [
      "Lista mebli z terminem produkcji i datą zamówienia",
      "Wymiary AGD przekazane stolarzowi przed projektem",
      "Pomiar kuchni i szaf po tynkach i podłogach",
      "W umowach: termin, kary, zaliczka max 50%",
      "Sprawdzone wniesienie dużych mebli na poddasze"
    ],
    quiz: [{
      q: "Kiedy najpóźniej zamówić kuchnię, żeby była gotowa na przeprowadzkę?",
      a: ["Tydzień przed przeprowadzką", "Ok. 10 tygodni przed, po pomiarze gotowych ścian i podłóg", "Przed wylaniem fundamentów"],
      correct: 1,
      explain: "<b>Kuchnia to 6–10 tygodni produkcji.</b> Pomiar musi być z gotowych ścian, a montaż po podłogach. Stąd zamówienie ok. 10 tygodni przed przeprowadzką."
    }]
  },

  /* 3 ------------------------------------------------------------------ */
  {
    id: "kuchnia-projekt",
    title: "Kuchnia z wyspą: projekt i ergonomia",
    lead: "Dobra kuchnia to krótkie drogi między lodówką, zlewem i płytą, blat na wysokości twoich łokci i wyspa, wokół której wygodnie się chodzi.",
    time: "2–3 tyg. projektu", team: "ty, projektant w studiu kuchni",
    facts: [["Zabudowa + wyspa", "ok. 4,2 m + 2,4 × 1,0 m", "house"], ["Przejście przy wyspie", "100–120 cm", "check"]],
    body: `
      <p>Nasza kuchnia ma <strong>zabudowę przy ścianie ok. 4,2 m</strong> (dwa słupki: lodówka i piekarnik z kompaktem, między nimi płyta indukcyjna z okapem obiegowym) i <strong>wyspę ok. 2,4 × 1,0 m</strong> ze zlewem i zmywarką. Odpływ i woda do wyspy są z posadzki (etap 09), a przewody do płyty i AGD z etapu 08.</p>
      <p><strong>Trójkąt roboczy</strong> łączy lodówkę, zlew i płytę. Każdy bok powinien mieć ok. 1,2–2,7 m, a suma ok. 4–7 m. Krócej to ciasno, dłużej to chodzenie. Przy wyspie ze zlewem trójkąt wychodzi naturalnie: lodówka i płyta przy ścianie, zlew naprzeciw.</p>
      <p><strong>Wysokość blatu</strong> to ok. połowa wzrostu plus 5–10 cm. Dla osób 165–185 cm wychodzi 90–95 cm (standard 85–88 cm to za nisko dla większości). Wyspa może mieć ten sam poziom co blat, a barek ze stołkami 75 cm albo 90 cm z hokerami. Między wyspą a zabudową zostaw <strong>100–120 cm</strong>.</p>`,
    cost: { min: 14000, max: 19000, note: "korpusy, okucia z cichym domykiem, cokoły, montaż; bez frontów, blatu i AGD" },
    decision: {
      question: "Co na wyspie?",
      intro: "Odpływ w wyspie jest już w posadzce (etap 09). Koszt to dopłata względem samego blatu.",
      chosen: "zlew",
      options: [
        { id: "zlew", name: "Zlew i zmywarka na wyspie",
          cost: { min: 0, max: 0 }, note: "zgodnie z instalacją z etapu 09",
          pros: ["Zmywasz twarzą do salonu i ogrodu", "Krótki trójkąt roboczy", "Cała ściana na płytę i blat do gotowania"],
          cons: ["Wyspa musi być czysta, bo jest na widoku", "Zawór napowietrzający i syfon w szafce zabierają miejsce"],
          why: "Odpływ jest w posadzce, więc nic nie dopłacasz. Zlew na wyspie daje najkrótsze drogi i najwięcej blatu przy ścianie." },
        { id: "plyta", name: "Płyta indukcyjna na wyspie",
          cost: { min: 2500, max: 6000 }, note: "okap wyspowy lub płyta z wyciągiem",
          pros: ["Gotujesz twarzą do gości", "Efektowne"],
          cons: ["Przewód do płyty w posadzce musiał być przed wylewką", "Okap wyspowy obiegowy słabiej łapie opary", "Tłuszcz pryska na stołki barowe"],
          why: "Tylko gdy przewód 5 × 2,5 do wyspy jest w posadzce (etap 08). Okap wyspowy albo płyta z wyciągiem kosztuje więcej niż okap przy ścianie." },
        { id: "blat", name: "Sam blat i szuflady",
          cost: { min: -1500, max: -500 }, note: "bez instalacji w wyspie",
          pros: ["Najprostsza i najtańsza wyspa", "Duży, czysty blat roboczy"],
          cons: ["Zlew i płyta obok siebie przy ścianie: ciasno", "Odpływ w posadzce zostaje niewykorzystany"],
          why: "Gdy instalacje do wyspy nie zostały zrobione. U nas są, więc szkoda z nich rezygnować." }
      ]
    },
    tips: [
      "<b>Strefy w linii: zapasy → zmywanie → przygotowanie → gotowanie.</b> Lodówka, obok zlew, potem min. 60–90 cm blatu roboczego, dalej płyta. Przy płycie min. 30–40 cm blatu z każdej strony.",
      "<b>Szuflady zamiast drzwiczek w dolnych szafkach.</b> Pełny wysuw i cichy domyk. Do szuflady zaglądasz z góry, do szafki na kolanach.",
      "<b>Zmywarka tuż obok zlewu i podniesiona, jeśli się da.</b> Zmywarka w słupku na wysokości 40–50 cm to mniej schylania. Wtedy przewód i odpływ muszą tam dojść (sprawdź z hydraulikiem).",
      "<b>Wyspa 100 cm głębokości.</b> Od strony salonu 30–40 cm nawisu na kolana, jeśli chcesz siadać przy wyspie. Stołek barowy potrzebuje ok. 55–60 cm szerokości.",
      "<b>Słupek z piekarnikiem na wysokości wzroku.</b> Dolna krawędź piekarnika ok. 80–90 cm nad podłogą, nad nim kompakt z mikrofalą albo parą.",
      "<b>Kosz na śmieci do segregacji pod zlewem.</b> 3–4 komory w szufladzie 60 cm. Zaplanuj go od razu, bo potem nie ma miejsca."
    ],
    mistakes: [
      "<b>Blat 85 cm „bo taki jest standard”.</b> Dla osoby 180 cm to ból pleców przy każdym krojeniu. Wysokość ustal przy pierwszym projekcie, regulowane nóżki dają tylko kilka centymetrów.",
      "<b>Za wąskie przejście przy wyspie.</b> 80 cm wygląda dobrze na rysunku, ale przy otwartej zmywarce i szufladzie nikt nie przejdzie.",
      "<b>Lodówka w rogu przy ścianie.</b> Drzwi nie otwierają się na 90° i półek nie da się wysunąć. Przy ścianie zostaw min. 5–10 cm albo zawiasy na przeciwną stronę.",
      "<b>Płyta tuż przy słupku albo oknie.</b> Garnek nie ma gdzie stanąć, a firanka i rama okna łapią tłuszcz i ciepło."
    ],
    checklist: [
      "Trójkąt: lodówka, zlew, płyta, każdy bok 1,2–2,7 m",
      "Wysokość blatu dopasowana do domowników (90–95 cm)",
      "Przejście przy wyspie 100–120 cm",
      "Modele AGD w projekcie, wymiary nisz zgodne z instrukcjami",
      "Gniazda nad blatem i podejścia w wyspie zgodne z projektem kuchni"
    ],
    quiz: [{
      q: "Jaka odległość między wyspą a zabudową jest wygodna?",
      a: ["60–70 cm", "100–120 cm", "180–200 cm"],
      correct: 1,
      explain: "<b>100–120 cm.</b> Tyle trzeba, żeby otworzyć zmywarkę albo szufladę i jeszcze przejść. Przy 180 cm między wyspą a blatem robisz za dużo kroków."
    }, {
      q: "Jak dobrać wysokość blatu?",
      a: ["Zawsze 85 cm", "Ok. połowy wzrostu plus 5–10 cm", "Do wysokości parapetu"],
      correct: 1,
      explain: "<b>Połowa wzrostu plus 5–10 cm.</b> Dla 170 cm wychodzi ok. 90–95 cm. Łokieć powinien być ok. 10–15 cm nad blatem."
    }],
    widget: "planer-kuchni"
  },

  /* 4 ------------------------------------------------------------------ */
  {
    id: "kuchnia-fronty",
    title: "Fronty kuchenne: lakier, fornir czy laminat",
    lead: "Fronty to to, co widzisz w kuchni codziennie przez 20 lat. Od nich zależy wygląd, odporność na uderzenia i to, ile śladów palców zobaczysz.",
    time: "decyzja przy projekcie", team: "projektant kuchni",
    facts: [["Powierzchnia frontów", "ok. 10–11 m²", "layers"]],
    body: `
      <p>W naszej kuchni jest ok. <strong>10–11 m² frontów</strong>: szafki dolne, dwa słupki, kilka górnych szafek i panel z tyłu wyspy od strony salonu. Korpusy prawie zawsze są z płyty laminowanej 18 mm, a różnią się fronty.</p>
      <p><strong>Lakier</strong> to MDF malowany na mat albo półmat w dowolnym kolorze. <strong>Fornir</strong> to cienka warstwa prawdziwego drewna (np. dąb) na płycie. <strong>Laminat</strong> to płyta z warstwą dekoracyjną, coraz częściej z matową powłoką odporną na odciski (np. typu „anti-finger”).</p>
      <p>Dobry kompromis to <strong>lakier mat na większości frontów i fornir dębowy w jednym miejscu</strong>, np. na panelu wyspy albo słupkach. Ciepłe drewno nawiązuje do deski na elewacji i podłóg.</p>`,
    decision: {
      question: "Z czego fronty?",
      intro: "Koszt to fronty dla ok. 10–11 m² z frezowaniem uchwytów lub uchwytami, orientacyjnie 2026 r.",
      chosen: "lakier",
      options: [
        { id: "lakier", name: "Lakier mat na MDF",
          cost: { min: 8000, max: 11000 }, time: "+1–2 tyg. produkcji", note: "ok. 800–1050 zł/m²",
          pros: ["Dowolny kolor z palety", "Gładka, jednolita powierzchnia, łatwo myć", "Uszkodzenie można zaprawić i polakierować"],
          cons: ["Odpryski na krawędziach od uderzeń", "Jasny mat pokazuje przetarcia przy uchwytach"],
          why: "Najlepszy stosunek wyglądu do ceny. Mat w neutralnym kolorze pasuje do kamienia i drewna z inspiracji, a fornir można dodać na wyspie." },
        { id: "fornir", name: "Fornir dębowy",
          cost: { min: 13000, max: 18000 }, time: "+2–3 tyg.", note: "ok. 1250–1700 zł/m²",
          pros: ["Prawdziwe drewno, ciepły wygląd", "Rysy mniej widać, można odświeżyć olejem"],
          cons: ["Najdrożej", "Ciemnieje od słońca: fronty przy przeszkleniu zmienią kolor", "Każda partia jest trochę inna"],
          why: "Gdy kuchnia ma być drewniana. Taniej wychodzi fornir tylko na wyspie (+2–3 tys. zł do lakieru)." },
        { id: "laminat", name: "Płyta laminowana mat (anti-finger)",
          cost: { min: 3200, max: 4800 }, time: "najkrócej", note: "ok. 300–450 zł/m²",
          pros: ["Najtaniej, odporna na zarysowania", "Mat anti-finger nie zbiera odcisków", "Ładne imitacje drewna"],
          cons: ["Obrzeże widać na krawędzi", "Uszkodzenia nie da się naprawić, tylko wymienić front", "Mniej kolorów"],
          why: "Gdy etap 13 zjada budżet: oszczędność ok. 5–6 tys. zł. Laminat dobrej marki z obrzeżem ABS jest trwały i praktyczny." }
      ]
    },
    tips: [
      "<b>Uchwyt frezowany albo listwa.</b> Frez w froncie (np. „J”) albo listwa aluminiowa pod blatem nie wystaje, nie łapie ubrań. Przy otwieraniu na dotyk (tip-on) zostają odciski na froncie.",
      "<b>Lakier: grubość płyty i lakier poliuretanowy.</b> Pytaj o MDF 19 mm i kilka warstw lakieru PU. Tańsze fronty mają lakier akrylowy, który szybciej się przeciera.",
      "<b>Próbki frontów oglądaj w swoim świetle.</b> Przy przeszkleniu południowym i taśmach LED 2700–3000 K szara próbka wygląda inaczej niż w salonie studia.",
      "<b>Panel wyspy od salonu z tego samego frontu.</b> Tył wyspy jest pierwszym, co widać z salonu, więc nie wykańczaj go płytą korpusu."
    ],
    mistakes: [
      "<b>Wysoki połysk w kuchni z przeszkleniem.</b> Każdy odcisk palca i każda rysa widoczne pod światło. Mat albo półmat jest dużo bardziej wybaczający.",
      "<b>Fronty z dwóch partii.</b> Dokupiony po roku front lakierowany albo fornirowany ma inny odcień. Zamów od razu wszystko, łącznie z maskownicami i panelami.",
      "<b>Biały lakier tuż przy płycie i piekarniku.</b> Bez listwy ochronnej i odstępu front żółknie od ciepła. Sprawdź wymagania producenta AGD."
    ],
    checklist: [
      "Próbka frontu obejrzana w świetle kuchni",
      "Panel tylny wyspy i maskownice w tym samym wykończeniu",
      "Wszystkie fronty zamówione w jednej partii"
    ]
  },

  /* 5 ------------------------------------------------------------------ */
  {
    id: "kuchnia-blat",
    title: "Blat: spiek, kwarc czy laminat",
    lead: "Blat przyjmuje gorące garnki, noże, wino i wodę ze zlewu. Na wyspie jest też najbardziej widoczną powierzchnią w całym parterze.",
    time: "pomiar po montażu szafek, montaż 1–3 tyg. później", team: "kamieniarz",
    facts: [["Powierzchnia blatów", "ok. 4,3 m²", "layers"], ["Grubość", "2 cm (kwarc), 1,2 cm (spiek)", "layers"]],
    body: `
      <p>Blat z kamienia albo spieku jest mierzony <strong>po montażu szafek</strong>, bo kamieniarz robi szablon z gotowych korpusów. Montaż to zwykle 1–3 tygodnie po pomiarze. W tym czasie kuchnia stoi bez blatu, więc zaplanuj to w harmonogramie.</p>
      <p>U nas to ok. <strong>4,3 m²</strong>: ok. 3 m blatu przy ścianie (bez słupków) i wyspa 2,4 × 1,0 m z otworem na zlew podwieszany. Płyta indukcyjna może być nakładana albo w jednej płaszczyźnie z blatem (frezowanie, droższe).</p>`,
    decision: {
      question: "Z czego blat?",
      intro: "Koszt dla ok. 4,3 m² z wycięciami, obróbką krawędzi i montażem, orientacyjnie.",
      chosen: "kwarc",
      options: [
        { id: "kwarc", name: "Konglomerat kwarcowy 2 cm",
          cost: { min: 7000, max: 10000 }, note: "ok. 1600–2300 zł/m² z obróbką",
          pros: ["Nienasiąkliwy, nie trzeba impregnować", "Jednolite wzory, także jak marmur lub beton", "Wytrzymałe krawędzie"],
          cons: ["Nie lubi bardzo gorących garnków: potrzebna podkładka", "Jasne kolory potrafią się przebarwić od kurkumy czy wina, jeśli zostawisz plamę na długo"],
          why: "Najlepszy kompromis dla rodzinnej kuchni: trwały, nie wymaga dbania, wyraźnie tańszy od spieku. Podkładka pod garnek to mała cena." },
        { id: "spiek", name: "Spiek kwarcowy 1,2 cm",
          cost: { min: 11000, max: 15000 }, note: "ok. 2600–3500 zł/m²",
          pros: ["Odporny na temperaturę, UV i plamy", "Cienki, nowoczesny wygląd", "Można go dać też na ścianę nad blatem"],
          cons: ["Kruche krawędzie przy uderzeniu", "Droga obróbka i niewielu dobrych kamieniarzy", "Wzór często tylko na powierzchni, krawędź inna"],
          why: "Gdy gotujesz dużo i chcesz stawiać garnki prosto z płyty. Wybierz kamieniarza z doświadczeniem w spieku i fazowaną krawędź." },
        { id: "laminat", name: "Blat laminowany 38 mm",
          cost: { min: 1500, max: 2600 }, note: "ok. 350–600 zł/m² z montażem",
          pros: ["Najtaniej", "Montaż razem z szafkami, bez czekania"],
          cons: ["Nie lubi wody przy zlewie podwieszanym (tylko nakładany)", "Rysy od noży i ślady od garnków", "Łączenia na wyspie 2,4 × 1,0 m są widoczne"],
          why: "Na start, gdy budżet się nie spina. Blat można wymienić za kilka lat bez ruszania szafek." }
      ]
    },
    tips: [
      "<b>Zlew podwieszany w kamieniu.</b> Krawędź blatu szlifowana dookoła otworu, bez rantu zbierającego brud. W laminacie tylko zlew nakładany.",
      "<b>Na wyspie jedna płyta, bez łączenia.</b> Kwarc ma płyty ok. 300 × 140 cm, więc wyspa 240 × 100 wchodzi z jednego kawałka. Przy dłuższej wyspie zapytaj o format płyty.",
      "<b>Ociekacz frezowany obok zlewu.</b> Kilka rowków w blacie za ok. 300–600 zł i nie potrzebujesz suszarki na blacie.",
      "<b>Montaż blatu przed płytkami nad blatem.</b> Płytki albo szkło na ścianie (etap 13) kładziesz po blacie, żeby fuga ładnie siadła na kamieniu.",
      "<b>Odbiór: łata i światło z boku.</b> Sprawdź poziom (max ok. 1 mm na 1 m), łączenia i silikony przy ścianie. Rysy najlepiej widać w świetle padającym z boku."
    ],
    mistakes: [
      "<b>Gorący garnek prosto na kwarc.</b> Może zostać biały ślad albo pęknięcie od szoku termicznego. Podkładka zawsze.",
      "<b>Pomiar blatu przed montażem szafek.</b> Kamień zrobiony „z rysunku” nie pasuje do krzywej ściany. Szablon robi się z gotowych korpusów.",
      "<b>Krojenie bezpośrednio na spieku.</b> Spiek jest twardszy niż stal noża: tępisz noże i możesz porysować wzór na powierzchni."
    ],
    checklist: [
      "Szablon blatu z zamontowanych szafek",
      "Wyspa z jednej płyty, otwór na zlew podwieszany",
      "Poziom i łączenia sprawdzone, silikon przy ścianie",
      "Podkładki pod garnki kupione razem z blatem"
    ],
    quiz: [{
      q: "Dlaczego blat z kamienia mierzy się dopiero po montażu szafek?",
      a: ["Bo kamieniarz jest zajęty", "Bo szablon trzeba zrobić z gotowych korpusów i krzywych ścian", "Bo blat jest za ciężki do przechowania"],
      correct: 1,
      explain: "<b>Szablon z gotowych korpusów.</b> Ściany nigdy nie są idealnie proste, a kamienia nie da się przyciąć na miejscu jak laminatu."
    }]
  },

  /* 6 ------------------------------------------------------------------ */
  {
    id: "kuchnia-agd",
    title: "AGD w zabudowie i oświetlenie podszafkowe",
    lead: "AGD do zabudowy wybierasz przed projektem kuchni, a montujesz razem z szafkami. Okap jest obiegowy, zgodnie z rekuperacją z etapu 10.",
    time: "montaż 1–2 dni z kuchnią", team: "monter kuchni, elektryk do podłączenia płyty",
    facts: [["Płyta indukcyjna", "przewód 5 × 2,5 (etap 08)", "bulb"], ["Taśmy LED", "2700–3000 K, CRI ≥ 90", "bulb"]],
    body: `
      <p>Komplet do naszej kuchni: <strong>płyta indukcyjna 80 cm</strong>, <strong>piekarnik</strong> i <strong>kompakt</strong> (mikrofala albo para) w słupku, <strong>lodówka w zabudowie</strong> (ok. 178 cm), <strong>zmywarka 60 cm</strong> w wyspie, zlew i bateria. Okap obiegowy z filtrem węglowym: wybierasz go razem z AGD, ale jego koszt jest w etapie 13. Wywiew rekuperacji z kuchni jest 2–3 m od płyty (etap 10), więc okap tylko filtruje tłuszcz i zapachy.</p>
      <p><strong>Oświetlenie podszafkowe</strong> to taśma LED 24 V w profilu aluminiowym z mlecznym kloszem, pod górnymi szafkami albo półką. Zasilacz chowa się w szafce albo cokole, a przewód jest z etapu 08. Taśma ma być ciepła (2700–3000 K) i z CRI ≥ 90, żeby jedzenie miało prawdziwe kolory.</p>`,
    cost: { min: 11000, max: 18000, note: "płyta, piekarnik, kompakt, lodówka i zmywarka w zabudowie, zlew granitowy i bateria, LED podszafkowe; bez okapu (etap 13)" },
    tips: [
      "<b>Płyta 80 cm z funkcją bridge.</b> Duża patelnia albo brytfanna na dwóch polach. Przy 400 V sprawdź moc przyłączeniową z PV i pompą ciepła (etapy 08 i 10).",
      "<b>Okap 65–75 cm nad indukcją.</b> Odległość podaje producent okapu. Filtr węglowy wymieniasz co 3–6 miesięcy, a filtr tłuszczowy myjesz w zmywarce co miesiąc.",
      "<b>Lodówka w zabudowie z zawiasami przesuwnymi.</b> Lepiej trzymają ciężkie fronty niż zawiasy „drzwi na drzwi”. Zostaw wentylację z tyłu i w cokole według instrukcji.",
      "<b>Zmywarka pod sterowanie PV.</b> Z etapu 10 masz zarządzanie energią: zmywarka i piekarnik z opóźnionym startem pracują w godzinach produkcji paneli.",
      "<b>LED podszafkowe z czujnikiem albo w scenie.</b> Włącznik w profilu albo scena „gotowanie” w smart home. Taśma ma się zaczynać ok. 5 cm od ściany, żeby nie odbijała się w płytkach."
    ],
    mistakes: [
      "<b>AGD kupione po projekcie kuchni.</b> Nisza ma 56 cm, a piekarnik z promocji wymaga 56,8 i nie wchodzi. Najpierw modele, potem korpusy.",
      "<b>Okap wyciągowy podłączony do rekuperacji.</b> Tłuszcz w kanałach i rozregulowany bilans. Okap jest obiegowy albo ma osobny kanał z nawiewem kompensacyjnym (etap 10).",
      "<b>Taśma LED bez profilu.</b> Widać kropki diod odbite w blacie, a taśma po roku odkleja się od ciepła. Profil z kloszem daje ciągłą linię światła."
    ],
    checklist: [
      "Modele AGD zgodne z projektem nisz i instrukcjami",
      "Płyta podłączona przez elektryka (protokół, gwarancja)",
      "Filtr węglowy w okapie obiegowym, zapas filtrów",
      "Wentylacja lodówki w cokole i z tyłu",
      "LED podszafkowe w profilu, zasilacz dostępny"
    ]
  },

  /* 7 ------------------------------------------------------------------ */
  {
    id: "szafy-garderoba",
    title: "Szafy wnękowe i garderoba",
    lead: "Szafy w przedpokoju i pod skosami robimy na wymiar, bo każdy centymetr ściany i skosu jest inny. Garderobę przy sypialni składamy z gotowych modułów.",
    time: "produkcja 4–8 tyg., montaż 1–2 dni", team: "stolarz",
    facts: [["Szafy wnękowe", "przedpokój ok. 2,4 m + skosy", "house"], ["Garderoba", "ok. 5–6 m²", "house"]],
    body: `
      <p><strong>Przedpokój</strong>: szafa ok. 2,4 m do sufitu, drzwi przesuwne albo uchylne, w środku drążek na kurtki, półki na buty i miejsce na odkurzacz. <strong>Pokoje na poddaszu</strong>: zabudowa pod skosem ze ścianką kolankową 1,0 m (etap 11) na szuflady i półki. Tu mebel gotowy zawsze zostawia dziurę.</p>
      <p><strong>Garderoba</strong> ok. 5–6 m² przy sypialni ma wywiew rekuperacji (etap 10), więc ubrania się nie zaparzają. Układ: drążki na dwóch wysokościach (koszule 100 cm, płaszcze 150 cm), półki 30–40 cm, szuflady na bieliznę i lustro na całą wysokość.</p>`,
    cost: { min: 6000, max: 10000, note: "szafa w przedpokoju i zabudowa pod skosami, na wymiar, z montażem" },
    decision: {
      question: "Z czego garderoba?",
      intro: "Koszt całej garderoby ok. 5–6 m² z wyposażeniem, orientacyjnie.",
      chosen: "moduly",
      options: [
        { id: "moduly", name: "Gotowe moduły korpusowe z sieci meblowej",
          cost: { min: 3000, max: 5000 }, time: "1–2 tyg.", note: "korpusy, drążki, szuflady, montaż sam albo z ekipą",
          pros: ["Tanio i szybko", "Łatwo przebudować, gdy zmienią się potrzeby", "Duży wybór wkładów: szuflady, wysuwane kosze, lustra"],
          cons: ["Szczeliny przy ścianach do zamaskowania listwą", "Wymiary w krokach co 25–50 cm"],
          why: "Garderoba to osobne pomieszczenie bez skosów, więc moduły pasują dobrze. Różnicy względem stolarza prawie nie widać." },
        { id: "wymiar", name: "Garderoba na wymiar z płyty",
          cost: { min: 7000, max: 11000 }, time: "4–8 tyg.", note: "od stolarza",
          pros: ["Wypełnia całą ścianę do sufitu", "Spójna z szafami w domu"],
          cons: ["Ok. 2 razy drożej", "Zmiana układu oznacza nowe meble"],
          why: "Gdy garderoba ma skosy albo nietypowy kształt. Wtedy moduły zostawiają za dużo pustego miejsca." },
        { id: "system", name: "System otwarty na szynach (aluminium lub druciany)",
          cost: { min: 2000, max: 3500 }, time: "kilka dni", note: "szyny na ścianie, wieszaki, kosze",
          pros: ["Najtaniej, montaż w jeden dzień", "Lekki wygląd, dobra wentylacja ubrań"],
          cons: ["Wszystko na widoku, więcej kurzu", "Mniej szuflad i schowków"],
          why: "Dobre na start albo do garderoby dziecięcej. Szyny można potem wymienić na moduły." }
      ]
    },
    tips: [
      "<b>Szafy do sufitu.</b> Szafa do 2,1 m zostawia pas na kurz i pudła. Zabudowa do sufitu z maskownicą 5–10 cm wygląda jak ściana.",
      "<b>Drzwi przesuwne: głębokość 65 cm.</b> Drzwi zabierają ok. 8–10 cm, więc drążek na wieszaki potrzebuje szafy 60–65 cm. Uchylne mieszczą się w 58–60 cm, ale trzeba miejsca na otwarcie.",
      "<b>Pod skosem: szuflady, nie drzwiczki.</b> W niskiej części skosu (ścianka kolankowa 1,0 m) szuflady 50–60 cm głębokości wyciągają wszystko na zewnątrz.",
      "<b>Oświetlenie w szafie z czujnikiem.</b> Taśma LED w profilu przy drzwiach albo w półce, zasilanie z gniazda w szafie albo bateryjne lampki z czujnikiem ruchu.",
      "<b>Nie zasłaniaj rozdzielaczy i rewizji.</b> Szafa przy rozdzielaczu podłogówki albo przy szafce RACK musi mieć wyjmowany tył albo drzwiczki rewizyjne."
    ],
    mistakes: [
      "<b>Szafa przed nawiewem albo wywiewem rekuperacji.</b> Zakryta kratka to rozregulowany bilans powietrza. Kratki muszą zostać na widoku.",
      "<b>Szafa na zimnej ścianie zewnętrznej bez szczeliny.</b> W kącie za szafą bez przepływu powietrza może pojawić się wilgoć. Zostaw 2–3 cm szczeliny i otwory wentylacyjne w cokole.",
      "<b>Za płytka garderoba.</b> Szafa 50 cm nie mieści wieszaka z kurtką. Wieszak potrzebuje ok. 55–60 cm."
    ],
    checklist: [
      "Szafy pomierzone po tynkach i podłogach",
      "Kratki rekuperacji i rewizje dostępne",
      "Głębokość szaf min. 60 cm na wieszaki",
      "Szafy wysokie przykręcone do ściany"
    ]
  },

  /* 8 ------------------------------------------------------------------ */
  {
    id: "salon",
    title: "Salon: narożnik, kominek, telewizor i dywan",
    lead: "Salon dzieli się na strefy: rozmowa przy kominku, oglądanie i przejście do tarasu. Meble ustawiasz tak, żeby te strefy się nie przecinały.",
    time: "dostawa sofy 6–12 tyg.", team: "ty, dostawca mebli",
    facts: [["Odległość od TV 65”", "ok. 2,0–2,6 m", "house"], ["Przejście do tarasu", "min. 90 cm", "check"]],
    body: `
      <p>Kominek (wkład zamknięty z etapu 09, obudowa w etapie 13) to naturalny środek salonu. <strong>Narożnik</strong> ustaw przodem do kominka, a plecami do kuchni, żeby wydzielić strefę bez ścianek. Przejście od kuchni do drzwi tarasowych (HS z etapu 07) zostaw wolne, min. 90 cm.</p>
      <p><strong>Stolik kawowy</strong> stoi ok. 40–45 cm od sofy, a jego wysokość to mniej więcej wysokość siedziska. <strong>Dywan</strong> ma być na tyle duży, żeby przednie nogi sofy i foteli na nim stały: w naszym salonie to zwykle 200 × 300 cm.</p>
      <p><strong>Telewizor nad kominkiem</strong> jak na zdjęciu inspiracji jest możliwy, ale pod warunkami: obudowa kominka musi mieć izolację i kratki odprowadzające ciepło, temperatura ściany za telewizorem nie może przekraczać dopuszczalnej w instrukcji TV (zwykle ok. 35–40°C), a środek ekranu powinien być jak najniżej, najlepiej do ok. 120–130 cm.</p>`,
    cost: { min: 7000, max: 12000, note: "narożnik z tkaniną łatwoczyszczącą, stolik, dywan 200 × 300, komoda lub regał; bez telewizora" },
    decision: {
      question: "Gdzie telewizor?",
      intro: "Na zdjęciu inspiracji telewizor wisi nad kominkiem. Koszt to uchwyt, przepusty i ewentualnie dodatkowa zabudowa.",
      chosen: "nad-kominkiem",
      options: [
        { id: "nad-kominkiem", name: "Nad kominkiem, z warunkami",
          cost: { min: 300, max: 1200 }, note: "uchwyt uchylny, rura na kable w obudowie (zaplanowane w etapach 08 i 13)",
          pros: ["Jeden punkt skupienia w salonie, jak na zdjęciu", "Wolna druga ściana na przeszklenie lub regał"],
          cons: ["Ekran wyżej niż na wysokości oczu", "Wymaga chłodnej strefy w obudowie i pomiaru temperatury przy paleniu", "Nie da się łatwo przestawić"],
          why: "Zgodne z inspiracją. Działa, gdy obudowa kominka jest niska (otwór paleniska nisko, gzyms odcinający ciepło), a uchwyt pochyla ekran o kilka stopni w dół." },
        { id: "obok", name: "Na ścianie obok kominka",
          cost: { min: 200, max: 600 }, note: "uchwyt stały, gniazdo i przepust z etapu 08",
          pros: ["Ekran na wysokości oczu (środek ok. 100–110 cm)", "Brak problemu z temperaturą"],
          cons: ["Dwa punkty skupienia: kominek i ekran", "Narożnik trzeba ustawić pod kątem albo wybrać jedno"],
          why: "Najzdrowsze dla karku. Wybierz, jeśli dużo oglądacie albo obudowa kominka jest wysoka." },
        { id: "projektor", name: "Projektor i ekran rozwijany",
          cost: { min: 3500, max: 8000 }, note: "projektor laserowy krótkoogniskowy + ekran",
          pros: ["Duży obraz, gdy chcesz, czysta ściana, gdy nie", "Nad kominkiem tylko ekran w zabudowie sufitu"],
          cons: ["Przy dużych przeszkleniach w dzień słaby obraz (rolety z etapu 07 pomagają)", "Wyższy koszt"],
          why: "Dla kinomanów, którzy chcą zachować minimalistyczny salon. W dzień i tak potrzebny jest zwykły ekran albo rolety." }
      ]
    },
    tips: [
      "<b>Tkanina hydrofobowa, min. 50–100 tys. cykli Martindale.</b> Z dziećmi i psem to ważniejsze niż kolor. Zdejmowane pokrowce to plus.",
      "<b>Głębokość siedziska 55–60 cm.</b> Głębsza sofa jest do leżenia, ale niższe osoby nie oprą pleców bez poduszek. Usiądź na niej w salonie, zanim zamówisz.",
      "<b>Przed zakupem nakreśl sofę taśmą na podłodze.</b> 3,2 × 1,8 m narożnika na podłodze wygląda zupełnie inaczej niż w sklepie.",
      "<b>Telewizor: zmierz temperaturę przed montażem.</b> Rozpal kominek na 2–3 godziny i zmierz ścianę termometrem na podczerwień w miejscu TV. Ponad dopuszczalną z instrukcji? Telewizor idzie obok.",
      "<b>Kable w rurze, nie w listwie.</b> Przepust z puszki za telewizorem do szafki RTV (rura Ø32–40 w obudowie) robisz przed zamknięciem obudowy kominka (etap 13)."
    ],
    mistakes: [
      "<b>Sofa tyłem do ogrodu, wszystkie meble pod ścianami.</b> Środek salonu pusty jak sala gimnastyczna, a z kanapy nie widać ogrodu. Meble „na wyspie” tworzą strefę.",
      "<b>Mały dywan pod samym stolikiem.</b> Dywan 120 × 170 przy narożniku 3 m wygląda jak wycieraczka. Przednie nogi mebli mają stać na dywanie.",
      "<b>Telewizor wysoko nad gorącą obudową.</b> Ból karku i elektronika w 50°C. To szybki koniec gwarancji i oglądania."
    ],
    checklist: [
      "Przejście do tarasu min. 90 cm",
      "Sofa sprawdzona na siedząco i taśmą na podłodze",
      "Temperatura ściany w miejscu TV zmierzona przy paleniu",
      "Przepust na kable za telewizorem do szafki RTV",
      "Dywan, na którym stoją przednie nogi mebli"
    ],
    quiz: [{
      q: "Pod jakim warunkiem telewizor może wisieć nad kominkiem?",
      a: ["Zawsze, jeśli kominek jest zamknięty", "Gdy ściana w tym miejscu przy paleniu nie przekracza temperatury z instrukcji TV, a ekran nie wisi za wysoko", "Tylko przy kominku elektrycznym"],
      correct: 1,
      explain: "<b>Liczy się temperatura i wysokość.</b> Obudowa musi odprowadzać ciepło, a środek ekranu powinien być jak najniżej. Sprawdź to pomiarem przy paleniu."
    }]
  },

  /* 9 ------------------------------------------------------------------ */
  {
    id: "jadalnia",
    title: "Jadalnia przy przeszkleniu",
    lead: "Stół przy dużym przeszkleniu to najlepsze miejsce w domu: światło, widok na ogród, blisko kuchni. Trzeba tylko zostawić miejsce na krzesła i przejście.",
    time: "dostawa 2–8 tyg.", team: "ty",
    facts: [["Stół na 6–8 osób", "ok. 100 × 200 cm (rozkładany)", "users"], ["Wokół stołu", "min. 80–90 cm", "check"]],
    body: `
      <p>Na naszą rodzinę i gości sprawdza się <strong>stół ok. 100 × 200 cm, rozkładany do 260–280 cm</strong>. Na osobę liczy się ok. 60 cm szerokości blatu. Stół stoi między wyspą a przeszkleniem, równolegle do okna.</p>
      <p>Wokół stołu zostaw <strong>min. 80–90 cm</strong> do ściany lub okna, żeby odsunąć krzesło i usiąść, a od strony przejścia 100–120 cm. Nad stołem lampa wisząca na wysokości ok. 65–75 cm nad blatem (krok „Oświetlenie dekoracyjne”). Punkt świetlny nad środkiem stołu jest z etapu 08.</p>`,
    cost: { min: 4000, max: 8000, note: "stół rozkładany z litego lub fornirowanego dębu, 6–8 krzeseł" },
    tips: [
      "<b>Blat dąb olejowany albo spiek.</b> Olej daje się odświeżać po latach, spiek przetrwa dzieci i flamastry. Lakier na blacie stołu po kilku latach jest porysowany i trudno go naprawić.",
      "<b>Krzesła z oparciem, siedzisko ok. 45–47 cm.</b> Między siedziskiem a blatem ok. 28–32 cm na kolana. Sprawdź, czy krzesła wchodzą pod stół między nogami stołu.",
      "<b>Stół w osi lampy.</b> Ustaw stół tak, jak pokazuje punkt świetlny z etapu 08, albo zaplanuj przesunięcie lampy na haku.",
      "<b>Słońce z południa.</b> Duże przeszklenie nagrzewa blat i płowieje tkaniny krzeseł. Rolety zewnętrzne (etap 07) w scenie „lato” chronią w południe."
    ],
    mistakes: [
      "<b>Stół za blisko przeszklenia.</b> Krzesło uderza w szybę HS albo blokuje drzwi tarasowe. Zostaw przynajmniej 80–90 cm.",
      "<b>Okrągły stół w długiej strefie.</b> Okrągły Ø120 mieści 4–5 osób i zostawia puste rogi. Przy długim przeszkleniu lepszy jest prostokątny albo owalny.",
      "<b>Nogi stołu w miejscu siedzenia.</b> Stół z czterema nogami w rogach i krzesła na końcach to kolana o drewno. Przed zakupem usiądź przy nim na rozłożonym."
    ],
    checklist: [
      "Stół na 6–8 osób z możliwością rozłożenia",
      "Wokół stołu min. 80–90 cm, przejście 100–120 cm",
      "Środek stołu pod punktem świetlnym",
      "Krzesła sprawdzone przy stole na siedząco"
    ],
    quiz: [{
      q: "Ile miejsca na jedną osobę przy stole i wokół stołu?",
      a: ["Ok. 40 cm blatu i 50 cm wokół", "Ok. 60 cm blatu i min. 80–90 cm wokół", "Ok. 100 cm blatu i 2 m wokół"],
      correct: 1,
      explain: "<b>60 cm blatu i 80–90 cm wokół.</b> Tyle trzeba, żeby swobodnie jeść i odsunąć krzesło. Przy przejściu za krzesłami zostaw 100–120 cm."
    }]
  },

  /* 10 ----------------------------------------------------------------- */
  {
    id: "sypialnia",
    title: "Sypialnia: łóżko tapicerowane i ściana z oświetleniem",
    lead: "Sypialnia ma być cicha, ciemna i prosta. Łóżko tapicerowane, za nim miękka ściana z ukrytym światłem, po bokach szafki nocne. Szafy są w garderobie obok.",
    time: "łóżko 4–8 tyg., ściana 3–6 tyg.", team: "ty, tapicer, elektryk do podłączenia LED",
    facts: [["Łóżko", "180 × 200 cm", "house"], ["Przejście przy łóżku", "min. 60–70 cm", "check"]],
    body: `
      <p><strong>Łóżko tapicerowane 180 × 200 cm</strong> z pojemnikiem albo na nóżkach (łatwiej odkurzać). Materac wybierasz osobno i przed zakupem testujesz na leżąco min. 10–15 minut. Po bokach łóżka zostaw <strong>min. 60–70 cm</strong>, a przy nogach ok. 70–90 cm.</p>
      <p><strong>Ściana tapicerowana</strong> za łóżkiem to panele z pianki i tkaniny na płycie, mocowane do ściany, często od podłogi do sufitu albo do wysokości ok. 120–140 cm. Nad panelami albo za nimi taśma LED w profilu daje miękkie, pośrednie światło do czytania i „nocne” wejście bez zapalania sufitu. Przewód do LED i włączniki przy łóżku są z etapu 08.</p>
      <p>Rolety zewnętrzne (etap 07) zaciemniają sypialnię, więc zasłony mogą być lekkie i dekoracyjne.</p>`,
    cost: { min: 4000, max: 8000, note: "łóżko tapicerowane 180 × 200, materac, 2 szafki nocne" },
    decision: {
      question: "Jak wykończyć ścianę za łóżkiem?",
      intro: "Koszt ściany ok. 3,6 × 1,4–2,6 m z oświetleniem LED, orientacyjnie.",
      chosen: "tapicer",
      options: [
        { id: "tapicer", name: "Ściana tapicerowana na wymiar z LED",
          cost: { min: 2500, max: 4500 }, time: "3–6 tyg.", note: "tapicer, panele na płycie, profil LED",
          pros: ["Dopasowana do szerokości ściany i gniazd", "Dobra akustyka, ciepły efekt jak w hotelu", "Dowolna tkanina i podział paneli"],
          cons: ["Panele trzeba czyścić odkurzaczem i środkiem do tapicerki", "Gniazda i włączniki trzeba przenieść na lico paneli"],
          why: "Zgodne z inspiracją, a koszt jest umiarkowany. Tapicer docina panele z otworami na gniazda i kinkiety." },
        { id: "panele", name: "Gotowe panele tapicerowane klejone",
          cost: { min: 1200, max: 2500 }, time: "1–2 tyg.", note: "moduły np. 30 × 60 cm",
          pros: ["Taniej, montaż samodzielnie", "Łatwo wymienić jeden panel"],
          cons: ["Wymiary nie zawsze pasują do ściany", "Docinanie przy gniazdach jest trudne"],
          why: "Gdy budżet jest napięty. Wybierz panele mocowane na klej montażowy albo rzep, nie na taśmę." },
        { id: "zaglowek", name: "Sam wysoki zagłówek łóżka",
          cost: { min: 0, max: 0 }, note: "w cenie łóżka",
          pros: ["Bez dopłaty", "Łatwo przestawić łóżko"],
          cons: ["Bez efektu ściany", "Światło z kinkietów zamiast z LED za panelami"],
          why: "Dobre na start. Ścianę tapicerowaną można dodać później, jeśli przewód do LED jest już w ścianie." }
      ]
    },
    tips: [
      "<b>Łóżko na nóżkach 10–15 cm albo z pojemnikiem.</b> Robot sprzątający potrzebuje ok. 10 cm prześwitu. Pojemnik to schowek na pościel.",
      "<b>Materac twardości dopasowanej do wagi.</b> Dla dwóch osób o różnej wadze dwa materace 90 × 200 we wspólnym pokrowcu albo jeden ze strefami.",
      "<b>Kinkiety do czytania na wysokości ok. 110–130 cm nad podłogą.</b> Z ruchomym ramieniem i osobnym włącznikiem przy każdej stronie łóżka.",
      "<b>LED ściany na ściemniaczu, 2700 K.</b> Wieczorem 10–20% jasności. Scena „noc” w smart home zapala samą taśmę przy podłodze.",
      "<b>Nawiew rekuperacji nie nad głową.</b> Łóżko ustaw tak, żeby nawiew z etapu 10 nie dmuchał prosto na poduszkę."
    ],
    mistakes: [
      "<b>Łóżko za blisko szafy.</b> Przy 40 cm przejścia nie otworzysz drzwi szafy ani szuflad. Szafy są w garderobie, w sypialni zostaw tylko komodę.",
      "<b>Telewizor naprzeciw łóżka zamiast okna.</b> To zły nawyk przed snem. Jeśli musi być, wybierz mniejszy ekran na komodzie, nie zabudowę na całą ścianę.",
      "<b>LED na zimno, 4000 K.</b> W sypialni wygląda jak szpital. Do sypialni wybieraj 2700 K."
    ],
    checklist: [
      "Przejścia przy łóżku min. 60–70 cm",
      "Materac przetestowany na leżąco",
      "Gniazda i włączniki wyprowadzone na lico paneli",
      "LED za panelami na ściemniaczu",
      "Łóżko poza strumieniem nawiewu"
    ]
  },

  /* 11 ----------------------------------------------------------------- */
  {
    id: "pokoj-dzieciecy",
    title: "Pokój dziecięcy: rośnie z dzieckiem, jest bezpieczny",
    lead: "Pokój dziecka zmienia się co 3–4 lata: łóżeczko, łóżko, biurko, regał na książki. Kupuj meble, które rosną albo łatwo je wymienić, i przykręcaj do ściany wszystko, co wysokie.",
    time: "1–2 tyg.", team: "ty",
    facts: [["Mocowanie do ściany", "każdy regał i komoda", "shield"], ["Biurko rosnące", "ok. 52–76 cm", "check"]],
    body: `
      <p>Baza na lata: <strong>łóżko 90 × 200</strong> (albo przedłużane, rosnące), <strong>biurko z regulacją wysokości</strong> i krzesło rosnące, <strong>szafa lub regał</strong> i dużo pustej podłogi do zabawy. Meble neutralne w kolorze, a kolor dają ściana, dywan i tekstylia, które łatwo zmienić.</p>
      <p><strong>Bezpieczeństwo</strong>: każdy regał, komoda i szafa przykręcone do ściany zestawem przeciw przewróceniu, łóżeczko i łóżko piętrowe zgodne z normą (oznaczenie na meblu i w instrukcji), brak sznurków od rolet i zasłon w zasięgu (rolety zewnętrzne z etapu 07 są na napęd, więc bez sznurków), gniazda z przesłonami, blokady szuflad dla maluchów, okna z klamką z kluczykiem albo blokadą rozwierania.</p>`,
    cost: { min: 3500, max: 7000, note: "łóżko, materac, biurko i krzesło z regulacją, szafa lub regał, kocyk i lampka" },
    tips: [
      "<b>Mocowanie do ściany do ceramiki: kołek i wkręt min. 6 mm.</b> Zestawy dołączane do mebli mają często kołki do betonu. Do pustaka ceramicznego (etap 05) użyj kołków do pustaków, a do płyty g-k kołków do płyt.",
      "<b>Łóżko piętrowe dopiero od ok. 6 lat na górze.</b> Barierka z obu stron, drabinka stabilna, odległość od sufitu min. ok. 75 cm na siedzącego dorosłego, który czyta bajkę.",
      "<b>Biurko przy oknie, światło z boku.</b> Dla praworęcznych okno po lewej. Lampka na biurko ok. 4000 K, CRI ≥ 90, do nauki.",
      "<b>Dywan antypoślizgowy, łatwy do prania.</b> Dywanik 120 × 170 cm, który możesz wyprać w pralce, jest lepszy niż wełniany 200 × 300.",
      "<b>Pokój na poddaszu: nawiew i rolety.</b> Latem rolety zewnętrzne zamykasz w dzień, a nawiew rekuperacji (etap 10) daje świeże powietrze bez otwierania okna na noc."
    ],
    mistakes: [
      "<b>Komoda nieprzykręcona do ściany.</b> Dziecko wspina się po szufladach i mebel się przewraca. To jeden z najczęstszych groźnych wypadków w domu.",
      "<b>Tematyczny pokój na wymiar (auto-łóżko, księżniczka).</b> Po 3 latach dziecko go nie chce, a mebla nie da się sprzedać. Motyw dawaj w tekstyliach i naklejkach.",
      "<b>Łóżko pod oknem dachowym albo przy kaloryferze.</b> Przeciąg zimą, słońce w twarz latem. U nas jest podłogówka, ale okno dachowe nad głową nadal nie jest dobrym miejscem."
    ],
    formal: [
      ["Łóżeczka dziecięce", "PN-EN 716; sprawdź oznaczenie na produkcie i w instrukcji"],
      ["Łóżka piętrowe", "PN-EN 747; górne miejsce zwykle od 6 lat"],
      ["Zabawki i meble dla dzieci", "znak CE na zabawkach (EN 71); przy meblach sprawdź instrukcję i deklarację producenta"]
    ],
    checklist: [
      "Wszystkie regały, komody i szafy przykręcone do ściany",
      "Łóżko i łóżeczko z oznaczeniem normy",
      "Brak sznurków od rolet i zasłon w zasięgu dziecka",
      "Blokady szuflad i okien dla małego dziecka",
      "Biurko i krzesło z regulacją wysokości"
    ],
    quiz: [{
      q: "Co jest najważniejsze w pokoju małego dziecka?",
      a: ["Tematyczne meble na wymiar", "Przykręcenie do ściany wszystkich wysokich mebli i brak sznurków w zasięgu", "Ciemne kolory ścian"],
      correct: 1,
      explain: "<b>Przewrócony mebel i pętla ze sznurka to realne zagrożenia.</b> Mocowanie do ściany i rolety bez sznurków to tani i najważniejszy element pokoju dziecka."
    }]
  },

  /* 12 ----------------------------------------------------------------- */
  {
    id: "silownia",
    title: "Siłownia domowa: sprzęt, lustro, podłoga",
    lead: "Domowa siłownia działa, gdy jest gotowa do treningu w minutę: mata na podłodze, lustro, sprzęt zawsze na swoim miejscu i świeże powietrze z rekuperacji.",
    time: "1–2 tyg.", team: "ty, szklarz do lustra",
    facts: [["Podłoga gumowa", "15–20 mm", "layers"], ["Lustro", "ok. 2,0 × 1,0 m", "house"]],
    body: `
      <p>Na wykończoną podłogę z etapu 13 kładziesz <strong>maty gumowe 15–20 mm</strong> (płyty albo puzzle z granulatu), w strefie wolnych ciężarów nawet 30 mm. Mata chroni podłogę, wycisza i amortyzuje upadek hantli. Na ścianie <strong>lustro ok. 2,0 × 1,0 m</strong> od ok. 30–40 cm nad podłogą, z folią bezpieczną z tyłu (przy pęknięciu nie rozpryskuje się).</p>
      <p>Nawiew rekuperacji (etap 10) w siłowni jest, więc zimą nie trzeba otwierać okna. Latem przyda się wentylator stojący. Gniazdo do bieżni albo rowerka powinno być na osobnym obwodzie, jeśli urządzenie ma silnik (etap 08).</p>`,
    cost: { min: 2500, max: 4500, note: "maty gumowe ok. 12–15 m², lustro z montażem, wieszak na sprzęt, wentylator" },
    decision: {
      question: "Jaki sprzęt na start?",
      intro: "Koszt zestawu sprzętu, orientacyjnie, nowy sprzęt dobrej jakości.",
      chosen: "wolne",
      options: [
        { id: "wolne", name: "Wolne ciężary: hantle regulowane, ławka, drążek, gumy",
          cost: { min: 3000, max: 6000 }, note: "zajmuje ok. 2 × 2 m",
          pros: ["Trening całego ciała w małym miejscu", "Hantle regulowane zastępują cały stojak", "Łatwo dokupić sprzęt"],
          cons: ["Trzeba znać technikę", "Bez cardio w zimie"],
          why: "Największa korzyść za najmniejsze pieniądze i miejsce. Cardio robisz w ogrodzie albo na rowerze, a stojak dokupisz, gdy będziesz trenować regularnie." },
        { id: "klatka", name: "Klatka (rack) ze sztangą i talerzami",
          cost: { min: 8000, max: 15000 }, note: "ok. 2,5 × 2 m, wysokość ok. 2,2 m",
          pros: ["Bezpieczny trening ciężkich ćwiczeń bez asekuracji", "Wszystko w jednym"],
          cons: ["Ciężar 300–500 kg na małej powierzchni", "Potrzebna wysokość i gruba mata"],
          why: "Dla osób trenujących siłowo. Na poddaszu albo stropie sprawdź obciążenie u konstruktora, na parterze na płycie na gruncie nie ma problemu." },
        { id: "cardio", name: "Bieżnia lub rowerek + mata",
          cost: { min: 4000, max: 10000 }, note: "urządzenie z silnikiem lub magnetyczne",
          pros: ["Cardio przy każdej pogodzie", "Łatwe dla całej rodziny"],
          cons: ["Duże urządzenie na jedno ćwiczenie", "Bieżnia drga i hałasuje na stropie"],
          why: "Gdy głównym celem jest kondycja. Bieżnię stawiaj na parterze, na grubej macie." }
      ]
    },
    tips: [
      "<b>Lustro na kleju do luster + listwa podporowa.</b> Zwykły klej silikonowy niszczy warstwę lustrzaną. Dolna krawędź na listwie albo uchwycie, żeby lustro nie zjechało.",
      "<b>Mata a podłogówka.</b> Mata 15–20 mm trochę izoluje podłogówkę w tym pokoju, ale siłownia nie musi być ciepła. Ustaw tam niższą temperaturę.",
      "<b>Wieszak na ścianę na gumy, drążek i maty.</b> Sprzęt na podłodze to potknięcia i brak miejsca. Ściana z hakami za 200–500 zł robi porządek.",
      "<b>Ciężki sprzęt na parterze.</b> Płyta i posadzka na gruncie przenoszą wszystko. Na stropie przy ciężarach powyżej ok. 200–300 kg w jednym miejscu zapytaj konstruktora."
    ],
    mistakes: [
      "<b>Bieżnia na stropie bez maty.</b> Drgania przenoszą się na cały dom, w sypialni pod spodem słychać każdy krok.",
      "<b>Lustro bez folii bezpiecznej.</b> Upuszczony hantel albo piłka i rozprysk szkła. Folia od tyłu kosztuje kilkadziesiąt złotych.",
      "<b>Kupno całego sprzętu na start.</b> Atlas, bieżnia i klatka w pierwszym miesiącu, a po pół roku wieszak na pranie. Zacznij od hantli, ławki i drążka."
    ],
    checklist: [
      "Maty gumowe na całej strefie treningu",
      "Lustro na kleju do luster, z folią bezpieczną",
      "Sprzęt na wieszakach, wolna podłoga",
      "Gniazdo do urządzeń z silnikiem na osobnym obwodzie"
    ]
  },

  /* 13 ----------------------------------------------------------------- */
  {
    id: "lazienka-meble",
    title: "Meble łazienkowe",
    lead: "W łazienkach z etapu 13 masz już płytki, wannę wolnostojącą, ceramikę, lustra i baterie. Teraz dochodzą szafki z blatami pod umywalki i schowki, które muszą znieść wilgoć.",
    time: "montaż 1 dzień na łazienkę", team: "monter, hydraulik do podłączenia umywalki",
    facts: [["Łazienki", "poddasze + parter, 3 umywalki", "house"], ["Krawędź umywalki", "ok. 85–90 cm", "check"]],
    body: `
      <p>W <strong>łazience na poddaszu</strong> z wanną wolnostojącą: szafka z blatem pod dwie umywalki nablatowe 120–140 cm i słupek na ręczniki i kosmetyki. W <strong>łazience na parterze</strong>: szafka z blatem 60–80 cm pod jedną umywalkę i półka. Umywalki nablatowe, lustra LED, baterie, wanna i miski WC są w etapie 13, a odpływy i podejścia z etapu 09.</p>
      <p>Meble łazienkowe zawsze <strong>podwieszane</strong> 15–25 cm nad podłogą: łatwiej sprzątać, nie stoją w wodzie po kąpieli. Materiał: MDF lakierowany, płyta wilgocioodporna z obrzeżem ABS albo fornir lakierowany. Szuflady pod umywalką z wycięciem na syfon.</p>`,
    cost: { min: 3000, max: 6500, note: "2 szafki podwieszane z blatami pod 3 umywalki nablatowe, słupek, haczyki i półki; ceramika, lustra LED i baterie w etapie 13" },
    tips: [
      "<b>Szafka pod lustrem z etapu 13.</b> Szerokość szafki i blatu dobierz do lustra LED i rozstawu umywalek, a górną krawędź blatu tak, żeby krawędź umywalki nablatowej była na ok. 85–90 cm.",
      "<b>Szafka podumywalkowa z szufladami U.</b> Szuflada w kształcie „U” omija syfon. Syfon płaski albo podścienny daje więcej miejsca.",
      "<b>Umywalka nablatowa dodaje 12–15 cm.</b> Krawędź umywalki ok. 85–90 cm, więc blat szafki wypada ok. 72–78 cm nad podłogą. Standard 80–82 cm z umywalką na wierzchu to za wysoko.",
      "<b>Słupek przy wannie na ręczniki.</b> Wanna wolnostojąca nie ma półki, więc ręcznik i kosmetyki muszą być w zasięgu ręki, ok. 50–80 cm od wanny.",
      "<b>Szczeliny wentylacyjne w szafkach.</b> W szafce zamkniętej szczelnie przy podłogówce i wilgoci po kąpieli kosmetyki i ręczniki pachną stęchlizną."
    ],
    mistakes: [
      "<b>Zwykła płyta wiórowa w łazience.</b> Na krawędziach przy umywalce puchnie po kilku miesiącach. Tylko płyta wilgocioodporna z dobrym obrzeżem albo MDF lakierowany.",
      "<b>Szafka stojąca na płytkach.</b> Woda wsiąka w cokół, a pod szafką nie da się umyć podłogi.",
      "<b>Lustro w strefie zachlapania bez stopnia IP.</b> Przy wannie i prysznicu obowiązują strefy ochronne dla urządzeń elektrycznych. Sprawdź z elektrykiem."
    ],
    checklist: [
      "Szafki podwieszane 15–25 cm nad podłogą",
      "Materiał wilgocioodporny, obrzeża szczelne",
      "Blat szafki dopasowany do wysokości umywalek nablatowych",
      "Szuflady omijają syfon",
      "Słupek z ręcznikami blisko wanny"
    ]
  },

  /* 14 ----------------------------------------------------------------- */
  {
    id: "oswietlenie-dekoracyjne",
    title: "Oświetlenie dekoracyjne i sceny",
    lead: "Oczka i taśmy z etapu 08 dają światło ogólne. Lampy wiszące nad wyspą i stołem, kinkiety i lampy stojące robią klimat i strefy. Na koniec łączysz wszystko w sceny.",
    time: "1–3 dni montażu", team: "elektryk",
    facts: [["Nad wyspą i stołem", "ok. 65–75 cm nad blatem", "bulb"], ["Barwa światła", "2700–3000 K", "bulb"]],
    body: `
      <p>Światło w domu ma trzy warstwy: <strong>ogólne</strong> (oczka i taśmy z etapu 08), <strong>zadaniowe</strong> (LED podszafkowe, lampka do czytania) i <strong>dekoracyjne</strong>. W tym kroku kupujesz warstwę dekoracyjną: <strong>2–3 lampy wiszące nad wyspą</strong> (albo jedną belkę), <strong>lampę nad stołem</strong>, <strong>kinkiety</strong> w salonie, sypialni i przy schodach oraz 1–2 lampy stojące przy narożniku.</p>
      <p>Lampy nad wyspą wieszasz <strong>ok. 65–75 cm nad blatem</strong>, co ok. 60–80 cm, symetrycznie do wyspy, nie do sufitu. Nad stołem podobnie, a szerokość lampy to ok. 1/2–2/3 szerokości stołu. Lampy dobieraj z jednej rodziny albo z jednego metalu.</p>
      <p><strong>Sceny</strong> w smart home (etap 10) łączą obwody: „gotowanie” (sufit + podszafkowe 100%), „kolacja” (lampa nad stołem 60%, wyspa 30%, reszta zgaszona), „film” (taśmy 10%, kinkiety 20%), „noc” (taśma przy podłodze 5%).</p>`,
    cost: { min: 4000, max: 9000, note: "lampy wiszące, kinkiety, lampy stojące, źródła LED, montaż" },
    tips: [
      "<b>Lampy ściemnialne i źródła zgodne ze ściemniaczem.</b> Przy ściemniaczach z etapu 08 kupuj źródła z napisem „dimmable” i sprawdź ich zgodność z modułem smart home. Inaczej lampy migają.",
      "<b>CRI ≥ 90, 2700 K w strefie dziennej.</b> Przy stole i wyspie jedzenie i twarze mają naturalny kolor. Zimniejsze 4000 K tylko w garażu i pomieszczeniu technicznym.",
      "<b>Hak w stropie, nie w płycie g-k.</b> Lampa wisząca kilka kg na samej płycie to ryzyko. Na poddaszu w suficie g-k montaż do profilu albo wzmocnienia (zapytaj ekipę z etapu 11).",
      "<b>Kable lamp wiszących regulowane.</b> Dobierz lampy z regulacją długości przewodu, bo wysokość ustalasz dopiero przy gotowej wyspie i stole.",
      "<b>Kinkiety ok. 160–180 cm w salonie, 110–130 cm przy łóżku.</b> Światło odbite od ściany daje miękki efekt bez oślepiania."
    ],
    mistakes: [
      "<b>Lampy za wysoko nad wyspą.</b> 100 cm nad blatem świecą w oczy osobom siedzącym w salonie i nie oświetlają blatu. 65–75 cm to dobra wysokość.",
      "<b>Lampa nad stołem w punkcie, nie nad stołem.</b> Stół przesunięty o 50 cm, a lampa wisi krzywo. Przesuń stół albo użyj haka przesuwnego.",
      "<b>Wszystkie lampy z różnych rodzin.</b> Złoto nad stołem, czerń nad wyspą, chrom w kinkietach. Jeden metal na cały parter wygląda spokojniej."
    ],
    checklist: [
      "Lampy nad wyspą 65–75 cm nad blatem, symetrycznie",
      "Lampa nad stołem w osi stołu",
      "Źródła ściemnialne zgodne ze ściemniaczami",
      "Sceny w smart home: gotowanie, kolacja, film, noc"
    ],
    quiz: [{
      q: "Na jakiej wysokości nad wyspą zawiesić lampy?",
      a: ["Ok. 30–40 cm", "Ok. 65–75 cm", "Ok. 120 cm"],
      correct: 1,
      explain: "<b>65–75 cm nad blatem.</b> Lampa oświetla blat, nie razi stojących przy wyspie i nie zasłania widoku na salon."
    }]
  },

  /* 15 ----------------------------------------------------------------- */
  {
    id: "tekstylia-rosliny",
    title: "Zasłony, szyny sufitowe, tekstylia i rośliny",
    lead: "Zasłony na szynach sufitowych od ściany do ściany, dywany, poduszki i rośliny ocieplają wnętrze, wyciszają pogłos i robią z domu dom.",
    time: "zasłony 3–4 tyg. po pomiarze", team: "ty, krawcowa lub studio zasłon",
    facts: [["Zasłony", "1–2 cm nad podłogą", "check"], ["Szyna", "15–25 cm szersza niż okno z każdej strony", "layers"]],
    body: `
      <p><strong>Szyny sufitowe</strong> montujesz do stropu albo do wzmocnienia w suficie g-k, ok. 10–15 cm od okna. Najładniej wyglądają we wnęce sufitowej albo listwie przy suficie (do zaplanowania przy płytach g-k w etapie 11). Zasłona od sufitu do podłogi optycznie podnosi pokój. Szyna wychodzi <strong>15–25 cm poza okno z każdej strony</strong>, żeby odsunięta zasłona nie zasłaniała szkła.</p>
      <p>Rolety zewnętrzne z etapu 07 zaciemniają i chronią przed słońcem, więc zasłony w salonie i sypialni są głównie dekoracyjne i akustyczne. W salonie z przeszkleniem najlepiej sprawdza się <strong>zasłona typu wave</strong> (równe fale) z lnu lub tkaniny lnopodobnej i lekka firana.</p>
      <p><strong>Rośliny</strong>: kilka dużych roślin przy przeszkleniu (np. monstera, figowiec, oliwka w jasnym miejscu) zamiast wielu małych. Na podłodze z podłogówką donice stawiaj na podstawkach z nóżkami, żeby korzenie się nie przegrzewały.</p>`,
    cost: { min: 3000, max: 5000, note: "szyny sufitowe z montażem, dywany do pozostałych pokoi, poduszki i koce, rośliny i donice" },
    decision: {
      question: "Jakie zasłony?",
      intro: "Koszt zasłon i firan do salonu, jadalni, sypialni i pokoju dziecięcego, orientacyjnie.",
      chosen: "szyte",
      options: [
        { id: "szyte", name: "Szyte na wymiar, wave, z lnu i firaną",
          cost: { min: 4500, max: 8000 }, time: "3–4 tyg.", note: "ok. 150–300 zł za mb gotowej zasłony",
          pros: ["Długość co do centymetra od sufitu do podłogi", "Równa fala, dobre tkaniny", "Dopasowane do szerokości szyny"],
          cons: ["Pomiar dopiero po montażu szyn", "Drożej niż gotowe"],
          why: "Przy dużych przeszkleniach i szynach sufitowych gotowe zasłony zwykle są za krótkie albo za wąskie. Szyte na wymiar wyglądają jak na zdjęciu." },
        { id: "gotowe", name: "Gotowe zasłony skracane",
          cost: { min: 2000, max: 4000 }, time: "od ręki", note: "standard 140 × 260–300 cm",
          pros: ["Taniej i od razu", "Łatwo wymienić"],
          cons: ["Często za krótkie na sufit 2,7–2,8 m", "Mniej równa fala"],
          why: "Na start albo do pokoi na poddaszu. Skrócenie u krawcowej kosztuje kilkadziesiąt złotych za sztukę." },
        { id: "plisy", name: "Plisy i rolety wewnętrzne zamiast zasłon",
          cost: { min: 3500, max: 7000 }, time: "2–3 tyg.", note: "na każde skrzydło",
          pros: ["Minimalistycznie, nic nie zbiera kurzu przy podłodze", "Dobre na okna dachowe"],
          cons: ["Nie wyciszają pogłosu jak zasłona", "Przy rolecie zewnętrznej to dubel"],
          why: "Ma sens w łazience i na oknach dachowych. W salonie z przeszkleniem zasłona daje więcej ciepła i lepszą akustykę." }
      ]
    },
    tips: [
      "<b>Marszczenie 2 ×.</b> Na 3 m szyny potrzebujesz ok. 6 m szerokości tkaniny. Przy wave krawcowa liczy według taśmy, zwykle 1,8–2,2 ×.",
      "<b>Zasłona 1–2 cm nad podłogą.</b> Nie zbiera kurzu i nie leży na robocie sprzątającym. Mierz od szyny do gotowej podłogi z etapu 13.",
      "<b>Tekstylia na pogłos.</b> Duże przeszklenia, kamień i gładkie podłogi odbijają dźwięk. Zasłony, dywan i ściana tapicerowana skracają echo bardziej niż cokolwiek innego.",
      "<b>Rośliny przy przeszkleniu południowym: od 1 m od szyby.</b> Tuż przy szybie latem liście się przypalają, a zimą marzną od zimnej szyby w nocy (mniej przy trzech szybach).",
      "<b>Podlewanie na urlop.</b> Donice z rezerwuarem wody albo kroplówki. Kilka dużych roślin łatwiej obsłużyć niż 20 małych."
    ],
    mistakes: [
      "<b>Karnisz nad samym oknem.</b> Zasłona zaczyna się 20 cm pod sufitem, a przy odsunięciu zasłania pół szyby. Szyna sufitowa szersza niż okno rozwiązuje oba problemy.",
      "<b>Szyna wkręcona w samą płytę g-k.</b> Ciężka zasłona po kilku miesiącach wyrywa kołki. Montaż do stropu albo do profilu i wzmocnienia.",
      "<b>Ciężkie donice prosto na podłodze z ogrzewaniem.</b> Korzenie się przegrzewają, a woda spod donicy niszczy podłogę drewnianą."
    ],
    checklist: [
      "Szyny sufitowe zamocowane do stropu lub wzmocnienia",
      "Szyny 15–25 cm szersze od okna z każdej strony",
      "Zasłony 1–2 cm nad gotową podłogą",
      "Rośliny na podstawkach, ok. 1 m od przeszklenia"
    ]
  }

  ]
});

})();
