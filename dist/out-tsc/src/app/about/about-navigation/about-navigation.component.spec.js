import { async, TestBed } from '@angular/core/testing';
import { AboutNavigationComponent } from './about-navigation.component';
describe('AboutNavigationComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [AboutNavigationComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(AboutNavigationComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=about-navigation.component.spec.js.map