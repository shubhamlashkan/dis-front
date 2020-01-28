import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {apiSetting} from '../urls/apisetting';
import {categoryList} from '../hod/administration/administrationModel'
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

  getCategoryList():Observable<categoryList[]>
  {
      return this.http.get<categoryList[]>(this.apiUrl+'/getTaskCategoryList');
  }
  getTaskByCategoryId(categoryId:string)
  {
      return this.http.get(`${this.apiUrl}/getgetTasksFromCategoryId/${categoryId}`)
  }



  /* Function to handle Error  */
  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
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
        errorMessage = "Invalid input";
      }
      else 
      {
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
      // server-side error
     // errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    //window.alert(errorMessage);
    return throwError(errorMessage);
  }

}
