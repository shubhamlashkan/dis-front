import { PiechartComponent } from './../miscellaneous/piechart/piechart.component';
import { AboutModule } from './../about/about.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FacultyRoutingModule } from './faculty-routing.module';
import { AttendanceComponent } from './attendance/attendance.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FacultyComponent } from './faculty/faculty.component';
import { SidenavigationComponent } from '../faculty/sidenavigation/sidenavigation.component';
import { DocumentsComponent } from './documents/documents.component';
import { MiscellaneousModule } from 'src/app/miscellaneous/miscellaneous.module';
import { ConventionalModule } from '../conventional/conventional.module';

import { InfrastructureModule } from '../infrastructure/infrastructure.module';
import { HodModule } from '../hod/hod.module';
import { MydutiesNavigationComponent } from '../myduties/myduties-navigation/myduties-navigation.component';
import { MydutiesModule } from '../myduties/myduties.module';
import { MatBadgeModule, MatIconModule } from '@angular/material';
import { AlertsComponent } from './alerts/alerts.component';
import { HomeComponent } from './home/home.component';
import {MatSelectModule} from '@angular/material/select';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FacultyRoutingModule,
    MiscellaneousModule,
    AboutModule,
    InfrastructureModule,
    ConventionalModule,
    MydutiesModule,
    HodModule,
    MatBadgeModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
  ],
  declarations: [
    AttendanceComponent, 
    NavigationComponent,
    FacultyComponent, 
    SidenavigationComponent, 
    DocumentsComponent,
    AlertsComponent,
    HomeComponent
  ],
  providers: [PiechartComponent]
})
export class FacultyModule { }
