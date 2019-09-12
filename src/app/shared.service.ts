import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private currentPatientData = new BehaviorSubject([]);
  observePatient = this.currentPatientData.asObservable();
  

  constructor() { }

  changeData(value:any){
    this.currentPatientData.next(value);
  }
}
