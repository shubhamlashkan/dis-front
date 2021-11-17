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
  isValidated:boolean = false;
  loading : boolean;
  constructor(private authService: AuthService, private formBuider: FormBuilder, public toastr: ToastrManager) { }

  ngOnInit() {
    this.isValidated=false;
    this.loading = false;
    this.registerForm = this.formBuider.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      date: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
      phoneNo: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10),Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]], 
      
      confirm_password: ['', [Validators.required]]
    }, {
      validator: PasswordValidation.MatchPassword 
    });

  }

  get formCtl() {
    return this.registerForm.controls;
  }

  onSubmit() {

    if(!this.form.invalid)
    {
      this.isValidated = true;
    }

    if(this.isValidated)
    {
      this.loading = true;
      this.signupInfo = new SignUpInfo(
        this.form.username,
        this.form.dob,
        this.form.email,
        this.form.password,
        this.form.mobileNo);
  
        this.authService.signUp(this.signupInfo).subscribe(
          data => {
            this.loading = false;
            if(data.ok) {
            this.isSignedUp = true;
            this.isSignUpFailed = false;
            this.toastr.successToastr(data.body['message'], 'Success!');
            }
          },
          error => {
            if(error.status === 400 ) {
              this.loading=false;
            this.toastr.errorToastr(error.error['message'], 'Alert!');
           
            this.isSignUpFailed = true;
          }
        }
        );
  
      this.submitted = true;
    }

      }
}
