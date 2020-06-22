import { Component, OnInit , Inject, ViewChild} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material/dialog';
import { CalendarService } from 'src/app/API_Service/calendar.service';
import { UpdateEventDialogComponent } from './update-event-dialog.component';
import * as _moment from 'moment';
import { MatSnackBar } from '@angular/material';

import { TokenStorageService } from './../../authentication/token-storage.service';

const moment = _moment;
 
@Component({
  selector: 'app-show-event-dialog',
  templateUrl: './show-event-dialog.component.html',
  styleUrls: ['./show-event-dialog.component.scss']
})
export class ShowEventDialogComponent implements OnInit {

  title: String;
  desc: String;
  id: string;
  start: Date;
  end: Date;
  eid: String;
  calendarApi: any;
  startEditable: boolean;
  location: string;
  participants: any;
  st_date: any;
  st_time: any;

  constructor(public dialogRef: MatDialogRef<ShowEventDialogComponent>,@Inject(MAT_DIALOG_DATA) data,private snackBar: MatSnackBar,
  private calendarService: CalendarService, private dialog: MatDialog,  private auth: TokenStorageService){
    this.title= data.title;
    this.desc= data.desc;
    this.id= data.id;
    this.start= data.start;
    this.end = data.end;
    this.calendarApi = data.calendarApi;
    this.startEditable = data.startEditable;
    this.location = data.location;
    this.participants = data.participants;
   }

  ngOnInit() {
    let st = moment(this.start)
    this.st_date = st.format('ll');
    this.st_time = st.format('LT');
    if(this.st_time === '12:00 AM'){
      this.st_time = '';
    }

  }

  onDelete(){
    if(confirm("Are you sure you want to delete this event?")){
      let deleteResponse = this.calendarService.deleteEvent(this.id); 
      deleteResponse.subscribe(date => {
        this.calendarApi.getEventById(this.id).remove();
        this.snackBar.open('Event deleted', 'OK', {
          duration: 5000
         });
        this.dialogRef.close();
        },
        error => {this.snackBar.open('Oops! Server Error', 'OK',{
          duration: 5000
        })
      });
    }
  }

  onUpdate(){
      const dialogConfig = new MatDialogConfig();
      dialogConfig.width = '570px';
      dialogConfig.data = {
        id: this.id,
        title: this.title,
        desc: this.desc,
        start: this.start,
        end: this.end,
        location: this.location,
        participants: this.participants,
      };
      console.log(this.end);
      let removeId = this.id;
      const dialogReference = this.dialog.open(UpdateEventDialogComponent, dialogConfig);
      dialogReference.afterClosed().subscribe(result => {
        if(result !== undefined) {
          this.calendarApi.addEvent({
            id: result.eventId,
            title: result.title,
            start: result.startDate,
            end: result.endDate,
            description: result.description,
            startEditable: true,
            location: result.location,
            participants: result.participants,
            textColor: "white",
          });
          this.calendarApi.getEventById(removeId).remove();
        }
      });
      this.dialogRef.close();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
