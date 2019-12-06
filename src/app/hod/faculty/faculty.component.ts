import { Component, OnInit } from '@angular/core';
import { facultyData } from 'src/app/Model/facultyData';
import { FacultyDataService } from './faculty-data.service';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.scss']
})
export class FacultyComponent implements OnInit {
  fData : facultyData=new facultyData();
  sData : facultyData=new facultyData();
  constructor(private faculty_service: FacultyDataService) { 
    this.getFacultyData();
    this.getStaffData();
  }

  getFacultyData(): void{
    this.faculty_service.getFacultyData()
      .subscribe(data => this.fData=data);
      console.log(this.fData);
  }
  
  getStaffData(): void{
    this.faculty_service.getStaffData()
      .subscribe(data =>this.sData = data);
      console.log(this.sData);
  }

  ngOnInit() {
  }

}
