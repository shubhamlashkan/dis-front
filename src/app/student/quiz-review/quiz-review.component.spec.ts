import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { QuizReviewComponent } from './quiz-review.component';

describe('QuizReviewComponent', () => {
  let component: QuizReviewComponent;
  let fixture: ComponentFixture<QuizReviewComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
