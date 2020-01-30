import { Component, OnInit, ViewChild } from '@angular/core';
import { LibraryService } from 'src/app/API_Service/library.service';
import { librarySettings, allBooks, addBookCategory, subjectCategory, acronym} from '../bookDataObj';
import { NgForm } from '@angular/forms';
import { allThesis } from '../thesisDataObj';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit {
  group1 = '1';
  @ViewChild('f') changeSettingsForm:NgForm;
  @ViewChild('g') addNewCategoryForm:NgForm;
  @ViewChild('h') deleteCategoryForm:NgForm;
  @ViewChild('i') viewCategoryForm:NgForm;
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
  showError:boolean = false;
  errorMsg:string;
  private subject: subjectCategory[] = [];
  private acronymList:acronym[]=[];
  categoryExists:boolean = false;
  subjectExists:boolean = false;
  categoryFound:boolean = false;
  searchBy:string ;
  constructor(private service:LibraryService) { }

  ngOnInit() {
    this.buttonClick = false;
    this.settingsChanged=false; 
    this.categoryAdded=false;
    this.categoryRemoved = false;
    this.categoryFound = false;
    this.categoryExists = false;
    this.showError = false;
    // this.addNewCategoryForm.resetForm();
    // this.deleteCategoryForm.resetForm();
    // 
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
    this.categoryAdded = false;
    this.showError = false;
    this.addCategory = new addBookCategory(null,null,this.addNewCategoryForm.value.addBookCategory.subjectCategory,this.addNewCategoryForm.value.addBookCategory.subjectName,);
    this.service.addNewCategory(this.addCategory).subscribe((res:string)=>{
      this.message = res;
      this.showError = false;
      this.categoryAdded = true;
      this.service.getSubjectCatergoryAcronymList().subscribe((res: subjectCategory[]) => {
        this.subject = res;
        //console.log(this.subject);
      });

    },((error)=>{
      this.categoryAdded = false;
      this.showError = true;
      this.errorMsg = "Subject Category Already Exists";
    }))
   
    this.addNewCategoryForm.resetForm();

  }

  removeCategory()
  {
    this.categoryRemoved =false;
    //console.log(this.deleteCategoryForm.value.removeBookCategory.subjectCategory);
    this.service.deleteCategory(this.deleteCategoryForm.value.removeBookCategory.subjectCategory).subscribe((res:string)=>{
      this.messageRem = res;
      this.categoryRemoved = true;
      this.service.getSubjectCatergoryAcronymList().subscribe((res: subjectCategory[]) => {
        this.subject = res;
        //console.log(this.subject);
      });
    })
    this.deleteCategoryForm.resetForm();
  }
  getAcronym()
  {
    this.categoryExists = false;
    this.categoryFound = false;
    this.searchBy = this.viewCategoryForm.value.viewBookCategory.group1;
    
    if(this.searchBy==="1")
    {
        this.service.getCategoryBySubjectName(this.viewCategoryForm.value.viewBookCategory.subjectName).subscribe((res:acronym[])=>{
          this.acronymList = res;
          this.categoryFound =true;
        },((error)=>{
          this.categoryFound = false;
          this.categoryExists = true;
          this.errorMsg = error;
        }))
    }
    else{
        this.service.getSubjectNameByCategory(this.viewCategoryForm.value.viewBookCategory.subjectName).subscribe((res:acronym[])=>{
          this.acronymList=res;
          this.categoryFound = true;
        },((error)=>{
          this.categoryFound = false;
          this.categoryExists = true;
          this.errorMsg = error;
        }))
    }
  }
}
