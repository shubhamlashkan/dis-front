import { Component, OnInit } from '@angular/core';
import { BarchartComponent } from './../../miscellaneous/barchart/barchart.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  bar = [];
  constructor(public chart: BarchartComponent) { }

  ngOnInit() {
    this.bar = this.chart.getBarChart('barChart');
  }
}
