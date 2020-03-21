import * as tslib_1 from "tslib";
import { Component, ViewChild, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
var ResourceRequestComponent = /** @class */ (function () {
    function ResourceRequestComponent(http) {
        this.http = http;
        this.displayForm = false;
        this.defaultCategory = 'stat';
        this.defaultPriority = 'High';
        this.requestData = {
            category: '',
            details: '',
            priority: '',
            deadlineDate: ''
        };
        this.submitted = false;
    }
    ResourceRequestComponent.prototype.ngOnInit = function () {
    };
    ResourceRequestComponent.prototype.onButtonClick = function () {
        this.displayForm = !this.displayForm;
    };
    //onSubmit(form:NgForm){
    // console.log(form);
    //}
    ResourceRequestComponent.prototype.onSubmit = function () {
        //console.log(this.addRequest);
        this.submitted = true;
        this.requestData.category = this.addRequest.value.resourceData.category;
        this.requestData.details = this.addRequest.value.resourceData.details;
        this.requestData.priority = this.addRequest.value.resourceData.priority;
        this.requestData.deadlineDate = this.addRequest.value.resourceData.deadlineDate;
    };
    tslib_1.__decorate([
        ViewChild('f'),
        tslib_1.__metadata("design:type", NgForm)
    ], ResourceRequestComponent.prototype, "addRequest", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], ResourceRequestComponent.prototype, "getResourceCategoryData", void 0);
    ResourceRequestComponent = tslib_1.__decorate([
        Component({
            selector: 'app-resource-request',
            templateUrl: './resource-request.component.html',
            styleUrls: ['./resource-request.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], ResourceRequestComponent);
    return ResourceRequestComponent;
}());
export { ResourceRequestComponent };
//# sourceMappingURL=resource-request.component.js.map