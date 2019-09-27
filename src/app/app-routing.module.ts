import { ProcessReportsComponent } from "./process-reports/process-reports.component";
import { LabtestComponent } from "./labtest/labtest.component";
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowORprocessReportComponent } from './show-orprocess-report/show-orprocess-report.component';
import { ProcessReportAgainstPatientComponent } from './process-report-against-patient/process-report-against-patient.component';
import { MainLabtestComponent } from './main-labtest/main-labtest.component';
import { AddLabtestformComponent } from './add-labtestform/add-labtestform.component';
import { HmsLandingPageComponent } from './hms-landing-page/hms-landing-page.component';

const routes: Routes = [
  {
    path: 'showOrProcessReports', component: ShowORprocessReportComponent
  },
  {
    path: 'lab', component: HmsLandingPageComponent
  },
  {
    path: '', redirectTo: '/lab', pathMatch: 'full'
  },
  {
    path: "labtestComponent", component: LabtestComponent
  },
  {
    path: 'showORprocessReport', component: ShowORprocessReportComponent
  }, {
    path: "processReports", component: ProcessReportsComponent
  }, {
    path: "processReportsAgainstsPatient/:id", component: ProcessReportAgainstPatientComponent
  },
  {
    path: "mainLabtestComponent", component:MainLabtestComponent
  },
  {
    path: "addlabtestFormComponent", component : AddLabtestformComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
