import { AddEventDialog } from './calendar/add-event-dialog';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarchartComponent } from './barchart/barchart.component';
import { CalendarComponent} from './calendar/calendar.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { PiechartComponent } from './piechart/piechart.component';
import { HtmlDownloaderComponent } from './html-downloader/html-downloader.component';
import { MatDialogModule, MatFormFieldModule, MatInputModule, MatDatepickerModule,  MatTabsModule, MatOptionModule, MatAutocompleteModule, MatButtonModule, MatSelectModule, MatCheckboxModule, MatListModule, MatDividerModule} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatNativeDateModule} from '@angular/material';
import { MatMomentDateModule } from "@angular/material-moment-adapter";

@NgModule({
  imports: [
    CommonModule,
    FullCalendarModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMomentDateModule,
    MatTabsModule,
    MatOptionModule,
    MatButtonModule,
    MatSelectModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatListModule,
    MatDividerModule
  ],
  declarations: [BarchartComponent, CalendarComponent, PiechartComponent, HtmlDownloaderComponent, AddEventDialog],
  exports: [CalendarComponent, BarchartComponent, PiechartComponent, HtmlDownloaderComponent],
  entryComponents: [AddEventDialog]
})
export class MiscellaneousModule { }
