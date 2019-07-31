import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-normal-value',
  templateUrl: './normal-value.component.html',
  styleUrls: ['./normal-value.component.css']
})
export class NormalValueComponent implements OnInit {
  display: boolean = false;
  constructor() { }

  ngOnInit() {
  }
  showDialog() {
    this.display = true;
}
}
