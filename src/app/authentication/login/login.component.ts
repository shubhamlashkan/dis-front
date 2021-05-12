import { ToastrManager } from 'ng6-toastr-notifications';
import { Component, OnInit } from '@angular/core';

import { AuthService } from '../auth.service';
import { TokenStorageService } from '../token-storage.service';
import { AuthLoginInfo } from '../login-info';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  loading : boolean;
  private loginInfo: AuthLoginInfo;
  userID:string;
  moodleUserId: any;
  constructor(private authService: AuthService, private tokenStorage: TokenStorageService, private router: Router, public toastr: ToastrManager) { }

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getAuthorities();
      this.getValidated();
    }
   
  }
  onSubmit() {
    //console.log(this.form);
    this.loading = true;
    this.loginInfo = new AuthLoginInfo(
      this.form.username,
      this.form.password);
      // console.log(this.form.password)
     // console.log('Before '+this.isUserLoggedIn());
    this.authService.attemptAuth(this.loginInfo).subscribe(
      data => {
        this.loading = false;
        console.log(data);
        sessionStorage.setItem('authenticaterUser',this.form.username);
        this.tokenStorage.saveUsername(data.username);
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveAuthorities(data.authorities);
        console.log(data);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getAuthorities();
        this.getValidated();
        this.authService.getMyUserId().subscribe(response => {
          this.userID= response.body['message'];
          // console.log(response.body['message']);
          console.log(this.userID);
          console.log(this.userID);
          sessionStorage.setItem('userId',this.userID);
        })
        
       // sessionStorage.setItem('userId',this.userID);
       // console.log('After '+this.isUserLoggedIn());
      },
      error => {
        if (error.status === 404 || error.status === 400) {
          this.loading=false;
        // this.router.navigate(['/forgot-password']);
        this.toastr.errorToastr(error.error['message'], 'Alert!');
        //console.log(error);
        this.isLoginFailed = true;
      }
      });
  }

  getValidated() {
    this.authService.validateUser().subscribe(
      tempData => {
        this.router.navigateByUrl('/' + tempData);
       console.log(tempData);
        sessionStorage.setItem('userType',tempData);
      }
    );
  }

  isUserLoggedIn()
  {
    let user = sessionStorage.getItem('authenticaterUser');
    console.log(user);
    return !(user===null);
  }
  

}
