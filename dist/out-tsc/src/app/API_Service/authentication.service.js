import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:8082/dis';
    }
    AuthenticationService.prototype.login = function (Authentication) {
        return this.http.post("" + this.baseUrl + "/login", Authentication, { responseType: 'text' });
    };
    AuthenticationService.prototype.signup = function (Authentication) {
        return this.http.post("" + this.baseUrl + "/signup", Authentication, { responseType: 'text' });
    };
    AuthenticationService.prototype.forgotPassword = function (Authentication) {
        return this.http.post("" + this.baseUrl + "/forgot-password", Authentication);
    };
    AuthenticationService.prototype.resetPassword = function (Authentication) {
        return this.http.post("" + this.baseUrl + "/reset-password", Authentication);
    };
    AuthenticationService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], AuthenticationService);
    return AuthenticationService;
}());
export { AuthenticationService };
//# sourceMappingURL=authentication.service.js.map