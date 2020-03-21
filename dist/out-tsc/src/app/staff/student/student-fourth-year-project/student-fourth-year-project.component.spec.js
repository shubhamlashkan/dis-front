import { async, TestBed } from '@angular/core/testing';
import { StudentFourthYearProjectComponent } from './student-fourth-year-project.component';
describe('StudentFourthYearProjectComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [StudentFourthYearProjectComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(StudentFourthYearProjectComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=student-fourth-year-project.component.spec.js.map