import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sem-time-table',
  templateUrl: './sem-time-table.component.html',
  styleUrls: ['./sem-time-table.component.scss']
})
export class SemTimeTableComponent implements OnInit {
  @ViewChild('f') facultyNameForm : NgForm;
  @ViewChild('g') dayForm : NgForm;
  @ViewChild('h') addTimetableForm : NgForm;
  @ViewChild('i') facultyNameUpForm : NgForm;

  showDay : boolean = false;
  

  constructor() { }

  ngOnInit() {
    this.showDay = false;
  }
  onAddDay(){
    this.showDay = true;
  }

  containers = [];

  add() {
    this.containers.push(this.containers.length);
  }
  remove()
  {
    this.containers.pop();
  }
  onAddTimetable(){

  }
 
}
