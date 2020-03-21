import { TestBed } from '@angular/core/testing';
import { EmployeeService } from './employee.service';
describe('EmployeeService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(EmployeeService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=employee.service.spec.js.map