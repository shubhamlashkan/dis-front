import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseSchemeModuleComponent } from './course-scheme-module.component';

describe('CourseSchemeModuleComponent', () => {
  let component: CourseSchemeModuleComponent;
  let fixture: ComponentFixture<CourseSchemeModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseSchemeModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseSchemeModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
