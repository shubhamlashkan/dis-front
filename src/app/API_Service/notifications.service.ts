import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  private baseUrl = 'http://localhost:8080/dis/user/userNotificationController';

  constructor(private http :HttpClient) { }

  getMyNotifications(username: String): Observable<any> {
    return this.http.get(`${this.baseUrl}/getAllNotification/${username}`);
  }
  markAsRead(notification: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/markAsRead`, notification,httpOptions);
  }
  markAllAsRead(username: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/markAllAsRead`, username,httpOptions);
  }
}
