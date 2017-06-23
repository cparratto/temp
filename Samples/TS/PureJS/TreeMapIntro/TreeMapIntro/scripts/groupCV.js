(function (wijmo, app) {
    'use strict';

    // create controls
    var chart = new wijmo.chart.hierarchical.TreeMap('#groupCVChart');

    // initialize TreeMap's properties
    chart.beginUpdate();
    chart.binding = 'sales';
    chart.bindingName = ['category', 'subCategory'];
    chart.itemsSource = app.getGroupCVData();
    chart.dataLabel.position = wijmo.chart.PieLabelPosition.Center;
    chart.dataLabel.content = '{name}';
    chart.endUpdate();

})(wijmo, app);