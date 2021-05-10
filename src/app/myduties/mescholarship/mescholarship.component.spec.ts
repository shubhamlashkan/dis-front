import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MescholarshipComponent } from './mescholarship.component';

describe('MescholarshipComponent', () => {
  let component: MescholarshipComponent;
  let fixture: ComponentFixture<MescholarshipComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MescholarshipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MescholarshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
