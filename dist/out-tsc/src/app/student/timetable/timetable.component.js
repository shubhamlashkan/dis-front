import * as tslib_1 from "tslib";
import { SemesterSubjectsService } from './../../API_Service/SemesterSubjectsService';
import { Component, Input } from '@angular/core';
import { TimetableService } from '../../API_Service/timetable.service';
var TimetableComponent = /** @class */ (function () {
    function TimetableComponent(timetable, semSubjects) {
        this.timetable = timetable;
        this.semSubjects = semSubjects;
    }
    TimetableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tt = this.timetable.getTimetable()
            .subscribe(function (data) {
            _this.lec = data;
            // list of days available
            // tslint:disable-next-line:max-line-length
            _this.columnHeaders = [{ day: 'Days', colspanValue: 1 }, { day: 'Monday', colspanValue: 1 }, { day: 'Tuesday', colspanValue: 1 },
                { day: 'Wednesday', colspanValue: 1 }, { day: 'Thursday', colspanValue: 1 }, { day: 'Friday', colspanValue: 1 }];
            _this.timeslots = [];
            console.log(data);
            _this.schedule = [];
            var start_time = '24:00:00';
            var end_time = '00:00:00';
            var got_duration = true;
            var duration = 1000;
            var calc_duration = 0;
            var lunchstart;
            for (var a = 0; a < _this.lec.length; a++) {
                if (_this.lec[a].type === 'Lecture') {
                    // tslint:disable-next-line:max-line-length
                    calc_duration = _this.convertedTime(_this.lec[a].to) - _this.convertedTime(_this.lec[a].from);
                    if (calc_duration < duration) {
                        duration = calc_duration;
                    }
                }
                // tslint:disable-next-line:max-line-length
                if (_this.convertedTime(_this.lec[a].from) < _this.convertedTime(start_time)) {
                    start_time = _this.lec[a].from;
                }
                // tslint:disable-next-line:max-line-length
                if (_this.convertedTime(_this.lec[a].to) > _this.convertedTime(end_time)) {
                    end_time = _this.lec[a].to;
                }
                if (_this.lec[a].type === 'Lunch') {
                    lunchstart = _this.lec[a].from;
                }
            }
            var lecture_start = start_time;
            var lecture_end = start_time;
            console.log(start_time);
            console.log(end_time);
            console.log(lunchstart);
            while (lecture_start !== end_time) {
                if (lecture_start === lunchstart) {
                    lecture_end = _this.addTimes(lecture_start, 60);
                }
                else {
                    lecture_end = _this.addTimes(lecture_start, duration);
                }
                _this.timeslots.push([lecture_start, lecture_end]);
                lecture_start = lecture_end;
            }
            //console.log(this.timeslots);
            for (var i = 0; i < _this.timeslots.length; i++) {
                _this.dayschedule = [];
                for (var k = 0; k < _this.columnHeaders.length; k++) {
                    _this.lectures = [];
                    for (var j = 0; j < _this.lec.length; j++) {
                        if (k === 0) {
                            _this.lectures = [String(_this.timeslots[i][0]) + '-' + String(_this.timeslots[i][1])];
                        }
                        else if (_this.lec[j].from === _this.timeslots[i][0] && _this.lec[j].day === _this.columnHeaders[k].day) {
                            var flag = 0;
                            for (var l = 0; l < _this.lectures.length; l++) {
                                // tslint:disable-next-line:max-line-length
                                if (_this.lec[j].subjectCode === _this.lectures[l].subjectCode && _this.lec[j].location === _this.lectures[l].location) {
                                    flag = 1;
                                    _this.lectures[l].batch = [_this.lectures[l].batch, _this.lec[j].batch];
                                }
                            }
                            if (flag === 0) {
                                _this.lectures.push(_this.lec[j]);
                            }
                        }
                    }
                    _this.dayschedule.push(_this.lectures);
                    if (_this.lectures.length > _this.columnHeaders[k].colspanValue) {
                        _this.columnHeaders[k].colspanValue = _this.lectures.length;
                    }
                }
                _this.schedule.push(_this.dayschedule);
            }
            // console.log(this.schedule);
            for (var i = 0; i < _this.schedule.length; i++) {
                for (var j = 0; j < _this.schedule[i].length; j++) {
                    var check = 0;
                    for (var k = 0; k < _this.schedule[i][j].length; k++) {
                        if (_this.schedule[i][j][k] !== null && _this.schedule[i][j][k].type === 'Lab') {
                            check = 1;
                            break;
                        }
                    }
                    if (check === 1) {
                        for (var k = 0; k < _this.schedule[i][j].length; k++) {
                            if (_this.schedule[i][j][k] !== null && _this.schedule[i][j][k].type === 'Lab') {
                                _this.schedule[i + 1][j].push(null);
                            }
                            else {
                                _this.schedule[i + 1][j].push([]);
                            }
                        }
                    }
                }
            }
            // console.log(this.schedule);
        });
        this.mySubjects = this.semSubjects.getSyllabusPdf();
    };
    TimetableComponent.prototype.tconv = function (n1) {
        var t1 = 0;
        if (Number(n1.slice(0, 2)) > 7) {
            t1 = Number(n1.slice(0, 2)) * 100 + Number(n1.slice(3, 5));
        }
        else {
            t1 = Number(n1.slice(0, 2) + 12) * 100 + Number(n1.slice(3, 5));
        }
        return t1;
    };
    TimetableComponent.prototype.tsort = function (n1, n2) {
        if ((this.tconv(n1) - this.tconv(n2)) > 0) {
            return 1;
        }
        else if ((this.tconv(n1) - this.tconv(n2)) < 0) {
            return -1;
        }
        else {
            return 0;
        }
    };
    TimetableComponent.prototype.isObject = function (val) {
        return typeof val === 'object';
    };
    TimetableComponent.prototype.isString = function (val) {
        return typeof val === 'string';
    };
    // funstion to increase time by specified duration
    TimetableComponent.prototype.addTimes = function (time1, duration) {
        var hh = Number(time1.slice(0, 2));
        var mm = Number(time1.slice(3, 5));
        mm = mm + duration;
        if (mm >= 60) {
            mm = mm - 60;
            hh += 1;
            if (hh > 12) {
                hh -= 12;
            }
        }
        return ((hh < 10) ? '0' + String(hh) : String(hh)) + ':' + ((mm === 0) ? '00' : String(mm)) + ':00';
    };
    // function to convert time in minutes
    TimetableComponent.prototype.convertedTime = function (time) {
        var hh = Number(time.slice(0, 2));
        var mm = Number(time.slice(3, 5));
        if (hh < 7) {
            return ((hh + 12) * 60 + mm);
        }
        else {
            return (hh * 60 + mm);
        }
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], TimetableComponent.prototype, "tt", void 0);
    TimetableComponent = tslib_1.__decorate([
        Component({
            selector: 'app-timetable',
            templateUrl: './timetable.component.html',
            styleUrls: ['./timetable.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [TimetableService, SemesterSubjectsService])
    ], TimetableComponent);
    return TimetableComponent;
}());
export { TimetableComponent };
//# sourceMappingURL=timetable.component.js.map