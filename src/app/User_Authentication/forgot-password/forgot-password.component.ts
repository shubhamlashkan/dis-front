import { Component, OnInit } from '@angular/core';
import { EmailConfig } from '../../Model/email-config.model';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  emailConfig: EmailConfig = new EmailConfig();
  submitted = false;

  constructor() { }

  ngOnInit() {
  }

  newEmailConfig(): void {
    this.submitted = false;
    this.emailConfig = new EmailConfig();
  }
}
