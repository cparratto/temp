/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
    System.config({
        paths: {
            // paths serve as alias
            'npm:': 'node_modules/'
        },
        //meta: {
        //    'npm:vue/dist/vue.esm.js': {
        //        format: 'esm'
        //    }
        //},
        // map tells the System loader where to look for things
        map: {
            // our app is within the app folder
            app: 'app',
            //'vue': 'npm:vue/dist/vue.common.js', // doesn't work due to missed process.env.NODE_ENV
            'vue': 'npm:vue/dist/vue.js',
            //'vue': 'npm:vue/dist/vue.esm.js',
            'wijmo': 'npm:wijmo'
        },
        // packages tells the System loader how to load when no filename and/or no extension
        packages: {
            rxjs: {
                defaultExtension: 'js'
            },
            'angular2-in-memory-web-api': {
                main: './index.js',
                defaultExtension: 'js'
            },
            src: {
                defaultExtension: 'js'
            },
            wijmo: {
                defaultExtension: 'js'
            }
        }
    });
})(this);
