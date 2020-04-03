import { Component, OnInit , Inject, ViewChild} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material/dialog';
import { CalendarService } from 'src/app/API_Service/calendar.service';
import { UpdateEventDialogComponent } from './update-event-dialog.component';

 
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
  editable: boolean;

  constructor(public dialogRef: MatDialogRef<ShowEventDialogComponent>,@Inject(MAT_DIALOG_DATA) data,
  private calendarService: CalendarService, private dialog: MatDialog){
    this.title= data.title;
    this.desc= data.desc;
    this.id= data.id;
    this.start= data.start;
    this.eid = data.eid;
    this.calendarApi = data.calendarApi;
    this.editable = data.editable;
   }

  ngOnInit() {
  }

  onDelete(){
      if(confirm("Are you sure you want to delete this event?")){
        this.calendarApi.getEventById(this.id).remove();
        this.calendarService.deleteEvent(this.id); 
        this.dialogRef.close();
      }
  }

  onUpdate(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      id: this.id,
      title: this.title,
      desc: this.desc,
      start: this.start,
      end: this.end,
    };
    let removeId = this.calendarApi.id;
    const dialogReference = this.dialog.open(UpdateEventDialogComponent, dialogConfig);
    dialogReference.afterClosed().subscribe(result => {
      this.calendarApi.addEvent({
        id: result.eventId,
        title: result.title,
        start: result.startDate,
        end: result.endDate,
        description: result.description
      });
      this.calendarApi.getEventById(dialogConfig.data.id).remove();
    });
    this.dialogRef.close();
  }

}
