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
export class NotificationsService {

  private baseUrl = apiSetting.apiUser+'/userNotificationController';
  private staffDataUrl = apiSetting.apiUser+'/staffProfile';
  constructor(private http :HttpClient) { }

  getMyNotifications(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/getAllNotifications`);
  }
  markAsRead(notificationId : String): Observable<Object> {
    return this.http.get(`${this.baseUrl}/markAsRead/${notificationId}`);
  }
  markAllAsRead(): Observable<Object> {
    return this.http.get(`${this.baseUrl}/markAllAsRead`);
  }
  markAsFavourite(notificationId : String): Observable<Object> {
    return this.http.get(`${this.baseUrl}/markAsFavourite/${notificationId}`);
  }
  delete(notificationId : String): Observable<Object> {
    return this.http.get(`${this.baseUrl}/deleteNotification/${notificationId}`);
  }
  forward(forwardData:any) : Observable<Object> {
    return this.http.post(`${this.baseUrl}/forwardNotification/`,forwardData);
  }
  getAllEmployeeList(): Observable<any> {
    return this.http.get(`${this.staffDataUrl}/getAllEmployeeNames`);
  }
}
