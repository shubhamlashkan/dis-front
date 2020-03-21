import * as tslib_1 from "tslib";
import { Component, Input, ViewChild } from '@angular/core';
import { ComplaintsService } from 'src/app/API_Service/complaints.service';
import { NgForm } from '@angular/forms';
import { ToastrManager } from 'ng6-toastr-notifications';
var RemainingComplaintsComponent = /** @class */ (function () {
    function RemainingComplaintsComponent(complaints, toastr) {
        this.complaints = complaints;
        this.toastr = toastr;
        this.userType = localStorage.getItem('userType');
        this.count = 0;
        this.completionMessage = "Error has Occurred. Try after some time!!";
    }
    ;
    RemainingComplaintsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.showConfirmation = false;
        this.student = false;
        this.staff = false;
        this.isFaculty = false;
        this.hod = false;
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
        this.cleanlinessRemainingComplaintsData = this.complaints.getRemainingCleanlinessComplaint()
            .subscribe(function (data) {
            _this.cleanlinessRemainingComplaintsInfo = data;
            console.log(_this.cleanlinessRemainingComplaintsInfo);
        });
        this.leRemainingComplaintsData = this.complaints.getRemainingLEComplaints()
            .subscribe(function (data) {
            _this.leRemainingComplaintsInfo = data;
            console.log(_this.leRemainingComplaintsInfo);
        });
        this.cwnRemainingComplaintsData = this.complaints.getRemainingCWNComplaints()
            .subscribe(function (data) {
            _this.cwnRemainingComplaintsInfo = data;
            console.log(_this.cwnRemainingComplaintsInfo);
        });
        this.eccwRemainingComplaintsData = this.complaints.getRemainingECCWComplaints()
            .subscribe(function (data) {
            _this.eccwRemainingComplaintsInfo = data;
            console.log(_this.eccwRemainingComplaintsInfo);
        });
        this.otherRemainingComplaintsData = this.complaints.getRemainingOtherComplaints()
            .subscribe(function (data) {
            _this.otherRemainingComplaintsInfo = data;
            console.log(_this.otherRemainingComplaintsInfo);
        });
        this.facultyRemainingComplaintsData = this.complaints.getRemainingFacultyComplaints()
            .subscribe(function (data) {
            _this.facultyRemainingComplaintsInfo = data;
            console.log(_this.facultyRemainingComplaintsInfo);
        });
        this.stuRemainingComplaintsData = this.complaints.getRemainingStudentComplaints()
            .subscribe(function (data) {
            _this.stuRemainingComplaintsInfo = data;
            console.log(_this.stuRemainingComplaintsInfo);
        });
        this.emrsRemainingComplaintsData = this.complaints.getRemainingEMRSComplaints()
            .subscribe(function (data) {
            _this.emrsRemainingComplaintsInfo = data;
            console.log(_this.emrsRemainingComplaintsInfo);
        });
        this.telephoneRemainingComplaintsData = this.complaints.getRemainingTelephoneComplaints()
            .subscribe(function (data) {
            _this.telephoneRemainingComplaintsInfo = data;
            console.log(_this.telephoneRemainingComplaintsInfo);
        });
    };
    RemainingComplaintsComponent.prototype.showAll = function () {
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
    RemainingComplaintsComponent.prototype.showOther = function () {
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
    RemainingComplaintsComponent.prototype.showStudent = function () {
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
    RemainingComplaintsComponent.prototype.showCleanliness = function () {
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
    RemainingComplaintsComponent.prototype.showLe = function () {
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
    RemainingComplaintsComponent.prototype.showCwn = function () {
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
    RemainingComplaintsComponent.prototype.showEcc = function () {
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
    RemainingComplaintsComponent.prototype.showFaculty = function () {
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
    RemainingComplaintsComponent.prototype.showEmrs = function () {
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
    RemainingComplaintsComponent.prototype.showTelephone = function () {
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
    // public popoverTitle: string = 'Is complaint is resolved?';
    // public popoverMessage: string = 'Do you want to continue?';
    // public confirmClicked: boolean = false;
    // public cancelClicked: boolean = false;
    RemainingComplaintsComponent.prototype.editComplaint = function (i, type, remarks, status, Id) {
        console.log(i);
        console.log(type);
        this.selectedIndex = i;
        this.currentId = Id;
        this.seletedType = type;
        this.showConfirmation = false;
        this.editComplaintForm.setValue({
            'status': status,
            'remarks': remarks
        });
    };
    RemainingComplaintsComponent.prototype.updateComplaint = function (f) {
        var _this = this;
        var data = f.value;
        console.log(this.currentId);
        if (this.currentId) {
            data["id"] = this.currentId;
            data["type"] = this.seletedType;
        }
        console.log(data);
        this.complaints.editComplaints(data)
            .subscribe(function (data) {
            console.log(data);
            _this.toastr.successToastr(data.message, 'Success!');
        }, function (error) {
            _this.toastr.errorToastr(_this.completionMessage, 'Alert!');
        });
    };
    RemainingComplaintsComponent.prototype.editOtherComplaint = function (i, type, remarks, status, Id, assignedTo) {
        console.log(i);
        console.log(type);
        this.selectedIndex = i;
        this.currentId = Id;
        this.seletedType = type;
        this.showConfirmation = false;
        this.editOtherComplaintForm.setValue({
            'status': status,
            'remarks': remarks,
            'assignedTo': assignedTo
        });
    };
    RemainingComplaintsComponent.prototype.updateOtherComplaint = function (f) {
        var _this = this;
        var data = f.value;
        console.log(this.currentId);
        if (this.currentId != undefined && this.seletedType != undefined) {
            data["id"] = this.currentId;
            data["type"] = this.seletedType;
        }
        console.log(data);
        this.complaints.editComplaints(data)
            .subscribe(function (data) {
            console.log(data);
            _this.toastr.successToastr(data.message, 'Success!');
        }, function (error) {
            _this.toastr.errorToastr(_this.completionMessage, 'Alert!');
        });
    };
    RemainingComplaintsComponent.prototype.resetConfirmationMessage = function () {
        this.showConfirmation = true;
    };
    tslib_1.__decorate([
        ViewChild('editComplaintForm'),
        tslib_1.__metadata("design:type", NgForm)
    ], RemainingComplaintsComponent.prototype, "editComplaintForm", void 0);
    tslib_1.__decorate([
        ViewChild('editOtherComplaintForm'),
        tslib_1.__metadata("design:type", NgForm)
    ], RemainingComplaintsComponent.prototype, "editOtherComplaintForm", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], RemainingComplaintsComponent.prototype, "cleanlinessRemainingComplaintsData", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], RemainingComplaintsComponent.prototype, "leRemainingComplaintsData", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], RemainingComplaintsComponent.prototype, "cwnRemainingComplaintsData", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], RemainingComplaintsComponent.prototype, "eccwRemainingComplaintsData", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], RemainingComplaintsComponent.prototype, "otherRemainingComplaintsData", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], RemainingComplaintsComponent.prototype, "facultyRemainingComplaintsData", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], RemainingComplaintsComponent.prototype, "stuRemainingComplaintsData", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], RemainingComplaintsComponent.prototype, "emrsRemainingComplaintsData", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], RemainingComplaintsComponent.prototype, "telephoneRemainingComplaintsData", void 0);
    RemainingComplaintsComponent = tslib_1.__decorate([
        Component({
            selector: 'app-remaining-complaints',
            templateUrl: './remaining-complaints.component.html',
            styleUrls: ['./remaining-complaints.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ComplaintsService, ToastrManager])
    ], RemainingComplaintsComponent);
    return RemainingComplaintsComponent;
}());
export { RemainingComplaintsComponent };
//# sourceMappingURL=remaining-complaints.component.js.map