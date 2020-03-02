import { TestBed } from '@angular/core/testing';

import { SemtimetableService } from './semtimetable.service';

describe('SemtimetableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SemtimetableService = TestBed.get(SemtimetableService);
    expect(service).toBeTruthy();
  });
});
