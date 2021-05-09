import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectguideallotmentComponent } from './projectguideallotment.component';

describe('ProjectguideallotmentComponent', () => {
  let component: ProjectguideallotmentComponent;
  let fixture: ComponentFixture<ProjectguideallotmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectguideallotmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectguideallotmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
