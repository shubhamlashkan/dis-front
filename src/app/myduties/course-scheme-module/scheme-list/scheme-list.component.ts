import { Component, OnInit } from '@angular/core';


export interface SchemeElement {
  name: string;
  link: string;
  view_link: string;
}

const SCHEME_DATA: SchemeElement[] = [
  { name: 'Hydrogen', link: "", view_link:"/hi" },
  { name: 'Helium', link: "", view_link:"/hii" },
  { name: 'Lithium', link: "", view_link:"" },
  { name: 'Beryllium', link: "#", view_link:"" },
  
];

@Component({
  selector: 'app-scheme-list',
  templateUrl: './scheme-list.component.html',
  styleUrls: ['./scheme-list.component.scss']
})
export class SchemeListComponent implements OnInit {

  constructor() { }
  displayedColumns: string[] = [ 'name','view_link','link'];
  dataSource = SCHEME_DATA;
  ngOnInit() {
  }

}
