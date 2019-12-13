
export class addBookData{

  private authorName: string;
  private edition: string;
  private isbn: string;
  private noOfPages: number;
  private price: number;
  private publisherAndPlace: string;
  private purchaseDate: string;
  private remarks: string;
  private subjectCategory: string;
  private title: string;
  private yearOfPublication: string; 


    constructor($authorName: string, $edition: string, $isbn: string, $noOfPages: number, $price: number, $publisherAndPlace: string, $purchaseDate: string, $remarks: string, $subjectCategory: string, $title: string, $yearOfPublication: string) {
        this.authorName = $authorName;
        this.edition = $edition;
        this.isbn = $isbn;
        this.noOfPages = $noOfPages;
        this.price = $price;
        this.publisherAndPlace = $publisherAndPlace;
        this.purchaseDate = $purchaseDate;
        this.remarks = $remarks;
        this.subjectCategory = $subjectCategory;
        this.title = $title;
        this.yearOfPublication = $yearOfPublication;
    }
    

       
}

export class librarySettings{
  
  private id: string;
  private noOfBooksAllowed: number;
  private penaltyPerDay: number;
  private returnDeadlineDays: number;

	constructor($id: string, $noOfBooksAllowed: number, $penaltyPerDay: number, $returnDeadlineDays: number) {
		this.id = $id;
		this.noOfBooksAllowed = $noOfBooksAllowed;
		this.penaltyPerDay = $penaltyPerDay;
		this.returnDeadlineDays = $returnDeadlineDays;
	}

}

export interface addBookResponse{
    bookId: string;
  message: string;
}

export interface subjectCategory{
  
}


export interface allBooks{
  bookId:string
  authorName: string;
  edition: string
  status: string
  subjectCategory: string;
  title: string;
  entryDate: string;
  isbn: string;
  noOfPages: number;
  price: number;
  publisherAndPlace: string;
  purchaseDate: string;
  remarks: string;
  yearOfPublication: string;
}

export class getBookByBookId{ 
  private bookId:string
  private authorName: string;
  private edition: string
  private status: string
  private subjectCategory: string;
  private title: string;
  private entryDate: string;
  private isbn: string;
  private noOfPages: number;
  private price: number;
  private publisherAndPlace: string;
  private purchaseDate: string;
  private remarks: string;
  private yearOfPublication: string;


	
}


