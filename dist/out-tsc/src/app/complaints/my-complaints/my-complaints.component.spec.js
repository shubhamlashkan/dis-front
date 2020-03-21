import { async, TestBed } from '@angular/core/testing';
import { MyComplaintsComponent } from './my-complaints.component';
describe('MyComplaintsComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [MyComplaintsComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(MyComplaintsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=my-complaints.component.spec.js.map