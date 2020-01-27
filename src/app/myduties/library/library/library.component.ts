import { Component, OnInit, ViewChild } from '@angular/core';
import { LibraryService } from 'src/app/API_Service/library.service';
import { librarySettings, allBooks, addBookCategory, subjectCategory} from '../bookDataObj';
import { NgForm } from '@angular/forms';
import { allThesis } from '../thesisDataObj';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit {

  @ViewChild('f') changeSettingsForm:NgForm;
  @ViewChild('g') addNewCategoryForm:NgForm;
  @ViewChild('h') deleteCategoryForm:NgForm;
  buttonClick:boolean = false;
  setting:librarySettings[]=[];
  settingsRes:string;
  updateSetting:librarySettings;
  bookCount:number=0;
  books: allBooks[] = [];
  thesis: allThesis[] =[];
  thesisCount:number=0; 
  settingsChanged:boolean=false;
  categoryAdded:boolean=false;
  addCategory:addBookCategory;
  message:string;
  messageRem:string;
  categoryRemoved:boolean = false;
  private subject: subjectCategory[] = [];
  constructor(private service:LibraryService) { }

  ngOnInit() {
    this.buttonClick = false;
    this.settingsChanged=false; 
    this.categoryAdded=false;
    this.categoryRemoved = false;
    this.service.getLibrarySettings().subscribe((libSettings:librarySettings[])=>{
      this.setting = libSettings;
      //console.log(this.setting);
    });
    this.service.getAllBooks().subscribe((bookData: allBooks[]) => {
      this.books = bookData;
      this.bookCount = this.books.length;
    });
    this.service.getAllThesis().subscribe((thesisData: allThesis[]) => {
      this.thesis = thesisData;
      this.thesisCount = this.thesis.length;
    });

    this.service.getSubjectCatergoryAcronymList().subscribe((res: subjectCategory[]) => {
      this.subject = res;
      //console.log(this.subject);
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


  onSubmit()
  {
    this.addCategory = new addBookCategory(null,null,this.addNewCategoryForm.value.addBookCategory.subjectCategory,this.addNewCategoryForm.value.addBookCategory.subjectName,);
    this.service.addNewCategory(this.addCategory).subscribe((res:string)=>{
      this.message = res;
      this.categoryAdded = true;
    })
  }

  removeCategory()
  {
    console.log(this.deleteCategoryForm.value.removeBookCategory.subjectCategory);
    this.service.deleteCategory(this.deleteCategoryForm.value.removeBookCategory.subjectCategory).subscribe((res:string)=>{
      this.messageRem = res;
      this.categoryRemoved = true;
    })
  }
}
