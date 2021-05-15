import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { apiSetting } from '../urls/apisetting';

@Injectable({
  providedIn: 'root'
})
export class SemesterSubjectsService {

  private baseUrl = apiSetting.apiAcademics+'/student';

  subjects: Observable<any>;
  subjectsArray: any[];

  constructor(public http: HttpClient) {
    this.subjects = this.http.get(`${this.baseUrl}/subjectList`);
  }

  getSubjectList() {
    let sub: any = [];
    this.subjects.subscribe(data => {
      this.subjectsArray = data;
      for (let i = 0; i < this.subjectsArray.length; i++) {
        sub.push({ subCode: this.subjectsArray[i].subjectCode, subName: this.subjectsArray[i].subjectName});
      }
    });
    return sub;
  }

  getSyllabusPdf() {
    let syllabus: any = [];
    this.subjects.subscribe(data => {
      this.subjectsArray = data;
      for (let i = 0; i < this.subjectsArray.length; i++) {
        // tslint:disable-next-line:max-line-length
        syllabus.push({ subCode: this.subjectsArray[i].subjectCode, subName: this.subjectsArray[i].subjectName, subSyllabus: this.subjectsArray[i].syllabusPdf });
      }
    });
    return syllabus;
  }
}
