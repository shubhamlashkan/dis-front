import { Injectable } from '@angular/core';
import { apiSetting } from 'src/app/urls/apisetting';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { searchTask } from './myTaskModel';

@Injectable({
  providedIn: 'root'
})
export class MytaskService {

  constructor(private http: HttpClient ) { }
  apiUrl: string = apiSetting.apiUser +'/task';

  getTaskByUserId(userId:string):Observable<HttpResponse<searchTask[]>>
  {
    return this.http.get<searchTask[]>(`${this.apiUrl}/searchTaskByUserId/${userId}`,{observe:'response'})
  }
  updateStatus(id:string,status:string):Observable<HttpResponse<any>>
  {
    return this.http.put<any>(`${this.apiUrl}/updateTaskStatus/${status}/${id}`,{observe:'response'});
  }

}
