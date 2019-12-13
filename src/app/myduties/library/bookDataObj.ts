
export class addBookData{
        authorName: string;
        edition: string;
        isbn: string;
        noOfPages: number;
        price: number;
        publisherAndPlace: string;
        purchaseDate: string;
        remarks: string;
        subjectCategory: string;
        title: string;
        yearOfPublication: string;
      
}

export interface addBookResponse{
    bookId: string;
  message: string;
}

export interface subjectCategory{
  
}

export interface allBooks{
  authorName: string;
  edition: string
  status: string
  subjectCategory: string;
  title: string;
}

export interface librarySettings{
  id: string;
  noOfBooksAllowed: number;
  penaltyPerDay: number;
  returnDeadlineDays: number;
  
}
