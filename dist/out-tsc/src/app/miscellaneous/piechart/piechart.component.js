import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Chart } from 'chart.js';
var PiechartComponent = /** @class */ (function () {
    function PiechartComponent() {
    }
    PiechartComponent.prototype.ngOnInit = function () {
    };
    PiechartComponent.prototype.getPieChart = function (idname) {
        return new Chart(idname, {
            type: 'pie',
            data: {
                labels: ['% Absent', '% Present'],
                datasets: [
                    { label: '% Present',
                        fill: true,
                        backgroundColor: [
                            '#e20404',
                            '#09ba09'
                        ],
                        data: [30, 70],
                        // Notice the borderColor
                        borderColor: ['#e20404',
                            '#09ba09'],
                        borderWidth: [1, 1]
                    }
                ]
            },
            options: {
                title: {
                    display: true,
                    position: 'top'
                },
                rotation: -0.7 * Math.PI,
                maintainAspectRatio: false,
            }
        });
    };
    PiechartComponent = tslib_1.__decorate([
        Component({
            selector: 'app-piechart',
            templateUrl: './piechart.component.html',
            styleUrls: ['./piechart.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], PiechartComponent);
    return PiechartComponent;
}());
export { PiechartComponent };
//# sourceMappingURL=piechart.component.js.map