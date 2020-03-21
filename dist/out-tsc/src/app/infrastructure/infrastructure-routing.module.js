import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { InfrastructureComponent } from './infrastructure/infrastructure.component';
import { CentralInventoryComponent } from './central-inventory/central-inventory.component';
import { InfrastructureTimeTableComponent } from './infrastructure-time-table/infrastructure-time-table.component';
var routes = [
    {
        path: '',
        component: InfrastructureComponent
    },
    {
        path: 'timetable',
        component: InfrastructureTimeTableComponent
    },
    {
        path: 'Cinventory',
        component: CentralInventoryComponent
    },
];
var InfrastructureRoutingModule = /** @class */ (function () {
    function InfrastructureRoutingModule() {
    }
    InfrastructureRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule]
        })
    ], InfrastructureRoutingModule);
    return InfrastructureRoutingModule;
}());
export { InfrastructureRoutingModule };
//# sourceMappingURL=infrastructure-routing.module.js.map