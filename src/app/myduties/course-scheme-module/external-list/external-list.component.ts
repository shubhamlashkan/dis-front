import { Component, OnInit } from '@angular/core';
import { CourseArray } from 'src/app/Model/course-detail.model';
import { ExternalData } from 'src/app/Model/external-data.model';
export interface SchemeElement {
  name: string;
  institute: string;
  id : number;
}

var EXTERNAL_DATA : Array<any> = [
  { id: 0,name: 'Prof. John Doe', institute: "IIT Indore", email: 'john@test.com', contact: '9999999999', course:['DBMS','OOPS'] },
  { id: 1,name: 'Prof. John Doe', institute: "IIT Indore", email: 'john@test.com', contact: '9999999999', course:['DBMS'] },

]

const SCHEME_DATA: SchemeElement[] = [];

EXTERNAL_DATA.forEach(external => {
  SCHEME_DATA.push({
    name: external.name,
    institute :external.institute,
    id: external.id
  })
})


@Component({
  selector: 'app-external-list',
  templateUrl: './external-list.component.html',
  styleUrls: ['./external-list.component.scss']
})
export class ExternalListComponent implements OnInit {
  external : ExternalData;
  courses : Array<any> = [];
  selectedCourses : Array<any> = [];

  constructor() { 
    this.external = new ExternalData(null,null,null,null,null);
    CourseArray.forEach(c => this.courses.push(c.name));
  }

  displayedColumns: string[] = [ 'name','institute','details'];
  dataSource = SCHEME_DATA;


  ngOnInit() {
  }
  
  onChange(e){
    this.selectedCourses.push(e);
    console.log(this.selectedCourses)
  }

  addNewCourse(){
    var list = document.getElementById('dropdown-list')
    var selectTag = document.getElementsByClassName('course-dropdown')[0].cloneNode(true);
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
  }

  viewExternal(i){
    console.log(i)
    this.external = { ...EXTERNAL_DATA[i]};
    console.log(this.external)

  }

  addExternal(){
    console.log("hfb")
  }


}
