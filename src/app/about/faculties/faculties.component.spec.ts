import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FacultiesComponent } from './faculties.component';

describe('FacultiesComponent', () => {
  let component: FacultiesComponent;
  let fixture: ComponentFixture<FacultiesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FacultiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
