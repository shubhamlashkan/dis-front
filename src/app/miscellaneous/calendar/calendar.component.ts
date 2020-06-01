import { AddEventDialog } from './add-event-dialog';
import { TokenStorageService } from './../../authentication/token-storage.service';
import { Component, ViewChild, Inject } from '@angular/core';
import { FullCalendarComponent } from '@fullcalendar/angular';
import { EventInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction'; // for dateClick
import bootstrapPlugin from '@fullcalendar/bootstrap';
import { CalendarService } from './../../API_Service/calendar.service';
import { MatDialog, MatDialogConfig} from '@angular/material';
import { ShowEventDialogComponent } from './show-event-dialog.component';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})

export class CalendarComponent {
  @ViewChild('calendar') calendarComponent: FullCalendarComponent; // the #calendar in the template

  constructor(private calendarService: CalendarService, private auth: TokenStorageService, public dialog: MatDialog) {}
 
  calendarApi: any;
  calendarModal : boolean = false;
  calendarVisible = true;
  calendarPlugins = [dayGridPlugin, timeGridPlugin, interactionPlugin, bootstrapPlugin];
  calendarWeekends = true;
  calendarEvents: EventInput[] = [];

  openDialog(event): void {
    console.log(this.auth.getAuthorities())
    if(!(this.auth.getAuthorities().includes("student"))) {
      const dialogRef = this.dialog.open(AddEventDialog, {
        width: '520px',
        data: event
      });
      dialogRef.afterClosed().subscribe(result => {
        if (result !== undefined) {
          this.calendarApi.addEvent({
            id: result.eventId,
            title: result.title,
            start: result.startDate,
            end: result.endDate,
            description: result.description,
            startEditable: true,
            location: result.location,
            participants: result.participants,
          });
        }
      });
    }
  }

  handleEventClick(arg): void{
    const dialogConfig = new MatDialogConfig();
    dialogConfig.minWidth = '400px';
    dialogConfig.autoFocus = false;
    dialogConfig.data = {
      id: arg.event.id,
      eid: arg.event.eventId,
      title: arg.event.title,
      desc: arg.event.extendedProps.description,
      start: arg.event.start,
      end: arg.event.end,
      calendarApi : this.calendarApi,
      startEditable: arg.event.startEditable,
      location: arg.event.extendedProps.location,
      participants: arg.event.extendedProps.participants,
    };
    const dialogRef = this.dialog.open(ShowEventDialogComponent,dialogConfig);
  }

  ngOnInit() {
    this.calendarService.getMyEvents(this.auth.getUsername()).subscribe( events => {
      for (let e = 0; e < events.length; e++) {
        if(events[e].eventIncharge == this.auth.getUsername()){
          this.calendarEvents = this.calendarEvents.concat({
            id: events[e].eventId,
            title: events[e].title,
            start: events[e].startDate,
            end: events[e].endDate,
            description: events[e].description,
            startEditable: true,
            location: events[e].location,
            participants: events[e].participants,
          });
      }
      else{
        this.calendarEvents = this.calendarEvents.concat({
          id: events[e].eventId,
          title: events[e].title,
          start: events[e].startDate,
          end: events[e].endDate,
          description: events[e].description,
          startEditable: false,
          location: events[e].location,
          participants: events[e].participants,
          organizer: events[e].createdBy,
        });
      }
    }
    });
    this.calendarService.getPublicHolidays().subscribe( events=> { 
      for (let e = 0; e < events.length; e++) {
        this.calendarEvents = this.calendarEvents.concat({
          title: events[e].name,
          start: new Date(events[e].date),
          end: new Date(events[e].date),
          description: events[e].description,
          startEditable: false,
          backgroundColor: "purple",
          textColor: "white",
        })
      }
    });
  }

  ngAfterViewInit(): void {
    this.calendarApi = this.calendarComponent.getApi();
    }
}