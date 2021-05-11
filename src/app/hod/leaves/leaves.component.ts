import { Component, OnInit, ViewChild } from '@angular/core';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { NgForm } from '@angular/forms';
import { Leave } from '../../Model/leave.model';
import {LeaveService} from 'src/app/API_Service/leave.service';;
import { AdministrationService } from 'src/app/API_Service/administration.service';
import {LeaveRequest} from "src/app/Model/leaveRequest.model";
import { CreditLeaves } from "src/app/Model/creditLeaves.model";
import {staffList } from 'src/app/hod/administration/administrationModel';
import {MatSelectModule} from '@angular/material/select';
import { MatOption } from '@angular/material';
import { ToastrManager } from 'ng6-toastr-notifications';


@Component({
  selector: 'app-leaves',
  templateUrl: './leaves.component.html',
  styleUrls: ['./leaves.component.scss']
})
export class LeavesComponent implements OnInit {

 @ViewChild('f') addCategory:NgForm;
 @ViewChild('form') addLeave:NgForm;
 @ViewChild('credit') creditleaves:NgForm;
 @ViewChild("decline") declineLeave:NgForm;
 @ViewChild("accept") acceptLeave:NgForm;
 @ViewChild("modify") ModifyLeaves:NgForm;
 @ViewChild('apply') addLeaveRequest:NgForm;
 @ViewChild("cancelAfterApprove") cancelAfterApproved:NgForm;
 @ViewChild("updateLeaves") UpdateLeave:NgForm;


 req:LeaveRequest;
 leavereq:LeaveRequest;
 private staffs :staffList[]=[]; 
 leavesLeft:any[]=[];
 leave_type:any[]=[];
 creditreq:CreditLeaves;
 request:Leave;
 leaves:any[]=[];
 leaveRequests:any[]=[];
 leaveId:number;
 considerHolidays:number;
 fromDuration:string;
 toDuration:string;
 fromDate:string;
 toDate:string;
 typeOfLeave:string;
 currentLeaveRequest:LeaveRequest;
 showMsg: boolean = false;
 showDateError=false;
 showNullError=false;
 



  constructor(private leaveService:LeaveService,private administrationService:AdministrationService,public toastr: ToastrManager) { }

  ngOnInit() {

    this.leaveId=0;
    




    this.leaveService.getLeave().subscribe(data=>{
      this.leave_type=data;
      console.log(this.leave_type)
    });

    this.administrationService.getStaffList().subscribe((response=>this.staffs=response.body));

    this.leaveService.getRequests().subscribe(data=>{
      this.leaveRequests=data;
      console.log(data);
    });
    
  }

  getLeave(id:number,typeOfLeave:string,fromDate:string,toDate:string,fromDuration:string,toDuration:string,considerHolidays:number){
    this.leaveId = id;
    this.considerHolidays=considerHolidays;
    this.fromDate=fromDate;
    this.toDate=toDate;
    this.fromDuration=fromDuration;
    this.toDuration=toDuration
    this.typeOfLeave=typeOfLeave;
    console.log(this.typeOfLeave);
  }
  
  CreateLeaveReset(){
    this.addLeave.reset();
  }

  CreateLeaveSubmit(){
    if(this.addLeave.value.name==""){
      this.showNullError=true
       this.delay(3000).then(any=>{
        this.showNullError= false;   
   })
    }
    else if(this.addLeave.value.leaveType==""){
      this.showNullError=true
       this.delay(3000).then(any=>{
        this.showNullError= false;   
   })
    }
    else if(this.addLeave.value.number_of_leaves==null){
      this.showNullError=true
       this.delay(3000).then(any=>{
        this.showNullError= false;   
   })
    }
    else{
    this.request=new Leave();
    this.request.leaveName = this.addLeave.value.name;
    this.request.leaveType = this.addLeave.value.leaveType;
    this.request.fromDate = this.addLeave.value.from;
    this.request.toDate = this.addLeave.value.to;
    this.request.noOfLeaves = this.addLeave.value.number_of_leaves;
    this.request.description = this.addLeave.value.description;
    this.leaveService.addLeave(this.request);
    this.toastr.successToastr('Leave Created', 'Success!');
    this.addLeave.reset();
    this.ngOnInit();
    // this.showCreatetMsg=true;
    }

    
  }

  updateExistingLeave(){
    var req:any; 
    console.log(this.UpdateLeave.value)
    for (req in this.leave_type) { 
      
      if(this.leave_type[req].leaveName==this.UpdateLeave.value.leaveType){
        console.log(this.leave_type[req]);
        this.leave_type[req].toDate=this.UpdateLeave.value.to; 
        this.leave_type[req].fromDate=this.UpdateLeave.value.from;
        this.leaveService.addLeave(this.leave_type[req]);
        this.toastr.successToastr('Leave modified', 'Success!');
        break
      }
    this.ngOnInit();

   }

  }
  

