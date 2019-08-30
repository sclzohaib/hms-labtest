import { Car } from "./car";
import { SelectItem } from "primeng/components/common/selectitem";
import { AddReportDataService } from "./../Services/add-report-data.service";
import { Router } from "@angular/router";
import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-process-report-against-patient',
  templateUrl: './process-report-against-patient.component.html',
  styleUrls: ['./process-report-against-patient.component.css']
})
export class ProcessReportAgainstPatientComponent implements OnInit {
  reports :SelectItem[];
  selectedReport = null;
  isReportSelect = false;
  brands : SelectItem[];
  cars: Car[];
  remarks;

  clonedCars: { [s: string]: Car; } = {};

  constructor(private router:Router,private _addService: AddReportDataService,
    private messageService:MessageService) { }

  ngOnInit() {
    this.reports = [
      { label: 'Blood Test', value: 'BloodTest' },
      { label: 'Urine Test', value: 'Urine Test' },
      { label: 'Pregnancy Test', value: 'Pregnancy Test' },
    ];



    this.brands = [
      {label: 'Audi', value: 'Audi'},
      {label: 'BMW', value: 'BMW'},
      {label: 'Fiat', value: 'Fiat'},
      {label: 'Ford', value: 'Ford'},
      {label: 'Honda', value: 'Honda'},
      {label: 'Jaguar', value: 'Jaguar'},
      {label: 'Mercedes', value: 'Mercedes'},
      {label: 'Renault', value: 'Renault'},
      {label: 'VW', value: 'VW'},
      {label: 'Volvo', value: 'Volvo'}
  ];
  }







  goToProcessReportPage(){
    this.router.navigate(['processReports'])
  }

  getReports(){

    this._addService.getAllCreatedReports().subscribe((rep=>{
      console.log("=========>",)
        rep.map(e=>{
            this.reports.push({
              label:e.reportName,
              value:e
            });
        })

  })
  )
    if(this.selectedReport!=null){
      console.log("selected report",this.selectedReport)
      this.isReportSelect = true;
    }
    else {
      this.isReportSelect = false;
    }
}


onRowEditInit(car: Car) {
  this.clonedCars[car.vin] = {...car};
}

onRowEditSave(car: Car) {
  if (car.year > 0) {
      delete this.clonedCars[car.vin];
      this.messageService.add({severity:'success', summary: 'Success', detail:'Car is updated'});
  }
  else {
      this.messageService.add({severity:'error', summary: 'Error', detail:'Year is required'});
  }
}

onRowEditCancel(car: Car, index: number) {
  this.cars[index] = this.clonedCars[car.vin];
  delete this.clonedCars[car.vin];
}


}


