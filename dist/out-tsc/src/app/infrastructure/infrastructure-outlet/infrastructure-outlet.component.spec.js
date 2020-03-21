import { async, TestBed } from '@angular/core/testing';
import { InfrastructureOutletComponent } from './infrastructure-outlet.component';
describe('InfrastructureOutletComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [InfrastructureOutletComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(InfrastructureOutletComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=infrastructure-outlet.component.spec.js.map