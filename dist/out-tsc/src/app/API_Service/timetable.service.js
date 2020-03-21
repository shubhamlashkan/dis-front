import * as tslib_1 from "tslib";
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
var TimetableService = /** @class */ (function () {
    function TimetableService(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:8080/dis/academics';
    }
    TimetableService.prototype.getTimetable = function () {
        return this.http.get(this.baseUrl + "/timetable/student");
    };
    TimetableService.prototype.getFacultyTimeTable = function () {
        return this.http.get(this.baseUrl + "/timetable/faculty/14");
    };
    TimetableService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], TimetableService);
    return TimetableService;
}());
export { TimetableService };
//# sourceMappingURL=timetable.service.js.map