'use strict';
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
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var common_1 = require("@angular/common");
var TreeViewBaseCmp_1 = require("./TreeViewBaseCmp");
var wijmo_angular2_nav_1 = require("wijmo/wijmo.angular2.nav");
// Intro sample component.
var NavTreeCmp = (function (_super) {
    __extends(NavTreeCmp, _super);
    function NavTreeCmp() {
        var _this = _super.call(this) || this;
        _this.navItem = '';
        return _this;
    }
    // 'Navigation' display
    NavTreeCmp.prototype.navTo = function (treeView) {
        this.navItem = 'Navigating to *** ' + treeView.selectedItem.header + ' ***';
    };
    return NavTreeCmp;
}(TreeViewBaseCmp_1.TreeViewBaseCmp));
NavTreeCmp = __decorate([
    core_1.Component({
        selector: 'nav-tree-cmp',
        templateUrl: 'src/components/nav/navTreeCmp.html'
    })
], NavTreeCmp);
exports.NavTreeCmp = NavTreeCmp;
var routing = router_1.RouterModule.forChild([
    { path: '', component: NavTreeCmp }
]);
var NavTreeModule = (function () {
    function NavTreeModule() {
    }
    return NavTreeModule;
}());
NavTreeModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule, routing, forms_1.FormsModule, wijmo_angular2_nav_1.WjNavModule],
        declarations: [NavTreeCmp],
    })
], NavTreeModule);
exports.NavTreeModule = NavTreeModule;
//# sourceMappingURL=NavTreeCmp.js.map