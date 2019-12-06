import { Component, OnInit,Input } from '@angular/core';
import { ComplaintsService } from 'src/app/API_Service/complaints.service';

@Component({
  selector: 'app-my-complaints',
  templateUrl: './my-complaints.component.html',
  styleUrls: ['./my-complaints.component.scss']
})
export class MyComplaintsComponent implements OnInit {
  userType : string = localStorage.getItem('userType');
  student : boolean;
  staff : boolean;
  isFaculty : boolean;
  hod : boolean;
  cleanliness: boolean;
  le: boolean;
  cwn: boolean;
  ecc: boolean;
  other: boolean;
  faculty: boolean;
  stu: boolean;
  emrs: boolean;
  telephone: boolean;
  @Input() cleanlinessMyComplaintsData:any;
  @Input() leMyComplaintsData:any; 
  @Input() otherMyComplaintsData:any;
  @Input() facultyMyComplaintsData:any;
  @Input() stuMyComplaintsData:any;
  cleanlinessMyComplaintsInfo:any[];
  leMyComplaintsInfo:any[];
  otherMyComplaintsInfo:any[];
  facultyMyComplaintsInfo:any[];
  stuMyComplaintsInfo:any[];
  constructor(private complaints:ComplaintsService) { }

  ngOnInit() {
    this.student=false;
    this.staff=false;
    this.isFaculty=false;
    this.hod=false;

    this.cleanliness = true;
    this.le = true;
    this.cwn = true;
    this.ecc = true;
    this.other = true;
    this.faculty = true;
    this.stu = true;
    this.emrs = true;
    this.telephone = true;

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
      this.isFaculty = true;
    }
    this.cleanlinessMyComplaintsData=this.complaints.getMyCleanlinessComplaint()
  .subscribe(
    data=>{
      this.cleanlinessMyComplaintsInfo=data;
      console.log(this.cleanlinessMyComplaintsInfo);
    }
  )

  this.leMyComplaintsData=this.complaints.getMyLEComplaints()
  .subscribe(
    data=>{
      this.leMyComplaintsInfo=data;
      console.log(this.leMyComplaintsInfo);
    }
  )

  this.otherMyComplaintsData=this.complaints.getMyOtherComplaints()
  .subscribe(
    data=>{
      this.otherMyComplaintsInfo=data;
      console.log(this.otherMyComplaintsInfo);
    }
  )

  this.facultyMyComplaintsData=this.complaints.getMyFacultyComplaints()
  .subscribe(
    data=>{
      this.facultyMyComplaintsInfo=data;
      console.log(this.facultyMyComplaintsInfo);
    }
  )

  this.stuMyComplaintsData=this.complaints.getMyStudentComplaints()
  .subscribe(
    data=>{
      this.stuMyComplaintsInfo=data;
      console.log(this.stuMyComplaintsInfo);
    }
  )

 
  }
  showAll() {
    this.cleanliness = true;
    this.le = true;
    this.cwn = true;
    this.ecc = true;
    this.other = true;
    this.faculty = true;
    this.stu = true;
    this.emrs = true;
    this.telephone = true;
    }
 showOther() {
    this.cleanliness = false;
    this.le = false;
    this.cwn = false;
    this.ecc = false;
    this.other = true;
    this.faculty = false;
    this.stu = false;
    this.emrs = false;
    this.telephone = false;
  }
  showStudent() {
    this.cleanliness = false;
    this.le = false;
    this.cwn = false;
    this.ecc = false;
    this.other = false;
    this.faculty = false;
    this.stu = true;
    this.emrs = false;
    this.telephone = false;
  }
  showCleanliness() {
    this.cleanliness = true;
    this.le = false;
    this.cwn = false;
    this.ecc = false;
    this.other = false;
    this.faculty = false;
    this.stu = false;
    this.emrs = false;
    this.telephone = false;
  }
  showLe() {
    this.cleanliness = false;
    this.le = true;
    this.cwn = false;
    this.ecc = false;
    this.other = false;
    this.faculty = false;
    this.stu = false;
    this.emrs = false;
    this.telephone = false;
  }
  showCwn() {
    this.cleanliness = false;
    this.le = false;
    this.cwn = true;
    this.ecc = false;
    this.other = false;
    this.faculty = false;
    this.stu = false;
    this.emrs = false;
    this.telephone = false;
  }
  showEcc() {
    this.cleanliness = false;
    this.le = false;
    this.cwn = false;
    this.ecc = true;
    this.other = false;
    this.faculty = false;
    this.stu = false;
    this.emrs = false;
    this.telephone = false;
  }
  showFaculty() {
    this.cleanliness = false;
    this.le = false;
    this.cwn = false;
    this.ecc = false;
    this.other = false;
    this.faculty = true;
    this.stu = false;
    this.emrs = false;
    this.telephone = false;
  }
  showEmrs() {
    this.cleanliness = false;
    this.le = false;
    this.cwn = false;
    this.ecc = false;
    this.other = false;
    this.faculty = false;
    this.stu = false;
    this.emrs = true;
    this.telephone = false;
  }
  showTelephone() {
    this.cleanliness = false;
    this.le = false;
    this.cwn = false;
    this.ecc = false;
    this.other = false;
    this.faculty = false;
    this.stu = false;
    this.emrs = false;
    this.telephone = true;
   }
}
