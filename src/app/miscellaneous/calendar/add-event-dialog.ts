import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { EventInfo } from './event-info';
import { TokenStorageService } from './../../authentication/token-storage.service';
import { Component, Inject, ViewChild, NgZone } from '@angular/core';
import { CalendarService } from './../../API_Service/calendar.service';
import {MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import * as moment from 'moment';
import {ErrorStateMatcher} from '@angular/material/core';
import {CdkTextareaAutosize} from '@angular/cdk/text-field';
import {take} from 'rxjs/operators';



/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


export interface userListObject {
  userName: string;
  name: string;
  type: string;
}

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
  selector: 'dialog-overview-example-dialog',
  templateUrl: './add-event-dialog.html',
  styleUrls: ['./add-event-dialog.scss'],
  providers: [{
    provide: DateAdapter,
    useClass: MomentDateAdapter,
    deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
  },

  {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS}, ]
})
export class AddEventDialog {

  addTime = false;
  startTimeList: moment.Moment[] = [];
  endTimeList: moment.Moment[] = [];
  startTime: moment.Moment;
  endTime: moment.Moment;
  startDate;
  endDate;
  eventInfo: EventInfo;
  description: string;
  organizer: string;
  selectedFile: File[] = [];
  options: userListObject[];
  participantList = new Set<userListObject>();
  filteredOptions: Observable<userListObject[]>;
  academic_personnel: any = [];
  be_students: any = [];
  me_students: any = [];
  phd_students: any = [];
  groups: any = [];
  participantListTypeFilter: string[];

  constructor(
    public dialogRef: MatDialogRef<AddEventDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any,  private auth: TokenStorageService, private calendarService: CalendarService, private _ngZone: NgZone) {}
    
    @ViewChild('autosize') autosize: CdkTextareaAutosize;

    participantListController = new FormControl();
    titleFormController = new FormControl('', [
      Validators.required,
    ]);
    locationFormController = new FormControl('', [
      Validators.required,
    ]);
  
    ngOnInit() {
      this.organizer = this.auth.getUsername();
      this.startDate = moment(this.data.dateStr);
      this.endDate = moment(this.data.dateStr);
      console.log(this.startDate);
      this.participantListTypeFilter = ['AP', 'Groups'];
      this.resolveParticipants().then(userData => this.generateUserwiseLists(userData));
      this.startTimeList = this.generateTimelist(this.startDate);
      this.startTime = this.startTimeList[0];
      this.getEndTimeList();
      this.endTime = this.endTimeList[0];
    }

    triggerResize() {
      // Wait for changes to be applied, then trigger textarea resize.
      this._ngZone.onStable.pipe(take(1))
          .subscribe(() => this.autosize.resizeToFitContent(true));
    }

    private resolveParticipants(): Promise<any> {
      return new Promise((resolve) => {
        this.calendarService.getAllUsers(this.organizer).subscribe(userData => {
          resolve(userData);
        });
      });
    }

    generateUserwiseLists(data: any) {
      console.log(data);
      data.forEach(element => {
        if(element.participantType === 'Academic Personnel') {
          element.participant.forEach(participant => {
            this.academic_personnel.push([participant[0], participant[1], 'Academic Personnel']);
          });
        } 
        else if(element.participantType === 'Student') {
          element.participant.forEach(participant => {
            if(participant[2] === 'C1') {
              this.be_students.push([participant[0], participant[1], 'B.E.']);
            } 
            else if(participant[2] === 'C2') {
              this.me_students.push([participant[0], participant[1], 'M.E.']);
            } 
            else {
              this.phd_students.push([participant[0], participant[1], 'PhD']);
            }
          });
        }
        else if(element.participantType === 'Group') {
          element.participant.forEach(participant => {
            this.groups.push([participant[1], participant[0], 'User Group']);
          });
        }
      });
      console.log(this.groups);
      this.generateOptions();
  }

