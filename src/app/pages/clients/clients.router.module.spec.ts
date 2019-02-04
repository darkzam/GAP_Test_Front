import { ClientsRouterModule } from './clients.router.module';

describe('ClientsRouterModule', () => {
  let clientsRouterModule: ClientsRouterModule;

  beforeEach(() => {
    clientsRouterModule = new ClientsRouterModule();
  });

  it('should create an instance', () => {
    expect(clientsRouterModule).toBeTruthy();
  });
});
