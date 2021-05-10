import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StudentDetails } from '../myduties/mescholarship/mescholarship.component';
import { apiSetting } from '../urls/apisetting';

@Injectable({
  providedIn: 'root'
})
export class MescholarshipService {
  private baseUrl = apiSetting.apiAcademics;
	constructor(private http: HttpClient) {}

  retrieveMEStudentsWithScholarship(year) {
		return this.http.get<StudentDetails []>(
			`${this.baseUrl}/MEScholarship/fetchMEStudentsWithScholarship/${year}`
		);
	}

	retrieveMEStudentsWithoutScholarship(year) {
		return this.http.get<StudentDetails []>(
			`${this.baseUrl}/MEScholarship/fetchMEStudentsWithoutScholarship/${year}`
		);
	}

  approveScholarship(studentArray) {
		return this.http.post<any>(
			`${this.baseUrl}/MEScholarship/approveScholarship`,
			studentArray
		);
	}

  deleteScholarship(array) {
		return this.http.put<any>(
			`${this.baseUrl}/MEScholarship/cancelScholarship`, array);
	}

	searchStudentWithScholarship(name, year){
		let params = new HttpParams();
		params = params.append("year", year);
    	params = params.append("name", name);
		return this.http.get<StudentDetails []>(
			`${this.baseUrl}/MEScholarship/searchStudentsWithScholarship`,
			{
				params: params
			}
		);
	}
	searchStudentWithoutScholarship(name, year){
		let params = new HttpParams();
		params = params.append("year", year);
    	params = params.append("name", name);
		return this.http.get<StudentDetails []>(
			`${this.baseUrl}/MEScholarship/searchStudentsWithoutScholarship`, {
				params: params
			}
		);
	}
}
