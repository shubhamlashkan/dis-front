import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Alloted, Guide, Students } from "../myduties/projectguideallotment/projectguideallotment.component";
import { apiSetting } from "../urls/apisetting";

@Injectable({
  providedIn: 'root'
})




export class ProjectguideallotmentService {
  private baseUrl = apiSetting.apiUser;

  constructor(private http: HttpClient) { }

  retrieveRemainingStudents(session, ugOrPg) {
		return this.http.get<Students[]>(
			`${this.baseUrl}/guideAllotment/getRemainingStudents/${session}/${ugOrPg}`
		);
	}

  retrieveGuidesBatch(guideId, ugOrPg) {
		return this.http.get<Alloted[]>(
			`${this.baseUrl}/guideAllotment/getGuidesBatch/${guideId}/${ugOrPg}`
		);
	}

  retrieveAllBatches(session, ugOrPg) {
		return this.http.get<Alloted[]>(
			`${this.baseUrl}/guideAllotment/getAllBatches/${session}/${ugOrPg}`
		);
	}

  updateBatch(batch) {
		return this.http.put<any>(
			`${this.baseUrl}/guideAllotment/updateBatch`,
			batch
		);
	}

  createBatch(batch) {
		return this.http.post<any>(
			`${this.baseUrl}/guideAllotment/createBatch`,
			batch
		);
	}   

  retrieveAllGuides() {
		return this.http.get<Guide[]>(
			`${this.baseUrl}/guideAllotment/getAllGuides`
		);
	}
}
