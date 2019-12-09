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