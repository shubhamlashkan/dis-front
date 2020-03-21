import { async, TestBed } from '@angular/core/testing';
import { InfrastructureTimeTableComponent } from './infrastructure-time-table.component';
describe('InfrastructureTimeTableComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [InfrastructureTimeTableComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(InfrastructureTimeTableComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=infrastructure-time-table.component.spec.js.map