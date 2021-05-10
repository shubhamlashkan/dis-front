import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AboutNavigationComponent } from './about-navigation.component';

describe('AboutNavigationComponent', () => {
  let component: AboutNavigationComponent;
  let fixture: ComponentFixture<AboutNavigationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
