import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentRoutingModule } from './student-routing.module';
import { StudentComponent } from './student/student.component';
import { StudentRollListComponent } from './student-roll-list/student-roll-list.component';
import { StudentFourthYearProjectComponent } from './student-fourth-year-project/student-fourth-year-project.component';
import { MeProjectDetailsComponent } from './me-project-details/me-project-details.component';
import { MeScholarshipDetailsComponent } from './me-scholarship-details/me-scholarship-details.component';
var StudentModule = /** @class */ (function () {
    function StudentModule() {
    }
    StudentModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                StudentRoutingModule
            ],
            declarations: [StudentComponent, StudentRollListComponent, StudentFourthYearProjectComponent, MeProjectDetailsComponent, MeScholarshipDetailsComponent]
        })
    ], StudentModule);
    return StudentModule;
}());
export { StudentModule };
//# sourceMappingURL=student.module.js.map