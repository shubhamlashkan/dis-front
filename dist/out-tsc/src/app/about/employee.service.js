import * as tslib_1 from "tslib";
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
var EmployeeService = /** @class */ (function () {
    function EmployeeService(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:8080/dis/user';
    }
    EmployeeService.prototype.getFacultyDetails = function () {
        return this.http.get(this.baseUrl + "/facultyBrief");
    };
    EmployeeService.prototype.getStaffDetails = function () {
        return this.http.get(this.baseUrl + "/staffBrief");
    };
    EmployeeService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], EmployeeService);
    return EmployeeService;
}());
export { EmployeeService };
//# sourceMappingURL=employee.service.js.map