import { PoliciesRouterModule } from './policies.router.module';

describe('PoliciesRouterModule', () => {
  let policiesRouterModule: PoliciesRouterModule;

  beforeEach(() => {
    policiesRouterModule = new PoliciesRouterModule();
  });

  it('should create an instance', () => {
    expect(policiesRouterModule).toBeTruthy();
  });
});
