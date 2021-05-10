import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.scss']
})
export class PiechartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  getPieChart(idname) {
    return new Chart(idname, {
      type: 'pie',
      data: {
        labels : ['% Absent','% Present'],
        datasets: [
          {label: '% Present',
              fill: true,
              backgroundColor: [
                  '#e20404',
                  '#09ba09'],
              data: [30, 70],
  // Notice the borderColor
              borderColor:['#e20404',
              '#09ba09'],
              borderWidth: [1,1]
          }
      ]
      },
      options: {
        title: {
          display: true,
          position: 'top'
          },
          rotation: -0.7 * Math.PI,
          maintainAspectRatio: false,
      }
    });
  }

}
