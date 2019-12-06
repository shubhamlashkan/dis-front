import { Component, OnInit } from '@angular/core';
import { InfraService } from '../services/infra.service';
import { Laboratory } from '../models/Laboratory';
import { facultyData } from 'src/app/Model/facultyData';
import { FacultyDataService } from 'src/app/hod/faculty/faculty-data.service';

@Component({
  selector: 'app-infrastructure-time-table',
  templateUrl: './infrastructure-time-table.component.html',
  styleUrls: ['./infrastructure-time-table.component.scss']
})
export class InfrastructureTimeTableComponent implements OnInit {

  fData : facultyData=new facultyData();
  sData : facultyData=new facultyData();
  lab : Laboratory = new Laboratory; 
  constructor(infraService: InfraService, private faculty_service: FacultyDataService) {
    this.lab = infraService.getInfraName();
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
