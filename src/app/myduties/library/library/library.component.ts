import { Component, OnInit, ViewChild } from '@angular/core';
import { LibraryService } from 'src/app/API_Service/library.service';
import { librarySettings, allBooks} from '../bookDataObj';
import { NgForm } from '@angular/forms';
import { allThesis } from '../thesisDataObj';

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
  bookCount:number=0;
  books: allBooks[] = [];
  thesis: allThesis[] =[];
  thesisCount:number=0;
  settingsChanged:boolean=false;
  constructor(private service:LibraryService) { }

  ngOnInit() {
    this.buttonClick = false;
    this.settingsChanged=false;
    this.service.getLibrarySettings().subscribe((libSettings:librarySettings[])=>{
      this.setting = libSettings;
      console.log(this.setting);
    });
    this.service.getAllBooks().subscribe((bookData: allBooks[]) => {
      this.books = bookData;
      this.bookCount = this.books.length;
    });
    this.service.getAllThesis().subscribe((thesisData: allThesis[]) => {
      this.thesis = thesisData;
      this.thesisCount = this.thesis.length;
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
        this.settingsChanged = true;

      });
      this.buttonClick=false;
    }
    
  }

}
