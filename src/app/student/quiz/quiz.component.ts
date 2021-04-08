import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/API_Service/student.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  courses:any[];
  constructor(private studentService: StudentService) { }
  quiz:any[];
  selectCourse:any;
  ngOnInit() {
    this.studentService.getAllCourses().subscribe(data=>{
      this.courses=data;
      this.studentService.getQuiz(this.courses[0].courseId).subscribe(data=>{
        this.quiz=data;
      })
    })
    
  }
  getQuiz(courseId:any){
    courseId=this.courses[courseId].courseId;
    this.studentService.getQuiz(courseId).subscribe(data=>{
      this.quiz=data;
    })
  }
}
