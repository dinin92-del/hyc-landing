# Polityka prywatności

Hyc! · Wersja 1.12 · obowiązuje od **20 listopada 2026 r.**

→ Regulamin · → Warunki bezpiecznego korzystania

## 0. Czego dotyczy ta polityka

Polityka obejmuje **aplikację mobilną Hyc!** oraz **stronę gethyc.com**, dalej łącznie „Usługa”. Tam, gdzie zasada dotyczy tylko jednego z nich, jest to wskazane wprost; bez takiego zastrzeżenia zapis dotyczy obu.

**Strona gethyc.com nie używa ciasteczek.** W pamięci karty przeglądarki zapisuje wyłącznie znacznik, że animacja powitalna już się odtworzyła; znacznik nie opuszcza urządzenia i znika po zamknięciu karty. Nie ma na niej formularzy. Mierzymy na niej tylko odsłony i kliknięcia w przyciski, bez profilowania osób (pkt 4.2). To statyczna wizytówka z odnośnikami do sklepów i do niniejszych dokumentów. Jak każdy serwis WWW jest udostępniana przez hosting (GitHub Pages, pkt 5), który rejestruje standardowe **logi techniczne żądań (adres IP, typ przeglądarki, czas)**. Służą one wyłącznie utrzymaniu i zabezpieczeniu serwisu i nie są przez nas łączone z Twoim kontem w Aplikacji.

Wszystkie pozostałe punkty tej polityki, poza pkt 4.2, opisują **Aplikację**.

## 1. Administrator danych

Administratorem danych osobowych jest **Józef Kołaczyk, ul. Piątkowska 43/49, 60-645 Poznań**, działający jako osoba fizyczna („Operator”). Kontakt w sprawach danych: **hyc.kontakt@gmail.com**.

## 2. Jakie dane przetwarzamy

### 2.1. Dane konta

- adres e-mail oraz nazwa wyświetlana,
- przy logowaniu Google/Apple: identyfikator dostawcy, adres e-mail udostępniony przez dostawcę oraz imię lub nazwa z Twojego profilu u dostawcy, jeśli dostawca ją przekazuje. Na tej podstawie ustawiamy nazwę wyświetlaną. Możesz ją zmienić w Profilu. Nazwa zmieniona w Profilu nie jest nadpisywana przy kolejnym logowaniu,
- identyfikator użytkownika nadany przez Firebase Authentication,
- zapis zaakceptowanej wersji Regulaminu (numer wersji i data) oraz zapisane przez Ciebie punkty,
- polubione przez Ciebie punkty i komentarze oraz punkty, które obserwujesz dzwoneczkiem (pkt 2.6),
- skrzynka powiadomień przypisana do Twojego konta (pkt 2.5),
- jeśli włączysz powiadomienia na telefonie: token Twojej instalacji do powiadomień push, zapisany przy Twoim koncie (pkt 2.5),
- propozycje zmian punktów, które wysłałeś (pkt 2.7),
- liczniki techniczne chroniące przed nadużyciami (m.in. liczba ostatnio dodanych komentarzy i liczba treści odrzuconych przez filtr), przypisane do konta.

Nie przechowujemy Twojego hasła do logowania Google/Apple. Uwierzytelnienie odbywa się po stronie dostawcy, a Firebase Authentication przechowuje wyłącznie token sesji. Dla kont e-mail hasło jest przechowywane przez Firebase Authentication wyłącznie w postaci skrótu.

### 2.2. Treści użytkownika (UGC)

- opisy, komentarze, nazwy oraz punkty (w tym ich współrzędne) dodawane przez Ciebie, wraz z datą i nazwą autora (nazwa autora jest widoczna publicznie przy opisach, komentarzach, zdjęciach i punktach; możesz ją zmienić w Profilu, a nową nazwę podmieniamy w tle przy Twoich dotychczasowych treściach; przy części starszych treści może zostać poprzednia nazwa, a jej usunięcia możesz zażądać mailem na adres z pkt 11),
- zdjęcia punktów dodawane przez Ciebie. Przed wysłaniem Aplikacja usuwa z pliku metadane EXIF (w tym współrzędne GPS zapisane przez aparat) i zmniejsza zdjęcie; na serwer trafia sam obraz wraz z datą i nazwą autora.

Przy Twoich opisach, komentarzach, zdjęciach i punktach oraz w znaczniku ostatniej aktywności przy punkcie zapisujemy też losowy identyfikator Twojego konta nadany przez Firebase Authentication. Nie jest to adres e-mail ani imię. Aplikacja go nie wyświetla, ale dane te są publicznie dostępne, więc identyfikator może być widoczny przy technicznym odczycie danych i pozwala powiązać ze sobą treści dodane z jednego konta. Taki identyfikator zapisujemy także przy Twoich propozycjach zmian punktów, ale propozycje czyta wyłącznie moderator i Ty (pkt 2.7).

Operator może wykorzystywać treści UGC w formie **zanonimizowanej i zagregowanej** (bez powiązania z Twoją tożsamością) do celów statystycznych i rozwoju Aplikacji. Dane w tej formie nie stanowią danych osobowych w rozumieniu RODO.

