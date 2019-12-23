
import { Routes, RouterModule } from '@angular/router';
import {LibraryComponent} from './library/library.component'
import { BooksComponent } from './books/books.component';
import { ThesisComponent } from './thesis/thesis.component';
import { NgModule } from "@angular/core";
import { LibraryModule } from './library.module';
import { ResearchComponent } from './research/research.component';

const routes : Routes = [
  
    {
        path: "library",
        component:LibraryComponent
    },
    {
        path: "books",
        component:BooksComponent
    },
    {
        path:"thesis",
        component:ThesisComponent
    },
    {
        path:"history",
        component:ResearchComponent
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