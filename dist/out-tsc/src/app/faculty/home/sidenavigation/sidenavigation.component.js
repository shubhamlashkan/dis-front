import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { SidenavService } from 'src/app/API_Service/sidenav.service';
var SidenavigationComponent = /** @class */ (function () {
    function SidenavigationComponent(sidenav) {
        this.sidenav = sidenav;
    }
    SidenavigationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sidenav.getSideNavData()
            .subscribe(function (data) {
            console.log(data);
            _this.userData = data;
            _this.userName = _this.userData[0];
            _this.usertime = _this.userData[1],
                _this.userId = _this.userData[2];
        });
    };
    SidenavigationComponent = tslib_1.__decorate([
        Component({
            selector: 'app-sidenavigation',
            templateUrl: './sidenavigation.component.html',
            styleUrls: ['./sidenavigation.component.scss'],
            providers: [SidenavService]
        }),
        tslib_1.__metadata("design:paramtypes", [SidenavService])
    ], SidenavigationComponent);
    return SidenavigationComponent;
}());
export { SidenavigationComponent };
//# sourceMappingURL=sidenavigation.component.js.map