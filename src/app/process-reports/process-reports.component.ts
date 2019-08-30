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
  constructor(private router: Router) { }

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
  }
  backToShowOrProcessReports() {
    this.router.navigate(["/showORprocessReport/"]);
  }
  processReportAgainstsPatientId(id: any) { }
}
