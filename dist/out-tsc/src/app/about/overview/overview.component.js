import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { OverviewService } from '../overview.service';
var OverviewComponent = /** @class */ (function () {
    function OverviewComponent(overviewHandler) {
        this.overviewHandler = overviewHandler;
    }
    OverviewComponent.prototype.ngOnInit = function () {
        this.overviewHandler.getOverview().subscribe(function (data) {
            console.log(data);
        });
    };
    OverviewComponent = tslib_1.__decorate([
        Component({
            selector: 'app-overview',
            templateUrl: './overview.component.html',
            styleUrls: ['./overview.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [OverviewService])
    ], OverviewComponent);
    return OverviewComponent;
}());
export { OverviewComponent };
//# sourceMappingURL=overview.component.js.map