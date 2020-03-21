import { async, TestBed } from '@angular/core/testing';
import { ResolvedComplaintsComponent } from './resolved-complaints.component';
describe('ResolvedComplaintsComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [ResolvedComplaintsComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(ResolvedComplaintsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=resolved-complaints.component.spec.js.map