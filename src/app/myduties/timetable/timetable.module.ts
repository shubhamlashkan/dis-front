import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimetableComponent } from './timetable/timetable.component';
import { TimetableRoutingModule } from './timetable-routing.module';
import { SemTimeTableComponent } from './sem-time-table/sem-time-table.component';

@NgModule({
  imports: [
    CommonModule,
    TimetableRoutingModule
  ],
  declarations: [TimetableComponent, SemTimeTableComponent],
  exports : [TimetableComponent]
})
export class TimetableModule { }
