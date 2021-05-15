import { Component, OnInit } from "@angular/core";
import { ToastrManager } from "ng6-toastr-notifications";
import { ProjectguideallotmentService } from "src/app/API_Service/projectguideallotment.service";
import * as XLSX from "xlsx";

export class Alloted {
	constructor(
		public batchId: string,
		public guide: Guide,
		public coguide: Guide,
		public session: string,
		public ugOrPg: string,
		public students: Students[]
	) {}
}

export class Guide {
	constructor(
		public aadharNumber: string,
		public alternateMobileNo: number,
		public areaOfSpecialization: string,
		public bloodGroup: string,
		public classs: string,
		public createdBy: string,
		public createdDate: string,
		public currentDesignation: string,
		public dob: string,
		public email: string,
		public employeeId: string,
		public fatherName: string,
		public gender: string,
		public id: string,
		public joiningDate: string,
		public mobileNo: number,
		public modifiedBy: string,
		public modifiedDate: string,
		public motherName: string,
		public name: string,
		public nameAcronym: string,
		public panNumber: string,
		public type: string,
		public userId: string
	) {}
}
export class Data {
	constructor(
		public BatchId: string,
		public Guide: string,
		public CoGuide: string,
		public EnrollmentNo: string,
		public StudentName: string,
		public Session: string,
		public UgOrPg: string
	) {}
}

export class Students {
	constructor(
		public admissionYear: number,
		public bloodGroup: string,
		public category: string,
		public courseId: string,
		public createdBy: string,
		public createdDate: string,
		public creategdBy: string,
		public dob: string,
		public email: string,
		public enrollmentId: string,
		public fatherContact: number,
		public fatherEmail: string,
		public fatherName: string,
		public fullName: string,
		public gender: string,
		public id: number,
		public mobileNo: number,
		public modifiedBy: string,
		public modifiedDate: string,
		public motherContact: number,
		public motherEmail: string,
		public motherName: string,
		public userId: string
	) {}
}

@Component({
	selector: "app-projectguideallotment",
	templateUrl: "./projectguideallotment.component.html",
	styleUrls: ["./projectguideallotment.component.scss"],
})
export class ProjectguideallotmentComponent implements OnInit {
	groupsize = 2;
	countSelected = 0;
	myGuide1: Guide;
	myGuide2: Guide;
	selectedYear: string;
	selectedCourse: string;
	students: Students[];
	alloted: Alloted[];
	alloted_count = 0;
	guides: Guide[];
	batchStudents: Students[];
	editingBatch: Alloted;
	year = new Date().getFullYear() - 2;
  courses: any[];
	constructor(private projectGuideService: ProjectguideallotmentService, public toastr: ToastrManager) {}
	coursesUG: Array<any> = [
		{
			name: "BE-I",
			value:
				(this.year - 1).toString() + "-" + (this.year + 3).toString(),
		},
		{
			name: "BE-II",
			value:
				(this.year - 2).toString() + "-" + (this.year + 2).toString(),
		},
		{
			name: "BE-III",
			value:
				(this.year - 3).toString() + "-" + (this.year + 1).toString(),
		},
		{
			name: "BE-IV",
			value: (this.year - 4).toString() + "-" + this.year.toString(),
		},
	];

	coursesPG: Array<any> = [
		{
			name: "ME-0",
			value: this.year.toString() + "-" + (this.year + 2).toString(),
		},
		{
			name: "ME-I",
			value:
				(this.year - 1).toString() + "-" + (this.year + 1).toString(),
		},
		{
			name: "ME-II",
			value: (this.year - 2).toString() + "-" + this.year.toString(),
		},
	];

	ngOnInit() {
		this.initilizeUG();
		this.getGuides();
	}
	changeData() {
		this.batchStudents = [];
		this.getRemainingStudents();
		this.refreshAlloted();
    	this.myGuide1=null;
    	this.myGuide2=null;
	}

	getGuides() {
		this.projectGuideService.retrieveAllGuides().subscribe(
			(response) => {
				this.guides = response.sort((a, b) =>
					a.name > b.name ? 1 : -1
				);
			},
			(error) => {
				this.toastr.errorToastr(error.message,"Alert!", {toastTimeout: 3000});
			}
		);
	}
	initilizeUG() {
    this.courses=this.coursesUG
		this.selectedYear = this.coursesUG[3].value;
		this.selectedCourse = "UG";
		this.changeData();
	}

	initilizePG() {
    this.courses=this.coursesPG
		this.selectedYear = this.coursesPG[2].value;
		this.selectedCourse = "PG";
		this.changeData();
	}

	refreshAlloted() {
		this.projectGuideService
			.retrieveAllBatches(this.selectedYear, this.selectedCourse)
			.subscribe(
				(response) => {
					response.forEach(function (batch) {
            batch.students.sort((a, b) =>
            a.enrollmentId > b.enrollmentId ? 1 : -1
          );
        });
        this.alloted=response;
				},
				(error) => {
					console.log(error);
				}
			);
	}

	getRemainingStudents() {
		this.projectGuideService
			.retrieveRemainingStudents(this.selectedYear, this.selectedCourse)
			.subscribe(
				(response) => {
					this.students = response.sort((a, b) =>
						a.enrollmentId > b.enrollmentId ? 1 : -1
					);
				},
				(error) => {
					console.log(error);
				}
			);
	}

