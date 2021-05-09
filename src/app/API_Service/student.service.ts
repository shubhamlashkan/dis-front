import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class StudentService {

  private baseUrl = 'http://localhost:8082/dis';

  constructor(private http: HttpClient) { }

  public login(Student: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}` + `/login`, Student);
  }

  public signup(Student: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}` + `/signup`, Student);
  }
  public forgotPassword(Student: Object): Observable<Object> {
     return this.http.post(`${this.baseUrl}` + `/forgot-password`, Student);
  }

  public resetPassword(Student: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}` + `/reset-password`, Student);
  }

}