import { PasswordValidation } from './../sign-up/password-validation';
import { Router } from '@angular/router';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { ToastrManager } from 'ng6-toastr-notifications';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  newPasswd: string;
  resetForm: FormGroup;
  submitted = false;

  constructor(private authService: AuthService, private router: Router, public toastr: ToastrManager, private formBuider: FormBuilder) { }

  ngOnInit() {
    this.resetForm = this.formBuider.group({
    password: ['', [Validators.required, Validators.minLength(6), Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')]],
    confirm_password: ['', [Validators.required]]
  },{
    validator: PasswordValidation.MatchPassword 
  });
}

get formCtl() {
  return this.resetForm.controls;
}

  reset() {
    this.authService.resetPassword(this.newPasswd).subscribe(

      response => {
        if(response.ok) {
          this.router.navigate(['/']);
          this.toastr.successToastr(response.body['message'], 'Success!');
         
        }
      },
 
      error => {
        if(error.status === 400) {
          this.router.navigate(['/forgot-password']);
          this.toastr.errorToastr(error.error['message'], 'Oops!');
          
        }
      }
    );
    this.submitted = true;
    if (this.resetForm.invalid) {
      return;
  }
  }
}
