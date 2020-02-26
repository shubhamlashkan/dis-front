import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  private baseUrl = 'http://localhost:8080/dis/user/calendar';

  constructor(private http: HttpClient) { }

  getMyEvents(pid: String): Observable<any> {
    return this.http.get(`${this.baseUrl}/getMyEvents?id=` + pid);
  }

}
