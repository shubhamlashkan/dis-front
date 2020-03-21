import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { SemesterSubjectsService } from './../../API_Service/SemesterSubjectsService';
var AssignmentsComponent = /** @class */ (function () {
    function AssignmentsComponent(semSubjects) {
        this.semSubjects = semSubjects;
    }
    AssignmentsComponent.prototype.ngOnInit = function () {
        this.subjects = this.semSubjects.getSubjectList();
    };
    AssignmentsComponent = tslib_1.__decorate([
        Component({
            selector: 'app-assignments',
            templateUrl: './assignments.component.html',
            styleUrls: ['./assignments.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [SemesterSubjectsService])
    ], AssignmentsComponent);
    return AssignmentsComponent;
}());
export { AssignmentsComponent };
//# sourceMappingURL=assignments.component.js.map