import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})

export class ProfileService {


  private baseUrl = "http://localhost:8080/dis/user";
  constructor(private http: HttpClient) { }

  getProfileUserId(): Observable<any> {
    return this.http.get(`${this.baseUrl}/getMyUserID`)
  }

  getProfileInfo(id, userType): Observable<any> {
    return this.http.get(`${this.baseUrl}/staffBasicProfile?userId=${id}&userType=${userType}`);
  }

  getStudentProfileInfo(id, userType): Observable<any> {
    return this.http.get(`${this.baseUrl}/studentBasicProfile?userId=${id}&userType=${userType}`);
  }
  getWorkExperienceInfo(id): Observable<any> {
    return this.http.get(`${this.baseUrl}/userWorkExperience?userId=${id}`);
  }

  getUserQualificationInfo(id): Observable<any> {
    return this.http.get(`${this.baseUrl}/userQualification?userId=${id}`);
  }

  getUserResearchWorkInfo(id): Observable<any> {
    return this.http.get(`${this.baseUrl}/userResearchWork?userId=${id}`);
  }

  getUserInternshipInfo(id): Observable<any> {
    return this.http.get(`${this.baseUrl}/userInternship?userId=${id}`);
  }

  getUserProjectInfo(id): Observable<any> {
    return this.http.get(`${this.baseUrl}/userProject?userId=${id}`);
  }

  getUserCompetitiveExamInfo(id): Observable<any> {
    return this.http.get(`${this.baseUrl}/userCompetitiveExams?userId=${id}`);
  }

  getUserCulturalActivityInfo(id): Observable<any> {
    return this.http.get(`${this.baseUrl}/userCulturalActivityAchievements?userId=${id}`);
  }

  getUserTechnicalActivityInfo(id): Observable<any> {
    return this.http.get(`${this.baseUrl}/userTechnicalActivity?userId=${id}`);
  }

  getUserAddressInfo(id): Observable<any> {
    return this.http.get(`${this.baseUrl}/userAddress?userId=${id}`);
  }

  getFacultyStaffList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/staffProfile/getFacultyData`);
  }
  getStaffList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/staffProfile/getStaffData`);
  }

  //add service
  editStaffProfile(info: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/addStaffBasicProfile`, info, httpOptions);
  }
  editStudentProfile(info: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/addStudentBasicProfile`, info, httpOptions);
  }
  editUserAddress(info: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/addUserAddress`, info, httpOptions);
  }
  editWorkExperience(info: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/addUserWorkExperience`, info, httpOptions);
  }
  editPublication(info: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/addUserResearchWork`, info, httpOptions);
  }
  editInternship(info: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/addUserInternship`, info, httpOptions);
  }
  editCompetitive(info: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/addUserCompetitiveExams`, info, httpOptions);
  }
  editProjects(info: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/addUserProjec`, info, httpOptions);
  }
  editTechnical(info: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/addUserTechnicalActivity`, info, httpOptions);
  }
  editCultural(info: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/addUserCulturalActivityAchievements`, info, httpOptions);
  }
  editEducation(info: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/addUserQualification`, info, httpOptions);
  }


  
  deleteCompetitiveExam(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/deleteUserCompetitiveExam?id=${id}`)
  }

  deleteAddress(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/deleteUserAddress?id=${id}`)
  }

  deleteCulturalActivity(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/deleteUserCulturalActivityAchievement?id=${id}`)
  }

  deleteInternship(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/deleteUserInternship?id=${id}`)
  }

  deleteOtherAchievement(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/deleteUserOtherAchievement?id=${id}`)
  }

  deleteWorkExperience(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/deleteUserWorkExperience?id=${id}`)
  }

  deleteTechnicalActivity(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/deleteUserTechnicalActivity?id=${id}`)
  }

  deleteResearchWork(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/deleteUserResearchWork?id=${id}`)
  }

  deleteQualification(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/deleteUserQualification?id=${id}`)
  }

  deleteProject(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/deleteUserProject?id=${id}`)
  }


  uploadProfilePicture(image: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/updateProfilePicture`, image, httpOptions);
  }

}
