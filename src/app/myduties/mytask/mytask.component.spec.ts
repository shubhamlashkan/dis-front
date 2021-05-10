import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MytaskComponent } from './mytask.component';

describe('MytaskComponent', () => {
  let component: MytaskComponent;
  let fixture: ComponentFixture<MytaskComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MytaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MytaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
