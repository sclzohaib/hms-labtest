import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.css']
})
export class UnitComponent implements OnInit {
  display: boolean = false;
  constructor() { }

  ngOnInit() {
  }
  showDialog() {
    this.display = true;
}
}
