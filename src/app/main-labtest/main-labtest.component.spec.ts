import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainLabtestComponent } from './main-labtest.component';

describe('MainLabtestComponent', () => {
  let component: MainLabtestComponent;
  let fixture: ComponentFixture<MainLabtestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainLabtestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainLabtestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
