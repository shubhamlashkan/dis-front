import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-resource-request',
  templateUrl: './resource-request.component.html',
  styleUrls: ['./resource-request.component.scss']
})
export class ResourceRequestComponent implements OnInit {


  @ViewChild('f') addRequest:NgForm;
  displayForm = false;
  defaultCategory='stat';
  defaultPriority='High';
  requestData = {
    category:'',
    details:'',
    priority:'',
    deadlineDate:'' 
  };
  submitted = false;
  @Input() getResourceCategoryData:any;
  getResourceCategoryInfo:any[];
  
  constructor(private http:HttpClient){}

  ngOnInit() {
  }

  onButtonClick()
  {
    this.displayForm = !this.displayForm;
  }
  //onSubmit(form:NgForm){
    // console.log(form);
  //}

  onSubmit()
  {
    //console.log(this.addRequest);
    this.submitted = true;
    this.requestData.category=this.addRequest.value.resourceData.category;
    this.requestData.details=this.addRequest.value.resourceData.details;
    this.requestData.priority=this.addRequest.value.resourceData.priority;
    this.requestData.deadlineDate=this.addRequest.value.resourceData.deadlineDate;
    
  }

 
}


