(function () {
	'use strict';
	angular
        .module('app')
        .controller('fcCustomCellContentCtrl', function ($scope, dataService) {
        	$scope.title = 'Custom cell content';
        	$scope.ctx = {
        		grid: null,
        		data: dataService.getData(5)
        	};

        	var exportSettings = {
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
        		}
        	};

        	$scope.export = function () {
        		exportSettings.customCellContent = false;
        		wijmo.grid.pdf.FlexGridPdfConverter.export($scope.ctx.grid, 'FlexGrid.pdf', exportSettings);
        	};

        	$scope.export2 = function () {
        		window.setTimeout(function () {
        			exportSettings.customCellContent = true;
        			wijmo.grid.pdf.FlexGridPdfConverter.export($scope.ctx.grid, 'FlexGrid.pdf', exportSettings);
        		}, 0);
        	};

        	function formatCountryCell(args) {
                // if this is a regular grid cell...
        	    if (args.panel.cellType === wijmo.grid.CellType.Cell) {
                    // ... that belongs to the 'country' column
        			if (args.panel.columns[args.col].binding === 'country') {
        			    var
                            // get cell with custom content produced by a cell template or grid.formatItem handler
                            cell = args.getFormattedCell(),
                            // bound rectangle of cell's content area
                            contentRect = args.contentRect,
                            // construct flag image url based on country name passed in args.data 
        				    flagUrl = 'resources/' + args.data + '.png',
                            // calculate flag's image size and position
                            imageHeight = contentRect.height / 2,
                            imageWidth = imageHeight * 3 / 2,
                            imageTop = contentRect.top + (contentRect.height - imageHeight) / 2;

                        // draw flag image
        			    args.canvas.drawImage(flagUrl, contentRect.left, imageTop, {
        			    	height: imageHeight, width: imageWidth
        			    });
        			    // Draw custom cell text retrieved using the cell.textContent property,
        			    // right to the image and in the args.textTop vertical position. The latter
                        // works because we draw text using default cell font.
        				args.canvas.drawText(cell.textContent.trim(), contentRect.left + imageWidth + 3, args.textTop);
                        // cancel standard cell content drawing
        				args.cancel = true;
        			}
        		}
        	}

        	$scope.export3 = function () {
        	    window.setTimeout(function () {
        	        exportSettings.customCellContent = false;
        	        exportSettings.formatItem = formatCountryCell;
        	        wijmo.grid.pdf.FlexGridPdfConverter.export($scope.ctx.grid, 'FlexGrid.pdf', exportSettings);
        	        exportSettings.formatItem = null;
        	    }, 0);
        	};
        });
})();