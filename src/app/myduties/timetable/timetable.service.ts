import { Injectable } from '@angular/core';
import { apiSetting } from 'src/app/urls/apisetting';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { settings, facultyName, semSetting, course, infraList, sCode } from './timetableModel';
import { Observable } from 'rxjs';
import {semTimeTable,getTimeTable} from './semTimeTableModel'
@Injectable({
  providedIn: 'root'
})
export class TimetableService {
  private baseUrl= apiSetting.apiAcademics+ '/timeTable/';

  constructor(private http: HttpClient) { }

  saveSetting(setting: settings) : Observable<HttpResponse<string>>{
    return this.http.post<string>(this.baseUrl + 'saveSemTimeTableSettings',setting,{observe:'response'});
  }
  getFacultyName(): Observable<HttpResponse<facultyName[]>>{
    return this.http.get<facultyName[]>(`${this.baseUrl}getFacultyNameList`,{ observe: 'response' });
  }
getSetting() : Observable<HttpResponse<semSetting>>{
  return this.http.get<semSetting>(`${this.baseUrl}getSemTimeTableSettings`,{observe:'response'});
}

getCourse() : Observable<HttpResponse<course[]>>{
  return this.http.get<course[]>(`${this.baseUrl}getCourseList`,{observe:'response'});

}
getLabs(): Observable<HttpResponse<infraList[]>> {
  return this.http.get<infraList[]>(`${this.baseUrl}getInfrastructureByType/laboratory`,{ observe: 'response' });
}
getClassroom(): Observable<HttpResponse<infraList[]>>{
  return this.http.get<infraList[]>(`${this.baseUrl}getInfrastructureByType/classroom`,{ observe: 'response' });
}
getSubjectCode(course:string,year:string,sem:string) : Observable<HttpResponse<sCode[]>>{
  return this.http.get<sCode[]>(`${this.baseUrl}getSubjectCodesListByYearAndSemsterAndCourse/${year}/${sem}/${course}`,{observe:'response'});
}


saveSemTimeTable(sem:semTimeTable):Observable<HttpResponse<string>>{
  return this.http.post<string>(`${this.baseUrl}addSemTimeTable`,sem,{observe:'response'})
}

getIdByCourse(course:string):Observable<HttpResponse<string>>{
  return this.http.get<string>(`${this.baseUrl}getCourseIdByCourseName/${course}`,{observe:'response'});
}

getScodeByFacultyIdandSession(facultyId:string,session:string):Observable<HttpResponse<sCode[]>>{
  return this.http.get<sCode[]>(`${this.baseUrl}getSubjectCodesByFacultyIdAndSession/${facultyId}/${session}`,{observe:'response'});
}

getTimeTableByScodeFacutlySession(facultyId:string,session:string,sCode:string):Observable<HttpResponse<getTimeTable>>
{
  return this.http.get<getTimeTable>(`${this.baseUrl}getTimeTableByFacultyIdSessionAndSubjectCode/${facultyId}/${session}/${sCode}`,{observe:'response'});
}


}
