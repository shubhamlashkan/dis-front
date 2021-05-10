import { Component, OnInit, ViewChild } from '@angular/core';
import { facultyData, addMember,addMemberResponse } from 'src/app/Model/facultyData';
import { FacultyDataService } from './faculty-data.service';
import { NgForm } from '@angular/forms';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.scss']
})
export class FacultyComponent implements OnInit {

  //Forms Declared
  @ViewChild('f') addMemberForm : NgForm;
  //Variable declared to send and receive data from API's
  Member: addMember;
  responseAdd: string;
  errormsg : string;
  searchedRecord : boolean;
 



  fData : facultyData[]= new Array(new facultyData());
  sData :  facultyData[] = new Array (new facultyData());
  allData : facultyData[] = new Array(new facultyData());

  constructor(private faculty_service: FacultyDataService, public toastr: ToastrManager) { 
    this.getFacultyData();
    this.getStaffData();
  
  }

  //Get Faculty Data
  getFacultyData(): void{
    this.faculty_service.getFacultyData()
      .subscribe(response => this.fData= response.body);
      console.log(this.fData);
  }
  //Get Staff Data
  getStaffData(): void{
    this.faculty_service.getStaffData()
      .subscribe(data =>this.sData = data.body);
      console.log(this.sData);
  }

  //Search Staff Data by Name
  getStaffDataByName(name: string){
   
    if(name == ''){
      this.searchedRecord=false;
    }
    else{
      this.faculty_service.getStaffDataByName(name).subscribe(response => this.allData= response.body,
        );
      console.log(this.allData);
      this.searchedRecord=true;
    }

  }

  //Add New Faculty or Staff Details
onSubmit(){
  this.Member = new addMember(this.addMemberForm.value.addMemberData.class, this.addMemberForm.value.addMemberData.designation,
    this.addMemberForm.value.addMemberData.dob, this.addMemberForm.value.addMemberData.email, this.addMemberForm.value.addMemberData.emp_id,
    this.addMemberForm.value.addMemberData.date_j, this.addMemberForm.value.addMemberData.number, this.addMemberForm.value.addMemberData.name1,
    this.addMemberForm.value.addMemberData.type);
    console.log(this.Member);
    this.faculty_service.addMemberDetails(this.Member).subscribe( 
      response => {

      if(response.ok) {
        //this.router.navigate(['/']);
        this.toastr.successToastr(response.body['message'], 'Success!');
        console.log(response.body['message']);
      }
    },
    error => {
      if(error.status === 400) {
        this.toastr.errorToastr(error.error['message'], 'Alert!');
    
     console.log(error.error['message']);
    
    }
  }
    );
    this.addMemberForm.resetForm();
    


}
  ngOnInit() {

    this.searchedRecord = false;
  }

}
