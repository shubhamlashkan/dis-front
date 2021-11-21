import { Component, OnInit } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
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
  selectedCourses = new Set();
  courses = []
  coursesSettings:IDropdownSettings={};


  constructor() { 
    this.external = new ExternalData(null,null,null,null,null);
  }

  displayedColumns: string[] = [ 'name','institute','details'];
  dataSource = SCHEME_DATA;


  ngOnInit() {
    var i = 1;
    CourseArray.forEach(c => {
      this.courses.push({
        id: i, name : c.name
      })
      i++;
    });
    this.coursesSettings = {
      idField : 'id',
      textField : 'name',
    };
  }
  onItemSelect(item: any) {
    this.selectedCourses.add(item.name)
    console.log('onItemSelect', this.selectedCourses);
  }
  onSelectAll(items: any) {
    items.forEach(item => {
      this.selectedCourses.add(item.name)
    });
    console.log('onSelectAll', this.selectedCourses);
  }
  
  onItemDeSelect(item : any){
    this.selectedCourses.delete(item)
  }

  onDeSelectAll(item : any){
    this.selectedCourses = new Set();
  }
}
