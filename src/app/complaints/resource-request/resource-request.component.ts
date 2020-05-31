import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ComplaintsService } from 'src/app/API_Service/complaints.service';
import { ToastrManager } from 'ng6-toastr-notifications';
import { TokenStorageService } from 'src/app/authentication/token-storage.service'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-resource-request',
  templateUrl: './resource-request.component.html',
  styleUrls: ['./resource-request.component.scss']
})
export class ResourceRequestComponent implements OnInit {

  requestArray: any;
  unresolvedArray: any;
  resolvedArray: any;
  @ViewChild('f') addRequest: NgForm;
  displayForm = false;
  defaultCategory = 'stat';
  defaultPriority = 'High';
  requestData = {
    category: '',
    details: '',
    priority: '',
    deadlineDate: ''
  };
  submitted = false;
  @Input() getResourceCategoryData: any;
  getResourceCategoryInfo: any[];

  // constructor(private http:HttpClient){}
  constructor(private complaints: ComplaintsService, private tokenStorage: TokenStorageService, private toastr: ToastrManager) { }
  completionMessage: string = "Error has Occurred. Try after some time!!";
  cannotResolveRequest: string = "Could not resolve complaint. Try after some time!";
  
  ngOnInit() {
    this.complaints.getAllFacultyRequestsForId()
      .subscribe(data => {
        this.requestArray = data;
        console.log(this.requestArray)
        console.log(window.sessionStorage.AuthUsername)
      }
      )

    this.complaints.getAllUnresolvedRequests()
      .subscribe(data => {
        this.unresolvedArray = data;
        console.log(this.unresolvedArray)
      })
  }
  onButtonClick() {
    this.displayForm = !this.displayForm;
  }

  markResolved(index: any) {
    var request = this.unresolvedArray[index]
    this.complaints.setRequestResolved(request)
      .subscribe(data => {
        console.log(data)
        this.toastr.successToastr(data.message, 'Success!');
      }, error => {
        this.toastr.errorToastr(this.completionMessage, 'Alert!')
      })
  }

  clearForm() {
    (<HTMLFormElement>document.getElementById("Login")).reset();
  }

  authenticated() {
    if (window.sessionStorage.AuthUsername == 'pbamne' ||
      window.sessionStorage.AuthUsername == 'uthakar') {
      return true
    } else {
      return false
    }
  }
  showUnresolvedRequests() {
    this.complaints.getAllUnresolvedRequests()
      .subscribe(data => {
        this.unresolvedArray = data;
        console.log(data)
      })
  }

  showResolvedRequests() {
    this.complaints.getAllResolvedRequests()
      .subscribe(data => {
        this.resolvedArray = data;
        console.log(data)
      })
  }

  myDateParser(dateStr: string): string {
    // 2020-05-31 04:52:50
    let date = dateStr.substring(0, 10);
    let time = dateStr.substring(11, 19);
    let validDate = date + 'T' + time;
    return validDate
  }

  onSubmit(f) {
    console.log(f.value);
    this.complaints.addAFacultyResourceRequest(f.value.resourceData)
      .subscribe(data => {
        console.log(data)
        this.toastr.successToastr(data.message, 'Success!');
      }, error => {
        console.log(error)
        this.toastr.errorToastr(this.completionMessage, 'Alert!')
      }
      )
    this.clearForm();
    this.submitted = true;
    this.requestData.category = this.addRequest.value.resourceData.category;
    this.requestData.details = this.addRequest.value.resourceData.details;
    this.requestData.priority = this.addRequest.value.resourceData.priority;
    this.requestData.deadlineDate = this.addRequest.value.resourceData.deadlineDate;
  }
}


