import * as tslib_1 from "tslib";
import { EmployeeService } from './../employee.service';
import { Component } from '@angular/core';
var StaffComponent = /** @class */ (function () {
    function StaffComponent(employeeHandler) {
        this.employeeHandler = employeeHandler;
    }
    StaffComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.staffList = this.employeeHandler.getStaffDetails().subscribe(function (data) {
            _this.staffMembers = data;
            console.log(_this.staffMembers);
        });
    };
    StaffComponent = tslib_1.__decorate([
        Component({
            selector: 'app-staff',
            templateUrl: './staff.component.html',
            styleUrls: ['./staff.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [EmployeeService])
    ], StaffComponent);
    return StaffComponent;
}());
export { StaffComponent };
//# sourceMappingURL=staff.component.js.map