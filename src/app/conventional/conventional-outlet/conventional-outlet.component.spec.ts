import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConventionalOutletComponent } from './conventional-outlet.component';

describe('ConventionalOutletComponent', () => {
  let component: ConventionalOutletComponent;
  let fixture: ComponentFixture<ConventionalOutletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConventionalOutletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConventionalOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
