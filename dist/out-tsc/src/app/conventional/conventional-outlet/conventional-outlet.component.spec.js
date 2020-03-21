import { async, TestBed } from '@angular/core/testing';
import { ConventionalOutletComponent } from './conventional-outlet.component';
describe('ConventionalOutletComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [ConventionalOutletComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(ConventionalOutletComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=conventional-outlet.component.spec.js.map