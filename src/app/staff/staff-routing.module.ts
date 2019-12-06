import { AboutModule } from './../about/about.module';
import { AlertsComponent } from './alerts/alerts.component';
import { AboutComponent } from '../about/about/about.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StaffComponent } from './staff/staff.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { DocumentsComponent } from './documents/documents.component';
import { StudentComponent } from './student/student/student.component';
import { StudentRoutingModule } from './student/student-routing.module';
import { ComplaintsModule } from './complaints/complaints.module';
import { ComplaintsComponent } from './complaints/complaints/complaints.component';
import { StudentModule } from './student/student.module';
import { ConventionalModule } from '../conventional/conventional.module';
import { InfrastructureModule } from '../infrastructure/infrastructure.module';
import { InfrastructureOutletComponent } from '../infrastructure/infrastructure-outlet/infrastructure-outlet.component';

const routes: Routes = [
  {
    path: 'staff',
    component: StaffComponent,
    children: [
        {
          path: '',
          component: HomeComponent
        },
        {
          path: 'staff_about',
          component: AboutComponent,
          loadChildren: () => AboutModule
        },
        {
          path: 'staff_home',
          component: HomeComponent
        },
        {
          path: 'staff_infrastructure',
          component: InfrastructureOutletComponent,
          loadChildren: () => InfrastructureModule
        },
        {
          path: 'staff_alerts',
          component: AlertsComponent
        },
        {
          path: 'staff_attendance',
          component: AttendanceComponent
        },
        {
          path: 'staff_documents',
          component: DocumentsComponent
        },
        {
          path: 'staff_students',
          component: StudentComponent,
          loadChildren: () => StudentModule
        },
        {
          path : 'staff_complaints',
          loadChildren : '../complaints/complaints.module#ComplaintsModule'
        },
        {
          path : 'staff_profile',
          loadChildren : () => ConventionalModule
        }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), StudentRoutingModule],
  exports: [RouterModule]
})
export class StaffRoutingModule { }
