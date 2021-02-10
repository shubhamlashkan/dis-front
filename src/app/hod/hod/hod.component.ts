import { Component, OnInit } from '@angular/core';
import { SidenavService } from 'src/app/API_Service/sidenav.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-hod',
  templateUrl: './hod.component.html',
  styleUrls: ['./hod.component.scss'],
  
})
export class HodComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
    if(!this.isUserLoggedIn())
    {
      this.router.navigate(['login']);
    }
  }
  isUserLoggedIn()
  {
    let user = sessionStorage.getItem('authenticaterUser');
    return !(user===null);
  }


}
