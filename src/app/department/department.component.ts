import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  display: boolean = false;
  constructor() { }

  ngOnInit() {
  }
  

    showDialog() {
        this.display = true;
    }
}
