import * as tslib_1 from "tslib";
import { ToastrManager } from 'ng6-toastr-notifications';
import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { TokenStorageService } from '../token-storage.service';
import { AuthLoginInfo } from '../login-info';
import { Router } from '@angular/router';
var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, tokenStorage, router, toastr) {
        this.authService = authService;
        this.tokenStorage = tokenStorage;
        this.router = router;
        this.toastr = toastr;
        this.form = {};
        this.isLoggedIn = false;
        this.isLoginFailed = false;
        this.errorMessage = '';
        this.roles = [];
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (this.tokenStorage.getToken()) {
            this.isLoggedIn = true;
            this.roles = this.tokenStorage.getAuthorities();
            this.getValidated();
        }
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.form);
        this.loading = true;
        this.loginInfo = new AuthLoginInfo(this.form.username, this.form.password);
        this.authService.attemptAuth(this.loginInfo).subscribe(function (data) {
            _this.loading = false;
            console.log(data);
            _this.tokenStorage.saveUsername(data.username);
            _this.tokenStorage.saveToken(data.accessToken);
            _this.tokenStorage.saveAuthorities(data.authorities);
            _this.isLoginFailed = false;
            _this.isLoggedIn = true;
            _this.roles = _this.tokenStorage.getAuthorities();
            _this.getValidated();
        }, function (error) {
            if (error.status === 400) {
                // this.router.navigate(['/forgot-password']);
                _this.toastr.errorToastr(error.error['message'], 'Alert!');
                console.log(error);
                _this.isLoginFailed = true;
            }
        });
    };
    LoginComponent.prototype.getValidated = function () {
        var _this = this;
        this.authService.validateUser().subscribe(function (tempData) {
            _this.router.navigateByUrl('/' + tempData);
            console.log(tempData);
            localStorage.setItem('userType', tempData);
        });
    };
    LoginComponent = tslib_1.__decorate([
        Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [AuthService, TokenStorageService, Router, ToastrManager])
    ], LoginComponent);
    return LoginComponent;
}());
export { LoginComponent };
//# sourceMappingURL=login.component.js.map