import { Component, OnInit } from '@angular/core';
import { ComplaintsService } from 'src/app/complaints/complaints.service';
import { MatTableDataSource } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrManager } from 'ng6-toastr-notifications';


export interface InfraInchargeDetails {
  id : string,
  location : string,
  previousIncharge : string,
  previousInchargeId : string
}

export interface NewInfraInchargeDetails {
  location : string,
  previousIncharge : string,
}


@Component({
  selector: 'app-change-authority',
  templateUrl: './change-authority.component.html',
  styleUrls: ['./change-authority.component.scss']
})
export class ChangeAuthorityComponent implements OnInit {
  displayedColumns: string[] = ['location', 'previousIncharge'];
  infraInchargeData : InfraInchargeDetails[] = [];
  facultyStaffList : string[] = [];
  newInfraInchargeData : NewInfraInchargeDetails[] = [];
  dataSource: MatTableDataSource<NewInfraInchargeDetails>;
  authorityForm : FormGroup;
  constructor(private complaintService : ComplaintsService, private fb : FormBuilder, private toastr : ToastrManager) { }

  ngOnInit() {
    this.authorityForm = this.fb.group({
      locationId : ['', Validators.required],
      newIncharge : ['', Validators.required]
    })
    this.fetch();

    this.complaintService.getStaffFacultyList()
    .subscribe(
      data=>{
        this.facultyStaffList = data;
        console.log(this.facultyStaffList);
      }
    )
  }

  
  updateAuthority():void{
    console.log(this.authorityForm.value);
    let data = this.authorityForm.value;
    for(let i=0;i<this.facultyStaffList.length;i++){
      if(this.facultyStaffList[i]["id"] === this.authorityForm.value.newIncharge){
        data["inchargeName"]= this.facultyStaffList[i]["userName"]
      }
    }
    this.complaintService.updateInfraIncharge(data)
    .subscribe(
      data => {
        console.log(data);
        this.toastr.successToastr("Successfully updated.", 'Success!');
       this.fetch();
      },
      error =>{
        this.toastr.errorToastr(error.error.message, 'Alert!')
      }
    )
    console.log(data);
  }

  fetch(){
    this.complaintService.getInfraInchargeDetails()
    .subscribe(
      data=> {
        this.infraInchargeData = data;
        console.log(this.infraInchargeData);
        this.newInfraInchargeData = [];
        for(let i=0;i<this.infraInchargeData.length; i++){
          this.newInfraInchargeData.push({
            location :  this.infraInchargeData[i].location,
            previousIncharge : this.infraInchargeData[i].previousIncharge,
          })
        }
        console.log(this.newInfraInchargeData);
        this.dataSource = new MatTableDataSource(this.newInfraInchargeData);
      }
    )
  }
}
