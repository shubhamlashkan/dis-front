import { Component, OnInit, ViewChild } from '@angular/core';
import { LibraryService } from 'src/app/API_Service/library.service';
import { librarySettings} from '../bookDataObj';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit {

  @ViewChild('f') changeSettingsForm:NgForm;
  buttonClick:boolean = false;
  setting:librarySettings[]=[];
  settingsRes:string;
  updateSetting:librarySettings;
  constructor(private service:LibraryService) { }

  ngOnInit() {
    this.buttonClick = false;
    this.service.getLibrarySettings().subscribe((libSettings:librarySettings[])=>{
      this.setting = libSettings;
      console.log(this.setting);
    });
  }

  isButtonClicked()
  {
    this.buttonClick = true;
  }

  change()
  {
    
    if(this.buttonClick)
    {
      this.updateSetting = new librarySettings(this.changeSettingsForm.value.librarySettings.id,
      this.changeSettingsForm.value.librarySettings.noOfBooksAllowed,
      this.changeSettingsForm.value.librarySettings.penaltyPerDay,
      this.changeSettingsForm.value.librarySettings.returnDeadlineDays);  
      this.service.updateLibrarySettings(this.updateSetting).subscribe((res:string)=>
      {
        this.settingsRes = res;
      });
      this.buttonClick=false;
    }
    
  }

}
