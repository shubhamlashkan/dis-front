import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ProfileService } from 'src/app/API_Service/profile.service';
import { FormControl, FormBuilder, FormGroup, FormArray, NgForm } from '@angular/forms';
import { ToastrManager } from 'ng6-toastr-notifications';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  @ViewChild('workExperience') workExperienceForm: NgForm;
  @ViewChild('educationForm') educationForm: NgForm;
  @ViewChild('researchForm') researchForm: NgForm;
  @ViewChild('culturalActivityForm') culturalActivityForm: NgForm;
  @ViewChild('technicalActivityForm') technicalActivityForm: NgForm;
  @ViewChild('competitiveExamForm') competitiveExamForm: NgForm;
  @ViewChild('projectForm') projectForm: NgForm;
  @ViewChild('internshipForm') internshipForm: NgForm;
  selectedIndex: number;
  userType: string = localStorage.getItem('userType');
  id : string;
  type : string;
  form: any = {};
  userInternshipInfo: any[] = [];
  userQualificationInfo: any[];
  workExperienceInfo: any[];
  userProjectInfo: any[];
  userCompetitiveExamInfo: any[];
  userCulturalActivityInfo: any[];
  userTechnicalActivityInfo: any[];
  userAddressInfo: any[];
  facultyStaffListInfo: any[];
  userResearchWorkInfo: any[];
  loading : boolean;
  studentProfile: any;
  staffBasicProfile: any;

  student: boolean;
  staff: boolean;

  //form groups
  editStaffBasicProfileFormGroup: FormGroup;
  editStudentProfileFormGroup: FormGroup;
  addressFormGroup: FormGroup;
  mobileNo: number;
  alternateMobileNo: number;
  bloodGroup: string;
  dob: string;
  fatherName: string;
  motherName: string;
  areaOfSpecialization: string;
  fatherEmail: any;
  motherEmail: any;
  fatherContact: any;
  motherContact: any;

  completionMessage: string = "Error has Occurred. Try after some time!!";
  showConfirmation: boolean;
  staffListInfo: any;
  
  constructor(private profile: ProfileService, private fb: FormBuilder, private toastr : ToastrManager) {

  }

  ngOnInit() {
    this.student = false;
    this.staff = false;
    this.showConfirmation = false;
   
    if (this.userType != 'student') {
      this.staff = true;
      this.profile.getProfileInfo('','')
        .subscribe(
          data => {
            this.staffBasicProfile = data;
            console.log(this.staffBasicProfile);
            this.editStaffBasicProfileFormGroup = this.fb.group({
              mobileNo: [''],
              alternateMobileNo: [''],
              bloodGroup: [''],
              dob: [''],
              areaOfSpecialization: [''],
              fatherName: [''],
              motherName: [''],
            })
            if (this.staffBasicProfile != undefined) {
              this.mobileNo = this.staffBasicProfile.mobileNo;
              this.alternateMobileNo = this.staffBasicProfile.alternateMobileNo;
              this.bloodGroup = this.staffBasicProfile.bloodGroup;
              this.dob = this.staffBasicProfile.dob;
              this.areaOfSpecialization = this.staffBasicProfile.areaOfSpecialization;
              this.fatherName = this.staffBasicProfile.fatherName;
              this.motherName = this.staffBasicProfile.motherName;
            }
          },
        )

    }
    if (this.userType === 'student') {
      this.student = true;
      this.profile.getStudentProfileInfo('','')
        .subscribe(
          data => {
            this.studentProfile = data;
            console.log(this.studentProfile);
            this.editStudentProfileFormGroup = this.fb.group({
              mobileNo: [''],
              bloodGroup: [''],
              fatherEmail: [''],
              motherEmail: [''],
              fatherContact: [''],
              motherContact: [''],
            })
            if (this.studentProfile) {
              this.mobileNo = this.studentProfile.mobileNo;
              this.bloodGroup = this.studentProfile.bloodGroup;
              this.fatherEmail = this.studentProfile.fatherEmail;
              this.motherEmail = this.studentProfile.motherEmail;
              this.fatherContact = this.studentProfile.fatherContact;
              this.motherContact = this.studentProfile.motherContact;
            }
          }
        )

      this.profile.getUserInternshipInfo('')
        .subscribe(
          data => {
            this.userInternshipInfo = data;
            console.log(this.userInternshipInfo);
          }
        )

      this.profile.getUserProjectInfo('')
        .subscribe(
          data => {
            this.userProjectInfo = data;
            console.log(this.userProjectInfo);
          }
        )

    }




    this.profile.getWorkExperienceInfo('')
      .subscribe(
        data => {
          this.workExperienceInfo = data;
          console.log(this.workExperienceInfo);
        }
      )


    this.profile.getUserQualificationInfo('')
      .subscribe(
        data => {
          this.userQualificationInfo = data;
          console.log(this.userQualificationInfo);
        }
      )
    this.profile.getUserResearchWorkInfo('')
      .subscribe(
        data => {
          this.userResearchWorkInfo = data;
          console.log(this.userResearchWorkInfo);
        }
      )



    this.profile.getUserCompetitiveExamInfo('')
      .subscribe(
        data => {
          this.userCompetitiveExamInfo = data;
          console.log(this.userCompetitiveExamInfo);
        }
      )

    this.profile.getUserCulturalActivityInfo('')
      .subscribe(
        data => {
          this.userCulturalActivityInfo = data;
          console.log(this.userCulturalActivityInfo);
        }
      )

    this.profile.getUserTechnicalActivityInfo('')
      .subscribe(
        data => {
          this.userTechnicalActivityInfo = data;
          console.log(this.userTechnicalActivityInfo);
        }
      )

    this.profile.getUserAddressInfo('')
      .subscribe(
        data => {
          this.userAddressInfo = data;
          console.log(this.userAddressInfo);
          let addresses = new FormArray([]);
          if (this.userAddressInfo != undefined) {
            for (let address of this.userAddressInfo) {
              addresses.push(
                new FormGroup({
                  'addressLine1': new FormControl(address.addressLine1),
                  'addressLine2': new FormControl(address.addressLine2),
                  'city': new FormControl(address.city),
                  'country': new FormControl(address.country),
                  'state': new FormControl(address.state),
                  'pincode': new FormControl(address.pincode),
                  'type': new FormControl(address.type)
                })
              )
            }
            this.addressFormGroup = new FormGroup({
              'addresses': addresses
            })

          }
        }
      )

    this.profile.getFacultyStaffList()
      .subscribe(
        data => {
          this.facultyStaffListInfo = data;
          console.log(this.facultyStaffListInfo);
        }
      )

      this.profile.getStaffList()
      .subscribe(
        data => {
          this.staffListInfo = data;
          console.log(this.staffListInfo);
        }, error => {
          if(error.status === 500) {
          this.toastr.errorToastr(error.error['message'], 'Alert!');
          console.log(error);
         
        }
        });
  }
  
  updateStaffBasicProfileData(details): void {
    if (this.staffBasicProfile) {
      details["userId"] = this.staffBasicProfile.userId;
    }
    console.log(details);
    this.profile.editStaffProfile(details)
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
  updateStudentBasicProfileData(details): void {
    if (this.studentProfile) {
      details["userId"] = this.studentProfile.userId;
    }
    console.log(details);
    this.profile.editStudentProfile(details)
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


  //user experience methods  
  fillWorkExperienceData(i: number) {
    console.log(i);
    this.selectedIndex = i;
    if (this.workExperienceInfo) {
      let data = this.workExperienceInfo[i];
      console.log(this.workExperienceInfo);
      this.workExperienceForm.setValue({
        'organizationName': data.organizationName,
        'designation': data.designation,
        'dateOfJoining': data.dateOfJoining,
        'dateOfLeaving': data.dateOfLeaving,
        'city': data.city,
        'state': data.state,
        'country': data.country,
        'payscale': data.payscale,
      })
    }
  }
  resetWorkExperienceForm(): void {
    this.workExperienceForm.reset();
  }
  updateExperienceData(f: NgForm): void {
    let data = f.value;
    //console.log(this.selectedIndex )
    if (this.workExperienceInfo) {
      let userId = this.workExperienceInfo[this.selectedIndex].userId;
      console.log(userId);
      data["userId"] = userId
    }
    console.log(data);
    this.profile.editWorkExperience(data)
    .subscribe(
      data => {
        console.log(data);
        this.toastr.successToastr(data.message, 'Success!');
      },
      error =>{
        this.toastr.errorToastr(this.completionMessage, 'Alert!')
        console.log(error)
      }
    )
  }

  //education methods
  fillEducationData(i: number) {
    this.selectedIndex = i;
    if (this.userQualificationInfo) {
      let data = this.userQualificationInfo[i];
      this.educationForm.setValue({
        'collegeSchool': data.collegeSchool,
        'degreeCertificate': data.degreeCertificate,
        'percentageCgpa': data.percentageCgpa,
        'specialization': data.specialization,
        'universityBoard': data.universityBoard,
        'yearOfPassing': data.yearOfPassing
      })
    }
  }

  resetEducationForm(): void {
    this.educationForm.reset();
  }
  updateEducationData(f: NgForm) {
    let data = f.value;
    //console.log(this.selectedIndex )
    if (this.userQualificationInfo) {
      let userId = this.userQualificationInfo[this.selectedIndex].userId;
      console.log(userId);
      data["userId"] = userId
    }
    console.log(data);
    this.profile.editEducation(data)
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

  //research work methods
  fillResearchData(i: number): void {
    this.selectedIndex = i;
    console.log(this.selectedIndex)
    if (this.userResearchWorkInfo) {
      let data = this.userResearchWorkInfo[i];
      console.log(data);
      this.researchForm.setValue({
        'title': data.title,
        'category': data.category,
        'coAuthors': data.coAuthors,
        'guideName': data.guideName,
        'journalConferenceName': data.journalConferenceName,
        'publisher': data.publisher,
        'subcategory': data.subcategory,
        'yearOfPublication': data.yearOfPublication
      })
    }
  }
  resetResearchForm(): void {
    this.researchForm.reset();
  }
  updateResearchWork(f: NgForm): void {
    let data = f.value;
    //console.log(this.selectedIndex )
    if (this.userResearchWorkInfo) {
      let userId = this.userResearchWorkInfo[this.selectedIndex].userId;
      console.log(userId);
      data["userId"] = userId
    }
    console.log(data);
    this.profile.editPublication(data)
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

  fillCulturalActivityData(i: number) {
    this.selectedIndex = i;
    console.log(this.selectedIndex);
    if (this.userCulturalActivityInfo) {
      let data = this.userCulturalActivityInfo[i];
      this.culturalActivityForm.setValue({
        'nameOfActivity': data.nameOfActivity,
        'type': data.type,
        'date': data.date,
        'place': data.place,
        'achievement': data.achievement
      })
    }
  }
  resetCulturalActivity(): void {
    this.culturalActivityForm.reset();
  }
  updateCulturalActivity(f: NgForm) {
    let data = f.value;
    if (this.userCulturalActivityInfo) {
      data["userId"] = this.userCulturalActivityInfo[this.selectedIndex].userId;
    }
    console.log(data);
    this.profile.editCultural(data)
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

  fillTechnicalActivityData(i: number): void {
    this.selectedIndex = i;
    if (this.userTechnicalActivityInfo) {
      let data = this.userTechnicalActivityInfo[i];
      this.technicalActivityForm.setValue({
        'attendedOrganized': data.attendedOrganized,
        'from': data.from,
        'nameOfCoordinator': data.nameOfCoordinator,
        'place': data.place,
        'subject': data.subject,
        'to': data.to,
        'type': data.type
      })
    }
  }
  updateTechnicalActivity(f: NgForm): void {
    let data = f.value;
    if (this.userTechnicalActivityInfo) {
      data["userId"] = this.userCulturalActivityInfo[this.selectedIndex].userId;
    }
    console.log(data);
    this.profile.editTechnical(data)
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
  resetTechnicalActivity(): void {
    this.technicalActivityForm.reset();
  }

  fillCompetetiveExamData(i: number) {
    this.selectedIndex = i;
    if (this.userCompetitiveExamInfo) {
      let data = this.userCompetitiveExamInfo[i];
      this.competitiveExamForm.setValue({
        'rank': data.rank,
        'score': data.score,
        'year': data.year,
        'registrationNo': data.registrationNo,
        'nameOfExam': data.nameOfExam
      })
    }
  }
  updateCompetitiveExamData(f: NgForm): void {
    let data = f.value;
    if (this.userCompetitiveExamInfo) {
      data["userId"] = this.userCompetitiveExamInfo[this.selectedIndex].userId;
    }
    console.log(data);
    this.profile.editCompetitive(data)
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
  resetCompetetiveExam(): void {
    this.competitiveExamForm.reset();
  }
  fillProjectData(i: number) {
    this.selectedIndex = i;
    if (this.userProjectInfo) {
      let data = this.userProjectInfo[i];
      this.projectForm.setValue({
        'description': data.description,
        'from': data.from,
        'guide': data.guide,
        'otherCreators': data.otherCreators,
        'role': data.role,
        'title': data.title,
        'to': data.to
      })
    }
  }
  updateProjectData(f: NgForm): void {
    let data = f.value;
    if (this.userProjectInfo) {
      data["userId"] = this.userProjectInfo[this.selectedIndex].userId;
    }
    console.log(data);
    this.profile.editProjects(data)
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
  resetProjectForm(): void {
    this.projectForm.reset();
  }
  fillInternshipData(i: number): void {
    this.selectedIndex = i;
    if (this.userInternshipInfo) {
      let data = this.userInternshipInfo[i];
      this.internshipForm.setValue({
        'city': data.city,
        'companyName': data.companyName,
        'country': data.country,
        'endDate': data.endDate,
        'startDate': data.startDate,
        'state': data.state,
        'subject': data.subject
      })
    }
  }
  updateInternshipData(f: NgForm): void {
    let data = f.value;
    if (this.userInternshipInfo) {
      data["userId"] = this.userInternshipInfo[this.selectedIndex].userId;
    }
    console.log(data);
    this.profile.editInternship(data)
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
  resetInternshipForm(): void {
    this.internshipForm.reset();
  }

 
  getControls() {
    if (this.addressFormGroup) {
      return (<FormArray>this.addressFormGroup.get('addresses')).controls;

    }
  }
  updateAddresses(detail) {
    let data = detail['addresses'];
    console.log(data);
    if(this.userAddressInfo){
      for(let i=0;i<data.length;i++)
      {
        data[i]["userId"]=this.userAddressInfo[0].userId
      }
      
    }
    this.profile.editUserAddress(data)
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

  loadProfile(userId : number,userType : string ):void{
    this.loading = true;
    this.profile.getUserTechnicalActivityInfo(userId)
      .subscribe(
        data => {
          this.userTechnicalActivityInfo = data;
          console.log(this.userTechnicalActivityInfo);
        }
      )

      if (userType != 'student') {
        this.staff = true;
        this.profile.getProfileInfo(userId,userType)
          .subscribe(
            data => {
              this.staffBasicProfile = data;
              console.log(this.staffBasicProfile);
              this.editStaffBasicProfileFormGroup = this.fb.group({
                mobileNo: [''],
                alternateMobileNo: [''],
                bloodGroup: [''],
                dob: [''],
                areaOfSpecialization: [''],
                fatherName: [''],
                motherName: [''],
              })
              if (this.staffBasicProfile != undefined) {
                this.mobileNo = this.staffBasicProfile.mobileNo;
                this.alternateMobileNo = this.staffBasicProfile.alternateMobileNo;
                this.bloodGroup = this.staffBasicProfile.bloodGroup;
                this.dob = this.staffBasicProfile.dob;
                this.areaOfSpecialization = this.staffBasicProfile.areaOfSpecialization;
                this.fatherName = this.staffBasicProfile.fatherName;
                this.motherName = this.staffBasicProfile.motherName;
              }
            },
          )
  
      }
      

    this.profile.getWorkExperienceInfo(userId)
    .subscribe(
      data => {
        this.workExperienceInfo = data;
        console.log(this.workExperienceInfo);
      }
    )


  this.profile.getUserQualificationInfo(userId)
    .subscribe(
      data => {
        this.userQualificationInfo = data;
        console.log(this.userQualificationInfo);
      }
    )
  this.profile.getUserResearchWorkInfo(userId)
    .subscribe(
      data => {
        this.userResearchWorkInfo = data;
        console.log(this.userResearchWorkInfo);
      }
    )



  this.profile.getUserCompetitiveExamInfo(userId)
    .subscribe(
      data => {
        this.userCompetitiveExamInfo = data;
        console.log(this.userCompetitiveExamInfo);
      }
    )

  this.profile.getUserCulturalActivityInfo(userId)
    .subscribe(
      data => {
        this.userCulturalActivityInfo = data;
        console.log(this.userCulturalActivityInfo);
      }
    )

  this.profile.getUserTechnicalActivityInfo(userId)
    .subscribe(
      data => {
        this.userTechnicalActivityInfo = data;
        console.log(this.userTechnicalActivityInfo);
      }
    )

  this.profile.getUserAddressInfo(userId)
    .subscribe(
      data => {
        this.loading = false;
        this.userAddressInfo = data;
        console.log(this.userAddressInfo);
        let addresses = new FormArray([]);
        if (this.userAddressInfo != undefined) {
          for (let address of this.userAddressInfo) {
            addresses.push(
              new FormGroup({
                'addressLine1': new FormControl(address.addressLine1),
                'addressLine2': new FormControl(address.addressLine2),
                'city': new FormControl(address.city),
                'country': new FormControl(address.country),
                'state': new FormControl(address.state),
                'pincode': new FormControl(address.pincode),
                'type': new FormControl(address.type)
              })
            )
          }
          this.addressFormGroup = new FormGroup({
            'addresses': addresses
          })

        }
      }
    )

  
  }

  resetConfirmationMessge(): void {
    this.showConfirmation = false;
  }
}