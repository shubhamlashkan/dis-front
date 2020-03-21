import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibraryModule } from './library/library.module';
import { MydutiesNavigationComponent } from './myduties-navigation/myduties-navigation.component';
var MydutiesModule = /** @class */ (function () {
    function MydutiesModule() {
    }
    MydutiesModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                LibraryModule
            ],
            declarations: [MydutiesNavigationComponent]
        })
    ], MydutiesModule);
    return MydutiesModule;
}());
export { MydutiesModule };
//# sourceMappingURL=myduties.module.js.map