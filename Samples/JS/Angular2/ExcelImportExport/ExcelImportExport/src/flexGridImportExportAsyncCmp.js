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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var wjcGridXlsx = require("wijmo/wijmo.grid.xlsx");
// Angular
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var platform_browser_1 = require("@angular/platform-browser");
var wijmo_angular2_grid_1 = require("wijmo/wijmo.angular2.grid");
var AppTab_1 = require("./components/AppTab");
var DataSvc_1 = require("./services/DataSvc");
var FlexGridImportExportBaseCmp_1 = require("./FlexGridImportExportBaseCmp");
'use strict';
// The Explorer application root component.
var FlexGridImportExportAsyncCmp = (function (_super) {
    __extends(FlexGridImportExportAsyncCmp, _super);
    function FlexGridImportExportAsyncCmp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FlexGridImportExportAsyncCmp.prototype.exportExcelAsync = function () {
        wjcGridXlsx.FlexGridXlsxConverter.saveAsync(this.flexGrid, {
            includeColumnHeaders: this.includeColumnHeader,
            includeCellStyles: false,
            formatItem: this.customContent ? this._exportFormatItem : null
        }, 'FlexGrid.xlsx');
    };
    FlexGridImportExportAsyncCmp.prototype.importExcelAsync = function () {
        var fileInput = document.getElementById('importFile');
        if (fileInput.files[0]) {
            wjcGridXlsx.FlexGridXlsxConverter.loadAsync(this.flexGrid, fileInput.files[0], { includeColumnHeaders: this.includeColumnHeader });
        }
    };
    return FlexGridImportExportAsyncCmp;
}(FlexGridImportExportBaseCmp_1.FlexGridImportExportBaseCmp));
FlexGridImportExportAsyncCmp = __decorate([
    core_1.Component({
        selector: 'flex-grid-import-export-async-cmp',
        templateUrl: 'src/flexGridImportExportAsyncCmp.html'
    })
], FlexGridImportExportAsyncCmp);
exports.FlexGridImportExportAsyncCmp = FlexGridImportExportAsyncCmp;
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [wijmo_angular2_grid_1.WjGridModule, platform_browser_1.BrowserModule, forms_1.FormsModule, AppTab_1.TabsModule],
        declarations: [FlexGridImportExportAsyncCmp],
        providers: [DataSvc_1.DataSvc],
        bootstrap: [FlexGridImportExportAsyncCmp]
    })
], AppModule);
exports.AppModule = AppModule;
core_1.enableProdMode();
// Bootstrap application with hash style navigation and global services.
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(AppModule);
//# sourceMappingURL=flexGridImportExportAsyncCmp.js.map