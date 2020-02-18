import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { facultyData } from 'src/app/Model/facultyData';
import { FacultyDataService } from 'src/app/hod/faculty/faculty-data.service';

@Component({
  selector: 'app-faculties',
  templateUrl: './faculties.component.html',
  styleUrls: ['./faculties.component.scss']
})
export class FacultiesComponent implements OnInit {
  fData : facultyData[] =  new Array(new facultyData());

  constructor(private faculty_service: FacultyDataService ) {
    this.getFacultyData();
   }
   getFacultyData(): void{
    this.faculty_service.getFacultyData()
      .subscribe(response => this.fData= response.body);
      console.log(this.fData);
  }
  
  ngOnInit() {
   
  }
}
