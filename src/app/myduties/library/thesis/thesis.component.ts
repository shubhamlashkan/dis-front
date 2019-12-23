import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { allThesis, addThesisData, addThesisResponse, getThesisByThesisId, updateThesisData, updateThesisResponse, removeThesisData, course, librarySettingsthesis, checkLimitDataThesis, checkPenaltyDataThesis, checkPenaltyResponseThesis } from '../thesisDataObj';
import { LibraryService } from 'src/app/API_Service/library.service';
import { updateBookData, librarySettings, issueBookData } from '../bookDataObj';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { optionSearch } from '../books/books.component';
import { apiSetting } from 'src/app/urls/apisetting';

@Component({
  selector: 'app-thesis',
  templateUrl: './thesis.component.html',
  styleUrls: ['./thesis.component.scss']
})
export class ThesisComponent implements OnInit {
  @ViewChild('f') addThesisForm : NgForm;
  @ViewChild('g') updateThesisForm:NgForm;
  @ViewChild('h') removeThesisForm:NgForm;
  @ViewChild('i') checkLimitForm:NgForm;
  @ViewChild('j') issueThesisForm:NgForm;
  @ViewChild('k') checkPenaltyForm: NgForm;
showIssue : boolean=false;
  onSuccessfulUpdate:boolean = false;
  removeButton:boolean=false;
  updateButton:boolean=false;
   ShowId : boolean=false;
   Thesis : addThesisData;
   responseAdd : addThesisResponse;
   data : string;
  thesis : allThesis[] = [];
  thesisById: getThesisByThesisId[] = [];
  updatedata:updateThesisData;
  responseUpdate:updateThesisResponse;
  msg:string;
  removeData:removeThesisData;
  removeRes:string;
  private course : course[] = [];
  private setting: librarySettingsthesis[] = [];
  checkIssue: checkLimitDataThesis;
  currentIssue: number;
thesisAllowed : string;
  allowIssueRequest: boolean = false;
  issueto: string;
  issueData : issueBookData;
  issueRes: string;
  checkPenalty: checkPenaltyDataThesis;
  error: string=null;
  showPenalty: boolean = true;
  penaltyRes: checkPenaltyResponseThesis[];
  searchBy:number=1;
  searchTerm:any=null;
  showSearchedRecord:boolean=false;
  searchedThesis:getThesisByThesisId[]=[];
  returnThesisId:number;
  returnThesisResponse:string;
  returnSuccess:boolean = false;
  selected:optionSearch = new optionSearch(1,'Id');
  options = [
    new optionSearch(1,'Id'),
    new optionSearch(2,'Title'),
    new optionSearch(3,'course'),
    new optionSearch(4,'submitted by'),
    new optionSearch(5,'guided by')
  ];

  constructor(private service : LibraryService) { }

  ngOnInit() {

    this.searchTerm=null;
    this.ShowId = false;
    this.updateButton=false;
    this.removeButton=false;
    this.service.getAllThesis().subscribe((thesisData:allThesis[])=>{
      this.thesis = thesisData;
    });
    this.service.getCourse().subscribe((courseList:course[])=>{
      this.course = courseList;
    })
    this.allowIssueRequest=false;
    this.onSuccessfulUpdate=false;
    this.showPenalty=false;
    this.returnSuccess = false;
    this.checkLimitForm.resetForm();
    this.checkPenaltyForm.resetForm();
    this.addThesisForm.resetForm();
    this.showIssue= false;
  }
  onSubmit (){
    console.log(this.addThesisForm);
    this.Thesis = new addThesisData();
    this.Thesis.title=this.addThesisForm.value.addThesisData.title;
    this.Thesis.year=this.addThesisForm.value.addThesisData.year;
    this.Thesis.submittedBy=this.addThesisForm.value.addThesisData.submittedBy;
    this.Thesis.guidedBy=this.addThesisForm.value.addThesisData.guidedBy;
    this.Thesis.course=this.addThesisForm.value.addThesisData.course;
    this.Thesis.cdStatus=this.addThesisForm.value.addThesisData.cdStatus;
    this.Thesis.remarks=this.addThesisForm.value.addThesisData.remarks;
    //console.log(this.service.addThesisDetails(this.Thesis));
    this.service.addThesisDetails(this.Thesis).subscribe((res:addThesisResponse)=>{
      this.responseAdd = res;
      //console.log(this.responseAdd.thesisId);
      this.data =  this.responseAdd.message+ ' '+ this.responseAdd.thesisId;
      this.ShowId=true;
    });
    this.addThesisForm.resetForm();

  
  }
  retrieveLibrarySettings() {
    this.service.getLibrarySettingsthesis().subscribe((libSettings: librarySettingsthesis[]) => {
      this.setting = libSettings;
    
    });
  }


  onThesisAdded()
  {
    this.ShowId=true;    
  }
  onUpdateButtonClick()
  {
    this.updateButton=true;
  }


 getThesisByThesisId(thesisId:number){
   this.service.getThesisByThesisId(thesisId).subscribe((thesisByIdData : getThesisByThesisId[])=>{
     this.thesisById = thesisByIdData;

   });
 }

