import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { addBookData } from '../myduties/library/bookDataObj';

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
}
