import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import * as $ from 'jquery';
import 'datatables.net';
var NotificationComponent = /** @class */ (function () {
    function NotificationComponent() {
    }
    NotificationComponent.prototype.ngOnInit = function () {
        this.initDatatable();
    };
    NotificationComponent.prototype.initDatatable = function () {
        var exampleId = $('#myNotificationTable');
        this.tableWidget = exampleId.DataTable({
            select: true
        });
    };
    NotificationComponent = tslib_1.__decorate([
        Component({
            selector: 'app-notification',
            templateUrl: './notification.component.html',
            styleUrls: ['./notification.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], NotificationComponent);
    return NotificationComponent;
}());
export { NotificationComponent };
//# sourceMappingURL=notification.component.js.map