import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var InfraService = /** @class */ (function () {
    function InfraService(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:8084/';
    }
    InfraService.prototype.getLabs = function () {
        return this.http.get(this.baseUrl + "listInfrastructure?type=Laboratory");
    };
    InfraService.prototype.getOtherInfra = function () {
        return this.http.get(this.baseUrl + "listInfrastructure?type=other");
    };
    InfraService.prototype.getFacultyRooms = function () {
        return this.http.get(this.baseUrl + "getRooms");
    };
    InfraService.prototype.setInfraName = function (lab) {
        console.log(lab);
        this.lab = lab;
    };
    InfraService.prototype.getInfraName = function () {
        return this.lab;
    };
    InfraService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], InfraService);
    return InfraService;
}());
export { InfraService };
//# sourceMappingURL=infra.service.js.map