import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { ProfileService } from 'src/app/API_Service/profile.service';
import { FormControl, FormBuilder, FormGroup, FormArray, NgForm } from '@angular/forms';
import { ToastrManager } from 'ng6-toastr-notifications';
var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(profile, fb, toastr) {
        this.profile = profile;
        this.fb = fb;
        this.toastr = toastr;
        this.userType = localStorage.getItem('userType');
        this.form = {};
        this.userInternshipInfo = [];
        this.completionMessage = "Error has Occurred. Try after some time!!";
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.student = false;
        this.staff = false;
        this.showConfirmation = false;
        if (this.userType != 'student') {
            this.staff = true;
            this.profile.getProfileInfo('', '')
                .subscribe(function (data) {
                _this.staffBasicProfile = data;
                console.log(_this.staffBasicProfile);
                _this.editStaffBasicProfileFormGroup = _this.fb.group({
                    mobileNo: [''],
                    alternateMobileNo: [''],
                    bloodGroup: [''],
                    dob: [''],
                    areaOfSpecialization: [''],
                    fatherName: [''],
                    motherName: [''],
                });
                if (_this.staffBasicProfile != undefined) {
                    _this.mobileNo = _this.staffBasicProfile.mobileNo;
                    _this.alternateMobileNo = _this.staffBasicProfile.alternateMobileNo;
                    _this.bloodGroup = _this.staffBasicProfile.bloodGroup;
                    _this.dob = _this.staffBasicProfile.dob;
                    _this.areaOfSpecialization = _this.staffBasicProfile.areaOfSpecialization;
                    _this.fatherName = _this.staffBasicProfile.fatherName;
                    _this.motherName = _this.staffBasicProfile.motherName;
                }
            });
        }
        if (this.userType === 'student') {
            this.student = true;
            this.profile.getStudentProfileInfo('', '')
                .subscribe(function (data) {
                _this.studentProfile = data;
                console.log(_this.studentProfile);
                _this.editStudentProfileFormGroup = _this.fb.group({
                    mobileNo: [''],
                    bloodGroup: [''],
                    fatherEmail: [''],
                    motherEmail: [''],
                    fatherContact: [''],
                    motherContact: [''],
                });
                if (_this.studentProfile) {
                    _this.mobileNo = _this.studentProfile.mobileNo;
                    _this.bloodGroup = _this.studentProfile.bloodGroup;
                    _this.fatherEmail = _this.studentProfile.fatherEmail;
                    _this.motherEmail = _this.studentProfile.motherEmail;
                    _this.fatherContact = _this.studentProfile.fatherContact;
                    _this.motherContact = _this.studentProfile.motherContact;
                }
            });
            this.profile.getUserInternshipInfo('')
                .subscribe(function (data) {
                _this.userInternshipInfo = data;
                console.log(_this.userInternshipInfo);
            });
            this.profile.getUserProjectInfo('')
                .subscribe(function (data) {
                _this.userProjectInfo = data;
                console.log(_this.userProjectInfo);
            });
        }
        this.profile.getWorkExperienceInfo('')
            .subscribe(function (data) {
            _this.workExperienceInfo = data;
            console.log(_this.workExperienceInfo);
        });
        this.profile.getUserQualificationInfo('')
            .subscribe(function (data) {
            _this.userQualificationInfo = data;
            console.log(_this.userQualificationInfo);
        });
        this.profile.getUserResearchWorkInfo('')
            .subscribe(function (data) {
            _this.userResearchWorkInfo = data;
            console.log(_this.userResearchWorkInfo);
        });
        this.profile.getUserCompetitiveExamInfo('')
            .subscribe(function (data) {
            _this.userCompetitiveExamInfo = data;
            console.log(_this.userCompetitiveExamInfo);
        });
        this.profile.getUserCulturalActivityInfo('')
            .subscribe(function (data) {
            _this.userCulturalActivityInfo = data;
            console.log(_this.userCulturalActivityInfo);
        });
        this.profile.getUserTechnicalActivityInfo('')
            .subscribe(function (data) {
            _this.userTechnicalActivityInfo = data;
            console.log(_this.userTechnicalActivityInfo);
        });
        this.profile.getUserAddressInfo('')
            .subscribe(function (data) {
            _this.userAddressInfo = data;
            console.log(_this.userAddressInfo);
            var addresses = new FormArray([]);
            if (_this.userAddressInfo != undefined) {
                for (var _i = 0, _a = _this.userAddressInfo; _i < _a.length; _i++) {
                    var address = _a[_i];
                    addresses.push(new FormGroup({
                        'addressLine1': new FormControl(address.addressLine1),
                        'addressLine2': new FormControl(address.addressLine2),
                        'city': new FormControl(address.city),
                        'country': new FormControl(address.country),
                        'state': new FormControl(address.state),
                        'pincode': new FormControl(address.pincode),
                        'type': new FormControl(address.type)
                    }));
                }
                _this.addressFormGroup = new FormGroup({
                    'addresses': addresses
                });
            }
        });
        this.profile.getFacultyStaffList()
            .subscribe(function (data) {
            _this.facultyStaffListInfo = data;
            console.log(_this.facultyStaffListInfo);
        });
        this.profile.getStaffList()
            .subscribe(function (data) {
            _this.staffListInfo = data;
            console.log(_this.staffListInfo);
        }, function (error) {
            if (error.status === 500) {
                _this.toastr.errorToastr(error.error['message'], 'Alert!');
                console.log(error);
            }
        });
    };
    ProfileComponent.prototype.updateStaffBasicProfileData = function (details) {
        var _this = this;
        if (this.staffBasicProfile) {
            details["userId"] = this.staffBasicProfile.userId;
        }
        console.log(details);
        this.profile.editStaffProfile(details)
            .subscribe(function (data) {
            console.log(data);
            _this.toastr.successToastr(data.message, 'Success!');
        }, function (error) {
            _this.toastr.errorToastr(_this.completionMessage, 'Alert!');
        });
    };
    ProfileComponent.prototype.updateStudentBasicProfileData = function (details) {
        var _this = this;
        if (this.studentProfile) {
            details["userId"] = this.studentProfile.userId;
        }
        console.log(details);
        this.profile.editStudentProfile(details)
            .subscribe(function (data) {
            console.log(data);
            _this.toastr.successToastr(data.message, 'Success!');
        }, function (error) {
            _this.toastr.errorToastr(_this.completionMessage, 'Alert!');
        });
    };
    //user experience methods  
    ProfileComponent.prototype.fillWorkExperienceData = function (i) {
        console.log(i);
        this.selectedIndex = i;
        if (this.workExperienceInfo) {
            var data = this.workExperienceInfo[i];
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
            });
        }
    };
    ProfileComponent.prototype.resetWorkExperienceForm = function () {
        this.workExperienceForm.reset();
    };
    ProfileComponent.prototype.updateExperienceData = function (f) {
        var _this = this;
        var data = f.value;
        //console.log(this.selectedIndex )
        if (this.workExperienceInfo) {
            var userId = this.workExperienceInfo[this.selectedIndex].userId;
            console.log(userId);
            data["userId"] = userId;
        }
        console.log(data);
        this.profile.editWorkExperience(data)
            .subscribe(function (data) {
            console.log(data);
            _this.toastr.successToastr(data.message, 'Success!');
        }, function (error) {
            _this.toastr.errorToastr(_this.completionMessage, 'Alert!');
            console.log(error);
        });
    };
    //education methods
    ProfileComponent.prototype.fillEducationData = function (i) {
        this.selectedIndex = i;
        if (this.userQualificationInfo) {
            var data = this.userQualificationInfo[i];
            this.educationForm.setValue({
                'collegeSchool': data.collegeSchool,
                'degreeCertificate': data.degreeCertificate,
                'percentageCgpa': data.percentageCgpa,
                'specialization': data.specialization,
                'universityBoard': data.universityBoard,
                'yearOfPassing': data.yearOfPassing
            });
        }
    };
    ProfileComponent.prototype.resetEducationForm = function () {
        this.educationForm.reset();
    };
    ProfileComponent.prototype.updateEducationData = function (f) {
        var _this = this;
        var data = f.value;
        //console.log(this.selectedIndex )
        if (this.userQualificationInfo) {
            var userId = this.userQualificationInfo[this.selectedIndex].userId;
            console.log(userId);
            data["userId"] = userId;
        }
        console.log(data);
        this.profile.editEducation(data)
            .subscribe(function (data) {
            console.log(data);
            _this.toastr.successToastr(data.message, 'Success!');
        }, function (error) {
            _this.toastr.errorToastr(_this.completionMessage, 'Alert!');
        });
    };
    //research work methods
    ProfileComponent.prototype.fillResearchData = function (i) {
        this.selectedIndex = i;
        console.log(this.selectedIndex);
        if (this.userResearchWorkInfo) {
            var data = this.userResearchWorkInfo[i];
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
            });
        }
    };
    ProfileComponent.prototype.resetResearchForm = function () {
        this.researchForm.reset();
    };
    ProfileComponent.prototype.updateResearchWork = function (f) {
        var _this = this;
        var data = f.value;
        //console.log(this.selectedIndex )
        if (this.userResearchWorkInfo) {
            var userId = this.userResearchWorkInfo[this.selectedIndex].userId;
            console.log(userId);
            data["userId"] = userId;
        }
        console.log(data);
        this.profile.editPublication(data)
            .subscribe(function (data) {
            console.log(data);
            _this.toastr.successToastr(data.message, 'Success!');
        }, function (error) {
            _this.toastr.errorToastr(_this.completionMessage, 'Alert!');
        });
    };
    ProfileComponent.prototype.fillCulturalActivityData = function (i) {
        this.selectedIndex = i;
        console.log(this.selectedIndex);
        if (this.userCulturalActivityInfo) {
            var data = this.userCulturalActivityInfo[i];
            this.culturalActivityForm.setValue({
                'nameOfActivity': data.nameOfActivity,
                'type': data.type,
                'date': data.date,
                'place': data.place,
                'achievement': data.achievement
            });
        }
    };
    ProfileComponent.prototype.resetCulturalActivity = function () {
        this.culturalActivityForm.reset();
    };
    ProfileComponent.prototype.updateCulturalActivity = function (f) {
        var _this = this;
        var data = f.value;
        if (this.userCulturalActivityInfo) {
            data["userId"] = this.userCulturalActivityInfo[this.selectedIndex].userId;
        }
        console.log(data);
        this.profile.editCultural(data)
            .subscribe(function (data) {
            console.log(data);
            _this.toastr.successToastr(data.message, 'Success!');
        }, function (error) {
            _this.toastr.errorToastr(_this.completionMessage, 'Alert!');
        });
    };
    ProfileComponent.prototype.fillTechnicalActivityData = function (i) {
        this.selectedIndex = i;
        if (this.userTechnicalActivityInfo) {
            var data = this.userTechnicalActivityInfo[i];
            this.technicalActivityForm.setValue({
                'attendedOrganized': data.attendedOrganized,
                'from': data.from,
                'nameOfCoordinator': data.nameOfCoordinator,
                'place': data.place,
                'subject': data.subject,
                'to': data.to,
                'type': data.type
            });
        }
    };
    ProfileComponent.prototype.updateTechnicalActivity = function (f) {
        var _this = this;
        var data = f.value;
        if (this.userTechnicalActivityInfo) {
            data["userId"] = this.userCulturalActivityInfo[this.selectedIndex].userId;
        }
        console.log(data);
        this.profile.editTechnical(data)
            .subscribe(function (data) {
            console.log(data);
            _this.toastr.successToastr(data.message, 'Success!');
        }, function (error) {
            _this.toastr.errorToastr(_this.completionMessage, 'Alert!');
        });
    };
    ProfileComponent.prototype.resetTechnicalActivity = function () {
        this.technicalActivityForm.reset();
    };
    ProfileComponent.prototype.fillCompetetiveExamData = function (i) {
        this.selectedIndex = i;
        if (this.userCompetitiveExamInfo) {
            var data = this.userCompetitiveExamInfo[i];
            this.competitiveExamForm.setValue({
                'rank': data.rank,
                'score': data.score,
                'year': data.year,
                'registrationNo': data.registrationNo,
                'nameOfExam': data.nameOfExam
            });
        }
    };
    ProfileComponent.prototype.updateCompetitiveExamData = function (f) {
        var _this = this;
        var data = f.value;
        if (this.userCompetitiveExamInfo) {
            data["userId"] = this.userCompetitiveExamInfo[this.selectedIndex].userId;
        }
        console.log(data);
        this.profile.editCompetitive(data)
            .subscribe(function (data) {
            console.log(data);
            _this.toastr.successToastr(data.message, 'Success!');
        }, function (error) {
            _this.toastr.errorToastr(_this.completionMessage, 'Alert!');
        });
    };
    ProfileComponent.prototype.resetCompetetiveExam = function () {
        this.competitiveExamForm.reset();
    };
    ProfileComponent.prototype.fillProjectData = function (i) {
        this.selectedIndex = i;
        if (this.userProjectInfo) {
            var data = this.userProjectInfo[i];
            this.projectForm.setValue({
                'description': data.description,
                'from': data.from,
                'guide': data.guide,
                'otherCreators': data.otherCreators,
                'role': data.role,
                'title': data.title,
                'to': data.to
            });
        }
    };
    ProfileComponent.prototype.updateProjectData = function (f) {
        var _this = this;
        var data = f.value;
        if (this.userProjectInfo) {
            data["userId"] = this.userProjectInfo[this.selectedIndex].userId;
        }
        console.log(data);
        this.profile.editProjects(data)
            .subscribe(function (data) {
            console.log(data);
            _this.toastr.successToastr(data.message, 'Success!');
        }, function (error) {
            _this.toastr.errorToastr(_this.completionMessage, 'Alert!');
        });
    };
    ProfileComponent.prototype.resetProjectForm = function () {
        this.projectForm.reset();
    };
    ProfileComponent.prototype.fillInternshipData = function (i) {
        this.selectedIndex = i;
        if (this.userInternshipInfo) {
            var data = this.userInternshipInfo[i];
            this.internshipForm.setValue({
                'city': data.city,
                'companyName': data.companyName,
                'country': data.country,
                'endDate': data.endDate,
                'startDate': data.startDate,
                'state': data.state,
                'subject': data.subject
            });
        }
    };
    ProfileComponent.prototype.updateInternshipData = function (f) {
        var _this = this;
        var data = f.value;
        if (this.userInternshipInfo) {
            data["userId"] = this.userInternshipInfo[this.selectedIndex].userId;
        }
        console.log(data);
        this.profile.editInternship(data)
            .subscribe(function (data) {
            console.log(data);
            _this.toastr.successToastr(data.message, 'Success!');
        }, function (error) {
            _this.toastr.errorToastr(_this.completionMessage, 'Alert!');
        });
    };
    ProfileComponent.prototype.resetInternshipForm = function () {
        this.internshipForm.reset();
    };
    ProfileComponent.prototype.getControls = function () {
        if (this.addressFormGroup) {
            return this.addressFormGroup.get('addresses').controls;
        }
    };
    ProfileComponent.prototype.updateAddresses = function (detail) {
        var _this = this;
        var data = detail['addresses'];
        console.log(data);
        if (this.userAddressInfo) {
            for (var i = 0; i < data.length; i++) {
                data[i]["userId"] = this.userAddressInfo[0].userId;
            }
        }
        this.profile.editUserAddress(data)
            .subscribe(function (data) {
            console.log(data);
            _this.toastr.successToastr(data.message, 'Success!');
        }, function (error) {
            _this.toastr.errorToastr(_this.completionMessage, 'Alert!');
        });
    };
    ProfileComponent.prototype.loadProfile = function (userId, userType) {
        var _this = this;
        this.loading = true;
        this.profile.getUserTechnicalActivityInfo(userId)
            .subscribe(function (data) {
            _this.userTechnicalActivityInfo = data;
            console.log(_this.userTechnicalActivityInfo);
        });
        if (userType != 'student') {
            this.staff = true;
            this.profile.getProfileInfo(userId, userType)
                .subscribe(function (data) {
                _this.staffBasicProfile = data;
                console.log(_this.staffBasicProfile);
                _this.editStaffBasicProfileFormGroup = _this.fb.group({
                    mobileNo: [''],
                    alternateMobileNo: [''],
                    bloodGroup: [''],
                    dob: [''],
                    areaOfSpecialization: [''],
                    fatherName: [''],
                    motherName: [''],
                });
                if (_this.staffBasicProfile != undefined) {
                    _this.mobileNo = _this.staffBasicProfile.mobileNo;
                    _this.alternateMobileNo = _this.staffBasicProfile.alternateMobileNo;
                    _this.bloodGroup = _this.staffBasicProfile.bloodGroup;
                    _this.dob = _this.staffBasicProfile.dob;
                    _this.areaOfSpecialization = _this.staffBasicProfile.areaOfSpecialization;
                    _this.fatherName = _this.staffBasicProfile.fatherName;
                    _this.motherName = _this.staffBasicProfile.motherName;
                }
            });
        }
        this.profile.getWorkExperienceInfo(userId)
            .subscribe(function (data) {
            _this.workExperienceInfo = data;
            console.log(_this.workExperienceInfo);
        });
        this.profile.getUserQualificationInfo(userId)
            .subscribe(function (data) {
            _this.userQualificationInfo = data;
            console.log(_this.userQualificationInfo);
        });
        this.profile.getUserResearchWorkInfo(userId)
            .subscribe(function (data) {
            _this.userResearchWorkInfo = data;
            console.log(_this.userResearchWorkInfo);
        });
        this.profile.getUserCompetitiveExamInfo(userId)
            .subscribe(function (data) {
            _this.userCompetitiveExamInfo = data;
            console.log(_this.userCompetitiveExamInfo);
        });
        this.profile.getUserCulturalActivityInfo(userId)
            .subscribe(function (data) {
            _this.userCulturalActivityInfo = data;
            console.log(_this.userCulturalActivityInfo);
        });
        this.profile.getUserTechnicalActivityInfo(userId)
            .subscribe(function (data) {
            _this.userTechnicalActivityInfo = data;
            console.log(_this.userTechnicalActivityInfo);
        });
        this.profile.getUserAddressInfo(userId)
            .subscribe(function (data) {
            _this.loading = false;
            _this.userAddressInfo = data;
            console.log(_this.userAddressInfo);
            var addresses = new FormArray([]);
            if (_this.userAddressInfo != undefined) {
                for (var _i = 0, _a = _this.userAddressInfo; _i < _a.length; _i++) {
                    var address = _a[_i];
                    addresses.push(new FormGroup({
                        'addressLine1': new FormControl(address.addressLine1),
                        'addressLine2': new FormControl(address.addressLine2),
                        'city': new FormControl(address.city),
                        'country': new FormControl(address.country),
                        'state': new FormControl(address.state),
                        'pincode': new FormControl(address.pincode),
                        'type': new FormControl(address.type)
                    }));
                }
                _this.addressFormGroup = new FormGroup({
                    'addresses': addresses
                });
            }
        });
    };
    ProfileComponent.prototype.resetConfirmationMessge = function () {
        this.showConfirmation = false;
    };
    tslib_1.__decorate([
        ViewChild('workExperience'),
        tslib_1.__metadata("design:type", NgForm)
    ], ProfileComponent.prototype, "workExperienceForm", void 0);
    tslib_1.__decorate([
        ViewChild('educationForm'),
        tslib_1.__metadata("design:type", NgForm)
    ], ProfileComponent.prototype, "educationForm", void 0);
    tslib_1.__decorate([
        ViewChild('researchForm'),
        tslib_1.__metadata("design:type", NgForm)
    ], ProfileComponent.prototype, "researchForm", void 0);
    tslib_1.__decorate([
        ViewChild('culturalActivityForm'),
        tslib_1.__metadata("design:type", NgForm)
    ], ProfileComponent.prototype, "culturalActivityForm", void 0);
    tslib_1.__decorate([
        ViewChild('technicalActivityForm'),
        tslib_1.__metadata("design:type", NgForm)
    ], ProfileComponent.prototype, "technicalActivityForm", void 0);
    tslib_1.__decorate([
        ViewChild('competitiveExamForm'),
        tslib_1.__metadata("design:type", NgForm)
    ], ProfileComponent.prototype, "competitiveExamForm", void 0);
    tslib_1.__decorate([
        ViewChild('projectForm'),
        tslib_1.__metadata("design:type", NgForm)
    ], ProfileComponent.prototype, "projectForm", void 0);
    tslib_1.__decorate([
        ViewChild('internshipForm'),
        tslib_1.__metadata("design:type", NgForm)
    ], ProfileComponent.prototype, "internshipForm", void 0);
    ProfileComponent = tslib_1.__decorate([
        Component({
            selector: 'app-profile',
            templateUrl: './profile.component.html',
            styleUrls: ['./profile.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [ProfileService, FormBuilder, ToastrManager])
    ], ProfileComponent);
    return ProfileComponent;
}());
export { ProfileComponent };
//# sourceMappingURL=profile.component.js.map