import { Component, OnInit } from '@angular/core';
import { Scheme } from 'src/app/Model/scheme.model';


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

  constructor() { }
  displayedColumns: string[] = [ 'name','view_link','link'];
  dataSource = SCHEME_DATA;
  ngOnInit() {
  }

}
