import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { InfrastructureOutletComponent } from './infrastructure-outlet.component';

describe('InfrastructureOutletComponent', () => {
  let component: InfrastructureOutletComponent;
  let fixture: ComponentFixture<InfrastructureOutletComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InfrastructureOutletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfrastructureOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
