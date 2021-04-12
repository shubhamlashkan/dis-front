import { Component, OnInit } from '@angular/core';
import { SidenavService } from 'src/app/API_Service/sidenav.service';
import { StudentService} from 'src/app/API_Service/student.service';
import { TokenStorageService } from 'src/app/authentication';


@Component({
  selector: 'app-sidenavigation',
  templateUrl: './sidenavigation.component.html',
  styleUrls: ['./sidenavigation.component.scss'],
  providers : [SidenavService]
})
export class SidenavigationComponent implements OnInit {
  userData: any;
  userName: any;
  usertime: any;
  userId: any;
  noOfPendingAssignments: any;
  constructor(private sidenav : TokenStorageService,private studentService: StudentService) { }

  ngOnInit() {
    // this.sidenav.getSideNavData()
    // .subscribe(
    //   data=>{
    //     console.log("HArsh"+data);
    //     this.userData = data;
    //     this.userName = this.userData[0];
    //     this.usertime = this.userData[1],
    //     this.userId = this.userData[2];
    //   }
    // )
    this.userId=this.sidenav.getUsername();
    this.studentService.getNoOfPendingAssignments().subscribe(data=>{
      this.noOfPendingAssignments=data;
    })
  }

}
