import { TestBed } from '@angular/core/testing';

import { InfraService } from './infra.service';

describe('InfraService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InfraService = TestBed.get(InfraService);
    expect(service).toBeTruthy();
  });
});
