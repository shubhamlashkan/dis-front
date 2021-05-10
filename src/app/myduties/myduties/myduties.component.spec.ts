import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MydutiesComponent } from './myduties.component';

describe('MydutiesComponent', () => {
  let component: MydutiesComponent;
  let fixture: ComponentFixture<MydutiesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MydutiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MydutiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
