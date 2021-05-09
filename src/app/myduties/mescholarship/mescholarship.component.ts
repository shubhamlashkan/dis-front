import { Component, OnInit } from "@angular/core";
import { ToastrManager } from "ng6-toastr-notifications";
import { MescholarshipService } from "src/app/API_Service/mescholarship.service";

export class StudentDetails {
	constructor(
		public admissionYear,
		public attendance,
		public email,
		public enrollment,
		public name,
		public status,
		public year
	) {}
}

export class RevokeScholarship {
	constructor(public enrollments: string[]) {}
}

@Component({
	selector: "app-mescholarship",
	templateUrl: "./mescholarship.component.html",
	styleUrls: ["./mescholarship.component.scss"],
})
export class MescholarshipComponent implements OnInit {
	constructor(private meScholarshipService: MescholarshipService, public toastr: ToastrManager) {}
	selectedYear = "1";
	notApproved: StudentDetails[];
	approved: StudentDetails[];
	activeTab = 1;
	awardScholarship: StudentDetails[];
	cancelStudents: string[];
	searchName: string;

	ngOnInit() {
		this.refreshNotApproved();
		this.awardScholarship = [];
		this.cancelStudents = [];
	}
	changeTab1() {
		this.activeTab = 1;
	}

	changeTab2() {
		this.activeTab = 2;
	}
	refreshData() {
		if (this.activeTab == 1) this.refreshNotApproved();
		else this.refreshApproved();
		this.searchName="";
	}

	refreshNotApproved() {
		this.meScholarshipService
			.retrieveMEStudentsWithoutScholarship(parseInt(this.selectedYear))
			.subscribe((response) => {
				this.notApproved = response;
				this.searchName = "";
			});
	}
	refreshApproved() {
		this.meScholarshipService
			.retrieveMEStudentsWithScholarship(parseInt(this.selectedYear))
			.subscribe((response) => {
				// console.log(response)
				this.approved = response;
				this.searchName = "";
			});
	}

	appendStudents(student) {
		let index = this.awardScholarship.indexOf(student);
		if (index > -1) {
			this.awardScholarship.splice(index, 1);
		} else {
			if (student.email == null) student.email = "";
			this.awardScholarship.push(student);
		}
	}

	approveScholarship() {
		if (
			confirm("Do you want to approve selected students for scholarship?")
		) {
			this.meScholarshipService
				.approveScholarship(this.awardScholarship)
				.subscribe(
					(response) => {
						this.toastr.successToastr(response.message, 'Success!', {toastTimeout: 3000});
						this.refreshNotApproved();
						this.refreshApproved();
						this.awardScholarship = [];
					},
					(error) => {
						this.toastr.errorToastr(error.message,"Alert!", {toastTimeout: 3000});
						this.refreshNotApproved();
						this.refreshApproved();
						this.awardScholarship = [];
					}
				);
		}
	}

	downloadForm(){
		alert("Form download");
	}

	removeStudents(enrollment) {
		let index = this.cancelStudents.indexOf(enrollment);
		if (index > -1) {
			this.cancelStudents.splice(index, 1);
		} else {
			this.cancelStudents.push(enrollment);
		}
	}

	cancelScholarship() {
		if (confirm("Do you want to cancel scholarhip of selected students?")) {
			let cancel = new RevokeScholarship(this.cancelStudents);
			this.meScholarshipService.deleteScholarship(cancel).subscribe(
				(response) => {
					this.refreshNotApproved();
					this.refreshApproved();
					this.cancelStudents = [];
					this.toastr.successToastr(response.message, 'Success!', {toastTimeout: 3000});
				},
				(error) => {
					console.log(error);
					this.toastr.errorToastr(error.message,"Alert!", {toastTimeout: 3000});
					
				}
			);
		}
	}

	searchStudent() {
		if (this.searchName) {
			if (this.activeTab == 1) {
				this.meScholarshipService
					.searchStudentWithoutScholarship(
						this.searchName,
						parseInt(this.selectedYear)
					)
					.subscribe(
						(response) => {
							this.notApproved = response;
						},
						(error) => {
							this.toastr.errorToastr(error.message,"Alert!", {toastTimeout: 3000});
						}
					);
			} else {
				this.meScholarshipService
					.searchStudentWithScholarship(
						this.searchName,
						parseInt(this.selectedYear)
					)
					.subscribe(
						(response) => {
							this.approved = response;
						},
						(error) => {
							this.toastr.errorToastr(error.message,"Alert!", {toastTimeout: 3000});
						}
					);
			}
		} else {
			this.refreshApproved();
			this.refreshNotApproved();
		}
	}
}
