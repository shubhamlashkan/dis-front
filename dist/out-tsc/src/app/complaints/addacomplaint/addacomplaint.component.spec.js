import { async, TestBed } from '@angular/core/testing';
import { AddacomplaintComponent } from './addacomplaint.component';
describe('AddacomplaintComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [AddacomplaintComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(AddacomplaintComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=addacomplaint.component.spec.js.map