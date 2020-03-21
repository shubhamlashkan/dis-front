import { async, TestBed } from '@angular/core/testing';
import { HtmlDownloaderComponent } from './html-downloader.component';
describe('HtmlDownloaderComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [HtmlDownloaderComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(HtmlDownloaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=html-downloader.component.spec.js.map