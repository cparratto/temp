(function(wijmo, app) {
    'use strict';

    // create controls
    var chart = new wijmo.chart.hierarchical.TreeMap('#introChart');

    // initialize TreeMap's properties
    chart.beginUpdate();
    chart.binding = 'sales';
    chart.bindingName = ['category', 'subCategory'];
    chart.itemsSource = app.getData();
    chart.dataLabel.position = wijmo.chart.LabelPosition.Center;
    chart.dataLabel.content = '{name}';
    chart.endUpdate();

})(wijmo, app);