import { Component, OnInit } from '@angular/core';
import { BarchartComponent } from './../../miscellaneous/barchart/barchart.component';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.scss']
})
export class AttendanceComponent implements OnInit {

  bar = [];
  constructor(public chart: BarchartComponent) { }

  ngOnInit() {
    this.bar = this.chart.getBarChart('barChart');
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

}
