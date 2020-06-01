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

  getMyNotifications(): Observable<any> {
    return this.http.get(`${this.baseUrl}/getAllNotifications`);
  }
  markAsRead(notificationId : String): Observable<Object> {
    return this.http.get(`${this.baseUrl}/markAsRead/${notificationId}`);
  }
  markAllAsRead(): Observable<Object> {
    return this.http.get(`${this.baseUrl}/markAllAsRead`);
  }
}
