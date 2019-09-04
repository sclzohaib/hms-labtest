import { AddReportDataService } from "./../Services/add-report-data.service";
import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-process-reports",
  templateUrl: "./process-reports.component.html",
  styleUrls: ["./process-reports.component.css"]
})
export class ProcessReportsComponent implements OnInit {
  totalRecords = 0;
  pateintDetails = [];
  cols = [];
  constructor(private router: Router,private _adService:AddReportDataService) { }

  ngOnInit() {
    this.cols = [
      { field: "id", header: "ID" },
      { field: "name", header: "Patient Name" },
      { field: "cnic", header: "Cnic" },
      { field: "phoneNo", header: "Phone Number" },
      { field: "age", header: "Age" },
      { field: "gender", header: "Gender" },
      { field: "address", header: "Address" },
      { field: "status", header: "LabTest Status" },
      { field: "registrationDate", header: "Registration Date" }
    ];

    this.getLabTestProcessPatients();
  }
  backToShowOrProcessReports() {
    this.router.navigate(["/showORprocessReport/"]);
  }
  processReportAgainstsPatientId(id: any) {
    this.router.navigate(["/ProcessReportAgainstPatientComponent/"+id]);
   }

  getLabTestProcessPatients(){
    this._adService.getAllPateints().subscribe(response => {
      this.pateintDetails = [];
      console.log(response);
      response.map(value => {
        this.pateintDetails.push({
          id: value.id,
          name: value.patientLab.name,
          cnic: value.patientLab.cnic,
          phoneNo: value.patientLab.phoneNo,
          age: value.patientLab.age,
          gender: value.patientLab.gender,
          address: value.patientLab.address,
          status: value.status
        });
      });
    });
  }
}
