import { Component, OnInit } from '@angular/core';
import { ComplaintsService } from 'src/app/API_Service/complaints.service';
import { AddOtherComplaint } from '../complaints_other';
import { AddAFacultyComplaint } from '../complaints_faculty';
import { FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-addacomplaint',
  templateUrl: './addacomplaint.component.html',
  styleUrls: ['./addacomplaint.component.scss']
})


export class AddacomplaintComponent implements OnInit {
  userType : string = localStorage.getItem('userType');
  student : boolean;
  staff : boolean;
  faculty : boolean;
  hod : boolean;
 
   constructor(private fb: FormBuilder, private complaints: ComplaintsService, private toastr : ToastrManager) {
  }

  cleanlinessForm: FormGroup;
  leForm: FormGroup;
  studentForm: FormGroup;
  otherForm: FormGroup;
  facultyForm: FormGroup;
  cwnForm: FormGroup;
  eccwForm: FormGroup;
  emrsForm: FormGroup;
  telephoneForm: FormGroup;

  completionMessage: string="Error has Occurred. Try after some time!!";
  showConfirmation: boolean;
  errorMessage: string = "Error has Occurred. Try after some time!!";

   locations : string[] = [
    "Software Engineering Lab",
    "Data Science Lab",
    "IoT & Embedded Systems Lab",
    "Cluster Computing Lab",
    "Computer Networks & Distributed Computing Lab",
    "General Computing Lab",
    "Hardware & Peripherals Lab",
    "Project & Research Lab",
    "Audio Visual Learning Center",
    "217",
    "LT-201",
    "LT-301"
  ]
  ngOnInit() {
    this.showConfirmation = false;
  
    this.student=false;
    this.staff=false;
    this.faculty=false;
    this.hod=false;
    this.cleanlinessForm = this.fb.group({
      cleanlinessFields: this.fb.array([
        this.addCleanlinessFormGroup()
      ])
    });

    this.leForm = this.fb.group({
      leFields: this.fb.array([
        this.addLeFormGroup()
      ])
    });

    this.studentForm = this.fb.group({
      studentFields: this.fb.array([
        this.addStudentFormGroup()
      ])
    });

    this.otherForm = this.fb.group({
      otherFields: this.fb.array([
        this.addOtherFormGroup()
      ])
    })

    this.facultyForm = this.fb.group({
      facultyFields: this.fb.array([
        this.addFacultyFormGroup()
      ])
    })

    this.cwnForm = this.fb.group({
      cwnFields: this.fb.array([
        this.addCwnFormGroup()
      ])
    })

    this.eccwForm = this.fb.group({
      eccwFields: this.fb.array([
        this.addEccwFormGroup()
      ])
    })

    this.emrsForm = this.fb.group({
      emrsFields: this.fb.array([
        this.addEmrsFormGroup()
      ])
    })

    this.telephoneForm = this.fb.group({
      telephoneFields: this.fb.array([
        this.addTelephoneFormGroup()
      ])
    })

    if( this.userType === "student")
    {
      this.student = true;
    }
    if( this.userType === "staff"){
      this.staff = true;
    }
    if( this.userType === "head"){
      this.hod = true;
    }
    if(this.userType === "faculty")
    {
      this.faculty = true;
    }
 
  }
  addMoreTelephoneComplaint(): void {
    (<FormArray>this.telephoneForm.get('telephoneFields')).push(this.addTelephoneFormGroup());
  }
  addTelephoneFormGroup(): FormGroup {
    return this.fb.group({
      location: ['', Validators.required],
      details: ['', Validators.required]
    })
  }
  addMoreEmrsComplaint(): void {
    (<FormArray>this.emrsForm.get('emrsFields')).push(this.addEmrsFormGroup());
  }
  addEmrsFormGroup(): FormGroup {
    return this.fb.group({
      location: ['', Validators.required],
      details: ['', Validators.required]
    })
  }
  addMoreEccwComplaint(): void {
    (<FormArray>this.eccwForm.get('eccwFields')).push(this.addEccwFormGroup());
  }
  addEccwFormGroup(): FormGroup {
    return this.fb.group({
      location: ['', Validators.required],
      details: ['', Validators.required]
    })
  }
  addMoreCwnComplaint(): void {
    (<FormArray>this.cwnForm.get('cwnFields')).push(this.addCwnFormGroup());
  }
  addCwnFormGroup(): FormGroup {
    return this.fb.group({
      location: ['', Validators.required],
      details: ['', Validators.required]
    })
  }
  addMoreFacultyComplaint(): void {
    (<FormArray>this.facultyForm.get('facultyFields')).push(this.addFacultyFormGroup());
  }
  addFacultyFormGroup(): FormGroup {
    return this.fb.group({
      facultyName: ['', Validators.required],
      details: ['', Validators.required]
    })
  }
  addMoreCleanlinessComplaint(): void {
    (<FormArray>this.cleanlinessForm.get('cleanlinessFields')).push(this.addCleanlinessFormGroup());
  }
  addCleanlinessFormGroup(): FormGroup {
    return this.fb.group({
      location: ['', Validators.required],
      levelOfDust: ['', [Validators.required, Validators.min(1), Validators.max(5)]],
      details: ['', Validators.required]
    });
  }

