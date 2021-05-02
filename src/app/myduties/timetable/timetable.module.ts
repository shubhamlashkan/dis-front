import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimetableComponent } from './timetable/timetable.component';
import { TimetableRoutingModule } from './timetable-routing.module';
import { SemTimeTableComponent } from './sem-time-table/sem-time-table.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MidtermTimeTableComponent } from './midterm-time-table/midterm-time-table.component';

@NgModule({
  imports: [
    CommonModule,
    TimetableRoutingModule,FormsModule,HttpClientModule
  ],
  declarations: [TimetableComponent, SemTimeTableComponent, MidtermTimeTableComponent],
  exports : [TimetableComponent]
})
export class TimetableModule { }
