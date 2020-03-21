import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Urls } from '../urls/urls';
var SidenavService = /** @class */ (function () {
    function SidenavService(http) {
        this.http = http;
        this.urls = new Urls();
        this.baseUrl = this.urls.mainurl;
    }
    SidenavService.prototype.getSideNavData = function () {
        return this.http.get('http://localhost:8080/dis/user/getSideNavigation');
    };
    SidenavService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], SidenavService);
    return SidenavService;
}());
export { SidenavService };
//# sourceMappingURL=sidenav.service.js.map