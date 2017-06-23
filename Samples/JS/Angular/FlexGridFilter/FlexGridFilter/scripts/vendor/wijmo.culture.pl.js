﻿/*
    *
    * Wijmo Library 5.20171.300
    * http://wijmo.com/
    *
    * Copyright(c) GrapeCity, Inc.  All rights reserved.
    *
    * Licensed under the Wijmo Commercial License.
    * sales@wijmo.com
    * wijmo.com/products/wijmo-5/license/
    *
    */
/*
 * Wijmo culture file: pl (Polish)
 */
var wijmo;
(function (wijmo) {
    wijmo.culture = {
        Globalize: {
            name: 'pl',
            displayName: 'Polish',
            numberFormat: {
                '.': ',',
                ',': ' ',
                percent: { pattern: ['-n%', 'n%'] },
                currency: { decimals: 2, symbol: 'zł', pattern: ['-n $', 'n $'] }
            },
            calendar: {
                '/': '.',
                ':': ':',
                firstDay: 1,
                days: ['niedziela', 'poniedziałek', 'wtorek', 'środa', 'czwartek', 'piątek', 'sobota'],
                daysAbbr: ['niedz.', 'pon.', 'wt.', 'śr.', 'czw.', 'pt.', 'sob.'],
                months: ['styczeń', 'luty', 'marzec', 'kwiecień', 'maj', 'czerwiec', 'lipiec', 'sierpień', 'wrzesień', 'październik', 'listopad', 'grudzień'],
                monthsAbbr: ['sty', 'lut', 'mar', 'kwi', 'maj', 'cze', 'lip', 'sie', 'wrz', 'paź', 'lis', 'gru'],
                am: ['AM', 'A'],
                pm: ['PM', 'P'],
                eras: ['n.e.'],
                patterns: {
                    d: 'dd.MM.yyyy', D: 'dddd, d MMMM yyyy',
                    f: 'dddd, d MMMM yyyy HH:mm', F: 'dddd, d MMMM yyyy HH:mm:ss',
                    t: 'HH:mm', T: 'HH:mm:ss',
                    m: 'd MMMM', M: 'd MMMM',
                    y: 'MMMM yyyy', Y: 'MMMM yyyy',
                    g: 'dd.MM.yyyy HH:mm', G: 'dd.MM.yyyy HH:mm:ss',
                    s: 'yyyy"-"MM"-"dd"T"HH":"mm":"ss'
                },
            }
        },
        MultiSelect: {
            itemsSelected: '{count:n0} pozycji wybrano'
        },
        FlexGrid: {
            groupHeaderFormat: '{name}: <b>{value}</b> ({count:n0} elem.)'
        },
        FlexGridFilter: {
            // filter
            ascending: '\u2191 Rosnąco',
            descending: '\u2193 Malejąco',
            apply: 'Zastosuj',
            clear: 'Wyczyść',
            conditions: 'Filtruj według warunku',
            values: 'Filtruj według wartości',
            // value filter
            search: 'Wyszukaj',
            selectAll: 'Zaznacz wszystko',
            null: '(nic)',
            // condition filter
            header: 'Pokaż elementy, których wartość',
            and: 'I',
            or: 'lub',
            stringOperators: [
                { name: '(nie ustawiono)', op: null },
                { name: 'Równa się', op: 0 },
                { name: 'Nie równa się', op: 1 },
                { name: 'Zaczyna się od', op: 6 },
                { name: 'Kończy się na', op: 7 },
                { name: 'Zawiera', op: 8 },
                { name: 'Nie zawiera', op: 9 }
            ],
            numberOperators: [
                { name: '(nie ustawiono)', op: null },
                { name: 'Równa się', op: 0 },
                { name: 'Nie równa się', op: 1 },
                { name: 'Jest większa niż', op: 2 },
                { name: 'Jest większa niż lub równa', op: 3 },
                { name: 'Jest mniejsza niż', op: 4 },
                { name: 'Jest mniejsza niż lub równa', op: 5 }
            ],
            dateOperators: [
                { name: '(nie ustawiono)', op: null },
                { name: 'Równa się', op: 0 },
                { name: 'jest przed', op: 4 },
                { name: 'jest po', op: 3 }
            ],
            booleanOperators: [
                { name: '(nie ustawiono)', op: null },
                { name: 'Równa się', op: 0 },
                { name: 'Nie równa się', op: 1 }
            ]
        },
        olap: {
            PivotFieldEditor: {
                dialogHeader: 'Ustawienia pola:',
                header: 'Nagł.:',
                summary: 'Krótki opis:',
                showAs: 'Pokaż jako:',
                weighBy: 'Odważyć się przez:',
                sort: 'Sortuj po:',
                filter: 'Filtruj:',
                format: 'Format:',
                sample: 'Przykład:',
                edit: 'Edycja…',
                clear: 'Wyczyść',
                ok: 'OK',
                cancel: 'Anuluj',
                none: '(brak)',
                sorts: {
                    asc: 'Rosnąco',
                    desc: 'Malejąco'
                },
                aggs: {
                    sum: 'Suma',
                    cnt: 'Liczba',
                    avg: 'Średni',
                    max: 'Maksimum',
                    min: 'Min',
                    rng: 'Kuchenka z piekarnikiem',
                    std: 'OdchStd',
                    var: 'Wariancja',
                    stdp: 'StdDevPop',
                    varp: 'VarPop',
                    first: 'Pierwszy',
                    last: 'Ostatni'
                },
                calcs: {
                    noCalc: 'Bez obliczeń',
                    dRow: 'Różnica z poprzedniego wiersza',
                    dRowPct: '% Różnica poprzedniego rzędu',
                    dCol: 'Różnica od poprzedniej kolumny',
                    dColPct: '% Różnica od poprzedniej kolumny',
                    dPctGrand: '% sumy',
                    dPctRow: '% sumy wiersza',
                    dPctCol: '% sumy kolumny',
                    dRunTot: 'Całkowita',
                    dRunTotPct: '% sumy'
                },
                formats: {
                    n0: 'Liczba całkowita (n0)',
                    n2: 'Dziesiętny (n2)',
                    c: 'Waluty (c)',
                    p0: 'Procent (p0)',
                    p2: 'Procent (p2)',
                    n2c: 'Tysięcy (n2,)',
                    n2cc: 'Miliony (n2,,)',
                    n2ccc: 'Miliardy (n2,,,)',
                    d: 'Data (d)',
                    MMMMddyyyy: 'Miesiąc dzień rok (MMMM dd, yyyy)',
                    dMyy: 'Dzień miesiąc rok (d/M/yy)',
                    ddMyy: 'Dzień miesiąc rok (dd/M/yy)',
                    dMyyyy: 'Rok miesiąc dzień (dd/M/yyyy)',
                    MMMyyyy: 'Miesiąc roku (MMM rrrr)',
                    MMMMyyyy: 'Miesiąc roku (MMMM yyyy)',
                    yyyyQq: 'Kwartale roku (yyyy "Q"q)',
                    FYEEEEQU: 'Kwartale roku obrachunkowego ("FY"EEEE "Q"U)'
                }
            },
            PivotEngine: {
                grandTotal: 'Suma końcowa',
                subTotal: 'Suma częściowa'
            },
            PivotPanel: {
                fields: 'Wybierz pola, aby dodać do raportu:',
                drag: 'Przeciągnij pola między obszarami poniżej:',
                filters: 'Filtry',
                cols: 'Kolumny',
                rows: 'Wiersze',
                vals: 'Wartości',
                defer: 'Odroczyć aktualizacje',
                update: 'Aktualizuj'
            },
            _ListContextMenu: {
                up: 'Przenieś w górę',
                down: 'Przenieś w dół',
                first: 'Przenieś na początek',
                last: 'Do końca',
                filter: 'Przenieś do filtru raportu',
                rows: 'Przenieś do etykiet wiersza',
                cols: 'Przenieś do etykiet kolumn',
                vals: 'Przenieś do wartości',
                remove: 'Usuń pole',
                edit: 'Ustawienia pól…',
                detail: 'Pokaż szczegóły…'
            },
            PivotChart: {
                by: 'według',
                and: 'oraz'
            },
            DetailDialog: {
                header: 'Widok szczegółów:',
                ok: 'OK',
                items: '{cnt:n0} elementów',
                item: 'element {cnt}',
                row: 'Wiersz',
                col: 'Kolumna'
            }
        },
        Viewer: {
            cancel: 'Anuluj',
            ok: 'OK',
            bottom: 'U dołu:',
            top: 'Górny:',
            right: 'Prawo:',
            left: 'Z lewej:',
            margins: 'Marginesy (cale)',
            orientation: 'Orientacja:',
            paperKind: 'Rodzaju papieru:',
            pageSetup: 'Ustawienia strony',
            landscape: 'Pozioma',
            portrait: 'Pionowa',
            pageNumber: 'Numer strony',
            zoomFactor: 'Współczynnik powiększenia',
            paginated: 'Układ wydruku',
            print: 'Drukuj',
            search: 'Wyszukaj',
            matchCase: 'Wielkość liter',
            wholeWord: 'Uwzględnij tylko całe wyrazy',
            searchResults: 'Wyniki wyszukiwania',
            previousPage: 'Poprzednia strona',
            nextPage: 'Następna strona',
            firstPage: 'Pierwsza strona',
            lastPage: 'Ostatnia strona',
            backwardHistory: 'Do tyłu',
            forwardHistory: 'Do przodu',
            pageCount: 'Liczba stron',
            selectTool: 'Wybierz narzędzie',
            moveTool: 'Narzędzie Przesuwanie',
            continuousMode: 'Ciągłe widok strony',
            singleMode: 'Pojedyncza strona',
            wholePage: 'Dopasowanie całej strony',
            pageWidth: 'Dopasuj szerokość strony',
            zoomOut: 'Pomniejsz',
            zoomIn: 'Powiększ',
            exports: 'Eksportuj',
            fullScreen: 'Pełny ekran',
            exitFullScreen: 'Zamknij tryb pełnoekranowy',
            hamburgerMenu: 'Narzędzia',
            showSearchBar: 'Pokaż pasek wyszukiwania',
            viewMenu: 'Opcje układu',
            searchOptions: 'Opcje wyszukiwania',
            matchCaseMenuItem: 'Uwzględnij wielkość liter',
            wholeWordMenuItem: 'Uwzględnij całe wyrazy',
            thumbnails: 'Miniatury stron',
            outlines: 'Mapa dokumentu',
            loading: 'Trwa ładowanie…',
            pdfExportName: 'Plik PDF firmy Adobe',
            docxExportName: 'Open XML Word',
            xlsxExportName: 'Open XML Excel',
            docExportName: 'Microsoft Word',
            xlsExportName: 'Microsoft Excel',
            mhtmlExportName: 'Archiwum sieci Web (MHTML)',
            htmlExportName: 'Dokument HTML',
            rtfExportName: 'Dokument RTF',
            metafileExportName: 'Skompresowane metaplików',
            csvExportName: 'CSV',
            tiffExportName: 'Obrazy TIFF',
            bmpExportName: 'Obrazów BMP',
            emfExportName: 'Rozszerzony metaplik',
            gifExportName: 'Obrazy GIF',
            jpgExportName: 'Obrazy w formacie JPEG',
            jpegExportName: 'Obrazy w formacie JPEG',
            pngExportName: 'Obrazy PNG',
            abstractMethodException: 'Jest to metoda abstrakcyjna, należy go zaimplementować.',
            cannotRenderPageNoViewPage: 'Nie można zrenderować stronę bez źródła dokumentu i widoku strony.',
            cannotRenderPageNoDoc: 'Nie można zrenderować stronę bez źródła dokumentu i widoku strony.',
            exportFormat: 'Format eksportu:',
            exportOptionTitle: 'Opcje eksportu',
            documentRestrictionsGroup: 'Ograniczenia dokumentu',
            passwordSecurityGroup: 'Zabezpieczenia hasła',
            outputRangeGroup: 'Zakres mocy',
            documentInfoGroup: 'Informacje o dokumencie',
            generalGroup: 'Ogólne',
            docInfoTitle: 'Tytuł',
            docInfoAuthor: 'Autor',
            docInfoManager: 'Menedżer',
            docInfoOperator: 'Operator',
            docInfoCompany: 'Firma',
            docInfoSubject: 'Podmiot',
            docInfoComment: 'Komentarz',
            docInfoCreator: 'Twórca',
            docInfoProducer: 'Producent',
            docInfoCreationTime: 'Godzina utworzenia',
            docInfoRevisionTime: 'Zmiana czasu',
            docInfoKeywords: 'Słowa kluczowe',
            embedFonts: 'Osadź czcionki TrueType',
            pdfACompatible: 'Zgodny z PDF/A (poziomu 2B)',
            useCompression: 'Użyj kompresji',
            useOutlines: 'Wygenerować kontury',
            allowCopyContent: 'Zezwalaj na kopiowanie lub wyciąganie zawartości',
            allowEditAnnotations: 'Zezwalaj na edytowanie adnotacji',
            allowEditContent: 'Zezwalaj na edytowanie treści',
            allowPrint: 'Zezwalaj na drukowanie',
            ownerPassword: 'Hasło uprawnień (właściciel):',
            userPassword: 'Dokument open (użytkownika) hasło:',
            encryptionType: 'Poziom szyfrowania:',
            paged: 'Stronicowana',
            showNavigator: 'Pokaż Nawigatora',
            singleFile: 'Pojedynczy plik',
            tolerance: 'Tolerancja podczas wykrywania granice tekstu (punktów):',
            pictureLayer: 'Wykorzystanie oddzielnego obrazu warstwy',
            metafileType: 'Typu metaplik:',
            monochrome: 'Monochromatyczny',
            resolution: 'Rozdzielczość:',
            outputRange: 'Zakres strony:',
            outputRangeInverted: 'Odwrócony',
            showZoomBar: 'Pasek powiększenia',
            searchPrev: 'Poprzednie wyszukiwanie',
            searchNext: 'Szukaj dalej',
            checkMark: '\u2713',
            exportOk: 'Eksportuj…',
            parameters: 'Parameters',
            requiringParameters: 'Wprowadź parametry.',
            nullParameterError: 'Wartość nie może być zerowa.',
            invalidParameterError: 'Nieprawidłowe dane.',
            parameterNoneItemsSelected: '(brak)',
            parameterAllItemsSelected: '(wszystkie)',
            parameterSelectAllItemText: '(Zaznacz wszystkie)',
            selectParameterValue: '(wybierz wartość)',
            apply: 'Zastosuj',
            errorOccured: 'Wystąpił błąd.'
        }
    };
    var updc = window['wijmo']._updateCulture;
    if (updc) {
        updc();
    }
})(wijmo || (wijmo = {}));
;

