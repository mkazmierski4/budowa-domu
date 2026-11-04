/* Etap 00: Finanse, kredyt, harmonogram. Ceny i stawki orientacyjne, 2026 r., okolice małego miasta.
   Oprocentowanie, prowizje i programy dopłat zmieniają się: sprawdź aktualne warunki w banku i u doradcy. */
BUDOWA.addStage({
  id: "00-finanse", nr: 0, title: "Finanse, kredyt, harmonogram", icon: "💰", category: "dzialka",
  summary: "Budżet 2,3 mln zł, wkład i kredyt, rezerwa, sposób budowy, ekipy, umowy, ubezpieczenie i ogólny harmonogram na 18–24 miesiące.",
  duration: "1–3 mies. (równolegle z działką)",
  steps: [

  /* 1 ------------------------------------------------------------------ */
  {
    id: "budzet-podzial",
    title: "Budżet 2,3 mln zł i jego podział",
    lead: "Całą budowę, od działki po ogród, spinamy w jeden budżet 2 300 000 zł. Najpierw rozdzielasz go na pięć kategorii i rezerwę, a dopiero potem wybierasz technologie.",
    time: "1–2 wieczory", team: "ty i partner/ka",
    facts: [["Budżet całkowity", "2 300 000 zł", "wallet"], ["Kategorie", "5 + rezerwa", "file"], ["Ceny", "orientacyjnie, 2026 r.", "calc"]],
    body: `
      <p>Budżet obejmuje <strong>wszystko</strong>: działkę, projekt, dom w stanie deweloperskim, instalacje, wykończenie, meble i ogród z basenem. Ceny w tej encyklopedii to orientacyjne widełki z 2026 r. dla okolic małego miasta, więc w twojej gminie mogą się różnić o kilkanaście procent.</p>
      <p>Podział, którego trzymają się wszystkie etapy:</p>
      <ul>
        <li><strong>Działka i formalności:</strong> 330 tys. zł (14,3%)</li>
        <li><strong>Stan surowy:</strong> 680 tys. zł (29,6%)</li>
        <li><strong>Instalacje:</strong> 270 tys. zł (11,7%)</li>
        <li><strong>Wykończenie (z elewacją i meblami):</strong> 540 tys. zł (23,5%)</li>
        <li><strong>Ogród:</strong> 250 tys. zł (10,9%)</li>
        <li><strong>Rezerwa:</strong> 230 tys. zł (10%), której etapy nie wydają</li>
      </ul>
      <p>To nie jest sztywny kontrakt. Etapy planują w limitach swoich kategorii, a rezerwę ruszasz dopiero, gdy limit naprawdę pęka. Pasek budżetu w aplikacji pokazuje środek widełek wybranych rozwiązań.</p>`,
    diagram: `<svg viewBox="0 0 360 110" role="img" aria-label="Podział budżetu 2,3 mln zł na pięć kategorii i rezerwę">
      <rect x="10" y="14" width="49" height="30" style="fill:var(--amber)"/>
      <rect x="59" y="14" width="101" height="30" style="fill:var(--concrete)"/>
      <rect x="160" y="14" width="40" height="30" style="fill:var(--water)"/>
      <rect x="200" y="14" width="80" height="30" style="fill:var(--wood)"/>
      <rect x="280" y="14" width="37" height="30" style="fill:var(--lawn)"/>
      <rect x="317" y="14" width="33" height="30" style="fill:var(--rust)"/>
      <text x="18" y="62">330</text>
      <text x="100" y="62">680</text>
      <text x="168" y="62">270</text>
      <text x="228" y="62">540</text>
      <text x="289" y="62">250</text>
      <text x="324" y="62">230</text>
      <text x="12" y="82">działka</text>
      <text x="90" y="82">stan surowy</text>
      <text x="162" y="82">instal.</text>
      <text x="208" y="82">wykończenie</text>
      <text x="282" y="96">ogród</text>
      <text x="314" y="82">rezerwa</text>
      <text x="10" y="8">tys. zł, razem 2 300</text>
    </svg>
    <figcaption>Podział budżetu na kategorie. Szerokość pasów odpowiada kwotom.</figcaption>`,
    tips: [
      "<b>Zapisz budżet w arkuszu od pierwszego dnia.</b> Jedna kolumna „plan”, jedna „umowa”, jedna „zapłacone”. Po kwartale wiesz, gdzie uciekają pieniądze.",
      "<b>Wykończenie to największe pole do rozjazdu.</b> Płytki, podłogi, kuchnia i łazienka potrafią różnić się trzykrotnie w cenie przy tym samym metrażu. Dlatego ma 540 tys. zł, a nie „co zostanie”.",
      "<b>Najpierw dom, potem ogród.</b> Ogród z basenem (250 tys. zł) można rozłożyć na 2 lata po wprowadzeniu się. Dom nie.",
      "<b>Liczby z internetu traktuj jak punkt wyjścia.</b> Zbierz 2–3 oferty od lokalnych ekip, zanim zaufasz jakiejkolwiek tabeli, także tej."
    ],
    mistakes: [
      "<b>Budżet bez ogrodu i mebli.</b> Dom jest „gotowy”, a trawnik, ogrodzenie, taras i kuchnia czekają na pieniądze, których nie ma.",
      "<b>Liczenie ceny za m² z reklamy ekipy.</b> „Stan surowy od 2500 zł/m²” nie zawiera fundamentów, przyłączy, kierownika, mediów budowy ani VAT.",
      "<b>Budżet bez rezerwy.</b> Wyjdzie więcej niż w kosztorysie zawsze. Pytanie tylko, o ile."
    ],
    checklist: [
      "Budżet całkowity i podział na 5 kategorii zapisane w arkuszu",
      "Ustalone, co wchodzi w kategorię „wykończenie” a co w „ogród”",
      "Rezerwa wyznaczona (następne kroki)",
      "Oboje decydenci zgadzają się z podziałem"
    ],
    quiz: [{
      q: "Wydajesz o 40 tys. zł mniej na instalacje, niż zakładał podział. Co to oznacza dla budżetu?",
      a: ["Nic, kategorie są sztywne i pieniędzy nie wolno przesuwać", "Masz zapas, który może pokryć wyższy koszt w innej kategorii lub zasilić rezerwę", "Trzeba zmniejszyć budżet całkowity"],
      correct: 1,
      explain: "<b>Pilnujesz sumy.</b> Podział jest planem startowym. Oszczędność w jednej kategorii może pokryć wzrost w innej, ale najlepiej odłożyć ją do rezerwy, dopóki nie skończysz stanu surowego."
    }]
  },

  /* 2 ------------------------------------------------------------------ */
  {
    id: "wklad-zdolnosc",
    title: "Wkład własny i zdolność kredytowa",
    lead: "Bank sprawdza dwie rzeczy: czy masz własne pieniądze na start i czy będziesz w stanie spłacać ratę. Z tych dwóch liczb wynika, jaką część budowy sfinansujesz kredytem.",
    time: "1–2 tyg.", team: "ty, doradca kredytowy",
    facts: [["Wkład własny", "min. 20% (10% z ubezpieczeniem)", "wallet"], ["Rata do dochodu", "orientacyjnie do 35–40%", "calc"]],
    widget: "kalkulator-raty",
    body: `
      <p><strong>Wkład własny</strong> to zazwyczaj minimum 20% wartości inwestycji. Banki dopuszczają 10% przy dodatkowym ubezpieczeniu niskiego wkładu, ale za to płaci się wyższą marżę i składkę. Jako wkład przyjmuje się też <strong>wartość działki</strong>, jeśli jest już twoja. To bardzo upraszcza sprawę: działka za 215 tys. zł to często wkład w całości.</p>
      <p><strong>Zdolność kredytowa</strong> to maksymalna rata, jaką bank uzna za bezpieczną przy twoich dochodach, stałych kosztach i liczbie osób w gospodarstwie. Bank liczy ją według własnych wzorów i buforu na wzrost stóp, więc ta sama rodzina dostanie w różnych bankach różne kwoty.</p>
      <p>Dla domu referencyjnego realny kredyt to <strong>ok. 0,5–1,2 mln zł</strong>, resztę pokrywasz oszczędnościami, sprzedażą mieszkania albo darowizną. Sprawdź to w kalkulatorze poniżej, zanim pójdziesz do doradcy.</p>`,
    decision: {
      question: "Jaką część budowy sfinansować kredytem?",
      intro: "Im większy kredyt, tym mniejsze ryzyko braku gotówki w trakcie, ale tym więcej odsetek zapłacisz przez 25 lat. Rata przy stopach ok. 6–7% to orientacyjnie.",
      chosen: "polowa",
      options: [
        { id: "maly", name: "Kredyt do ok. 0,5 mln zł (ok. 22%)",
          cost: { min: 0, max: 0 }, note: "rata ok. 3,4 tys. zł/mies. przy 6,5% i 25 latach",
          pros: ["Rata mała, łatwo ją udźwignąć przy spadku dochodów", "Niskie łączne odsetki"],
          cons: ["Wymaga ok. 1,8 mln zł własnych środków", "Własne pieniądze ulokowane w murach, a nie w rezerwie płynności"],
          why: "Sens ma przy sprzedaży mieszkania albo dużych oszczędnościach. Dla większości rodzin to nierealne." },
        { id: "polowa", name: "Kredyt ok. 0,8–1 mln zł (35–45%)",
          cost: { min: 0, max: 0 }, note: "rata ok. 5,4–6,8 tys. zł/mies. przy 6,5% i 25 latach",
          pros: ["Wkład własny i działka wystarczają na start", "Rata mieści się zwykle w 30–35% dochodu przy dwóch pensjach", "Zostaje poduszka finansowa"],
          cons: ["Odsetki łącznie ok. 0,8–1 mln zł przy stopach 6,5% i 25 latach", "Wrażliwość na wzrost stóp"],
          why: "Rozsądny kompromis. Bank chętnie finansuje, a ty zachowujesz płynność na rezerwę i wykończenie." },
        { id: "duzy", name: "Kredyt ok. 1,3–1,5 mln zł (55–65%)",
          cost: { min: 0, max: 0 }, note: "rata ok. 8,8–10,1 tys. zł/mies. przy 6,5% i 25 latach",
          pros: ["Niski wkład własny", "Szybki start"],
          cons: ["Rata bardzo wysoka, brak marginesu na wzrost stóp", "Trudniej o kredyt, wyższa marża i ubezpieczenie niskiego wkładu", "Jedna choroba albo utrata pracy i rata staje się problemem"],
          why: "Nie polecamy. Przy cenach z tej encyklopedii wymaga dochodu rodziny rzędu 25 tys. zł netto miesięcznie i bufora na stopy." }
      ]
    },
    tips: [
      "<b>Kalkuluj ratę przy stopach o 2 pp wyższych.</b> Bank robi to samo. Jeśli taka rata cię przeraża, kredyt jest za duży.",
      "<b>Rata do 30–35% dochodu netto rodziny.</b> To bezpieczny próg życia z dziećmi, szkołą i samochodem. Powyżej tego każde zaskoczenie boli.",
      "<b>Zanim złożysz wniosek, spłać drobne zobowiązania.</b> Karta kredytowa z limitem 10 tys. zł, nawet niewykorzystana, obniża zdolność o kilka tysięcy zł kredytu.",
      "<b>Użyj niezależnego doradcy.</b> Porównuje oferty kilkunastu banków, a jego prowizję płaci bank. Sprawdź jednak, czy nie ma umowy wyłączności na jedną ofertę."
    ],
    mistakes: [
      "<b>Liczenie raty tylko przy dzisiejszych stopach.</b> Przy kredycie na 25 lat stopy się zmienią. Policz scenariusz +2 pp.",
      "<b>Dochód z umowy na czas określony albo z dochodu sezonowego.</b> Bank może go nie uwzględnić albo uwzględnić częściowo.",
      "<b>Zerowa poduszka finansowa.</b> Cały majątek w budowie oznacza, że pierwszy nieplanowany wydatek idzie na kartę kredytową."
    ],
    formal: [
      ["Zaświadczenie o dochodach i zatrudnieniu", "pracodawca, zwykle ważne 30 dni; przedsiębiorcy: PIT i KPiR za 12–24 mies."],
      ["Wyciągi z konta za 3–6 miesięcy", "bank, także za pośrednictwem bankowości internetowej"],
      ["Dokumenty działki", "księga wieczysta, umowa przedwstępna albo akt, wypis z MPZP"]
    ],
    checklist: [
      "Policzony wkład własny z uwzględnieniem wartości działki",
      "Rata przy stopach +2 pp mieści się w 35% dochodu netto",
      "Spłacone albo zamknięte zbędne limity i karty",
      "Zdolność kredytowa sprawdzona w 2–3 bankach",
      "Zostaje poduszka finansowa na min. 6 miesięcy życia"
    ],
    quiz: [{
      q: "Z których pieniędzy bank najchętniej przyjmie wkład własny przy kredycie na budowę?",
      a: ["Tylko z gotówki na koncie", "Z gotówki i z wartości działki, którą już posiadasz", "Wkład własny nie jest wymagany"],
      correct: 1,
      explain: "<b>Działka wlicza się do wkładu.</b> Bank wycenia ją i uznaje za część twoich środków. Dlatego kupno działki na początku często załatwia większość wymaganego wkładu."
    }]
  },

  /* 3 ------------------------------------------------------------------ */
  {
    id: "doplaty",
    title: "Programy dopłat i ulgi",
    lead: "Do budowy domu istnieją dotacje i ulgi, ale zmieniają się co kilka miesięcy. Sprawdź aktualne warunki przed zakupem pompy ciepła i paneli, bo często trzeba złożyć wniosek wcześniej.",
    time: "1–2 godz. w roku", team: "ty, doradca energetyczny",
    body: `
      <p>Ogólnie kategorie wsparcia to: dotacje na <strong>pompę ciepła</strong> i <strong>fotowoltaikę</strong> (programy ogólnopolskie i lokalne), <strong>dopłaty do kredytu</strong> i rządowe programy mieszkaniowe, a także preferencyjna stawka <strong>VAT 8%</strong> na usługi i materiały w budownictwie mieszkaniowym do określonej powierzchni.</p>
      <p>Warunki, kwoty i terminy naborów zmieniają się często, a niektóre programy obejmują tylko budynki istniejące albo wymagają złożenia wniosku <strong>przed zawarciem umowy z wykonawcą</strong>. Dotyczy to zwłaszcza dotacji na instalacje OZE. Dlatego w budżecie <strong>nie zakładamy żadnej dotacji</strong>, a jeśli ją dostaniesz, trafia do rezerwy.</p>
      <p>Sprawdź aktualne warunki na stronach Narodowego Funduszu Ochrony Środowiska i Gospodarki Wodnej (NFOŚiGW), Wojewódzkiego Funduszu, Banku Gospodarstwa Krajowego oraz w swojej gminie. Zasady VAT i ulg podatkowych potwierdź u doradcy podatkowego albo kierownika budowy.</p>`,
    tips: [
      "<b>Wniosek zwykle przed zakupem.</b> Faktura sprzed złożenia wniosku często dyskwalifikuje dotację. Czytaj regulamin naboru, zanim zamówisz pompę ciepła.",
      "<b>Zapytaj w gminie o lokalne dopłaty.</b> Niektóre gminy dopłacają do przyłączy, oczyszczalni albo retencji wody deszczowej. Informacja bywa tylko na stronie BIP.",
      "<b>Zbieraj faktury z odpowiednimi danymi.</b> Nabywca i adres inwestycji muszą być zgodne z wnioskiem, a rozliczenie VAT zależy od tego, kto kupuje materiał.",
      "<b>Dotacja to bonus, nie finansowanie.</b> Pieniądze wpływają po zakończeniu inwestycji, nawet po kilku miesiącach. Do tego czasu musisz mieć własne środki."
    ],
    mistakes: [
      "<b>Wliczenie dotacji do budżetu.</b> Nabór się kończy, kwota maleje, warunki się zmieniają. Budżet na dotacji to budżet na piasku.",
      "<b>Zakup przed wnioskiem.</b> Najczęstszy powód odrzucenia dotacji na pompę ciepła i fotowoltaikę.",
      "<b>Założenie, że programy dla budynków istniejących obejmują nowy dom.</b> Czyste Powietrze i podobne programy mają osobne warunki dla budynków nowych albo ich nie obejmują."
    ],
    formal: [
      ["Wniosek o dotację (OZE, pompa ciepła)", "NFOŚiGW, fundusz wojewódzki albo gmina; sprawdź aktualne warunki"],
      ["Deklaracja stawki VAT 8% w umowach z wykonawcami", "wykonawca; zakres i limit powierzchni sprawdź u kierownika budowy lub doradcy podatkowego"]
    ],
    checklist: [
      "Sprawdzone aktualne nabory na pompę ciepła i fotowoltaikę",
      "Zapytano w gminie o dopłaty lokalne",
      "Wiadomo, czy wniosek trzeba złożyć przed umową z wykonawcą",
      "Stawka VAT w umowach potwierdzona z księgowym lub kierownikiem budowy"
    ],
    quiz: [{
      q: "Kupiłeś pompę ciepła w styczniu, a w marcu znalazłeś dotację. Czy możesz o nią wnioskować?",
      a: ["Zawsze tak, faktura jest dowodem", "Często nie: wiele programów wymaga wniosku przed zakupem", "Tylko jeśli instalacja jeszcze nie działa"],
      correct: 1,
      explain: "<b>Kolejność ma znaczenie.</b> W wielu programach koszty poniesione przed złożeniem wniosku nie są kwalifikowane. Zawsze przeczytaj regulamin przed zamówieniem sprzętu."
    }]
  },

  /* 4 ------------------------------------------------------------------ */
  {
    id: "rezerwa",
    title: "Rezerwa 10% budżetu",
    lead: "Na każdej budowie wychodzi więcej, niż w kosztorysie. Rezerwa 230 tys. zł (10%) to nie zapas na luksus, tylko pieniądze na rzeczy, o których dziś jeszcze nie wiesz.",
    time: "decyzja jednorazowa", team: "ty",
    facts: [["Rezerwa", "230 000 zł (10%)", "wallet"], ["Limity kategorii", "2 070 000 zł", "wallet"]],
    body: `
      <p>Rezerwa to <strong>nie osobny dodatek</strong>, tylko część 2,3 mln zł. Etapy planujesz w limitach pięciu kategorii, razem <strong>2,07 mln zł</strong>, a <strong>230 tys. zł</strong> trzymasz na koncie albo w depozycie jako osobną kategorię „rezerwa”, której etapy nie wydają.</p>
      <p>Co zjada rezerwę: <strong>prace dodatkowe</strong> (grunt gorszy niż w opinii, wymiana części rur), <strong>wzrost cen</strong> materiałów między ofertą a zakupem, <strong>zmiany w trakcie budowy</strong> (dodatkowe gniazdka, większe okno, zmiana płytek) i <strong>przestoje</strong>, gdy ekipa nie przyjedzie, a ty płacisz kolejny miesiąc za wynajem mieszkania i odsetki.</p>`,
    decision: {
      question: "Jaka rezerwa?",
      intro: "Im prostszy projekt i grunt, tym mniejsza może być rezerwa. Dla domu referencyjnego przyjmujemy 10% (230 tys. zł).",
      chosen: "10",
      options: [
        { id: "5", name: "5% (ok. 115 tys. zł)",
          cost: { min: 0, max: 0 }, note: "tylko przy prostym domu i sprawdzonej ekipie",
          pros: ["Więcej pieniędzy idzie w jakość wykończenia", "Mniej gotówki zamrożonej"],
          cons: ["Jedna niespodzianka z gruntem albo dachem zjada całość", "Presja na cięcie jakości pod koniec budowy"],
          why: "Wystarczy tylko wtedy, gdy zlecasz gotowy dom pod klucz w stałej cenie. Przy budowie systemem ekip to za mało." },
        { id: "10", name: "10% (230 tys. zł)",
          cost: { min: 0, max: 0 }, note: "standard dla budowy na etapy",
          pros: ["Pokrywa typowy rozjazd kosztów, zmiany i wzrost cen", "Spokojniejsza głowa, ekipy dostają zapłatę na czas"],
          cons: ["Część pieniędzy leży bezczynnie przez 1–2 lata", "Trzeba mieć dyscyplinę i nie „zagospodarować” rezerwy na meble"],
          why: "Typowo tyle wychodzi ponad kosztorys. Niewykorzystana rezerwa zasila ogród i wykończenie na końcu." },
        { id: "20", name: "20% (ok. 460 tys. zł)",
          cost: { min: 0, max: 0 }, note: "przy trudnym gruncie albo własnym wykonawstwie",
          pros: ["Duży komfort", "Pokrywa nawet poważne problemy z gruntem"],
          cons: ["Ogranicza standard domu, bo planujesz tylko na ok. 1,84 mln zł", "Zamraża duże pieniądze"],
          why: "Ma sens, gdy badania gruntu wykazały kłopoty albo budujesz własnymi siłami i rozpiętość kosztów jest duża." }
      ]
    },
    tips: [
      "<b>Rezerwa na osobnym koncie.</b> Pieniądze widoczne na codziennym koncie same się wydają.",
      "<b>Zapisuj każdy wydatek „poza planem”.</b> Po stanie surowym wiesz, jaki procent rezerwy już poszedł. Jeśli ponad połowa, zaczynaj ciąć wykończenie, nie czekaj.",
      "<b>Oddzielna rezerwa na czas.</b> Opóźnienie o 3 miesiące to koszt wynajmu, odsetek od kredytu i podwyżek cen. Policz to jako miesiąc × (czynsz + rata).",
      "<b>Nie planuj uwolnienia rezerwy przed odbiorem końcowym.</b> Zdarza się, że po wprowadzeniu wychodzą wady wymagające poprawek."
    ],
    mistakes: [
      "<b>„Rezerwa” w cenie, ale na koncie nic.</b> Wydawanie na bieżąco bez odkładania to brak rezerwy.",
      "<b>Wydawanie rezerwy na zmiany projektu.</b> Zmiany po wylaniu fundamentów kosztują wielokrotnie więcej niż na papierze.",
      "<b>Rezerwa tylko na materiały.</b> Zapomniane są koszty życia w czasie przestoju: wynajem, dojazdy, magazynowanie rzeczy."
    ],
    checklist: [
      "Rezerwa 230 tys. zł (10% budżetu) wyznaczona i oddzielona na koncie",
      "Ustalona zasada: na co wolno ją wydać",
      "Policzony koszt miesiąca opóźnienia (czynsz + rata + inflacja cen)",
      "Zapisywane są wydatki poza planem"
    ],
    quiz: [{
      q: "Na stanie surowym wydałeś już 60% rezerwy. Co zrobić?",
      a: ["Nic, wykończenie jest jeszcze daleko", "Zacząć cięcie w wykończeniu i sprawdzić kosztorys pozostałych etapów", "Wziąć dodatkowy kredyt gotówkowy"],
      correct: 1,
      explain: "<b>Reaguj wcześnie.</b> Najwięcej da się zaoszczędzić na wykończeniu i ogrodzie, a koszty stanu surowego już są poniesione. Im wcześniej tniesz, tym mniejsze cięcie wystarczy."
    }]
  },

  /* 5 ------------------------------------------------------------------ */
  {
    id: "harmonogram-ogolny",
    title: "Harmonogram całej budowy",
    lead: "Od zakupu działki do wprowadzenia się mija zwykle 18–24 miesiące. Sama budowa trwa ok. 12–15 miesięcy, reszta to projekt, pozwolenie i schnięcie.",
    time: "18–24 mies.", team: "ty, kierownik budowy",
    facts: [["Cała inwestycja", "18–24 mies.", "clock"], ["Sama budowa", "ok. 12–15 mies.", "clock"], ["Projekt + pozwolenie", "orientacyjnie 4–8 mies.", "file"]],
    body: `
      <p>Kolejność etapów jest sztywna. Na każdy etap potrzebne są <strong>warunki pogodowe</strong> (beton i tynki nie lubią mrozu), <strong>czas schnięcia</strong> (wylewki 4–6 tygodni, tynki kilka tygodni) i <strong>dostępność ekip</strong>, które zwykle umawia się 2–3 miesiące wcześniej.</p>
      <p>Zgrabny rytm to start fundamentów wiosną, stan surowy zamknięty przed zimą i instalacje oraz tynki w zimie w ogrzanych murach. Wprowadzenie się latem, kiedy ogród się zazieleni, jest przyjemniejsze niż w grudniu.</p>`,
    diagram: `<svg viewBox="0 0 420 220" role="img" aria-label="Harmonogram budowy w miesiącach od 0 do 24">
      <path d="M96 20H408" style="stroke:var(--ink-3)" stroke-width="1"/>
      <text x="96" y="14">0</text><text x="148" y="14">4</text><text x="200" y="14">8</text><text x="252" y="14">12</text><text x="304" y="14">16</text><text x="356" y="14">20</text><text x="398" y="14">24</text>
      <text x="6" y="38">Działka i finanse</text>
      <rect x="96" y="28" width="39" height="14" rx="2" style="fill:var(--amber)"/>
      <text x="6" y="60">Projekt i pozwolenie</text>
      <rect x="135" y="50" width="65" height="14" rx="2" style="fill:var(--concrete)"/>
      <text x="6" y="82">Kredyt i umowy</text>
      <rect x="187" y="72" width="26" height="14" rx="2" style="fill:var(--water)"/>
      <text x="6" y="104">Stan surowy</text>
      <rect x="200" y="94" width="91" height="14" rx="2" style="fill:var(--wood)"/>
      <text x="6" y="126">Instalacje i tynki</text>
      <rect x="278" y="116" width="65" height="14" rx="2" style="fill:var(--plaster);stroke:var(--ink-3)"/>
      <text x="6" y="148">Elewacja</text>
      <rect x="304" y="138" width="52" height="14" rx="2" style="fill:var(--cladding)"/>
      <text x="6" y="170">Wykończenie</text>
      <rect x="330" y="160" width="65" height="14" rx="2" style="fill:var(--amber)"/>
      <text x="6" y="192">Ogród</text>
      <rect x="369" y="182" width="26" height="14" rx="2" style="fill:var(--lawn)"/>
      <text x="6" y="214">Odbiory</text>
      <rect x="395" y="204" width="13" height="14" rx="2" style="fill:var(--ink-2)"/>
    </svg>
    <figcaption>Orientacyjny przebieg w miesiącach. Etapy na budowie zachodzą na siebie: elewację robi się, gdy w środku trwają instalacje.</figcaption>`,
    tips: [
      "<b>Zacznij projekt w trakcie zakupu działki.</b> Wypis z MPZP i mapa wystarczą na koncepcję. Zyskujesz 2–3 miesiące.",
      "<b>Fundamenty wiosną.</b> Do mrozów zdążysz z murami i dachem, a zimę spędzą w budynku instalacje i tynki.",
      "<b>Bufor 2 miesięcy na każdy duży etap.</b> Gdy ekipa mówi „3 tygodnie”, wpisz do harmonogramu 6.",
      "<b>Ekipy umawiaj z wyprzedzeniem.</b> Dobry dekarz czy hydraulik jest zajęty na 2–3 miesiące do przodu."
    ],
    mistakes: [
      "<b>Harmonogram bez schnięcia.</b> Jastrych potrzebuje ok. 4–6 tygodni, a drewno do podłóg kolejnych tygodni w stanie ogrzanego domu. Wcześniejszy montaż kończy się odkształceniem.",
      "<b>Planowanie wprowadzenia na konkretny miesiąc.</b> Umowa najmu kończy się za rok, a dom skończy się za 16 miesięcy. Dolicz miesiące wynajmu i podwójne koszty życia.",
      "<b>Zakładanie, że wszystko pójdzie bez przerw.</b> Pogoda, dostawy okien (nawet 8–12 tygodni) i urlopy ekip zawsze coś przesuną."
    ],
    checklist: [
      "Wypisane etapy w kolejności z orientacyjnymi czasami",
      "Okna zamówione z wyprzedzeniem 2–3 miesięcy",
      "Rezerwa na ekipy zajęte: bufor 2 miesięcy na etap",
      "Termin ewentualnego wypowiedzenia najmu dopasowany do harmonogramu"
    ],
    quiz: [{
      q: "Dlaczego najlepiej ruszyć z fundamentami wiosną?",
      a: ["Bo wiosną ceny betonu są najniższe", "Bo przed zimą zdążysz zamknąć stan surowy, a w zimie robisz roboty wewnętrzne", "Bo to wymóg Prawa budowlanego"],
      correct: 1,
      explain: "<b>Zimą nie betonuje się ani nie tynkuje na zewnątrz.</b> Zamknięty przed zimą budynek (dach i okna) pozwala kontynuować instalacje i tynki wewnętrzne w ogrzewanym środku."
    }]
  },

  /* 6 ------------------------------------------------------------------ */
  {
    id: "sposob-budowy",
    title: "Sposób budowy",
    lead: "Zanim zaczniesz szukać ekip, rozstrzygnij, kto kieruje budową. To najważniejsza decyzja organizacyjna: wpływa na cenę, czas, twoje nerwy i ryzyko.",
    time: "decyzja przed kosztorysem", team: "ty i partner/ka",
    body: `
      <p>Są trzy główne modele. <strong>Generalny wykonawca</strong> (GW) bierze całość za jedną cenę i koordynuje podwykonawców. <strong>Ekipy na etapy</strong> to osobne umowy z fachowcami: ekipa murarska, dekarz, instalatorzy, tynkarze. <strong>System gospodarczy</strong> to ty kupujesz materiały i sam organizujesz robotników, często robiąc część prac samodzielnie.</p>
      <p>Niezależnie od modelu potrzebujesz <strong>kierownika budowy</strong> z uprawnieniami (etap 03), który prowadzi dziennik i odpowiada za zgodność z projektem. Przy ekipach warto dodatkowo rozważyć <strong>inspektora nadzoru inwestorskiego</strong>, który reprezentuje ciebie wobec wykonawców.</p>
      <p>Różnice w koszcie podane poniżej to dopłata albo oszczędność w stosunku do modelu „ekipy na etapy” (orientacyjnie, dla robocizny i marży przy kosztach stanu surowego, instalacji i wykończenia ok. 1,5 mln zł).</p>`,
    decision: {
      question: "Kto prowadzi budowę?",
      intro: "Koszty to różnica względem budowy ekipami na etapy z kierownikiem budowy. Poza ceną liczy się czas i twoje zaangażowanie.",
      chosen: "ekipy",
      options: [
        { id: "gw", name: "Generalny wykonawca (pod klucz)",
          cost: { min: 100000, max: 180000 }, time: "ok. 12–14 mies.", note: "marża GW ok. 7–12% kosztów budowy",
          pros: ["Jeden partner, jedna cena i odpowiedzialność za całość", "Mniej twoich spotkań, sporów i koordynacji", "Szybsze tempo, gdy GW ma stałe ekipy"],
          cons: ["Marża GW i narzuty", "Niższa kontrola nad jakością konkretnych prac", "Uzależnienie od jednej firmy, upadłość GW to dramat"],
          why: "Najlepszy, gdy brakuje ci czasu i energii. Wybieraj sprawdzoną firmę z realizacjami i ubezpieczeniem OC, a umowę oprzyj na harmonogramie i kaucji gwarancyjnej." },
        { id: "ekipy", name: "Ekipy na etapy, z kierownikiem budowy",
          cost: { min: 0, max: 0 }, time: "ok. 14–18 mies.", note: "cena bazowa naszego budżetu",
          pros: ["Wybierasz najlepszych fachowców do każdego etapu", "Płacisz zaliczki i końcowe kwoty po odbiorze każdego etapu", "Pełna kontrola nad materiałami i jakością"],
          cons: ["Wymaga ok. 6–10 godzin tygodniowo na koordynację", "Ty odpowiadasz za kolejność ekip", "Przestoje, gdy jedna ekipa się spóźni"],
          why: "Nasza rekomendacja dla domu referencyjnego. Dobry stosunek ceny i jakości, a umowy etapowe dają ci naturalne punkty kontroli i transze kredytu." },
        { id: "gospodarczy", name: "System gospodarczy (własne siły)",
          cost: { min: -120000, max: -60000 }, time: "ok. 20–30 mies.", note: "oszczędność głównie na robociźnie",
          pros: ["Największa oszczędność", "Znasz każdy szczegół domu", "Pełna swoboda"],
          cons: ["Dużo czasu i wiedzy, często po godzinach pracy", "Ryzyko błędów, gwarancje ekip są ograniczone", "Dłuższe opóźnienia, droższy kredyt"],
          why: "Ma sens, gdy masz umiejętności budowlane albo dużo czasu. Dom z poddaszem i basenem to ogromny projekt, więc to ostateczność." }
      ]
    },
    tips: [
      "<b>Policz swój czas w złotówkach.</b> 8 godzin tygodniowo przez rok to 400 godzin. Jeśli twoja godzina kosztuje 80 zł, to 32 tys. zł, które trzeba odjąć od „oszczędności” systemu gospodarczego.",
      "<b>Kierownik budowy z polecenia.</b> Najlepszy bywa lokalny kierownik, który zna urząd i ekipy. Sprawdź jego liczbę prowadzonych budów: powyżej 6–8 równocześnie to za dużo.",
      "<b>Inspektor nadzoru na kluczowe momenty.</b> Zbrojenie, izolacje i dach to miejsca, gdzie błędów nie widać po zakryciu. Wizyta kosztuje orientacyjnie 300–600 zł.",
      "<b>Dziennik budowy i zdjęcia.</b> Fotografuj każdą warstwę przed zakryciem, bo po kilku latach to jedyny dowód."
    ],
    mistakes: [
      "<b>GW „bez umowy ryczałtowej”.</b> Wycena „od m²” bez szczegółowego zakresu kończy się dopłatami, które potrafią dobić do 20–30% ceny.",
      "<b>Ekipy bez kierownika budowy.</b> Nikt nie pilnuje projektu, a w razie kontroli odpowiadasz ty.",
      "<b>System gospodarczy „na próbę”.</b> Po roku okazuje się, że brakuje czasu i pieniędzy, a rozpoczęty dom stoi i drożeje."
    ],
    quiz: [{
      q: "Co jest największym ryzykiem przy budowie systemem gospodarczym?",
      a: ["Wyższa cena robocizny", "Błędy, opóźnienia i brak gwarancji jednej firmy za całość", "Brak możliwości uzyskania kredytu"],
      correct: 1,
      explain: "<b>Ty jesteś generalnym wykonawcą.</b> Odpowiadasz za koordynację, kolejność ekip i jakość. Błędy wychodzą po miesiącach, kiedy nikt już za nie nie odpowiada."
    }]
  },

  /* 7 ------------------------------------------------------------------ */
  {
    id: "kosztorys-harmonogram",
    title: "Kosztorys i harmonogram rzeczowo-finansowy",
    lead: "Bank i ty potrzebujecie dokumentu, który mówi: co, kiedy i za ile. To fundament każdej transzy kredytu i narzędzie do pilnowania budżetu.",
    time: "1–3 tyg.", team: "kierownik budowy, kosztorysant, ty",
    cost: { min: 1500, max: 4000, note: "kosztorys inwestorski i harmonogram od kosztorysanta (często robi je też projektant lub kierownik)" },
    facts: [["Kosztorys", "wg etapów, 15–25 pozycji", "file"], ["Harmonogram", "etap × miesiąc × kwota", "calc"]],
    body: `
      <p><strong>Kosztorys inwestorski</strong> to lista robót z ilościami i cenami: ile ziemi, betonu, stali, pustaków, okien i godzin pracy. Ma być zgodny z projektem. <strong>Harmonogram rzeczowo-finansowy</strong> przekłada go na czas: w którym miesiącu który etap, jaka kwota i jaka transza kredytu.</p>
      <p>Przykładowy podział transz dla naszego domu (orientacyjnie, ostateczny ustala bank): <strong>fundamenty</strong> (ok. 10%), <strong>ściany parteru i strop</strong> (ok. 20%), <strong>poddasze i dach</strong> (ok. 20%), <strong>okna, drzwi, stan surowy zamknięty</strong> (ok. 15%), <strong>instalacje i tynki</strong> (ok. 20%), <strong>wykończenie</strong> (ok. 15%). Każda wypłata następuje po inspekcji, więc etap musi być faktycznie skończony.</p>`,
    tips: [
      "<b>Kosztorys z min. 3 ofert wykonawców.</b> Pozycje zdają się podobne, a różnice w cenie to zakres: czy w cenie jest wywóz gruzu, rusztowania, betoniarka, czy tylko robocizna.",
      "<b>Dziel na etapy odpowiadające transzom.</b> Wtedy kosztorys od razu pasuje do wniosku kredytowego i do inspekcji.",
      "<b>Pozycje „do wyboru” wpisuj z widełkami.</b> Płytki, kuchnia i armatura mają ceny od 80 do 800 zł za m² lub sztukę. Wpisz realną kwotę z puli, którą masz, nie najniższą.",
      "<b>Aktualizuj raz w miesiącu.</b> Zestawiaj plan z faktycznymi fakturami. Odchyłka powyżej 5% w etapie to sygnał do reakcji."
    ],
    mistakes: [
      "<b>Kosztorys tylko na „stan surowy”.</b> Bank i tak zażąda całości, a ty nie wiesz, ile zostaje na instalacje i wykończenie.",
      "<b>Pominięte koszty uboczne.</b> Prąd i woda na budowie, toaleta, ogrodzenie placu, ochrona, wywóz odpadów, kierownik i geodeta, a to kilkanaście tys. zł.",
      "<b>Najniższa wycena traktowana jak prawda.</b> Oferta o 25% niższa od pozostałych zwykle pomija zakres albo oznacza dopłaty po drodze."
    ],
    formal: [
      ["Kosztorys inwestorski", "kosztorysant, projektant albo kierownik; często wymagany przez bank"],
      ["Harmonogram rzeczowo-finansowy", "załącznik do wniosku kredytowego; podział na transze zatwierdza bank"],
      ["Wniosek o wypłatę transzy", "bank; do niego protokół inspekcji i faktury lub zdjęcia"]
    ],
    checklist: [
      "Kosztorys zgodny z projektem, podzielony na etapy",
      "Ujęte koszty uboczne: media budowy, wywóz odpadów, nadzór",
      "Harmonogram z kwotami i terminami transz",
      "Min. 3 oferty porównane pozycja po pozycji",
      "Ustalony sposób miesięcznego porównania planu z faktami"
    ],
    quiz: [{
      q: "Dlaczego harmonogram rzeczowo-finansowy jest ważny dla kredytu na budowę?",
      a: ["Bo bank wypłaca pieniądze etapami, po inspekcji ukończonych prac", "Bo bank wypłaca całość od razu po podpisaniu umowy", "Bo to wymóg urzędu przy pozwoleniu"],
      correct: 0,
      explain: "<b>Kredyt budowlany idzie w transzach.</b> Każda wypłata jest powiązana z ukończonym etapem z harmonogramu. Źle rozpisany harmonogram oznacza przestój w finansowaniu."
    }]
  },

  /* 8 ------------------------------------------------------------------ */
  {
    id: "kredyt-transze",
    title: "Kredyt hipoteczny na budowę: transze i inspekcje",
    lead: "Kredyt na budowę wypłaca się w częściach, po inspekcji banku. Warto znać zasady, bo źle zaplanowana transza wstrzymuje ekipę.",
    time: "4–8 tyg. na decyzję i umowę", team: "doradca, bank, kierownik budowy",
    cost: { min: 3000, max: 25000, note: "wycena nieruchomości, prowizja 0–2% (przy ok. 1 mln zł), ubezpieczenie pomostowe do wpisu hipoteki" },
    facts: [["Wypłata po inspekcji", "orientacyjnie 3–7 dni roboczych", "clock"], ["Czas wypłat", "do ok. 24–36 mies.", "clock"], ["Transze", "5–8", "wallet"]],
    body: `
      <p>Wniosek składasz zwykle po uzyskaniu <strong>pozwolenia na budowę</strong> (lub zgłoszenia) i prawomocnym zatwierdzeniu projektu. Wcześniej możesz uzyskać <strong>wstępną decyzję kredytową</strong> i sfinansować zakup działki osobnym kredytem. Bank wymaga projektu, pozwolenia, kosztorysu i harmonogramu, a często także dokumentów dotyczących działki i wkładu własnego.</p>
      <p>Po podpisaniu umowy bank wypłaca kredyt w <strong>transzach</strong>. Pierwsza często wypłacana jest od razu na zakup działki albo jako zwrot poniesionych kosztów. Kolejne wypłaca po <strong>inspekcji</strong>: wizycie przedstawiciela banku (rzeczoznawcy), który sprawdza, czy etap jest skończony, a zakres zgadza się z harmonogramem i projektem. W okresie budowy spłacasz zwykle <strong>tylko odsetki</strong> od wypłaconych kwot, a rata kapitałowo-odsetkowa startuje po zakończeniu inwestycji.</p>
      <p>Hipoteka jest wpisywana do księgi wieczystej, a bank zwykle wymaga <strong>ubezpieczenia budowy</strong> (kolejny krok) z cesją praw na bank.</p>`,
    decision: {
      question: "Jak sfinansować budowę?",
      intro: "Koszty to opłaty bankowe i wyceny, nie odsetki. Odsetki zależą od stóp i licznika transz.",
      chosen: "transze",
      options: [
        { id: "transze", name: "Kredyt hipoteczny w transzach (kredyt budowlany)",
          cost: { min: 0, max: 0 }, time: "wypłata po każdym etapie", note: "ok. 5–8 transz",
          pros: ["Płacisz odsetki tylko od wypłaconych kwot", "Oprocentowanie jak przy kredycie hipotecznym, niższe niż gotówkowego", "Inspekcje to dodatkowa kontrola jakości"],
          cons: ["Wypłaty wymagają inspekcji i dokumentów", "Przerwy 3–7 dni między skończeniem etapu a pieniędzmi", "Wkład własny trzeba wydać na początku"],
          why: "Standard, z którym banki sobie radzą. Rozpisz harmonogram tak, żeby wypłata przychodziła, zanim zabraknie pieniędzy na kolejny etap." },
        { id: "wlasne", name: "Własne środki w całości",
          cost: { min: -25000, max: -3000 }, time: "bez formalności", note: "oszczędność opłat bankowych",
          pros: ["Brak odsetek, prowizji i inspekcji", "Pełna swoboda w zmianach projektu"],
          cons: ["Wymaga ok. 2,1–2,3 mln zł w gotówce", "Cały majątek zamrożony w budowie"],
          why: "Dla nielicznych. Nawet bogaci często biorą mały kredyt dla płynności." },
        { id: "kombinacja", name: "Kredyt na działkę + osobne finansowanie budowy",
          cost: { min: 2000, max: 10000 }, time: "dwa wnioski", note: "dodatkowa wycena i opłaty",
          pros: ["Możesz kupić działkę przed projektem i pozwoleniem", "Mniejszy kredyt na budowę, jeśli sprzedasz mieszkanie"],
          cons: ["Dwie umowy, dwie wyceny, dwa wpisy hipotek", "Późniejszy kredyt na budowę może mieć inne warunki"],
          why: "Dobre, gdy działka jest pilna, a projekt jeszcze nie ma pozwolenia. Zaplanuj konsolidację w jeden kredyt na budowę." }
      ]
    },
    tips: [
      "<b>Złóż wniosek o wypłatę, gdy etap jest skończony w 90%.</b> Inspektor banku przyjeżdża po 2–5 dniach, a pieniądze wpływają kolejne 3–5 dni po jego raporcie. Ekipa nie czeka.",
      "<b>Transze rozpisz tak, żeby nigdy nie schodzić poniżej zera.</b> Zostaw w pierwszej transzy zapas na 2 etapy, bo bank płaci za zakończone prace, nie za zaliczki.",
      "<b>Negocjuj prowizję i marżę.</b> Prowizja 0–2% to zakres, a konkurujące oferty bankowe często obniżają ją do zera przy ubezpieczeniach lub kartach.",
      "<b>Zapytaj o okres wypłat i karencję.</b> Standardowo do 24 miesięcy, w niektórych bankach do 36. Dłuższy czas to bufor na opóźnienia.",
      "<b>Wcześniejsza spłata bez prowizji.</b> Przy zmiennym oprocentowaniu prowizja za wcześniejszą spłatę może dotyczyć tylko pierwszych 3 lat. Sprawdź to w umowie i u doradcy."
    ],
    mistakes: [
      "<b>Bez kontaktu z kierownikiem budowy przy inspekcji.</b> Inspektor banku zadaje pytania, a ty nie umiesz odpowiedzieć. Kierownik powinien być obecny.",
      "<b>Wydanie wkładu własnego na wykończenie przed stanem surowym.</b> Bank zażąda dowodu wkładu i uzna inwestycję za nierówną.",
      "<b>Kredyt z oprocentowaniem „promocyjnym” na 6 miesięcy.</b> Potem marża rośnie, a ty nie możesz wyjść bez kosztów.",
      "<b>Brak ubezpieczenia budowy w terminie.</b> Bank wstrzyma wypłaty do czasu przedstawienia polisy."
    ],
    formal: [
      ["Wniosek kredytowy", "bank; zaświadczenia, umowa na działkę, projekt, pozwolenie, kosztorys, harmonogram"],
      ["Operat szacunkowy / wycena", "rzeczoznawca banku; koszt orientacyjnie 1,2–2,5 tys. zł"],
      ["Umowa kredytu i ustanowienie hipoteki", "bank, notariusz nie jest zwykle potrzebny; wpis do KW 200 zł"],
      ["Wniosek o wypłatę transzy", "bank; protokół inspekcji i potwierdzenie wykonania prac"]
    ],
    checklist: [
      "Wstępna decyzja kredytowa uzyskana przed zakupem działki",
      "Harmonogram z transzami zatwierdzony przez bank",
      "Znany czas inspekcji i wypłaty po wniosku",
      "Polisa ubezpieczeniowa budowy zgodna z wymogami banku",
      "Zapas w kwocie 1 etapu po wypłacie transzy",
      "Kierownik budowy gotowy na inspekcję"
    ],
    quiz: [{
      q: "Kiedy bank wypłaca kolejną transzę kredytu budowlanego?",
      a: ["Gdy złożysz wniosek, bez dodatkowych warunków", "Po inspekcji potwierdzającej ukończenie etapu z harmonogramu", "Po zakończeniu całej budowy"],
      correct: 1,
      explain: "<b>Pieniądze za wykonane prace.</b> Bank chce mieć pewność, że wartość nieruchomości odpowiada wypłaconym kwotom. Stąd inspekcje i harmonogram."
    }]
  },

  /* 9 ------------------------------------------------------------------ */
  {
    id: "wybor-ekip",
    title: "Wybór i weryfikacja ekip",
    lead: "Dobra ekipa z rozsądną ceną jest warta więcej niż najtańsza oferta. Sprawdź realizacje, firmę i referencje, zanim podpiszesz cokolwiek.",
    time: "2–6 tyg. na etap", team: "ty, kierownik budowy",
    body: `
      <p>Szukaj <strong>z polecenia</strong>: u kierownika budowy, sąsiadów, w hurtowni, u projektanta. Najlepsze ekipy w małych miastach nie reklamują się, bo mają zajęty kalendarz na rok. Potem <strong>obejrzyj realizację</strong>: jeśli to możliwe, dom skończony rok temu i jeden w trakcie budowy.</p>
      <p>Poproś o <strong>2–3 telefony do poprzednich klientów</strong> i zapytaj o termin, porządek na budowie, reakcję na usterki. Zweryfikuj firmę w <strong>CEIDG albo KRS</strong>, sprawdź <strong>NIP i VAT</strong>, a także <strong>ubezpieczenie OC</strong> działalności. Zaznacz, kto faktycznie będzie pracował: właściciel czy podwykonawcy.</p>`,
    tips: [
      "<b>Porównuj zakres, nie cenę.</b> Ten sam „stan surowy” bywa w jednej ofercie z rusztowaniami i wywozem gruzu, w innej bez. Zrób arkusz pozycja po pozycji.",
      "<b>Oferta o 20–25% niższa od reszty to sygnał ostrzegawczy.</b> Zwykle brakuje w niej części prac albo planują dopłaty w trakcie.",
      "<b>Zapytaj o kalendarz.</b> Dobra ekipa ma wolny termin za 2–3 miesiące. Ekipa „wolna od jutra” często ma kłopoty.",
      "<b>Wizyta na budowie bez zapowiedzi.</b> Porządek, ogrodzenie, sprzęt i kultura pracy mówią więcej niż referencje.",
      "<b>Poproś o próbną pracę na małym zakresie.</b> Np. wylewki w garażu przed całym domem pozwala ocenić jakość bez dużego ryzyka."
    ],
    mistakes: [
      "<b>Wybór wyłącznie po cenie.</b> Najtańsza oferta jest zwykle droższa po dopłatach, poprawkach i opóźnieniach.",
      "<b>Podpisanie umowy z jedną osobą, a pracują inni.</b> Ustal listę osób i zasady zmiany składu.",
      "<b>Brak sprawdzenia uprawnień i OC.</b> Przy wypadku na budowie albo szkodzie u sąsiada możesz odpowiadać sam.",
      "<b>Wpłacanie dużej zaliczki przed rozpoczęciem.</b> Zaliczka służy pokryciu materiałów, nie wypłacie wynagrodzenia z góry."
    ],
    formal: [
      ["Wpis do CEIDG albo KRS", "ceidg.gov.pl, ekrs.ms.gov.pl; bezpłatnie"],
      ["Polisa OC działalności wykonawcy", "firma wykonawcy; poproś o kopię z sumą ubezpieczenia"],
      ["Uprawnienia budowlane kierownika robót (przy robotach branżowych)", "kierownik budowy lub branżowy; sprawdź w rejestrze izby"]
    ],
    checklist: [
      "Min. 3 oferty od ekip na każdy większy etap",
      "Obejrzane realizacje: jedna skończona i jedna w trakcie",
      "Sprawdzone CEIDG/KRS, NIP i VAT, OC",
      "Rozmowa z 2–3 poprzednimi klientami",
      "Ustalony skład ekipy i osoba kontaktowa",
      "Pozycje ofert porównane w jednej tabeli"
    ],
    quiz: [{
      q: "Dostałeś ofertę stanu surowego o 25% niższą od pozostałych dwóch. Co zrobić?",
      a: ["Wybrać ją, bo oszczędzasz pieniądze", "Porównać zakres pozycja po pozycji i zapytać, czego brakuje", "Odrzucić bez analizy"],
      correct: 1,
      explain: "<b>Niska cena zwykle oznacza węższy zakres.</b> Może brakować wywozu, rusztowań albo materiału. Sprawdź, czy to prawdziwa oszczędność, czy dopłata odroczona w czasie."
    }]
  },

  /* 10 ----------------------------------------------------------------- */
  {
    id: "umowy",
    title: "Umowy z wykonawcami",
    lead: "Umowa chroni obie strony. Musi jasno opisać zakres, termin, cenę, odbiory i co się dzieje, gdy coś pójdzie źle.",
    time: "1–2 tyg. na umowę", team: "ty, kierownik budowy, ew. prawnik",
    facts: [["Zaliczka", "orientacyjnie 10–20%", "wallet"], ["Kara za zwłokę", "orientacyjnie 0,2–0,5% za dzień", "clock"], ["Rękojmia", "5 lat na wady budynku", "shield"]],
    body: `
      <p>Dobra umowa na roboty budowlane zawiera: <strong>strony i zakres prac</strong> (z odniesieniem do projektu i kosztorysu), <strong>cenę i sposób jej ustalenia</strong>, <strong>terminy</strong> (start, etapy, koniec), <strong>zaliczki i płatności</strong> powiązane z odbiorami, <strong>odbiory</strong> (kto, kiedy, protokół), <strong>kary umowne</strong> za zwłokę i wady, <strong>gwarancję</strong> i <strong>rękojmię</strong>, <strong>kaucję</strong> i <strong>ubezpieczenie OC</strong>.</p>
      <p>Przy rozliczeniu najczęściej wybierasz między <strong>ryczałtem</strong> (stała kwota za cały zakres) a <strong>kosztorysem powykonawczym</strong> (płacisz za faktycznie wykonane ilości).</p>`,
    decision: {
      question: "Jak rozliczać wykonawcę?",
      intro: "Wybór dotyczy sposobu ustalenia ceny. Zasada: im dokładniej opisany zakres, tym bezpieczniejszy ryczałt.",
      chosen: "ryczalt",
      options: [
        { id: "ryczalt", name: "Ryczałt za etap, wypłaty po odbiorach",
          cost: { min: 0, max: 0 }, note: "stała cena za zdefiniowany zakres",
          pros: ["Znasz koszt z góry", "Ryzyko dodatkowych ilości po stronie wykonawcy", "Łatwo dopasować do transz kredytu"],
          cons: ["Zakres musi być opisany bardzo dokładnie", "Wykonawca wycenia z zapasem na ryzyko"],
          why: "Najlepszy, gdy projekt jest kompletny i opisałeś zakres w załączniku. Dla stanu surowego i dachu to standard." },
        { id: "kosztorys", name: "Kosztorys powykonawczy (obmiar)",
          cost: { min: 0, max: 0 }, note: "płacisz za faktyczne ilości",
          pros: ["Płacisz tylko za to, co wykonano", "Elastyczny przy zmianach w trakcie"],
          cons: ["Koszt końcowy znany dopiero po zakończeniu", "Wymaga obmiaru i kontroli ilości"],
          why: "Ma sens przy robotach o niepewnej ilości: roboty ziemne, wymiana gruntu, ogród." },
        { id: "godzinowo", name: "Stawka godzinowa albo dniówkowa",
          cost: { min: 0, max: 0 }, note: "dla drobnych prac",
          pros: ["Szybko i bez wyceny", "Dobre do drobnych poprawek"],
          cons: ["Brak motywacji do tempa", "Koszt trudny do przewidzenia"],
          why: "Tylko do drobnych poprawek i prac, których nie da się opisać." }
      ]
    },
    tips: [
      "<b>Zaliczka do 10–20% i tylko na materiał.</b> Pieniądze za pracę wypłacaj po odbiorze etapu. Ekipa, która żąda 50% z góry, zwykle ma kłopoty finansowe.",
      "<b>Kara 0,2–0,5% wynagrodzenia za dzień zwłoki.</b> Orientacyjnie, z górnym limitem 10–15% umowy. Wpisz też kary za brak sprzątania i niezgodności z projektem.",
      "<b>Kaucja gwarancyjna 5–10%.</b> Zatrzymaj ją do końca okresu gwarancji, np. 12–24 miesięcy. To jedyny realny sposób na wymuszenie poprawek.",
      "<b>Protokół odbioru z listą usterek.</b> Podpisuj go dopiero po sprawdzeniu, zwłaszcza prac zakrywanych (zbrojenie, izolacje, instalacje).",
      "<b>Zmiany tylko na piśmie.</b> Aneks lub e-mail z ceną dodatkowych prac, zanim zaczną się roboty. Ustne ustalenia znikają przy pierwszym sporze."
    ],
    mistakes: [
      "<b>Umowa „na gębę” albo jednostronicowa.</b> Przy sporze nie ma co wskazać, a sąd opiera się na dokumentach.",
      "<b>Płatność za całość przed odbiorem.</b> Wykonawca nie ma wtedy powodu, żeby kończyć poprawki.",
      "<b>Brak określenia materiałów.</b> „Beton B20” albo „pustak 25 cm, klasa X” ma być w umowie, a nie „materiały według uznania wykonawcy”.",
      "<b>Brak terminu poprawek usterek.</b> Zapisz, że usterki usuwa się w 14 dni od zgłoszenia."
    ],
    formal: [
      ["Umowa o roboty budowlane", "w formie pisemnej, z załącznikami: zakres, kosztorys, harmonogram, projekt"],
      ["Protokół odbioru częściowego i końcowego", "podpisują inwestor, wykonawca i kierownik budowy"],
      ["Gwarancja i rękojmia", "gwarancja z umowy; rękojmia za wady nieruchomości wg Kodeksu cywilnego, orientacyjnie 5 lat; sprawdź u prawnika"],
      ["Ubezpieczenie OC wykonawcy", "kopia polisy jako załącznik do umowy"]
    ],
    checklist: [
      "Zakres prac opisany w załączniku z odniesieniem do projektu",
      "Ustalone terminy etapów i kary za zwłokę",
      "Zaliczka do 10–20%, reszta za odbiory",
      "Kaucja gwarancyjna zatrzymana do końca gwarancji",
      "Wskazane materiały i klasy",
      "Zasady zmian i prac dodatkowych na piśmie",
      "Umowę przejrzał kierownik budowy lub prawnik"
    ],
    quiz: [{
      q: "Wykonawca żąda 50% wynagrodzenia z góry „na materiały”. Co jest rozsądną odpowiedzią?",
      a: ["Zgodzić się, bo to normalne", "Zaproponować zaliczkę do ok. 10–20% i płatności po odbiorach", "Zapłacić całość, żeby mieć święty spokój"],
      correct: 1,
      explain: "<b>Płać za wykonane prace.</b> Zaliczka na start jest zwykle niewielka. Duża płatność z góry zabiera ci jedyne narzędzie nacisku, czyli zatrzymaną zapłatę."
    }]
  },

  /* 11 ----------------------------------------------------------------- */
  {
    id: "ubezpieczenie",
    title: "Ubezpieczenie budowy",
    lead: "Na placu budowy leżą materiały za setki tysięcy złotych, a dom jest w połowie bez dachu. Polisa budowlana kosztuje niewiele, a chroni przed katastrofą.",
    time: "1–2 dni", team: "ty, agent lub broker",
    cost: { min: 3000, max: 8000, note: "polisa budowlana na ok. 1,7–2,1 mln zł wartości robót, orientacyjnie 0,15–0,4% wartości" },
    facts: [["Składka", "orientacyjnie 3–8 tys. zł", "shield"], ["Okres", "do końca budowy", "clock"]],
    body: `
      <p>Ubezpieczenie budowy obejmuje zwykle <strong>szkody losowe</strong> (pożar, wichura, zalanie, grad), <strong>kradzież i dewastację</strong> materiałów oraz <strong>OC</strong> za szkody wyrządzone innym, np. uszkodzenie sąsiedniego budynku. Bank zwykle wymaga polisy z <strong>cesją praw na bank</strong> w okresie kredytowania.</p>
      <p>Po zakończeniu budowy zamieniasz polisę budowlaną na standardowe ubezpieczenie domu. Przy zadaniach zleconych firmom sprawdź też, czy ich OC obejmuje szkody na twojej budowie.</p>`,
    decision: {
      question: "Jaki zakres ubezpieczenia?",
      intro: "Składka zależy od wartości robót i zakresu. Koszt jest w kroku, wybór tylko zmienia zakres ochrony.",
      chosen: "pelny",
      options: [
        { id: "pelny", name: "Pełna polisa budowlana (szkody, kradzież, OC)",
          cost: { min: 0, max: 0 }, note: "zakres jak w bazowym koszcie",
          pros: ["Chroni przed szkodami, kradzieżą i roszczeniami osób trzecich", "Spełnia wymagania banku", "Obejmuje materiały i roboty"],
          cons: ["Składka kilka tysięcy zł", "Franszyzy i wyłączenia (np. niezabezpieczony plac)"],
          why: "Za kilka tysięcy zł chronisz inwestycję za 2,3 mln zł. Warunek, żeby spać spokojnie." },
        { id: "bank", name: "Tylko to, czego wymaga bank",
          cost: { min: -3000, max: -1000 }, note: "podstawowy pakiet",
          pros: ["Niższa składka", "Szybko załatwiony"],
          cons: ["Brak OC budowy i kradzieży materiałów", "Szkoda u sąsiada pozostaje na twoich barkach"],
          why: "Nie polecamy. Tańszy o kilkaset–kilka tysięcy zł pakiet nie obejmuje ryzyk, które najczęściej się materializują." },
        { id: "brak", name: "Bez ubezpieczenia (jeśli bank nie wymaga)",
          cost: { min: -8000, max: -3000 }, note: "nie polecamy",
          pros: ["Zero składki"],
          cons: ["Jedna wichura albo pożar to strata setek tysięcy zł", "OC za szkody wyrządzone osobom trzecim"],
          why: "Ryzyko nieproporcjonalne do oszczędności." }
      ]
    },
    tips: [
      "<b>Wykup polisę przed wbiciem pierwszej łopaty.</b> Szkody w stanie otwartym, np. zalanie fundamentu, zdarzają się wcześnie.",
      "<b>Podaj pełną wartość robót.</b> Zaniżona suma ubezpieczenia oznacza niepełne odszkodowanie (niedoubezpieczenie).",
      "<b>Zabezpiecz plac.</b> Ogrodzenie, kłódka na kontenerze, odbiór dostaw na miejscu. Ubezpieczyciele mogą odmówić wypłaty za kradzież z niezabezpieczonego placu.",
      "<b>Sprawdź OC ekip.</b> Osobna polisa wykonawców chroni przed szkodami przez nich spowodowanymi, a nie zastępuje twojej polisy budowlanej."
    ],
    mistakes: [
      "<b>Polisa „na dom” kupiona dopiero po wprowadzeniu.</b> Najgroźniejszy okres to czas budowy, nie mieszkania.",
      "<b>Zaniżona wartość robót.</b> Odszkodowanie jest proporcjonalnie obniżone, a składka różni się o niewielkie sumy.",
      "<b>Brak zgłoszenia szkody w terminie.</b> Zgłoś szkodę od razu i zabezpiecz zdjęciami oraz protokołem policji przy kradzieży."
    ],
    formal: [
      ["Polisa ubezpieczenia budowy (CAR dla inwestora indywidualnego)", "ubezpieczyciel; zakres, suma i franszyzy w OWU"],
      ["Cesja praw z polisy na bank", "bank; wymagana przy kredycie hipotecznym"],
      ["Polisa OC wykonawców", "kopie od ekip, załączniki do umów"]
    ],
    checklist: [
      "Polisa budowlana wykupiona przed rozpoczęciem robót",
      "Suma ubezpieczenia równa wartości robót",
      "Cesja praw na bank, jeśli wymaga",
      "Kopie polis OC wszystkich wykonawców",
      "Plac budowy zabezpieczony zgodnie z warunkami polisy"
    ],
    quiz: [{
      q: "Dlaczego polisa budowlana powinna być wykupiona przed rozpoczęciem robót?",
      a: ["Bo wymaga tego urząd przy pozwoleniu", "Bo szkody mogą wystąpić już na pierwszym etapie, a nikt cię wtedy nie chroni", "Bo składka rośnie z każdym miesiącem"],
      correct: 1,
      explain: "<b>Ryzyko zaczyna się od pierwszego dnia.</b> Zalany wykop, skradziony sprzęt, szkoda u sąsiada podczas robót ziemnych: polisa musi działać od startu."
    }]
  }

  ]
});