  addMoreLeComplaint(): void {
    (<FormArray>this.leForm.get('leFields')).push(this.addLeFormGroup());
  }
  addLeFormGroup(): FormGroup {
    return this.fb.group({
      lab: ['', Validators.required],
      systemNo: ['', Validators.required],
      details: ['', Validators.required]
    })
  }

  addMoreStudentComplaints(): void {
    (<FormArray>this.studentForm.get('studentFields')).push(this.addStudentFormGroup());
  }
  addStudentFormGroup(): FormGroup {
    return this.fb.group({
      studentRollNo: ['', Validators.required],
      studentName: ['', Validators.required],
      course: ['', Validators.required],
      year: ['', Validators.required],
      details: ['', Validators.required]
    })
  }

  addMoreOtherComplaints(): void {
    (<FormArray>this.otherForm.get('otherFields')).push(this.addOtherFormGroup());
  }
  addOtherFormGroup(): FormGroup {
    return this.fb.group({
      details: ['', Validators.required]
    })
  }
  onCleanlinessSubmit(details) {
    console.log(details.cleanlinessFields[0]);
    this.complaints.addACleanlinessComplaint(details.cleanlinessFields[0])
    .subscribe(
      data => {
        console.log(data);
        this.toastr.successToastr(data.message, 'Success!');
      },
      error =>{
        this.toastr.errorToastr(this.completionMessage, 'Alert!')
      }
    )
  }
  onLeSubmit(details) {
    console.log(details.leFields[0]);
    this.complaints.addLeComplaint(details.leFields[0])
    .subscribe(
      data => {
        console.log(data);
        this.toastr.successToastr(data.message, 'Success!');
      },
      error =>{
        this.toastr.errorToastr(this.completionMessage, 'Alert!')
      }
    )
  }
  onStudentSubmit(details) {
    console.log(details.studentFields[0]);
    this.complaints.addStudentComplaint(details.studentFields[0])
    .subscribe(
      data => {
        console.log(data);
        this.toastr.successToastr(data.message, 'Success!');
      },
      error =>{
        this.toastr.errorToastr(this.completionMessage, 'Alert!')
      }
    )
  }
  onOtherSubmit(details) {
   console.log(details.otherFields[0]);
    this.complaints.addOtherComplaint(details.otherFields[0])
    .subscribe(
      data => {
        console.log(data);
        this.toastr.successToastr(data.message, 'Success!');
      },
      error =>{
        this.toastr.errorToastr(this.completionMessage, 'Alert!')
      }
    )
  }
  onFacultySubmit(details) {
    console.log(details.facultyFields[0]);
    this.complaints.addFacultyComplaint(details.facultyFields[0])
    .subscribe(
      data => {
        console.log(data);
        this.toastr.successToastr(data.message, 'Success!');
      },
      error =>{
        this.toastr.errorToastr(this.completionMessage, 'Alert!')
      }
    )
  }
  onCwnSubmit(details) {
    console.log(details.cwnFields);
    this.complaints.addCWNComplaint(details.cwnFields)
      .subscribe(
        data => {
          console.log(data);
          this.toastr.successToastr(data.message, 'Success!');
        },
        error =>{
          this.toastr.errorToastr(this.completionMessage, 'Alert!')
        }
      )
  }
  onEccwSubmit(details) {
    console.log(details);
    this.complaints.addEccwComplaint(details.eccwFields)
    .subscribe(
      data => {
        console.log(data);
        this.toastr.successToastr(data.message, 'Success!');
      },
      error =>{
        this.toastr.errorToastr(this.completionMessage, 'Alert!')
      }
    )
  }
  onEmrsSubmit(details) {
    console.log(details);
    this.complaints.addEmrsCompaint(details.emrsFields)
    .subscribe(
      data => {
        console.log(data);
        this.toastr.successToastr(data.message, 'Success!');
      },
      error =>{
        this.toastr.errorToastr(this.completionMessage, 'Alert!')
      }
    )
  }
  onTelephoneSubmit(details) {
    console.log(details);
    this.complaints.addTelephoneComplaint(details.telephoneFields)
    .subscribe(
      data => {
        console.log(data);
        this.toastr.successToastr(data.message, 'Success!');
      },
      error =>{
        this.toastr.errorToastr(this.completionMessage, 'Alert!')
      }
    )
  }

  resetForm(): void {
    this.showConfirmation = false;
  }
  
    
  // onFacultySubmit()
  // {
  //   console.log(this.faculty);
  //   this.facultyComplaint=new AddAFacultyComplaint(
  //     this.faculty.facultyName,this.faculty.details
  //   );
  //   this.complaints.addFacultyComplaint(this.facultyComplaint).subscribe(
  //     data=>{
  //       console.log(data);
  //       console.log("Faculty Complaint is registered");
  //     }
  //   )
  // }
}


