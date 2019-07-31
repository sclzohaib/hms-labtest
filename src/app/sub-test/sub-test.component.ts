import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub-test',
  templateUrl: './sub-test.component.html',
  styleUrls: ['./sub-test.component.css']
})
export class SubTestComponent implements OnInit {
  display: boolean = false;
  constructor() { }

  ngOnInit() {
  }
  showDialog() {
    this.display = true;
}
}
