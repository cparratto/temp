(function (wijmo) {
    'use strict';

    // create controls
    var viewer = new wijmo.viewer.PdfViewer('#basicPdfViewer'),
        fullScreen = document.getElementById('basicFullScreen'),
        mouseModeMenu = new wijmo.input.Menu('#basicMouseMode'),
        zoomFactor = new wijmo.input.InputNumber('#basicZoomFactor'),
        continuousViewMode = document.getElementById('basicContinuousViewMode');

    updateMouseModeMenuHeader();

    // initialize PdfViewer's properties
    viewer.serviceUrl = serviceUrl;
    viewer.filePath = 'PdfRoot/C1XapOptimizer.pdf';

    // fullScreen
    fullScreen.checked = viewer.fullScreen;
    fullScreen.addEventListener('change', function () {
        viewer.fullScreen = this.checked;
    });

    // mouseMode
    mouseModeMenu.itemClicked.addHandler(function (sender) {
        viewer.mouseMode = sender.selectedValue;
        updateMouseModeMenuHeader();
    });

    // react to zoomFactor changes if mouseMode = RubberbandTool
    viewer.zoomFactorChanged.addHandler(function (sender) {
        zoomFactor.value = sender.zoomFactor;
    });

    // continousViewMode
    continuousViewMode.checked = viewer.viewMode === wijmo.viewer.ViewMode.Continuous;
    continuousViewMode.addEventListener('change', function () {
        viewer.viewMode = this.checked ? wijmo.viewer.ViewMode.Continuous : wijmo.viewer.ViewMode.Single;
    });

    // zoomFactor - initialize InputNumber's properties
    zoomFactor.min = 0.05;
    zoomFactor.max = 10;
    zoomFactor.step = 0.1;
    zoomFactor.format = 'n2';
    zoomFactor.value = viewer.zoomFactor;
    zoomFactor.valueChanged.addHandler(function (sender) {
        if (sender.value < sender.min || sender.value > sender.max) {
            return;
        }
        viewer.zoomFactor = sender.value;
    });

    function updateMouseModeMenuHeader() {
        mouseModeMenu.header = '<b>Mouse Mode:</b> ' + mouseModeMenu.text;
    }
})(wijmo);