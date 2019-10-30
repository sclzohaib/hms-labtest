import { AddReportDataService } from "./../Services/add-report-data.service";
import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { Subtest } from "./Subtest";
import { MessageService } from 'primeng/api';

@Component({
  selector: "app-sub-test",
  templateUrl: "./sub-test.component.html",
  styleUrls: ["./sub-test.component.css"]
})
export class SubTestComponent implements OnInit {
  @Output() valueChange = new EventEmitter();
  @Input() public editSubtest;

  display: boolean = false;
  heading;
  checkAction;
  // labtest object
  subtestObj: Subtest = new Subtest();

  constructor(private _addserivice: AddReportDataService,private messageservice:MessageService) {}

  ngOnInit() {}
  showDialog(value: any) {
    this.checkAction = value;

    if (value == "add") {
      this.display = true;
      this.heading = "ADD SUBTEST";
      this.subtestObj.subtestName = "";
    } else if (value == "edit") {
      if (this.editSubtest.normalvalueName != "" || this.editSubtest.normalvalueName != undefined) {
      // console.log("============>", this.editSubtest);
      this.display = true;
      this.heading = "EDIT SUBTEST";
      // if (this.subtestObj.subtestName != undefined) {
        if (this.editSubtest.subtestName != "") {
          // console.log("======================>", this.editSubtest);
          this.subtestObj.subtestName = this.editSubtest.subtestName;
        }
      // }
      }
    }
  }
  saveSubtest(value) {
    // console.log(value);
    if (this.checkAction == "add") {
      this._addserivice.addSubtest(value).subscribe(res => {
        if(res=="SUCCESSFULL"){
          this.valueChange.emit();
          this.messageservice.add({
            key: 'a',
            severity: "success",
            summary: "Succesfully",
            detail: "subtest  successfully added!"
          });
          console.log("this is the response", res);
        }
        else if(res=="DUPLICATE"){
          this.messageservice.add({
            key: 'a',
            severity: "warn",
            summary: "Duplicate",
            detail: "Already Present"
          });
        }
       
      },error=>{
        this.messageservice.add({
          key:'a',
          severity: "error",
          summary: "error occured",
          detail: "something went wrong!"

        });
      

      });
    } else if (this.checkAction == "edit") {
      let id = this.editSubtest.id;
      this.editSubtest.subtestName = this.subtestObj.subtestName;
      // console.log("this is updtaed subtest", this.subtestObj);
      this._addserivice.editSubtest(id, value).subscribe(res => {
        this.valueChange.emit();
        this.messageservice.add({
        key:'a',
          severity: "success",
          summary: "Succesfully",
          detail: "subtest  successfully edited!"

        });
      
        console.log("=====>", res);
      },error=>{

        this.messageservice.add({
          key:'a',
          severity: "error",
          summary: "error occured",
          detail: "!something went wrong"

        });
      


      });
    }
  }
}
