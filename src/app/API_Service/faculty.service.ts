import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { apiSetting} from '../urls/apisetting';
import { TokenStorageService } from '../authentication';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class FacultyService {
  private attendanceUrl = apiSetting.apiMoodle+'/moodle';
  private gradesUrl=apiSetting.apiMoodle+'/grades'
  private assnsUrl=apiSetting.apiMoodle+'/assns';
  username:any;
  constructor(private http: HttpClient,private sessionStorageService:TokenStorageService) {
    
   }
  getAllStudentAttendance(coursecode):Observable<any>{
    return this.http.get(`${this.attendanceUrl}/getAllStudentTotalAttendance/?coursecode=${coursecode}`);
  }
  getStudentAttendanceByDate(coursecode):Observable<any>{
    return this.http.get(`${this.attendanceUrl}/getAllStudentAttendance/?coursecode=${coursecode}`);
  }
  getAllCourses():Observable<any>{
    this.username=this.sessionStorageService.getUsername();
    return this.http.get<any[]>(`${this.gradesUrl}/getCoursesByGrader/${this.username}`);
  }
  getGradeItems(courseId:any):Observable<any>{
    return this.http.get<any[]>(
      `${this.gradesUrl}/getGradeItemsOfCourse/${courseId}`
    );
  }
  getStudentOfCourse(courseId:any):Observable<any>{
    return this.http.get<any[]>(`${this.gradesUrl}/getStudentsOfCourse/${courseId}`);
  }
  getGraderReport(courseId:any,itemId:any):Observable<any>{
    return this.http.get<any[]>(`${this.gradesUrl}/getGraderReport/${courseId}/${itemId}`);
  }
  getUserReport(courseId:any,userId:any):Observable<any>{
    return this.http.get<any[]>(`${this.gradesUrl}/getUserReport/${courseId}/${userId}`);
  }
  getAssignmentsOfCourse(courseId:any):Observable<any>{
    return this.http.get<any[]>(`${this.assnsUrl}/getAssignmentsOfCourse/${courseId}`);
  }
  getAssignments(courseId:any,userId:any,assignId:any):Observable<any>{
    return this.http.get<any[]>(`${this.assnsUrl}/getTeachersReport/${courseId}/${userId}/${assignId}`);
  }
}
