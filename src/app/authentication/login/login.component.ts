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

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService, private router: Router, public toastr: ToastrManager) { }

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getAuthorities();
      this.getValidated();
    }
  }

  onSubmit() {
    console.log(this.form);
    this.loading = true;
    this.loginInfo = new AuthLoginInfo(
      this.form.username,
      this.form.password);

    this.authService.attemptAuth(this.loginInfo).subscribe(
      data => {
        this.loading = false;
        console.log(data);
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveAuthorities(data.authorities);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getAuthorities();
        this.getValidated();
      },
      error => {
        if(error.status === 400) {
        //this.router.navigate(['/forgot-password']);
        this.toastr.errorToastr(error.error['message'], 'Alert!');
        console.log(error);
        this.isLoginFailed = true;
      }
      });
  }

  getValidated() {
    this.authService.validateUser().subscribe(
      tempData => {
        this.router.navigateByUrl('/' + tempData);
        console.log(tempData);
        localStorage.setItem('userType',tempData);
      }
    );
  }
}
