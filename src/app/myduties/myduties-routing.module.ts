import { Routes, RouterModule } from "@angular/router";
import { MydutiesNavigationComponent } from "./myduties-navigation/myduties-navigation.component";
import { NgModule } from "@angular/core";
import {LibraryRoutingModule} from "./library/library-routing.module";
import { from } from "rxjs";
import { LibraryModule } from "./library/library.module";




const routes : Routes = [
    { 
        path : 'mydutiesnavigation',
        component : MydutiesNavigationComponent
    },
 
  
];
@NgModule(
    {
        imports: [RouterModule.forChild(routes),LibraryModule],
        exports:[RouterModule]
    }
)
export class MydutiesRoutingModule{

}