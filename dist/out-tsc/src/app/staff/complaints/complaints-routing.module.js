import * as tslib_1 from "tslib";
import { ResolvedComplaintsComponent } from './resolved-complaints/resolved-complaints.component';
import { RemainingComplaintsComponent } from './remaining-complaints/remaining-complaints.component';
import { TotalComplaintsComponent } from './total-complaints/total-complaints.component';
import { SideNavigationComponent } from './side-navigation/side-navigation.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
var routes = [
    {
        path: '',
        component: RemainingComplaintsComponent
    },
    {
        path: 'remaining_complaints',
        component: RemainingComplaintsComponent
    },
    {
        path: 'total_complaints',
        component: TotalComplaintsComponent
    },
    {
        path: 'resolved_complaints',
        component: ResolvedComplaintsComponent
    },
    {
        path: 'side_navigation',
        component: SideNavigationComponent
    }
];
var ComplaintsRoutingModule = /** @class */ (function () {
    function ComplaintsRoutingModule() {
    }
    ComplaintsRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule]
        })
    ], ComplaintsRoutingModule);
    return ComplaintsRoutingModule;
}());
export { ComplaintsRoutingModule };
//# sourceMappingURL=complaints-routing.module.js.map