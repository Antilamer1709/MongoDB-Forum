import {Component, OnInit} from '@angular/core';
import {CommonComponent} from "./common/common-component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends CommonComponent implements OnInit  {

  constructor() {
    super();
  }

  ngOnInit() {

  }

}
