import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { InfrastructureTimeTableComponent } from './infrastructure-time-table.component';

describe('InfrastructureTimeTableComponent', () => {
  let component: InfrastructureTimeTableComponent;
  let fixture: ComponentFixture<InfrastructureTimeTableComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InfrastructureTimeTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfrastructureTimeTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
