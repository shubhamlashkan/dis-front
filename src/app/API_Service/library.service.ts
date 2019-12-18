import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { addBookData, subjectCategory, allBooks, librarySettings, getBookByBookId, updateBookData} from '../myduties/library/bookDataObj';
import { Observable } from 'rxjs';
import { allThesis, addThesisData, getThesisByThesisId, updateThesisData } from '../myduties/library/thesisDataObj';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  constructor(private http:HttpClient) { 
    
  }

  apiUrl:string = 'http://localhost:8083/library';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization':'my-auth-token',
      'Accept': 'application/json'
    })
  };

  addBookDetails(Book:addBookData){
  return this.http.post(this.apiUrl+'/addBook',Book,this.httpOptions);
  }

  getSubjectCatergoryAcronymList():Observable<subjectCategory[]>{
    return this.http.get<subjectCategory[]>(this.apiUrl+'/getSubjectCatergoryAcronymList');
  }

  getAllBooks():Observable<allBooks[]>{
    return this.http.get<allBooks[]>(this.apiUrl+'/getAllBooks');
  }

  getLibrarySettings():Observable<librarySettings[]>{
    return this.http.get<librarySettings[]>(this.apiUrl+'/getLibrarySettings');
  }
  updateLibrarySettings(settings:librarySettings){
    return this.http.put(this.apiUrl+'/updateLibrarySettings',settings,{responseType: 'text'});
  }

  getBookByBookId(bookId:string):Observable<getBookByBookId[]>{
    return this.http.get<getBookByBookId[]>(`${this.apiUrl}/getBookByBookId/${bookId}`);
  }
  getAllThesis():Observable<allThesis[]>{ 
    return this.http.get<allThesis[]> ('http://localhost:8083/library/getAllThesis');

  }
  addThesisDetails(Thesis:addThesisData){
    return this.http.post('http://localhost:8083/library/addThesis',Thesis,this.httpOptions);
  }



  updateBookByBookId(bookId:string,updatebook:updateBookData){
    return this.http.put(`${this.apiUrl}/updateBook/${bookId}`,updatebook,this.httpOptions);
  }

  removeBookByBookId(bookId:string){
    return this.http.delete(`${this.apiUrl}/deleteBook/${bookId}`,{responseType: 'text'});
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
}
