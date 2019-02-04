import { RiskTypesModule } from './riskTypes.module';

describe('RiskTypesModule', () => {
  let riskTypesModule: RiskTypesModule;

  beforeEach(() => {
    riskTypesModule = new RiskTypesModule();
  });

  it('should create an instance', () => {
    expect(riskTypesModule).toBeTruthy();
  });
});
