import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FacultyComponent } from './faculty.component';

describe('FacultyComponent', () => {
  let component: FacultyComponent;
  let fixture: ComponentFixture<FacultyComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FacultyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