Dane faktograficzne o punktach (położenie, nazwa, rodzaj, numer telefonu), także o punktach dodanych lub poprawionych przez użytkowników, są częścią publicznej bazy punktów udostępnianej na licencji ODbL 1.0 (zob. Regulamin, rozdział „Dane o punktach i licencje”). Do tej bazy nie trafia nazwa autora ani identyfikator konta. Opisy, komentarze i zdjęcia nie są jej częścią; zakres licencji na Treści określa Regulamin. Osobom trzecim możemy udostępniać wyłącznie zestawienia zagregowane, z których nie da się zidentyfikować użytkownika.

### 2.3. Lokalizacja

Pozycja GPS jest używana **na urządzeniu** do wyznaczenia najbliższego punktu i nawigacji. Gdy masz nadaną zgodę systemową, Aplikacja odczytuje pozycję także przy starcie i po powrocie do Aplikacji, żeby przygotować nawigację. Po pierwszym ustaleniu pozycji od uruchomienia wczytuje też w tle mapę w kadrze wokół niej. Same współrzędne zostają wtedy na urządzeniu, ale serwer kafli otrzymuje żądania kafli tego obszaru (zob. niżej). Aby wybrać najbliższy punkt po szlaku i obliczyć trasę, Twoja aktualna pozycja (punkt startowy) oraz współrzędne celu, a gdy Aplikacja porównuje kilka punktów, także ich współrzędne, są przesyłane do dostawcy routingu (**Seznam.cz a.s. / mapy.cz**) wyłącznie na czas obliczenia trasy. **Nie przechowujemy Twojej bieżącej pozycji ani historii tras na naszych serwerach.** Wyjątkiem jest sytuacja, gdy świadomie dodajesz punkt: wtedy zapisywane są współrzędne tego punktu (a nie Twojej trasy). Aplikacja nie korzysta z lokalizacji w tle.

Do statystyk (pkt 4) **nie trafiają Twoje współrzędne**. Trafia natomiast, gdy akurat jesteś w parku narodowym albo w jego 5-kilometrowym buforze, **nazwa tego parku** wraz z informacją, czy chodzi o teren parku, czy o bufor. Przynależność do parku wylicza sama Aplikacja **na Twoim urządzeniu**, porównując pozycję z granicami zapisanymi w plikach Aplikacji; na zewnątrz wychodzi wyłącznie gotowa nazwa (np. „tatrzanski”), nigdy pozycja, z której powstała. To informacja o **przybliżonym rejonie** rzędu setek kilometrów kwadratowych, nie o Twoim miejscu pobytu.

**Kafle mapy pobieramy z naszego własnego serwera** (`tiles.hycmap.com`, hosting Cloudflare R2). Serwer ten odbiera adres IP urządzenia oraz numery kafli, które oglądasz, a numer kafla wskazuje obszar mapy, więc **z samego ruchu wynika przybliżony rejon, w którym korzystasz z Aplikacji**. Nie łączymy tych żądań z Twoim kontem i nie budujemy z nich historii tras.

### 2.4. Dane techniczne i diagnostyczne

Korzystamy z narzędzi Google (Firebase Analytics, Firebase Crashlytics, Firebase Remote Config i Firebase Installations) oraz z narzędzia analitycznego **PostHog** (chmura w Unii Europejskiej) do zbierania statystyk użycia i raportów o awariach. Dane te służą poprawie stabilności i funkcji Aplikacji.

Konkretnie: narzędzia te zapisują na urządzeniu **losowe identyfikatory instalacji** (identyfikator instancji Aplikacji i identyfikator instalacji Firebase, identyfikator instalacji Crashlytics oraz identyfikator PostHog). Raport o awarii zawiera model urządzenia, wersję systemu i identyfikator instalacji. Analytics dodaje dane o urządzeniu i środowisku: model, wersję systemu i Aplikacji, język oraz kraj, region i miasto ustalane z adresu IP. Remote Config pobiera ustawienia Aplikacji (np. informację o wersji wydania) i przy tym wysyła identyfikator instalacji oraz podstawowe dane o urządzeniu. Na iOS PostHog może dodatkowo wysłać zdarzenie techniczne wielokrotnego dotknięcia tego samego miejsca ekranu (położenie dotyku na ekranie i nazwa ekranu). Nie zawierają one Twojego imienia, adresu e-mail ani współrzędnych i nie służą do reklam, ale są to identyfikatory przypisane do instalacji, a nie dane w pełni anonimowe. Odinstalowanie Aplikacji kończy ich żywotność.

Statystyki i raporty o awariach są włączone od pierwszego uruchomienia Aplikacji. Zbieranie możesz wyłączyć przełącznikiem **Anonimowe statystyki** w Menu → O aplikacji (sekcja Statystyki, na dole ekranu). Przełącznik obejmuje Firebase Analytics, PostHog i Crashlytics. Crashlytics przestaje zbierać raporty o awariach dopiero od następnego uruchomienia Aplikacji. Remote Config, Firebase Installations i App Check działają dalej, bo służą do pobierania ustawień wydania i do ochrony backendu; Remote Config wysyła przy tym identyfikator instalacji. Możesz też zgłosić sprzeciw mailem na adres z pkt 11 (pkt 7).

