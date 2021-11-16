import { Component, OnInit } from '@angular/core';
export interface SchemeElement {
  name: string;
  college: string;
  credits: number;
}

const SCHEME_DATA: SchemeElement[] = [
  { name: 'Prof. John Doe', college: "IIT Indore", credits: 5 },
  { name: 'Prof. John Doe', college: "IIT Indore", credits: 5 },
  { name: 'Prof. John Doe', college: "IIT Indore", credits: 5 },
  
];

@Component({
  selector: 'app-external-list',
  templateUrl: './external-list.component.html',
  styleUrls: ['./external-list.component.scss']
})
export class ExternalListComponent implements OnInit {

  constructor() { }
  displayedColumns: string[] = [ 'name','college','details'];
  dataSource = SCHEME_DATA;
  ngOnInit() {
  }

}
