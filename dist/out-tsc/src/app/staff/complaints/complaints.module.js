import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComplaintsRoutingModule } from './complaints-routing.module';
import { AddcomplaintComponent } from './addcomplaint/addcomplaint.component';
import { ComplaintsComponent } from './complaints/complaints.component';
import { RemainingComplaintsComponent } from './remaining-complaints/remaining-complaints.component';
import { ResolvedComplaintsComponent } from './resolved-complaints/resolved-complaints.component';
import { SideNavigationComponent } from './side-navigation/side-navigation.component';
import { TotalComplaintsComponent } from './total-complaints/total-complaints.component';
var ComplaintsModule = /** @class */ (function () {
    function ComplaintsModule() {
    }
    ComplaintsModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                ComplaintsRoutingModule
            ],
            declarations: [
                AddcomplaintComponent,
                ComplaintsComponent,
                RemainingComplaintsComponent,
                ResolvedComplaintsComponent,
                SideNavigationComponent,
                TotalComplaintsComponent
            ]
        })
    ], ComplaintsModule);
    return ComplaintsModule;
}());
export { ComplaintsModule };
//# sourceMappingURL=complaints.module.js.map