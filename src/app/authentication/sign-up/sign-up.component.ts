import { ToastrManager } from 'ng6-toastr-notifications';
import { PasswordValidation } from './password-validation';
import { SignUpInfo } from './../signup-info';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  form: any = {};
  signupInfo: SignUpInfo;
  isSignedUp = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService, private formBuider: FormBuilder, public toastr: ToastrManager) { }

  ngOnInit() {
    this.registerForm = this.formBuider.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      date: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')]],
      phoneNo: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      // tslint:disable-next-line:max-line-length
      confirm_password: ['', [Validators.required]]
    }, {
      validator: PasswordValidation.MatchPassword // to check if password matches
    });

  }

  get formCtl() {
    return this.registerForm.controls;
  }

  onSubmit() {

    this.signupInfo = new SignUpInfo(
      this.form.username,
      this.form.dob,
      this.form.email,
      this.form.password,
      this.form.mobileNo);

      this.authService.signUp(this.signupInfo).subscribe(
        data => {
          if(data.ok) {
          console.log(data);
          this.isSignedUp = true;
          this.isSignUpFailed = false;
          this.toastr.successToastr(data.body['message'], 'Success!');
          }
        },
        error => {
          if(error.status === 400) {
          this.toastr.errorToastr(error.error['message'], 'Alert!');
          console.log(error);
          this.isSignUpFailed = true;
        }
      }
      );

    this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
      }
}
