import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MydutiesRoutingModule} from './myduties-routing.module'
import { LibraryModule } from './library/library.module';
import { MydutiesNavigationComponent } from './myduties-navigation/myduties-navigation.component';
import { TimetableModule } from './timetable/timetable.module';
import { MydutiesComponent } from './myduties/myduties.component';
import { MytaskComponent } from './mytask/mytask.component';
import { FormsModule } from '@angular/forms';
import { ProjectguideallotmentComponent } from './projectguideallotment/projectguideallotment.component';
import { MescholarshipComponent } from './mescholarship/mescholarship.component';
import { IndustryvisitComponent } from './industryvisit/industryvisit.component';
import { ExpertlectureComponent } from './expertlecture/expertlecture.component';
import { CourseSchemeModuleComponent } from './course-scheme-module/course-scheme-module.component';

@NgModule({
  imports: [
    CommonModule,
    LibraryModule,
    TimetableModule,
    MydutiesRoutingModule,
    FormsModule
  ],
  declarations: [MydutiesNavigationComponent, MydutiesComponent, MytaskComponent, ProjectguideallotmentComponent, MescholarshipComponent, IndustryvisitComponent, ExpertlectureComponent,CourseSchemeModuleComponent]
})
export class MydutiesModule { }
