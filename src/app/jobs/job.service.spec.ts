import { TestBed } from '@angular/core/testing';

import { JobService } from './job.service';

describe('SkillService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JobService = TestBed.get(JobService);
    expect(service).toBeTruthy();
  });
});
