import { Component, OnInit } from '@angular/core';
import { facultyData } from 'src/app/Model/facultyData';
import { FacultyDataService } from 'src/app/hod/faculty/faculty-data.service';


export interface SchemeElement {
  module: string;
  read: boolean;
  write: boolean;
}

const SCHEME_DATA: SchemeElement[] = [
  { module: 'Timetable', read: true, write: false },
  { module: 'Scheme', read: false, write: true },
  { module: 'Scholarship', read: false, write: false },  
];


@Component({
  selector: 'app-system-admin',
  templateUrl: './system-admin.component.html',
  styleUrls: ['./system-admin.component.scss'],
  
})
export class SystemAdminComponent implements OnInit {
  fData : facultyData[] =  new Array(new facultyData());
  fName : String[] = new Array(new String());
  faculty : string;

  constructor(private faculty_service: FacultyDataService ) {
    this.getFacultyData();
   }

   
  displayedColumns: string[] = [ 'module','read','write'];
  dataSource = SCHEME_DATA;

  ngOnInit() {
  }

  getFacultyData(): void{
    this.faculty_service.getFacultyData()
      .subscribe(response=> {
        this.fData = response.body;
        this.fData.forEach((faculty) => {
          this.fName.push(faculty.name)
        })

        console.log(this.fName[0])
        console.log(this.fName[1])

        this.fName.shift();
        
        console.log(this.fName[0])
        console.log(this.fName[1])

      });
  }

}
