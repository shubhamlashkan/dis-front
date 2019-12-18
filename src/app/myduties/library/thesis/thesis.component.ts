import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { allThesis, addThesisData, addThesisResponse, getThesisByThesisId, updateThesisData, updateThesisResponse, removeThesisData } from '../thesisDataObj';
import { LibraryService } from 'src/app/API_Service/library.service';
import { updateBookData } from '../bookDataObj';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-thesis',
  templateUrl: './thesis.component.html',
  styleUrls: ['./thesis.component.scss']
})
export class ThesisComponent implements OnInit {
  @ViewChild('f') addThesisForm : NgForm;
  @ViewChild('g') updateThesisForm:NgForm;
  @ViewChild('h') removeThesisForm:NgForm;


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
 

  constructor(private service : LibraryService) { }

  ngOnInit() {
    this.ShowId = false;
    this.updateButton=false;
    this.removeButton=false;
    this.service.getAllThesis().subscribe((thesisData:allThesis[])=>{
      this.thesis = thesisData;
    })
    
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
    console.log(this.service.addThesisDetails(this.Thesis));
    this.service.addThesisDetails(this.Thesis).subscribe((res:addThesisResponse)=>{
      this.responseAdd = res;
      console.log(this.responseAdd.thesisId);
      this.data =  this.responseAdd.message+ ' '+ this.responseAdd.thesisId;
      this.ShowId=true;
    });
    this.addThesisForm.resetForm();

  
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
              console.log(this.updatedata);
              this.service.updateThesisByThesisId(this.updateThesisForm.value.updateThesisData.thesisId,this.updatedata).subscribe((res:updateThesisResponse)=>{
                this.responseUpdate=res;
                this.msg = this.responseUpdate.message + this.responseUpdate.thesisId;
                console.log(this.msg);
              });
              this.updateButton=false;                             
   }
 }

 remove(){
   this.service.removeThesisByThesisId(this.removeThesisForm.value.removeThesisData.thesisId).subscribe((res:string)=>{

   this.removeRes = res;
   this.removeButton=true;

      });
 }

}