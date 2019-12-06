import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};
@Injectable({
  providedIn: 'root'
})

export class ProfileService {

  
  private baseUrl="http://localhost:8080/dis/user";
  constructor(private http: HttpClient) { }
 
  getProfileInfo(id, userType):Observable<any>{
     return this.http.get(`${this.baseUrl}/staffBasicProfile?id=${id}&userType=${userType}`);
  }

  getStudentProfileInfo(id,userType):Observable<any>{
    return this.http.get(`${this.baseUrl}/studentBasicProfile?id=${id}&userType=${userType}`);
  }
  getWorkExperienceInfo(id):Observable<any>{
    return this.http.get(`${this.baseUrl}/userWorkExperience?id=${id}`);
  }

  getUserQualificationInfo(id):Observable<any>{
    return this.http.get(`${this.baseUrl}/userQualification?id=${id}`);
  }

  getUserResearchWorkInfo(id):Observable<any>{
    return this.http.get(`${this.baseUrl}/userResearchWork?id=${id}`);
  }

  getUserInternshipInfo(id):Observable<any>{
    return this.http.get(`${this.baseUrl}/userInternship?id=${id}`);
  }

  getUserProjectInfo(id):Observable<any>{
    return this.http.get(`${this.baseUrl}/userProject?id=${id}`);
  }

  getUserCompetitiveExamInfo(id):Observable<any>{
    return this.http.get(`${this.baseUrl}/userCompetitiveExams?id=${id}`);
  }

  getUserCulturalActivityInfo(id):Observable<any>{
    return this.http.get(`${this.baseUrl}/userCulturalActivityAchievements?id=${id}`);
  }

  getUserTechnicalActivityInfo(id):Observable<any>{
    return this.http.get(`${this.baseUrl}/userTechnicalActivity?id=${id}`);
  }

  getUserAddressInfo(id):Observable<any>{
    return this.http.get(`${this.baseUrl}/userAddress?id=${id}`);
  }

  getFacultyStaffList():Observable<any>{
    return this.http.get(`${this.baseUrl}/facultyData`);
  }
  getStaffList():Observable<any>{
    return this.http.get(`${this.baseUrl}/staffData`);
  }

  //add service
  editStaffProfile(info : any):Observable<any>{
    return this.http.put(`${this.baseUrl}/editStaffBasicProfile`,info,httpOptions);
  }
  editStudentProfile(info : any):Observable<any>{
    return this.http.put(`${this.baseUrl}/editStudentBasicProfile`,info,httpOptions);
  }
  editUserAddress(info : any):Observable<any>{
    return this.http.put(`${this.baseUrl}/editUserAddress`,info,httpOptions);
  }
  editWorkExperience(info : any):Observable<any>{
    return this.http.put(`${this.baseUrl}/editUserWorkExperience`,info,httpOptions);
  }
  editPublication(info : any):Observable<any>{
    return this.http.put(`${this.baseUrl}/editUserResearchWork`,info,httpOptions);
  }
  editInternship(info : any):Observable<any>{
    return this.http.put(`${this.baseUrl}/editUserInternship`,info,httpOptions);
  }
  editCompetitive(info : any):Observable<any>{
    return this.http.put(`${this.baseUrl}/editUserCompetitiveExams`,info,httpOptions);
  }
  editProjects(info : any):Observable<any>{
    return this.http.put(`${this.baseUrl}/editUserProjec`,info,httpOptions);
  }
  editTechnical(info : any):Observable<any>{
    return this.http.put(`${this.baseUrl}/editUserTechnicalActivity`,info,httpOptions);
  } 
  editCultural(info : any):Observable<any>{
    return this.http.put(`${this.baseUrl}/editUserCulturalActivityAchievements`,info,httpOptions);
  }
  editEducation(info : any):Observable<any>{
    return this.http.put(`${this.baseUrl}/editUserQualification`,info,httpOptions);
  }
 }
