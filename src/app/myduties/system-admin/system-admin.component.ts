import { Component, OnInit } from '@angular/core';
import { facultyData } from 'src/app/Model/facultyData';
import { FacultyDataService } from 'src/app/hod/faculty/faculty-data.service';


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
  ngOnInit() {
  }

  getFacultyData(): void{
    this.faculty_service.getFacultyData()
      .subscribe(response=> {
        this.fData = response.body;
        this.fData.forEach(faculty => {
          this.fName.push(faculty.name)
        })

        console.log(this.fName)
      });
  }

}
