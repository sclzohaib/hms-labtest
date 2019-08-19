import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { INFERRED_TYPE } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-report-table',
  templateUrl: './report-table.component.html',
  styleUrls: ['./report-table.component.css']
})
export class ReportTableComponent implements OnInit {

  @Input() public generateReport;
  @Input() public sendReport;
  @Input() public labtestName;
  @Input() public deptName;
  cols :any[];

  constructor() { }

  // ngAfterContentInit() {

  //   console.log(this.labtestName)
  // }

  ngOnChanges(changes: SimpleChanges) {

    // this.labtestName = changes.labtestName.currentValue;
    console.log(changes)
    this.cols = [
      {field : 'subtestName',header:'Subtests'},
      {field : 'normalvalueName',header:'Normal Values'},
      {field : 'unitName',header:'Unit Names'}
    ]

    console.log("===============>",this.generateReport);
  }


  ngOnInit() {
    console.log("================>",this.sendReport)
    console.log(this.deptName)
  }

}
