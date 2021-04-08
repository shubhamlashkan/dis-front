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

  getBarChart(idname,bars) {
    var label=[];
    var percentage=[];
    var color=[];
    for( var i=0; i<bars.length;i++){
      var cc=bars[i].coursecode;
      var per=bars[i].percentage;
      var slot=`${cc},\n ${bars[i].attendance}/${bars[i].slot} `;
      if(per<60){
        color.push("red");
      }else if(per<75){
        color.push("#ffcc00");
      }else{
        color.push("green");
      }
     label.push(slot);
     percentage.push(per);
    //  console.log(label,percentage,color);
     if(i==bars.length-1){
       return this.getChart(idname,label,percentage,color);
     }
    }
    
  }
  getChart(idname,label,percentage,color){
   
    return new Chart(idname, {
      type: 'bar',
      data: {
        labels: label,
        datasets: [{
          label: ` % present`,
          data:percentage,
          backgroundColor: color,
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        tooltips:{
          enabled:true
        },
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
