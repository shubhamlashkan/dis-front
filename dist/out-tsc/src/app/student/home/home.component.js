import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { BarchartComponent } from './../../miscellaneous/barchart/barchart.component';
var HomeComponent = /** @class */ (function () {
    function HomeComponent(chart) {
        this.chart = chart;
        this.bar = [];
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.bar = this.chart.getBarChart('barChart');
    };
    HomeComponent = tslib_1.__decorate([
        Component({
            selector: 'app-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [BarchartComponent])
    ], HomeComponent);
    return HomeComponent;
}());
export { HomeComponent };
//# sourceMappingURL=home.component.js.map