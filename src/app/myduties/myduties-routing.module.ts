import { Routes, RouterModule } from "@angular/router";
import { MydutiesNavigationComponent } from "./myduties-navigation/myduties-navigation.component";
import { NgModule } from "@angular/core";
import {LibraryRoutingModule} from "./library/library-routing.module";
import { from } from "rxjs";
import { LibraryModule } from "./library/library.module";
import { LibraryComponent } from "./library/library/library.component";
import { TimetableRoutingModule } from "./timetable/timetable-routing.module";
import { MydutiesComponent } from "./myduties/myduties.component";
import { MytaskComponent } from "./mytask/mytask.component";
import { ProjectguideallotmentComponent } from "./projectguideallotment/projectguideallotment.component";
import { ExpertlectureComponent } from "./expertlecture/expertlecture.component";
import { IndustryvisitComponent } from "./industryvisit/industryvisit.component";
import { MescholarshipComponent } from "./mescholarship/mescholarship.component";




// const routes : Routes = [
    
//     {
//         path : 'library',
//         component : LibraryComponent
//     }
    
 
  
// ];

const routes: Routes = [
    // {
    //   path: '', component: MydutiesComponent, children: [
        
    //     { path: 'library', loadChildren : './library/library.module#LibraryModule'},
    //     {
    //       path: '', redirectTo: 'library', pathMatch: 'full'
    //     },
        
          
    //   ]
      
    // }
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
