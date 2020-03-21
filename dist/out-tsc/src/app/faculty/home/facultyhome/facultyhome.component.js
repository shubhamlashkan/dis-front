import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { TimetableService } from 'src/app/API_Service/timetable.service';
var FacultyhomeComponent = /** @class */ (function () {
    function FacultyhomeComponent(timetable) {
        this.timetable = timetable;
    }
    FacultyhomeComponent.prototype.ngOnInit = function () {
        this.timetable.getFacultyTimeTable()
            .subscribe(function (data) {
            console.log(data);
        });
    };
    FacultyhomeComponent = tslib_1.__decorate([
        Component({
            selector: 'app-facultyhome',
            templateUrl: './facultyhome.component.html',
            styleUrls: ['./facultyhome.component.scss'],
            providers: [TimetableService]
        }),
        tslib_1.__metadata("design:paramtypes", [TimetableService])
    ], FacultyhomeComponent);
    return FacultyhomeComponent;
}());
export { FacultyhomeComponent };
//# sourceMappingURL=facultyhome.component.js.map