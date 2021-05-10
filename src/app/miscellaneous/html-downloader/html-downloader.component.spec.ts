import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HtmlDownloaderComponent } from './html-downloader.component';

describe('HtmlDownloaderComponent', () => {
  let component: HtmlDownloaderComponent;
  let fixture: ComponentFixture<HtmlDownloaderComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HtmlDownloaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlDownloaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
