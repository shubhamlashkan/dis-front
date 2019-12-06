import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfrastructureRoutingModule } from './infrastructure-routing.module';
import { CentralInventoryComponent } from './central-inventory/central-inventory.component';
import { InfrastructureOutletComponent } from './infrastructure-outlet/infrastructure-outlet.component';
import { InfrastructureComponent } from './infrastructure/infrastructure.component';
import { InfrastructureTimeTableComponent } from './infrastructure-time-table/infrastructure-time-table.component';


@NgModule({
  imports: [
    CommonModule,
    InfrastructureRoutingModule
  ],
  declarations: [CentralInventoryComponent, InfrastructureOutletComponent, InfrastructureComponent, InfrastructureTimeTableComponent],
  exports: [CentralInventoryComponent, InfrastructureOutletComponent, InfrastructureComponent, InfrastructureTimeTableComponent]
})
export class InfrastructureModule { }
