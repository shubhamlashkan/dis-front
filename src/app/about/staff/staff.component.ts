import { EmployeeService } from './../employee.service';
import { Component, OnInit } from '@angular/core';
import { FacultyDataService } from 'src/app/hod/faculty/faculty-data.service';
import { facultyData } from 'src/app/Model/facultyData';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss']
})
export class StaffComponent implements OnInit {
  sData :  facultyData[] = new Array (new facultyData());

  constructor(private faculty_service: FacultyDataService) {

    this.getStaffData();
   }
   //Show all staffs
   getStaffData(): void{
    this.faculty_service.getStaffData()
      .subscribe(data =>this.sData = data.body);
      console.log(this.sData);
  }

  ngOnInit() {


  }
}