**Weryfikacja autentyczności Aplikacji (App Check).** Żeby chronić backend przed nadużyciami (boty, podrobione klienty), każde żądanie do naszych usług niesie token potwierdzający, że pochodzi z prawdziwej instalacji Aplikacji. Token wystawia **Google Play Integrity** (Android) lub **Apple App Attest / DeviceCheck** (iOS). Mechanizm sprawdza integralność aplikacji i urządzenia; nie przekazujemy przy tym Twojej tożsamości ani lokalizacji.

Korzystając z usług sieciowych (logowanie, moderacja, obliczanie tras, sprawdzanie łączności), dostawcy wymienieni w pkt 5 odbierają dane techniczne niezbędne do realizacji żądania, w tym **adres IP** urządzenia i metadane połączenia. Gdy system nie potwierdza połączenia z siecią, Aplikacja sprawdza łączność krótkim zapytaniem do serwera `api.mapy.com` (Seznam.cz). Zapytanie nie zawiera współrzędnych ani danych konta, ale serwer odbiera adres IP urządzenia.

### 2.5. Powiadomienia

**Lista powiadomień w Aplikacji.** Gdy ktoś zareaguje na punkt, który obserwujesz albo który dodałeś, na liście powiadomień (ikona dzwonka w Aplikacji) pojawia się wpis. Wpis tworzy nasz serwer. Zawiera rodzaj zdarzenia (komentarz, odpowiedź na komentarz, zdjęcie, uzupełnienie punktu, zatwierdzona zmiana punktu, polubienie, nowy obserwujący, zapisanie punktu, polubienie komentarza), identyfikator punktu, liczbę zdarzeń, czas, nazwy wyświetlane najwyżej dwóch ostatnich osób oraz, przy pojedynczym komentarzu lub odpowiedzi, początek jego tekstu (do 140 znaków, tylko tekst, który przeszedł nasz filtr). Zdarzenia tego samego rodzaju przy tym samym punkcie łączą się w jeden wpis. Wpis widzisz tylko Ty. Wpisy są usuwane automatycznie po 90 dniach od ostatniego zdarzenia w danym wpisie. Wcześniej usuwamy wpis lub jego część, gdy komentarz albo zdjęcie, którego dotyczy, zostanie ukryte lub usunięte.

**Kto dostaje wpisy.** Wpisy o punkcie dostajesz, gdy włączysz przy nim dzwoneczek. Dzwoneczek włącza się też automatycznie przy punktach, które dodałeś, przy punktach, w których jako pierwszy dodałeś opis, i przy punktach, w których Twoja propozycja zmiany została zatwierdzona. Możesz go wyłączyć w karcie punktu. Wyłączony dzwoneczek zapisujemy przy Twoim koncie jako wyciszenie, żebyśmy nie włączyli go z powrotem sami. Odpowiedź na Twój komentarz dostajesz także bez dzwoneczka. Polubienie punktu, zapisanie punktu i nowego obserwującego zgłaszamy autorowi punktu i autorowi jego pierwszego opisu, jeśli nie wyłączyli dzwoneczka przy tym punkcie. Polubienie komentarza zgłaszamy autorowi komentarza.

**Powiadomienia na telefonie (push).** Na iPhonie i na Androidzie 13 lub nowszym Aplikacja prosi o zgodę systemu na powiadomienia tylko po Twoim kliknięciu: w kroku „Włącz powiadomienia” na ekranie powitalnym, przy włączaniu dzwoneczka przy punkcie albo w Menu, w Ustawieniach powiadomień. Na Androidzie 12 lub starszym system nie pokazuje takiego okna, a powiadomienia Aplikacji są domyślnie włączone w ustawieniach telefonu. Tam po zalogowaniu zapisujemy token bez osobnego kliknięcia, dopóki nie wyłączysz powiadomień Aplikacji w telefonie albo przełącznika „Powiadomienia na telefonie” w Menu, w Ustawieniach powiadomień. Bez zgody systemowej albo przy wyłączonych powiadomieniach Aplikacja nie zapisuje tokenu i działa tak samo, a wpisy czytasz na liście w Aplikacji. Gdy jesteś zalogowany, powiadomienia są dozwolone w telefonie, a przełącznik „Powiadomienia na telefonie” w Ustawieniach powiadomień jest włączony (domyślnie jest włączony na każdym telefonie), Aplikacja pobiera od Google (Firebase Cloud Messaging) token Twojej instalacji i zapisuje go przy Twoim koncie. Powiadomienia wysyłamy na najwyżej 10 najnowszych instalacji przypisanych do konta. Token usuwamy, gdy wyłączysz przełącznik, cofniesz zgodę albo wyłączysz powiadomienia Aplikacji w telefonie przy zalogowanym koncie albo usuniesz konto. Po wylogowaniu Aplikacja nie może już usunąć tokenu z naszej bazy, więc usuwa go nasz serwer przy najbliższej próbie wysłania powiadomienia, jeśli Google zgłosi token jako nieaktywny.

