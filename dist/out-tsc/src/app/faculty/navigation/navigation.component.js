import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SidenavService } from 'src/app/API_Service/sidenav.service';
var NavigationComponent = /** @class */ (function () {
    function NavigationComponent(router, sidenav) {
        this.router = router;
        this.sidenav = sidenav;
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
            styleUrls: ['./navigation.component.scss'],
            providers: [SidenavService]
        }),
        tslib_1.__metadata("design:paramtypes", [Router, SidenavService])
    ], NavigationComponent);
    return NavigationComponent;
}());
export { NavigationComponent };
//# sourceMappingURL=navigation.component.js.map