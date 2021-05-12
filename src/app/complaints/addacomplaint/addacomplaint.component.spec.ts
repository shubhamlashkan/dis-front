import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddacomplaintComponent } from './addacomplaint.component';

describe('AddacomplaintComponent', () => {
  let component: AddacomplaintComponent;
  let fixture: ComponentFixture<AddacomplaintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddacomplaintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddacomplaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
