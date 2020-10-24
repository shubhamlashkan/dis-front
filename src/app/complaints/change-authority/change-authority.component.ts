import { Component, OnInit } from '@angular/core';
import { ComplaintsService } from 'src/app/API_Service/complaints.service';
import { MatTableDataSource } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrManager } from 'ng6-toastr-notifications';

// export interface PeriodicElement {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
// }

export interface InfraInchargeDetails {
  id : string,
  location : string,
  previousIncharge : string,
  previousInchargeId : string
}

export interface NewInfraInchargeDetails {
  location : string,
  previousIncharge : string,
//  selectNewIncharge : string,
  //update : string;
}
// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
// ];

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
           // selectNewIncharge : '',
           // update : ''
          })
        }
        console.log(this.newInfraInchargeData);
        this.dataSource = new MatTableDataSource(this.newInfraInchargeData);
      }
    )
  }
}
