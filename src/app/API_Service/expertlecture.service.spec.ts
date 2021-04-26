import { TestBed } from '@angular/core/testing';

import { ExpertlectureService } from './expertlecture.service';

describe('ExpertlectureService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExpertlectureService = TestBed.get(ExpertlectureService);
    expect(service).toBeTruthy();
  });
});
