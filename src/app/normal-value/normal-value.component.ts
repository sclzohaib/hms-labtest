import { AddReportDataService } from "./../Services/add-report-data.service";
import { NormalValue } from "./NormalValue";
import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";

@Component({
  selector: "app-normal-value",
  templateUrl: "./normal-value.component.html",
  styleUrls: ["./normal-value.component.css"]
})
export class NormalValueComponent implements OnInit {
  @Output() valueChange = new EventEmitter();
  display: boolean = false;
  normalvalue: NormalValue = new NormalValue();
  @Input() editnormalValue;
  heading;
  checkAction;

  constructor(private _addService: AddReportDataService) { }

  ngOnInit() { }
  showDialog(value: any) {
    this.checkAction = value;

    if (value == "add") {
      this.display = true;
      this.heading = "ADD NORMAL VALUE";
      this.normalvalue.normalvalueName = "";

    }
    else if (value == "edit") {
      console.log("============>", this.normalvalue);
      this.display = true;
      this.heading = "EDIT NORMAL VALUE";

      // if(this.normalvalue.normalvalueName!=undefined){

        if (this.editnormalValue.normalvalueName != "") {
          console.log("======================>", this.normalvalue);

          this.normalvalue.normalvalueName = this.editnormalValue.normalvalueName;
        // }
      }

    }

  }
  saveNormalvalue(value) {
    if (this.checkAction == "add") {
      this._addService.addNormalValues(value).subscribe(res => {
        this.valueChange.emit();
        console.log(res);
      });
    } else if (this.checkAction == "edit") {
      let id = this.editnormalValue.id;
      this._addService.editNormalvalue(id, value).subscribe(response => {
        this.valueChange.emit();
        console.log(response);
      });
    }
  }
}
