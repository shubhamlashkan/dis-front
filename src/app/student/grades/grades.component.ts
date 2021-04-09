import { SemesterSubjectsService } from './../../API_Service/SemesterSubjectsService';
import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/API_Service/student.service';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/authentication';
import * as XLSX from 'xlsx';
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
      console.log(data)
      this.studentService.getStudentUserReport(this.subjects[0].courseId).subscribe(data=>{
        this.subjectReport=data;
        this.courseId=this.subjects[0].courseId;
        
      })
    })
   
  }
  getSubjectReport(){
    // this.studentService.getStudentSubjectReport(this.courseId).subscribe(data=>{
    //   this.subjectReport=data;
    // })
    this.studentService.getStudentUserReport(this.courseId).subscribe(data=>{
      this.subjectReport=data;
      
    })
  }
  getCSV(tableId){
    console.log(tableId);
    let element = document.getElementById(tableId);
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
 
    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
 
    /* save to file */  
    XLSX.writeFile(wb, `${tableId}.xlsx`);
  }
}
