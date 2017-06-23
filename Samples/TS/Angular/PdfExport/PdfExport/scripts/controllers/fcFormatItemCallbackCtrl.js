(function () {
	'use strict';
	angular
        .module('app')
        .controller('fcFormatItemCallbackCtrl', function ($scope, dataService) {
        	$scope.title = 'Customize cell rendering';
        	$scope.ctx = {
        		grid: null,
        		data: dataService.getData(5)
        	};

        	$scope.export = function () {
        		wijmo.grid.pdf.FlexGridPdfConverter.export($scope.ctx.grid, 'FlexGrid.pdf', {
        			maxPages: 10,
        			documentOptions: {
        				header: {
        					declarative: {
        						text: '\t&[Page]\\&[Pages]'
        					}
        				},
        				footer: {
        					declarative: {
        						text: '\t&[Page]\\&[Pages]'
        					}
        				},
        				info: {
        					author: 'C1',
        					title: 'PdfDocument sample',
        					keywords: 'PDF, C1, sample',
        					subject: 'PdfDocument'
        				}
        			},
        			styles: {
        				cellStyle: {
        					backgroundColor: '#ffffff',
        					borderColor: '#c6c6c6'
        				},
        				altCellStyle: {
        					backgroundColor: '#f9f9f9'
        				},
        				groupCellStyle: {
        					backgroundColor: '#dddddd'
        				},
        				headerCellStyle: {
        					backgroundColor: '#eaeaea'
        				}
        			},
        			formatItem: function (args) {
        				if (args.panel.cellType === wijmo.grid.CellType.RowHeader) {
        					args.data = (args.row + 1).toString();
        				} else {
        					if (args.panel.cellType === wijmo.grid.CellType.Cell && args.panel.columns[args.col].binding === 'color') {
        						args.style.backgroundColor = args.data;
        					}
        				}
        			}
        		});
        	};
        });
})();