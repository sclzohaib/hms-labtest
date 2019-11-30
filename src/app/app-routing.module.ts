import { ProcessReportsComponent } from "./process-reports/process-reports.component";
import { LabtestComponent } from "./labtest/labtest.component";
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowORprocessReportComponent } from './show-orprocess-report/show-orprocess-report.component';
import { ProcessReportAgainstPatientComponent } from './process-report-against-patient/process-report-against-patient.component';
import { MainLabtestComponent } from './main-labtest/main-labtest.component';
import { AddLabtestformComponent } from './add-labtestform/add-labtestform.component';
import { HmsLandingPageComponent } from './hms-landing-page/hms-landing-page.component';
import { AuthGuardService } from './guards/auth-guard.service';

const routes: Routes = [
  {
    path: '', redirectTo: '/lab', pathMatch: 'full'
  },
  {
    path: 'lab', component: HmsLandingPageComponent
  },
  {
    path: 'showOrProcessReports', canActivate: [AuthGuardService], component: ShowORprocessReportComponent
  },
  {
    path: "labtestComponent", canActivate: [AuthGuardService], component: LabtestComponent
  },
  {
    path: 'showORprocessReport', canActivate: [AuthGuardService],component: ShowORprocessReportComponent
  }, {
    path: "processReports", canActivate: [AuthGuardService],component: ProcessReportsComponent
  }, {
    path: "processReportsAgainstsPatient/:id", canActivate: [AuthGuardService],component: ProcessReportAgainstPatientComponent
  },
  {
    path: "mainLabtestComponent", canActivate: [AuthGuardService],component: MainLabtestComponent
  },
  {
    path: "addlabtestFormComponent", canActivate: [AuthGuardService],component: AddLabtestformComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
