import * as tslib_1 from "tslib";
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { EventInfo } from './event-info';
import { TokenStorageService } from './../../authentication/token-storage.service';
import { Component, Inject } from '@angular/core';
import { CalendarService } from './../../API_Service/calendar.service';
var AddEventDialog = /** @class */ (function () {
    function AddEventDialog(dialogRef, data, auth, calendarService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.auth = auth;
        this.calendarService = calendarService;
        this.addTime = false;
        this.addReminderTime = true;
        this.startTimeList = [];
        this.endTimeList = [];
        this.participantList = [];
        this.myControl = new FormControl();
        this.options = ['One', 'Two', 'Three'];
    }
    AddEventDialog.prototype.ngOnInit = function () {
        var _this = this;
        this.startDate = this.data.dateStr;
        this.endDate = this.data.dateStr;
        this.filteredOptions = this.myControl.valueChanges
            .pipe(startWith(''), map(function (value) { return _this._filter(value); }));
        this.generateTimelist();
        this.startTime = this.startTimeList[0];
        this.getEndTimeList();
        this.endTime = this.startTime;
        if (!this.data.allDay) {
            var sd = new Date(this.data.dateStr);
            this.startTime = (sd.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }));
            var ed = new Date(sd.setTime(sd.setHours(sd.getHours() + 1)));
            this.endTime = (ed.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }));
        }
    };
    AddEventDialog.prototype.onEnter = function () {
        if (this.participantList.length === 0) {
            this.participantList.push(this.auth.getUsername());
        }
        this.participantList.push(this.myControl.value);
        this.myControl.setValue('');
    };
    AddEventDialog.prototype.remove = function (index) {
        this.participantList.splice(index, 1);
    };
    AddEventDialog.prototype.generateTimelist = function () {
        var dummyDate = new Date(2000, 1, 1, 0, 0, 0, 0);
        this.startTimeList.push(dummyDate.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }));
        while (!(dummyDate.getHours() === 23 && dummyDate.getMinutes() === 45)) {
            dummyDate = new Date(dummyDate.setTime(dummyDate.setMinutes(dummyDate.getMinutes() + 15)));
            this.startTimeList.push(dummyDate.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }));
        }
    };
    AddEventDialog.prototype._filter = function (value) {
        var filterValue = value.toLowerCase();
        return this.options.filter(function (option) { return option.toLowerCase().includes(filterValue); });
    };
    AddEventDialog.prototype.getEndTimeList = function () {
        var timeObj = this.startTime;
        if (this.startDate === this.endDate) {
            var ind = this.startTimeList.findIndex(function (t) { return t === timeObj; });
            this.endTimeList = this.startTimeList.slice(ind, this.startTimeList.length);
            this.endTime = this.endTimeList[0];
        }
    };
    AddEventDialog.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    AddEventDialog.prototype.enableTimeFields = function () {
        this.addTime = true;
    };
    AddEventDialog.prototype.enableReminderTimeFields = function () {
        this.addReminderTime = false;
    };
    AddEventDialog.prototype.toDateTime = function (date, time) {
        var splitted_time = time.split(':');
        var hh = Number(splitted_time[0]);
        var mm = Number(splitted_time[1].split(' ')[0]);
        var meridian = splitted_time[1].split(' ')[1];
        if (meridian === 'AM' && hh === 12) {
            hh = 0;
        }
        if (meridian === 'PM') {
            hh = hh + 12;
        }
        date.setHours(hh);
        date.setMinutes(mm);
        return date;
    };
    AddEventDialog.prototype.onSubmit = function () {
        var _this = this;
        var start = this.toDateTime(new Date(this.startDate), this.startTime);
        var end = this.toDateTime(new Date(this.endDate), this.endTime);
        this.eventInfo = new EventInfo(this.title, start, end, this.description, this.participantList, this.auth.getUsername(), this.auth.getUsername(), new Date());
        var addedEvent = this.calendarService.addEvent(this.eventInfo);
        addedEvent.subscribe(function (data) {
            _this.dialogRef.close(data);
        });
    };
    AddEventDialog = tslib_1.__decorate([
        Component({
            selector: 'dialog-overview-example-dialog',
            templateUrl: './add-event-dialog.html',
            styleUrls: ['./add-event-dialog.scss']
        }),
        tslib_1.__param(1, Inject(MAT_DIALOG_DATA)),
        tslib_1.__metadata("design:paramtypes", [MatDialogRef, Object, TokenStorageService, CalendarService])
    ], AddEventDialog);
    return AddEventDialog;
}());
export { AddEventDialog };
//# sourceMappingURL=add-event-dialog.js.map