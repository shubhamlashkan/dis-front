import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StudentSignUp } from '../Model/student-sign-up.model';
import { FormGroup } from '@angular/forms';
import { apiSetting } from '../urls/apisetting';

@Injectable({
  providedIn: 'root'
})
export class StudentSignUpService {

  private baseUrl = apiSetting.apiGateway+'/dis';


  constructor(private http: HttpClient) { }

  public createStudentSignUp(StudentSignUp: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}` + `/signup`, StudentSignUp);
  }
  baseUrl1 : string = apiSetting.apiUser;
  getAllstudent(){
    return this.http.get<any>(`${this.baseUrl1}/studentBasicProfile`)
  
  }
  addstudent(req:StudentSignUp){
    console.log(req);
    return this.http.post(`${this.baseUrl1}/addStudentBasicProfile`,req);
  }
  addFile(form: FormGroup): Observable<any>{
    const formData: FormData = new FormData();
    formData.append('file', form.get('file').value);
    return this.http.post(`${this.baseUrl1}/uploadStudentBasicProfile/0`, formData);
  }
  
}
