import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var LibraryService = /** @class */ (function () {
    function LibraryService(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:8080/dis/administration';
    }
    LibraryService.prototype.getBooks = function () {
        return this.http.get(this.baseUrl + "/getBookList");
    };
    LibraryService.prototype.getBooksCount = function () {
        return this.http.get(this.baseUrl + "/getBookCount");
    };
    LibraryService.prototype.editBookDetails = function (info) {
        return this.http.put(this.baseUrl + "/editBook", info);
    };
    LibraryService.prototype.addBookDetails = function (info) {
        return this.http.post(this.baseUrl + "/addBook", info);
    };
    LibraryService.prototype.getThesis = function () {
        return this.http.get('http://localhost:8080/dis/user/showResearchPaper');
    };
    LibraryService.prototype.getThesisCount = function () {
        return this.http.get(this.baseUrl + "/getThesisBECount");
    };
    LibraryService.prototype.editThesisDetails = function (info) {
        return this.http.put(this.baseUrl + "/addThesisBE", info);
    };
    LibraryService.prototype.addThesisDetails = function (info) {
        return this.http.post(this.baseUrl + "/editThesisBE", info);
    };
    LibraryService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], LibraryService);
    return LibraryService;
}());
export { LibraryService };
//# sourceMappingURL=library.service.js.map