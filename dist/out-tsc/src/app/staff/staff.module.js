import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MiscellaneousModule } from '../miscellaneous/miscellaneous.module';
import { StaffRoutingModule } from './staff-routing.module';
import { HomeComponent } from './home/home.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { StudentComponent } from './student/student/student.component';
import { DocumentsComponent } from './documents/documents.component';
import { AlertsComponent } from './alerts/alerts.component';
import { StaffComponent } from './staff/staff.component';
import { SidenavigationComponent } from './sidenavigation/sidenavigation.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ConventionalModule } from '../conventional/conventional.module';
var StaffModule = /** @class */ (function () {
    function StaffModule() {
    }
    StaffModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                StaffRoutingModule,
                MiscellaneousModule,
                // ComplaintsModule,
                ConventionalModule
            ],
            declarations: [
                HomeComponent,
                AttendanceComponent,
                StudentComponent,
                DocumentsComponent,
                AlertsComponent,
                StaffComponent,
                SidenavigationComponent,
                NavigationComponent
            ],
            providers: []
        })
    ], StaffModule);
    return StaffModule;
}());
export { StaffModule };
//# sourceMappingURL=staff.module.js.map