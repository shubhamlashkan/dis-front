import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.scss']
})
export class RequestsComponent implements OnInit {


 @ViewChild('f') addCategory:NgForm;

 newCategoryData = {
   category:'',
   personName:''
 };
  displayForm = false;
  submitted = false;
  displayAcceptButton = false;
  displayDeclineButton = false;
  displayRemarkForm = false;
  displayAssignRequestForm = false;
  constructor() { }

  ngOnInit() {
  }
  onButtonClick()
  {
    this.displayForm = !this.displayForm;
  }
  onDeclineClick()
  {
    this.displayRemarkForm = true;
    this.displayDeclineButton = true;
    this.displayAcceptButton = true;
  }
  onAcceptClick()
  {
    this.displayAssignRequestForm = true;
    this.displayAcceptButton = true;
    this.displayDeclineButton = true;
  }
 

  onSubmit(){
  //console.log(this.addCategory);
  //console.log("Submitted");
  this.newCategoryData.category = this.addCategory.value.categoryData.category;
  this.newCategoryData.personName = this.addCategory.value.categoryData.personName;
  this.submitted = true;
  }

}