Treść powiadomienia składa nasz serwer: tytuł to nazwa punktu, a w treści jest nazwa wyświetlana osoby lub osób (do dwóch) i, przy pojedynczym komentarzu lub odpowiedzi, początek jego tekstu (do 100 znaków). Ta treść może być widoczna na ekranie blokady telefonu. Polubienia, nowych obserwujących i zapisania punktu zbieramy w jedno zbiorcze powiadomienie wysyłane o stałych porach, dwa razy dziennie. Powiadomienia dostarcza Google (Firebase Cloud Messaging), a na iPhone'ach także Apple (Apple Push Notification service). Obie firmy dostają token instalacji i treść powiadomienia. Token powstaje wyłącznie przy dozwolonych powiadomieniach (po Twojej zgodzie, a na Androidzie 12 lub starszym przy włączonych powiadomieniach Aplikacji w telefonie) i nie trafia do narzędzi statystycznych.

Powiadomienia na telefonie wyłączysz w Menu, w Ustawieniach powiadomień, albo w ustawieniach systemu telefonu. Lista powiadomień w Aplikacji działa nadal.

### 2.6. Polubienia, obserwowanie i zapisywanie punktów

Gdy polubisz punkt lub komentarz, włączysz dzwoneczek albo zapiszesz punkt, zapisujemy to przy Twoim koncie: identyfikator punktu (przy polubieniu komentarza także komentarza), datę, przy zapisanym punkcie także jego nazwę, rodzaj i położenie (położenie punktu, nie Twoje), a przy dzwoneczku informację, czy jest włączony czy wyciszony. Tę listę w Aplikacji widzisz tylko Ty, inni użytkownicy nie mogą jej odczytać.

Publicznie widoczne są wyłącznie liczby: ile polubień, zapisań i obserwujących ma punkt oraz ile polubień ma komentarz, bez wskazania osób. Autor punktu i autor jego pierwszego opisu widzą w swojej skrzynce powiadomień, że ktoś polubił punkt albo zaczął go obserwować, wraz z nazwą wyświetlaną tej osoby z chwili zdarzenia, przez 90 dni (pkt 2.5). Autor komentarza widzi nazwę osoby, która go polubiła. Zapisanie punktu zgłaszamy jego autorowi bez podawania nazwy osoby, bo zapisane punkty są prywatne.

Polubienie cofasz ponownym kliknięciem, zapis usuwasz w Aplikacji, dzwoneczek wyłączasz w karcie punktu. Po cofnięciu polubienia, zapisu lub obserwowania wycofujemy odpowiadający im wpis z cudzej skrzynki.

### 2.7. Propozycje zmian punktów i kolejność zdjęć

Przycisk „Edytuj punkt” pozwala zaproponować zmianę nazwy, rodzaju, opisu, numeru telefonu lub położenia punktu albo usunięcie zdjęcia. Propozycję zapisujemy razem z identyfikatorem Twojego konta, Twoją nazwą wyświetlaną, treścią proponowanych zmian, stanem punktu z chwili propozycji i datą. Każdą propozycję sprawdza moderator (człowiek). Do jego decyzji nic na punkcie się nie zmienia, a Ty możesz propozycję wycofać. Po decyzji wysyłamy na adres e-mail konta wiadomość o wyniku, a przy odrzuceniu także powód podany przez moderatora (Resend, pkt 5). Zatwierdzona zmiana staje się częścią danych punktu na zasadach z pkt 2.2: do bazy punktów nie trafia nazwa autora ani identyfikator konta. Na jedno konto przypada najwyżej 10 propozycji na dobę, a licznik prowadzimy pod skrótem identyfikatora konta.

Kolejność zdjęć ustawioną w karcie punktu zapisujemy jako publiczną listę identyfikatorów zdjęć z datą, bez powiązania z Twoim kontem.

## 3. Moderacja treści

Aby chronić bazę przed spamem i treściami niezgodnymi z prawem, korzystamy z **automatycznego filtra słów i wzorców** działającego w naszym backendzie. **Nie przekazujemy Twoich treści żadnemu zewnętrznemu modelowi ani usłudze moderacyjnej.** Moderacja wygląda tak:

