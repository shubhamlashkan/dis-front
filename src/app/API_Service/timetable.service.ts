import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiSetting } from '../urls/apisetting';

@Injectable({
  providedIn: 'root'
})
export class TimetableService {

  private baseUrl = apiSetting.apiAcademics;

  constructor(private http: HttpClient) { }

  getTimetable(): Observable<any> {
    return this.http.get(`${this.baseUrl}/timeTable/student`);
  }
  getFacultyTimeTable(): Observable<any>{
    return this.http.get(`${this.baseUrl}/timeTable/faculty/14`);
  }
}
