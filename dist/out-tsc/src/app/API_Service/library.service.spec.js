import { TestBed } from '@angular/core/testing';
import { LibraryService } from './library.service';
describe('LibraryService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(LibraryService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=library.service.spec.js.map