export class addBookData {

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

export class librarySettings {

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


export interface addBookResponse {
  bookId: string;
  message: string;
}

export interface subjectCategory {

}


export interface allBooks {
  bookId: string
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

export interface getBookByBookId {
  bookId: string
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


export class updateBookData {
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

export interface updateBookResponse {
  bookId: string;
  message: string;
}

export class removeBookData {
  private bookId: string;

  constructor($bookid: string) {
    this.bookId = $bookid;
  }

}

export class checkLimitData {
  enrollment: string;
}

export class issueBookData {
  private bookId: string;
  private thesisId: number;
  private username: string;

  constructor($bookId: string, $thesisId: number, $username: string) {
    this.bookId = $bookId;
    this.thesisId = $thesisId;
    this.username = $username;
  }

}

export class checkPenaltyData {
  bookId: string;
}

export interface checkPenaltyResponse {
  penalty: string;
  username: string;
}
