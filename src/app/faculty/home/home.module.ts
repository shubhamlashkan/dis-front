import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { FacultyhomeComponent } from './facultyhome/facultyhome.component';
import { SidenavigationComponent } from './sidenavigation/sidenavigation.component';
import { MiscellaneousModule } from 'src/app/miscellaneous/miscellaneous.module';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    MiscellaneousModule
  ],
  declarations: [HomeComponent, FacultyhomeComponent,SidenavigationComponent],
  exports: [ FacultyhomeComponent]
})
export class HomeModule { }
