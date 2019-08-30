import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessReportsComponent } from './process-reports.component';

describe('ProcessReportsComponent', () => {
  let component: ProcessReportsComponent;
  let fixture: ComponentFixture<ProcessReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcessReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
