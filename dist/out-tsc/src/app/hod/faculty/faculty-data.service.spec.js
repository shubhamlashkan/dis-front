import { TestBed } from '@angular/core/testing';
import { FacultyDataService } from './faculty-data.service';
describe('FacultyDataService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(FacultyDataService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=faculty-data.service.spec.js.map