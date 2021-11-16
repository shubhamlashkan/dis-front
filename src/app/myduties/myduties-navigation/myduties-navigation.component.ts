import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/authentication';
// import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-myduties-navigation',
  templateUrl: './myduties-navigation.component.html',
  styleUrls: ['./myduties-navigation.component.scss']
})
export class MydutiesNavigationComponent implements OnInit {

  roles: string[] = [];
  timetable:boolean = null;
  library:boolean = null;
  constructor(private router : Router,private tokenStorage: TokenStorageService) { }

  ngOnInit() {
    this.roles = this.tokenStorage.getAuthorities();
    console.log(this.roles);
    if(this.roles.includes("Mid Term Time Table") || this.roles.includes("Quiz Time Table") || this.roles.includes("Practical Time Table") || this.roles.includes("Semester Time Table"))
    {
      this.timetable = true;
    }
    if(this.roles.includes("Department Library") || this.roles.includes("Library Management"))
    {
      this.library = true;
    }
  }
    /* Set the width of the side navigation to 250px and the left margin of the page content to 250px */


}
