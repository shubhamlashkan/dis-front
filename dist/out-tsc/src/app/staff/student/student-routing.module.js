import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
var routes = [];
var StudentRoutingModule = /** @class */ (function () {
    function StudentRoutingModule() {
    }
    StudentRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule]
        })
    ], StudentRoutingModule);
    return StudentRoutingModule;
}());
export { StudentRoutingModule };
//# sourceMappingURL=student-routing.module.js.map