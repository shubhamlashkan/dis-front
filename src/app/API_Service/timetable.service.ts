import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimetableService {

  private baseUrl = 'http://localhost:8080/dis/academics';

  constructor(private http: HttpClient) { }

  getTimetable(): Observable<any> {
    return this.http.get(`${this.baseUrl}/timetable/student`);
  }
  getFacultyTimeTable(): Observable<any>{
    return this.http.get(`${this.baseUrl}/timetable/faculty/14`)
  }
}
