import { Component, OnInit } from '@angular/core';
import { Scheme } from 'src/app/Model/scheme.model';
import { CourseArray } from 'src/app/Model/course-detail.model';


export interface SchemeElement {
  name: string;
  view_link: any;
  link: any;
  id:number
}

const SCHEME_DATA: Scheme[] = [
  { scheme_id: 'BE 2022', file_link: "", courses:[]},
  { scheme_id: 'BE 2021', file_link: "", courses:[]},
  { scheme_id: 'ME 2021', file_link: "", courses:[]},
  { scheme_id: 'ME 2022', file_link: "", courses:[]}, 
];

@Component({
  selector: 'app-scheme-list',
  templateUrl: './scheme-list.component.html',
  styleUrls: ['./scheme-list.component.scss']
})
export class SchemeListComponent implements OnInit {

  courses : Array<any> = [];
  selectedCourses : Array<any> = [];

  constructor() {
    CourseArray.forEach(c => this.courses.push(c.name));
  }
  displayedColumns: string[] = [ 'name','view_link','link'];
  dataSource = SCHEME_DATA;

  ngOnInit() {
  }

  onChange(e){
    this.selectedCourses.push(e);
    console.log("onchange" + this.selectedCourses)
  }
  onValue(){
    console.log(this.selectedCourses);
  }

  addNewCourse(){
    var list = document.getElementById('dropdown-list')
    var selectTag = document.getElementsByClassName('course-dropdown')[0].cloneNode(true);
    selectTag.addEventListener("click", this.onValue);
    while (selectTag.firstChild) {
      selectTag.removeChild(selectTag.lastChild);
    }
    var diff = $(this.courses).not(this.selectedCourses).get();
    for (const val of diff)
    {
        var option = document.createElement("option");
        option.value = val;
        option.text = val.charAt(0).toUpperCase() + val.slice(1);
        selectTag.appendChild(option);
    }
    list.appendChild(selectTag)
    console.log("addcourse" + this.selectedCourses)
  }

  

}
