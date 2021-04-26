import { Component, OnInit, ViewChild } from "@angular/core";
import { FormArray, FormControl, NgForm } from "@angular/forms";
import { ExpertlectureService } from "src/app/API_Service/expertlecture.service";

export class Expert {
	constructor(
		public expertId: string,
		public aadhaarNo: number,
		public accountNo: number,
		public bankName: string,
		public city: string,
		public country: string,
		public designation: string,
		public dob: Date,
		public email: string,
		public fathersName: string,
		public gstNo: string,
		public ifsc: string,
		public mobileNo: number,
		public name: string,
		public officeAddress: string,
		public panNo: string,
		public pinCode: number,
		public state: string,
		public type: string,
		public uniqueTeqipId: string
	) {}
}
export class ExpertName {
	constructor(public expertName: string, public expertDesignation: string) {}
}

export class LectureDetails {
	constructor(
		public coordinator,
		public attendance,
		public conveyance,
		public audience,
		public date,
		public expertDesignation,
		public expertLectureId,
		public expertName,
		public honorarium,
		public notesheet,
		public paymentStatus,
		public status,
		public time,
		public topic,
		public totalAmount,
		public venue
	) {}
}

export class Lecture {
	constructor(
		public coordinator: string,
		public attendance,
		public conveyance: number,
		public course: string,
		public date: Date,
		public expertLectureId: string,
		public expertName: string,
		public expertDesignation: string,
		public honorarium: number,
		public notesheet: string,
		public payment_status: string,
		public status: string,
		public time: string,
		public topic: string,
		public totalAmount: number,
		public venue: string,
		public audience: string
	) {}
}
@Component({
	selector: "app-expertlecture",
	templateUrl: "./expertlecture.component.html",
	styleUrls: ["./expertlecture.component.scss"],
})
export class ExpertlectureComponent implements OnInit {
	@ViewChild("f1") addExpertForm: NgForm;
	@ViewChild("f2") addExpertLectureForm: NgForm;
	@ViewChild("f3") showExpertDetails: NgForm;

	constructor(private expertService: ExpertlectureService) {
		
	}

	courses: Array<any> = [
		{ name: "BE-I", value: "BE-I" },
		{ name: "BE-II", value: "BE-II" },
		{ name: "BE-III", value: "BE-III" },
		{ name: "BE-IV", value: "BE-IV" },
		{ name: "ME-I", value: "ME-I" },
		{ name: "ME-II", value: "ME-II" },
	];
	experts: Expert[];
	pendingLectures: Lecture[];
	upcommingLectures: Lecture[];
	completedLectures: Lecture[];
	nd: ExpertName[];
	selectedExpert = "None";
	deleteExpertLecture: any[];
	changeTopic: string;
	changeExpertLectureID: string;
	// selectedYear;
	selectedAudience: any[];
	notesheet: File;
	editExpert = "None";
	// editExpertLecture: any[];
	// selectedCourse;
	// years: any[];

	searchTopic;
	display = "None";
	activeTab = 1;
	editingExpert: Expert;
	lectureDetails: LectureDetails;

	ngOnInit() {
		this.deleteExpertLecture=[];
		this.refreshLectures();
		this.selectedAudience = [];
		// this.editExpertLecture = [];
	}
	addExpert() {
		this.addExpertForm.form.value.expertName = this.addExpertForm.form.value.name.trim();
		this.addExpertForm.form.value.designation = this.addExpertForm.form.value.designation.trim();
		this.expertService.addExpert(this.addExpertForm.form.value).subscribe(
			(response) => {
				console.log(response);
				this.refreshExperts();
			},
			(error) => {
				alert(error.error.text);
				this.refreshExperts();
			}
		);
	}
	onCheckboxChange(e, value) {
		// console.log(value);
		if (this.selectedAudience.includes(value)) {
			const index = this.selectedAudience.indexOf(value);
			if (index > -1) {
				this.selectedAudience.splice(index, 1);
			}
		} else {
			this.selectedAudience.push(value);
		}
		// console.log(this.selectedAudience.join(","));
	}
	resetExpert() {
		this.display = "None";
		this.editExpert = "None";
		this.editingExpert=null;
	}
	deleteExpert(){
		// console.log(this.editingExpert);
		if (confirm("Do you want to delete " + this.editingExpert.name + "?")) {
			// delete this.editingExpert.expertId;
			this.expertService.deleteExpert(this.editingExpert.expertId).subscribe(
				(response) => {
					console.log(response);
				},
				(error) => {
					alert(error.error.text);
					this.refreshExperts();
				}
			);
		}
	}

	deleteLecture(name, expertLectureID){
		if (confirm("Do you want to delete " + name + "?")) {
			this.expertService.deleteExpertLecture(expertLectureID).subscribe(
				(response) => {
					console.log(response);
				},
				(error) => {
					alert(error.error.text);
					this.refreshLectures();
				}
			);
		}
	}

	checkExpert() {
		if (this.editExpert != "None") {
			// console.log(this.editExpert);
			let name, designation;
			name = this.editExpert.split("|")[0].trim();
			designation = this.editExpert.split("|")[1].trim();
			this.expertService.getExpertDetails(name, designation).subscribe(
				(response) => {
					this.editingExpert = response;
					this.display = "show";
				},
				(error) => {
					console.log(error);
				}
			);
		}
	}
	checkDisplay() {
		if (this.display == "None") return 0;
		else return 1;
	}

