import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Student } from '../../Model/student.model';
import { StudentService } from '../../API_Service/student.service';
import { AuthService } from '../auth.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';
var ActivateAccountComponent = /** @class */ (function () {
    // tslint:disable-next-line:max-line-length
    function ActivateAccountComponent(router, toastr, studentService, authService, formBuider) {
        this.router = router;
        this.toastr = toastr;
        this.studentService = studentService;
        this.authService = authService;
        this.formBuider = formBuider;
        this.student = new Student();
        this.submitted = false;
    }
    ActivateAccountComponent.prototype.ngOnInit = function () {
        this.activationForm = this.formBuider.group({
            email: ['', [Validators.required, Validators.email]],
        });
    };
    Object.defineProperty(ActivateAccountComponent.prototype, "formCtl", {
        get: function () {
            return this.activationForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    ActivateAccountComponent.prototype.activateAcc = function (email) {
        var _this = this;
        this.authService.activateAccount(email).subscribe(function (response) {
            if (response.ok) {
                //this.router.navigate(['/']);
                _this.toastr.successToastr(response.body['message'], 'Success!');
                console.log(response);
            }
        }, 
        // httpErrorResponse handling
        function (error) {
            if (error.status === 400) {
                //this.router.navigate(['/forgot-password']);
                _this.toastr.errorToastr(error.error['message'], 'Oops!');
                console.log(error);
            }
        });
    };
    ActivateAccountComponent.prototype.newStudent = function () {
        this.submitted = false;
        this.student = new Student();
    };
    ActivateAccountComponent.prototype.onSubmit = function () {
        this.submitted = true;
        if (this.activationForm.invalid) {
            return;
        }
        console.log(this.student.email);
        this.activateAcc(this.student.email);
    };
    ActivateAccountComponent = tslib_1.__decorate([
        Component({
            selector: 'app-activate-account',
            templateUrl: './activate-account.component.html',
            styleUrls: ['./activate-account.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [Router, ToastrManager, StudentService, AuthService, FormBuilder])
    ], ActivateAccountComponent);
    return ActivateAccountComponent;
}());
export { ActivateAccountComponent };
//# sourceMappingURL=activate-account.component.js.map