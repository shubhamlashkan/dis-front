import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MydutiesNavigationComponent } from './myduties-navigation.component';

describe('MydutiesNavigationComponent', () => {
  let component: MydutiesNavigationComponent;
  let fixture: ComponentFixture<MydutiesNavigationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MydutiesNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MydutiesNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
