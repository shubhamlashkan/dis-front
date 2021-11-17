import { Leave } from 'src/app/Model/leave.model';
import {LeaveRequest} from 'src/app/Model/leaveRequest.model';
import {CreditLeaves} from 'src/app/Model/creditLeaves.model';
import { Injectable } from '@angular/core'; 
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { apiSetting } from '../urls/apisetting';



@Injectable({ 
    providedIn: 'root'
  }) 
export class LeaveService{
  private baseUrl=apiSetting.apiUser;
  
  constructor(private http: HttpClient) { }

  leaves:Leave[]=[];
  leavesLeft:any[]=[];
  leaveRequests:LeaveRequest[]=[];

  
  getLeave(){
      return this.http.get<any>(`${this.baseUrl}/getAllLeaveTypes`)
  }


  getLeavesLeft(name:string): Observable<any>{
      return this.http.get<any[]>(`${this.baseUrl}/getLeavesLeft?name=` + name)
  }

  getMyLeaveAccount(){
    return this.http.get<any>(`${this.baseUrl}/getMyLeaveAccount`)
}

  getMyLeaveRequests(name:string){
    return this.http.get<any[]>(`${this.baseUrl}/getMyLeaves/${name}`)

  }
  
    
  addLeave(req:Leave){
      this.http.post<Leave>(`${this.baseUrl}/createLeave`,req).subscribe(data=>{
          console.log(data);
      })
  }

  creditLeave(req:CreditLeaves){
    this.http.put<CreditLeaves>(`${this.baseUrl}/creditLeave`,req).subscribe(data=>{
        console.log(data);
      })
  }

  rejoin(req:any){
    this.http.put<LeaveRequest>(`${this.baseUrl}/rejoin`,req).subscribe(data=>{
      console.log(data);
  })
  }
  UpdateStatus(req:any){
    console.log(req)
    this.http.put<any>(`${this.baseUrl}/updateStatus`,req).subscribe(data=>{
      console.log(data);
      })
  }

  cancelRequest(id:number){
    console.log(id)
    return this.http.put<any>(`${this.baseUrl}/cancelLeave?id=`+ id,{}).subscribe(data=>{
  console.log(data);
  });
 
  }
   
  getRequests(): Observable<any>{
    return this.http.get<any[]>(`${this.baseUrl}/getAllLeaves`)
  }


  getRequestsByStatus(status:string): Observable<any>{
    return this.http.get<any[]>(`${this.baseUrl}/getLeaves/${status}`)
  }
  getRequestById(id:number): Observable<any>{
    
    return this.http.get<any[]>(`${this.baseUrl}/getLeaveById?id=`+ id)
  }

  getRequestsByName(name:string): Observable<any>{
    console.log(name);
    return this.http.get<any[]>(`${this.baseUrl}/getAllLeaves?name=` + name)
  }
  
  addRequest(req:LeaveRequest){
    this.http.post<any>(`${this.baseUrl}/applyForLeave`,req).subscribe(data=>{
      console.log(data);
      })
  }
  modifyLeaveRequest(req:LeaveRequest){
    this.http.put<any>(`${this.baseUrl}/updateLeave`,req).subscribe(data=>{
      console.log(data);
      })
  }
}