    generateOptions() {
      this.options = [];
      this.participantListTypeFilter.forEach(type => {
        if(type === 'Groups') {
          this.groups.forEach(group => {
            this.options.push({userName: group[0], name: group[1], type: group[2]})
          });
        }
        if(type === 'AP') {
          this.academic_personnel.forEach(person => {
            if(person[0] !== this.organizer) {
              this.options.push({userName: person[0], name: person[1], type: person[2]})
            }
          });
        }
        if(type === 'BE') {
          this.be_students.forEach(person => {
            this.options.push({userName: person[0], name: person[1], type: person[2]})
          });
        }
        if(type === 'ME') {
          this.me_students.forEach(person => {
            this.options.push({userName: person[0], name: person[1], type: person[2]})
          });
        }
        if(type === 'PhD') {
          this.phd_students.forEach(person => {
            this.options.push({userName: person[0], name: person[1], type: person[2]})
          });
        }
      })
      this.filteredOptions = this.participantListController.valueChanges
          .pipe(
            startWith(''),
            map(value => this._filter(value))
          );
      console.log(this.options);
    }
  
    private _filter(value: string): userListObject[] {
      if(typeof value === 'string') {
        const filterValue = value.toLowerCase();
        return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
      }
    }

    
    onEnter() {
      this.participantList.add(this.participantListController.value);
      this.participantListController.setValue('');
    }

    remove(participant) {
      this.participantList.delete(participant);
    }

    private generateTimelist(from: moment.Moment): moment.Moment[] {
      let dummyDate = from.clone();
      let timeList: moment.Moment[] = [];
      while (dummyDate.isSame(from, 'day')) {
        timeList.push(dummyDate);
        dummyDate = dummyDate.clone()
        dummyDate = dummyDate.add(15, 'minutes')
      }
      return timeList;
    }

    private getEndTimeList(): void {
      if (this.startDate.isSame(this.endDate)) {
        this.endTimeList = this.generateTimelist(this.startTime);
       } else {
         this.endTimeList = this.generateTimelist(this.endDate);
       }
       this.endTime = this.endTimeList[0];
    }
  
  onNoClick(): void {
    this.dialogRef.close();
  }

  enableTimeFields(): void {
    this.addTime = true;
  }

  validateEndDate() {
    if (this.endDate.isBefore(this.startDate)) {
      return false;
    } else {
      return true;
    }
  }

  validateEndTime() {
    if (this.endTime.isBefore(this.startTime)) {
      return false;
    } else {
      return true;
    }
  }

  disabled() {
    return ((this.titleFormController.hasError('required')) || (this.locationFormController.hasError('required')) || (!this.validateEndDate()) || (!this.validateEndTime()));
  }

  selectFile(event) {
    for(let i=0; i<event.target.files.length; i++) {
      this.selectedFile.push(event.target.files.item(i)); 
    }
  }

  deleteFile(i) {
    this.selectedFile.splice(i, 1);
  }

  getFinalPartcipantList() : string[]{
    let participantNameSet: string[] = [];
    this.participantList.forEach(particp => {
        participantNameSet.push(particp.userName);
    });
    participantNameSet.push(this.organizer);
    return participantNameSet;
  }

  onSubmit() {
    const start = this.startTime.toDate();
    const end = this.endTime.toDate();
    let partcipantList = this.getFinalPartcipantList();
    this.eventInfo = new EventInfo(
        this.titleFormController.value,
        start,
        end,
        this.description,
        partcipantList,
        this.organizer,
        this.organizer,
        new Date(),
        this.locationFormController.value,
      );
      console.log(this.eventInfo);

      const formData = new FormData();
      formData.append('event', new Blob([JSON.stringify(this.eventInfo)], {
        type: "application/json"
    }));
    if(this.selectedFile.length !== 0) {
      this.selectedFile.forEach(file => {
        formData.append('file', file, file.name);
      });
    }
    let addedEvent = this.calendarService.addEvent(formData);
      addedEvent.subscribe(
        data => {
          this.dialogRef.close(data);
        }
      );
  }
}
