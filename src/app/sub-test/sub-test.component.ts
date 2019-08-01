import { AddReportDataService } from "./../Services/add-report-data.service";
import { Component, OnInit } from '@angular/core';
import { Subtest } from './Subtest';

@Component({
  selector: 'app-sub-test',
  templateUrl: './sub-test.component.html',
  styleUrls: ['./sub-test.component.css']
})
export class SubTestComponent implements OnInit {

  display: boolean = false;
  // labtest object
  subtestObj: Subtest = new Subtest();
  constructor(private _addserivice: AddReportDataService) { }

  ngOnInit() {
  }
  showDialog() {
    this.display = true;
  }
  public saveSubtest(value: any) {
    console.log(value);
    this._addserivice.addSubtest(value).subscribe((res => {
      console.log("this is the response", res)
    }))
  }
}
