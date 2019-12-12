import { Component, OnInit } from '@angular/core';
import { LibraryService } from 'src/app/API_Service/library.service';
import { librarySettings } from '../bookDataObj';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit {


  setting:librarySettings[]=[];

  constructor(private service:LibraryService) { }

  ngOnInit() {
    this.service.getLibrarySettings().subscribe((libSettings:librarySettings[])=>{
      this.setting = libSettings;
      console.log(this.setting);
    });
  }

}
