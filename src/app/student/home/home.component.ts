import { Component, OnInit } from '@angular/core';
import { FileUploadService } from 'src/app/API_Service/scheme.service';
import { BarchartComponent } from './../../miscellaneous/barchart/barchart.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  bar = [];
  syllabus_file: any[]=[];
  scheme_file:any[]=[];
  constructor(public chart: BarchartComponent, private fileUploadService: FileUploadService) { }

  ngOnInit() {
    this.bar = this.chart.getBarChart('barChart');
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
