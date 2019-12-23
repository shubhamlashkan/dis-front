import { Component, OnInit } from '@angular/core';
import { allBooks } from 'src/app/myduties/library/bookDataObj';
import { LibraryService } from 'src/app/API_Service/library.service';
import { allThesis } from 'src/app/myduties/library/thesisDataObj';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit {


  books: allBooks[] = [];
  thesis : allThesis[] = [];
  showBook:boolean=true;
  constructor(private service: LibraryService) { }

  ngOnInit() {
     /* Get All Books */
     this.service.getAllBooks().subscribe((bookData: allBooks[]) => {
      this.books = bookData;
      //console.log(this.books);
    });
  }


  getBooks(){
   this.showBook = true;
    this.service.getAllBooks().subscribe((bookData: allBooks[]) => {
      this.books = bookData;
      //console.log(this.books);
    });
  }

  getThesis(){
    this.showBook = false;
    this.service.getAllThesis().subscribe((thesisData:allThesis[])=>{
      this.thesis = thesisData;
      //console.log(this.thesis);
    });
  }


}
