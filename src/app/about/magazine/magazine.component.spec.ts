import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MagazineComponent } from './magazine.component';

describe('MagazineComponent', () => {
  let component: MagazineComponent;
  let fixture: ComponentFixture<MagazineComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MagazineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MagazineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
