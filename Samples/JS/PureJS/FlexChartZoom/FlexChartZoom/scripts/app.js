(function (wijmo) {
    'use strict';

    // create FlexChart
    var zoomChart = new wijmo.chart.FlexChart('#zoomChart'),
        mouseAction = new wijmo.input.Menu('#mouseAction'),
        interactiveAxes = new wijmo.input.Menu('#interactiveAxes'),
        resetZoom = document.getElementById('resetZoom'),
        chartGestures;

    resetZoom.addEventListener('click', function () {
        if (chartGestures) {
            chartGestures.reset();
        }
        window.setTimeout(function () {
            resetZoom.disabled = 'disabled';
        }, 20);
    });
    
    jQuery.get('data/fb.json').success(function (data) {
        var dateStr;
        for (var i = 0; i < data.length; i++) {
            dateStr = data[i].date;
            dateStr = dateStr.split('/');
            data[i].date = new Date(dateStr[2], dateStr[0] - 1, dateStr[1]);
        }
        zoomChart.itemsSource = data;
    }).error(function (error) {
        console.log(error);
    });

    // initialize FlexChart's properties
    zoomChart.initialize({
        chartType: wijmo.chart.ChartType.Area,
        bindingX: 'date',
        legend: {
            position: wijmo.chart.Position.None
        },
        axisX: {
            axisLine: false
        },
        series: [
            { name: 'Y', binding: 'close' }
        ],
        plotMargin: 'NaN NaN NaN 80'
    });

    window.setTimeout(function () {
        zoomChart.axisX.rangeChanged.addHandler(function () {
            resetZoom.disabled = undefined;
        });
        zoomChart.axisY.rangeChanged.addHandler(function () {
            resetZoom.disabled = undefined;
        });
    }, 200);

    chartGestures = new wijmo.chart.interaction.ChartGestures(zoomChart, {
        interactiveAxes: wijmo.chart.interaction.InteractiveAxes.X,
        mouseAction: wijmo.chart.interaction.MouseAction.Zoom,
        scaleY: 0.5,
        posY: 0.1,
        scaleX: 0.5,
        posX: 0.1
    });

    if (navigator.userAgent.match(/iPad/i) != null ||
        /Android/i.test(navigator.userAgent)) {
        document.querySelector('#mouseAction').style.display = 'none';
    }

    // update menu header
    updateMenuHeader(mouseAction, 'Mouse Action');
    mouseAction.selectedIndexChanged.addHandler(function () {
        if (mouseAction.selectedValue) {
            // specify if chart should be rotated or not
            chartGestures.mouseAction = wijmo.chart.interaction.MouseAction[mouseAction.selectedValue];

            // update menu header
            updateMenuHeader(mouseAction, 'Mouse Action');
        }
    });

    // update menu header
    updateMenuHeader(interactiveAxes, 'Interactive Axes');
    interactiveAxes.selectedIndexChanged.addHandler(function () {
        if (interactiveAxes.selectedValue) {
            // specify if chart should be rotated or not
            chartGestures.interactiveAxes = wijmo.chart.interaction.InteractiveAxes[interactiveAxes.selectedValue];

            // update menu header
            updateMenuHeader(interactiveAxes, 'Interactive Axes');
        }
    });

    // helper function for Menu headers
    function updateMenuHeader(menu, prefix) {
        menu.header = '<b>' + prefix + '</b>: ' + menu.text;
    }

})(wijmo);
