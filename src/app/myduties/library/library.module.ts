import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibraryComponent } from './library/library.component';
import { BooksComponent } from './books/books.component';
import { ThesisComponent } from './thesis/thesis.component';
import { LibraryRoutingModule } from './library-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [
    CommonModule,
    LibraryRoutingModule,FormsModule,HttpClientModule
    
  ],
  declarations: [LibraryComponent, BooksComponent, ThesisComponent],
  exports : [LibraryComponent]
})
export class LibraryModule { }
