import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SemTimeTableSettings } from './semTimeTableModel';
import { apiSetting } from 'src/app/urls/apisetting';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class SemtimetableService {


  
  constructor(private http: HttpClient) { }

  apiUrl: string = apiSetting.apiAcademics + '/timeTable'

  getSemTimeTableSettings(){
     return this.http.get<{[key:string]: SemTimeTableSettings}>(this.apiUrl+'/getSemTimeTableSettings').pipe(map(responseData => {
      const semSettings: SemTimeTableSettings[] =[];
      for(const key in responseData)
      {
        if(responseData.hasOwnProperty(key))
        {
          semSettings.push({ ...responseData[key], id:key})
        }
      }
      
    }));
  }
}
