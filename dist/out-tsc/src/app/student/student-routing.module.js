import * as tslib_1 from "tslib";
import { AboutModule } from './../about/about.module';
import { AboutComponent } from './../about/about/about.component';
import { StudentComponent } from './student/student.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GradesComponent } from './grades/grades.component';
import { AssignmentsComponent } from './assignments/assignments.component';
import { AlertsComponent } from './alerts/alerts.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { InfrastructureModule } from '../infrastructure/infrastructure.module';
import { InfrastructureOutletComponent } from '../infrastructure/infrastructure-outlet/infrastructure-outlet.component';
import { ProfileComponent } from '../conventional/profile/profile.component';
import { TimetableComponent } from '../conventional/timetable/timetable.component';
var routes = [
    { path: 'student',
        component: StudentComponent,
        children: [
            {
                path: '',
                component: HomeComponent
            },
            {
                path: 'student_about',
                component: AboutComponent,
                loadChildren: function () { return AboutModule; }
            },
            {
                path: 'student_infrastructure',
                component: InfrastructureOutletComponent,
                loadChildren: function () { return InfrastructureModule; }
            },
            {
                path: 'student_attendance',
                component: AttendanceComponent
            },
            {
                path: 'student_timetable',
                component: TimetableComponent
            },
            {
                path: 'student_grades',
                component: GradesComponent,
            },
            {
                path: 'student_complaints',
                loadChildren: '../complaints/complaints.module#ComplaintsModule'
            },
            {
                path: 'student_assignments',
                component: AssignmentsComponent
            },
            {
                path: 'student_alerts',
                component: AlertsComponent
            },
            {
                path: 'student_profile',
                component: ProfileComponent
            },
        ]
    }
];
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