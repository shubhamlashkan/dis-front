import { async, TestBed } from '@angular/core/testing';
import { ResourceRequestComponent } from './resource-request.component';
describe('ResourceRequestComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [ResourceRequestComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(ResourceRequestComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=resource-request.component.spec.js.map