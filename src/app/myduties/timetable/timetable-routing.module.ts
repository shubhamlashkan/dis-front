
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TimetableComponent} from './timetable/timetable.component';
import { SemTimeTableComponent } from './sem-time-table/sem-time-table.component';
import { MidtermTimeTableComponent } from './midterm-time-table/midterm-time-table.component';



// const routes: Routes = [
//     {
//       path: 'timetable',
//       component: TimetableComponent
//     },
//     {
//       path:'sem-time-table',
//       component:SemTimeTableComponent
//     }
    
   
//   ];
  const routes: Routes = [
    {
      path: 'timetable', component:TimetableComponent, children: [
        
        {
          path: 'sem-time-table', component: SemTimeTableComponent
        },
       
        {
          path: '', redirectTo: 'sem-time-table', pathMatch: 'full'
        },
        {
          path:'midterm-time-table',component : MidtermTimeTableComponent
        }
        
      ]
    }
  ];





@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })


export class TimetableRoutingModule {

}