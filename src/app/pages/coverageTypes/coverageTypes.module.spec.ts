import { CoverageTypesModule } from './coverageTypes.module';

describe('CoverageTypesModule', () => {
  let coverageTypesModule: CoverageTypesModule;

  beforeEach(() => {
    coverageTypesModule = new CoverageTypesModule();
  });

  it('should create an instance', () => {
    expect(coverageTypesModule).toBeTruthy();
  });
});
