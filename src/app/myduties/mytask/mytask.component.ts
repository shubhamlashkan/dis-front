import { Component, OnInit } from '@angular/core';
import { MytaskService } from './mytask.service';
import { searchTask } from './myTaskModel';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-mytask',
  templateUrl: './mytask.component.html',
  styleUrls: ['./mytask.component.scss']
})
export class MytaskComponent implements OnInit {
  showByStaffId:searchTask[]=[];
  constructor(private service: MytaskService,public toastr: ToastrManager) { }
  userID:string;
  setstatus:string ;
  ngOnInit() {
   this.userID = sessionStorage.getItem('userId');
    this.service.getTaskByUserId(this.userID).subscribe((response=>this.showByStaffId=response.body))
    console.log(this.showByStaffId);
  }
  markComplete(id:string)
  {
    console.log(id);
    this.setstatus="Completed";
    this.service.updateStatus(id,this.setstatus).subscribe(response=>{
      if(response.ok) {
        //this.router.navigate(['/']);
        this.toastr.successToastr(response.body['message'], 'Success!');
        console.log(response.body['message']);
        this.ngOnInit();
      }},
      error => {
        if(error.status === 400) {
          this.toastr.errorToastr(error.error['message'], 'Alert!');
       console.log(error.error['message']);
      }
    })
  }
  
}
