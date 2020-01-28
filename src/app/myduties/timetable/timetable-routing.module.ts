
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TimetableComponent} from './timetable/timetable.component';
import { SemTimeTableComponent } from './sem-time-table/sem-time-table.component';



const routes: Routes = [
    {
      path: 'timetable',
      component: TimetableComponent
    },
    {
      path:'sem-time-table',
      component:SemTimeTableComponent
    }
    
   
  ];





@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })


export class TimetableRoutingModule {

}