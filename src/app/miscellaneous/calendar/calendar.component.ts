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
import { MatDialog} from '@angular/material';

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
    const dialogRef = this.dialog.open(AddEventDialog, {
      width: '500px',
      data: event
    });
    dialogRef.afterClosed().subscribe(result => {
      this.calendarApi.addEvent({
        id: result.eventId,
        title: result.title,
        start: result.startDate,
        end: result.endDate
      });
    });
  }

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

  ngAfterViewInit(): void {
    this.calendarApi = this.calendarComponent.getApi();
    }
}