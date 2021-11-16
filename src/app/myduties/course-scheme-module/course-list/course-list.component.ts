import { Component, OnInit } from '@angular/core';


export interface SchemeElement {
  name: string;
  code: string;
  credits: number;
}

const SCHEME_DATA: SchemeElement[] = [
  { name: 'OOPS', code: "CO4552", credits: 5 },
  { name: 'OOPS', code: "CO4552", credits: 5 },
  { name: 'OOPS', code: "CO4552", credits: 5 },
  { name: 'OOPS', code: "CO4552", credits: 5 },
];

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {

  constructor() { }
  displayedColumns: string[] = [ 'code','name','credits'];
  dataSource = SCHEME_DATA;
  ngOnInit() {
  }

}
