import { ResolvedComplaintsComponent } from './resolved-complaints/resolved-complaints.component';
import { RemainingComplaintsComponent } from './remaining-complaints/remaining-complaints.component';
import { TotalComplaintsComponent } from './total-complaints/total-complaints.component';
import { ComplaintsComponent } from './complaints/complaints.component';
import { SideNavigationComponent } from './side-navigation/side-navigation.component';
import { StaffComponent } from '../staff/staff.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [

          {
            path : '',
            component : RemainingComplaintsComponent
          },
          {
            path : 'remaining_complaints',
            component : RemainingComplaintsComponent
          },
          {
            path  : 'total_complaints',
            component : TotalComplaintsComponent
          },
          {
            path : 'resolved_complaints',
            component : ResolvedComplaintsComponent
          },
          {
            path : 'side_navigation',
            component : SideNavigationComponent
          }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComplaintsRoutingModule { }
