import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HodRoutingModule } from './hod-routing.module';
import { HomeComponent } from './home/home.component';
import { AdministrationComponent } from './administration/administration.component';
import { TimetableComponent } from './timetable/timetable.component';
import { FacultyComponent } from './faculty/faculty.component';
import { RequestsComponent } from './requests/requests.component';
import { AlertsComponent } from './alerts/alerts.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HodComponent } from './hod/hod.component';

import { SidenavigationComponent } from './sidenavigation/sidenavigation.component';
import { StudentComponent } from './student/student.component';
import { DocumentsComponent } from './documents/documents.component';
import { MiscellaneousModule } from '../miscellaneous/miscellaneous.module';
import { ToDoComponent } from './to-do/to-do.component';
import { CalendarComponent } from '../miscellaneous/calendar/calendar.component';
import { FooterModule } from './footer/footer.module';
import { MeetingsComponent } from './meetings/meetings.component';
import { LeavesComponent } from './leaves/leaves.component';
import { ConventionalModule } from '../conventional/conventional.module';
import { InfrastructureModule } from '../infrastructure/infrastructure.module';
import { FormsModule } from '@angular/forms';
import { MatIconModule, MatBadgeModule } from '@angular/material';
import { NotificationsComponent } from '../miscellaneous/notifications/notifications.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import {MatSelectModule} from '@angular/material/select';
import {ReactiveFormsModule} from '@angular/forms';
import { ClassAttendanceComponent } from './class-attendance/class-attendance.component';


@NgModule({
  imports: [
    CommonModule,
    HodRoutingModule,
    InfrastructureModule,
    MiscellaneousModule,
    FooterModule,
    ConventionalModule,
    FormsModule,
    MatIconModule,
    MatBadgeModule,
    MatSelectModule,
    NgMultiSelectDropDownModule.forRoot(),
    ReactiveFormsModule
    ],
  declarations: [
     HomeComponent,
     AdministrationComponent, 
     TimetableComponent, 
     FacultyComponent, 
     RequestsComponent, 
     AlertsComponent, 
     NavigationComponent, 
     HodComponent, 
     SidenavigationComponent,
     StudentComponent,
     DocumentsComponent,
     LeavesComponent,
     ToDoComponent,
     MeetingsComponent,
     ClassAttendanceComponent],
     providers: [CalendarComponent , NotificationsComponent],
     exports:[
      
       StudentComponent
     ]
 
})
export class HodModule { }
