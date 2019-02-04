import { CoverageTypesRouterModule } from './coverageTypes.router.module';

describe('CoverageTypesRouterModule', () => {
  let coverageTypesRouterModule: CoverageTypesRouterModule;

  beforeEach(() => {
    coverageTypesRouterModule = new CoverageTypesRouterModule();
  });

  it('should create an instance', () => {
    expect(coverageTypesRouterModule).toBeTruthy();
  });
});
