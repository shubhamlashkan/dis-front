import { async, TestBed } from '@angular/core/testing';
import { TotalComplaintsComponent } from './total-complaints.component';
describe('TotalComplaintsComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [TotalComplaintsComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(TotalComplaintsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=total-complaints.component.spec.js.map