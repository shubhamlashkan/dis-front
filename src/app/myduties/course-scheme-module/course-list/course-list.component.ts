import { Component, OnInit } from '@angular/core';
import { CourseDetail } from 'src/app/Model/course-detail.model';

export interface SchemeElement {
  name: string;
  code: string;
  credits: number;
  edit: any;
  view : any;
  id:number
}
var COURSE_DATA : Array<any> = [
  {id:0,code:'CO',name:'DBMS',category:'ABC',lec_hrs:9,tut_hrs:5,practical_hrs:2,theory_credits:5,practical_credits:4,theory_max_marks:5,practical_max_marks:6},
  {id:1,code:'CO63527',name:'HUM',category:'ABC',lec_hrs:4,tut_hrs:5,practical_hrs:2,theory_credits:8,practical_credits:4,theory_max_marks:5,practical_max_marks:6},
]

const SCHEME_DATA: SchemeElement[] = [];

COURSE_DATA.forEach(course => {
  SCHEME_DATA.push({
    name : course.name,
    code : course.code,
    credits : course.theory_credits + course.practical_credits,
    edit : null,
    view : null,
    id : course.id
  })
})

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {
  course: CourseDetail;

  constructor() { 
    this.course = new CourseDetail(null,null,null,0,0,0,0,0,0,0);
  }

  displayedColumns: string[] = [ 'code','name','credits','edit','view'];
  dataSource = SCHEME_DATA;

  ngOnInit() {
  }

  editCourse(i){
    this.course = { ...COURSE_DATA[i] }; 
    console.log(this.course)
  }

  addCourse(){
    this.course = new CourseDetail(null,null,null,0,0,0,0,0,0,0);
  }

  viewCourse(i){
    this.course = { ...COURSE_DATA[i] };
  }

}
