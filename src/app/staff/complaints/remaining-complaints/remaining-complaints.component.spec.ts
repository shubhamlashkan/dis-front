import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RemainingComplaintsComponent } from './remaining-complaints.component';

describe('RemainingComplaintsComponent', () => {
  let component: RemainingComplaintsComponent;
  let fixture: ComponentFixture<RemainingComplaintsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RemainingComplaintsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemainingComplaintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
