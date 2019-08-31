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
  cars  : Car[];
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


    
    // this.cars = [
    //   {
    //     field:"subtest",value:"23.3",
    //   },
    //   {
    //     field:"subtest",value:"23.3"
    //   },
    //   {
    //     field:"subtest",value:"23.3"
    //   },
    //   {
    //     field:"unitvalue",value:"90"
    //   }
    // ]

    this.cars = [
      {
        subtest:"chlorine",normalvalue:"92.34",unitvalue:"34.3",result:null
       },
      {
        subtest:"chlorine",normalvalue:"92.34",unitvalue:"34.3",result:null
       },
      {
        subtest:"chlorine",normalvalue:"92.34",unitvalue:"34.3",result:null
       },
      {
        subtest:"chlorine",normalvalue:"92.34",unitvalue:"34.3",result:null
       },
      {
        subtest:"chlorine",normalvalue:"92.34",unitvalue:"34.3",result:null
       },
      {
        subtest:"chlorine",normalvalue:"92.34",unitvalue:"34.3",result:null
       },
      {
        subtest:"chlorine",normalvalue:"92.34",unitvalue:"34.3",result:null
       },
      {
        subtest:"chlorine",normalvalue:"92.34",unitvalue:"34.3",result:null
       },
      {
        subtest:"chlorine",normalvalue:"92.34",unitvalue:"34.3",result:null
       },

  ]
    var x = "meow";

    let arr = {

        subtest : "newEst subtets",
        normalvalue : "99999",
        unitvalue : "jani",
        result:null
    }

  // this.cars.push({subtest:x});
  this.cars.push(arr)
  console.log(this.cars[0]);
  console.log(this.cars.pop());


}

goToProcessReportPage() {
  this.router.navigate(["processReports"]);
}

getReports() {

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


  indexPakro(v:any){
    console.log("men mouse out chal rha hn",v)
    console.log(this.cars[v]);

  }
  onKey(event,v:any){
    console.log("yeh tab chal rha hai ",v)
    console.log(this.cars[v]);

  }

  onSubmit(){
    console.log("FINAL REPORT",this.cars)
  }
}
