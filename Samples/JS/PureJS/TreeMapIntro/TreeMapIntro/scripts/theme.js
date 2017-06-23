(function (wijmo, app) {
    'use strict';

    // create controls
    var chart1 = new wijmo.chart.hierarchical.TreeMap('#themeChart1');
    var chart2 = new wijmo.chart.hierarchical.TreeMap('#themeChart2');

    // initialize TreeMap's properties
    chart1.beginUpdate();
    chart1.binding = 'sales';
    chart1.bindingName = ['category', 'subCategory'];
    chart1.itemsSource = app.getData();
    chart1.dataLabel.position = wijmo.chart.LabelPosition.Center;
    chart1.dataLabel.content = '{name}';
    chart1.palette = [{
        titleColor: '#00277d',
        maxColor: 'rgba(0,39,125,0.7)',
        minColor: 'rgba(168,187,230,0.7)'
    }, {
        titleColor: '#7d1f00',
        maxColor: 'rgba(125,21,0,0.7)',
        minColor: 'rgba(230,183,168,0.7)'
    }, {
        titleColor: '#007d27',
        maxColor: 'rgba(0,125,39,0.7)',
        minColor: 'rgba(168,230,188,0.7)'
    }, {
        titleColor: '#7d003c',
        maxColor: 'rgba(125,0,60,0.7)',
        minColor: 'rgba(230,168,198,0.7)'
    }, {
        titleColor: '#7d4300',
        maxColor: 'rgba(125,67,0,0.7)',
        minColor: 'rgba(230,201,168,0.7)'
    }, {
        titleColor: '#51007d',
        maxColor: 'rgba(81,0,125,0.7)',
        minColor: 'rgba(209,170,230,0.7)'
    }, {
        titleColor: '#7d7400',
        maxColor: 'rgba(125,116,0,0.7)',
        minColor: 'rgba(230,226,168,0.7)'
    }, {
        titleColor: '#970000',
        maxColor: 'rgba(151,0,0,0.7)',
        minColor: 'rgba(230,169,169,0.7)'
    }];
    chart1.endUpdate();

    chart2.beginUpdate();
    chart2.binding = 'sales';
    chart2.bindingName = ['category', 'subCategory'];
    chart2.itemsSource = app.getData();
    chart2.dataLabel.position = wijmo.chart.LabelPosition.Center;
    chart2.dataLabel.content = '{name}';
    chart2.palette = ['#88bde6', '#fbb258', '#90cd97', '#f6aac9', '#bfa554', '#bc99c7', '#eddd46', '#f07e6e', '#8c8c8c'];
    chart2.endUpdate();

})(wijmo, app);