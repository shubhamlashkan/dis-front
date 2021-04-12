import { Component, OnInit } from '@angular/core';
import { JsonToCSVService } from 'src/app/API_Service/json-to-csv.service';
import { StudentService } from 'src/app/API_Service/student.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  courses:any[];
  constructor(private studentService: StudentService,private jsonToCSV: JsonToCSVService) { }
  quiz:any[];
  selectCourse:any;
  ngOnInit() {
    this.studentService.getAllCourses().subscribe(data=>{
      this.courses=data;
      this.studentService.getQuiz(this.courses[0].courseId).subscribe(data=>{
        this.quiz=data;
        console.log(data);
      })
    })
    
  }
  getQuiz(courseId:any){
    this.quiz=[];
    if(courseId=='100'){
      for(var i in this.courses){
        this.studentService.getQuiz(this.courses[i].courseId).subscribe(data=>{
         
          this.quiz=this.quiz.concat(data)
         
        })
        
      }
      
    }else{
      courseId=this.courses[courseId].courseId;
    this.studentService.getQuiz(courseId).subscribe(data=>{
      this.quiz=data;
    })
    }
    
  }
  getCSV(){
    this.jsonToCSV.downloadFile(this.quiz,"quiz",["courseCode","courseName","quizName","grade","total"])
  }
}
