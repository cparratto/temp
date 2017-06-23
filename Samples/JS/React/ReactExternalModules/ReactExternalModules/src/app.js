"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
//React
var React = require("react");
var ReactDOM = require("react-dom");
//Wijmo
var wjInput = require("wijmo/wijmo.react.input");
var wjGrid = require("wijmo/wijmo.react.grid");
var wjChart = require("wijmo/wijmo.react.chart");
//Application
var DataSvc_1 = require("./services/DataSvc");
var App = (function (_super) {
    __extends(App, _super);
    function App(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            theValue: null,
            theDate: null,
            data: null,
            chartData: null,
        };
        _this.state = {
            theValue: 7,
            theDate: new Date(),
            data: DataSvc_1.DataService.default.getData(100),
            chartData: DataSvc_1.DataService.default.getData(6),
        };
        return _this;
    }
    App.prototype.render = function () {
        return React.createElement("div", null,
            React.createElement("h1", null, "Using Wijmo for React external modules in WebPack and SystemJS"),
            React.createElement("p", null, "This sample uses external module versions of the Wijmo for React interop, and shows how to:"),
            React.createElement("ul", null,
                React.createElement("li", null,
                    "Bundle it by ",
                    React.createElement("a", { href: "https://webpack.js.org/", target: "_blank" }, "WebPack 2"),
                    " and run using wpbundle.html page. Wijmo modules in CommonJS and AMD formats can be used."),
                React.createElement("li", null,
                    "Run it using ",
                    React.createElement("a", { href: "https://github.com/systemjs/systemjs", target: "_blank" }, "SystemJS"),
                    " loader (default.htm page). Wijmo modules in CommonJS, AMD and System formats can be used.")),
            React.createElement("p", null, "Npm images containing Wijmo external modules in different module formats can be found under the NpmImages folder in Wijmo download zip."),
            React.createElement("h3", null, "Components from the wijmo.react.input module"),
            React.createElement(wjInput.InputNumber, { format: "c2", step: 1, value: this.state.theValue }),
            React.createElement("br", null),
            React.createElement("br", null),
            React.createElement(wjInput.InputDate, { value: this.state.theDate }),
            React.createElement("br", null),
            React.createElement("br", null),
            React.createElement("h3", null, "Components from the wijmo.react.grid module"),
            React.createElement(wjGrid.FlexGrid, { autoGenerateColumns: false, columns: [
                    { header: 'Country', binding: 'country', width: '*' },
                    { header: 'Date', binding: 'date' },
                    { header: 'Sales', binding: 'sales', format: 'c2' }
                ], itemsSource: this.state.data, style: { height: '250px', width: '500px' } }),
            React.createElement("br", null),
            React.createElement("h3", null, "Components from the wijmo.react.chart module"),
            React.createElement(wjChart.FlexChart, { itemsSource: this.state.chartData, bindingX: "country", series: [
                    { name: 'Sales', binding: 'sales' },
                    { name: 'Downloads', binding: 'downloads' }
                ] }));
    };
    return App;
}(React.Component));
ReactDOM.render(React.createElement(App), document.getElementById('app'));
//# sourceMappingURL=app.js.map