import { Component, OnInit } from '@angular/core';
import { Scheme } from 'src/app/Model/scheme.model';
import { CourseArray } from 'src/app/Model/course-detail.model';
import { IDropdownSettings } from 'ng-multiselect-dropdown';


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
  coursesSettings:IDropdownSettings={};
  selectedCourses = new Set();

  constructor() {
  }
  displayedColumns: string[] = [ 'name','view_link','link'];
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
    this.selectedCourses.delete(item.name)
  }

  onDeSelectAll(item : any){
    this.selectedCourses = new Set();
  }
}
