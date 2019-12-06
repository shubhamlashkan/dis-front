import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarchartComponent } from './barchart/barchart.component';
import { CalendarComponent } from './calendar/calendar.component';
import { PiechartComponent } from './piechart/piechart.component';
import { HtmlDownloaderComponent } from './html-downloader/html-downloader.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BarchartComponent, CalendarComponent, PiechartComponent, HtmlDownloaderComponent],
  exports: [CalendarComponent, BarchartComponent, PiechartComponent, HtmlDownloaderComponent]
})
export class MiscellaneousModule { }
