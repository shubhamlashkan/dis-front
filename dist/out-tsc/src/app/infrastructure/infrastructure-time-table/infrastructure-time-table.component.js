import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { InfraService } from '../services/infra.service';
import { Laboratory } from '../models/Laboratory';
import { facultyData } from 'src/app/Model/facultyData';
import { FacultyDataService } from 'src/app/hod/faculty/faculty-data.service';
var InfrastructureTimeTableComponent = /** @class */ (function () {
    function InfrastructureTimeTableComponent(infraService, faculty_service) {
        this.faculty_service = faculty_service;
        this.fData = new facultyData();
        this.sData = new facultyData();
        this.lab = new Laboratory;
        this.lab = infraService.getInfraName();
        this.getFacultyData();
        this.getStaffData();
    }
    InfrastructureTimeTableComponent.prototype.getFacultyData = function () {
        var _this = this;
        this.faculty_service.getFacultyData()
            .subscribe(function (data) { return _this.fData = data; });
        console.log(this.fData);
    };
    InfrastructureTimeTableComponent.prototype.getStaffData = function () {
        var _this = this;
        this.faculty_service.getStaffData()
            .subscribe(function (data) { return _this.sData = data; });
        console.log(this.sData);
    };
    InfrastructureTimeTableComponent.prototype.ngOnInit = function () {
    };
    InfrastructureTimeTableComponent = tslib_1.__decorate([
        Component({
            selector: 'app-infrastructure-time-table',
            templateUrl: './infrastructure-time-table.component.html',
            styleUrls: ['./infrastructure-time-table.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [InfraService, FacultyDataService])
    ], InfrastructureTimeTableComponent);
    return InfrastructureTimeTableComponent;
}());
export { InfrastructureTimeTableComponent };
//# sourceMappingURL=infrastructure-time-table.component.js.map