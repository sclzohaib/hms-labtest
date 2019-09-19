import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HmsLandingPageComponent } from './hms-landing-page.component';

describe('HmsLandingPageComponent', () => {
  let component: HmsLandingPageComponent;
  let fixture: ComponentFixture<HmsLandingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HmsLandingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HmsLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
