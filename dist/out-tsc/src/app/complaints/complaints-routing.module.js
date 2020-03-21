import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RemainingComplaintsComponent } from './remaining-complaints/remaining-complaints.component';
import { TotalComplaintsComponent } from './total-complaints/total-complaints.component';
import { ResolvedComplaintsComponent } from './resolved-complaints/resolved-complaints.component';
import { SideNavigationComponent } from './side-navigation/side-navigation.component';
import { MyComplaintsComponent } from './my-complaints/my-complaints.component';
import { ResourceRequestComponent } from './resource-request/resource-request.component';
var route = 'remaining_complaints';
if (localStorage.getItem('userType') === 'student') {
    route = 'mycomplaints';
}
else {
    route = 'remaining_complaints';
}
//student can see only mycomplaints we need to put authgurad for other complaints
var routes = [
    {
        path: '',
        component: SideNavigationComponent,
        children: [
            {
                path: '',
                redirectTo: route,
                pathMatch: 'full'
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
                path: 'mycomplaints',
                component: MyComplaintsComponent
            },
            {
                path: 'resource_request',
                component: ResourceRequestComponent
            }
        ]
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