import { Component, OnInit } from '@angular/core';
import { FacultyService } from 'src/app/API_Service/faculty.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.scss']
})
export class AssignmentsComponent implements OnInit {
  courses:any[];
  students:any[];
  assignments:any[];
  selectCourse:any;
  selectStudent:any;
  selectAssign:any;
  assignmentData:[][];
  allAssignments:any[]=[];
  constructor(private facultyService: FacultyService) { }

  ngOnInit() {
    this.facultyService.getAllCourses().subscribe(data=>{
      this.courses=data;
      console.log(data);
      this.selectCourse=this.courses[0].id;
      this.facultyService.getStudentOfCourse(this.courses[0].id).subscribe(data=>{
        this.students=data;
        this.selectStudent=this.students[0].id
        this.facultyService.getAssignmentsOfCourse(this.courses[0].id).subscribe(data=>{
          this.assignments=data;
          this.selectAssign=this.assignments[0].assignId;
          this.facultyService.getAssignments(this.selectCourse,this.selectStudent,this.selectAssign).subscribe(data=>{
            this.assignmentData=data;
            for( var i =0;i<this.assignmentData.length;i++){
              for(var j=0;j<this.assignmentData[i].length;j++){
                this.allAssignments.push(this.assignmentData[i][j]);
              }
            }
          })
        })
      })
      
    })
  
  
  }
  changeStudentsAndAssignments(){
   
    this.facultyService.getStudentOfCourse(this.selectCourse).subscribe(data=>{
      this.students=data;
      this.selectStudent=this.students[0].id
    })
    this.facultyService.getAssignmentsOfCourse(this.selectCourse).subscribe(data=>{
      this.assignments=data;
      this.selectAssign=this.assignments[0].assignId;
    })
  }
  getAssignments(){
    // console.log(this.selectAssign)
    this.facultyService.getAssignments(this.selectCourse,this.selectStudent,this.selectAssign).subscribe(data=>{
      this.assignmentData=data;
      this.allAssignments=[];
      for( var i =0;i<this.assignmentData.length;i++){
        for(var j=0;j<this.assignmentData[i].length;j++){
          this.allAssignments.push(this.assignmentData[i][j]);
        }
      }
    })
  }
  getCSV(){
    let element = document.getElementById('CourseActivityReport');
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
    ws['!cols'].push({ width: 20 },{ width: 20 },{ width: 20 },{ width: 15 },{ width: 25 },{ width: 25 })
    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
  
    /* save to file */  
    XLSX.writeFile(wb, "AssignmentsReport.xlsx");
  }
}
