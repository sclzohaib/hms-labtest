import { MessageService } from "primeng/api";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {DropdownModule} from 'primeng/dropdown';
import {DialogModule} from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';
//import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
//import {MenuItem} from 'primeng/api';                 //api
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LabtestComponent } from './labtest/labtest.component';
import { DepartmentComponent } from './department/department.component';
import { AddLabtestComponent } from './add-labtest/add-labtest.component';
import { SubTestComponent } from './sub-test/sub-test.component';
import { UnitComponent } from './unit/unit.component';
import { NormalValueComponent } from './normal-value/normal-value.component';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';
import { NgForm } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReportTableComponent } from './labtest/report-table/report-table.component';
import {TableModule} from 'primeng/table';
import {TooltipModule} from 'primeng/tooltip';
import { ShowORprocessReportComponent } from './show-orprocess-report/show-orprocess-report.component';
import { ProcessReportsComponent } from './process-reports/process-reports.component';
import { ProcessReportAgainstPatientComponent } from './process-report-against-patient/process-report-against-patient.component';
import { MonitorQuickViewComponent } from './monitor-quick-view/monitor-quick-view.component';
import {ToastModule} from 'primeng/toast';
import { BlockUIModule } from 'primeng/blockui';
import { MainLabtestComponent } from './main-labtest/main-labtest.component';
import { AddLabtestformComponent } from './add-labtestform/add-labtestform.component';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { HmsLandingPageComponent } from './hms-landing-page/hms-landing-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LabtestComponent,
    DepartmentComponent,
    AddLabtestComponent,
    SubTestComponent,
    UnitComponent,
    NormalValueComponent,
    ReportTableComponent,
    ShowORprocessReportComponent,
    ProcessReportsComponent,
    ProcessReportAgainstPatientComponent,
    MonitorQuickViewComponent,
    MainLabtestComponent,
    AddLabtestformComponent,
    HmsLandingPageComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    DropdownModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CardModule,
    ButtonModule,
    DialogModule,
    InputTextModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    TooltipModule,
    ToastModule,
    BlockUIModule,
    ProgressSpinnerModule

    //  AccordionModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule {}
