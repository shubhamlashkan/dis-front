import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var SemesterSubjectsService = /** @class */ (function () {
    function SemesterSubjectsService(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:8082/student';
        this.subjects = this.http.get(this.baseUrl + "/subjectList");
    }
    SemesterSubjectsService.prototype.getSubjectList = function () {
        var _this = this;
        var sub = [];
        this.subjects.subscribe(function (data) {
            _this.subjectsArray = data;
            for (var i = 0; i < _this.subjectsArray.length; i++) {
                sub.push({ subCode: _this.subjectsArray[i].subjectCode, subName: _this.subjectsArray[i].subjectName });
            }
        });
        return sub;
    };
    SemesterSubjectsService.prototype.getSyllabusPdf = function () {
        var _this = this;
        var syllabus = [];
        this.subjects.subscribe(function (data) {
            _this.subjectsArray = data;
            for (var i = 0; i < _this.subjectsArray.length; i++) {
                // tslint:disable-next-line:max-line-length
                syllabus.push({ subCode: _this.subjectsArray[i].subjectCode, subName: _this.subjectsArray[i].subjectName, subSyllabus: _this.subjectsArray[i].syllabusPdf });
            }
        });
        return syllabus;
    };
    SemesterSubjectsService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], SemesterSubjectsService);
    return SemesterSubjectsService;
}());
export { SemesterSubjectsService };
//# sourceMappingURL=SemesterSubjectsService.js.map