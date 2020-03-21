import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
var routes = [];
var ConventionalRoutingModule = /** @class */ (function () {
    function ConventionalRoutingModule() {
    }
    ConventionalRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule]
        })
    ], ConventionalRoutingModule);
    return ConventionalRoutingModule;
}());
export { ConventionalRoutingModule };
//# sourceMappingURL=conventional-routing.module.js.map