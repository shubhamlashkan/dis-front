import { PanelOfTheory } from '../Model/panelOfTheory.model';
import { PanelOfPractical, External } from '../Model/panelOfPractical.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastrManager } from 'ng6-toastr-notifications';
import { apiSetting } from '../urls/apisetting';

@Injectable({
    providedIn: 'root'
  })
export class PanelOfTheoryService{
    private baseUrl="http://3.142.77.234:8081";
    constructor(private http: HttpClient) { }

    gettheorypanel(): Observable<any>{
        return this.http.get<any>(`${this.baseUrl}/panel/getPanelOfTheory`)
    }

    addtheorypanel(req:PanelOfTheory){
        this.http.post<any>(`${this.baseUrl}/panel/createPanelOfTheory`,req).subscribe(data=>{
            console.log(data);
          })
    }

    updatePanelOfTheory(req:PanelOfTheory){
      console.log(req)
      this.http.put<PanelOfTheory>(`${this.baseUrl}/panel/updatePanelOfTheory`,req).subscribe(data=>{
        console.log(data);
      })
    }

    deleteRequest(req:PanelOfTheory){
  
      }
}


@Injectable({
  providedIn: 'root'
})
export class PanelOfPracticalService{

  baseUrl : string = apiSetting.apiUser;
  theory_panel:PanelOfPractical[]=[];
  constructor(private http: HttpClient, public toastr: ToastrManager) { }

addpracticalpanel(req:PanelOfPractical){
    this.http.post<any>(`${this.baseUrl}/panelOfPractical`,req).subscribe( 
      response => {
        this.toastr.successToastr('SuccessFully added the panel!');
        console.log(response.body['message']);
      },error => {
      if(error.status === 400) {
        this.toastr.errorToastr('Alert!');
     console.log(error.error['message']);
    }
  }
    );
}
addExternalExaminer(req:any){
  this.http.post<any>(`${this.baseUrl}/externalExaminer`,req).subscribe( 
    response => {
      this.toastr.successToastr('Successfully Added the External!');
      console.log(response.body['message']);
    
},error => {
  if(error.status === 400) {
    this.toastr.errorToastr('Alert ! Not able to Add the EXternal');
 console.log(error.error['message']);
}
}
  );
}

getExternalExaminer(): Observable<any>{
  return this.http.get<any>(`${this.baseUrl}/externalExaminer`)
}

updatePractical(req:PanelOfPractical,id: any){
  console.log(req)
  this.http.put(`${this.baseUrl}/panelOfPractical/${id}`,req).subscribe( response => {
    this.toastr.successToastr( 'Successfully updated the Panel..!');
  },error => {
    if(error.status === 400) {
      this.toastr.errorToastr('Alert ! Not able to update the Panel..!');
   console.log(error.error['message']);
  }
});

}

deleteRequest(id:any):Observable<any>{
  return this.http.delete(`${this.baseUrl}/panelOfPractical/${id}`);
}
getpracticalpanel(): Observable<any>{
  return this.http.get<any>(`${this.baseUrl}/panelOfPractical`);
}

getExternalById(Id: any){
  return this.http.get<any>(`${this.baseUrl}/externalExaminer/${Id}`)
}

updateExternal(req :External, id : any){
  console.log(req)
  this.http.put(`${this.baseUrl}/externalExaminer/${id}`,req).subscribe( 
    response => {
      this.toastr.successToastr('Successfully Updated the External!');
      },error => {
        if(error.status === 400) {
          this.toastr.errorToastr('Alert ! Not able to Update the External');
       console.log(error.error['message']);
      }
    });
}


}
