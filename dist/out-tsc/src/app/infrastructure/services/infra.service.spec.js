import { TestBed } from '@angular/core/testing';
import { InfraService } from './infra.service';
describe('InfraService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(InfraService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=infra.service.spec.js.map