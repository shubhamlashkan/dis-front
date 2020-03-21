import * as tslib_1 from "tslib";
import { ToastrManager } from 'ng6-toastr-notifications';
import { PasswordValidation } from './password-validation';
import { SignUpInfo } from './../signup-info';
import { AuthService } from './../auth.service';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
var SignUpComponent = /** @class */ (function () {
    function SignUpComponent(authService, formBuider, toastr) {
        this.authService = authService;
        this.formBuider = formBuider;
        this.toastr = toastr;
        this.submitted = false;
        this.form = {};
        this.isSignedUp = false;
        this.isSignUpFailed = false;
        this.errorMessage = '';
    }
    SignUpComponent.prototype.ngOnInit = function () {
        this.registerForm = this.formBuider.group({
            username: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            date: ['', [Validators.required]],
            password: ['', [Validators.required, Validators.minLength(6), Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')]],
            phoneNo: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
            // tslint:disable-next-line:max-line-length
            confirm_password: ['', [Validators.required]]
        }, {
            validator: PasswordValidation.MatchPassword // to check if password matches
        });
    };
    Object.defineProperty(SignUpComponent.prototype, "formCtl", {
        get: function () {
            return this.registerForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    SignUpComponent.prototype.onSubmit = function () {
        var _this = this;
        this.signupInfo = new SignUpInfo(this.form.username, this.form.dob, this.form.email, this.form.password, this.form.mobileNo);
        this.authService.signUp(this.signupInfo).subscribe(function (data) {
            if (data.ok) {
                console.log(data);
                _this.isSignedUp = true;
                _this.isSignUpFailed = false;
                _this.toastr.successToastr(data.body['message'], 'Success!');
            }
        }, function (error) {
            if (error.status === 400) {
                _this.toastr.errorToastr(error.error['message'], 'Alert!');
                console.log(error);
                _this.isSignUpFailed = true;
            }
        });
        this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
    };
    SignUpComponent = tslib_1.__decorate([
        Component({
            selector: 'app-sign-up',
            templateUrl: './sign-up.component.html',
            styleUrls: ['./sign-up.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [AuthService, FormBuilder, ToastrManager])
    ], SignUpComponent);
    return SignUpComponent;
}());
export { SignUpComponent };
//# sourceMappingURL=sign-up.component.js.map