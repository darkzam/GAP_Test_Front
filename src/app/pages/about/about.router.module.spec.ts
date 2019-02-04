import { AboutRouterModule } from './about.router.module';

describe('AboutRouterModule', () => {
  let aboutRouterModule: AboutRouterModule;

  beforeEach(() => {
    aboutRouterModule = new AboutRouterModule();
  });

  it('should create an instance', () => {
    expect(aboutRouterModule).toBeTruthy();
  });
});
