// this is necessary to make vue.common.js functional in non-Node environments (e.g. SystemJS)
//let proc = window['process'] = window['process'] || {};
//proc.env = proc.env || {};
//proc.env.NODE_ENV = proc.env.NODE_ENV || 'debug';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Vue2
// This import will work with vue.esm.js module (in ESM format = (ES5 code + ES6 import/export statements)), 
// destined for usage with WebPack. vue.esm.js exports its stuff using a "default export".
var vue_1 = require("vue");
// This import will work with vue.js (UMD) and vue.common.js (CommonJS) module, 
// that can be used with SystemJS. These modules can also be used with WebPack as well.
// These modules don't use "default export" to export their stuff.
var VueModule = require("vue");
// To make the same code functional with any Vue module kinds, we assign (VueModuleDefault || VueModule)
// to the Vue variable (one of them will contain a module reference while the other will be undefined),
// and use the Vue variable in code as the reference to the module.
exports.Vue = vue_1.default || VueModule;
// In case where you need to work with vue.esm.js module only, you can import it by just this statement:
//import Vue from 'vue';
// In case where you need to work with vue.js or vue.common.js module only, you can import it by just this statement:
//import * as Vue from 'vue';
// Wijmo
// We don't need to import any symbols from Wijmo for Vue2 interop modules, we just need to load them,
// which will allow modules to globally register Vue2 components they contain.
require("wijmo/wijmo.vue2.input");
require("wijmo/wijmo.vue2.grid");
require("wijmo/wijmo.vue2.chart");
// Application
var DataSvc_1 = require("./services/DataSvc");
exports.AppComponent = exports.Vue.component('app', {
    template: "\n        <div>\n            <h1>Using Wijmo for Vue2 external modules in WebPack and SystemJS</h1>\n            <p>\n                This sample uses external module versions of the Wijmo for Vue 2 interop,\n                and shows how to: \n            </p>\n            <ul>\n                <li>\n                    Bundle it \n                    by <a href=\"https://webpack.js.org/\" target=\"_blank\">WebPack 2</a> and \n                    run using wpbundle.html page. Wijmo modules in CommonJS and AMD formats can be used.\n                </li>\n                <li>\n                    Run it using <a href=\"https://github.com/systemjs/systemjs\" target=\"_blank\">SystemJS</a> loader\n                    (default.htm page). Wijmo modules in CommonJS, AMD and System formats can be used.\n                </li>\n            </ul>\n            <p>\n                Npm images containing Wijmo external modules in different module formats can be found under the \n                NpmImages folder in Wijmo download zip.\n            </p>\n            <h3>Components from the wijmo.vue2.input module</h3>\n            <pre>import 'wijmo/wijmo.vue2.input';</pre>\n            <wj-input-number :step=\"1\" :value=\"theValue\"></wj-input-number>\n            <br></br>\n            <wj-input-date :value=\"theDate\"></wj-input-date>\n            <br></br>\n\n            <h3>Components from the wijmo.vue2.grid module</h3>\n            <pre>import 'wijmo/wijmo.vue2.grid';</pre>\n            <wj-flex-grid :items-source=\"data\" style=\"height:250px;width:500px\">\n                <wj-flex-grid-column \n                    header=\"Country\"\n                    binding=\"country\"\n                    width=\"*\">\n                </wj-flex-grid-column>\n                <wj-flex-grid-column\n                    header=\"Date\"\n                    binding=\"date\">\n                </wj-flex-grid-column>\n                <wj-flex-grid-column\n                    header=\"Sales\"\n                    binding=\"sales\"\n                    format=\"c2\">\n                </wj-flex-grid-column>\n            </wj-flex-grid> \n            <br></br>\n\n            <h3>Components from the wijmo.vue2.chart module</h3>\n            <pre>import 'wijmo/wijmo.vue2.chart';</pre>\n            <wj-flex-chart \n                :items-source=\"chartData\"\n                binding-x=\"country\">\n                <wj-flex-chart-series name=\"Sales\" binding=\"sales\"></wj-flex-chart-series>\n                <wj-flex-chart-series name=\"Downloads\" binding=\"downloads\"></wj-flex-chart-series>\n            </wj-flex-chart>\n        </div>\n    ",
    data: function () {
        return {
            theValue: 5,
            theDate: new Date(),
            data: DataSvc_1.DataService.default.getData(100),
            chartData: DataSvc_1.DataService.default.getData(6),
        };
    }
});
new exports.Vue({
    el: '#app',
    data: {
        message: 'Hello Vue.js!',
        theValue: 7,
        theDate: new Date()
    }
});
//# sourceMappingURL=app.js.map