- **opisy i nazwy punktów:** po dodaniu sprawdza je filtr (zwykle w kilka sekund). Treść wątpliwa (wulgaryzmy, groźby, wiele linków, numerów telefonu lub adresów e-mail naraz, treść wyglądająca na reklamę lub spam) trafia do ręcznego przeglądu moderatora i do jego decyzji jest ukryta, a obelgi na tle rasowym lub narodowym oraz treść wyglądająca na przypadkowy ciąg znaków są ukrywane automatycznie. Do przeglądu moderatora trafia też numer telefonu lub link w nazwie punktu, nowy opis złożony prawie wyłącznie z danych kontaktowych oraz nadmiar opisów dodanych z jednego konta w krótkim czasie. Numer telefonu dodany przez użytkownika w osobnym polu formularza trafia do bazy razem z opisem, gdy filtr go przepuści;
- **komentarze:** komentarz użytkownika, który ma już kilka zaakceptowanych komentarzy, jest widoczny od razu, a filtr sprawdza go po fakcie. Komentarze nowych użytkowników są ukryte do czasu sprawdzenia przez filtr (zwykle kilka sekund). Wulgaryzmy, obelgi na tle rasowym lub narodowym oraz treść wyglądająca na przypadkowy ciąg znaków są ukrywane automatycznie, podobnie nadmiar komentarzy dodanych w krótkim czasie (do przeglądu moderatora). Groźby, reklamy i treść wyglądająca na spam (w tym wiele linków, adresów e-mail lub numerów telefonu naraz) kierowane są do przeglądu moderatora, a pojedynczy link, adres e-mail lub numer telefonu nie jest powodem do przeglądu, chyba że towarzyszy mu hasło reklamowe albo komentarz składa się wyłącznie z danych kontaktowych; komentarz kierowany do przeglądu bywa ukryty do jego decyzji;
- **zdjęcia:** nie są analizowane automatycznie i podlegają wyłącznie moderacji po zgłoszeniu. Są widoczne od razu, chyba że towarzyszą nowo dodawanemu opisowi; wtedy publikują się razem z rozstrzygnięciem tego opisu. Widoczne zdjęcie usuwa autor albo moderator po zgłoszeniu;
- **zgłoszenia:** treści zgłoszone przez innych użytkowników ocenia moderator (człowiek). Moderator może też zablokować konto naruszające Regulamin. Konto może zostać zablokowane również automatycznie, w razie seryjnego spamu (kilka treści odrzuconych przez filtr przy jednoczesnym przekroczeniu limitu komentarzy);
- **propozycje zmian punktów:** każdą ocenia moderator (człowiek). Dopiero zatwierdzona zmiana trafia do punktu.

Automatyczne ukrycie treści nie wywołuje skutków prawnych poza ukryciem tej treści. Jeśli uważasz, że ukryto ją niesłusznie albo zablokowano Twoje konto, napisz na adres z pkt 11, a rozpatrzy to człowiek. Powód ukrycia treści lub blokady podamy na Twoją prośbę.

Każda decyzja filtra i każda decyzja moderatora jest zapisywana w rejestrze moderacyjnym (append-only) dla audytu i jakości usługi. Wpis zawiera kopię tekstu ocenianego opisu lub komentarza, która zostaje także wtedy, gdy samą treść usunięto z Aplikacji. Po usunięciu konta dane autora w rejestrze są anonimizowane, ale sama treść i decyzja pozostają. Dla propozycji zmian punktów rejestr zawiera nazwy zmienionych pól, decyzję i powód, bez treści propozycji.

**Podstawa prawna:** art. 6 ust. 1 lit. f RODO (prawnie uzasadniony interes: utrzymanie jakości i bezpieczeństwa usługi).

## 4. Cele i podstawy prawne (RODO)

- prowadzenie konta i świadczenie funkcji społecznościowych: wykonanie umowy (art. 6 ust. 1 lit. b),
- skrzynka powiadomień, polubienia, obserwowanie, zapisywanie punktów i propozycje zmian punktów: świadczenie funkcji społecznościowych, wykonanie umowy (art. 6 ust. 1 lit. b),
- powiadomienia push na telefonie: zgoda wyrażona w oknie systemowym telefonu (art. 6 ust. 1 lit. a), a na Androidzie 12 lub starszym, gdzie system nie pokazuje takiego okna: świadczenie funkcji powiadomień o punktach (art. 6 ust. 1 lit. b); powiadomienia wyłączysz w każdej chwili w ustawieniach telefonu lub w Menu, w Ustawieniach powiadomień,
- moderacja, bezpieczeństwo i obsługa zgłoszeń: prawnie uzasadniony interes (art. 6 ust. 1 lit. f),
- statystyki i diagnostyka: prawnie uzasadniony interes (art. 6 ust. 1 lit. f); dane nie są łączone z Twoim kontem, bez identyfikatorów reklamowych,
- obliczenie trasy i wskazanie najbliższego punktu, w tym przekazanie dostawcy routingu współrzędnych startu i celu oraz porównywanych punktów: wykonanie usługi na Twoje żądanie (art. 6 ust. 1 lit. b); dostęp Aplikacji do GPS wymaga zgody systemowej urządzenia, którą możesz cofnąć w ustawieniach telefonu,
- utrzymanie i zabezpieczenie strony gethyc.com (logi hostingu) oraz udostępnianie bazy punktów na licencji ODbL zgodnie z jej warunkami: prawnie uzasadniony interes (art. 6 ust. 1 lit. f),
- wypełnienie obowiązków prawnych (np. podatkowych, jeśli wystąpią płatności): art. 6 ust. 1 lit. c.

**Nie sprzedajemy Twoich danych osobowych i nie udostępniamy ich reklamodawcom.** Nie budujemy profili użytkowników. Poza automatycznym ukrywaniem treści i blokadą konta w razie seryjnego spamu (pkt 3) nie podejmujemy wobec Ciebie decyzji wyłącznie zautomatyzowanych; od tych decyzji możesz żądać rozpatrzenia przez człowieka (pkt 11). Aplikacja **nie zawiera żadnego modułu reklamowego**: nie wyświetlamy reklam, nie korzystamy z identyfikatorów reklamowych i nie przekazujemy danych sieciom reklamowym. Udostępnianie danych o punktach opisuje pkt 2.2.

