import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { apiSetting } from '../urls/apisetting';
import {StudentAttenance} from './../Model/studentAttendance.model';
import { TokenStorageService } from '../authentication';
@Injectable({
  providedIn: 'root'
})

export class StudentService {
  private moodleUrl = `${apiSetting.apiMoodle}/moodle`;
  private gradeUrl = `${apiSetting.apiMoodle}/grades`;
  private assnsUrl = `${apiSetting.apiMoodle}/assns`;
  private quizUrl= `${apiSetting.apiMoodle}/quiz`
  private moodleUserId:any;
  constructor(private http: HttpClient,private sessionStorageService:TokenStorageService) {
    
   }
 
  public getStudentAttendance():Observable<StudentAttenance[]>{
    return this.http.get<StudentAttenance[]>(`${this.moodleUrl}/getIndividualStudentAttendance/`);
  }
  public getStudentOverviewReport():Observable<any>{
    return this.http.get<any[]>(`${this.gradeUrl}/getStudentsOverviewReport/`);
  }
  public getStudentUserReport(courseId:any):Observable<any>{
    return this.http.get<any[]>(`${this.gradeUrl}/getStudentsUserReport/${courseId}/`);
  }

  public getAllCourses():Observable<any>{
    return this.http.get<any[]>(`${this.assnsUrl}/getAllCoursesOfStudent/`)
  }
  public getStudentSubjectReport(courseId:any):Observable<any>
   
  {
    return this.http.get<any[]>(`${this.assnsUrl}/getStudentSubjectReport/${courseId}`);
  }
  public getQuiz(courseId:any):Observable<any>{
    return this.http.get<any[]>(`${this.quizUrl}/getQuizzesOfCourse/${courseId}`);
  }
  public getCompleteQuiz(quizId:any)
  :Observable<any>{
    return this.http.get<any[]>(`${this.quizUrl}/getCompleteQuiz/${quizId}`);
  }
  public getAssignments(courseId:any):Observable<any>{
    return this.http.get<any[]>(`${this.assnsUrl}/getStudentSubjectReport/${courseId}`);
  }
  public getNoOfPendingAssignments()
  :Observable<any>{
    return this.http.get<any[]>(`${this.assnsUrl}/getNumberOfPendingAssignments/`);
  }
  // public login(Student: Object): Observable<Object> {
  //   return this.http.post(`${this.baseUrl}` + `/login`, Student);
  // }

  // public signup(Student: Object): Observable<Object> {
  //   return this.http.post(`${this.baseUrl}` + `/signup`, Student);
  // }
  // public forgotPassword(Student: Object): Observable<Object> {
  //    return this.http.post(`${this.baseUrl}` + `/forgot-password`, Student);
  // }

  // public resetPassword(Student: Object): Observable<Object> {
  //   return this.http.post(`${this.baseUrl}` + `/reset-password`, Student);
  // }
 
 
}