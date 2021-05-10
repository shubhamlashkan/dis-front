import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ExpertlectureComponent } from './expertlecture.component';

describe('ExpertlectureComponent', () => {
  let component: ExpertlectureComponent;
  let fixture: ComponentFixture<ExpertlectureComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpertlectureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertlectureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
