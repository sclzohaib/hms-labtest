import { AddReportDataService } from "./../Services/add-report-data.service";
import { NormalValue } from "./NormalValue";
import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { MessageService } from 'primeng/api';

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

  constructor(private _addService: AddReportDataService, private messageservice: MessageService) { }

  ngOnInit() { }
  showDialog(value: any) {
    this.checkAction = value;

    if (value == "add") {
      this.display = true;
      this.heading = "ADD NORMAL VALUE";
      this.normalvalue.normalvalueName = "";

    }


    else if (value == "edit") {
      if (this.editnormalValue.normalvalueName != "" || this.editnormalValue.normalvalueName != undefined) {

        // console.log("============>", this.normalvalue);
        this.display = true;
        this.heading = "EDIT NORMAL VALUE";

        // if(this.normalvalue.normalvalueName!=undefined){

        if (this.editnormalValue.normalvalueName != "") {
          // console.log("======================>", this.normalvalue);

          this.normalvalue.normalvalueName = this.editnormalValue.normalvalueName;
          // }
        }
      }

    }



  }
  saveNormalvalue(value) {

    if (this.checkAction == "add") {
      this._addService.addNormalValues(value).subscribe(res => {
        this.valueChange.emit();
        this.messageservice.add({
          key: 'a',
          severity: "success",
          summary: "Succesfully",
          detail: "normal value successfully added!"

        });
        console.log(res);
      }, error => {
        this.messageservice.add({
          key: 'a',
          severity: "error",
          summary: "error occured",
          detail: "something went wrong!"

        });


      });
    } else if (this.checkAction == "edit") {
      let id = this.editnormalValue.id;
      this._addService.editNormalvalue(id, value).subscribe(response => {
        this.valueChange.emit();
        this.messageservice.add({
          key: 'a',
          severity: "success",
          summary: "Succesfully",
          detail: "normal value successfully edited!"

        });

        console.log(response);
      }, error => {

        this.messageservice.add({
          key: 'a',
          severity: "error",
          summary: "error occured",
          detail: "something went wrong!"

        });
      });
    }
  }
  numberOnly(event): boolean {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57 || charCode < 44)) {
      return false;
    }
    return true;
  }

}
