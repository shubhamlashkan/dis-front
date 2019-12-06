import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  constructor(private http:HttpClient) { }

  addBookDetails(Book:any){
  return this.http.post('http://localhost:8083/addBook',Book);
  }
}
