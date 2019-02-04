import { TestBed, inject } from '@angular/core/testing';

import { RiskTypesService } from './riskTypes.service';

describe('RiskTypesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RiskTypesService]
    });
  });

  it('should be created', inject([RiskTypesService], (service: RiskTypesService) => {
    expect(service).toBeTruthy();
  }));
});
