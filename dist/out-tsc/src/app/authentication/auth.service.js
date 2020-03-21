import * as tslib_1 from "tslib";
import { AuthInterceptor } from './auth-interceptor';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
var httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};
var AuthService = /** @class */ (function () {
    function AuthService(http, interceptor, route) {
        this.http = http;
        this.interceptor = interceptor;
        this.route = route;
        this.loginUrl = 'http://localhost:8080/dis/signin';
        this.signupUrl = 'http://localhost:8080/dis/signup';
        this.validateUrl = 'http://localhost:8080/dis/getUserType';
        this.forgetPasswordUrl = 'http://localhost:8080/dis/forgotPassword';
        this.activateAccountUrl = 'http://localhost:8080/dis/preActivation';
        this.resetUrl = 'http://localhost:8080/dis/processResetPassword';
    }
    AuthService.prototype.attemptAuth = function (credentials) {
        return this.http.post(this.loginUrl, credentials, httpOptions);
    };
    AuthService.prototype.signUp = function (info) {
        return this.http.post(this.signupUrl, info, { observe: 'response' });
    };
    AuthService.prototype.validateUser = function () {
        return this.http.get(this.validateUrl, { responseType: 'text' });
    };
    AuthService.prototype.forgetPassword = function (email) {
        // const indata = {'email': email};
        return this.http.post(this.forgetPasswordUrl + '?email=' + email, null, { observe: 'response' });
    };
    AuthService.prototype.activateAccount = function (email) {
        // const indata = {'email': email};
        return this.http.post(this.activateAccountUrl + '?email=' + email, null, { observe: 'response' });
    };
    // returns full http response
    AuthService.prototype.resetPassword = function (newPassword) {
        var reset_token = this.route.snapshot.queryParams['resetToken'];
        console.log(reset_token);
        var info = { resetToken: reset_token, password: newPassword };
        console.log(info);
        // setting observe value as response to send full http response
        return this.http.post(this.resetUrl, info, { observe: 'response' });
    };
    AuthService = tslib_1.__decorate([
        Injectable({ providedIn: 'root' }),
        tslib_1.__metadata("design:paramtypes", [HttpClient, AuthInterceptor, ActivatedRoute])
    ], AuthService);
    return AuthService;
}());
export { AuthService };
//# sourceMappingURL=auth.service.js.map