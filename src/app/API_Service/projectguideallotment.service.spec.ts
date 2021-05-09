import { TestBed } from '@angular/core/testing';

import { ProjectguideallotmentService } from './projectguideallotment.service';

describe('ProjectguideallotmentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProjectguideallotmentService = TestBed.get(ProjectguideallotmentService);
    expect(service).toBeTruthy();
  });
});
