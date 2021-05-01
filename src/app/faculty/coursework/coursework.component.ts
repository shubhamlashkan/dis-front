import { Component, OnInit } from '@angular/core';
import { FacultyService } from 'src/app/API_Service/faculty.service';
import * as XLSX from 'xlsx';
@Component({
  selector: 'app-coursework',
  templateUrl: './coursework.component.html',
  styleUrls: ['./coursework.component.scss']
})
export class CourseworkComponent implements OnInit {
  per:any[];
  coursename:any;
  courseId:any;
  gradeItem:any[];
  userReport:any[];
  graderReport:any[];
  graderReportGradeItems:any[];
  show:boolean;
  constructor(private facultyService:FacultyService) { }
  
  ngOnInit() {
    this.per=[];
    this.show=false;
    this.facultyService.getAllCourses().subscribe(data=>{
      this.coursename=data;
      this.courseId=this.coursename[0].id
      
      this.facultyService.getGradeItems(this.coursename[0].id).subscribe(data=>{
        this.gradeItem=[];
        for(var i=0;i<data.length;i++){
            if(!(data[i].itemName=="course total")){
              this.gradeItem.push(data[i]);
              this.per.push(0);
            } 
        }
       
        
      })
    })
    
  }
  
  onSubmit(){
    this.show=false;
    this.per=[];
    this.facultyService.getGradeItems(this.courseId).subscribe(data=>{
      this.gradeItem=[]
      for(var i=0;i<data.length;i++){
        if(!(data[i].itemName=="course total")){
          this.gradeItem.push(data[i]);
          this.per.push(0);
        }
    }
    })
  }
  getCW(){
    var sum=0;
    const arrSum = arr => arr.reduce((a,b) => a + b, 0)
    sum=arrSum(this.per);
    if(sum<100){
      alert("sum is less than 100")
      return;
    }else if(sum>100){
      alert("sum is greater than 100")
      return;
    }else{
   this.show=true;
    this.facultyService.getGraderReport(this.courseId,0).subscribe(data=>{
     
        this.graderReport=data;
        this.graderReportGradeItems=this.graderReport[0];
      
      for(let i in data){
        var temp=0;
        for(let j =0 ;j<data[i].length-1;j++){
          temp=temp+(this.per[j]*data[i][j+1].percentage)/100;
          
        }
        this.graderReport[i].CW=temp;
        console.log(temp);

      }
      
    })
   }
  }
  getCSV(tableId){
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    let element = document.getElementById(tableId);
      const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
   
      /* generate workbook and add the worksheet */
     
      XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
   
      /* save to file */  
     
    
    XLSX.writeFile(wb, `${tableId}.xlsx`)
  }
} 
