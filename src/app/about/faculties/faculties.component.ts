import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-faculties',
  templateUrl: './faculties.component.html',
  styleUrls: ['./faculties.component.scss']
})
export class FacultiesComponent implements OnInit {

  constructor(private employeeHandler: EmployeeService) { }
  facultyList: any;
  facultyMembers: any[];
  ngOnInit() {
    this.facultyList = this.employeeHandler.getFacultyDetails().subscribe(data => {
      this.facultyMembers = data;
      console.log(this.facultyMembers);
    });
  }
}
