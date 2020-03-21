import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { NotificationComponent } from './notification/notification.component';
import { FacultyhomeComponent } from './facultyhome/facultyhome.component';
import { SidenavigationComponent } from './sidenavigation/sidenavigation.component';
import { MiscellaneousModule } from 'src/app/miscellaneous/miscellaneous.module';
var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                HomeRoutingModule,
                MiscellaneousModule
            ],
            declarations: [HomeComponent, NotificationComponent, FacultyhomeComponent, SidenavigationComponent],
            exports: [NotificationComponent, FacultyhomeComponent]
        })
    ], HomeModule);
    return HomeModule;
}());
export { HomeModule };
//# sourceMappingURL=home.module.js.map