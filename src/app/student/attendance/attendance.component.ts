import { Component, OnInit } from '@angular/core';
import { JsonToCSVService } from 'src/app/API_Service/json-to-csv.service';
import { StudentService } from 'src/app/API_Service/student.service';
import { BarchartComponent } from './../../miscellaneous/barchart/barchart.component';
import {StudentAttenance} from './../../Model/studentAttendance.model';
@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.scss']
})
export class AttendanceComponent implements OnInit {

  bar:StudentAttenance[] ;
  constructor(public chart: BarchartComponent,public studentService:StudentService,private jsonToCSV: JsonToCSVService ) { }

  ngOnInit() {
   
    this.studentService.getStudentAttendance().subscribe(data=>{
       this.bar=data;
       console.log(data);
       this.chart.getBarChart('barChart',this.bar);
    });
     
  }

  openNav() {
    document.getElementById('applyforleave').style.width = '250px';
    document.getElementById('main').className = 'col-lg-7';
    document.getElementById('leaveinfo').className = 'col-lg-7';
    document.getElementById('applyforleave').className = 'col-lg-5 sidenavbar';
  }

  /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
 closeNav() {
    document.getElementById('applyforleave').style.width = '0';
    document.getElementById('applyforleave').className = 'col-lg-0 sidenavbar';
    document.getElementById('main').className = 'col-lg-12';
    document.getElementById('leaveinfo').className = 'col-lg-12';
  }

  showLeaves() {
    document.getElementById('main').style.display = 'none';
    document.getElementById('leaveinfo').style.display = 'block';
    this.closeNav();
  }

  showChart() {
    document.getElementById('main').style.display = 'block';
    document.getElementById('leaveinfo').style.display = 'none';
    this.closeNav();
  }
  getCSV(){
    console.log(Object.keys);
    this.jsonToCSV.downloadFile(this.bar,'attendance',["username","firstname","lastname","coursename","attendance","slot","percentage"]);
  }
}
