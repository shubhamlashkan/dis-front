import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
var MeetingsComponent = /** @class */ (function () {
    function MeetingsComponent() {
        this.List1 = [
            { id: 11, name: 'Mr. Nice' },
            { id: 12, name: 'Narco' },
            { id: 13, name: 'Bombasto' },
            { id: 14, name: 'Celeritas' },
            { id: 15, name: 'Magneta' },
            { id: 16, name: 'RubberMan' },
            { id: 17, name: 'Dynama' },
            { id: 18, name: 'Dr IQ' },
            { id: 19, name: 'Magma' },
            { id: 20, name: 'Tornado' }
        ];
        this.List2 = [];
    }
    MeetingsComponent.prototype.onItemAdded = function (h, index) {
        this.List2.push(h);
        this.List1.splice(index, 1);
    };
    MeetingsComponent.prototype.onItemDeleted = function (h, index2) {
        this.List1.push(h);
        this.List2.splice(index2, 1);
    };
    MeetingsComponent.prototype.onAllItemAdded = function () {
        this.List2.push.apply(this.List2, this.List1);
        this.List1 = [];
    };
    MeetingsComponent.prototype.onAllItemDeleted = function () {
        this.List1.push.apply(this.List1, this.List2);
        this.List2 = [];
    };
    MeetingsComponent.prototype.ngOnInit = function () {
    };
    MeetingsComponent = tslib_1.__decorate([
        Component({
            selector: 'app-meetings',
            templateUrl: './meetings.component.html',
            styleUrls: ['./meetings.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], MeetingsComponent);
    return MeetingsComponent;
}());
export { MeetingsComponent };
//# sourceMappingURL=meetings.component.js.map