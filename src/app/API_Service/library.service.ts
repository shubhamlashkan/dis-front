import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { addBookData, subjectCategory, allBooks, librarySettings, getBookByBookId, updateBookData, issueBookData, checkPenaltyResponse } from '../myduties/library/bookDataObj';
import { Observable , throwError} from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  constructor(private http: HttpClient) {

  }

  apiUrl: string = 'http://localhost:8083/library';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'my-auth-token',
      'Accept': 'application/json'
    })
  };

  addBookDetails(Book: addBookData) {
    return this.http.post(this.apiUrl + '/addBook', Book, this.httpOptions);
  }

  getSubjectCatergoryAcronymList(): Observable<subjectCategory[]> {
    return this.http.get<subjectCategory[]>(this.apiUrl + '/getSubjectCatergoryAcronymList');
  }

  getAllBooks(): Observable<allBooks[]> {
    return this.http.get<allBooks[]>(this.apiUrl + '/getAllBooks');
  }

  getLibrarySettings(): Observable<librarySettings[]> {
    return this.http.get<librarySettings[]>(this.apiUrl + '/getLibrarySettings');
  }
  updateLibrarySettings(settings: librarySettings) {
    return this.http.put(this.apiUrl + '/updateLibrarySettings', settings, { responseType: 'text' });
  }

  getBookByBookId(bookId: string): Observable<getBookByBookId[]> {
    return this.http.get<getBookByBookId[]>(`${this.apiUrl}/getBookByBookId/${bookId}`);
  }
  updateBookByBookId(bookId: string, updatebook: updateBookData) {
    return this.http.put(`${this.apiUrl}/updateBook/${bookId}`, updatebook, this.httpOptions);
  }

  removeBookByBookId(bookId: string) {
    return this.http.delete(`${this.apiUrl}/deleteBook/${bookId}`, { responseType: 'text' });
  }
  getNoOfIssues(enrollment: string): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/getNoOfIssues/${enrollment}`);
  }

  issueBook(issueBook: issueBookData) {
    return this.http.put(`${this.apiUrl}/issue`, issueBook, { responseType: 'text' }) .pipe(
      catchError(this.handleError)
    );
  }

  getIssuedBookInfo(bookId: string): Observable<checkPenaltyResponse[]> {
    return this.http.get<checkPenaltyResponse[]>(`${this.apiUrl}/getIssuedBookInfo/${bookId}`) .pipe(
      catchError(this.handleError)
    );
  }

  getBookByTitle(title:string):Observable<getBookByBookId[]>{
    return this.http.get<getBookByBookId[]>(`${this.apiUrl}/getBookByTitle/${title}`);
  }
  getBookByAuthor(author:string):Observable<getBookByBookId[]>{
    return this.http.get<getBookByBookId[]>(`${this.apiUrl}/getBookByAuthorName/${author}`);
  }

  returnBook(bookId:string):Observable<string>{
    return this.http.put<string>(`${this.apiUrl}/returnBook/${bookId}`,{responseType:'text'});
  }

  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      if(error.status==404){
        errorMessage = `${error.error.message}`;
      }
      // server-side error
     // errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

}
