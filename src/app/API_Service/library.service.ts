import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {apiSetting} from '../API_Service/apisetting';
import { allThesis, addThesisData, getThesisByThesisId, updateThesisData, course , librarySettingsthesis,checkPenaltyResponseThesis } from '../myduties/library/thesisDataObj';

import { addBookData, subjectCategory, allBooks, librarySettings, getBookByBookId, updateBookData, issueBookData, checkPenaltyResponse } from '../myduties/library/bookDataObj';

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

  addBookDetails(Book: addBookData) {
    return this.http.post(this.apiUrl + '/addBook', Book, this.httpOptions);
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

  getLibrarySettingsthesis(): Observable<librarySettingsthesis[]> {
    return this.http.get<librarySettingsthesis[]>(this.apiUrl + '/getLibrarySettings');
  }
  updateLibrarySettings(settings: librarySettings) {
    return this.http.put(this.apiUrl + '/updateLibrarySettings', settings, { responseType: 'text' });
  }

  getBookByBookId(bookId: string): Observable<getBookByBookId[]> {
    return this.http.get<getBookByBookId[]>(`${this.apiUrl}/getBookByBookId/${bookId}`);
  }
  getAllThesis():Observable<allThesis[]>{ 
    return this.http.get<allThesis[]> (this.apiUrl+'/getAllThesis');

  }
  addThesisDetails(Thesis:addThesisData){
    return this.http.post(this.apiUrl+'/addThesis',Thesis,this.httpOptions);
  }



  updateBookByBookId(bookId:string,updatebook:updateBookData){
    return this.http.put(`${this.apiUrl}/updateBook/${bookId}`,updatebook,this.httpOptions);
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
  getThesisByThesisId(thesisId:number): Observable<getThesisByThesisId[]>{
    return this.http.get<getThesisByThesisId[]>(`${this.apiUrl}/getThesisByThesisId/${thesisId}`);
  }

  updateThesisByThesisId(thesisId:number,updatethesis:updateThesisData){
    return this.http.put(`${this.apiUrl}/updateThesis/${thesisId}`,updatethesis,this.httpOptions);

  }
  removeThesisByThesisId(thesisId:number){
    return this.http.delete(`${this.apiUrl}/deleteThesis/${thesisId}`,{responseType: 'text'});
  }

  getIssuedBookInfo(bookId: string): Observable<checkPenaltyResponse[]> {
    return this.http.get<checkPenaltyResponse[]>(`${this.apiUrl}/getIssuedBookInfo/${bookId}`) .pipe(
      catchError(this.handleError)
    );
  }
 getCourse() : Observable<course[]>{
   return this.http.get<course[]>(`${this.apiUrl}/getCourseList`);

 }
 getNoOfIssuesthesis(enrollments:string): Observable<number> {
  return this.http.get<number>(`${this.apiUrl}/getNoOfIssues/${enrollments}`);
}
getIssueThesisInfo(thesisId:number): Observable<checkPenaltyResponseThesis[]>{
  return this.http.get<checkPenaltyResponseThesis[]>(`${this.apiUrl}/getIssuedThesisInfo/${thesisId}`);
}

  getBookByTitle(title:string):Observable<getBookByBookId[]>{
    return this.http.get<getBookByBookId[]>(`${this.apiUrl}/getBookByTitle/${title}`);
  }
  getBookByAuthor(author:string):Observable<getBookByBookId[]>{
    return this.http.get<getBookByBookId[]>(`${this.apiUrl}/getBookByAuthorName/${author}`);
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
