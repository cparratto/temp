'use strict';

angular.module('app').controller('customFuncCtrl', function ($scope) {
	$scope.ctx = {
		flexSheet: null
	};

	$scope.initialized = function (flexSheet) {
	    flexSheet.addFunction('customSumProduct', function () {
		    var result = 0,
                range1 = arguments[0],
                range2 = arguments[1];

		    if (range1.length > 0 && range1.length === range2.length && range1[0].length === range2[0].length) {
		        for (var i = 0; i < range1.length; i++) {
		            for (var j = 0; j < range1[0].length; j++) {
		                result += range1[i][j] * range2[i][j];
		            }
		        }
		    }
			return result;
		}, 'Custom SumProduct Function', 2, 2);

		flexSheet.unknownFunction.addHandler(function (sender, e) {
			var result = '';
			if (e.params) {
				for (var i = 0; i < e.params.length; i++) {
					result += e.params[i];
				}
			}
			e.value = result;
		});

		flexSheet.deferUpdate(function () {
		    for (var i = 0; i < flexSheet.sheets.length; i++) {
		        flexSheet.sheets.selectedIndex = i;
		        switch (flexSheet.sheets[i].name) {
		            case 'Custom Function':
		                flexSheet.setCellData(0, 0, '=customSumProduct(Data!A1:B5, Data!B1:C5)');
		                flexSheet.setCellData(1, 0, '=customFunc(1, "B", 3)');
		                break;
		            case 'Data':
		                for (var ri = 0; ri < flexSheet.rows.length; ri++) {
		                    for (var ci = 0; ci < 3; ci++) {
		                        flexSheet.setCellData(ri, ci, ri + ci);
		                    }
		                }
		                break;
		        }
		    }
		    flexSheet.selectedSheetIndex = 0;
		});
	}
})