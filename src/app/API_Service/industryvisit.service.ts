import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IndustryDetails, IndustryVisits } from '../myduties/industryvisit/industryvisit.component';
import { apiSetting } from '../urls/apisetting';

@Injectable({
  providedIn: 'root'
})
export class IndustryvisitService {

  private baseUrl = apiSetting.apiAcademics;
	constructor(private http: HttpClient) {}

  retrievePendingIndustryVisits() {
		return this.http.get<IndustryVisits []>(
			`${this.baseUrl}/industryVisit/getIndustryVisits/pending`
		);
	}

	retrieveUpcommingIndustryVisits() {
		return this.http.get<IndustryVisits []>(
			`${this.baseUrl}/industryVisit/getIndustryVisits/upcoming`
		);
	}

	retrieveCompletedIndustryVisits() {
		return this.http.get<IndustryVisits []>(
			`${this.baseUrl}/industryVisit/getIndustryVisits/completed`
		);
	}

  searchIndustryVisits(keyword, activeTab) {
		let params = new HttpParams();
		params = params.append("status", activeTab);
    	params = params.append("keyword", keyword);
		return this.http.get<IndustryVisits[]>(
			`${this.baseUrl}/industryVisit/searchIndustryVisits`,{
				params: params
			}
		);
	}

  addIndustryVisit(visit) {
		return this.http.post<any>(
			`${this.baseUrl}/industryVisit/addIndustryVisit`,
			visit
		);
	}


  editIndustryVisit(visit){
    return this.http.put(
			`${this.baseUrl}/industryVisit/editIndustryVisit`,
			visit);
  }

  updateIndustryVisitStatus(industryVisitId, file) {
		return this.http.put<any>(
			`${this.baseUrl}/industryVisit/updateIndustryVisitStatus/${industryVisitId}`, file
		);
	}
	getIndustryVisitDetails(visitID) {
		return this.http.get<IndustryDetails>(
			`${this.baseUrl}/industryVisit/viewIndustryVisitDetails/${visitID}`
		);
	}
	deleteIndustryVisit(visitID) {
		return this.http.delete(
			`${this.baseUrl}/industryVisit/deleteIndustryVisit/${visitID}`);
	}
	
	downloadAttendance(visitID) {
		return `${this.baseUrl}/industryVisit/downloadAttendance/${visitID}`
		
	}

	downloadNotesheet(visitID) {
		return `${this.baseUrl}/industryVisit/downloadNotesheet/${visitID}`
	} 
}