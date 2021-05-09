import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {
	LectureDetails,
} from "../myduties/expertlecture/expertlecture.component";
import { apiSetting } from "../urls/apisetting";

@Injectable({
	providedIn: "root",
})
export class ExpertlectureService {
	private baseUrl = apiSetting.apiAcademics;
	constructor(private http: HttpClient) {}

	retrievePendingExpertLectures() {
		return this.http.get<LectureDetails[]>(
			`${this.baseUrl}/expertLecture/getExpertLecturesByStatus/pending`
		);
	}

	retrieveUpcommingExpertLectures() {
		return this.http.get<LectureDetails[]>(
			`${this.baseUrl}/expertLecture/getExpertLecturesByStatus/upcoming`
		);
	}

	retrieveCompletedExpertLectures() {
		return this.http.get<LectureDetails[]>(
			`${this.baseUrl}/expertLecture/getExpertLecturesByStatus/completed`
		);
	}

	retrieveExpertNameAndDesignation() {
		return this.http.get<any[]>(
			`${this.baseUrl}/expertLecture/getExpertNamesAndDesignations`
		);
	}

	addExpert(expert) {
		return this.http.post<any>(
			`${this.baseUrl}/expertLecture/addExpert`,
			expert
		);
	}
	getExpertDetails(name, designation) {
		let params = new HttpParams();
		params = params.append("expertName", name);
		params = params.append("expertDesignation", designation);
		return this.http.get<any>(`${this.baseUrl}/expertLecture/findExpert`, {
			params: params,
		});
	}
	updatePaymentStatusAndRemarks(expertLectureID, payment_status, remarks) {
		let params = new HttpParams();
		params = params.append("payment_status", payment_status);
		params = params.append("remarks", remarks);
		return this.http.put<any>(`${this.baseUrl}/expertLecture/updatePaymentStatusAndRemarks/${expertLectureID}`, 
			params
		);
	}
	updateExpert(expert) {
		return this.http.put<any>(
			`${this.baseUrl}/expertLecture/editExpert`,
			expert
		);
	}

	updateExpertLecture(expertLectureID,lecture){
		return this.http.put<any>(
			`${this.baseUrl}/expertLecture/editExpertLecture/${expertLectureID}`,
			lecture
		);
	}



	deleteExpert(expertID) {
		return this.http.delete<any>(
			`${this.baseUrl}/expertLecture/deleteExpert/${expertID}`);
	}

	deleteExpertLecture(expertLectureID) {
		return this.http.delete<any>(
			`${this.baseUrl}/expertLecture/deleteExpertLecture/${expertLectureID}`);
	}

	searchExpertLectures(keyword,activeTab) {
		let params = new HttpParams();
		params = params.append("keyword", keyword);
		params = params.append("status", activeTab);
		return this.http.get<LectureDetails[]>(
			`${this.baseUrl}/expertLecture/searchExpertLectures`,{
				params: params
			}
		);
	}

	updateExpertLectureStatus(lectureID, file) {
		return this.http.put<any>(
			`${this.baseUrl}/expertLecture/updateExpertLectureStatus/${lectureID}`,
			file
		);
	}

	uploadImages(lectureID, file) {
		return this.http.post<any>(
			`${this.baseUrl}/expertLecture/uploadImages/${lectureID}`,
			file
		);
	}

	addExpertLecture(lecture) {
		return this.http.post<any>(
			`${this.baseUrl}/expertLecture/addExpertLecture`,
			lecture
		);
	}

	getExpertLectureDetails(lectureID) {
		return this.http.get<LectureDetails>(
			`${this.baseUrl}/expertLecture/viewExpertLectureDetails/${lectureID}`
		);
	}

	downloadAttendance(lectureID) {
		// return this.http.get<any>(
		// 	`${this.baseUrl}/expertLecture/downloadAttendance/${lectureID}`);
		return `${this.baseUrl}/expertLecture/downloadAttendance/${lectureID}`
		
	}

	downloadNotesheet(lectureID) {
		// return this.http.get<any>(
		// 	`${this.baseUrl}/expertLecture/downloadNotesheet/${lectureID}`);
		return `${this.baseUrl}/expertLecture/downloadNotesheet/${lectureID}`

	}

	viewImages(lectureId){
		let params = new HttpParams();
		params = params.append("expert_lecture_id", lectureId);
		const options = { params: params};
		return this.http.get<any>(
			`${this.baseUrl}/expertLecture/images`,options
		);


	}
}
