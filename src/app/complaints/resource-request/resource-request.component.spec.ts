import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ResourceRequestComponent } from './resource-request.component';

describe('ResourceRequestComponent', () => {
  let component: ResourceRequestComponent;
  let fixture: ComponentFixture<ResourceRequestComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ResourceRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourceRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
