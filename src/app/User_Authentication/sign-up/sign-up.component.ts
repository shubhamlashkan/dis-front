import { Component, OnInit } from '@angular/core';
import { StudentSignUp } from '../../Model/student-sign-up.model';
import { StudentSignUpService } from '../../API_Service/student-sign-up.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  studentSignUp: StudentSignUp = new StudentSignUp();
  submitted = false;

  constructor(private studentSignUpService: StudentSignUpService) { }

  ngOnInit() {
  }

  newStudentSignUp(): void {
    this.submitted = false;
    this.studentSignUp = new StudentSignUp();
  }

  save() {
    this.studentSignUpService.createStudentSignUp(this.studentSignUp)
      .subscribe(data => console.log(data), error => console.log(error));
    this.studentSignUp = new StudentSignUp();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

}
