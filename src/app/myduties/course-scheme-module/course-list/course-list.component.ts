import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

export interface SchemeElement {
  name: string;
  code: string;
  credits: number;
}

const SCHEME_DATA: SchemeElement[] = [
  { name: 'OOPS', code: "CO4552", credits: 5 },
  { name: 'OOPS', code: "CO4552", credits: 5 },
  { name: 'OOPS', code: "CO4552", credits: 5 },
  { name: 'OOPS', code: "CO4552", credits: 5 },
];

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
  openDialog() {
    const dialogRef = this.dialog.open(DialogContentExampleDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  displayedColumns: string[] = [ 'code','name','credits'];
  dataSource = SCHEME_DATA;
  ngOnInit() {
  }

}

@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'dialog-content-example-dialog.html',
})
export class DialogContentExampleDialog {}
