import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var StudentService = /** @class */ (function () {
    function StudentService(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:8082/dis';
    }
    StudentService.prototype.login = function (Student) {
        return this.http.post("" + this.baseUrl + "/login", Student);
    };
    StudentService.prototype.signup = function (Student) {
        return this.http.post("" + this.baseUrl + "/signup", Student);
    };
    StudentService.prototype.forgotPassword = function (Student) {
        return this.http.post("" + this.baseUrl + "/forgot-password", Student);
    };
    StudentService.prototype.resetPassword = function (Student) {
        return this.http.post("" + this.baseUrl + "/reset-password", Student);
    };
    StudentService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], StudentService);
    return StudentService;
}());
export { StudentService };
//# sourceMappingURL=student.service.js.map