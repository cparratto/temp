(function (global) {
    System.config({
        paths: {
            // paths serve as alias
            'npm:': 'node_modules/'
        },
        // map tells the System loader where to look for things
        map: {
            // our app is within the app folder
            app: 'app',
            'react': 'npm:react/dist/react.js',
            'react-dom': 'npm:react-dom/dist/react-dom.js',
            'wijmo': 'npm:wijmo'
        },
        // packages tells the System loader how to load when no filename and/or no extension
        packages: {
            rxjs: {
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
