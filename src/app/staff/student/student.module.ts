import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentComponent } from './student/student.component';
import { StudentRollListComponent } from './student-roll-list/student-roll-list.component';
import { StudentFourthYearProjectComponent } from './student-fourth-year-project/student-fourth-year-project.component';
import { MeProjectDetailsComponent } from './me-project-details/me-project-details.component';
import { MeScholarshipDetailsComponent } from './me-scholarship-details/me-scholarship-details.component';

@NgModule({
  imports: [
    CommonModule,
    StudentRoutingModule
  ],
  declarations: [StudentComponent, StudentRollListComponent, StudentFourthYearProjectComponent, MeProjectDetailsComponent, MeScholarshipDetailsComponent]
})
export class StudentModule { }
