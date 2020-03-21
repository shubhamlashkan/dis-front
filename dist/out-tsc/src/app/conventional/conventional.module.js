import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConventionalRoutingModule } from './conventional-routing.module';
import { TimetableComponent } from './timetable/timetable.component';
import { ProfileComponent } from './profile/profile.component';
import { ConventionalOutletComponent } from './conventional-outlet/conventional-outlet.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material';
var ConventionalModule = /** @class */ (function () {
    function ConventionalModule() {
    }
    ConventionalModule = tslib_1.__decorate([
        NgModule({
            imports: [
                ConventionalRoutingModule,
                CommonModule,
                FormsModule,
                ReactiveFormsModule,
                MatProgressSpinnerModule
            ],
            declarations: [TimetableComponent, ProfileComponent, ConventionalOutletComponent],
            exports: [TimetableComponent, ProfileComponent]
        })
    ], ConventionalModule);
    return ConventionalModule;
}());
export { ConventionalModule };
//# sourceMappingURL=conventional.module.js.map