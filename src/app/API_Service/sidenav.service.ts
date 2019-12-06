import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Urls } from '../urls/urls';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {
  urls = new Urls();
  private baseUrl = this.urls.mainurl;
  constructor(private http : HttpClient) { }
  getSideNavData():Observable<any>{
    return this.http.get('http://localhost:8080/dis/user/getSideNavigation');
  }
}
