import { GpaCommonModule } from './common.module';

describe('CommonModule', () => {
  let commonModule: GpaCommonModule;

  beforeEach(() => {
    commonModule = new GpaCommonModule();
  });

  it('should create an instance', () => {
    expect(commonModule).toBeTruthy();
  });
});
