import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
var NavigationComponent = /** @class */ (function () {
    function NavigationComponent(router) {
        this.router = router;
    }
    NavigationComponent.prototype.ngOnInit = function () {
    };
    NavigationComponent.prototype.logout = function () {
        window.sessionStorage.clear();
        this.router.navigate(['/login']);
    };
    NavigationComponent = tslib_1.__decorate([
        Component({
            selector: 'app-navigation',
            templateUrl: './navigation.component.html',
            styleUrls: ['./navigation.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], NavigationComponent);
    return NavigationComponent;
}());
export { NavigationComponent };
//# sourceMappingURL=navigation.component.js.map