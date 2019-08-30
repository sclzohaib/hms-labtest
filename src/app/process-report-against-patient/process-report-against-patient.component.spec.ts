import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessReportAgainstPatientComponent } from './process-report-against-patient.component';

describe('ProcessReportAgainstPatientComponent', () => {
  let component: ProcessReportAgainstPatientComponent;
  let fixture: ComponentFixture<ProcessReportAgainstPatientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcessReportAgainstPatientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessReportAgainstPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
