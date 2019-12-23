import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {apiSetting} from '../API_Service/apisetting';
import { allThesis, addThesisData, getThesisByThesisId, updateThesisData, course , librarySettingsthesis,checkPenaltyResponseThesis, previousIssueHistoryThesis } from '../myduties/library/thesisDataObj';

import { addBookData, subjectCategory, allBooks, librarySettings, getBookByBookId, updateBookData, issueBookData, checkPenaltyResponse,  previousIssueHistoryBook } from '../myduties/library/bookDataObj';

import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  constructor(private http: HttpClient) {

  }

  apiUrl: string = apiSetting.apiAdministration +'/library';
  
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'my-auth-token',
      'Accept': 'application/json'
    })
  };


  /* Books API Calls*/


  addBookDetails(Book: addBookData) {
    return this.http.post(this.apiUrl + '/addBook', Book, this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  getSubjectCatergoryAcronymList(): Observable<subjectCategory[]> {
    return this.http.get<subjectCategory[]>(this.apiUrl+'/getSubjectCatergoryAcronymList');
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
 
  updateBookByBookId(bookId:string,updatebook:updateBookData){
    return this.http.put(`${this.apiUrl}/updateBook/${bookId}`,updatebook,this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }
 

  removeBookByBookId(bookId: string) {
    return this.http.delete(`${this.apiUrl}/deleteBook/${bookId}`, { responseType: 'text' });
  }
  getNoOfIssues(enrollment: string): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/getNoOfIssues/${enrollment}`).pipe(
      catchError(this.handleError)
    );
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

  getPreviousIssuesByBookId(bookId:string):Observable<previousIssueHistoryBook[]>{
    return this.http.get<previousIssueHistoryBook[]>(`${this.apiUrl}/getPreviousIssuesByBookId/${bookId}`);
  }

  getPreviousIssuesByThesisId(thesisId:number):Observable<previousIssueHistoryThesis[]>{
    return this.http.get<previousIssueHistoryThesis[]>(`${this.apiUrl}/getPreviousIssuesByThesisId/${thesisId}`);
  }

  getPreviousIssuesByUsername(username:string):Observable<previousIssueHistoryBook[]>{
    return this.http.get<previousIssueHistoryBook[]>(`${this.apiUrl}/getPreviousIssuesByUsername/${username}`);
  }


  /* Thesis API Calls */

  addThesisDetails(Thesis:addThesisData){
    return this.http.post(this.apiUrl+'/addThesis',Thesis,this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  getLibrarySettingsthesis(): Observable<librarySettingsthesis[]> {
    return this.http.get<librarySettingsthesis[]>(this.apiUrl + '/getLibrarySettings');
  }
  
  getAllThesis():Observable<allThesis[]>{ 
    return this.http.get<allThesis[]> (this.apiUrl+'/getAllThesis');

  }
  

  getThesisByThesisId(thesisId:number): Observable<getThesisByThesisId[]>{
    return this.http.get<getThesisByThesisId[]>(`${this.apiUrl}/getThesisByThesisId/${thesisId}`).pipe(
      catchError(this.handleError)
    );
  }

  updateThesisByThesisId(thesisId:number,updatethesis:updateThesisData){
    return this.http.put(`${this.apiUrl}/updateThesis/${thesisId}`,updatethesis,this.httpOptions).pipe(
      catchError(this.handleError)
    );

  }
  removeThesisByThesisId(thesisId:number){
    return this.http.delete(`${this.apiUrl}/deleteThesis/${thesisId}`,{responseType: 'text'});
  }

  
 getCourse() : Observable<course[]>{
   return this.http.get<course[]>(`${this.apiUrl}/getCourseList`);

 }
 getNoOfIssuesthesis(enrollments:string): Observable<number> {
  return this.http.get<number>(`${this.apiUrl}/getNoOfIssues/${enrollments}`).pipe(
    catchError(this.handleError)
  );
}
getIssueThesisInfo(thesisId:number): Observable<checkPenaltyResponseThesis[]>{
  return this.http.get<checkPenaltyResponseThesis[]>(`${this.apiUrl}/getIssuedThesisInfo/${thesisId}`).pipe(
    catchError(this.handleError)
  );
}

 
  getThesisByTitle(title:string):Observable<getThesisByThesisId[]>{
    return this.http.get<getThesisByThesisId[]>(`${this.apiUrl}/getThesisByTitle/${title}`);
  }
  getThesisByCourse(course:string):Observable<getThesisByThesisId[]>{
    return this.http.get<getThesisByThesisId[]>(`${this.apiUrl}/getThesisByCourse/${course}`);
  }
  getThesisBySubmittedBy(submittedBy:string):Observable<getThesisByThesisId[]>{
    return this.http.get<getThesisByThesisId[]>(`${this.apiUrl}/getThesisBySubmittedBy/${submittedBy}`);
  }
  getThesisByGuidedBy(guidedBy:string):Observable<getThesisByThesisId[]>{
    return this.http.get<getThesisByThesisId[]>(`${this.apiUrl}/getThesisByGuidedBy/${guidedBy}`);
  }

  
  returnThesis(thesisId:number):Observable<any>{
    return this.http.put<any>(`${this.apiUrl}/returnThesis/${thesisId}`,{responseType:'text'}).pipe(
      catchError(this.handleError)
    );
  }



  /* Function to handle Error  */
  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      if(error.status==404){
        errorMessage = `${error.error.message}`;
      }
      else if(error.status==500){
        errorMessage = `${error.error.message}`;
      }
      else 
      {
        errorMessage = `${error.error.message}`;
      }
      // server-side error
     // errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

}
