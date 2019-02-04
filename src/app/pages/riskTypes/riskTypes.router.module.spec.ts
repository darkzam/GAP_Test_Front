import { RiskTypesRouterModule } from './riskTypes.router.module';

describe('RiskTypesRouterModule', () => {
  let riskTypesRouterModule: RiskTypesRouterModule;

  beforeEach(() => {
    riskTypesRouterModule = new RiskTypesRouterModule();
  });

  it('should create an instance', () => {
    expect(riskTypesRouterModule).toBeTruthy();
  });
});
