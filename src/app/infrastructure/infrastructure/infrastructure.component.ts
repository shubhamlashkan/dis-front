import { Component, OnInit } from '@angular/core';
import { InfraService } from '../services/infra.service';
import { Laboratory } from "../models/Laboratory";
import { Others } from '../models/Others';
import { FacultyRoom } from '../models/FacultyRoom';
import { facultyData } from 'src/app/Model/facultyData';
import { FacultyDataService } from 'src/app/hod/faculty/faculty-data.service';

@Component({
  selector: 'app-infrastructure',
  templateUrl: './infrastructure.component.html',
  styleUrls: ['./infrastructure.component.scss']
})
export class InfrastructureComponent implements OnInit {
  labs: Laboratory = new Laboratory();
  others: Others = new Others();
  facultyRooms: FacultyRoom = new FacultyRoom();
  lab: Laboratory = new Laboratory();
  fData : facultyData=new facultyData();
  sData : facultyData=new facultyData();
  constructor(private infraservice: InfraService, private faculty_service: FacultyDataService) { 
    this.getallLabs();
    this.getallOthers();
    this.getFacultyRooms();
    this.getFacultyData();
    this.getStaffData();
  }
  
  getallLabs(): void {
    this.infraservice.getLabs()
        .subscribe(data => this.labs = data);
  }
  getallOthers(): void {
    this.infraservice.getOtherInfra()
        .subscribe(data => this.others = data);
  }

  getFacultyRooms(): void{
    this.infraservice.getFacultyRooms()
      .subscribe(data =>this.facultyRooms = data);
  }

  infraName(l: Laboratory): void{
    this.infraservice.setInfraName(l);
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
