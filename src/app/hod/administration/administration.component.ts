import { Component, OnInit, ViewChild } from '@angular/core';
import { AdministrationService } from 'src/app/API_Service/administration.service';
import { categoryList, taskList, staffList, assignTaskData, searchTask } from './administrationModel';
import { NgForm } from '@angular/forms';
import { ToastrManager } from 'ng6-toastr-notifications';


@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.scss']
})
export class AdministrationComponent implements OnInit {
 
  @ViewChild('f') assignTaskForm: NgForm;
  @ViewChild('h') remove:NgForm;
 selectedCategoryId:string;
 private categories : categoryList[]=[];
 private tasks : taskList[]=[];
 private staffs :staffList[]=[]; 
selectedStaffId:string;
selectedTaskId:string;
 task:assignTaskData;
 showByStaffId:searchTask[]=[];
 showByTaskId:searchTask[]=[];
 assignedTask:searchTask[]=[];
 remTask:searchTask[]=[];
 searchByStaff:boolean = false;
 searchByTask:boolean = false; 
 searchedRecords:boolean = false;
 remId:string;
 taskStatus:string;
 constructor(private service: AdministrationService, public toastr: ToastrManager) { }
 
  ngOnInit() {
    this.searchByStaff= false;
    this.searchByTask = false;
    this.searchedRecords = false;
    this.remId = null;
    this.taskStatus = null;
 this.service.getCategoryList().subscribe((response=>this.categories=response.body));
 this.service.getStaffList().subscribe((response=>this.staffs=response.body));
 this.service.assignTaskInfo().subscribe((response=>this.assignedTask=response.body));
  }
  
  onSelect(event:any){
    this.selectedCategoryId = event.target.value;
    //console.log(this.selectedCategoryId);
    this.service.getTaskByCategoryId(this.selectedCategoryId).subscribe((response=>this.tasks=response.body));
  }
  onSelectStaff(event:any)
  {
    this.searchedRecords =true;
    //console.log(this.searchedRecords);
    this.searchByStaff = true;
    //console.log(this.searchByStaff);
    this.searchByTask = false;
    //console.log(this.searchByTask);
    this.selectedStaffId = event.target.value;
    this.service.getTaskByUserId(this.selectedStaffId).subscribe((response=>this.showByStaffId=response.body));
  }
  onSelectTask(event:any)
  {
    this.searchedRecords = true;
    this.searchByStaff = false;
    this.searchByTask = true;
    this.selectedTaskId = event.target.value;
    this.service.getAssignedTaskByTaskId(this.selectedTaskId).subscribe((response=>this.showByTaskId=response.body));
  }
  getTask(id:string)
  {
    //this.service.getAssignedTaskByTaskId(taskId).subscribe((response=>this.remTask=response.body));
    this.remId = id;
  }
  assignTask(){
    if(!this.assignTaskForm.value.assignTaskData.deadline)
    {
      this.assignTaskForm.value.assignTaskData.deadline = null;
      this.taskStatus = null;
    }
    else
    {
      this.taskStatus="Progress";
    }
    //console.log(this.assignTaskForm.value.assignTaskData.deadline);
    //console.log(this.taskStatus);
    if(!this.assignTaskForm.value.assignTaskData.description)
    {
      this.assignTaskForm.value.assignTaskData.description = null;
    }
    this.task = new assignTaskData(this.assignTaskForm.value.assignTaskData.deadline,
                                    this.assignTaskForm.value.assignTaskData.description,
                                    this.taskStatus,
                                    this.assignTaskForm.value.assignTaskData.task,
                                    this.assignTaskForm.value.assignTaskData.staff);
                                    
   this.service.assignTask(this.task).subscribe(response=>{
    if(response.ok) {
      //this.router.navigate(['/']);
      this.toastr.successToastr(response.body['message'], 'Success!');
      console.log(response.body['message']);
    }
   },
   error => {
     if(error.status === 400) {
       this.toastr.errorToastr(error.error['message'], 'Alert!');
    console.log(error.error['message']);
   }
 });
  this.assignTaskForm.resetForm();
  }


  removeTask()
  {
    //console.log(this.remove.value.removeTaskData.Id);
    console.log(this.remId);
    this.service.deleteTask(this.remId).subscribe(response=>{
      if(response.ok){
        
        this.toastr.successToastr(response.body['message'],'Success!');
        console.log(response.body['message']);
        this.ngOnInit();
      }
    },
    error => {
      if(error.status === 400) {
        this.toastr.errorToastr(error.error['message'], 'Alert!');
     console.log(error.error['message']);
    }
  });
  }

  
}
