import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {
	Lecture,
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
		return this.http.get<Lecture[]>(
			`${this.baseUrl}/expertLecture/getExpertLecturesByStatus/pending`
		);
	}

	retrieveUpcommingExpertLectures() {
		return this.http.get<Lecture[]>(
			`${this.baseUrl}/expertLecture/getExpertLecturesByStatus/upcoming`
		);
	}

	retrieveCompletedExpertLectures() {
		return this.http.get<Lecture[]>(
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
	updateExpert(expert) {
		return this.http.put<any>(
			`${this.baseUrl}/expertLecture/editExpert`,
			expert
		);
	}



	deleteExpert(expertID) {
		return this.http.delete(
			`${this.baseUrl}/expertLecture/deleteExpert/${expertID}`);
	}

	deleteExpertLecture(expertLectureID) {
		return this.http.delete(
			`${this.baseUrl}/expertLecture/deleteExpertLecture/${expertLectureID}`);
	}

	searchExpertLectures(keyword,activeTab) {
		let params = new HttpParams();
		params = params.append("keyword", keyword);
		params = params.append("status", activeTab);
		return this.http.get<Lecture[]>(
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
}
