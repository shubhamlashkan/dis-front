import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import {FileUploadService} from 'src/app/API_Service/scheme.service';
import {SchemeSyllabus} from "src/app/Model/Scheme.model";
import { ToastrManager } from 'ng6-toastr-notifications';
import { apiSetting } from 'src/app/urls/apisetting';
@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss']
})
export class DocumentsComponent implements OnInit {
  shortLink: string = "";
  // loading: boolean = false; // Flag variable
  // file: File = null; // Variable to store file
  syllabus_file:any[]=[];
  scheme_file: any[]=[];
  fileToUpload: File = null;
  @ViewChild("addSyllabus") addSyllabus:NgForm;
  form:FormGroup;
  request: any;
  baseUrl : String = apiSetting.apiAcademics;
  constructor(public fb: FormBuilder,private fileUploadService: FileUploadService, public toastr: ToastrManager ) { 
    this.form=this.fb.group({
      "file": [null],
    "course":" ",
    "semester": " "    });

    this.fileUploadService.getAllRequestsSyllabus().subscribe(data=>{
      this.syllabus_file=data;
      console.log(this.syllabus_file)
      
    });
    this.fileUploadService.getAllRequestsScheme().subscribe(data=>{
      this.scheme_file=data;
      console.log(this.scheme_file)
    });

  }

  ngOnInit() {
    this.fileUploadService.getAllRequestsSyllabus().subscribe(data=>{
      this.syllabus_file=data;
      console.log(this.syllabus_file)
      
    });
    this.fileUploadService.getAllRequestsScheme().subscribe(data=>{
      this.scheme_file=data;
      console.log(this.scheme_file)
    });
    
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    this.form.patchValue({
      file: this.fileToUpload
    });
    this.form.get('file').updateValueAndValidity();
    console.log(this.fileToUpload)

    
  }

  onReset(){
    this.addSyllabus.reset();
   }

  onSubmit(){
    console.log(this.addSyllabus.value)

    this.form.patchValue({
      course: this.addSyllabus.value.course
    });
    this.form.get('course').updateValueAndValidity();

    this.form.patchValue({
      semester: this.addSyllabus.value.semester
    });
    this.form.get('semester').updateValueAndValidity();


    if (this.addSyllabus.value.Title == "Syllabus"){
      this.fileUploadService.postFileSyllabus(this.form).subscribe(data => {
        console.log(data)
        this.toastr.successToastr('Successfully Uploaded the Syllabus!');
        this.ngOnInit();
        ;},error => {
              if(error.status === 400) {
                this.toastr.errorToastr('Alert ! Not able to Add Syllabus');
             console.log(error.error['message']);
            }
          });
      
    }

    else if (this.addSyllabus.value.Title == "Scheme"){
      this.fileUploadService.postFileScheme(this.form).subscribe(data => {
        console.log(data)
        this.toastr.successToastr('Successfully Uploaded the Scheme!');
        this.ngOnInit();
        ;},error => {
          if(error.status === 400) {
            this.toastr.errorToastr('Alert ! Not able to Add Scheme');
         console.log(error.error['message']);
        }
      });
    }
    this.addSyllabus.resetForm();
    
   }

   removeSyllabus()
  {
    console.log(this.request);
    this.fileUploadService.deleteSyllabus(this.request).subscribe(response=>{
      if(response.ok){
        
        this.toastr.successToastr(response.body['message'],'Success!');
        console.log(response.body['message']);
        this.ngOnInit();
      }});
  }

  removeScheme()
  {
    console.log(this.request);
    this.fileUploadService.deleteScheme(this.request).subscribe(response=>{
      if(response.ok){
        this.toastr.successToastr(response.body['message'],'Success!');
        console.log(response.body['message']);
        this.ngOnInit();
      }
  });
  }

  getTask(id: any)
  {
    this.request = id;
  }

}
