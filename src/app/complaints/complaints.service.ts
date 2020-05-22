import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { Urls } from '../urls/urls';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ComplaintsService {
  urls = new Urls();
  private mainUrl = this.urls.mainurl;
  // private baseUrl = mainurl+'/dis/administrationn'
  private baseUrl="http://localhost:8080/dis/administration";
  constructor(private http: HttpClient) { }

  getRemainingCleanlinessComplaint():Observable<any>{
    return this.http.get(`${this.baseUrl}/getRemainingCleanlinessComplaints`);
  }

  getRemainingLEComplaints():Observable<any>{
    return this.http.get(`${this.baseUrl}/getRemainingLEComplaints`);
  }

  getRemainingCWNComplaints():Observable<any>{
    return this.http.get(`${this.baseUrl}/getRemainingCWNComplaints`);
  }

  getRemainingECCWComplaints():Observable<any>{
    return this.http.get(`${this.baseUrl}/getRemainingECCWComplaints`);
  }

  getRemainingOtherComplaints():Observable<any>{
    return this.http.get(`${this.baseUrl}/getRemainingOtherComplaints`);
  }

  getRemainingFacultyComplaints():Observable<any>{
    return this.http.get(`${this.baseUrl}/getRemainingFacultyComplaints`);
  }

  getRemainingStudentComplaints():Observable<any>{
    return this.http.get(`${this.baseUrl}/getRemainingStudentComplaints`);
  }

  getRemainingEMRSComplaints():Observable<any>{
    return this.http.get(`${this.baseUrl}/getRemainingEMRSComplaints`);
  }

  getRemainingTelephoneComplaints():Observable<any>{
    return this.http.get(`${this.baseUrl}/getRemainingTelephoneComplaints`);
  }

  //Resolved Complaints
  getResolvedCleanlinessComplaint():Observable<any>{
    return this.http.get(`${this.baseUrl}/getResolvedCleanlinessComplaints`);
  }

  getResolvedLEComplaints():Observable<any>{
    return this.http.get(`${this.baseUrl}/getResolvedLEComplaints`);
  }

  getResolvedCWNComplaints():Observable<any>{
    return this.http.get(`${this.baseUrl}/getResolvedCWNComplaints`);
  }

  getResolvedECCWComplaints():Observable<any>{
    return this.http.get(`${this.baseUrl}/getResolvedECCWComplaints`);
  }

  getResolvedOtherComplaints():Observable<any>{
    return this.http.get(`${this.baseUrl}/getResolvedOtherComplaints`);
  }

  getResolvedFacultyComplaints():Observable<any>{
    return this.http.get(`${this.baseUrl}/getResolvedFacultyComplaints`);
  }

  getResolvedStudentComplaints():Observable<any>{
    return this.http.get(`${this.baseUrl}/getResolvedStudentComplaints`);
  }

  getResolvedEMRSComplaints():Observable<any>{
    return this.http.get(`${this.baseUrl}/getResolvedEMRSComplaints`);
  }

  getResolvedTelephoneComplaints():Observable<any>{
    return this.http.get(`${this.baseUrl}/getResolvedTelephoneComplaints`);
  }


  //Total Complaints
  getTotalCleanlinessComplaint():Observable<any>{
    return this.http.get(`${this.baseUrl}/getTotalCleanlinessComplaints`);
  }

  getTotalLEComplaints():Observable<any>{
    return this.http.get(`${this.baseUrl}/getTotalLEComplaints`);
  }

  getTotalCWNComplaints():Observable<any>{
    return this.http.get(`${this.baseUrl}/getTotalCWNComplaints`);
  }

  getTotalECCWComplaints():Observable<any>{
    return this.http.get(`${this.baseUrl}/getTotalECCWComplaints`);
  }

  getTotalOtherComplaints():Observable<any>{
    return this.http.get(`${this.baseUrl}/getTotalOtherComplaints`);
  }

  getTotalFacultyComplaints():Observable<any>{
    return this.http.get(`${this.baseUrl}/getTotalFacultyComplaints`);
  }

  getTotalStudentComplaints():Observable<any>{
    return this.http.get(`${this.baseUrl}/getTotalStudentComplaints`);
  }

  getTotalEMRSComplaints():Observable<any>{
    return this.http.get(`${this.baseUrl}/getTotalEMRSComplaints`);
  }

  getTotalTelephoneComplaints():Observable<any>{
    return this.http.get(`${this.baseUrl}/getTotalTelephoneComplaints`);
  }


  //My Complaints
  getMyCleanlinessComplaint():Observable<any>{
    return this.http.get(`${this.baseUrl}/getMyCleanlinessComplaints`);
  }

  getMyLEComplaints():Observable<any>{
    return this.http.get(`${this.baseUrl}/getMyLEComplaints`);
  }

 
  getMyOtherComplaints():Observable<any>{
    return this.http.get(`${this.baseUrl}/getMyOtherComplaints`);
  }

  getMyFacultyComplaints():Observable<any>{
    return this.http.get(`${this.baseUrl}/getMyFacultyComplaints`);
  }

  getMyStudentComplaints():Observable<any>{
    return this.http.get(`${this.baseUrl}/getMyStudentComplaints`);
  }




  // add complaints (post services)
  addACleanlinessComplaint(info : any):Observable<any>{
    return this.http.post<any>(`${this.baseUrl}/addCleanlinessComplaint`,info,httpOptions);
  }
  addOtherComplaint (info : any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/addOtherComplaint`, info, httpOptions)
  }
  addLeComplaint(info :any):Observable<any>{
    return this.http.post<any>(`${this.baseUrl}/addLEComplaint`,info,httpOptions);
  }
  addStudentComplaint(info: any):Observable<any>{
    return this.http.post<any>(`${this.baseUrl}/addStudentComplaint`,info,httpOptions);
  }
  addFacultyComplaint(info : any):Observable<any>{
    return this.http.post<any>(`${this.baseUrl}/addFacultyComplaint`,info,httpOptions);
  }
  
  addCWNComplaint(info : any):Observable<any>{
    return this.http.post<any>(`${this.baseUrl}/addCWNComplaint`,info,httpOptions);
  }

  addEccwComplaint(info : any):Observable<any>{
    return this.http.post<any>(`${this.baseUrl}/addECCWComplaint`,info,httpOptions);
  }

  addEmrsCompaint(info : any):Observable<any>{
    return this.http.post<any>(`${this.baseUrl}/addEMRSComplaint`,info,httpOptions);
  }

  addTelephoneComplaint(info : any):Observable<any>{
    return this.http.post<any>(`${this.baseUrl}/addTelephoneComplaint`,info,httpOptions);
  }

  
  //get complaints counts
  getRemainingComplaintCount():Observable<any>{
    return this.http.get(`${this.baseUrl}/getRemainingComplaintsCount`);
  }
  getResolvedComplaintCount():Observable<any>{
    return this.http.get(`${this.baseUrl}/getResolvedComplaintsCount`);
  }
  getTotalComplaintCount():Observable<any>{
    return this.http.get(`${this.baseUrl}/getTotalComplaintsCount`);
  }
  getMyComplaintCount():Observable<any>{
    return this.http.get(`${this.baseUrl}/getMyComplaintsCount`);
  }

  //get permission 
  getPermissions():Observable<any>{
    return this.http.get(`${this.baseUrl}/addComplaintPermission`);
  }
  getLocation():Observable<any>{
    return this.http.get('http://localhost:8080/dis/infrastructure/getLocationDropDown');
  }

  //add faculty resource
  addFacultyResource(info : any):Observable<any>{
    return this.http.post('http://localhost:8080/dis/administration/addFacultyResourceRequest',info,httpOptions);
  }

  editComplaints(info : any):Observable<any>{
    return this.http.put(`${this.baseUrl}/editComplaint`,info,httpOptions);
  }
}
