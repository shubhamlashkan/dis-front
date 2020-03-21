import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { BarchartComponent } from './../../miscellaneous/barchart/barchart.component';
var AttendanceComponent = /** @class */ (function () {
    function AttendanceComponent(chart) {
        this.chart = chart;
        this.bar = [];
    }
    AttendanceComponent.prototype.ngOnInit = function () {
        this.bar = this.chart.getBarChart('barChart');
    };
    AttendanceComponent.prototype.openNav = function () {
        document.getElementById('applyforleave').style.width = '250px';
        document.getElementById('main').className = 'col-lg-7';
        document.getElementById('leaveinfo').className = 'col-lg-7';
        document.getElementById('applyforleave').className = 'col-lg-5 sidenavbar';
    };
    /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
    AttendanceComponent.prototype.closeNav = function () {
        document.getElementById('applyforleave').style.width = '0';
        document.getElementById('applyforleave').className = 'col-lg-0 sidenavbar';
        document.getElementById('main').className = 'col-lg-12';
        document.getElementById('leaveinfo').className = 'col-lg-12';
    };
    AttendanceComponent.prototype.showLeaves = function () {
        document.getElementById('main').style.display = 'none';
        document.getElementById('leaveinfo').style.display = 'block';
        this.closeNav();
    };
    AttendanceComponent.prototype.showChart = function () {
        document.getElementById('main').style.display = 'block';
        document.getElementById('leaveinfo').style.display = 'none';
        this.closeNav();
    };
    AttendanceComponent = tslib_1.__decorate([
        Component({
            selector: 'app-attendance',
            templateUrl: './attendance.component.html',
            styleUrls: ['./attendance.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [BarchartComponent])
    ], AttendanceComponent);
    return AttendanceComponent;
}());
export { AttendanceComponent };
//# sourceMappingURL=attendance.component.js.map