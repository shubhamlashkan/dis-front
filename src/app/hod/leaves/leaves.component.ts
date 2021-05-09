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

@Component({
  selector: 'app-leaves',
  templateUrl: './leaves.component.html',
  styleUrls: ['./leaves.component.scss']
})
export class LeavesComponent implements OnInit {

 @ViewChild('f') addCategory:NgForm;
 @ViewChild('form') addLeave:NgForm;
 @ViewChild('credit') creditleaves:NgForm;
 @ViewChild("f") declineLeave:NgForm;
 @ViewChild("f") acceptLeave:NgForm;
 @ViewChild("modify") ModifyLeaves:NgForm;

 showconfirmationDecline:boolean=false;
 showconfirmationModify:boolean=false;
 showconfirmationAccept:boolean=false;
 showCreditMsg:boolean=false;
 showCreatetMsg:boolean=false;

 leavereq:LeaveRequest;
 private staffs :staffList[]=[]; 
 leavesLeft:any[]=[];
 leave_type:any[]=[];
 creditreq:CreditLeaves;
 request:Leave;
 leaves:any[]=[];
 leaveRequests:any[]=[];

//  dropdownList = [];
//   selectedItems = [];
//   dropdownSettings = {};

  constructor(private leaveService:LeaveService,private administrationService:AdministrationService) { }

  ngOnInit() {

    this.leaveService.getLeave().subscribe(data=>{
      console.log(data);
      this.leave_type=data;
      
    });

    this.administrationService.getStaffList().subscribe((response=>this.staffs=response.body));
    console.log(this.staffs)

    this.leaveService.getRequests().subscribe(data=>{
      this.leaveRequests=data;
    });
    

  //   this.dropdownList = this.staffs;
  //   this.selectedItems = [
     
  //   ];
  //   this.dropdownSettings = {
  //     singleSelection: false,
  //     idField: 'item_id',
  //     textField: 'item_text',
  //     selectAllText: 'Select All',
  //     unSelectAllText: 'Unselect All',
  //     itemsShowLimit: 5,
  //     allowSeachFilter: true
  //  }
  }

 
  getLeavesByName(name:string){
    this.leaveService.getRequestsByName(name).subscribe(data=>{
      this.leaveRequests=data;
    });
  }
  getLeavesLeft(name:string){
    this.leaveService.getLeavesLeft(name).subscribe(data=>{
      this.leavesLeft=data;
    });
  }
  
  getLeavesByStatus(status:string){
    this.leaveService.getRequestsByStatus(status).subscribe(data=>{
      this.leaveRequests=data;
    });

  }
  creditLeaveSubmit(){
    this.creditreq=new CreditLeaves();
    this.creditreq.facultyNames = this.creditleaves.value.select_faculty;
    this.creditreq.leaveName = this.creditleaves.value.leaveType;
    this.creditreq.leaveToCredit = this.creditleaves.value.number_of_leaves;
    this.leaveService.creditLeave(this.creditreq);
    this.showCreditMsg=true;
  }
  creditLeavesReset(){
    this.creditleaves.reset();
  }
   
  Decline(leavereq: LeaveRequest){
    leavereq.status="declined";
    this.showconfirmationDecline= true;
    this.leaveService.UpdateStatus(leavereq)

  }
  Accept(leavereq: LeaveRequest){
    leavereq.status="approved";
    this.showconfirmationAccept= true;
    this.leaveService.UpdateStatus(leavereq)

  }
  Modify(leavereq: LeaveRequest){
    leavereq.toDate=this.ModifyLeaves.value.to; 
    leavereq.fromDate=this.ModifyLeaves.value.from;
    this.showconfirmationModify=true;
  }
  
  CreateLeaveReset(){
    this.addLeave.reset();
  }
  CreateLeaveSubmit(){
    
    this.request=new Leave();
    this.request.leaveName = this.addLeave.value.name;
    this.request.leaveType = this.addLeave.value.leaveType;
    this.request.fromDate = this.addLeave.value.from;
    this.request.toDate = this.addLeave.value.to;
    this.request.noOfLeaves = this.addLeave.value.number_of_leaves;
    this.request.description = this.addLeave.value.description;
    this.leaveService.addLeave(this.request);
    this.showCreatetMsg=true
  }

}
