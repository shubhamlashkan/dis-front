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
  monthAttendance:any[];
  constructor(private facultyService:FacultyService,private jsonToCSV:JsonToCSVService) { }
                                                
  ngOnInit() {
    
    this.facultyService.getAllCourses().subscribe(data=>{
      this.coursename=data;
      this.facultyService.getAllStudentAttendance(this.coursename[0].shortname).subscribe(data=>{
        this.courseId=this.coursename[0].shortname
        this.attendance=data;
          this.month="01";
          this.getAttendanceByMonth();
          this.facultyService.getStudentOfCourse(this.coursename[0].shortname).subscribe(data=>{
            this.noOfStudents=data.length;
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
    this.facultyService.getStudentAttendanceByDate(this.courseId).subscribe(data=>{
      this.attendanceByDate=data;
      this.filteredAttendance=[];
      this.monthAttendance=[]
      this.date=[]
      this.slots=[]
      console.log(this.attendanceByDate.length)
      for(var i=0;i<this.attendanceByDate.length;i++){
        
      if(this.attendanceByDate[i].date_attendance.substring(5,7)== this.month){
        // console.log(this.attendanceByDate[i].date_attendance.substring(5,7)+" "+this.month)
        if(!this.date.includes(this.attendanceByDate[i].date_attendance)){
          this.date.push(this.attendanceByDate[i].date_attendance);
        } 
        this.monthAttendance.push(this.attendanceByDate[i]);
      }
    }
    var counter=0;
    if(!(this.monthAttendance.length==0)){
      for(var i=0;i<this.monthAttendance.length/this.date.length;i++){
        this.slots[i]=[];
        if(!(this.filteredAttendance.includes(this.monthAttendance[counter]))){
          this.filteredAttendance.push(this.monthAttendance[counter]);
        }
        
        for(var j=0;j<this.date.length;j++){
          this.slots[i].push(this.monthAttendance[counter])
          counter++;
         
        }
        
      }
    }
   
    })
    
    
  }     
  getCSV(tableId){
    let element = document.getElementById(tableId);
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
    ws['!cols'].push({ width: 20 },{ width: 20 },{ width: 30 },{ width: 30 },{ width: 30 },{ width: 30 })
    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
 
    /* save to file */  
    if(tableId=='month'){
      XLSX.writeFile(wb, `${this.courseId}_${this.month}_${tableId}.xlsx`);
      
    }else{
      XLSX.writeFile(wb, `${this.courseId}_${tableId}.xlsx`);
    }
  }                     
}
