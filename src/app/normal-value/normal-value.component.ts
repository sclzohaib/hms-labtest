import { AddReportDataService } from "./../Services/add-report-data.service";
import { NormalValue } from "./NormalValue";
import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-normal-value",
  templateUrl: "./normal-value.component.html",
  styleUrls: ["./normal-value.component.css"]
})
export class NormalValueComponent implements OnInit {
  @Output() valueChange = new EventEmitter();
  display: boolean = false;
  normalvalue: NormalValue = new NormalValue();

  constructor(private _addService: AddReportDataService) {}

  ngOnInit() {}
  showDialog() {
    this.display = true;
  }
  saveNormalvalue(value) {
    this._addService.addNormalValues(value).subscribe(res => {
      console.log(res);
      this.valueChange.emit();
    });
  }
}
