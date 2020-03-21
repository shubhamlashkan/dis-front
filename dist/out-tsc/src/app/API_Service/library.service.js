import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
var LibraryService = /** @class */ (function () {
    function LibraryService(http) {
        this.http = http;
        this.httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'my-auth-token',
                'Accept': 'application/json'
            })
        };
    }
    LibraryService.prototype.addBookDetails = function (Book) {
        return this.http.post('http://localhost:8083/library/addBook', Book, this.httpOptions);
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