import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { ComplaintsService } from 'src/app/API_Service/complaints.service';
var MyComplaintsComponent = /** @class */ (function () {
    function MyComplaintsComponent(complaints) {
        this.complaints = complaints;
        this.userType = localStorage.getItem('userType');
    }
    MyComplaintsComponent.prototype.ngOnInit = function () {
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
        this.cleanlinessMyComplaintsData = this.complaints.getMyCleanlinessComplaint()
            .subscribe(function (data) {
            _this.cleanlinessMyComplaintsInfo = data;
            console.log(_this.cleanlinessMyComplaintsInfo);
        });
        this.leMyComplaintsData = this.complaints.getMyLEComplaints()
            .subscribe(function (data) {
            _this.leMyComplaintsInfo = data;
            console.log(_this.leMyComplaintsInfo);
        });
        this.otherMyComplaintsData = this.complaints.getMyOtherComplaints()
            .subscribe(function (data) {
            _this.otherMyComplaintsInfo = data;
            console.log(_this.otherMyComplaintsInfo);
        });
        this.facultyMyComplaintsData = this.complaints.getMyFacultyComplaints()
            .subscribe(function (data) {
            _this.facultyMyComplaintsInfo = data;
            console.log(_this.facultyMyComplaintsInfo);
        });
        this.stuMyComplaintsData = this.complaints.getMyStudentComplaints()
            .subscribe(function (data) {
            _this.stuMyComplaintsInfo = data;
            console.log(_this.stuMyComplaintsInfo);
        });
    };
    MyComplaintsComponent.prototype.showAll = function () {
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
    MyComplaintsComponent.prototype.showOther = function () {
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
    MyComplaintsComponent.prototype.showStudent = function () {
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
    MyComplaintsComponent.prototype.showCleanliness = function () {
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
    MyComplaintsComponent.prototype.showLe = function () {
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
    MyComplaintsComponent.prototype.showCwn = function () {
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
    MyComplaintsComponent.prototype.showEcc = function () {
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
    MyComplaintsComponent.prototype.showFaculty = function () {
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
    MyComplaintsComponent.prototype.showEmrs = function () {
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
    MyComplaintsComponent.prototype.showTelephone = function () {
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
    ], MyComplaintsComponent.prototype, "cleanlinessMyComplaintsData", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], MyComplaintsComponent.prototype, "leMyComplaintsData", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], MyComplaintsComponent.prototype, "otherMyComplaintsData", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], MyComplaintsComponent.prototype, "facultyMyComplaintsData", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], MyComplaintsComponent.prototype, "stuMyComplaintsData", void 0);
    MyComplaintsComponent = tslib_1.__decorate([
        Component({
            selector: 'app-my-complaints',
            templateUrl: './my-complaints.component.html',
            styleUrls: ['./my-complaints.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [ComplaintsService])
    ], MyComplaintsComponent);
    return MyComplaintsComponent;
}());
export { MyComplaintsComponent };
//# sourceMappingURL=my-complaints.component.js.map