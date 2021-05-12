import { Injectable } from '@angular/core'; 
import {HttpClient,HttpHeaders, HttpResponse} from '@angular/common/http'; 
import {Observable} from 'rxjs'; 
import {SchemeSyllabus} from '../Model/scheme.model';
import { map } from "rxjs/operators";
import { FormGroup } from '@angular/forms';
import { apiSetting } from '../urls/apisetting';
@Injectable({ 
  providedIn: 'root'
}) 
export class FileUploadService { 
  baseUrl : string = apiSetting.apiAcademics;
    
  constructor(private http:HttpClient) { 

  }

  postFileSyllabus(form: FormGroup): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', form.get('file').value);
    formData.append('course',form.get('course').value);
    formData.append('semester',form.get('semester').value);
    return this.http.post(`${this.baseUrl}/syllabus/upload`, formData);
}
  postFileScheme(form: FormGroup): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', form.get('file').value);
    formData.append('course',form.get('course').value);
    formData.append('semester',form.get('semester').value);
  return this.http.post(`${this.baseUrl}/scheme/upload`, formData);
}
  
  fileUpload:SchemeSyllabus[]=[];


  getAllRequestsSyllabus(){
    return this.http.get<any>(`${this.baseUrl}/syllabus`)
  }

  getAllRequestsScheme(){
    return this.http.get<any>(`${this.baseUrl}/scheme`)
  }

  deleteSyllabus(Id:any): Observable<HttpResponse<any>>
  {
    return this.http.delete(`${this.baseUrl}/syllabus/${Id.fileName}`,{observe:'response'});
  }
  deleteScheme(Id:any): Observable<HttpResponse<any>>
  {
    return this.http.delete(`${this.baseUrl}/scheme/${Id.fileName}`,{observe:'response'});
  }
  
} 