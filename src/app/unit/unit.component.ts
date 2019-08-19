import { AddReportDataService } from "./../Services/add-report-data.service";
import { Unit } from "./Unit";
import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { EmitterVisitorContext } from '@angular/compiler';

@Component({
  selector: "app-unit",
  templateUrl: "./unit.component.html",
  styleUrls: ["./unit.component.css"]
})
export class UnitComponent implements OnInit {
  @Output() valueChange = new EventEmitter();
  @Input() editUnittest;
  display: boolean = false;
  unit: Unit = new Unit();
  heading;
  checkAction;


  constructor(private _addService: AddReportDataService) { }

  ngOnInit() {

  }


  showDialog(value:any) {
    this.checkAction = value;

    if(value =='add'){
      this.display = true;
      this.heading = 'ADD UNIT';
      this.unit.unitName = "";

    }
    else if(value == "edit")
    {
      console.log('============>',this.editUnittest);
      this.display = true;
      this.heading = 'EDIT UNIT';

      // if(this.unit.unitName!=undefined){

        if (this.editUnittest.unitName != "")
        {
          console.log('======================>', this.editUnittest);
          this.unit.unitName = this.editUnittest.unitName;
        }
      // }

    }

  }

  saveUnit(value) {
    if(this.checkAction == "add")
    {
      this._addService.addUnits(value).subscribe((res => {
        console.log("this is the response", res)
        this.valueChange.emit();
      }));
    }
    else if(this.checkAction == "edit")
    {
      let id = this.editUnittest.id;
        this._addService.editUnit(id,value).subscribe((res=>{
            console.log("=====>",res);
            this.valueChange.emit();
        }))
    }

  }
}