**Podanie danych jest dobrowolne.** Bez adresu e-mail i nazwy wyświetlanej nie założysz konta; przeglądanie mapy i nawigacja działają bez konta. Bez zgody systemowej na lokalizację Aplikacja nie wskaże najbliższego punktu. Bez zgody na powiadomienia Aplikacja działa tak samo, a wpisy czytasz na liście powiadomień.

### 4.1. Zakres statystyk (Analytics)

Aplikacja wysyła zdarzenia z następujących kategorii:

- **wyszukanie punktu i dotarcie do niego**, czyli czy ludzie faktycznie docierają tam, dokąd ich prowadzimy,
- **przebieg nawigacji:** jej rozpoczęcie, świadoma zmiana trybu wyszukiwania i kategorii, zakończenie wraz z powodem, użyte przybliżenie mapy, wyświetlenie samouczka,
- **przycisk Hyc!:** jego tapnięcie, tapnięcie pominięte wraz z powodem (np. gdy wyszukiwanie już trwa) oraz zamknięcie menu kategorii wraz z powodem i wybraną kategorią,
- **trasa:** wyznaczenie trasy (dystans, czas, przewyższenie), nieudane wyznaczenie wraz z etapem niepowodzenia, automatyczne uproszczenie zapytania o trasę przy słabym łączu oraz czasy etapów wyznaczania trasy w milisekundach (sprawdzenie łączności, ustalenie pozycji, zapytanie o trasę, całość) wraz z wynikiem,
- **interakcje z kartą punktu:** wejście na kartę (z rodzajem punktu i informacją, skąd na nią weszłeś), zapisanie punktu, polubienie punktu lub komentarza i jego cofnięcie, włączenie lub wyłączenie dzwoneczka, dodanie komentarza, tapnięcie „Odpowiedz” pod komentarzem, zobaczenie komunikatu o odrzuceniu Twojego komentarza, tapnięcie numeru telefonu (**bez samego numeru**), przeciągnięcie karty, ekran logowania wyświetlony przed taką akcją wraz z jego wynikiem (zalogowanie albo zamknięcie), otwarcie listy powiadomień i tapnięcie wpisu, wynik zgody na powiadomienia (udzielona, odmówiona, zablokowana w telefonie lub pominięta), wybór w oknie o wyłączonych powiadomieniach, zmiana przełącznika powiadomień, tapnięcie w powiadomienie push, a także rozpoczęcie, wysłanie, porażka i porzucenie propozycji zmiany punktu (tylko które pola zmieniono i ile zdjęć, bez treści i bez nazwy),
- **dodawanie treści:** dodanie punktu (jego rodzaj i informacja, czy ma opis) i zdjęć (liczba, powodzenie wczytania), zapisanie opisu do istniejącego punktu oraz odpowiedź na okienko o podobnym punkcie w pobliżu (etap, powód, kategoria odległości i wybór, bez identyfikatora punktu i bez współrzędnych),
- **lokalizacja:** nadanie lub odmowa zgody systemowej oraz wynik ustalenia pozycji (dokładność w metrach, powód niepowodzenia), **bez współrzędnych**,
- **wejście do parku narodowego** (zob. niżej),
- **mapa:** wyświetlenie komunikatu, że punkty na mapie się nie wczytały,
- **cykl życia Aplikacji:** otwarcie, podpowiedź o aktualizacji, tapnięcie przycisku wsparcia projektu.

Do zdarzeń dołączamy identyfikator punktu, tryb wyszukiwania, źródło punktu (baza punktów w Aplikacji / dodany przez użytkowników) oraz proste etykiety i liczby techniczne (np. powód zakończenia nawigacji, dystans w metrach lub kilometrach, czas w minutach lub milisekundach). **Nie dołączamy Twojego identyfikatora użytkownika, adresu e-mail, nazwy wyświetlanej ani współrzędnych** i nie łączymy tych zdarzeń z Twoim kontem. Zdarzenia są jednak przypisane do instalacji (pkt 2.4), więc są to dane pseudonimowe, a nie w pełni anonimowe. Analizujemy je zbiorczo, po to, żeby wiedzieć, które funkcje działają, a które zawodzą. Firebase Analytics zbiera ponadto własne zdarzenia automatyczne (m.in. pierwsze otwarcie, początek sesji, wyświetlenia ekranów).

**Park narodowy.** Zdarzenia wyszukania, dotarcia i wejścia do parku niosą **nazwę parku narodowego** oraz informację, czy chodzi o teren parku, czy o jego 5-kilometrowy bufor. To dana o **przybliżonym rejonie**. Klasyfikację wykonuje sama Aplikacja na urządzeniu (pkt 2.3), więc na zewnątrz wychodzi wyłącznie gotowa nazwa, nigdy współrzędne, z których powstała.

### 4.2. Statystyki strony gethyc.com (GoatCounter)

