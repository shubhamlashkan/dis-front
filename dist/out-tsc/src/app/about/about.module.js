import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutRoutingModule } from './about-routing.module';
import { OverviewComponent } from './overview/overview.component';
import { MagazineComponent } from './magazine/magazine.component';
import { FacultiesComponent } from './faculties/faculties.component';
import { StaffComponent } from './staff/staff.component';
import { ComputerclubComponent } from './computerclub/computerclub.component';
import { AboutComponent } from './about/about.component';
import { AboutNavigationComponent } from './about-navigation/about-navigation.component';
import { MatTableModule, MatSortModule } from '@angular/material';
import { LibraryComponent } from './library/library.component';
var AboutModule = /** @class */ (function () {
    function AboutModule() {
    }
    AboutModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                AboutRoutingModule,
                MatTableModule,
                MatSortModule
            ],
            declarations: [OverviewComponent, MagazineComponent, FacultiesComponent, StaffComponent, ComputerclubComponent, AboutComponent, AboutNavigationComponent, LibraryComponent],
            exports: [OverviewComponent, MagazineComponent, FacultiesComponent, StaffComponent, ComputerclubComponent, AboutComponent, AboutNavigationComponent]
        })
    ], AboutModule);
    return AboutModule;
}());
export { AboutModule };
//# sourceMappingURL=about.module.js.map