import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {apiSetting} from '../urls/apisetting';
import {categoryList, taskList, staffList, assignTaskData, searchTask} from '../hod/administration/administrationModel'
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdministrationService { 

  constructor(private http: HttpClient) {

  }
   
  apiUrl: string = apiSetting.apiUser +'/task';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'my-auth-token',
      'Accept': 'application/json'
    })
  };

  getCategoryList():Observable<HttpResponse<categoryList[]>>
  {
      return this.http.get<categoryList[]>(this.apiUrl+'/getTaskCategoryList',{observe:'response'});
  }
  getTaskByCategoryId(categoryId:string):Observable<HttpResponse<taskList[]>>
  {
      return this.http.get<taskList[]>(`${this.apiUrl}/getTasksFromCategoryId/${categoryId}`,{observe:'response'});
  }
  getStaffList():Observable<HttpResponse<staffList[]>>{
    return this.http.get<staffList[]>(this.apiUrl+'/getActiveStaffList',{observe:'response'});
  }

  assignTask(task:assignTaskData):Observable<HttpResponse<any>>{
  return this.http.post(this.apiUrl + '/assignTask', task, { observe: 'response' });
  }

  getTaskByUserId(userId:string):Observable<HttpResponse<searchTask[]>>
  {
    return this.http.get<searchTask[]>(`${this.apiUrl}/searchTaskByUserId/${userId}`,{observe:'response'})
  }

  getAssignedTaskByTaskId(taskId:string):Observable<HttpResponse<searchTask[]>>
  {
    return this.http.get<searchTask[]>(`${this.apiUrl}/searchTaskByTaskId/${taskId}`,{observe:'response'})
  }
  assignTaskInfo():Observable<HttpResponse<searchTask[]>>
  {
    return this.http.get<searchTask[]>(this.apiUrl+'/getAssignTasksInfo',{observe:'response'});
  }
  deleteTask(Id:string):Observable<HttpResponse<any>>
  {
    return this.http.delete(`${this.apiUrl}/deleteTask/${Id}`,{observe:'response'});
  }
  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      if(error.status==404){
        errorMessage = `${error.error.message}`;
      }
      else if(error.status==500){
        errorMessage = "Records not found";
      }
      else if(error.status==0)
      {
        errorMessage = "Input Can't be Empty";
      }
      else if(error.status==400)
      {
        errorMessage =`${error.error.message}` ;
      }
      else 
      {
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
    }

    console.log(errorMessage);
    return throwError(errorMessage);
  }

}
