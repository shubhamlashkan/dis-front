import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MydutiesRoutingModule} from './myduties-routing.module'
import { LibraryModule } from './library/library.module';
import { MydutiesNavigationComponent } from './myduties-navigation/myduties-navigation.component';
import { TimetableModule } from './timetable/timetable.module';


@NgModule({
  imports: [
    CommonModule,
    LibraryModule,
    TimetableModule
    
  ],
  declarations: [MydutiesNavigationComponent]
})
export class MydutiesModule { }
