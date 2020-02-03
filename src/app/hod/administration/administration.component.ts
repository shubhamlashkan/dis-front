import { Component, OnInit, ViewChild } from '@angular/core';
import { AdministrationService } from 'src/app/API_Service/administration.service';
import { categoryList, taskList, staffList, assignTaskData } from './administrationModel';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.scss']
})
export class AdministrationComponent implements OnInit {
 
  @ViewChild('f') assignTaskForm: NgForm;
 selectedCategoryId:string;
 private categories : categoryList[]=[];
 private tasks : taskList[]=[];
 private staffs :staffList[]=[]; 
 successMessage:string;
 success:boolean = false;
 showError:boolean = false;
 errorMsg:string;
 task:assignTaskData;
  constructor(private service: AdministrationService) { }
 
  ngOnInit() {
    this.successMessage = null;
    this.success = false;
    this.errorMsg = null;
    this.showError = false;
 this.service.getCategoryList().subscribe((res:categoryList[])=>{
   this.categories = res;
   console.log(this.categories);
 })
 this.service.getStaffList().subscribe((res:staffList[])=>{
   this.staffs = res;
 })
  }
  
  onSelect(event:any){
    this.selectedCategoryId = event.target.value;
    console.log(this.selectedCategoryId);
    this.service.getTaskByCategoryId(this.selectedCategoryId).subscribe((res:taskList[])=>{
      this.tasks = res;
    })
  }
  assignTask(){
    if(this.assignTaskForm.value.assignTaskData.deadline == "")
    {
      this.assignTaskForm.value.assignTaskData.deadline = null;

    }
    if(this.assignTaskForm.value.assignTaskData.description=="")
    {
      this.assignTaskForm.value.assignTaskData.description = null;
    }
    this.task = new assignTaskData(this.assignTaskForm.value.assignTaskData.deadline,
                                    this.assignTaskForm.value.assignTaskData.description,
                                    "Progress",
                                    this.assignTaskForm.value.assignTaskData.task,
                                    this.assignTaskForm.value.assignTaskData.staff);
                                    console.log(this.task);
   this.service.assignTask(this.task).subscribe((res:string)=>{
      this.successMessage = res;
      this.success = true;
   },((error)=>{
    this.showError = true;
    this.errorMsg = error;
  }))
   this.assignTaskForm.resetForm();
  }

}
