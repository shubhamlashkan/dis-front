import { async, TestBed } from '@angular/core/testing';
import { RemainingComplaintsComponent } from './remaining-complaints.component';
describe('RemainingComplaintsComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [RemainingComplaintsComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(RemainingComplaintsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=remaining-complaints.component.spec.js.map