  creditLeaveSubmit(){
    
    this.creditreq=new CreditLeaves();
    this.creditreq.facultyNames = this.creditleaves.value.select_faculty;
    this.creditreq.leaveName = this.creditleaves.value.leaveType;
    this.creditreq.leaveToCredit = this.creditleaves.value.number_of_leaves;
    this.leaveService.creditLeave(this.creditreq);
    this.toastr.successToastr('Leaves credited', 'Success!');
    this.creditleaves.reset();
    this.ngOnInit();
  }

  creditLeavesReset(){
    this.creditleaves.reset();
  }

  approve(){
    
    var data={leaveId:this.leaveId,status:"approved",remarks:this.acceptLeave.value.acceptRemark}
    console.log(data);
    this.leaveService.UpdateStatus(data);
    this.toastr.successToastr('Leave Request accepted', 'Success!');
    
  }

  Decline(){
    var data={leaveId:this.leaveId,status:"declined",remarks:this.declineLeave.value.declineRemark}
    console.log(data);
    this.leaveService.UpdateStatus(data)
    this.toastr.successToastr('Leave Request declined', 'Success!');

    
  }

  Modify(){
    var req:any; 
    for (req in this.leaveRequests) { 
      
      if(this.leaveRequests[req].leaveId==this.leaveId){
        console.log(this.leaveRequests[req]);
        this.leaveRequests[req].typeOfLeave=this.ModifyLeaves.value.leaveType;
        this.leaveRequests[req].toDate=this.ModifyLeaves.value.to; 
        this.leaveRequests[req].fromDate=this.ModifyLeaves.value.from;
        this.leaveRequests[req].fromDuration=this.ModifyLeaves.value.fromDuration;
        this.leaveRequests[req].toDuration=this.ModifyLeaves.value.toDuration;
        this.leaveRequests[req].considerHolidays=this.ModifyLeaves.value.considerHolidays;
        this.leaveService.modifyLeaveRequest(this.leaveRequests[req]);
        this.toastr.successToastr('Leave Request modified', 'Success!');
        break
      }
    this.ngOnInit();
   
   console.log(this.leaveRequests[req]);
     

   }
   
 
  }
 
  getLeavesByName(name:string){
    this.leaveService.getRequests().subscribe(data=>{
      this.leaveRequests=data;
      this.leaveRequests= this.leaveRequests.filter(
        book => book.appliedBy === name);
        console.log(this.leaveRequests)
    });
    console.log(name)
  }

  cancelAfterApproval(){
    console.log("sonal")
    this.leaveService.cancelRequest(this.leaveId);
    this.toastr.successToastr('Leaves Cancelled', 'Success!');
  }


  getLeavesLeft(name:string){
    this.leaveService.getLeavesLeft(name).subscribe(data=>{
      this.leavesLeft=data;
      console.log(this.leavesLeft);
    });
  }
  
  getLeavesByStatus(status:string){
    this.leaveService.getRequestsByStatus(status).subscribe(data=>{
      this.leaveRequests=data;
    });

  }

  // attendance

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

  onSubmit(){
    var curDate=new Date().toLocaleDateString();
    let fromDate: Date = new Date(this.addLeaveRequest.value.from); 
    var fDate= fromDate.toLocaleDateString();
    let toDate: Date = new Date(this.addLeaveRequest.value.to); 
    var tDate= toDate.toLocaleDateString();
    
    if(this.addLeaveRequest.value.leaveType==null){
      console.log("1")
      this.showNullError=true;
      this.delay(3000).then(any=>{
        this.showNullError= false;   
   })
    }
    else if(this.addLeaveRequest.value.fromDuration==""){
      console.log("2")
      this.showNullError=true;
      this.delay(3000).then(any=>{
        this.showNullError= false;   
   })
    }
    else if(this.addLeaveRequest.value.applyFrom==""){
      console.log("3")
      this.showNullError=true;
      this.delay(3000).then(any=>{
        this.showNullError= false;   
   })
    }
    else if(this.addLeaveRequest.value.applyTo==""){
      console.log("4")
      this.showNullError=true;
      this.delay(3000).then(any=>{
        this.showNullError= false;   
   })
    }
 

    else if(this.addLeaveRequest.value.from>this.addLeaveRequest.value.to){
      this.showDateError=true;
      this.delay(3000).then(any=>{
        this.showDateError= false;
        
   })
   this.addLeaveRequest.reset();

    }
    else{
    this.req=new LeaveRequest();
   
    this.req.typeOfLeave=this.addLeaveRequest.value.leaveType;
    this.req.fromDuration=this.addLeaveRequest.value.fromDuration;
    this.req.toDuration=this.addLeaveRequest.value.toDuration;
    this.req.fromDate=this.addLeaveRequest.value.applyFrom;
    this.req.considerHolidays=this.addLeaveRequest.value.considerHolidays;
    this.req.toDate=this.addLeaveRequest.value.applyTo;
    this.req.prefix=this.addLeaveRequest.value.applyFrom;
    this.req.suffix=this.addLeaveRequest.value.applyTo;
    this.req.details=this.addLeaveRequest.value.reason;
    this.req.status="pending";
    this.leaveService.addRequest(this.req);
    this.ngOnInit();
    this.toastr.successToastr('Leaves Request Sent', 'Success!');
    
    }
  }

}
