import * as tslib_1 from "tslib";
import { RouterModule } from "@angular/router";
import { MydutiesNavigationComponent } from "./myduties-navigation/myduties-navigation.component";
import { NgModule } from "@angular/core";
import { LibraryModule } from "./library/library.module";
var routes = [
    {
        path: 'mydutiesnavigation',
        component: MydutiesNavigationComponent
    },
];
var MydutiesRoutingModule = /** @class */ (function () {
    function MydutiesRoutingModule() {
    }
    MydutiesRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forChild(routes), LibraryModule],
            exports: [RouterModule]
        })
    ], MydutiesRoutingModule);
    return MydutiesRoutingModule;
}());
export { MydutiesRoutingModule };
//# sourceMappingURL=myduties-routing.module.js.map