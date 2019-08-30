import { ProcessReportsComponent } from "./process-reports/process-reports.component";
import { LabtestComponent } from "./labtest/labtest.component";
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowORprocessReportComponent } from './show-orprocess-report/show-orprocess-report.component';
import { ProcessReportAgainstPatientComponent } from './process-report-against-patient/process-report-against-patient.component';

const routes: Routes = [
  {
    path: '', component: ShowORprocessReportComponent
  },
  {
    path: "labtestComponent", component: LabtestComponent
  },
  {
    path: 'showORprocessReport', component: ShowORprocessReportComponent
  }, {
    path: "processReports", component: ProcessReportsComponent
  }, {
    path: "processReportsAgainstsPatient", component: ProcessReportAgainstPatientComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
