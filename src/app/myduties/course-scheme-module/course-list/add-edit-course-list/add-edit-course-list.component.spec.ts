import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditCourseListComponent } from './add-edit-course-list.component';

describe('AddEditCourseListComponent', () => {
  let component: AddEditCourseListComponent;
  let fixture: ComponentFixture<AddEditCourseListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditCourseListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditCourseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