Na stronie gethyc.com liczymy odsłony podstron oraz kliknięcia w przyciski pobrania Aplikacji i w linki do grupy na Facebooku. Cel: sprawdzenie, które podstrony są odwiedzane i który sposób pobrania Aplikacji jest wybierany. Podstawa: art. 6 ust. 1 lit. f RODO, uzasadniony interes Operatora w statystyce własnej strony.

Narzędzie: GoatCounter (operator z Irlandii). Dane są przechowywane na serwerach firmy Hetzner (dostawcy serwerów) w Finlandii i w Niemczech; Hetzner działa jako podmiot przetwarzający. Statystyki nie używają ciasteczek ani pamięci przeglądarki i nie odczytują właściwości urządzenia, w tym rozdzielczości ekranu. Gdy przeglądarka nie może wysłać zliczenia w tle, zliczenie idzie obrazkiem 1x1 do tego samego serwera. Zliczamy wyłącznie adres odwiedzonej podstrony oraz nazwę klikniętego przycisku. Nie zbieramy tytułu strony, adresu strony, z której przyszedłeś, identyfikatorów przeglądarki, języka, kraju ani regionu. Adres IP z połączenia jest widoczny dla serwera, ale nie jest zapisywany ani używany do łączenia odsłon w wizyty. Nie zapisujemy wizyt poszczególnych osób, widzimy wyłącznie zbiorcze liczby.

Ponieważ dane są zbiorcze i nie pozwalają wskazać konkretnej osoby, prawa dostępu i usunięcia mogą nie mieć zastosowania (art. 11 RODO). Sprzeciw wobec statystyk możesz zgłosić mailem z pkt 11, a rozpatrzymy go w ciągu miesiąca.

## 5. Odbiorcy danych

- **Google Firebase** (Authentication, Cloud Firestore, Cloud Functions, Cloud Messaging, Analytics, Crashlytics, Remote Config, Installations, App Check): hosting danych i logika backendu, a w Cloud Messaging dostarczanie powiadomień push (token instalacji i treść powiadomienia),
- **PostHog** (PostHog, Inc., chmura w Unii Europejskiej): statystyki użycia opisane w pkt 4.1,
- **Seznam.cz a.s. (mapy.cz):** obliczanie tras (routing) i sprawdzanie łączności; przy obliczaniu trasy otrzymuje przesłane współrzędne (start i cel, a przy porównaniu kilku punktów także ich współrzędne) oraz adres IP urządzenia na czas obliczenia trasy, a przy sprawdzaniu łączności adres IP i metadane połączenia; przetwarza je na warunkach swoich usług,
- **Cloudflare, Inc.:** hosting kafli mapy (`tiles.hycmap.com`) oraz przechowywanie i udostępnianie zdjęć dodanych przez użytkowników (`photos.hycmap.com`), czyli magazyn R2 i sieć CDN; odbiera adres IP i numery pobieranych kafli,
- **GitHub, Inc. (GitHub Pages):** hosting strony gethyc.com; odbiera adres IP i nagłówki żądań,
- **GoatCounter** (operator z Irlandii, serwery w Finlandii i Niemczech): zliczanie odsłon i kliknięć na stronie gethyc.com, pkt 4.2,
- **Resend (Resend, Inc.):** wysyłka wiadomości e-mail Aplikacji (powitanie, weryfikacja adresu, reset hasła, informacja o rozpatrzeniu Twojego zgłoszenia, informacja o decyzji moderatora w sprawie dodanego przez Ciebie punktu lub opisu, informacja o decyzji moderatora w sprawie zaproponowanej przez Ciebie zmiany punktu, prośba moderatora o sprawdzenie dodanego przez Ciebie punktu); otrzymuje Twój adres e-mail i treść wiadomości,
- **Google** (Play Integrity) oraz **Apple** (App Attest / DeviceCheck): weryfikacja autentyczności instalacji Aplikacji,
- **Apple** (Apple Push Notification service): dostarczanie powiadomień na iPhone'y za pośrednictwem Google Firebase Cloud Messaging. Otrzymuje token instalacji i treść powiadomienia. Przetwarza je na warunkach swoich usług,
- **Google** oraz **Apple:** logowanie przez Google Sign-In / Sign in with Apple.

Firebase, PostHog, Cloudflare i Resend przetwarzają dane jako podmioty przetwarzające na podstawie umów powierzenia (DPA) zgodnych z RODO. Dane przesyłamy z szyfrowaniem w tranzycie (TLS), a dostęp do backendu ograniczają reguły bezpieczeństwa. Logowanie Google/Apple wiąże się z przetwarzaniem przez odpowiednio Google i Apple zgodnie z ich politykami prywatności.

## 6. Przekazywanie poza EOG

Niektóre dane mogą być przekazywane do Stanów Zjednoczonych (Google Firebase, a w zakresie infrastruktury także podmioty amerykańskie, jak PostHog, Inc., Cloudflare, Inc., Resend, Inc. i GitHub, Inc.). Podstawą przekazania jest decyzja wykonawcza Komisji UE 2023/1795 (Data Privacy Framework, dla podmiotów certyfikowanych) oraz standardowe klauzule umowne (SCC) przyjęte przez Komisję UE. Kopię zabezpieczeń możesz uzyskać pod adresem z pkt 11.

