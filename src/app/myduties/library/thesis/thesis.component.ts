import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { allThesis, addThesisData, addThesisResponse } from '../thesisDataObj';
import { LibraryService } from 'src/app/API_Service/library.service';

@Component({
  selector: 'app-thesis',
  templateUrl: './thesis.component.html',
  styleUrls: ['./thesis.component.scss']
})
export class ThesisComponent implements OnInit {
  @ViewChild('f') addThesisForm : NgForm;
   ShowId : boolean=false;
   Thesis : addThesisData;
   responseAdd : addThesisResponse;
   data : string;
  thesis : allThesis[] = [];
 

  constructor(private service : LibraryService) { }

  ngOnInit() {
    this.ShowId = false;
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
    });
    

  }

}