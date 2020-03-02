import { Injectable } from '@angular/core';
import { apiSetting } from 'src/app/urls/apisetting';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { settings, facultyName } from './timetableModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimetableService {
  private baseUrl= apiSetting.apiAcademics+ '/timeTable/';

  constructor(private http: HttpClient) { }

  saveSetting(setting: settings) : Observable<HttpResponse<string>>{
    return this.http.post<string>(this.baseUrl + 'saveSemTimeTableSettings',setting,{observe:'response'});
  }
  getFacultyName(): Observable<HttpResponse<facultyName[]>>{
    return this.http.get<facultyName[]>(`${this.baseUrl}getFacultyNameList`,{ observe: 'response' })
  }




}
