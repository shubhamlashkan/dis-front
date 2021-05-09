import { ComplaintsModule } from './complaints.module';

describe('ComplaintsModule', () => {
  let complaintsModule: ComplaintsModule;

  beforeEach(() => {
    complaintsModule = new ComplaintsModule();
  });

  it('should create an instance', () => {
    expect(complaintsModule).toBeTruthy();
  });
});
