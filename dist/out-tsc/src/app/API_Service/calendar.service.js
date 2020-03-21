import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
var httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
var CalendarService = /** @class */ (function () {
    function CalendarService(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:8080/dis/user/calendar';
    }
    CalendarService.prototype.getMyEvents = function (pid) {
        return this.http.get(this.baseUrl + "/getMyEvents?id=" + pid);
    };
    CalendarService.prototype.addEvent = function (event) {
        return this.http.post(this.baseUrl + "/addEvent", event, httpOptions);
    };
    CalendarService.prototype.deleteEvent = function (eid) {
        this.http.get(this.baseUrl + "/deleteEvent?eventId=" + eid);
    };
    CalendarService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], CalendarService);
    return CalendarService;
}());
export { CalendarService };
//# sourceMappingURL=calendar.service.js.map