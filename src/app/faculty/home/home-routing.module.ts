import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FacultyComponent } from '../faculty/faculty.component';
import { HomeComponent } from './home/home.component';
import { FacultyhomeComponent } from './facultyhome/facultyhome.component';
import { MiscellaneousModule } from 'src/app/miscellaneous/miscellaneous.module';
import { NotificationsComponent } from 'src/app/miscellaneous/notifications/notifications.component';

const routes: Routes = [
  {
    path : 'faculty',
    component : FacultyComponent,
    children : [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: FacultyhomeComponent
      },
      {
        path: 'notification',
        component : NotificationsComponent, 
        loadChildren:() => MiscellaneousModule
      }
    ]
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: FacultyhomeComponent
      },
      {
        path: 'notification',
        component : NotificationsComponent, 
        loadChildren:() => MiscellaneousModule
      }
    ]
  },
]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
