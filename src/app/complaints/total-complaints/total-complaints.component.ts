import { Component, OnInit, Input } from '@angular/core';
import { ComplaintsService } from 'src/app/API_Service/complaints.service';

@Component({
  selector: 'app-total-complaints',
  templateUrl: './total-complaints.component.html',
  styleUrls: ['./total-complaints.component.scss']
})
export class TotalComplaintsComponent implements OnInit {
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
  @Input() cleanlinessTotalComplaintsData:any;
  @Input() leTotalComplaintsData:any; 
  @Input() cwnTotalComplaintsData:any;
  @Input() eccwTotalComplaintsData:any;
  @Input() otherTotalComplaintsData:any;
  @Input() facultyTotalComplaintsData:any;
  @Input() stuTotalComplaintsData:any;
  @Input() emrsTotalComplaintsData:any;
  @Input() telephoneTotalComplaintsData:any;
  cleanlinessTotalComplaintsInfo:any[];
  leTotalComplaintsInfo:any[];
  cwnTotalComplaintsInfo:any[];
  eccwTotalComplaintsInfo:any[];
  otherTotalComplaintsInfo:any[];
  facultyTotalComplaintsInfo:any[];
  stuTotalComplaintsInfo:any[];
  emrsTotalComplaintsInfo:any[];
  telephoneTotalComplaintsInfo:any[];
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
    this.cleanlinessTotalComplaintsData=this.complaints.getTotalCleanlinessComplaint()
  .subscribe(
    data=>{
      this.cleanlinessTotalComplaintsInfo=data;
      console.log(this.cleanlinessTotalComplaintsInfo);
    }
  )

  this.leTotalComplaintsData=this.complaints.getTotalLEComplaints()
  .subscribe(
    data=>{
      this.leTotalComplaintsInfo=data;
      console.log(this.leTotalComplaintsInfo);
    }
  )

  this.cwnTotalComplaintsData=this.complaints.getTotalCWNComplaints()
  .subscribe(
    data=>{
      this.cwnTotalComplaintsInfo=data;
      console.log(this.cwnTotalComplaintsInfo);
    }
  )

  this.eccwTotalComplaintsData=this.complaints.getTotalECCWComplaints()
  .subscribe(
    data=>{
      this.eccwTotalComplaintsInfo=data;
      console.log(this.cleanlinessTotalComplaintsInfo);
    }
  )

  this.otherTotalComplaintsData=this.complaints.getTotalOtherComplaints()
  .subscribe(
    data=>{
      this.otherTotalComplaintsInfo=data;
      console.log(this.otherTotalComplaintsInfo);
    }
  )

  this.facultyTotalComplaintsData=this.complaints.getTotalFacultyComplaints()
  .subscribe(
    data=>{
      this.facultyTotalComplaintsInfo=data;
      console.log(this.facultyTotalComplaintsInfo);
    }
  )

  this.stuTotalComplaintsData=this.complaints.getTotalStudentComplaints()
  .subscribe(
    data=>{
      this.stuTotalComplaintsInfo=data;
      console.log(this.stuTotalComplaintsInfo);
    }
  )

  this.emrsTotalComplaintsData=this.complaints.getTotalEMRSComplaints()
  .subscribe(
    data=>{
      this.emrsTotalComplaintsInfo=data;
      console.log(this.emrsTotalComplaintsInfo);
    }
  )

  this.telephoneTotalComplaintsData=this.complaints.getTotalTelephoneComplaints()
  .subscribe(
    data=>{
      this.telephoneTotalComplaintsInfo=data;
      console.log(this.telephoneTotalComplaintsInfo);
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
