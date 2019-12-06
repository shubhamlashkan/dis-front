import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {
  private baseUrl = 'http://localhost:8080/dis/administration'
  constructor(private http : HttpClient) { }
  getBooks():Observable<any>{
    return this.http.get(`${this.baseUrl}/getBookList`)
  }
  getBooksCount():Observable<any>{
    return this.http.get(`${this.baseUrl}/getBookCount`);
  }
  editBookDetails(info):Observable<any>{
    return this.http.put(`${this.baseUrl}/editBook`,info);
  }
  addBookDetails(info):Observable<any>{
    return this.http.post(`${this.baseUrl}/addBook`, info)
  }
  getThesis():Observable<any>{
    return this.http.get('http://localhost:8080/dis/user/showResearchPaper')
  }
  getThesisCount():Observable<any>{
    return this.http.get(`${this.baseUrl}/getThesisBECount`);
  }
  editThesisDetails(info):Observable<any>{
    return this.http.put(`${this.baseUrl}/addThesisBE`,info);
  }
  addThesisDetails(info):Observable<any>{
    return this.http.post(`${this.baseUrl}/editThesisBE`, info)
  }
}
