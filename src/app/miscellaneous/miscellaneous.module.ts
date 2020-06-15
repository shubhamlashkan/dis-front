import { AddEventDialog } from './calendar/add-event-dialog';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarchartComponent } from './barchart/barchart.component';
import { CalendarComponent} from './calendar/calendar.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { PiechartComponent } from './piechart/piechart.component';
import { HtmlDownloaderComponent } from './html-downloader/html-downloader.component';
import { MatTooltipModule,MatIconModule,MatTableModule,MatPaginatorModule,MatSortModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatDatepickerModule,  MatTabsModule, MatOptionModule, MatAutocompleteModule, MatButtonModule, MatSelectModule, MatCheckboxModule, MatListModule, MatDividerModule, MatSnackBarModule, MatCardModule} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatNativeDateModule} from '@angular/material';
import { MatMomentDateModule } from "@angular/material-moment-adapter";
import { ShowEventDialogComponent } from './calendar/show-event-dialog.component';
import { UpdateEventDialogComponent } from './calendar/update-event-dialog.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { DeleteDialogComponent } from './notifications/delete-dialog/delete-dialog.component';
import { ForwardDialogComponent } from './notifications/forward-dialog/forward-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    FullCalendarModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatTableModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMomentDateModule,
    MatDividerModule,
    MatTabsModule,
    MatOptionModule,
    MatButtonModule,
    MatSelectModule,
    MatPaginatorModule,
    MatSortModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatListModule,
    MatDividerModule,
    MatIconModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatCardModule,
  ],
  declarations: [BarchartComponent, CalendarComponent, PiechartComponent, HtmlDownloaderComponent, NotificationsComponent, AddEventDialog, ShowEventDialogComponent, UpdateEventDialogComponent, NotificationsComponent, DeleteDialogComponent, ForwardDialogComponent],
  exports: [CalendarComponent, BarchartComponent, PiechartComponent, HtmlDownloaderComponent,NotificationsComponent],
  entryComponents: [AddEventDialog,ShowEventDialogComponent,UpdateEventDialogComponent,DeleteDialogComponent,ForwardDialogComponent]
})
export class MiscellaneousModule { }
