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
 * Wijmo culture file: pt (Portuguese)
 */
var wijmo;
(function (wijmo) {
    wijmo.culture = {
        Globalize: {
            name: 'pt',
            displayName: 'Portuguese',
            numberFormat: {
                '.': ',',
                ',': '.',
                percent: { pattern: ['-n%', 'n%'] },
                currency: { decimals: 2, symbol: 'R$', pattern: ['-$n', '$n'] }
            },
            calendar: {
                '/': '/',
                ':': ':',
                firstDay: 0,
                days: ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado'],
                daysAbbr: ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sáb'],
                months: ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'],
                monthsAbbr: ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'],
                am: ['', ''],
                pm: ['', ''],
                eras: ['d.C.'],
                patterns: {
                    d: 'dd/MM/yyyy', D: 'dddd, d" de "MMMM" de "yyyy',
                    f: 'dddd, d" de "MMMM" de "yyyy HH:mm', F: 'dddd, d" de "MMMM" de "yyyy HH:mm:ss',
                    t: 'HH:mm', T: 'HH:mm:ss',
                    m: 'd" de "MMMM', M: 'd" de "MMMM',
                    y: 'MMMM" de "yyyy', Y: 'MMMM" de "yyyy',
                    g: 'dd/MM/yyyy HH:mm', G: 'dd/MM/yyyy HH:mm:ss',
                    s: 'yyyy"-"MM"-"dd"T"HH":"mm":"ss'
                },
            }
        },
        MultiSelect: {
            itemsSelected: '{count:n0} itens selecionados'
        },
        FlexGrid: {
            groupHeaderFormat: '{name}: <b>{value}</b> ({count:n0} itens)'
        },
        FlexGridFilter: {
            // filter
            ascending: '\u2191 Crescente',
            descending: '\u2193 Decrescente',
            apply: 'Aplicar',
            clear: 'Remover',
            conditions: 'Condições',
            values: 'Valores',
            // value filter
            search: 'Filtro',
            selectAll: 'Selecionar Todos',
            null: '(nulo)',
            // condition filter
            header: 'Mostrar itens com valor',
            and: 'E',
            or: 'Ou',
            stringOperators: [
                { name: '(nenhum)', op: null },
                { name: 'Igual a', op: 0 },
                { name: 'Diferente de', op: 1 },
                { name: 'Que inicia com', op: 6 },
                { name: 'Que termina em', op: 7 },
                { name: 'Que contém', op: 8 },
                { name: 'Que não contém', op: 9 }
            ],
            numberOperators: [
                { name: '(nenhum)', op: null },
                { name: 'Igual a', op: 0 },
                { name: 'Diferente de', op: 1 },
                { name: 'Maior que', op: 2 },
                { name: 'Maior ou igual a', op: 3 },
                { name: 'Menor que', op: 4 },
                { name: 'Menor ou igual a', op: 5 }
            ],
            dateOperators: [
                { name: '(nenhum)', op: null },
                { name: 'Igual a', op: 0 },
                { name: 'Antes de', op: 4 },
                { name: 'Depois de', op: 3 }
            ],
            booleanOperators: [
                { name: '(nenhum)', op: null },
                { name: 'Igual a', op: 0 },
                { name: 'Diferente de', op: 1 }
            ]
        },
        olap: {
            PivotFieldEditor: {
                dialogHeader: 'Configurações do Campo:',
                header: 'Título:',
                summary: 'Resumo:',
                showAs: 'Mostrar como:',
                weighBy: 'Pesar por:',
                sort: 'Ordem:',
                filter: 'Filtro:',
                format: 'Formato:',
                sample: 'Exemplo:',
                edit: 'Editar…',
                clear: 'Remover',
                ok: 'OK',
                cancel: 'Cancelar',
                none: '(nenhum)',
                sorts: {
                    asc: 'Crescente',
                    desc: 'Decrescente'
                },
                aggs: {
                    sum: 'Soma',
                    cnt: 'Contagem',
                    avg: 'Média',
                    max: 'Máximo',
                    min: 'Mínimo',
                    rng: 'Intervalo',
                    std: 'DesvPad',
                    var: 'Var',
                    stdp: 'DesvPadp',
                    varp: 'Varp',
                    first: 'Primeiro',
                    last: 'Último'
                },
                calcs: {
                    noCalc: 'Sem Cálculo',
                    dRow: 'Diferença da linha anterior',
                    dRowPct: 'Diferença % da linha anterior',
                    dCol: 'Diferença da coluna anterior',
                    dColPct: 'Diferença % da coluna anterior',
                    dPctGrand: '% do total geral',
                    dPctRow: '% do total da linha',
                    dPctCol: '% do total da coluna',
                    dRunTot: 'Total Cumulativo',
                    dRunTotPct: 'Total Cumulativo %'
                },
                formats: {
                    n0: 'Número Inteiro (n0)',
                    n2: 'Número (n2)',
                    c: 'Moeda (c)',
                    p0: 'Porcentagem (p0)',
                    p2: 'Porcentagem (p2)',
                    n2c: 'Milhares (n2,)',
                    n2cc: 'Milhões (n2,,)',
                    n2ccc: 'Bilhões (n2,,,)',
                    d: 'Data (d)',
                    MMMMddyyyy: 'Mês dia ano (MMMM dd, yyyy)',
                    dMyy: 'Dia mês ano (d/M/yy)',
                    ddMyy: 'Dia mês ano (dd/M/yy)',
                    dMyyyy: 'Dia mês ano (dd/M/yyyy)',
                    MMMyyyy: 'Mês ano (MMM yyyy)',
                    MMMMyyyy: 'Mês ano (MMMM yyyy)',
                    yyyyQq: 'Ano Trimestre (yyyy "Q"q)',
                    FYEEEEQU: 'Ano Fiscal Trimestre ("FY"EEEE "Q"U)'
                }
            },
            PivotEngine: {
                grandTotal: 'Total geral',
                subTotal: 'Subtotal'
            },
            PivotPanel: {
                fields: 'Escolha os campos para adicionar ao relatório:',
                drag: 'Arraste os campos entre as áreas abaixo:',
                filters: 'Filtros',
                cols: 'Colunas',
                rows: 'Linhas',
                vals: 'Valores',
                defer: 'Suspender Atualizações',
                update: 'Atualizar'
            },
            _ListContextMenu: {
                up: 'Mover para Cima',
                down: 'Mover para Baixo',
                first: 'Mover para o início',
                last: 'Mover para o final',
                filter: 'Mover para Filtro de Relatório',
                rows: 'Mover para Rótulos de Linha',
                cols: 'Mover para Rótulos de Coluna',
                vals: 'Mover para Valores',
                remove: 'Remover o Campo',
                edit: 'Configurar o Campo…',
                detail: 'Exibir detalhes…'
            },
            PivotChart: {
                by: 'por',
                and: 'e'
            },
            DetailDialog: {
                header: 'Detalhes:',
                ok: 'OK',
                items: '{cnt:n0} itens',
                item: '{cnt} item',
                row: 'Linha',
                col: 'Coluna'
            }
        },
        Viewer: {
            cancel: 'Cancelar',
            ok: 'OK',
            bottom: 'Inferior:',
            top: 'Superior:',
            right: 'Direito:',
            left: 'Esquerda:',
            margins: 'Margens (polegadas)',
            orientation: 'Orientação:',
            paperKind: 'Tipo de papel:',
            pageSetup: 'Configurar Página',
            landscape: 'Paisagem',
            portrait: 'Retrato',
            pageNumber: 'Número da Página',
            zoomFactor: 'Fator de zoom',
            paginated: 'Layout de Impressão',
            print: 'Imprimir',
            search: 'Filtro',
            matchCase: 'Diferenciar maiúsculas de minúsculas',
            wholeWord: 'Coincidir palavra inteira',
            searchResults: 'Resultados da Pesquisa',
            previousPage: 'Página Anterior',
            nextPage: 'Próxima Página',
            firstPage: 'Primeira Página',
            lastPage: 'Última Página',
            backwardHistory: 'Recuar',
            forwardHistory: 'Avançar',
            pageCount: 'Contagem de páginas',
            selectTool: 'Selecione a ferramenta',
            moveTool: 'Ferramenta mover',
            continuousMode: 'Modo de exibição de página contínua',
            singleMode: 'Modo de exibição de página única',
            wholePage: 'Ajuste de página inteira',
            pageWidth: 'Ajuste a largura da página',
            zoomOut: 'Reduzir',
            zoomIn: 'Ampliar',
            exports: 'Exportar',
            fullScreen: 'Tela inteira',
            exitFullScreen: 'Sair da tela inteira',
            hamburgerMenu: 'Ferramentas',
            showSearchBar: 'Mostrar Barra de Pesquisa',
            viewMenu: 'Opções de layout',
            searchOptions: 'Opções de Pesquisa',
            matchCaseMenuItem: 'Diferenciar maiúsculas/minúsculas',
            wholeWordMenuItem: 'Coincidir palavra inteira',
            thumbnails: 'Miniaturas de página',
            outlines: 'Mapa do Documento',
            loading: 'Carregar…',
            pdfExportName: 'Adobe PDF',
            docxExportName: 'Open XML Word',
            xlsxExportName: 'Open XML Excel',
            docExportName: 'Microsoft Word',
            xlsExportName: 'Microsoft Excel',
            mhtmlExportName: 'Arquivo da Web (MHTML)',
            htmlExportName: 'Documento HTML',
            rtfExportName: 'Documento RTF',
            metafileExportName: 'Metafiles compactados',
            csvExportName: 'CSV',
            tiffExportName: 'Imagens TIFF',
            bmpExportName: 'Imagens BMP',
            emfExportName: 'Metafile avançado',
            gifExportName: 'Imagens GIF',
            jpgExportName: 'Imagens JPEG',
            jpegExportName: 'Imagens JPEG',
            pngExportName: 'Imagens PNG',
            abstractMethodException: 'Este é um método abstrato, implementá-lo, por favor.',
            cannotRenderPageNoViewPage: 'Não é possível processar a página sem fonte de documento e página de exibição.',
            cannotRenderPageNoDoc: 'Não é possível processar a página sem fonte de documento e página de exibição.',
            exportFormat: 'Formato de exportação:',
            exportOptionTitle: 'Opções de Exportação',
            documentRestrictionsGroup: 'Restrições de documento',
            passwordSecurityGroup: 'Segurança de senha',
            outputRangeGroup: 'Escala da saída',
            documentInfoGroup: 'Documento de informação',
            generalGroup: 'Geral',
            docInfoTitle: 'Título',
            docInfoAuthor: 'Autor',
            docInfoManager: 'Gerente',
            docInfoOperator: 'Operador',
            docInfoCompany: 'Empresa',
            docInfoSubject: 'Assunto',
            docInfoComment: 'Comentário',
            docInfoCreator: 'Criador',
            docInfoProducer: 'Produtor',
            docInfoCreationTime: 'Tempo de criação',
            docInfoRevisionTime: 'Tempo de revisão',
            docInfoKeywords: 'Palavras-chave',
            embedFonts: 'Incorporar fontes TrueType',
            pdfACompatible: 'Compatíveis com o PDF/A (nível 2B)',
            useCompression: 'Usar compressão',
            useOutlines: 'Gerar contornos',
            allowCopyContent: 'Permitir cópia de conteúdo ou extração',
            allowEditAnnotations: 'Permitir a edição de anotação',
            allowEditContent: 'Permitir a edição de conteúdo',
            allowPrint: 'Permitir a impressão',
            ownerPassword: 'Senha de permissões (proprietário):',
            userPassword: 'Senha de documento aberto (usuário):',
            encryptionType: 'Nível de criptografia:',
            paged: 'Paginada',
            showNavigator: 'Mostrar Navegador',
            singleFile: 'Arquivo único',
            tolerance: 'Tolerância ao detectar os limites do texto (pontos):',
            pictureLayer: 'Camada de imagens separadas do uso',
            metafileType: 'Metarquivo do tipo:',
            monochrome: 'Monocromático',
            resolution: 'Resolução:',
            outputRange: 'Intervalo de páginas:',
            outputRangeInverted: 'Invertido',
            showZoomBar: 'Barra de zoom',
            searchPrev: 'Pesquisa anterior',
            searchNext: 'Procurar em seguida',
            checkMark: '\u2713',
            exportOk: 'Exportação…',
            parameters: 'Parâmetros',
            requiringParameters: 'Parâmetros de entrada.',
            nullParameterError: 'O valor não pode ser nulo.',
            invalidParameterError: 'Entrada inválida.',
            parameterNoneItemsSelected: '(nenhum)',
            parameterAllItemsSelected: '(todos)',
            parameterSelectAllItemText: '(Selecionar tudo)',
            selectParameterValue: '(selecione o valor)',
            apply: 'Aplicar',
            errorOccured: 'Erro.'
        }
    };
    var updc = window['wijmo']._updateCulture;
    if (updc) {
        updc();
    }
})(wijmo || (wijmo = {}));
;

