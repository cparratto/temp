(function (wijmo) {
    'use strict';

    // create TreeMap and Menus
    var chart = new wijmo.chart.hierarchical.TreeMap('#typeChart'),
        typeMenu = new wijmo.input.Menu('#typeMenu');

    // initialize TreeMap's properties
    chart.beginUpdate();
    chart.binding = 'sales';
    chart.bindingName = ['category', 'subCategory'];
    chart.itemsSource = app.getData();
    chart.dataLabel.position = wijmo.chart.LabelPosition.Center;
    chart.dataLabel.content = '{name}';
    chart.endUpdate();

    // update the menus' headers
    typeMenu.selectedIndexChanged.addHandler(function () {
        if (typeMenu.selectedValue) {
            // update TreeMap's type
            chart.type = parseInt(typeMenu.selectedValue);

            // update menu header
            updateMenuHeader(typeMenu, 'Type');
        }
    });
    updateMenuHeader(typeMenu, 'Type');

    // helper function for Menu headers
    function updateMenuHeader(menu, prefix) {
        menu.header = '<b>' + prefix + '</b>: ' + menu.text;
    }
})(wijmo);