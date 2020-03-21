import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { ComplaintsService } from 'src/app/API_Service/complaints.service';
var ResolvedComplaintsComponent = /** @class */ (function () {
    function ResolvedComplaintsComponent(complaints) {
        this.complaints = complaints;
        this.userType = localStorage.getItem('userType');
    }
    ResolvedComplaintsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.student = false;
        this.staff = false;
        this.isFaculty = false;
        this.hod = false;
        this.cleanliness = true;
        this.le = true;
        this.cwn = true;
        this.ecc = true;
        this.other = true;
        this.faculty = true;
        this.stu = true;
        this.emrs = true;
        this.telephone = true;
        if (this.userType === "student") {
            this.student = true;
        }
        if (this.userType === "staff") {
            this.staff = true;
        }
        if (this.userType === "head") {
            this.hod = true;
        }
        if (this.userType === "faculty") {
            this.isFaculty = true;
        }
        this.cleanlinessResolvedComplaintsData = this.complaints.getResolvedCleanlinessComplaint()
            .subscribe(function (data) {
            _this.cleanlinessResolvedComplaintsInfo = data;
            console.log(_this.cleanlinessResolvedComplaintsInfo);
        });
        this.leResolvedComplaintsData = this.complaints.getResolvedLEComplaints()
            .subscribe(function (data) {
            _this.leResolvedComplaintsInfo = data;
            console.log(_this.leResolvedComplaintsInfo);
        });
        this.cwnResolvedComplaintsData = this.complaints.getResolvedCWNComplaints()
            .subscribe(function (data) {
            _this.cwnResolvedComplaintsInfo = data;
            console.log(_this.cwnResolvedComplaintsInfo);
        });
        this.eccwResolvedComplaintsData = this.complaints.getResolvedECCWComplaints()
            .subscribe(function (data) {
            _this.eccwResolvedComplaintsInfo = data;
            console.log(_this.cleanlinessResolvedComplaintsInfo);
        });
        this.otherResolvedComplaintsData = this.complaints.getResolvedOtherComplaints()
            .subscribe(function (data) {
            _this.otherResolvedComplaintsInfo = data;
            console.log(_this.otherResolvedComplaintsInfo);
        });
        this.facultyResolvedComplaintsData = this.complaints.getResolvedFacultyComplaints()
            .subscribe(function (data) {
            _this.facultyResolvedComplaintsInfo = data;
            console.log(_this.facultyResolvedComplaintsInfo);
        });
        this.stuResolvedComplaintsData = this.complaints.getResolvedStudentComplaints()
            .subscribe(function (data) {
            _this.stuResolvedComplaintsInfo = data;
            console.log(_this.stuResolvedComplaintsInfo);
        });
        this.emrsResolvedComplaintsData = this.complaints.getResolvedEMRSComplaints()
            .subscribe(function (data) {
            _this.emrsResolvedComplaintsInfo = data;
            console.log(_this.emrsResolvedComplaintsInfo);
        });
        this.telephoneResolvedComplaintsData = this.complaints.getResolvedTelephoneComplaints()
            .subscribe(function (data) {
            _this.telephoneResolvedComplaintsInfo = data;
            console.log(_this.telephoneResolvedComplaintsInfo);
        });
    };
    ResolvedComplaintsComponent.prototype.showAll = function () {
        this.cleanliness = true;
        this.le = true;
        this.cwn = true;
        this.ecc = true;
        this.other = true;
        this.faculty = true;
        this.stu = true;
        this.emrs = true;
        this.telephone = true;
    };
    ResolvedComplaintsComponent.prototype.showOther = function () {
        this.cleanliness = false;
        this.le = false;
        this.cwn = false;
        this.ecc = false;
        this.other = true;
        this.faculty = false;
        this.stu = false;
        this.emrs = false;
        this.telephone = false;
    };
    ResolvedComplaintsComponent.prototype.showStudent = function () {
        this.cleanliness = false;
        this.le = false;
        this.cwn = false;
        this.ecc = false;
        this.other = false;
        this.faculty = false;
        this.stu = true;
        this.emrs = false;
        this.telephone = false;
    };
    ResolvedComplaintsComponent.prototype.showCleanliness = function () {
        this.cleanliness = true;
        this.le = false;
        this.cwn = false;
        this.ecc = false;
        this.other = false;
        this.faculty = false;
        this.stu = false;
        this.emrs = false;
        this.telephone = false;
    };
    ResolvedComplaintsComponent.prototype.showLe = function () {
        this.cleanliness = false;
        this.le = true;
        this.cwn = false;
        this.ecc = false;
        this.other = false;
        this.faculty = false;
        this.stu = false;
        this.emrs = false;
        this.telephone = false;
    };
    ResolvedComplaintsComponent.prototype.showCwn = function () {
        this.cleanliness = false;
        this.le = false;
        this.cwn = true;
        this.ecc = false;
        this.other = false;
        this.faculty = false;
        this.stu = false;
        this.emrs = false;
        this.telephone = false;
    };
    ResolvedComplaintsComponent.prototype.showEcc = function () {
        this.cleanliness = false;
        this.le = false;
        this.cwn = false;
        this.ecc = true;
        this.other = false;
        this.faculty = false;
        this.stu = false;
        this.emrs = false;
        this.telephone = false;
    };
    ResolvedComplaintsComponent.prototype.showFaculty = function () {
        this.cleanliness = false;
        this.le = false;
        this.cwn = false;
        this.ecc = false;
        this.other = false;
        this.faculty = true;
        this.stu = false;
        this.emrs = false;
        this.telephone = false;
    };
    ResolvedComplaintsComponent.prototype.showEmrs = function () {
        this.cleanliness = false;
        this.le = false;
        this.cwn = false;
        this.ecc = false;
        this.other = false;
        this.faculty = false;
        this.stu = false;
        this.emrs = true;
        this.telephone = false;
    };
    ResolvedComplaintsComponent.prototype.showTelephone = function () {
        this.cleanliness = false;
        this.le = false;
        this.cwn = false;
        this.ecc = false;
        this.other = false;
        this.faculty = false;
        this.stu = false;
        this.emrs = false;
        this.telephone = true;
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], ResolvedComplaintsComponent.prototype, "cleanlinessResolvedComplaintsData", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], ResolvedComplaintsComponent.prototype, "leResolvedComplaintsData", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], ResolvedComplaintsComponent.prototype, "cwnResolvedComplaintsData", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], ResolvedComplaintsComponent.prototype, "eccwResolvedComplaintsData", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], ResolvedComplaintsComponent.prototype, "otherResolvedComplaintsData", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], ResolvedComplaintsComponent.prototype, "facultyResolvedComplaintsData", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], ResolvedComplaintsComponent.prototype, "stuResolvedComplaintsData", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], ResolvedComplaintsComponent.prototype, "emrsResolvedComplaintsData", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], ResolvedComplaintsComponent.prototype, "telephoneResolvedComplaintsData", void 0);
    ResolvedComplaintsComponent = tslib_1.__decorate([
        Component({
            selector: 'app-resolved-complaints',
            templateUrl: './resolved-complaints.component.html',
            styleUrls: ['./resolved-complaints.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [ComplaintsService])
    ], ResolvedComplaintsComponent);
    return ResolvedComplaintsComponent;
}());
export { ResolvedComplaintsComponent };
//# sourceMappingURL=resolved-complaints.component.js.map