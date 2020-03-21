import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { facultyData } from 'src/app/Model/facultyData';
import { FacultyDataService } from './faculty-data.service';
var FacultyComponent = /** @class */ (function () {
    function FacultyComponent(faculty_service) {
        this.faculty_service = faculty_service;
        this.fData = new facultyData();
        this.sData = new facultyData();
        this.getFacultyData();
        this.getStaffData();
    }
    FacultyComponent.prototype.getFacultyData = function () {
        var _this = this;
        this.faculty_service.getFacultyData()
            .subscribe(function (data) { return _this.fData = data; });
        console.log(this.fData);
    };
    FacultyComponent.prototype.getStaffData = function () {
        var _this = this;
        this.faculty_service.getStaffData()
            .subscribe(function (data) { return _this.sData = data; });
        console.log(this.sData);
    };
    FacultyComponent.prototype.ngOnInit = function () {
    };
    FacultyComponent = tslib_1.__decorate([
        Component({
            selector: 'app-faculty',
            templateUrl: './faculty.component.html',
            styleUrls: ['./faculty.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [FacultyDataService])
    ], FacultyComponent);
    return FacultyComponent;
}());
export { FacultyComponent };
//# sourceMappingURL=faculty.component.js.map