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
 * Wijmo culture file: gl (Galician)
 */
var wijmo;
(function (wijmo) {
    wijmo.culture = {
        Globalize: {
            name: 'gl',
            displayName: 'Galician',
            numberFormat: {
                '.': ',',
                ',': '.',
                percent: { pattern: ['-n%', 'n%'] },
                currency: { decimals: 2, symbol: '€', pattern: ['-$n', '$n'] }
            },
            calendar: {
                '/': '/',
                ':': ':',
                firstDay: 1,
                days: ['domingo', 'luns', 'martes', 'mércores', 'xoves', 'venres', 'sábado'],
                daysAbbr: ['dom', 'luns', 'mar', 'mér', 'xov', 'ven', 'sáb'],
                months: ['Xaneiro', 'Febreiro', 'Marzo', 'Abril', 'Maio', 'Xuño', 'Xullo', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Decembro'],
                monthsAbbr: ['Xan', 'Feb', 'Mar', 'Abr', 'Mai', 'Xuñ', 'Xul', 'Ago', 'Set', 'Out', 'Nov', 'Dec'],
                am: ['a.m.', 'a'],
                pm: ['p.m.', 'p'],
                eras: ['d.C.'],
                patterns: {
                    d: 'dd/MM/yyyy', D: 'dddd dd MMMM yyyy',
                    f: 'dddd dd MMMM yyyy HH:mm', F: 'dddd dd MMMM yyyy HH:mm:ss',
                    t: 'HH:mm', T: 'HH:mm:ss',
                    m: 'd MMMM', M: 'd MMMM',
                    y: 'MMMM yyyy', Y: 'MMMM yyyy',
                    g: 'dd/MM/yyyy HH:mm', G: 'dd/MM/yyyy HH:mm:ss',
                    s: 'yyyy"-"MM"-"dd"T"HH":"mm":"ss'
                },
            }
        },
        MultiSelect: {
            itemsSelected: '{count:n0} elementos seleccionados'
        },
        FlexGrid: {
            groupHeaderFormat: '{name}: <b>{value}</b> ({count:n0} elementos)'
        },
        FlexGridFilter: {
            // filter
            ascending: '\u2191 Ascendente',
            descending: '\u2193 Descendente',
            apply: 'Aplicar',
            clear: 'Borrar',
            conditions: 'Filtrar por condición',
            values: 'Filtrar por valor',
            // value filter
            search: 'Buscar',
            selectAll: 'Seleccionar todo',
            null: '(nada)',
            // condition filter
            header: 'Mostrar elementos onde o valor',
            and: 'e',
            or: 'Ou',
            stringOperators: [
                { name: '(non establecido)', op: null },
                { name: 'Igual a', op: 0 },
                { name: 'Non igual a', op: 1 },
                { name: 'Comeza por', op: 6 },
                { name: 'Finaliza por', op: 7 },
                { name: 'Contén', op: 8 },
                { name: 'Non contén', op: 9 }
            ],
            numberOperators: [
                { name: '(non establecido)', op: null },
                { name: 'Igual a', op: 0 },
                { name: 'Non igual a', op: 1 },
                { name: 'É maior que', op: 2 },
                { name: 'É maior ou igual a', op: 3 },
                { name: 'É menor que', op: 4 },
                { name: 'É menor ou igual a', op: 5 }
            ],
            dateOperators: [
                { name: '(non establecido)', op: null },
                { name: 'Igual a', op: 0 },
                { name: 'É anterior a', op: 4 },
                { name: 'É posterior a', op: 3 }
            ],
            booleanOperators: [
                { name: '(non establecido)', op: null },
                { name: 'Igual a', op: 0 },
                { name: 'Non igual a', op: 1 }
            ]
        },
        olap: {
            PivotFieldEditor: {
                dialogHeader: 'Configuración do campo:',
                header: 'Cabeceira:',
                summary: 'Resumo:',
                showAs: 'Mostrar como:',
                weighBy: 'Pesar por:',
                sort: 'Ordenar:',
                filter: 'Filtro:',
                format: 'Formato:',
                sample: 'Exemplo:',
                edit: 'Editar…',
                clear: 'Limpar',
                ok: 'Aceptar',
                cancel: 'Cancelar',
                none: '(ningunha)',
                sorts: {
                    asc: 'Ascendente',
                    desc: 'Descendente'
                },
                aggs: {
                    sum: 'Suma',
                    cnt: 'Contaxe',
                    avg: 'Media',
                    max: 'Máx',
                    min: 'Mín',
                    rng: 'Intervalo',
                    std: 'DesvEst',
                    var: 'Var',
                    stdp: 'StdDevPop',
                    varp: 'VarPop',
                    first: 'Primeiro',
                    last: 'Último'
                },
                calcs: {
                    noCalc: 'Sen cálculo',
                    dRow: 'Diferenza con respecto á liña anterior',
                    dRowPct: 'Diferenza % con respecto á liña anterior',
                    dCol: 'Diferenza con respecto á columna anterior',
                    dColPct: 'Diferenza % con respecto á columna anterior',
                    dPctGrand: '% Do total xeral',
                    dPctRow: '% Do total da liña',
                    dPctCol: '% Do total da columna',
                    dRunTot: 'Total cumulativo',
                    dRunTotPct: '% Total cumulativo'
                },
                formats: {
                    n0: 'Inteiro (n0)',
                    n2: 'Decimal (n2)',
                    c: 'Moeda (c)',
                    p0: 'Porcentaxe (p0)',
                    p2: 'Porcentaxe (p2)',
                    n2c: 'Miles (n2,)',
                    n2cc: 'Millóns (n2,,)',
                    n2ccc: 'Billóns (n2,,,)',
                    d: 'Data (d)',
                    MMMMddyyyy: 'Mes Día Ano (MMMM dd, yyyy)',
                    dMyy: 'Día Mes Ano (d/M/yy)',
                    ddMyy: 'Día Mes Ano (dd/M/yy)',
                    dMyyyy: 'Día Mes Ano (dd/M/yyyy)',
                    MMMyyyy: 'Mes Ano (MMM yyyy)',
                    MMMMyyyy: 'Mes Ano (MMMM yyyy)',
                    yyyyQq: 'Ano e Trimestre (yyyy "Q"q)',
                    FYEEEEQU: 'Trimestre do ano fiscal ("FY"EEEE "Q"U)'
                }
            },
            PivotEngine: {
                grandTotal: 'Total xeral',
                subTotal: 'SUBTOTAL'
            },
            PivotPanel: {
                fields: 'Escoller campos para os engadir ao informe:',
                drag: 'Arrastrar campos entre as áreas baixo:',
                filters: 'Filtros',
                cols: 'Columnas',
                rows: 'Filas',
                vals: 'Valores',
                defer: 'Retrasar Actualizacións',
                update: 'Actualizar'
            },
            _ListContextMenu: {
                up: 'Mover cara a arriba',
                down: 'Mover cara a abaixo',
                first: 'Mover ao inicio',
                last: 'Mover ao final',
                filter: 'Mover a filtro',
                rows: 'Mover a etiquetas de fila',
                cols: 'Mover a etiquetas de columna',
                vals: 'Mover a valores',
                remove: 'Eliminar campo',
                edit: 'Configuración de campos…',
                detail: 'Mostrar detalle…'
            },
            PivotChart: {
                by: 'por',
                and: 'e'
            },
            DetailDialog: {
                header: 'Visualización de detalles:',
                ok: 'Aceptar',
                items: '{cnt:n0} items',
                item: '{cnt} item',
                row: 'Fila',
                col: 'Columna'
            }
        },
        Viewer: {
            cancel: 'Cancelar',
            ok: 'Aceptar',
            bottom: 'Inferior:',
            top: 'Sup.:',
            right: 'Dereito:',
            left: 'Esq.:',
            margins: 'Marxes (polgadas)',
            orientation: 'Orientación:',
            paperKind: 'Tipo de Papel:',
            pageSetup: 'Configuración de páxina',
            landscape: 'Horizontal',
            portrait: 'Vertical',
            pageNumber: 'Número de páxina',
            zoomFactor: 'Factor de Zoom',
            paginated: 'Layout de impresión',
            print: 'Imprimir',
            search: 'Buscar',
            matchCase: 'Diferenciar maiúsculas de minúsculas',
            wholeWord: 'Só palabras completas',
            searchResults: 'Resultados da busca',
            previousPage: 'Páxina anterior',
            nextPage: 'Páxina seguinte',
            firstPage: 'Primeira páxina',
            lastPage: 'Última páxina',
            backwardHistory: 'Cara a atrás',
            forwardHistory: 'Adiante',
            pageCount: 'Número de páxinas',
            selectTool: 'Ferramenta de Selección',
            moveTool: 'Ferramenta de movemento',
            continuousMode: 'Vista de páxina continua',
            singleMode: 'Visualización de páxina única',
            wholePage: 'Axuste páxina enteira',
            pageWidth: 'Axuste ancho da páxina',
            zoomOut: 'Reducir',
            zoomIn: 'Ampliar',
            exports: 'Exportar',
            fullScreen: 'Pantalla completa',
            exitFullScreen: 'Saír de pantalla completa',
            hamburgerMenu: 'Ferramentas',
            showSearchBar: 'Show Search Bar',
            viewMenu: 'Opcións de deseño',
            searchOptions: 'Opcións de busca',
            matchCaseMenuItem: 'Diferenciar maiúsculas de minúsculas',
            wholeWordMenuItem: 'Match Whole Word',
            thumbnails: 'Miniaturas de páxina',
            outlines: 'Mapa do documento',
            loading: 'Cargando…',
            pdfExportName: 'Adobe PDF',
            docxExportName: 'Open XML Word',
            xlsxExportName: 'Open XML Excel',
            docExportName: 'Microsoft Word',
            xlsExportName: 'Microsoft Excel',
            mhtmlExportName: 'Web archive (MHTML)',
            htmlExportName: 'HTML document',
            rtfExportName: 'Documento RTF',
            metafileExportName: 'Metafiles comprimidos',
            csvExportName: 'CSV',
            tiffExportName: 'Imaxes TIFF',
            bmpExportName: 'Imaxes BMP',
            emfExportName: 'Enhanced metafile',
            gifExportName: 'GIF images',
            jpgExportName: 'Imaxes JPEG',
            jpegExportName: 'imaxes JPEG',
            pngExportName: 'imaxes PNG',
            abstractMethodException: 'This is an abstract method, please implement it.',
            cannotRenderPageNoViewPage: 'Cannot render page without document source and view page.',
            cannotRenderPageNoDoc: 'Cannot render page without document source and view page.',
            exportFormat: 'Export format:',
            exportOptionTitle: 'Export options',
            documentRestrictionsGroup: 'Document restrictions',
            passwordSecurityGroup: 'Password security',
            outputRangeGroup: 'Output range',
            documentInfoGroup: 'Document info',
            generalGroup: 'Xeral',
            docInfoTitle: 'Título',
            docInfoAuthor: 'Autor',
            docInfoManager: 'Xestor',
            docInfoOperator: 'Operador:',
            docInfoCompany: 'Empresa',
            docInfoSubject: 'Subject',
            docInfoComment: 'Comentar',
            docInfoCreator: 'Creador',
            docInfoProducer: 'Produtor',
            docInfoCreationTime: 'Hora de creación',
            docInfoRevisionTime: 'Revision time',
            docInfoKeywords: 'Palabras chave',
            embedFonts: 'Inserir tipos de letra TrueType',
            pdfACompatible: 'PDF/A compatible (level 2B)',
            useCompression: 'Use compression',
            useOutlines: 'Generate outlines',
            allowCopyContent: 'Allow content copying or extraction',
            allowEditAnnotations: 'Allow annotation editing',
            allowEditContent: 'Allow content editing',
            allowPrint: 'Allow printing',
            ownerPassword: 'Permissions (owner) password:',
            userPassword: 'Document open (user) password:',
            encryptionType: 'Encryption level:',
            paged: 'Paxinado',
            showNavigator: 'Mostrar navegador',
            singleFile: 'Single File',
            tolerance: 'Tolerance when detecting text bounds (points):',
            pictureLayer: 'Use separate picture layer',
            metafileType: 'Metafile Type:',
            monochrome: 'Monocromo',
            resolution: 'Resolución',
            outputRange: 'Intervalo de páxinas:',
            outputRangeInverted: 'Inverted',
            showZoomBar: 'Zoom Bar',
            searchPrev: 'Search Previous',
            searchNext: 'Search Next',
            checkMark: '\u2713',
            exportOk: 'Exportar',
            parameters: 'Parámetros',
            requiringParameters: 'Forneza parámetros.',
            nullParameterError: 'O valor non pode ser nulo.',
            invalidParameterError: 'Entrada non válida',
            parameterNoneItemsSelected: '(ningunha)',
            parameterAllItemsSelected: '(todo)',
            parameterSelectAllItemText: '(Seleccionar todo)',
            selectParameterValue: '(seleccionar valor)',
            apply: 'Aplicar',
            errorOccured: 'Ocorreu un erro.'
        }
    };
    var updc = window['wijmo']._updateCulture;
    if (updc) {
        updc();
    }
})(wijmo || (wijmo = {}));
;

