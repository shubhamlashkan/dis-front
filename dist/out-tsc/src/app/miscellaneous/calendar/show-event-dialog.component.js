import * as tslib_1 from "tslib";
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CalendarService } from 'src/app/API_Service/calendar.service';
var ShowEventDialogComponent = /** @class */ (function () {
    function ShowEventDialogComponent(dialogRef, data, calendarService) {
        this.dialogRef = dialogRef;
        this.calendarService = calendarService;
        this.title = data.title;
        this.desc = data.desc;
        this.id = data.id;
        this.start = data.start;
        this.end = data.end;
    }
    ShowEventDialogComponent.prototype.ngOnInit = function () {
    };
    ShowEventDialogComponent.prototype.onDelete = function () {
        if (confirm("Are you sure you want to delete this event?"))
            this.calendarService.deleteEvent(this.id);
        this.dialogRef.close;
    };
    ShowEventDialogComponent.prototype.onUpdate = function () {
        alert("do something");
    };
    ShowEventDialogComponent = tslib_1.__decorate([
        Component({
            selector: 'app-show-event-dialog',
            templateUrl: './show-event-dialog.component.html',
            styleUrls: ['./show-event-dialog.component.scss']
        }),
        tslib_1.__param(1, Inject(MAT_DIALOG_DATA)),
        tslib_1.__metadata("design:paramtypes", [MatDialogRef, Object, CalendarService])
    ], ShowEventDialogComponent);
    return ShowEventDialogComponent;
}());
export { ShowEventDialogComponent };
//# sourceMappingURL=show-event-dialog.component.js.map