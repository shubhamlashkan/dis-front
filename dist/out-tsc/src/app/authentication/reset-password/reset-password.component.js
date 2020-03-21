import * as tslib_1 from "tslib";
import { PasswordValidation } from './../sign-up/password-validation';
import { Router } from '@angular/router';
import { AuthService } from './../auth.service';
import { Component } from '@angular/core';
import { ToastrManager } from 'ng6-toastr-notifications';
import { FormBuilder, Validators } from '@angular/forms';
var ResetPasswordComponent = /** @class */ (function () {
    function ResetPasswordComponent(authService, router, toastr, formBuider) {
        this.authService = authService;
        this.router = router;
        this.toastr = toastr;
        this.formBuider = formBuider;
    }
    ResetPasswordComponent.prototype.ngOnInit = function () {
        this.resetForm = this.formBuider.group({
            password: ['', [Validators.required, Validators.minLength(6), Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')]],
            confirm_password: ['', [Validators.required]]
        }, {
            validator: PasswordValidation.MatchPassword // to check if password matches
        });
    };
    Object.defineProperty(ResetPasswordComponent.prototype, "formCtl", {
        get: function () {
            return this.resetForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    ResetPasswordComponent.prototype.reset = function () {
        var _this = this;
        this.authService.resetPassword(this.newPasswd).subscribe(
        // httpResponse handling
        function (response) {
            if (response.ok) {
                _this.router.navigate(['/']);
                _this.toastr.successToastr(response.body['message'], 'Success!');
                console.log(response);
            }
        }, 
        // httpErrorResponse handling
        function (error) {
            if (error.status === 400) {
                _this.router.navigate(['/forgot-password']);
                _this.toastr.errorToastr(error.error['message'], 'Oops!');
                console.log(error);
            }
        });
        // stop here if form is invalid
        if (this.resetForm.invalid) {
            return;
        }
    };
    ResetPasswordComponent = tslib_1.__decorate([
        Component({
            selector: 'app-reset-password',
            templateUrl: './reset-password.component.html',
            styleUrls: ['./reset-password.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [AuthService, Router, ToastrManager, FormBuilder])
    ], ResetPasswordComponent);
    return ResetPasswordComponent;
}());
export { ResetPasswordComponent };
//# sourceMappingURL=reset-password.component.js.map