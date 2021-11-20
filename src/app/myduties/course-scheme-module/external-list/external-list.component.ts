import { Component, OnInit } from '@angular/core';
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

var courses = ['DBMS','OOPS','OS']

@Component({
  selector: 'app-external-list',
  templateUrl: './external-list.component.html',
  styleUrls: ['./external-list.component.scss']
})
export class ExternalListComponent implements OnInit {
  external : ExternalData;

  constructor() { 
    this.external = new ExternalData(null,null,null,null,null);
  }

  displayedColumns: string[] = [ 'name','institute','details'];
  dataSource = SCHEME_DATA;

  ngOnInit() {
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
