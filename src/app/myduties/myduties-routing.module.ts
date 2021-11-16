import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import {LibraryRoutingModule} from "./library/library-routing.module";
import { TimetableRoutingModule } from "./timetable/timetable-routing.module";

import { MytaskComponent } from "./mytask/mytask.component";
import { ProjectguideallotmentComponent } from "./projectguideallotment/projectguideallotment.component";
import { ExpertlectureComponent } from "./expertlecture/expertlecture.component";
import { IndustryvisitComponent } from "./industryvisit/industryvisit.component";
import { MescholarshipComponent } from "./mescholarship/mescholarship.component";
import { CourseSchemeModuleComponent } from "./course-scheme-module/course-scheme-module.component";
import { SystemAdminComponent } from "./system-admin/system-admin.component";



// const routes : Routes = [
    
//     {
//         path : 'library',
//         component : LibraryComponent
//     }
    
 
  
// ];

import { CourseListComponent } from "./course-scheme-module/course-list/course-list.component";
const routes: Routes = [

     {
        path: 'mytask', component:MytaskComponent
      }, 
      {
        path:'',component:MytaskComponent
      },
      {
        path: 'projectguideallotment',component: ProjectguideallotmentComponent
      },
      {
        path: 'expertlecture',component: ExpertlectureComponent
      },
      {
        path: 'industryvisit',component: IndustryvisitComponent
      },
      {
        path: 'mescholarship',component: MescholarshipComponent
      },
      {
        path: 'coursescheme', component: CourseSchemeModuleComponent
      },
      {
        path: 'coursescheme/:schemename', component: CourseListComponent
      },
      {
        path: 'systemadmin', component: SystemAdminComponent
      }
  ];
  
@NgModule(
    {
        imports: [RouterModule.forChild(routes),TimetableRoutingModule,LibraryRoutingModule],
        exports:[RouterModule]
    }
)
export class MydutiesRoutingModule{

}