## 7. Twoje prawa

Masz prawo do: dostępu do danych, sprostowania, usunięcia, ograniczenia przetwarzania, przenoszenia danych, sprzeciwu (w tym wobec statystyk i diagnostyki) oraz wycofania zgody, jeśli przetwarzanie opiera się na zgodzie.

Zbieranie statystyk możesz wyłączyć samodzielnie przełącznikiem **Anonimowe statystyki** w Menu → O aplikacji (sekcja Statystyki, na dole ekranu). Firebase Analytics i PostHog przestają zbierać dane od razu. Crashlytics przestaje zbierać raporty o awariach od następnego uruchomienia Aplikacji, a raporty zapisane na urządzeniu w okresie wyłączenia Aplikacja próbuje skasować. Przełącznik nie obejmuje Remote Config, Firebase Installations ani App Check (pkt 2.4). Sprzeciw lub inne żądanie dotyczące statystyk i diagnostyki możesz też zgłosić mailem na adres z pkt 11. Dane statystyczne nie są powiązane z Twoim kontem ani adresem e-mail. Żeby mimo to odnaleźć dane Twojej instalacji w Firebase Analytics, podaj w zgłoszeniu identyfikator instalacji widoczny w Aplikacji (Menu → O aplikacji). Zgłoszony sprzeciw rozpatrzymy w ciągu jednego miesiąca od otrzymania (art. 12 RODO) i wyłączymy zbieranie dla wskazanej instalacji w Firebase Analytics. Dane w PostHog nie są dziś powiązane z tym identyfikatorem i pozostają poza zasięgiem takiego żądania. Zbieranie kończy się też z chwilą odinstalowania Aplikacji. Powiadomienia push wyłączysz w Menu, w Ustawieniach powiadomień, albo w ustawieniach telefonu. Polubienie, zapis i obserwowanie cofniesz w Aplikacji. Konto razem z danymi z pkt 2.5 do 2.7 usuniesz w Profilu (Usuń konto).

Konto i powiązane dane usuniesz w Aplikacji (Profil, Usuń konto); kasowanie następuje w ciągu 30 dni. Wobec automatycznego ukrycia treści (pkt 3) możesz żądać rozpatrzenia przez człowieka. Przysługuje Ci skarga do Prezesa Urzędu Ochrony Danych Osobowych (PUODO).

## 8. Okres przechowywania

- dane konta: do czasu usunięcia konta (kasowanie w ciągu 30 dni; kopie zapasowe do 7 dni dłużej),
- Treści UGC: do czasu ich usunięcia przez Ciebie lub moderację; publicznie udostępnione opisy mogą pozostać jako element punktu w formie zanonimizowanej (zob. Regulamin),
- zdjęcia: pozostają jako element punktu również po usunięciu konta, ale w formie zanonimizowanej (usuwamy powiązanie z Twoim kontem i nazwą); usuwasz je sam albo moderator na zgłoszenie,
- rejestr moderacyjny: przez okres świadczenia usługi, dla celów audytu i bezpieczeństwa (dane autora anonimizowane po usunięciu konta),
- skrzynka powiadomień: 90 dni od ostatniego zdarzenia w danym wpisie, po czym wpis jest usuwany automatycznie. Wcześniej usuwamy wpis lub jego część, gdy komentarz lub zdjęcie, którego dotyczy, zostanie ukryte lub usunięte,
- token powiadomień push: do wyłączenia powiadomień na telefonie, do czasu zgłoszenia przez Google, że token jest nieaktywny (po wylogowaniu lub odinstalowaniu Aplikacji, przy najbliższej próbie wysłania powiadomienia), albo do usunięcia konta,
- polubienia, zapisane i obserwowane punkty oraz wyciszenia dzwoneczka: do ich cofnięcia, usunięcia punktu albo usunięcia konta,
- propozycje zmian punktów: do usunięcia konta albo punktu. Po decyzji moderatora zostają jako historia propozycji,
- znaczniki techniczne dostarczonych powiadomień (bez treści i bez identyfikatora konta) i licznik dziennego limitu propozycji (pod skrótem identyfikatora konta): bez terminu wygaśnięcia, odczytuje je wyłącznie nasz serwer,
- dane analityczne: Firebase Analytics według ustawień retencji narzędzia, nie dłużej niż 14 miesięcy; PostHog do 12 miesięcy; raporty awarii Crashlytics 90 dni;
- statystyki strony gethyc.com (GoatCounter): wyłącznie zbiorcze liczby, bez danych o pojedynczych wizytach; wszystkie dane statystyczne są usuwane po 365 dniach od odsłony.

## 9. Dzieci

Konto w Aplikacji mogą założyć wyłącznie osoby, które ukończyły 16 lat. Aplikacja nie jest skierowana do dzieci. Przeglądanie mapy i nawigacja nie wymagają konta ani podawania danych osobowych.

## 10. Zmiany polityki

O istotnych zmianach poinformujemy w Aplikacji. Aktualna wersja jest zawsze dostępna pod tym adresem.

## 11. Kontakt

W sprawach prywatności: **hyc.kontakt@gmail.com**.
