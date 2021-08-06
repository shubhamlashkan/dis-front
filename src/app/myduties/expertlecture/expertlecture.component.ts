import { Component, OnInit, ViewChild } from "@angular/core";
import { FormArray, FormControl, NgForm } from "@angular/forms";
import { ExpertlectureService } from "src/app/API_Service/expertlecture.service";
import { ToastrManager } from 'ng6-toastr-notifications';
import { ProjectguideallotmentService } from "src/app/API_Service/projectguideallotment.service";
import * as XLSX from "xlsx";

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
		public venue,
		public remarks
	) {}
}
export class UpdateLecture {
	constructor(
		public coordinator,
		public venue,
		public conveyance,
		public audience,
		public honorarium,
		public time,
		public date
	) {}
}
export class Data {
	constructor(
		public Topic: string,
		public Date: string,
		public ExpertName: string,
		public Designation: string,
		public Coordinator: string,
		public Audience: string,
		public Status: string
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

	constructor(private expertService: ExpertlectureService, public toastr: ToastrManager, private projectGuideService: ProjectguideallotmentService) {
		
	}
	paymentStatusList: Array<any> = [
		{ name: "Pending"},
		{ name: "Initiated"},
		{ name: "Completed"}
	];
	courses: Array<any> = [
		{ name: "BE-I", value: "BE-I" },
		{ name: "BE-II", value: "BE-II" },
		{ name: "BE-III", value: "BE-III" },
		{ name: "BE-IV", value: "BE-IV" },
		{ name: "ME-I", value: "ME-I" },
		{ name: "ME-II", value: "ME-II" },
	];
	experts: Expert[];
	pendingLectures: LectureDetails[];
	upcommingLectures: LectureDetails[];
	completedLectures: LectureDetails[];
	nd: ExpertName[];
	selectedExpert = "None";
	changeTopic: string;
	changeExpertLectureID: string;
	// selectedYear;
	selectedAudience: any[];
	notesheet: File;
	editExpert = "None";
	imagesList: any;
	faculty:any[];
	selectedCoordinator: any;

	// editExpertLecture: any[];
	// selectedCourse;
	// years: any[];

	searchTopic;
	display = "None";
	activeTab = 1;
	editingExpert: Expert;
	lectureDetails: LectureDetails;
	editingLecture: UpdateLecture;
	editingLectureID: string;

	ngOnInit() {
		this.refreshLectures();
		this.selectedAudience = [];
		this.getFaculty();
		this.selectedCoordinator=null;
		// this.editExpertLecture = [];
	}
	addExpert() {
		this.addExpertForm.form.value.expertName = this.addExpertForm.form.value.name.trim();
		this.addExpertForm.form.value.designation = this.addExpertForm.form.value.designation.trim();
		this.expertService.addExpert(this.addExpertForm.form.value).subscribe(
			(response) => {
				this.toastr.successToastr(response.message, 'Success!', {toastTimeout: 3000});
				this.refreshExperts();
			},
			(error) => {
				this.toastr.errorToastr(error.message,"Alert!", {toastTimeout: 3000});
				this.refreshExperts();
			}
		);
	}

	getFaculty() {
		this.projectGuideService.retrieveAllGuides().subscribe(
			(response) => {
				this.faculty = response.sort((a, b) =>
					a.name > b.name ? 1 : -1
				);
			},
			(error) => {
				this.toastr.errorToastr(error.message,"Alert!", {toastTimeout: 3000});
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
					this.toastr.successToastr(response.message, 'Success!', {toastTimeout: 3000});
					this.refreshExperts();
				},
				(error) => {
					this.toastr.errorToastr(error.message,"Alert!", {toastTimeout: 3000});
					this.refreshExperts();
				}
			);
		}
	}

