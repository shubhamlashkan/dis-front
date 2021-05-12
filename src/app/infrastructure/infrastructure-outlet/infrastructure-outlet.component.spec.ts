import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfrastructureOutletComponent } from './infrastructure-outlet.component';

describe('InfrastructureOutletComponent', () => {
  let component: InfrastructureOutletComponent;
  let fixture: ComponentFixture<InfrastructureOutletComponent>;

  beforeEach(async(() => {
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
