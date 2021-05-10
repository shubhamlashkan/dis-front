import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentSignUpService {

  private baseUrl = 'http://13.126.18.214:8080/dis';

  constructor(private http: HttpClient) { }

  public createStudentSignUp(StudentSignUp: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}` + `/signup`, StudentSignUp);
  }

}