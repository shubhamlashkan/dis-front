import { TestBed } from '@angular/core/testing';

import { IndustryvisitService } from './industryvisit.service';

describe('IndustryvisitService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IndustryvisitService = TestBed.get(IndustryvisitService);
    expect(service).toBeTruthy();
  });
});
