import { TestBed } from '@angular/core/testing';
import { CalendarService } from './calendar.service';
describe('CalendarService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(CalendarService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=calendar.service.spec.js.map