import { async, TestBed } from '@angular/core/testing';
import { MydutiesNavigationComponent } from './myduties-navigation.component';
describe('MydutiesNavigationComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [MydutiesNavigationComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(MydutiesNavigationComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=myduties-navigation.component.spec.js.map