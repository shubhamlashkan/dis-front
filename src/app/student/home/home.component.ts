import { Component, OnInit } from '@angular/core';
import { BarchartComponent } from './../../miscellaneous/barchart/barchart.component';
import { StudentService } from 'src/app/API_Service/student.service';
import {StudentAttenance} from './../../Model/studentAttendance.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  bar : StudentAttenance[];
  constructor(public chart: BarchartComponent,public studentService:StudentService) { }

  ngOnInit() {
    this.studentService.getStudentAttendance().subscribe(data=>{
      
      this.bar=data;
      this.chart.getBarChart('barChart',this.bar);

   });
  }
}
