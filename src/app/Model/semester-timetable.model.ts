import { Time } from '@angular/common';

export class SemesterTimetable {
  session: String;
  year: String;
  semester: String;
  subjectCode: String;
  from: Time;
  to: Time;
  day: String;
  type: String;
  faculty1: String;
  faculty2: String;
  faculty3: String;
  ta: String;
  batch: String;
  location: String;
  withEffectFrom: Date;
  pdfId: String;
  courseId: String;
  createdBy: String;
  createdDate: Date;
  id: Number;
  modifiedBy: String;
  modifiedDate: String;
}

