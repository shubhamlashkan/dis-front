import { Component, OnInit } from '@angular/core';
import { FileUploadService } from 'src/app/API_Service/scheme.service';
import { BarchartComponent } from './../../miscellaneous/barchart/barchart.component';
import { StudentService } from 'src/app/API_Service/student.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  bar = [];
  syllabus_file: any[]=[];
  scheme_file:any[]=[];
  constructor(public chart: BarchartComponent, private fileUploadService: FileUploadService, private studentService: StudentService) { }

  ngOnInit() {
    this.studentService.getStudentAttendance().subscribe(data=>{
      
      this.bar=data;
      this.chart.getBarChart('barChart',this.bar);

   });
    this.fileUploadService.getAllRequestsSyllabus().subscribe(data=>{
      console.log(data);
      this.syllabus_file=data;
      
    });
    this.fileUploadService.getAllRequestsScheme().subscribe(data=>{
      console.log(data);
      this.scheme_file=data;
      
    });
  }
}
