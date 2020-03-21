import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { ComplaintsService } from 'src/app/API_Service/complaints.service';
var TotalComplaintsComponent = /** @class */ (function () {
    function TotalComplaintsComponent(complaints) {
        this.complaints = complaints;
        this.userType = localStorage.getItem('userType');
    }
    TotalComplaintsComponent.prototype.ngOnInit = function () {
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
        this.cleanlinessTotalComplaintsData = this.complaints.getTotalCleanlinessComplaint()
            .subscribe(function (data) {
            _this.cleanlinessTotalComplaintsInfo = data;
            console.log(_this.cleanlinessTotalComplaintsInfo);
        });
        this.leTotalComplaintsData = this.complaints.getTotalLEComplaints()
            .subscribe(function (data) {
            _this.leTotalComplaintsInfo = data;
            console.log(_this.leTotalComplaintsInfo);
        });
        this.cwnTotalComplaintsData = this.complaints.getTotalCWNComplaints()
            .subscribe(function (data) {
            _this.cwnTotalComplaintsInfo = data;
            console.log(_this.cwnTotalComplaintsInfo);
        });
        this.eccwTotalComplaintsData = this.complaints.getTotalECCWComplaints()
            .subscribe(function (data) {
            _this.eccwTotalComplaintsInfo = data;
            console.log(_this.cleanlinessTotalComplaintsInfo);
        });
        this.otherTotalComplaintsData = this.complaints.getTotalOtherComplaints()
            .subscribe(function (data) {
            _this.otherTotalComplaintsInfo = data;
            console.log(_this.otherTotalComplaintsInfo);
        });
        this.facultyTotalComplaintsData = this.complaints.getTotalFacultyComplaints()
            .subscribe(function (data) {
            _this.facultyTotalComplaintsInfo = data;
            console.log(_this.facultyTotalComplaintsInfo);
        });
        this.stuTotalComplaintsData = this.complaints.getTotalStudentComplaints()
            .subscribe(function (data) {
            _this.stuTotalComplaintsInfo = data;
            console.log(_this.stuTotalComplaintsInfo);
        });
        this.emrsTotalComplaintsData = this.complaints.getTotalEMRSComplaints()
            .subscribe(function (data) {
            _this.emrsTotalComplaintsInfo = data;
            console.log(_this.emrsTotalComplaintsInfo);
        });
        this.telephoneTotalComplaintsData = this.complaints.getTotalTelephoneComplaints()
            .subscribe(function (data) {
            _this.telephoneTotalComplaintsInfo = data;
            console.log(_this.telephoneTotalComplaintsInfo);
        });
    };
    TotalComplaintsComponent.prototype.showAll = function () {
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
    TotalComplaintsComponent.prototype.showOther = function () {
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
    TotalComplaintsComponent.prototype.showStudent = function () {
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
    TotalComplaintsComponent.prototype.showCleanliness = function () {
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
    TotalComplaintsComponent.prototype.showLe = function () {
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
    TotalComplaintsComponent.prototype.showCwn = function () {
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
    TotalComplaintsComponent.prototype.showEcc = function () {
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
    TotalComplaintsComponent.prototype.showFaculty = function () {
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
    TotalComplaintsComponent.prototype.showEmrs = function () {
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
    TotalComplaintsComponent.prototype.showTelephone = function () {
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
    ], TotalComplaintsComponent.prototype, "cleanlinessTotalComplaintsData", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], TotalComplaintsComponent.prototype, "leTotalComplaintsData", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], TotalComplaintsComponent.prototype, "cwnTotalComplaintsData", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], TotalComplaintsComponent.prototype, "eccwTotalComplaintsData", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], TotalComplaintsComponent.prototype, "otherTotalComplaintsData", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], TotalComplaintsComponent.prototype, "facultyTotalComplaintsData", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], TotalComplaintsComponent.prototype, "stuTotalComplaintsData", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], TotalComplaintsComponent.prototype, "emrsTotalComplaintsData", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], TotalComplaintsComponent.prototype, "telephoneTotalComplaintsData", void 0);
    TotalComplaintsComponent = tslib_1.__decorate([
        Component({
            selector: 'app-total-complaints',
            templateUrl: './total-complaints.component.html',
            styleUrls: ['./total-complaints.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [ComplaintsService])
    ], TotalComplaintsComponent);
    return TotalComplaintsComponent;
}());
export { TotalComplaintsComponent };
//# sourceMappingURL=total-complaints.component.js.map