import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { StudentService } from 'src/app/API_Service/student.service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-quiz-review',
  templateUrl: './quiz-review.component.html',
  styleUrls: ['./quiz-review.component.scss']
})
export class QuizReviewComponent implements OnInit {

  constructor(private route: ActivatedRoute,private studentService:StudentService,private router: Router)  { }
  quizId:any;
  quizDetails:any[];
  currentRoute:any;
  ngOnInit() {
    this.currentRoute=this.router.url;
    this.route.params.subscribe(data=>{
      this.quizId=data.id;
     
      this.studentService.getCompleteQuiz(this.quizId).subscribe(data=>{
        this.quizDetails=data;
        console.log(data);
      })
    });
  }

}
