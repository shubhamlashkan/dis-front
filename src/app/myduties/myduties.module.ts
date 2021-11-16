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

import { SchemeListComponent } from './course-scheme-module/scheme-list/scheme-list.component';
import { ExternalListComponent } from './course-scheme-module/external-list/external-list.component';

import {MatTabsModule} from '@angular/material/tabs';


@NgModule({
  imports: [
    CommonModule,
    LibraryModule,
    TimetableModule,
    MydutiesRoutingModule,
    FormsModule,
    MatTabsModule
  ],
  declarations: [MydutiesNavigationComponent, MydutiesComponent, MytaskComponent, ProjectguideallotmentComponent, MescholarshipComponent, IndustryvisitComponent, ExpertlectureComponent, CourseSchemeModuleComponent, SchemeListComponent, ExternalListComponent]
})
export class MydutiesModule { }
