import { Component, OnInit } from '@angular/core';
import { CourseDetail } from 'src/app/Model/course-detail.model';

export interface SchemeElement {
  name: string;
  code: string;
  credits: number;
  edit: any;
}

const SCHEME_DATA: SchemeElement[] = [
  { name: 'OOPS', code: "CO4552", credits: 5 , edit:null },
  { name: 'OOPS', code: "CO4552", credits: 5 , edit:null },
  { name: 'OOPS', code: "CO4552", credits: 5 , edit:null },
  { name: 'OOPS', code: "CO4552", credits: 5 , edit:null },
];

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {

  course_scheme : CourseDetail;

  constructor() { }

  displayedColumns: string[] = [ 'code','name','credits','edit'];
  dataSource = SCHEME_DATA;

  ngOnInit() {
  }
}
