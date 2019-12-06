import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HodComponent } from './hod/hod.component';
import { HomeComponent } from './home/home.component';
import { AdministrationComponent } from './administration/administration.component';
import { FacultyComponent } from './faculty/faculty.component';
import { RequestsComponent } from './requests/requests.component';
import { TimetableComponent } from './timetable/timetable.component';
import { StudentComponent } from './student/student.component';
import { DocumentsComponent } from './documents/documents.component';
import { ToDoComponent } from './to-do/to-do.component';
import { AboutModule } from '../about/about.module';
import { AboutComponent } from '../about/about/about.component';
import { GalleryComponent } from './footer/gallery/gallery.component';
import { MeetingsComponent } from './meetings/meetings.component';
import { InfrastructureOutletComponent } from '../infrastructure/infrastructure-outlet/infrastructure-outlet.component';
import { InfrastructureModule } from '../infrastructure/infrastructure.module';
import { Component } from 'fullcalendar';
import { ProfileComponent } from '../conventional/profile/profile.component';
import { ConventionalModule } from '../conventional/conventional.module';

const routes: Routes = [
  { path: 'head',
    component: HodComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'student',
        component: StudentComponent
      },
      {
        path: 'hod_about',
        component: AboutComponent,
        loadChildren: () => AboutModule
      },
      {
        path: 'documents',
        component: DocumentsComponent
      },
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'to-do',
        component: ToDoComponent
      },
      {
        path: 'hod_tasks',
        component: AdministrationComponent
      },
      {
        path: 'faculty',
        component: FacultyComponent
      },
      {
        path: 'infrastructure',
        component: InfrastructureOutletComponent,
        loadChildren: ()=> InfrastructureModule
      },
      {
        path: 'requests',
        component: RequestsComponent
      },
      {
        path: 'timetable',
        component: TimetableComponent
      },
      {
        path: 'gallery',
        component: GalleryComponent
      },
      {
        path: 'meetings',
        component: MeetingsComponent
      },
      {
        path :'complaints',
        //component:ComplaintsComponent,
        loadChildren : '../complaints/complaints.module#ComplaintsModule'
      },
      {
        path : 'profile',
        component : ProfileComponent,
        loadChildren: () => ConventionalModule 
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HodRoutingModule { }
