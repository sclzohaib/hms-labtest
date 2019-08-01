import { AddReportDataService } from "./../Services/add-report-data.service";
import { Component, OnInit } from '@angular/core';
import { Department } from './Department';

@Component ({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  display: boolean = false;
  department:Department = new Department();
  constructor(private _addService: AddReportDataService) { }

  ngOnInit() { }
  showDialog() {
    this.display = true;
  }
  saveDepartment(value) {
    this._addService.addDepartment(value).subscribe((res => {
      console.log(res);
    }))
  }
}
