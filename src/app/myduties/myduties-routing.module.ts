import { Routes, RouterModule } from "@angular/router";
import { MydutiesNavigationComponent } from "./myduties-navigation/myduties-navigation.component";
import { NgModule } from "@angular/core";
import {LibraryRoutingModule} from "./library/library-routing.module";
import { from } from "rxjs";
import { LibraryModule } from "./library/library.module";
import { LibraryComponent } from "./library/library/library.component";
import { TimetableRoutingModule } from "./timetable/timetable-routing.module";




const routes : Routes = [
    { 
        path : 'myduties',
        component : MydutiesNavigationComponent,
    },
    
    
 
  
];
@NgModule(
    {
        imports: [RouterModule.forChild(routes),TimetableRoutingModule],
        exports:[RouterModule]
    }
)
export class MydutiesRoutingModule{

}