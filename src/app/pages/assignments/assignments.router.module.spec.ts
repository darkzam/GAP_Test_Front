import { AssignmentsRouterModule } from './assignments.router.module';

describe('AssignmentsRouterModule', () => {
  let assignmentsRouterModule: AssignmentsRouterModule;

  beforeEach(() => {
    assignmentsRouterModule = new AssignmentsRouterModule();
  });

  it('should create an instance', () => {
    expect(assignmentsRouterModule).toBeTruthy();
  });
});
