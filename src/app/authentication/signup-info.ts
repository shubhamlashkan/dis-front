export class SignUpInfo {
  username: string;
  email: string;
  dob: string;
  password: string;
  mobileNo: string;

  constructor(username: string,dob: string, email: string, password: string, mobileNo: string, ) {
      this.username = username;
      this.dob = dob;
      this.email = email;
      this.password = password;
      this.mobileNo = mobileNo;
  }
}
