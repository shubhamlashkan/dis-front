import { SemesterSubjectsService } from './../../API_Service/SemesterSubjectsService';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.scss']
})
export class GradesComponent implements OnInit {

  subjects: any;

  constructor(private semSubjects: SemesterSubjectsService) { }

  ngOnInit() {
    this.subjects = this.semSubjects.getSubjectList();
  }

}
