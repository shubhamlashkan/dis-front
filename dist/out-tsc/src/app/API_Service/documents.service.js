import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var DocumentsService = /** @class */ (function () {
    function DocumentsService(http) {
        this.http = http;
        this.baseUrl = "http://localhost:8083";
    }
    DocumentsService.prototype.getSections = function () {
        return this.http.get(this.baseUrl + "/getSectionName");
    };
    DocumentsService.prototype.getFolderInSection = function (id) {
        return this.http.get("http://localhost:8083/getFoldersInSection?sectionId=" + id);
    };
    DocumentsService.prototype.getSubFolderInFolder = function (id, folderId) {
        return this.http.get("http://localhost:8083/getFoldersInSection?sectionId=" + id + "&folderId=" + folderId);
    };
    DocumentsService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], DocumentsService);
    return DocumentsService;
}());
export { DocumentsService };
//# sourceMappingURL=documents.service.js.map