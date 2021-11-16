import { Component, OnInit } from '@angular/core';


export interface SchemeElement {
  name: string;
  link: string;
  view_link: string;
}

const SCHEME_DATA: SchemeElement[] = [
  { name: 'BE 2022', link: "", view_link: "BE2022" },
  { name: 'BE 2021', link: "", view_link: "BE2021" },
  { name: 'ME 2021', link: "", view_link: "ME2021" },
  { name: 'ME 2022', link: "#", view_link: "ME2022" },
  
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
