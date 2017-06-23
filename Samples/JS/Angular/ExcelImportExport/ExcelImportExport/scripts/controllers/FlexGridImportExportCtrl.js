'use strict';

angular.module('app').controller('FlexGridImportExportCtrl', ['$scope', 'dataService', function ($scope, dataService) {
    $scope.ctx = {
        flexGrid: null,
        data: dataService.getProductOrders(500),
        includeColumnHeader: true,
        customContent: false
    }

    // export
    $scope.exportExcel = function () {
        wijmo.grid.xlsx.FlexGridXlsxConverter.save($scope.ctx.flexGrid, {
            includeColumnHeaders: $scope.ctx.includeColumnHeader,
            includeCellStyles: false,
            formatItem: $scope.ctx.customContent ? exportFormatItem : null
        }, 'FlexGrid.xlsx');
    };

    // import
    $scope.importExcel = function () {
        if ($('#importFile')[0].files[0]) {
            wijmo.grid.xlsx.FlexGridXlsxConverter.load($scope.ctx.flexGrid, $('#importFile')[0].files[0], { includeColumnHeaders: $scope.ctx.includeColumnHeader });
        }
    }

    // export
    $scope.exportExcelAsync = function () {
        wijmo.grid.xlsx.FlexGridXlsxConverter.saveAsync($scope.ctx.flexGrid, {
            includeColumnHeaders: $scope.ctx.includeColumnHeader,
            includeCellStyles: false,
            formatItem: $scope.ctx.customContent ? exportFormatItem : null
        }, 'FlexGrid.xlsx');
    };

    // import
    $scope.importExcelAsync = function () {
        if ($('#importFile')[0].files[0]) {
            wijmo.grid.xlsx.FlexGridXlsxConverter.loadAsync($scope.ctx.flexGrid, $('#importFile')[0].files[0], { includeColumnHeaders: $scope.ctx.includeColumnHeader });
        }
    }

    // initialize the grid
    $scope.$watch('ctx.flexGrid', function () {
        updateGroup();
    });

    $scope.$watch('ctx.customContent', function () {
        var flex = $scope.ctx.flexGrid;
        if (flex) {
            flex.invalidate();
        }
    });

    // enable dropping XLSX files into the grid
    // code based on:
    // https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API/File_drag_and_drop
    $scope.enableFileDrop = function (s, e) {
        var host = s.hostElement;
        host.addEventListener('dragover', function (e) {
            e.preventDefault();
        });
        host.addEventListener('drop', function (e) {
            e.preventDefault();
            var files = e.dataTransfer.files;
            for (var i = 0; i < files.length; i++) {
                importFile(files[i]);
                break;
            }
        });
        host.addEventListener('dragend', function (e) {
            e.dataTransfer.clearData();
        });
    }

    $scope.itemFormatter = function (panel, r, c, cell) {
        if (panel.rows[r] instanceof wijmo.grid.GroupRow && panel.cellType != wijmo.grid.CellType.RowHeader) {
            var flex = $scope.ctx.flexGrid,
            binding = flex.columns[c].binding,
            row = flex.rows[r];

            if (row._level <= 2) {
                
                if (binding == "active") {
                    if ($scope.ctx.customContent) {
                        var amount_val = flex.getCellData(r, c - 3, false),
                            pending_val = flex.getCellData(r, c - 2, false),
                            persentage_val = (pending_val / amount_val);
                        cell.innerHTML = 'Amount/Pending： ' + Math.round(persentage_val * 100) / 100;
                    } else {
                        cell.innerHTML = '';
                    }
                }
            }
        }
    }

    // import a file that was dropped onto the grid
    function importFile(f) {
        wijmo.grid.xlsx.FlexGridXlsxConverter.load($scope.ctx.flexGrid, f, {
            includeColumnHeaders: $scope.ctx.includeColumnHeader
        });
    }

    // update group setting for the flex grid
    function updateGroup() {
        var flex = $scope.ctx.flexGrid,
            groupNames = ['Product', 'Country', 'Amount'],
            cv,
            propName,
            groupDesc;

        if (flex) {

            // get the collection view, start update
            cv = flex.collectionView;
            cv.beginUpdate();

            // clear existing groups
            cv.groupDescriptions.clear();

            // add new groups
            for (var i = 0; i < groupNames.length; i++) {
                propName = groupNames[i].toLowerCase();
                if (propName == 'amount') {

                    // group amounts in ranges
                    // (could use the mapping function to group countries into continents, 
                    // names into initials, etc)
                    groupDesc = new wijmo.collections.PropertyGroupDescription(propName, function (item, prop) {
                        var value = item[prop];
                        if (value > 1000) return 'Large Amounts';
                        if (value > 100) return 'Medium Amounts';
                        if (value > 0) return 'Small Amounts';
                        return 'Negative';
                    });
                    cv.groupDescriptions.push(groupDesc);
                } else if (propName) {

                    // group other properties by their specific values
                    groupDesc = new wijmo.collections.PropertyGroupDescription(propName);
                    cv.groupDescriptions.push(groupDesc);
                }
            }

            // done updating
            cv.endUpdate();
        }
    }

    function exportFormatItem(args) {
        var p = args.panel,
            row = args.row,
            col = args.col,
            xlsxCell = args.xlsxCell,
            cell, color;

        if (p.cellType === wijmo.grid.CellType.Cell) {
            if (p.columns[col].binding === 'color') {
                if (xlsxCell.value) {
                    if (!xlsxCell.style.font) {
                        xlsxCell.style.font = {};
                    }
                    xlsxCell.style.font.color = xlsxCell.value.toLowerCase();
                }
            } else if (p.columns[col].binding === 'active' && p.rows[row] instanceof wijmo.grid.GroupRow) {
                cell = args.getFormattedCell();
                xlsxCell.value = cell.textContent.trim();
                xlsxCell.style.hAlign = wijmo.xlsx.HAlign.Left;
            }
        }
    }
}]);