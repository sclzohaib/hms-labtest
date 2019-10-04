import { Router } from "@angular/router";
import { Report } from "./report";
import { NormalValue } from "./../normal-value/NormalValue";
import { Department } from "./../department/Department";
import { Component, OnInit, ɵConsole } from "@angular/core";
import { SelectItem } from "primeng/components/common/selectitem";
import { AddReportDataService } from "./../Services/add-report-data.service";
import { typeWithParameters } from "@angular/compiler/src/render3/util";
import { LabtestServiceService } from '../main-labtest/labtest-service.service';
import { MessageService } from 'primeng/api';

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
  selectedLabTest =[];
  departmentName;
  subtestName;
  normalvalueName;
  unitName;
  generateReport = [];
  sendReport = [];
  labtestName;
  deptName;
  reportObj: Report;

  constructor(private _addService: AddReportDataService, private router: Router, private labServ: LabtestServiceService, private messageService:MessageService) {}

  ngOnInit() {
    this.reportObj = new Report();
    this.getDepartment();
    this.getSubTest();
    this.getUnit();
    this.getNormalValue();
    this.getLabTestsInDropDown();
  }

  changed(e) {
    this.labtestName = e.target.value;
  }

  getDepartment() {
    this.departments = [];
    this._addService.getDepartment().subscribe(dept => {
      // console.log(dept);
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
      // console.log("=======>", res);
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

  getLabTestsInDropDown(){
    this.labServ.getlabtest().subscribe(data =>{
      data.map(d =>{
        this.selectedLabTest.push({
          label:d.name,
          value:d.name
        })
      }

      )
    })
  }


  showSelectedDept() {
    this.deptName = this.departmentName.departmentName;
    this.reportObj.departmentName = this.deptName;
    // console.log("haan bhai men select hogyaaaaa haaaan", this.deptName);
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
      subtest: this.subtestName.subtestName,
      normal: this.normalvalueName.normalvalueName,
      unit: this.unitName.unitName
    };
    this.reportObj.departmentName = this.deptName;
    this.reportObj.labtestName = this.labtestName;
    this.reportObj.reportDetails.push(postReport);

    // this.departmentName = "";
    this.unitName = "";
    // this.labtestName = "";
    this.subtestName = "";
    this.normalvalueName = "";


  }

  postReport() {
    // this.reportObj.departmentName = this.departmentName.departmentName;
    // this.reportObj.labtestName = this.labtestName;
    this._addService.postSampleReport(this.reportObj).subscribe(res=>{
        // console.log("================================="+res)
        this.generateReport = [];
        this.departmentName.departmentName = "";
        this.deptName = "";
        this.labtestName = "";
        this.messageService.add({
        severity: "success",
        summary: "Added Succesfully"
      });
    }), error => {
      // console.log(er/ror);
      this.messageService.add({
        severity: "error",
        summary: "Error Found"
      });
    }
    // console.log(this.reportObj);
  }

  backToShowReport(){
    this.router.navigate(['showORprocessReport'])
  }
}
