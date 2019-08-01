import { TestBed } from '@angular/core/testing';

import { AddReportDataService } from './add-report-data.service';

describe('AddReportDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddReportDataService = TestBed.get(AddReportDataService);
    expect(service).toBeTruthy();
  });
});
