import { ConventionalModule } from './conventional.module';

describe('ConventionalModule', () => {
  let conventionalModule: ConventionalModule;

  beforeEach(() => {
    conventionalModule = new ConventionalModule();
  });

  it('should create an instance', () => {
    expect(conventionalModule).toBeTruthy();
  });
});
