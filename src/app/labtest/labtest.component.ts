import { Report } from "./report";
import { NormalValue } from "./../normal-value/NormalValue";
import { Department } from "./../department/Department";
import { Component, OnInit, ɵConsole } from "@angular/core";
import { SelectItem } from "primeng/components/common/selectitem";
import { AddReportDataService } from "./../Services/add-report-data.service";
import { typeWithParameters } from "@angular/compiler/src/render3/util";

@Component({
  selector: "app-labtest",
  templateUrl: "./labtest.component.html",
  styleUrls: ["./labtest.component.css"]
})
export class LabtestComponent implements OnInit {
  departments: SelectItem[];
  subTest: SelectItem[];
  unit: SelectItem[];
  normalValue: SelectItem[];
  departmentName;
  subtestName;
  normalvalueName;
  unitName;
  generateReport = [];
  sendReport = [];
  labtestName;
  deptName;

  reportObj: Report;

  constructor(private _addService: AddReportDataService) {}

  ngOnInit() {
    this.reportObj = new Report();
    this.getDepartment();
    this.getSubTest();
    this.getUnit();
    this.getNormalValue();
  }

  changed(e) {
    this.labtestName = e.target.value;
  }

  getDepartment() {
    this.departments = [];
    this._addService.getDepartment().subscribe(dept => {
      console.log(dept);
      dept.map(d => {
        this.departments.push({
          label: d.departmentName,
          value: d
        });
      });
    });
  }
  getSubTest() {
    this.subTest = [];
    this._addService.getSubtest().subscribe(res => {
      console.log("=======>", res);
      res.map(s => {
        this.subTest.push({
          label: s.subtestName,
          value: s
        });
      });
    });
  }
  getUnit() {
    this.unit = [];
    this._addService.getUnit().subscribe(unit => {
      unit.map(u => {
        this.unit.push({
          label: u.unitName,
          value: u
        });
      });
    });
  }
  getNormalValue() {
    this.normalValue = [];
    this._addService.getNormalValue().subscribe(normalvalue => {
      normalvalue.map(nv => {
        this.normalValue.push({
          label: nv.normalvalueName,
          value: nv
        });
      });
    });
  }
  showSelectedDept() {
    this.deptName = this.departmentName.departmentName;
    console.log("haan bhai men select hogyaaaaa haaaan", this.deptName);
  }
  showReport() {
    let ReportDetails = {
      subtestName: this.subtestName.subtestName,
      normalvalueName: this.normalvalueName.normalvalueName,
      unitName: this.unitName.unitName
    };

    this.generateReport.push(ReportDetails);

    // this.reportObj.sendReport = [];
    let postReport = {
      subtest_id: this.subtestName,
      normalvalue_id: this.normalvalueName,
      unit_id: this.unitName
    };
    this.reportObj.sendReport.push(postReport);
  }

  postReport() {


    this.reportObj.DepartmentName = this.departmentName.departmentName;
    this.reportObj.labtestName = this.labtestName;

    console.log(this.reportObj);
  }
}
