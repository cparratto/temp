(function () {
	'use strict';
	angular
        .module('app')
        .controller('fcDrawingCellsManuallyCtrl', function ($scope, dataService) {
        	$scope.title = 'Drawing cells manually';
        	$scope.ctx = {
        		grid: null,
        		data: dataService.getData(5)
        	};

        	$scope.export = function () {
        		window.setTimeout(function () {
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
        				customCellContent: true,
        				formatItem: function (args) {
        					if (args.panel.cellType === wijmo.grid.CellType.Cell) {
        						if (args.panel.columns[args.col].binding === 'country') {
        							var r = args.contentRect,
										sz = args.canvas.measureText(args.data, args.style.font, {
											height: r.height,
											width: r.width
										}),
										imageHeight = r.height / 2,
										imageWidth = imageHeight * 3 / 2,
										imageTop = r.top + (r.height - imageHeight) / 2,
										textTop = r.top + (r.height - sz.size.height) / 2;

        							// draw flag image
        							args.canvas.drawImage('resources/' + args.data + '.png', r.left, imageTop, {
        								height: imageHeight,
        								width: imageWidth
        							});

        							// draw text
        							args.canvas.drawText(args.data, r.left + imageWidth + 3, textTop, {
        								brush: args.style.color,
        								font: args.style.font,
        								height: r.height,
        								width: r.width
        							});

        							// cancel standard cell content drawing
        							args.cancel = true;
        						}
        					}
        				}
        			});
        		});
        	};
        });
})();