import { Component, OnInit,ViewChild } from '@angular/core';
import {NgForm, Validators,FormControl,FormGroup} from "@angular/forms";
import {LeaveRequest} from "src/app/Model/leaveRequest.model";
import {LeaveService} from 'src/app/API_Service/leave.service';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { ToastrManager } from 'ng6-toastr-notifications';



@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.scss']
})

export class AttendanceComponent implements OnInit {

  
  @ViewChild("f") addLeave:NgForm;
  @ViewChild("rejoin") ReJoin:NgForm;
  @ViewChild("f") cancelLeave:NgForm;
  // @ViewChild("cancelAfterApprove") cancelAfterApproved:NgForm;

  userName:string
  leave_type:any[]=[];
  request:LeaveRequest;
  myLeaveRequests:any[]=[];
  myLeaveAccount:any[];
  leaveId:number;

  

  showMsg: boolean = false;
  showDateError=false;
  showNullError=false;


  constructor(private leaveService:LeaveService,public toastr: ToastrManager) { }

  ngOnInit() {

      this.userName = sessionStorage.getItem('authenticaterUser');
      this.leaveId=0;
      
      this.leaveService.getMyLeaveRequests(this.userName).subscribe(data=>{
        console.log(data);
        this.myLeaveRequests=data;
        
      });
      
      this.leaveService.getLeave().subscribe(data=>{
        console.log(data);
        this.leave_type=data;
        
      });
      console.log(this.leave_type);

      this.leaveService.getMyLeaveAccount().subscribe(data=>{
        // console.log(data.annual);
        this.myLeaveAccount=data;
        
      });

      
  }

  getLeaveRequest(id:number){
      this.leaveId = id;
  }

  getLeavesByStatus(status:string){
    this.leaveService.getRequestsByStatus(status).subscribe(data=>{
      this.myLeaveRequests=data;
    });

  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

  onSubmit(){
    var curDate=new Date().toLocaleDateString();
    let fromDate: Date = new Date(this.addLeave.value.from); 
    var fDate= fromDate.toLocaleDateString();
    let toDate: Date = new Date(this.addLeave.value.to); 
    var tDate= toDate.toLocaleDateString();
    
    if(this.addLeave.value.leaveType==null){
      this.showNullError=true;
      this.delay(3000).then(any=>{
        this.showNullError= false;   
   })
    }
    else if(this.addLeave.value.duration==""){
      this.showNullError=true;
      this.delay(3000).then(any=>{
        this.showNullError= false;   
   })
    }
    else if(this.addLeave.value.from==""){
      this.showNullError=true;
      this.delay(3000).then(any=>{
        this.showNullError= false;   
   })
    }
    else if(this.addLeave.value.to==""){
      this.showNullError=true;
      this.delay(3000).then(any=>{
        this.showNullError= false;   
   })
    }
    else if(this.addLeave.value.reason==null){
      this.showNullError=true;
      this.delay(3000).then(any=>{
        this.showNullError= false;   
   })
    }

    else if(this.addLeave.value.from>this.addLeave.value.to){
      this.showDateError=true;
      this.delay(3000).then(any=>{
        this.showDateError= false;
        
   })
   this.addLeave.reset();

    }
    else{
    this.request=new LeaveRequest();
   
    this.request.typeOfLeave=this.addLeave.value.leaveType;
    this.request.fromDuration=this.addLeave.value.fromDuration;
    this.request.toDuration=this.addLeave.value.toDuration;
    this.request.fromDate=this.addLeave.value.from;
    this.request.considerHolidays=this.addLeave.value.considerHolidays;
    this.request.toDate=this.addLeave.value.to;
    this.request.prefix=this.addLeave.value.from;
    this.request.suffix=this.addLeave.value.to;
    this.request.details=this.addLeave.value.reason;
    this.request.status="pending";
    console.log(this.request)
    this.leaveService.addRequest(this.request);
    
    this.toastr.successToastr('Leaves Request Sent', 'Success!');
    this.ngOnInit();
    }
  }
  
  onReset(){
    this.addLeave.reset();
  }

  // cancelAfterApproval(){
  //   console.log("sonal")
  //   this.leaveService.cancelRequest(this.leaveId);
  //   this.toastr.successToastr('Leaves Cancelled', 'Success!');
  // }

  Rejoin(){
    var data={leaveId:this.leaveId,rejoinDate:this.ReJoin.value.rejoinTo,toDuration:this.ReJoin.value.rejointoDuration}
    console.log(data);
    this.leaveService.rejoin(data);
    this.toastr.successToastr('Rejoined after Leave', 'Success!');
    
   }
   
  cancel(){
    var data={leaveId:this.leaveId,status:"cancelled"}
    this.leaveService.UpdateStatus(data)
    this.toastr.successToastr('Leaves Cancelled', 'Success!');
  }
}
