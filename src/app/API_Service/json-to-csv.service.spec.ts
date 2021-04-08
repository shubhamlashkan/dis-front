import { TestBed } from '@angular/core/testing';

import { JsonToCSVService } from './json-to-csv.service';

describe('JsonToCSVService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JsonToCSVService = TestBed.get(JsonToCSVService);
    expect(service).toBeTruthy();
  });
});
