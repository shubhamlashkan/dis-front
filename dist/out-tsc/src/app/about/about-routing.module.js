import * as tslib_1 from "tslib";
import { ComputerclubComponent } from './computerclub/computerclub.component';
import { StaffComponent } from './staff/staff.component';
import { MagazineComponent } from './magazine/magazine.component';
import { OverviewComponent } from './overview/overview.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FacultiesComponent } from './faculties/faculties.component';
import { LibraryComponent } from './library/library.component';
export var routes = [
    {
        path: '',
        component: OverviewComponent
    },
    {
        path: 'overview',
        component: OverviewComponent
    },
    {
        path: 'faculties',
        component: FacultiesComponent
    },
    {
        path: 'magazine',
        component: MagazineComponent
    },
    {
        path: 'library',
        component: LibraryComponent
    },
    {
        path: 'staff',
        component: StaffComponent
    },
    {
        path: 'computerclub',
        component: ComputerclubComponent
    },
];
var AboutRoutingModule = /** @class */ (function () {
    function AboutRoutingModule() {
    }
    AboutRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule]
        })
    ], AboutRoutingModule);
    return AboutRoutingModule;
}());
export { AboutRoutingModule };
//# sourceMappingURL=about-routing.module.js.map