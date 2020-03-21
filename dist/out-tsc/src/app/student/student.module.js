import * as tslib_1 from "tslib";
import { ConventionalModule } from './../conventional/conventional.module';
import { AboutRoutingModule } from './../about/about-routing.module';
import { AboutModule } from './../about/about.module';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentRoutingModule } from './student-routing.module';
import { NavigationComponent } from './navigation/navigation.component';
import { GradesComponent } from './grades/grades.component';
import { AlertsComponent } from './alerts/alerts.component';
import { AssignmentsComponent } from './assignments/assignments.component';
import { ComplaintsComponent } from './complaints/complaints.component';
import { StudentComponent } from './student/student.component';
import { SidenavigationComponent } from './sidenavigation/sidenavigation.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { MiscellaneousModule } from '../miscellaneous/miscellaneous.module';
import { BarchartComponent } from '../miscellaneous/barchart/barchart.component';
import { InfrastructureModule } from '../infrastructure/infrastructure.module';
var StudentModule = /** @class */ (function () {
    function StudentModule() {
    }
    StudentModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                StudentRoutingModule,
                AboutModule,
                AboutRoutingModule,
                MiscellaneousModule,
                ConventionalModule,
                InfrastructureModule
            ],
            declarations: [
                HomeComponent,
                NavigationComponent,
                GradesComponent,
                AlertsComponent,
                AssignmentsComponent,
                ComplaintsComponent,
                StudentComponent,
                AttendanceComponent,
                SidenavigationComponent
            ],
            providers: [BarchartComponent],
            exports: [NavigationComponent]
        })
    ], StudentModule);
    return StudentModule;
}());
export { StudentModule };
//# sourceMappingURL=student.module.js.map