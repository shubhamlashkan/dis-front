import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';
var FacultiesComponent = /** @class */ (function () {
    function FacultiesComponent(employeeHandler) {
        this.employeeHandler = employeeHandler;
    }
    FacultiesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.facultyList = this.employeeHandler.getFacultyDetails().subscribe(function (data) {
            _this.facultyMembers = data;
            console.log(_this.facultyMembers);
        });
    };
    FacultiesComponent = tslib_1.__decorate([
        Component({
            selector: 'app-faculties',
            templateUrl: './faculties.component.html',
            styleUrls: ['./faculties.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [EmployeeService])
    ], FacultiesComponent);
    return FacultiesComponent;
}());
export { FacultiesComponent };
//# sourceMappingURL=faculties.component.js.map