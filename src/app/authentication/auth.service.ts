import { AuthInterceptor } from './auth-interceptor';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

import { JwtResponse } from './jwt-response';
import { AuthLoginInfo } from './login-info';
import { SignUpInfo } from './signup-info';
import { apiSetting } from '../urls/apisetting';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
}; 

@Injectable({providedIn: 'root'})
export class AuthService {
  private moodleUrl=`${apiSetting.apiMoodle}`;
  private loginUrl = `${apiSetting.apiGateway}/dis/signin`;
  private signupUrl = `${apiSetting.apiGateway}/dis/signup`;
  private validateUrl = `${apiSetting.apiGateway}/dis/getUserType`;
  private forgetPasswordUrl =`${apiSetting.apiGateway}/dis/forgotPassword`;
  private activateAccountUrl = `${apiSetting.apiGateway}/dis/preActivation`;
  private resetUrl = `${apiSetting.apiGateway}/dis/processResetPassword`;
  apiUrl = `${apiSetting.apiUser}/staffProfile`;
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

    return this.http.post<string>(this.forgetPasswordUrl + '?email=' + email, null,{ observe: 'response' });
  }

  activateAccount(email: string): Observable<HttpResponse<string>> {
 
    return this.http.post<string>(this.activateAccountUrl + '?email=' + email, null ,{ observe: 'response' });
  }


  resetPassword(newPassword): Observable<HttpResponse<string>> {
    const reset_token = this.route.snapshot.queryParams['resetToken'];
 
    const info = {resetToken: reset_token, password: newPassword};

    return this.http.post<string>(this.resetUrl, info, { observe: 'response' });
  }

  getMyUserId():Observable<HttpResponse<string>>{
    return this.http.get<string>(`${this.apiUrl}/getMyUserID`,{observe:'response'});
  }
}
