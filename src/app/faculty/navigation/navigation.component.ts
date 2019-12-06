import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SidenavService } from 'src/app/API_Service/sidenav.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  providers : [SidenavService]
})
export class NavigationComponent implements OnInit {

  constructor(private router : Router,private sidenav : SidenavService) { }

  ngOnInit() {
    
  }
  logout():void{
    window.sessionStorage.clear();
    this.router.navigate(['/login']);
  }
}
