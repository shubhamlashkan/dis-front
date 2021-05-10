import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SemTimeTableComponent } from './sem-time-table.component';

describe('SemTimeTableComponent', () => {
  let component: SemTimeTableComponent;
  let fixture: ComponentFixture<SemTimeTableComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SemTimeTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SemTimeTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
