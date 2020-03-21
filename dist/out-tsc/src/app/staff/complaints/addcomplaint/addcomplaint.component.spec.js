import { async, TestBed } from '@angular/core/testing';
import { AddcomplaintComponent } from './addcomplaint.component';
describe('AddcomplaintComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [AddcomplaintComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(AddcomplaintComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=addcomplaint.component.spec.js.map