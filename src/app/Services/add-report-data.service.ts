import { environment } from "./../../environments/environment";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddReportDataService {

  constructor(private http: HttpClient) {

  }

  public addSubtest(subtest: Object): Observable<Object> {
    return this.http.post(environment.baseurl + "api/subtest/", subtest);
  }
  public addDepartment(department: Object): Observable<Object> {
    return this.http.post(environment.baseurl + "api/department/", department);
  }
  public addNormalValues(normalValue: Object): Observable<Object> {
    return this.http.post(environment.baseurl + "api/normalvalue/", normalValue);
  }
  public addUnits(unit: Object): Observable<Object> {
    return this.http.post(environment.baseurl + "api/unit/", unit);
  }
}
