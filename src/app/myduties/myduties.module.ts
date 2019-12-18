import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MydutiesRoutingModule} from './myduties-routing.module'
import { LibraryModule } from './library/library.module';
import { MydutiesNavigationComponent } from './myduties-navigation/myduties-navigation.component';


@NgModule({
  imports: [
    CommonModule,
    LibraryModule
    
  ],
  declarations: [MydutiesNavigationComponent]
})
export class MydutiesModule { }
