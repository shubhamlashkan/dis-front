import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.scss']
})
export class BarchartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  getBarChart(idname) {
    return new Chart(idname, {
      type: 'bar',
      data: {
        labels: ['CO34002', 'CO34005-T', 'CO34005-P', 'CO34007-T', 'CO34007-P', 'CO34008-T', 'CO34008-P', 'EC34013-T', 'EC34013-P'],
        datasets: [{
          label: '% present',
          data: [42, 62, 54, 33, 76, 66, 93, 71, 52],
          backgroundColor: [
            'red', '#ffcc00', 'red', 'red', 'green', '#ffcc00', 'green', '#ffcc00', 'red'
        ],
        borderColor: ['red', '#ffcc00', 'red', 'red', 'green', '#ffcc00', 'green', '#ffcc00', 'red'],
        borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,

        title: {
          text: 'Attendance till current date',
          display: true
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
              stepSize: 10,
              max: 100,
              font: 'bold'
            }
          }]
        }
      }
    });
  }

}
