///<reference path="../typings/globals/core-js/index.d.ts"/>
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// Angular
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var http_1 = require("@angular/http");
var app_routing_1 = require("./app.routing");
// Services
var DataSvc_1 = require("./services/DataSvc");
var TooltipSvc_1 = require("./services/TooltipSvc");
'use strict';
// The FinancialChartExplorer application root component.
var AppCmp = (function () {
    function AppCmp() {
        // Used to show navigation links and section headers in markup.
        this.routTree = app_routing_1.routeTree;
    }
    return AppCmp;
}());
AppCmp = __decorate([
    core_1.Component({
        selector: 'app-cmp',
        templateUrl: 'src/app.html',
    })
], AppCmp);
exports.AppCmp = AppCmp;
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, app_routing_1.routing, http_1.HttpModule],
        declarations: [AppCmp],
        providers: [DataSvc_1.DataSvc, TooltipSvc_1.TooltipSvc],
        bootstrap: [AppCmp]
    })
], AppModule);
exports.AppModule = AppModule;
core_1.enableProdMode();
// Bootstrap application 
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(AppModule);
//# sourceMappingURL=app.js.map