import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { InfraService } from '../services/infra.service';
import { Laboratory } from "../models/Laboratory";
import { Others } from '../models/Others';
import { FacultyRoom } from '../models/FacultyRoom';
import { facultyData } from 'src/app/Model/facultyData';
import { FacultyDataService } from 'src/app/hod/faculty/faculty-data.service';
var InfrastructureComponent = /** @class */ (function () {
    function InfrastructureComponent(infraservice, faculty_service) {
        this.infraservice = infraservice;
        this.faculty_service = faculty_service;
        this.labs = new Laboratory();
        this.others = new Others();
        this.facultyRooms = new FacultyRoom();
        this.lab = new Laboratory();
        this.fData = new facultyData();
        this.sData = new facultyData();
        this.getallLabs();
        this.getallOthers();
        this.getFacultyRooms();
        this.getFacultyData();
        this.getStaffData();
    }
    InfrastructureComponent.prototype.getallLabs = function () {
        var _this = this;
        this.infraservice.getLabs()
            .subscribe(function (data) { return _this.labs = data; });
    };
    InfrastructureComponent.prototype.getallOthers = function () {
        var _this = this;
        this.infraservice.getOtherInfra()
            .subscribe(function (data) { return _this.others = data; });
    };
    InfrastructureComponent.prototype.getFacultyRooms = function () {
        var _this = this;
        this.infraservice.getFacultyRooms()
            .subscribe(function (data) { return _this.facultyRooms = data; });
    };
    InfrastructureComponent.prototype.infraName = function (l) {
        this.infraservice.setInfraName(l);
    };
    InfrastructureComponent.prototype.getFacultyData = function () {
        var _this = this;
        this.faculty_service.getFacultyData()
            .subscribe(function (data) { return _this.fData = data; });
        console.log(this.fData);
    };
    InfrastructureComponent.prototype.getStaffData = function () {
        var _this = this;
        this.faculty_service.getStaffData()
            .subscribe(function (data) { return _this.sData = data; });
        console.log(this.sData);
    };
    InfrastructureComponent.prototype.ngOnInit = function () {
    };
    InfrastructureComponent = tslib_1.__decorate([
        Component({
            selector: 'app-infrastructure',
            templateUrl: './infrastructure.component.html',
            styleUrls: ['./infrastructure.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [InfraService, FacultyDataService])
    ], InfrastructureComponent);
    return InfrastructureComponent;
}());
export { InfrastructureComponent };
//# sourceMappingURL=infrastructure.component.js.map