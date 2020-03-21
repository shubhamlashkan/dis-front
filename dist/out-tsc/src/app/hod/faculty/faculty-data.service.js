import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var FacultyDataService = /** @class */ (function () {
    function FacultyDataService(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:8081/';
    }
    FacultyDataService.prototype.getFacultyData = function () {
        return this.http.get(this.baseUrl + "facultyData");
    };
    FacultyDataService.prototype.getStaffData = function () {
        return this.http.get(this.baseUrl + "staffData");
    };
    FacultyDataService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], FacultyDataService);
    return FacultyDataService;
}());
export { FacultyDataService };
//# sourceMappingURL=faculty-data.service.js.map