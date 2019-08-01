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

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LabtestComponent,
    DepartmentComponent,
    AddLabtestComponent,
    SubTestComponent,
    UnitComponent,
    NormalValueComponent
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
    ReactiveFormsModule

  //  AccordionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
