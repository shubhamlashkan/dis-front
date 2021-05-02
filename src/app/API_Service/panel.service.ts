import { PanelOfTheory } from '../Model/panelOfTheory.model';
import { PanelOfPractical } from '../Model/panelOfPractical.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { apiSetting } from '../urls/apisetting';


@Injectable({
    providedIn: 'root'
  })
export class PanelOfTheoryService{

      private baseUrl=`${apiSetting.apiUser}`;
    // private baseUrl="http://3.17.182.120:8081";
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

    deleteRequest(req:any):Observable<any>{
      console.log(req)
      var subjectCode=req.subjectCode;
      var year=req.year;
      return this.http.delete(`${this.baseUrl}/panel/deletePanelOfTheory/${subjectCode}/${year}`)
    }
}


// @Injectable({
//     providedIn: 'root'
//   })
// export class PanelOfPracticalService{

//   private baseUrl="http://3.142.77.234:8081";
//     theory_panel:PanelOfPractical[]=[];
//     constructor(private http: HttpClient) { }

//   addpracticalpanel(req:PanelOfPractical){
//       this.http.post<any>(`${this.baseUrl}/panelOfPractical`,req).subscribe(data=>{
//           console.log(data);
//         })
//   }
//   addExternalExaminer(req:any){
//     this.http.post<any>(`${this.baseUrl}/externalExaminer`,req).subscribe(data=>{
//       console.log(data);
//     })
//   }
  
//   getExternalExaminer(): Observable<any>{
//     return this.http.get<any>(`${this.baseUrl}/externalExaminer`)
// }

//   updatePanelOfTheory(req:PanelOfPractical){
//     console.log(req)
//     this.http.put<PanelOfTheory>(`${this.baseUrl}/panel/updatePanelOfTheory`,req).subscribe(data=>{
//       console.log(data);
//     })
//   }

//   deleteRequest(req:any):Observable<any>{
//     console.log(req)
//     var subjectCode=req.subjectCode;
//     var year=req.year;
//     return this.http.delete(`${this.baseUrl}/panel/deletePanelOfTheory/${subjectCode}/${year}`)
//   }
    
// }