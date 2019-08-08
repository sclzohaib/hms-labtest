import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/components/common/selectitem';
import { AddReportDataService } from "./../Services/add-report-data.service";
import { typeWithParameters } from '@angular/compiler/src/render3/util';


@Component({
  selector: 'app-labtest',
  templateUrl: './labtest.component.html',
  styleUrls: ['./labtest.component.css']
})
export class LabtestComponent implements OnInit {
  departments: SelectItem[];
  subTest: SelectItem[];
  unit: SelectItem[];
  normalValue : SelectItem[];
  departmentName;


  constructor(private _addService: AddReportDataService) { }

  ngOnInit() {
    this.getDepartment();
    this.getSubTest();
    this.getUnit();
    this.getNormalValue();
  }


  

  getDepartment() {
    this.departments = [];
    this._addService.getDepartment().subscribe(dept=>{
      console.log(dept);
      dept.map(d=>{
        this.departments.push({
          label: d.departmentName,
          value: d
        });
      });
    });
  }
  getSubTest(){
    this.subTest = [];
    this._addService.getSubtest().subscribe(subtest=>{
      console.log(subtest);
      subtest.map(s=>{
        this.subTest.push({
          label: s.subtestName,
          value: s
        });
      })
    });
  }
getUnit(){
  this.unit = [];
  this._addService.getUnit().subscribe(unit=>{
    unit.map(u=>{
      this.unit.push({
        label: u.unitName,
        value: u
      })
    });
  });
}
getNormalValue(){
  this.normalValue = [];
  this._addService.getNormalValue().subscribe(normalvalue=>{
    normalvalue.map(nv=>{
      this.normalValue.push({
        label: nv.normalvalueName,
        value: nv
      })
    });
  });
}
  showSelectedDept(){
    console.log("haan bhai men select hogyaaaaa haaaan",this.departmentName)
  }
}
