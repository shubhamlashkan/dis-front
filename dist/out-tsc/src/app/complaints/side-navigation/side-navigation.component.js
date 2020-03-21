import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ComplaintsService } from 'src/app/API_Service/complaints.service';
import { FormBuilder, Validators } from '@angular/forms';
var SideNavigationComponent = /** @class */ (function () {
    function SideNavigationComponent(complaints, fb) {
        this.complaints = complaints;
        this.fb = fb;
        this.userType = localStorage.getItem('userType');
    }
    SideNavigationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.showConfirmation = false;
        // this.complaints.getLocation()
        // .subscribe(
        //   data => {
        //     this.locations = data;
        //     console.log(this.locations);
        //   }
        // )
        this.complaints.getPermissions()
            .subscribe(function (data) {
            _this.complaintPermissions = data;
            console.log(_this.complaintPermissions);
        });
        this.resourceFormGroup = this.fb.group({
            resource: ['', Validators.required],
            details: ['', Validators.required]
        });
        this.complaints.getRemainingComplaintCount()
            .subscribe(function (data) {
            _this.remaining = data;
            console.log(_this.remaining);
        });
        this.complaints.getResolvedComplaintCount()
            .subscribe(function (data) {
            _this.resolved = data;
            console.log(_this.resolved);
        });
        this.complaints.getTotalComplaintCount()
            .subscribe(function (data) {
            _this.total = data;
            console.log(_this.total);
        });
        this.complaints.getMyComplaintCount()
            .subscribe(function (data) {
            _this.my = data;
            console.log(_this.my);
        });
    };
    SideNavigationComponent.prototype.getResource = function (details) {
        var _this = this;
        console.log(details);
        this.complaints.addFacultyResource(details)
            .subscribe(function (data) {
            console.log(data);
            _this.showConfirmation = true;
            _this.completionMessage = data.message + '!';
        }, function (error) {
            console.log(error);
            _this.showConfirmation = true;
            _this.completionMessage = "Error has Occurred. Try after some time!!";
        });
    };
    SideNavigationComponent.prototype.requestResourceForm = function () {
        this.showConfirmation = false;
    };
    SideNavigationComponent = tslib_1.__decorate([
        Component({
            selector: 'app-side-navigation',
            templateUrl: './side-navigation.component.html',
            styleUrls: ['./side-navigation.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [ComplaintsService, FormBuilder])
    ], SideNavigationComponent);
    return SideNavigationComponent;
}());
export { SideNavigationComponent };
//# sourceMappingURL=side-navigation.component.js.map