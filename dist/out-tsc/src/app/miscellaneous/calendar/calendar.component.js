import * as tslib_1 from "tslib";
import { AddEventDialog } from './add-event-dialog';
import { TokenStorageService } from './../../authentication/token-storage.service';
import { Component, ViewChild } from '@angular/core';
import { FullCalendarComponent } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction'; // for dateClick
import bootstrapPlugin from '@fullcalendar/bootstrap';
import { CalendarService } from './../../API_Service/calendar.service';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ShowEventDialogComponent } from './show-event-dialog.component';
var CalendarComponent = /** @class */ (function () {
    function CalendarComponent(calendarService, auth, dialog) {
        this.calendarService = calendarService;
        this.auth = auth;
        this.dialog = dialog;
        this.calendarModal = false;
        this.calendarVisible = true;
        this.calendarPlugins = [dayGridPlugin, timeGridPlugin, interactionPlugin, bootstrapPlugin];
        this.calendarWeekends = true;
        this.calendarEvents = [];
    }
    CalendarComponent.prototype.openDialog = function (event) {
        var _this = this;
        var dialogRef = this.dialog.open(AddEventDialog, {
            width: '500px',
            data: event
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.calendarApi.addEvent({
                id: result.eventId,
                title: result.title,
                start: result.startDate,
                end: result.endDate,
                description: result.description
            });
        });
    };
    CalendarComponent.prototype.handleEventClick = function (arg) {
        var dialogConfig = new MatDialogConfig();
        dialogConfig.data = {
            id: arg.event.id,
            title: arg.event.title,
            desc: arg.event.extendedProps.description,
            start: arg.event.start,
            end: arg.event.end
        };
        var dialogRef = this.dialog.open(ShowEventDialogComponent, dialogConfig);
    };
    CalendarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.calendarService.getMyEvents(this.auth.getUsername()).subscribe(function (events) {
            for (var e = 0; e < events.length; e++) {
                _this.calendarEvents = _this.calendarEvents.concat({
                    id: events[e].eventId,
                    title: events[e].title,
                    start: events[e].startDate,
                    end: events[e].endDate,
                    description: events[e].description,
                });
            }
        });
    };
    CalendarComponent.prototype.ngAfterViewInit = function () {
        this.calendarApi = this.calendarComponent.getApi();
    };
    tslib_1.__decorate([
        ViewChild('calendar'),
        tslib_1.__metadata("design:type", FullCalendarComponent)
    ], CalendarComponent.prototype, "calendarComponent", void 0);
    CalendarComponent = tslib_1.__decorate([
        Component({
            selector: 'app-calendar',
            templateUrl: './calendar.component.html',
            styleUrls: ['./calendar.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [CalendarService, TokenStorageService, MatDialog])
    ], CalendarComponent);
    return CalendarComponent;
}());
export { CalendarComponent };
//# sourceMappingURL=calendar.component.js.map