import { SelectItem } from "primeng/components/common/selectitem";
import { AddReportDataService } from "./../Services/add-report-data.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Component, OnInit, Input } from "@angular/core";
import { MessageService } from "primeng/api";
import { SharedService } from '../shared.service';
import { HostListener } from '@angular/core'


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
  patientReportDetails = [];
  remarks;
  result;
  id;
  cols: any = [];
  checkSelectedRep = null;
  reportId;
  patientId;
  reportName;
  patientData;
  patientName;
  age;
  labTestId;
  enablePrintButton: Boolean = true;


  constructor(
    private router: Router,
    private _addService: AddReportDataService,
    private messageService: MessageService,
    private activatedRoute: ActivatedRoute,
    private sharedService: SharedService
  ) { }

  ngOnInit() {

    this.getDataOfPatient();
    this.fillCols();
    this.getSnapshotOfId();
    this.getReports();
  }



  getDataOfPatient() {
    this.sharedService.observePatient.subscribe(data => this.patientData = data)
    this.labTestId = this.patientData.labtestId;
    this.patientName = this.patientData.name;
    this.age = this.patientData.age
    console.log("Shared Service", this.labTestId)

  }

  fillCols() {
    this.cols = [
      { field: "subtest", header: "SUBTESTS" },
      { field: "normal", header: "NORMAL VALUES" },
      { field: "unit", header: "UNIT VALUES" },
      { field: "result", header: "RESULT" },

    ];
  }

  getSnapshotOfId() {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.patientId = this.id;
  }

  goToProcessReportPage() {
    this.router.navigate(["processReports"]);
  }

  getReports() {
    this.reports = [];
    this._addService.getAllCreatedReports().subscribe(rep => {
      console.log(rep);
      rep.map(e => {
        this.reports.push({
          label: e.reportName,
          value: e
        });
      });
    });
    this.getSelectedReport();
  }


  getSelectedReport() {
    if (this.selectedReport != null) {
      this.isReportSelect = true;
      this.reportId = this.selectedReport.id;
      this.reportName = this.selectedReport.reportName;
      this.populateReport();
    } else {
      this.isReportSelect = false;
    }
  }

  indexPakro(v: any) {

    console.log(this.patientReportDetails[v]);
  }
  onKey(event, v: any) {
    console.log(this.patientReportDetails[v]);
  }


  onSubmit() {

    let object = {
      patientId: parseInt(this.id),
      reportId: this.reportId,
      remarks: this.remarks,
      patientReportDetails: this.patientReportDetails

    }
    this._addService
      .postReportAgainstPatient(object)
      .subscribe(res => {
        this.enablePrintButton = false;
        if (res) {
          this.isReportSelect = false;
           this.messageService.add({
            severity: "success",
            summary: "Report posted sucessfully",
            detail: "Go to go"
          });
          
        }

      },error=>{
          this.messageService.add({
            severity: "error",
            summary: "Failed",
            detail: "Try Again"
          });
      });

    this.isReportSelect = false;
    this.selectedReport = null;
    // this.selectedReport.reportDetailsList = undefined;
    // this.populateReport();
  }

  populateReport() {
    this.patientReportDetails = [];
    this.remarks  = "";
    this.selectedReport.reportDetailsList.map((value => {
      this.fillCols();
      this.patientReportDetails.push(value);

    }))


  }

  // @HostListener('window:afterprint', ['$event'])
  // onAfterPrint(event) {
  //   console.log('After print',this.labTestId);
  //   this._addService.UpdateLabTestStatusOfPatient(this.labTestId).subscribe((res=>{
  //     console.log(res);
  //   }))
  // }

  // @HostListener('afterprint', ['$event'])
  // onafterprint(event){
  //   console.log(event)
  // }


  print(): void {
    // window.print();
    let printContents, popupWin;
    printContents = document.getElementById('print-section').innerHTML;
    popupWin = window.open('','window.location.href','top=0,left=0,height=100%,width=auto');
    popupWin.document.open();
    popupWin.document.write(`
      <html>
        <head>
          <title>Print tab</title>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
          <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>
          </head>
    <body onload="window.print();window.close()">${printContents}</body>
    </html>`
    );
    // this.onAfterPrint(event);
    popupWin.document.close();
     this._addService.UpdateLabTestStatusOfPatient(this.labTestId).subscribe((res=>{
      console.log(res);
      this.messageService.add({
        severity:'success',
        summary:'Print SucessFull'
      })
      this.enablePrintButton = true;
    }),error=>{
      
      this.messageService.add({
        severity:'error',
        summary:'Failed'
      })
      this.enablePrintButton = false;
    }
    )
    
  }

}
