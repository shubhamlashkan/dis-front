import { Component, OnInit } from '@angular/core';
import { data } from 'jquery';
import { JsonToCSVService } from 'src/app/API_Service/json-to-csv.service';
import { TokenStorageService } from 'src/app/authentication';
import {FacultyService} from './../../API_Service/faculty.service';
import * as XLSX from 'xlsx';
@Component({
  selector: 'app-class-attendance',
  templateUrl: './class-attendance.component.html',
  styleUrls: ['./class-attendance.component.scss']
})
export class ClassAttendanceComponent implements OnInit {
  attendance:any[];   
  coursecode:any[];
  coursename:any[];
  courseId:any;
  attendanceByDate:any[];
  month:any;
  filteredAttendance:any[]=[];
  date:any[]=[];
  slots:any[][];
  noOfStudents:any;
  constructor(private facultyService:FacultyService,private jsonToCSV:JsonToCSVService) { }
                                                
  ngOnInit() {
    
    this.facultyService.getAllCourses().subscribe(data=>{
      this.coursename=data;
      this.facultyService.getAllStudentAttendance(this.coursename[0].shortname).subscribe(data=>{
        this.courseId=this.coursename[0].shortname
        this.attendance=data;
        console.log(this.attendance);
        this.facultyService.getStudentAttendanceByDate(this.coursename[0].shortname).subscribe(data=>{
          this.attendanceByDate=data;
          this.month="01";
          this.getAttendanceByMonth();
          this.facultyService.getStudentOfCourse(this.coursename[0].shortname).subscribe(data=>{
              this.noOfStudents=data.length;
          })
        })
      }) 
      
    })
    
                  
  }
  changeMonth(){
    this.month="01";
  }
  getAttendance(){
    this.facultyService.getAllStudentAttendance(this.courseId).subscribe(data=>{
      this.attendance=data;
    }) 

  }  
  getAttendanceByMonth(){
    this.filteredAttendance=[];
    this.date=[]
    this.slots=[]
    for(var i=0;i<this.attendanceByDate.length;i++){
      if(this.attendanceByDate[i].date_attendance.substring(5,7)== this.month){
        if(!this.date.includes(this.attendanceByDate[i].date_attendance)){
          this.date.push(this.attendanceByDate[i].date_attendance);
          
        }
        if(this.attendanceByDate[i].coursecode==this.courseId)
         {
           this.filteredAttendance.push(this.attendanceByDate[i])
         }
      }
    }
    
  }     
  getCSV(tableId){
    let element = document.getElementById(tableId);
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
 
    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
 
    /* save to file */  
    XLSX.writeFile(wb, `${tableId}.xlsx`);
  }                     
}
