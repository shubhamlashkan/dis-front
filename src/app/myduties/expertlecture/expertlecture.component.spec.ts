import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertlectureComponent } from './expertlecture.component';

describe('ExpertlectureComponent', () => {
  let component: ExpertlectureComponent;
  let fixture: ComponentFixture<ExpertlectureComponent>;

  beforeEach(async(() => {
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
