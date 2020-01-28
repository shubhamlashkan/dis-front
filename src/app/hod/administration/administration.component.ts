import { Component, OnInit } from '@angular/core';
import { AdministrationService } from 'src/app/API_Service/administration.service';
import { categoryList } from './administrationModel';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.scss']
})
export class AdministrationComponent implements OnInit {


 private categories : categoryList[]=[];

  constructor(private service: AdministrationService) { }

  ngOnInit() {
 this.service.getCategoryList().subscribe((res:categoryList[])=>{
   this.categories = res;
   console.log(this.categories);
 })

  }

}
