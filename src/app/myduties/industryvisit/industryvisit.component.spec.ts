import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { IndustryvisitComponent } from './industryvisit.component';

describe('IndustryvisitComponent', () => {
  let component: IndustryvisitComponent;
  let fixture: ComponentFixture<IndustryvisitComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ IndustryvisitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndustryvisitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
