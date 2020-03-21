import { async, TestBed } from '@angular/core/testing';
import { ActivateAccountComponent } from './activate-account.component';
describe('ActivateAccountComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [ActivateAccountComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(ActivateAccountComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=activate-account.component.spec.js.map