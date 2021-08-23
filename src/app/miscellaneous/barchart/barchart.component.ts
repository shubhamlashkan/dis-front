import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.scss']
})
export class BarchartComponent implements OnInit {
  overallAttendance:any;
  attend:any;
  total:any;
  constructor() { }

  ngOnInit() {

  }

  getBarChart(idname,bars) {
    this.overallAttendance=0;
    this.total=0;
    this.attend=0;
    var label=[];
    var percentage=[];
    var color=[];
    for( var i=0; i<bars.length;i++){
      var cc=bars[i].coursecode;
      var per=bars[i].percentage;
      this.total+=bars[i].slot
      this.attend+=bars[i].attendance
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
    console.log(this.attend,this.total)
    this.overallAttendance=(this.attend/this.total)*100;
    this.overallAttendance=this.overallAttendance.toFixed(2);
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
          text: `Overall Attendance till current date ${this.overallAttendance}`,
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
