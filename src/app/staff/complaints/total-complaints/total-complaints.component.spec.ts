import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TotalComplaintsComponent } from './total-complaints.component';

describe('TotalComplaintsComponent', () => {
  let component: TotalComplaintsComponent;
  let fixture: ComponentFixture<TotalComplaintsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalComplaintsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalComplaintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
