import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
var TOKEN_KEY = 'AuthToken';
var USERNAME_KEY = 'AuthUsername';
var AUTHORITIES_KEY = 'AuthAuthorities';
var USERTYPE_KEY = 'AuthUsertype';
var TokenStorageService = /** @class */ (function () {
    function TokenStorageService() {
        this.roles = [];
    }
    TokenStorageService.prototype.signOut = function () {
        window.sessionStorage.clear();
    };
    TokenStorageService.prototype.saveToken = function (token) {
        window.sessionStorage.removeItem(TOKEN_KEY);
        window.sessionStorage.setItem(TOKEN_KEY, token);
    };
    TokenStorageService.prototype.getToken = function () {
        return sessionStorage.getItem(TOKEN_KEY);
    };
    TokenStorageService.prototype.saveUsertype = function (usertype) {
        window.sessionStorage.removeItem(USERTYPE_KEY);
        window.sessionStorage.setItem(USERTYPE_KEY, usertype);
    };
    TokenStorageService.prototype.getUsertype = function () {
        return sessionStorage.getItem(USERTYPE_KEY);
    };
    TokenStorageService.prototype.saveUsername = function (username) {
        window.sessionStorage.removeItem(USERNAME_KEY);
        window.sessionStorage.setItem(USERNAME_KEY, username);
    };
    TokenStorageService.prototype.getUsername = function () {
        return sessionStorage.getItem(USERNAME_KEY);
    };
    TokenStorageService.prototype.saveAuthorities = function (authorities) {
        window.sessionStorage.removeItem(AUTHORITIES_KEY);
        window.sessionStorage.setItem(AUTHORITIES_KEY, JSON.stringify(authorities));
    };
    TokenStorageService.prototype.getAuthorities = function () {
        var _this = this;
        this.roles = [];
        if (sessionStorage.getItem(TOKEN_KEY)) {
            JSON.parse(sessionStorage.getItem(AUTHORITIES_KEY)).forEach(function (authority) {
                _this.roles.push(authority.authority);
            });
        }
        return this.roles;
    };
    TokenStorageService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], TokenStorageService);
    return TokenStorageService;
}());
export { TokenStorageService };
//# sourceMappingURL=token-storage.service.js.map