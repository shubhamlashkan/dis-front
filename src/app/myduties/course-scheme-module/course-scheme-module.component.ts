import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SchemeListComponent} from './scheme-list/scheme-list.component';

@Component({
  selector: 'app-course-scheme-module',
  templateUrl: './course-scheme-module.component.html',
  styleUrls: ['./course-scheme-module.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class CourseSchemeModuleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
