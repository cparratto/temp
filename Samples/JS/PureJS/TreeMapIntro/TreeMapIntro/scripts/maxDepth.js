(function (wijmo, app) {
    'use strict';

    // create controls
    var chart = new wijmo.chart.hierarchical.TreeMap('#maxDepthChart'),
        maxDepth = new wijmo.input.InputNumber('#maxDepth');

    // initialize TreeMap's properties
    chart.beginUpdate();
    chart.maxDepth = 2;
    chart.binding = 'sales';
    chart.bindingName = 'type';
    chart.childItemsPath = 'items';
    chart.itemsSource = app.getMaxDepthData();
    chart.dataLabel.position = wijmo.chart.LabelPosition.Center;
    chart.dataLabel.content = '{name}';
    chart.endUpdate();

    // maxDepth - initialize InputNumber's properties
    maxDepth.min = 0;
    maxDepth.max = 4;
    maxDepth.step = 1;
    maxDepth.format = 'n';
    maxDepth.valueChanged.addHandler(function (sender) {
        if (sender.value < sender.min || sender.value > sender.max) {
            return;
        }
        chart.maxDepth = sender.value;
    });
    maxDepth.value = 2;

})(wijmo, app);