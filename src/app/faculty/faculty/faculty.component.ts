import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.scss']
})
export class FacultyComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {

 
    // if(!this.isUserLoggedIn())
    // {
    //   this.router.navigate(['login']);
    // }
  }

  // isUserLoggedIn()
  // {
  //   let user = sessionStorage.getItem('authenticaterUser');
  //   return !(user===null);
  // }

}
