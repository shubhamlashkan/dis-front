import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Student } from '../../Model/student.model';
import { StudentService } from '../../API_Service/student.service';
import { AuthService } from '../auth.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';
var ForgotPasswordComponent = /** @class */ (function () {
    // tslint:disable-next-line:max-line-length
    function ForgotPasswordComponent(router, toastr, studentService, authService, formBuider) {
        this.router = router;
        this.toastr = toastr;
        this.studentService = studentService;
        this.authService = authService;
        this.formBuider = formBuider;
        this.student = new Student();
        this.submitted = false;
    }
    ForgotPasswordComponent.prototype.ngOnInit = function () {
        this.forgetForm = this.formBuider.group({
            email: ['', [Validators.required, Validators.email]],
        });
    };
    Object.defineProperty(ForgotPasswordComponent.prototype, "formCtl", {
        get: function () {
            return this.forgetForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    ForgotPasswordComponent.prototype.forgotPass = function (email) {
        var _this = this;
        this.authService.forgetPassword(email).subscribe(function (response) {
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
    ForgotPasswordComponent.prototype.newStudent = function () {
        this.submitted = false;
        this.student = new Student();
    };
    ForgotPasswordComponent.prototype.onSubmit = function () {
        this.submitted = true;
        if (this.forgetForm.invalid) {
            return;
        }
        console.log(this.student.email);
        this.forgotPass(this.student.email);
    };
    ForgotPasswordComponent = tslib_1.__decorate([
        Component({
            selector: 'app-forgot-password',
            templateUrl: './forgot-password.component.html',
            styleUrls: ['./forgot-password.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [Router, ToastrManager, StudentService, AuthService, FormBuilder])
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());
export { ForgotPasswordComponent };
//# sourceMappingURL=forgot-password.component.js.map