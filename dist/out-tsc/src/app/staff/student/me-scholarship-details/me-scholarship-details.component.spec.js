import { async, TestBed } from '@angular/core/testing';
import { MeScholarshipDetailsComponent } from './me-scholarship-details.component';
describe('MeScholarshipDetailsComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [MeScholarshipDetailsComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(MeScholarshipDetailsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=me-scholarship-details.component.spec.js.map