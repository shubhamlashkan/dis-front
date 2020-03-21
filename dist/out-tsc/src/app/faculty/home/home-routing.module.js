import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FacultyComponent } from '../faculty/faculty.component';
import { HomeComponent } from './home/home.component';
import { FacultyhomeComponent } from './facultyhome/facultyhome.component';
import { NotificationComponent } from './notification/notification.component';
var routes = [
    {
        path: 'faculty',
        component: FacultyComponent,
        children: [
            {
                path: '',
                component: HomeComponent,
                children: [
                    {
                        path: '',
                        component: FacultyhomeComponent
                    },
                    {
                        path: 'notification',
                        component: NotificationComponent
                    }
                ]
            },
            {
                path: 'home',
                component: HomeComponent,
                children: [
                    {
                        path: '',
                        component: FacultyhomeComponent
                    },
                    {
                        path: 'notification',
                        component: NotificationComponent
                    }
                ]
            },
        ]
    }
];
var HomeRoutingModule = /** @class */ (function () {
    function HomeRoutingModule() {
    }
    HomeRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule]
        })
    ], HomeRoutingModule);
    return HomeRoutingModule;
}());
export { HomeRoutingModule };
//# sourceMappingURL=home-routing.module.js.map