import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { EmailConfig } from '../../Model/email-config.model';
var ForgotPasswordComponent = /** @class */ (function () {
    function ForgotPasswordComponent() {
        this.emailConfig = new EmailConfig();
        this.submitted = false;
    }
    ForgotPasswordComponent.prototype.ngOnInit = function () {
    };
    ForgotPasswordComponent.prototype.newEmailConfig = function () {
        this.submitted = false;
        this.emailConfig = new EmailConfig();
    };
    ForgotPasswordComponent = tslib_1.__decorate([
        Component({
            selector: 'app-forgot-password',
            templateUrl: './forgot-password.component.html',
            styleUrls: ['./forgot-password.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());
export { ForgotPasswordComponent };
//# sourceMappingURL=forgot-password.component.js.map