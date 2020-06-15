import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Component, Inject, ViewChild, NgZone, OnInit } from '@angular/core';
import {ErrorStateMatcher} from '@angular/material/core';
import {CdkTextareaAutosize} from '@angular/cdk/text-field';
import {take} from 'rxjs/operators';
import { NotificationsService } from 'src/app/API_Service/notifications.service';
import { ForwardInfo } from '../forward-Info';
import { TokenStorageService } from 'src/app/authentication/token-storage.service';



/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-forward-dialog',
  templateUrl: './forward-dialog.component.html',
  styleUrls: ['./forward-dialog.component.scss']
})
export class ForwardDialogComponent implements OnInit {

  participant: string;
  participantList = new Set<string>();
  forwardInfo: ForwardInfo;
  comment: string;
  organizer: string;
  employeeList: any;
  usernameList: string[] = [];
  notificationId: string;
  heading:string;

  constructor(
    public dialogRef: MatDialogRef<ForwardDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,  private auth: TokenStorageService, private notificationService: NotificationsService, private _ngZone: NgZone) {
      this.notificationId=data.id;
      this.heading=data.heading;
    }
    
    @ViewChild('autosize') autosize: CdkTextareaAutosize;

    participantListController = new FormControl();
    options: string[] = [];
    filteredOptions: Observable<string[]>;
  
    ngOnInit() {
      this.employeeList = this.notificationService.getAllEmployeeList();
      Promise.all([this.generateOptions()]).then(value =>{
      this.filteredOptions = this.participantListController.valueChanges
        .pipe(
          startWith(''),
          map(value => this._filter(value))
        );
      });
      this.organizer = this.auth.getUsername();
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
      });
    }

    onEnter() {
      this.participantList.add(this.participantListController.value);
      this.participantListController.setValue('');
    }

    remove(participant) {
      this.participantList.delete(participant);
    }
  
    private _filter(value: string): string[] {
      const filterValue = value.toLowerCase();
      return this.options.filter(option => option.toLowerCase().includes(filterValue));
    }

  onSubmit() {
    let flag = 0;
    console.log(this.participantList)
    this.employeeList.subscribe(emp => {
      this.participantList.forEach((participant) => {
        flag = 0;
        for (let j = 0; j < emp.length; j++) {
          if (participant === emp[j][1]) {
            this.usernameList.push(emp[j][0]);
            flag = 1;
          }
        };
        if(flag === 0){
          this.usernameList.push(participant);
        };
      });
      console.log(this.usernameList)
      this.forwardInfo = new ForwardInfo(    
        this.usernameList,
        this.notificationId,
        this.comment+"\nForwarded By: "+this.organizer,
      );
      console.log(this.forwardInfo);

      let forwardNotification = this.notificationService.forward(this.forwardInfo);
      forwardNotification.subscribe(
        data => {
          this.dialogRef.close(data);
        }
      );
    });
  }
}
