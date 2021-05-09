import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeProjectDetailsComponent } from './me-project-details.component';

describe('MeProjectDetailsComponent', () => {
  let component: MeProjectDetailsComponent;
  let fixture: ComponentFixture<MeProjectDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeProjectDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeProjectDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
