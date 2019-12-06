import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ComplaintsService } from 'src/app/API_Service/complaints.service';
import { NgForm } from '@angular/forms';
import { ToastrManager } from 'ng6-toastr-notifications';


@Component({
  selector: 'app-remaining-complaints',
  templateUrl: './remaining-complaints.component.html',
  styleUrls: ['./remaining-complaints.component.scss'],
})
export class RemainingComplaintsComponent implements OnInit {
  userType : string = localStorage.getItem('userType');
  @ViewChild('editComplaintForm') editComplaintForm : NgForm;
  @ViewChild('editOtherComplaintForm') editOtherComplaintForm : NgForm;
  student : boolean;
  staff : boolean;
  isFaculty : boolean;
  hod : boolean;
  count:number=0;
  cleanliness: boolean;
  le: boolean;
  cwn: boolean;
  ecc: boolean;
  other: boolean;
  faculty: boolean;
  stu: boolean;
  emrs: boolean;
  telephone: boolean;
  @Input() cleanlinessRemainingComplaintsData: any;
  @Input() leRemainingComplaintsData: any;
  @Input() cwnRemainingComplaintsData: any;
  @Input() eccwRemainingComplaintsData: any;
  @Input() otherRemainingComplaintsData: any;
  @Input() facultyRemainingComplaintsData: any;
  @Input() stuRemainingComplaintsData: any;
  @Input() emrsRemainingComplaintsData: any;
  @Input() telephoneRemainingComplaintsData: any;
  cleanlinessRemainingComplaintsInfo: any[];
  leRemainingComplaintsInfo: any[];
  cwnRemainingComplaintsInfo: any[];
  eccwRemainingComplaintsInfo: any[];
  otherRemainingComplaintsInfo: any[];
  facultyRemainingComplaintsInfo: any[];
  stuRemainingComplaintsInfo: any[];
  emrsRemainingComplaintsInfo: any[];
  telephoneRemainingComplaintsInfo: any[];

  selectedIndex : number;
  currentId : number;
  seletedType: string;
  completionMessage: string="Error has Occurred. Try after some time!!";;
  showConfirmation: boolean;
  constructor(private complaints: ComplaintsService, private toastr : ToastrManager) { }

  ngOnInit() {
    this.showConfirmation = false;
    this.student=false;
    this.staff=false;
    this.isFaculty=false;
    this.hod=false;

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
 
    this.cleanlinessRemainingComplaintsData = this.complaints.getRemainingCleanlinessComplaint()
      .subscribe(
        data => {
          this.cleanlinessRemainingComplaintsInfo = data;
          console.log(this.cleanlinessRemainingComplaintsInfo);
        }
      )

    this.leRemainingComplaintsData = this.complaints.getRemainingLEComplaints()
      .subscribe(
        data => {
          this.leRemainingComplaintsInfo = data;
          console.log(this.leRemainingComplaintsInfo);
        }
      )

    this.cwnRemainingComplaintsData = this.complaints.getRemainingCWNComplaints()
      .subscribe(
        data => {
          this.cwnRemainingComplaintsInfo = data;
          console.log(this.cwnRemainingComplaintsInfo);
        }
      )

    this.eccwRemainingComplaintsData = this.complaints.getRemainingECCWComplaints()
      .subscribe(
        data => {
          this.eccwRemainingComplaintsInfo = data;
          console.log(this.eccwRemainingComplaintsInfo);
        }
      )

    this.otherRemainingComplaintsData = this.complaints.getRemainingOtherComplaints()
      .subscribe(
        data => {
          this.otherRemainingComplaintsInfo = data;
          console.log(this.otherRemainingComplaintsInfo);
        }
      )

    this.facultyRemainingComplaintsData = this.complaints.getRemainingFacultyComplaints()
      .subscribe(
        data => {
          this.facultyRemainingComplaintsInfo = data;
          console.log(this.facultyRemainingComplaintsInfo);
        }
      )

    this.stuRemainingComplaintsData = this.complaints.getRemainingStudentComplaints()
      .subscribe(
        data => {
          this.stuRemainingComplaintsInfo = data;
          console.log(this.stuRemainingComplaintsInfo);
        }
      )

    this.emrsRemainingComplaintsData = this.complaints.getRemainingEMRSComplaints()
      .subscribe(
        data => {
          this.emrsRemainingComplaintsInfo = data;
          console.log(this.emrsRemainingComplaintsInfo);
        }
      )

    this.telephoneRemainingComplaintsData = this.complaints.getRemainingTelephoneComplaints()
      .subscribe(
        data => {
          this.telephoneRemainingComplaintsInfo = data;
          console.log(this.telephoneRemainingComplaintsInfo);
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
  // public popoverTitle: string = 'Is complaint is resolved?';
  // public popoverMessage: string = 'Do you want to continue?';
  // public confirmClicked: boolean = false;
  // public cancelClicked: boolean = false;
  editComplaint(i : number, type : string, remarks : string, status : string, Id : number):void{
    console.log(i);
    console.log(type);
    this.selectedIndex = i;
    this.currentId = Id;
    this.seletedType = type;
    this.showConfirmation=false;
    this.editComplaintForm.setValue({
      'status' : status,
      'remarks' : remarks
    })
  }
  updateComplaint(f : NgForm){
    let data = f.value;
    console.log(this.currentId);
    if(this.currentId){
      data["id"] = this.currentId;
      data["type"]=this.seletedType;
    }
    console.log(data);
    this.complaints.editComplaints(data)
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
  editOtherComplaint(i : number, type : string, remarks : string, status : string, Id : number, assignedTo : string):void{
    console.log(i);
    console.log(type);
    this.selectedIndex = i;
    this.currentId = Id;
    this.seletedType = type;
    this.showConfirmation=false;
    this.editOtherComplaintForm.setValue({
      'status' : status,
      'remarks' : remarks,
      'assignedTo' : assignedTo
    })
  }
  updateOtherComplaint(f : NgForm){
    let data = f.value;
    console.log(this.currentId);
    if(this.currentId!=undefined && this.seletedType!=undefined){
      data["id"] = this.currentId;
      data["type"]=this.seletedType;
    }
    console.log(data);
    this.complaints.editComplaints(data)
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
  resetConfirmationMessage():void{
    this.showConfirmation = true;
  }
}
