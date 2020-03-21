import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FacultyComponent } from './faculty/faculty.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeRoutingModule } from './home/home-routing.module';
import { DocumentsComponent } from './documents/documents.component';
import { AboutComponent } from '../about/about/about.component';
import { AboutModule } from '../about/about.module';
import { ConventionalModule } from '../conventional/conventional.module';
import { MydutiesModule } from '../myduties/myduties.module';
import { InfrastructureModule } from '../infrastructure/infrastructure.module';
import { InfrastructureOutletComponent } from '../infrastructure/infrastructure-outlet/infrastructure-outlet.component';
import { ProfileComponent } from '../conventional/profile/profile.component';
import { StudentComponent } from '../hod/student/student.component';
import { HodModule } from '../hod/hod.module';
import { TimetableComponent } from '../conventional/timetable/timetable.component';
import { MydutiesNavigationComponent } from '../myduties/myduties-navigation/myduties-navigation.component';
var routes = [
    {
        path: 'faculty',
        component: FacultyComponent,
        children: [
            {
                path: 'about',
                component: AboutComponent,
                loadChildren: function () { return AboutModule; }
            },
            {
                path: 'infrastructure',
                component: InfrastructureOutletComponent,
                loadChildren: function () { return InfrastructureModule; }
            },
            {
                path: 'myduties',
                component: MydutiesNavigationComponent,
                loadChildren: function () { return MydutiesModule; }
            },
            {
                path: 'attendance',
                component: AttendanceComponent
            },
            {
                path: 'navigation',
                component: NavigationComponent
            },
            {
                path: 'documents',
                component: DocumentsComponent
            },
            {
                path: 'profile',
                component: ProfileComponent,
                loadChildren: function () { return ConventionalModule; }
            },
            {
                path: 'complaints',
                loadChildren: '../complaints/complaints.module#ComplaintsModule'
            },
            {
                path: 'timetable', component: TimetableComponent, loadChildren: function () { return ConventionalModule; }
            },
            {
                path: 'students',
                component: StudentComponent,
                loadChildren: function () { return HodModule; }
            },
        ]
    }
];
var FacultyRoutingModule = /** @class */ (function () {
    function FacultyRoutingModule() {
    }
    FacultyRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forChild(routes), HomeRoutingModule
            ],
            exports: [RouterModule]
        })
    ], FacultyRoutingModule);
    return FacultyRoutingModule;
}());
export { FacultyRoutingModule };
//# sourceMappingURL=faculty-routing.module.js.map