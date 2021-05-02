import { HodModule } from './hod.module';

describe('HodModule', () => {
  let hodModule: HodModule;

  beforeEach(() => {
    hodModule = new HodModule();
  });

  it('should create an instance', () => {
    expect(hodModule).toBeTruthy();
  });
});
