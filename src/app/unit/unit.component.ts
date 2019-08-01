import { AddReportDataService } from "./../Services/add-report-data.service";
import { Unit } from "./Unit";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-unit",
  templateUrl: "./unit.component.html",
  styleUrls: ["./unit.component.css"]
})
export class UnitComponent implements OnInit {
  display: boolean = false;
  unit: Unit = new Unit();

  constructor(private _addService: AddReportDataService) { }

  ngOnInit() { }
  showDialog() {
    this.display = true;
  }
  saveUnit(value) {
    this._addService.addUnits(value).subscribe((res => {
      console.log(res);
    }))
  }
}
