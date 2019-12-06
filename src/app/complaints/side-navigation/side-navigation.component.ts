import { Component, OnInit, Input } from '@angular/core';
import { ComplaintsService } from 'src/app/API_Service/complaints.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.scss']
})
export class SideNavigationComponent implements OnInit {
  remaining:any;
  resolved:any;
  total:any;
  my:any;
  completionMessage : string;
  showConfirmation : boolean;
  resourceFormGroup : FormGroup;
  complaintPermissions: any;
  locations: any;
  userType : string = localStorage.getItem('userType');
  constructor(private complaints:ComplaintsService,private fb : FormBuilder) { }

  ngOnInit() {
    this.showConfirmation = false;
    // this.complaints.getLocation()
    // .subscribe(
    //   data => {
    //     this.locations = data;
    //     console.log(this.locations);
    //   }
    // )

    this.complaints.getPermissions()
    .subscribe(
      data => {
        this.complaintPermissions = data;
        console.log(this.complaintPermissions);
      }
    )
    this.resourceFormGroup = this.fb.group({
      resource : ['',Validators.required],
      details : ['',Validators.required]
    })
   this.complaints.getRemainingComplaintCount()
   .subscribe(
    data=>{
      this.remaining=data;
      console.log(this.remaining);
    }
   ); 
  
  this.complaints.getResolvedComplaintCount()
   .subscribe(
    data=>{
      this.resolved=data;
      console.log(this.resolved);
    }
   ); 
  
  this.complaints.getTotalComplaintCount()
   .subscribe(
    data=>{
      this.total=data;
      console.log(this.total);
    }
   ); 
  
  this.complaints.getMyComplaintCount()
   .subscribe(
    data=>{
      this.my=data;
      console.log(this.my);
    }
   ); 
  }
  getResource(details):void{
    console.log(details);
    this.complaints.addFacultyResource(details)
    .subscribe(
      data => {
        console.log(data);
        this.showConfirmation = true;
        this.completionMessage = data.message + '!';
      },
      error =>{
        console.log(error);
        this.showConfirmation = true;
        this.completionMessage = "Error has Occurred. Try after some time!!"
      }
    )
  }
  requestResourceForm():void{
    this.showConfirmation = false;
  }
}
