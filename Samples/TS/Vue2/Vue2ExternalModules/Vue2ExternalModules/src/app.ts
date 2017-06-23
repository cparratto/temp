// this is necessary to make vue.common.js functional in non-Node environments (e.g. SystemJS)
//let proc = window['process'] = window['process'] || {};
//proc.env = proc.env || {};
//proc.env.NODE_ENV = proc.env.NODE_ENV || 'debug';

// Vue2
// This import will work with vue.esm.js module (in ESM format = (ES5 code + ES6 import/export statements)), 
// destined for usage with WebPack. vue.esm.js exports its stuff using a "default export".
import VueModuleDefault from 'vue';
// This import will work with vue.js (UMD) and vue.common.js (CommonJS) module, 
// that can be used with SystemJS. These modules can also be used with WebPack as well.
// These modules don't use "default export" to export their stuff.
import * as VueModule from 'vue';
// To make the same code functional with any Vue module kinds, we assign (VueModuleDefault || VueModule)
// to the Vue variable (one of them will contain a module reference while the other will be undefined),
// and use the Vue variable in code as the reference to the module.
export var Vue: typeof VueModuleDefault = VueModuleDefault || VueModule;
// In case where you need to work with vue.esm.js module only, you can import it by just this statement:
//import Vue from 'vue';
// In case where you need to work with vue.js or vue.common.js module only, you can import it by just this statement:
//import * as Vue from 'vue';

// Wijmo
// We don't need to import any symbols from Wijmo for Vue2 interop modules, we just need to load them,
// which will allow modules to globally register Vue2 components they contain.
import 'wijmo/wijmo.vue2.input';
import 'wijmo/wijmo.vue2.grid';
import 'wijmo/wijmo.vue2.chart';

// Application
import { DataService } from './services/DataSvc';

export var AppComponent: typeof Vue = Vue.component('app', {
    template: `
        <div>
            <h1>Using Wijmo for Vue2 external modules in WebPack and SystemJS</h1>
            <p>
                This sample uses external module versions of the Wijmo for Vue 2 interop,
                and shows how to: 
            </p>
            <ul>
                <li>
                    Bundle it 
                    by <a href="https://webpack.js.org/" target="_blank">WebPack 2</a> and 
                    run using wpbundle.html page. Wijmo modules in CommonJS and AMD formats can be used.
                </li>
                <li>
                    Run it using <a href="https://github.com/systemjs/systemjs" target="_blank">SystemJS</a> loader
                    (default.htm page). Wijmo modules in CommonJS, AMD and System formats can be used.
                </li>
            </ul>
            <p>
                Npm images containing Wijmo external modules in different module formats can be found under the 
                NpmImages folder in Wijmo download zip.
            </p>
            <h3>Components from the wijmo.vue2.input module</h3>
            <pre>import 'wijmo/wijmo.vue2.input';</pre>
            <wj-input-number :step="1" :value="theValue"></wj-input-number>
            <br></br>
            <wj-input-date :value="theDate"></wj-input-date>
            <br></br>

            <h3>Components from the wijmo.vue2.grid module</h3>
            <pre>import 'wijmo/wijmo.vue2.grid';</pre>
            <wj-flex-grid :items-source="data" style="height:250px;width:500px">
                <wj-flex-grid-column 
                    header="Country"
                    binding="country"
                    width="*">
                </wj-flex-grid-column>
                <wj-flex-grid-column
                    header="Date"
                    binding="date">
                </wj-flex-grid-column>
                <wj-flex-grid-column
                    header="Sales"
                    binding="sales"
                    format="c2">
                </wj-flex-grid-column>
            </wj-flex-grid> 
            <br></br>

            <h3>Components from the wijmo.vue2.chart module</h3>
            <pre>import 'wijmo/wijmo.vue2.chart';</pre>
            <wj-flex-chart 
                :items-source="chartData"
                binding-x="country">
                <wj-flex-chart-series name="Sales" binding="sales"></wj-flex-chart-series>
                <wj-flex-chart-series name="Downloads" binding="downloads"></wj-flex-chart-series>
            </wj-flex-chart>
        </div>
    `,
    data: function () {
        return {
            theValue: 5,
            theDate: new Date(),
            data: DataService.default.getData(100),
            chartData: DataService.default.getData(6),
        }
    }
});

new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue.js!',
        theValue: 7,
        theDate: new Date()
    }
});
