import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentRollListComponent } from './student-roll-list.component';

describe('StudentRollListComponent', () => {
  let component: StudentRollListComponent;
  let fixture: ComponentFixture<StudentRollListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentRollListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentRollListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
