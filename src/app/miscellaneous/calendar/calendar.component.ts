import { TokenStorageService } from './../../authentication/token-storage.service';
import { Component, ViewChild, Inject } from '@angular/core';
import { FullCalendarComponent } from '@fullcalendar/angular';
import { EventInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction'; // for dateClick
import bootstrapPlugin from '@fullcalendar/bootstrap';
import { CalendarService } from './../../API_Service/calendar.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

export interface DialogData {
  animal: string;
  name: string;
}



@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})

export class CalendarComponent {

  constructor(private calendarService: CalendarService, private auth: TokenStorageService, public dialog: MatDialog) {}
  animal: string;
  name: string;

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

  @ViewChild('calendar') calendarComponent: FullCalendarComponent; // the #calendar in the template
  calendarModal : boolean = false;
  calendarVisible = true;
  calendarPlugins = [dayGridPlugin, timeGridPlugin, interactionPlugin, bootstrapPlugin];
  calendarWeekends = true;
  calendarEvents: EventInput[] = [];

  ngOnInit() {
    this.calendarService.getMyEvents(this.auth.getUsername()).subscribe( events => {
      for (let e = 0; e < events.length; e++) {
        this.calendarEvents = this.calendarEvents.concat({
          id: events[e].eventId,
          title: events[e].title,
          start: events[e].startDate,
          end: events[e].endDate,
        });
      }
    });
  }



  handleDateClick(arg) {
    if (confirm('Would you like to add an event to ' + arg.dateStr + ' ?')) {
      this.openDialog()
      this.calendarEvents = this.calendarEvents.concat({ // add new event data. must create new array
        title: 'New Event',
        start: arg.date,
        allDay: arg.allDay
      });
     
    }
  }

  

}


@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: './dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}