import { TestBed } from '@angular/core/testing';

import { FacultyDataService } from './faculty-data.service';

describe('FacultyDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FacultyDataService = TestBed.get(FacultyDataService);
    expect(service).toBeTruthy();
  });
});
