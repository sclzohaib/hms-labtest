import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { AddReportDataService } from '../Services/add-report-data.service';
import { Location } from '@angular/common';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-hms-landing-page',
  templateUrl: './hms-landing-page.component.html',
  styleUrls: ['./hms-landing-page.component.css']
})
export class HmsLandingPageComponent implements OnInit {
  deleteAllHistory;
  token;
  userName;
  userType;
  getType
  labUrl;
  opdUrl;
  pharmacyUrl;

  constructor(
    private router: Router,
    private messageService: MessageService,
    private service: AddReportDataService,
    private _location: Location
  ) { }
  ngOnInit() {
    // this.nav.hide();
    this.deleteAllHistory = this._location.isCurrentPathEqualTo('lab');
    this.labUrl = environment.labUrl;
    this.opdUrl = environment.opdUrl;
    this.pharmacyUrl = environment.pharmacyUrl;

  }

    console(v1,v2){
      console.log(v1,v2)
    }

  check(uname: string, p: string) {
    
    this.service.checkUserandPass(uname, p).subscribe(
      res => {
        console.log('toker', res);
        sessionStorage.setItem('token', res.result.token);
         this.token = sessionStorage.setItem('token', res.result.token);
         this.userName = sessionStorage.setItem('username', res.result.username);
         this.userType = sessionStorage.setItem('userType', res.result.userType);
         this.getType = sessionStorage.getItem('userType').toUpperCase();

        this.succesMethod();
        this.goToLabApplication();

      },
      error => {
        console.log(error);
        this.messageService.add({
          severity: 'error',
          summary: 'Service Message',
          detail: 'Wrong username and password'
        });
      }
    );
  }

  succesMethod() {
    
    this.messageService.add({
      severity: 'success',
      summary: 'Service Message',
      detail: 'Login Succesful'
    });
  }


  goToLabApplication() {

    setTimeout(() => {
      this.router.navigate(['/showOrProcessReports'])
    }, 1000);
  }
 


}
