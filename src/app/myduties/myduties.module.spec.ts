import { MydutiesModule } from './myduties.module';

describe('MydutiesModule', () => {
  let mydutiesModule: MydutiesModule;

  beforeEach(() => {
    mydutiesModule = new MydutiesModule();
  });

  it('should create an instance', () => {
    expect(mydutiesModule).toBeTruthy();
  });
});
