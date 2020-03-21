import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var StudentSignUpService = /** @class */ (function () {
    function StudentSignUpService(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:8090/dis';
    }
    StudentSignUpService.prototype.createStudentSignUp = function (StudentSignUp) {
        return this.http.post("" + this.baseUrl + "/signup", StudentSignUp);
    };
    StudentSignUpService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], StudentSignUpService);
    return StudentSignUpService;
}());
export { StudentSignUpService };
//# sourceMappingURL=student-sign-up.service.js.map