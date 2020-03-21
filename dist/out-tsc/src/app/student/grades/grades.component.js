import * as tslib_1 from "tslib";
import { SemesterSubjectsService } from './../../API_Service/SemesterSubjectsService';
import { Component } from '@angular/core';
var GradesComponent = /** @class */ (function () {
    function GradesComponent(semSubjects) {
        this.semSubjects = semSubjects;
    }
    GradesComponent.prototype.ngOnInit = function () {
        this.subjects = this.semSubjects.getSubjectList();
    };
    GradesComponent = tslib_1.__decorate([
        Component({
            selector: 'app-grades',
            templateUrl: './grades.component.html',
            styleUrls: ['./grades.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [SemesterSubjectsService])
    ], GradesComponent);
    return GradesComponent;
}());
export { GradesComponent };
//# sourceMappingURL=grades.component.js.map