import { TokenStorageService } from './../../authentication/token-storage.service';
import { Component, ViewChild } from '@angular/core';
import { FullCalendarComponent } from '@fullcalendar/angular';
import { EventInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction'; // for dateClick
import bootstrapPlugin from '@fullcalendar/bootstrap';
import { CalendarService } from './../../API_Service/calendar.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})

export class CalendarComponent {

  constructor(private calendarService: CalendarService, private auth: TokenStorageService) {}

  @ViewChild('calendar') calendarComponent: FullCalendarComponent; // the #calendar in the template

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
      this.calendarEvents = this.calendarEvents.concat({ // add new event data. must create new array
        title: 'New Event',
        start: arg.date,
        allDay: arg.allDay
      });
    }
  }

}
