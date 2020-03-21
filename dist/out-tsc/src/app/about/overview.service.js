import * as tslib_1 from "tslib";
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
var OverviewService = /** @class */ (function () {
    function OverviewService(http) {
        this.http = http;
        this.url = 'http://localhost:8080/dis/administration/getOverviewDetails';
    }
    OverviewService.prototype.getOverview = function () {
        return this.http.get(this.url);
    };
    OverviewService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], OverviewService);
    return OverviewService;
}());
export { OverviewService };
//# sourceMappingURL=overview.service.js.map