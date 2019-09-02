import { Car } from "./car";
import { SelectItem } from "primeng/components/common/selectitem";
import { AddReportDataService } from "./../Services/add-report-data.service";
import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { MessageService } from "primeng/api";

@Component({
  selector: "app-process-report-against-patient",
  templateUrl: "./process-report-against-patient.component.html",
  styleUrls: ["./process-report-against-patient.component.css"]
})
export class ProcessReportAgainstPatientComponent implements OnInit {
  reports: SelectItem[];
  selectedReport = null;
  isReportSelect = false;
  brands: SelectItem[];
  completeReport: Car[];
  remarks;
  result;

  constructor(
    private router: Router,
    private _addService: AddReportDataService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.reports = [
      { label: "Blood Test", value: "BloodTest" },
      { label: "Urine Test", value: "Urine Test" },
      { label: "Pregnancy Test", value: "Pregnancy Test" }
    ];
  }

  goToProcessReportPage() {
    this.router.navigate(["processReports"]);
  }

  getReports() {
    this.populateReport();
    this._addService.getAllCreatedReports().subscribe(rep => {
      console.log("=========>");
      rep.map(e => {
        this.reports.push({
          label: e.reportName,
          value: e
        });
      });
    });
    if (this.selectedReport != null) {
      console.log("selected report", this.selectedReport);
      this.isReportSelect = true;
    } else {
      this.isReportSelect = false;
    }
  }

  indexPakro(v: any) {
    console.log("men mouse out chal rha hn", v);
    console.log(this.reports[v]);
  }
  onKey(event, v: any) {
    console.log("yeh tab chal rha hai ", v);
    console.log(this.completeReport[v]);
  }

  onSubmit() {
    console.log("remarks are ",this.remarks)
    console.log("FINAL REPORT", this.completeReport);
    this._addService
      .postReportAgainstPatient(this.completeReport)
      .subscribe(res => {
        if (res) {
          this.messageService.add({
            severity: "sucess",
            summary: "Report Posted SucessFully",
            detail: this.selectedReport + " report for patient 1 is posted"
          });
          // this.completeReport = [];
          // this.isReportSelect = false;
          // this.populateReport();
        }
        else {
         this.messageService.add({severity:'error', summary: 'Error Message', detail:'Validation failed'});
        }
      });

         this.messageService.add({severity:'error', summary: 'Error Message', detail:'Validation failed'});
    this.completeReport = [];
    this.isReportSelect = false;
    this.selectedReport = null;
    this.populateReport();

  }

  populateReport() {
    this.completeReport = [
      {
        subtest: "chlorine",
        normalvalue: "92.34",
        unitvalue: "34.3",
        result: null
      },
      {
        subtest: "chlorine",
        normalvalue: "92.34",
        unitvalue: "34.3",
        result: null
      },
      {
        subtest: "chlorine",
        normalvalue: "92.34",
        unitvalue: "34.3",
        result: null
      },
      {
        subtest: "chlorine",
        normalvalue: "92.34",
        unitvalue: "34.3",
        result: null
      },
      {
        subtest: "chlorine",
        normalvalue: "92.34",
        unitvalue: "34.3",
        result: null
      },
      {
        subtest: "chlorine",
        normalvalue: "92.34",
        unitvalue: "34.3",
        result: null
      },
      {
        subtest: "chlorine",
        normalvalue: "92.34",
        unitvalue: "34.3",
        result: null
      },
      {
        subtest: "chlorine",
        normalvalue: "92.34",
        unitvalue: "34.3",
        result: null
      },
      {
        subtest: "chlorine",
        normalvalue: "92.34",
        unitvalue: "34.3",
        result: null
      }
    ];
    // var x = "meow";

    let arr = {
      subtest: "newEst subtets",
      normalvalue: "99999",
      unitvalue: "jani",
      result: null
    };

    // this.reports.push({subtest:x});
    this.completeReport.push(arr);
    console.log(this.reports[0]);
  }
}
