import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { StudentRollListComponent } from './student-roll-list.component';

describe('StudentRollListComponent', () => {
  let component: StudentRollListComponent;
  let fixture: ComponentFixture<StudentRollListComponent>;

  beforeEach(waitForAsync(() => {
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
