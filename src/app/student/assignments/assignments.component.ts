import { Component, OnInit } from '@angular/core';
import { SemesterSubjectsService } from './../../API_Service/SemesterSubjectsService';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.scss']
})
export class AssignmentsComponent implements OnInit {

  subjects: any;

  constructor(private semSubjects: SemesterSubjectsService) { }

  ngOnInit() {
    this.subjects = this.semSubjects.getSubjectList();
  }

}
