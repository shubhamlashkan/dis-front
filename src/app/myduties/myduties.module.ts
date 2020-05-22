import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MydutiesRoutingModule} from './myduties-routing.module'
import { LibraryModule } from './library/library.module';
import { MydutiesNavigationComponent } from './myduties-navigation/myduties-navigation.component';
import { TimetableModule } from './timetable/timetable.module';
import { MydutiesComponent } from './myduties/myduties.component';
import { MytaskComponent } from './mytask/mytask.component';


@NgModule({
  imports: [
    CommonModule,
    LibraryModule,
    TimetableModule,
    MydutiesRoutingModule
    
  ],
  declarations: [MydutiesNavigationComponent, MydutiesComponent, MytaskComponent]
})
export class MydutiesModule { }
