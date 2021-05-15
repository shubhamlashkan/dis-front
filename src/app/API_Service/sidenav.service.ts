import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Urls } from '../urls/urls';
import { apiSetting } from '../urls/apisetting';
@Injectable({
  providedIn: 'root'
})
export class SidenavService {
  urls = new Urls();
  private baseUrl = apiSetting.apiUser;
  constructor(private http : HttpClient) { }
  getSideNavData():Observable<any>{
    return this.http.get(`${this.baseUrl}+/dis/user/getSideNavigation`);
  }
}
