import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ProjectguideallotmentComponent } from './projectguideallotment.component';

describe('ProjectguideallotmentComponent', () => {
  let component: ProjectguideallotmentComponent;
  let fixture: ComponentFixture<ProjectguideallotmentComponent>;

  beforeEach(waitForAsync(() => {
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
