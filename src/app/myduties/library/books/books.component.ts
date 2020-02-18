import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LibraryService } from '../library.service';
import { addBookData, addBookResponse, subjectCategory, allBooks, librarySettings, getBookByBookId, updateBookData, updateBookResponse, removeBookData, checkLimitData, issueBookData, checkPenaltyResponse, checkPenaltyData } from '../bookDataObj';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  /* Forms Declared */
  @ViewChild('f') addBookForm: NgForm;
  @ViewChild('g') updateBookForm: NgForm;
  @ViewChild('h') removeBookForm: NgForm;
  @ViewChild('i') checkLimitForm: NgForm;
  @ViewChild('j') issueBookForm: NgForm;
  @ViewChild('k') checkPenaltyForm: NgForm;
  
  /* Variable Decalred to send data and receive response of API */
  removeButton: boolean = false;
  updateButton: boolean = false;
  onSuccessfulUpdate:boolean = false;
  showId: boolean = false;
  Book: addBookData;
  responseAdd: addBookResponse;
  data: string;
  msg: string;
  books: allBooks[] = [];
  bookById: getBookByBookId[] = [];
  subject: subjectCategory[] = [];
  private setting: librarySettings[] = [];
  updatedata: updateBookData;
  responseUpdate: updateBookResponse;
  removeData: removeBookData;
  removeRes: string;
  checkIssue: checkLimitData;
  currentIssue: number;
  booksAllowed: number;
  allowIssueRequest: boolean = false;
  issueto: string;
  issueData: issueBookData;
  issueRes: string;
  penaltyRes: checkPenaltyResponse[];
  checkPenalty: checkPenaltyData;
  error: string=null;
  showPenalty: boolean = false;
  searchBy:number;
  searchTerm:string=null;
  showSearchedRecord:boolean=false;
  searchedBooks:getBookByBookId[]=[];
  returnBookId:string;
  returnBookResponse:string;
  returnSuccess:boolean = false;
  bookIssued:boolean = false;
  errorMsg:string=null;
  showError:boolean = false;
 
  constructor(private service: LibraryService) { }

  ngOnInit() {
    this.searchTerm = null;
    this.showId = false;
    this.updateButton = false;
    this.removeButton = false;
    this.bookIssued = false;
    this.returnSuccess = false;
    this.showError = false;
    this.searchBy=1;
    /* Get Subject Acronym List */
    this.service.getSubjectCatergoryAcronymList().subscribe((res: subjectCategory[]) => {
      this.subject = res;
     // console.log(this.subject);
    });

    /* Get All Books */
    this.service.getAllBooks().subscribe((bookData: allBooks[]) => {
      this.books = bookData;
      //console.log(this.books);
    });
    this.allowIssueRequest=false;
    this.onSuccessfulUpdate=false;
    this.showPenalty=false;
    this.returnSuccess = false;
    this.checkLimitForm.resetForm(); 
    this.checkPenaltyForm.resetForm();
    this.addBookForm.resetForm();
  }

  // onSubmit(form:NgForm){
  // console.log(form);
  // }


  /* Add Book  */
  onSubmit() {
    //console.log(this.addBookForm);
    this.Book = new addBookData(this.addBookForm.value.addBookData.authorName, this.addBookForm.value.addBookData.edition,
      this.addBookForm.value.addBookData.isbnNo, this.addBookForm.value.addBookData.noOfPages, this.addBookForm.value.addBookData.price,
      this.addBookForm.value.addBookData.publisher, this.addBookForm.value.addBookData.purchasedOn, this.addBookForm.value.addBookData.remarks,
      this.addBookForm.value.addBookData.subjectCategory, this.addBookForm.value.addBookData.title, this.addBookForm.value.addBookData.publicationYear);
    // this.Book.authorName = this.addBookForm.value.addBookData.authorName;
    // this.Book.edition = this.addBookForm.value.addBookData.edition;
    // this.Book.isbn = this.addBookForm.value.addBookData.isbnNo;
    // this.Book.noOfPages = this.addBookForm.value.addBookData.noOfPages;
    // this.Book.price = this.addBookForm.value.addBookData.price;
    // this.Book.publisherAndPlace = this.addBookForm.value.addBookData.publisher;
    // this.Book.purchaseDate= this.addBookForm.value.addBookData.purchasedOn;
    // this.Book.remarks = this.addBookForm.value.addBookData.remarks;
    // this.Book.subjectCategory = this.addBookForm.value.addBookData.subjectCategory;
    // this.Book.title = this.addBookForm.value.addBookData.title;
    // this.Book. yearOfPublication = this.addBookForm.value.addBookData.publicationYear;
    //console.log(this.service.addBookDetails(this.Book));
    this.service.addBookDetails(this.Book).subscribe((res: addBookResponse) => {
      this.responseAdd = res;
     // console.log(this.Book);
      // console.log(this.responseAdd.bookId);
      this.data = this.responseAdd.message + ' ' + this.responseAdd.bookId;
      this.showId = true;
      this.showError = false;
    });
    this.addBookForm.resetForm();

  }


  /* Get Library Instruction */
  retrieveLibrarySettings() {
    this.service.getLibrarySettings().subscribe((libSettings: librarySettings[]) => {
      this.setting = libSettings;
      // console.log(this.setting);
    });
  }

  /* After Book Added */
  onBookAdded() {
    this.showId = true;
  }


  /* On Update Button Click */
  onUpdateButtonClick() {
    this.updateButton = true;
  }

  /* Get book b Book Id */ 
  getBookByBookId(bookId: string) {
    this.service.getBookByBookId(bookId).subscribe((bookByIdData: getBookByBookId[]) => {
      this.bookById = bookByIdData;
      //console.log(this.bookById);
    });
  }

  /* Update Book Data */
  update() {
    if (this.updateButton) {
      this.updatedata = new updateBookData(this.updateBookForm.value.updateBookData.authorName,
        this.updateBookForm.value.updateBookData.edition,
        this.updateBookForm.value.updateBookData.isbnNo,
        this.updateBookForm.value.updateBookData.noOfPages,
        this.updateBookForm.value.updateBookData.price,
        this.updateBookForm.value.updateBookData.publisher,
        this.updateBookForm.value.updateBookData.purchasedOn,
        this.updateBookForm.value.updateBookData.remarks,
        this.updateBookForm.value.updateBookData.subjectCategory,
        this.updateBookForm.value.updateBookData.title,
        this.updateBookForm.value.updateBookData.publicationYear);
      //console.log(this.updatedata);
      this.service.updateBookByBookId(this.updateBookForm.value.updateBookData.bookId, this.updatedata).subscribe((res: updateBookResponse) => {
        this.responseUpdate = res;
        this.msg = this.responseUpdate.message + this.responseUpdate.bookId;
        //console.log(this.responseUpdate);
      });
      this.updateButton = false;
      this.onSuccessfulUpdate = true;
    }
  }


  /* Remove Book If its status is available */
  remove() {
    //console.log(this.removeBookForm.value.removeBookData.bookId);
    this.service.removeBookByBookId(this.removeBookForm.value.removeBookData.bookId).subscribe((res: string) => {
      this.removeRes = res;
      //console.log(res);
      this.removeButton = true;
    });
  }


  /* Check If book issue limit is not exceeded */
  checkLimit() {
    this.showError = false;
    this.checkIssue = new checkLimitData();
    this.checkIssue.enrollment = this.checkLimitForm.value.checkLimitData.enrollment;
    //console.log(this.checkIssue.enrollment);
    this.service.getNoOfIssues(this.checkIssue.enrollment).subscribe((res: number) => {
      this.currentIssue = res;
      //console.log(this.currentIssue);
      if (this.currentIssue < this.checkLimitForm.value.checkLimitData.booksAllowed) {
        this.allowIssueRequest = true;
        this.issueto = this.checkIssue.enrollment;
      }
      else {
        this.allowIssueRequest = false;
      }
    });
  }

  /* Issue Book */
  issueBook() {
    this.issueData = new issueBookData(this.issueBookForm.value.issueBookData.bookId, null,
      this.issueto);
    //console.log(this.issueData);
    this.service.issueBook(this.issueData).subscribe((res: string) => {
      this.issueRes = res;
      this.bookIssued = true;
      this.showError = false;
      //  console.log(this.issueRes);
    },((error)=>{
      this.showError = true;
      this.errorMsg = "Username Not found";
    }));
    this.allowIssueRequest=false;
  }

  /* Get Penalty if any */
  getPenalty() {
    this.showError = false;
    this.checkPenalty = new checkPenaltyData();
    this.checkPenalty.bookId = this.checkPenaltyForm.value.checkPenaltyData.bookId;
    this.service.getIssuedBookInfo(this.checkPenalty.bookId).subscribe((res: checkPenaltyResponse[]) => {
      this.penaltyRes = res;
      this.showPenalty = true;
      this.returnBookId = this.checkPenalty.bookId;
      //console.log(this.penaltyRes);
    },((error)=>{
      this.showError = true;
      this.errorMsg = error;
    }));
  }

  /* Return Book */
  returnBook(){
    //console.log(this.returnBookId)
    this.returnSuccess = true;
    this.service.returnBook(this.returnBookId).subscribe((res:string)=>{
      this.returnBookResponse = res;
      this.returnSuccess = true;
      //console.log(this.returnBookResponse);
    });
  }

  /* Search By Id, Title, Author Selector */
  onSelect(event:any) { 
  //   console.log("Selected Option:  "+optionId);
  //  // this.selected = null;
  //  for ( this.i = 0; this.i < this.options.length; this.i++){
  //   console.log("At i= "+this.i);
  //   console.log("option id:"+this.options[this.i].id);
  //   console.log("option Value: "+this.options[this.i].name);
  //  }
  //  console.log("All options printed ");
  //   for ( this.i = 0; this.i < this.options.length; this.i++)
  //   {
  //     console.log("i: "+this.i);
  //     console.log("Current option id:"+this.options[this.i].id);
  //     console.log("Current option Value: "+this.options[this.i].name);
  //     if (this.options[this.i].id == optionId) 
  //     {
  //       this.selected = this.options[this.i];     
  //       this.searchBy = this.options[this.i].id;
  //       console.log("Search By:  "+this.options[this.i].name);
  //       console.log("found at  = "+this.i);
  //       break;
  //     }
  //   }

this.searchBy = event.target.value;
//console.log(this.searchBy);

}

  /* Search By ID,Title,Author  */
  findBy(typedValue)
  {
   
    this.searchTerm = typedValue;
    if(this.searchBy==1)
    {
      //  console.log(this.searchTerm);
        this.service.getBookByBookId(this.searchTerm).subscribe((bookByIdData: getBookByBookId[])=>{
          this.searchedBooks= bookByIdData;
          this.showError = false;
          this.showSearchedRecord = true;
        //  console.log(this.searchedBooks);
        },((error)=> {this.errorMsg = error;
        this.showError=true;
      this.showSearchedRecord= false;}));
    }
    if(this.searchBy==2)
    {
      //console.log(this.searchTerm);
        this.service.getBookByTitle(this.searchTerm).subscribe((bookByIdData: getBookByBookId[])=>{
          this.searchedBooks= bookByIdData;
          this.showError = false;
          this.showSearchedRecord = true;
          //  console.log(this.searchedBooks);
        },((error)=> {this.errorMsg = error;
          this.showError=true;
        this.showSearchedRecord= false;}));
        
    }
    if(this.searchBy==3)
    {
      //console.log(this.searchTerm);
      this.service.getBookByAuthor(this.searchTerm).subscribe((bookByIdData: getBookByBookId[])=>{
        this.searchedBooks= bookByIdData;
        this.showError = false;
        this.showSearchedRecord = true;
        //  console.log(this.searchedBooks);
      },((error)=> {this.errorMsg = error;
        this.showError=true;
      this.showSearchedRecord= false;}));
      
    }
  }

}


