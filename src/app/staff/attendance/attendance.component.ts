import { PiechartComponent } from './../../miscellaneous/piechart/piechart.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.scss']
})
export class AttendanceComponent implements OnInit {

  constructor(public chart: PiechartComponent) { }
  bar = [];

  ngOnInit() {
    this.bar = this.chart.getPieChart('pieChart');
 }

}
