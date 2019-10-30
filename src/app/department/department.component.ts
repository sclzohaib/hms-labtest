import { AddReportDataService } from "./../Services/add-report-data.service";
import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { Department } from "./Department";
import { MessageService } from 'primeng/api';

@Component({
  selector: "app-department",
  templateUrl: "./department.component.html",
  styleUrls: ["./department.component.css"]
})
export class DepartmentComponent implements OnInit {
  display: boolean = false;
  department: Department = new Department();
  @Output() valueChange = new EventEmitter();
  @Input() public editDepartment;
  heading = "";
  checkAction;
  @Output() updatedDeptName = new EventEmitter();

  constructor(private _addService: AddReportDataService, private messageservice: MessageService) { }

  ngOnInit() { }

  showDialog(value: any) {
    this.checkAction = value;

    if (value == "edit") {
      if (this.editDepartment.normalvalueName != "" || this.editDepartment.normalvalueName != undefined) {
        this.display = true;
        this.heading = "EDIT DEPARMENT";
        // if (this.department.departmentName != undefined) {
        if (this.editDepartment.departmentName != "") {
          // console.log("======================>", this.editDepartment);
          this.department.departmentName = this.editDepartment.departmentName;
        }
      }
    } 
    else if (value == "add") {
      this.heading = "ADD DEPARTMENT";
      this.department.departmentName = "";
      this.display = true;
    }
  }

  saveDepartment(value) {
    if (this.checkAction == "add") {
      this._addService.addDepartment(value).subscribe(res => {

        this.valueChange.emit();
        this.messageservice.add({
          key: 'a',
          severity: "success",
          summary: "Succesfully",
          detail: "Department  successfully added!"
        });
        console.log(res);
      }, error => {
        this.messageservice.add({
          key: 'a',
          severity: "danger",
          summary: "error",
          detail: "something went wrong!"
        });




      });
    } else if (this.checkAction == "edit") {
      let id = this.editDepartment.id;
      this._addService.editDepartment(id, value).subscribe(response => {
        this.valueChange.emit();
        this.messageservice.add({
          key: 'a',
          severity: "success",
          summary: "Succesfully",
          detail: "department successfully edited!"
        });
        console.log(response);
      },
        error => {

          this.messageservice.add({
            key: 'a',
            severity: "danger",
            summary: "error",
            detail: "Some thing went wrong !"
          });



        });
    }
  }
}
