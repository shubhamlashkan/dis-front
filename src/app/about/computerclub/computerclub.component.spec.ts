import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ComputerclubComponent } from './computerclub.component';

describe('ComputerclubComponent', () => {
  let component: ComputerclubComponent;
  let fixture: ComponentFixture<ComputerclubComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ComputerclubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComputerclubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
