import { Component, OnInit } from '@angular/core';
import { SidenavService } from 'src/app/API_Service/sidenav.service';

@Component({
  selector: 'app-sidenavigation',
  templateUrl: './sidenavigation.component.html',
  styleUrls: ['./sidenavigation.component.scss'],
  providers : [SidenavService]
})
export class SidenavigationComponent implements OnInit {
  userName: any;
  usertime: any;
  userId: any;

  constructor(private sidenav : SidenavService) { }
  userData :any;
  ngOnInit() {
    this.sidenav.getSideNavData()
    .subscribe(
      data=>{
        console.log(data);
        this.userData = data;
        this.userName = this.userData[0];
        this.usertime = this.userData[1],
        this.userId = this.userData[2];
      }
    )
  }

}
