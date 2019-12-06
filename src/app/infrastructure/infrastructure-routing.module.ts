import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfrastructureComponent } from './infrastructure/infrastructure.component';
import { CentralInventoryComponent } from './central-inventory/central-inventory.component';
import { InfrastructureTimeTableComponent } from './infrastructure-time-table/infrastructure-time-table.component';

const routes: Routes = [
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

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfrastructureRoutingModule { }
