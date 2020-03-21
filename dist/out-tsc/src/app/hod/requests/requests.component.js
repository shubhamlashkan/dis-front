import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
var RequestsComponent = /** @class */ (function () {
    function RequestsComponent() {
        this.newCategoryData = {
            category: '',
            personName: ''
        };
        this.displayForm = false;
        this.submitted = false;
        this.displayAcceptButton = false;
        this.displayDeclineButton = false;
        this.displayRemarkForm = false;
        this.displayAssignRequestForm = false;
    }
    RequestsComponent.prototype.ngOnInit = function () {
    };
    RequestsComponent.prototype.onButtonClick = function () {
        this.displayForm = !this.displayForm;
    };
    RequestsComponent.prototype.onDeclineClick = function () {
        this.displayRemarkForm = true;
        this.displayDeclineButton = true;
        this.displayAcceptButton = true;
    };
    RequestsComponent.prototype.onAcceptClick = function () {
        this.displayAssignRequestForm = true;
        this.displayAcceptButton = true;
        this.displayDeclineButton = true;
    };
    RequestsComponent.prototype.onSubmit = function () {
        //console.log(this.addCategory);
        //console.log("Submitted");
        this.newCategoryData.category = this.addCategory.value.categoryData.category;
        this.newCategoryData.personName = this.addCategory.value.categoryData.personName;
        this.submitted = true;
    };
    tslib_1.__decorate([
        ViewChild('f'),
        tslib_1.__metadata("design:type", NgForm)
    ], RequestsComponent.prototype, "addCategory", void 0);
    RequestsComponent = tslib_1.__decorate([
        Component({
            selector: 'app-requests',
            templateUrl: './requests.component.html',
            styleUrls: ['./requests.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], RequestsComponent);
    return RequestsComponent;
}());
export { RequestsComponent };
//# sourceMappingURL=requests.component.js.map