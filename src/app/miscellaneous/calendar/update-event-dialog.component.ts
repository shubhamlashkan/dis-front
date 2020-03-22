import { Component, OnInit, Inject, ViewChild, NgZone} from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith, take} from 'rxjs/operators';
import { MatDialogRef, MAT_DIALOG_DATA, ErrorStateMatcher} from '@angular/material';
import { EventInfo } from './event-info';
import { TokenStorageService } from './../../authentication/token-storage.service';
import { CalendarService } from './../../API_Service/calendar.service';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import * as _moment from 'moment';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective| NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


const moment = _moment;

export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'll',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: '',
    monthYearA11yLabel: 'MMM YYYY',
  },
};

@Component({
  selector: 'app-update-event-dialog',
  templateUrl: './update-event-dialog.component.html',
  styleUrls: ['./update-event-dialog.component.scss']
})
export class UpdateEventDialogComponent implements OnInit {

  addTime = false;
  addReminderTime = true;
  startTimeList: string[] = [];
  endTimeList: string[] = [];
  startTime: string;
  endTime: string;
  startDate;
  endDate;
  participant: string;
  participantList = new Set<string>();
  eventInfo: EventInfo;
  description: string;
  organizer: string;
  employeeList: any;
  usernameList: string[] = [];
  id: string;
  title: string;

  constructor(
    public dialogRef: MatDialogRef<UpdateEventDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,  private auth: TokenStorageService, private calendarService: CalendarService, private _ngZone: NgZone) {}
    
    @ViewChild('autosize') autosize: CdkTextareaAutosize;

    participantListController = new FormControl();
    titleFormController = new FormControl('', [
      Validators.required,
    ]);
    locationFormController = new FormControl('', [
      Validators.required,
    ]);
    options: string[] = [];
    filteredOptions: Observable<string[]>;
  
    ngOnInit() {
      this.startDate = moment(this.data.dateStr);
      this.endDate = moment(this.data.dateStr);
      this.description = this.data.desc;
      this.title = this.data.title;
      this.employeeList = this.calendarService.getAllEmployeeList();
      Promise.all([this.generateOptions()]).then(value =>{
      this.filteredOptions = this.participantListController.valueChanges
        .pipe(
          startWith(''),
          map(value => this._filter(value))
        );
      });
      this.generateTimelist();
      this.startTime = this.startTimeList[0];
      this.getEndTimeList();
      this.endTime = this.startTime;
      this.id = this.data.id;
    }

    triggerResize() {
      // Wait for changes to be applied, then trigger textarea resize.
      this._ngZone.onStable.pipe(take(1))
          .subscribe(() => this.autosize.resizeToFitContent(true));
    }

    generateOptions() {
      this.employeeList.subscribe(empList => {
        const currentUser = this.auth.getUsername();
        for (let i = 0; i < empList.length; i++) {
          if (empList[i][0] === currentUser) {
            this.organizer = empList[i][1];
          } else {
            this.options.push(empList[i][1]);
          }
        }
        console.log(this.options);
      });
    }

    onEnter() {
      if (this.participantList.size === 0) {
        this.participantList.add(this.organizer);
      }
      this.participantList.add(this.participantListController.value);
      this.participantListController.setValue('');
    }

    remove(participant) {
      this.participantList.delete(participant);
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
       if (this.startDate.isSame(this.endDate)) {
       const ind = this.startTimeList.findIndex(t => t === timeObj);
       this.endTimeList = this.startTimeList.slice(ind, this.startTimeList.length);
       this.endTime = this.endTimeList[0];
       } else {
         this.endTimeList = Object.assign([], this.startTimeList);
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

  validateDate(endDate) {
    if (endDate.isBefore(this.startDate)) {
      return false;
    } else {
      return true;
    }
  }
  //changes to be made for update form
  validateTime(endTime) {
    if(!this.endDate.isAfter(this.startDate)) {
      const splitted_stime = this.startTime.split(':');
      let shh = Number(splitted_stime[0]);
      const smm = Number(splitted_stime[1].split(' ')[0]);
      const smeridian = splitted_stime[1].split(' ')[1];
      const splitted_etime = endTime.split(':');
      let ehh = Number(splitted_etime[0]);
      const emm = Number(splitted_etime[1].split(' ')[0]);
      const emeridian = splitted_etime[1].split(' ')[1];
      if(emeridian === 'AM' && ehh === 12) {
        ehh = 0;
      }
      if (emeridian === 'PM') {
        ehh = ehh + 12;
      }
      if(smeridian === 'AM' && shh === 12) {
        shh = 0;
      }
      if (emeridian === 'PM') {
        shh = shh + 12;
      }
      if(emeridian === smeridian) {
        if(shh > ehh) {
          return false;
        } else if(shh === ehh) {
            if (smm > emm) {
              return false;
            } else {
              return true;
            }
        } else {
          return true;
        }
      } else if (smeridian === 'PM' && emeridian === 'AM') {
          return false;
      } else {
        return true;
      }
    }
  return true;
  }

  disabled() {
    return ((this.titleFormController.hasError('required')) || (this.locationFormController.hasError('required')) || (!this.validateDate(this.endDate)));
  }

  onSubmit() {
    const start = this.toDateTime(new Date(this.startDate), this.startTime);
    const end = this.toDateTime(new Date(this.endDate), this.endTime);
    this.employeeList.subscribe(emp => {
      this.participantList.forEach((participant) => {
        for (let j = 0; j < emp.length; j++) {
          console.log(participant);
          console.log(emp[j][1]);
          if (participant === emp[j][1]) {
            this.usernameList.push(emp[j][0]);
          }
        }
      });
      console.log(this.usernameList);
    });
    this.eventInfo = new EventInfo(
      this.titleFormController.value,
      start,
      end,
      this.description,
      this.usernameList,
      this.auth.getUsername(),
      this.auth.getUsername(),
      new Date(),
      this.locationFormController.value
    );
    let addedEvent = this.calendarService.updateEvent(this.eventInfo,this.id);
    addedEvent.subscribe(
      data => {
        this.dialogRef.close(data);
      }
    );
  }
}

