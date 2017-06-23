(function () {
    'use strict';
    angular
        .module('app')
        .controller('pdDrawingTextCtrl', function ($scope, dataService) {
            $scope.title = 'Drawing text';

            $scope.export = function () {
                var lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in suscipit purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus nec hendrerit felis. Morbi aliquam facilisis risus eu lacinia.',
                    doc = new wijmo.pdf.PdfDocument({
                        header: {
                            height: 0 // no header 
                        },
                        footer: {
                            height: 0 // no footer
                        },
                        ended: function (sender, args) {
                            wijmo.pdf.saveBlob(args.blob, 'FlexGrid.pdf');
                        }
                    });

                var bold = new wijmo.pdf.PdfFont();
                bold.weight = 'bold';

                doc.drawText('This text is aligned to left (default):', null, null, { font: bold });
                doc.drawText(lorem);
                doc.moveDown();

                doc.drawText('This text is aligned to right:', null, null, { font: bold });
                doc.drawText(lorem, null, null, { align: wijmo.pdf.PdfTextHorizontalAlign.Right } );
                doc.moveDown();

                doc.drawText('This text is centered:', null, null, { font: bold });
                doc.drawText(lorem, null, null, { align: wijmo.pdf.PdfTextHorizontalAlign.Center });
                doc.moveDown();

                doc.drawText('This text is justified:', null, null, { font: bold });
                doc.drawText(lorem, null, null, { align: wijmo.pdf.PdfTextHorizontalAlign.Justify });
                doc.moveDown();

                doc.drawText('This text is wrapped and clipped by a rectangle of dimensions 100x100:', null, null, { font: bold });
                doc.drawText(lorem, null, null, { width: 100, height: 100 });

                doc.end();
            };
        });
})();