import { AddReportDataService } from "./../Services/add-report-data.service";
import { Component, OnInit ,Output,EventEmitter} from '@angular/core';
import { Department } from './Department';

@Component ({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  display: boolean = false;
  department:Department = new Department();
  @Output() valueChange = new EventEmitter();

  constructor(private _addService: AddReportDataService) { }

  ngOnInit() { 
    
  }
  showDialog() {
    this.display = true;
  }
  saveDepartment(value) {
    this._addService.addDepartment(value).subscribe((res => {
      this.valueChange.emit();
      console.log(res);
    }))
  }
}
