import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { apiSetting } from '../urls/apisetting';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  private baseUrl = apiSetting.apiUser+'/calendar';
  private staffDataUrl = apiSetting.apiUser+'/dis/user/staffProfile';

  constructor(private http: HttpClient) { }

  getMyEvents(pid: String): Observable<any> {
    return this.http.get(`${this.baseUrl}/getMyEvents?id=` + pid);
  }

  getPublicHolidays(): Observable<any>{
    return this.http.get(`${this.baseUrl}/getPublicHolidays`);
  }

  addEvent(event: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/addEvent`, event);
  }

  deleteEvent(eid: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/deleteEvent?eventId=` + eid);
  }

  updateEvent(event: any,eventId: string): Observable<any>{
    return this.http.post(`${this.baseUrl}/updateEvent?eventId=`+ eventId, event);
  }

  getAllEmployeeList(): Observable<any> {
    return this.http.get(`${this.staffDataUrl}/getAllEmployeeNames`);
  }

  getMyGroups(pid: String): Observable<any> {
    return this.http.get(`${this.baseUrl}/getMyGroup?userName=`+pid);
  }

  getAllUsers(pid: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/getAllUsers?username=`+pid);
  }

  createGroup(group: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/addGroup`, group);
  }

  updateGroup(group: any,groupId: string): Observable<any>{
    return this.http.post(`${this.baseUrl}/updateGroup?groupId=`+ groupId, group);
  }

  deleteGroup(gids: string[]): Observable<any>{
    return this.http.delete(`${this.baseUrl}/deleteGroup?groupId=` + gids)
  }
}
