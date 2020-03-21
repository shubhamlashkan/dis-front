import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { PiechartComponent } from 'src/app/miscellaneous/piechart/piechart.component';
var AttendanceComponent = /** @class */ (function () {
    function AttendanceComponent(chart) {
        this.chart = chart;
        this.bar = [];
    }
    AttendanceComponent.prototype.ngOnInit = function () {
        this.bar = this.chart.getPieChart('pieChart');
    };
    AttendanceComponent = tslib_1.__decorate([
        Component({
            selector: 'app-attendance',
            templateUrl: './attendance.component.html',
            styleUrls: ['./attendance.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [PiechartComponent])
    ], AttendanceComponent);
    return AttendanceComponent;
}());
export { AttendanceComponent };
//# sourceMappingURL=attendance.component.js.map