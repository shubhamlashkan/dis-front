import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarchartComponent } from './barchart/barchart.component';
import { CalendarComponent, DialogOverviewExampleDialog } from './calendar/calendar.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { PiechartComponent } from './piechart/piechart.component';
import { HtmlDownloaderComponent } from './html-downloader/html-downloader.component';
import { MatDialogModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FullCalendarModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
  ],
  declarations: [BarchartComponent, CalendarComponent, PiechartComponent, HtmlDownloaderComponent,     DialogOverviewExampleDialog  ],
  exports: [CalendarComponent, BarchartComponent, PiechartComponent, HtmlDownloaderComponent],
  entryComponents: [DialogOverviewExampleDialog]
})
export class MiscellaneousModule { }
