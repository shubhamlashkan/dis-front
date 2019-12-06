import { ComputerclubComponent } from './computerclub/computerclub.component';
import { StaffComponent } from './staff/staff.component';
import { MagazineComponent } from './magazine/magazine.component';
import { OverviewComponent } from './overview/overview.component';
import { AboutComponent } from './about/about.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FacultiesComponent } from './faculties/faculties.component';
import { LibraryComponent } from './library/library.component';

export const routes: Routes = [
  {
    path: '',
    component: OverviewComponent
  },
  {
    path: 'overview',
    component: OverviewComponent
  },
  {
    path: 'faculties',
    component: FacultiesComponent
  },
  {
    path: 'magazine',
    component: MagazineComponent
  },
  {
    path: 'library',
    component:LibraryComponent
  },
  {
    path: 'staff',
    component: StaffComponent
  },
  {
    path: 'computerclub',
    component: ComputerclubComponent
  },
 

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
