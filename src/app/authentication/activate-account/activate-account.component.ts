import { Component, OnInit } from '@angular/core';
import { Student } from '../../Model/student.model';
import { StudentService } from '../../API_Service/student.service';
import { AuthService } from '../auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-activate-account',
  templateUrl: './activate-account.component.html',
  styleUrls: ['./activate-account.component.scss']
})
export class ActivateAccountComponent implements OnInit {

  activationForm: FormGroup;
  student: Student = new Student();
  submitted = false;

  // tslint:disable-next-line:max-line-length
  constructor(private router: Router, public toastr: ToastrManager, private studentService: StudentService, private authService: AuthService, private formBuider: FormBuilder) { }

  ngOnInit() {
    this.activationForm = this.formBuider.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  get formCtl() {
    return this.activationForm.controls;
  }

  activateAcc(email: string) {
    this.authService.activateAccount(email).subscribe(
      response => {

        if(response.ok) {
          //this.router.navigate(['/']);
          this.toastr.successToastr(response.body['message'], 'Success!');
          console.log(response);
        }
      },
      // httpErrorResponse handling
      error => {
        if(error.status === 400) {
          //this.router.navigate(['/forgot-password']);
          this.toastr.errorToastr(error.error['message'], 'Oops!');
          console.log(error);
        }
      });
  }

  newStudent(): void {
    this.submitted = false;
    this.student = new Student();
  }


  onSubmit() {
    this.submitted = true;
    if (this.activationForm.invalid) {
      return;
  }
  console.log(this.student.email);
    this.activateAcc(this.student.email);
  }
}
