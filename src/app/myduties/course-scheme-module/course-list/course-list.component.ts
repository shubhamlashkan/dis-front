import { Component, OnInit } from '@angular/core';

export interface SchemeElement {
  code: string;
  name: string;
  credits: number;
}

const SCHEME_DATA: SchemeElement[] = [
  { code: "CO4452", name: 'OOPS', credits: 5 },
];

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
