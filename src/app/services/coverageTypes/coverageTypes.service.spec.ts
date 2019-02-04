import { TestBed, inject } from '@angular/core/testing';

import { CoverageTypesService } from './coverageTypes.service';

describe('CoverageTypesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoverageTypesService]
    });
  });

  it('should be created', inject([CoverageTypesService], (service: CoverageTypesService) => {
    expect(service).toBeTruthy();
  }));
});
