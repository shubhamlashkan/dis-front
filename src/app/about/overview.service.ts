import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OverviewService {

  // url = 'http://localhost:8080/dis/administration/getOverviewDetails';
  url = 'http://52.168.72.250:8080/getOverviewDetails';

  constructor(private http: HttpClient) { }

  getOverview(): Observable<any> {
    return this.http.get(this.url);
  }
}