	appendStudents(student) {
		let index = this.batchStudents.indexOf(student);
		if (index > -1) {
			this.batchStudents.splice(index, 1);
		} else {
			this.batchStudents.push(student);
		}
	}
	allotguide() {
		let batch = new Alloted(
			"",
			this.myGuide1,
			this.myGuide2,
			this.selectedYear,
			this.selectedCourse,
			this.batchStudents
		);
		delete batch.batchId;
		this.projectGuideService.createBatch(batch).subscribe(
			(response) => {
				this.toastr.successToastr(response.message, 'Success!', {toastTimeout: 3000});
				this.changeData();
			},
			(error) => {
				this.toastr.errorToastr(error.message,"Alert!", {toastTimeout: 3000});
			}
		);
		this.batchStudents = [];
	}
	updateBatch(batch) {
		this.projectGuideService.updateBatch(batch).subscribe(
			(response) => {
				this.toastr.successToastr(response.message, 'Success!', {toastTimeout: 3000});
				this.changeData();
			},
			(error) => {
				this.toastr.errorToastr(error.message,"Alert!", {toastTimeout: 3000});
				this.changeData();
			}
		);
	}
	editDetails(batch) {
		this.myGuide1 = batch.guide;
		this.myGuide2 = batch.coguide;
		this.editingBatch = batch;
		this.batchStudents = [...this.editingBatch.students];
	}
	exportToExcel() {
		let exportArray = [];
		for (var i = 0; i < this.alloted.length; i++) {
			let obj = this.alloted[i];
			if (this.alloted[i].students.length != 0)
				for (var j = 0; j < this.alloted[i].students.length; j++) {
					if(j==0){
            exportArray.push(new Data(obj.batchId,obj.guide.name,obj.coguide.name,obj.students[j].enrollmentId,obj.students[j].fullName,obj.session,obj.ugOrPg));
            continue;
          }
          
          exportArray.push(
						new Data("","","",obj.students[j].enrollmentId,obj.students[j].fullName,obj.session,obj.ugOrPg)
					);
				}
			else
				exportArray.push(
					new Data(
						obj.batchId,
						obj.guide.name,
						obj.coguide.name,
						"",
						"",
						obj.session,
						obj.ugOrPg
					)
				);
		}

		const fileName ="GuideAllotment" +"_"+this.selectedCourse +"_"+this.selectedYear+".xlsx";
		const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(exportArray);
		const wb: XLSX.WorkBook = XLSX.utils.book_new();
		XLSX.utils.book_append_sheet(wb, ws, "test");
		XLSX.writeFile(wb, fileName);
	}

	saveChanges() {
		this.editingBatch.guide = this.myGuide1;
		this.editingBatch.coguide = this.myGuide2;
		this.editingBatch.students = this.batchStudents;
		this.updateBatch(this.editingBatch);
		this.batchStudents = [];
	}
	onCheckboxChange(e, value) {
		// console.log(value);
		if (this.batchStudents.includes(value)) {
			const index = this.batchStudents.indexOf(value);
			if (index > -1) {
				this.batchStudents.splice(index, 1);
			}
		} else {
			this.batchStudents.push(value);
		}
		// console.log(this.selectedAudience.join(","));
	}

	addMoreStudents(batch) {
		this.editingBatch = batch;
		if (this.batchStudents.length == 0)
			alert("Choose students from the table, to add in this batch!");
		else {
			this.editingBatch.students = this.editingBatch.students.concat(
				this.batchStudents
			);
			this.updateBatch(this.editingBatch);
			this.batchStudents = [];
		}
	}
	// allotguide() {
	//   let i = 0;
	//   let arr=[]
	//   for (i = 0; i < this.students.length; i++){
	//     if (this.students[i].select == 1){
	//       arr.push(new Student(this.students[i].enrollment,this.students[i].name,this.students[i].cgpa,0));
	//       this.students[i].name='none';
	//     }
	//   }
	//   this.students=this.students.filter(s => s.name!=='none');
	//   this.alloted_count+=1;
	//   this.alloted.push(new Alloted(this.alloted_count,this.myGuide1,this.myGuide2,arr));
	//   this.countSelected=0;
	//   for (i = 0; i < this.guides.length; i++){
	//     if(this.guides[i].name==this.myGuide1)
	//       this.guides[i].batches1+=1;
	//     if(this.guides[i].name==this.myGuide2)
	//       this.guides[i].batches2+=1;
	//   }
	// }
	// incrementselect(i: number) {
	//   // console.log(this.students[i].select);
	//   if (this.students[i].select == 0){
	//     this.students[i].select = 1;
	//     this.countSelected += 1;
	//   }else{
	//     this.students[i].select = 0;
	//     this.countSelected -= 1;
	//   }
	// }
	// addguide(){
	//   if(this.addGuide!='None')
	//     this.guides.push(new Guide(this.addGuide, 0, 0))
	// }
	// removeguide(){
	//   var i,j,li=[];
	//   for (i = 0; i < this.alloted.length; i++){
	//     if(this.alloted[i].guide==this.removeGuide){
	//       li.push.apply(li, this.alloted[i].students)
	//       for (j = 0; j < this.guides.length; j++){
	//         if(this.guides[j].name==this.alloted[i].coguide){
	//           this.guides[j].batches2-=1;
	//         }
	//     }
	//   }
	//     if(this.alloted[i].coguide==this.removeGuide){
	//       li.push.apply(li, this.alloted[i].students)
	//       for (j = 0; j < this.guides.length; j++){
	//         if(this.guides[j].name==this.alloted[i].guide){
	//           this.guides[j].batches1-=1;
	//         }
	//     }
	//   }
	// }

	//   this.students.push.apply(this.students, li)
	//   this.guides=this.guides.filter(s => s.name!==this.removeGuide);
	//   this.alloted=this.alloted.filter(s => s.guide!==this.removeGuide);
	//   this.alloted=this.alloted.filter(s => s.coguide!==this.removeGuide);
	// }
}
