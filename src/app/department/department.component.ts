import { AddReportDataService } from "./../Services/add-report-data.service";
import { Component, OnInit ,Output,EventEmitter, Input} from '@angular/core';
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
  @Input() public editDepartment;
  heading = "";
  checkAction ;
  @Output() updatedDeptName = new EventEmitter();

  constructor(private _addService: AddReportDataService) { }

  ngOnInit() { 
    
 
  }
  showDialog(value:any) {

    this.checkAction = value

    if(value == "edit"){
      this.display = true;
      this.heading = "EDIT DEPARMENT"
      if(this.editDepartment.departmentName!=""){
        console.log("======================>",this.editDepartment)
        this.department.departmentName = this.editDepartment.departmentName;
      }
    }
    else if(value== "add"){
        this.heading = "ADD DEPARTMENT";
      this.department.departmentName = "";
      this.display = true;
    }

  }
  saveDepartment(value) {
    if(this.checkAction == "add"){
      this._addService.addDepartment(value).subscribe((res => {
        this.valueChange.emit();
        console.log(res);
      }))
    }

      else if(this.checkAction == "edit"){
        let id = this.editDepartment.id;
            this._addService.editDepartment(id,value).subscribe((response=>{
              this.valueChange.emit();
              console.log(response);
                // this._addService.getDepartmentByID(id).subscribe((e=>{
                //     console.log(e);
                //    this.updatedDeptName = e.departmentName;
                //     console.log(this.updatedDeptName);
                    
                // }))
            }));


      }


    }
   
   
}
