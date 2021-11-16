import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalListComponent } from './external-list.component';

describe('ExternalListComponent', () => {
  let component: ExternalListComponent;
  let fixture: ComponentFixture<ExternalListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExternalListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExternalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
