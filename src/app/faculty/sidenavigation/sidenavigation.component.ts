import { Component, OnInit } from '@angular/core';
import { FacultyService } from 'src/app/API_Service/faculty.service';
import { SidenavService } from 'src/app/API_Service/sidenav.service';

@Component({
  selector: 'app-sidenavigation',
  templateUrl: './sidenavigation.component.html',
  styleUrls: ['./sidenavigation.component.scss'],
  providers : [SidenavService]
})
export class SidenavigationComponent implements OnInit {
  // userName: any;
  // usertime: any;
  // userId: any;
  userData :any;
  constructor(private sidenav : SidenavService,private facultyService: FacultyService) { }
  
  ngOnInit() {
    this.facultyService.getSideNavigationDetails().subscribe(data=>{
      this.userData=data;
      console.log(data);
    })
  }

}
