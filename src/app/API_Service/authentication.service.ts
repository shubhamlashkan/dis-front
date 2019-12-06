import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {

  private baseUrl = 'http://localhost:8082/dis';

  constructor(private http: HttpClient) { }

  public login(Authentication: Object): Observable<any>{
    return this.http.post(`${this.baseUrl}` + `/login`, Authentication, { responseType: 'text' });
  }

  public signup(Authentication: Object): Observable<any>{
    return this.http.post(`${this.baseUrl}` + `/signup`, Authentication, { responseType: 'text' });
  }
  
  public forgotPassword(Authentication: Object): Observable<any> {
     return this.http.post(`${this.baseUrl}` + `/forgot-password`, Authentication);
  }

  public resetPassword(Authentication: Object): Observable<any> {
    return this.http.post(`${this.baseUrl}` + `/reset-password`, Authentication);
  }

}