	// getCourses() {
	// 	console.log(this.selectedCourse);
	// 	if (this.selectedCourse == "B. Tech") {
	// 		this.years = ["I year", "II year", "III year", "IV year"];
	// 		console.log(this.years);
	// 		return 1;
	// 	} else if (this.selectedCourse == "M. Tech") {
	// 		this.years = ["I year", "II year"];
	// 		return 1;
	// 	}
	// 	return 0;
	// }
	changeTab1() {
		this.activeTab = 1;
	}

	changeTab2() {
		this.activeTab = 2;
	}
	changeTab3() {
		this.activeTab = 3;
	}
	changeStatusToUpcoming(expertLectureId, topic){
		this.changeTopic=topic;
		this.changeExpertLectureID=expertLectureId;

	}
	selectFileInput(file){
		this.notesheet=file[0];
	}
	changeStatus() {
		// alert("Changing Status!");
		if (confirm("Do you want to change status of " + this.changeTopic + "?")) {
			const formData= new FormData();
			formData.append('file',this.notesheet);
			this.expertService
				.updateExpertLectureStatus(this.changeExpertLectureID,formData)
				.subscribe(
					(response) => {
						// console.log(response);
						this.refreshLectures();
					},
					(error) => {
						alert(error.error.text);
						this.refreshLectures();
					}
				);
		}
		else{
			this.refreshLectures();
		}
	}
	downloadAttendance(){
		let url=this.expertService.downloadAttendance(this.lectureDetails.expertLectureId);
		// console.log(url);
		window.location.href=url;
		// this.expertService
		// 	.downloadAttendance(this.lectureDetails.expertLectureId)
		// 	.subscribe((response) => {
		// 		console.log(response);
		// 		let blob:any = new Blob([response]);
		// 		// saveAs(blob);
		// 		const url = window.URL.createObjectURL(blob);
		// 		window.open(url);
		// 	//window.location.href = response.url;
		// 	},
		// 	(error) => {
		// 		console.log(error.url);
		// 		let blob:any = new Blob([error.error.text], { type: 'application/pdf; charset=utf-8' });
		// 		// const url = window.URL.createObjectURL(blob);
		// 		// window.open(url);
		// 		saveAs(blob,"Gunjan.pdf");
		// 	}
		// 	);
	}
	downloadNotesheet(){
		let url=this.expertService.downloadNotesheet(this.lectureDetails.expertLectureId);
		window.location.href=url;
	}
	reportGeneration() {
		alert("Notesheet generation in progress!");
	}

	getLectureDetails(lectureId) {
		this.expertService
			.getExpertLectureDetails(lectureId)
			.subscribe((response) => {
				this.lectureDetails = response;
			});
	}
	editExpertLecture(){
		alert("Edit lecture")
	}
	refreshLectures() {
		if(this.activeTab==1)
			this.refreshPendingLectures();
		else if(this.activeTab==2)
			this.refreshUpcommingLectures();
		else
			this.refreshCompletedLectures();
		this.refreshExperts();
	}
	refreshExperts() {
		this.expertService
			.retrieveExpertNameAndDesignation()
			.subscribe((response) => {
				this.nd = response;
			});
	}
	editExpertDetails() {
		if (confirm("Do you want to edit " + this.editingExpert.name + " ?")) {
			this.expertService.updateExpert(this.editingExpert).subscribe(
				(response) => {},
				(error) => {
					alert(error.error.text);
				}
			);
		}
	}
	searchExpertLecture() {
		if (this.searchTopic) {
			if (this.activeTab == 1) {
				this.expertService
					.searchExpertLectures(this.searchTopic, "pending")
					.subscribe((response) => {
						this.pendingLectures = response;
					});
			} else if (this.activeTab == 2) {
				this.expertService
					.searchExpertLectures(this.searchTopic, "upcoming")
					.subscribe((response) => {
						this.upcommingLectures = response;
					});
			} else if (this.activeTab == 3) {
				this.expertService
					.searchExpertLectures(this.searchTopic, "completed")
					.subscribe((response) => {
						this.completedLectures = response;
					});
			}
		} else {
			this.refreshLectures();
		}
	}

	refreshPendingLectures() {
		this.expertService
			.retrievePendingExpertLectures()
			.subscribe((response) => {
				this.pendingLectures = response;
				// console.log(this.pendingLectures[0].expertLectureId);
			});
	}
	refreshUpcommingLectures() {
		this.expertService
			.retrieveUpcommingExpertLectures()
			.subscribe((response) => {
				this.upcommingLectures = response;
			});
	}
	refreshCompletedLectures() {
		this.expertService
			.retrieveCompletedExpertLectures()
			.subscribe((response) => {
				this.completedLectures = response;
			});
	}

	addExpertLecture() {
		let nameAndDesignation;
		nameAndDesignation = this.addExpertLectureForm.form.value.expertName;
		this.addExpertLectureForm.form.value.expertName = nameAndDesignation
			.split("|")[0]
			.trim();
		this.addExpertLectureForm.form.value.expertDesignation = nameAndDesignation
			.split("|")[1]
			.trim();
		if(this.selectedAudience.length!=0)
			this.addExpertLectureForm.form.value.audience=this.selectedAudience.join(",");
		else
			this.addExpertLectureForm.form.value.audience="BE-I,BE-II,BE-III,BE-IV,ME-I,ME-II"
		// this.addExpertLectureForm.form.value.year = this.selectedYear;
		// this.addExpertLectureForm.form.value.course = "Computer Science";
		// console.log(JSON.stringify(this.addExpertLectureForm.form.value));
		this.expertService
			.addExpertLecture(this.addExpertLectureForm.form.value)
			.subscribe(
				(response) => {
					// console.log(response);
					this.refreshLectures();
				},
				(error) => {
					// console.log(error);
					alert(error.error.text);
					this.refreshLectures();
				}
			);
	}
}
