import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-orprocess-report',
  templateUrl: './show-orprocess-report.component.html',
  styleUrls: ['./show-orprocess-report.component.css']
})
export class ShowORprocessReportComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  routerToGenerateReport(){
    this.router.navigate(['/labtestComponent/']);
  }
  routerToProcessReport(){
    this.router.navigate(['processReports']);
  }
  routeTomainLabtest(){
    this.router.navigate(['mainLabtestComponent']);
    
  }
}
