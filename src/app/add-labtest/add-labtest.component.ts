import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-labtest',
  templateUrl: './add-labtest.component.html',
  styleUrls: ['./add-labtest.component.css']
})
export class AddLabtestComponent implements OnInit {
  display: boolean = false;
  constructor() { }

  ngOnInit() {
  }
  showDialog() {
    this.display = true;
}
}
