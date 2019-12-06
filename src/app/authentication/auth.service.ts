import { AuthInterceptor } from './auth-interceptor';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

import { JwtResponse } from './jwt-response';
import { AuthLoginInfo } from './login-info';
import { SignUpInfo } from './signup-info';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({providedIn: 'root'})
export class AuthService {

  private loginUrl = 'http://localhost:8080/dis/signin';
  private signupUrl = 'http://localhost:8080/dis/signup';
  private validateUrl = 'http://localhost:8080/dis/getUserType';
  private forgetPasswordUrl = 'http://localhost:8080/dis/forgotPassword';
  private activateAccountUrl = 'http://localhost:8080/dis/preActivation';
  private resetUrl = 'http://localhost:8080/dis/processResetPassword';

  constructor(private http: HttpClient, private interceptor: AuthInterceptor, private route: ActivatedRoute) {
  }

  attemptAuth(credentials: AuthLoginInfo): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(this.loginUrl, credentials, httpOptions);
  }

  signUp(info: SignUpInfo): Observable<HttpResponse<string>> {
    return this.http.post<string>(this.signupUrl, info,{ observe: 'response' });
  }

  validateUser(): Observable<string> {
    return this.http.get(this.validateUrl, { responseType: 'text' });
  }

  forgetPassword(email: string): Observable<HttpResponse<string>> {
    // const indata = {'email': email};
    return this.http.post<string>(this.forgetPasswordUrl + '?email=' + email, null,{ observe: 'response' });
  }

  activateAccount(email: string): Observable<HttpResponse<string>> {
    // const indata = {'email': email};
    return this.http.post<string>(this.activateAccountUrl + '?email=' + email, null ,{ observe: 'response' });
  }

  // returns full http response
  resetPassword(newPassword): Observable<HttpResponse<string>> {
    const reset_token = this.route.snapshot.queryParams['resetToken'];
    console.log(reset_token);
    const info = {resetToken: reset_token, password: newPassword};
    console.log(info);
    // setting observe value as response to send full http response
    return this.http.post<string>(this.resetUrl, info, { observe: 'response' });
  }
}
