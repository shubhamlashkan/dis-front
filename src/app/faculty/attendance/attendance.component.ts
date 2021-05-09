import { Component, OnInit,ViewChild } from '@angular/core';
import { PiechartComponent } from 'src/app/miscellaneous/piechart/piechart.component';
import {NgForm, Validators,FormControl,FormGroup} from "@angular/forms";
import {LeaveRequest} from "src/app/Model/leaveRequest.model";
import {LeaveService} from 'src/app/API_Service/leave.service';
import { IDropdownSettings } from 'ng-multiselect-dropdown';



@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.scss']
})

export class AttendanceComponent implements OnInit {

  
  @ViewChild("f") addLeave:NgForm;
  @ViewChild("rejoin") ReJoin:NgForm;
  @ViewChild("f") cancelLeave:NgForm;

  userName:String
  leave_type:any[]=[];
  request:LeaveRequest;
  approved=false;
  bar=[];
  leaveRequests:any[]=[];
  showconfirmationCancel:boolean=false;
  showconfirmationRejoin: boolean=false;
  showMsg: boolean = false;
  showDateError=false;
  showNullError=false;
  showPastDateError=false;
  showCreditError=false;

  constructor(public chart: PiechartComponent,private leaveService:LeaveService) { }

  ngOnInit() {

      this.userName = sessionStorage.getItem('authenticaterUser');
      console.log(this.userName)

      this.bar = this.chart.getPieChart('pieChart');
      this.leaveService.getLeave().subscribe(data=>{
        console.log(data);
        this.leave_type=data;
        
      });
      console.log(this.leave_type);

      this.leaveService.getRequests().subscribe(data=>{
        console.log(data);
        this.leaveRequests=data;
        
      });
      console.log(this.leaveRequests);
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
    
  
    console.log(fDate);
    console.log(this.addLeave.value.to)
    console.log(this.addLeave.value.from)
    console.log(this.addLeave.value.leaveType)
    console.log(this.addLeave.value.reason)
    
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
    this.leaveService.addRequest(this.request);
    
    this.showMsg= true;
    this.addLeave.reset();
    this.delay(3000).then(any=>{
      this.showMsg= false;})
    console.log(this.request)
    }
    
   }
   getRequests(){
     return this.leaveRequests;
   }
   onReset(){
    this.addLeave.reset();
   }
   
   Rejoin(req: LeaveRequest){
     req.toDate=this.ReJoin.value.to 
     this.showconfirmationRejoin= true;
   }
   
   Cancel(req:LeaveRequest){
  
    this.request.status="canceled";
     this.leaveService.deleteRequest(req);
     this.showconfirmationCancel= true;
  }
}
