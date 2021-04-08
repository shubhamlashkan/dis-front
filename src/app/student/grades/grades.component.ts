import { SemesterSubjectsService } from './../../API_Service/SemesterSubjectsService';
import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/API_Service/student.service';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/authentication';

@Component({
  selector: 'app-grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.scss']
})
export class GradesComponent implements OnInit {

  subjects: any=[];
  overviewReport:any[];
  courseId:any;
  subjectReport:any[];
  constructor(private semSubjects: SemesterSubjectsService,private studentService: StudentService,private router: Router,private session: TokenStorageService) { 
    
  }

  ngOnInit() {
    this.subjects = this.semSubjects.getSubjectList();
    console.log(this.session.getMoodleUserId());
    this.studentService.getStudentOverviewReport().subscribe(data=>{
      this.overviewReport=data;
     
    })
    this.studentService.getAllCourses().subscribe(data=>{
      this.subjects=data;
      this.studentService.getStudentSubjectReport(this.subjects[0].courseId).subscribe(data=>{
        this.subjectReport=data;
        this.courseId=this.subjects[0].courseId;
      
      })
    })
   
  }
  getSubjectReport(){
    this.studentService.getStudentSubjectReport(this.courseId).subscribe(data=>{
      this.subjectReport=data;
    })
  }
 
}
