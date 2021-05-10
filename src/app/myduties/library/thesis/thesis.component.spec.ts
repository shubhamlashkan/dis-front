import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ThesisComponent } from './thesis.component';

describe('ThesisComponent', () => {
  let component: ThesisComponent;
  let fixture: ComponentFixture<ThesisComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ThesisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThesisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