 update(){
   if(this.updateButton)
   {
     this.updatedata = new updateThesisData(this.updateThesisForm.value.updateThesisData.cdStatus,
                                             this.updateThesisForm.value.updateThesisData.course,
                                             this.updateThesisForm.value.updateThesisData.guidedBy,
                                             this.updateThesisForm.value.updateThesisData.submittedBy,
                                             this.updateThesisForm.value.updateThesisData.title,
                                             this.updateThesisForm.value.updateThesisData.year);
              //console.log(this.updatedata);
              this.service.updateThesisByThesisId(this.updateThesisForm.value.updateThesisData.thesisId,this.updatedata).subscribe((res:updateThesisResponse)=>{
                this.responseUpdate=res;
                this.msg = this.responseUpdate.message + this.responseUpdate.thesisId;
                //console.log(this.msg);
              });
              this.updateButton=false;
              this.onSuccessfulUpdate=true;
   }
 }

 remove(){
   this.service.removeThesisByThesisId(this.removeThesisForm.value.removeThesisData.thesisId).subscribe((res:string)=>{

   this.removeRes = res;
   this.removeButton=true;

      });
 }


 checkLimit() {
  this.checkIssue = new checkLimitDataThesis();
  this.checkIssue.enrollments = this.checkLimitForm.value.checkLimitData.enrollment;
  //console.log(this.checkIssue.enrollments);
  this.service.getNoOfIssuesthesis(this.checkIssue.enrollments).subscribe((res: number) => {
    this.currentIssue = res;
    //console.log(this.currentIssue);
  
    if (this.currentIssue < this.checkLimitForm.value.checkLimitData.thesisAllowed) {
      this.allowIssueRequest = true;
      this.issueto = this.checkIssue.enrollments;
    }
    else {
      this.allowIssueRequest = false;
    }
  });
} 
issueThesis() {
  this.issueData = new issueBookData(null,this.issueThesisForm.value.issueThesisData.thesisId,
    this.issueto);
  //console.log(this.issueData);
  this.service.issueBook(this.issueData).subscribe((res: string) => {
    this.issueRes = res;
    //console.log(this.issueRes);
  });
    this.allowIssueRequest=false;
    this.showIssue=true;
   
  
    
  }


getPenalty() {
  this.checkPenalty = new checkPenaltyDataThesis();
  this.checkPenalty.thesisId = this.checkPenaltyForm.value.checkPenaltyDataThesis.thesisId;
  this.service.getIssueThesisInfo(this.checkPenalty.thesisId).subscribe((res: checkPenaltyResponseThesis[]) => {
    this.penaltyRes = res;
    this.showPenalty = true;
    this.returnThesisId = this.checkPenalty.thesisId;
    //console.log(this.penaltyRes);
  });
}
returnThesis(){
  this.service.returnThesis(this.returnThesisId).subscribe((res:string)=>{
    this.returnThesisResponse = res;
    this.returnSuccess = true;
    //console.log(this.returnThesisResponse);
  });
}



onSelect(optionId) { 
  this.selected = null;
  //console.log(optionId);
  for (var i = 0; i < this.options.length; i++)
  {
    if (this.options[i].id == optionId) {
      this.selected = this.options[i];     
      this.searchBy = this.options[i].id;
    }
  }
}
findBy(typedValue)
{
 
  this.searchTerm = typedValue;
  if(this.searchBy==1)
  {
      //console.log(this.searchTerm);
      this.service.getThesisByThesisId(this.searchTerm).subscribe((thesisByIdData: getThesisByThesisId[])=>{
        this.searchedThesis= thesisByIdData;
        //console.log(this.searchedThesis);
      });
      this.showSearchedRecord = true;
  }
   if(this.searchBy==2)
  {
    //console.log(this.searchTerm);
    this.service.getThesisByTitle(this.searchTerm).subscribe((thesisByIdData: getThesisByThesisId[])=>{
      this.searchedThesis=thesisByIdData;
    });
    this.showSearchedRecord=true;
  }
  if(this.searchBy==3)
  {
    //console.log(this.searchTerm);
    this.service.getThesisByCourse(this.searchTerm).subscribe((thesisByIdData: getThesisByThesisId[])=>{
      this.searchedThesis=thesisByIdData;
    });
    this.showSearchedRecord=true;
  }
  if(this.searchBy==4)
  {
    //console.log(this.searchTerm);
    this.service.getThesisBySubmittedBy(this.searchTerm).subscribe((thesisByIdData: getThesisByThesisId[])=>{
      this.searchedThesis=thesisByIdData;
    });
    this.showSearchedRecord=true;
  }
   if(this.searchBy==5)
   {
    //console.log(this.searchTerm);
    this.service.getThesisByGuidedBy(this.searchTerm).subscribe((thesisByIdData: getThesisByThesisId[])=>{
      this.searchedThesis=thesisByIdData;
    });
    this.showSearchedRecord=true;
  }
  
}
}