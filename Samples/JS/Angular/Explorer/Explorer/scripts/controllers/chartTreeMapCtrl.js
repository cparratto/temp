'use strict';

var app = angular.module('app');

app.controller('chartTreeMapCtrl', function ($scope, dataSvc) {
    $scope.treemap = null
    $scope.itemsSource = dataSvc.getTreeMapData();
    $scope.maxDepth = 2;
    $scope.type = 'Squarified';
    $scope.palette = 'Default';
    $scope.inputMaxDepth = null;
    $scope.palettes = [null, [{
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
        titleColor: '#51007d',
        maxColor: 'rgba(81,0,125,0.7)',
        minColor: 'rgba(209,170,230,0.7)'
    }, {
        titleColor: '#7d7400',
        maxColor: 'rgba(125,116,0,0.7)',
        minColor: 'rgba(230,226,168,0.7)'
    }], ['#88bde6', '#fbb258', '#90cd97', '#f6aac9', '#bfa554', '#bc99c7']];

    $scope.paletteChanged = function (sender) {
        $scope.treemap.palette = $scope.palettes[sender.selectedIndex];
        sender.header = 'Palette: <b>' + sender.selectedValue + '</b>';
    };

    $scope.typeChanged = function (sender) {
        $scope.treemap.type = wijmo.chart.hierarchical.TreeMapType[sender.selectedValue]
        sender.header = 'Type: <b>' + sender.selectedValue + '</b>';
    };

    $scope.$watch('ctx.maxDepth', function () {
        var input = $scope.inputMaxDepth,
            val = $scope.maxDepth;

        if (!input || val < input.min || val > input.max) {
            return;
        }
        $scope.maxDepth = val;
    });

});

