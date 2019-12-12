import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { addBookData, subjectCategory, allBooks, librarySettings } from '../myduties/library/bookDataObj';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  constructor(private http:HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization':'my-auth-token',
      'Accept': 'application/json'
    })
  };

  addBookDetails(Book:addBookData){
  return this.http.post('http://localhost:8083/library/addBook',Book,this.httpOptions);
  }

  getSubjectCatergoryAcronymList():Observable<subjectCategory[]>{
    return this.http.get<subjectCategory[]>('http://localhost:8083/library/getSubjectCatergoryAcronymList');
  }

  getAllBooks():Observable<allBooks[]>{
    return this.http.get<allBooks[]>('http://localhost:8083/library/getAllBooks');
  }

  getLibrarySettings():Observable<librarySettings[]>{
    return this.http.get<librarySettings[]>('http://localhost:8083/library/getLibrarySettings');
  }
}
