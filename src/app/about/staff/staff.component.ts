import { EmployeeService } from './../employee.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss']
})
export class StaffComponent implements OnInit {

  constructor(private employeeHandler: EmployeeService) { }
  staffList: any;
  staffMembers: any[];
  ngOnInit() {
    this.staffList = this.employeeHandler.getStaffDetails().subscribe(data => {
      this.staffMembers = data;
      console.log(this.staffMembers);
    });
  }
}
