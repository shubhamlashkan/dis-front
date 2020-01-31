import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders , HttpResponse  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { apiSetting } from 'src/app/urls/apisetting';
import { addMember, facultyData } from 'src/app/Model/facultyData';

@Injectable({
  providedIn: 'root'
})
export class FacultyDataService {
  private baseUrl= apiSetting.apiUser+ '/staffProfile'
   
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'my-auth-token',
      'Accept': 'application/json'
    })
  };

  constructor(private http: HttpClient) 
  { }

  getFacultyData():Observable<HttpResponse<any>>{
    return this.http.get(`${this.baseUrl}/getFacultyData`,{ observe: 'response' });
  }

  getStaffData():Observable<HttpResponse<any>>{
    return this.http.get(`${this.baseUrl}/getStaffData`,{ observe: 'response' });
  }

  addMemberDetails(Member : addMember) : Observable<HttpResponse<string>> {
    return this.http.post<string>(this.baseUrl + '/addNewMember', Member,{ observe: 'response' });
  }

}
