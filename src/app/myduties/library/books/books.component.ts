import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LibraryService } from 'src/app/API_Service/library.service';
import { addBookData, addBookResponse, subjectCategory, allBooks, librarySettings } from '../bookDataObj';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
 @ViewChild('f') addBookForm:NgForm;


  showId:boolean=false;
  Book:addBookData;
  responseAdd:addBookResponse;
  data:string;  
  books:allBooks[]=[];
  private subject:subjectCategory[]=[];
  private setting:librarySettings[]=[];
  constructor(private service:LibraryService) { }

  ngOnInit() {

    this.showId=false;

   this.service.getSubjectCatergoryAcronymList().subscribe((res:subjectCategory[])=>{
     this.subject = res;
   });

   this.service.getAllBooks().subscribe((bookData:allBooks[])=>{
     this.books = bookData;
   })


  }

  // onSubmit(form:NgForm){
  // console.log(form);
  // }

  onSubmit()
  {
    console.log(this.addBookForm);
    this.Book = new addBookData();
    this.Book.authorName = this.addBookForm.value.addBookData.authorName;
    this.Book.edition = this.addBookForm.value.addBookData.edition;
    this.Book.isbn = this.addBookForm.value.addBookData.isbnNo;
    this.Book.noOfPages = this.addBookForm.value.addBookData.noOfPages;
    this.Book.price = this.addBookForm.value.addBookData.price;
    this.Book.publisherAndPlace = this.addBookForm.value.addBookData.publisher;
    this.Book.purchaseDate= this.addBookForm.value.addBookData.purchasedOn;
    this.Book.remarks = this.addBookForm.value.addBookData.remarks;
    this.Book.subjectCategory = this.addBookForm.value.addBookData.subjectCategory;
    this.Book.title = this.addBookForm.value.addBookData.title;
    this.Book. yearOfPublication = this.addBookForm.value.addBookData.publicationYear;
    console.log(this.service.addBookDetails(this.Book));
    this.service.addBookDetails(this.Book).subscribe((res:addBookResponse)=>{
      this.responseAdd = res;
      console.log(this.responseAdd.bookId);
      this.data =  this.responseAdd.message+ ' '+ this.responseAdd.bookId;
    });
    this.addBookForm.resetForm();
    
  }

  retrieveLibrarySettings()
  {
    this.service.getLibrarySettings().subscribe((libSettings:librarySettings[])=>{
      this.setting = libSettings;
      console.log(this.setting);
    });
  }

  onButtonClicked()
  {
    this.showId=true;
  }

}

