import { AddReportDataService } from "./../Services/add-report-data.service";
import { Router } from "@angular/router";
import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { SharedService } from '../shared.service';
// import { OuterSubscriber } from 'rxjs/internal/OuterSubscriber';
// import { EventEmitter } from 'protractor';

@Component({
  selector: "app-process-reports",
  templateUrl: "./process-reports.component.html",
  styleUrls: ["./process-reports.component.css"]
})
export class ProcessReportsComponent implements OnInit {
  totalRecords = 0;
  pateintDetails = [];
  cols = [];
  labtestId;
  empty = false;
  // @Output()data = new EventEmitter();
  // data;
  data;

  constructor(private router: Router, private _adService: AddReportDataService,private sharedService:SharedService) { }

  ngOnInit() {
    this.cols = [
      { field: "patientId", header: "Patient ID" },
      { field: "labtestId", header: "Lab Test ID" },
      { field: "labtestName", header: "Lab Test Name" },
      { field: "name", header: "Patient Name" },
      { field: "cnic", header: "Cnic" },
      { field: "phoneNo", header: "Phone Number" },
      { field: "age", header: "Age" },
      { field: "gender", header: "Gender" },
      { field: "address", header: "Address" },
      { field: "status", header: "LabTest Status" },
    ];

    this.getLabTestProcessPatients();
  }
  backToShowOrProcessReports() {
    this.router.navigate(["/showORprocessReport/"]);
  }
  processReportAgainstsPatientId(value, patientId) {

    this.data = value;
    this.sharedService.changeData(this.data);
      this.router.navigate(["/processReportsAgainstsPatient/" + patientId]);
  }

  getLabTestProcessPatients() {
    this._adService.getAllPateints().subscribe(response => {
    
      if(response.length){
        this.empty = false;
      }
      this.empty = true
      this.pateintDetails = [];
      console.log(response);
      response.map(value => {
        this.pateintDetails.push({
          labtestId: value.id,
          patientId: value.patientLab.id,
          labtestName: value.labtestName,
          name: value.patientLab.name,
          cnic: value.patientLab.cnic,
          phoneNo: value.patientLab.phoneNo,
          age: value.patientLab.age,
          gender: value.patientLab.gender,
          address: value.patientLab.address,
          status: value.status
        });
      });

      this.totalRecords = this.pateintDetails.length;
    });
  }
}
