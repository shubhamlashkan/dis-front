import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeScholarshipDetailsComponent } from './me-scholarship-details.component';

describe('MeScholarshipDetailsComponent', () => {
  let component: MeScholarshipDetailsComponent;
  let fixture: ComponentFixture<MeScholarshipDetailsComponent>;

  beforeEach(async(() => {
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
