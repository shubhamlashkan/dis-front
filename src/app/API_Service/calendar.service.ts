import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  private baseUrl = 'http://localhost:8080/dis/user/calendar';

  constructor(private http: HttpClient) { }

  getMyEvents(pid: String): Observable<any> {
    return this.http.get(`${this.baseUrl}/getMyEvents?id=` + pid);
  }

  addEvent(event: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/addEvent`, event, httpOptions);
  }

}
