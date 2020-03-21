import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ActivateAccountComponent } from './activate-account/activate-account.component';
import { MatProgressSpinnerModule } from '@angular/material';
var AuthenticationModule = /** @class */ (function () {
    function AuthenticationModule() {
    }
    AuthenticationModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                BrowserModule,
                FormsModule,
                HttpClientModule,
                FormsModule,
                ReactiveFormsModule,
                MatProgressSpinnerModule
            ],
            declarations: [
                LoginComponent,
                SignUpComponent,
                ForgotPasswordComponent,
                ResetPasswordComponent,
                ActivateAccountComponent
            ]
        })
    ], AuthenticationModule);
    return AuthenticationModule;
}());
export { AuthenticationModule };
//# sourceMappingURL=authentication.module.js.map