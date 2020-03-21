import { async, TestBed } from '@angular/core/testing';
import { InfrastructureComponent } from './infrastructure.component';
describe('InfrastructureComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [InfrastructureComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(InfrastructureComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=infrastructure.component.spec.js.map