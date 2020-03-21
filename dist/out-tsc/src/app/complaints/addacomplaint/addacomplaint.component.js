import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ComplaintsService } from 'src/app/API_Service/complaints.service';
import { Validators, FormBuilder } from '@angular/forms';
import { ToastrManager } from 'ng6-toastr-notifications';
var AddacomplaintComponent = /** @class */ (function () {
    function AddacomplaintComponent(fb, complaints, toastr) {
        this.fb = fb;
        this.complaints = complaints;
        this.toastr = toastr;
        this.userType = localStorage.getItem('userType');
        this.completionMessage = "Error has Occurred. Try after some time!!";
        this.errorMessage = "Error has Occurred. Try after some time!!";
        this.locations = [
            "Software Engineering Lab",
            "Data Science Lab",
            "IoT & Embedded Systems Lab",
            "Cluster Computing Lab",
            "Computer Networks & Distributed Computing Lab",
            "General Computing Lab",
            "Hardware & Peripherals Lab",
            "Project & Research Lab",
            "Audio Visual Learning Center",
            "217",
            "LT-201",
            "LT-301"
        ];
    }
    AddacomplaintComponent.prototype.ngOnInit = function () {
        this.showConfirmation = false;
        this.student = false;
        this.staff = false;
        this.faculty = false;
        this.hod = false;
        this.cleanlinessForm = this.fb.group({
            cleanlinessFields: this.fb.array([
                this.addCleanlinessFormGroup()
            ])
        });
        this.leForm = this.fb.group({
            leFields: this.fb.array([
                this.addLeFormGroup()
            ])
        });
        this.studentForm = this.fb.group({
            studentFields: this.fb.array([
                this.addStudentFormGroup()
            ])
        });
        this.otherForm = this.fb.group({
            otherFields: this.fb.array([
                this.addOtherFormGroup()
            ])
        });
        this.facultyForm = this.fb.group({
            facultyFields: this.fb.array([
                this.addFacultyFormGroup()
            ])
        });
        this.cwnForm = this.fb.group({
            cwnFields: this.fb.array([
                this.addCwnFormGroup()
            ])
        });
        this.eccwForm = this.fb.group({
            eccwFields: this.fb.array([
                this.addEccwFormGroup()
            ])
        });
        this.emrsForm = this.fb.group({
            emrsFields: this.fb.array([
                this.addEmrsFormGroup()
            ])
        });
        this.telephoneForm = this.fb.group({
            telephoneFields: this.fb.array([
                this.addTelephoneFormGroup()
            ])
        });
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
            this.faculty = true;
        }
    };
    AddacomplaintComponent.prototype.addMoreTelephoneComplaint = function () {
        this.telephoneForm.get('telephoneFields').push(this.addTelephoneFormGroup());
    };
    AddacomplaintComponent.prototype.addTelephoneFormGroup = function () {
        return this.fb.group({
            location: ['', Validators.required],
            details: ['', Validators.required]
        });
    };
    AddacomplaintComponent.prototype.addMoreEmrsComplaint = function () {
        this.emrsForm.get('emrsFields').push(this.addEmrsFormGroup());
    };
    AddacomplaintComponent.prototype.addEmrsFormGroup = function () {
        return this.fb.group({
            location: ['', Validators.required],
            details: ['', Validators.required]
        });
    };
    AddacomplaintComponent.prototype.addMoreEccwComplaint = function () {
        this.eccwForm.get('eccwFields').push(this.addEccwFormGroup());
    };
    AddacomplaintComponent.prototype.addEccwFormGroup = function () {
        return this.fb.group({
            location: ['', Validators.required],
            details: ['', Validators.required]
        });
    };
    AddacomplaintComponent.prototype.addMoreCwnComplaint = function () {
        this.cwnForm.get('cwnFields').push(this.addCwnFormGroup());
    };
    AddacomplaintComponent.prototype.addCwnFormGroup = function () {
        return this.fb.group({
            location: ['', Validators.required],
            details: ['', Validators.required]
        });
    };
    AddacomplaintComponent.prototype.addMoreFacultyComplaint = function () {
        this.facultyForm.get('facultyFields').push(this.addFacultyFormGroup());
    };
    AddacomplaintComponent.prototype.addFacultyFormGroup = function () {
        return this.fb.group({
            facultyName: ['', Validators.required],
            details: ['', Validators.required]
        });
    };
    AddacomplaintComponent.prototype.addMoreCleanlinessComplaint = function () {
        this.cleanlinessForm.get('cleanlinessFields').push(this.addCleanlinessFormGroup());
    };
    AddacomplaintComponent.prototype.addCleanlinessFormGroup = function () {
        return this.fb.group({
            location: ['', Validators.required],
            levelOfDust: ['', [Validators.required, Validators.min(1), Validators.max(5)]],
            details: ['', Validators.required]
        });
    };
    AddacomplaintComponent.prototype.addMoreLeComplaint = function () {
        this.leForm.get('leFields').push(this.addLeFormGroup());
    };
    AddacomplaintComponent.prototype.addLeFormGroup = function () {
        return this.fb.group({
            lab: ['', Validators.required],
            systemNo: ['', Validators.required],
            details: ['', Validators.required]
        });
    };
    AddacomplaintComponent.prototype.addMoreStudentComplaints = function () {
        this.studentForm.get('studentFields').push(this.addStudentFormGroup());
    };
    AddacomplaintComponent.prototype.addStudentFormGroup = function () {
        return this.fb.group({
            studentRollNo: ['', Validators.required],
            studentName: ['', Validators.required],
            course: ['', Validators.required],
            year: ['', Validators.required],
            details: ['', Validators.required]
        });
    };
    AddacomplaintComponent.prototype.addMoreOtherComplaints = function () {
        this.otherForm.get('otherFields').push(this.addOtherFormGroup());
    };
    AddacomplaintComponent.prototype.addOtherFormGroup = function () {
        return this.fb.group({
            details: ['', Validators.required]
        });
    };
    AddacomplaintComponent.prototype.onCleanlinessSubmit = function (details) {
        var _this = this;
        console.log(details.cleanlinessFields[0]);
        this.complaints.addACleanlinessComplaint(details.cleanlinessFields[0])
            .subscribe(function (data) {
            console.log(data);
            _this.toastr.successToastr(data.message, 'Success!');
        }, function (error) {
            _this.toastr.errorToastr(_this.completionMessage, 'Alert!');
        });
    };
    AddacomplaintComponent.prototype.onLeSubmit = function (details) {
        var _this = this;
        console.log(details.leFields[0]);
        this.complaints.addLeComplaint(details.leFields[0])
            .subscribe(function (data) {
            console.log(data);
            _this.toastr.successToastr(data.message, 'Success!');
        }, function (error) {
            _this.toastr.errorToastr(_this.completionMessage, 'Alert!');
        });
    };
    AddacomplaintComponent.prototype.onStudentSubmit = function (details) {
        var _this = this;
        console.log(details.studentFields[0]);
        this.complaints.addStudentComplaint(details.studentFields[0])
            .subscribe(function (data) {
            console.log(data);
            _this.toastr.successToastr(data.message, 'Success!');
        }, function (error) {
            _this.toastr.errorToastr(_this.completionMessage, 'Alert!');
        });
    };
    AddacomplaintComponent.prototype.onOtherSubmit = function (details) {
        var _this = this;
        console.log(details.otherFields[0]);
        this.complaints.addOtherComplaint(details.otherFields[0])
            .subscribe(function (data) {
            console.log(data);
            _this.toastr.successToastr(data.message, 'Success!');
        }, function (error) {
            _this.toastr.errorToastr(_this.completionMessage, 'Alert!');
        });
    };
    AddacomplaintComponent.prototype.onFacultySubmit = function (details) {
        var _this = this;
        console.log(details.facultyFields[0]);
        this.complaints.addFacultyComplaint(details.facultyFields[0])
            .subscribe(function (data) {
            console.log(data);
            _this.toastr.successToastr(data.message, 'Success!');
        }, function (error) {
            _this.toastr.errorToastr(_this.completionMessage, 'Alert!');
        });
    };
    AddacomplaintComponent.prototype.onCwnSubmit = function (details) {
        var _this = this;
        console.log(details.cwnFields);
        this.complaints.addCWNComplaint(details.cwnFields)
            .subscribe(function (data) {
            console.log(data);
            _this.toastr.successToastr(data.message, 'Success!');
        }, function (error) {
            _this.toastr.errorToastr(_this.completionMessage, 'Alert!');
        });
    };
    AddacomplaintComponent.prototype.onEccwSubmit = function (details) {
        var _this = this;
        console.log(details);
        this.complaints.addEccwComplaint(details.eccwFields)
            .subscribe(function (data) {
            console.log(data);
            _this.toastr.successToastr(data.message, 'Success!');
        }, function (error) {
            _this.toastr.errorToastr(_this.completionMessage, 'Alert!');
        });
    };
    AddacomplaintComponent.prototype.onEmrsSubmit = function (details) {
        var _this = this;
        console.log(details);
        this.complaints.addEmrsCompaint(details.emrsFields)
            .subscribe(function (data) {
            console.log(data);
            _this.toastr.successToastr(data.message, 'Success!');
        }, function (error) {
            _this.toastr.errorToastr(_this.completionMessage, 'Alert!');
        });
    };
    AddacomplaintComponent.prototype.onTelephoneSubmit = function (details) {
        var _this = this;
        console.log(details);
        this.complaints.addTelephoneComplaint(details.telephoneFields)
            .subscribe(function (data) {
            console.log(data);
            _this.toastr.successToastr(data.message, 'Success!');
        }, function (error) {
            _this.toastr.errorToastr(_this.completionMessage, 'Alert!');
        });
    };
    AddacomplaintComponent.prototype.resetForm = function () {
        this.showConfirmation = false;
    };
    AddacomplaintComponent = tslib_1.__decorate([
        Component({
            selector: 'app-addacomplaint',
            templateUrl: './addacomplaint.component.html',
            styleUrls: ['./addacomplaint.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [FormBuilder, ComplaintsService, ToastrManager])
    ], AddacomplaintComponent);
    return AddacomplaintComponent;
}());
export { AddacomplaintComponent };
//# sourceMappingURL=addacomplaint.component.js.map