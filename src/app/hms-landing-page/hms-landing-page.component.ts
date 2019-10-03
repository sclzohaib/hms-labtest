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
  showErrorMessage: Boolean = false;

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
    // var output = this.service.checkUserandPass(uname, p);
    this.service.checkUserandPass(uname, p).subscribe(
      res => {
        console.log('toker', res);
         var getType = res.result.userType.toUpperCase();

        if (getType == "OPD" || getType=="PHARMACY") {
            this.errorMethod("Unauthorized for LAB application")
          this.showErrorMessage = true;
        }


        else if (getType == "LAB") {
          this.credentials(res);
          this.succesMethod();
          this.showErrorMessage = false;
          this.goToLab();
        }

        else if(getType="ADMIN"){
          this.credentials(res);
          this.succesMethod();
          this.showErrorMessage = false;
          this.goToLab();
        }

        else {
          this.showErrorMessage = true;
         this.errorMethod("Not Authorized");
        }

      },
      error => {
        this.showErrorMessage = true;
        console.log(error);
       this.errorMethod("Not Authorized")
      }
    );
  }


  credentials(res) {
    sessionStorage.setItem('token', res.result.token);
    this.userName = sessionStorage.setItem('username', res.result.username);
    this.userType = sessionStorage.setItem('userType', res.result.userType);
    this.getType = sessionStorage.getItem('userType').toUpperCase();
   
  }

  succesMethod() {
    this.messageService.add({
      severity: 'success',
      summary: 'Service Message',
      detail: 'Login Succesful'
    });
  }



  errorMethod(msg:String){
    this.messageService.add({
      severity: 'error',
      summary: msg.toString(),
      detail: 'retry login'
    });
  }


 


  // goToOpd() {
  //   setTimeout(() => {
  //     window.location.href = "http://localhost:8080/mainscreen"
  //   }, 1000);
  // }


  
  // goToPharmacy() {
  //   setTimeout(() => {
  //     window.location.href = "http://localhost:8081/sales"
  //   }, 1000);
  // }

  goToLab() {
    setTimeout(() => {
      this.router.navigate(['showOrProcessReports']);
    }, 1000);
  }

  // check(uname: string, p: string) {
    
  //   this.service.checkUserandPass(uname, p).subscribe(
  //     res => {
  //       console.log('toker', res);
  //       sessionStorage.setItem('token', res.result.token);
  //        this.token = sessionStorage.setItem('token', res.result.token);
  //        this.userName = sessionStorage.setItem('username', res.result.username);
  //        this.userType = sessionStorage.setItem('userType', res.result.userType);
  //        this.getType = sessionStorage.getItem('userType').toUpperCase();

  //       this.succesMethod();
  //       this.goToLabApplication();

  //     },
  //     error => {
  //       console.log(error);
  //       this.messageService.add({
  //         severity: 'error',
  //         summary: 'Service Message',
  //         detail: 'Wrong username and password'
  //       });
  //     }
  //   );
  // }

  // succesMethod() {
    
  //   this.messageService.add({
  //     severity: 'success',
  //     summary: 'Service Message',
  //     detail: 'Login Succesful'
  //   });
  // }


  // goToLabApplication() {
  //   setTimeout(() => {
  //     this.router.navigate(['/showOrProcessReports'])
  //   }, 1000);
  // }
 


}
