import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sem-time-table',
  templateUrl: './sem-time-table.component.html',
  styleUrls: ['./sem-time-table.component.scss']
})
export class SemTimeTableComponent implements OnInit {
  @ViewChild('f') facultyNameForm : NgForm;

  constructor() { }

  ngOnInit() {
  }

}
