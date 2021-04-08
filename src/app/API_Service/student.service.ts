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
    this.moodleUserId=this.sessionStorageService.getMoodleUserId();
    return this.http.get<StudentAttenance[]>(`${this.moodleUrl}`+`/getIndividualStudentAttendance/`);
  }
  public getStudentOverviewReport():Observable<any>{
    this.moodleUserId=this.sessionStorageService.getMoodleUserId();
    return this.http.get<any[]>(`${this.gradeUrl}/getStudentsOverviewReport/${this.moodleUserId}`);
  }
  public getAllCourses():Observable<any>{
    this.moodleUserId=this.sessionStorageService.getMoodleUserId();
    return this.http.get<any[]>(`${this.assnsUrl}/getAllCoursesOfStudent/${this.moodleUserId}`)
  }
  public getStudentSubjectReport(courseId:any):Observable<any>
  
  {
    this.moodleUserId=this.sessionStorageService.getMoodleUserId();
    return this.http.get<any[]>(`${this.assnsUrl}/getStudentSubjectReport/${this.moodleUserId}/${courseId}`);
  }
  public getQuiz(courseId:any):Observable<any>{
    this.moodleUserId=this.sessionStorageService.getMoodleUserId();
    return this.http.get<any[]>(`${this.quizUrl}/getQuizzesOfCourse/${this.moodleUserId}/${courseId}`);
  }
  public getCompleteQuiz(quizId:any)
  :Observable<any>{
    this.moodleUserId=this.sessionStorageService.getMoodleUserId();
    return this.http.get<any[]>(`${this.quizUrl}/getCompleteQuiz/${this.moodleUserId}/${quizId}`);
  }
  public getAssignments(courseId:any):Observable<any>{
    this.moodleUserId=this.sessionStorageService.getMoodleUserId();
    return this.http.get<any[]>(`${this.assnsUrl}/getStudentSubjectReport/${this.moodleUserId}/${courseId}`);
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