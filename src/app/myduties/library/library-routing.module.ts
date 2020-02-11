
import { Routes, RouterModule } from '@angular/router';
import {LibraryComponent} from './library/library.component'
import { BooksComponent } from './books/books.component';
import { ThesisComponent } from './thesis/thesis.component';
import { NgModule } from "@angular/core";
import { LibraryModule } from './library.module';
import { ResearchComponent } from './research/research.component';
import { MydutiesNavigationComponent } from '../myduties-navigation/myduties-navigation.component';

// const routes : Routes = [
  
    
      
//             {
//                 path: "library",
//                 component:LibraryComponent
//             },
//     {
//         path: "books",
//         component:BooksComponent
//     },
//     {
//         path:"thesis",
//         component:ThesisComponent
//     },
//     {
//         path:"history",
//         component:ResearchComponent
//     }

    
// ];
const routes: Routes = [
    {
      path: 'library', component:LibraryComponent, children: [
        
        {
          path: 'books', component: BooksComponent
        },
        {
          path: 'thesis', component: ThesisComponent
        },
        {
          path: '', redirectTo: 'library', pathMatch: 'full'
        },
        
      ]
    }
  ];
@NgModule(
    {
        imports: [RouterModule.forChild(routes)],
        exports:[RouterModule]
    }
)
export class LibraryRoutingModule{
    
}