import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { NgForm } from '@angular/forms';
import { ToastrManager } from 'ng6-toastr-notifications';
import { StudentSignUpService } from 'src/app/API_Service/student-sign-up.service';
import { StudentSignUp } from 'src/app/Model/student-sign-up.model';
import { apiSetting } from 'src/app/urls/apisetting';
@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {
  syllabus_file:any[]=[];
  fileToUpload: File = null;
  @ViewChild("addS") addS:NgForm;
  @ViewChild("addStudent") addStudent:NgForm;
  form:FormGroup;
  request: StudentSignUp;
  baseUrl : string = apiSetting.apiUser;
  constructor(public fb: FormBuilder,private studentService: StudentSignUpService, public toastr: ToastrManager ) { 
    this.form=this.fb.group({
      "file": [null]  })
  }

  ngOnInit() {
    this.studentService.getAllstudent().subscribe(data=>{
      console.log(data);
      this.syllabus_file=data;
      
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

   onSubmit1(){
    this.studentService.addFile(this.form).subscribe(data => {
      console.log(data)
      this.toastr.successToastr('Successfully Uploaded the Student File..!');
      },error => {
        if(error.status === 500) {
          this.toastr.errorToastr('Alert! Not able to Upload Student File');
       console.log(error.error['message']);
      }
    });
      this.addS.resetForm()
  }

  onSubmit(){
    this.request=new StudentSignUp();
    this.request.fullName = this.addStudent.value.fullName;
    this.request.courseId = this.addStudent.value.courseId;
    this.request.enrollmentId = this.addStudent.value.enrollmentId;
    this.request.admissionYear = this.addStudent.value.admissionYear;
    this.request.mobileNo = this.addStudent.value.mobileNo;
    this.request.dob = this.addStudent.value.dob;
    this.request.category = this.addStudent.value.category;
    this.request.gender = this.addStudent.value.gender;
    this.request.bloodGroup = this.addStudent.value.bloodGroup;
    this.request.schemeSemester=this.addStudent.value.schemeSemester;
    this.request.schemeYear=this.addStudent.value.schemeYear;
    console.log(this.request);
    this.studentService.addstudent(this.request).subscribe(data => {
      console.log(data)
      this.toastr.successToastr('Successfully Enroll the student..!');
      },error => {
        if(error.status === 500) {
          this.toastr.errorToastr('Alert! Not able to Enroll Student');
       console.log(error.error['message']);
      }
    });
      console.log(this.syllabus_file);
    this.addStudent.resetForm()
    
   }

   

 
}