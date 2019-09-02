import { Component, OnInit } from '@angular/core';
import { LabtestServiceService } from '../main-labtest/labtest-service.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { Addlabtestform } from './addlabtestform'

@Component({
  selector: 'app-add-labtestform',
  templateUrl: './add-labtestform.component.html',
  styleUrls: ['./add-labtestform.component.css']
})
export class AddLabtestformComponent implements OnInit {

  cities1: any = [];

  loader: any = false;
  selectedCity1: any;

  test: Addlabtestform = new Addlabtestform();

  constructor(
    private labservice: LabtestServiceService,
    private messageService: MessageService,
    private route: Router
  ) {
    this.cities1 = [{ label: 'Categories', value: null }];
  }
  numberOnly(event): boolean {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

  ngOnInit() {
    this.labservice.getcategory().subscribe(data => {
      console.log(data);
      data.map(v => {
        let obj = {
          label: v.category,
          value: v.category
        };
        this.cities1.push(obj);
      });
    });
  }

  back() {
    history.back();
  }

  submitlab() {
    this.loader = true;

   // this.test.category = this.selectedCity1;
    console.log(this.test);

    this.labservice.postlabtest(this.test).subscribe(
      d => {
        this.loader = false;
        this.messageService.add({
          severity: 'success',
          summary: 'Service Message',
          detail: Object.keys(d)[0]
        });

        console.log(d);
      },
      error => {
        this.loader = false;
        console.log(error);
      }
    );
  }

  toAddLabCat() {
    this.route.navigate(['/addlabcat']);
  }

}
