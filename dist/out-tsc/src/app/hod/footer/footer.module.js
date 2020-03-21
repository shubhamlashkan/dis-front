import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterRoutingModule } from './footer-routing.module';
import { GalleryComponent } from './gallery/gallery.component';
var FooterModule = /** @class */ (function () {
    function FooterModule() {
    }
    FooterModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FooterRoutingModule
            ],
            declarations: [GalleryComponent],
            exports: [GalleryComponent]
        })
    ], FooterModule);
    return FooterModule;
}());
export { FooterModule };
//# sourceMappingURL=footer.module.js.map