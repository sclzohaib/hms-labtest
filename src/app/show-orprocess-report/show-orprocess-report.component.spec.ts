import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowORprocessReportComponent } from './show-orprocess-report.component';

describe('ShowORprocessReportComponent', () => {
  let component: ShowORprocessReportComponent;
  let fixture: ComponentFixture<ShowORprocessReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowORprocessReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowORprocessReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
