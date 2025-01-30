import { TestBed } from '@angular/core/testing';

import { ScholarshipService } from './scholarship.service';

describe('SkillService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ScholarshipService = TestBed.get(ScholarshipService);
    expect(service).toBeTruthy();
  });
});
