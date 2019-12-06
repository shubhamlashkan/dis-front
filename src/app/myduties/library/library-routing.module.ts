
import { Routes, RouterModule } from '@angular/router';
import {LibraryComponent} from './library/library.component'
import { BooksComponent } from './books/books.component';
import { ThesisComponent } from './thesis/thesis.component';
import { NgModule } from "@angular/core";
import { LibraryModule } from './library.module';

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