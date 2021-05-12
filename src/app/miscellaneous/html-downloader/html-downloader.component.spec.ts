import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlDownloaderComponent } from './html-downloader.component';

describe('HtmlDownloaderComponent', () => {
  let component: HtmlDownloaderComponent;
  let fixture: ComponentFixture<HtmlDownloaderComponent>;

  beforeEach(async(() => {
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
