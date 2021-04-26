import { Component, OnInit } from "@angular/core";
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
	constructor(private meScholarshipService: MescholarshipService) {}
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
			console.log(this.awardScholarship);
			this.meScholarshipService
				.approveScholarship(this.awardScholarship)
				.subscribe(
					(response) => {
						console.log(response);
					},
					(error) => {
						console.log(error);
						alert(error.error.text);
						this.refreshNotApproved();
						this.refreshApproved();
						this.awardScholarship = [];
					}
				);
		}
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
					console.log(response);
				},
				(error) => {
					console.log(error);
					alert(error.error.text);
					this.refreshNotApproved();
					this.refreshApproved();
					this.cancelStudents = [];
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
							console.log(error);
							this.refreshNotApproved();
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
							console.log(error);
							this.refreshApproved();
						}
					);
			}
		} else {
			this.refreshApproved();
			this.refreshNotApproved();
		}
	}
}