	deleteLecture(name, expertLectureID){
		if (confirm("Do you want to delete " + name + "?")) {
			this.expertService.deleteExpertLecture(expertLectureID).subscribe(
				(response) => {
					this.toastr.successToastr(response.message, 'Success!', {toastTimeout: 3000});
					this.refreshLectures();
				},
				(error) => {
					this.toastr.errorToastr(error.message,"Alert!", {toastTimeout: 3000});
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
	selectPhotoInput(file){
		this.imagesList=file;
	}
	changeStatus() {
		if (confirm("Do you want to change status of " + this.changeTopic + "?")) {
			const formData= new FormData();
			formData.append('file',this.notesheet);
			this.expertService
				.updateExpertLectureStatus(this.changeExpertLectureID,formData)
				.subscribe(
					(response) => {
						// console.log(response);
						this.toastr.successToastr(response.message, 'Success!', {toastTimeout: 3000});
						this.refreshLectures();
						this.notesheet=null;
					},
					(error) => {
						this.toastr.errorToastr(error.message,"Alert!", {toastTimeout: 3000});
						this.refreshLectures();
					}
				);
		}
		else{
			this.refreshLectures();
		}
	}

	changeStatus2() {
		if (confirm("Do you want to change status of " + this.changeTopic + "?")) {
			const formData= new FormData();
			formData.append('file',this.notesheet);
			this.expertService
				.updateExpertLectureStatus(this.changeExpertLectureID,formData)
				.subscribe(
					(response) => {
						// console.log(response);
						this.toastr.successToastr(response.message, 'Success!', {toastTimeout: 3000});
						this.refreshLectures();
					},
					(error) => {
						this.toastr.errorToastr(error.message,"Alert!", {toastTimeout: 3000});
						this.refreshLectures();
					}
				);
			const formData2= new FormData();
			for(var i=0;i<this.imagesList.length;i++)
				formData2.append('photos',this.imagesList[i]);
				this.expertService
				.uploadImages(this.changeExpertLectureID,formData2)
				.subscribe(
					(response) => {
						this.toastr.successToastr(response.message, 'Success!', {toastTimeout: 3000});
						this.refreshLectures();
						this.imagesList=null;
					},
					(error) => {
						this.toastr.errorToastr(error.message,"Alert!", {toastTimeout: 3000});
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
		window.location.href=url;
	}
	downloadNotesheet(){
		let url=this.expertService.downloadNotesheet(this.lectureDetails.expertLectureId);
		window.location.href=url;
	}

	viewPhotos(lectureId){
		this.expertService
			.viewImages(lectureId)
			.subscribe((response) => {
				this.imagesList = response;
			});
	}

	downloadPhoto(url){
		window.location.href=url;
	}
	reportGeneration() {
		alert("Notesheet generation in progress!");
	}

	getLectureDetails(lectureId) {
		this.expertService
			.getExpertLectureDetails(lectureId)
			.subscribe((response) => {
				console.log(response);
				this.lectureDetails = response;
			});
	}
	editExpertLecture(lecture){
		this.expertService.getExpertLectureDetails(lecture.expertLectureId).subscribe((response) => {
				lecture = response;
				this.editingLecture = new UpdateLecture(lecture.coordinator, lecture.venue, lecture.conveyance, lecture.audience, lecture.honorarium, lecture.time, lecture.date);
				this.editingLectureID=lecture.expertLectureId
			});
	}

	updateExpertLecture(){
		if (confirm("Do you want to edit this lecture?")) {
			this.expertService.updateExpertLecture(this.editingLectureID, this.editingLecture).subscribe(
				(response) => {
					this.toastr.successToastr(response.message, 'Success!', {toastTimeout: 3000});
					this.editingLecture = null;
					this.editingLectureID = null;
				},
				(error) => {
					this.toastr.errorToastr(error.message,"Alert!", {toastTimeout: 3000});
				}
			);
		}
	}
	updatePayementStatusAndRemarks(){
		this.expertService.updatePaymentStatusAndRemarks(this.lectureDetails.expertLectureId, this.lectureDetails.paymentStatus, this.lectureDetails.remarks).subscribe(
			(response) => {
				this.toastr.successToastr(response.message, 'Success!', {toastTimeout: 3000});
			},
			(error) => {
				this.toastr.errorToastr(error.message,"Alert!", {toastTimeout: 3000});
			}
		);
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
				(response) => {
					this.toastr.successToastr(response.message, 'Success!', {toastTimeout: 3000});

				},
				(error) => {
					this.toastr.errorToastr(error.message,"Alert!", {toastTimeout: 3000});
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
			this.addExpertLectureForm.form.value.coordinator=this.selectedCoordinator;
			if(this.selectedAudience.length!=0)
			this.addExpertLectureForm.form.value.audience=this.selectedAudience.join(",");
		else
			this.addExpertLectureForm.form.value.audience="BE-I,BE-II,BE-III,BE-IV,ME-I,ME-II"
		
		console.log(this.addExpertLectureForm.form.value)
		this.expertService
			.addExpertLecture(this.addExpertLectureForm.form.value)
			.subscribe(
				(response) => {
					// console.log(response);
					this.toastr.successToastr(response.message, 'Success!', {toastTimeout: 3000});
					this.refreshLectures();
				},
				(error) => {
					// console.log(error);
					this.toastr.errorToastr(error.message,"Alert!", {toastTimeout: 3000});
				}
			);
	}

	exportToCSV() {
		let exportArray = [];
		for (var i = 0; i < this.pendingLectures.length; i++) {
			let obj = this.pendingLectures[i];
			
            exportArray.push(new Data(obj.topic,obj.date,obj.expertName,obj.expertDesignation,obj.coordinator,obj.audience,obj.status));
           
          
		}

		const fileName ="PendingExpertLectureReport.xlsx";
		const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(exportArray);
		const wb: XLSX.WorkBook = XLSX.utils.book_new();
		XLSX.utils.book_append_sheet(wb, ws, "sheet1");
		XLSX.writeFile(wb, fileName);
	}


	exportToExcel() {
		let exportArray = [];
		for (var i = 0; i < this.upcommingLectures.length; i++) {
			let obj = this.upcommingLectures[i];
			
            exportArray.push(new Data(obj.topic,obj.date,obj.expertName,obj.expertDesignation,obj.coordinator,obj.audience,obj.status));
           
          
		}

		const fileName ="UpcomingExpertLectureReport.xlsx";
		const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(exportArray);
		const wb: XLSX.WorkBook = XLSX.utils.book_new();
		XLSX.utils.book_append_sheet(wb, ws, "sheet1");
		XLSX.writeFile(wb, fileName);
	}


	getCSV(tableId) {
		let element = document.getElementById(tableId);
		const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
		ws['!cols'].push({ width: 20 },{ width: 20 },{ width: 30 },{ width: 30 },{ width: 30 },{ width: 30 },{ width: 30 })
		/* generate workbook and add the worksheet */
		const wb: XLSX.WorkBook = XLSX.utils.book_new();
			
 
		/* generate workbook and add the worksheet */
	
		XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
	
		/* save to file */
	
		XLSX.writeFile(wb, `${tableId}.xlsx`);
	  }
}
