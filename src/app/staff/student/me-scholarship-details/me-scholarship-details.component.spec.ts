import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MeScholarshipDetailsComponent } from './me-scholarship-details.component';

describe('MeScholarshipDetailsComponent', () => {
  let component: MeScholarshipDetailsComponent;
  let fixture: ComponentFixture<MeScholarshipDetailsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MeScholarshipDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeScholarshipDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
