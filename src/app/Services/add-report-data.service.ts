import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddReportDataService {

  constructor(private http: HttpClient) {

  }

  public addSubtest(subtest: Object): Observable<Object> {
    return this.http.post(environment.baseurl + 'api/subtest/', subtest);
  }
  public addDepartment(department: Object): Observable<Object> {
    return this.http.post(environment.baseurl + 'api/department/', department);
  }
  public addNormalValues(normalValue: Object): Observable<Object> {
    return this.http.post(environment.baseurl + 'api/normalvalue/', normalValue);
  }
  public addUnits(unit: Object): Observable<Object> {
    return this.http.post(environment.baseurl + 'api/unit/', unit);
  }
  public getDepartment(): Observable<any> {
    return this.http.get(environment.baseurl + 'api/department/');
  }
  public getDepartmentByID(id): Observable<any> {
    return this.http.get(environment.baseurl + 'api/department/' + id);
  }
  public getSubtest(): Observable<any> {
    return this.http.get(environment.baseurl + 'api/subtest/');
  }
  public getUnit(): Observable<any> {
    return this.http.get(environment.baseurl + 'api/unit/');
  }
  public editUnit(id: any, obj: any): Observable<any> {
    return this.http.put(environment.baseurl + 'api/unit/' + id, obj);
  }
  public getNormalValue(): Observable<any> {
    return this.http.get(environment.baseurl + 'api/normalvalue/');
  }
  public editDepartment(id, obj: any): Observable<any> {
    return this.http.put(environment.baseurl + 'api/department/' + id, obj);
  }
  public editSubtest(id, obj: any): Observable<any> {
    return this.http.put(environment.baseurl + 'api/subtest/'+id, obj);
  }
  public editNormalvalue(id, obj: any): Observable<any> {
    return this.http.put(environment.baseurl + 'api/normalvalue/' + id, obj);
  }

  public postSampleReport(obj:any):Observable<any>{
    return this.http.post(environment.baseurl+"api/report/",obj);
  }
  public getAllCreatedReports():Observable<any>{
    return this.http.get(environment.baseurl+"api/report/");
  }

  public postReportAgainstPatient(object:any):Observable<any>{
    return this.http.post(environment.baseurl + "api/postReport/",object);
  }

  public getAllPateints():Observable<any>{
    return this.http.get(environment.baseurl+"api/report/process")
  }
}
