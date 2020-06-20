import { AddEventDialog } from './calendar/add-event-dialog';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarchartComponent } from './barchart/barchart.component';
import { CalendarComponent} from './calendar/calendar.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { PiechartComponent } from './piechart/piechart.component';
import { HtmlDownloaderComponent } from './html-downloader/html-downloader.component';
import { MatTooltipModule,MatIconModule,MatTableModule,MatPaginatorModule,MatSortModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatDatepickerModule,  MatTabsModule, MatOptionModule, MatAutocompleteModule, MatButtonModule, MatSelectModule, MatCheckboxModule, MatListModule, MatDividerModule, MatSnackBarModule, MatCardModule, MatChip, MatChipsModule} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatNativeDateModule} from '@angular/material';
import { MatMomentDateModule } from "@angular/material-moment-adapter";
import { ShowEventDialogComponent } from './calendar/show-event-dialog.component';
import { UpdateEventDialogComponent } from './calendar/update-event-dialog.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UserGroupsComponent } from './calendar/user-groups/user-groups.component';
import { AddGroupDialogComponent } from './calendar/user-groups/add-group-dialog/add-group-dialog.component';
import { ShowGroupComponent } from './calendar/user-groups/show-group/show-group.component';
import { UpdateGroupComponent } from './calendar/user-groups/update-group/update-group.component';

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
    MatChipsModule,
    FormsModule
  ],
  declarations: [BarchartComponent, CalendarComponent, PiechartComponent, HtmlDownloaderComponent, NotificationsComponent, AddEventDialog, ShowEventDialogComponent, UpdateEventDialogComponent, NotificationsComponent, UserGroupsComponent, AddGroupDialogComponent, ShowGroupComponent, UpdateGroupComponent],
  exports: [CalendarComponent, BarchartComponent, PiechartComponent, HtmlDownloaderComponent,NotificationsComponent],
  entryComponents: [AddEventDialog,ShowEventDialogComponent,UpdateEventDialogComponent, UserGroupsComponent]
})
export class MiscellaneousModule { }
