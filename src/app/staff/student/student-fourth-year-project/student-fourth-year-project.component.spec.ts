import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentFourthYearProjectComponent } from './student-fourth-year-project.component';

describe('StudentFourthYearProjectComponent', () => {
  let component: StudentFourthYearProjectComponent;
  let fixture: ComponentFixture<StudentFourthYearProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentFourthYearProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentFourthYearProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
