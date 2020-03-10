import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { EventInfo } from './event-info';
import { TokenStorageService } from './../../authentication/token-storage.service';
import { Component, Inject } from '@angular/core';
import { CalendarService } from './../../API_Service/calendar.service';

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: './add-event-dialog.html',
  styleUrls: ['./add-event-dialog.scss']
})
export class AddEventDialog {

  addTime = false;
  addReminderTime = true;
  startTimeList: string[] = [];
  endTimeList: string[] = [];
  startTime: string;
  endTime: string;
  startDate;
  endDate;
  participant: string;
  participantList: string[] = [];
  eventInfo: EventInfo;
  title: string;
  location: string;
  description: string;

  constructor(
    public dialogRef: MatDialogRef<AddEventDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any,  private auth: TokenStorageService, private calendarService: CalendarService) {}


    myControl = new FormControl();
    options: string[] = ['One', 'Two', 'Three'];
    filteredOptions: Observable<string[]>;
  
    ngOnInit() {
      this.startDate = this.data.dateStr;
      this.endDate = this.data.dateStr;
      this.filteredOptions = this.myControl.valueChanges
        .pipe(
          startWith(''),
          map(value => this._filter(value))
        );
      this.generateTimelist();
      this.startTime = this.startTimeList[0];
      this.getEndTimeList();
      this.endTime = this.startTime;
      if (!this.data.allDay) {
        const sd = new Date(this.data.dateStr);
        this.startTime = (sd.toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit'}));
        const ed = new Date(sd.setTime(sd.setHours(sd.getHours() + 1)));
        this.endTime = (ed.toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit'}));
      }
    }

    onEnter() {
      if (this.participantList.length === 0) {
        this.participantList.push(this.auth.getUsername());
      }
      this.participantList.push(this.myControl.value);
      this.myControl.setValue('');
    }

    remove(index) {
      this.participantList.splice(index,1);
    }

    private generateTimelist(): void {
      let dummyDate = new Date(2000, 1, 1, 0, 0, 0, 0);
      this.startTimeList.push(dummyDate.toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit'}));
      while (!(dummyDate.getHours() === 23 && dummyDate.getMinutes() === 45)) {
        dummyDate = new Date(dummyDate.setTime(dummyDate.setMinutes(dummyDate.getMinutes() + 15)));
        this.startTimeList.push(dummyDate.toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit'}));
      }
    }
  
    private _filter(value: string): string[] {
      const filterValue = value.toLowerCase();
  
      return this.options.filter(option => option.toLowerCase().includes(filterValue));
    }

    private getEndTimeList(): void {
       const timeObj = this.startTime;
       if (this.startDate === this.endDate) {
       const ind = this.startTimeList.findIndex(t => t === timeObj);
       this.endTimeList = this.startTimeList.slice(ind, this.startTimeList.length);
       this.endTime = this.endTimeList[0];
       }
    }
  
  onNoClick(): void {
    this.dialogRef.close();
  }

  enableTimeFields(): void {
    this.addTime = true;
  }

  enableReminderTimeFields(): void {
    this.addReminderTime = false;
  }

  toDateTime(date: Date, time: string): Date {
    const splitted_time = time.split(':');
    let hh = Number(splitted_time[0]);
    const mm = Number(splitted_time[1].split(' ')[0]);
    const meridian = splitted_time[1].split(' ')[1];
    if(meridian === 'AM' && hh === 12) {
      hh = 0;
    }
    if (meridian === 'PM') {
      hh = hh + 12;
    }
    date.setHours(hh);
    date.setMinutes(mm);
    return date;
  }

  onSubmit() {

    const start = this.toDateTime(new Date(this.startDate), this.startTime);
    const end = this.toDateTime(new Date(this.endDate), this.endTime);
    this.eventInfo = new EventInfo(
      this.title,
      start,
      end,
      this.description,
      this.participantList,
      this.auth.getUsername(),
      this.auth.getUsername(),
      new Date()
    );
    let addedEvent = this.calendarService.addEvent(this.eventInfo);
    addedEvent.subscribe(
      data => {
        this.dialogRef.close(data);
      }
    );
  }

}