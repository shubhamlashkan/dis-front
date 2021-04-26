import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { IndustryvisitService } from "src/app/API_Service/industryvisit.service";


export class IndustryVisits{
	constructor(
		public participants: string,
		public companyName: string,
		public coordinator1: string,
		public coordinator2: string,
		public date: string,
		public industryVisitId: string,
		public time: string
	) {}
}

export class AddIndustryVisits{
	constructor(
		public participants,
		public address,
		public city,
		public companyName,
		public coordinator1,
		public coordinator2,
		public date,
		public pin,
		public state,
		public time
	) {}
}

export class IndustryDetails{
	constructor(
		public participants,
		public address,
		public city,
		public companyName,
		public coordinator1,
		public coordinator2,
		public date,
		public pin,
		public state,
		public time,
		public attendance,
		public industryVisitId,
		public notesheet,
		public status,
		public totalExpenditure

	) {}
}

@Component({
	selector: "app-industryvisit",
	templateUrl: "./industryvisit.component.html",
	styleUrls: ["./industryvisit.component.scss"],
})






export class IndustryvisitComponent implements OnInit {
	constructor(private industryVisitService: IndustryvisitService) {}
	pendingVisits:IndustryVisits[];
	upcomingVisits: IndustryVisits[];
	completedVisits: IndustryVisits[];
	searchCompanyName: string;
	industryDetails: IndustryDetails;
	changeCompanyName: string;
	changeVisitID: string;
	deleteVisit:any[];
	notesheet:File;

	@ViewChild("f1") addIndustryVisitForm: NgForm;

  activeTab=1;
	ngOnInit() {
		this.refreshVisits();
		this.deleteVisit=[];
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
	editIndustryVisit(){

	}
	deleteIndustry(name, industryVisitId){
		if (confirm("Do you want to delete visit to " + name + "?")) {
			
			this.industryVisitService.deleteIndustryVisit(industryVisitId).subscribe(
				(response) => {
					console.log(response);
				},
				(error) => {
					alert(error.error.text);
					this.refreshVisits();
				}
			);
		}

	}
	
	getVisitDetails(visitID){
		this.industryVisitService
			.getIndustryVisitDetails(visitID)
			.subscribe((response) => {
				this.industryDetails = response;
			});

	}
	searchIndustryVisit(){
		if (this.searchCompanyName) {
			if (this.activeTab == 1) {
				this.industryVisitService
					.searchIndustryVisits(this.searchCompanyName, "pending")
					.subscribe((response) => {
						this.pendingVisits = response;
					});
			} else if (this.activeTab == 2) {
				this.industryVisitService
					.searchIndustryVisits(this.searchCompanyName, "upcoming")
					.subscribe((response) => {
						this.upcomingVisits = response;
					});
			} else if (this.activeTab == 3) {
				this.industryVisitService
					.searchIndustryVisits(this.searchCompanyName, "completed")
					.subscribe((response) => {
						this.completedVisits = response;
					});
			}
		} else {
			this.refreshVisits();
		}

	}

	refreshPendingVisits() {
		this.industryVisitService
			.retrievePendingIndustryVisits()
			.subscribe((response) => {
				this.pendingVisits = response;
				// console.log(this.pendingLectures[0].expertLectureId);
			});
	}
	refreshUpcommingVisits() {
		this.industryVisitService
			.retrieveUpcommingIndustryVisits()
			.subscribe((response) => {
				this.upcomingVisits = response;
			});
	}
	refreshCompletedVisits() {
		this.industryVisitService
			.retrieveCompletedIndustryVisits()
			.subscribe((response) => {
				this.completedVisits = response;
			});
	}

	refreshVisits(){
		if(this.activeTab==1)
			this.refreshPendingVisits();
		else if(this.activeTab==2)
			this.refreshUpcommingVisits();
		else
			this.refreshCompletedVisits();
	}
	changeVisitStatus(companyName, industryVisitId){
		this.changeCompanyName=companyName;
		this.changeVisitID=industryVisitId; 
	}
	selectFileInput(file){
		this.notesheet=file[0];
	}
	changeStatus() {
		// alert("Changing Status!");
		if (confirm("Do you want to change status of " + this.changeCompanyName + "?")) {
			const formData= new FormData();
			formData.append('file',this.notesheet);
			this.industryVisitService
				.updateIndustryVisitStatus(this.changeVisitID, formData)
				.subscribe(
					(response) => {
						this.refreshVisits();
					},
					(error) => {
						alert(error.error.text);
						this.refreshVisits();
					}
				);
		}
		else{
			this.refreshVisits();
		}
	}
	downloadNotesheet(){
		let url=this.industryVisitService.downloadNotesheet(this.industryDetails.industryVisitId);
		window.location.href=url;
	}

	downloadAttendance(){
		let url=this.industryVisitService.downloadAttendance(this.industryDetails.industryVisitId);
		window.location.href=url;
	}
	
	sendInvite(){
		alert('Notification module in progress...')
	}
	addIndustryVisit(){
		this.industryVisitService.addIndustryVisit(this.addIndustryVisitForm.form.value).subscribe(
			(response) => {
				console.log(response);
				this.refreshPendingVisits();
			},
			(error) => {
				alert(error.error.text);
				this.refreshPendingVisits();
			}
		);
	}

}
