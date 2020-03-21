import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { StudentSignUp } from '../../Model/student-sign-up.model';
import { StudentSignUpService } from '../../API_Service/student-sign-up.service';
var SignUpComponent = /** @class */ (function () {
    function SignUpComponent(studentSignUpService) {
        this.studentSignUpService = studentSignUpService;
        this.studentSignUp = new StudentSignUp();
        this.submitted = false;
    }
    SignUpComponent.prototype.ngOnInit = function () {
    };
    SignUpComponent.prototype.newStudentSignUp = function () {
        this.submitted = false;
        this.studentSignUp = new StudentSignUp();
    };
    SignUpComponent.prototype.save = function () {
        this.studentSignUpService.createStudentSignUp(this.studentSignUp)
            .subscribe(function (data) { return console.log(data); }, function (error) { return console.log(error); });
        this.studentSignUp = new StudentSignUp();
    };
    SignUpComponent.prototype.onSubmit = function () {
        this.submitted = true;
        this.save();
    };
    SignUpComponent = tslib_1.__decorate([
        Component({
            selector: 'app-sign-up',
            templateUrl: './sign-up.component.html',
            styleUrls: ['./sign-up.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [StudentSignUpService])
    ], SignUpComponent);
    return SignUpComponent;
}());
export { SignUpComponent };
//# sourceMappingURL=sign-up.component.js.map