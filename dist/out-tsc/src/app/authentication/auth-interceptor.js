import * as tslib_1 from "tslib";
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenStorageService } from './token-storage.service';
var TOKEN_HEADER_KEY = 'Authorization';
var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(token) {
        this.token = token;
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        var authReq = req;
        var token = this.token.getToken();
        //console.log(token);
        if (token != null) {
            authReq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + token) });
            //console.log(authReq);
        }
        return next.handle(authReq);
    };
    AuthInterceptor = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [TokenStorageService])
    ], AuthInterceptor);
    return AuthInterceptor;
}());
export { AuthInterceptor };
export var httpInterceptorProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
];
//# sourceMappingURL=auth-interceptor.js.map