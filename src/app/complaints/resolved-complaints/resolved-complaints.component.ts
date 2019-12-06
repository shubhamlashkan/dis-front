import { Component, OnInit, Input } from '@angular/core';
import { ComplaintsService } from 'src/app/API_Service/complaints.service';
@Component({
  selector: 'app-resolved-complaints',
  templateUrl: './resolved-complaints.component.html',
  styleUrls: ['./resolved-complaints.component.scss']
})
export class ResolvedComplaintsComponent implements OnInit {
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
  @Input() cleanlinessResolvedComplaintsData:any;
  @Input() leResolvedComplaintsData:any; 
  @Input() cwnResolvedComplaintsData:any;
  @Input() eccwResolvedComplaintsData:any;
  @Input() otherResolvedComplaintsData:any;
  @Input() facultyResolvedComplaintsData:any;
  @Input() stuResolvedComplaintsData:any;
  @Input() emrsResolvedComplaintsData:any;
  @Input() telephoneResolvedComplaintsData:any;
  cleanlinessResolvedComplaintsInfo:any[];
  leResolvedComplaintsInfo:any[];
  cwnResolvedComplaintsInfo:any[];
  eccwResolvedComplaintsInfo:any[];
  otherResolvedComplaintsInfo:any[];
  facultyResolvedComplaintsInfo:any[];
  stuResolvedComplaintsInfo:any[];
  emrsResolvedComplaintsInfo:any[];
  telephoneResolvedComplaintsInfo:any[];
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
    this.cleanlinessResolvedComplaintsData=this.complaints.getResolvedCleanlinessComplaint()
  .subscribe(
    data=>{
      this.cleanlinessResolvedComplaintsInfo=data;
      console.log(this.cleanlinessResolvedComplaintsInfo);
    }
  )

  this.leResolvedComplaintsData=this.complaints.getResolvedLEComplaints()
  .subscribe(
    data=>{
      this.leResolvedComplaintsInfo=data;
      console.log(this.leResolvedComplaintsInfo);
    }
  )

  this.cwnResolvedComplaintsData=this.complaints.getResolvedCWNComplaints()
  .subscribe(
    data=>{
      this.cwnResolvedComplaintsInfo=data;
      console.log(this.cwnResolvedComplaintsInfo);
    }
  )

  this.eccwResolvedComplaintsData=this.complaints.getResolvedECCWComplaints()
  .subscribe(
    data=>{
      this.eccwResolvedComplaintsInfo=data;
      console.log(this.cleanlinessResolvedComplaintsInfo);
    }
  )

  this.otherResolvedComplaintsData=this.complaints.getResolvedOtherComplaints()
  .subscribe(
    data=>{
      this.otherResolvedComplaintsInfo=data;
      console.log(this.otherResolvedComplaintsInfo);
    }
  )

  this.facultyResolvedComplaintsData=this.complaints.getResolvedFacultyComplaints()
  .subscribe(
    data=>{
      this.facultyResolvedComplaintsInfo=data;
      console.log(this.facultyResolvedComplaintsInfo);
    }
  )

  this.stuResolvedComplaintsData=this.complaints.getResolvedStudentComplaints()
  .subscribe(
    data=>{
      this.stuResolvedComplaintsInfo=data;
      console.log(this.stuResolvedComplaintsInfo);
    }
  )

  this.emrsResolvedComplaintsData=this.complaints.getResolvedEMRSComplaints()
  .subscribe(
    data=>{
      this.emrsResolvedComplaintsInfo=data;
      console.log(this.emrsResolvedComplaintsInfo);
    }
  )

  this.telephoneResolvedComplaintsData=this.complaints.getResolvedTelephoneComplaints()
  .subscribe(
    data=>{
      this.telephoneResolvedComplaintsInfo=data;
      console.log(this.telephoneResolvedComplaintsInfo);
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
