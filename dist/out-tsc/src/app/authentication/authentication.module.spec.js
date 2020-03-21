import { AuthenticationModule } from './authentication.module';
describe('AuthenticationModule', function () {
    var authenticationModule;
    beforeEach(function () {
        authenticationModule = new AuthenticationModule();
    });
    it('should create an instance', function () {
        expect(authenticationModule).toBeTruthy();
    });
});
//# sourceMappingURL=authentication.module.spec.js.map