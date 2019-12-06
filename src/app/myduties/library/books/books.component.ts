import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LibraryService } from 'src/app/API_Service/library.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
 @ViewChild('f') addBookForm:NgForm;

  Book={
    isbnNo:'',
    authorName:'',
    title:'',
    publisher:'',
    edition:'',
    publicationYear:'',
    price:'',
    noOfPages:'',
    subjectCategory:'',
    purchasedOn:'',
    remarks:''
  }


  constructor(private service:LibraryService) { }

  ngOnInit() {
  }

  // onSubmit(form:NgForm){
  // console.log(form);
  // }

  onSubmit()
  {
    console.log(this.addBookForm);
    this.Book.authorName = this.addBookForm.value.addBookData.authorName;
    this.Book.edition = this.addBookForm.value.addBookData.edition;
    this.Book.isbnNo = this.addBookForm.value.addBookData.isbnNo;
    this.Book.noOfPages = this.addBookForm.value.addBookData.noOfPages;
    this.Book.price = this.addBookForm.value.addBookData.price;
    this.Book.publisher = this.addBookForm.value.addBookData.publisher;
    this.Book.purchasedOn= this.addBookForm.value.addBookData.purchasedOn;
    this.Book.remarks = this.addBookForm.value.addBookData.remarks;
    this.Book.subjectCategory = this.addBookForm.value.addBookData.subjectCategory;
    this.Book.title = this.addBookForm.value.addBookData.title;
    this.Book.publicationYear = this.addBookForm.value.addBookData.publicationYear;
    console.log(this.service.addBookDetails(this.Book));
    this.service.addBookDetails(this.Book).subscribe;
    
  }


}

