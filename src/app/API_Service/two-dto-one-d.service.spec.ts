import { TestBed } from '@angular/core/testing';

import { TwoDToOneDService } from './two-dto-one-d.service';

describe('TwoDToOneDService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TwoDToOneDService = TestBed.get(TwoDToOneDService);
    expect(service).toBeTruthy();
  });
});
