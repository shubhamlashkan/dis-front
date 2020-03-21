import * as tslib_1 from "tslib";
import { PiechartComponent } from './../miscellaneous/piechart/piechart.component';
import { AboutModule } from './../about/about.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacultyRoutingModule } from './faculty-routing.module';
import { AttendanceComponent } from './attendance/attendance.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FacultyComponent } from './faculty/faculty.component';
import { HomeModule } from './home/home.module';
import { SidenavigationComponent } from '../faculty/sidenavigation/sidenavigation.component';
import { DocumentsComponent } from './documents/documents.component';
import { MiscellaneousModule } from 'src/app/miscellaneous/miscellaneous.module';
import { ConventionalModule } from '../conventional/conventional.module';
import { InfrastructureModule } from '../infrastructure/infrastructure.module';
import { HodModule } from '../hod/hod.module';
import { MydutiesModule } from '../myduties/myduties.module';
var FacultyModule = /** @class */ (function () {
    function FacultyModule() {
    }
    FacultyModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FacultyRoutingModule,
                HomeModule,
                MiscellaneousModule,
                AboutModule,
                InfrastructureModule,
                ConventionalModule,
                MydutiesModule,
                HodModule
            ],
            declarations: [
                AttendanceComponent,
                NavigationComponent,
                FacultyComponent,
                SidenavigationComponent,
                DocumentsComponent
            ],
            providers: [PiechartComponent]
        })
    ], FacultyModule);
    return FacultyModule;
}());
export { FacultyModule };
//# sourceMappingURL=faculty.module.js.map