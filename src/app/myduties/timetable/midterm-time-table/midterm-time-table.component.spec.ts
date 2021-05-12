import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MidtermTimeTableComponent } from './midterm-time-table.component';

describe('MidtermTimeTableComponent', () => {
  let component: MidtermTimeTableComponent;
  let fixture: ComponentFixture<MidtermTimeTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MidtermTimeTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MidtermTimeTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
