import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  private baseUrl = 'http://localhost:8080/dis/user/calendar';
  private staffDataUrl = 'http://localhost:8080/dis/user/staffProfile';

  constructor(private http: HttpClient) { }

  getMyEvents(pid: String): Observable<any> {
    return this.http.get(`${this.baseUrl}/getMyEvents?id=` + pid);
  }

  getPublicHolidays(): Observable<any>{
    return this.http.get(`${this.baseUrl}/getPublicHolidays`);
  }

  addEvent(event: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/addEvent`, event, httpOptions);
  }

  deleteEvent(eid: string): void {
    this.http.delete(`${this.baseUrl}/deleteEvent?eventId=` + eid).subscribe(() => console.log("user deleted"));
  }

  updateEvent(event: any,eventId: string): Observable<any>{
    return this.http.post(`${this.baseUrl}/updateEvent?eventId=`+ eventId, event,httpOptions);
  }

  getAllEmployeeList(): Observable<any> {
    return this.http.get(`${this.staffDataUrl}/getAllEmployeeNames`);
  }
}
