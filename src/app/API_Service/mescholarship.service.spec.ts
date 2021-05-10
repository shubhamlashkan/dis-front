import { TestBed } from '@angular/core/testing';

import { MescholarshipService } from './mescholarship.service';

describe('MescholarshipService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MescholarshipService = TestBed.get(MescholarshipService);
    expect(service).toBeTruthy();
  });
});
