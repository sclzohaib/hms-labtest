import { AddReportDataService } from "./../Services/add-report-data.service";
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProcessReportsComponent } from '../process-reports/process-reports.component';
import { SharedService } from '../shared.service';


@Component({
  selector: 'app-monitor-quick-view',
  templateUrl: './monitor-quick-view.component.html',
  styleUrls: ['./monitor-quick-view.component.css']
})
export class MonitorQuickViewComponent implements OnInit {

  isLoading = true;
  name;
  patientId;
  labtestName;
  age;
  patientData;
  constructor(private adSerivce: AddReportDataService, private router: Router, private activatedRoute: ActivatedRoute, private sharedService:SharedService) { }

  ngOnInit() {
    // console.log(this.value)
    let id = this.activatedRoute.snapshot.params['id'];
    this.patientId = id;

    this.sharedService.observePatient.subscribe(data => this.patientData = data)

    console.log("Shared Service", this.patientData)

    this.labtestName = this.patientData.labtestName;
    this.age = this.patientData.age;
    this.name = this.patientData.name;  
   
  }
 

}
