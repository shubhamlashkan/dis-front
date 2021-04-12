import { Component, OnInit } from '@angular/core';
import { FacultyService } from 'src/app/API_Service/faculty.service';
import { JsonToCSVService } from 'src/app/API_Service/json-to-csv.service';
import { TwoDToOneDService } from 'src/app/API_Service/two-dto-one-d.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.scss']
})
export class GradesComponent implements OnInit {
  courses:any[];
  gradeItem:any[];
  students:any[];
  selectCourse:any;
  selectItem:any;
  selectStudent:any;
  graderReport:any[][];
  userReport:any[][];
  showAll:boolean;
  graderReportGradeItems:any[];

  constructor(private facultyService:FacultyService,private TwoDToOneD: TwoDToOneDService,private jsonToCSV: JsonToCSVService) { }
 
  ngOnInit() {
    this.selectItem="0"
    this.showAll=false;
    this.facultyService.getAllCourses().subscribe(data=>{
      this.courses=data;
      this.facultyService.getGradeItems(this.courses[0].id).subscribe(data=>{
        this.gradeItem=data;
        this.facultyService.getGraderReport(this.courses[0].id,this.gradeItem[0].gradeItemId).subscribe(data=>{
          this.selectCourse=this.courses[0].id;
          this.selectItem=this.gradeItem[0].gradeItemId;
          this.graderReport=data;
          this.graderReportGradeItems=this.graderReport[0];
        })
        
      })
      this.facultyService.getStudentOfCourse(this.courses[0].id).subscribe(data=>{
        this.students=data;
        this.facultyService.getUserReport(this.courses[0].id,this.students[0].id).subscribe(data=>{
          this.userReport=data;
          this.selectStudent=this.students[0].id;
        })
      })
    })
    
  }
  getGraderReport(){
    this.facultyService.getGraderReport(this.selectCourse,this.selectItem).subscribe(data=>{
      this.graderReport=data;
      this.graderReportGradeItems=this.graderReport[0];
      
    })
    if(this.selectItem=="0"){
      this.showAll=true;
      
    }else{
      this.showAll=false;
    
    }
  }
  getUserReport(){
  
    this.facultyService.getUserReport(this.selectCourse,this.selectStudent).subscribe(data=>{
      this.userReport=data;
    })
  }
  changeItems(){
    this.facultyService.getGradeItems(this.selectCourse).subscribe(data=>{
      this.gradeItem=data;
      this.selectItem=this.gradeItem[0].gradeItemId;
    })
  }
  changeStudents(){
    this.facultyService.getStudentOfCourse(this.courses[0].id).subscribe(data=>{
      this.students=data;
      this.selectStudent=this.students[0].id;
    })
  }
  getCSV(tableId){
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    if(tableId=='userTable' && this.selectStudent=='0'){
     
      for(var i=0;i<this.userReport.length;i++){
        let element = document.getElementById(this.userReport[i][0].firstName);
        const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
     
        /* generate workbook and add the worksheet */
        
        XLSX.utils.book_append_sheet(wb, ws,`${this.userReport[i][0].firstName}`);
       
      }
     
      /* save to file */  
      
    }else if(tableId=='userTable'){
      let element = document.getElementById(this.userReport[0][0].firstName);
      const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
   
      /* generate workbook and add the worksheet */
    
      XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
   
      /* save to file */  
     
    }else{
      let element = document.getElementById(tableId);
      const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
   
      /* generate workbook and add the worksheet */
     
      XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
   
      /* save to file */  
     
    }
    XLSX.writeFile(wb, `${tableId}.xlsx`)
  }
}
